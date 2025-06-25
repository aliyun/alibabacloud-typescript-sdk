// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AttachHostAccountsToUserGroupResponseBodyResultsHostAccounts } from "./AttachHostAccountsToUserGroupResponseBodyResultsHostAccounts";


export class AttachHostAccountsToUserGroupResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The return code that indicates whether the call was successful. Valid values:
   * 
   * *   **OK**: The call was successful.
   * *   **UNEXPECTED**: An unknown error occurred.
   * *   **INVALID_ARGUMENT**: A request parameter is invalid.
   * *   **OBJECT_NOT_FOUND**: The specified object on which you want to perform the operation does not exist.
   * *   **OBJECT_AlREADY_EXISTS**: The specified object on which you want to perform the operation already exists.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The result of authorizing the specified user group to manage the specified host accounts.
   */
  hostAccounts?: AttachHostAccountsToUserGroupResponseBodyResultsHostAccounts[];
  /**
   * @remarks
   * The ID of the host.
   * 
   * @example
   * 1
   */
  hostId?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * N/A
   */
  message?: string;
  /**
   * @remarks
   * The ID of the user group.
   * 
   * @example
   * 1
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostAccounts: 'HostAccounts',
      hostId: 'HostId',
      message: 'Message',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccounts: { 'type': 'array', 'itemType': AttachHostAccountsToUserGroupResponseBodyResultsHostAccounts },
      hostId: 'string',
      message: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hostAccounts)) {
      $dara.Model.validateArray(this.hostAccounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

