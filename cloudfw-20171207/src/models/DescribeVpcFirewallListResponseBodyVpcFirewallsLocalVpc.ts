// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList } from "./DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList";


export class DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpc extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Cloud Firewall is authorized to access the local VPC. The value is fixed as authorized, which indicates that Cloud Firewall is authorized to access the local VPC.
   * 
   * @example
   * authorized
   */
  authorizationStatus?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account to which the local VPC belongs.
   * 
   * @example
   * 158039427902****
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the local VPC.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * An array that consists of the CIDR blocks of the local VPC.
   */
  vpcCidrTableList?: DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList[];
  /**
   * @remarks
   * The ID of the local VPC.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the local VPC.
   * 
   * @example
   * Test instance
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
      vpcCidrTableList: { 'type': 'array', 'itemType': DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList },
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

