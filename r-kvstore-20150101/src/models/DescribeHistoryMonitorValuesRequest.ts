// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryMonitorValuesRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * > You can query monitoring data within the past month. The maximum time range to query is 7 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-11-06T00:30:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx******
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is deprecated and its value is fixed at `01m`.
   * 
   * The system automatically determines the **query interval** based on the specified start and end times. For example, if the specified time range is 10 minutes or less, data is aggregated every 5 seconds, and the query results are returned at 5-second intervals.
   * 
   * > - If the specified `StartTime` is not at a data aggregation point, the first time point returned by the system is the nearest preceding data aggregation point. For example, if you set StartTime to `2022-01-20T12:01:48Z`, the first time point returned is `2022-01-20T12:01:45Z`.
   * >
   * > - If the instance has 32 or more data shards, the minimum data aggregation frequency is 1 minute.
   * 
   * This parameter is required.
   * 
   * @example
   * 01m
   */
  intervalForHistory?: string;
  /**
   * @remarks
   * The monitoring metric to query, such as `CpuUsage`. To specify multiple metrics, separate them with a comma (,).
   * 
   * - For instances that use the cluster or read/write splitting architecture:
   * 
   *   - To query the overall CPU utilization of all data nodes, set this parameter to **CpuUsage$db**.
   * 
   *   - To query the CPU utilization of a single data node, set this parameter to **CpuUsage** and specify the node in the `NodeId` parameter.
   * 
   * - For instances that use the standard architecture (primary/standby), set this parameter to **CpuUsage**.
   * 
   * For more information about monitoring metrics, see <props="china">[Additional information about the MonitorKeys parameter](https://help.aliyun.com/zh/redis/developer-reference/api-r-kvstore-2015-01-01-describehistorymonitorvalues-redis#monitorKeys-note)<props="intl">[Additional information about the MonitorKeys parameter](https://www.alibabacloud.com/help/zh/redis/developer-reference/api-r-kvstore-2015-01-01-describehistorymonitorvalues-redis#monitorKeys-note) below.
   * 
   * > - If you do not specify this parameter, the `UsedMemory` and `quotaMemory` metrics are returned by default.
   * >
   * > - To ensure query efficiency, we recommend that you specify a maximum of 5 monitoring metrics for a single node and a maximum of 1 aggregate monitoring metric per query.
   * 
   * @example
   * CpuUsage
   */
  monitorKeys?: string;
  /**
   * @remarks
   * The ID of a node in the instance. You can use this parameter to query the monitoring data of a specific node.
   * 
   * > - This parameter is available only for instances that use the read/write splitting or cluster architecture.
   * >
   * > - You can call the [DescribeLogicInstanceTopology](https://help.aliyun.com/document_detail/473786.html) operation to query node IDs.
   * 
   * @example
   * r-bp1zxszhcgatnx****-db-0#1679****
   */
  nodeId?: string;
  /**
   * @remarks
   * If you want to query the metrics of a read-only node in a cloud-native instance that uses a read/write splitting architecture, you must specify the **NodeId** and set this parameter to **READONLY**.
   * 
   * > In all other cases, you do not need to specify this parameter. You can also set it to **MASTER**.
   * 
   * @example
   * READONLY
   */
  nodeRole?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-11-06T00:00:00Z
   */
  startTime?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      intervalForHistory: 'IntervalForHistory',
      monitorKeys: 'MonitorKeys',
      nodeId: 'NodeId',
      nodeRole: 'NodeRole',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      intervalForHistory: 'string',
      monitorKeys: 'string',
      nodeId: 'string',
      nodeRole: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      startTime: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

