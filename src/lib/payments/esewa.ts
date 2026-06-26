import crypto from 'crypto';

interface EsewaPaymentConfig {
  merchantId: string;
  secretKey: string;
  successUrl: string;
  failureUrl: string;
}

export class EsewaService {
  private config: EsewaPaymentConfig;
  private readonly BASE_URL = 'https://rc-epay.esewa.com.np/api/epay/main/v2/form';

  constructor(config: EsewaPaymentConfig) {
    this.config = config;
  }

  /**
   * Generates HMAC-SHA256 signature for eSewa ePay v2
   */
  private generateSignature(totalAmount: number, transactionUuid: string, productCode: string): string {
    const message = `total_amount=${totalAmount},transaction_uuid=${transactionUuid},product_code=${productCode}`;
    const hmac = crypto.createHmac('sha256', this.config.secretKey);
    hmac.update(message);
    return hmac.digest('base64');
  }

  /**
   * Initiates payment payload creation for client-side form submission
   */
  public createPaymentPayload(amount: number, transactionUuid: string) {
    const signature = this.generateSignature(amount, transactionUuid, this.config.merchantId);
    
    return {
      url: this.BASE_URL,
      formData: {
        amount: amount.toString(),
        tax_amount: "0",
        total_amount: amount.toString(),
        transaction_uuid: transactionUuid,
        product_code: this.config.merchantId,
        product_service_charge: "0",
        product_delivery_charge: "0",
        success_url: this.config.successUrl,
        failure_url: this.config.failureUrl,
        signed_field_names: "total_amount,transaction_uuid,product_code",
        signature: signature
      }
    };
  }

  /**
   * Verifies incoming webhook/success callback signature
   */
  public verifyCallbackSignature(encodedData: string): boolean {
    try {
      const decodedData = Buffer.from(encodedData, 'base64').toString('utf-8');
      const payload = JSON.parse(decodedData);
      
      const expectedSignature = this.generateSignature(
        parseFloat(payload.total_amount),
        payload.transaction_uuid,
        payload.product_code
      );

      return expectedSignature === payload.signature;
    } catch (error) {
      return false;
    }
  }
}
