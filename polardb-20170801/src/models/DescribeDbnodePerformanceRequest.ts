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
   * The ID of the cluster node.
   * 
   * This parameter is required.
   * 
   * @example
   * pi-*************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mmZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-09-23T01:01Z
   */
  endTime?: string;
  /**
   * @remarks
   * The interval at which performance data is collected. Valid values:
   * 
   * *   5
   * *   30
   * *   60
   * *   600
   * *   1800
   * *   3600
   * *   86400
   * 
   * @example
   * 60
   */
  interval?: string;
  /**
   * @remarks
   * The performance metrics that you want to query. Separate multiple metrics with commas (,). For more information, see [Performance parameters](https://help.aliyun.com/document_detail/141787.html).
   * 
   * >  You can specify a maximum of five performance metrics.
   * 
   * This parameter is required.
   * 
   * @example
   * PolarDBDiskUsage
   */
  key?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mmZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-09-23T01:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The special metric. Set the value to tair, which indicates the PolarTair architecture.
   * 
   * @example
   * tair
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

