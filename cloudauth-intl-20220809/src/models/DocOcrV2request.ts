// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocOcrV2Request extends $dara.Model {
  /**
   * @example
   * OCR_ID_FACE
   */
  cardSide?: string;
  /**
   * @example
   * 00000006
   */
  docType?: string;
  /**
   * @example
   * F
   */
  idFaceQuality?: string;
  /**
   * @example
   * base64
   */
  idOcrPictureBase64?: string;
  /**
   * @example
   * InputStream
   */
  idOcrPictureFile?: string;
  /**
   * @example
   * https://digital-cardocr-prod8.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
   */
  idOcrPictureUrl?: string;
  /**
   * @example
   * 0
   */
  idThreshold?: string;
  /**
   * @example
   * dso9322***dsjsd22
   */
  merchantBizId?: string;
  /**
   * @example
   * 123456789
   */
  merchantUserId?: string;
  /**
   * @example
   * T
   */
  ocr?: string;
  productCode?: string;
  /**
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
      idOcrPictureFile: 'IdOcrPictureFile',
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
      idOcrPictureFile: 'string',
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

