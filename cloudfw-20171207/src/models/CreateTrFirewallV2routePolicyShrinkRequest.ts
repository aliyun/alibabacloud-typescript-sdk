// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrFirewallV2RoutePolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The secondary traffic redirection instances.
   */
  destCandidateListShrink?: string;
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

