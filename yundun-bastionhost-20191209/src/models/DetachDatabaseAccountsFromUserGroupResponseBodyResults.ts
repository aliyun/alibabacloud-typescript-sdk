// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetachDatabaseAccountsFromUserGroupResponseBodyResultsDatabaseAccounts } from "./DetachDatabaseAccountsFromUserGroupResponseBodyResultsDatabaseAccounts";


export class DetachDatabaseAccountsFromUserGroupResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The error code that is returned. If OK is returned, the operation was successful. If other error codes are returned, the operation failed.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * A list that shows the authorization results of the database accounts.
   */
  databaseAccounts?: DetachDatabaseAccountsFromUserGroupResponseBodyResultsDatabaseAccounts[];
  /**
   * @remarks
   * The ID of the database on which the permissions are revoked.
   * 
   * @example
   * 27
   */
  databaseId?: string;
  /**
   * @remarks
   * The error message that is returned.
   * 
   * @example
   * N/A
   */
  message?: string;
  /**
   * @remarks
   * The user group ID.
   * 
   * @example
   * 3
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
      databaseAccounts: { 'type': 'array', 'itemType': DetachDatabaseAccountsFromUserGroupResponseBodyResultsDatabaseAccounts },
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

