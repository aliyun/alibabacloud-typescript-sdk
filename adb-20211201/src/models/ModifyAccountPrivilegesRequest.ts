// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccountPrivilegesRequestAccountPrivilegesPrivilegeObject extends $dara.Model {
  /**
   * @remarks
   * The columns on which you want to grant permissions. This parameter must be specified when the PrivilegeType parameter is set to Column.
   * 
   * @example
   * column1
   */
  column?: string;
  /**
   * @remarks
   * The databases on which you want to grant permissions. This parameter must be specified when the PrivilegeType parameter is set to Database, Table, or Column.
   * 
   * @example
   * tsdb1
   */
  database?: string;
  /**
   * @remarks
   * The tables on which you want to grant permissions. This parameter must be specified when the PrivilegeType parameter is set to Table or Column.
   * 
   * @example
   * table1
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      database: 'Database',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      database: 'string',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountPrivilegesRequestAccountPrivileges extends $dara.Model {
  /**
   * @remarks
   * The objects on which you want to grant permissions, including databases, tables, and columns.
   */
  privilegeObject?: ModifyAccountPrivilegesRequestAccountPrivilegesPrivilegeObject;
  /**
   * @remarks
   * The permission level that you want to assign to the database account. You can call the `DescribeEnabledPrivileges` operation to query the permission level that can be assigned to the database account.
   * 
   * @example
   * Global
   */
  privilegeType?: string;
  /**
   * @remarks
   * The permissions that you want to grant to the database account.
   */
  privileges?: string[];
  static names(): { [key: string]: string } {
    return {
      privilegeObject: 'PrivilegeObject',
      privilegeType: 'PrivilegeType',
      privileges: 'Privileges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privilegeObject: ModifyAccountPrivilegesRequestAccountPrivilegesPrivilegeObject,
      privilegeType: 'string',
      privileges: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.privilegeObject && typeof (this.privilegeObject as any).validate === 'function') {
      (this.privilegeObject as any).validate();
    }
    if(Array.isArray(this.privileges)) {
      $dara.Model.validateArray(this.privileges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountPrivilegesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * account1
   */
  accountName?: string;
  /**
   * @remarks
   * The permissions that you want to grant to the database account.
   * 
   * This parameter is required.
   */
  accountPrivileges?: ModifyAccountPrivilegesRequestAccountPrivileges[];
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1k5p066e1a****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPrivileges: 'AccountPrivileges',
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPrivileges: { 'type': 'array', 'itemType': ModifyAccountPrivilegesRequestAccountPrivileges },
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountPrivileges)) {
      $dara.Model.validateArray(this.accountPrivileges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

