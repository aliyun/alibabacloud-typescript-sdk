// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryMonitorValuesRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query for historical monitoring data. The end time must be later than the start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * > You can query monitoring data of the last month. The maximum query range cannot exceed 7 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-11-06T00:30:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx******
   */
  instanceId?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. The value is fixed to `01m`.
   * 
   * The system automatically determines the **query interval** based on the start time and end time. For example, if the query time range is less than or equal to 10 minutes, the data aggregation frequency is 5s, and the query results are returned at a frequency of 5s.
   * > * The query results are aligned with the data aggregation frequency of the instance. If the StartTime you specify does not fall on a data aggregation point, the first time point returned by the system is the nearest data aggregation point. For example, if the StartTime you specify is 2022-01-20T12:01:48Z, the first time point returned by the system is 2022-01-20T12:01:45Z.
   * > * If the number of data shards of the instance is greater than or equal to 32, the minimum data aggregation frequency is 1 minute.
   * 
   * This parameter is required.
   * 
   * @example
   * 01m
   */
  intervalForHistory?: string;
  /**
   * @remarks
   * The monitoring metrics. To specify multiple monitoring metrics, separate them with commas (,). Take CpuUsage as an example:
   * * Cluster or read/write splitting architecture:
   *     - To query the overall CPU usage of all data nodes (DB), specify **CpuUsage$db**.
   *    - To query the CPU usage of a single data node, specify **CpuUsage** and set the NodeId parameter to the DB node.
   * 
   * * Standard architecture (primary/secondary): Specify **CpuUsage**.
   * 
   * For more information about monitoring metrics and their descriptions, see <props="china">[MonitorKeys parameter description](https://www.alibabacloud.com/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describehistorymonitorvalues-redis#monitorKeys-note)<props="intl">[MonitorKeys parameter description](https://www.alibabacloud.com/help/zh/redis/developer-reference/api-r-kvstore-2015-01-01-describehistorymonitorvalues-redis#monitorKeys-note).
   * > * This parameter is empty by default. If this parameter is not specified, the UsedMemory and quotaMemory metrics are returned.
   * > * To ensure query efficiency, specify no more than 5 monitoring metrics in a single request when querying metrics for a single node. Specify no more than 1 monitoring metric in a single request when querying aggregated monitoring metrics.
   * 
   * @example
   * CpuUsage
   */
  monitorKeys?: string;
  /**
   * @remarks
   * The node ID of the instance. Specify this parameter to query the monitoring information of a specific node.
   * 
   * > * This parameter is available only when the instance uses a read/write splitting or cluster architecture.
   * > * You can call the [DescribeLogicInstanceTopology](https://help.aliyun.com/document_detail/473786.html) operation to query node IDs.
   * 
   * @example
   * r-bp1zxszhcgatnx****-db-0#1679****
   */
  nodeId?: string;
  /**
   * @remarks
   * To query the metrics of a read-only node in a cloud-native read/write splitting instance, specify the **NodeId** parameter and set this parameter to **READONLY**.
   * >  In other cases, you do not need to specify this parameter (or set it to **MASTER**).
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
   * The start time of the query for historical monitoring data. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
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

