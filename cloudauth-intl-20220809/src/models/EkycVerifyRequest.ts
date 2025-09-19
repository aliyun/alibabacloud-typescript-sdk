// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EkycVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable identity verification against the official database:
   * 
   * - **T**: Enable.
   * 
   * - **F**: Disable. (Default)
   * 
   * > This feature is currently available only for second-generation resident ID cards of the Chinese mainland.
   * 
   * @example
   * T
   */
  authorize?: string;
  /**
   * @remarks
   * Specifies whether to crop the face image:
   * 
   * - **T**: Allows cropping.
   * 
   * - **F**: Disallows cropping. (Default)
   * 
   * @example
   * F
   */
  crop?: string;
  /**
   * @remarks
   * The user\\"s real name.
   * 
   * > If Authorize is set to T and the certificate type is Chinese mainland resident ID card, you must enter at least one of the following groups of information:
   * > - DocName and DocNo.
   * > - IdOcrPictureBase64 or IdOcrPictureUrl.
   * 
   * @example
   * Zhang San
   */
  docName?: string;
  /**
   * @remarks
   * The user\\"s certificate number.
   * 
   * 
   * > If Authorize is set to **T** and the certificate type is Chinese mainland resident ID card, you must enter at least one of the following groups of information:
   * > - DocName and DocNo.
   * > - IdOcrPictureBase64 or IdOcrPictureUrl.
   * 
   * @example
   * 410***************
   */
  docNo?: string;
  /**
   * @remarks
   * The certificate type, which is uniquely identified by an 8-digit number. For more information, see [Certificate types](https://www.alibabacloud.com/help/en/ekyc/latest/im1u641gyesiqmbg?spm=a2c63.p38356.0.i18#Hu5TG).
   * 
   * @example
   * 00000001
   */
  docType?: string;
  facePictureBase64?: string;
  /**
   * @remarks
   * The URL of the portrait image. The URL must be an HTTP or HTTPS link accessible over the Internet.
   * 
   * @example
   * https://digital-face-prod8.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
   */
  facePictureUrl?: string;
  idOcrPictureBase64?: string;
  /**
   * @remarks
   * The URL of the certificate image. The URL must be an HTTP or HTTPS link accessible over the Internet.
   * 
   * @example
   * https://digital-cardocr-prod8.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
   */
  idOcrPictureUrl?: string;
  /**
   * @remarks
   * The custom OCR quality detection threshold mode:
   * 
   * - **0**: Standard mode
   * 
   * - **1**: Strict mode
   * 
   * - **2**: Loose mode
   * 
   * - **3** (default): Disables quality detection
   * 
   * @example
   * 0
   */
  idThreshold?: string;
  /**
   * @remarks
   * A unique business identifier that you customize. It is used to locate and troubleshoot issues. The identifier can be up to 32 characters in length and can contain letters and digits. Make sure that the identifier is unique.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * A custom user ID or another identifier that can identify a specific user, such as a mobile number or an email address. Desensitize the value of this field in advance, for example, by hashing the value.
   * 
   * @example
   * 123456
   */
  merchantUserId?: string;
  /**
   * @remarks
   * The product solution to integrate. Set the value to **eKYC_MIN**.
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

