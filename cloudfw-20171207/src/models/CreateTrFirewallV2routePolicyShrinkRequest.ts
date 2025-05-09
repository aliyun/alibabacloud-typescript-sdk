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
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-tr-f8ce36689b224f77****
   */
  firewallId?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The description of the traffic redirection instance.
   * 
   * @example
   * test
   */
  policyDescription?: string;
  /**
   * @remarks
   * The name of the traffic redirection instance.
   * 
   * @example
   * TEST_VPC_FW
   */
  policyName?: string;
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

