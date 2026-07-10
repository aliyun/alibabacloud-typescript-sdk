// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The computing group ID.
   * 
   * @example
   * cc-wz9v6y29y3******-clickhouse
   */
  computingGroupId?: string;
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
   * The end time of the query. The time must be in UTC and in `yyyy-MM-dd HH:mm:ss` format.
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
   * - 30 (default)
   * 
   * - 50
   * 
   * - 100
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The minimum duration, in milliseconds, for a slow SQL query to be returned. The minimum value is **1000**.
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
   * The start time of the query. The time must be in UTC and in `yyyy-MM-dd HH:mm:ss` format.
   * 
   * @example
   * 2023-09-11 16:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      computingGroupId: 'ComputingGroupId',
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
      computingGroupId: 'string',
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

