// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class DocOcrV2AdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the side of the certificate. If this parameter is not specified, the portrait side is used by default.
   * 
   * - OCR_ID_FACE (default): the portrait side
   * 
   * - OCR_ID_NATIONAL_EMBLEM: the national emblem side.
   * 
   * @example
   * OCR_ID_FACE
   */
  cardSide?: string;
  /**
   * @remarks
   * The certificate type.
   * 
   * @example
   * 00000006
   */
  docType?: string;
  /**
   * @remarks
   * Specifies whether to perform face quality detection on the certificate.
   * 
   * - T: Detection is required.
   * - F: Detection is not required. (Default: F).
   * 
   * @example
   * F
   */
  idFaceQuality?: string;
  /**
   * @remarks
   * The Base64-encoded card or certificate image.
   * 
   * If you use IdOcrPictureBase64 to pass in the certificate image, check the image size and do not pass in an excessively large image.
   * 
   * @example
   * base64
   */
  idOcrPictureBase64?: string;
  /**
   * @remarks
   * The file stream of the front side of the certificate image.
   * 
   * @example
   * InputStream
   */
  idOcrPictureFileObject?: Readable;
  /**
   * @remarks
   * The URL of the front side of the certificate image.
   * 
   * @example
   * https://digital-cardocr-prod8.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
   */
  idOcrPictureUrl?: string;
  /**
   * @remarks
   * The custom OCR quality detection threshold mode. Valid values:
   * 
   * - 0: system default
   * - 1: strict mode
   * - 2: loose mode
   * - 3 (default): quality detection is disabled.
   * 
   * @example
   * 0
   */
  idThreshold?: string;
  /**
   * @remarks
   * The merchant-defined unique business ID used for subsequent troubleshooting. The value can contain letters and digits with a maximum length of 32 characters. Ensure that the value is unique.
   * 
   * @example
   * dso9322***dsjsd22
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The custom user ID defined in your business. Ensure that the value is unique.
   * 
   * @example
   * 123456789
   */
  merchantUserId?: string;
  /**
   * @remarks
   * Specifies whether to perform certificate OCR.
   * 
   * - T: OCR is required.
   * - F: OCR is not required.
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
   * 产品方案类型ID_OCR_MIN
   */
  productCode?: string;
  /**
   * @remarks
   * Specifies whether to enable anti-spoofing detection.
   * 
   * - T: Anti-spoofing is enabled.
   * - F: Anti-spoofing is disabled.
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

