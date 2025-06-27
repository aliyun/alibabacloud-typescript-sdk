// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainResolveStatisticsSummaryResponseBodyStatistics } from "./DescribeDomainResolveStatisticsSummaryResponseBodyStatistics";


export class DescribeDomainResolveStatisticsSummaryResponseBody extends $dara.Model {
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
   * The number of entries per page. Maximum value: **100**. Default value: **20**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics.
   */
  statistics?: DescribeDomainResolveStatisticsSummaryResponseBodyStatistics[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
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
      statistics: { 'type': 'array', 'itemType': DescribeDomainResolveStatisticsSummaryResponseBodyStatistics },
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.statistics)) {
      $dara.Model.validateArray(this.statistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

