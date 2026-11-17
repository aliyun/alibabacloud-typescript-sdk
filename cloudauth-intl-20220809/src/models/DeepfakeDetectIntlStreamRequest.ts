// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeepfakeDetectIntlStreamRequest extends $dara.Model {
  /**
   * @remarks
   * The Base64-encoded string of the face image. For videos, pass the data as a stream.
   * 
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  faceBase64?: string;
  /**
   * @remarks
   * The input stream of the image.
   * 
   * @example
   * -
   */
  faceFile?: string;
  /**
   * @remarks
   * The input type of the face material. Valid values:
   * - IMAGE: face image. This is the default value.
   * - VIDEO: face video.
   * 
   * Note: Video processing takes a long time. Set the timeout period to a value greater than 3 seconds.
   * 
   * @example
   * IMAGE
   */
  faceInputType?: string;
  /**
   * @remarks
   * The URL of the face image.
   * 
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  faceUrl?: string;
  /**
   * @remarks
   * The unique identifier of the merchant request. The value is a 32-character alphanumeric string. The first few characters consist of a custom merchant abbreviation, the middle part can contain a time period, and the latter part can be a random or incremental sequence.
   * 
   * @example
   * e0c34a***353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The product solution to be integrated. Valid values: FACE_DEEPFAKE.
   * 
   * @example
   * FACE_DEEPFAKE
   */
  productCode?: string;
  /**
   * @remarks
   * The custom authentication scenario ID, which is used to query related records by entering this scenario ID in the console. The value must be 10 characters in length and can contain letters, digits, and underscores.
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

