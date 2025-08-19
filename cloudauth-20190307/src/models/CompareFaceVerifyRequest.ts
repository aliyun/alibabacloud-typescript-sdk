// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompareFaceVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * Whether cropping is allowed. Default is not allowed, T/F.
   * 
   * - T: Indicates that cropping is required
   * - F: Indicates that cropping is not required (default F)
   * 
   * @example
   * T
   */
  crop?: string;
  /**
   * @remarks
   * A unique identifier for the merchant\\"s request. The value is a 32-character alphanumeric combination, where the first few characters are a custom abbreviation defined by the merchant, followed by a period, and the latter part can be a random or incrementing sequence.
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
   * Authentication scenario ID.
   * 
   * @example
   * 1000000006
   */
  sceneId?: number;
  /**
   * @remarks
   * The CertifyId of a previously successful real-person verification, where the photo taken during that verification is used as the face comparison photo.
   * > Among the four ways to input facial photos (FaceContrastPicture, FaceContrastPictureUrl, CertifyId, OSS), choose one to provide.
   * 
   * @example
   * 0bfa7c493f850e5178b9f8613634c9xx
   */
  sourceCertifyId?: string;
  /**
   * @remarks
   * Base64 encoding of the photo.
   * > Choose one of the four ways to input a face photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, or OSS.
   * 
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  sourceFaceContrastPicture?: string;
  /**
   * @remarks
   * OSS photo URL, currently only supports authorized OSS photo URLs.
   * > Four ways to input face photos: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, and OSS. Choose one of them to input.
   * 
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  sourceFaceContrastPictureUrl?: string;
  /**
   * @remarks
   * Name of the authorized OSS bucket.
   * > Choose one of the four ways to input face photos: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, or OSS.
   * 
   * @example
   * cn-shanghai-aliyun-cloudauth-xxxxx
   */
  sourceOssBucketName?: string;
  /**
   * @remarks
   * Filename of the authorized OSS space.
   * > Choose one of the four ways to input face photos: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, or OSS.
   * 
   * @example
   * verify/xxxxx/xxxxxx.jpeg
   */
  sourceOssObjectName?: string;
  /**
   * @remarks
   * CertifyId from a previously successful real-person authentication, where the photo taken during the authentication is used for face comparison.
   * 
   * > Choose one of the four methods to provide the reference face photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, or OSS.
   * 
   * @example
   * 0bfa7c493f850e5178b9f8613634c9xx
   */
  targetCertifyId?: string;
  /**
   * @remarks
   * Base64 encoding of the reference photo.
   * 
   * > Choose one of the four methods to provide the reference face photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, or OSS.
   * 
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  targetFaceContrastPicture?: string;
  /**
   * @remarks
   * OSS address of the reference photo. Currently, only authorized OSS addresses are supported.
   * 
   * > Choose one of the four methods to provide the reference face photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, or OSS.
   * 
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  targetFaceContrastPictureUrl?: string;
  /**
   * @remarks
   * Name of the authorized OSS bucket.
   * 
   * > Choose one of the four methods to provide the reference face photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, or OSS.
   * 
   * @example
   * cn-shanghai-aliyun-cloudauth-xxxxx
   */
  targetOssBucketName?: string;
  /**
   * @remarks
   * File name in the authorized OSS space.
   * 
   * > Choose one of the four methods to provide the reference face photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, or OSS.
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

