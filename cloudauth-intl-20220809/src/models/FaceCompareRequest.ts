// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceCompareRequest extends $dara.Model {
  /**
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  merchantBizId?: string;
  sourceFacePicture?: string;
  /**
   * @example
   * https://***face1.jpeg
   */
  sourceFacePictureUrl?: string;
  targetFacePicture?: string;
  /**
   * @example
   * https://***face2.jpeg
   */
  targetFacePictureUrl?: string;
  static names(): { [key: string]: string } {
    return {
      merchantBizId: 'MerchantBizId',
      sourceFacePicture: 'SourceFacePicture',
      sourceFacePictureUrl: 'SourceFacePictureUrl',
      targetFacePicture: 'TargetFacePicture',
      targetFacePictureUrl: 'TargetFacePictureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

