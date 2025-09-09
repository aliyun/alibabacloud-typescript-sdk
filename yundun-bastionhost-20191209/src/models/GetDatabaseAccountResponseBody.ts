// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatabaseAccountResponseBodyDatabaseAccount extends $dara.Model {
  /**
   * @remarks
   * The database account ID.
   * 
   * @example
   * 9
   */
  databaseAccountId?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * uac
   */
  databaseAccountName?: string;
  /**
   * @remarks
   * The database name. A value is returned for this parameter if the database engine is PostgreSQL or Oracle.
   * 
   * @example
   * orcl
   */
  databaseSchema?: string;
  /**
   * @remarks
   * Indicates whether the database account has a password.
   * Valid values:
   * * true
   * * false
   * 
   * @example
   * true
   */
  hasPassword?: boolean;
  /**
   * @remarks
   * The logon attribute. A value is returned for this parameter if the database engine is Oracle. Valid values:
   * 
   * *   SERVICENAME
   * *   SID
   * 
   * @example
   * SID
   */
  loginAttribute?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountId: 'DatabaseAccountId',
      databaseAccountName: 'DatabaseAccountName',
      databaseSchema: 'DatabaseSchema',
      hasPassword: 'HasPassword',
      loginAttribute: 'LoginAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountId: 'string',
      databaseAccountName: 'string',
      databaseSchema: 'string',
      hasPassword: 'boolean',
      loginAttribute: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned information about the database account.
   */
  databaseAccount?: GetDatabaseAccountResponseBodyDatabaseAccount;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FA06D274-8D0A-59FB-8B7E-584C0EEBBFFF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccount: 'DatabaseAccount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccount: GetDatabaseAccountResponseBodyDatabaseAccount,
      requestId: 'string',
    };
  }

  validate() {
    if(this.databaseAccount && typeof (this.databaseAccount as any).validate === 'function') {
      (this.databaseAccount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

