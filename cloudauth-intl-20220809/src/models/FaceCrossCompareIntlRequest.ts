// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceCrossCompareIntlRequest extends $dara.Model {
  /**
   * @remarks
   * The comparison mode. Valid values:
   * - 0: chain comparison (default). A:B and B:C.
   * - 1: circular comparison. A:B, B:C, and C:A.
   * 
   * @example
   * 0
   */
  compareModel?: string;
  /**
   * @remarks
   * The face matching threshold. This parameter is reserved by the system and does not support custom values.
   * 
   * @example
   * -
   */
  faceVerifyThreshold?: string;
  /**
   * @remarks
   * The custom unique business identifier, used for subsequent troubleshooting. The value is a combination of letters and digits with a length of 32 characters. Ensure that the value is unique.
   * 
   * This parameter is required.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c35****
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The product solution to use. Valid values:
   * FACE_CROSS_COMPARE.
   * 
   * This parameter is required.
   * 
   * @example
   * FACE_CROSS_COMPARE
   */
  productCode?: string;
  /**
   * @remarks
   * The custom business scenario ID.
   * 
   * @example
   * 1234567890
   */
  sceneCode?: string;
  /**
   * @remarks
   * The Base64-encoded face photo.
   * 
   * @example
   * base64
   */
  sourceAFacePicture?: string;
  /**
   * @remarks
   * The URL of the face photo. The URL must be a publicly accessible HTTP or HTTPS link.
   * 
   * @example
   * https://www.xxx.com/1.jpg
   */
  sourceAFacePictureUrl?: string;
  /**
   * @remarks
   * The Base64-encoded face photo.
   * 
   * @example
   * base64
   */
  sourceBFacePicture?: string;
  /**
   * @remarks
   * The URL of the face photo. The URL must be a publicly accessible HTTP or HTTPS link.
   * 
   * @example
   * https://www.xxx.com/1.jpg
   */
  sourceBFacePictureUrl?: string;
  /**
   * @remarks
   * The Base64-encoded face photo.
   * 
   * @example
   * base64
   */
  sourceCFacePicture?: string;
  /**
   * @remarks
   * The URL of the face photo. The URL must be a publicly accessible HTTP or HTTPS link.
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

