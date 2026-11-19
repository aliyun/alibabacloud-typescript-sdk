// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOssUploadResponseBodyUploadCredentials extends $dara.Model {
  /**
   * @remarks
   * The STS temporary AccessKey ID.
   * 
   * @example
   * STS.Nxxxxxxxxxxxxxxxxxxxxxxxx
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The STS temporary AccessKey secret.
   * 
   * @example
   * xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * OSS Bucket
   * 
   * @example
   * yike-shared-cn-shanghai-1
   */
  bucket?: string;
  /**
   * @remarks
   * The expiration time of the credential in UTC and ISO 8601 format. The actual return value prevails.
   * 
   * @example
   * 2026-11-20T01:32:40Z
   */
  expiration?: string;
  /**
   * @remarks
   * The PostObject policy, which is Base64-encoded. This is returned when POST_POLICY is used.
   * 
   * @example
   * -
   */
  policy?: string;
  /**
   * @remarks
   * The AccessKey ID used for the signature. This is returned when POST_POLICY is used.
   * 
   * @example
   * -
   */
  postAccessKeyId?: string;
  /**
   * @remarks
   * The target endpoint for the POST request. This is returned when POST_POLICY is used.
   * 
   * @example
   * -
   */
  postEndpoint?: string;
  /**
   * @remarks
   * The OSS region, such as cn-shanghai.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The STS security token.
   * 
   * @example
   * xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  securityToken?: string;
  /**
   * @remarks
   * The PostObject signature. This is returned when POST_POLICY is used.
   * 
   * @example
   * -
   */
  signature?: string;
  /**
   * @remarks
   * The pre-signed PUT URL. This is returned when PRESIGNED_URL is used.
   * 
   * @example
   * -
   */
  signedUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucket: 'Bucket',
      expiration: 'Expiration',
      policy: 'Policy',
      postAccessKeyId: 'PostAccessKeyId',
      postEndpoint: 'PostEndpoint',
      region: 'Region',
      securityToken: 'SecurityToken',
      signature: 'Signature',
      signedUrl: 'SignedUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucket: 'string',
      expiration: 'string',
      policy: 'string',
      postAccessKeyId: 'string',
      postEndpoint: 'string',
      region: 'string',
      securityToken: 'string',
      signature: 'string',
      signedUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOssUploadResponseBody extends $dara.Model {
  /**
   * @remarks
   * OSS ObjectKey
   */
  objectKey?: string;
  /**
   * @remarks
   * The **OSS pre-signed GET URL**, which is valid for 24 hours and uses the public endpoint. If the signature generation fails, null is returned, which does not affect direct upload using the credentials.
   * 
   * @example
   * https://yike-shared-pre-2.oss-cn-shanghai.aliyuncs.com/yike-v1/ge2tqn-o5zv6m/2026/11/18/13/upload/media/hkyo9v003.mp4?Expires=1795095160&OSSAccessKeyId=STS.Nxxxxxxxxxxxxxxxxxxxxxxxx&Signature=xxxxxxxxxxx%3D
   */
  ossUrl?: string;
  /**
   * @remarks
   * The **request ID**.
   * 
   * @example
   * F99F2AE5-***-BBD18F101455
   */
  requestId?: string;
  /**
   * @remarks
   * The upload credentials. Some fields may be empty depending on the CredentialType.
   */
  uploadCredentials?: CreateOssUploadResponseBodyUploadCredentials;
  static names(): { [key: string]: string } {
    return {
      objectKey: 'ObjectKey',
      ossUrl: 'OssUrl',
      requestId: 'RequestId',
      uploadCredentials: 'UploadCredentials',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectKey: 'string',
      ossUrl: 'string',
      requestId: 'string',
      uploadCredentials: CreateOssUploadResponseBodyUploadCredentials,
    };
  }

  validate() {
    if(this.uploadCredentials && typeof (this.uploadCredentials as any).validate === 'function') {
      (this.uploadCredentials as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

