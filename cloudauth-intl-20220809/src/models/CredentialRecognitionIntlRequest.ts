// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialRecognitionIntlRequest extends $dara.Model {
  /**
   * @remarks
   * The field validation rule configuration. The value is a JSON string.
   * 
   * @example
   * {
   * 	"address_rule": "Includes Adrress Hangzhou***",
   * 	"name_rule": "Includes Name Zhang*",
   * 	"date_of_issue_rule": "Whthin 2026.05.20"
   * }
   */
  checkRuleConfig?: string;
  /**
   * @remarks
   * The Base64-encoded image. If you use the IdOcrPictureBase64 parameter to pass the Base64-encoded photo, check the photo size and do not pass oversized photos.
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
   * - 01: transaction credentials, including electronic bills for utilities such as water, electricity, and gas, as well as credit card statements.
   * 
   * This parameter is required.
   * 
   * @example
   * 01
   */
  docType?: string;
  /**
   * @remarks
   * The material input type. Valid values:
   * - IMAGE: image. This is the default value.
   * - PDF: PDF format.
   * 
   * @example
   * IMAGE
   */
  fileInputType?: string;
  /**
   * @remarks
   * Specifies whether to enable tampering detection. Valid values:
   * - true: enabled.
   * - false: disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  fraudCheck?: string;
  /**
   * @remarks
   * Specifies whether to enable the quality check. Valid values:
   * - Y: enabled.
   * - N: disabled.
   * 
   * @example
   * Y
   */
  idQuality?: string;
  /**
   * @remarks
   * The extraction type. Valid values:
   * - 0101: electronic bill address and name module. The address and name are extracted through intelligent analysis.
   * 
   * This parameter is required.
   * 
   * @example
   * 0101
   */
  ocrArea?: string;
  /**
   * @remarks
   * Specifies whether to enable translation. Valid values:
   * - 0: disabled.
   * - 1: enabled.
   * 
   * @example
   * 1
   */
  ocrTranslation?: string;
  /**
   * @remarks
   * Specifies whether to enable OCR result standardization. Valid values:
   * - 0: disabled.
   * - 1: enabled.
   * 
   * @example
   * 1
   */
  ocrValueStandard?: string;
  /**
   * @remarks
   * The product solution to be integrated. Valid value: CREDENTIAL_RECOGNITION.
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
      fileInputType: 'FileInputType',
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
      fileInputType: 'string',
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

