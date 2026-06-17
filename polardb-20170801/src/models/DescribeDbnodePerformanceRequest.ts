// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBNodePerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the node in the PolarDB cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pi-*************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the `yyyy-MM-ddTHH:mmZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-09-23T01:01Z
   */
  endTime?: string;
  /**
   * @remarks
   * The granularity of the performance data. Valid values:
   * 
   * - 5
   * 
   * - 30
   * 
   * - 60
   * 
   * - 600
   * 
   * - 1800
   * 
   * - 3600
   * 
   * - 86400
   * 
   * @example
   * 60
   */
  interval?: string;
  /**
   * @remarks
   * The performance metrics to query. Separate multiple metrics with commas (,). For more information, see [Performance metrics](https://help.aliyun.com/document_detail/141787.html).
   * 
   * > - You can query a maximum of five performance metrics.
   * >
   * > - If your cluster has Serverless enabled for fixed specifications, querying PolarDBCPU or PolarDBMemory alone ignores the Interval parameter and returns performance metrics per second. To get data at your specified Interval, query multiple metrics.
   * 
   * This parameter is required.
   * 
   * @example
   * PolarDBDiskUsage
   */
  key?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the `yyyy-MM-ddTHH:mmZ` format. The time must be in Coordinated Universal Time (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-09-23T01:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * A special metric. Currently, only orca is supported.
   * 
   * @example
   * orca
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
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

