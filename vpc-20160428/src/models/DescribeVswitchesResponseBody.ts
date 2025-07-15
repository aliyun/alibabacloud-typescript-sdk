// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVSwitchesResponseBodyVSwitchesVSwitchRouteTable extends $dara.Model {
  /**
   * @remarks
   * The ID of the route table that is associated with the vSwitch.
   * 
   * @example
   * vrt-bp145q7glnuzdv****
   */
  routeTableId?: string;
  /**
   * @remarks
   * The type of the route table. Valid values:
   * 
   * *   **System**
   * *   **Custom**
   * 
   * @example
   * System
   */
  routeTableType?: string;
  static names(): { [key: string]: string } {
    return {
      routeTableId: 'RouteTableId',
      routeTableType: 'RouteTableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeTableId: 'string',
      routeTableType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBodyVSwitchesVSwitchTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * department
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * dev
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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
   * The number of available IP addresses in the vSwitch.
   * 
   * @example
   * 1
   */
  availableIpAddressCount?: number;
  /**
   * @remarks
   * The IPv4 CIDR block of the vSwitch.
   * 
   * @example
   * 172.16.0.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The time when the vSwitch was created.
   * 
   * @example
   * 2022-01-18T12:43:57Z
   */
  creationTime?: string;
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
   * Indicates whether IPv6 is enabled for the vSwitch. If you enable IPv6, you must configure an IPv6 CIDR block for the vSwitch. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enabledIpv6?: boolean;
  /**
   * @remarks
   * The IPv6 CIDR block of the vSwitch.
   * 
   * @example
   * 2408:4002:10c4:4e03::/64
   */
  ipv6CidrBlock?: string;
  /**
   * @remarks
   * Indicates whether the vSwitch is the default vSwitch. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The ID of the network access control list (ACL).
   * 
   * @example
   * nacl-a2do9e413e0spzasx****
   */
  networkAclId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 25346073170691****
   */
  ownerId?: number;
  /**
   * @remarks
   * The ID of the resource group to which the vSwitch belongs.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The information about the route table.
   */
  routeTable?: DescribeVSwitchesResponseBodyVSwitchesVSwitchRouteTable;
  /**
   * @remarks
   * Indicates whether the vSwitch is shared.
   * 
   * *   If no value is returned, the vSwitch is a regular vSwitch.
   * *   If **Shared** is returned, the vSwitch is shared.
   * *   If **Sharing** is returned, the vSwitch is being shared.
   * 
   * @example
   * Shared
   */
  shareType?: string;
  /**
   * @remarks
   * The status of the vSwitch. Valid values:
   * 
   * *   **Pending**
   * *   **Available**
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tags of the vSwitch.
   */
  tags?: DescribeVSwitchesResponseBodyVSwitchesVSwitchTags;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-25bcdxs7pv1****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The vSwitch name.
   * 
   * @example
   * vSwitch
   */
  vSwitchName?: string;
  /**
   * @remarks
   * The ID of the VPC to which the vSwitch belongs.
   * 
   * @example
   * vpc-257gcdcdq64****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone to which the vSwitch belongs.
   * 
   * @example
   * cn-hangzhou-d
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableIpAddressCount: 'AvailableIpAddressCount',
      cidrBlock: 'CidrBlock',
      creationTime: 'CreationTime',
      description: 'Description',
      enabledIpv6: 'EnabledIpv6',
      ipv6CidrBlock: 'Ipv6CidrBlock',
      isDefault: 'IsDefault',
      networkAclId: 'NetworkAclId',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      routeTable: 'RouteTable',
      shareType: 'ShareType',
      status: 'Status',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableIpAddressCount: 'number',
      cidrBlock: 'string',
      creationTime: 'string',
      description: 'string',
      enabledIpv6: 'boolean',
      ipv6CidrBlock: 'string',
      isDefault: 'boolean',
      networkAclId: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      routeTable: DescribeVSwitchesResponseBodyVSwitchesVSwitchRouteTable,
      shareType: 'string',
      status: 'string',
      tags: DescribeVSwitchesResponseBodyVSwitchesVSwitchTags,
      vSwitchId: 'string',
      vSwitchName: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.routeTable && typeof (this.routeTable as any).validate === 'function') {
      (this.routeTable as any).validate();
    }
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
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
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
   * 9A572171-4E27-40D1-BD36-D26C9E71E29E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The details about the vSwitch.
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

