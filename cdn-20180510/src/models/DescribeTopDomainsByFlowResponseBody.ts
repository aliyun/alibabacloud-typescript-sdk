// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTopDomainsByFlowResponseBodyTopDomainsTopDomain extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The peak bandwidth value.
   * 
   * @example
   * 22139626
   */
  maxBps?: number;
  /**
   * @remarks
   * The time when the bandwidth reached the peak value.
   * 
   * @example
   * 1457111400
   */
  maxBpsTime?: string;
  /**
   * @remarks
   * The ranking of the accelerated domain name.
   * 
   * @example
   * 1
   */
  rank?: number;
  /**
   * @remarks
   * The number of visits to the domain name.
   * 
   * @example
   * 107784230
   */
  totalAccess?: number;
  /**
   * @remarks
   * The total volume of traffic.
   * 
   * @example
   * 2043859876683.9001
   */
  totalTraffic?: string;
  /**
   * @remarks
   * The proportion of network traffic consumed to access the domain name.
   * 
   * @example
   * 30.64191989360235
   */
  trafficPercent?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      maxBps: 'MaxBps',
      maxBpsTime: 'MaxBpsTime',
      rank: 'Rank',
      totalAccess: 'TotalAccess',
      totalTraffic: 'TotalTraffic',
      trafficPercent: 'TrafficPercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      maxBps: 'number',
      maxBpsTime: 'string',
      rank: 'number',
      totalAccess: 'number',
      totalTraffic: 'string',
      trafficPercent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopDomainsByFlowResponseBodyTopDomains extends $dara.Model {
  topDomain?: DescribeTopDomainsByFlowResponseBodyTopDomainsTopDomain[];
  static names(): { [key: string]: string } {
    return {
      topDomain: 'TopDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topDomain: { 'type': 'array', 'itemType': DescribeTopDomainsByFlowResponseBodyTopDomainsTopDomain },
    };
  }

  validate() {
    if(Array.isArray(this.topDomain)) {
      $dara.Model.validateArray(this.topDomain);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopDomainsByFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of accelerated domain names that belong to the current Alibaba Cloud account.
   * 
   * @example
   * 68
   */
  domainCount?: number;
  /**
   * @remarks
   * The total number of accelerated domain names that are in the **Enabled** state within the current Alibaba Cloud account.
   * 
   * @example
   * 68
   */
  domainOnlineCount?: number;
  /**
   * @remarks
   * The end of the time range during which data was queried.
   * 
   * @example
   * 2019-12-23T08:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4E09C5D7-E1CF-4CAA-A45E-8727F4C8FD70
   */
  requestId?: string;
  /**
   * @remarks
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2019-12-22T08:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The top N domain names ranked by network traffic.
   */
  topDomains?: DescribeTopDomainsByFlowResponseBodyTopDomains;
  static names(): { [key: string]: string } {
    return {
      domainCount: 'DomainCount',
      domainOnlineCount: 'DomainOnlineCount',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      topDomains: 'TopDomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainCount: 'number',
      domainOnlineCount: 'number',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      topDomains: DescribeTopDomainsByFlowResponseBodyTopDomains,
    };
  }

  validate() {
    if(this.topDomains && typeof (this.topDomains as any).validate === 'function') {
      (this.topDomains as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

