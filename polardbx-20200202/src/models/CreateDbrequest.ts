// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testaccount
   */
  accountName?: string;
  /**
   * @example
   * ReadWrite
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * utf8mb4
   */
  charset?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-**************
   */
  DBInstanceName?: string;
  /**
   * @example
   * db for test
   */
  dbDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testdb
   */
  dbName?: string;
  /**
   * @example
   * auto
   */
  mode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * securityAccount
   */
  securityAccountName?: string;
  /**
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

