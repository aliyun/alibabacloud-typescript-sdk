// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcFirewallDetailResponseBodyLocalVpcVpcCidrTableList } from "./DescribeVpcFirewallDetailResponseBodyLocalVpcVpcCidrTableList";


export class DescribeVpcFirewallDetailResponseBodyLocalVpc extends $dara.Model {
  /**
   * @remarks
   * The ID of the ENI for the local VPC.
   * 
   * @example
   * eni-8vbhfosfqv2rff42****
   */
  eniId?: string;
  /**
   * @remarks
   * The private IP address of the elastic network interface (ENI) for the local VPC.
   * 
   * @example
   * 192.168.XX.XX
   */
  eniPrivateIpAddress?: string;
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
   * The router interface ID of the local VPC.
   * 
   * @example
   * vrt-m5eb5me6c3l5sezae****
   */
  routerInterfaceId?: string;
  /**
   * @remarks
   * The CIDR blocks of the local VPC.
   */
  vpcCidrTableList?: DescribeVpcFirewallDetailResponseBodyLocalVpcVpcCidrTableList[];
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
   * Vitasoy
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      eniId: 'EniId',
      eniPrivateIpAddress: 'EniPrivateIpAddress',
      regionNo: 'RegionNo',
      routerInterfaceId: 'RouterInterfaceId',
      vpcCidrTableList: 'VpcCidrTableList',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniId: 'string',
      eniPrivateIpAddress: 'string',
      regionNo: 'string',
      routerInterfaceId: 'string',
      vpcCidrTableList: { 'type': 'array', 'itemType': DescribeVpcFirewallDetailResponseBodyLocalVpcVpcCidrTableList },
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

