// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class EkycVerifyV2AdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to enable authoritative identity verification. This parameter currently applies only to second-generation ID cards issued in the Chinese mainland.
   * 
   * @example
   * T
   */
  authorize?: string;
  /**
   * @remarks
   * Indicates whether clipping is allowed. Clipping is disabled by default (T/F).
   * 
   * - T: Detection is required.
   * - F: Detection is required (default is F).
   * 
   * @example
   * F
   */
  crop?: string;
  /**
   * @remarks
   * The user\\"s real name. When Authorize=\\"T\\" and the certificate type is a Chinese mainland ID card, you must provide at least one of the following: key certificate information (DocName, DocNo) or certificate image (IdOcrPictureBase64/URL). Note: It supports combinations of one or more Chinese characters, excluding special characters except for the interpunct 【·】 used in ethnic minority names.
   * 
   * @example
   * 张**
   */
  docName?: string;
  /**
   * @remarks
   * The user\\"s certificate number. When Authorize=\\"T\\" and the certificate type is a Chinese mainland ID card, you must provide at least one of the following: key certificate information (DocName, DocNo) or certificate image (IdOcrPictureBase64/URL). Note: It supports a combination of letters and digits with a length of 18 characters.
   * 
   * @example
   * 410***************
   */
  docNo?: string;
  /**
   * @remarks
   * Certificate type
   * 
   * @example
   * 00000001
   */
  docType?: string;
  /**
   * @remarks
   * Base64 encoding of the facial image.
   * 
   * Notes:
   * 
   * - If you choose this method to submit the certificate image, check the image size and avoid uploading excessively large images.
   * - You must specify exactly one of FacePictureBase64, FacePictureUrl, or FacePictureFile.
   * 
   * @example
   * Base64
   */
  facePictureBase64?: string;
  /**
   * @remarks
   * File stream of the facial photo
   * 
   * @example
   * InputStream
   */
  facePictureFileObject?: Readable;
  /**
   * @remarks
   * URL of the facial photo
   * 
   * @example
   * https://digital-face-prod8.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
   */
  facePictureUrl?: string;
  /**
   * @remarks
   * Base64-encoded certificate Image. Notes:
   * 
   * - If you use this method to submit the certificate image, check the image size and avoid uploading excessively large images.
   * - You must specify exactly one of IdOcrPictureBase64, IdOcrPictureUrl, or IdOcrPictureFile.
   * 
   * @example
   * base64
   */
  idOcrPictureBase64?: string;
  /**
   * @remarks
   * File stream of the front side of the certificate
   * 
   * @example
   * InputStream
   */
  idOcrPictureFileObject?: Readable;
  /**
   * @remarks
   * URL of the front side of the certificate
   * 
   * @example
   * https://digital-cardocr-prod8.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
   */
  idOcrPictureUrl?: string;
  /**
   * @remarks
   * Custom OCR quality detection threshold mode:
   * 
   * - 0: System default
   * - 1: Strict mode
   * - 2: Loose mode
   * - 3 (default): Shutdown quality detection
   * 
   * @example
   * 0
   */
  idThreshold?: string;
  /**
   * @remarks
   * A custom business UUID defined by the merchant, used for subsequent issue tracking and troubleshooting. It supports a combination of letters and digits with a length of 32 characters. Ensure its uniqueness.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * Your custom user ID or another identifier that can uniquely identify a specific user, such as a mobile phone number or mailbox address. We strongly recommend pre-masking the value of this field—for example, by applying a hash function.
   * 
   * @example
   * 123456
   */
  merchantUserId?: string;
  /**
   * @remarks
   * Product code
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

