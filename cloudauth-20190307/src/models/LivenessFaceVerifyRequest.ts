// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LivenessFaceVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * Unique identifier for real-person authentication.
   * 
   * @example
   * 91707dc296d469ad38e4c5efa6a0f24b
   */
  certifyId?: string;
  /**
   * @remarks
   * Whether to allow cropping of the face image:
   * 
   * - T: Allow cropping
   * 
   * - F (default): Do not allow cropping.
   * 
   * @example
   * T
   */
  crop?: string;
  /**
   * @remarks
   * Device token, used for risk identification.
   * 
   * @example
   * McozS1ZWRcRZStlERcZZo_QOytx5jcgZoZJEoRLOxxxxxxx
   */
  deviceToken?: string;
  /**
   * @remarks
   * Base64 encoded photo.
   * 
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  faceContrastPicture?: string;
  /**
   * @remarks
   * Image URL.
   * 
   * @example
   * https://ware.cdeledu.com/upfile/uploadPic/2025/03/21/dd62fbb9c966433ab0ba9a7252816b30.jpg
   */
  faceContrastPictureUrl?: string;
  /**
   * @remarks
   * User\\"s network IP address.
   * 
   * @example
   * 114.xxx.xxx.xxx
   */
  ip?: string;
  /**
   * @remarks
   * User\\"s mobile phone number.
   * 
   * @example
   * 130xxxxxxxx
   */
  mobile?: string;
  /**
   * @remarks
   * Liveness detection parameters.
   * 
   * @example
   * FRONT_CAMERA_LIVENESS
   */
  model?: string;
  /**
   * @remarks
   * Authorized OSS bucket name.
   * 
   * @example
   * cn-shanghai-aliyun-cloudauth-1494517779820665
   */
  ossBucketName?: string;
  /**
   * @remarks
   * Authorized OSS file name.
   * 
   * @example
   * facedetect/17483113370916034.jpg
   */
  ossObjectName?: string;
  /**
   * @remarks
   * A unique business identifier defined by the client side, used for subsequent troubleshooting. The value should be a combination of letters and numbers up to 32 characters long, ensuring uniqueness.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  outerOrderNo?: string;
  /**
   * @remarks
   * Fixed value: LR_FR_MIN.
   * 
   * @example
   * LR_FR_MIN
   */
  productCode?: string;
  /**
   * @remarks
   * Authentication scenario ID. This ID is automatically generated after creating an authentication scenario in the console.
   * 
   * @example
   * 100000****
   */
  sceneId?: number;
  /**
   * @remarks
   * Your custom user ID (up to 100 characters), please ensure it is unique.
   * 
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

