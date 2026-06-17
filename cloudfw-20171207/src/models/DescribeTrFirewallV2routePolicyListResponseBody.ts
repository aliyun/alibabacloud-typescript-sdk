// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrFirewallV2RoutePolicyListResponseBodyTrFirewallRoutePoliciesDestCandidateList extends $dara.Model {
  /**
   * @remarks
   * The ID of the traffic redirection instance.
   * 
   * @example
   * vpc-2ze9epancaw8t4sha****
   */
  candidateId?: string;
  /**
   * @remarks
   * The type of the traffic redirection instance.
   * 
   * @example
   * VPC
   */
  candidateType?: string;
  static names(): { [key: string]: string } {
    return {
      candidateId: 'CandidateId',
      candidateType: 'CandidateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      candidateId: 'string',
      candidateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallV2RoutePolicyListResponseBodyTrFirewallRoutePoliciesSrcCandidateList extends $dara.Model {
  /**
   * @remarks
   * The ID of the traffic redirection instance.
   * 
   * @example
   * vpc-2ze9epancaw8t4sha****
   */
  candidateId?: string;
  /**
   * @remarks
   * The type of the traffic redirection instance.
   * 
   * @example
   * VPC
   */
  candidateType?: string;
  static names(): { [key: string]: string } {
    return {
      candidateId: 'CandidateId',
      candidateType: 'CandidateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      candidateId: 'string',
      candidateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallV2RoutePolicyListResponseBodyTrFirewallRoutePolicies extends $dara.Model {
  /**
   * @remarks
   * The list of destination traffic redirection instances.
   */
  destCandidateList?: DescribeTrFirewallV2RoutePolicyListResponseBodyTrFirewallRoutePoliciesDestCandidateList[];
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * Point to multipoint
   */
  policyDescription?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * Singapore Point to Multipoint
   */
  policyName?: string;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * 
   * - creating: The policy is being created.
   * 
   * - deleting: The policy is being deleted.
   * 
   * - opening: The policy is being enabled.
   * 
   * - opened: The policy is enabled.
   * 
   * - closing: The policy is being disabled.
   * 
   * - closed: The policy is disabled.
   * 
   * @example
   * opened
   */
  policyStatus?: string;
  /**
   * @remarks
   * The type of traffic redirection scenario for the VPC firewall. The firewall is created for a transit router that belongs to an Enterprise Edition Cloud Enterprise Network (CEN) instance. Valid values:
   * 
   * - **fullmesh**: full-mesh
   * 
   * - **one_to_one**: point-to-point
   * 
   * - **end_to_end**: point-to-multipoint
   * 
   * @example
   * fullmesh
   */
  policyType?: string;
  /**
   * @remarks
   * The list of source traffic redirection instances.
   */
  srcCandidateList?: DescribeTrFirewallV2RoutePolicyListResponseBodyTrFirewallRoutePoliciesSrcCandidateList[];
  /**
   * @remarks
   * The ID of the firewall routing policy.
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

export class DescribeTrFirewallV2RoutePolicyListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 95EB5F3A-67FE-5780-92BD-5ECBA772AB7E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  /**
   * @remarks
   * The list of firewall routing policies.
   */
  trFirewallRoutePolicies?: DescribeTrFirewallV2RoutePolicyListResponseBodyTrFirewallRoutePolicies[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trFirewallRoutePolicies: 'TrFirewallRoutePolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'string',
      trFirewallRoutePolicies: { 'type': 'array', 'itemType': DescribeTrFirewallV2RoutePolicyListResponseBodyTrFirewallRoutePolicies },
    };
  }

  validate() {
    if(Array.isArray(this.trFirewallRoutePolicies)) {
      $dara.Model.validateArray(this.trFirewallRoutePolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

