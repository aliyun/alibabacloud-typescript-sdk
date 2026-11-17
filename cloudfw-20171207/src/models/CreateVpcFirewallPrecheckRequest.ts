// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcFirewallPrecheckRequest extends $dara.Model {
  /**
   * @remarks
   * The CEN instance ID.
   * 
   * @example
   * cen-iv8m2lj2fqg1xt****
   */
  cenId?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the Cloud Firewall member account.
   * 
   * @example
   * 128599825273****
   */
  memberUid?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * 
   * - **cen_firewall**
   * 
   * - **cen_tr_firewall**
   * 
   * - **ec_firewall**
   * 
   * @example
   * cen_tr_firewall
   */
  networkInstanceType?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-chengdu
   */
  region?: string;
  /**
   * @remarks
   * The transit router instance ID.
   * 
   * @example
   * tr-t4n16htuv1jalj9cq****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The VPC-connected instance ID.
   * 
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

