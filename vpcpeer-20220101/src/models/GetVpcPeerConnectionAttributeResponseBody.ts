// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpcPeerConnectionAttributeResponseBodyAcceptingVpc extends $dara.Model {
  /**
   * @remarks
   * The IPv4 CIDR blocks of the acceptor.
   */
  ipv4Cidrs?: string[];
  /**
   * @remarks
   * The IPv6 CIDR blocks of the acceptor.
   */
  ipv6Cidrs?: string[];
  /**
   * @remarks
   * The instance ID of the acceptor VPC-connected instance.
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

export class GetVpcPeerConnectionAttributeResponseBodyTags extends $dara.Model {
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

export class GetVpcPeerConnectionAttributeResponseBodyVpc extends $dara.Model {
  /**
   * @remarks
   * The IPv4 CIDR blocks of the requester.
   */
  ipv4Cidrs?: string[];
  /**
   * @remarks
   * The IPv6 CIDR blocks of the requester.
   */
  ipv6Cidrs?: string[];
  /**
   * @remarks
   * The instance ID of the requester VPC-connected instance.
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

export class GetVpcPeerConnectionAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the acceptor of the VPC peering connection.
   * 
   * @example
   * 28311773240248****
   */
  acceptingOwnerUid?: number;
  /**
   * @remarks
   * The region ID of the acceptor of the VPC peering connection.
   * 
   * @example
   * cn-hangzhou
   */
  acceptingRegionId?: string;
  /**
   * @remarks
   * The details of the acceptor VPC-connected instance.
   */
  acceptingVpc?: GetVpcPeerConnectionAttributeResponseBodyAcceptingVpc;
  /**
   * @remarks
   * The bandwidth of the VPC peering connection. Unit: Mbit/s. Valid values: integers greater than 0.
   * 
   * > A value of -1 indicates that the bandwidth is not limited.
   * 
   * Default values:
   * - The default bandwidth of a cross-region VPC peering connection is 1024 Mbit/s.
   * - The default bandwidth of an intra-region VPC peering connection is -1 Mbit/s, which indicates that the bandwidth is not limited.
   * 
   * @example
   * 1024
   */
  bandwidth?: number;
  /**
   * @remarks
   * The billing status of the VPC peering connection. Valid values:
   * 
   * - **Normal**: Normal.
   * - **FinancialLocked**: Locked due to overdue payments.
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
   * Indicates whether the jumbo frame feature is enabled for the VPC peering connection. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enableJumboFrame?: boolean;
  /**
   * @remarks
   * The time when the VPC peering connection was created. The time is displayed in UTC in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2022-04-24T09:02:36Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The expiration time of the VPC peering connection.
   * 
   * A specific expiration time is returned only when the **Status** of the VPC peering connection is **Accepting** or **Expired**. If the VPC peering connection is in other states, **null** is returned.
   * 
   * @example
   * 2022-05-01T09:02:36Z
   */
  gmtExpired?: string;
  /**
   * @remarks
   * The time when the VPC peering connection was modified. The time is displayed in UTC in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2022-04-24T19:20:45Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The instance ID of the VPC peering connection.
   * 
   * @example
   * pcc-lnk0m24khwvtkm****
   */
  instanceId?: string;
  /**
   * @remarks
   * The link type of the VPC peering connection.
   * 
   * Default values:
   * - The default link type of a cross-region VPC peering connection is Gold.
   * - The default link type of an intra-region VPC peering connection is empty.
   * 
   * @example
   * Gold
   */
  linkType?: string;
  /**
   * @remarks
   * The associated cloud service.
   * 
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
   * The Alibaba Cloud account ID of the requester of the VPC peering connection.
   * 
   * @example
   * 25346073170691****
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the requester of the VPC peering connection.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3AC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the VPC peering connection. Valid values:
   * 
   * - **Creating**: Creating.
   * - **Accepting**: Accepting.
   * - **Updating**: Updating.
   * - **Rejected**: Rejected.
   * - **Expired**: Expired.
   * - **Activated**: Activated.
   * - **Deleting**: Deleting.
   * - **Deleted**: Deleted. 
   * 
   * For more information about the statuses of VPC peering connections, see [VPC peering connection overview](https://help.aliyun.com/document_detail/418507.html).
   * 
   * @example
   * Activated
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: GetVpcPeerConnectionAttributeResponseBodyTags[];
  /**
   * @remarks
   * The details of the requester VPC-connected instance.
   */
  vpc?: GetVpcPeerConnectionAttributeResponseBodyVpc;
  static names(): { [key: string]: string } {
    return {
      acceptingOwnerUid: 'AcceptingOwnerUid',
      acceptingRegionId: 'AcceptingRegionId',
      acceptingVpc: 'AcceptingVpc',
      bandwidth: 'Bandwidth',
      bizStatus: 'BizStatus',
      description: 'Description',
      enableJumboFrame: 'EnableJumboFrame',
      gmtCreate: 'GmtCreate',
      gmtExpired: 'GmtExpired',
      gmtModified: 'GmtModified',
      instanceId: 'InstanceId',
      linkType: 'LinkType',
      managedService: 'ManagedService',
      name: 'Name',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      requestId: 'RequestId',
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
      acceptingVpc: GetVpcPeerConnectionAttributeResponseBodyAcceptingVpc,
      bandwidth: 'number',
      bizStatus: 'string',
      description: 'string',
      enableJumboFrame: 'boolean',
      gmtCreate: 'string',
      gmtExpired: 'string',
      gmtModified: 'string',
      instanceId: 'string',
      linkType: 'string',
      managedService: 'string',
      name: 'string',
      ownerId: 'number',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetVpcPeerConnectionAttributeResponseBodyTags },
      vpc: GetVpcPeerConnectionAttributeResponseBodyVpc,
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

