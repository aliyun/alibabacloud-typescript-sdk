// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcsResponseBodyVpcsVSwitchs extends $dara.Model {
  /**
   * @remarks
   * The IPv4 CIDR block of the vSwitch.
   * 
   * @example
   * 47.118.126.0/25
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The time when the vSwitch was created.
   * 
   * @example
   * 2021-04-18T15:02:37Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the vSwitch was last modified.
   * 
   * @example
   * 2021-04-18T15:02:37Z
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
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The zone to which the vSwitch belongs.
   * 
   * @example
   * cn-shenzhen-f
   */
  izNo?: string;
  /**
   * @remarks
   * The status of the vSwitch. Valid values:
   * 
   * - **Pending**: The vSwitch is being configured.
   * 
   * - **Available**: The vSwitch is active.
   * 
   * @example
   * Pending
   */
  status?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-uf6fus5py6hbvxqwzwnk8
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
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
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1868512340232755
   */
  aliUid?: string;
  /**
   * @remarks
   * Indicates whether the account is an Alibaba Finance Cloud account, an Alibaba Gov Cloud account, or a public cloud account.
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
   * 57.100.6.59/32
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The time when the VPC was created.
   * 
   * @example
   * 2021-04-18T15:02:37Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the VPC was last modified.
   * 
   * @example
   * 2021-04-18T15:02:37Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the VPC is the default VPC. Valid values:
   * 
   * - **true**: The VPC is the default VPC.
   * 
   * - **false**: The VPC is not the default VPC.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The ID of the region to which the VPC belongs.
   * 
   * @example
   * cn-chengdu-wt97-a01
   */
  regionNo?: string;
  /**
   * @remarks
   * The status of the VPC. Valid values:
   * 
   * - `Pending`: The VPC is being configured.
   * 
   * - `Available`: The VPC is active.
   * 
   * @example
   * Pending
   */
  status?: string;
  /**
   * @remarks
   * A list of vSwitches.
   */
  vSwitchs?: DescribeVpcsResponseBodyVpcsVSwitchs[];
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * > You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html) operation to query the details of VPCs.
   * 
   * @example
   * vpc-bp16efwqjzyumc23c647v
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
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
   * @remarks
   * The page number of the returned page. The default value is 1.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Valid values:
   * 
   * - **30**
   * 
   * - **50**
   * 
   * - **100**
   * 
   *   **30**
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 11FDB5A0-84F5-5361-B729-5770B0AEB9D5
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  /**
   * @remarks
   * A list of VPCs.
   */
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

