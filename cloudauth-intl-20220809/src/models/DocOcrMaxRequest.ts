// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocOcrMaxRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable authoritative data source verification to enhance the anti-spoofing capability of identity documents. Valid values:
   * - **T**: Enabled.
   * - **F**: Not enabled (default).
   * > 
   * > - **Applicable identity document types**: Chinese resident identity card (CHN01001) and Chinese mainland driver\\"s license (CHN02001).
   * > - **Data transmission statement**: Enabling this parameter indicates that you agree to transmit the user\\"s name and identity document number to an authoritative data source in the Chinese mainland for consistency verification.
   * > - **Performance impact**: After this parameter is enabled, the API response time increases by about 1 to 2 seconds. Adjust the timeout settings accordingly.
   * 
   * @example
   * T
   */
  authorize?: string;
  /**
   * @remarks
   * The page to be recognized. Valid values:
   * - 01: portrait side of the identity document (default)
   * - 02: back side of the identity document
   * 
   * @example
   * 01
   */
  docPage?: string;
  /**
   * @remarks
   * The type of the identity document.
   * - Format: country code + identity document type abbreviation + page (optional).
   * 
   * Note
   * - OcrModel = 0: DocType is required and specifies the identity document type. The existing logic remains unchanged.
   * - OcrModel = 1 or 2: DocType must be left empty.
   * 
   * @example
   * CNSSC01
   */
  docType?: string;
  /**
   * @remarks
   * The Base64-encoded image of the identity document. If you choose to pass the identity document image by using the IdOcrPictureBase64 (Base64-encoded image) method, check the image size and do not pass an excessively large image.
   * 
   * @example
   * base64
   */
  idOcrPictureBase64?: string;
  /**
   * @remarks
   * The URL of the identity document image. The URL must be an HTTP or HTTPS link that is accessible over the Internet.
   * 
   * @example
   * https://***********.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
   */
  idOcrPictureUrl?: string;
  /**
   * @remarks
   * Specifies whether to enable the identity document anti-spoofing feature. Valid values:
   * - T: Enabled.
   * - F: Not enabled (default).
   * 
   * @example
   * F
   */
  idSpoof?: string;
  /**
   * @remarks
   * The custom OCR quality check threshold mode. Valid values:
   * - 0: system default
   * - 1: strict mode
   * - 2: loose mode
   * - 3: disable quality check (default)
   * 
   * @example
   * 0
   */
  idThreshold?: string;
  /**
   * @remarks
   * The custom unique business identifier, which is used to locate and troubleshoot issues later. The value can be up to 32 characters in length and can contain letters and digits. Make sure that the value is unique.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c******
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The custom user ID or other identifiers that can identify a specific user, such as a mobile phone number or an email address. Desensitize the value of this field in advance, such as by hashing the value.
   * 
   * @example
   * 123456789
   */
  merchantUserId?: string;
  /**
   * @remarks
   * The OCR recognition mode. Valid values:
   * - 0: general identity document recognition mode (default)
   * - 1: automatic identity document classification mode
   * - 2: automatic identity document classification and general recognition mode
   * 
   * @example
   * 0
   */
  ocrModel?: string;
  /**
   * @remarks
   * Specifies whether to enable the standardization of key fields in OCR recognition. Valid values:
   * - 0: no (default) 
   * - 1: yes
   * 
   * @example
   * 0
   */
  ocrValueStandard?: string;
  /**
   * @remarks
   * The product solution to be integrated. Valid value: ID_OCR_MAX.
   * 
   * @example
   * ID_OCR_MAX
   */
  productCode?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * Deprecated
   */
  prompt?: string;
  /**
   * @remarks
   * The custom authentication scene ID, which is used to query related records by entering this scene ID in the console later. The value can be up to 10 characters in length and can contain letters, digits, and underscores.
   * 
   * @example
   * 1234567890
   */
  sceneCode?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * Deprecated
   */
  spoof?: string;
  static names(): { [key: string]: string } {
    return {
      authorize: 'Authorize',
      docPage: 'DocPage',
      docType: 'DocType',
      idOcrPictureBase64: 'IdOcrPictureBase64',
      idOcrPictureUrl: 'IdOcrPictureUrl',
      idSpoof: 'IdSpoof',
      idThreshold: 'IdThreshold',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      ocrModel: 'OcrModel',
      ocrValueStandard: 'OcrValueStandard',
      productCode: 'ProductCode',
      prompt: 'Prompt',
      sceneCode: 'SceneCode',
      spoof: 'Spoof',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorize: 'string',
      docPage: 'string',
      docType: 'string',
      idOcrPictureBase64: 'string',
      idOcrPictureUrl: 'string',
      idSpoof: 'string',
      idThreshold: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      ocrModel: 'string',
      ocrValueStandard: 'string',
      productCode: 'string',
      prompt: 'string',
      sceneCode: 'string',
      spoof: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

