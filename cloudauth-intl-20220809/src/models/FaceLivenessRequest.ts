// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceLivenessRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to crop the facial image. The default value is F.
   * 
   * - **T**: allows cropping.
   * 
   * - **F**: Forbidden
   * 
   * @example
   * T
   */
  crop?: string;
  facePictureBase64?: string;
  /**
   * @remarks
   * The URL of the portrait image. The URL must be an HTTP or HTTPS link accessible over the Internet.
   * 
   * @example
   * https://digital-face-prod8.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
   */
  facePictureUrl?: string;
  /**
   * @remarks
   * Specifies whether to return the facial image quality score. The default value is F.
   * 
   * - **T**: returns the score.
   * 
   * - **F**: does not return the score.
   * 
   * @example
   * T
   */
  faceQuality?: string;
  /**
   * @remarks
   * A custom unique business identifier. You can use this identifier to track and troubleshoot issues. The identifier can be up to 32 characters in length and can contain letters and digits. Make sure the identifier is unique.
   * 
   * > Alibaba Cloud servers do not check the uniqueness of this value. For better tracking, ensure this value is unique.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * A  custom user ID or another identifier for a specific user, such as a mobile number or email address. For security, desensitize this value in advance, for example, by hashing it.
   * 
   * @example
   * 123456789
   */
  merchantUserId?: string;
  /**
   * @remarks
   * Specifies whether to enable occlusion detection. The default value is F.
   * 
   * - **T**: enables the feature.
   * 
   * - **F**: disables the feature.
   * 
   * @example
   * T
   */
  occlusion?: string;
  /**
   * @remarks
   * The product solution to use. Set the value to **FACE_LIVENESS_MIN** to use the passive liveness detection API.
   * 
   * @example
   * FACE_LIVENESS_MIN
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      crop: 'Crop',
      facePictureBase64: 'FacePictureBase64',
      facePictureUrl: 'FacePictureUrl',
      faceQuality: 'FaceQuality',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      occlusion: 'Occlusion',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crop: 'string',
      facePictureBase64: 'string',
      facePictureUrl: 'string',
      faceQuality: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      occlusion: 'string',
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

