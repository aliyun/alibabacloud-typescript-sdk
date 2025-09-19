// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainSecureStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of domain names that trigger security alerts.
   * 
   * @example
   * 2
   */
  alarmCount?: number;
  /**
   * @remarks
   * The number of the websites for which no certificates are installed.
   * 
   * @example
   * 1
   */
  noSslCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1EE7B150-D67E-53FD-A52D-3E8E669A****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of the domain names that have security risks.
   * 
   * @example
   * 1
   */
  riskCount?: number;
  /**
   * @remarks
   * The total number of domain names.
   * 
   * @example
   * 72
   */
  totalDomainCount?: number;
  /**
   * @remarks
   * The number of the domain names that have vulnerabilities.
   * 
   * @example
   * 2
   */
  vulCount?: number;
  static names(): { [key: string]: string } {
    return {
      alarmCount: 'AlarmCount',
      noSslCount: 'NoSslCount',
      requestId: 'RequestId',
      riskCount: 'RiskCount',
      totalDomainCount: 'TotalDomainCount',
      vulCount: 'VulCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmCount: 'number',
      noSslCount: 'number',
      requestId: 'string',
      riskCount: 'number',
      totalDomainCount: 'number',
      vulCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

