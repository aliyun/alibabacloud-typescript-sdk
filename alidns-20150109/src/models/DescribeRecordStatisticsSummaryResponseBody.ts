// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRecordStatisticsSummaryResponseBodyStatistics } from "./DescribeRecordStatisticsSummaryResponseBodyStatistics";


export class DescribeRecordStatisticsSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E49F0023-4A98-486F-8BA3-6003D5664105
   */
  requestId?: string;
  /**
   * @remarks
   * The DNS requests.
   */
  statistics?: DescribeRecordStatisticsSummaryResponseBodyStatistics;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      statistics: 'Statistics',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      statistics: DescribeRecordStatisticsSummaryResponseBodyStatistics,
      totalItems: 'number',
      totalPages: 'number',
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

