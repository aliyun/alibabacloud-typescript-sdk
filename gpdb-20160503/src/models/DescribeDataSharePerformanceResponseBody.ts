// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataSharePerformanceResponseBodyPerformanceKeys } from "./DescribeDataSharePerformanceResponseBodyPerformanceKeys";


export class DescribeDataSharePerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query.
   * 
   * @example
   * 2022-08-03T15:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * Details of data sharing performance metrics.
   */
  performanceKeys?: DescribeDataSharePerformanceResponseBodyPerformanceKeys[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BBE00C04-A3E8-4114-881D-0480A72CB92E
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query.
   * 
   * @example
   * 2022-08-03T15:00Z
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
      performanceKeys: { 'type': 'array', 'itemType': DescribeDataSharePerformanceResponseBodyPerformanceKeys },
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

