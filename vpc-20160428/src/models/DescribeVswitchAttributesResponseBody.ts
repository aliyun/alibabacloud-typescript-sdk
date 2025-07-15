// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVSwitchAttributesResponseBodyRouteTable extends $dara.Model {
  /**
   * @remarks
   * The ID of the route table that is associated with the vSwitch.
   * 
   * @example
   * vtb-bp145q7glnuzdv****
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

export class DescribeVSwitchAttributesResponseBodyTagsTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N added to the resource.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N added to the resource.
   * 
   * @example
   * FinanceJoshua
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
   * The number of available IP addresses.
   * 
   * @example
   * 12
   */
  availableIpAddressCount?: number;
  /**
   * @remarks
   * The CIDR block of the vSwitch.
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
   * Indicates whether IPv6 is enabled for the vSwitch. If you enable IPv6, you must configure the IPv6 CIDR block of the vSwitch. Valid values:
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
   * 2408:XXXX:3c5:44e::/64
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
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The network access control list (ACL) rules.
   * 
   * @example
   * 1
   */
  networkAclId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 287683832402436789
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
   * The ID of the resource group to which the ACL belongs.
   * 
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The information about the route table that is associated with the vSwitch.
   */
  routeTable?: DescribeVSwitchAttributesResponseBodyRouteTable;
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
   * Pending
   */
  status?: string;
  /**
   * @remarks
   * The information about the tags.
   */
  tags?: DescribeVSwitchAttributesResponseBodyTags;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-25b7pv15t****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The vSwitch name.
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
   * The ID of the zone to which the vSwitch belongs.
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

