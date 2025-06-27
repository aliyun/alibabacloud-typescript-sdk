// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDohSubDomainStatisticsSummaryResponseBodyStatistics } from "./DescribeDohSubDomainStatisticsSummaryResponseBodyStatistics";


export class DescribeDohSubDomainStatisticsSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0F32959D-417B-4D66-8463-68606605E3E2
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics list.
   */
  statistics?: DescribeDohSubDomainStatisticsSummaryResponseBodyStatistics[];
  /**
   * @remarks
   * Total number of entries returned.
   * 
   * @example
   * 100
   */
  totalItems?: number;
  /**
   * @remarks
   * Total number of pages returned.
   * 
   * @example
   * 50
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
      statistics: { 'type': 'array', 'itemType': DescribeDohSubDomainStatisticsSummaryResponseBodyStatistics },
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

