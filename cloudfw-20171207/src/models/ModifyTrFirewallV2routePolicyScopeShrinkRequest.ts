// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTrFirewallV2RoutePolicyScopeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of secondary traffic redirection instances.
   */
  destCandidateListShrink?: string;
  /**
   * @remarks
   * The instance ID of the virtual private cloud (VPC) firewalls.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-tr-6520de0253bc4669****
   */
  firewallId?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
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
   * Specifies whether to restore the traffic redirection configuration. Valid values:
   * 
   * - true: Route rollback.
   * 
   * - false: Route withdrawal.
   * 
   * @example
   * false
   */
  shouldRecover?: string;
  /**
   * @remarks
   * The list of primary traffic redirection instances.
   */
  srcCandidateListShrink?: string;
  /**
   * @remarks
   * The ID of the firewall route policy.
   * 
   * This parameter is required.
   * 
   * @example
   * policy-4d724d0139df48f1****
   */
  trFirewallRoutePolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      destCandidateListShrink: 'DestCandidateList',
      firewallId: 'FirewallId',
      lang: 'Lang',
      shouldRecover: 'ShouldRecover',
      srcCandidateListShrink: 'SrcCandidateList',
      trFirewallRoutePolicyId: 'TrFirewallRoutePolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destCandidateListShrink: 'string',
      firewallId: 'string',
      lang: 'string',
      shouldRecover: 'string',
      srcCandidateListShrink: 'string',
      trFirewallRoutePolicyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

