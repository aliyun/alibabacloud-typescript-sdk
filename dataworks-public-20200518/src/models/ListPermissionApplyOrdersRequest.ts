// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPermissionApplyOrdersRequest extends $dara.Model {
  /**
   * @remarks
   * 设置申请单类型，枚举值为：
   * 
   * - [ MaxComputeTable]  MaxCompute表权限申请单
   * - [ MaxComputeFunction] MaxCompute函数申请单
   * - [ MaxComputeResource] MaxCompute资源申请单
   * - [ DLFSchema] DLF1.0版本Schema权限申请单
   * - [ DLFTable] DLF1.0版本表权限申请单
   * - [ DLFColumn] DLF1.0版本列权限申请单
   * - [ DsApiDeploy] 发布数据服务权限申请单
   * 
   * @example
   * MaxComputeTable
   */
  applyType?: string;
  /**
   * @remarks
   * 查询的数据目录名称。
   * 
   * @example
   * hive
   */
  catalogName?: string;
  /**
   * @remarks
   * The end of the time range to query. You can query all the permissions request orders that have been submitted before the time. The parameter value is a UNIX timestamp. If you do not specify the parameter, all permission request orders that are submitted before the current time are queried.
   * 
   * @example
   * 1617200471885
   */
  endTime?: number;
  /**
   * @remarks
   * The type of the compute engine with which the permission request order is associated. The parameter value is odps and cannot be changed. This value indicates that you can request permissions only on fields of tables in the MaxCompute compute engine.
   * 
   * @example
   * odps
   */
  engineType?: string;
  /**
   * @remarks
   * The status of the permission request order. Valid values:
   * 
   * *   1: to be processed
   * *   2: approved and authorized
   * *   3: approved but authorization failed
   * *   4: rejected
   * 
   * @example
   * 1
   */
  flowStatus?: number;
  /**
   * @remarks
   * The name of the MaxCompute project with which the permission request order is associated. If you do not specify the parameter, the permission request orders of all MaxCompute projects are returned.
   * 
   * @example
   * aMaxComputeProject
   */
  maxComputeProjectName?: string;
  /**
   * @remarks
   * The type of the permission request order. The parameter value is 1 and cannot be changed. This value indicates ACL-based authorization.
   * 
   * @example
   * 1
   */
  orderType?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The query type of the permission request order. Valid values:
   * 
   * *   0: The permission request orders you submitted.
   * *   1: The permission request orders you approved.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  queryType?: number;
  /**
   * @remarks
   * The beginning of the time range to query. You can query all the permissions request orders that have been submitted after the time. The parameter value is a UNIX timestamp. If you do not specify the parameter, all permission request orders are queried.
   * 
   * @example
   * 1616200471885
   */
  startTime?: number;
  /**
   * @remarks
   * The name of the table with which the permission request order is associated. If you do not specify the parameter, the permission request orders of all tables are returned.
   * 
   * @example
   * aTableName
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace that is associated with the permission request order. If you do not specify the parameter, the permission request orders of all workspaces are returned. You can go to the Workspace page in the DataWorks console to obtain the workspace ID.
   * 
   * @example
   * 12345
   */
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      applyType: 'ApplyType',
      catalogName: 'CatalogName',
      endTime: 'EndTime',
      engineType: 'EngineType',
      flowStatus: 'FlowStatus',
      maxComputeProjectName: 'MaxComputeProjectName',
      orderType: 'OrderType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      startTime: 'StartTime',
      tableName: 'TableName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyType: 'string',
      catalogName: 'string',
      endTime: 'number',
      engineType: 'string',
      flowStatus: 'number',
      maxComputeProjectName: 'string',
      orderType: 'number',
      pageNum: 'number',
      pageSize: 'number',
      queryType: 'number',
      startTime: 'number',
      tableName: 'string',
      workspaceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

