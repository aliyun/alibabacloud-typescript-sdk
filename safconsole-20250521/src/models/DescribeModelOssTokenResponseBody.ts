// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelOssTokenResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * Lxxxxxxxxxxxxxxxxxxxxx
   */
  accessId?: string;
  /**
   * @example
   * https://safxxxxxxxxx.aliyuncs.com
   */
  host?: string;
  /**
   * @example
   * saf/xxxxxx/xxxxxx
   */
  key?: string;
  /**
   * @example
   * eyJleHBpcmF0aW9uIjoiMxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  policy?: string;
  /**
   * @example
   * lUxxxxxxxxxxxxxxxxxxxx
   */
  signature?: string;
  /**
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
   * @example
   * Lxxxxxxxxxxxxxxxxxxxxx
   */
  accessId?: string;
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * https://safxxxxxxxxx.aliyuncs.com
   */
  host?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * saf/xxxxxx/xxxxxx
   */
  key?: string;
  /**
   * @example
   * eyJleHBpcmF0aW9uIjoiMxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  policy?: string;
  /**
   * @example
   * 4A91D2D1-AEC9-1658-ABCE-5A39DE66A5C2
   */
  requestId?: string;
  resultObject?: DescribeModelOssTokenResponseBodyResultObject;
  /**
   * @example
   * lUxxxxxxxxxxxxxxxxxxxx
   */
  signature?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

