// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelOssTokenResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * AccessKeyId for uploading files to OSS.
   * 
   * @example
   * Lxxxxxxxxxxxxxxxxxxxxx
   */
  accessId?: string;
  /**
   * @remarks
   * OSS domain name.
   * 
   * @example
   * https://safxxxxxxxxx.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * Key required for file upload.
   * 
   * @example
   * saf/xxxxxx/xxxxxx
   */
  key?: string;
  /**
   * @remarks
   * Authorization policy for security group control rules.
   * 
   * @example
   * eyJleHBpcmF0aW9uIjoiMxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  policy?: string;
  /**
   * @remarks
   * OSS signature.
   * 
   * @example
   * lUxxxxxxxxxxxxxxxxxxxx
   */
  signature?: string;
  /**
   * @remarks
   * Temporary authorization token for OSS.
   * 
   * @example
   * smxxxxxxxxxxx
   */
  XOssSecurityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      host: 'Host',
      key: 'Key',
      policy: 'Policy',
      signature: 'Signature',
      XOssSecurityToken: 'XOssSecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      host: 'string',
      key: 'string',
      policy: 'string',
      signature: 'string',
      XOssSecurityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelOssTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * AccessKeyId for uploading files to OSS.
   * 
   * @example
   * Lxxxxxxxxxxxxxxxxxxxxx
   */
  accessId?: string;
  /**
   * @remarks
   * Status code. A return value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * OSS domain name.
   * 
   * @example
   * https://safxxxxxxxxx.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Key required for file upload.
   * 
   * @example
   * saf/xxxxxx/xxxxxx
   */
  key?: string;
  /**
   * @remarks
   * Authorization policy for security group control rules.
   * 
   * @example
   * eyJleHBpcmF0aW9uIjoiMxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  policy?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 4A91D2D1-AEC9-1658-ABCE-5A39DE66A5C2
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result.
   */
  resultObject?: DescribeModelOssTokenResponseBodyResultObject;
  /**
   * @remarks
   * OSS signature.
   * 
   * @example
   * lUxxxxxxxxxxxxxxxxxxxx
   */
  signature?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Temporary authorization token for OSS.
   * 
   * @example
   * smxxxxxxxxxxx
   */
  XOssSecurityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      code: 'Code',
      host: 'Host',
      httpStatusCode: 'HttpStatusCode',
      key: 'Key',
      policy: 'Policy',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
      signature: 'Signature',
      success: 'Success',
      XOssSecurityToken: 'XOssSecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      code: 'number',
      host: 'string',
      httpStatusCode: 'number',
      key: 'string',
      policy: 'string',
      requestId: 'string',
      resultObject: DescribeModelOssTokenResponseBodyResultObject,
      signature: 'string',
      success: 'boolean',
      XOssSecurityToken: 'string',
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

