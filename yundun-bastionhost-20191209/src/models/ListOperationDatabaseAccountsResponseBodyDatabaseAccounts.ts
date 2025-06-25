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
   * The database account ID.
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
   * The database ID.
   * 
   * @example
   * 2
   */
  databaseId?: string;
  /**
   * @remarks
   * Indicates whether a password is configured for the database host account.
   * 
   * @example
   * true
   */
  hasPassword?: string;
  /**
   * @remarks
   * The logon attribute. One of the following values is returned if the database engine is Oracle:
   * 
   * *   **SERVICENAME**
   * *   **SID**
   * 
   * @example
   * SID
   */
  loginAttribute?: string;
  /**
   * @remarks
   * The protocol that is used by the database account.
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

