// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CardOcrRequest extends $dara.Model {
  /**
   * @remarks
   * The document type.
   * 
   * @example
   * 00000006
   */
  docType?: string;
  /**
   * @remarks
   * Specifies whether to perform face quality detection on the ID document. Valid values:
   * - T: Perform face quality detection.
   * - F: Do not perform face quality detection. This is the default value.
   * 
   * @example
   * F
   */
  idFaceQuality?: string;
  /**
   * @remarks
   * The Base64-encoded image of the front side of the ID document. The value is a Base64 encoding of the image.
   * 
   * @example
   * base64
   */
  idOcrPictureBase64?: string;
  /**
   * @remarks
   * The URL of the front-side image of the ID document.
   * 
   * @example
   * https://digital-cardocr-prod8.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
   */
  idOcrPictureUrl?: string;
  /**
   * @remarks
   * The merchant-defined unique business ID used for subsequent troubleshooting. The value can be a combination of letters and digits with a maximum length of 32 characters. Ensure that the value is unique.
   * 
   * @example
   * dso9322***dsjsd22
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The merchant user ID or another identifier that can be used to identify a specific user, such as a phone number or email address. We strongly recommend that you pre-desensitize the value of the userId field, for example, by hashing the value.
   * 
   * @example
   * 123456789
   */
  merchantUserId?: string;
  /**
   * @remarks
   * Specifies whether to perform OCR on the ID document. Valid values:
   * - T: Perform OCR on the ID document. This is the default value.
   * - F: Do not perform OCR.
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
   * ID_OCR_MIN
   */
  productCode?: string;
  /**
   * @remarks
   * Specifies whether to enable anti-spoofing detection. Valid values:
   * - T: Enable anti-spoofing detection.
   * - F: Disable anti-spoofing detection. This is the default value.
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

