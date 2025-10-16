// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcFirewallPrecheckRequest extends $dara.Model {
  /**
   * @example
   * cen-iv8m2lj2fqg1xt****
   */
  cenId?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 128599825273****
   */
  memberUid?: string;
  /**
   * @example
   * cen_tr_firewall
   */
  networkInstanceType?: string;
  /**
   * @example
   * cn-chengdu
   */
  region?: string;
  /**
   * @example
   * tr-t4n16htuv1jalj9cq****
   */
  transitRouterId?: string;
  /**
   * @example
   * vpc-bp132e2wpu9o6qth****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      lang: 'Lang',
      memberUid: 'MemberUid',
      networkInstanceType: 'NetworkInstanceType',
      region: 'Region',
      transitRouterId: 'TransitRouterId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      lang: 'string',
      memberUid: 'string',
      networkInstanceType: 'string',
      region: 'string',
      transitRouterId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

