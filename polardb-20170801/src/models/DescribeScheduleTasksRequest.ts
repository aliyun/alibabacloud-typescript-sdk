// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScheduleTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * testdb
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > 
   * 
   * *   You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the information of all PolarDB clusters that are deployed in a specific region, such as the cluster IDs.
   * 
   * *   If you do not specify this parameter, all scheduled tasks on your clusters are queried.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * >  The order ID can contain only digits.
   * 
   * @example
   * 20951253014****
   */
  orderId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the page to return. Set this parameter to an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **30**, **50**, and **100**. Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The latest start time of the task that you specified when you created the scheduled task. The time is displayed in UTC.
   * 
   * @example
   * 2021-01-28T12:30Z
   */
  plannedEndTime?: string;
  /**
   * @remarks
   * The earliest start time of the task that you specified when you created the scheduled task. The time is displayed in UTC.
   * 
   * @example
   * 2021-01-28T12:00Z
   */
  plannedStartTime?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * > 
   * 
   * *   You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query the region information of all clusters in a specific account.
   * 
   * *   If you do not specify this parameter, scheduled tasks on your clusters that are deployed in all regions are queried.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-************
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The state of the tasks that you want to query. Valid values:
   * 
   * *   **pending**: The tasks are pending execution.
   * *   **executing**: The tasks are being executed.
   * *   **failure**: The tasks failed and need to be run again.
   * *   **finish**: The tasks are complete.
   * *   **cancel**: The tasks are canceled.
   * *   **expired**: The tasks are expired. The tasks are not started within the time periods that are specified to start the tasks.
   * *   **rollback**: The tasks are being rolled back.
   * 
   * >  If you do not specify this parameter, all scheduled tasks in all states are queried.
   * 
   * @example
   * finish
   */
  status?: string;
  /**
   * @remarks
   * The type of scheduled tasks that you want to query. Valid values:
   * 
   * *   **CreateDBNodes**
   * *   **ModifyDBNodeClass**
   * *   **UpgradeDBClusterVersion**
   * *   **ModifyDBClusterPrimaryZone**
   * 
   * > 
   * 
   * *   If you specify the `PlannedStartTime` parameter when you call the four preceding operations, the details of each task are returned. Otherwise, an empty string is returned for the `TimerInfos` parameter.
   * 
   * *   If you do not specify this parameter, all types of scheduled tasks on you clusters are queried.
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

