// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterPolicyBasedRouteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the policy-based routing rule.
   * 
   * @example
   * pbr-123abczxc
   */
  policyBasedRouteId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 13526224-5780-4426-8BDF-BC8B08700F22
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyBasedRouteId: 'PolicyBasedRouteId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyBasedRouteId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

