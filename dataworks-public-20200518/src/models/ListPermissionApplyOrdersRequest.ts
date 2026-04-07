// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPermissionApplyOrdersRequest extends $dara.Model {
  /**
   * @remarks
   * The type of permission request. Valid values:
   * 
   * *   MaxComputeTable: Permission request for MaxCompute tables
   * *   MaxComputeFunction: Permission request for MaxCompute functions
   * *   MaxComputeResource: Permission request for MaxCompute resources
   * *   DLFSchema: Permission request for DLF 1.0 schemas
   * *   DLFTable: Permission request for DLF 1.0 tables
   * *   DLFColumn: Permission request for DLF 1.0 columns
   * *   DsApiDeploy: Permission request for publishing data services
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
   * The end of the time range to query. You can query all the permissions request orders that have been submitted before the time. The parameter value is a UNIX timestamp. If you do not specify the parameter, all permission request orders that are submitted before the current time are queried.
   * 
   * @example
   * 1617200471885
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is deprecated and does not take effect.
   * 
   * Valid values:
   * 
   * *   odps
   * 
   * @example
   * odps
   */
  engineType?: string;
  /**
   * @remarks
   * The status of the permission request. Valid values:
   * 
   * *   1: Pending approval
   * *   2: Approved and authorization succeeded
   * *   3: Approved but authorization failed
   * *   4: Rejected
   * *   5: Withdrawn
   * 
   * Valid values:
   * 
   * *   0
   * *   1
   * *   2
   * *   3
   * *   4
   * *   5
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
   * This parameter is deprecated and does not take effect.
   * 
   * Valid values:
   * 
   * *   1
   * *   0
   * 
   * @example
   * 1
   */
  orderType?: number;
  /**
   * @remarks
   * The page number for pagination. The value must be a positive integer greater than or equal to 1. Default value: 1.
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
   * The query type for permission requests. Valid values:
   * 
   * *   0: Permission requests submitted by me
   * *   1: Permission requests pending my approval
   * *   2: All permission requests
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
   * The ID of the workspace to which the permission request belongs. If you do not specify this parameter, permission requests from all workspaces are returned. To obtain the workspace ID, log on to the DataWorks console and navigate to the workspace configuration page.
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

