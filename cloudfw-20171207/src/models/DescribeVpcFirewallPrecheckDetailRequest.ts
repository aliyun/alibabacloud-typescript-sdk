// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallPrecheckDetailRequest extends $dara.Model {
  /**
   * @example
   * cen-hxsqf2bv6di1a****
   */
  cenId?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 134388541648****
   */
  memberUid?: string;
  /**
   * @example
   * cen_firewall
   */
  networkInstanceType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * tr-2vcn4u2g86tm72****
   */
  transitRouterId?: string;
  /**
   * @example
   * vpc-2zev8s8rxao33xt****
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

