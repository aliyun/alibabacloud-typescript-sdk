// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocOcrMaxV2Request extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable authoritative data source verification to enhance the ID document anti-counterfeiting capability. Valid values:
   * - **T**: enabled.
   * - **F**: disabled (default).
   * 
   * > 
   * > - **Applicable ID document types**: Chinese resident identity card (CHN01001) and Chinese mainland driver\\"s license (CHN02001).
   * > - **Data transmission statement**: Enabling this parameter indicates that you agree to transmit the user\\"s name and ID document number to an authoritative data source in the Chinese mainland for consistency verification.
   * > - **Performance impact**: After this parameter is enabled, the API response time increases by about 1 to 2 seconds. Adjust the timeout settings accordingly.
   * 
   * @example
   * T
   */
  authorize?: string;
  /**
   * @remarks
   * The page to be recognized. Valid values:
   * - 01: the portrait side of the ID document (default).
   * - 02: the back side of the ID document.
   * 
   * @example
   * 01
   */
  docPage?: string;
  /**
   * @remarks
   * The type of the ID document.
   * - Format: country code + ID document type abbreviation + page (optional).
   * 
   * Note
   * - If OcrModel is set to 0, DocType is required and specifies the ID document type. The existing logic remains unchanged.
   * - If OcrModel is set to 1 or 2, DocType must be left empty.
   * 
   * @example
   * CHN01001
   */
  docType?: string;
  /**
   * @remarks
   * The Base64-encoded image of the ID document. If you use the IdOcrPictureBase64 parameter to pass the Base64-encoded photo of the ID document, check the photo size and do not upload excessively large photos.
   * 
   * @example
   * base64
   */
  idOcrPictureBase64?: string;
  /**
   * @remarks
   * The file stream of the ID document image.
   * 
   * @example
   * InputStream
   */
  idOcrPictureFile?: string;
  /**
   * @remarks
   * The URL of the ID document image. The URL must be a publicly accessible HTTP or HTTPS link.
   * 
   * @example
   * https://***********.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
   */
  idOcrPictureUrl?: string;
  /**
   * @remarks
   * Specifies whether to enable the ID document anti-counterfeiting feature. Valid values:
   * - T: enabled.
   * - F: disabled (default).
   * 
   * @example
   * F
   */
  idSpoof?: string;
  /**
   * @remarks
   * The custom threshold mode for OCR quality detection. Valid values:
   * - 0: system default.
   * - 1: strict mode.
   * - 2: loose mode.
   * - 3: disable quality detection (default).
   * 
   * @example
   * 0
   */
  idThreshold?: string;
  /**
   * @remarks
   * The custom unique business identifier on the merchant side, which is used for subsequent troubleshooting. The value can be up to 32 characters in length and can contain letters and digits. Make sure that the value is unique.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The custom user ID or other identifier that can identify a specific user, such as a mobile phone number or an email address. Desensitize the value of this field in advance, for example, by hashing the value.
   * 
   * @example
   * 123456789
   */
  merchantUserId?: string;
  /**
   * @remarks
   * The OCR recognition mode. Valid values:
   * - 0: general ID document recognition mode (default).
   * - 1: automatic ID document classification mode.
   * - 2: automatic ID document classification and general recognition mode.
   * 
   * @example
   * 0
   */
  ocrModel?: string;
  /**
   * @remarks
   * Specifies whether to enable standardization for key OCR fields. Valid values:
   * - 0: disabled (default).
   * - 1: enabled.
   * 
   * @example
   * 0
   */
  ocrValueStandard?: string;
  /**
   * @remarks
   * The product solution to access. Valid value: ID_OCR_MAX.
   * 
   * @example
   * ID_OCR_MAX
   */
  productCode?: string;
  /**
   * @remarks
   * The custom authentication scene ID, which is used to query related records by entering this scene ID in the console later. The value can be up to 10 characters in length and can contain letters, digits, and underscores.
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
      idOcrPictureFile: 'IdOcrPictureFile',
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
      idOcrPictureFile: 'string',
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

