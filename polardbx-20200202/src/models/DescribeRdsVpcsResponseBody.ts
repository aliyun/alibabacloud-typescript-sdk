// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRdsVpcsResponseBodyVpcsVpcVSwitchs extends $dara.Model {
  /**
   * @remarks
   * The vSwitch CIDR block.
   * 
   * @example
   * 10.0.0.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The time when the vSwitch was created. The value is a UNIX timestamp accurate to milliseconds.
   * 
   * @example
   * 1574156944000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the vSwitch was last modified. The value is a UNIX timestamp.
   * 
   * @example
   * 2025-09-03T19:19:13+08:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the vSwitch is the default vSwitch.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-beijing-g
   */
  izNo?: string;
  /**
   * @remarks
   * The vSwitch status.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-8vbkwmpn****4nrd639ih
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * @example
   * cloud_auto_g
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
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 314****36
   */
  aliUid?: string;
  /**
   * @remarks
   * The VPC ID.
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
   * 47.121.246.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The time when the VPC was created.
   * 
   * @example
   * Mon May 12 10:13:14 CST 2025
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the VPC was last modified.
   * 
   * @example
   * 2024-09-29 17:47:56
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the VPC is the default VPC. Valid values: **true**: The VPC is the default VPC. **false**: The VPC is not the default VPC.
   * 
   * @example
   * False
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The region in which the VPC resides.
   * 
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  /**
   * @remarks
   * The VPC status.
   * 
   * @example
   * True
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch information of the VPC.
   */
  vSwitchs?: DescribeRdsVpcsResponseBodyVpcsVpcVSwitchs[];
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-2zekldxxy28nobay7o1f3
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * cloud_auto_test
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
   * The VPC information.
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
   * 4C1A7CFB-9F73-5041-8C74-27626E58985A
   */
  requestId?: string;
  /**
   * @remarks
   * The VPC information.
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

