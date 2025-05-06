// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBProxyPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the endpoint.
   * 
   * @example
   * pe-****************
   */
  DBEndpointId?: string;
  /**
   * @remarks
   * The ID of the node in the cluster. This parameter can be used to query the performance metrics of PolarProxy on different nodes. The following metrics are supported: PolarProxy_DBConns, PolarProxy_DBQps, and PolarProxy_DBActionOps.
   * 
   * @example
   * pi-******************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the `yyyy-MM-ddTHH:mmZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-09-24T02:08Z
   */
  endTime?: string;
  /**
   * @remarks
   * The interval at which performance data is collected. Valid values: 5, 30, 60, 600, 1800, 3600, 86400, in seconds.
   * 
   * @example
   * 60
   */
  interval?: string;
  /**
   * @remarks
   * The performance metrics that you want to query. Separate multiple indicators with commas (,). For more information, see [Performance parameters](https://help.aliyun.com/document_detail/141787.html).
   * 
   * This parameter is required.
   * 
   * @example
   * PolarProxy_CpuUsage
   */
  key?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the `yyyy-MM-ddTHH:mmZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-09-23T01:01Z
   */
  startTime?: string;
  /**
   * @remarks
   * Special metric. Set the value to tair, which indicates the PolarTair architecture.
   * 
   * @example
   * tair
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBEndpointId: 'DBEndpointId',
      DBNodeId: 'DBNodeId',
      endTime: 'EndTime',
      interval: 'Interval',
      key: 'Key',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBEndpointId: 'string',
      DBNodeId: 'string',
      endTime: 'string',
      interval: 'string',
      key: 'string',
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

