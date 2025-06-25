// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDatabaseAccountsResponseBodyDatabaseAccounts } from "./ListDatabaseAccountsResponseBodyDatabaseAccounts";


export class ListDatabaseAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned database accounts.
   */
  databaseAccounts?: ListDatabaseAccountsResponseBodyDatabaseAccounts[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4F6C075F-FC86-476E-943B-097BD4E12948
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of database accounts returned.
   * 
   * @example
   * 10
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
      databaseAccounts: { 'type': 'array', 'itemType': ListDatabaseAccountsResponseBodyDatabaseAccounts },
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

