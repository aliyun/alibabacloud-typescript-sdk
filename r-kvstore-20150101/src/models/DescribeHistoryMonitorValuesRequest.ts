// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryMonitorValuesRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * >  You can query the monitoring data of the previous month. The maximum time range that you can specify for a query is seven days.
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
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is deprecated. Set the value to `01m`.
   * 
   * The **interval at which a query is performed** is automatically determined based on the start time and end time of the query. For example, if the query time range is less than or equal to 10 minutes, data is aggregated at a frequency of every 5 seconds and the results are returned at 5-second intervals.
   * 
   * > *   The query result is aligned with the data aggregation frequency. If the specified StartTime value does not coincide with a point in time for data aggregation, the system returns the latest point in time for data aggregation as the first point in time. For example, if you set the StartTime parameter to 2022-01-20T12:01:48Z, the first point in time returned is 2022-01-20T12:01:45Z.
   * > *   If the number of data shards is greater than or equal to 32, the minimum data aggregation frequency is 1 minute.
   * 
   * This parameter is required.
   * 
   * @example
   * 01m
   */
  intervalForHistory?: string;
  /**
   * @remarks
   * The monitoring metrics. Separate the metrics with commas (,). Take CpuUsage as an example:
   * 
   * *   Cluster or read/write splitting instances
   * 
   *     *   To query the overall CPU utilization of all data nodes, specify **CpuUsage$db**.
   *     *   To query the CPU utilization of a single data node, specify **CpuUsage** and NodeId.
   * 
   * *   Standard master-replica instances: Specify only **CpuUsage**.
   * 
   * For more information about monitoring metrics and their descriptions, see [Additional description of MonitorKeys](https://www.alibabacloud.com/help/zh/redis/developer-reference/api-r-kvstore-2015-01-01-describehistorymonitorvalues-redis#monitorKeys-note).
   * 
   * > *   This parameter is empty by default, which indicates that the UsedMemory and quotaMemory metrics are returned.
   * > *   To ensure query efficiency, we recommend that you specify no more than five metrics for a single node at a time, and specify only a single metric when you query aggregate metrics.
   * 
   * @example
   * memoryUsage
   */
  monitorKeys?: string;
  /**
   * @remarks
   * The ID of the node in the instance. You can set this parameter to query the data of a specified node.
   * 
   * *   This parameter is available only for read/write splitting or cluster instances of Tair.
   * 
   * *   You can call the [DescribeLogicInstanceTopology](https://help.aliyun.com/document_detail/473786.html) operation to query node IDs.
   * 
   * @example
   * r-bp1zxszhcgatnx****-db-0#1679****
   */
  nodeId?: string;
  /**
   * @remarks
   * If you want to query the metrics of the read replicas in a cloud-native read/write splitting instance, you must set this parameter to **READONLY** and specify **NodeId**.
   * 
   * > In other cases, you do not need to specify this parameter or you can set this parameter to **MASTER**.
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

