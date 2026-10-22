// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowQueryStatsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The end time. It must be later than the start time. Default value: the current time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2026-04-08 16:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The start time. Default value: 24 hours ago. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2026-04-07 16:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The slow query threshold in milliseconds. Default value: 5000.
   * 
   * @example
   * 5000
   */
  thresholdMs?: number;
  /**
   * @remarks
   * The number of top slow queries to return. Default value: 10.
   * 
   * @example
   * 10
   */
  topN?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      regionId: 'RegionId',
      startTime: 'StartTime',
      thresholdMs: 'ThresholdMs',
      topN: 'TopN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      endTime: 'string',
      regionId: 'string',
      startTime: 'string',
      thresholdMs: 'number',
      topN: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

