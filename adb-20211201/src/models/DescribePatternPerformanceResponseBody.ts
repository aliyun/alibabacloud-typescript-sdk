// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePatternPerformanceResponseBodyPerformances } from "./DescribePatternPerformanceResponseBodyPerformances";


export class DescribePatternPerformanceResponseBody extends $dara.Model {
  accessIp?: string;
  /**
   * @remarks
   * The end time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mmZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2022-08-22T01:06:00Z
   */
  endTime?: string;
  failedCount?: number;
  /**
   * @remarks
   * The queried performance metrics.
   */
  performances?: DescribePatternPerformanceResponseBodyPerformances[];
  queryCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F21AF487-B8C9-57E0-8E3A-A92BC3611FB6
   */
  requestId?: string;
  SQLPattern?: string;
  /**
   * @remarks
   * The start time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mmZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2022-08-21T02:15:00Z
   */
  startTime?: string;
  tables?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      accessIp: 'AccessIp',
      endTime: 'EndTime',
      failedCount: 'FailedCount',
      performances: 'Performances',
      queryCount: 'QueryCount',
      requestId: 'RequestId',
      SQLPattern: 'SQLPattern',
      startTime: 'StartTime',
      tables: 'Tables',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessIp: 'string',
      endTime: 'string',
      failedCount: 'number',
      performances: { 'type': 'array', 'itemType': DescribePatternPerformanceResponseBodyPerformances },
      queryCount: 'number',
      requestId: 'string',
      SQLPattern: 'string',
      startTime: 'string',
      tables: 'string',
      user: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.performances)) {
      $dara.Model.validateArray(this.performances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

