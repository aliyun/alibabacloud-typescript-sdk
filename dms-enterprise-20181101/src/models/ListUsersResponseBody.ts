// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUsersResponseBodyUserList } from "./ListUsersResponseBodyUserList";


export class ListUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * InvalidTid
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * Specified parameter Tid is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 69161997-6030-53BA-A333-DBEC83B732FF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  /**
   * @remarks
   * The details of users.
   */
  userList?: ListUsersResponseBodyUserList;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      userList: ListUsersResponseBodyUserList,
    };
  }

  validate() {
    if(this.userList && typeof (this.userList as any).validate === 'function') {
      (this.userList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

