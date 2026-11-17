// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EkycVerifyV2Request extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable authoritative identity verification. This feature applies only to second-generation ID cards in mainland China.
   * 
   * @example
   * T
   */
  authorize?: string;
  /**
   * @remarks
   * Specifies whether to allow cropping. Default value: F. Valid values:
   * 
   * - T: Allowed.
   * - F: Not allowed (default).
   * 
   * @example
   * F
   */
  crop?: string;
  /**
   * @remarks
   * The real name of the user. If Authorize is set to T and the document type is a mainland China ID card, you must provide at least one of the following: key document information (DocName and DocNo) or document images (IdOcrPictureBase64 or URL). Note: The value must contain one or more Chinese characters and no special characters, except for the middle dot (·) used in ethnic minority names.
   * 
   * @example
   * Zhang**
   */
  docName?: string;
  /**
   * @remarks
   * The document number of the user. If Authorize is set to T and the document type is a mainland China ID card, you must provide at least one of the following: key document information (DocName and DocNo) or document images (IdOcrPictureBase64 or URL). Note: The value must be an 18-character combination of letters and digits.
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
   * The Base64-encoded facial image. Notes:
   * 
   * - If you use this method to pass the facial image, check the image size and do not upload oversized images.
   * - Specify only one of FacePictureBase64, FacePictureUrl, and FacePictureFile.
   * 
   * @example
   * Base64
   */
  facePictureBase64?: string;
  /**
   * @remarks
   * The file stream of the facial image.
   * 
   * @example
   * InputStream
   */
  facePictureFile?: string;
  /**
   * @remarks
   * The URL of the facial image.
   * 
   * @example
   * https://digital-face-prod8.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
   */
  facePictureUrl?: string;
  /**
   * @remarks
   * Specifies whether to enable facial quality check.
   * 
   * @example
   * Y
   */
  faceQualityCheck?: string;
  /**
   * @remarks
   * The Base64-encoded image of the document. Notes:
   * 
   * - If you use this method to pass the document image, check the image size and do not upload oversized images.
   * - Specify only one of IdOcrPictureBase64, IdOcrPictureUrl, and IdOcrPictureFile.
   * 
   * @example
   * base64
   */
  idOcrPictureBase64?: string;
  /**
   * @remarks
   * The file stream of the front image of the document.
   * 
   * @example
   * InputStream
   */
  idOcrPictureFile?: string;
  /**
   * @remarks
   * The URL of the front image of the document.
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
   * The custom OCR quality check threshold mode. Valid values:
   * 
   * - 0: System default.
   * - 1: Strict mode.
   * - 2: Loose mode.
   * - 3: Quality check disabled (default).
   * 
   * @example
   * 0
   */
  idThreshold?: string;
  /**
   * @remarks
   * The custom unique business identifier on the merchant side, used for subsequent troubleshooting. The value must be a unique combination of up to 32 letters and digits.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The custom user ID or other identifier that identifies a specific user, such as a mobile phone number or email address. Desensitize the value of this field in advance, such as by hashing the value.
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
      facePictureFile: 'FacePictureFile',
      facePictureUrl: 'FacePictureUrl',
      faceQualityCheck: 'FaceQualityCheck',
      idOcrPictureBase64: 'IdOcrPictureBase64',
      idOcrPictureFile: 'IdOcrPictureFile',
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
      facePictureFile: 'string',
      facePictureUrl: 'string',
      faceQualityCheck: 'string',
      idOcrPictureBase64: 'string',
      idOcrPictureFile: 'string',
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

