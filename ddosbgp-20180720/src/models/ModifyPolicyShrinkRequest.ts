// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The action type. Valid values:
   * 
   * - **10**: Modifies the name (Name is required).
   * - **11**: Modifies the blacklist timeout period (BlackIpListExpireAt is required). Only IP-specific mitigation policies are supported.
   * - **12**: Modifies the switch for whitelisting back-to-origin IP addresses of Anti-DDoS Pro and Anti-DDoS Premium (WhitenGfbrNets is required). Only IP-specific mitigation policies are supported.
   * - **13**: Modifies the switch for ICMP Blocking (EnableDropIcmp is required). Only IP-specific mitigation policies are supported.
   * - **20**: Adds blacklist and whitelist entries (WhiteIpList and BlackIpList are optional). Only IP-specific mitigation policies are supported.
   * - **21**: Deletes blacklist and whitelist entries (WhiteIpList and BlackIpList are optional). Only IP-specific mitigation policies are supported.
   * - **22**: Clears the whitelist. Only IP-specific mitigation policies are supported.
   * - **23**: Clears the blacklist. Only IP-specific mitigation policies are supported.
   * - **30**: Modifies the AI-based intelligent protection switch and level (EnableIntelligence and IntelligenceLevel are required). Only IP-specific mitigation policies are supported.
   * - **31**: Modifies the Location Blacklist configuration (RegionBlockCountryList and RegionBlockProvinceList are optional). Only IP-specific mitigation policies are supported.
   * - **32**: Modifies the Source Rate Limiting configuration (SourceLimit and SourceBlockList are required). Only IP-specific mitigation policies are supported.
   * - **33**: Modifies the Reflection Attack Filtering (ReflectBlockUdpPortList is required). Only IP-specific mitigation policies are supported.
   * - **40**: Creates a Port Blocking rule (PortRuleList is required). Only IP-specific mitigation policies are supported.
   * - **41**: Modifies a Port Blocking rule (PortRuleList is required). Only IP-specific mitigation policies are supported.
   * - **42**: Deletes a Port Blocking rule (PortRuleList is required). Only IP-specific mitigation policies are supported.
   * - **50**: Creates a Byte-Match Filter rule (FingerPrintRuleList is required). Only IP-specific mitigation policies are supported.
   * - **51**: Modifies a Byte-Match Filter rule (FingerPrintRuleList is required). Only IP-specific mitigation policies are supported.
   * - **52**: Deletes a Byte-Match Filter rule (FingerPrintRuleList is required). Only IP-specific mitigation policies are supported.
   * - **60**: Modifies the port-specific mitigation switch (EnableL4Defense is required). Only port-specific mitigation policies are supported.
   * - **61**: Creates a port-specific mitigation rule (L4RuleList is required). Only port-specific mitigation policies are supported.
   * - **62**: Modifies a port-specific mitigation rule (L4RuleList is required). Only port-specific mitigation policies are supported.
   * - **63**: Deletes a port-specific mitigation rule (L4RuleList is required). Only port-specific mitigation policies are supported.
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
   * The port-specific mitigation policy version. Valid values:
   * 
   * - **Empty**: Modifies the default surf DPI engine policy.
   * - **2**: Modifies the new stream DPI engine policy.
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

