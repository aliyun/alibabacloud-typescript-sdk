// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogTrendResponseBodyDataResultSet extends $dara.Model {
  /**
   * @remarks
   * The average execution duration of slow SQL queries. Minimum value: **1000**. Unit: milliseconds.
   * 
   * @example
   * 2000
   */
  avgQueryDurationMs?: number;
  /**
   * @remarks
   * The total number of SQL queries within the specified time range.
   * 
   * @example
   * 1
   */
  cnt?: number;
  /**
   * @remarks
   * The maximum execution duration of slow SQL queries. Minimum value: **1000**. Unit: milliseconds.
   * 
   * @example
   * 3000
   */
  maxQueryDurationMs?: number;
  /**
   * @remarks
   * The minimum execution duration of slow SQL queries. Minimum value: **1000**. Unit: milliseconds.
   * 
   * @example
   * 1000
   */
  minQueryDurationMs?: number;
  /**
   * @remarks
   * The beginning of the time range to query. The time is in the yyyy-MM-dd hh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2023-04-13 17:48:00
   */
  queryStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      avgQueryDurationMs: 'AvgQueryDurationMs',
      cnt: 'Cnt',
      maxQueryDurationMs: 'MaxQueryDurationMs',
      minQueryDurationMs: 'MinQueryDurationMs',
      queryStartTime: 'QueryStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgQueryDurationMs: 'number',
      cnt: 'number',
      maxQueryDurationMs: 'number',
      minQueryDurationMs: 'number',
      queryStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

