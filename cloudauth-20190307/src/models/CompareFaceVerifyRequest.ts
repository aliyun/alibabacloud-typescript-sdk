// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompareFaceVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether cropping is allowed. Default value: F.
   * 
   * - T: detection is required.
   * - F: detection is required. (Default: F).
   * 
   * @example
   * T
   */
  crop?: string;
  /**
   * @remarks
   * The unique identifier of the merchant request.
   * 
   * The value is a 32-character alphanumeric string. The first few characters are a custom abbreviation defined by the merchant, the middle part can be a time segment, and the last part can be a random or incremental sequence.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  outerOrderNo?: string;
  /**
   * @remarks
   * Fixed value: PV_FC.
   * 
   * @example
   * PV_FC
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
   * The CertifyId from a previous successful ID Verification. The photo captured during that verification is used as the face comparison photo.
   * 
   * > You can use one of the following four methods to submit a face photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, or OSS. Select one method.
   * 
   * @example
   * 0bfa7c493f850e5178b9f8613634c9xx
   */
  sourceCertifyId?: string;
  /**
   * @remarks
   * The Base64-encoded photo.
   * 
   * > You can use one of the following four methods to submit a face photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, or OSS. Select one method.
   * 
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  sourceFaceContrastPicture?: string;
  /**
   * @remarks
   * The OSS photo URL. Only authorized OSS photo URLs are supported.
   * 
   * > You can use one of the following four methods to submit a face photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, or OSS. Select one method.
   * 
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  sourceFaceContrastPictureUrl?: string;
  /**
   * @remarks
   * The bucket name of the authorized OSS space.
   * 
   * > You can use one of the following four methods to submit a face photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, or OSS. Select one method.
   * 
   * @example
   * cn-shanghai-aliyun-cloudauth-xxxxx
   */
  sourceOssBucketName?: string;
  /**
   * @remarks
   * The file name in the authorized OSS space.
   * 
   * > You can use one of the following four methods to submit a face photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, or OSS. Select one method.
   * 
   * @example
   * verify/xxxxx/xxxxxx.jpeg
   */
  sourceOssObjectName?: string;
  /**
   * @remarks
   * The CertifyId from a previous successful ID Verification. The photo captured during that verification is used as the face comparison photo.
   * 
   * > You can use one of the following four methods to submit a reference face photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, or OSS. Select one method.
   * 
   * @example
   * 0bfa7c493f850e5178b9f8613634c9xx
   */
  targetCertifyId?: string;
  /**
   * @remarks
   * The Base64-encoded reference photo.
   * 
   * > You can use one of the following four methods to submit a reference face photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, or OSS. Select one method.
   * 
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  targetFaceContrastPicture?: string;
  /**
   * @remarks
   * The OSS URL of the reference photo. Only authorized OSS photo URLs are supported.
   * 
   * > You can use one of the following four methods to submit a reference face photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, or OSS. Select one method.
   * 
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  targetFaceContrastPictureUrl?: string;
  /**
   * @remarks
   * The bucket name of the authorized OSS space.
   * 
   * > You can use one of the following four methods to submit a reference face photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, or OSS. Select one method.
   * 
   * @example
   * cn-shanghai-aliyun-cloudauth-xxxxx
   */
  targetOssBucketName?: string;
  /**
   * @remarks
   * The file name in the authorized OSS space.
   * 
   * > You can use one of the following four methods to submit a reference face photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, or OSS. Select one method.
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

