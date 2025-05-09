// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTrFirewallV2RoutePolicyRequestDestCandidateList } from "./CreateTrFirewallV2routePolicyRequestDestCandidateList";
import { CreateTrFirewallV2RoutePolicyRequestSrcCandidateList } from "./CreateTrFirewallV2routePolicyRequestSrcCandidateList";


export class CreateTrFirewallV2RoutePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The secondary traffic redirection instances.
   */
  destCandidateList?: CreateTrFirewallV2RoutePolicyRequestDestCandidateList[];
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

