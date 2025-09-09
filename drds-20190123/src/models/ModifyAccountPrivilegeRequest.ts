// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccountPrivilegeRequestDbPrivilege extends $dara.Model {
  /**
   * @remarks
   * The name of the database that you want to manage by using the account to modify.
   * 
   * @example
   * test123
   */
  dbName?: string;
  /**
   * @remarks
   * The permissions that you want to grant to the account.
   * 
   * @example
   * ReadWrite
   */
  privilege?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      privilege: 'Privilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      privilege: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountPrivilegeRequest extends $dara.Model {
  /**
   * @remarks
   * The username of the account that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * account_sec
   */
  accountName?: string;
  dbPrivilege?: ModifyAccountPrivilegeRequestDbPrivilege[];
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drdshbgaen89****
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the PolarDB-X 1.0 instance is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dbPrivilege: 'DbPrivilege',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dbPrivilege: { 'type': 'array', 'itemType': ModifyAccountPrivilegeRequestDbPrivilege },
      drdsInstanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dbPrivilege)) {
      $dara.Model.validateArray(this.dbPrivilege);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

