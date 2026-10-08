// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBProxyPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call DescribeDBInstances to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-t4n3a****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * A reserved parameter. You do not need to configure this parameter.
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
   * The aggregation dimension. Valid values. The service and server values cannot be specified at the same time.
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
   * The end time of the query. The end time must be later than the start time. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-09-21T18:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The performance metrics.
   * 
   * RDS MySQL supports only **Maxscale_CpuUsage**: CPU utilization.
   * 
   * RDS PostgreSQL supports the following performance metrics:
   * 
   * - **Maxscale_TotalConns**: connection rate
   * - **Maxscale_CurrentConns**: current connections
   * - **Maxscale_DownFlows**: outbound traffic
   * - **Maxscale_UpFlows**: inbound traffic
   * - **Maxscale_QPS**: request rate (QPS)
   * - **Maxscale_MemUsage**: memory utilization
   * - **Maxscale_CpuUsage**: CPU utilization
   * 
   * To query multiple performance metrics, separate them with commas (,). You can query up to six performance metrics at a time.
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
   * The region ID. You can call DescribeRegions to obtain the region ID.
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
   * The start time of the query. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
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

