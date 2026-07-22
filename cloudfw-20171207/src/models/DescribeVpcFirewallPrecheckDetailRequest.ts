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
   * The language type. Valid values:
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
   * - **cen_firewall**: CEN basic edition firewall
   * 
   * - **cen_tr_firewall**: CEN-TR firewall
   * 
   * @example
   * cen_firewall
   */
  networkInstanceType?: string;
  /**
   * @remarks
   * The region ID. This parameter is required. If it is not specified, ErrorParameters is returned.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The transit router instance ID. You must specify at least one of VpcId and TransitRouterId. Specify VpcId when querying a basic edition firewall, or specify TransitRouterId when querying a transit router (TR) scenario. If neither is specified, ErrorParameters is returned.
   * 
   * @example
   * tr-2vcn4u2g86tm72****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The VPC-connected instance ID. You must specify at least one of VpcId and TransitRouterId. Specify VpcId when querying a basic edition firewall, or specify TransitRouterId when querying a forward routing (TR) scenario. If neither is specified, ErrorParameters is returned.
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

