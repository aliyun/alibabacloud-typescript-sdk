// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTrFirewallV2RoutePolicyScopeRequestDestCandidateList extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * vpc-2ze9epancaw8t4uzi****
   */
  candidateId?: string;
  /**
   * @remarks
   * The type of the instance.
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
   * The ID of the instance.
   * 
   * @example
   * vpc-2ze9epancaw8t4sha****
   */
  candidateId?: string;
  /**
   * @remarks
   * The type of the instance.
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
   * The destination instances.
   */
  destCandidateList?: ModifyTrFirewallV2RoutePolicyScopeRequestDestCandidateList[];
  /**
   * @remarks
   * The ID of the TR firewall instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-tr-6520de0253bc4669****
   */
  firewallId?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to restore the traffic redirection configuration. Valid values:
   * 
   * - true: Rolls back the routes.
   * 
   * - false: Revokes the routes.
   * 
   * @example
   * false
   */
  shouldRecover?: string;
  /**
   * @remarks
   * The source instances.
   */
  srcCandidateList?: ModifyTrFirewallV2RoutePolicyScopeRequestSrcCandidateList[];
  /**
   * @remarks
   * The ID of the routing policy.
   * 
   * This parameter is required.
   * 
   * @example
   * policy-4d724d0139df48f1****
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

