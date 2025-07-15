// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveTopDomainsByFlowResponseBodyTopDomainsTopDomain extends $dara.Model {
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
   * The peak bandwidth of the domain name.
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
   * The ranking of the domain name.
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
   * The total traffic.
   * 
   * @example
   * 2043859876683.9001
   */
  totalTraffic?: string;
  /**
   * @remarks
   * The traffic share of the domain name relative to the total traffic.
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

export class DescribeLiveTopDomainsByFlowResponseBodyTopDomains extends $dara.Model {
  topDomain?: DescribeLiveTopDomainsByFlowResponseBodyTopDomainsTopDomain[];
  static names(): { [key: string]: string } {
    return {
      topDomain: 'TopDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topDomain: { 'type': 'array', 'itemType': DescribeLiveTopDomainsByFlowResponseBodyTopDomainsTopDomain },
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

export class DescribeLiveTopDomainsByFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of domain names in your account.
   * 
   * @example
   * 1
   */
  domainCount?: number;
  /**
   * @remarks
   * The total number of domain names that are in the Enabled state in your account.
   * 
   * @example
   * 1
   */
  domainOnlineCount?: number;
  /**
   * @remarks
   * The end of the time range for which data was queried.
   * 
   * @example
   * 2018-03-20T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 33834C3E-388E-5FFE-A8AE-63575035C064
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range for which data was queried.
   * 
   * @example
   * 2018-03-17T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The top domain names ranked by traffic.
   */
  topDomains?: DescribeLiveTopDomainsByFlowResponseBodyTopDomains;
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
      topDomains: DescribeLiveTopDomainsByFlowResponseBodyTopDomains,
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

