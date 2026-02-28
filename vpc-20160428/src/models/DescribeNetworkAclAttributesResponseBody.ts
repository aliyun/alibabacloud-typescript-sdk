// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeEgressAclEntriesEgressAclEntry extends $dara.Model {
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

export class DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeEgressAclEntries extends $dara.Model {
  egressAclEntry?: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeEgressAclEntriesEgressAclEntry[];
  static names(): { [key: string]: string } {
    return {
      egressAclEntry: 'EgressAclEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressAclEntry: { 'type': 'array', 'itemType': DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeEgressAclEntriesEgressAclEntry },
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

export class DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeIngressAclEntriesIngressAclEntry extends $dara.Model {
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

export class DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeIngressAclEntries extends $dara.Model {
  ingressAclEntry?: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeIngressAclEntriesIngressAclEntry[];
  static names(): { [key: string]: string } {
    return {
      ingressAclEntry: 'IngressAclEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingressAclEntry: { 'type': 'array', 'itemType': DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeIngressAclEntriesIngressAclEntry },
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

export class DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeResourcesResource extends $dara.Model {
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

export class DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeResources extends $dara.Model {
  resource?: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeResourcesResource },
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

export class DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeTagsTag extends $dara.Model {
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

export class DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeTags extends $dara.Model {
  tag?: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeTagsTag },
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

export class DescribeNetworkAclAttributesResponseBodyNetworkAclAttribute extends $dara.Model {
  /**
   * @remarks
   * The time when the network ACL was created.
   * 
   * @example
   * 2021-12-25 11:33:27
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the network ACL.
   * 
   * @example
   * This is my NetworkAcl.
   */
  description?: string;
  egressAclEntries?: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeEgressAclEntries;
  ingressAclEntries?: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeIngressAclEntries;
  /**
   * @remarks
   * The ID of the network ACL.
   * 
   * @example
   * nacl-a2do9e413e0spnhmj****
   */
  networkAclId?: string;
  /**
   * @remarks
   * The name of the network ACL.
   * 
   * @example
   * acl-1
   */
  networkAclName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the network ACL belongs.
   * 
   * @example
   * 253460731706911258
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the network ACL.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resources?: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeResources;
  /**
   * @remarks
   * The association status of the resource. Valid values:
   * 
   * *   **Available**
   * *   **Modifying**
   * 
   * @example
   * Available
   */
  status?: string;
  tags?: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeTags;
  /**
   * @remarks
   * The ID of the VPC to which the network ACL belongs.
   * 
   * @example
   * vpc-a2d33rfpl72k5defr****
   */
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
      egressAclEntries: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeEgressAclEntries,
      ingressAclEntries: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeIngressAclEntries,
      networkAclId: 'string',
      networkAclName: 'string',
      ownerId: 'number',
      regionId: 'string',
      resources: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeResources,
      status: 'string',
      tags: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeTags,
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

export class DescribeNetworkAclAttributesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the network ACLs.
   */
  networkAclAttribute?: DescribeNetworkAclAttributesResponseBodyNetworkAclAttribute;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F5905F9C-0161-4E72-9CB1-1F3F3CF6268A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkAclAttribute: 'NetworkAclAttribute',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAclAttribute: DescribeNetworkAclAttributesResponseBodyNetworkAclAttribute,
      requestId: 'string',
    };
  }

  validate() {
    if(this.networkAclAttribute && typeof (this.networkAclAttribute as any).validate === 'function') {
      (this.networkAclAttribute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

