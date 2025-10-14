// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRdsVpcsResponseBodyVpcsVpcVSwitchs extends $dara.Model {
  /**
   * @example
   * 10.0.0.0/24
   */
  cidrBlock?: string;
  /**
   * @example
   * 1574156944000
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-09-03T19:19:13+08:00
   */
  gmtModified?: string;
  /**
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @example
   * cn-beijing-g
   */
  izNo?: string;
  /**
   * @example
   * Available
   */
  status?: string;
  /**
   * @example
   * vsw-8vbkwmpn****4nrd639ih
   */
  vSwitchId?: string;
  /**
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
   * @example
   * 314****36
   */
  aliUid?: string;
  /**
   * @example
   * 26842
   */
  bid?: string;
  /**
   * @example
   * 47.121.246.0/24
   */
  cidrBlock?: string;
  /**
   * @example
   * Mon May 12 10:13:14 CST 2025
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-09-29 17:47:56
   */
  gmtModified?: string;
  /**
   * @example
   * False
   */
  isDefault?: boolean;
  /**
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  /**
   * @example
   * True
   */
  status?: string;
  vSwitchs?: DescribeRdsVpcsResponseBodyVpcsVpcVSwitchs[];
  /**
   * @example
   * vpc-2zekldxxy28nobay7o1f3
   */
  vpcId?: string;
  /**
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
   * @example
   * 4C1A7CFB-9F73-5041-8C74-27626E58985A
   */
  requestId?: string;
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

