// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of assets that are ignored.
   * 
   * @example
   * 0
   */
  ignoreAssetCount?: number;
  /**
   * @remarks
   * The number of domain names that are ignored.
   * 
   * @example
   * 10
   */
  ignoreDomainCount?: number;
  /**
   * @remarks
   * The number of destination IP addresses that are ignored.
   * 
   * @example
   * 0
   */
  ignoreDstIPCount?: number;
  /**
   * @remarks
   * The number of risky assets with outbound connections over a private network.
   * 
   * @example
   * 0
   */
  privateRiskAssetCount?: number;
  /**
   * @remarks
   * The number of assets with outbound connections over a private network.
   * 
   * @example
   * 0
   */
  privateTotalAssetCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E2BD70F4-48BF-5EFD-B103-F0763E27*****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of risky assets.
   * 
   * @example
   * 0
   */
  riskAssetCount?: number;
  /**
   * @remarks
   * The number of risky domain names for outbound connections.
   * 
   * @example
   * 1
   */
  riskDomainCount?: number;
  /**
   * @remarks
   * The number of risky destination IP addresses for outbound connections.
   * 
   * @example
   * 1
   */
  riskDstIPCount?: number;
  /**
   * @remarks
   * The number of assets that you follow.
   * 
   * @example
   * 0
   */
  subscribeAssetCount?: number;
  /**
   * @remarks
   * The number of domain names that you follow.
   * 
   * @example
   * 10
   */
  subscribeDomainCount?: number;
  /**
   * @remarks
   * The number of destination IP addresses that you follow.
   * 
   * @example
   * 10
   */
  subscribeDstIPCount?: number;
  /**
   * @remarks
   * The total number of assets that have outbound connections.
   * 
   * @example
   * 13
   */
  totalAssetCount?: number;
  /**
   * @remarks
   * The total number of outbound domain names.
   * 
   * @example
   * 10
   */
  totalDomainCount?: number;
  /**
   * @remarks
   * The total number of destination IP addresses for outbound connections.
   * 
   * @example
   * 107
   */
  totalDstIPCount?: number;
  /**
   * @remarks
   * The number of outbound connection protocols.
   * 
   * @example
   * 10
   */
  totalProtocolCount?: number;
  /**
   * @remarks
   * The number of domain names that are not covered by a policy.
   * 
   * @example
   * 0
   */
  uncoveredAclDomain?: number;
  /**
   * @remarks
   * The number of destination IP addresses that are not covered by a policy.
   * 
   * @example
   * 10
   */
  uncoveredAclDstIP?: number;
  /**
   * @remarks
   * The percentage of traffic from unidentified protocols.
   * 
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

