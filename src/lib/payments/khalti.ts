interface KhaltiPaymentConfig {
  publicKey: string;
  secretKey: string;
  returnUrl: string;
  websiteUrl: string;
}

interface KhaltiInitPayload {
  return_url: string;
  website_url: string;
  amount: number; // in paisa
  purchase_order_id: string;
  purchase_order_name: string;
  customer_info: {
    name: string;
    email?: string;
    phone: string; // Must be valid Nepal number
  };
}

export class KhaltiService {
  private config: KhaltiPaymentConfig;
  private readonly INIT_URL = 'https://a.khalti.com/api/v2/epayment/initiate/';

  constructor(config: KhaltiPaymentConfig) {
    this.config = config;
  }

  /**
   * Initiates payment using Khalti v2 API
   */
  public async initiatePayment(orderId: string, amountNpr: number, customerPhone: string) {
    const amountPaisa = Math.round(amountNpr * 100); // Convert NPR to Paisa
    
    const payload: KhaltiInitPayload = {
      return_url: this.config.returnUrl,
      website_url: this.config.websiteUrl,
      amount: amountPaisa,
      purchase_order_id: orderId,
      purchase_order_name: `Order ${orderId}`,
      customer_info: {
        name: "Pasal Customer",
        phone: customerPhone
      }
    };

    const response = await fetch(this.INIT_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Key ${this.config.secretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Khalti API Error: ${await response.text()}`);
    }

    return response.json(); // Returns { pidx, payment_url, expires_at, expires_in }
  }
}
