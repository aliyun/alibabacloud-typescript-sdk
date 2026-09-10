// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaOssTempKeyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The temporary AccessKey ID (STS token). This value is used together with securityToken to authenticate direct uploads to OSS. This is a sensitive credential. Do not hard-code it in your code or print it to logs.
   * 
   * @example
   * STS.NY6bbCNqNPpt5GcSTEzB6Lahn
   */
  ak?: string;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * lhm-pre-cn-hangzhou
   */
  bucket?: string;
  /**
   * @remarks
   * The allowed OSS upload directory prefix. The value must end with a forward slash (/). The key of the uploaded object must start with this prefix. Otherwise, the request is rejected by OSS.
   * 
   * @example
   * teleport/meta/1063934947625635/
   */
  dir?: string;
  /**
   * @remarks
   * The endpoint of the region where the OSS bucket resides.
   * 
   * @example
   * oss-cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The credential expiration timestamp in Unix seconds. Before use, verify whether the current time has exceeded this value. If the credential has expired, obtain new credentials.
   * 
   * @example
   * 1779966540
   */
  expire?: number;
  /**
   * @remarks
   * The Base64-encoded upload policy that defines constraints such as file size and path prefix. The decoded value is a JSON string.
   * 
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyNi0wNS0yOFQxMToxMjo1OC43MzZaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwXSxbInN0YXJ0cy13aXRoIiwiJGtleSIsInRlbGVwb3J0L21ldGEvMTA2MzkzNDk0NzYyNTYzNS8iXV19
   */
  policy?: string;
  /**
   * @remarks
   * The STS temporary security token. This value is used together with ak for authentication and is returned only in STS authentication mode. This is a sensitive credential. Do not hard-code it in your code or print it to logs.
   * 
   * @example
   * CAIS3QJ1q6Ft5B2yfSjIr5rsAOjugKcY9YqlSRPBlWEFZN1V3fD6gzz2IHhMfHFvA
   */
  securityToken?: string;
  /**
   * @remarks
   * The signature calculated based on the policy. The OSS server uses this signature to verify the validity of upload requests.
   * 
   * @example
   * ydDYrWUzfKNM6slVhjPhUx83qUo=
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'ak',
      bucket: 'bucket',
      dir: 'dir',
      endpoint: 'endpoint',
      expire: 'expire',
      policy: 'policy',
      securityToken: 'securityToken',
      signature: 'signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      bucket: 'string',
      dir: 'string',
      endpoint: 'string',
      expire: 'number',
      policy: 'string',
      securityToken: 'string',
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

export class GetMetaOssTempKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response body. For more information about the fields, see the child field descriptions.
   */
  data?: GetMetaOssTempKeyResponseBodyData;
  /**
   * @remarks
   * The error code. An empty string is returned if the call is successful.
   * 
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @remarks
   * The error message. An empty string is returned if the call is successful.
   * 
   * @example
   * success
   */
  errMessage?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * - true: The call is successful.
   * - false: The call failed. Check errCode and errMessage for troubleshooting.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMetaOssTempKeyResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      success: 'boolean',
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

