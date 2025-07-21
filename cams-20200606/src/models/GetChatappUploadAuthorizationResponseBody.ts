// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatappUploadAuthorizationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID that is used to authorize a user to upload a file to Object Storage Service (OSS).
   * 
   * @example
   * 2skeuurfj****
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret that is used to authorize a user to upload a file to OSS.
   * 
   * @example
   * skdkdukeuuuu****
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The name of the bucket to which a file is uploaded in OSS.
   * 
   * @example
   * oss
   */
  bucketName?: string;
  /**
   * @remarks
   * The directory to which the file is uploaded in Object Storage Service (OSS).
   * 
   * @example
   * 1000102939
   */
  dir?: string;
  /**
   * @remarks
   * The address of the OSS server to which a file is uploaded.
   * 
   * @example
   * https://oss.com
   */
  endPoint?: string;
  /**
   * @remarks
   * The timeout period.
   * 
   * @example
   * 3600
   */
  expire?: number;
  /**
   * @remarks
   * The security token.
   * 
   * @example
   * dkdieiii**
   */
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucketName: 'BucketName',
      dir: 'Dir',
      endPoint: 'EndPoint',
      expire: 'Expire',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucketName: 'string',
      dir: 'string',
      endPoint: 'string',
      expire: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappUploadAuthorizationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Access denied for detailed information.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetChatappUploadAuthorizationResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetChatappUploadAuthorizationResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

