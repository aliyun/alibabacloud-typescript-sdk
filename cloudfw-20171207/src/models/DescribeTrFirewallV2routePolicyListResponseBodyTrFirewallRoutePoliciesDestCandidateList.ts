// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrFirewallV2RoutePolicyListResponseBodyTrFirewallRoutePoliciesDestCandidateList extends $dara.Model {
  /**
   * @remarks
   * The ID of the secondary traffic redirection instance.
   * 
   * @example
   * vpc-2ze9epancaw8t4sha****
   */
  candidateId?: string;
  /**
   * @remarks
   * The type of the secondary traffic redirection instance.
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

