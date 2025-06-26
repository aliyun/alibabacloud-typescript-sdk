// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the yyyy-MM-dd hh:mm:ss format. The time must be in UTC.
   * 
   * @example
   * 2023-09-15 16:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   30 (default)
   * *   50
   * *   100
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The execution duration of slow SQL queries. Minimum value: **1000**. Unit: milliseconds.
   * 
   * @example
   * 3000
   */
  queryDurationMs?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the yyyy-MM-dd hh:mm:ss format. The time must be in UTC.
   * 
   * @example
   * 2023-09-11 16:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryDurationMs: 'QueryDurationMs',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryDurationMs: 'string',
      regionId: 'string',
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

