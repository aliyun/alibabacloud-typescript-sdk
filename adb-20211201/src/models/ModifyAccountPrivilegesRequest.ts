// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccountPrivilegesRequestAccountPrivilegesPrivilegeObject extends $dara.Model {
  /**
   * @remarks
   * The column to which permissions are granted. This parameter is required when the privilege level is column.
   * 
   * @example
   * column1
   */
  column?: string;
  /**
   * @remarks
   * The database to which permissions are granted. This parameter is required when the privilege level is database, table, or column.
   * 
   * @example
   * tsdb1
   */
  database?: string;
  /**
   * @remarks
   * The table to which permissions are granted. This parameter is required when the privilege level is table or column.
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
   * The privilege object, which is a tuple of database, table, and column.
   */
  privilegeObject?: ModifyAccountPrivilegesRequestAccountPrivilegesPrivilegeObject;
  /**
   * @remarks
   * The privilege level, obtained from the `DescribeEnabledPrivileges` operation.
   * 
   * @example
   * Global
   */
  privilegeType?: string;
  /**
   * @remarks
   * The list of granted permissions.
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
   * The list of granted permissions.
   */
  accountPrivileges?: ModifyAccountPrivilegesRequestAccountPrivileges[];
  /**
   * @remarks
   * <props="china">The cluster ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The cluster ID of the Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1k5p066e1a****
   */
  DBClusterId?: string;
  promqlInsertPrivileges?: string[];
  promqlSelectNodePercentage?: number;
  promqlSelectPrivileges?: string[];
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
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPrivileges: 'AccountPrivileges',
      DBClusterId: 'DBClusterId',
      promqlInsertPrivileges: 'PromqlInsertPrivileges',
      promqlSelectNodePercentage: 'PromqlSelectNodePercentage',
      promqlSelectPrivileges: 'PromqlSelectPrivileges',
      regionId: 'RegionId',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPrivileges: { 'type': 'array', 'itemType': ModifyAccountPrivilegesRequestAccountPrivileges },
      DBClusterId: 'string',
      promqlInsertPrivileges: { 'type': 'array', 'itemType': 'string' },
      promqlSelectNodePercentage: 'number',
      promqlSelectPrivileges: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceGroupName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountPrivileges)) {
      $dara.Model.validateArray(this.accountPrivileges);
    }
    if(Array.isArray(this.promqlInsertPrivileges)) {
      $dara.Model.validateArray(this.promqlInsertPrivileges);
    }
    if(Array.isArray(this.promqlSelectPrivileges)) {
      $dara.Model.validateArray(this.promqlSelectPrivileges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

