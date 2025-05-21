// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterResourcePoolPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to monitor the resource group. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mmZ* format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-06-10T07:01Z
   */
  endTime?: string;
  /**
   * @remarks
   * The metrics of the resource group. You can enter multiple metrics at the same time to query the monitoring information. Separate multiple metrics with commas (,). Valid values:
   * 
   * *   **AnalyticDB_RP_CPU**: the average CPU utilization. Unit: %.
   * *   **AnalyticDB_RP_RT**: the query response time (RT). Unit: milliseconds.
   * *   **AnalyticDB_RP_QPS**: the queries per second (QPS). The value of this parameter must be a numeric value.
   * *   **AnalyticDB_RP_WaitTime**: the query waiting time. Unit: milliseconds.
   * *   **AnalyticDB_RP_OriginalNode**: the number of basic nodes in the resource group.
   * *   **AnalyticDB_RP_ActualNode**: the number of scheduled nodes that are scaled out in the resource group.
   * *   **AnalyticDB_RP_PlanNode**: the number of scheduled nodes to be scaled out in the resource group.
   * *   **AnalyticDB_RP_TotalNode**: the total number of nodes in the resource group. Total number of nodes = Number of basic nodes + Number of scheduled nodes that are scaled out.
   * 
   * > 
   * 
   * *   If you leave this parameter empty, the monitoring information about all metrics is returned.
   * 
   * *   For more information about scaling plans, see [Create a resource scaling plan](https://help.aliyun.com/document_detail/189507.html).
   * 
   * @example
   * AnalyticDB_RP_CPU
   */
  key?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The names of the resource groups that you want to query. You can enter multiple names of resource groups. Separate multiple names with commas (,).
   * 
   * > 
   * 
   * *   The value of this parameter is case-insensitive. For example, `USER_DEFAULT` and `user_default` specify the same resource group.
   * 
   * *   If you leave this parameter empty, the monitoring information about the `USER_DEFAULT` resource group is returned.
   * 
   * @example
   * TEST_POOL
   */
  resourcePools?: string;
  /**
   * @remarks
   * The beginning of the time range to monitor the resource group. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mmZ* format. The time must be in UTC.
   * 
   * > You can view only the monitoring information about the resource groups within the last two days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-06-10T07:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      key: 'Key',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourcePools: 'ResourcePools',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      key: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourcePools: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

