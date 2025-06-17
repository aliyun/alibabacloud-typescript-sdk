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

