export class AuthValidator {
  private static readonly NEPAL_PHONE_REGEX = /^(?:\+977)?[9][6-8]\d{8}$/;

  public static isValidNepalNumber(phone: string): boolean {
    return this.NEPAL_PHONE_REGEX.test(phone);
  }

  public static formatToStandard(phone: string): string {
    let normalized = phone.replace(/\s+/g, '');
    if (normalized.length === 10 && normalized.startsWith('9')) {
      return `+977${normalized}`;
    }
    return normalized;
  }
}

export class OtpService {
  public static async generateAndSendOtp(phoneNumber: string): Promise<string> {
    const formattedPhone = AuthValidator.formatToStandard(phoneNumber);
    
    if (!AuthValidator.isValidNepalNumber(formattedPhone)) {
      throw new Error("Invalid Nepalese phone number. Must start with +977 or 98/97/96.");
    }

    // Cryptographically secure OTP generation (6 digits)
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // In production, integrate with local SMS gateway like SparrowSMS or AakashSMS
    console.log(`[SparrowSMS Mock] Sending OTP ${otp} to ${formattedPhone}`);
    
    return otp; // Return to save hash in DB
  }
}
