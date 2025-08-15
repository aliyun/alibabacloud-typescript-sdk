// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocOcrRequest extends $dara.Model {
  /**
   * @remarks
   * CardSide
   * 
   * @example
   * 0
   */
  cardSide?: string;
  /**
   * @remarks
   * Document type
   * 
   * @example
   * 00000006
   */
  docType?: string;
  /**
   * @remarks
   * Whether to perform ID face quality detection
   * - T: Indicates that detection is required
   * - F: Indicates that detection is not required (default F)
   * 
   * @example
   * F
   */
  idFaceQuality?: string;
  /**
   * @remarks
   * Base64 of the front side of the document image
   * 
   * @example
   * base64
   */
  idOcrPictureBase64?: string;
  /**
   * @remarks
   * URL of the front side of the document image
   * 
   * @example
   * https://digital-cardocr-prod8.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
   */
  idOcrPictureUrl?: string;
  /**
   * @remarks
   * IdThreshold
   * 
   * @example
   * 0
   */
  idThreshold?: string;
  /**
   * @remarks
   * A unique business identifier defined by the merchant, used for subsequent troubleshooting. It supports a combination of letters and numbers, with a maximum length of 32 characters. Please ensure uniqueness.
   * 
   * @example
   * dso9322***dsjsd22
   */
  merchantBizId?: string;
  /**
   * @remarks
   * A custom user ID in the business, please keep it unique.
   * 
   * @example
   * 123456789
   */
  merchantUserId?: string;
  /**
   * @remarks
   * Whether to perform document OCR
   * - T: Indicates that document OCR is required
   * - F: Indicates that document OCR is not required
   * 
   * @example
   * T
   */
  ocr?: string;
  /**
   * @remarks
   * Product code
   * 
   * @example
   * 产品方案类型ID_OCR_MIN
   */
  productCode?: string;
  /**
   * @remarks
   * Whether to enable anti-counterfeiting detection
   * - T: Indicates that anti-counterfeiting is enabled
   * - F: Indicates that anti-counterfeiting is disabled
   * 
   * @example
   * F
   */
  spoof?: string;
  static names(): { [key: string]: string } {
    return {
      cardSide: 'CardSide',
      docType: 'DocType',
      idFaceQuality: 'IdFaceQuality',
      idOcrPictureBase64: 'IdOcrPictureBase64',
      idOcrPictureUrl: 'IdOcrPictureUrl',
      idThreshold: 'IdThreshold',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      ocr: 'Ocr',
      productCode: 'ProductCode',
      spoof: 'Spoof',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardSide: 'string',
      docType: 'string',
      idFaceQuality: 'string',
      idOcrPictureBase64: 'string',
      idOcrPictureUrl: 'string',
      idThreshold: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      ocr: 'string',
      productCode: 'string',
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

