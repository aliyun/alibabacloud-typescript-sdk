// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LivenessFaceVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier for ID Verification.
   * 
   * @example
   * 91707dc296d469ad38e4c5efa6a0f24b
   */
  certifyId?: string;
  /**
   * @remarks
   * Specifies whether to allow cropping of face images. Valid values:
   * 
   * - T: Cropping is allowed.
   * 
   * - F: Cropping is not allowed. This is the default value.
   * 
   * @example
   * T
   */
  crop?: string;
  /**
   * @remarks
   * The device token, which is used for risk identification.
   * 
   * @example
   * McozS1ZWRcRZStlERcZZo_QOytx5jcgZoZJEoRLOxxxxxxx
   */
  deviceToken?: string;
  /**
   * @remarks
   * The Base64-encoded photo.
   * 
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  faceContrastPicture?: string;
  /**
   * @remarks
   * The URL of the image.
   * 
   * @example
   * https://ware.cdeledu.com/upfile/uploadPic/2025/03/21/dd62fbb9c966433ab0ba9a7252816b30.jpg
   */
  faceContrastPictureUrl?: string;
  /**
   * @remarks
   * The IP address of the user.
   * 
   * @example
   * 114.xxx.xxx.xxx
   */
  ip?: string;
  /**
   * @remarks
   * The mobile phone number of the user.
   * 
   * @example
   * 130xxxxxxxx
   */
  mobile?: string;
  /**
   * @remarks
   * The liveness detection parameters.
   * 
   * @example
   * FRONT_CAMERA_LIVENESS
   */
  model?: string;
  /**
   * @remarks
   * The name of the authorized OSS bucket.
   * 
   * @example
   * cn-shanghai-aliyun-cloudauth-1494517779820665
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The name of the object in the authorized OSS bucket.
   * 
   * @example
   * facedetect/17483113370916034.jpg
   */
  ossObjectName?: string;
  /**
   * @remarks
   * The custom unique business identifier on the customer\\"s server, which is used for subsequent troubleshooting.
   * The value can be up to 32 characters in length and can contain letters and digits. Make sure that the value is unique.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  outerOrderNo?: string;
  /**
   * @remarks
   * The fixed value: LR_FR_MIN.
   * 
   * @example
   * LR_FR_MIN
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the authentication scenario. This ID is automatically generated after you create an authentication scenario in the console.
   * 
   * @example
   * 100000****
   */
  sceneId?: number;
  /**
   * @remarks
   * The custom user ID. The value can be up to 100 characters in length. Make sure that the value is unique.
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

