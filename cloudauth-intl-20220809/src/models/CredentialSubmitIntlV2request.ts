// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialSubmitIntlV2Request extends $dara.Model {
  /**
   * @remarks
   * The field validation rule configuration. The value is a JSON string.
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
   * The Base64-encoded image. If you choose this method to upload the photo, check the photo size and do not upload excessively large photos.
   * 
   * @example
   * base64
   */
  credentialOcrPictureBase64?: string;
  /**
   * @remarks
   * The image file stream.
   * 
   * @example
   * InputStream
   */
  credentialOcrPictureFile?: string;
  /**
   * @remarks
   * The image URL. The URL must be an HTTP or HTTPS link accessible over the Internet.
   * 
   * @example
   * https://***
   */
  credentialOcrPictureUrl?: string;
  /**
   * @remarks
   * The credential type. Valid values:
   * - 01: transaction credential, including electronic bill images for water, electricity, gas, and credit cards
   * - 02: vehicle registration certificate
   * - 03: transfer transaction record
   * - 04: proof of address (POA)
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
   * - IMAGE: image (default)
   * - PDF: PDF format
   * 
   * @example
   * IMAGE
   */
  fileInputType?: string;
  /**
   * @remarks
   * Specifies whether to enable tampering detection. Valid values:
   * - true: enabled
   * - false: disabled
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  fraudCheck?: string;
  /**
   * @remarks
   * Specifies whether to enable quality detection. Valid values: Y: enabled, N: disabled.
   * 
   * @example
   * Y
   */
  idQuality?: string;
  /**
   * @remarks
   * The unique identifier of the merchant request. The value is a 32-character alphanumeric string. The first few characters consist of a custom merchant abbreviation, the middle part can include a time period, and the latter part can be a random or incremental sequence.
   * 
   * This parameter is required.
   * 
   * @example
   * dso932dsjsd22
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The extraction type. Valid values:
   * - 0101: electronic bill address and name module, which extracts the address and name module through intelligent analysis
   * - 0201: 
   * - 0301: transfer transaction record amount information
   * - 0401: POA credential extraction information
   * 
   * This parameter is required.
   * 
   * @example
   * 0201
   */
  ocrArea?: string;
  /**
   * @remarks
   * Specifies whether to enable translation. Valid values: 0: disabled, 1: enabled.
   * 
   * @example
   * 1
   */
  ocrTranslation?: string;
  /**
   * @remarks
   * Specifies whether to enable standardization of key fields in OCR recognition. Valid values:
   * - 0: no (default) 
   * - 1: yes
   * 
   * @example
   * 0
   */
  ocrValueStandard?: string;
  /**
   * @remarks
   * The product solution to be integrated. Valid values: CREDENTIAL_RECOGNITION.
   * 
   * This parameter is required.
   * 
   * @example
   * CREDENTIAL_RECOGNITION
   */
  productCode?: string;
  /**
   * @remarks
   * The custom authentication scenario ID. This ID is used to query related records in the console. The value can be up to 10 characters in length and can contain letters, digits, and underscores.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890
   */
  sceneCode?: string;
  static names(): { [key: string]: string } {
    return {
      checkRuleConfig: 'CheckRuleConfig',
      credentialOcrPictureBase64: 'CredentialOcrPictureBase64',
      credentialOcrPictureFile: 'CredentialOcrPictureFile',
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
      credentialOcrPictureFile: 'string',
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

