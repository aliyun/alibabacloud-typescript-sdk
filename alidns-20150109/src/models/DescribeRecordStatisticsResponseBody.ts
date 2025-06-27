// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRecordStatisticsResponseBodyStatistics } from "./DescribeRecordStatisticsResponseBodyStatistics";


export class DescribeRecordStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6AEC7A64-3CB1-4C49-8B35-0B901F1E26BF
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics on the DNS requests.
   */
  statistics?: DescribeRecordStatisticsResponseBodyStatistics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistics: DescribeRecordStatisticsResponseBodyStatistics,
    };
  }

  validate() {
    if(this.statistics && typeof (this.statistics as any).validate === 'function') {
      (this.statistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

