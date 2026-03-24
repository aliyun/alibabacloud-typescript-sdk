// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceCrossCompareIntlRequest extends $dara.Model {
  /**
   * @remarks
   * Comparison mode
   * - 0-Chain comparison (default): A:B and B:C
   * - 1-Circular comparison: A:B and B:C and C:A
   * 
   * @example
   * 0
   */
  compareModel?: string;
  /**
   * @remarks
   * Face matching threshold.
   * 
   * @example
   * 0.5
   */
  faceVerifyThreshold?: string;
  /**
   * @remarks
   * A unique business identifier for subsequent troubleshooting. It supports a combination of 32 alphanumeric characters, please ensure its uniqueness.
   * 
   * This parameter is required.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c35****
   */
  merchantBizId?: string;
  /**
   * @remarks
   * Product solution to be integrated. Value: 
   * FACE_CROSS_COMPARE
   * 
   * This parameter is required.
   * 
   * @example
   * FACE_CROSS_COMPARE
   */
  productCode?: string;
  /**
   * @remarks
   * Custom business scenario ID
   * 
   * @example
   * 1234567890
   */
  sceneCode?: string;
  /**
   * @remarks
   * Base64 encoded portrait photo.
   * 
   * @example
   * base64
   */
  sourceAFacePicture?: string;
  /**
   * @remarks
   * Portrait image URL, accessible via HTTP or HTTPS on the public network.
   * 
   * @example
   * https://www.xxx.com/1.jpg
   */
  sourceAFacePictureUrl?: string;
  /**
   * @remarks
   * Base64 encoded portrait photo.
   * 
   * @example
   * base64
   */
  sourceBFacePicture?: string;
  /**
   * @remarks
   * Portrait image URL, accessible via HTTP or HTTPS on the public network.
   * 
   * @example
   * https://www.xxx.com/1.jpg
   */
  sourceBFacePictureUrl?: string;
  /**
   * @remarks
   * Base64 encoded portrait photo.
   * 
   * @example
   * base64
   */
  sourceCFacePicture?: string;
  /**
   * @remarks
   * Portrait image URL, accessible via HTTP or HTTPS on the public network.
   * 
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

