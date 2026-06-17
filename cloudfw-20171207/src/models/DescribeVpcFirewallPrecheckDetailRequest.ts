// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallPrecheckDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-hxsqf2bv6di1a****
   */
  cenId?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
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
   * The UID of the member account in Cloud Firewall.
   * 
   * @example
   * 134388541648****
   */
  memberUid?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * 
   * - **cen_firewall**: a firewall for a CEN instance (Basic Edition)
   * 
   * - **cen_tr_firewall**: a firewall for a CEN instance with a transit router
   * 
   * @example
   * cen_firewall
   */
  networkInstanceType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the transit router instance.
   * 
   * @example
   * tr-2vcn4u2g86tm72****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
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

