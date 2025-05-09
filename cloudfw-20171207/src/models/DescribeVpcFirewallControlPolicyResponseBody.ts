// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcFirewallControlPolicyResponseBodyPolicys } from "./DescribeVpcFirewallControlPolicyResponseBodyPolicys";


export class DescribeVpcFirewallControlPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access control policies.
   */
  policys?: DescribeVpcFirewallControlPolicyResponseBodyPolicys[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of access control policies returned.
   * 
   * @example
   * 20
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
      policys: { 'type': 'array', 'itemType': DescribeVpcFirewallControlPolicyResponseBodyPolicys },
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

