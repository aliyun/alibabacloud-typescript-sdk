// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocOcrMaxRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable authoritative data source verification to enhance document anti-forgery capabilities.
   * 
   * - **T**: enabled.
   * 
   * - **F**: disabled (default).
   * 
   * > 
   * > - **Applicable document types**: China resident identity card (CHN01001) and Chinese mainland driver\\"s license (CHN02001).
   * > - **Data transmission statement**: Enabling this parameter indicates your consent to transmit the user\\"s name and document number to an authoritative data source in the Chinese mainland for consistency verification.
   * > - **Performance impact**: After this feature is enabled, the API response time increases by approximately 1 to 2 seconds. Adjust the timeout settings accordingly.
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
   * CNSSC01
   */
  docType?: string;
  /**
   * @remarks
   * The Base64-encoded image of the card or certificate.
   * 
   * If you use IdOcrPictureBase64 to pass in the document image, check the image size and do not pass in an excessively large image.
   * 
   * @example
   * base64
   */
  idOcrPictureBase64?: string;
  /**
   * @remarks
   * The URL of the card or certificate image. The URL must be a publicly accessible HTTP or HTTPS link.
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
   * The custom unique business identifier, which is used for subsequent troubleshooting.
   * 
   * The value can contain up to 32 characters, including letters and digits. Make sure the value is unique.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c******
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The custom user ID or another identifier that can identify a specific user, such as a phone number or email address.
   * 
   * We strongly recommend that you desensitize the value of this field in advance, for example, by hashing the value.
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
   * - 2: automatic document classification + general recognition mode.
   * 
   * @example
   * 0
   */
  ocrModel?: string;
  /**
   * @remarks
   * Specifies whether to enable OCR key field standardization. Valid values:
   * - 0: no (default). 
   * - 1: yes.
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
   * >Warning: This field is deprecated.</warning>.
   * 
   * @example
   * 已废弃
   */
  prompt?: string;
  /**
   * @remarks
   * The custom authentication scenario ID. You can use this scenario ID to query related records in the console.
   * 
   * The value can contain up to 10 characters, including letters, digits, and underscores.
   * 
   * @example
   * 1234567890
   */
  sceneCode?: string;
  /**
   * @remarks
   * <warning>This field is deprecated.</warning>.
   * 
   * @example
   * 已废弃
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

