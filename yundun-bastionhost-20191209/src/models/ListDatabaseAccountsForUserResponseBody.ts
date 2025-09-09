// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabaseAccountsForUserResponseBodyDatabaseAccounts extends $dara.Model {
  /**
   * @remarks
   * The database account ID.
   * 
   * @example
   * 6
   */
  databaseAccountId?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * test
   */
  databaseAccountName?: string;
  /**
   * @remarks
   * The ID of the database to which the database account belongs.
   * 
   * @example
   * 70
   */
  databaseId?: string;
  /**
   * @remarks
   * Indicates whether the user is authorized to manage the database account. Valid values:
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

