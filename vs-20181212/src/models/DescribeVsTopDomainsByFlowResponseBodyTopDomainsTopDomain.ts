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

