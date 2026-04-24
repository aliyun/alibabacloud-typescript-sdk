// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceCompareV2Request extends $dara.Model {
  /**
   * @example
   * N
   */
  facePictureQualityCheck?: string;
  /**
   * @example
   * Y
   */
  faceQualityCheck?: string;
  /**
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  merchantBizId?: string;
  /**
   * @example
   * base64
   */
  sourceFacePicture?: string;
  /**
   * @example
   * InputStream
   */
  sourceFacePictureFile?: string;
  /**
   * @example
   * https://***face1.jpeg
   */
  sourceFacePictureUrl?: string;
  /**
   * @example
   * base64
   */
  targetFacePicture?: string;
  /**
   * @example
   * InputStream
   */
  targetFacePictureFile?: string;
  /**
   * @example
   * https://***face2.jpeg
   */
  targetFacePictureUrl?: string;
  static names(): { [key: string]: string } {
    return {
      facePictureQualityCheck: 'FacePictureQualityCheck',
      faceQualityCheck: 'FaceQualityCheck',
      merchantBizId: 'MerchantBizId',
      sourceFacePicture: 'SourceFacePicture',
      sourceFacePictureFile: 'SourceFacePictureFile',
      sourceFacePictureUrl: 'SourceFacePictureUrl',
      targetFacePicture: 'TargetFacePicture',
      targetFacePictureFile: 'TargetFacePictureFile',
      targetFacePictureUrl: 'TargetFacePictureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      facePictureQualityCheck: 'string',
      faceQualityCheck: 'string',
      merchantBizId: 'string',
      sourceFacePicture: 'string',
      sourceFacePictureFile: 'string',
      sourceFacePictureUrl: 'string',
      targetFacePicture: 'string',
      targetFacePictureFile: 'string',
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

