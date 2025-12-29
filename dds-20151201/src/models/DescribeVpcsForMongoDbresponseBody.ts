// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcsForMongoDBResponseBodyVpcsVSwitchs extends $dara.Model {
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

export class DescribeVpcsForMongoDBResponseBodyVpcs extends $dara.Model {
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
  vSwitchs?: DescribeVpcsForMongoDBResponseBodyVpcsVSwitchs[];
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-2zep2pepkthg5ueal****
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 53924AF0-1628-5AA2-9C95-D4**********
   */
  requestId?: string;
  /**
   * @example
   * 4
   */
  totalCount?: number;
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

