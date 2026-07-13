// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePdnsRequestStatisticResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of DNS-over-HTTPS (DoH) requests. This value includes both HTTP and HTTPS requests.
   * 
   * @example
   * 0
   */
  dohTotalCount?: number;
  /**
   * @remarks
   * The number of HTTP requests.
   * 
   * @example
   * 0
   */
  httpCount?: number;
  /**
   * @remarks
   * The number of HTTPS requests. On the Traffic Analysis tab of the Public DNS console, this parameter includes the number of DNS-over-HTTPS (DoH) requests. Therefore, DoH requests are not displayed separately in the console.
   * 
   * @example
   * 0
   */
  httpsCount?: number;
  /**
   * @remarks
   * The number of source IP addresses.
   * 
   * @example
   * 10
   */
  ipCount?: number;
  /**
   * @remarks
   * The timestamp of the statistics. Unit: milliseconds.
   * 
   * @example
   * 1706716800000
   */
  timestamp?: number;
  /**
   * @remarks
   * The total number of requests.
   * 
   * @example
   * 0
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of UDP requests.
   * 
   * @example
   * 5000
   */
  udpTotalCount?: number;
  /**
   * @remarks
   * The number of IPv4 requests.
   * 
   * @example
   * 0
   */
  v4Count?: number;
  /**
   * @remarks
   * The number of IPv4 HTTP requests.
   * 
   * @example
   * 0
   */
  v4HttpCount?: number;
  /**
   * @remarks
   * The number of IPv4 HTTPS requests.
   * 
   * @example
   * 0
   */
  v4HttpsCount?: number;
  /**
   * @remarks
   * The number of IPv6 requests.
   * 
   * @example
   * 0
   */
  v6Count?: number;
  /**
   * @remarks
   * The number of IPv6 HTTP requests.
   * 
   * @example
   * 0
   */
  v6HttpCount?: number;
  /**
   * @remarks
   * The number of IPv6 HTTPS requests.
   * 
   * @example
   * 0
   */
  v6HttpsCount?: number;
  static names(): { [key: string]: string } {
    return {
      dohTotalCount: 'DohTotalCount',
      httpCount: 'HttpCount',
      httpsCount: 'HttpsCount',
      ipCount: 'IpCount',
      timestamp: 'Timestamp',
      totalCount: 'TotalCount',
      udpTotalCount: 'UdpTotalCount',
      v4Count: 'V4Count',
      v4HttpCount: 'V4HttpCount',
      v4HttpsCount: 'V4HttpsCount',
      v6Count: 'V6Count',
      v6HttpCount: 'V6HttpCount',
      v6HttpsCount: 'V6HttpsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dohTotalCount: 'number',
      httpCount: 'number',
      httpsCount: 'number',
      ipCount: 'number',
      timestamp: 'number',
      totalCount: 'number',
      udpTotalCount: 'number',
      v4Count: 'number',
      v4HttpCount: 'number',
      v4HttpsCount: 'number',
      v6Count: 'number',
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

export class DescribePdnsRequestStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of request statistics.
   */
  data?: DescribePdnsRequestStatisticResponseBodyData[];
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribePdnsRequestStatisticResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

