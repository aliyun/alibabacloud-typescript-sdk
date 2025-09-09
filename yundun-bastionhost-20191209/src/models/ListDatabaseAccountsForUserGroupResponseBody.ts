// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabaseAccountsForUserGroupResponseBodyDatabaseAccounts extends $dara.Model {
  /**
   * @remarks
   * The ID of the database account.
   * 
   * @example
   * 4
   */
  databaseAccountId?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * root
   */
  databaseAccountName?: string;
  /**
   * @remarks
   * The ID of the database to which the database account belongs.
   * 
   * @example
   * 11
   */
  databaseId?: string;
  /**
   * @remarks
   * Indicates whether the user group is authorized to manage the database account. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isAuthorized?: boolean;
  /**
   * @remarks
   * The protocol used by the database account. Valid values:
   * 
   * *   **MySQL**
   * *   **Oracle**
   * *   **PostgreSQL**
   * *   **SQLServer**
   * 
   * @example
   * MySQL
   */
  protocolName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountId: 'DatabaseAccountId',
      databaseAccountName: 'DatabaseAccountName',
      databaseId: 'DatabaseId',
      isAuthorized: 'IsAuthorized',
      protocolName: 'ProtocolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountId: 'string',
      databaseAccountName: 'string',
      databaseId: 'string',
      isAuthorized: 'boolean',
      protocolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseAccountsForUserGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The database accounts returned.
   */
  databaseAccounts?: ListDatabaseAccountsForUserGroupResponseBodyDatabaseAccounts[];
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
      databaseAccounts: { 'type': 'array', 'itemType': ListDatabaseAccountsForUserGroupResponseBodyDatabaseAccounts },
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

