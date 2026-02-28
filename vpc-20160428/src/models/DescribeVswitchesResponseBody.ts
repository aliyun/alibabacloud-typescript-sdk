// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVSwitchesResponseBodyVSwitchesVSwitchRouteTable extends $dara.Model {
  routeTableId?: string;
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
  availableIpAddressCount?: number;
  cidrBlock?: string;
  creationTime?: string;
  description?: string;
  enabledIpv6?: boolean;
  ipv6CidrBlock?: string;
  isDefault?: boolean;
  networkAclId?: string;
  ownerId?: number;
  resourceGroupId?: string;
  routeTable?: DescribeVSwitchesResponseBodyVSwitchesVSwitchRouteTable;
  shareType?: string;
  status?: string;
  tags?: DescribeVSwitchesResponseBodyVSwitchesVSwitchTags;
  vSwitchId?: string;
  vSwitchName?: string;
  vpcId?: string;
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

