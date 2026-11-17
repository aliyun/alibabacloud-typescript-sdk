// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialSubmitIntlRequest extends $dara.Model {
  /**
   * @remarks
   * The field validation rule configuration, which is a JSON string.
   * 
   * @example
   * {
   * 	"address_rule": "Includes Adrress Hangzhou***",
   * 	"name_rule": "Includes Name  Zhang*",
   * 	"date_of_issue_rule": "Whthin 2026.05.20"
   * }
   */
  checkRuleConfig?: string;
  /**
   * @remarks
   * The Base64-encoded image. If you choose this method to upload the image, check the image size and do not upload an excessively large image.
   * 
   * @example
   * base64
   */
  credentialOcrPictureBase64?: string;
  /**
   * @remarks
   * The image URL, which must be a publicly accessible HTTP or HTTPS link.
   * 
   * @example
   * https://***
   */
  credentialOcrPictureUrl?: string;
  /**
   * @remarks
   * The credential type. Valid values:
   * - 02: Vehicle registration certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 02
   */
  docType?: string;
  /**
   * @remarks
   * The material input type. Valid values:
   * 
   * - IMAGE: Image. This is the default value.
   * 
   * - PDF: PDF format.
   * 
   * @example
   * IMAGE
   */
  fileInputType?: string;
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
   * Specifies whether to enable quality detection. Valid values: Y: Enabled. N: Disabled.
   * 
   * @example
   * Y
   */
  idQuality?: string;
  /**
   * @remarks
   * The custom unique business identifier on the merchant side, which is used for subsequent troubleshooting. The identifier can be up to 32 characters in length and can contain letters and digits. Make sure that the identifier is unique.
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
   * - 0201: Thailand vehicle registration certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0201
   */
  ocrArea?: string;
  /**
   * @remarks
   * Specifies whether to enable translation. Valid values: 0: Disabled. 1: Enabled.
   * 
   * @example
   * 1
   */
  ocrTranslation?: string;
  /**
   * @remarks
   * Specifies whether to enable OCR result standardization. Valid values: 0: Disabled. 1: Enabled.
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
  /**
   * @remarks
   * The custom authentication scene ID, which is used to query related records in the console. The ID can be up to 10 characters in length and can contain letters, digits, and underscores (_).
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
      fileInputType: 'FileInputType',
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
      fileInputType: 'string',
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

