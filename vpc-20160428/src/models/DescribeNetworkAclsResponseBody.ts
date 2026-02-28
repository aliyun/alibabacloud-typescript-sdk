// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclEgressAclEntriesEgressAclEntry extends $dara.Model {
  description?: string;
  destinationCidrIp?: string;
  entryType?: string;
  ipVersion?: string;
  networkAclEntryId?: string;
  networkAclEntryName?: string;
  policy?: string;
  port?: string;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationCidrIp: 'DestinationCidrIp',
      entryType: 'EntryType',
      ipVersion: 'IpVersion',
      networkAclEntryId: 'NetworkAclEntryId',
      networkAclEntryName: 'NetworkAclEntryName',
      policy: 'Policy',
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationCidrIp: 'string',
      entryType: 'string',
      ipVersion: 'string',
      networkAclEntryId: 'string',
      networkAclEntryName: 'string',
      policy: 'string',
      port: 'string',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclEgressAclEntries extends $dara.Model {
  egressAclEntry?: DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclEgressAclEntriesEgressAclEntry[];
  static names(): { [key: string]: string } {
    return {
      egressAclEntry: 'EgressAclEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressAclEntry: { 'type': 'array', 'itemType': DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclEgressAclEntriesEgressAclEntry },
    };
  }

  validate() {
    if(Array.isArray(this.egressAclEntry)) {
      $dara.Model.validateArray(this.egressAclEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclIngressAclEntriesIngressAclEntry extends $dara.Model {
  description?: string;
  entryType?: string;
  ipVersion?: string;
  networkAclEntryId?: string;
  networkAclEntryName?: string;
  policy?: string;
  port?: string;
  protocol?: string;
  sourceCidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      entryType: 'EntryType',
      ipVersion: 'IpVersion',
      networkAclEntryId: 'NetworkAclEntryId',
      networkAclEntryName: 'NetworkAclEntryName',
      policy: 'Policy',
      port: 'Port',
      protocol: 'Protocol',
      sourceCidrIp: 'SourceCidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      entryType: 'string',
      ipVersion: 'string',
      networkAclEntryId: 'string',
      networkAclEntryName: 'string',
      policy: 'string',
      port: 'string',
      protocol: 'string',
      sourceCidrIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclIngressAclEntries extends $dara.Model {
  ingressAclEntry?: DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclIngressAclEntriesIngressAclEntry[];
  static names(): { [key: string]: string } {
    return {
      ingressAclEntry: 'IngressAclEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingressAclEntry: { 'type': 'array', 'itemType': DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclIngressAclEntriesIngressAclEntry },
    };
  }

  validate() {
    if(Array.isArray(this.ingressAclEntry)) {
      $dara.Model.validateArray(this.ingressAclEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclResourcesResource extends $dara.Model {
  resourceId?: string;
  resourceType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclResources extends $dara.Model {
  resource?: DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclResourcesResource },
    };
  }

  validate() {
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclTagsTag extends $dara.Model {
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

export class DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclTags extends $dara.Model {
  tag?: DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclTagsTag },
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

export class DescribeNetworkAclsResponseBodyNetworkAclsNetworkAcl extends $dara.Model {
  creationTime?: string;
  description?: string;
  egressAclEntries?: DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclEgressAclEntries;
  ingressAclEntries?: DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclIngressAclEntries;
  networkAclId?: string;
  networkAclName?: string;
  ownerId?: number;
  regionId?: string;
  resources?: DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclResources;
  status?: string;
  tags?: DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclTags;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      egressAclEntries: 'EgressAclEntries',
      ingressAclEntries: 'IngressAclEntries',
      networkAclId: 'NetworkAclId',
      networkAclName: 'NetworkAclName',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resources: 'Resources',
      status: 'Status',
      tags: 'Tags',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      egressAclEntries: DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclEgressAclEntries,
      ingressAclEntries: DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclIngressAclEntries,
      networkAclId: 'string',
      networkAclName: 'string',
      ownerId: 'number',
      regionId: 'string',
      resources: DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclResources,
      status: 'string',
      tags: DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclTags,
      vpcId: 'string',
    };
  }

  validate() {
    if(this.egressAclEntries && typeof (this.egressAclEntries as any).validate === 'function') {
      (this.egressAclEntries as any).validate();
    }
    if(this.ingressAclEntries && typeof (this.ingressAclEntries as any).validate === 'function') {
      (this.ingressAclEntries as any).validate();
    }
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
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

export class DescribeNetworkAclsResponseBodyNetworkAcls extends $dara.Model {
  networkAcl?: DescribeNetworkAclsResponseBodyNetworkAclsNetworkAcl[];
  static names(): { [key: string]: string } {
    return {
      networkAcl: 'NetworkAcl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAcl: { 'type': 'array', 'itemType': DescribeNetworkAclsResponseBodyNetworkAclsNetworkAcl },
    };
  }

  validate() {
    if(Array.isArray(this.networkAcl)) {
      $dara.Model.validateArray(this.networkAcl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclsResponseBody extends $dara.Model {
  networkAcls?: DescribeNetworkAclsResponseBodyNetworkAcls;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F7DDDC17-FA06-4AC2-8F35-59D2470FCFC1
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      networkAcls: 'NetworkAcls',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAcls: DescribeNetworkAclsResponseBodyNetworkAcls,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(this.networkAcls && typeof (this.networkAcls as any).validate === 'function') {
      (this.networkAcls as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

