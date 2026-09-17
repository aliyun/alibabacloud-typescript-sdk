// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class CredentialSubmitIntlV2AdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * The field validation rule configuration. The value is a JSON string.
   * 
   * @example
   * {
   * 	"address_rule": "Includes Adrress Hangzhou ***",
   * 	"name_rule": "Includes Name  Zhang*",
   * 	"date_of_issue_rule": "Whthin 2026.05.20"
   * }
   */
  checkRuleConfig?: string;
  /**
   * @remarks
   * The Base64-encoded image. If you choose this method to submit a photo, check the photo size and do not submit an excessively large photo.
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
  credentialOcrPictureFileObject?: Readable;
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
   * 
   * - 01: Transaction voucher, which includes electronic bill images for utilities such as water, electricity, gas, and credit cards.
   * - 02: Vehicle registration certificate.
   * - 03: Transfer transaction record.
   * - 04: Proof of address (POA).
   * 
   * This parameter is required.
   * 
   * @example
   * 02
   */
  docType?: string;
  /**
   * @remarks
   * The type of the input material. Valid values:
   * 
   * - IMAGE (default): image.
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
   * The unique identifier of the merchant request. The value is a 32-character alphanumeric string.
   * 
   * The first few characters consist of a custom abbreviation defined by the merchant, the middle part can contain a time segment, and the last part can use a random or incremental sequence.
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
   * 0101: electronic bill address and name module (extracts address and name modules through intelligent analysis).
   * 0201: 
   * 0301: transfer transaction amount information.
   * 0401: POA credential extraction information.
   * 
   * This parameter is required.
   * 
   * @example
   * 0201
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
   * Specifies whether to enable standardization of key fields recognized by OCR. Valid values:
   * - 0: Disabled (default). 
   * - 1: Enabled.
   * 
   * @example
   * 0
   */
  ocrValueStandard?: string;
  /**
   * @remarks
   * The product solution to use. Set the value to CREDENTIAL_RECOGNITION.
   * 
   * This parameter is required.
   * 
   * @example
   * CREDENTIAL_RECOGNITION
   */
  productCode?: string;
  /**
   * @remarks
   * The custom verification scenario ID. You can use this scenario ID to query related records in the console. The value is a combination of up to 10 letters, digits, or underscores.
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
      credentialOcrPictureFileObject: 'CredentialOcrPictureFile',
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
      credentialOcrPictureFileObject: 'Readable',
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

