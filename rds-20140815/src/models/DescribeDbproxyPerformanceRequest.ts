// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBProxyPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-t4n3axxxxx
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
   * 
   * *   common: the general-purpose database proxy
   * *   exclusive: the dedicated database proxy
   * 
   * @example
   * DedicatedProxy
   */
  DBProxyInstanceType?: string;
  /**
   * @remarks
   * Dimension.
   * 
   * @example
   * service
   */
  dimension?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-09-21T18:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The performance metrics that you want to query.
   * 
   * If the instance runs MySQL, you can query only the **Maxscale_CpuUsage** performance metric, which indicates the CPU utilization of the instance.
   * 
   * If the instance runs PostgreSQL, you can query the following performance metrics:
   * 
   * *   **Maxscale_TotalConns**: the number of connections per second
   * *   **Maxscale_CurrentConns**: the number of connections that are established
   * *   **Maxscale_DownFlows**: outbound traffic
   * *   **Maxscale_UpFlows**: inbound traffic
   * *   **Maxscale_QPS**: QPS
   * *   **Maxscale_MemUsage**: memory usage
   * *   **Maxscale_CpuUsage**: CPU utilization
   * 
   * If you want to query more than one performance metric, separate the performance metrics with commas (,). You can specify up to six performance metrics in a single request.
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
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
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
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
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

