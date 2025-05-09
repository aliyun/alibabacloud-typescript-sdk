// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNatFirewallControlPolicyResponseBodyPolicys } from "./DescribeNatFirewallControlPolicyResponseBodyPolicys";


export class DescribeNatFirewallControlPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the access control policies.
   */
  policys?: DescribeNatFirewallControlPolicyResponseBodyPolicys[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F183567D-8A52-5BAE-9472-F1C427378C28
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 28
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      policys: 'Policys',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policys: { 'type': 'array', 'itemType': DescribeNatFirewallControlPolicyResponseBodyPolicys },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policys)) {
      $dara.Model.validateArray(this.policys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

