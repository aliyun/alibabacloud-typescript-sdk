// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFirewallV2RoutePoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-tr-d5ba592ac6c84aff****
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
   * The ID of the routing policy.
   * 
   * @example
   * policy-2d06d3568fd74d60****
   */
  trFirewallRoutePolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      firewallId: 'FirewallId',
      lang: 'Lang',
      trFirewallRoutePolicyId: 'TrFirewallRoutePolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallId: 'string',
      lang: 'string',
      trFirewallRoutePolicyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

