// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataServiceProjectAddableUsersResponseBodyUserList extends $dara.Model {
  /**
   * @example
   * xx@aliyuncs.com
   */
  accountName?: string;
  /**
   * @example
   * test
   */
  displayName?: string;
  /**
   * @example
   * 30012011
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      displayName: 'DisplayName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      displayName: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceProjectAddableUsersResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  success?: boolean;
  userList?: GetDataServiceProjectAddableUsersResponseBodyUserList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      userList: { 'type': 'array', 'itemType': GetDataServiceProjectAddableUsersResponseBodyUserList },
    };
  }

  validate() {
    if(Array.isArray(this.userList)) {
      $dara.Model.validateArray(this.userList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

