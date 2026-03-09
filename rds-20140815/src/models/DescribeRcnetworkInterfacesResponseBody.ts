// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsAssociatedPublicIp extends $dara.Model {
  /**
   * @example
   * ``116.62.**.**``
   */
  publicIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      publicIpAddress: 'PublicIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicIpAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsIpv6Sets extends $dara.Model {
  /**
   * @example
   * 2408:4321:180:1701:94c7:bc38:3bfa:****
   */
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

export class DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsPrivateIpSets extends $dara.Model {
  primary?: boolean;
  /**
   * @example
   * ``172.17.**.**``
   */
  privateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      primary: 'Primary',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primary: 'boolean',
      privateIpAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsTags extends $dara.Model {
  /**
   * @example
   * TestValue
   */
  tagKey?: string;
  /**
   * @example
   * TestKey
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSets extends $dara.Model {
  associatedPublicIp?: DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsAssociatedPublicIp;
  /**
   * @example
   * 2022-12-25T12:31:31Z
   */
  creationTime?: string;
  /**
   * @example
   * DescriptionTest
   */
  description?: string;
  /**
   * @example
   * rc-m5sc1271fv344a1r****
   */
  instanceId?: string;
  ipv6Sets?: DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsIpv6Sets[];
  /**
   * @example
   * 00:16:3e:12:**:**
   */
  macAddress?: string;
  /**
   * @example
   * eni-bp125p95hhdhn3ot****
   */
  networkInterfaceId?: string;
  privateIpSets?: DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsPrivateIpSets[];
  /**
   * @example
   * rg-2ze88m67qx5z****
   */
  resourceGroupId?: string;
  securityGroupIds?: string[];
  /**
   * @example
   * Available
   */
  status?: string;
  tags?: DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsTags[];
  /**
   * @example
   * Secondary
   */
  type?: string;
  /**
   * @example
   * vsw-bp16usj2p27htro3****
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-bp1j7w3gc1cexjqd****
   */
  vpcId?: string;
  /**
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      associatedPublicIp: 'AssociatedPublicIp',
      creationTime: 'CreationTime',
      description: 'Description',
      instanceId: 'InstanceId',
      ipv6Sets: 'Ipv6Sets',
      macAddress: 'MacAddress',
      networkInterfaceId: 'NetworkInterfaceId',
      privateIpSets: 'PrivateIpSets',
      resourceGroupId: 'ResourceGroupId',
      securityGroupIds: 'SecurityGroupIds',
      status: 'Status',
      tags: 'Tags',
      type: 'Type',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedPublicIp: DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsAssociatedPublicIp,
      creationTime: 'string',
      description: 'string',
      instanceId: 'string',
      ipv6Sets: { 'type': 'array', 'itemType': DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsIpv6Sets },
      macAddress: 'string',
      networkInterfaceId: 'string',
      privateIpSets: { 'type': 'array', 'itemType': DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsPrivateIpSets },
      resourceGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsTags },
      type: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.associatedPublicIp && typeof (this.associatedPublicIp as any).validate === 'function') {
      (this.associatedPublicIp as any).validate();
    }
    if(Array.isArray(this.ipv6Sets)) {
      $dara.Model.validateArray(this.ipv6Sets);
    }
    if(Array.isArray(this.privateIpSets)) {
      $dara.Model.validateArray(this.privateIpSets);
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCNetworkInterfacesResponseBody extends $dara.Model {
  networkInterfaceSets?: DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSets[];
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkInterfaceSets: 'NetworkInterfaceSets',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceSets: { 'type': 'array', 'itemType': DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSets },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networkInterfaceSets)) {
      $dara.Model.validateArray(this.networkInterfaceSets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

