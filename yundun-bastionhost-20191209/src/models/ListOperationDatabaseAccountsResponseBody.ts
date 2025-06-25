// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListOperationDatabaseAccountsResponseBodyDatabaseAccounts } from "./ListOperationDatabaseAccountsResponseBodyDatabaseAccounts";


export class ListOperationDatabaseAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The database accounts returned.
   */
  databaseAccounts?: ListOperationDatabaseAccountsResponseBodyDatabaseAccounts[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 5
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
      databaseAccounts: { 'type': 'array', 'itemType': ListOperationDatabaseAccountsResponseBodyDatabaseAccounts },
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

