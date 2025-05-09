// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTrFirewallV2RoutePolicyListResponseBodyTrFirewallRoutePoliciesDestCandidateList } from "./DescribeTrFirewallV2routePolicyListResponseBodyTrFirewallRoutePoliciesDestCandidateList";
import { DescribeTrFirewallV2RoutePolicyListResponseBodyTrFirewallRoutePoliciesSrcCandidateList } from "./DescribeTrFirewallV2routePolicyListResponseBodyTrFirewallRoutePoliciesSrcCandidateList";


export class DescribeTrFirewallV2RoutePolicyListResponseBodyTrFirewallRoutePolicies extends $dara.Model {
  /**
   * @remarks
   * The secondary traffic redirection instances.
   */
  destCandidateList?: DescribeTrFirewallV2RoutePolicyListResponseBodyTrFirewallRoutePoliciesDestCandidateList[];
  /**
   * @remarks
   * The description of the routing policy.
   * 
   * @example
   * test
   */
  policyDescription?: string;
  /**
   * @remarks
   * The name of the routing policy.
   * 
   * @example
   * TEST_VPC_FW
   */
  policyName?: string;
  /**
   * @remarks
   * The status of the routing policy. Valid values:
   * 
   * *   creating: The policy is being created.
   * *   deleting: The policy is being deleted.
   * *   opening: The policy is being enabled.
   * *   opened: The policy is enabled.
   * *   closing: The policy is being disabled.
   * *   closed: The policy is disabled.
   * 
   * @example
   * opened
   */
  policyStatus?: string;
  /**
   * @remarks
   * The type of the traffic redirection scenario of the VPC firewall. Valid values:
   * 
   * *   **fullmesh**: interconnected instances
   * *   **one_to_one**: instance to instance
   * *   **end_to_end**: instance to instances
   * 
   * @example
   * fullmesh
   */
  policyType?: string;
  /**
   * @remarks
   * The primary traffic redirection instances.
   */
  srcCandidateList?: DescribeTrFirewallV2RoutePolicyListResponseBodyTrFirewallRoutePoliciesSrcCandidateList[];
  /**
   * @remarks
   * The ID of the routing policy.
   * 
   * @example
   * policy-7b66257c14e141fb****
   */
  trFirewallRoutePolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      destCandidateList: 'DestCandidateList',
      policyDescription: 'PolicyDescription',
      policyName: 'PolicyName',
      policyStatus: 'PolicyStatus',
      policyType: 'PolicyType',
      srcCandidateList: 'SrcCandidateList',
      trFirewallRoutePolicyId: 'TrFirewallRoutePolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destCandidateList: { 'type': 'array', 'itemType': DescribeTrFirewallV2RoutePolicyListResponseBodyTrFirewallRoutePoliciesDestCandidateList },
      policyDescription: 'string',
      policyName: 'string',
      policyStatus: 'string',
      policyType: 'string',
      srcCandidateList: { 'type': 'array', 'itemType': DescribeTrFirewallV2RoutePolicyListResponseBodyTrFirewallRoutePoliciesSrcCandidateList },
      trFirewallRoutePolicyId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.destCandidateList)) {
      $dara.Model.validateArray(this.destCandidateList);
    }
    if(Array.isArray(this.srcCandidateList)) {
      $dara.Model.validateArray(this.srcCandidateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

