// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingStatisticResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  ignoreAssetCount?: number;
  /**
   * @example
   * 10
   */
  ignoreDomainCount?: number;
  /**
   * @example
   * 0
   */
  ignoreDstIPCount?: number;
  /**
   * @example
   * 0
   */
  privateRiskAssetCount?: number;
  /**
   * @example
   * 0
   */
  privateTotalAssetCount?: number;
  /**
   * @example
   * E2BD70F4-48BF-5EFD-B103-F0763E27*****
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  riskAssetCount?: number;
  /**
   * @example
   * 1
   */
  riskDomainCount?: number;
  /**
   * @example
   * 1
   */
  riskDstIPCount?: number;
  /**
   * @example
   * 0
   */
  subscribeAssetCount?: number;
  /**
   * @example
   * 10
   */
  subscribeDomainCount?: number;
  /**
   * @example
   * 10
   */
  subscribeDstIPCount?: number;
  /**
   * @example
   * 13
   */
  totalAssetCount?: number;
  /**
   * @example
   * 10
   */
  totalDomainCount?: number;
  /**
   * @example
   * 107
   */
  totalDstIPCount?: number;
  /**
   * @example
   * 10
   */
  totalProtocolCount?: number;
  /**
   * @example
   * 0
   */
  uncoveredAclDomain?: number;
  /**
   * @example
   * 10
   */
  uncoveredAclDstIP?: number;
  /**
   * @example
   * 20.13
   */
  unknownProtocolRadio?: string;
  static names(): { [key: string]: string } {
    return {
      ignoreAssetCount: 'IgnoreAssetCount',
      ignoreDomainCount: 'IgnoreDomainCount',
      ignoreDstIPCount: 'IgnoreDstIPCount',
      privateRiskAssetCount: 'PrivateRiskAssetCount',
      privateTotalAssetCount: 'PrivateTotalAssetCount',
      requestId: 'RequestId',
      riskAssetCount: 'RiskAssetCount',
      riskDomainCount: 'RiskDomainCount',
      riskDstIPCount: 'RiskDstIPCount',
      subscribeAssetCount: 'SubscribeAssetCount',
      subscribeDomainCount: 'SubscribeDomainCount',
      subscribeDstIPCount: 'SubscribeDstIPCount',
      totalAssetCount: 'TotalAssetCount',
      totalDomainCount: 'TotalDomainCount',
      totalDstIPCount: 'TotalDstIPCount',
      totalProtocolCount: 'TotalProtocolCount',
      uncoveredAclDomain: 'UncoveredAclDomain',
      uncoveredAclDstIP: 'UncoveredAclDstIP',
      unknownProtocolRadio: 'UnknownProtocolRadio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreAssetCount: 'number',
      ignoreDomainCount: 'number',
      ignoreDstIPCount: 'number',
      privateRiskAssetCount: 'number',
      privateTotalAssetCount: 'number',
      requestId: 'string',
      riskAssetCount: 'number',
      riskDomainCount: 'number',
      riskDstIPCount: 'number',
      subscribeAssetCount: 'number',
      subscribeDomainCount: 'number',
      subscribeDstIPCount: 'number',
      totalAssetCount: 'number',
      totalDomainCount: 'number',
      totalDstIPCount: 'number',
      totalProtocolCount: 'number',
      uncoveredAclDomain: 'number',
      uncoveredAclDstIP: 'number',
      unknownProtocolRadio: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

