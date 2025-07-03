// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccountPrivilegeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * account_sec
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
   * pxc-htri0ori2r4k9p
   */
  DBInstanceName?: string;
  /**
   * @example
   * sbtest
   */
  dbName?: string;
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
   * account_audit
   */
  securityAccountName?: string;
  /**
   * @example
   * *****
   */
  securityAccountPassword?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPrivilege: 'AccountPrivilege',
      DBInstanceName: 'DBInstanceName',
      dbName: 'DbName',
      regionId: 'RegionId',
      securityAccountName: 'SecurityAccountName',
      securityAccountPassword: 'SecurityAccountPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPrivilege: 'string',
      DBInstanceName: 'string',
      dbName: 'string',
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

