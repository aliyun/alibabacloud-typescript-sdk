// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRdsVpcsResponseBodyVpcsVpcVSwitchs extends $dara.Model {
  /**
   * @example
   * 10.**.**.0/24
   */
  cidrBlock?: string;
  /**
   * @example
   * null
   */
  gmtCreate?: string;
  /**
   * @example
   * null
   */
  gmtModified?: string;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @example
   * cn-hangzhou-i
   */
  izNo?: string;
  /**
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * VSwitch ID。
   * 
   * @example
   * vsw-bp*******************
   */
  vSwitchId?: string;
  /**
   * @example
   * vsw-name
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
   * null
   */
  aliUid?: string;
  /**
   * @example
   * null
   */
  bid?: string;
  /**
   * @example
   * 10.**.**.0/8
   */
  cidrBlock?: string;
  /**
   * @example
   * null
   */
  gmtCreate?: string;
  /**
   * @example
   * null
   */
  gmtModified?: string;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @example
   * Available
   */
  status?: string;
  vSwitchs?: DescribeRdsVpcsResponseBodyVpcsVpcVSwitchs[];
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-bp*******************
   */
  vpcId?: string;
  /**
   * @example
   * vpc-name
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
   * 53924AF0-1628-5AA2-9C95-D4**********
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

