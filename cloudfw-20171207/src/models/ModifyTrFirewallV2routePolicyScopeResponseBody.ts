// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTrFirewallV2RoutePolicyScopeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E7D4D635-0C70-5CEB-A609-851E94D51FBB
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the routing policy.
   * 
   * @example
   * policy-4d724d0139df48f18091
   */
  trFirewallRoutePolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trFirewallRoutePolicyId: 'TrFirewallRoutePolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

