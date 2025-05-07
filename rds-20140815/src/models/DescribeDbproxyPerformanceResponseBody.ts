// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBProxyPerformanceResponseBodyPerformanceKeys } from "./DescribeDbproxyPerformanceResponseBodyPerformanceKeys";


export class DescribeDBProxyPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * lsmexxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * An internal parameter. You do not need to specify this parameter.
   * 
   * @example
   * normal
   */
  DBProxyEngineType?: string;
  /**
   * @remarks
   * The end time of the query.
   * 
   * @example
   * 2019-09-21T18:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The performance list.
   */
  performanceKeys?: DescribeDBProxyPerformanceResponseBodyPerformanceKeys;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD31056F-A0CE-41D7-AD39-689B6ABAE982
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query.
   * 
   * @example
   * 2019-09-19T01:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBProxyEngineType: 'DBProxyEngineType',
      endTime: 'EndTime',
      performanceKeys: 'PerformanceKeys',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBProxyEngineType: 'string',
      endTime: 'string',
      performanceKeys: DescribeDBProxyPerformanceResponseBodyPerformanceKeys,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.performanceKeys && typeof (this.performanceKeys as any).validate === 'function') {
      (this.performanceKeys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

