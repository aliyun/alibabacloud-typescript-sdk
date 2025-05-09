// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFirewallV2RoutePolicySwitchRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the virtual private cloud (VPC) firewall.
   * 
   * @example
   * vfw-tr-5b202e7f0be64611****
   */
  firewallId?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to restore the traffic redirection configurations. Valid values:
   * 
   * *   true: roll back
   * *   false: withdraw
   * 
   * @example
   * false
   */
  shouldRecover?: string;
  /**
   * @remarks
   * The ID of the routing policy.
   * 
   * @example
   * policy-93684cc5caa44b2e****
   */
  trFirewallRoutePolicyId?: string;
  /**
   * @remarks
   * The status of the routing policy. Valid values:
   * 
   * *   open: enabled
   * *   close: disabled
   * 
   * @example
   * open
   */
  trFirewallRoutePolicySwitchStatus?: string;
  static names(): { [key: string]: string } {
    return {
      firewallId: 'FirewallId',
      lang: 'Lang',
      shouldRecover: 'ShouldRecover',
      trFirewallRoutePolicyId: 'TrFirewallRoutePolicyId',
      trFirewallRoutePolicySwitchStatus: 'TrFirewallRoutePolicySwitchStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallId: 'string',
      lang: 'string',
      shouldRecover: 'string',
      trFirewallRoutePolicyId: 'string',
      trFirewallRoutePolicySwitchStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

