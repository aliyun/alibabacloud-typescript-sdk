// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTotalStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of asset logon attempts.
   * 
   * @example
   * 0
   */
  account?: number;
  /**
   * @remarks
   * The total number of unfixed baseline check items.
   * 
   * @example
   * 0
   */
  health?: number;
  /**
   * @remarks
   * The total number of baseline check items.
   * 
   * @example
   * 0
   */
  healthTotal?: number;
  /**
   * @remarks
   * The total number of fixed baseline check items. This field is deprecated.
   * 
   * @example
   * 0
   */
  healthdealedTotal?: number;
  /**
   * @remarks
   * The number of baseline check items with the high urgency level.
   * 
   * @example
   * 0
   */
  healthhighTotal?: number;
  /**
   * @remarks
   * The number of baseline check items with the low urgency level.
   * 
   * @example
   * 0
   */
  healthlowTotal?: number;
  /**
   * @remarks
   * The number of medium-level baseline risks.
   * 
   * @example
   * 0
   */
  healthmediumTotal?: number;
  /**
   * @remarks
   * The number of baseline check items with the critical urgency level. This field is deprecated.
   * 
   * @example
   * 0
   */
  healthseriousTotal?: number;
  /**
   * @remarks
   * The number of Server Guard or Security Center alerts.
   * 
   * > - If **Type** is **sas**, this value indicates the number of Security Center alerts.
   * > - If **Type** is **aqs**, this value indicates the number of Server Guard alerts.
   * 
   * @example
   * 0
   */
  newsuspicious?: number;
  /**
   * @remarks
   * Indicates whether the client is online. Valid values:
   * - **true**: Online.
   * - **false**: Offline.
   * 
   * @example
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * The number of Web-CMS vulnerabilities.
   * 
   * @example
   * 0
   */
  patch?: number;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each API request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * A4EB8B1C-1DEC-5E18-BCD0-D1BBB3936FA7
   */
  requestId?: string;
  /**
   * @remarks
   * The number of Server Guard security alerts.
   * 
   * @example
   * 0
   */
  suspicious?: number;
  /**
   * @remarks
   * The total number of security alerts.
   * 
   * @example
   * 0
   */
  suspiciousTotal?: number;
  /**
   * @remarks
   * The number of handled security alerts.
   * 
   * @example
   * 0
   */
  suspiciousdealedTotal?: number;
  /**
   * @remarks
   * The total number of security alerts. This field is deprecated.
   * 
   * @example
   * 0
   */
  suspicioushighTotal?: number;
  /**
   * @remarks
   * The number of alerts with the reminder severity level.
   * 
   * @example
   * 0
   */
  suspiciouslowTotal?: number;
  /**
   * @remarks
   * The number of alerts with the suspicious severity level.
   * 
   * @example
   * 28
   */
  suspiciousmediumTotal?: number;
  /**
   * @remarks
   * The number of alerts with the critical severity level.
   * 
   * @example
   * 0
   */
  suspiciousseriousTotal?: number;
  /**
   * @remarks
   * The number of WebShell alerts.
   * 
   * @example
   * 0
   */
  trojan?: number;
  /**
   * @remarks
   * The number of unfixed vulnerabilities.
   * 
   * @example
   * 0
   */
  vul?: number;
  /**
   * @remarks
   * The number of high-priority vulnerabilities.
   * 
   * @example
   * 16
   */
  vulAsapSum?: number;
  /**
   * @remarks
   * The total number of fixed vulnerabilities.
   * 
   * @example
   * 0
   */
  vulDealedTotal?: number;
  /**
   * @remarks
   * The number of medium-priority vulnerabilities.
   * 
   * @example
   * 0
   */
  vulLaterSum?: number;
  /**
   * @remarks
   * The number of low-priority vulnerabilities to be fixed.
   * 
   * @example
   * 0
   */
  vulNntfSum?: number;
  /**
   * @remarks
   * The number of vulnerabilities.
   * 
   * @example
   * 0
   */
  vulTotal?: number;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      health: 'Health',
      healthTotal: 'HealthTotal',
      healthdealedTotal: 'HealthdealedTotal',
      healthhighTotal: 'HealthhighTotal',
      healthlowTotal: 'HealthlowTotal',
      healthmediumTotal: 'HealthmediumTotal',
      healthseriousTotal: 'HealthseriousTotal',
      newsuspicious: 'Newsuspicious',
      online: 'Online',
      patch: 'Patch',
      requestId: 'RequestId',
      suspicious: 'Suspicious',
      suspiciousTotal: 'SuspiciousTotal',
      suspiciousdealedTotal: 'SuspiciousdealedTotal',
      suspicioushighTotal: 'SuspicioushighTotal',
      suspiciouslowTotal: 'SuspiciouslowTotal',
      suspiciousmediumTotal: 'SuspiciousmediumTotal',
      suspiciousseriousTotal: 'SuspiciousseriousTotal',
      trojan: 'Trojan',
      vul: 'Vul',
      vulAsapSum: 'VulAsapSum',
      vulDealedTotal: 'VulDealedTotal',
      vulLaterSum: 'VulLaterSum',
      vulNntfSum: 'VulNntfSum',
      vulTotal: 'VulTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'number',
      health: 'number',
      healthTotal: 'number',
      healthdealedTotal: 'number',
      healthhighTotal: 'number',
      healthlowTotal: 'number',
      healthmediumTotal: 'number',
      healthseriousTotal: 'number',
      newsuspicious: 'number',
      online: 'boolean',
      patch: 'number',
      requestId: 'string',
      suspicious: 'number',
      suspiciousTotal: 'number',
      suspiciousdealedTotal: 'number',
      suspicioushighTotal: 'number',
      suspiciouslowTotal: 'number',
      suspiciousmediumTotal: 'number',
      suspiciousseriousTotal: 'number',
      trojan: 'number',
      vul: 'number',
      vulAsapSum: 'number',
      vulDealedTotal: 'number',
      vulLaterSum: 'number',
      vulNntfSum: 'number',
      vulTotal: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

