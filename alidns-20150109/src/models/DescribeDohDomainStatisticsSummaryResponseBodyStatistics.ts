// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDohDomainStatisticsSummaryResponseBodyStatistics extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
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
   * The total number of requests.
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
      domainName: 'DomainName',
      httpCount: 'HttpCount',
      httpsCount: 'HttpsCount',
      ipCount: 'IpCount',
      totalCount: 'TotalCount',
      v4HttpCount: 'V4HttpCount',
      v4HttpsCount: 'V4HttpsCount',
      v6HttpCount: 'V6HttpCount',
      v6HttpsCount: 'V6HttpsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      httpCount: 'number',
      httpsCount: 'number',
      ipCount: 'number',
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

