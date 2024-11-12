// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AcceptVpcPeerConnectionRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the VPC peering connection to be accepted by the accepter VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * pcc-guzvyqlj0n6e10****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * For more information about resource groups, see [What is a resource group?](https://help.aliyun.com/document_detail/94475.html)
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      instanceId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptVpcPeerConnectionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptVpcPeerConnectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AcceptVpcPeerConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AcceptVpcPeerConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcPeerConnectionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the accepter VPC belongs.
   * 
   * *   To create a VPC peering connection within your Alibaba Cloud account, enter the ID of your Alibaba Cloud account.
   * *   To create a VPC peering connection between your Alibaba Cloud account and another Alibaba Cloud account, enter the ID of the peer Alibaba Cloud account.
   * 
   * >  If the accepter is a RAM user, set **AcceptingAliUid** to the ID of the Alibaba Cloud account that created the RAM user.
   * 
   * This parameter is required.
   * 
   * @example
   * 1210123456123456
   */
  acceptingAliUid?: number;
  /**
   * @remarks
   * The region ID of the accepter VPC of the VPC peering connection that you want to create.
   * 
   * *   To create an intra-region VPC peering connection, enter a region ID that is the same as that of the requester VPC.
   * *   To create an inter-region VPC peering connection, enter a region ID that is different from that of the requester VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  acceptingRegionId?: string;
  /**
   * @remarks
   * The ID of the accepter VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1vzjkp2q1xgnind****
   */
  acceptingVpcId?: string;
  /**
   * @remarks
   * The bandwidth of the VPC peering connection. Unit: Mbit/s. The value must be an integer greater than 0. Before you specify this parameter, make sure that you create an inter-region VPC peering connection.
   * 
   * @example
   * 100
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the VPC peering connection.
   * 
   * The description must be 2 to 256 characters in length. The description must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The name of the VPC peering connection.
   * 
   * The name must be 2 to 128 characters in length, and can contain digits, underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * vpcpeer
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region where you want to create a VPC peering connection.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/94475.html).
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the requester VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1gsk7h12ew7oegk****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptingAliUid: 'AcceptingAliUid',
      acceptingRegionId: 'AcceptingRegionId',
      acceptingVpcId: 'AcceptingVpcId',
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptingAliUid: 'number',
      acceptingRegionId: 'string',
      acceptingVpcId: 'string',
      bandwidth: 'number',
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcPeerConnectionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance on which the VPC peering connection is created.
   * 
   * @example
   * pcc-lnk0m24khwvtkm****
   */
  instanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcPeerConnectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVpcPeerConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateVpcPeerConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcPeerConnectionRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, the system uses **RequestId** as **ClientToken**. The value of **RequestId** for each API request may be different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to check the request without performing the operation. Valid values:
   * 
   * *   **true**: checks the request without performing the operation. The system checks the required parameters, request syntax, and limits. If the request fails to pass the check, an error message is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the request. If the request passes the check, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to forcefully delete the VPC peering connection. Valid values:
   * 
   * *   **false** (default): no.
   * *   **true**: yes. If you forcefully delete the VPC peering connection, the system deletes the routes that point to the VPC peering connection from the VPC route table.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The ID of the VPC peering connection that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * pcc-lnk0m24khwvtkm****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      force: 'Force',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      force: 'boolean',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcPeerConnectionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcPeerConnectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVpcPeerConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteVpcPeerConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcPeerConnectionAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the VPC peering connection.
   * 
   * This parameter is required.
   * 
   * @example
   * pcc-lnk0m24khwvtkm****
   */
  instanceId?: string;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcPeerConnectionAttributeResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcPeerConnectionAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVpcPeerConnectionAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVpcPeerConnectionAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **50**. Default value: **50**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   If this is your first query or no subsequent query is to be sent, ignore this parameter.
   * *   If a next query is to be sent, set the value to the value of **NextToken** that is returned in the last call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @deprecated
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Set the value to **PeerConnection**, which specifies a VPC peering connection.
   * 
   * This parameter is required.
   * 
   * @example
   * PeerConnection
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @deprecated
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   If **NextToken** is empty, it indicates that no next query is to be sent.
   * *   If **NextToken** is returned, the value indicates the token that is used for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DE65F6B7-7566-4802-9007-96F2494AC512
   */
  requestId?: string;
  /**
   * @remarks
   * The resources to which the tags are added.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcPeerConnectionsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the VPC peering connection that you want to query.
   * 
   * @example
   * pcc-lnk0m24khwvtkm****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries to return per page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the VPC peering connection that you want to query.
   * 
   * @example
   * vpcpeer
   */
  name?: string;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region where you want to query VPC peering connections.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * For more information about resource groups, see [What is a resource group?](https://help.aliyun.com/document_detail/94475.html)
   * 
   * @example
   * rg-acfm2ggeub5uf3y
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: ListVpcPeerConnectionsRequestTags[];
  /**
   * @remarks
   * The ID of the requester VPC or accepter VPC of the VPC peering connection that you want to query.
   */
  vpcId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListVpcPeerConnectionsRequestTags },
      vpcId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcPeerConnectionsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the VPC peering connection that you want to query.
   * 
   * @example
   * pcc-lnk0m24khwvtkm****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries to return per page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the VPC peering connection that you want to query.
   * 
   * @example
   * vpcpeer
   */
  name?: string;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region where you want to query VPC peering connections.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * For more information about resource groups, see [What is a resource group?](https://help.aliyun.com/document_detail/94475.html)
   * 
   * @example
   * rg-acfm2ggeub5uf3y
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: ListVpcPeerConnectionsShrinkRequestTags[];
  /**
   * @remarks
   * The ID of the requester VPC or accepter VPC of the VPC peering connection that you want to query.
   */
  vpcIdShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      vpcIdShrink: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListVpcPeerConnectionsShrinkRequestTags },
      vpcIdShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcPeerConnectionsResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcPeerConnectionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVpcPeerConnectionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVpcPeerConnectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcPeerConnectionRequest extends $tea.Model {
  /**
   * @remarks
   * The new bandwidth of the VPC peering connection. Unit: Mbit/s. The value must be an integer greater than 0.
   * 
   * @example
   * 100
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system uses **RequestId** as **ClientToken**. **RequestId** may be different for each API request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The new description of the VPC peering connection.
   * 
   * The description must be 1 to 256 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * newdescription
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * 
   * *   **true**: checks the request without performing the operation. The system prechecks the required parameters, request syntax, and limits. If the request fails the precheck, an error message is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the request. If the request passes the precheck, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the VPC peering connection whose name or description you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * pcc-lnk0m24khwvtkm****
   */
  instanceId?: string;
  /**
   * @remarks
   * The new name of the VPC peering connection.
   * 
   * The name must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * vpcpeername
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      instanceId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcPeerConnectionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 880C99E1-449B-524A-B81F-1EC53D2A7EAC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcPeerConnectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyVpcPeerConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyVpcPeerConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the new resource group.
   * 
   * >  You can use resource groups to manage resources within your Alibaba Cloud account by group. This helps you resolve issues such as resource grouping and permission management for your Alibaba Cloud account. For more information, see [What is resource management?](https://help.aliyun.com/document_detail/94475.html)
   * 
   * This parameter is required.
   * 
   * @example
   * rg-acfm3peow3k****
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the VPC peering connection.
   * 
   * This parameter is required.
   * 
   * @example
   * pcc-gu32s92f9ytsk9****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Set the value to **PeerConnection**, which specifies a VPC peering connection.
   * 
   * This parameter is required.
   * 
   * @example
   * PeerConnection
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 611CB80C-B6A9-43DB-9E38-0B0AC3D9B58F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectVpcPeerConnectionRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, the system uses **RequestId** as **ClientToken**. The value of **RequestId** for each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to check the request without performing the operation. Valid values:
   * 
   * *   **true**: checks the request without performing the operation. The system checks the required parameters, request syntax, and limits. If the request fails to pass the check, an error message is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the request. If the request passes the check, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the VPC peering connection to be rejected by the acceptor VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * pcc-lnk0m24khwvtkm0****
   */
  instanceId?: string;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      instanceId: 'InstanceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      instanceId: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectVpcPeerConnectionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4EC47282-1B74-4534-BD2E-403F3EE64CAF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectVpcPeerConnectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RejectVpcPeerConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RejectVpcPeerConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among all requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** for each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the resource to which you want to create and add tags.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of resources.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Set the value to **PeerConnection**, which specifies a VPC peering connection.
   * 
   * This parameter is required.
   * 
   * @example
   * PeerConnection
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C46FF5A8-C5F0-4024-8262-B16B639225A0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnTagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the specified resource. Valid values:
   * 
   * *   **true**: removes all tags from the specified resource.
   * *   **false**: does not remove all tags from the specified resource. This is the default value.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among all requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** for each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the tag.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of resources.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Set the value to **PeerConnection**, which specifies a VPC peering connection.
   * 
   * This parameter is required.
   * 
   * @example
   * PeerConnection
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the tag that you want to remove. You can specify at most 20 tag keys. It can be an empty string.
   * 
   * It can be up to 128 characters in length. It cannot start with `acs:` or `aliyun` and cannot contain `http://` or `https://`.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      clientToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnTagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C46FF5A8-C5F0-4024-8262-B16B639225A0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the tags are removed. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnTagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcPeerConnectionAttributeResponseBodyAcceptingVpc extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcPeerConnectionAttributeResponseBodyTags extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcPeerConnectionAttributeResponseBodyVpc extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The tag key. You can specify at most 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * >  You must specify **ResourceId.N** or **Tag.N** that consists of **Tag.N.Key** and **Tag.N.Value**.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify at most 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * >  You must specify **ResourceId.N** or **Tag.N** that consists of **Tag.N.Key** and **Tag.N.Value**.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  /**
   * @remarks
   * The region of the requester VPC.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * pcc-bp16qjewdsunr41m1****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. The value is set to **PeerConnection**, which indicates a VPC peering connection.
   * 
   * @example
   * PeerConnection
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * FinanceDept
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * FinanceJoshua
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      regionNo: 'RegionNo',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionNo: 'string',
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcPeerConnectionsRequestTags extends $tea.Model {
  /**
   * @remarks
   * The tag key. You can specify at most 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length. The tag key cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify at most 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcPeerConnectionsShrinkRequestTags extends $tea.Model {
  /**
   * @remarks
   * The tag key. You can specify at most 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length. The tag key cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify at most 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcPeerConnectionsResponseBodyVpcPeerConnectsAcceptingVpc extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcPeerConnectionsResponseBodyVpcPeerConnectsTags extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcPeerConnectionsResponseBodyVpcPeerConnectsVpc extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcPeerConnectionsResponseBodyVpcPeerConnects extends $tea.Model {
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
      name: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListVpcPeerConnectionsResponseBodyVpcPeerConnectsTags },
      vpc: ListVpcPeerConnectionsResponseBodyVpcPeerConnectsVpc,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The tag key. You must specify at least one tag key and at most 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length. It cannot start with `acs:` or `aliyun` and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You must specify at least one tag value and can specify at most 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("vpcpeer", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 接收VPC对等连接
   * 
   * @remarks
   *   For a cross-account VPC peering connection, the connection is activated only after the accepter VPC accepts the connection request.
   * *   **AcceptVpcPeerConnection** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the operation in the background. You can call the [GetVpcPeerConnectionAttribute](https://help.aliyun.com/document_detail/426100.html) operation to query the status of the task.
   *     *   If a VPC peering connection is in the **Updating** state, the VPC peering connection is being activated.
   *     *   If a VPC peering connection is in the **Activated** state, the VPC peering connection is activated.
   * *   You cannot repeatedly call the **AcceptVpcPeerConnection** operation within a specific period of time.
   * 
   * @param request - AcceptVpcPeerConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AcceptVpcPeerConnectionResponse
   */
  async acceptVpcPeerConnectionWithOptions(request: AcceptVpcPeerConnectionRequest, runtime: $Util.RuntimeOptions): Promise<AcceptVpcPeerConnectionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      body["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AcceptVpcPeerConnection",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AcceptVpcPeerConnectionResponse>(await this.callApi(params, req, runtime), new AcceptVpcPeerConnectionResponse({}));
  }

  /**
   * 接收VPC对等连接
   * 
   * @remarks
   *   For a cross-account VPC peering connection, the connection is activated only after the accepter VPC accepts the connection request.
   * *   **AcceptVpcPeerConnection** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the operation in the background. You can call the [GetVpcPeerConnectionAttribute](https://help.aliyun.com/document_detail/426100.html) operation to query the status of the task.
   *     *   If a VPC peering connection is in the **Updating** state, the VPC peering connection is being activated.
   *     *   If a VPC peering connection is in the **Activated** state, the VPC peering connection is activated.
   * *   You cannot repeatedly call the **AcceptVpcPeerConnection** operation within a specific period of time.
   * 
   * @param request - AcceptVpcPeerConnectionRequest
   * @returns AcceptVpcPeerConnectionResponse
   */
  async acceptVpcPeerConnection(request: AcceptVpcPeerConnectionRequest): Promise<AcceptVpcPeerConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.acceptVpcPeerConnectionWithOptions(request, runtime);
  }

  /**
   * Creates a VPC peering connection
   * 
   * @remarks
   * Before you create a VPC peering connection, take note of the following items:
   * *   **CreateVpcPeerConnection** is an asynchronous operation. After a request is sent, the system returns an **instance ID** and runs the task in the background. You can call [GetVpcPeerConnectionAttribute](https://help.aliyun.com/document_detail/426095.html) to query the status of the task.
   *     *   If the VPC peering connection is in the **Creating** state, the VPC peering connection is being created.
   *     *   If the VPC peering connection is in the **Activated** state, the VPC peering connection is created.
   *     *   If the VPC peering connection is in the **Accepting** state, it is a cross-account connection. The connection needs to be accepted on the accepter side.
   * *   You cannot repeatedly call **CreateVpcPeerConnection** within the specified period of time.
   * When you create a VPC peering connection, the system automatically activates Cloud Data Transfer (CDT) for you.
   * 
   * @param request - CreateVpcPeerConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVpcPeerConnectionResponse
   */
  async createVpcPeerConnectionWithOptions(request: CreateVpcPeerConnectionRequest, runtime: $Util.RuntimeOptions): Promise<CreateVpcPeerConnectionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acceptingAliUid)) {
      body["AcceptingAliUid"] = request.acceptingAliUid;
    }

    if (!Util.isUnset(request.acceptingRegionId)) {
      body["AcceptingRegionId"] = request.acceptingRegionId;
    }

    if (!Util.isUnset(request.acceptingVpcId)) {
      body["AcceptingVpcId"] = request.acceptingVpcId;
    }

    if (!Util.isUnset(request.bandwidth)) {
      body["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateVpcPeerConnection",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateVpcPeerConnectionResponse>(await this.callApi(params, req, runtime), new CreateVpcPeerConnectionResponse({}));
  }

  /**
   * Creates a VPC peering connection
   * 
   * @remarks
   * Before you create a VPC peering connection, take note of the following items:
   * *   **CreateVpcPeerConnection** is an asynchronous operation. After a request is sent, the system returns an **instance ID** and runs the task in the background. You can call [GetVpcPeerConnectionAttribute](https://help.aliyun.com/document_detail/426095.html) to query the status of the task.
   *     *   If the VPC peering connection is in the **Creating** state, the VPC peering connection is being created.
   *     *   If the VPC peering connection is in the **Activated** state, the VPC peering connection is created.
   *     *   If the VPC peering connection is in the **Accepting** state, it is a cross-account connection. The connection needs to be accepted on the accepter side.
   * *   You cannot repeatedly call **CreateVpcPeerConnection** within the specified period of time.
   * When you create a VPC peering connection, the system automatically activates Cloud Data Transfer (CDT) for you.
   * 
   * @param request - CreateVpcPeerConnectionRequest
   * @returns CreateVpcPeerConnectionResponse
   */
  async createVpcPeerConnection(request: CreateVpcPeerConnectionRequest): Promise<CreateVpcPeerConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVpcPeerConnectionWithOptions(request, runtime);
  }

  /**
   * 删除VPC对等连接
   * 
   * @remarks
   *   You can delete VPC peering connections. After you delete a VPC peering connection, your service is affected. Proceed with caution.
   *     *   If you forcefully delete a VPC peering connection, the system deletes the routes that point to the VPC peering connection from the VPC route table.
   *     *   If you do not forcefully delete a VPC peering connection, the system does not delete these routes. You must manually delete them.
   * *   The **DeleteVpcPeerConnection** operation is asynchronous. After you send a request, the system returns **RequestId**, but the operation is still being performed in the background. You can call the [GetVpcPeerConnectionAttribute](https://help.aliyun.com/document_detail/426100.html) operation to query the status of a VPC peering connection.
   *     *   If a VPC peering connection is in the **Deleting** state, it is being deleted.
   *     *   If a VPC peering connection is in the **Deleted** state, it is deleted.
   * *   You cannot repeatedly call the **DeleteVpcPeerConnection** operation for the same VPC peering connection within the specified period of time.
   * 
   * @param request - DeleteVpcPeerConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVpcPeerConnectionResponse
   */
  async deleteVpcPeerConnectionWithOptions(request: DeleteVpcPeerConnectionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVpcPeerConnectionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.force)) {
      body["Force"] = request.force;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVpcPeerConnection",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteVpcPeerConnectionResponse>(await this.callApi(params, req, runtime), new DeleteVpcPeerConnectionResponse({}));
  }

  /**
   * 删除VPC对等连接
   * 
   * @remarks
   *   You can delete VPC peering connections. After you delete a VPC peering connection, your service is affected. Proceed with caution.
   *     *   If you forcefully delete a VPC peering connection, the system deletes the routes that point to the VPC peering connection from the VPC route table.
   *     *   If you do not forcefully delete a VPC peering connection, the system does not delete these routes. You must manually delete them.
   * *   The **DeleteVpcPeerConnection** operation is asynchronous. After you send a request, the system returns **RequestId**, but the operation is still being performed in the background. You can call the [GetVpcPeerConnectionAttribute](https://help.aliyun.com/document_detail/426100.html) operation to query the status of a VPC peering connection.
   *     *   If a VPC peering connection is in the **Deleting** state, it is being deleted.
   *     *   If a VPC peering connection is in the **Deleted** state, it is deleted.
   * *   You cannot repeatedly call the **DeleteVpcPeerConnection** operation for the same VPC peering connection within the specified period of time.
   * 
   * @param request - DeleteVpcPeerConnectionRequest
   * @returns DeleteVpcPeerConnectionResponse
   */
  async deleteVpcPeerConnection(request: DeleteVpcPeerConnectionRequest): Promise<DeleteVpcPeerConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVpcPeerConnectionWithOptions(request, runtime);
  }

  /**
   * Queries the details of a virtual private cloud (VPC) peering connection.
   * 
   * @param request - GetVpcPeerConnectionAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVpcPeerConnectionAttributeResponse
   */
  async getVpcPeerConnectionAttributeWithOptions(request: GetVpcPeerConnectionAttributeRequest, runtime: $Util.RuntimeOptions): Promise<GetVpcPeerConnectionAttributeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      body["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetVpcPeerConnectionAttribute",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetVpcPeerConnectionAttributeResponse>(await this.callApi(params, req, runtime), new GetVpcPeerConnectionAttributeResponse({}));
  }

  /**
   * Queries the details of a virtual private cloud (VPC) peering connection.
   * 
   * @param request - GetVpcPeerConnectionAttributeRequest
   * @returns GetVpcPeerConnectionAttributeResponse
   */
  async getVpcPeerConnectionAttribute(request: GetVpcPeerConnectionAttributeRequest): Promise<GetVpcPeerConnectionAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVpcPeerConnectionAttributeWithOptions(request, runtime);
  }

  /**
   * Queries tags that are added to Virtual Private Cloud (VPC) peering connections.
   * 
   * @remarks
   *   Set **ResourceId.N** or **Tag.N** that consists of **Tag.N.Key** and **Tag.N.Value** in the request to specify the object to be queried.
   * *   **Tag.N** is a resource tag that consists of a key-value pair. If you set only **Tag.N.Key**, all tag values that are associated with the specified key are returned. If you set only **Tag.N.Value**, an error message is returned.
   * *   If you set **Tag.N** and **ResourceId.N** to filter tags, **ResourceId.N** must match all specified key-value pairs.
   * *   If you specify multiple key-value pairs, resources that contain these key-value pairs are returned.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * Queries tags that are added to Virtual Private Cloud (VPC) peering connections.
   * 
   * @remarks
   *   Set **ResourceId.N** or **Tag.N** that consists of **Tag.N.Key** and **Tag.N.Value** in the request to specify the object to be queried.
   * *   **Tag.N** is a resource tag that consists of a key-value pair. If you set only **Tag.N.Key**, all tag values that are associated with the specified key are returned. If you set only **Tag.N.Value**, an error message is returned.
   * *   If you set **Tag.N** and **ResourceId.N** to filter tags, **ResourceId.N** must match all specified key-value pairs.
   * *   If you specify multiple key-value pairs, resources that contain these key-value pairs are returned.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * 查询VPC对等连接列表
   * 
   * @param tmpReq - ListVpcPeerConnectionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpcPeerConnectionsResponse
   */
  async listVpcPeerConnectionsWithOptions(tmpReq: ListVpcPeerConnectionsRequest, runtime: $Util.RuntimeOptions): Promise<ListVpcPeerConnectionsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListVpcPeerConnectionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.vpcId)) {
      request.vpcIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vpcId, "VpcId", "simple");
    }

    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.vpcIdShrink)) {
      body["VpcId"] = request.vpcIdShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListVpcPeerConnections",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListVpcPeerConnectionsResponse>(await this.callApi(params, req, runtime), new ListVpcPeerConnectionsResponse({}));
  }

  /**
   * 查询VPC对等连接列表
   * 
   * @param request - ListVpcPeerConnectionsRequest
   * @returns ListVpcPeerConnectionsResponse
   */
  async listVpcPeerConnections(request: ListVpcPeerConnectionsRequest): Promise<ListVpcPeerConnectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVpcPeerConnectionsWithOptions(request, runtime);
  }

  /**
   * 修改VPC对等连接
   * 
   * @remarks
   *   The **ModifyVpcPeerConnection** operation is asynchronous. After you send a request, the system returns **RequestId**, but the operation is still being performed in the background. You can call the [GetVpcPeerConnectionAttribute](https://help.aliyun.com/document_detail/426100.html) operation to query the status of a VPC peering connection.
   *     *   If a VPC peering connection is in the **Updating** state, the VPC peering connection is being modified.
   *     *   If a VPC peering connection is in the **Activated** state, the VPC peering connection is modified.
   * *   You cannot repeatedly call the **ModifyVpcPeerConnection** operation for the same VPC peering connection within the specified period of time.
   * 
   * @param request - ModifyVpcPeerConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVpcPeerConnectionResponse
   */
  async modifyVpcPeerConnectionWithOptions(request: ModifyVpcPeerConnectionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVpcPeerConnectionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bandwidth)) {
      body["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyVpcPeerConnection",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyVpcPeerConnectionResponse>(await this.callApi(params, req, runtime), new ModifyVpcPeerConnectionResponse({}));
  }

  /**
   * 修改VPC对等连接
   * 
   * @remarks
   *   The **ModifyVpcPeerConnection** operation is asynchronous. After you send a request, the system returns **RequestId**, but the operation is still being performed in the background. You can call the [GetVpcPeerConnectionAttribute](https://help.aliyun.com/document_detail/426100.html) operation to query the status of a VPC peering connection.
   *     *   If a VPC peering connection is in the **Updating** state, the VPC peering connection is being modified.
   *     *   If a VPC peering connection is in the **Activated** state, the VPC peering connection is modified.
   * *   You cannot repeatedly call the **ModifyVpcPeerConnection** operation for the same VPC peering connection within the specified period of time.
   * 
   * @param request - ModifyVpcPeerConnectionRequest
   * @returns ModifyVpcPeerConnectionResponse
   */
  async modifyVpcPeerConnection(request: ModifyVpcPeerConnectionRequest): Promise<ModifyVpcPeerConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVpcPeerConnectionWithOptions(request, runtime);
  }

  /**
   * Moves a Virtual Private Cloud (VPC) peering connection from one resource group to another.
   * 
   * @param request - MoveResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroupWithOptions(request: MoveResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MoveResourceGroup",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveResourceGroupResponse>(await this.callApi(params, req, runtime), new MoveResourceGroupResponse({}));
  }

  /**
   * Moves a Virtual Private Cloud (VPC) peering connection from one resource group to another.
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * 拒绝VPC对等连接
   * 
   * @remarks
   *   An acceptor VPC can reject a connection request from the requester VPC of a cross-account VPC peering connection. After the connection request is rejected, the VPC peering connection enters the **Rejected** state.
   * *   You cannot repeatedly call the **RejectVpcPeerConnection** operation for the same VPC peering connection within the specified period of time.
   * 
   * @param request - RejectVpcPeerConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RejectVpcPeerConnectionResponse
   */
  async rejectVpcPeerConnectionWithOptions(request: RejectVpcPeerConnectionRequest, runtime: $Util.RuntimeOptions): Promise<RejectVpcPeerConnectionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      body["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RejectVpcPeerConnection",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RejectVpcPeerConnectionResponse>(await this.callApi(params, req, runtime), new RejectVpcPeerConnectionResponse({}));
  }

  /**
   * 拒绝VPC对等连接
   * 
   * @remarks
   *   An acceptor VPC can reject a connection request from the requester VPC of a cross-account VPC peering connection. After the connection request is rejected, the VPC peering connection enters the **Rejected** state.
   * *   You cannot repeatedly call the **RejectVpcPeerConnection** operation for the same VPC peering connection within the specified period of time.
   * 
   * @param request - RejectVpcPeerConnectionRequest
   * @returns RejectVpcPeerConnectionResponse
   */
  async rejectVpcPeerConnection(request: RejectVpcPeerConnectionRequest): Promise<RejectVpcPeerConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rejectVpcPeerConnectionWithOptions(request, runtime);
  }

  /**
   * Creates tags and adds them to a virtual private cloud (VPC) peering connection.
   * 
   * @remarks
   * Tags are used to classify instances. Each tag consists of a key-value pair. Before you use tags, take note of the following limits:
   * *   The keys of tags that are added to the same instance must be unique.
   * *   You cannot create tags without adding them to instances. All tags must be added to instances.
   * *   Tag information is not shared across regions.
   *     For example, you cannot view the tags that are created in the China (Hangzhou) region from the China (Shanghai) region.
   * *   For the same account and region, tags added to different VPC peering connections are shared.
   *     For example, if a tag is added to a VPC peering connection, the tag can also be added to other VPC peering connections within the same account and region. You can modify the key and the value of a tag or remove a tag from an instance. After you delete an instance, all tags that are added to the instance are deleted.
   * *   You can add up to 20 tags to each instance. Before you add a tag to an instance, the system automatically checks the number of existing tags. An error message is returned if the maximum number of tags is reached.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * Creates tags and adds them to a virtual private cloud (VPC) peering connection.
   * 
   * @remarks
   * Tags are used to classify instances. Each tag consists of a key-value pair. Before you use tags, take note of the following limits:
   * *   The keys of tags that are added to the same instance must be unique.
   * *   You cannot create tags without adding them to instances. All tags must be added to instances.
   * *   Tag information is not shared across regions.
   *     For example, you cannot view the tags that are created in the China (Hangzhou) region from the China (Shanghai) region.
   * *   For the same account and region, tags added to different VPC peering connections are shared.
   *     For example, if a tag is added to a VPC peering connection, the tag can also be added to other VPC peering connections within the same account and region. You can modify the key and the value of a tag or remove a tag from an instance. After you delete an instance, all tags that are added to the instance are deleted.
   * *   You can add up to 20 tags to each instance. Before you add a tag to an instance, the system automatically checks the number of existing tags. An error message is returned if the maximum number of tags is reached.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from specified Virtual Private Cloud (VPC) peering connections.
   * 
   * @param request - UnTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnTagResourcesResponse
   */
  async unTagResourcesWithOptions(request: UnTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UnTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnTagResources",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnTagResourcesResponse>(await this.callApi(params, req, runtime), new UnTagResourcesResponse({}));
  }

  /**
   * Removes tags from specified Virtual Private Cloud (VPC) peering connections.
   * 
   * @param request - UnTagResourcesRequest
   * @returns UnTagResourcesResponse
   */
  async unTagResources(request: UnTagResourcesRequest): Promise<UnTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unTagResourcesWithOptions(request, runtime);
  }

}
