// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LivenessFaceVerifyRequest extends $dara.Model {
  /**
   * @example
   * 91707dc296d469ad38e4c5efa6a0f24b
   */
  certifyId?: string;
  /**
   * @example
   * T
   */
  crop?: string;
  /**
   * @example
   * McozS1ZWRcRZStlERcZZo_QOytx5jcgZoZJEoRLOxxxxxxx
   */
  deviceToken?: string;
  /**
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  faceContrastPicture?: string;
  /**
   * @example
   * https://ware.cdeledu.com/upfile/uploadPic/2025/03/21/dd62fbb9c966433ab0ba9a7252816b30.jpg
   */
  faceContrastPictureUrl?: string;
  /**
   * @example
   * 114.xxx.xxx.xxx
   */
  ip?: string;
  /**
   * @example
   * 130xxxxxxxx
   */
  mobile?: string;
  /**
   * @example
   * FRONT_CAMERA_LIVENESS
   */
  model?: string;
  /**
   * @example
   * cn-shanghai-aliyun-cloudauth-1494517779820665
   */
  ossBucketName?: string;
  /**
   * @example
   * facedetect/17483113370916034.jpg
   */
  ossObjectName?: string;
  /**
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  outerOrderNo?: string;
  /**
   * @example
   * LR_FR_MIN
   */
  productCode?: string;
  /**
   * @example
   * 100000****
   */
  sceneId?: number;
  /**
   * @example
   * 123456789
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      crop: 'Crop',
      deviceToken: 'DeviceToken',
      faceContrastPicture: 'FaceContrastPicture',
      faceContrastPictureUrl: 'FaceContrastPictureUrl',
      ip: 'Ip',
      mobile: 'Mobile',
      model: 'Model',
      ossBucketName: 'OssBucketName',
      ossObjectName: 'OssObjectName',
      outerOrderNo: 'OuterOrderNo',
      productCode: 'ProductCode',
      sceneId: 'SceneId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      crop: 'string',
      deviceToken: 'string',
      faceContrastPicture: 'string',
      faceContrastPictureUrl: 'string',
      ip: 'string',
      mobile: 'string',
      model: 'string',
      ossBucketName: 'string',
      ossObjectName: 'string',
      outerOrderNo: 'string',
      productCode: 'string',
      sceneId: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

