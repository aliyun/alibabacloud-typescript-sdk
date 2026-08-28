// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialRecognitionIntlRequest extends $dara.Model {
  /**
   * @remarks
   * The field check rule configuration, in JSON string format.
   * 
   * @example
   * {
   * 	"address_rule": "Includes Adrress 杭州市***",
   * 	"name_rule": "Includes Name  张*",
   * 	"date_of_issue_rule": "Whthin 2026.05.20"
   * }
   */
  checkRuleConfig?: string;
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
   * The credential type.
   * - Transaction credential: 01 (includes various electronic bill images such as water, electricity, gas, and credit card bills)
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
   * Specifies whether to enable quality detection. Valid values: Y (enabled) and N (disabled).
   * 
   * @example
   * Y
   */
  idQuality?: string;
  /**
   * @remarks
   * The extraction type:
   * - 0101: Electronic bill address and name module (extracts address and name through intelligent analysis)
   * 
   * This parameter is required.
   * 
   * @example
   * 0101
   */
  ocrArea?: string;
  /**
   * @remarks
   * Specifies whether to enable translation. Valid values: 0 (disabled) and 1 (enabled).
   * 
   * @example
   * 1
   */
  ocrTranslation?: string;
  /**
   * @remarks
   * Specifies whether to enable OCR result standardization. Valid values: 0 (disabled) and 1 (enabled).
   * 
   * @example
   * 1
   */
  ocrValueStandard?: string;
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
      checkRuleConfig: 'CheckRuleConfig',
      credentialOcrPictureBase64: 'CredentialOcrPictureBase64',
      credentialOcrPictureUrl: 'CredentialOcrPictureUrl',
      docType: 'DocType',
      fraudCheck: 'FraudCheck',
      idQuality: 'IdQuality',
      ocrArea: 'OcrArea',
      ocrTranslation: 'OcrTranslation',
      ocrValueStandard: 'OcrValueStandard',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkRuleConfig: 'string',
      credentialOcrPictureBase64: 'string',
      credentialOcrPictureUrl: 'string',
      docType: 'string',
      fraudCheck: 'string',
      idQuality: 'string',
      ocrArea: 'string',
      ocrTranslation: 'string',
      ocrValueStandard: 'string',
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

