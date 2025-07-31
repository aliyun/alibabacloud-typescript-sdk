// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataServiceAppAuthorizedUsersResponseBodyUserList extends $dara.Model {
  /**
   * @example
   * test
   */
  displayName?: string;
  /**
   * @example
   * 30002101
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceAppAuthorizedUsersResponseBody extends $dara.Model {
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
  userList?: GetDataServiceAppAuthorizedUsersResponseBodyUserList[];
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
      userList: { 'type': 'array', 'itemType': GetDataServiceAppAuthorizedUsersResponseBodyUserList },
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

