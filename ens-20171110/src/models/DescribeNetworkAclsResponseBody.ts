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
   * The ID of the outbound rule.
   * 
   * @example
   * nae-a2d447uw4tillfvgb****
   */
  networkAclEntryId?: string;
  /**
   * @remarks
   * The name of the outbound rule.
   * 
   * @example
   * acl-2
   */
  networkAclEntryName?: string;
  /**
   * @remarks
   * The action that is performed on network traffic that matches the rule. Valid values:
   * 
   * *   **accept**: allows the network traffic.
   * *   **drop**: blocks the network traffic.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The destination port range of the outbound rule.
   * 
   * *   If **Protocol** of the outbound rule is set to **all** or **icmp** the port range is **-1/-1**, which indicates all ports.
   * *   If **Protocol** of the outbound rule is set to **tcp** or **udp**, the port range is in the following format: **1/200** or **80/80**. 1/200 indicates port 1 to port 200. 80/80 indicates port 80. Valid values for a port: **1 to 65535**.
   * 
   * @example
   * -1/-1
   */
  portRange?: string;
  /**
   * @remarks
   * The priority of the rule. Valid values: **1 to 100**. Default value: **1**.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * *   **icmp**: ICMP.
   * *   **tcp**: TCP.
   * *   **udp**: UDP.
   * *   **all**: all protocols.
   * 
   * @example
   * all
   */
  protocol?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   **system**: The rule is created by the system.
   * *   **custom**: The rule is created by a user.
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
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The ID of the inbound rule.
   * 
   * @example
   * nae-5dk86arlydmezasw****
   */
  networkAclEntryId?: string;
  /**
   * @remarks
   * The name of the inbound rule.
   * 
   * @example
   * acl-3
   */
  networkAclEntryName?: string;
  /**
   * @remarks
   * The action that is performed on network traffic that matches the rule. Valid values:
   * 
   * *   **accept**: allows the network traffic.
   * *   **drop**: blocks the network traffic.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The destination port range of the inbound rule.
   * 
   * *   If **Protocol** of the inbound rule is set to **all** or **icmp**, the port range is **-1/-1**, which indicates all ports.
   * *   If **Protocol** of the inbound rule is set to **tcp** or **udp**, the port range is in the following format: **1/200** or **80/80**. 1/200 indicates port 1 to port 200. 80/80 indicates port 80. Valid values for a port: **1 to 65535**.
   * 
   * @example
   * -1/-1
   */
  portRange?: string;
  /**
   * @remarks
   * The priority of the rule. Valid values: **1 to 100**. Default value: **1**.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * *   **icmp**: ICMP.
   * *   **tcp**: TCP.
   * *   **udp**: UDP.
   * *   **all**: all protocols.
   * 
   * @example
   * all
   */
  protocol?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   **system**: The rule is created by the system.
   * *   **custom**: The rule is created by a user.
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
   * The ID of the edge node.
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
   * The association status of the resource. Valid values:
   * 
   * *   **BINDED**: The resource is associated with the network ACL.
   * *   **BINDING**: The resource is being associated with the network ACL.
   * *   **UNBINDING**: The resource is being disassociated from the network ACL.
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
   * The time when the network ACL was created. The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
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
   * Details of the outbound rules.
   */
  egressAclEntries?: DescribeNetworkAclsResponseBodyNetworkAclsEgressAclEntries[];
  /**
   * @remarks
   * Details of the inbound rules.
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
   * Details of the associated resources.
   */
  resources?: DescribeNetworkAclsResponseBodyNetworkAclsResources[];
  /**
   * @remarks
   * The status of the network ACL. Valid values:
   * 
   * *   **Available**: The network ACL is available.
   * *   **Modifying**: The network ACL is being configured.
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
   * Details of the network ACLs.
   */
  networkAcls?: DescribeNetworkAclsResponseBodyNetworkAcls[];
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
   * 2
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A1707FC0-430C-423A-B624-284046B20399
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
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

