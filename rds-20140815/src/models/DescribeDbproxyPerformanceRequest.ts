// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBProxyPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-t4n3a****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * A reserved parameter. You do not need to specify this parameter.
   * 
   * @example
   * normal
   */
  DBProxyEngineType?: string;
  /**
   * @remarks
   * The type of the database proxy instance. Valid values:
   * - common: general-purpose database proxy
   * - exclusive: dedicated database proxy
   * 
   * @example
   * exclusive
   */
  DBProxyInstanceType?: string;
  /**
   * @remarks
   * The aggregation dimension. You cannot specify both service and server at the same time. Valid values:
   * 
   * - service: aggregates monitoring metrics by proxy endpoint.
   * 
   * - node: aggregates monitoring metrics by proxy node.
   * 
   * - server: aggregates monitoring metrics by database node.
   * 
   * @example
   * service,node
   * server,node
   * service
   */
  dimension?: string;
  /**
   * @remarks
   * The end time of the query. The end time must be later than the start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-09-21T18:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The performance metric.
   * 
   * ApsaraDB RDS for MySQL supports only **Maxscale_CpuUsage**: CPU utilization.
   * 
   * ApsaraDB RDS for PostgreSQL supports the following performance metrics:
   * 
   * - **Maxscale_TotalConns**: connection rate
   * - **Maxscale_CurrentConns**: current number of connections
   * - **Maxscale_DownFlows**: outbound traffic
   * - **Maxscale_UpFlows**: inbound traffic
   * - **Maxscale_QPS**: request rate (QPS)
   * - **Maxscale_MemUsage**: memory utilization
   * - **Maxscale_CpuUsage**: CPU utilization
   * 
   * To query multiple performance metrics, separate the metrics with commas (,). You can query up to six performance metrics at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * Maxscale_CpuUsage
   */
  metricsName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The start time of the query. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-09-19T01:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBProxyEngineType: 'DBProxyEngineType',
      DBProxyInstanceType: 'DBProxyInstanceType',
      dimension: 'Dimension',
      endTime: 'EndTime',
      metricsName: 'MetricsName',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBProxyEngineType: 'string',
      DBProxyInstanceType: 'string',
      dimension: 'string',
      endTime: 'string',
      metricsName: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

