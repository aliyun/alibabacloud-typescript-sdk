// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialSubmitIntlRequest extends $dara.Model {
  /**
   * @remarks
   * The field validation rule configuration in JSON string format.
   * 
   * @example
   * {
   * 	"address_rule": "Includes Address Hangzhou***",
   * 	"name_rule": "Includes Name Zhang*",
   * 	"date_of_issue_rule": "Whthin 2026.05.20"
   * }
   */
  checkRuleConfig?: string;
  /**
   * @remarks
   * The Base64-encoded image. If you use this method to submit a photo, check the photo size and do not submit an excessively large photo.
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
   * - 02: vehicle registration certificate
   * 
   * This parameter is required.
   * 
   * @example
   * 02
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
   * false
   */
  fraudCheck?: string;
  /**
   * @remarks
   * Specifies whether to enable quality detection. Valid values:
   * - Y: Enabled.
   * - N: Disabled.
   * 
   * @example
   * Y
   */
  idQuality?: string;
  /**
   * @remarks
   * The merchant-defined unique business identifier, used for subsequent troubleshooting. The value can be a combination of letters and numbers with a maximum length of 32 characters. Ensure that the value is unique.
   * 
   * This parameter is required.
   * 
   * @example
   * e0c34a***353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The extraction type. Valid values:
   * 
   * - 0201: Thailand vehicle registration certificate
   * 
   * This parameter is required.
   * 
   * @example
   * 0201
   */
  ocrArea?: string;
  /**
   * @remarks
   * Specifies whether to enable translation. Valid values:
   * - 0: Disabled.
   * - 1: Enabled.
   * 
   * @example
   * 1
   */
  ocrTranslation?: string;
  /**
   * @remarks
   * Specifies whether to enable OCR result standardization. Valid values:
   * - 0: Disabled.
   * - 1: Enabled.
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
  /**
   * @remarks
   * The custom authentication scenario ID. You can use this ID to query related records in the console. The value can be a combination of letters, numbers, or underscores with a maximum length of 10 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * 123****123
   */
  sceneCode?: string;
  static names(): { [key: string]: string } {
    return {
      checkRuleConfig: 'CheckRuleConfig',
      credentialOcrPictureBase64: 'CredentialOcrPictureBase64',
      credentialOcrPictureUrl: 'CredentialOcrPictureUrl',
      docType: 'DocType',
      fraudCheck: 'FraudCheck',
      idQuality: 'IdQuality',
      merchantBizId: 'MerchantBizId',
      ocrArea: 'OcrArea',
      ocrTranslation: 'OcrTranslation',
      ocrValueStandard: 'OcrValueStandard',
      productCode: 'ProductCode',
      sceneCode: 'SceneCode',
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
      merchantBizId: 'string',
      ocrArea: 'string',
      ocrTranslation: 'string',
      ocrValueStandard: 'string',
      productCode: 'string',
      sceneCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

