// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstagramUserInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 399393****
   */
  id?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * Name-Test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstagramUserInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The request status code.
   * 
   * - A value of OK indicates that the request is successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data object.
   * 
   * @example
   * {"Name": "Test"}
   */
  data?: GetInstagramUserInfoResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Sample value sample value sample value
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DED***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetInstagramUserInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
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

