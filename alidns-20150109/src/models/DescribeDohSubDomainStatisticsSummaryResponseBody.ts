// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDohSubDomainStatisticsSummaryResponseBodyStatistics extends $dara.Model {
  /**
   * @remarks
   * The number of HTTP requests.
   * 
   * @example
   * 3141592653
   */
  httpCount?: number;
  /**
   * @remarks
   * The number of HTTPS requests.
   * 
   * @example
   * 3141592653
   */
  httpsCount?: number;
  /**
   * @remarks
   * The number of IP addresses.
   * 
   * @example
   * 20
   */
  ipCount?: number;
  /**
   * @remarks
   * The subdomain.
   * 
   * @example
   * www.example.com
   */
  subDomain?: string;
  /**
   * @remarks
   * Total number of requests.
   * 
   * @example
   * 14141592653
   */
  totalCount?: number;
  /**
   * @remarks
   * The number of IPv4-based HTTP requests.
   * 
   * @example
   * 3141592653
   */
  v4HttpCount?: number;
  /**
   * @remarks
   * The number of IPv4-based HTTPS requests.
   * 
   * @example
   * 3141592653
   */
  v4HttpsCount?: number;
  /**
   * @remarks
   * The number of IPv6-based HTTP requests.
   * 
   * @example
   * 3141592653
   */
  v6HttpCount?: number;
  /**
   * @remarks
   * The number of IPv6-based HTTPS requests.
   * 
   * @example
   * 3141592653
   */
  v6HttpsCount?: number;
  static names(): { [key: string]: string } {
    return {
      httpCount: 'HttpCount',
      httpsCount: 'HttpsCount',
      ipCount: 'IpCount',
      subDomain: 'SubDomain',
      totalCount: 'TotalCount',
      v4HttpCount: 'V4HttpCount',
      v4HttpsCount: 'V4HttpsCount',
      v6HttpCount: 'V6HttpCount',
      v6HttpsCount: 'V6HttpsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCount: 'number',
      httpsCount: 'number',
      ipCount: 'number',
      subDomain: 'string',
      totalCount: 'number',
      v4HttpCount: 'number',
      v4HttpsCount: 'number',
      v6HttpCount: 'number',
      v6HttpsCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

