// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeepfakeDetectIntlStreamRequest extends $dara.Model {
  /**
   * @remarks
   * Enter the Base64 encoded format of the face image; for video formats, it is recommended to input via stream.
   * 
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  faceBase64?: string;
  /**
   * @remarks
   * Image input stream.
   * 
   * @example
   * -
   */
  faceFile?: string;
  /**
   * @remarks
   * Face material input type:
   * 
   * - IMAGE (default): Face image
   * - VIDEO: Face video
   * 
   * Note: Video processing takes longer, it is recommended to set the timeout > 3S.
   * 
   * @example
   * IMAGE
   */
  faceInputType?: string;
  /**
   * @remarks
   * Enter the URL address of the face image.
   * 
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  faceUrl?: string;
  /**
   * @remarks
   * A unique identifier for the merchant\\"s request, consisting of a 32-character alphanumeric combination.
   * 
   * The first few characters are composed of a custom abbreviation defined by the merchant, the middle part can include a period of time, and the latter part can use a random or incremental sequence.
   * 
   * @example
   * e0c34a***353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The product solution to be integrated.
   * Value: FACE_DEEPFAKE
   * 
   * @example
   * FACE_DEEPFAKE
   */
  productCode?: string;
  /**
   * @remarks
   * Your custom authentication scenario ID, used for querying related records by entering this scenario ID in the console later.
   * 
   * Supports a combination of 10 characters, including letters, numbers, or underscores.
   * 
   * @example
   * 123****123
   */
  sceneCode?: string;
  static names(): { [key: string]: string } {
    return {
      faceBase64: 'FaceBase64',
      faceFile: 'FaceFile',
      faceInputType: 'FaceInputType',
      faceUrl: 'FaceUrl',
      merchantBizId: 'MerchantBizId',
      productCode: 'ProductCode',
      sceneCode: 'SceneCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceBase64: 'string',
      faceFile: 'string',
      faceInputType: 'string',
      faceUrl: 'string',
      merchantBizId: 'string',
      productCode: 'string',
      sceneCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

