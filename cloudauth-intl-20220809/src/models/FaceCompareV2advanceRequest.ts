// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class FaceCompareV2AdvanceRequest extends $dara.Model {
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
  sourceFacePictureFileObject?: Readable;
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
  targetFacePictureFileObject?: Readable;
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
      sourceFacePictureFileObject: 'SourceFacePictureFile',
      sourceFacePictureUrl: 'SourceFacePictureUrl',
      targetFacePicture: 'TargetFacePicture',
      targetFacePictureFileObject: 'TargetFacePictureFile',
      targetFacePictureUrl: 'TargetFacePictureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      facePictureQualityCheck: 'string',
      faceQualityCheck: 'string',
      merchantBizId: 'string',
      sourceFacePicture: 'string',
      sourceFacePictureFileObject: 'Readable',
      sourceFacePictureUrl: 'string',
      targetFacePicture: 'string',
      targetFacePictureFileObject: 'Readable',
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

