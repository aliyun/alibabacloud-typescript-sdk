// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class CredentialRecognitionIntlV2AdvanceRequest extends $dara.Model {
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
   * The Base64-encoded image. If you choose to pass the photo by using IdOcrPictureBase64, check the photo size and do not pass excessively large photos.
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
   * The image URL. The URL must be a publicly accessible HTTP or HTTPS link.
   * 
   * @example
   * https://***
   */
  credentialOcrPictureUrl?: string;
  /**
   * @remarks
   * The credential type. Valid values:
   * - 01: transaction receipt, including electronic bills for utilities and credit cards
   * - 02: vehicle registration certificate
   * - 03: transfer transaction record
   * - 04: proof of address (POA)
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
   * - IMAGE: image
   * - PDF: PDF format
   * Default value: IMAGE.
   * 
   * @example
   * IMAGE
   */
  fileInputType?: string;
  /**
   * @remarks
   * Specifies whether to enable tampering detection. Valid values:
   * - true: enables tampering detection.
   * - false: disables tampering detection.
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
   * - Y: enables quality detection.
   * - N: disables quality detection.
   * 
   * @example
   * Y
   */
  idQuality?: string;
  /**
   * @remarks
   * The extraction type. Valid values:
   * - 0101: electronic bill address and name module, which extracts the address and name module through intelligent analysis
   * - 0201: Thailand vehicle registration certificate
   * - 0301: transfer transaction record amount information
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
   * Specifies whether to enable translation. Valid values:
   * - 0: disables translation.
   * - 1: enables translation.
   * 
   * @example
   * 1
   */
  ocrTranslation?: string;
  /**
   * @remarks
   * Specifies whether to enable OCR result standardization. Valid values:
   * - 0: disables OCR result standardization.
   * - 1: enables OCR result standardization.
   * 
   * @example
   * 0
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

