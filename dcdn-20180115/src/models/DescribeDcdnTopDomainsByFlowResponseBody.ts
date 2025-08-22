// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnTopDomainsByFlowResponseBodyTopDomainsTopDomain extends $dara.Model {
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
   * The peak bandwidth value.
   * 
   * @example
   * 22139626
   */
  maxBps?: number;
  /**
   * @remarks
   * The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-11-01T08:10:00Z
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
   * The number of visits.
   * 
   * @example
   * 3
   */
  totalAccess?: number;
  /**
   * @remarks
   * The total amount of network traffic.
   * 
   * @example
   * 123
   */
  totalTraffic?: string;
  /**
   * @remarks
   * The proportion of network traffic consumed to access the URL.
   * 
   * @example
   * 21.686305274906182
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

export class DescribeDcdnTopDomainsByFlowResponseBodyTopDomains extends $dara.Model {
  topDomain?: DescribeDcdnTopDomainsByFlowResponseBodyTopDomainsTopDomain[];
  static names(): { [key: string]: string } {
    return {
      topDomain: 'TopDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topDomain: { 'type': 'array', 'itemType': DescribeDcdnTopDomainsByFlowResponseBodyTopDomainsTopDomain },
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

export class DescribeDcdnTopDomainsByFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of accelerated domains under your account.
   * 
   * @example
   * 68
   */
  domainCount?: number;
  /**
   * @remarks
   * The total number of accelerated domains that are in the **Enabled** state under your account.
   * 
   * @example
   * 68
   */
  domainOnlineCount?: number;
  /**
   * @remarks
   * The end of the reporting period.
   * 
   * @example
   * 2016-03-14T07:34:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4E09C5D7-E1CF-4CAA-A45E-8727F4C8FD70
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the reporting period.
   * 
   * @example
   * 2016-03-14T06:34:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The top N domain names ranked by network traffic.
   */
  topDomains?: DescribeDcdnTopDomainsByFlowResponseBodyTopDomains;
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
      topDomains: DescribeDcdnTopDomainsByFlowResponseBodyTopDomains,
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

