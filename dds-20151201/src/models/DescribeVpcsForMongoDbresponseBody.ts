// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcsForMongoDBResponseBodyVpcsVSwitchs extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the vSwitch.
   */
  cidrBlock?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and no value is returned.
   * 
   * @example
   * null
   */
  gmtCreate?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and no value is returned.
   * 
   * @example
   * null
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the vSwitch is the default vSwitch. Valid values:
   * 
   * - **true**: The vSwitch is the default vSwitch.
   * - **false**: The vSwitch is not the default vSwitch.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The active zone to which the vSwitch belongs.
   * 
   * @example
   * cn-hangzhou-i
   */
  izNo?: string;
  /**
   * @remarks
   * The status of the vSwitch. **Available** indicates that the vSwitch is active.
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
   * vsw-bp*******************
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
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

export class DescribeVpcsForMongoDBResponseBodyVpcs extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and no value is returned.
   * 
   * @example
   * null
   */
  aliUid?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and no value is returned.
   * 
   * @example
   * null
   */
  bid?: string;
  /**
   * @remarks
   * The CIDR block of the VPC.
   */
  cidrBlock?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and no value is returned.
   * 
   * @example
   * null
   */
  gmtCreate?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and no value is returned.
   * 
   * @example
   * null
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the VPC is the default VPC. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false**: No.
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
   * The status of the VPC. **Available** indicates that the VPC is available.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The list of vSwitches.
   */
  vSwitchs?: DescribeVpcsForMongoDBResponseBodyVpcsVSwitchs[];
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-2zep2pepkthg5ueal****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
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
      vSwitchs: { 'type': 'array', 'itemType': DescribeVpcsForMongoDBResponseBodyVpcsVSwitchs },
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

export class DescribeVpcsForMongoDBResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 53924AF0-1628-5AA2-9C95-D4**********
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of VPCs.
   */
  vpcs?: DescribeVpcsForMongoDBResponseBodyVpcs[];
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
      vpcs: { 'type': 'array', 'itemType': DescribeVpcsForMongoDBResponseBodyVpcs },
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

