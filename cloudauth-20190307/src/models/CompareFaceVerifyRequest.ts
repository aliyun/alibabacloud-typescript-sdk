// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompareFaceVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow cropping. Default value: F. Valid values:
   * - T: Allowed.
   * - F: Not allowed.
   * 
   * @example
   * T
   */
  crop?: string;
  /**
   * @remarks
   * The unique identifier of the merchant request.
   * 
   * The value is a 32-character alphanumeric string. The first few characters are a custom abbreviation of the merchant, the middle part can be a period of time, and the last part can be a random or incremental sequence.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  outerOrderNo?: string;
  /**
   * @remarks
   * The product code. Fixed value: PV_FC.
   * 
   * @example
   * PV_FC
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the verification scenario.
   * 
   * @example
   * 1000000006
   */
  sceneId?: number;
  /**
   * @remarks
   * The CertifyId of a previous successful ID Verification. The photo used during the verification is used as the face comparison photo.
   * 
   * > You can use one of the following four methods to upload the face photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, and OSS.
   * 
   * @example
   * 0bfa7c493f850e5178b9f8613634c9xx
   */
  sourceCertifyId?: string;
  /**
   * @remarks
   * The Base64-encoded string of the photo.
   * 
   * > You can use one of the following four methods to upload the face photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, and OSS.
   * 
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  sourceFaceContrastPicture?: string;
  /**
   * @remarks
   * The URL of the photo in OSS. Only authorized OSS photo URLs are supported.
   * 
   * > You can use one of the following four methods to upload the face photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, and OSS.
   * 
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  sourceFaceContrastPictureUrl?: string;
  /**
   * @remarks
   * The name of the authorized OSS bucket.
   * 
   * > You can use one of the following four methods to upload the face photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, and OSS.
   * 
   * @example
   * cn-shanghai-aliyun-cloudauth-xxxxx
   */
  sourceOssBucketName?: string;
  /**
   * @remarks
   * The name of the object in the authorized OSS bucket.
   * 
   * > You can use one of the following four methods to upload the face photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, and OSS.
   * 
   * @example
   * verify/xxxxx/xxxxxx.jpeg
   */
  sourceOssObjectName?: string;
  /**
   * @remarks
   * The CertifyId of a previous successful ID Verification. The photo used during the verification is used as the base library face comparison photo.
   * 
   * > You can use one of the following four methods to upload the base library face photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, and OSS.
   * 
   * @example
   * 0bfa7c493f850e5178b9f8613634c9xx
   */
  targetCertifyId?: string;
  /**
   * @remarks
   * The Base64-encoded string of the base library photo.
   * 
   * > You can use one of the following four methods to upload the base library face photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, and OSS.
   * 
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  targetFaceContrastPicture?: string;
  /**
   * @remarks
   * The URL of the base library photo in OSS. Only authorized OSS photo URLs are supported.
   * 
   * > You can use one of the following four methods to upload the base library face photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, and OSS.
   * 
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  targetFaceContrastPictureUrl?: string;
  /**
   * @remarks
   * The name of the authorized OSS bucket.
   * 
   * > You can use one of the following four methods to upload the base library face photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, and OSS.
   * 
   * @example
   * cn-shanghai-aliyun-cloudauth-xxxxx
   */
  targetOssBucketName?: string;
  /**
   * @remarks
   * The name of the object in the authorized OSS bucket.
   * 
   * > You can use one of the following four methods to upload the base library face photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, and OSS.
   * 
   * @example
   * verify/xxxxx/xxxxxx.jpeg
   */
  targetOssObjectName?: string;
  static names(): { [key: string]: string } {
    return {
      crop: 'Crop',
      outerOrderNo: 'OuterOrderNo',
      productCode: 'ProductCode',
      sceneId: 'SceneId',
      sourceCertifyId: 'SourceCertifyId',
      sourceFaceContrastPicture: 'SourceFaceContrastPicture',
      sourceFaceContrastPictureUrl: 'SourceFaceContrastPictureUrl',
      sourceOssBucketName: 'SourceOssBucketName',
      sourceOssObjectName: 'SourceOssObjectName',
      targetCertifyId: 'TargetCertifyId',
      targetFaceContrastPicture: 'TargetFaceContrastPicture',
      targetFaceContrastPictureUrl: 'TargetFaceContrastPictureUrl',
      targetOssBucketName: 'TargetOssBucketName',
      targetOssObjectName: 'TargetOssObjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crop: 'string',
      outerOrderNo: 'string',
      productCode: 'string',
      sceneId: 'number',
      sourceCertifyId: 'string',
      sourceFaceContrastPicture: 'string',
      sourceFaceContrastPictureUrl: 'string',
      sourceOssBucketName: 'string',
      sourceOssObjectName: 'string',
      targetCertifyId: 'string',
      targetFaceContrastPicture: 'string',
      targetFaceContrastPictureUrl: 'string',
      targetOssBucketName: 'string',
      targetOssObjectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

