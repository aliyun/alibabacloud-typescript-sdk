// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class DocOcrMaxV2AdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable authoritative data source verification to enhance document anti-forgery capabilities. Valid values:
   * 
   * - **T**: enabled.
   * 
   * - **F** (default): disabled.
   * 
   * > 
   * > - **Applicable document types**: China resident identity card (CHN01001) and China mainland driver\\"s license (CHN02001).
   * > - **Data transmission statement**: Enabling this parameter indicates consent to transmit the user\\"s name and document number to an authoritative data source in the Chinese mainland for consistency verification.
   * > - **Performance impact**: Enabling this parameter increases the API response time by approximately 1 to 2 seconds. Adjust the timeout settings accordingly.
   * 
   * @example
   * T
   */
  authorize?: string;
  /**
   * @remarks
   * The expected page to recognize. Valid values:
   * 
   * - 01 (default): the portrait side of the document.
   * 
   * - 02: the back side of the document.
   * 
   * @example
   * 01
   */
  docPage?: string;
  /**
   * @remarks
   * The document type.
   * - Format: country code + document type abbreviation + page (optional).
   * 
   * Note:
   * - OcrModel = 0: DocType is required. Specify the document type. The existing logic remains unchanged.
   * - OcrModel = 1 or 2: DocType must be left empty.
   * 
   * @example
   * CHN01001
   */
  docType?: string;
  /**
   * @remarks
   * The Base64-encoded image of the identity document.
   * 
   * If you use IdOcrPictureBase64 to pass in the document image, check the image size and do not pass in an excessively large image.
   * 
   * @example
   * base64
   */
  idOcrPictureBase64?: string;
  /**
   * @remarks
   * The file stream of the document image.
   * 
   * @example
   * InputStream
   */
  idOcrPictureFileObject?: Readable;
  /**
   * @remarks
   * The URL of the identity document image. The URL must be a publicly accessible HTTP or HTTPS link.
   * 
   * @example
   * https://***********.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
   */
  idOcrPictureUrl?: string;
  /**
   * @remarks
   * Specifies whether to enable the document anti-forgery feature. Valid values:
   * 
   * - T: enabled.
   * 
   * - F (default): disabled.
   * 
   * @example
   * F
   */
  idSpoof?: string;
  /**
   * @remarks
   * The custom OCR quality detection threshold mode. Valid values:
   * 
   * - 0: system default.
   * - 1: strict mode.
   * - 2: loose mode.
   * - 3 (default): quality detection disabled.
   * 
   * @example
   * 0
   */
  idThreshold?: string;
  /**
   * @remarks
   * The merchant-defined unique business identifier, used for subsequent troubleshooting. The value can contain letters and digits, with a maximum length of 32 characters. Make sure the value is unique.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The custom user ID, or another identifier that can identify a specific user, such as a phone number or email address.
   * 
   * Hash or otherwise desensitize this field value before passing it in.
   * 
   * @example
   * 123456789
   */
  merchantUserId?: string;
  /**
   * @remarks
   * The OCR recognition mode. Valid values:
   * 
   * - 0: general document recognition mode (default).
   * 
   * - 1: automatic document classification mode.
   * 
   * - 2: automatic document classification and general recognition mode.
   * 
   * @example
   * 0
   */
  ocrModel?: string;
  /**
   * @remarks
   * Specifies whether to enable OCR key field standardization. Valid values:
   * 
   * - 0 (default): disabled.
   * - 1: enabled.
   * 
   * @example
   * 0
   */
  ocrValueStandard?: string;
  /**
   * @remarks
   * The product solution to use.
   * 
   * Set this parameter to ID_OCR_MAX.
   * 
   * @example
   * ID_OCR_MAX
   */
  productCode?: string;
  /**
   * @remarks
   * The custom verification scenario ID. You can use this scenario ID to query related records in the console.
   * 
   * The value can contain letters, digits, and underscores, with a maximum length of 10 characters.
   * 
   * @example
   * 1234567890
   */
  sceneCode?: string;
  static names(): { [key: string]: string } {
    return {
      authorize: 'Authorize',
      docPage: 'DocPage',
      docType: 'DocType',
      idOcrPictureBase64: 'IdOcrPictureBase64',
      idOcrPictureFileObject: 'IdOcrPictureFile',
      idOcrPictureUrl: 'IdOcrPictureUrl',
      idSpoof: 'IdSpoof',
      idThreshold: 'IdThreshold',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      ocrModel: 'OcrModel',
      ocrValueStandard: 'OcrValueStandard',
      productCode: 'ProductCode',
      sceneCode: 'SceneCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorize: 'string',
      docPage: 'string',
      docType: 'string',
      idOcrPictureBase64: 'string',
      idOcrPictureFileObject: 'Readable',
      idOcrPictureUrl: 'string',
      idSpoof: 'string',
      idThreshold: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      ocrModel: 'string',
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

