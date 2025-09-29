// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceCrossCompareIntlRequest extends $dara.Model {
  /**
   * @example
   * 0
   */
  compareModel?: string;
  /**
   * @example
   * 0.5
   */
  faceVerifyThreshold?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c35****
   */
  merchantBizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FACE_CROSS_COMPARE
   */
  productCode?: string;
  /**
   * @example
   * 1234567890
   */
  sceneCode?: string;
  /**
   * @example
   * base64
   */
  sourceAFacePicture?: string;
  /**
   * @example
   * https://www.xxx.com/1.jpg
   */
  sourceAFacePictureUrl?: string;
  /**
   * @example
   * base64
   */
  sourceBFacePicture?: string;
  /**
   * @example
   * https://www.xxx.com/1.jpg
   */
  sourceBFacePictureUrl?: string;
  /**
   * @example
   * base64
   */
  sourceCFacePicture?: string;
  /**
   * @example
   * https://www.xxx.com/1.jpg
   */
  sourceCFacePictureUrl?: string;
  static names(): { [key: string]: string } {
    return {
      compareModel: 'CompareModel',
      faceVerifyThreshold: 'FaceVerifyThreshold',
      merchantBizId: 'MerchantBizId',
      productCode: 'ProductCode',
      sceneCode: 'SceneCode',
      sourceAFacePicture: 'SourceAFacePicture',
      sourceAFacePictureUrl: 'SourceAFacePictureUrl',
      sourceBFacePicture: 'SourceBFacePicture',
      sourceBFacePictureUrl: 'SourceBFacePictureUrl',
      sourceCFacePicture: 'SourceCFacePicture',
      sourceCFacePictureUrl: 'SourceCFacePictureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareModel: 'string',
      faceVerifyThreshold: 'string',
      merchantBizId: 'string',
      productCode: 'string',
      sceneCode: 'string',
      sourceAFacePicture: 'string',
      sourceAFacePictureUrl: 'string',
      sourceBFacePicture: 'string',
      sourceBFacePictureUrl: 'string',
      sourceCFacePicture: 'string',
      sourceCFacePictureUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

