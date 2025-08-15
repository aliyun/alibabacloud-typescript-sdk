// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CardOcrRequest extends $dara.Model {
  /**
   * @remarks
   * Document type.
   * 
   * @example
   * 00000006
   */
  docType?: string;
  /**
   * @remarks
   * Whether to perform face quality detection on the document
   * - T: Indicates that detection is needed
   * - F: Indicates that detection is not needed (default F)
   * 
   * @example
   * F
   */
  idFaceQuality?: string;
  /**
   * @remarks
   * Base64 on the front of the document image
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
   * A unique business identifier defined by the merchant, used for subsequent troubleshooting. It supports a combination of letters and numbers, with a maximum length of 32 characters. Please ensure uniqueness.
   * 
   * @example
   * dso9322***dsjsd22
   */
  merchantBizId?: string;
  /**
   * @remarks
   * Merchant user ID or other identifiers that can be used to identify specific users, such as phone numbers, email addresses, etc. It is strongly recommended to pre-desensitize the value of the userId field, for example, by hashing the value.
   * 
   * @example
   * 123456789
   */
  merchantUserId?: string;
  /**
   * @remarks
   * Whether to perform document OCR
   * - T: Indicates that document OCR is required (default T)
   * - F: Indicates that it is not required
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
   * ID_OCR_MIN
   */
  productCode?: string;
  /**
   * @remarks
   * Whether to enable anti-counterfeiting detection
   * - T: Indicates to enable anti-counterfeiting
   * - F: Indicates to disable (default F)
   * 
   * @example
   * F
   */
  spoof?: string;
  static names(): { [key: string]: string } {
    return {
      docType: 'DocType',
      idFaceQuality: 'IdFaceQuality',
      idOcrPictureBase64: 'IdOcrPictureBase64',
      idOcrPictureUrl: 'IdOcrPictureUrl',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      ocr: 'Ocr',
      productCode: 'ProductCode',
      spoof: 'Spoof',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docType: 'string',
      idFaceQuality: 'string',
      idOcrPictureBase64: 'string',
      idOcrPictureUrl: 'string',
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

