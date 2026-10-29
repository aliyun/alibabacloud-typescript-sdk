// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkAclsResponseBodyNetworkAclsEgressAclEntries extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block.
   * 
   * @example
   * 10.0.0.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The description of the outbound rule.
   * 
   * @example
   * This is EgressAclEntries.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the outbound rule entry.
   * 
   * @example
   * nae-a2d447uw4tillfvgb****
   */
  networkAclEntryId?: string;
  /**
   * @remarks
   * The name of the outbound rule entry.
   * 
   * @example
   * acl-2
   */
  networkAclEntryName?: string;
  /**
   * @remarks
   * The authorization policy. Valid values:
   * 
   * - **accept**: Allow.
   * - **drop**: Deny.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The destination port range of the outbound rule.
   * 
   * - If the **Protocol** (Protocol Type) of the outbound rule is **all** or **icmp**, the port range is **-1/-1**, which indicates that all ports are allowed.
   * - If the **Protocol** (Protocol Type) of the outbound rule is **tcp** or **udp**, the port range is **1~65535**. The format is **1/200** or **80/80**, which indicates ports 1 to 200 or port 80.
   * 
   * @example
   * -1/-1
   */
  portRange?: string;
  /**
   * @remarks
   * The priority of the rule. Valid values: **1** to **100**. Default value: **1**.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * - **icmp**: Internet Control Message Protocol.
   * - **tcp**: Transmission Control Protocol.
   * - **udp**: User Datagram Protocol.
   * - **all**: All protocols.
   * 
   * @example
   * all
   */
  protocol?: string;
  /**
   * @remarks
   * The rule type. Valid values:
   * - **system**: System-created.
   * - **custom**: User-created.
   * 
   * @example
   * system
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      description: 'Description',
      networkAclEntryId: 'NetworkAclEntryId',
      networkAclEntryName: 'NetworkAclEntryName',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      protocol: 'Protocol',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      description: 'string',
      networkAclEntryId: 'string',
      networkAclEntryName: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'number',
      protocol: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclsResponseBodyNetworkAclsIngressAclEntries extends $dara.Model {
  /**
   * @remarks
   * The source CIDR block.
   * 
   * @example
   * 10.0.0.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The description of the inbound rule.
   * 
   * @example
   * This is IngressAclEntries.
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block.
   * 
   * @example
   * 10.0.0.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The ID of the inbound rule entry.
   * 
   * @example
   * nae-5dk86arlydmezasw****
   */
  networkAclEntryId?: string;
  /**
   * @remarks
   * The name of the inbound rule entry.
   * 
   * @example
   * acl-3
   */
  networkAclEntryName?: string;
  /**
   * @remarks
   * The authorization policy. Valid values:
   * 
   * - **accept**: Allow.
   * - **drop**: Deny.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The destination port range of the inbound rule.
   * 
   * - If the **Protocol** (Protocol Type) of the inbound rule is **all** or **icmp**, the port range is **-1/-1**, which indicates that all ports are allowed.
   * - If the **Protocol** (Protocol Type) of the inbound rule is **tcp** or **udp**, the port range is **1~65535**. The format is **1/200** or **80/80**, which indicates ports 1 to 200 or port 80.
   * 
   * @example
   * -1/-1
   */
  portRange?: string;
  /**
   * @remarks
   * The priority of the rule. Valid values: **1** to **100**. Default value: **1**.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * - **icmp**: Internet Control Message Protocol.
   * - **tcp**: Transmission Control Protocol.
   * - **udp**: User Datagram Protocol.
   * - **all**: All protocols.
   * 
   * @example
   * all
   */
  protocol?: string;
  /**
   * @remarks
   * The rule type. Valid values:
   * - **system**: System-created.
   * - **custom**: User-created.
   * 
   * @example
   * system
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      description: 'Description',
      destinationCidrBlock: 'DestinationCidrBlock',
      networkAclEntryId: 'NetworkAclEntryId',
      networkAclEntryName: 'NetworkAclEntryName',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      protocol: 'Protocol',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      description: 'string',
      destinationCidrBlock: 'string',
      networkAclEntryId: 'string',
      networkAclEntryName: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'number',
      protocol: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclsResponseBodyNetworkAclsResources extends $dara.Model {
  /**
   * @remarks
   * The ENS edge zone ID.
   * 
   * @example
   * cn-fuzhou-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the associated resource.
   * 
   * @example
   * n-****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the associated resource.
   * 
   * @example
   * Network
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the associated resource. Valid values:
   * 
   * - **BINDED**: Bound.
   * - **BINDING**: Binding.
   * - **UNBINDING**: Unbinding.
   * 
   * @example
   * BINDING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
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

export class DescribeNetworkAclsResponseBodyNetworkAcls extends $dara.Model {
  /**
   * @remarks
   * The time when the network ACL was created. The time is displayed in UTC in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2019-11-01T06:08:46Z
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
  /**
   * @remarks
   * The outbound rules.
   */
  egressAclEntries?: DescribeNetworkAclsResponseBodyNetworkAclsEgressAclEntries[];
  /**
   * @remarks
   * The inbound rules.
   */
  ingressAclEntries?: DescribeNetworkAclsResponseBodyNetworkAclsIngressAclEntries[];
  /**
   * @remarks
   * The ID of the network ACL.
   * 
   * @example
   * nacl-a2do9e413e0spxscd****
   */
  networkAclId?: string;
  /**
   * @remarks
   * The name of the network ACL.
   * 
   * @example
   * acl-8
   */
  networkAclName?: string;
  /**
   * @remarks
   * The associated resources.
   */
  resources?: DescribeNetworkAclsResponseBodyNetworkAclsResources[];
  /**
   * @remarks
   * The status of the network ACL. Valid values:
   * 
   * - **Available**: Active.
   * - **Modifying**: Configuring.
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      egressAclEntries: 'EgressAclEntries',
      ingressAclEntries: 'IngressAclEntries',
      networkAclId: 'NetworkAclId',
      networkAclName: 'NetworkAclName',
      resources: 'Resources',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      egressAclEntries: { 'type': 'array', 'itemType': DescribeNetworkAclsResponseBodyNetworkAclsEgressAclEntries },
      ingressAclEntries: { 'type': 'array', 'itemType': DescribeNetworkAclsResponseBodyNetworkAclsIngressAclEntries },
      networkAclId: 'string',
      networkAclName: 'string',
      resources: { 'type': 'array', 'itemType': DescribeNetworkAclsResponseBodyNetworkAclsResources },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.egressAclEntries)) {
      $dara.Model.validateArray(this.egressAclEntries);
    }
    if(Array.isArray(this.ingressAclEntries)) {
      $dara.Model.validateArray(this.ingressAclEntries);
    }
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the network ACLs.
   */
  networkAcls?: DescribeNetworkAclsResponseBodyNetworkAcls[];
  /**
   * @remarks
   * The current page number.
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
   * 2
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1707FC0-430C-423A-B624-284046B20399
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 3
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
      networkAcls: { 'type': 'array', 'itemType': DescribeNetworkAclsResponseBodyNetworkAcls },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networkAcls)) {
      $dara.Model.validateArray(this.networkAcls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

