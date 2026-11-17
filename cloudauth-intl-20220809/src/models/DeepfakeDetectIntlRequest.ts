// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeepfakeDetectIntlRequest extends $dara.Model {
  /**
   * @remarks
   * The Base64-encoded string of the face image.
   * > You must specify either FaceUrl or FaceBase64.
   * 
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  faceBase64?: string;
  /**
   * @remarks
   * The face input type. Valid value: **IMAGE**, which indicates a face image.
   * 
   * @example
   * IMAGE
   */
  faceInputType?: string;
  /**
   * @remarks
   * The URL of the face image.
   * > You must specify either FaceUrl or FaceBase64.
   * 
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  faceUrl?: string;
  /**
   * @remarks
   * The unique identifier of the merchant request. The value is a 32-character alphanumeric string. The first few characters consist of a custom merchant abbreviation, the middle part can contain a time period, and the latter part can be a random or incremental sequence.
   * 
   * This parameter is required.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c******
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The product solution to access. Valid value: **FACE_DEEPFAKE**.
   * 
   * This parameter is required.
   * 
   * @example
   * FACE_DEEPFAKE
   */
  productCode?: string;
  /**
   * @remarks
   * The custom authentication scene ID. You can use this ID to query related records in the console. The value can be up to 10 characters in length and can contain letters, digits, and underscores.
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

