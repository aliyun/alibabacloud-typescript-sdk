// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the account that is authorized to access the created database.
   * 
   * This parameter is required.
   * 
   * @example
   * testaccount
   */
  accountName?: string;
  /**
   * @remarks
   * The permissions granted to the account on the new database. Valid values:
   * 
   * - **ReadWrite**
   * - **ReadOnly**
   * - **DMLOnly**
   * - **DDLOnly**
   * 
   * @example
   * ReadWrite
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * The character set. The following character sets are supported:
   * 
   * - **utf8**
   * - **gbk**
   * - **latin1**
   * - **utf8mb4**
   * 
   * This parameter is required.
   * 
   * @example
   * utf8mb4
   */
  charset?: string;
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
   * The description of the database.
   * 
   * @example
   * db for test
   */
  dbDescription?: string;
  /**
   * @remarks
   * The name of the database to create.
   * 
   * This parameter is required.
   * 
   * @example
   * testdb
   */
  dbName?: string;
  /**
   * @remarks
   * The mode selected when creating the database. Valid values:
   * 
   * - **auto**: The database supports automatic partitioning. You do not need to specify a partition key when creating a table.
   * - **drds**: The database does not support automatic partitioning. You must use dedicated table and database sharding syntax and specify sharding keys when creating a table.
   * 
   * @example
   * auto
   */
  mode?: string;
  /**
   * @remarks
   * The region where the instance resides.
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
   * > If the three-role mode is enabled, this parameter is required. If the three-role mode is not enabled, this parameter is optional.
   * 
   * @example
   * securityAccount
   */
  securityAccountName?: string;
  /**
   * @remarks
   * The password of the security administrator account.
   * 
   * > If the three-role mode is enabled, this parameter is required. If the three-role mode is not enabled, this parameter is optional.
   * 
   * @example
   * securityPassword
   */
  securityAccountPassword?: string;
  storagePoolName?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPrivilege: 'AccountPrivilege',
      charset: 'Charset',
      DBInstanceName: 'DBInstanceName',
      dbDescription: 'DbDescription',
      dbName: 'DbName',
      mode: 'Mode',
      regionId: 'RegionId',
      securityAccountName: 'SecurityAccountName',
      securityAccountPassword: 'SecurityAccountPassword',
      storagePoolName: 'StoragePoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPrivilege: 'string',
      charset: 'string',
      DBInstanceName: 'string',
      dbDescription: 'string',
      dbName: 'string',
      mode: 'string',
      regionId: 'string',
      securityAccountName: 'string',
      securityAccountPassword: 'string',
      storagePoolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

