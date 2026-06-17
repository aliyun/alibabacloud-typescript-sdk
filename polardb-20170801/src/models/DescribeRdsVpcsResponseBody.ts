// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRdsVpcsResponseBodyVpcsVpcVSwitchs extends $dara.Model {
  /**
   * @remarks
   * The vSwitch CIDR block.
   * 
   * @example
   * 192.168.7.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The time when the vSwitch was created.
   * 
   * @example
   * 2025-05-12 18:17:25
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the vSwitch was last modified.
   * 
   * @example
   * 2025-01-07T15:10:32+08:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the vSwitch is the default vSwitch. Valid values:
   * 
   * - **true**: The vSwitch is the default vSwitch.
   * 
   * - **false**: The vSwitch is not the default vSwitch.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-k
   */
  izNo?: string;
  /**
   * @remarks
   * The status of the vSwitch. **Available** indicates that the vSwitch is available.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-**********
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * @example
   * test
   */
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      isDefault: 'IsDefault',
      izNo: 'IzNo',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      isDefault: 'boolean',
      izNo: 'string',
      status: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVpcsResponseBodyVpcsVpc extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1485293698******
   */
  aliUid?: string;
  /**
   * @remarks
   * The business type of the account. This parameter indicates whether the account is an Alibaba Finance Cloud account, an Alibaba Gov Cloud account, or a public cloud account.
   * 
   * @example
   * 26842
   */
  bid?: string;
  /**
   * @remarks
   * The CIDR block of the VPC.
   * 
   * @example
   * 10.21.0.0/16
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The time when the VPC was created.
   * 
   * @example
   * 2025-08-28T02:25:41Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the VPC was last modified.
   * 
   * @example
   * 2025-04-30T09:41:14+08:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the VPC is the default VPC.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The status of the VPC. Valid values:
   * 
   * - Pending: The VPC is being configured.
   * 
   * - Available: The VPC is available.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The details of the vSwitches in the VPC.
   */
  vSwitchs?: DescribeRdsVpcsResponseBodyVpcsVpcVSwitchs[];
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-*************
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * fc-webide
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
      vSwitchs: { 'type': 'array', 'itemType': DescribeRdsVpcsResponseBodyVpcsVpcVSwitchs },
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

export class DescribeRdsVpcsResponseBodyVpcs extends $dara.Model {
  /**
   * @remarks
   * The VPC details.
   */
  vpc?: DescribeRdsVpcsResponseBodyVpcsVpc[];
  static names(): { [key: string]: string } {
    return {
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpc: { 'type': 'array', 'itemType': DescribeRdsVpcsResponseBodyVpcsVpc },
    };
  }

  validate() {
    if(Array.isArray(this.vpc)) {
      $dara.Model.validateArray(this.vpc);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVpcsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B45E8D29-EA17-5141-AE09-F7A399760C9E
   */
  requestId?: string;
  /**
   * @remarks
   * A list of VPCs.
   */
  vpcs?: DescribeRdsVpcsResponseBodyVpcs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpcs: 'Vpcs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpcs: DescribeRdsVpcsResponseBodyVpcs,
    };
  }

  validate() {
    if(this.vpcs && typeof (this.vpcs as any).validate === 'function') {
      (this.vpcs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

