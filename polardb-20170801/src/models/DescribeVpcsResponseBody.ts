// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcsResponseBodyVpcsVSwitchs extends $dara.Model {
  /**
   * @example
   * 47.118.126.0/25
   */
  cidrBlock?: string;
  /**
   * @example
   * 2021-04-18T15:02:37Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2021-04-18T15:02:37Z
   */
  gmtModified?: string;
  /**
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @example
   * cn-shenzhen-f
   */
  izNo?: string;
  /**
   * @example
   * Pending
   */
  status?: string;
  /**
   * @example
   * vsw-uf6fus5py6hbvxqwzwnk8
   */
  vSwitchId?: string;
  /**
   * @example
   * default-sw
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

export class DescribeVpcsResponseBodyVpcs extends $dara.Model {
  /**
   * @example
   * 1868512340232755
   */
  aliUid?: string;
  /**
   * @example
   * 26842
   */
  bid?: string;
  /**
   * @example
   * 57.100.6.59/32
   */
  cidrBlock?: string;
  /**
   * @example
   * 2021-04-18T15:02:37Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2021-04-18T15:02:37Z
   */
  gmtModified?: string;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @example
   * cn-chengdu-wt97-a01
   */
  regionNo?: string;
  /**
   * @example
   * Pending
   */
  status?: string;
  vSwitchs?: DescribeVpcsResponseBodyVpcsVSwitchs[];
  /**
   * @example
   * vpc-bp16efwqjzyumc23c647v
   */
  vpcId?: string;
  /**
   * @example
   * vpc-e2e-10341f3
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
      vSwitchs: { 'type': 'array', 'itemType': DescribeVpcsResponseBodyVpcsVSwitchs },
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

export class DescribeVpcsResponseBody extends $dara.Model {
  /**
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @example
   * 11FDB5A0-84F5-5361-B729-5770B0AEB9D5
   */
  requestId?: string;
  /**
   * @example
   * 50
   */
  totalCount?: number;
  vpcs?: DescribeVpcsResponseBodyVpcs[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpcs: 'Vpcs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vpcs: { 'type': 'array', 'itemType': DescribeVpcsResponseBodyVpcs },
    };
  }

  validate() {
    if(Array.isArray(this.vpcs)) {
      $dara.Model.validateArray(this.vpcs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

