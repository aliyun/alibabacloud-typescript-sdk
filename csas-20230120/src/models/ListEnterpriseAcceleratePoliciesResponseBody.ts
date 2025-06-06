// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEnterpriseAcceleratePoliciesResponseBodyPolicies } from "./ListEnterpriseAcceleratePoliciesResponseBodyPolicies";


export class ListEnterpriseAcceleratePoliciesResponseBody extends $dara.Model {
  policies?: ListEnterpriseAcceleratePoliciesResponseBodyPolicies[];
  /**
   * @example
   * DB0471D0-C05C-556D-9F40-0325D890036F
   */
  requestId?: string;
  /**
   * @example
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': ListEnterpriseAcceleratePoliciesResponseBodyPolicies },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

