// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrFirewallV2RoutePolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of secondary traffic redirection instances.
   * > DestCandidateList is required. If this parameter is not specified, an ErrorParameters(400) error is returned.
   */
  destCandidateListShrink?: string;
  /**
   * @remarks
   * The instance ID of the virtual private cloud (VPC) firewalls at the border.
   * > FirewallId is required. If this parameter is not specified, an ErrorParameters(400) error is returned. You can call the DescribeTrFirewallsV2List operation to obtain instance ID.
   * 
   * @example
   * vfw-tr-f8ce36689b224f77****
   */
  firewallId?: string;
  /**
   * @remarks
   * The language in which you want to receive messages. Valid values:
   * 
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The description of the traffic redirection policy.
   * 
   * @example
   * Singapore Point to Multipoint
   */
  policyDescription?: string;
  /**
   * @remarks
   * The name of the traffic redirection policy.
   * 
   * @example
   * Singapore Point to Multipoint
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the traffic redirection scenario for virtual private cloud (VPC) firewalls at the border in the Enterprise Edition Cloud Enterprise Network (CEN). Valid values:
   * 
   * - **fullmesh**: Multi-point interconnection.
   * 
   * - **one_to_one**: Point-to-point.
   * 
   * - **end_to_end**: Point-to-multipoint.
   * > PolicyType is required. If this parameter is not specified, an ErrorParameters(400) error is returned.
   * 
   * @example
   * fullmesh
   */
  policyType?: string;
  /**
   * @remarks
   * The list of primary traffic redirection instances.
   * > SrcCandidateList is required. If this parameter is not specified, an ErrorParameters(400) error is returned.
   */
  srcCandidateListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      destCandidateListShrink: 'DestCandidateList',
      firewallId: 'FirewallId',
      lang: 'Lang',
      policyDescription: 'PolicyDescription',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      srcCandidateListShrink: 'SrcCandidateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destCandidateListShrink: 'string',
      firewallId: 'string',
      lang: 'string',
      policyDescription: 'string',
      policyName: 'string',
      policyType: 'string',
      srcCandidateListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

