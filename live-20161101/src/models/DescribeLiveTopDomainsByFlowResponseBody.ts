// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveTopDomainsByFlowResponseBodyTopDomainsTopDomain extends $dara.Model {
  domainName?: string;
  maxBps?: number;
  maxBpsTime?: string;
  rank?: number;
  totalAccess?: number;
  totalTraffic?: string;
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

