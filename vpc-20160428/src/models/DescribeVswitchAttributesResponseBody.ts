// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVSwitchAttributesResponseBodyRouteTable extends $dara.Model {
  /**
   * @remarks
   * The ID of the route table associated with the vSwitch.
   * 
   * @example
   * vtb-bp145q7glnuzdv****
   */
  routeTableId?: string;
  /**
   * @remarks
   * The type of the route table. Valid values:
   * 
   * - **System**: system route table.
   * 
   * - **Custom**: custom route table.
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

export class DescribeVSwitchAttributesResponseBodyTagsTag extends $dara.Model {
  key?: string;
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

export class DescribeVSwitchAttributesResponseBodyTags extends $dara.Model {
  tag?: DescribeVSwitchAttributesResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeVSwitchAttributesResponseBodyTagsTag },
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

export class DescribeVSwitchAttributesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of active IP addresses.
   * 
   * @example
   * 12
   */
  availableIpAddressCount?: number;
  /**
   * @remarks
   * The private network address range of the vSwitch.
   * 
   * @example
   * 192.168.0.1/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The time when the vSwitch was created.
   * 
   * @example
   * 2021-08-22T10:40:25Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the vSwitch.
   * 
   * @example
   * abc
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the IPv6 CIDR block is enabled for the vSwitch. Valid values:
   * - **true**: enabled.
   * - **false**: not enabled.
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
   * 2408:XXXX:3c5:44e::/64
   */
  ipv6CidrBlock?: string;
  /**
   * @remarks
   * Indicates whether the vSwitch is the default vSwitch. Valid values:
   * 
   * - **true**: The vSwitch is the default vSwitch.
   * - **false**: The vSwitch is not the default vSwitch.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The network ACL rules.
   * 
   * @example
   * 1
   */
  networkAclId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the resource ownership.
   * 
   * >Notice: This value is of the Long type. Precision loss may occur in certain programming languages. Use this value with caution.
   * 
   * @example
   * 28768383240243****
   */
  ownerId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B48B4B9-1EAD-469F-B488-594DAB4B6A1A
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The route table information of the vSwitch.
   */
  routeTable?: DescribeVSwitchAttributesResponseBodyRouteTable;
  /**
   * @remarks
   * The sharing type of the vSwitch.
   * 
   * - If the value is empty, the vSwitch is a private vSwitch.
   * - If the value is **Shared**, the vSwitch is a shared vSwitch.
   * - If the value is **Sharing**, the vSwitch is being shared with other accounts.
   * 
   * @example
   * Shared
   */
  shareType?: string;
  /**
   * @remarks
   * The status of the vSwitch. Valid values:
   * 
   * - **Pending**: being configured. 
   * 
   * - **Available**: active.
   * 
   * @example
   * Pending
   */
  status?: string;
  tags?: DescribeVSwitchAttributesResponseBodyTags;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-25b7pv15t****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * @example
   * test
   */
  vSwitchName?: string;
  /**
   * @remarks
   * The ID of the VPC to which the vSwitch belongs.
   * 
   * @example
   * vpc-257gq642n****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone to which the vSwitch belongs.
   * 
   * @example
   * cn-beijing-a
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
      requestId: 'RequestId',
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
      requestId: 'string',
      resourceGroupId: 'string',
      routeTable: DescribeVSwitchAttributesResponseBodyRouteTable,
      shareType: 'string',
      status: 'string',
      tags: DescribeVSwitchAttributesResponseBodyTags,
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

