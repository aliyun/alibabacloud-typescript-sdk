// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPermissionApplyOrdersRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the application order. Valid values:
   * 
   * - [MaxComputeTable] MaxCompute table permission application order.
   * - [MaxComputeFunction] MaxCompute function application order.
   * - [MaxComputeResource] MaxCompute resource application order.
   * - [DLFSchema] DLF 1.0 schema permission application order.
   * - [DLFTable] DLF 1.0 table permission application order.
   * - [DLFColumn] DLF 1.0 column permission application order.
   * - [DsApiDeploy] DataService publishing permission application order.
   * 
   * @example
   * MaxComputeTable
   */
  applyType?: string;
  /**
   * @remarks
   * The name of the data catalog to query.
   * 
   * @example
   * hive
   */
  catalogName?: string;
  /**
   * @remarks
   * The end time for querying application orders, specified as a UNIX timestamp. If this parameter is not specified, application orders up to the current time are queried.
   * 
   * @example
   * 1617200471885
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is deprecated and does not take effect.
   * 
   * @example
   * odps
   */
  engineType?: string;
  /**
   * @remarks
   * The status of the application order. Valid values:
   * - 1: Pending approval.
   * - 2: Approved, authorization succeeded.
   * - 3: Approved, authorization failed.
   * - 4: Rejected.
   * - 5: Withdrawn.
   * 
   * @example
   * 1
   */
  flowStatus?: number;
  /**
   * @remarks
   * The name of the MaxCompute project to which the application order belongs. If this parameter is not specified, application orders from all MaxCompute projects are returned.
   * 
   * @example
   * aMaxComputeProject
   */
  maxComputeProjectName?: string;
  /**
   * @remarks
   * This parameter is deprecated and does not take effect.
   * 
   * @example
   * 1
   */
  orderType?: number;
  /**
   * @remarks
   * The page number for paginated queries. The value must be a positive integer greater than or equal to 1. Default value: 1.
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
   * The query type of the application order. Valid values:
   * - 0: Application orders submitted by me.
   * - 1: Application orders approved by me.
   * - 2: All application orders.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  queryType?: number;
  /**
   * @remarks
   * The start time for querying application orders, specified as a UNIX timestamp. If this parameter is not specified, all application orders are queried.
   * 
   * @example
   * 1616200471885
   */
  startTime?: number;
  /**
   * @remarks
   * The table name included in the application order. If this parameter is not specified, application orders for all tables are returned.
   * 
   * @example
   * aTableName
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the workspace to which the application order belongs. If this parameter is not specified, application orders from all workspaces are returned. You can log on to the DataWorks console and go to the Workspace Settings page to obtain the workspace ID.
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

