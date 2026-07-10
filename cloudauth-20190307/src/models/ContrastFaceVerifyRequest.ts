// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContrastFaceVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The real name.
   * 
   * @example
   * 张三
   */
  certName?: string;
  /**
   * @remarks
   * The certificate number.
   * 
   * @example
   * 330103xxxxxxxxxxxx
   */
  certNo?: string;
  /**
   * @remarks
   * The certificate type.
   * Currently only ID cards are supported. You must set this parameter to IDENTITY_CARD.
   * 
   * @example
   * IDENTITY_CARD
   */
  certType?: string;
  /**
   * @remarks
   * The CertifyId from a previous successful ID Verification. The photo from that verification is used as the comparison photo.
   * 
   * > Among the four methods of passing in images (FaceContrastPicture, FaceContrastPictureUrl, CertifyId, and OSS), select only one.
   * 
   * @example
   * 0bfa7c493f850e5178b9f8613634c9xx
   */
  certifyId?: string;
  /**
   * @remarks
   * Specifies whether to allow cropping of the face image. Valid values:
   * 
   * - T: Allowed.
   * 
   * - F (default): Not allowed.
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
   * The encryption type. An empty value indicates no encryption.
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
   * 无
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
   * The OSS photo URL. Currently only authorized OSS photo URLs are supported.
   * 
   * > Among the four methods of passing in images (FaceContrastPicture, FaceContrastPictureUrl, CertifyId, and OSS), select only one.
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
   * The liveness detection type.
   * 
   * @example
   * FRONT_CAMERA_LIVENESS
   */
  model?: string;
  /**
   * @remarks
   * The bucket name of the authorized OSS space.
   * 
   * > Among the four methods of passing in images (FaceContrastPicture, FaceContrastPictureUrl, CertifyId, and OSS), select only one.
   * 
   * @example
   * cn-shanghai-aliyun-cloudauth-xxxxx
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The file name in the authorized OSS space.
   * 
   * > Among the four methods of passing in images (FaceContrastPicture, FaceContrastPictureUrl, CertifyId, and OSS), select only one.
   * 
   * @example
   * verify/xxxxx/xxxxxx.jpeg
   */
  ossObjectName?: string;
  /**
   * @remarks
   * The unique identifier of the merchant request.
   * The value is a 32-character alphanumeric string. The first few characters are a custom abbreviation defined by the merchant, the middle part can be a time segment, and the last part can be a random or incremental sequence.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  outerOrderNo?: string;
  /**
   * @remarks
   * Fixed value: ID_MIN.
   * 
   * @example
   * ID_MIN
   */
  productCode?: string;
  /**
   * @remarks
   * The verification scenario ID.
   * 
   * @example
   * 1000000006
   */
  sceneId?: number;
  /**
   * @remarks
   * The custom user ID defined by the business.
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

