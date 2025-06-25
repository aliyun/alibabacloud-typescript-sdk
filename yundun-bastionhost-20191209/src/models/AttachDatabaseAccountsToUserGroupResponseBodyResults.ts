// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AttachDatabaseAccountsToUserGroupResponseBodyResultsDatabaseAccounts } from "./AttachDatabaseAccountsToUserGroupResponseBodyResultsDatabaseAccounts";


export class AttachDatabaseAccountsToUserGroupResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The error code returned. If OK is returned, the authorization was successful. If another error code is returned, the authorization failed.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * A list that shows the authorization results of the database accounts.
   */
  databaseAccounts?: AttachDatabaseAccountsToUserGroupResponseBodyResultsDatabaseAccounts[];
  /**
   * @remarks
   * The database ID.
   * 
   * @example
   * 2
   */
  databaseId?: string;
  /**
   * @remarks
   * The error message returned.
   */
  message?: string;
  /**
   * @remarks
   * The user group ID.
   * 
   * @example
   * 1
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      databaseAccounts: 'DatabaseAccounts',
      databaseId: 'DatabaseId',
      message: 'Message',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      databaseAccounts: { 'type': 'array', 'itemType': AttachDatabaseAccountsToUserGroupResponseBodyResultsDatabaseAccounts },
      databaseId: 'string',
      message: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.databaseAccounts)) {
      $dara.Model.validateArray(this.databaseAccounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

