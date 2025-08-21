// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVSwitchesResponseBodyVSwitchesVSwitchTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @example
   * TestKey
   * 
   * @deprecated
   */
  tagKey?: string;
  /**
   * @example
   * TestValue
   * 
   * @deprecated
   */
  tagValue?: string;
  /**
   * @remarks
   * The request error rate.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      tagKey: 'string',
      tagValue: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBodyVSwitchesVSwitchTags extends $dara.Model {
  tag?: DescribeVSwitchesResponseBodyVSwitchesVSwitchTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeVSwitchesResponseBodyVSwitchesVSwitchTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBodyVSwitchesVSwitch extends $dara.Model {
  /**
   * @remarks
   * The IPv4 CIDR block of the vSwitch.
   * 
   * @example
   * 10.21.224.0/22
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The time when the VPC was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-06-16T06:33:15Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The description of the vSwitch.
   * 
   * @example
   * VSwitchDescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the ENS node.
   * 
   * @example
   * cn-xian-unicom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The number of available IP addresses.
   * 
   * @example
   * 1024
   */
  freeIpCount?: number;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-25cdvfeq58pl****
   */
  networkId?: string;
  /**
   * @remarks
   * The status of the vSwitch. Valid values:
   * 
   * *   Pending
   * *   Available
   * 
   * @example
   * Pending
   */
  status?: string;
  tags?: DescribeVSwitchesResponseBodyVSwitchesVSwitchTags;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-5m9xhlq8oh***
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * @example
   * testVSwitchName
   */
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      createdTime: 'CreatedTime',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      freeIpCount: 'FreeIpCount',
      networkId: 'NetworkId',
      status: 'Status',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      createdTime: 'string',
      description: 'string',
      ensRegionId: 'string',
      freeIpCount: 'number',
      networkId: 'string',
      status: 'string',
      tags: DescribeVSwitchesResponseBodyVSwitchesVSwitchTags,
      vSwitchId: 'string',
      vSwitchName: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBodyVSwitches extends $dara.Model {
  vSwitch?: DescribeVSwitchesResponseBodyVSwitchesVSwitch[];
  static names(): { [key: string]: string } {
    return {
      vSwitch: 'VSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitch: { 'type': 'array', 'itemType': DescribeVSwitchesResponseBodyVSwitchesVSwitch },
    };
  }

  validate() {
    if(Array.isArray(this.vSwitch)) {
      $dara.Model.validateArray(this.vSwitch);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBody extends $dara.Model {
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
   * The number of entries returned on each page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  /**
   * @remarks
   * The information about the vSwitches. For more information, see the array of vSwitches in the response examples in the JSON format.
   */
  vSwitches?: DescribeVSwitchesResponseBodyVSwitches;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vSwitches: 'VSwitches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vSwitches: DescribeVSwitchesResponseBodyVSwitches,
    };
  }

  validate() {
    if(this.vSwitches && typeof (this.vSwitches as any).validate === 'function') {
      (this.vSwitches as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

