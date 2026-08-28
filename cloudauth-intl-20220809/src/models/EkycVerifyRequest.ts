// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EkycVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable authoritative identity verification. Currently, this applies only to second-generation ID cards in mainland China.
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
   * - F: Detection is required. (Default value: F)
   * 
   * @example
   * F
   */
  crop?: string;
  /**
   * @remarks
   * The real name of the user. When Authorize=\\"T\\" and the document type is a mainland China ID card, either the key document information (DocName, DocNo) or the document image (IdOcrPictureBase64/URL) must be provided.
   * Note: Supports a combination of Chinese characters with a minimum length of one character. No special characters are allowed, except for the middle dot (·) used in ethnic minority names.
   * 
   * @example
   * Zhang**
   */
  docName?: string;
  /**
   * @remarks
   * The document number of the user. When Authorize=\\"T\\" and the document type is a mainland China ID card, either the key document information (DocName, DocNo) or the document image (IdOcrPictureBase64/URL) must be provided.
   * Note: Supports a combination of letters and numbers with a length of 18 characters.
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
   * - If you choose this method to pass in the face image, check the photo size and do not pass in an excessively large photo.
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
   * Specifies whether to enable face quality detection.
   * 
   * @example
   * Y
   */
  faceQualityCheck?: string;
  /**
   * @remarks
   * The Base64-encoded document image.
   * Note:
   * - If you choose this method to pass in the document image, check the photo size and do not pass in an excessively large photo.
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
   * Specifies whether to enable document anti-spoofing.
   * 
   * @example
   * Y
   */
  idSpoof?: string;
  /**
   * @remarks
   * The custom OCR quality detection threshold mode. Valid values:
   * 
   * - 0: system default
   * - 1: strict mode
   * - 2: loose mode
   * - 3 (default): disable quality detection
   * 
   * @example
   * 0
   */
  idThreshold?: string;
  /**
   * @remarks
   * A custom business unique identifier defined by the merchant, used for subsequent issue tracking and troubleshooting. Supports a combination of letters and numbers up to 32 characters in length. Ensure that this value is unique.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * A custom user ID or other identifier that can identify a specific user, such as a phone number or email address. We strongly recommend that you desensitize this field value in advance, for example, by hashing the value.
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
      faceQualityCheck: 'FaceQualityCheck',
      idOcrPictureBase64: 'IdOcrPictureBase64',
      idOcrPictureUrl: 'IdOcrPictureUrl',
      idSpoof: 'IdSpoof',
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
      faceQualityCheck: 'string',
      idOcrPictureBase64: 'string',
      idOcrPictureUrl: 'string',
      idSpoof: 'string',
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

