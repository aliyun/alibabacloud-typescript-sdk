// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcsResponseBodyVpcsVpcVSwitchs extends $dara.Model {
  /**
   * @remarks
   * The IPv4 CIDR block of the vSwitch.
   * 
   * @example
   * 172.17.0.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The time when the vSwitch was created.
   * 
   * @example
   * 1549012834000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the vSwitch was modified.
   * 
   * @example
   * 1731031910000
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the vSwitch is the default vSwitch. Valid values: **true** **false**
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The zone ID of the vSwitch.
   * 
   * @example
   * cn-hangzhou-j
   */
  izNo?: string;
  /**
   * @remarks
   * The status of the vSwitch. Valid values:
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
   * The vSwitch ID.
   * 
   * @example
   * vsw-8vbxk6ij0yz16bu4l3ijj
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * @example
   * vs1
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

export class DescribeVpcsResponseBodyVpcs extends $dara.Model {
  /**
   * @remarks
   * The queried VPC.
   */
  vpc?: DescribeVpcsResponseBodyVpcsVpc[];
  static names(): { [key: string]: string } {
    return {
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpc: { 'type': 'array', 'itemType': DescribeVpcsResponseBodyVpcsVpc },
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

export class DescribeVpcsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 78BDC895-F7C0-5961-92BE-F1C3D12B4BB5
   */
  requestId?: string;
  /**
   * @remarks
   * The queried VPCs.
   */
  vpcs?: DescribeVpcsResponseBodyVpcs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpcs: 'Vpcs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpcs: DescribeVpcsResponseBodyVpcs,
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

