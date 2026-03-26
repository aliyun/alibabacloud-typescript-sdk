// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetAssociatedPublicIp extends $dara.Model {
  allocationId?: string;
  publicIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      publicIpAddress: 'PublicIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
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

export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetAttachment extends $dara.Model {
  deviceIndex?: number;
  instanceId?: string;
  networkCardIndex?: number;
  trunkNetworkInterfaceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIndex: 'DeviceIndex',
      instanceId: 'InstanceId',
      networkCardIndex: 'NetworkCardIndex',
      trunkNetworkInterfaceId: 'TrunkNetworkInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIndex: 'number',
      instanceId: 'string',
      networkCardIndex: 'number',
      trunkNetworkInterfaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv4PrefixSetsIpv4PrefixSet extends $dara.Model {
  ipv4Prefix?: string;
  static names(): { [key: string]: string } {
    return {
      ipv4Prefix: 'Ipv4Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4Prefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv4PrefixSets extends $dara.Model {
  ipv4PrefixSet?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv4PrefixSetsIpv4PrefixSet[];
  static names(): { [key: string]: string } {
    return {
      ipv4PrefixSet: 'Ipv4PrefixSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4PrefixSet: { 'type': 'array', 'itemType': DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv4PrefixSetsIpv4PrefixSet },
    };
  }

  validate() {
    if(Array.isArray(this.ipv4PrefixSet)) {
      $dara.Model.validateArray(this.ipv4PrefixSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv6PrefixSetsIpv6PrefixSet extends $dara.Model {
  ipv6Prefix?: string;
  static names(): { [key: string]: string } {
    return {
      ipv6Prefix: 'Ipv6Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Prefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv6PrefixSets extends $dara.Model {
  ipv6PrefixSet?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv6PrefixSetsIpv6PrefixSet[];
  static names(): { [key: string]: string } {
    return {
      ipv6PrefixSet: 'Ipv6PrefixSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6PrefixSet: { 'type': 'array', 'itemType': DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv6PrefixSetsIpv6PrefixSet },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6PrefixSet)) {
      $dara.Model.validateArray(this.ipv6PrefixSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSetsPrivateIpSetAssociatedPublicIp extends $dara.Model {
  allocationId?: string;
  publicIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      publicIpAddress: 'PublicIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
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

export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSetsPrivateIpSet extends $dara.Model {
  associatedPublicIp?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSetsPrivateIpSetAssociatedPublicIp;
  primary?: boolean;
  privateDnsName?: string;
  privateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      associatedPublicIp: 'AssociatedPublicIp',
      primary: 'Primary',
      privateDnsName: 'PrivateDnsName',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedPublicIp: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSetsPrivateIpSetAssociatedPublicIp,
      primary: 'boolean',
      privateDnsName: 'string',
      privateIpAddress: 'string',
    };
  }

  validate() {
    if(this.associatedPublicIp && typeof (this.associatedPublicIp as any).validate === 'function') {
      (this.associatedPublicIp as any).validate();
    }
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
  securityGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupId)) {
      $dara.Model.validateArray(this.securityGroupId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetTagsTag extends $dara.Model {
  tagKey?: string;
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

export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetTags extends $dara.Model {
  tag?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetTagsTag },
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

export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSet extends $dara.Model {
  associatedPublicIp?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetAssociatedPublicIp;
  attachment?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetAttachment;
  creationTime?: string;
  deleteOnRelease?: boolean;
  description?: string;
  instanceId?: string;
  ipv4PrefixSets?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv4PrefixSets;
  ipv6PrefixSets?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv6PrefixSets;
  ipv6Sets?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv6Sets;
  macAddress?: string;
  networkInterfaceId?: string;
  networkInterfaceName?: string;
  networkInterfaceTrafficMode?: string;
  ownerId?: string;
  privateIpAddress?: string;
  privateIpSets?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSets;
  queueNumber?: number;
  queuePairNumber?: number;
  resourceGroupId?: string;
  securityGroupIds?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetSecurityGroupIds;
  serviceID?: number;
  serviceManaged?: boolean;
  sourceDestCheck?: boolean;
  status?: string;
  tags?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetTags;
  type?: string;
  vSwitchId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      associatedPublicIp: 'AssociatedPublicIp',
      attachment: 'Attachment',
      creationTime: 'CreationTime',
      deleteOnRelease: 'DeleteOnRelease',
      description: 'Description',
      instanceId: 'InstanceId',
      ipv4PrefixSets: 'Ipv4PrefixSets',
      ipv6PrefixSets: 'Ipv6PrefixSets',
      ipv6Sets: 'Ipv6Sets',
      macAddress: 'MacAddress',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfaceName: 'NetworkInterfaceName',
      networkInterfaceTrafficMode: 'NetworkInterfaceTrafficMode',
      ownerId: 'OwnerId',
      privateIpAddress: 'PrivateIpAddress',
      privateIpSets: 'PrivateIpSets',
      queueNumber: 'QueueNumber',
      queuePairNumber: 'QueuePairNumber',
      resourceGroupId: 'ResourceGroupId',
      securityGroupIds: 'SecurityGroupIds',
      serviceID: 'ServiceID',
      serviceManaged: 'ServiceManaged',
      sourceDestCheck: 'SourceDestCheck',
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
      associatedPublicIp: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetAssociatedPublicIp,
      attachment: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetAttachment,
      creationTime: 'string',
      deleteOnRelease: 'boolean',
      description: 'string',
      instanceId: 'string',
      ipv4PrefixSets: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv4PrefixSets,
      ipv6PrefixSets: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv6PrefixSets,
      ipv6Sets: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv6Sets,
      macAddress: 'string',
      networkInterfaceId: 'string',
      networkInterfaceName: 'string',
      networkInterfaceTrafficMode: 'string',
      ownerId: 'string',
      privateIpAddress: 'string',
      privateIpSets: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSets,
      queueNumber: 'number',
      queuePairNumber: 'number',
      resourceGroupId: 'string',
      securityGroupIds: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetSecurityGroupIds,
      serviceID: 'number',
      serviceManaged: 'boolean',
      sourceDestCheck: 'boolean',
      status: 'string',
      tags: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetTags,
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
    if(this.attachment && typeof (this.attachment as any).validate === 'function') {
      (this.attachment as any).validate();
    }
    if(this.ipv4PrefixSets && typeof (this.ipv4PrefixSets as any).validate === 'function') {
      (this.ipv4PrefixSets as any).validate();
    }
    if(this.ipv6PrefixSets && typeof (this.ipv6PrefixSets as any).validate === 'function') {
      (this.ipv6PrefixSets as any).validate();
    }
    if(this.ipv6Sets && typeof (this.ipv6Sets as any).validate === 'function') {
      (this.ipv6Sets as any).validate();
    }
    if(this.privateIpSets && typeof (this.privateIpSets as any).validate === 'function') {
      (this.privateIpSets as any).validate();
    }
    if(this.securityGroupIds && typeof (this.securityGroupIds as any).validate === 'function') {
      (this.securityGroupIds as any).validate();
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
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * > This parameter will be removed in the future. We recommend that you use the NextToken and MaxResults parameters for a paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * > This parameter will be removed in the future. We recommend that you use the NextToken and MaxResults parameters for a paged query.
   * 
   * @example
   * 1
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
   * The total number of ENIs.
   * 
   * > If you specify the `MaxResults` and `NextToken` parameters to perform a paged query, the value of the `TotalCount` response parameter is invalid.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      networkInterfaceSets: 'NetworkInterfaceSets',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceSets: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSets,
      nextToken: 'string',
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

