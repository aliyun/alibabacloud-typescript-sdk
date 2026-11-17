// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFirewallV2RoutePolicySwitchRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the virtual private cloud (VPC) firewalls.
   * 
   * **Note**: This parameter is actually required. If it is not provided, the operation returns ErrorParameters (-360103).
   * 
   * @example
   * vfw-tr-5b202e7f0be64611****
   */
  firewallId?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * 
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to restore the traffic redirection configuration. Valid values:
   * 
   * - true: Rolls back the route.
   * 
   * - false: Revokes the route.
   * 
   * @example
   * false
   */
  shouldRecover?: string;
  /**
   * @remarks
   * The ID of the firewall route policy.
   * 
   * **Note**: This parameter is actually required. If it is not provided or the policy does not exist, the operation returns ErrorTrFirewallPolicyNotFound (-361043). You can call DescribeTrFirewallV2RoutePolicyList to query valid route policy IDs.
   * 
   * @example
   * policy-93684cc5caa44b2e****
   */
  trFirewallRoutePolicyId?: string;
  /**
   * @remarks
   * The status of the policy switch. Valid values:
   * 
   * - open: Enabled.
   * 
   * - close: Disabled.
   * 
   * **Note**: This parameter is actually required. If it is not provided or the value is not within the preceding range, the operation returns ErrorParameters (-360103).
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

