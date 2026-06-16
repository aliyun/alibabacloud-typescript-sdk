// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeepfakeDetectIntlStreamRequest extends $dara.Model {
  /**
   * @remarks
   * The Base64-encoded face image. For videos, we recommend that you use the stream method for transmission.
   * 
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  faceBase64?: string;
  /**
   * @remarks
   * The image input stream.
   * 
   * @example
   * -
   */
  faceFile?: string;
  /**
   * @remarks
   * The type of facial material input:
   * 
   * - IMAGE (default): Face image
   * - VIDEO: Face video
   * 
   * Note
   * Video processing takes a long time. We recommend that you set the timeout period to more than 3 seconds.
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
   * The unique identifier of the merchant request. The value is an alphanumeric string with a length of 32 characters.
   * 
   * The first few characters consist of a custom abbreviation defined by the merchant, the middle part can contain a timestamp, and the last part can use a random or incremental sequence.
   * 
   * @example
   * e0c34a***353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The product solution to integrate.
   * Valid value: FACE_DEEPFAKE
   * 
   * @example
   * FACE_DEEPFAKE
   */
  productCode?: string;
  /**
   * @remarks
   * A custom verification scenario ID that you define. This ID is used to query related records in the console.
   * 
   * The value is a combination of letters, digits, or underscores (_) with a maximum length of 10 characters.
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

