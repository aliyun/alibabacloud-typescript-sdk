// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsTopDomainsByFlowResponseBodyTopDomainsTopDomain extends $dara.Model {
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 100
   */
  maxBps?: number;
  /**
   * @example
   * 1457111400
   */
  maxBpsTime?: string;
  /**
   * @example
   * 1
   */
  rank?: number;
  /**
   * @example
   * 100
   */
  totalAccess?: number;
  /**
   * @example
   * 100
   */
  totalTraffic?: string;
  /**
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

export class DescribeVsTopDomainsByFlowResponseBodyTopDomains extends $dara.Model {
  topDomain?: DescribeVsTopDomainsByFlowResponseBodyTopDomainsTopDomain[];
  static names(): { [key: string]: string } {
    return {
      topDomain: 'TopDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topDomain: { 'type': 'array', 'itemType': DescribeVsTopDomainsByFlowResponseBodyTopDomainsTopDomain },
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

export class DescribeVsTopDomainsByFlowResponseBody extends $dara.Model {
  /**
   * @example
   * 20
   */
  domainCount?: number;
  /**
   * @example
   * 12
   */
  domainOnlineCount?: number;
  /**
   * @example
   * 2018-12-10T18:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 2021-12-10T10:00:00Z
   */
  startTime?: string;
  topDomains?: DescribeVsTopDomainsByFlowResponseBodyTopDomains;
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
      topDomains: DescribeVsTopDomainsByFlowResponseBodyTopDomains,
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

