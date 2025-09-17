// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePermissionApplyOrderRequestApplyObjectColumnMetaList extends $dara.Model {
  /**
   * @example
   * Select
   */
  actions?: string;
  /**
   * @remarks
   * Permissions for the target columns. Enter the column names here. If applying for permissions on the entire table, enter all column names of the table. Permissions for specific columns can only be requested if labelSecurity is enabled for the MaxCompute project. Otherwise, you can only apply for permissions on the entire table.
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
   * The type of permissions requested. Use commas (,) to separate multiple permission types in a single request. Currently only supports Select, Describe, Drop, Alter, Update, and Download permission types.
   * 
   * @example
   * Select,Describe
   */
  actions?: string;
  /**
   * @remarks
   * The list of column objects.
   */
  columnMetaList?: CreatePermissionApplyOrderRequestApplyObjectColumnMetaList[];
  /**
   * @remarks
   * The object you request access to. Currently, only permission requests for MaxCompute tables are supported. The name of the target table needs to be entered here.
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
   * The list of requested objects.
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
  /**
   * @example
   * MaxComputeTable
   */
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
  /**
   * @example
   * hive
   */
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
   * The type of compute engine for permission requests. Currently only supports ODPS, which means only MaxCompute compute engine permissions are supported.
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
   * The name of the MaxCompute project you request access to.
   * 
   * @example
   * aMaxcomputeProjectName
   */
  maxComputeProjectName?: string;
  /**
   * @remarks
   * The request type. The only supported value is 1, which represents an object ACL permission request.
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
   * The DataWorks workspace ID to which the MaxCompute project belongs for permission requests. You can check the workspace ID on the DataWorks workspace configuration page.
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

