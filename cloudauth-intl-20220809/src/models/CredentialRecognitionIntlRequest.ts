// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialRecognitionIntlRequest extends $dara.Model {
  /**
   * @remarks
   * Base64 encoded image. If you choose to upload the photo via IdOcrPictureBase64 (photo Base64 encoding), please check the photo size and do not upload overly large photos.
   * 
   * @example
   * base64
   */
  credentialOcrPictureBase64?: string;
  /**
   * @remarks
   * Image URL, accessible over the public network via HTTP or HTTPS links.
   * 
   * @example
   * https://***
   */
  credentialOcrPictureUrl?: string;
  /**
   * @remarks
   * Voucher type.
   * - Transaction Voucher: 01 (including: water, electricity, gas, credit card, and other types of e-bill images)
   * 
   * This parameter is required.
   * 
   * @example
   * 01
   */
  docType?: string;
  /**
   * @remarks
   * Whether to enable tampering detection
   * - true: Enable
   * - false: Disable
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  fraudCheck?: string;
  /**
   * @remarks
   * Extraction type:
   * - 0101: E-bill Address & Name Module (extracts address and name modules through intelligent analysis)
   * 
   * This parameter is required.
   * 
   * @example
   * 0101
   */
  ocrArea?: string;
  /**
   * @remarks
   * The product solution to be integrated. Value: CREDENTIAL_RECOGNITION.
   * 
   * This parameter is required.
   * 
   * @example
   * CREDENTIAL_RECOGNITION
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      credentialOcrPictureBase64: 'CredentialOcrPictureBase64',
      credentialOcrPictureUrl: 'CredentialOcrPictureUrl',
      docType: 'DocType',
      fraudCheck: 'FraudCheck',
      ocrArea: 'OcrArea',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialOcrPictureBase64: 'string',
      credentialOcrPictureUrl: 'string',
      docType: 'string',
      fraudCheck: 'string',
      ocrArea: 'string',
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

