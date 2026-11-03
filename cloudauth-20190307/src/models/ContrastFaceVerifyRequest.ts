// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContrastFaceVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The real name.
   * 
   * @example
   * Zhang San
   */
  certName?: string;
  /**
   * @remarks
   * The ID document number.
   * 
   * @example
   * 330103xxxxxxxxxxxx
   */
  certNo?: string;
  /**
   * @remarks
   * The type of the ID document. Only ID cards are supported. Set the value to IDENTITY_CARD.
   * 
   * @example
   * IDENTITY_CARD
   */
  certType?: string;
  /**
   * @remarks
   * The CertifyId of a previous successful ID Verification. The photo used in the previous verification is used as the comparison photo.
   * 
   * > You can use only one of the following methods to upload the image: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, and OSS.
   * 
   * @example
   * 0bfa7c493f850e5178b9f8613634c9xx
   */
  certifyId?: string;
  /**
   * @remarks
   * Specifies whether to allow cropping of the face image. Valid values:
   * - T: Cropping is allowed.
   * - F: Cropping is not allowed. This is the default value.
   * 
   * @example
   * T
   */
  crop?: string;
  /**
   * @remarks
   * The device token for risk identification.
   * 
   * @example
   * McozS1ZWRcRZStlERcZZo_QOytx5jcgZoZJEoRLOxxxxxxx
   */
  deviceToken?: string;
  /**
   * @remarks
   * The encryption type. An empty value indicates that encryption is not used.
   * 
   * @example
   * SM2
   */
  encryptType?: string;
  /**
   * @remarks
   * The local video file.
   * 
   * @example
   * None
   */
  faceContrastFile?: string;
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
   * The URL of the photo in OSS. Only authorized OSS photo URLs are supported.
   * 
   * > You can use only one of the following methods to upload the image: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, and OSS.
   * 
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
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
   * The type of liveness detection.
   * 
   * @example
   * FRONT_CAMERA_LIVENESS
   */
  model?: string;
  /**
   * @remarks
   * The name of the authorized OSS bucket.
   * 
   * > You can use only one of the following methods to upload the image: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, and OSS.
   * 
   * @example
   * cn-shanghai-aliyun-cloudauth-xxxxx
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The name of the object in the authorized OSS bucket.
   * 
   * > You can use only one of the following methods to upload the image: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, and OSS.
   * 
   * @example
   * verify/xxxxx/xxxxxx.jpeg
   */
  ossObjectName?: string;
  /**
   * @remarks
   * The unique identifier of the merchant request. The value is a 32-character alphanumeric string. The first few characters are a custom abbreviation of the merchant, the middle part can be a period of time, and the last part can be a random or incremental sequence.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  outerOrderNo?: string;
  /**
   * @remarks
   * The product code. Set the value to ID_MIN.
   * 
   * @example
   * ID_MIN
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the authentication scenario.
   * 
   * @example
   * 1000000006
   */
  sceneId?: number;
  /**
   * @remarks
   * The custom user ID in the customer\\"s business system.
   * 
   * @example
   * 123456789
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      certNo: 'CertNo',
      certType: 'CertType',
      certifyId: 'CertifyId',
      crop: 'Crop',
      deviceToken: 'DeviceToken',
      encryptType: 'EncryptType',
      faceContrastFile: 'FaceContrastFile',
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
      certName: 'string',
      certNo: 'string',
      certType: 'string',
      certifyId: 'string',
      crop: 'string',
      deviceToken: 'string',
      encryptType: 'string',
      faceContrastFile: 'string',
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

