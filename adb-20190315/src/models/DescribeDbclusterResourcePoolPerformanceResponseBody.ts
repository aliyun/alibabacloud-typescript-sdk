// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterResourcePoolPerformanceResponseBodyPerformances } from "./DescribeDbclusterResourcePoolPerformanceResponseBodyPerformances";


export class DescribeDBClusterResourcePoolPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range for monitoring the resource group. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2021-06-10T07:01:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The queried monitoring information about the metrics.
   */
  performances?: DescribeDBClusterResourcePoolPerformanceResponseBodyPerformances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C7EDB8E4-9769-4233-88C7-DCA4C9******
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range for monitoring the resource group. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2021-06-10T07:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      performances: 'Performances',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      performances: { 'type': 'array', 'itemType': DescribeDBClusterResourcePoolPerformanceResponseBodyPerformances },
      requestId: 'string',
      startTime: 'string',
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

