// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTrFirewallV2RoutePolicyScopeRequestDestCandidateList extends $dara.Model {
  /**
   * @remarks
   * The ID of the traffic redirection instance.
   * 
   * @example
   * vpc-2ze9epancaw8t4shajuzi
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

export class ModifyTrFirewallV2RoutePolicyScopeRequestSrcCandidateList extends $dara.Model {
  /**
   * @remarks
   * The ID of the traffic redirection instance.
   * 
   * @example
   * vpc-2ze9epancaw8t4shajuzi
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

export class ModifyTrFirewallV2RoutePolicyScopeRequest extends $dara.Model {
  /**
   * @remarks
   * The secondary traffic redirection instances.
   */
  destCandidateList?: ModifyTrFirewallV2RoutePolicyScopeRequestDestCandidateList[];
  /**
   * @remarks
   * The instance ID of the virtual private cloud (VPC) firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-tr-6520de0253bc4669bbd9
   */
  firewallId?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *  **zh** (default): Chinese
   * *  **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to restore the traffic redirection configurations. Valid values:
   * 
   * *   true: roll back
   * *   false: withdraw
   * 
   * @example
   * false
   */
  shouldRecover?: string;
  /**
   * @remarks
   * The primary traffic redirection instances.
   */
  srcCandidateList?: ModifyTrFirewallV2RoutePolicyScopeRequestSrcCandidateList[];
  /**
   * @remarks
   * The ID of the routing policy.
   * 
   * This parameter is required.
   * 
   * @example
   * policy-4d724d0139df48f18091
   */
  trFirewallRoutePolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      destCandidateList: 'DestCandidateList',
      firewallId: 'FirewallId',
      lang: 'Lang',
      shouldRecover: 'ShouldRecover',
      srcCandidateList: 'SrcCandidateList',
      trFirewallRoutePolicyId: 'TrFirewallRoutePolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destCandidateList: { 'type': 'array', 'itemType': ModifyTrFirewallV2RoutePolicyScopeRequestDestCandidateList },
      firewallId: 'string',
      lang: 'string',
      shouldRecover: 'string',
      srcCandidateList: { 'type': 'array', 'itemType': ModifyTrFirewallV2RoutePolicyScopeRequestSrcCandidateList },
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

