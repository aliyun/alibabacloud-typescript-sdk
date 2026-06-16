// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserInfoResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The client IP address.
   * 
   * @example
   * 192.168.0.1
   */
  clientIp?: string;
  /**
   * @remarks
   * The RAM user ID.
   * 
   * @example
   * 555666
   */
  subId?: string;
  /**
   * @remarks
   * The user UID.
   * 
   * @example
   * 15633333331111
   */
  userId?: number;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * root
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'clientIp',
      subId: 'subId',
      userId: 'userId',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      subId: 'string',
      userId: 'number',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The input parameter data is not valid. order_storage_company_num component not found
   */
  message?: string;
  /**
   * @remarks
   * The returned object.
   */
  resultObject?: DescribeUserInfoResponseBodyResultObject;
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
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      resultObject: 'resultObject',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      resultObject: DescribeUserInfoResponseBodyResultObject,
      success: 'boolean',
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

