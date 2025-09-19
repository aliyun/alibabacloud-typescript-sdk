// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeepfakeDetectIntlRequest extends $dara.Model {
  /**
   * @remarks
   * Input the Base64 encoded format of the face image.
   * > Choose one of FaceUrl or FaceBase64 to input.
   * 
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  faceBase64?: string;
  /**
   * @remarks
   * Input **IMAGE**, indicating a face image.
   * 
   * @example
   * IMAGE
   */
  faceInputType?: string;
  /**
   * @remarks
   * Input the URL address of the face image.
   * > Choose one of FaceUrl or FaceBase64 to input.
   * 
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  faceUrl?: string;
  /**
   * @remarks
   * A unique identifier for the merchant\\"s request, consisting of a 32-character alphanumeric combination. The first few characters are composed of a custom abbreviation defined by the merchant, the middle part can include a period of time, and the latter part can use a random or incremental sequence.
   * 
   * This parameter is required.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c******
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The product solution to be integrated. Value: **FACE_DEEPFAKE**.
   * 
   * This parameter is required.
   * 
   * @example
   * FACE_DEEPFAKE
   */
  productCode?: string;
  /**
   * @remarks
   * Your custom authentication scenario ID, used for querying related records by entering this scenario ID in the console later. Supports a combination of 10 characters, including letters, numbers, or underscores.
   * 
   * @example
   * 1234567890
   */
  sceneCode?: string;
  static names(): { [key: string]: string } {
    return {
      faceBase64: 'FaceBase64',
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

