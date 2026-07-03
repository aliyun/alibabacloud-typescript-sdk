// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceCompareRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to enable quality detection for the input face image>Danger: Deprecated
   * 
   * @example
   * N
   */
  facePictureQualityCheck?: string;
  /**
   * @remarks
   * Face quality check
   * 
   * @example
   * Y
   */
  faceQualityCheck?: string;
  /**
   * @remarks
   * A unique business identifier customized by the merchant, used for subsequent troubleshooting. Supports a combination of letters and numbers with a maximum length of 32 characters. Ensure it is unique.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * Base64-encoded face photo.
   * 
   * Note
   * - If you choose this method to pass in the photo, check the photo size and do not pass in an oversized photo.
   * - Either SourceFacePicture or SourceFacePictureUrl must be specified.
   * 
   * @example
   * base64
   */
  sourceFacePicture?: string;
  /**
   * @remarks
   * The HTTPS or HTTP URL of the face image.
   * 
   * @example
   * https://***face1.jpeg
   */
  sourceFacePictureUrl?: string;
  /**
   * @remarks
   * Base64-encoded reference photo.
   * 
   * Note
   * - If you choose this method to pass in the photo, check the photo size and do not pass in an oversized photo.
   * - Either TargetFacePicture or TargetFacePictureUrl must be specified.
   * 
   * @example
   * base64
   */
  targetFacePicture?: string;
  /**
   * @remarks
   * The HTTPS or HTTP URL of the reference face image.
   * 
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
      sourceFacePictureUrl: 'SourceFacePictureUrl',
      targetFacePicture: 'TargetFacePicture',
      targetFacePictureUrl: 'TargetFacePictureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      facePictureQualityCheck: 'string',
      faceQualityCheck: 'string',
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

