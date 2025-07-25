// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainStatisticsSummaryResponseBodyStatisticsStatistic extends $dara.Model {
  /**
   * @remarks
   * The number of DNS requests.
   * 
   * @example
   * 35509014
   */
  count?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * ali-gslb.com
   */
  domainName?: string;
  /**
   * @remarks
   * The type of the domain name. The parameter value is not case-sensitive. Valid values:
   * 
   * PUBLIC (default): hosted public domain name
   * 
   * CACHE: cache-accelerated domain name
   * 
   * @example
   * PUBLIC
   */
  domainType?: string;
  /**
   * @remarks
   * Indicates whether the DNS traffic analysis feature is enabled for the domain name. Valid values:
   * 
   * *   OPEN
   * *   CLOSE
   * 
   * @example
   * OPEN
   */
  resolveAnalysisStatus?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      domainName: 'DomainName',
      domainType: 'DomainType',
      resolveAnalysisStatus: 'resolveAnalysisStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      domainName: 'string',
      domainType: 'string',
      resolveAnalysisStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatisticsSummaryResponseBodyStatistics extends $dara.Model {
  statistic?: DescribeDomainStatisticsSummaryResponseBodyStatisticsStatistic[];
  static names(): { [key: string]: string } {
    return {
      statistic: 'Statistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistic: { 'type': 'array', 'itemType': DescribeDomainStatisticsSummaryResponseBodyStatisticsStatistic },
    };
  }

  validate() {
    if(Array.isArray(this.statistic)) {
      $dara.Model.validateArray(this.statistic);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatisticsSummaryResponseBody extends $dara.Model {
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
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CC625C21-8832-4683-BF10-C3CFB1A4FA13
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics on the Domain Name System (DNS) requests.
   */
  statistics?: DescribeDomainStatisticsSummaryResponseBodyStatistics;
  /**
   * @remarks
   * The total number of data records.
   * 
   * @example
   * 68
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 14
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
      statistics: DescribeDomainStatisticsSummaryResponseBodyStatistics,
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

