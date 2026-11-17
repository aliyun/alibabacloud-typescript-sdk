// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceLivenessRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow cropping. Valid values:
   * - T: Cropping is allowed.
   * - F: Cropping is not allowed. Default value: F.
   * 
   * @example
   * T
   */
  crop?: string;
  /**
   * @remarks
   * The face attribute check.
   * 
   * @example
   * Y
   */
  faceAttributeCheck?: string;
  /**
   * @remarks
   * The Base64-encoded string of the photo.
   * 
   * Note:
   * - If you use the FacePictureBase64 parameter to pass the face photo, check the photo size and do not pass photos that are too large.
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
   * Specifies whether to output the face quality score. Valid values:
   * - T: The detection is required.
   * - F: The detection is not required. Default value: F.
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
   * The custom unique business identifier on the merchant side, used for subsequent troubleshooting. It supports a combination of letters and digits, with a maximum length of 32 characters. Ensure that the value is unique.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The merchant user ID or another identifier used to identify a specific user, such as a phone number or email address. Desensitize the value of the userId field in advance, such as by hashing the value.
   * 
   * @example
   * 123456789
   */
  merchantUserId?: string;
  /**
   * @remarks
   * Specifies whether to perform occlusion detection. Valid values:
   * - T: Occlusion detection is required.
   * - F: Occlusion detection is not required. Default value: F.
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
      faceAttributeCheck: 'FaceAttributeCheck',
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
      faceAttributeCheck: 'string',
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

