// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class CredentialRecognitionIntlV2AdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * The field validation rule configuration, in JSON string format.
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
   * The Base64-encoded image. If you choose to pass in the image by using IdOcrPictureBase64 (Base64-encoded photo), check the photo size and do not pass in an excessively large photo.
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
   * - 01: transaction credential (including electronic bill images for water, electricity, gas, credit cards, and other types)
   * - 02: vehicle registration certificate
   * - 03: transfer transaction record
   * - 04: POA address proof
   * 
   * This parameter is required.
   * 
   * @example
   * 01
   */
  docType?: string;
  /**
   * @remarks
   * The input material type. Valid values:
   * 
   * - IMAGE (default): image
   * - PDF: PDF format
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
   * Specifies whether to enable quality detection. Valid values: Y (enabled) and N (disabled).
   * 
   * @example
   * Y
   */
  idQuality?: string;
  /**
   * @remarks
   * The extraction type. Valid values:
   * 
   * - 0101: electronic bill address and name module (extracts address and name modules through intelligent analysis)
   * - 0201: Thailand vehicle registration certificate
   * - 0301: transfer transaction amount information
   * - 0401: POA credential extraction information
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
   * Specifies whether to enable OCR result normalization. Valid values: 0 (disabled) and 1 (enabled).
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
      credentialOcrPictureFileObject: 'Readable',
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

