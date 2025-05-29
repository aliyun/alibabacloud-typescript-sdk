// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterPerformanceResponseBodyPerformanceKeys } from "./DescribeDbclusterPerformanceResponseBodyPerformanceKeys";


export class DescribeDBClusterPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. The time follows the ISO 8601 standard in the `YYYY-MM-DDTHH:mmZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-03T15:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the performance metric. For more information, see [Performance parameters](https://help.aliyun.com/document_detail/86943.html).
   */
  performanceKeys?: DescribeDBClusterPerformanceResponseBodyPerformanceKeys[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8E8990F0-C81E-4C94-8F51-5F**********
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query. The time follows the ISO 8601 standard in the `YYYY-MM-DDTHH:mmZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-03T15:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      performanceKeys: 'PerformanceKeys',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      performanceKeys: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformanceKeys },
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.performanceKeys)) {
      $dara.Model.validateArray(this.performanceKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

