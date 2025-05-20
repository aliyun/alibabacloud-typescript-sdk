// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeepfakeDetectIntlRequest extends $dara.Model {
  /**
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  faceBase64?: string;
  /**
   * @example
   * IMAGE
   */
  faceInputType?: string;
  /**
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  faceUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c******
   */
  merchantBizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FACE_DEEPFAKE
   */
  productCode?: string;
  /**
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

