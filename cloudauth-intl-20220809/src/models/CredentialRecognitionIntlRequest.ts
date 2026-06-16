// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialRecognitionIntlRequest extends $dara.Model {
  /**
   * @remarks
   * The Base64-encoded image. If you choose to pass in the image by using IdOcrPictureBase64 (Base64-encoded photo), check the photo size and do not pass in an excessively large photo.
   * 
   * @example
   * base64
   */
  credentialOcrPictureBase64?: string;
  /**
   * @remarks
   * The URL of the image. The URL must be a publicly accessible HTTP or HTTPS link.
   * 
   * @example
   * https://***
   */
  credentialOcrPictureUrl?: string;
  /**
   * @remarks
   * The credential type. Valid values:
   * - 01: transaction credential (including electronic bill images for water, electricity, gas, credit cards, and other types).
   * 
   * This parameter is required.
   * 
   * @example
   * 01
   */
  docType?: string;
  /**
   * @remarks
   * Specifies whether to enable tampering detection. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  fraudCheck?: string;
  /**
   * @remarks
   * The extraction type. Valid values:
   * - 0101: electronic bill address and name module (extracts the address and name module through intelligent analysis).
   * 
   * This parameter is required.
   * 
   * @example
   * 0101
   */
  ocrArea?: string;
  /**
   * @remarks
   * The product solution to use. Set this to CREDENTIAL_RECOGNITION.
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

