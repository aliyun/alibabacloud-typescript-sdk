// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv6SetsIpv6Set extends $dara.Model {
  ipv6Address?: string;
  static names(): { [key: string]: string } {
    return {
      ipv6Address: 'Ipv6Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Address: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv6Sets extends $dara.Model {
  ipv6Set?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv6SetsIpv6Set[];
  static names(): { [key: string]: string } {
    return {
      ipv6Set: 'Ipv6Set',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Set: { 'type': 'array', 'itemType': DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv6SetsIpv6Set },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6Set)) {
      $dara.Model.validateArray(this.ipv6Set);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSetsPrivateIpSet extends $dara.Model {
  primary?: boolean;
  privateIpAddress?: string;
  privateIpStatus?: string;
  static names(): { [key: string]: string } {
    return {
      primary: 'Primary',
      privateIpAddress: 'PrivateIpAddress',
      privateIpStatus: 'PrivateIpStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primary: 'boolean',
      privateIpAddress: 'string',
      privateIpStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSets extends $dara.Model {
  privateIpSet?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSetsPrivateIpSet[];
  static names(): { [key: string]: string } {
    return {
      privateIpSet: 'PrivateIpSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateIpSet: { 'type': 'array', 'itemType': DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSetsPrivateIpSet },
    };
  }

  validate() {
    if(Array.isArray(this.privateIpSet)) {
      $dara.Model.validateArray(this.privateIpSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetSecurityGroupIds extends $dara.Model {
  securityGroup?: string[];
  static names(): { [key: string]: string } {
    return {
      securityGroup: 'SecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroup: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.securityGroup)) {
      $dara.Model.validateArray(this.securityGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSet extends $dara.Model {
  creationTime?: string;
  description?: string;
  ensRegionId?: string;
  instanceId?: string;
  ipv6Sets?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv6Sets;
  macAddress?: string;
  networkId?: string;
  networkInterfaceId?: string;
  networkInterfaceName?: string;
  primaryIp?: string;
  primaryIpType?: string;
  privateIpSets?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSets;
  securityGroupIds?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetSecurityGroupIds;
  status?: string;
  type?: string;
  vSwitchId?: string;
  vmncLearn?: boolean;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      ipv6Sets: 'Ipv6Sets',
      macAddress: 'MacAddress',
      networkId: 'NetworkId',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfaceName: 'NetworkInterfaceName',
      primaryIp: 'PrimaryIp',
      primaryIpType: 'PrimaryIpType',
      privateIpSets: 'PrivateIpSets',
      securityGroupIds: 'SecurityGroupIds',
      status: 'Status',
      type: 'Type',
      vSwitchId: 'VSwitchId',
      vmncLearn: 'VmncLearn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      ensRegionId: 'string',
      instanceId: 'string',
      ipv6Sets: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv6Sets,
      macAddress: 'string',
      networkId: 'string',
      networkInterfaceId: 'string',
      networkInterfaceName: 'string',
      primaryIp: 'string',
      primaryIpType: 'string',
      privateIpSets: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSets,
      securityGroupIds: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetSecurityGroupIds,
      status: 'string',
      type: 'string',
      vSwitchId: 'string',
      vmncLearn: 'boolean',
    };
  }

  validate() {
    if(this.ipv6Sets && typeof (this.ipv6Sets as any).validate === 'function') {
      (this.ipv6Sets as any).validate();
    }
    if(this.privateIpSets && typeof (this.privateIpSets as any).validate === 'function') {
      (this.privateIpSets as any).validate();
    }
    if(this.securityGroupIds && typeof (this.securityGroupIds as any).validate === 'function') {
      (this.securityGroupIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSets extends $dara.Model {
  networkInterfaceSet?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSet[];
  static names(): { [key: string]: string } {
    return {
      networkInterfaceSet: 'NetworkInterfaceSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceSet: { 'type': 'array', 'itemType': DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSet },
    };
  }

  validate() {
    if(Array.isArray(this.networkInterfaceSet)) {
      $dara.Model.validateArray(this.networkInterfaceSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseBody extends $dara.Model {
  networkInterfaceSets?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSets;
  /**
   * @remarks
   * The number of the page to return. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Maximum value: **50**. Default value: **10**.
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
   * 708AF9CE-FF92-5DF9-93F8-B7754AB1061A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries in the list.
   * 
   * @example
   * 49
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      networkInterfaceSets: 'NetworkInterfaceSets',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceSets: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSets,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.networkInterfaceSets && typeof (this.networkInterfaceSets as any).validate === 'function') {
      (this.networkInterfaceSets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

