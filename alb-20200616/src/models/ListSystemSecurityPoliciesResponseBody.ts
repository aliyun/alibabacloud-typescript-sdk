// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSystemSecurityPoliciesResponseBodySecurityPolicies } from "./ListSystemSecurityPoliciesResponseBodySecurityPolicies";


export class ListSystemSecurityPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 593B0448-D13E-4C56-AC0D-FDF0FDE0E9A3
   */
  requestId?: string;
  /**
   * @remarks
   * The security policies.
   */
  securityPolicies?: ListSystemSecurityPoliciesResponseBodySecurityPolicies[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityPolicies: 'SecurityPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityPolicies: { 'type': 'array', 'itemType': ListSystemSecurityPoliciesResponseBodySecurityPolicies },
    };
  }

  validate() {
    if(Array.isArray(this.securityPolicies)) {
      $dara.Model.validateArray(this.securityPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

