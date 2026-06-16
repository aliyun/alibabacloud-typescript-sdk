// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceLivenessRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow cropping. Default value: F. Valid values:
   * 
   * - T: enabled.
   * - F: disabled. (Default).
   * 
   * @example
   * T
   */
  crop?: string;
  /**
   * @remarks
   * The Base64-encoded face photo.
   * 
   * Note:
   * - If you use FacePictureBase64 to pass in the face photo, check the photo size and do not pass in an excessively large photo.
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
   * Specifies whether to return the face quality score. Default value: F. Valid values:
   * - T: enabled.
   * - F: disabled. (Default).
   * 
   * @example
   * T
   */
  faceQuality?: string;
  /**
   * @remarks
   * The face quality check.
   * 
   * @example
   * Y
   */
  faceQualityCheck?: string;
  /**
   * @remarks
   * The merchant-defined unique business ID for subsequent troubleshooting. The value can contain letters and digits with a maximum length of 32 characters. Ensure that the value is unique.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The merchant user ID or another identifier that can be used to identify a specific user, such as a phone number or email address. We strongly recommend that you desensitize the value of the userId field before passing it in, for example, by hashing the value.
   * 
   * @example
   * 123456789
   */
  merchantUserId?: string;
  /**
   * @remarks
   * Specifies whether to perform occlusion detection. Default value: F. Valid values:
   * 
   * - T: enabled.
   * - F: disabled. (Default).
   * 
   * @example
   * T
   */
  occlusion?: string;
  /**
   * @remarks
   * The product code.
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
      faceQualityCheck: 'FaceQualityCheck',
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
      faceQualityCheck: 'string',
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

