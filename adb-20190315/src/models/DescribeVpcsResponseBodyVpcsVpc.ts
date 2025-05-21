// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcsResponseBodyVpcsVpcVSwitchs } from "./DescribeVpcsResponseBodyVpcsVpcVswitchs";


export class DescribeVpcsResponseBodyVpcsVpc extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1431771514176727
   */
  aliUid?: string;
  /**
   * @remarks
   * The user channel ID.
   * 
   * @example
   * 26842
   */
  bid?: string;
  /**
   * @remarks
   * The IPv4 CIDR block of the VPC.
   * 
   * @example
   * 192.168.0.0/16
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The time when the VPC was created.
   * 
   * @example
   * 1693217052000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the VPC was modified.
   * 
   * @example
   * 1724639118000
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the VPC is the default VPC in the region. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The region in which the VPC resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The status of the VPC. Valid values:
   * 
   * *   Pending
   * *   Available
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The vSwitches in the VPC.
   */
  vSwitchs?: DescribeVpcsResponseBodyVpcsVpcVSwitchs[];
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-uf6m0r5pihw1r79od6990
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * vpc1
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bid: 'Bid',
      cidrBlock: 'CidrBlock',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      isDefault: 'IsDefault',
      regionNo: 'RegionNo',
      status: 'Status',
      vSwitchs: 'VSwitchs',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      bid: 'string',
      cidrBlock: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      isDefault: 'boolean',
      regionNo: 'string',
      status: 'string',
      vSwitchs: { 'type': 'array', 'itemType': DescribeVpcsResponseBodyVpcsVpcVSwitchs },
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchs)) {
      $dara.Model.validateArray(this.vSwitchs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

