// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDatabaseAccountsForUserResponseBodyDatabaseAccounts } from "./ListDatabaseAccountsForUserResponseBodyDatabaseAccounts";


export class ListDatabaseAccountsForUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The database accounts returned.
   */
  databaseAccounts?: ListDatabaseAccountsForUserResponseBodyDatabaseAccounts[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 00E3701B-3616-55FE-93EC-E7CF5480B654
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of database accounts that are returned.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      databaseAccounts: 'DatabaseAccounts',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccounts: { 'type': 'array', 'itemType': ListDatabaseAccountsForUserResponseBodyDatabaseAccounts },
      requestId: 'string',
      totalCount: 'number',
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

