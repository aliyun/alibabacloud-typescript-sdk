// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EkycVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable authoritative identity verification. This parameter is currently applicable only to second-generation ID cards in the Chinese mainland.
   * 
   * @example
   * T
   */
  authorize?: string;
  /**
   * @remarks
   * Specifies whether cropping is allowed. By default, cropping is not allowed. Valid values:
   * 
   * - T: Detection is required.
   * - F: Detection is required (default value: F).
   * 
   * @example
   * F
   */
  crop?: string;
  /**
   * @remarks
   * The real name of the user. If Authorize is set to T and the document type is a Chinese mainland ID card, you must provide at least one of the following: document key information (DocName and DocNo) or document images (IdOcrPictureBase64 or IdOcrPictureUrl).
   * Note: The value must contain at least one Chinese character and no special characters, except for the middle dot (·) used in ethnic minority names.
   * 
   * @example
   * 张**
   */
  docName?: string;
  /**
   * @remarks
   * The document number of the user. If Authorize is set to T and the document type is a Chinese mainland ID card, you must provide at least one of the following: document key information (DocName and DocNo) or document images (IdOcrPictureBase64 or IdOcrPictureUrl).
   * Note: The value is a combination of letters and digits up to 18 characters in length.
   * 
   * @example
   * 410***************
   */
  docNo?: string;
  /**
   * @remarks
   * The document type.
   * 
   * @example
   * 00000001
   */
  docType?: string;
  /**
   * @remarks
   * The Base64-encoded face image.
   * 
   * Note:
   * - If you use this method to submit the face image, check the image size and do not submit an excessively large image.
   * - Specify either FacePictureBase64 or FacePictureUrl.
   * 
   * @example
   * Base64
   */
  facePictureBase64?: string;
  /**
   * @remarks
   * The URL of the face photo.
   * 
   * @example
   * https://digital-face-prod8.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
   */
  facePictureUrl?: string;
  /**
   * @remarks
   * The Base64-encoded document image.
   * Note:
   * - If you use this method to submit the document image, check the image size and do not submit an excessively large image.
   * - Specify either IdOcrPictureBase64 or IdOcrPictureUrl.
   * 
   * @example
   * base64
   */
  idOcrPictureBase64?: string;
  /**
   * @remarks
   * The URL of the front side of the document image.
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
   * - 3 (default): quality detection disabled.
   * 
   * @example
   * 0
   */
  idThreshold?: string;
  /**
   * @remarks
   * The merchant-defined unique business identifier, used for subsequent troubleshooting. The value is a combination of letters and digits up to 32 characters in length. Ensure that the value is unique.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * Your custom user ID, or another identifier that can identify a specific user, such as a phone number or email address. We strongly recommend that you mask this field value in advance, for example, by hashing the value.
   * 
   * @example
   * 123456
   */
  merchantUserId?: string;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * eKYC_MIN
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      authorize: 'Authorize',
      crop: 'Crop',
      docName: 'DocName',
      docNo: 'DocNo',
      docType: 'DocType',
      facePictureBase64: 'FacePictureBase64',
      facePictureUrl: 'FacePictureUrl',
      idOcrPictureBase64: 'IdOcrPictureBase64',
      idOcrPictureUrl: 'IdOcrPictureUrl',
      idThreshold: 'IdThreshold',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorize: 'string',
      crop: 'string',
      docName: 'string',
      docNo: 'string',
      docType: 'string',
      facePictureBase64: 'string',
      facePictureUrl: 'string',
      idOcrPictureBase64: 'string',
      idOcrPictureUrl: 'string',
      idThreshold: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

