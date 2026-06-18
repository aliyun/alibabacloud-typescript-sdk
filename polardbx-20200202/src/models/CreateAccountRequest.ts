// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the account.
   * 
   * @example
   * test
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the account to be created.
   * 
   * This parameter is required.
   * 
   * @example
   * testAccount
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the account to be created.
   * 
   * This parameter is required.
   * 
   * @example
   * Test@1111
   */
  accountPassword?: string;
  /**
   * @remarks
   * The permissions to be granted to the new account on the specified database. Valid values:
   * 
   * - ReadWrite
   * - ReadOnly
   * - DMLOnly
   * - DDLOnly.
   * 
   * @example
   * ReadWrite
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-**************
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The name of the database to be authorized.
   * 
   * @example
   * testdb
   */
  DBName?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the security administrator account.
   * 
   * > If three-role mode is enabled, this parameter is required. If three-role mode is not enabled, this parameter is not required.
   * 
   * @example
   * securityAccount
   */
  securityAccountName?: string;
  /**
   * @remarks
   * The password of the security administrator account.
   * 
   * > If three-role mode is enabled, this parameter is required. If three-role mode is not enabled, this parameter is not required.
   * 
   * @example
   * securityPassword
   */
  securityAccountPassword?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      accountPrivilege: 'AccountPrivilege',
      DBInstanceName: 'DBInstanceName',
      DBName: 'DBName',
      regionId: 'RegionId',
      securityAccountName: 'SecurityAccountName',
      securityAccountPassword: 'SecurityAccountPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountPassword: 'string',
      accountPrivilege: 'string',
      DBInstanceName: 'string',
      DBName: 'string',
      regionId: 'string',
      securityAccountName: 'string',
      securityAccountPassword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

