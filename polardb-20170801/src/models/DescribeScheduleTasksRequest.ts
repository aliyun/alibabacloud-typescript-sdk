// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScheduleTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster description.
   * 
   * @example
   * testdb
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > - You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of all clusters in a specific region, including cluster IDs.
   * >
   * > - If this parameter is omitted, scheduled tasks for all clusters in your account are queried.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * > The order ID can contain only digits.
   * 
   * @example
   * 20951253014****
   */
  orderId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. The value must be an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **30** (default), **50**, and **100**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The latest start time of the task. The time is in UTC. If the task does not start by this time, it expires.
   * 
   * @example
   * 2021-01-28T12:30Z
   */
  plannedEndTime?: string;
  /**
   * @remarks
   * The earliest start time of the task. The time is in UTC.
   * 
   * @example
   * 2021-01-28T12:00Z
   */
  plannedStartTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > - You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query the available regions.
   * >
   * > - If this parameter is omitted, scheduled tasks in all regions in your account are queried.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-************
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **pending**: The task is waiting to be executed.
   * 
   * - **executing**: The task is being executed.
   * 
   * - **failure**: The task failed and is waiting for a retry.
   * 
   * - **finish**: The task is complete.
   * 
   * - **cancel**: The task is canceled.
   * 
   * - **expired**: The task has expired because it did not start within the scheduled time window.
   * 
   * - **rollback**: The task is being rolled back.
   * 
   * > If this parameter is omitted, scheduled tasks in all states are queried.
   * 
   * @example
   * finish
   */
  status?: string;
  /**
   * @remarks
   * The action of the scheduled task. Valid values:
   * 
   * - **CreateDBNodes**
   * 
   * - **ModifyDBNodeClass**
   * 
   * - **UpgradeDBClusterVersion**
   * 
   * - **ModifyDBClusterPrimaryZone**
   * 
   * > * Task details are returned only if you specify the `PlannedStartTime` parameter when you call one of the preceding API operations. Otherwise, the `TimerInfos` field in the response is empty.
   * >
   * > * If this parameter is omitted, scheduled tasks of all types are queried.
   * 
   * @example
   * CreateDBNodes
   */
  taskAction?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      orderId: 'OrderId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      plannedEndTime: 'PlannedEndTime',
      plannedStartTime: 'PlannedStartTime',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      taskAction: 'TaskAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      orderId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      plannedEndTime: 'string',
      plannedStartTime: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      taskAction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

