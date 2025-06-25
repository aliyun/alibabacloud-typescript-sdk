// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetachDatabaseAccountsFromUserResponseBodyResultsDatabaseAccounts } from "./DetachDatabaseAccountsFromUserResponseBodyResultsDatabaseAccounts";


export class DetachDatabaseAccountsFromUserResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The error code that is returned. If **OK** is returned, the operation was successful. If another error code is returned, the operation failed.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * A list that shows the operation results of the database accounts.
   */
  databaseAccounts?: DetachDatabaseAccountsFromUserResponseBodyResultsDatabaseAccounts[];
  /**
   * @remarks
   * The ID of the database on which the permissions are revoked.
   * 
   * @example
   * 4
   */
  databaseId?: string;
  /**
   * @remarks
   * The error message that is returned.
   */
  message?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      databaseAccounts: 'DatabaseAccounts',
      databaseId: 'DatabaseId',
      message: 'Message',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      databaseAccounts: { 'type': 'array', 'itemType': DetachDatabaseAccountsFromUserResponseBodyResultsDatabaseAccounts },
      databaseId: 'string',
      message: 'string',
      userId: 'string',
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

