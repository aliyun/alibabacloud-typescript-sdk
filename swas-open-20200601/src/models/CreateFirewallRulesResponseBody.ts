// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFirewallRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of firewall rule IDs.
   */
  firewallRuleIds?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      firewallRuleIds: 'FirewallRuleIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallRuleIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.firewallRuleIds)) {
      $dara.Model.validateArray(this.firewallRuleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

