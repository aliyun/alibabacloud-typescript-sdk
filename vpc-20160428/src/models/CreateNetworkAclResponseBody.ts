// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkAclResponseBodyNetworkAclAttributeEgressAclEntriesEgressAclEntry extends $dara.Model {
  description?: string;
  destinationCidrIp?: string;
  networkAclEntryId?: string;
  networkAclEntryName?: string;
  policy?: string;
  port?: string;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationCidrIp: 'DestinationCidrIp',
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

export class CreateNetworkAclResponseBodyNetworkAclAttributeEgressAclEntries extends $dara.Model {
  egressAclEntry?: CreateNetworkAclResponseBodyNetworkAclAttributeEgressAclEntriesEgressAclEntry[];
  static names(): { [key: string]: string } {
    return {
      egressAclEntry: 'EgressAclEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressAclEntry: { 'type': 'array', 'itemType': CreateNetworkAclResponseBodyNetworkAclAttributeEgressAclEntriesEgressAclEntry },
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

export class CreateNetworkAclResponseBodyNetworkAclAttributeIngressAclEntriesIngressAclEntry extends $dara.Model {
  description?: string;
  networkAclEntryId?: string;
  networkAclEntryName?: string;
  policy?: string;
  port?: string;
  protocol?: string;
  sourceCidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
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

export class CreateNetworkAclResponseBodyNetworkAclAttributeIngressAclEntries extends $dara.Model {
  ingressAclEntry?: CreateNetworkAclResponseBodyNetworkAclAttributeIngressAclEntriesIngressAclEntry[];
  static names(): { [key: string]: string } {
    return {
      ingressAclEntry: 'IngressAclEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingressAclEntry: { 'type': 'array', 'itemType': CreateNetworkAclResponseBodyNetworkAclAttributeIngressAclEntriesIngressAclEntry },
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

export class CreateNetworkAclResponseBodyNetworkAclAttributeResourcesResource extends $dara.Model {
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

export class CreateNetworkAclResponseBodyNetworkAclAttributeResources extends $dara.Model {
  resource?: CreateNetworkAclResponseBodyNetworkAclAttributeResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': CreateNetworkAclResponseBodyNetworkAclAttributeResourcesResource },
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

export class CreateNetworkAclResponseBodyNetworkAclAttribute extends $dara.Model {
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
  egressAclEntries?: CreateNetworkAclResponseBodyNetworkAclAttributeEgressAclEntries;
  ingressAclEntries?: CreateNetworkAclResponseBodyNetworkAclAttributeIngressAclEntries;
  /**
   * @remarks
   * The ID of the network ACL.
   * 
   * @example
   * nacl-a2do9e413e0spdefr****
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
   * The region ID of the network ACL.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resources?: CreateNetworkAclResponseBodyNetworkAclAttributeResources;
  /**
   * @remarks
   * The status of the network ACL. Valid values:
   * 
   * *   **Available**
   * *   **Modifying**
   * 
   * @example
   * Modifying
   */
  status?: string;
  /**
   * @remarks
   * The ID of the VPC to which the network ACL belongs.
   * 
   * @example
   * vpc-a2d33rfpl72k5xsscd****
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
      regionId: 'RegionId',
      resources: 'Resources',
      status: 'Status',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      egressAclEntries: CreateNetworkAclResponseBodyNetworkAclAttributeEgressAclEntries,
      ingressAclEntries: CreateNetworkAclResponseBodyNetworkAclAttributeIngressAclEntries,
      networkAclId: 'string',
      networkAclName: 'string',
      regionId: 'string',
      resources: CreateNetworkAclResponseBodyNetworkAclAttributeResources,
      status: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkAclResponseBody extends $dara.Model {
  /**
   * @remarks
   * The attributes of the network ACL.
   */
  networkAclAttribute?: CreateNetworkAclResponseBodyNetworkAclAttribute;
  /**
   * @remarks
   * The ID of the network ACL.
   * 
   * @example
   * nacl-a2do9e413e0spzasx****
   */
  networkAclId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkAclAttribute: 'NetworkAclAttribute',
      networkAclId: 'NetworkAclId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAclAttribute: CreateNetworkAclResponseBodyNetworkAclAttribute,
      networkAclId: 'string',
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

