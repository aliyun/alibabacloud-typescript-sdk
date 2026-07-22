// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrFirewallV2RoutePolicyRequestDestCandidateList extends $dara.Model {
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
   * The type of the traffic redirection instance. Valid values: VPC, VBR, TR, ALL, VPN, and ECR.
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

export class CreateTrFirewallV2RoutePolicyRequestSrcCandidateList extends $dara.Model {
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
   * The type of the traffic redirection instance. Valid values: VPC, VBR, TR, VPN, and ECR.
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

export class CreateTrFirewallV2RoutePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The secondary traffic redirection instances.
   */
  destCandidateList?: CreateTrFirewallV2RoutePolicyRequestDestCandidateList[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) firewall instance.
   * > FirewallId is required. If it is not specified, ErrorParameters(400) is returned. You can call DescribeTrFirewallsV2List to obtain the instance ID.
   * 
   * @example
   * vfw-tr-f8ce36689b224f77****
   */
  firewallId?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The description of the traffic redirection configuration.
   * 
   * @example
   * Singapore Point to Multipoint
   */
  policyDescription?: string;
  /**
   * @remarks
   * The name of the traffic redirection configuration.
   * 
   * @example
   * Singapore Point to Multipoint
   */
  policyName?: string;
  /**
   * @remarks
   * The traffic redirection scenario type for the virtual private cloud (VPC) firewall on a Cloud Enterprise Network (CEN) Enterprise Edition transit router. Valid values:
   * 
   * - **fullmesh**: multi-point interconnection
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
   * The primary traffic redirection instances.
   */
  srcCandidateList?: CreateTrFirewallV2RoutePolicyRequestSrcCandidateList[];
  static names(): { [key: string]: string } {
    return {
      destCandidateList: 'DestCandidateList',
      firewallId: 'FirewallId',
      lang: 'Lang',
      policyDescription: 'PolicyDescription',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      srcCandidateList: 'SrcCandidateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destCandidateList: { 'type': 'array', 'itemType': CreateTrFirewallV2RoutePolicyRequestDestCandidateList },
      firewallId: 'string',
      lang: 'string',
      policyDescription: 'string',
      policyName: 'string',
      policyType: 'string',
      srcCandidateList: { 'type': 'array', 'itemType': CreateTrFirewallV2RoutePolicyRequestSrcCandidateList },
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

