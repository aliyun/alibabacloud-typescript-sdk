// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeepfakeDetectIntlRequest extends $dara.Model {
  /**
   * @remarks
   * The Base64-encoded content of the facial image.
   * > Specify either FaceUrl or FaceBase64.
   * 
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  faceBase64?: string;
  /**
   * @remarks
   * Set the value to **IMAGE** to specify a facial image.
   * 
   * @example
   * IMAGE
   */
  faceInputType?: string;
  /**
   * @remarks
   * The URL of the facial image.
   * > Specify either FaceUrl or FaceBase64.
   * 
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  faceUrl?: string;
  /**
   * @remarks
   * The unique identifier of the merchant request. The value is a 32-character combination of letters and digits. The first few characters are a custom merchant abbreviation, the middle part can contain a timestamp, and the last part can be a random or incremental sequence.
   * 
   * This parameter is required.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c******
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The product solution to use. Set the value to **FACE_DEEPFAKE**.
   * 
   * This parameter is required.
   * 
   * @example
   * FACE_DEEPFAKE
   */
  productCode?: string;
  /**
   * @remarks
   * The custom scene ID for authentication. You can use this scene ID to query related records in the console. The value can be up to 10 characters long and can contain letters, digits, and underscores.
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

