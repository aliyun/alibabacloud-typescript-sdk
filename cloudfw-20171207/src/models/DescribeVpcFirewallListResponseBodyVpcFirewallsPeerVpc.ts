// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpcVpcCidrTableList } from "./DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpcVpcCidrTableList";


export class DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpc extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Cloud Firewall is authorized to access the peer VPC. The value is fixed as **authorized**, which indicates that Cloud Firewall is authorized to access the peer VPC.
   * 
   * @example
   * authorized
   */
  authorizationStatus?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account to which the peer VPC belongs.
   * 
   * @example
   * 158039427902****
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the peer VPC.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * An array that consists of the CIDR blocks of the peer VPC.
   */
  vpcCidrTableList?: DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpcVpcCidrTableList[];
  /**
   * @remarks
   * The ID of the peer VPC.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the peer VPC.
   * 
   * @example
   * Test VPC 2
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationStatus: 'AuthorizationStatus',
      ownerId: 'OwnerId',
      regionNo: 'RegionNo',
      vpcCidrTableList: 'VpcCidrTableList',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationStatus: 'string',
      ownerId: 'number',
      regionNo: 'string',
      vpcCidrTableList: { 'type': 'array', 'itemType': DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpcVpcCidrTableList },
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vpcCidrTableList)) {
      $dara.Model.validateArray(this.vpcCidrTableList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

