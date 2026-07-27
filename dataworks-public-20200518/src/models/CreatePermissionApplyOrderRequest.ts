// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePermissionApplyOrderRequestApplyObjectColumnMetaList extends $dara.Model {
  /**
   * @remarks
   * The permission types to request. Separate multiple permission types with commas (,). Only Select, Describe, and Download types are supported.
   * 
   * @example
   * Select
   */
  actions?: string;
  /**
   * @remarks
   * The name of the column for which permissions are requested. To request permissions on the entire table, enter all column names of the table.
   * You can request permissions on specific columns only if LabelSecurity is enabled for the MaxCompute project. If LabelSecurity is not enabled, you can request permissions only on the entire table.
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
   * The permission types to request. Separate multiple permission types with commas (,). Only Select, Describe, Drop, Alter, Update, and Download types are supported.
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
   * The object for which permissions are requested. Only MaxCompute table permissions are supported. Enter the name of the target table.
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
   * The list of objects for which permissions are requested.
   * 
   * This parameter is required.
   */
  applyObject?: CreatePermissionApplyOrderRequestApplyObject[];
  /**
   * @remarks
   * The reason for the request. This is used by the administrator for evaluation and approval.
   * 
   * This parameter is required.
   * 
   * @example
   * I need to use this table
   */
  applyReason?: string;
  /**
   * @remarks
   * The type of the request order. Valid values:
   * 
   * - MaxComputeTable: MaxCompute table permission request order.
   * - MaxComputeFunction: MaxCompute function permission request order.
   * - MaxComputeResource: MaxCompute resource permission request order.
   * - DLFSchema: Data Lake Formation (DLF) 1.0 schema permission request order.
   * - DLFTable: DLF 1.0 table permission request order.
   * - DLFColumn: DLF 1.0 column permission request order.
   * - DsApiDeploy: Data service publication permission request order.
   * 
   * @example
   * MaxComputeTable
   */
  applyType?: string;
  /**
   * @remarks
   * The UIDs of the Alibaba Cloud accounts for which permissions are requested. Separate multiple account UIDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 26784260040899****,26784260040899****
   */
  applyUserIds?: string;
  /**
   * @remarks
   * The name of the data catalog to query. Go to the [Data Lake Formation console](https://dlf.console.aliyun.com/ap-southeast-1/metadata/catalog?spm=a2c4g.11186623.0.0.5a225658pT4Dkr) to view the data catalog name.
   * 
   * @example
   * hive
   */
  catalogName?: string;
  /**
   * @remarks
   * The expiration time of the requested permissions. Specify a UNIX timestamp. If you do not specify this parameter, the default expiration time is January 1, 2065.
   * If LabelSecurity is not enabled for the MaxCompute project, or the security level of the requested table field is 0 or less than or equal to the security level of the requesting account, you can request only permanent permissions.
   * Go to the management page of the DataWorks workspace and check the advanced configuration page of the MaxCompute engine to verify whether column-level access control is enabled.
   * Go to the DataWorks workspace to view the security level of fields in Data Map and the security level of accounts on the Member Management page.
   * 
   * @example
   * 1617115071885
   */
  deadline?: number;
  /**
   * @remarks
   * This field is deprecated. Set it to empty.
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
   * The name of the MaxCompute project for which permissions are requested.
   * 
   * @example
   * aMaxcomputeProjectName
   */
  maxComputeProjectName?: string;
  /**
   * @remarks
   * This field is deprecated. Set it to empty.
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
   * The ID of the DataWorks workspace to which the MaxCompute project belongs. Go to the DataWorks workspace configuration page to obtain the workspace ID.
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

