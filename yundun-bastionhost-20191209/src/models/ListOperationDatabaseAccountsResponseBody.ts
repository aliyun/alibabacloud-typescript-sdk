// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationDatabaseAccountsResponseBodyDatabaseAccounts extends $dara.Model {
  /**
   * @remarks
   * The name of the PostgreSQL or Oracle database.
   * 
   * @example
   * xe
   */
  DBName?: string;
  /**
   * @remarks
   * The ID of the database account.
   * 
   * @example
   * 3
   */
  databaseAccountId?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * system
   */
  databaseAccountName?: string;
  /**
   * @remarks
   * The database instance ID.
   * 
   * @example
   * 2
   */
  databaseId?: string;
  /**
   * @remarks
   * Indicates whether a password is set for the database host account.
   * 
   * @example
   * true
   */
  hasPassword?: string;
  /**
   * @remarks
   * The logon attribute. This parameter has a return value only for Oracle databases. Valid values:
   * 
   * - **SERVICENAME**
   * - **SID**
   * 
   * @example
   * SID
   */
  loginAttribute?: string;
  /**
   * @remarks
   * The protocol name of the database account.
   * 
   * @example
   * MySQL
   */
  protocolName?: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      databaseAccountId: 'DatabaseAccountId',
      databaseAccountName: 'DatabaseAccountName',
      databaseId: 'DatabaseId',
      hasPassword: 'HasPassword',
      loginAttribute: 'LoginAttribute',
      protocolName: 'ProtocolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
      databaseAccountId: 'string',
      databaseAccountName: 'string',
      databaseId: 'string',
      hasPassword: 'string',
      loginAttribute: 'string',
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

export class ListOperationDatabaseAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of database accounts.
   */
  databaseAccounts?: ListOperationDatabaseAccountsResponseBodyDatabaseAccounts[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of queried manageable database accounts.
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

