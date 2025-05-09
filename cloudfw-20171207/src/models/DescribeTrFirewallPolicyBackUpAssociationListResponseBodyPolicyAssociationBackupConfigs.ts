// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrFirewallPolicyBackUpAssociationListResponseBodyPolicyAssociationBackupConfigs extends $dara.Model {
  /**
   * @remarks
   * The ID of the traffic redirection instance.
   * 
   * @example
   * vpc-wz9grb8ng3y7h7lf2****
   */
  candidateId?: string;
  /**
   * @remarks
   * The name of the traffic redirection instance.
   * 
   * @example
   * test
   */
  candidateName?: string;
  /**
   * @remarks
   * The type of the traffic redirection instance.
   * 
   * @example
   * VPC
   */
  candidateType?: string;
  /**
   * @remarks
   * The route table that is used after traffic redirection.
   * 
   * @example
   * vtb-wz9898grickmh5j09****
   */
  currentRouteTableId?: string;
  /**
   * @remarks
   * The ID of the route table.
   * 
   * @example
   * vtb-wz9slp3s7m4qrzvnq****
   */
  originalRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      candidateId: 'CandidateId',
      candidateName: 'CandidateName',
      candidateType: 'CandidateType',
      currentRouteTableId: 'CurrentRouteTableId',
      originalRouteTableId: 'OriginalRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      candidateId: 'string',
      candidateName: 'string',
      candidateType: 'string',
      currentRouteTableId: 'string',
      originalRouteTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

