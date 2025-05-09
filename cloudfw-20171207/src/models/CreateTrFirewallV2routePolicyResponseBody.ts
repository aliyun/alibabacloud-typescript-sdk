// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrFirewallV2RoutePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C91D68BA-A0BE-51BF-A0F1-1CB5C57FE58D
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the routing policy.
   * 
   * @example
   * policy-8ebed27e13e14ce2****
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

