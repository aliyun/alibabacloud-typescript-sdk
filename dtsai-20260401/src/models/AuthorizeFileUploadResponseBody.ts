// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AuthorizeFileUploadResponseBodyAuthorizations extends $dara.Model {
  encodedPolicy?: string;
  objectKey?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      encodedPolicy: 'EncodedPolicy',
      objectKey: 'ObjectKey',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodedPolicy: 'string',
      objectKey: 'string',
      signature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeFileUploadResponseBody extends $dara.Model {
  /**
   * @remarks
   * The temporary AccessKey ID used for OSS PostObject.
   * 
   * @example
   * STS.NV5xxx
   */
  accessKeyId?: string;
  authorizations?: AuthorizeFileUploadResponseBodyAuthorizations[];
  /**
   * @remarks
   * The destination OSS bucket.
   * 
   * @example
   * dts-ai-upload-cn-beijing7500163e0eae09
   */
  bucket?: string;
  /**
   * @remarks
   * The Base64-encoded PostObject policy, which includes the ObjectKey and file size limits.
   * 
   * @example
   * eyJleHBpcmF0aW9uIjo...
   */
  encodedPolicy?: string;
  /**
   * @remarks
   * OSS Endpoint
   * 
   * @example
   * oss-cn-beijing.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidParameter
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The parameter [Query] is not valid.
   */
  errorMessage?: string;
  expireTime?: number;
  /**
   * @remarks
   * The business-level HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The object key that must be used as-is for the upload.
   * 
   * @example
   * 0a1b_123456_0123456789abcdef0123456789abcdef
   */
  objectKey?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A30D0930-xxxx-xxxx-xxxx-C2C661CC8B58
   */
  requestId?: string;
  /**
   * @remarks
   * The Security Token Service (STS) temporary security token.
   * 
   * @example
   * CAISxxx
   */
  securityToken?: string;
  /**
   * @remarks
   * The policy signature.
   * 
   * @example
   * masked-signature
   */
  signature?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      authorizations: 'Authorizations',
      bucket: 'Bucket',
      encodedPolicy: 'EncodedPolicy',
      endpoint: 'Endpoint',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      expireTime: 'ExpireTime',
      httpStatusCode: 'HttpStatusCode',
      objectKey: 'ObjectKey',
      requestId: 'RequestId',
      securityToken: 'SecurityToken',
      signature: 'Signature',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      authorizations: { 'type': 'array', 'itemType': AuthorizeFileUploadResponseBodyAuthorizations },
      bucket: 'string',
      encodedPolicy: 'string',
      endpoint: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      expireTime: 'number',
      httpStatusCode: 'number',
      objectKey: 'string',
      requestId: 'string',
      securityToken: 'string',
      signature: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.authorizations)) {
      $dara.Model.validateArray(this.authorizations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

