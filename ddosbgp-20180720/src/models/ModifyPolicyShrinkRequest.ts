// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The action type. Valid values:
   * 
   * - **10**: modifies the name (Name is required).
   * - **11**: modifies the blacklist timeout period (BlackIpListExpireAt is required). Only IP-specific mitigation policy is supported.
   * - **12**: modifies the switch for whitelisting back-to-origin IP addresses of Anti-DDoS Pro and Anti-DDoS Premium (WhitenGfbrNets is required). Only IP-specific mitigation policy is supported.
   * - **13**: modifies the switch for ICMP Blocking (EnableDropIcmp is required). Only IP-specific mitigation policy is supported.
   * - **20**: adds entries to blacklists and whitelists (WhiteIpList and BlackIpList are optional). Only IP-specific mitigation policy is supported.
   * - **21**: deletes entries from blacklists and whitelists (WhiteIpList and BlackIpList are optional). Only IP-specific mitigation policy is supported.
   * - **22**: clears the whitelist. Only IP-specific mitigation policy is supported.
   * - **23**: clears the blacklist. Only IP-specific mitigation policy is supported.
   * - **30**: modifies the AI-based intelligent protection switch and level (EnableIntelligence and IntelligenceLevel are required). Only IP-specific mitigation policy is supported.
   * - **31**: modifies the Location Blacklist configuration (RegionBlockCountryList and RegionBlockProvinceList are optional). Only IP-specific mitigation policy is supported.
   * - **32**: modifies the source rate limiting configuration (SourceLimit and SourceBlockList are required). Only IP-specific mitigation policy is supported.
   * - **33**: modifies the reflection attack port filtering (ReflectBlockUdpPortList is required). Only IP-specific mitigation policy is supported.
   * - **40**: creates a port blocking rule (PortRuleList is required). Only IP-specific mitigation policy is supported.
   * - **41**: modifies a port blocking rule (PortRuleList is required). Only IP-specific mitigation policy is supported.
   * - **42**: deletes a port blocking rule (PortRuleList is required). Only IP-specific mitigation policy is supported.
   * - **50**: creates a byte-match filter rule (FingerPrintRuleList is required). Only IP-specific mitigation policy is supported.
   * - **51**: modifies a byte-match filter rule (FingerPrintRuleList is required). Only IP-specific mitigation policy is supported.
   * - **52**: deletes a byte-match filter rule (FingerPrintRuleList is required). Only IP-specific mitigation policy is supported.
   * - **60**: modifies the port-specific mitigation switch (EnableL4Defense is required). Only port-specific mitigation policy is supported.
   * - **61**: creates a port-specific mitigation rule (L4RuleList is required). Only port-specific mitigation policy is supported.
   * - **62**: modifies a port-specific mitigation rule (L4RuleList is required). Only port-specific mitigation policy is supported.
   * - **63**: deletes a port-specific mitigation rule (L4RuleList is required). Only port-specific mitigation policy is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 11
   */
  actionType?: number;
  /**
   * @remarks
   * The policy content.
   */
  contentShrink?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c52c2fa6-fdac-40c4-8753-be7c********
   */
  id?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * demo**
   */
  name?: string;
  /**
   * @remarks
   * The version of the port-specific mitigation policy. Valid values:
   * 
   * - **Not specified**: Modifies the default surf mitigation engine policy.
   * - **2**: Modifies the new stream mitigation engine policy.
   * > Only port-specific mitigation policies are supported.
   * 
   * @example
   * 2
   */
  portVersion?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      contentShrink: 'Content',
      id: 'Id',
      name: 'Name',
      portVersion: 'PortVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'number',
      contentShrink: 'string',
      id: 'string',
      name: 'string',
      portVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

