// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpcPeerConnectionAttributeResponseBodyAcceptingVpc extends $dara.Model {
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

export class GetVpcPeerConnectionAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the accepter VPC belongs.
   * 
   * @example
   * 283117732402483989
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
  acceptingVpc?: GetVpcPeerConnectionAttributeResponseBodyAcceptingVpc;
  /**
   * @remarks
   * The bandwidth of the VPC peering connection. Unit: Mbit /s. The value is an integer greater than 0.
   * 
   * >  A value of -1 indicates that the bandwidth is unlimited.
   * 
   * Default value:
   * 
   * *   The default bandwidth value of an inter-region VPC peering connection is 1,024 Mbit/s.
   * *   The default bandwidth value of an intra-region VPC peering connection is -1 Mbit/s, which indicates that the bandwidth is unlimited.
   * 
   * @example
   * 1024
   */
  bandwidth?: number;
  /**
   * @remarks
   * The status of the VPC peering connection. Valid values:
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
   * The time when the VPC peering connection was created. The time follows the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ss` format. The time is displayed in UTC.
   * 
   * @example
   * 2022-04-24T09:02:36Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The expiration time of the VPC peering connection.
   * 
   * A valid expiration time is returned only when the **Status** of the VPC peering connection is **Accepting** or **Expired**. Otherwise, **null** is returned.
   * 
   * @example
   * 2022-05-01T09:02:36Z
   */
  gmtExpired?: string;
  /**
   * @remarks
   * The time when the VPC peering connection was modified. The time follows the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ss` format. The time is displayed in UTC.
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
   * rg-acfmz7hy5z267ni
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
   * For more information about the status of VPC peering connections, see [Overview](https://help.aliyun.com/document_detail/418507.html).
   * 
   * @example
   * Activated
   */
  status?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: GetVpcPeerConnectionAttributeResponseBodyTags[];
  /**
   * @remarks
   * The details of the requester VPC.
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

