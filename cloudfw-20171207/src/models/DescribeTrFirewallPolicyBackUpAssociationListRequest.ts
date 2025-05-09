// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTrFirewallPolicyBackUpAssociationListRequestCandidateList } from "./DescribeTrFirewallPolicyBackUpAssociationListRequestCandidateList";


export class DescribeTrFirewallPolicyBackUpAssociationListRequest extends $dara.Model {
  /**
   * @remarks
   * The traffic redirection instances.
   */
  candidateList?: DescribeTrFirewallPolicyBackUpAssociationListRequestCandidateList[];
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-tr-8b268ce1b26e4c68****
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
   * The ID of the routing policy.
   * 
   * @example
   * policy-5dcafb12ff794a56****
   */
  trFirewallRoutePolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      candidateList: 'CandidateList',
      firewallId: 'FirewallId',
      lang: 'Lang',
      trFirewallRoutePolicyId: 'TrFirewallRoutePolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      candidateList: { 'type': 'array', 'itemType': DescribeTrFirewallPolicyBackUpAssociationListRequestCandidateList },
      firewallId: 'string',
      lang: 'string',
      trFirewallRoutePolicyId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.candidateList)) {
      $dara.Model.validateArray(this.candidateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

