// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceCompareRequest extends $dara.Model {
  /**
   * @remarks
   * 是否开启传入人脸图片质量检测
   * 
   * @example
   * N
   */
  facePictureQualityCheck?: string;
  /**
   * @remarks
   * A custom unique business ID used for troubleshooting. It can be a combination of up to 32 letters and digits. Make sure that the ID is unique.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  merchantBizId?: string;
  sourceFacePicture?: string;
  /**
   * @remarks
   * The URL of the portrait photo. The URL must be an HTTP or HTTPS link accessible over the Internet.
   * 
   * > You must specify either SourceFacePicture or SourceFacePictureUrl.
   * 
   * @example
   * https://***face1.jpeg
   */
  sourceFacePictureUrl?: string;
  targetFacePicture?: string;
  /**
   * @remarks
   * The URL of the base portrait photo. The URL must be an HTTP or HTTPS link accessible over the Internet.
   * 
   * 
   * 
   * > You must specify either TargetFacePicture or TargetFacePictureUrl.
   * 
   * @example
   * https://***face2.jpeg
   */
  targetFacePictureUrl?: string;
  static names(): { [key: string]: string } {
    return {
      facePictureQualityCheck: 'FacePictureQualityCheck',
      merchantBizId: 'MerchantBizId',
      sourceFacePicture: 'SourceFacePicture',
      sourceFacePictureUrl: 'SourceFacePictureUrl',
      targetFacePicture: 'TargetFacePicture',
      targetFacePictureUrl: 'TargetFacePictureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      facePictureQualityCheck: 'string',
      merchantBizId: 'string',
      sourceFacePicture: 'string',
      sourceFacePictureUrl: 'string',
      targetFacePicture: 'string',
      targetFacePictureUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

