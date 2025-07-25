// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePdnsRequestStatisticsResponseBodyDataThreatInfo extends $dara.Model {
  /**
   * @remarks
   * The current version does not support this parameter.
   * 
   * @example
   * -
   */
  threatLevel?: string;
  /**
   * @remarks
   * The current version does not support this parameter.
   * 
   * @example
   * -
   */
  threatType?: string;
  static names(): { [key: string]: string } {
    return {
      threatLevel: 'ThreatLevel',
      threatType: 'ThreatType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      threatLevel: 'string',
      threatType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsRequestStatisticsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of DoH requests, including the HTTP and HTTPS requests.
   * 
   * @example
   * 0
   */
  dohTotalCount?: number;
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
   * 0
   */
  httpCount?: number;
  /**
   * @remarks
   * The number of HTTPS requests. On the Traffic Analysis tab of the public DNS console, the value of this parameter includes the number of DNS over HTTPs (DoH) requests. Therefore, the number of DoH requests is not separately displayed in the console.
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
   * The current version does not support this parameter.
   * 
   * @example
   * -
   */
  maxThreatLevel?: string;
  /**
   * @remarks
   * The subdomain name.
   * 
   * @example
   * www.example.com
   */
  subDomain?: string;
  /**
   * @remarks
   * The current version does not support this parameter.
   * 
   * @example
   * -
   */
  threatCount?: number;
  /**
   * @remarks
   * The current version does not support this parameter.
   */
  threatInfo?: DescribePdnsRequestStatisticsResponseBodyDataThreatInfo[];
  /**
   * @remarks
   * The total number of requests.
   * 
   * @example
   * 500
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of UDP requests.
   * 
   * @example
   * 500
   */
  udpTotalCount?: number;
  /**
   * @remarks
   * The number of IPv4-based requests.
   * 
   * @example
   * 0
   */
  v4Count?: number;
  /**
   * @remarks
   * The number of IPv4-based HTTP requests.
   * 
   * @example
   * 0
   */
  v4HttpCount?: number;
  /**
   * @remarks
   * The number of IPv4-based HTTPS requests.
   * 
   * @example
   * 0
   */
  v4HttpsCount?: number;
  /**
   * @remarks
   * The number of IPv6-based requests.
   * 
   * @example
   * 0
   */
  v6Count?: number;
  /**
   * @remarks
   * The number of IPv6-based HTTP requests.
   * 
   * @example
   * 0
   */
  v6HttpCount?: number;
  /**
   * @remarks
   * The number of IPv6-based HTTPS requests.
   * 
   * @example
   * 0
   */
  v6HttpsCount?: number;
  static names(): { [key: string]: string } {
    return {
      dohTotalCount: 'DohTotalCount',
      domainName: 'DomainName',
      httpCount: 'HttpCount',
      httpsCount: 'HttpsCount',
      ipCount: 'IpCount',
      maxThreatLevel: 'MaxThreatLevel',
      subDomain: 'SubDomain',
      threatCount: 'ThreatCount',
      threatInfo: 'ThreatInfo',
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
      domainName: 'string',
      httpCount: 'number',
      httpsCount: 'number',
      ipCount: 'number',
      maxThreatLevel: 'string',
      subDomain: 'string',
      threatCount: 'number',
      threatInfo: { 'type': 'array', 'itemType': DescribePdnsRequestStatisticsResponseBodyDataThreatInfo },
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
    if(Array.isArray(this.threatInfo)) {
      $dara.Model.validateArray(this.threatInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsRequestStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics on the DNS requests.
   */
  data?: DescribePdnsRequestStatisticsResponseBodyData[];
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
   * The number of entries per page. Default value: **20**. Valid values: **1 to 100**.
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
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 49
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribePdnsRequestStatisticsResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

