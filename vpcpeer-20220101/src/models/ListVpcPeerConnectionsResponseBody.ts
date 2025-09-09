// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcPeerConnectionsResponseBodyVpcPeerConnectsAcceptingVpc extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the accepter VPC.
   */
  ipv4Cidrs?: string[];
  /**
   * @remarks
   * The IPv6 CIDR block of the accepter VPC.
   */
  ipv6Cidrs?: string[];
  /**
   * @remarks
   * The ID of the accepter VPC.
   * 
   * @example
   * vpc-bp1vzjkp2q1xgnind****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      ipv4Cidrs: 'Ipv4Cidrs',
      ipv6Cidrs: 'Ipv6Cidrs',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4Cidrs: { 'type': 'array', 'itemType': 'string' },
      ipv6Cidrs: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipv4Cidrs)) {
      $dara.Model.validateArray(this.ipv4Cidrs);
    }
    if(Array.isArray(this.ipv6Cidrs)) {
      $dara.Model.validateArray(this.ipv6Cidrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcPeerConnectionsResponseBodyVpcPeerConnectsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class ListVpcPeerConnectionsResponseBodyVpcPeerConnectsVpc extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the requester VPC.
   */
  ipv4Cidrs?: string[];
  /**
   * @remarks
   * The IPv6 CIDR block of the requester VPC.
   */
  ipv6Cidrs?: string[];
  /**
   * @remarks
   * The ID of the requester VPC.
   * 
   * @example
   * vpc-bp1gsk7h12ew7oegk****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      ipv4Cidrs: 'Ipv4Cidrs',
      ipv6Cidrs: 'Ipv6Cidrs',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4Cidrs: { 'type': 'array', 'itemType': 'string' },
      ipv6Cidrs: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipv4Cidrs)) {
      $dara.Model.validateArray(this.ipv4Cidrs);
    }
    if(Array.isArray(this.ipv6Cidrs)) {
      $dara.Model.validateArray(this.ipv6Cidrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcPeerConnectionsResponseBodyVpcPeerConnects extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the accepter VPC belongs.
   * 
   * @example
   * 253460731706911258
   */
  acceptingOwnerUid?: number;
  /**
   * @remarks
   * The region ID of the accepter VPC.
   * 
   * @example
   * cn-hangzhou
   */
  acceptingRegionId?: string;
  /**
   * @remarks
   * The details of the accepter VPC.
   */
  acceptingVpc?: ListVpcPeerConnectionsResponseBodyVpcPeerConnectsAcceptingVpc;
  /**
   * @remarks
   * The bandwidth of the VPC peering connection. Unit: Mbit/s. The value is an integer greater than 0.
   * 
   * >  If the value is set to -1, it indicates that no limit is imposed on the bandwidth.
   * 
   * Default value:
   * 
   * *   The default bandwidth of an inter-region VPC peering connection is **1024** Mbit/s.
   * *   The default bandwidth of an intra-region VPC peering connection is **-1** Mbit/s.
   * 
   * @example
   * 1024
   */
  bandwidth?: number;
  /**
   * @remarks
   * The business status of the VPC peering connection. Valid values:
   * 
   * *   **Normal**
   * *   **FinancialLocked**
   * 
   * @example
   * Normal
   */
  bizStatus?: string;
  /**
   * @remarks
   * The description of the VPC peering connection.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The time when the VPC peering connection was created. The time is displayed in the `YYYY-MM-DDThh:mm:ssZ` format in UTC.
   * 
   * @example
   * 2022-04-24T09:02:36Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The expiration time of the VPC peering connection. The time is displayed in the `YYYY-MM-DDThh:mm:ssZ` format in UTC.
   * 
   * The expiration time is returned only when the **Status** of the VPC peering connection is **Accepting** or **Expired**. Otherwise, **null** is returned.
   * 
   * @example
   * 2022-05-01T09:02:36Z
   */
  gmtExpired?: string;
  /**
   * @remarks
   * The time when the VPC peering connection was modified. The time is displayed in the `YYYY-MM-DDThh:mm:ssZ` format in UTC.
   * 
   * @example
   * 2022-04-24T19:20:45Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the VPC peering connection.
   * 
   * @example
   * pcc-lnk0m24khwvtkm****
   */
  instanceId?: string;
  /**
   * @remarks
   * The link type of the VPC peering connection.
   * 
   * @example
   * Gold
   */
  linkType?: string;
  /**
   * @example
   * SWAS
   */
  managedService?: string;
  /**
   * @remarks
   * The name of the VPC peering connection.
   * 
   * @example
   * vpcpeer
   */
  name?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the requester VPC belongs.
   * 
   * @example
   * 253460731706911258
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the requester VPC.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2gvbs746gt4q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the VPC peering connection. Valid values:
   * 
   * *   **Creating**
   * *   **Accepting**
   * *   **Updating**
   * *   **Rejected**
   * *   **Expired**
   * *   **Activated**
   * *   **Deleting**
   * *   **Deleted**
   * 
   * For more information about the status of VPC peering connections, see [Overview of VPC peering connections](https://help.aliyun.com/document_detail/418507.html).
   * 
   * @example
   * Activated
   */
  status?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: ListVpcPeerConnectionsResponseBodyVpcPeerConnectsTags[];
  /**
   * @remarks
   * The details of the requester VPC.
   */
  vpc?: ListVpcPeerConnectionsResponseBodyVpcPeerConnectsVpc;
  static names(): { [key: string]: string } {
    return {
      acceptingOwnerUid: 'AcceptingOwnerUid',
      acceptingRegionId: 'AcceptingRegionId',
      acceptingVpc: 'AcceptingVpc',
      bandwidth: 'Bandwidth',
      bizStatus: 'BizStatus',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtExpired: 'GmtExpired',
      gmtModified: 'GmtModified',
      instanceId: 'InstanceId',
      linkType: 'LinkType',
      managedService: 'ManagedService',
      name: 'Name',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptingOwnerUid: 'number',
      acceptingRegionId: 'string',
      acceptingVpc: ListVpcPeerConnectionsResponseBodyVpcPeerConnectsAcceptingVpc,
      bandwidth: 'number',
      bizStatus: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtExpired: 'string',
      gmtModified: 'string',
      instanceId: 'string',
      linkType: 'string',
      managedService: 'string',
      name: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListVpcPeerConnectionsResponseBodyVpcPeerConnectsTags },
      vpc: ListVpcPeerConnectionsResponseBodyVpcPeerConnectsVpc,
    };
  }

  validate() {
    if(this.acceptingVpc && typeof (this.acceptingVpc as any).validate === 'function') {
      (this.acceptingVpc as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.vpc && typeof (this.vpc as any).validate === 'function') {
      (this.vpc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcPeerConnectionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   If no value is returned for **NextToken**, no next queries are sent.
   * *   If the value of **NextToken** is returned, the value indicates the token that is used for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED39DCAC0
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The details of the VPC peering connections.
   */
  vpcPeerConnects?: ListVpcPeerConnectionsResponseBodyVpcPeerConnects[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpcPeerConnects: 'VpcPeerConnects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      vpcPeerConnects: { 'type': 'array', 'itemType': ListVpcPeerConnectionsResponseBodyVpcPeerConnects },
    };
  }

  validate() {
    if(Array.isArray(this.vpcPeerConnects)) {
      $dara.Model.validateArray(this.vpcPeerConnects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

