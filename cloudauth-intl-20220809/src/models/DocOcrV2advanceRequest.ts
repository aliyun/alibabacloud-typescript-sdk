// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class DocOcrV2AdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the side of the ID card, which can be the national emblem side or the portrait side. If you do not specify this parameter, the portrait side is used by default. Valid values:
   * - OCR_ID_FACE: the portrait side. Default value.
   * - OCR_ID_NATIONAL_EMBLEM: the national emblem side.
   * 
   * @example
   * OCR_ID_FACE
   */
  cardSide?: string;
  /**
   * @remarks
   * The type of the ID card.
   * 
   * @example
   * 00000006
   */
  docType?: string;
  /**
   * @remarks
   * Specifies whether to perform face quality check for the ID card. Valid values:
   * - T: Face quality check is performed.
   * - F: Face quality check is not performed. Default value: F.
   * 
   * @example
   * F
   */
  idFaceQuality?: string;
  /**
   * @remarks
   * The Base64-encoded image of the ID card.
   * 
   * If you choose to pass the ID card photo by using the Base64-encoded image (IdOcrPictureBase64), check the photo size and do not pass oversized photos.
   * 
   * @example
   * base64
   */
  idOcrPictureBase64?: string;
  /**
   * @remarks
   * The file stream of the front image of the ID card.
   * 
   * @example
   * InputStream
   */
  idOcrPictureFileObject?: Readable;
  /**
   * @remarks
   * The URL of the front image of the ID card.
   * 
   * @example
   * https://digital-cardocr-prod8.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
   */
  idOcrPictureUrl?: string;
  /**
   * @remarks
   * The custom threshold mode for OCR quality check. Valid values:
   * - 0: system default.
   * - 1: strict mode.
   * - 2: loose mode.
   * - 3: disables quality check. Default value: 3.
   * 
   * @example
   * 0
   */
  idThreshold?: string;
  /**
   * @remarks
   * The custom unique business identifier on the merchant side, which is used for subsequent troubleshooting. It supports a combination of letters and digits, with a maximum length of 32 characters. Make sure that the identifier is unique.
   * 
   * @example
   * dso9322***dsjsd22
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The custom user ID in the business. Make sure that the ID is unique.
   * 
   * @example
   * 123456789
   */
  merchantUserId?: string;
  /**
   * @remarks
   * Specifies whether to perform OCR on the ID card. Valid values:
   * - T: OCR is performed on the ID card.
   * - F: OCR is not performed on the ID card.
   * 
   * @example
   * T
   */
  ocr?: string;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * Product solution type ID_OCR_MIN
   */
  productCode?: string;
  /**
   * @remarks
   * Specifies whether to enable anti-spoofing check. Valid values:
   * - T: Anti-spoofing check is enabled.
   * - F: Anti-spoofing check is disabled.
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
      idOcrPictureFileObject: 'IdOcrPictureFile',
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
      idOcrPictureFileObject: 'Readable',
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

