// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePermissionApplyOrderRequestApplyObjectColumnMetaList extends $dara.Model {
  actions?: string;
  /**
   * @remarks
   * The field on which you want to request permissions. If you want to request permissions on an entire table, enter all fields in the table. You can request permissions on specific fields of a table in a MaxCompute project only after LabelSecurity is enabled for this project. If LabelSecurity is disabled, you can request permissions only on an entire table.
   * 
   * @example
   * aColumnName
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePermissionApplyOrderRequestApplyObject extends $dara.Model {
  /**
   * @remarks
   * The permission that you want to request. If you want to request multiple permissions at the same time, separate them with commas (,). You can request only the following permissions: Select, Describe, Drop, Alter, Update, and Download.
   * 
   * @example
   * Select,Describe
   */
  actions?: string;
  /**
   * @remarks
   * The fields on which you want to request permissions.
   */
  columnMetaList?: CreatePermissionApplyOrderRequestApplyObjectColumnMetaList[];
  /**
   * @remarks
   * The name of the object on which you want to request permissions. You can request permissions only on MaxCompute tables. Set this parameter to the name of the table on which you want to request permissions.
   * 
   * @example
   * aTableName
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      columnMetaList: 'ColumnMetaList',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: 'string',
      columnMetaList: { 'type': 'array', 'itemType': CreatePermissionApplyOrderRequestApplyObjectColumnMetaList },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.columnMetaList)) {
      $dara.Model.validateArray(this.columnMetaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePermissionApplyOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The objects on which you want to request permissions.
   * 
   * This parameter is required.
   */
  applyObject?: CreatePermissionApplyOrderRequestApplyObject[];
  /**
   * @remarks
   * The reason for your request. The administrator determines whether to approve the request based on the reason.
   * 
   * This parameter is required.
   * 
   * @example
   * I need to use this table
   */
  applyReason?: string;
  applyType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account for which you want to request permissions. If you want to request permissions for multiple Alibaba Cloud accounts, separate the IDs of the accounts with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 267842600408993176,267842600408993177
   */
  applyUserIds?: string;
  catalogName?: string;
  /**
   * @remarks
   * The expiration time of the permissions that you request. This value is a UNIX timestamp. The default value is January 1, 2065. If LabelSecurity is disabled for the MaxCompute project in which you want to request permissions on the fields of a table, or the security level of the fields is 0 or is lower than or equal to the security level of the Alibaba Cloud account for which you want to request permissions, you can request only permanent permissions. You can go to the Workspace Management page in the DataWorks console, click MaxCompute Management in the left-side navigation pane, and then check whether column-level access control is enabled. You can go to your DataWorks workspace, view the security level of the fields in Data Map, and then view the security level of the Alibaba Cloud account on the User Management page.
   * 
   * @example
   * 1617115071885
   */
  deadline?: number;
  /**
   * @remarks
   * The type of the compute engine in which you want to request permissions on the fields of a table. The parameter value is odps and cannot be changed. This value indicates that you can request permissions only on fields of tables in the MaxCompute compute engine.
   * 
   * @example
   * odps
   * 
   * **if can be null:**
   * true
   * 
   * @deprecated
   */
  engineType?: string;
  /**
   * @remarks
   * The name of the MaxCompute project in which you request permissions on the fields of a table.
   * 
   * @example
   * aMaxcomputeProjectName
   */
  maxComputeProjectName?: string;
  /**
   * @remarks
   * The type of the permission request order. The parameter value is 1 and cannot be changed. This value indicates ACL-based authorization.
   * 
   * @example
   * 1
   * 
   * **if can be null:**
   * true
   * 
   * @deprecated
   */
  orderType?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace that is associated with the MaxCompute project in which you want to request permissions on the fields of a table. You can go to the SettingCenter page in the DataWorks console to view the workspace ID.
   * 
   * @example
   * 12345
   */
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      applyObject: 'ApplyObject',
      applyReason: 'ApplyReason',
      applyType: 'ApplyType',
      applyUserIds: 'ApplyUserIds',
      catalogName: 'CatalogName',
      deadline: 'Deadline',
      engineType: 'EngineType',
      maxComputeProjectName: 'MaxComputeProjectName',
      orderType: 'OrderType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyObject: { 'type': 'array', 'itemType': CreatePermissionApplyOrderRequestApplyObject },
      applyReason: 'string',
      applyType: 'string',
      applyUserIds: 'string',
      catalogName: 'string',
      deadline: 'number',
      engineType: 'string',
      maxComputeProjectName: 'string',
      orderType: 'number',
      workspaceId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applyObject)) {
      $dara.Model.validateArray(this.applyObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

