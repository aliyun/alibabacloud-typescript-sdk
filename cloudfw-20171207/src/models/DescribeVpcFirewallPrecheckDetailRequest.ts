// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallPrecheckDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The Cloud Enterprise Network (CEN) instance ID.
   * 
   * @example
   * cen-hxsqf2bv6di1a****
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
   * The UID of the Cloud Firewall member accounts.
   * 
   * @example
   * 134388541648****
   */
  memberUid?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * 
   * - **cen_firewall**: CEN Basic Edition firewall.
   * 
   * - **cen_tr_firewall**: CEN-TR firewall.
   * 
   * @example
   * cen_firewall
   */
  networkInstanceType?: string;
  /**
   * @remarks
   * The region ID. This parameter is required. If this parameter is missing or invalid, ErrorRegionNoError (Region is error, please reselect) is returned.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The transit router instance ID. You must specify at least one of VpcId and TransitRouterId. Specify VpcId to query the Basic Edition firewall, and specify TransitRouterId to query the transit router (TR) firewall for forward routing. If neither parameter is specified, ErrorParameters is returned.
   * 
   * @example
   * tr-2vcn4u2g86tm72****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The VPC-connected instance ID. You must specify at least one of VpcId and TransitRouterId. Specify VpcId to query the Basic Edition firewall, and specify TransitRouterId to query the transit router (TR) firewall for forward routing. If neither parameter is specified, ErrorParameters is returned.
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

