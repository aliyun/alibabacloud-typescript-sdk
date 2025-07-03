// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBNodePerformanceResponseBodyPerformanceKeys } from "./DescribeDbnodePerformanceResponseBodyPerformanceKeys";


export class DescribeDBNodePerformanceResponseBody extends $dara.Model {
  /**
   * @example
   * pxc-********
   */
  DBInstanceName?: string;
  /**
   * @example
   * 2021-10-20T02:00Z
   */
  endTime?: string;
  performanceKeys?: DescribeDBNodePerformanceResponseBodyPerformanceKeys;
  /**
   * @example
   * EFB5E10B-5268-170F-A378-9AF86CCEACC8
   */
  requestId?: string;
  /**
   * @example
   * 2021-10-20T00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      endTime: 'EndTime',
      performanceKeys: 'PerformanceKeys',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      endTime: 'string',
      performanceKeys: DescribeDBNodePerformanceResponseBodyPerformanceKeys,
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

