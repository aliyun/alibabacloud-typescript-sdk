// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUploadMediaResponseBodyUploadCredentials extends $dara.Model {
  /**
   * @remarks
   * The temporary STS AccessKey ID. This field is returned when `STS_TOKEN` is used.
   * 
   * @example
   * STS.NUgYrLnoC63mLqWeRtYuIoPaSdF
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The temporary STS AccessKey secret. This field is returned when `STS_TOKEN` is used.
   * 
   * @example
   * CVwjCkNzTMupZ8nRtYeXwQaBcDfGhIjK
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The OSS bucket. This field is returned when `STS_TOKEN`, `POST_POLICY`, or `PRESIGNED_URL` is used.
   * 
   * @example
   * yike-shared-ap-southeast-1-1
   */
  bucket?: string;
  /**
   * @remarks
   * The expiration time of the credential in UTC and ISO 8601 format.
   * 
   * @example
   * 2026-11-18T12:00:00Z
   */
  expiration?: string;
  /**
   * @remarks
   * The Base64-encoded PostObject policy. This field is returned when `POST_POLICY` is used.
   * 
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyNi0xMS0xOFQxMjowMDowMFoiLCJjb25kaXRpb25zIjpbXX0=
   */
  policy?: string;
  /**
   * @remarks
   * The AccessKey ID used for the signature. This field is returned when `POST_POLICY` is used.
   * 
   * @example
   * LTAI5tG8XkQmP2vR9wYzAbCd
   */
  postAccessKeyId?: string;
  /**
   * @remarks
   * The destination endpoint for the POST request. This field is returned when `POST_POLICY` is used.
   * 
   * @example
   * https://yike-shared-ap-southeast-1-1.oss-ap-southeast-1.aliyuncs.com
   */
  postEndpoint?: string;
  /**
   * @remarks
   * The OSS region. This field is returned in all three credential modes.
   * 
   * @example
   * ap-southeast-1
   */
  region?: string;
  /**
   * @remarks
   * The STS security token. This field is returned when `STS_TOKEN` is used.
   * 
   * @example
   * CAISjgJ1q6Ft5B2yfSjIr5DDEOTM2pZ6g7oIExampleToken
   */
  securityToken?: string;
  /**
   * @remarks
   * The PostObject signature. This field is returned when `POST_POLICY` is used.
   * 
   * @example
   * vXkQ9dRt2mLpN8sYwZaBcDfEgHj=
   */
  signature?: string;
  /**
   * @remarks
   * The pre-signed PUT URL. This field is returned when `PRESIGNED_URL` is used.
   * 
   * @example
   * https://yike-shared-ap-southeast-1-1.oss-ap-southeast-1.aliyuncs.com/yike-v1/.../demo.mp4?Expires=1763467200&OSSAccessKeyId=STS.xxx&Signature=xxx
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

export class CreateUploadMediaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unsigned OSS URL of the file in the `oss://bucket/objectKey` format.
   * 
   * @example
   * oss://yike-shared-ap-southeast-1-1/yike-v1/gi3dkn-gi3dkn/2026-11-18/08/video/b7e94fc0e1bf71f1bfa2f6e7c5486601aB3xYz01.mp4
   */
  fileURL?: string;
  /**
   * @remarks
   * The media asset ID.
   * 
   * @example
   * b7e94fc0e*****6e7c5486601
   */
  mediaId?: string;
  /**
   * @remarks
   * The OSS object key in the `yike-v1/uid segment-ws segment/date/hour/type/mediaId+random string+source suffix.file name extension` format.
   * 
   * @example
   * yike-v1/gi3dkn-gi3dkn/2026-11-18/08/video/b7e94fc0e1bf71f1bfa2f6e7c5486601aB3xYz01.mp4
   */
  objectKey?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B4C2E10-3F5A-4D6B-8C7D-1E2F3A4B5C6D
   */
  requestId?: string;
  /**
   * @remarks
   * The storage location identifier in the `bucket.endpoint` format.
   * 
   * @example
   * yike-shared-ap-southeast-1-1.oss-ap-southeast-1.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The expiration time of the ticket in UTC and ISO 8601 format. This field is returned when `UPLOAD_TICKET` is used.
   * 
   * @example
   * 2026-11-18T12:00:00Z
   */
  ticketExpiration?: string;
  /**
   * @remarks
   * The upload credentials. Some fields may be empty depending on the `CredentialType`.
   */
  uploadCredentials?: CreateUploadMediaResponseBodyUploadCredentials;
  /**
   * @remarks
   * The upload ticket. This field is returned when `UPLOAD_TICKET` is used. It is a 27-character string in the UT1+region code+random string+check digit format. A real credential is issued based on this ticket during a ticket exchange.
   * 
   * @example
   * UT1SGK7M2QX9R4T6V8W0Y3Z5ABC
   */
  uploadTicket?: string;
  static names(): { [key: string]: string } {
    return {
      fileURL: 'FileURL',
      mediaId: 'MediaId',
      objectKey: 'ObjectKey',
      requestId: 'RequestId',
      storageLocation: 'StorageLocation',
      ticketExpiration: 'TicketExpiration',
      uploadCredentials: 'UploadCredentials',
      uploadTicket: 'UploadTicket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURL: 'string',
      mediaId: 'string',
      objectKey: 'string',
      requestId: 'string',
      storageLocation: 'string',
      ticketExpiration: 'string',
      uploadCredentials: CreateUploadMediaResponseBodyUploadCredentials,
      uploadTicket: 'string',
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

