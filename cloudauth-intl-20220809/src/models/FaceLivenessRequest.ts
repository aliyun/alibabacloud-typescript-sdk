// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceLivenessRequest extends $dara.Model {
  /**
   * @example
   * T
   */
  crop?: string;
  facePictureBase64?: string;
  /**
   * @example
   * https://digital-face-prod8.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
   */
  facePictureUrl?: string;
  /**
   * @example
   * T
   */
  faceQuality?: string;
  /**
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  merchantBizId?: string;
  /**
   * @example
   * 123456789
   */
  merchantUserId?: string;
  /**
   * @example
   * T
   */
  occlusion?: string;
  /**
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

