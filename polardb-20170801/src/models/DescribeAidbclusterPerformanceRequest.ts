// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClusterPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of all clusters under your account, including the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the `YYYY-MM-DDThh:mmZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-09-23T01:01:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity of the data to retrieve. Valid values: **60** (minutes) and **3600** (hours).
   * 
   * - If you set **Interval** to **60**, you can query data from the last month. The maximum time range for a single query is 7 days.
   * - If you set **Interval** to **3600**, you can query data from the last month. The maximum time range for a single query is 7 days.
   * 
   * @example
   * 60
   */
  interval?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * This parameter is required.
   * 
   * @example
   * PolarDBAIModelCall
   */
  key?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the `YYYY-MM-DDThh:mmZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-09-17T02:18:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      interval: 'Interval',
      key: 'Key',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      interval: 'string',
      key: 'string',
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

