// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrFirewallV2RoutePolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of secondary traffic redirection instances.
   */
  destCandidateListShrink?: string;
  /**
   * @remarks
   * The VPC border firewall instance ID.
   * 
   * @example
   * vfw-tr-f8ce36689b224f77****
   */
  firewallId?: string;
  /**
   * @remarks
   * The language type for receiving messages. Valid values:
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
   * The traffic redirection description.
   * 
   * @example
   * Singapore Point to Multipoint
   */
  policyDescription?: string;
  /**
   * @remarks
   * The traffic redirection name.
   * 
   * @example
   * Singapore Point to Multipoint
   */
  policyName?: string;
  /**
   * @remarks
   * The traffic redirection scenario type for the VPC border firewall with Cloud Enterprise Network Enterprise Edition. Valid values:
   * 
   * - **fullmesh**: Multi-point interconnection
   * 
   * - **one_to_one**: Point-to-point
   * 
   * - **end_to_end**: Point-to-multipoint
   * 
   * @example
   * fullmesh
   */
  policyType?: string;
  /**
   * @remarks
   * The list of primary traffic redirection instances.
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

