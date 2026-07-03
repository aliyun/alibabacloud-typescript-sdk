// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class EkycVerifyV2AdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable authoritative identity verification. Currently, this feature is applicable only to second-generation ID cards of mainland China.
   * 
   * @example
   * T
   */
  authorize?: string;
  /**
   * @remarks
   * Specifies whether cropping is allowed. Not allowed by default. Valid values: T and F.
   * 
   * - T: Cropping is allowed.
   * - F: Cropping is not allowed. (Default: F)
   * 
   * @example
   * F
   */
  crop?: string;
  /**
   * @remarks
   * The real name of the user. When Authorize=\\"T\\" and the document type is a mainland China ID card, at least one of the following groups must be provided: document key information (DocName, DocNo) or document image (IdOcrPictureBase64/URL). Note: Supports combinations of Chinese characters with a length of at least 1 character. Special characters are not supported, except for the middle dot (·) used in ethnic minority names.
   * 
   * @example
   * 张**
   */
  docName?: string;
  /**
   * @remarks
   * The document number of the user. When Authorize=\\"T\\" and the document type is a mainland China ID card, at least one of the following groups must be provided: document key information (DocName, DocNo) or document image (IdOcrPictureBase64/URL). Note: Supports a combination of letters and digits with a length of 18 characters.
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
   * 
   * - If you use this method to pass the face image, check the photo size and do not pass an overly large photo.
   * - You can only specify one of FacePictureBase64, FacePictureUrl, and FacePictureFile.
   * 
   * @example
   * Base64
   */
  facePictureBase64?: string;
  /**
   * @remarks
   * The file stream of the face photo.
   * 
   * @example
   * InputStream
   */
  facePictureFileObject?: Readable;
  /**
   * @remarks
   * The URL of the face photo.
   * 
   * @example
   * https://digital-face-prod8.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
   */
  facePictureUrl?: string;
  faceQualityCheck?: string;
  /**
   * @remarks
   * The Base64-encoded document image. Note:
   * 
   * - If you use this method to pass the document image, check the photo size and do not pass an overly large photo.
   * - You can only specify one of IdOcrPictureBase64, IdOcrPictureUrl, and IdOcrPictureFile.
   * 
   * @example
   * base64
   */
  idOcrPictureBase64?: string;
  /**
   * @remarks
   * The file stream of the front side of the document image.
   * 
   * @example
   * InputStream
   */
  idOcrPictureFileObject?: Readable;
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
   * The custom OCR quality detection threshold mode:
   * 
   * - 0: System default.
   * - 1: Strict mode.
   * - 2: Lenient mode.
   * - 3 (Default): Quality detection is disabled.
   * 
   * @example
   * 0
   */
  idThreshold?: string;
  /**
   * @remarks
   * A unique business identifier customized by the merchant, used for subsequent troubleshooting. Supports a combination of letters and digits with a length of 32 characters. Ensure that the value is unique.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * A custom user ID or other identifier that can identify a specific user, such as a phone number or email address. We strongly recommend that you desensitize the value of this field in advance, for example, by hashing the value.
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
      facePictureFileObject: 'FacePictureFile',
      facePictureUrl: 'FacePictureUrl',
      faceQualityCheck: 'FaceQualityCheck',
      idOcrPictureBase64: 'IdOcrPictureBase64',
      idOcrPictureFileObject: 'IdOcrPictureFile',
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
      facePictureFileObject: 'Readable',
      facePictureUrl: 'string',
      faceQualityCheck: 'string',
      idOcrPictureBase64: 'string',
      idOcrPictureFileObject: 'Readable',
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

