// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddAccessControlListEntryRequest extends $tea.Model {
  /**
   * @remarks
   * The configuration of the network ACL. Valid values:
   * 
   * *   **entry**: the IP entries that you want to add to the network ACL. You can add CIDR blocks. Separate multiple CIDR blocks with commas (,).
   * *   **comment**: the comment on the network ACL.
   * 
   * > You can add at most 50 IP entries to a network ACL in each call. If the IP entry that you want to add to a network ACL already exists, the IP entry is not added. The IP entries that you add must be CIDR blocks.
   * 
   * @example
   * [{"entry":"``10.0.**.**``/24","comment":"privaterule1"},{"entry":"``192.168.**.**``/16","comment":"privaterule2"}]
   */
  aclEntrys?: string;
  /**
   * @remarks
   * The ID of the network ACL.
   * 
   * @example
   * acl-bp1l0kk4gxce43kze*****
   */
  aclId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the network ACL.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aclEntrys: 'AclEntrys',
      aclId: 'AclId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntrys: 'string',
      aclId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAccessControlListEntryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 988CB45E-1643-48C0-87B4-928DDF77EA4
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

export class AddAccessControlListEntryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddAccessControlListEntryResponseBody;
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
      body: AddAccessControlListEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBackendServersRequest extends $tea.Model {
  /**
   * @remarks
   * The list of backend servers that you want to add. Set the following parameters:
   * 
   * *   **ServerId**: Required. This value must be a string. Enter the ID of an ECS instance, elastic network interface (ENI), or elastic container instance. If **ServerId** is set to the ID of an ENI or elastic container instance, **Type** is required.
   * 
   * *   **Weight**: the weight of the backend server. Valid values: **0** to **100**. Default value: **100**.
   * 
   *     If the value is set to 0, no requests are forwarded to the backend server.
   * 
   * *   **Description**: Optional. The description of the backend server. This value must be a string. The description must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * *   **Type**: the type of the backend server. Valid values:
   * 
   *     *   **ecs** (default): an ECS instance
   *     *   **eni**: an ENI
   *     *   **eci**: an elastic container instance
   * 
   * >  You can specify ENIs and elastic container instances as the backend servers only for high-performance CLB instances.
   * 
   * *   **ServerIp**: the IP address of the ECS instance, ENI, or elastic container instance
   * *   **Port**: the backend port
   * 
   * Examples:
   * 
   * *   ECS instance: `[{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs", "Port":"80","Description":"test-112" }]`
   * *   ENI: `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-112" }]`
   * *   ENI with multiple IP addresses: `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-113" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``172.166.**.**``", "Port":"80","Description":"test-113" }]`
   * *   Elastic container instance: `[{ "ServerId": "eci-xxxxxxxxx", "Weight": "100", "Type": "eci", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-114" }]`
   * 
   * >  The backend servers that you add to a CLB instance must be in the Running state. You can add at most 20 backend servers to a CLB instance in each request.
   * 
   * @example
   * [{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-112" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``172.166.**.**``", "Port":"80","Description":"test-113" }]
   */
  backendServers?: string;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-2ze7o5h52g02kkzz******
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the Classic Load Balancer (CLB) instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: 'string',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBackendServersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The list of backend servers.
   */
  backendServers?: AddBackendServersResponseBodyBackendServers;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * @example
   * lb-2ze7o5h52g02kkzz****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 34B82C81-F13B-4EEB-99F6-A048C67CC830
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      loadBalancerId: 'LoadBalancerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: AddBackendServersResponseBodyBackendServers,
      loadBalancerId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBackendServersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddBackendServersResponseBody;
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
      body: AddBackendServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddListenerWhiteListItemRequest extends $tea.Model {
  /**
   * @remarks
   * The frontend port that is used by the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The frontend protocol that is used by the CLB instance.
   * 
   * >  This parameter is required when listeners that use different protocols listen on the same port.
   * 
   * @example
   * https
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1o94dp5i6ea*******
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the Classic Load Balancer (CLB) instance is created.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IP addresses or CIDR blocks that you want to add to the whitelist.
   * 
   * This parameter takes effect when the **AccessControlStatus** parameter of the listener is set to **open_white_list**.
   * 
   * Separate multiple IP addresses or CIDR blocks with commas (,).
   * 
   * You cannot enter **0.0.0.0** or **0.0.0.0/0**. To disable access control, you can call the [SetListenerAccessControlStatus](https://help.aliyun.com/document_detail/27599.html) operation to set the value of the **AccessControlStatus** parameter to **close**.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.XX.XX
   */
  sourceItems?: string;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceItems: 'SourceItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceItems: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddListenerWhiteListItemResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
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

export class AddListenerWhiteListItemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddListenerWhiteListItemResponseBody;
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
      body: AddListenerWhiteListItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Server Load Balancer (SLB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1kuzyb******
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region to which the SLB instance belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of tags that need to be added.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"TagKey":"Key1","TagValue":"Value1"},{"TagKey":"Key2","TagValue":"Value2"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
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

export class AddTagsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddTagsResponseBody;
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
      body: AddTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVServerGroupBackendServersRequest extends $tea.Model {
  /**
   * @remarks
   * The backend servers that you want to add. Configure the following parameters:
   * 
   * *   **ServerId**: Required. The ID of the backend server. Specify the ID in a string. You can specify the ID of an Elastic Compute Service (ECS) instance, an elastic network interface (ENI), and an elastic container instance. If you set **ServerId** to the ID of an ENI or an elastic container instance, you must configure the **Type** parameter.
   * 
   * *   **Weight**: the weight of the backend server. Valid values: **0** to **100**. Default value: **100**. If you set the weight of a backend server to 0, no requests are forwarded to the backend server.
   * 
   * *   **Description**: Optional. The description of the backend server. Specify the description in a string. The description must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * *   **Type**: the type of the backend server. Valid values:
   * 
   *     *   **ecs** (default): ECS instance
   *     *   **eni**: ENI
   *     *   **eci**: elastic container instance
   * 
   * >  You can specify ENIs and elastic container instances as backend servers only for high-performance SLB instances.
   * 
   * *   **ServerIp**: the IP address of an ENI or an elastic container instance.
   * *   **Port**: the backend port.
   * 
   * Examples:
   * 
   * *   Add an ECS instance:
   * 
   *     `[{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs", "Port":"80","Description":"test-112" }]`
   * 
   * *   Add an ENI:
   * 
   *     `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-112" }]`
   * 
   * *   Add an ENI with multiple IP addresses:
   * 
   *     `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-113" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``172.166.**.**``", "Port":"80","Description":"test-113" }]`
   * 
   * *   Add an elastic container instance:
   * 
   *     `[{ "ServerId": "eci-xxxxxxxxx", "Weight": "100", "Type": "eci", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-114" }]`
   * 
   * >  You can add only running backend servers to SLB instances. You can specify at most 20 backend servers in each call.
   * 
   * This parameter is required.
   * 
   * @example
   * [{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-112" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``172.166.**.**``", "Port":"80","Description":"test-113" }]
   */
  backendServers?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Server Load Balancer (SLB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the vServer group.
   * 
   * This parameter is required.
   * 
   * @example
   * rsp-cige6******
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVServerGroupBackendServersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The backend servers.
   */
  backendServers?: AddVServerGroupBackendServersResponseBodyBackendServers;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DEC9C28-AB05-4DDF-9A78-6B08EC9CE18C
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the vServer group.
   * 
   * @example
   * rsp-cige6j******
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      requestId: 'RequestId',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: AddVServerGroupBackendServersResponseBodyBackendServers,
      requestId: 'string',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVServerGroupBackendServersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddVServerGroupBackendServersResponseBody;
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
      body: AddVServerGroupBackendServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessControlListRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the ACL. The name must be 1 to 80 characters in length, and can contain letters, digits, periods (.), hyphens (-), forward slashes (/), and underscores (_). The name of the ACL that you create must be unique within each region.
   * 
   * This parameter is required.
   * 
   * @example
   * rule1
   */
  aclName?: string;
  /**
   * @remarks
   * The IP version. Valid values: **ipv4** and **ipv6**.
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the ACL.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-atstuj3rt******
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateAccessControlListRequestTag[];
  static names(): { [key: string]: string } {
    return {
      aclName: 'AclName',
      addressIPVersion: 'AddressIPVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclName: 'string',
      addressIPVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateAccessControlListRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessControlListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The IP version. Valid values: **ipv4** and **ipv6**.
   * 
   * @example
   * acl-rj9xpxzcwxrukois****
   */
  aclId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 988CB45E-1643-48C0-87B4-928DDF77EA49
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessControlListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAccessControlListResponseBody;
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
      body: CreateAccessControlListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainExtensionRequest extends $tea.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * *.example1.com
   */
  domain?: string;
  /**
   * @remarks
   * The frontend port that is used by the HTTPS listener of the SLB instance.
   * 
   * Valid values: **1 to 65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 443
   */
  listenerPort?: number;
  /**
   * @remarks
   * The ID of the SLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1o94dp5i6earrxxxxxx
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Server Load Balancer (SLB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the certificate used by the domain name.
   * 
   * @example
   * 123157xxxxxxx_166f820xxxxxx_1714763408_709981xxxx
   */
  serverCertificateId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serverCertificateId: 'ServerCertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      listenerPort: 'number',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serverCertificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainExtensionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the additional domain name.
   * 
   * @example
   * de-bp1rp7ta19******
   */
  domainExtensionId?: string;
  /**
   * @remarks
   * The frontend port that is used by the SLB instance.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A6E7EFC9-0938-40CA-877D-9BEDBD21D357
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainExtensionId: 'DomainExtensionId',
      listenerPort: 'ListenerPort',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainExtensionId: 'string',
      listenerPort: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainExtensionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDomainExtensionResponseBody;
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
      body: CreateDomainExtensionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerRequest extends $tea.Model {
  /**
   * @remarks
   * The private IP address of the CLB instance. The private IP address must belong to the destination CIDR block of the vSwitch.
   * 
   * @example
   * 192.168.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The IP version of the CLB instance. Valid values: **ipv4** and **ipv6**.
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * The network type of the CLB instance. Valid values:
   * 
   * *   **internet**: After an Internet-facing CLB instance is created, the system allocates a public IP address to the instance. The CLB instance can forward requests over the Internet.
   * *   **intranet**: After an internal-facing CLB instance is created, the system allocates a private IP address to the CLB instance. The CLB instance can forward requests only within the VPC.
   * 
   * @example
   * internet
   */
  addressType?: string;
  /**
   * @remarks
   * Specifies whether to automatically pay the subscription fee of the Internet-facing CLB instance. Valid values:
   * 
   * *   **true**: yes. The CLB instance is created after you call the API operation.
   * *   **false** (default): After you call the operation, the order is created but the payment is not completed. You can view pending orders in the console. The CLB instance will not be created until you complete the payment.
   * 
   * >  This parameter takes effect only for subscription CLB instances created on the Alibaba Cloud China site.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The maximum bandwidth of the listener. Unit: Mbit/s.
   * 
   * Valid values: **1** to **5120**. For a pay-by-bandwidth Internet-facing CLB instance, you can specify a maximum bandwidth for each listener. The sum of the maximum bandwidth of all listeners cannot exceed the maximum bandwidth of the CLB instance.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * >  If you do not specify this parameter, the system uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 593B0448-D13E-4C56-AC0D-FDF0FDE0E9A3
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the CLB instance. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  deleteProtection?: string;
  /**
   * @remarks
   * The subscription duration of the Internet-facing CLB instance. Valid values:
   * 
   * *   If **PricingCycle** is set to **month**, the valid values are **1 to 9**.
   * *   If **PricingCycle** is set to **year**, the valid values are **1 to 5**.
   * 
   * >  This parameter is supported only by subscription instances created on the Alibaba Cloud China site.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  duration?: number;
  /**
   * @remarks
   * The metering method of the CLB instance. Valid values:
   * 
   * *   **PayBySpec** (default)
   * *   **PayByCLCU**
   * 
   * >  This parameter is supported only by instances created on the Alibaba Cloud China site and only when **PayType** is set to **PayOnDemand**.
   * 
   * @example
   * PayBySpec
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of the Internet-facing CLB instance. Valid values:
   * 
   * *   **paybytraffic** (default): pay-by-data-transfer
   * 
   *     >  If you set InternetChargeType to **paybytraffic**, you do not need to configure the **Bandwidth** parameter. The value of **Bandwidth** does not take effect even if you specify one.
   * 
   * *   **paybybandwidth**: pay-by-bandwidth
   * 
   * >  If you set **PayType** to **PayOnDemand** and **InstanceChargeType** to **PayByCLCU**, the only valid value for InternetChargeType is **paybytraffic**.
   * 
   * @example
   * paybytraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The CLB instance name.
   * 
   * The name must be 1 to 80 characters in length, and can contain digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * If you do not specify this parameter, the system automatically assigns a name to the CLB instance.
   * 
   * @example
   * lb-bp1o94dp5i6ea****
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The specification of the CLB instance. Valid values:
   * 
   * *   **slb.s1.small**
   * 
   * *   **slb.s2.small**
   * 
   * *   **slb.s2.medium**
   * 
   * *   **slb.s3.small**
   * 
   * *   **slb.s3.medium**
   * 
   * *   **slb.s3.large**
   * 
   *     
   *  >   If you do not specify this parameter, a shared-resource CLB instance is created. Shared-resource CLB instances are no longer available for purchase. Therefore, you must specify this parameter.
   * 
   * If **InstanceChargeType** is set to **PayByCLCU**, this parameter is invalid and you do not need to specify this parameter.
   * 
   * @example
   * slb.s1.small
   */
  loadBalancerSpec?: string;
  /**
   * @remarks
   * The ID of the primary zone to which the CLB instance belongs.
   * 
   * You can call the [DescribeZone](https://help.aliyun.com/document_detail/2401683.html) operation to query the primary and secondary zones in the region where you want to create the CLB instance.
   * 
   * @example
   * cn-hangzhou-b
   */
  masterZoneId?: string;
  /**
   * @remarks
   * The reason for enabling the configuration read-only mode. The reason must be 1 to 80 characters in length. It must start with a letter and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * >  This parameter takes effect only when **ModificationProtectionStatus** is set to **ConsoleProtection**.
   * 
   * @example
   * Managed instance
   */
  modificationProtectionReason?: string;
  /**
   * @remarks
   * Specifies whether to enable the configuration read-only mode. Valid values:
   * 
   * *   **NonProtection**: disables the configuration read-only mode. After you disable the configuration read-only mode, the value of **ModificationProtectionReason** is cleared.
   * *   **ConsoleProtection**: enables the configuration read-only mode.
   * 
   * >  If you set this parameter to **ConsoleProtection**, you cannot modify instance configurations in the CLB console. However, you can modify instance configurations by calling API operations.
   * 
   * @example
   * ConsoleProtection
   */
  modificationProtectionStatus?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method of the CLB instance. Valid values:
   * 
   * **PayOnDemand**: pay-as-you-go.
   * 
   * >  The Alibaba Cloud International site supports only pay-as-you-go CLB instances.
   * 
   * @example
   * PayOnDemand
   * 
   * @deprecated
   */
  payType?: string;
  /**
   * @remarks
   * The billing cycle of the subscription Internet-facing CLB instance. Valid values:
   * 
   * *   **month**
   * *   **year**
   * 
   * >  This parameter is supported only by subscription instances created on the Alibaba Cloud China site.
   * 
   * @example
   * month
   * 
   * @deprecated
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the most recent region list.
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
   * @example
   * rg-atstuj3rtopt****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the secondary zone to which the CLB instance belongs.
   * 
   * You can call the [DescribeZone](https://help.aliyun.com/document_detail/2401683.html) operation to query the primary and secondary zones in the region where you want to create the CLB instance.
   * 
   * @example
   * cn-hangzhou-d
   */
  slaveZoneId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateLoadBalancerRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch to which the CLB instance belongs.
   * 
   * If you want to deploy the CLB instance in a VPC, this parameter is required. If this parameter is specified, **AddessType** is set to **intranet** by default.
   * 
   * @example
   * vsw-bp12mw1f8k3jgy****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the CLB instance belongs.
   * 
   * @example
   * vpc-bp1aevy8sofi8mh1****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressIPVersion: 'AddressIPVersion',
      addressType: 'AddressType',
      autoPay: 'AutoPay',
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      deleteProtection: 'DeleteProtection',
      duration: 'Duration',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerSpec: 'LoadBalancerSpec',
      masterZoneId: 'MasterZoneId',
      modificationProtectionReason: 'ModificationProtectionReason',
      modificationProtectionStatus: 'ModificationProtectionStatus',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      slaveZoneId: 'SlaveZoneId',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressIPVersion: 'string',
      addressType: 'string',
      autoPay: 'boolean',
      bandwidth: 'number',
      clientToken: 'string',
      deleteProtection: 'string',
      duration: 'number',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      loadBalancerName: 'string',
      loadBalancerSpec: 'string',
      masterZoneId: 'string',
      modificationProtectionReason: 'string',
      modificationProtectionStatus: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      pricingCycle: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      slaveZoneId: 'string',
      tag: { 'type': 'array', 'itemType': CreateLoadBalancerRequestTag },
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The IP address that is allocated to the CLB instance.
   * 
   * @example
   * 42.XX.XX.6
   */
  address?: string;
  /**
   * @remarks
   * The IP version that is used by the CLB instance.
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * The CLB instance ID.
   * 
   * @example
   * lb-hddhfjg****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The CLB instance name.
   * 
   * @example
   * lb-bp1o94dp5i6ea****
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The network type of the CLB instance. Valid values:
   * 
   * *   **vpc**
   * *   **classic**
   * 
   * @example
   * classic
   */
  networkType?: string;
  /**
   * @remarks
   * The order ID of the subscription CLB instance.
   * 
   * @example
   * 20212961978****
   */
  orderId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the CLB instance belongs.
   * 
   * @example
   * rg-atstuj3rto****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the CLB instance belongs.
   * 
   * @example
   * vsw-255ecr****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the CLB instance belongs.
   * 
   * @example
   * vpc-25dvzy9****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressIPVersion: 'AddressIPVersion',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      networkType: 'NetworkType',
      orderId: 'OrderId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressIPVersion: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      networkType: 'string',
      orderId: 'number',
      requestId: 'string',
      resourceGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateLoadBalancerResponseBody;
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
      body: CreateLoadBalancerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerHTTPListenerRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the network access control list (ACL) that is associated with the listener.
   * 
   * >  If **AclStatus** is set to **on**, this parameter is required.
   * 
   * @example
   * 123
   */
  aclId?: string;
  /**
   * @remarks
   * Specifies whether to enable access control. Valid values:
   * 
   * *   **on**: yes
   * *   **off** (default): no
   * 
   * @example
   * off
   */
  aclStatus?: string;
  /**
   * @remarks
   * The type of access control. Valid values:
   * 
   * *   **white**: Only requests from IP addresses and CIDR blocks on the whitelist are forwarded by the listener. Your service may be adversely affected if the whitelist is not properly configured. If a whitelist is configured, the listener forwards only requests from IP addresses that are added to the whitelist.
   * 
   *     If you configure a whitelist but do not add an IP address to the whitelist, the listener forwards all requests.
   * 
   * *   **black**: Requests from the IP addresses and CIDR blocks on the blacklist are blocked.
   * 
   *     If you configure a blacklist but do not add an IP address to the blacklist, the listener forwards all requests.
   * 
   * >  When **AclStatus** is set to **on**, this parameter takes effect.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The backend port that is used by the CLB instance.
   * 
   * Valid values: **1** to **65535**.
   * 
   * >  If the VServerGroupId parameter is not specified, this parameter is required.
   * 
   * @example
   * 80
   */
  backendServerPort?: number;
  /**
   * @remarks
   * The maximum bandwidth of the listener. Unit: Mbit/s. Valid values:
   * 
   * **-1**: specifies that the bandwidth of the listener is unlimited.
   * 
   * @example
   * -1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The cookie configured for the server.
   * 
   * The cookie must be 1 to 200 characters in length, and can contain only ASCII letters and digits. It cannot contain commas (,), semicolons (;), space characters, or start with a dollar sign ($).
   * 
   * >  This parameter is required when the **StickySession** parameter is set to **on** and the **StickySessionType** parameter is set to **server**.
   * 
   * @example
   * B490B5EBF6F3CD402E515D22BCDA1598
   */
  cookie?: string;
  /**
   * @remarks
   * The timeout period of a cookie. Unit: seconds.
   * 
   * Valid values: **1** to **86400**.
   * 
   * >  If **StickySession** is set to **on** and **StickySessionType** is set to **insert**, this parameter is required.
   * 
   * @example
   * 500
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * The name of the listener.
   * 
   * The name must be 1 to 256 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * @example
   * HTTP_443
   */
  description?: string;
  /**
   * @remarks
   * The listening port that is used to redirect HTTP requests to HTTPS.
   * 
   * @example
   * 443
   */
  forwardPort?: number;
  /**
   * @remarks
   * Specifies whether to enable `GZIP` compression to compress specific types of files. Valid values:
   * 
   * *   **on** (default)
   * *   **off**
   * 
   * @example
   * on
   */
  gzip?: string;
  /**
   * @remarks
   * Specifies whether to enable the health check feature. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  healthCheck?: string;
  /**
   * @remarks
   * The backend port that is used for health checks.
   * 
   * Valid values: **1** to **65535**.
   * 
   * >  This parameter takes effect only if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 80
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name that is used for health checks. Valid values:
   * 
   * *   **$_ip**: the private IP address of a backend server. If an IP address is specified, or this parameter is not specified, the CLB instance uses the private IP address of each backend server as the domain name for health checks.
   * *   **domain**: The domain name must be 1 to 80 characters in length, and can contain letters, digits, periods (.), and hyphens (-).
   * 
   * >  This parameter takes effect only if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 172.16.0.0/12
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code for a successful health check. Separate multiple HTTP status codes with commas (,).
   * 
   * Valid values: **http_2xx** (default), **http_3xx**, **http_4xx**, and **http_5xx**.
   * 
   * >  This parameter takes effect only if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * http_2xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Unit: seconds.
   * 
   * Valid values: **1** to **50**.
   * 
   * >  This parameter takes effect only if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The health check method used in HTTP health checks. Valid values: **head** and **get**.
   * 
   * >  This parameter takes effect only if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * get
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The timeout period of a health check response. If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check. Unit: seconds
   * 
   * Valid values: **1** to **300**.
   * 
   * >  This parameter takes effect only if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 3
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The URI that is used for health checks.
   * 
   * The URI must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number signs (#), and ampersands (&). The URI must start with a forward slash (/) but cannot be a single forward slash (/).
   * 
   * >  This parameter takes effect only if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * /test/index.html
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from **fail** to **success**.
   * 
   * Valid values: **2** to **10**.
   * 
   * >  This parameter takes effect only if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The timeout period of an idle connection. Unit: seconds.
   * 
   * Default value: **15**. Valid values: **1** to **60**.
   * 
   * If no request is received within the specified timeout period, SLB closes the connection. When a request is received, SLB establishes a new connection.
   * 
   * @example
   * 3
   */
  idleTimeout?: number;
  /**
   * @remarks
   * Specifies whether to enable HTTP-to-HTTPS redirection. Valid values:
   * 
   * *   **on**: yes
   * *   **off** (default): no
   * 
   * @example
   * off
   */
  listenerForward?: string;
  /**
   * @remarks
   * The frontend port that is used by the CLB instance.
   * 
   * Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1c9vixxjh92q83tw*****
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the CLB instance is deployed.
   * 
   * You can query the region ID from the [Regions and zones](https://help.aliyun.com/document_detail/40654.html) list or by calling the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The timeout period of a request. Unit: seconds.
   * 
   * Default value: **60**. Valid values: **1** to **180**.
   * 
   * If no response is received from the backend server within the specified timeout period, CLB sends an `HTTP 504` error code to the client.
   * 
   * @example
   * 6
   */
  requestTimeout?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * *   **wrr** (default): Backend servers with higher weights receive more requests than backend servers with lower weights.
   * *   **rr**: Requests are distributed to backend servers in sequence.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * Specifies whether to enable session persistence. Valid values:
   * 
   * *   **on**: yes
   * *   **off** (default): no
   * 
   * @example
   * off
   */
  stickySession?: string;
  /**
   * @remarks
   * The method that is used to handle cookies. Valid values:
   * 
   * *   **insert**: inserts a cookie.
   * 
   *     The first time a client accesses CLB, CLB inserts a cookie into the response packet. Subsequent requests from the client that carry the cookie are distributed to the same backend server as the first request.
   * 
   * *   **server**: rewrites the original cookie.
   * 
   *     CLB rewrites the custom cookies in requests from a client. Subsequent requests from the client that carry the new cookie are forwarded to the same backend server as the first request.
   * 
   * >  This parameter is required if the **StickySession** parameter is set to **on**.
   * 
   * @example
   * insert
   */
  stickySessionType?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateLoadBalancerHTTPListenerRequestTag[];
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from **success** to **fail**.
   * 
   * Valid values: **2** to **10**.
   * 
   * >  This parameter takes effect only if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * The ID of the vServer group.
   * 
   * @example
   * rsp-cige6j*****
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-For` header to retrieve client IP addresses. Valid values:
   * 
   * *   **on** (default)
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor?: string;
  /**
   * @remarks
   * Specifies whether to use the `XForwardedFor_ClientSrcPort` header to retrieve the client port. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_ClientSrcPort?: string;
  /**
   * @remarks
   * Indicates whether the `SLB-ID` header is used to retrieve the ID of the CLB instance. Valid values:
   * 
   * *   **on**
   * *   **off** (default): no
   * 
   * @example
   * on
   */
  XForwardedFor_SLBID?: string;
  /**
   * @remarks
   * Indicates whether the `SLB-IP` header is used to retrieve the virtual IP address (VIP) requested by the client. Valid values:
   * 
   * *   **on**
   * *   **off** (default): no
   * 
   * @example
   * on
   */
  XForwardedFor_SLBIP?: string;
  /**
   * @remarks
   * Specifies whether to use the `XForwardedFor_SLBPORT` header to retrieve the listener port of the CLB instance. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_SLBPORT?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Proto` header to retrieve the listener protocol. Valid values:
   * 
   * *   **on**
   * *   **off** (default): no
   * 
   * @example
   * on
   */
  XForwardedFor_proto?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      description: 'Description',
      forwardPort: 'ForwardPort',
      gzip: 'Gzip',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      idleTimeout: 'IdleTimeout',
      listenerForward: 'ListenerForward',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      requestTimeout: 'RequestTimeout',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduler: 'Scheduler',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      tag: 'Tag',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroupId: 'VServerGroupId',
      XForwardedFor: 'XForwardedFor',
      XForwardedFor_ClientSrcPort: 'XForwardedFor_ClientSrcPort',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      XForwardedFor_SLBPORT: 'XForwardedFor_SLBPORT',
      XForwardedFor_proto: 'XForwardedFor_proto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclStatus: 'string',
      aclType: 'string',
      backendServerPort: 'number',
      bandwidth: 'number',
      cookie: 'string',
      cookieTimeout: 'number',
      description: 'string',
      forwardPort: 'number',
      gzip: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      idleTimeout: 'number',
      listenerForward: 'string',
      listenerPort: 'number',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      requestTimeout: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduler: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      tag: { 'type': 'array', 'itemType': CreateLoadBalancerHTTPListenerRequestTag },
      unhealthyThreshold: 'number',
      VServerGroupId: 'string',
      XForwardedFor: 'string',
      XForwardedFor_ClientSrcPort: 'string',
      XForwardedFor_SLBID: 'string',
      XForwardedFor_SLBIP: 'string',
      XForwardedFor_SLBPORT: 'string',
      XForwardedFor_proto: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerHTTPListenerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
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

export class CreateLoadBalancerHTTPListenerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateLoadBalancerHTTPListenerResponseBody;
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
      body: CreateLoadBalancerHTTPListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerHTTPSListenerRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the network access control list (ACL) that is associated with the listener.
   * 
   * >  This parameter is required if **AclStatus** is set to **on**.
   * 
   * @example
   * nacl-a2do9e413e0spzasx****
   */
  aclId?: string;
  /**
   * @remarks
   * Specifies whether to enable access control. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * off
   */
  aclStatus?: string;
  /**
   * @remarks
   * The type of the network ACL. Valid values:
   * 
   * *   **white**: a whitelist. Only requests from the IP addresses or CIDR blocks in the network ACL are forwarded. Whitelists apply to scenarios in which you want to allow only specific IP addresses to access an application. Your service may be adversely affected if the allowlist is not properly configured. After a whitelist is configured, only requests from IP addresses that are added to the whitelist are forwarded by the listener.
   * 
   *     If you enable a whitelist but do not add an IP address to the ACL, the listener forwards all requests.
   * 
   * *   **black**: a blacklist. All requests from the IP addresses or CIDR blocks in the network ACL are denied. The blacklist applies to scenarios in which you want to deny access from specific IP addresses to an application.
   * 
   *     If a blacklist is configured for a listener but no IP address is added to the blacklist, the listener forwards all requests.
   * 
   * >  If **AclStatus** is set to **on**, this parameter is required.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The backend port that is used by the CLB instance. Valid values: **1** to **65535**.
   * 
   * If the VServerGroupId parameter is not set, this parameter is required.
   * 
   * @example
   * 80
   */
  backendServerPort?: number;
  /**
   * @remarks
   * The maximum bandwidth of the listener. Unit: Mbit/s.
   * 
   * The URL must meet the following requirements:
   * 
   * *   **-1**: For a pay-by-data-transfer Internet-facing CLB instance, this parameter is set to -1. This indicates that the bandwidth of the listener is unlimited.
   * 
   * This parameter is required.
   * 
   * @example
   * -1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The ID of the certification authority (CA) certificate.
   * 
   * If both the CA certificate and the server certificate are uploaded, mutual authentication is used.
   * 
   * If you upload only the server certificate, one-way authentication is used.
   * 
   * @example
   * 139a00604ad-cn-east-hangzh****
   */
  CACertificateId?: string;
  /**
   * @remarks
   * The cookie that you configure for the server.
   * 
   * The cookie must be 1 to 200 characters in length, and can contain only ASCII letters and digits. It cannot contain commas (,), semicolons (;), spaces, or start with a dollar sign ($).
   * 
   * >  This parameter is required when the **StickySession** parameter is set to **on** and the **StickySessionType** parameter is set to **server**.
   * 
   * @example
   * B490B5EBF6F3CD402E515D22BCDA****
   */
  cookie?: string;
  /**
   * @remarks
   * The timeout period of a cookie. Unit: seconds.
   * 
   * Valid values: **1** to **86400**.
   * 
   * >  If **StickySession** is set to **on** and **StickySessionType** is set to **insert**, this parameter is required.
   * 
   * @example
   * 500
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * The name of the listener.
   * 
   * The name must be 1 to 256 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * @example
   * HTTPS_443
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable HTTP/2. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * off
   */
  enableHttp2?: string;
  /**
   * @remarks
   * Specifies whether to enable `Gzip` compression to compress specific types of files. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  gzip?: string;
  /**
   * @remarks
   * Specifies whether to enable the health check feature. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  healthCheck?: string;
  /**
   * @remarks
   * The port that is used for health checks.
   * 
   * Valid values: **1** to **65535**.
   * 
   * >  This parameter takes effect only if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 8080
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name that is used for health checks. Valid values:
   * 
   * *   **$_ip**: the private IP address of a backend server. If you do not set the HealthCheckDomain parameter or set the parameter to $_ip, the CLB instance uses the private IP address of each backend server for health checks.
   * *   **domain**: The domain name must be 1 to 80 characters in length and can contain letters, digits, periods (.), and hyphens (-).
   * 
   * >  This parameter takes effect only if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 172.XX.XX.16
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code for a successful health check. Separate multiple HTTP status codes with commas (,).
   * 
   * Valid values: **http_2xx**, **http_3xx**, **http_4xx**, and **http_5xx**.
   * 
   * >  This parameter takes effect only if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * http_2xx,http_3xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Unit: seconds.
   * 
   * Valid values: **1** to **50**.
   * 
   * >  This parameter takes effect only if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The health check method used in HTTP health checks. Valid values: **head** and **get**.
   * 
   * >  This parameter takes effect only if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * get
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The timeout period of a health check response. If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check. Unit: seconds Valid values: **1** to **300**.
   * 
   * >  This parameter takes effect only if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 3
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The URI that is used for health checks.
   * 
   * The URI must be 1 to 80 characters in length, and can contain letters, digits, and the following special characters: `-/.%?#&`. The URI must start with a forward slash (`/`), but cannot be a single forward slash (`/`).
   * 
   * >  This parameter takes effect only if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * /test/index.html
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from **fail** to **success**.
   * 
   * Valid values: **2** to **10**.
   * 
   * >  This parameter takes effect only if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The timeout period of an idle connection. Valid values: **1 to 60**. Default value: **15**. Unit: seconds.
   * 
   * If no request is received within the specified timeout period, CLB closes the connection. When a request is received, CLB establishes a new connection.
   * 
   * @example
   * 12
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The frontend port that is used by the CLB instance.
   * 
   * Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1o94dp5i6earr****
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * You can query the region ID from the [Regions and zones](https://help.aliyun.com/document_detail/40654.html) list or by calling the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The timeout period of a request. Valid values: **1 to 180**. Default value: **60**. Unit: seconds.
   * 
   * If no response is received from a backend server within the specified timeout period, CLB returns the HTTP 504 status code to the client.
   * 
   * @example
   * 23
   */
  requestTimeout?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * *   **wrr**: Backend servers with higher weights receive more requests than those with lower weights.
   * *   **rr**: Requests are distributed to backend servers in sequence.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The ID of the server certificate.
   * 
   * @example
   * idkp-123-cn-test-****
   */
  serverCertificateId?: string;
  /**
   * @remarks
   * Specifies whether to enable session persistence. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  stickySession?: string;
  /**
   * @remarks
   * The method that is used to handle a cookie. Valid values: **insert** and **server**.
   * 
   * *   **insert**: inserts a cookie.
   * 
   *     CLB inserts a cookie (SERVERID) into the first HTTP or HTTPS response packet that is sent to a client. The next request from the client will contain this cookie, and the listener will distribute this request to the recorded backend server.
   * 
   * *   **server**: rewrites a cookie.
   * 
   *     When CLB detects a user-defined cookie, it overwrites the original cookie with the user-defined cookie. The next request from the client carries the user-defined cookie, and the listener will distribute the request to the recorded backend server.
   * 
   * >  This parameter is required if the **StickySession** parameter is set to **on**.
   * 
   * @example
   * insert
   */
  stickySessionType?: string;
  /**
   * @remarks
   * The Transport Layer Security (TLS) security policy. Each security policy contains TLS protocol versions and cipher suites available for HTTPS.
   * 
   * *   **tls_cipher_policy_1_0**:
   * 
   *     Supported TLS versions: TLS 1.0, TLS 1.1, and TLS 1.2
   * 
   *     Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA
   * 
   * *   **tls_cipher_policy_1_1**:
   * 
   *     Supported TLS versions: TLS 1.1 and TLS 1.2
   * 
   *     Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA
   * 
   * *   **tls_cipher_policy_1_2**
   * 
   *     Supported TLS version: TLS 1.2
   * 
   *     Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA
   * 
   * *   **tls_cipher_policy_1_2_strict**
   * 
   *     Supported TLS version: TLS 1.2
   * 
   *     Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, ECDHE-RSA-AES128-SHA, and ECDHE-RSA-AES256-SHA
   * 
   * *   **tls_cipher_policy_1_2_strict_with_1_3**
   * 
   *     Supported TLS versions: TLS 1.2 and TLS 1.3
   * 
   *     Supported cipher suites: TLS_AES_128_GCM_SHA256, TLS_AES_256_GCM_SHA384, TLS_CHACHA20_POLY1305_SHA256, TLS_AES_128_CCM_SHA256, TLS_AES_128_CCM_8_SHA256, ECDHE-ECDSA-AES128-GCM-SHA256, ECDHE-ECDSA-AES256-GCM-SHA384, ECDHE-ECDSA-AES128-SHA256, ECDHE-ECDSA-AES256-SHA384, ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, ECDHE-ECDSA-AES128-SHA, ECDHE-ECDSA-AES256-SHA, ECDHE-RSA-AES128-SHA, and ECDHE-RSA-AES256-SHA
   * 
   * @example
   * tls_cipher_policy_1_1
   */
  TLSCipherPolicy?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateLoadBalancerHTTPSListenerRequestTag[];
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from **success** to **fail**.
   * 
   * Valid values: **2** to **10**.
   * 
   * >  This parameter takes effect only if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * The ID of the server group.
   * 
   * @example
   * rsp-cige6j5e7p****
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-For` header to retrieve client IP addresses. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  XForwardedFor?: string;
  /**
   * @remarks
   * Specifies whether to use the `XForwardedFor_ClientSrcPort` header to retrieve the client port. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_ClientSrcPort?: string;
  /**
   * @remarks
   * Specifies whether to use the `SLB-ID` header to retrieve the ID of the CLB instance. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  XForwardedFor_SLBID?: string;
  /**
   * @remarks
   * Specifies whether to use the `SLB-IP` header to retrieve the virtual IP address (VIP) of the client. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  XForwardedFor_SLBIP?: string;
  /**
   * @remarks
   * Specifies whether to use the `XForwardedFor_SLBPORT` header to retrieve the listener port of the CLB instance. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_SLBPORT?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Proto` header to retrieve the listener protocol. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  XForwardedFor_proto?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      CACertificateId: 'CACertificateId',
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      description: 'Description',
      enableHttp2: 'EnableHttp2',
      gzip: 'Gzip',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      idleTimeout: 'IdleTimeout',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      requestTimeout: 'RequestTimeout',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduler: 'Scheduler',
      serverCertificateId: 'ServerCertificateId',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      TLSCipherPolicy: 'TLSCipherPolicy',
      tag: 'Tag',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroupId: 'VServerGroupId',
      XForwardedFor: 'XForwardedFor',
      XForwardedFor_ClientSrcPort: 'XForwardedFor_ClientSrcPort',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      XForwardedFor_SLBPORT: 'XForwardedFor_SLBPORT',
      XForwardedFor_proto: 'XForwardedFor_proto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclStatus: 'string',
      aclType: 'string',
      backendServerPort: 'number',
      bandwidth: 'number',
      CACertificateId: 'string',
      cookie: 'string',
      cookieTimeout: 'number',
      description: 'string',
      enableHttp2: 'string',
      gzip: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      idleTimeout: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      requestTimeout: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduler: 'string',
      serverCertificateId: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      TLSCipherPolicy: 'string',
      tag: { 'type': 'array', 'itemType': CreateLoadBalancerHTTPSListenerRequestTag },
      unhealthyThreshold: 'number',
      VServerGroupId: 'string',
      XForwardedFor: 'string',
      XForwardedFor_ClientSrcPort: 'string',
      XForwardedFor_SLBID: 'string',
      XForwardedFor_SLBIP: 'string',
      XForwardedFor_SLBPORT: 'string',
      XForwardedFor_proto: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerHTTPSListenerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
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

export class CreateLoadBalancerHTTPSListenerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateLoadBalancerHTTPSListenerResponseBody;
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
      body: CreateLoadBalancerHTTPSListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerTCPListenerRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the network ACL that is associated with the listener.
   * 
   * >  If **AclStatus** is set to **on**, this parameter is required.
   * 
   * @example
   * 1323
   */
  aclId?: string;
  /**
   * @remarks
   * Specifies whether to enable access control. Valid values:
   * 
   * *   **on**: yes
   * *   **off** (default): no
   * 
   * @example
   * off
   */
  aclStatus?: string;
  /**
   * @remarks
   * The type of the ACL. Valid values:
   * 
   * *   **white**: a whitelist. Only requests from the IP addresses or CIDR blocks in the network ACL are forwarded. Whitelists apply to scenarios where you want to allow only specific IP addresses to access an application.
   * 
   *     Your service may be adversely affected if the whitelist is not properly configured.
   * 
   *     If a whitelist is configured, only requests from IP addresses that are added to the whitelist are forwarded by the listener. If a whitelist is configured but no IP address is added to the whitelist, the listener forwards all requests.
   * 
   * *   **black**: a blacklist. All requests from the IP addresses or CIDR blocks in the ACL are rejected. Blacklists apply to scenarios where you want to block access from specified IP addresses to an application.
   * 
   *     If a blacklist is configured for a listener but no IP address is added to the blacklist, the listener forwards all requests.
   * 
   * >  If **AclStatus** is set to **on**, this parameter is required.
   * 
   * @example
   * black
   */
  aclType?: string;
  /**
   * @remarks
   * The backend port used by the CLB instance.
   * 
   * Valid values: **1** to **65535**.
   * 
   * If the **VServerGroupId** parameter is not set, this parameter is required.
   * 
   * @example
   * 80
   */
  backendServerPort?: number;
  /**
   * @remarks
   * The maximum bandwidth of the listener. Unit: Mbit/s. Valid values:
   * 
   * *   **-1**: For a pay-by-data-transfer Internet-facing CLB instance, this value can be set to -1, which specifies unlimited bandwidth.
   * *   **1** to **5120**: For a pay-by-bandwidth Internet-facing CLB instance, you can specify the maximum bandwidth of each listener. The sum of the maximum bandwidth values that you set for all listeners cannot exceed the maximum bandwidth of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * -1
   */
  bandwidth?: number;
  /**
   * @remarks
   * Specifies whether to enable connection draining. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * off
   */
  connectionDrain?: string;
  /**
   * @remarks
   * The timeout period of connection draining. Unit: seconds.
   * 
   * Valid values: **10** to **900**.
   * 
   * >  This parameter is required if **ConnectionDrain** is set to **on**.
   * 
   * @example
   * 300
   */
  connectionDrainTimeout?: number;
  /**
   * @remarks
   * The name of the listener.
   * 
   * The name must be 1 to 256 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * @example
   * tcp_80
   */
  description?: string;
  /**
   * @remarks
   * The timeout period of a connection. Unit: seconds.
   * 
   * Valid values: **10** to **900**.
   * 
   * @example
   * 500
   */
  establishedTimeout?: number;
  /**
   * @remarks
   * The port that is used for health checks.
   * 
   * Valid values: **1** to **65535**.
   * 
   * If this parameter is not set, the backend port specified by **BackendServerPort** is used for health checks.
   * 
   * @example
   * 80
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The maximum timeout period of a health check response. Unit: seconds.
   * 
   * Valid values: **1** to **300**.
   * 
   * Default value: **5**.
   * 
   * @example
   * 100
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The domain name that you want to use for health checks. Valid values:
   * 
   * *   **$_ip**: the private IP address of a backend server. If you do not set the HealthCheckDomain parameter or set the parameter to $_ip, the CLB instance uses the private IP address of each backend server for health checks.
   * *   **domain**: The domain name must be 1 to 80 characters in length, and can contain letters, digits, periods (.), and hyphens (-).
   * 
   * @example
   * 172.XX.XX.6
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code for a successful health check. Separate multiple HTTP status codes with commas (,). Valid values:
   * 
   * *   **http_2xx**(default)
   * *   **http_3xx**
   * *   **http_4xx**
   * *   **http_5xx**
   * 
   * @example
   * http_2xx,http_3xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * Specifies whether to enable the health check feature. Valid values:
   * 
   * *   **on** (default): yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  healthCheckSwitch?: string;
  /**
   * @remarks
   * The type of health checks. Valid values:
   * 
   * *   **tcp** (default)
   * *   **http**
   * 
   * @example
   * tcp
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The URI that is used for health checks. The URI must be 1 to 80 characters in length, and can contain only digits, letters, hyphens (-), forward slashes (/), periods (.), percent signs (%), number signs (#), and ampersands (&). The URI must start with a forward slash (/) but cannot be a single forward slash (/).
   * 
   * You can set this parameter when the TCP listener requires HTTP health checks. If you do not set this parameter, TCP health checks are performed.
   * 
   * @example
   * /test/index.html
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from **fail** to **success**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The frontend port used by the CLB instance.
   * 
   * Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1b6c719dfa08ex****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The ID of the primary/secondary server group.
   * 
   * >  You cannot set both VServerGroupId and MasterSlaveServerGroupId.
   * 
   * @example
   * rsp-0bfucw****
   */
  masterSlaveServerGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The timeout period of session persistence. Unit: seconds.
   * 
   * Valid values: **0 to 3600**.
   * 
   * Default value: **0**. If the default value is used, the system disables session persistence.
   * 
   * @example
   * 0
   */
  persistenceTimeout?: number;
  /**
   * @remarks
   * Specifies whether to use the Proxy protocol to pass client IP addresses to backend servers. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * @example
   * false
   */
  proxyProtocolV2Enabled?: boolean;
  /**
   * @remarks
   * The ID of the region where the Classic Load Balancer (CLB) instance is deployed.
   * 
   * You can query the region ID from the [Regions and zones](https://help.aliyun.com/document_detail/40654.html) list or by calling the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The routing algorithm. Valid values:
   * 
   * *   **wrr** (default): Backend servers with higher weights receive more requests than backend servers with lower weights.
   * *   **rr**: Requests are distributed to backend servers in sequence.
   * *   **sch**: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
   * *   **tch**: specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port, and destination port. Requests that contain the same information based on the four factors are distributed to the same backend server.
   * 
   * >  Only high-performance CLB instances support the **sch** and **tch** consistent hashing algorithms.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateLoadBalancerTCPListenerRequestTag[];
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from **success** to **fail**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * The ID of the vServer group.
   * 
   * @example
   * rsp-cige6j****
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Unit: seconds.
   * 
   * Valid values: **1** to **50**.
   * 
   * @example
   * 3
   */
  healthCheckInterval?: number;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      connectionDrain: 'ConnectionDrain',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      description: 'Description',
      establishedTimeout: 'EstablishedTimeout',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckSwitch: 'HealthCheckSwitch',
      healthCheckType: 'HealthCheckType',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      persistenceTimeout: 'PersistenceTimeout',
      proxyProtocolV2Enabled: 'ProxyProtocolV2Enabled',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduler: 'Scheduler',
      tag: 'Tag',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroupId: 'VServerGroupId',
      healthCheckInterval: 'healthCheckInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclStatus: 'string',
      aclType: 'string',
      backendServerPort: 'number',
      bandwidth: 'number',
      connectionDrain: 'string',
      connectionDrainTimeout: 'number',
      description: 'string',
      establishedTimeout: 'number',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckSwitch: 'string',
      healthCheckType: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      masterSlaveServerGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      persistenceTimeout: 'number',
      proxyProtocolV2Enabled: 'boolean',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduler: 'string',
      tag: { 'type': 'array', 'itemType': CreateLoadBalancerTCPListenerRequestTag },
      unhealthyThreshold: 'number',
      VServerGroupId: 'string',
      healthCheckInterval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerTCPListenerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
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

export class CreateLoadBalancerTCPListenerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateLoadBalancerTCPListenerResponseBody;
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
      body: CreateLoadBalancerTCPListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerUDPListenerRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the network ACL that is associated with the listener.
   * 
   * If **AclStatus** is set to **on**, this parameter is required.
   * 
   * @example
   * 123
   */
  aclId?: string;
  /**
   * @remarks
   * Specifies whether to enable access control. Valid values:
   * 
   * *   **on**: yes
   * *   **off** (default): no
   * 
   * @example
   * off
   */
  aclStatus?: string;
  /**
   * @remarks
   * The type of the network ACL. Valid values:
   * 
   * *   **white**: a whitelist. Only requests from the IP addresses or CIDR blocks in the network ACL are forwarded. Whitelists apply to scenarios in which you want to allow only specific IP addresses to access an application. After a whitelist is configured, only IP addresses in the whitelist can access the CLB listener. Risks may arise if the whitelist is improperly set.
   * 
   *     If a whitelist is configured but no IP address is added to the whitelist, the listener forwards all requests.
   * 
   * *   **black**: a blacklist. All requests from the IP addresses or CIDR blocks in the network ACL are blocked. Blacklists apply to scenarios in which you want to deny access from specific IP addresses to an application.
   * 
   *     If a blacklist is configured for a listener but no IP address is added to the blacklist, the listener forwards all requests.
   * 
   * If **AclStatus** is set to **on**, this parameter is required.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The backend port used by the CLB instance.
   * 
   * Valid values: **1** to **65535**.
   * 
   * If the **VServerGroupId** parameter is not set, this parameter is required.
   * 
   * @example
   * 80
   */
  backendServerPort?: number;
  /**
   * @remarks
   * The maximum bandwidth of the listener. Unit: Mbit/s. Valid values:
   * 
   * **-1**: For a pay-by-data-transfer Internet-facing CLB instance, you can set this parameter to **-1**. This way, the bandwidth of the listener is unlimited.
   * 
   * This parameter is required.
   * 
   * @example
   * -1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The name of the listener.
   * 
   * The name must be 1 to 256 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * @example
   * udp_80
   */
  description?: string;
  /**
   * @remarks
   * The port that is used for health checks.
   * 
   * Valid values: **1** to **65535**.
   * 
   * If this parameter is not set, the backend port specified by **BackendServerPort** is used for health checks.
   * 
   * @example
   * 80
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The timeout period of a health check.
   * 
   * If a backend server, such as an Elastic Compute Service (ECS) instance, does not respond to a probe packet within the specified timeout period, the server fails the health check. Unit: seconds.
   * 
   * Valid values: **1** to **300**.
   * 
   * @example
   * 100
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * Specifies whether to enable the health check feature. Valid values:
   * 
   * *   **on** (default): yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  healthCheckSwitch?: string;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from **fail** to **success**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The frontend port used by the CLB instance.
   * 
   * Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1ygod3yctvg1y7****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The ID of the primary/secondary server group.
   * 
   * >  You can set only one of the VServerGroupId and MasterSlaveServerGroupId parameters.
   * 
   * @example
   * rsp-0bfucwu****
   */
  masterSlaveServerGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to use the Proxy protocol to pass client IP addresses to backend servers. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * @example
   * false
   */
  proxyProtocolV2Enabled?: boolean;
  /**
   * @remarks
   * The ID of the region where the CLB instance is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The routing algorithm. Valid values:
   * 
   * *   **wrr** (default): Backend servers with higher weights receive more requests than backend servers with lower weights.
   * *   **rr**: Requests are distributed to backend servers in sequence.
   * *   **sch**: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
   * *   **tch**: specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port, and destination port. Requests that contain the same information based on the four factors are distributed to the same backend server.
   * *   **qch**: specifies consistent hashing that is based on QUIC connection IDs. Requests that contain the same QUIC connection ID are distributed to the same backend server.
   * 
   * Only high-performance CLB instances support the sch, tch, and qch consistent hashing algorithms.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateLoadBalancerUDPListenerRequestTag[];
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from **success** to **fail**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * The ID of the vServer group.
   * 
   * @example
   * rsp-cige6j8****
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * The response string for UDP listener health checks. The string must be 1 to 64 characters in length and can contain only letters and digits.
   * 
   * @example
   * ok
   */
  healthCheckExp?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Unit: seconds.
   * 
   * Valid values: **1** to **50**.
   * 
   * @example
   * 3
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The request string for UDP listener health checks. The string must be 1 to 64 characters in length and can contain only letters and digits.
   * 
   * @example
   * hello
   */
  healthCheckReq?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      description: 'Description',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckSwitch: 'HealthCheckSwitch',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      proxyProtocolV2Enabled: 'ProxyProtocolV2Enabled',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduler: 'Scheduler',
      tag: 'Tag',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroupId: 'VServerGroupId',
      healthCheckExp: 'healthCheckExp',
      healthCheckInterval: 'healthCheckInterval',
      healthCheckReq: 'healthCheckReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclStatus: 'string',
      aclType: 'string',
      backendServerPort: 'number',
      bandwidth: 'number',
      description: 'string',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckSwitch: 'string',
      healthyThreshold: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      masterSlaveServerGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      proxyProtocolV2Enabled: 'boolean',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduler: 'string',
      tag: { 'type': 'array', 'itemType': CreateLoadBalancerUDPListenerRequestTag },
      unhealthyThreshold: 'number',
      VServerGroupId: 'string',
      healthCheckExp: 'string',
      healthCheckInterval: 'number',
      healthCheckReq: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerUDPListenerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 06F00FBB-3D9E-4CCE-9D43-1A6946A75556
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

export class CreateLoadBalancerUDPListenerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateLoadBalancerUDPListenerResponseBody;
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
      body: CreateLoadBalancerUDPListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMasterSlaveServerGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The CLB instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1hv944r69al4j******
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The backend servers in the primary/secondary server group. Each primary/secondary server group consists of two backend servers.
   * 
   * Configure the following parameters:
   * 
   * *   **ServerId**: required. The IDs of the backend servers. Specify the IDs in a string. You can specify the IDs of Elastic Compute Service (ECS) instances, elastic network interfaces (ENIs), and elastic container instances. If you set **ServerId** to the IDs of ENIs or elastic container instances, you must configure the **Type** parameter.
   * 
   * *   **Weight**: the weight of the backend server. Valid values: **0** to **100**. Default value: **100**. If you set the weight of a backend server to 0, no requests are forwarded to the backend server.
   * 
   * *   **Description**: optional. The description of the backend servers. Specify the description in a string. The description must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/). periods (.), and underscores (_).
   * 
   * *   **Type**: the type of the backend server. Valid values:
   * 
   *     *   **ecs** (default): ECS instance
   *     *   **eni**: ENI
   *     *   **eci**: elastic container instance
   * 
   * >  You can specify ENIs and elastic container instances as backend servers only for high-performance CLB instances.
   * 
   * *   **ServerIp**: the IP address of the ENI or elastic container instance.
   * 
   * *   **Port**: the backend port.
   * 
   * *   **ServerType**: Specify the primary and secondary backend servers in a string. Valid values:
   * 
   *     *   **Master**: primary server
   *     *   **Slave**: secondary server
   * 
   * @example
   * [{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs",  "Port":"82","ServerType":"Master","Description":"test-112" },  { "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs",  "Port":"84","ServerType":"Slave","Description":"test-112" }]
   */
  masterSlaveBackendServers?: string;
  /**
   * @remarks
   * The name of the primary/secondary server group.
   * 
   * @example
   * Group1
   */
  masterSlaveServerGroupName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Classic Load Balancer (CLB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateMasterSlaveServerGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      masterSlaveBackendServers: 'MasterSlaveBackendServers',
      masterSlaveServerGroupName: 'MasterSlaveServerGroupName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      masterSlaveBackendServers: 'string',
      masterSlaveServerGroupName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateMasterSlaveServerGroupRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMasterSlaveServerGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The backend servers in the primary/secondary server group.
   */
  masterSlaveBackendServers?: CreateMasterSlaveServerGroupResponseBodyMasterSlaveBackendServers;
  /**
   * @remarks
   * The ID of the active/standby server group.
   * 
   * @example
   * rsp-bp19au4******
   */
  masterSlaveServerGroupId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7CA4DB76-4D32-523B-822E-5C9494613D46
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      masterSlaveBackendServers: 'MasterSlaveBackendServers',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterSlaveBackendServers: CreateMasterSlaveServerGroupResponseBodyMasterSlaveBackendServers,
      masterSlaveServerGroupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMasterSlaveServerGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMasterSlaveServerGroupResponseBody;
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
      body: CreateMasterSlaveServerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequest extends $tea.Model {
  /**
   * @remarks
   * The frontend listener port that is used by the SLB instance.
   * 
   * Valid values: **1 to 65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 443
   */
  listenerPort?: number;
  /**
   * @remarks
   * The frontend protocol that is used by the SLB instance.
   * 
   * > This parameter is required if the same port is used by listeners that use different protocols.
   * 
   * @example
   * https
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The ID of the SLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1ca0zt07t934w******
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the Server Load Balancer (SLB) instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The forwarding rules that you want to create. You can create at most 10 forwarding rules in each call. Each forwarding rule contains the following parameters:
   * 
   * *   **RuleName**: Required. The value must be of the STRING type. The name of the forwarding rule. The name must be 1 to 40 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_). Forwarding rule names must be unique within the same listener.
   * *   **Domain**: Optional. The value must be a string. The domain name that is associated with the forwarding rule. You must specify this parameter or the **URL** parameter.
   * *   **Url**: Optional. The value must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number signs (#), and ampersands (&). The value must be a string. The URL cannot be only a forward slash (/). However, it must start with a forward slash (/). You must specify this parameter or the **Domain** parameter.
   * *   **VServerGroupId**: Required. The value must be a string. The ID of the vServer group to be specified in the forwarding rule.
   * 
   * >  You must specify at least one between the `Domain` and `URL` parameters. You can also specify both. The combination of `Domain` and `Url` must be unique within the same listener.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"RuleName":"Rule2","Domain":"test.com","VServerGroupId":"rsp-bp114ni******"}]
   */
  ruleList?: string;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ruleList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DEC9C28-AB05-4DDF-9A78-6B08EC9CE18C
   */
  requestId?: string;
  /**
   * @remarks
   * The forwarding rules.
   */
  rules?: CreateRulesResponseBodyRules;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rules: CreateRulesResponseBodyRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRulesResponseBody;
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
      body: CreateRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTLSCipherPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The supported cipher suites, which are determined by the TLS protocol version. You can specify at most 32 cipher suites.
   * 
   * TLS 1.0 and TLS 1.1 support the following cipher suites:
   * 
   * *   **ECDHE-ECDSA-AES128-SHA**
   * *   **ECDHE-ECDSA-AES256-SHA**
   * *   **ECDHE-RSA-AES128-SHA**
   * *   **ECDHE-RSA-AES256-SHA**
   * *   **AES128-SHA**
   * *   **AES256-SHA**
   * *   **DES-CBC3-SHA**
   * 
   * TLS 1.2 supports the following cipher suites:
   * 
   * *   **ECDHE-ECDSA-AES128-SHA**
   * *   **ECDHE-ECDSA-AES256-SHA**
   * *   **ECDHE-RSA-AES128-SHA**
   * *   **ECDHE-RSA-AES256-SHA**
   * *   **AES128-SHA**
   * *   **AES256-SHA**
   * *   **DES-CBC3-SHA**
   * *   **ECDHE-ECDSA-AES128-GCM-SHA256**
   * *   **ECDHE-ECDSA-AES256-GCM-SHA384**
   * *   **ECDHE-ECDSA-AES128-SHA256**
   * *   **ECDHE-ECDSA-AES256-SHA384**
   * *   **ECDHE-RSA-AES128-GCM-SHA256**
   * *   **ECDHE-RSA-AES256-GCM-SHA384**
   * *   **ECDHE-RSA-AES128-SHA256**
   * *   **ECDHE-RSA-AES256-SHA384**
   * *   **AES128-GCM-SHA256**
   * *   **AES256-GCM-SHA384**
   * *   **AES128-SHA256**
   * *   **AES256-SHA256**
   * 
   * TLS 1.3 supports the following cipher suites:
   * 
   * *   **TLS_AES_128_GCM_SHA256**
   * *   **TLS_AES_256_GCM_SHA384**
   * *   **TLS_CHACHA20_POLY1305_SHA256**
   * *   **TLS_AES_128_CCM_SHA256**
   * *   **TLS_AES_128_CCM_8_SHA256**
   * 
   * This parameter is required.
   * 
   * @example
   * AES256-SHA256
   */
  ciphers?: string[];
  /**
   * @remarks
   * The name of the TLS policy. The name must be 1 to 200 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * TLSPolicy-test
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the Server Load Balancer (SLB) instance is created.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The version of the TLS protocol. Valid values: **TLSv1.0**, **TLSv1.1**, **TLSv1.2**, and **TLSv1.3**. You can specify at most four TLS versions.
   * 
   * This parameter is required.
   * 
   * @example
   * TLSv1.0
   */
  TLSVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      TLSVersions: 'TLSVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      TLSVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTLSCipherPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7A8875F-373A-5F48-8484-25B07A61F2AF
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * tls-bp14bb1e7dll4f****
   */
  TLSCipherPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      TLSCipherPolicyId: 'TLSCipherPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      TLSCipherPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTLSCipherPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTLSCipherPolicyResponseBody;
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
      body: CreateTLSCipherPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVServerGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The backend servers that you want to add. Configure the following parameters:
   * 
   * *   **ServerId**:  required. The ID of the backend server. Specify the ID in a string. You can specify the ID of an Elastic Compute Service (ECS) instance, an elastic network interface (ENI), or an elastic container instance. If you set ServerId to the ID of an ENI or an elastic container instance, you must configure the Type parameter.
   * 
   * *   **Weight**: the weight of the backend server. Valid values: 0 to 100. Default value: 100. If you set the weight of a backend server to 0, no requests are forwarded to the backend server.
   * 
   * *   **Description**: optional. The description of the backend server. Specify the description in a string. The description must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * *   **Type**: the type of the backend server. Valid values:
   * 
   *     *   **ecs (default)**: ECS instance
   *     *   **eni**: ENI.
   *     *   **eni**: elastic container instance.
   * 
   * > You can specify ENIs and elastic container instances as backend servers only for high-performance SLB instances.
   * 
   * *   **ServerIp**: The IP address of the ECS instance or ENI.
   * *   **Port**: the backend port.
   * 
   * Examples:
   * 
   * - Add an ECS instance:
   * 
   *   `[{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs", "Port":"80","Description":"test-112" }]`
   * - Add an ENI:
   * 
   *   ` [{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-112" }]`
   * - Add an ENI with multiple IP addresses:
   * 
   *    `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-113" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``172.166.**.**``", "Port":"80","Description":"test-113" }]`
   * - Add an elastic container instance:
   * 
   *   ` [{ "ServerId": "eci-xxxxxxxxx", "Weight": "100", "Type": "eci", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-114" }]`
   * 
   * > You can add only running backend servers to SLB instances. You can specify at most 20 backend servers.
   * 
   * @example
   * [{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-112" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``172.166.**.**``", "Port":"80","Description":"test-113" }]
   */
  backendServers?: string;
  /**
   * @remarks
   * The ID of the Server Load Balancer (SLB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1qjwo61pqz3ahl******
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the SLB instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateVServerGroupRequestTag[];
  /**
   * @remarks
   * The name of the vServer group.
   * 
   * The name must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.),and underscores (_).
   * 
   * @example
   * Group1
   */
  VServerGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      VServerGroupName: 'VServerGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: 'string',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateVServerGroupRequestTag },
      VServerGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVServerGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The list of backend servers.
   */
  backendServers?: CreateVServerGroupResponseBodyBackendServers;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9DEC9C28-AB05-4DDF-9A78-6B08EC9CE18C
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the vServer group.
   * 
   * @example
   * rsp-cige6******
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      requestId: 'RequestId',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: CreateVServerGroupResponseBodyBackendServers,
      requestId: 'string',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVServerGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVServerGroupResponseBody;
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
      body: CreateVServerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessControlListRequest extends $tea.Model {
  /**
   * @remarks
   * The ACL ID.
   * 
   * This parameter is required.
   * 
   * @example
   * acl-bp1l0kk4gxce43kz******
   */
  aclId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the ACL.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessControlListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 988CB45E-1643-48C0-87B4-928DDF77EA49
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

export class DeleteAccessControlListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAccessControlListResponseBody;
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
      body: DeleteAccessControlListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessLogsDownloadAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The CLB instance ID.
   * 
   * @example
   * lb-uf68ps3rekbljmdb0****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The access log forwarding rule. Parameters:
   * 
   * *   **LogProject**: the name of the project of Log Service.
   * *   **LogStore**: the name of the Logstore of Log Service.
   * *   **LoadBalancerId**: the ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"logProject":"my-project", "LogStore":"my-log-store", "LoadBalancerId":"lb-uf68ps3rekbljmdb0****"}]
   */
  logsDownloadAttributes?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags that are added to the CLB instance. The tags must be key-value pairs that are contained in a JSON dictionary.
   * 
   * @example
   * [{"tagKey":"Key1","tagValue":"Value1"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      logsDownloadAttributes: 'LogsDownloadAttributes',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      logsDownloadAttributes: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessLogsDownloadAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DEC9C28-AB05-4DDF-9A78-6B08EC9C****
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

export class DeleteAccessLogsDownloadAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAccessLogsDownloadAttributeResponseBody;
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
      body: DeleteAccessLogsDownloadAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCACertificateRequest extends $tea.Model {
  /**
   * @remarks
   * The CA certificate ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123157908xxxxxxx_15c73d77203_-986300114_-2110544xxx
   */
  CACertificateId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region of the CA certificates.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      CACertificateId: 'CACertificateId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificateId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCACertificateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
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

export class DeleteCACertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCACertificateResponseBody;
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
      body: DeleteCACertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainExtensionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the additional domain name that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * de-bp1rp7ta1****
   */
  domainExtensionId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Server Load Balancer (SLB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainExtensionId: 'DomainExtensionId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainExtensionId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainExtensionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 149A2470-F010-4437-BF68-343D5099C19D
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

export class DeleteDomainExtensionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDomainExtensionResponseBody;
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
      body: DeleteDomainExtensionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLoadBalancerRequest extends $tea.Model {
  /**
   * @remarks
   * The SLB instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1h66tp5uat8********
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the SLB instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLoadBalancerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
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

export class DeleteLoadBalancerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteLoadBalancerResponseBody;
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
      body: DeleteLoadBalancerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLoadBalancerListenerRequest extends $tea.Model {
  /**
   * @remarks
   * The frontend port that is used by the CLB instance.
   * 
   * Valid values: **1 to 65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The frontend protocol that is used by the CLB instance.
   * 
   * >  This parameter is required if the same port is specified for listeners of different protocols.
   * 
   * @example
   * https
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp13jaf5qli5xmg******
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Classic Load Balancer (CLB) instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * >  The **RegionId** parameter is required if the endpoint of the region is slb.aliyuncs.com.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLoadBalancerListenerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
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

export class DeleteLoadBalancerListenerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteLoadBalancerListenerResponseBody;
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
      body: DeleteLoadBalancerListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMasterSlaveServerGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The primary/secondary server group ID.
   * 
   * >  You cannot delete a primary/secondary server group that is in use.
   * 
   * This parameter is required.
   * 
   * @example
   * rsp-cige6*****
   */
  masterSlaveServerGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Server Load Balancer (SLB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterSlaveServerGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMasterSlaveServerGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DEC9C28-AB05-4DDF-9A78-6B08EC9CE18C
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

export class DeleteMasterSlaveServerGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMasterSlaveServerGroupResponseBody;
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
      body: DeleteMasterSlaveServerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRulesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the Server Load Balancer (SLB) instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of forwarding rules that you want to delete.
   * 
   * >  The RuleIds parameter is required. You can specify up to 10 forwarding rules in each request.
   * 
   * This parameter is required.
   * 
   * @example
   * ["rule-bp1z9ce******","rule-bp1tuc******4"]
   */
  ruleIds?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ruleIds: 'RuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ruleIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRulesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9DEC9C28-AB05-4DDF-9A78-6B08EC9CE18C
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

export class DeleteRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRulesResponseBody;
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
      body: DeleteRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServerCertificateRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region where the Server Load Balancer (SLB) instance is created.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the server certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 123157xxxxxxx_166f8204689_1714763408_709981430
   */
  serverCertificateId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serverCertificateId: 'ServerCertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serverCertificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServerCertificateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
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

export class DeleteServerCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServerCertificateResponseBody;
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
      body: DeleteServerCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTLSCipherPolicyRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the Classic Load Balancer (CLB) instance is created.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the TLS policy.
   * 
   * This parameter is required.
   * 
   * @example
   * tls-bp1lp2076qx4ebridp******
   */
  TLSCipherPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      TLSCipherPolicyId: 'TLSCipherPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      TLSCipherPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTLSCipherPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
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

export class DeleteTLSCipherPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTLSCipherPolicyResponseBody;
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
      body: DeleteTLSCipherPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVServerGroupRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region to which the associated Server Load Balancer (SLB) instance belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the VServer group to be deleted.
   * 
   * >  If the VServer group is in use, it cannot be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * rsp-cige6j*****
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVServerGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9DEC9C28-AB05-4DDF-9A78-6B08EC9CE18C
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

export class DeleteVServerGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVServerGroupResponseBody;
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
      body: DeleteVServerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The remarks of the ACL entry.
   * 
   * @example
   * test
   */
  aclEntryComment?: string;
  /**
   * @remarks
   * The ID of the ACL that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * acl-bp1ut10zzvh1y8dfs****
   */
  aclId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the ACL.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/2401682.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aclEntryComment: 'AclEntryComment',
      aclId: 'AclId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      page: 'Page',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntryComment: 'string',
      aclId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      page: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the access control policy.
   */
  aclEntrys?: DescribeAccessControlListAttributeResponseBodyAclEntrys;
  /**
   * @remarks
   * The ACL ID.
   * 
   * @example
   * acl-bp1ut10zzvh1y8dfs****
   */
  aclId?: string;
  /**
   * @remarks
   * The ACL name.
   * 
   * @example
   * doctest
   */
  aclName?: string;
  /**
   * @remarks
   * The IP version. Valid values: **ipv4** and **ipv6**.
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * The time when the ACL was created. The time follows the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2022-08-31T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The listeners with which the ACL is associated.
   */
  relatedListeners?: DescribeAccessControlListAttributeResponseBodyRelatedListeners;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C9906A1D-86F7-4C9C-A369-54DA42EF206A
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmz3jksig****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags added to the ACL.
   */
  tags?: DescribeAccessControlListAttributeResponseBodyTags;
  /**
   * @remarks
   * The total number of ACL entries.
   * 
   * @example
   * 200
   */
  totalAclEntry?: number;
  static names(): { [key: string]: string } {
    return {
      aclEntrys: 'AclEntrys',
      aclId: 'AclId',
      aclName: 'AclName',
      addressIPVersion: 'AddressIPVersion',
      createTime: 'CreateTime',
      relatedListeners: 'RelatedListeners',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      totalAclEntry: 'TotalAclEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntrys: DescribeAccessControlListAttributeResponseBodyAclEntrys,
      aclId: 'string',
      aclName: 'string',
      addressIPVersion: 'string',
      createTime: 'string',
      relatedListeners: DescribeAccessControlListAttributeResponseBodyRelatedListeners,
      requestId: 'string',
      resourceGroupId: 'string',
      tags: DescribeAccessControlListAttributeResponseBodyTags,
      totalAclEntry: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAccessControlListAttributeResponseBody;
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
      body: DescribeAccessControlListAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListsRequest extends $tea.Model {
  /**
   * @remarks
   * The ACL name. The ACL name. The name must be 1 to 80 characters in length, and can contain letters, digits, periods (.), hyphens (-), forward slashes (/), and underscores (_). The name of each ACL must be unique within a region. Fuzzy match is supported.
   * 
   * @example
   * rule1
   */
  aclName?: string;
  /**
   * @remarks
   * The IP version of the Classic Load Balancer (CLB) instance with which the ACL is associated. Valid values:
   * 
   * *   **ipv4**
   * *   **ipv6**
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the ACL.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-atstuj3rtop4****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   */
  tag?: DescribeAccessControlListsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      aclName: 'AclName',
      addressIPVersion: 'AddressIPVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclName: 'string',
      addressIPVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeAccessControlListsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListsResponseBody extends $tea.Model {
  /**
   * @remarks
   * A list of ACLs.
   */
  acls?: DescribeAccessControlListsResponseBodyAcls;
  /**
   * @remarks
   * The number of ACLs on the current page.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The number of the returned page. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3CB646EF-6147-4566-A9D9-CE8FBE86F971
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of ACLs.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      acls: 'Acls',
      count: 'Count',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acls: DescribeAccessControlListsResponseBodyAcls,
      count: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAccessControlListsResponseBody;
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
      body: DescribeAccessControlListsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessLogsDownloadAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The CLB instance ID.
   * 
   * @example
   * lb-bp1b6c719dfa08ex*****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The type of access log. Set the value to **layer7**, which specifies Layer 7 access logs.
   * 
   * @example
   * layer7
   */
  logType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags that are added to the CLB instance. The tags must be key-value pairs that are contained in a JSON dictionary.
   * 
   * You can specify up to 10 tags in each call.
   * 
   * @example
   * [{"tagKey":"Key1","tagValue":"Value1"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      logType: 'LogType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      logType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessLogsDownloadAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The configuration of the access log.
   */
  logsDownloadAttributes?: DescribeAccessLogsDownloadAttributeResponseBodyLogsDownloadAttributes;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8B9DB03B-ED39-5DB8-9C9F-1ED5F548D61E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      logsDownloadAttributes: 'LogsDownloadAttributes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logsDownloadAttributes: DescribeAccessLogsDownloadAttributeResponseBodyLogsDownloadAttributes,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessLogsDownloadAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAccessLogsDownloadAttributeResponseBody;
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
      body: DescribeAccessLogsDownloadAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the IP address.
   * 
   * Valid values: **ipv4 and ipv6**.
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * The network type.
   * 
   * Valid values: **vpc, classic-internet, and classic-intranet**.
   * 
   * vpc: an internal Classic Load Balancer (CLB) instance that is deployed in a virtual private cloud (VPC).
   * 
   * classic_internet: a public-facing CLB instance.
   * 
   * classic_intranet: an internal CLB instance that is deployed in a classic network.
   * 
   * @example
   * vpc
   */
  addressType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      addressIPVersion: 'AddressIPVersion',
      addressType: 'AddressType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIPVersion: 'string',
      addressType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The zones and the supported resources.
   */
  availableResources?: DescribeAvailableResourceResponseBodyAvailableResources;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 173B0EEA-22ED-4EE2-91F9-3A1CDDFFBBBA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableResources: 'AvailableResources',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResources: DescribeAvailableResourceResponseBodyAvailableResources,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAvailableResourceResponseBody;
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
      body: DescribeAvailableResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificatesRequest extends $tea.Model {
  /**
   * @remarks
   * The CA certificate ID.
   * 
   * @example
   * 139a00604bd-cn-east-hangzho****
   */
  CACertificateId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region of the CA certificates.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags of the CA certificates.
   */
  tag?: DescribeCACertificatesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      CACertificateId: 'CACertificateId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificateId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeCACertificatesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificatesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the CA certificate.
   */
  CACertificates?: DescribeCACertificatesResponseBodyCACertificates;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      CACertificates: 'CACertificates',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificates: DescribeCACertificatesResponseBodyCACertificates,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCACertificatesResponseBody;
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
      body: DescribeCACertificatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainExtensionAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the additional certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * de-bp1rp7ta1****
   */
  domainExtensionId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the Server Load Balancer (SLB) instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainExtensionId: 'DomainExtensionId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainExtensionId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainExtensionAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the additional certificate.
   * 
   * @example
   * de-bp1rp7ta1****
   */
  domainExtensionId?: string;
  /**
   * @remarks
   * The frontend port of the HTTPS listener that is configured for the SLB instance. Valid values: **1** to **65535**.
   * 
   * @example
   * 443
   */
  listenerPort?: number;
  /**
   * @remarks
   * The ID of the SLB instance.
   * 
   * @example
   * lb-bp1o94dp5i6*****earr9g6d1l
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 48C1B671-C6DB-4DDE-9B30-10557E36CDE0
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the server certificate used by the domain name.
   * 
   * @example
   * 231579085529123_166f82******_1714763408_709981430
   */
  serverCertificateId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      domainExtensionId: 'DomainExtensionId',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      requestId: 'RequestId',
      serverCertificateId: 'ServerCertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      domainExtensionId: 'string',
      listenerPort: 'number',
      loadBalancerId: 'string',
      requestId: 'string',
      serverCertificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainExtensionAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainExtensionAttributeResponseBody;
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
      body: DescribeDomainExtensionAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainExtensionsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the additional certificate.
   * 
   * @example
   * de-bp1rp7ta1****
   */
  domainExtensionId?: string;
  /**
   * @remarks
   * The frontend port of the HTTPS listener that is configured for the Classic Load Balancer (CLB) instance. Valid values: **1 to 65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 443
   */
  listenerPort?: number;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1b6c719dfa08ex****
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the CLB instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainExtensionId: 'DomainExtensionId',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainExtensionId: 'string',
      listenerPort: 'number',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainExtensionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The list of additional certificates.
   */
  domainExtensions?: DescribeDomainExtensionsResponseBodyDomainExtensions;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 48C1B671-C6DB-4DDE-9B30-10557E36CDE0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainExtensions: 'DomainExtensions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainExtensions: DescribeDomainExtensionsResponseBodyDomainExtensions,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainExtensionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainExtensionsResponseBody;
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
      body: DescribeDomainExtensionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The frontend port that is used by the SLB instance. Valid values: **1 to 65535**.
   * 
   * >  If you do not specify this parameter, the health status of all ports is returned.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The frontend protocol that is used by the SLB instance.
   * 
   * @example
   * https
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The ID of the Classic Load Balancer (CLB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1qjwo61pqz3ah****
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the SLB instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The backend servers.
   */
  backendServers?: DescribeHealthStatusResponseBodyBackendServers;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: DescribeHealthStatusResponseBodyBackendServers,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHealthStatusResponseBody;
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
      body: DescribeHealthStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighDefinationMonitorRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where you want to query the configuration of fine-grained monitoring.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags of the logs. The tags must be key-value pairs that are contained in a JSON dictionary.
   * 
   * @example
   * [{"tagKey":"Key1","tagValue":"Value1"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighDefinationMonitorResponseBody extends $tea.Model {
  /**
   * @remarks
   * The name of the Log Service project.
   * 
   * @example
   * my-project
   */
  logProject?: string;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * @example
   * my-log-store
   */
  logStore?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2F398FF5-B349-5C01-8638-8E9A0BF1DBE6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      logProject: 'LogProject',
      logStore: 'LogStore',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logProject: 'string',
      logStore: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighDefinationMonitorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHighDefinationMonitorResponseBody;
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
      body: DescribeHighDefinationMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListenerAccessControlAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The frontend port that is used by the CLB instance.
   * 
   * Valid values: **1 to 65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The frontend protocol that is used by the CLB instance.
   * 
   * > This parameter is required if the same port is specified for listeners of different protocols.
   * 
   * @example
   * https
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The CLB instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-8vb86hxixo8lvsja8****
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region where the Classic Load Balancer (CLB) instance is created.
   * 
   * You can query the region ID from the [Regions and zones](https://help.aliyun.com/document_detail/40654.html) list or by calling the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListenerAccessControlAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the whitelist is enabled. Valid values:
   * 
   * *   **open_white_list**: the whitelist is enabled.
   * *   **close**: the whitelist is disabled.
   * 
   * @example
   * open_white_list
   */
  accessControlStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  /**
   * @remarks
   * The queried ACLs.
   * 
   * @example
   * 192.168.XX.XX
   */
  sourceItems?: string;
  static names(): { [key: string]: string } {
    return {
      accessControlStatus: 'AccessControlStatus',
      requestId: 'RequestId',
      sourceItems: 'SourceItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlStatus: 'string',
      requestId: 'string',
      sourceItems: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListenerAccessControlAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeListenerAccessControlAttributeResponseBody;
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
      body: DescribeListenerAccessControlAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The CLB instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1b6c719dfa08ex****
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The service IP address of the CLB instance.
   * 
   * @example
   * 42.XX.XX.6
   */
  address?: string;
  /**
   * @remarks
   * The version of the IP address. Valid values: **ipv4** and **ipv6**.
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * The address type of the CLB instance.
   * 
   * @example
   * internet
   */
  addressType?: string;
  /**
   * @remarks
   * The timestamp generated when the CLB instance is released.
   * 
   * @example
   * 1513947075000
   */
  autoReleaseTime?: number;
  /**
   * @remarks
   * The backend servers of the CLB instance.
   */
  backendServers?: DescribeLoadBalancerAttributeResponseBodyBackendServers;
  /**
   * @remarks
   * The maximum bandwidth of the Internet-facing CLB instance that is billed on a pay-by-bandwidth basis.
   * 
   * @example
   * 5
   */
  bandwidth?: number;
  /**
   * @remarks
   * The time when the CLB instance was created. The time is in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2017-08-31T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The timestamp generated when the CA certificate is uploaded.
   * 
   * @example
   * 1504147745000
   */
  createTimeStamp?: number;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled for the CLB instance.
   * 
   * Valid values: **on** and **off**.
   * 
   * @example
   * off
   */
  deleteProtection?: string;
  /**
   * @remarks
   * The time when the CLB instance expires.
   * 
   * @example
   * 2022-09-08T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The timestamp that indicates the expiration time of the CLB instance.
   * 
   * @example
   * 32493801600000
   */
  endTimeStamp?: number;
  /**
   * @remarks
   * The metering method of the CLB instance. Valid values:
   * 
   * *   **PayBySpec** (default)
   * *   **PayByCLCU**
   * 
   * > This parameter is available only on the China site and takes effect only when **PayType** is set to **PayOnDemand**.
   * 
   * @example
   * PayBySpec
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of the Internet-facing CLB instance. Valid values:
   * 
   * *   **paybytraffic**
   * *   **paybybandwidth**
   * 
   * @example
   * paybytraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The frontend port used by the CLB instance.
   */
  listenerPorts?: DescribeLoadBalancerAttributeResponseBodyListenerPorts;
  /**
   * @remarks
   * The ports or protocols of the listeners.
   */
  listenerPortsAndProtocal?: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocal;
  /**
   * @remarks
   * The ports or protocols of the listeners.
   */
  listenerPortsAndProtocol?: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocol;
  /**
   * @remarks
   * The CLB instance ID.
   * 
   * @example
   * lb-bp1b6c719dfa08ex****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The name of the CLB instance.
   * 
   * @example
   * lb-instance-test
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The specification of the CLB instance.
   * 
   * >  Pay-as-you-go CLB instances are not subject to specifications. By default, **slb.lcu.elastic** is returned.
   * 
   * @example
   * slb.s1.small
   */
  loadBalancerSpec?: string;
  /**
   * @remarks
   * The status of the CLB instance. Valid values:
   * 
   * *   **inactive**: The CLB instance is disabled. CLB instances in the inactive state do not forward traffic.
   * *   **active**: The CLB instance is running as expected. Newly created CLB instances are in the **active** state by default.
   * *   **locked**: The CLB instance is locked. CLB instances may be locked due to overdue payments or other reasons.
   * 
   * @example
   * active
   */
  loadBalancerStatus?: string;
  /**
   * @remarks
   * The ID of the primary zone to which the CLB instance belongs.
   * 
   * @example
   * cn-hangzhou-b
   */
  masterZoneId?: string;
  /**
   * @remarks
   * The reason why the configuration read-only mode is enabled. The value is 1 to 80 characters in length. It starts with a letter and can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * >  This parameter is valid only when **ModificationProtectionStatus** is set to **ConsoleProtection**.
   * 
   * @example
   * Managed instance
   */
  modificationProtectionReason?: string;
  /**
   * @remarks
   * Indicates whether the configuration read-only mode is enabled. Valid values:
   * 
   * *   **NonProtection**: The configuration read-only mode is disabled. After you disable the configuration read-only mode, the value of **ModificationProtectionReason** is cleared.
   * *   **ConsoleProtection**: The configuration read-only mode is enabled.
   * 
   * >  If this parameter is set to **ConsoleProtection**, you cannot modify instance configurations in the CLB console. However, you can modify instance configurations by calling API operations.
   * 
   * @example
   * ConsoleProtection
   */
  modificationProtectionStatus?: string;
  /**
   * @remarks
   * The network type of the CLB instance.
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The billing method of the CLB instance. Valid values:
   * 
   * *   Only **PayOnDemand** may be returned, which indicates the pay-as-you-go billing method.
   * 
   * @example
   * PayOnDemand
   */
  payType?: string;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The alias of the region to which the CLB instance belongs.
   * 
   * @example
   * hangzhou
   */
  regionIdAlias?: string;
  /**
   * @remarks
   * The auto-renewal cycle. Valid values: **Year** and **Month**. Default value: Month.
   * 
   * >  This parameter is valid only if you create a subscription CLB instance on the Alibaba Cloud China site. In this case, **PayType** must be set to **PrePay** and **RenewalStatus** must be set to **AutoRenewal**.
   * 
   * @example
   * Month
   */
  renewalCycUnit?: string;
  /**
   * @remarks
   * The auto-renewal duration. This parameter is valid only if **RenewalStatus** is set to **AutoRenewal**.
   * 
   * *   Valid values when **PeriodUnit** is set to **Year**: **1**~**5**.
   * 
   * *   Valid values when **PeriodUnit** is set to **Month**: **1**~ **9**.
   * 
   * > This parameter is valid only when you create a subscription CLB instance on the Alibaba Cloud China site. In this case, the **PayType** parameter must be set to **PrePay**.
   * 
   * @example
   * 1
   */
  renewalDuration?: number;
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled. Valid values:
   * 
   * *   **AutoRenewal**: Auto-renewal is enabled.
   * 
   * *   **Normal**: Auto-renewal is disabled. You must manually renew the CLB instance.
   * 
   * *   **NotRenewal**: The CLB instance will not be renewed upon expiration. If this value is returned, the system does not send notifications until three days before the expiration date.
   * 
   *     **
   * 
   *     **Note** This parameter is valid only when you create a subscription CLB instance on the Alibaba Cloud China site. In this case, **PayType** must be set to **PrePay**.
   * 
   * @example
   * AutoRenewal
   */
  renewalStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the secondary zone to which the CLB instance belongs.
   * 
   * @example
   * cn-hangzhou-d
   */
  slaveZoneId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeLoadBalancerAttributeResponseBodyTags;
  /**
   * @remarks
   * The ID of the vSwitch to which the internal-facing CLB instance belongs.
   * 
   * @example
   * vsw-255ecrwq5****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) where the internal-facing CLB instance is deployed.
   * 
   * @example
   * vpc-25dvzy9f8****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressIPVersion: 'AddressIPVersion',
      addressType: 'AddressType',
      autoReleaseTime: 'AutoReleaseTime',
      backendServers: 'BackendServers',
      bandwidth: 'Bandwidth',
      createTime: 'CreateTime',
      createTimeStamp: 'CreateTimeStamp',
      deleteProtection: 'DeleteProtection',
      endTime: 'EndTime',
      endTimeStamp: 'EndTimeStamp',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      listenerPorts: 'ListenerPorts',
      listenerPortsAndProtocal: 'ListenerPortsAndProtocal',
      listenerPortsAndProtocol: 'ListenerPortsAndProtocol',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerSpec: 'LoadBalancerSpec',
      loadBalancerStatus: 'LoadBalancerStatus',
      masterZoneId: 'MasterZoneId',
      modificationProtectionReason: 'ModificationProtectionReason',
      modificationProtectionStatus: 'ModificationProtectionStatus',
      networkType: 'NetworkType',
      payType: 'PayType',
      regionId: 'RegionId',
      regionIdAlias: 'RegionIdAlias',
      renewalCycUnit: 'RenewalCycUnit',
      renewalDuration: 'RenewalDuration',
      renewalStatus: 'RenewalStatus',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      slaveZoneId: 'SlaveZoneId',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressIPVersion: 'string',
      addressType: 'string',
      autoReleaseTime: 'number',
      backendServers: DescribeLoadBalancerAttributeResponseBodyBackendServers,
      bandwidth: 'number',
      createTime: 'string',
      createTimeStamp: 'number',
      deleteProtection: 'string',
      endTime: 'string',
      endTimeStamp: 'number',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      listenerPorts: DescribeLoadBalancerAttributeResponseBodyListenerPorts,
      listenerPortsAndProtocal: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocal,
      listenerPortsAndProtocol: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocol,
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerSpec: 'string',
      loadBalancerStatus: 'string',
      masterZoneId: 'string',
      modificationProtectionReason: 'string',
      modificationProtectionStatus: 'string',
      networkType: 'string',
      payType: 'string',
      regionId: 'string',
      regionIdAlias: 'string',
      renewalCycUnit: 'string',
      renewalDuration: 'number',
      renewalStatus: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      slaveZoneId: 'string',
      tags: DescribeLoadBalancerAttributeResponseBodyTags,
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLoadBalancerAttributeResponseBody;
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
      body: DescribeLoadBalancerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPListenerAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The frontend port that is used by the CLB instance.
   * 
   * Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The CLB instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1uaunez0uho0zf0****
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPListenerAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the network ACL that is associated with a listener.
   * 
   * > This parameter is returned when **AclStatus** is set to **on**.
   * 
   * @example
   * on
   */
  aclId?: string;
  aclIds?: DescribeLoadBalancerHTTPListenerAttributeResponseBodyAclIds;
  /**
   * @remarks
   * Indicates whether access control is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  aclStatus?: string;
  /**
   * @remarks
   * The type of the ACL. Valid values:
   * 
   * *   **white**: a whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. Whitelists apply to scenarios where you want to allow only specific IP addresses to access an application. Your service may be adversely affected if the whitelist is not properly configured. If a whitelist is configured, only requests from IP addresses that are added to the whitelist are forwarded by the listener.
   * 
   * If you enable a whitelist but do not add an IP address to the ACL, the listener forwards all requests.
   * 
   * *   **black**: a blacklist. All requests from the IP addresses or CIDR blocks in the network ACL are rejected. Blacklists apply to scenarios where you want to block access from specified IP addresses to an application.
   * 
   * If a blacklist is configured for a listener but no IP address is added to the blacklist, the listener forwards all requests.
   * 
   * > This parameter is required when **AclStatus** is set to **on**.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The backend port that is used by the CLB instance.
   * 
   * @example
   * 80
   */
  backendServerPort?: number;
  /**
   * @remarks
   * The maximum bandwidth of the listener. Unit: Mbit/s.
   * 
   * *   **-1**: If -1 is returned, it indicates that the bandwidth of the listener is unlimited.
   * *   **1 to 5120**: If a value from 1 to 5120 is returned, the value indicates the maximum bandwidth of the listener. The sum of the maximum bandwidth of all listeners added to a CLB instance does not exceed the maximum bandwidth of the CLB instance.
   * 
   * @example
   * -1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The cookie that is configured on the server.
   * 
   * @example
   * B490B5EBF6F3CD402E515D22BCDA1598
   */
  cookie?: string;
  /**
   * @remarks
   * The timeout period of a cookie. Unit: seconds.
   * 
   * @example
   * 500
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * The name of the listener.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The listener port that is used to redirect HTTP requests to HTTPS.
   * 
   * >  If the **ListenerForward** parameter is set to **off**, this parameter is not displayed.
   * 
   * @example
   * 80
   */
  forwardPort?: number;
  /**
   * @remarks
   * Indicates whether `Gzip` compression is enabled to compress specific types of files. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  gzip?: string;
  /**
   * @remarks
   * Indicates whether the health check feature is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  healthCheck?: string;
  /**
   * @remarks
   * The port that is used for health checks.
   * 
   * > This parameter takes effect only when **HealthCheck** is set to **on**.
   * 
   * @example
   * 8080
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name that you want to use for health checks.
   * 
   * @example
   * www.domain.com
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code for a successful health check.
   * 
   * @example
   * http_2xx,http_3xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The interval at which health checks are performed. Unit: seconds.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The health check method used by HTTP listeners. Valid values: **head** and **get**.
   * 
   * > This parameter is returned when **HealthCheck** is set to **on**.
   * 
   * @example
   * get
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The timeout period of each health check. Unit: seconds.
   * 
   * @example
   * 3
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The URL path that is used for health checks.
   * 
   * The URI must be 1 to 80 characters in length, and can contain only digits, letters, hyphens (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number signs (#), and ampersands (&). The URI must start with a forward slash (/) but cannot be a single forward slash (/).
   * 
   * @example
   * /test/index.html
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The healthy threshold.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The timeout period of an idle connection. Unit: seconds.
   * 
   * Default value: **15**. Valid values: **1 to 60**.
   * 
   * If no request is received within the specified timeout period, CLB closes the connection. When a request is received, CLB establishes a new connection.
   * 
   * @example
   * 2
   */
  idleTimeout?: number;
  /**
   * @remarks
   * Indicates whether HTTP-to-HTTPS redirection is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  listenerForward?: string;
  /**
   * @remarks
   * The frontend port that is used by the CLB instance.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The CLB instance ID.
   * 
   * @example
   * lb-bp1uaunez0uho0zf0****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  /**
   * @remarks
   * The timeout period of a request. Unit: seconds.
   * 
   * Default value: **60**. Valid values: **1 to 180**.
   * 
   * If no response is received from a backend server within the specified timeout period, CLB returns the HTTP 504 status code to the client.
   * 
   * @example
   * 34
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The list of forwarding rules.
   */
  rules?: DescribeLoadBalancerHTTPListenerAttributeResponseBodyRules;
  /**
   * @remarks
   * The routing algorithm. Valid values:
   * 
   * *   **wrr**: Backend servers that have higher weights receive more requests than backend servers that have lower weights.
   * *   \\*\\* rr\\*\\*: Requests are sequentially distributed to backend servers.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * Indicates whether the listener is in the Secure state. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  securityStatus?: string;
  /**
   * @remarks
   * The status of the listener. Valid values:
   * 
   * *   **running**
   * *   **stopped**
   * 
   * @example
   * stopped
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether session persistence is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  stickySession?: string;
  /**
   * @remarks
   * The method that is used to handle a cookie.
   * 
   * Valid values: **insert** and **server**.
   * 
   * *   **insert**: inserts a cookie.
   * 
   *     CLB inserts a session cookie (SERVERID) into the first HTTP or HTTPS response that is sent to a client. Subsequent requests to CLB carry this cookie, and CLB determines the destination servers of the requests based on the cookies.
   * 
   * *   **server**: rewrites a cookie.
   * 
   *     When CLB detects a user-defined cookie, it overwrites the original cookie with the user-defined cookie. The next request from the client carries the user-defined cookie, and the listener forwards this request to the recorded backend server.
   * 
   * > This parameter is required when **StickySession** is set to **on**.
   * 
   * @example
   * insert
   */
  stickySessionType?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeLoadBalancerHTTPListenerAttributeResponseBodyTags;
  /**
   * @remarks
   * The unhealthy threshold.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * The ID of the associated server group.
   * 
   * @example
   * rsp-cige6j****
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-For` header is used to preserve the real IP address of the client. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_ClientSrcPort` header is used to retrieve the client port. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_ClientSrcPort?: string;
  /**
   * @remarks
   * Indicates whether the `SLB-ID` header is used to retrieve the ID of the CLB instance. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_SLBID?: string;
  /**
   * @remarks
   * Indicates whether the `SLB-IP` header is used to retrieve the virtual IP address requested by the client. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_SLBIP?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_SLBPORT` header is used to retrieve the listener port of the CLB instance. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_SLBPORT?: string;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-Proto` header is used to retrieve the listener protocol. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_proto?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclIds: 'AclIds',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      description: 'Description',
      forwardPort: 'ForwardPort',
      gzip: 'Gzip',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      idleTimeout: 'IdleTimeout',
      listenerForward: 'ListenerForward',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      requestId: 'RequestId',
      requestTimeout: 'RequestTimeout',
      rules: 'Rules',
      scheduler: 'Scheduler',
      securityStatus: 'SecurityStatus',
      status: 'Status',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      tags: 'Tags',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroupId: 'VServerGroupId',
      XForwardedFor: 'XForwardedFor',
      XForwardedFor_ClientSrcPort: 'XForwardedFor_ClientSrcPort',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      XForwardedFor_SLBPORT: 'XForwardedFor_SLBPORT',
      XForwardedFor_proto: 'XForwardedFor_proto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclIds: DescribeLoadBalancerHTTPListenerAttributeResponseBodyAclIds,
      aclStatus: 'string',
      aclType: 'string',
      backendServerPort: 'number',
      bandwidth: 'number',
      cookie: 'string',
      cookieTimeout: 'number',
      description: 'string',
      forwardPort: 'number',
      gzip: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      idleTimeout: 'number',
      listenerForward: 'string',
      listenerPort: 'number',
      loadBalancerId: 'string',
      requestId: 'string',
      requestTimeout: 'number',
      rules: DescribeLoadBalancerHTTPListenerAttributeResponseBodyRules,
      scheduler: 'string',
      securityStatus: 'string',
      status: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      tags: DescribeLoadBalancerHTTPListenerAttributeResponseBodyTags,
      unhealthyThreshold: 'number',
      VServerGroupId: 'string',
      XForwardedFor: 'string',
      XForwardedFor_ClientSrcPort: 'string',
      XForwardedFor_SLBID: 'string',
      XForwardedFor_SLBIP: 'string',
      XForwardedFor_SLBPORT: 'string',
      XForwardedFor_proto: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPListenerAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLoadBalancerHTTPListenerAttributeResponseBody;
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
      body: DescribeLoadBalancerHTTPListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPSListenerAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The frontend port that is used by the CLB instance.
   * 
   * Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The CLB instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1mxu5r8lau****
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPSListenerAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the network ACL that is associated with a listener.
   * 
   * > This parameter is required when **AclStatus** is set to **on**.
   * 
   * @example
   * nacl-a2do9e413e0spzasx****
   */
  aclId?: string;
  aclIds?: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyAclIds;
  /**
   * @remarks
   * Indicates whether access control is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  aclStatus?: string;
  /**
   * @remarks
   * The type of the access control list (ACL). Valid values:
   * 
   * *   **white**: a whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. Whitelists apply to scenarios where you want to allow only specific IP addresses to access an application. Your service may be adversely affected if the whitelist is not properly configured. If a whitelist is configured, only requests from IP addresses that are added to the whitelist are forwarded by the listener.
   * 
   * If you enable a whitelist but do not add an IP address to the ACL, the listener forwards all requests.
   * 
   * *   **black**: a blacklist. All requests from the IP addresses or CIDR blocks in the network ACL are rejected. Blacklists apply to scenarios where you want to block access from specified IP addresses to an application.
   * 
   * If a blacklist is configured for a listener but no IP address is added to the blacklist, the listener forwards all requests.
   * 
   * > This parameter is required when **AclStatus** is set to **on**.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The backend port that is used by the CLB instance.
   * 
   * @example
   * 8080
   */
  backendServerPort?: number;
  /**
   * @remarks
   * The maximum bandwidth of the listener. Unit: Mbit/s.
   * 
   * @example
   * -1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The ID of the certification authority (CA) certificate.
   * 
   * @example
   * idkp-234-cn-test-0**
   */
  CACertificateId?: string;
  /**
   * @remarks
   * The cookie that is configured on the server.
   * 
   * @example
   * B490B5EBF6F3CD402E515D22BCDA1598
   */
  cookie?: string;
  /**
   * @remarks
   * The timeout period of a cookie.
   * 
   * @example
   * 500
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * The name of the listener.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * A list of additional certificates.
   */
  domainExtensions?: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyDomainExtensions;
  /**
   * @remarks
   * Indicates whether `HTTP/2` is used. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  enableHttp2?: string;
  /**
   * @remarks
   * Indicates whether `Gzip` compression is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  gzip?: string;
  /**
   * @remarks
   * Indicates whether the health check feature is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  healthCheck?: string;
  /**
   * @remarks
   * The port that is used for health checks.
   * 
   * > This parameter is required when **HealthCheck** is set to **on**.
   * 
   * @example
   * 8080
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name that you want to use for health checks.
   * 
   * @example
   * www.test.com
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code for a successful health check.
   * 
   * @example
   * http_2xx,http_3xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The interval at which health checks are performed. Unit: seconds.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The health check method used by HTTP listeners. Valid values: **head** and **get**.
   * 
   * > This parameter is available only when **HealthCheck** is set to **on**.
   * 
   * @example
   * get
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The maximum timeout period of a health check. Unit: seconds.
   * 
   * @example
   * 3
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The URL path that is used for health checks.
   * 
   * @example
   * /test/index.html
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The healthy threshold.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The timeout period of an idle connection. Valid values: **1** to **60**. Default value: **15**. Unit: seconds.
   * 
   * If no request is received within the specified timeout period, CLB closes the connection. When a request is received, CLB establishes a new connection.
   * 
   * @example
   * 23
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The frontend port that is used by the CLB instance.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The CLB instance ID.
   * 
   * @example
   * lb-bp1mxu5r8lau****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF3********
   */
  requestId?: string;
  /**
   * @remarks
   * The timeout period of a request. Valid values: **1** to **180**. Default value: **60**. Unit: seconds.
   * 
   * If no response is received from a backend server within the specified timeout period, CLB returns the HTTP 504 status code to the client.
   * 
   * @example
   * 43
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The list of forwarding rules that are associated with the listener.
   */
  rules?: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyRules;
  /**
   * @remarks
   * The routing algorithm. Valid values: **wrr** and **rr**.
   * 
   * *   **wrr**: Backend servers that have higher weights receive more requests than backend servers that have lower weights.
   * *   **rr**: Requests are distributed to backend servers in sequence.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * Indicates whether the listener is in the Secure state. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  securityStatus?: string;
  /**
   * @remarks
   * The ID of the server certificate.
   * 
   * @example
   * idkp-123-cn-test-0**
   */
  serverCertificateId?: string;
  /**
   * @remarks
   * The status of the listener. Valid values:
   * 
   * *   **running**
   * *   **stopped**
   * 
   * @example
   * stopped
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether session persistence is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  stickySession?: string;
  /**
   * @remarks
   * The method that is used to handle a cookie.
   * 
   * Valid values: **insert** and **server**.
   * 
   * *   **insert**: inserts a cookie.
   * 
   *     CLB inserts a cookie (SERVERID) into the first HTTP or HTTPS response packet that is sent to a client. The next request from the client will contain this cookie, and the listener will distribute this request to the recorded backend server.
   * 
   * *   **server**: rewrites a cookie.
   * 
   *     When CLB detects a user-defined cookie, it overwrites the original cookie with the user-defined cookie. The next request from the client carries the user-defined cookie, and the listener will distribute the request to the recorded backend server.
   * 
   * @example
   * insert
   */
  stickySessionType?: string;
  /**
   * @remarks
   * The Transport Layer Security (TLS) security policy for a high-performance CLB instance.
   * 
   * Each security policy contains TLS protocol versions and cipher suites available for HTTPS. Valid values:
   * 
   * *   **tls_cipher_policy_1_0**:
   * 
   *     Supported TLS versions: TLS 1.0, TLS 1.1, and TLS 1.2
   * 
   *     Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA
   * 
   * *   **tls_cipher_policy_1_1**:
   * 
   *     Supported TLS versions: TLS 1.1 and TLS 1.2
   * 
   *     Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA
   * 
   * *   **tls_cipher_policy_1_2**
   * 
   *     Supported TLS version: TLS 1.2
   * 
   *     Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA
   * 
   * *   **tls_cipher_policy_1_2_strict**
   * 
   *     Supported TLS version: TLS 1.2
   * 
   *     Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, ECDHE-RSA-AES128-SHA, and ECDHE-RSA-AES256-SHA
   * 
   * *   **tls_cipher_policy_1_2_strict_with_1_3**
   * 
   *     Supported TLS versions: TLS 1.2 and TLS 1.3
   * 
   *     Supported cipher suites: TLS_AES_128_GCM_SHA256, TLS_AES_256_GCM_SHA384, TLS_CHACHA20_POLY1305_SHA256, TLS_AES_128_CCM_SHA256, TLS_AES_128_CCM_8_SHA256, ECDHE-ECDSA-AES128-GCM-SHA256, ECDHE-ECDSA-AES256-GCM-SHA384, ECDHE-ECDSA-AES128-SHA256, ECDHE-ECDSA-AES256-SHA384, ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, ECDHE-ECDSA-AES128-SHA, ECDHE-ECDSA-AES256-SHA, ECDHE-RSA-AES128-SHA, and ECDHE-RSA-AES256-SHA
   * 
   * @example
   * tls_cipher_policy_1_0
   */
  TLSCipherPolicy?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyTags;
  /**
   * @remarks
   * The unhealthy threshold.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * The ID of the associated server group.
   * 
   * @example
   * rsp-cige6j5e********
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-For` header is used to retrieve client IP addresses. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_ClientCertClientVerify` header is used to retrieve the verification result of the client certificate. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_ClientCertClientVerify?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_ClientCertFingerprint` header is used to retrieve the fingerprint of the client certificate. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_ClientCertFingerprint?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_ClientCertIssuerDN` header is used to retrieve information about the authority that issues the client certificate. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_ClientCertIssuerDN?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_ClientCertSubjectDN` header is used to retrieve information about the owner of the client certificate. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_ClientCertSubjectDN?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_ClientSrcPort` header is used to retrieve the client port. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_ClientSrcPort?: string;
  /**
   * @remarks
   * Indicates whether the `SLB-ID` header is used to retrieve the ID of the ALB instance. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_SLBID?: string;
  /**
   * @remarks
   * Indicates whether the `SLB-IP` header is used to retrieve the virtual IP address requested by the client. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_SLBIP?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_SLBPORT` header is used to retrieve the listening port. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_SLBPORT?: string;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-Proto` header is used to retrieve the listener protocol. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_proto?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclIds: 'AclIds',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      CACertificateId: 'CACertificateId',
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      description: 'Description',
      domainExtensions: 'DomainExtensions',
      enableHttp2: 'EnableHttp2',
      gzip: 'Gzip',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      idleTimeout: 'IdleTimeout',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      requestId: 'RequestId',
      requestTimeout: 'RequestTimeout',
      rules: 'Rules',
      scheduler: 'Scheduler',
      securityStatus: 'SecurityStatus',
      serverCertificateId: 'ServerCertificateId',
      status: 'Status',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      TLSCipherPolicy: 'TLSCipherPolicy',
      tags: 'Tags',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroupId: 'VServerGroupId',
      XForwardedFor: 'XForwardedFor',
      XForwardedFor_ClientCertClientVerify: 'XForwardedFor_ClientCertClientVerify',
      XForwardedFor_ClientCertFingerprint: 'XForwardedFor_ClientCertFingerprint',
      XForwardedFor_ClientCertIssuerDN: 'XForwardedFor_ClientCertIssuerDN',
      XForwardedFor_ClientCertSubjectDN: 'XForwardedFor_ClientCertSubjectDN',
      XForwardedFor_ClientSrcPort: 'XForwardedFor_ClientSrcPort',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      XForwardedFor_SLBPORT: 'XForwardedFor_SLBPORT',
      XForwardedFor_proto: 'XForwardedFor_proto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclIds: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyAclIds,
      aclStatus: 'string',
      aclType: 'string',
      backendServerPort: 'number',
      bandwidth: 'number',
      CACertificateId: 'string',
      cookie: 'string',
      cookieTimeout: 'number',
      description: 'string',
      domainExtensions: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyDomainExtensions,
      enableHttp2: 'string',
      gzip: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      idleTimeout: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      requestId: 'string',
      requestTimeout: 'number',
      rules: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyRules,
      scheduler: 'string',
      securityStatus: 'string',
      serverCertificateId: 'string',
      status: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      TLSCipherPolicy: 'string',
      tags: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyTags,
      unhealthyThreshold: 'number',
      VServerGroupId: 'string',
      XForwardedFor: 'string',
      XForwardedFor_ClientCertClientVerify: 'string',
      XForwardedFor_ClientCertFingerprint: 'string',
      XForwardedFor_ClientCertIssuerDN: 'string',
      XForwardedFor_ClientCertSubjectDN: 'string',
      XForwardedFor_ClientSrcPort: 'string',
      XForwardedFor_SLBID: 'string',
      XForwardedFor_SLBIP: 'string',
      XForwardedFor_SLBPORT: 'string',
      XForwardedFor_proto: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPSListenerAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLoadBalancerHTTPSListenerAttributeResponseBody;
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
      body: DescribeLoadBalancerHTTPSListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerListenersRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the listener.
   * 
   * @example
   * HTTPS_443
   * 
   * **if can be null:**
   * true
   */
  description?: string;
  /**
   * @remarks
   * The frontend port that is used by the CLB instance.
   * 
   * @example
   * 443
   * 
   * **if can be null:**
   * true
   */
  listenerPort?: number;
  /**
   * @remarks
   * The protocol used by the listener. Valid values:
   * 
   * *   **tcp**
   * *   **udp**
   * *   **http**
   * *   **https**
   * 
   * @example
   * http
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The ID of the CLB instance. You can specify at most 10 IDs.
   * 
   * @example
   * lb-123wrwer
   */
  loadBalancerId?: string[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: **1** to **100**. If you do not specify this parameter, the default value **20** is used.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   If this is your first query and no subsequent queries are to be sent, ignore this parameter.
   * *   If a subsequent query is to be sent, set the parameter to the value of NextToken that is returned from the last call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the CLB instance is deployed.
   * 
   * You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the most recent region list.
   * 
   * >  If the endpoint of the selected region is slb.aliyuncs.com, the `RegionId` parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   */
  tag?: DescribeLoadBalancerListenersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeLoadBalancerListenersRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerListenersResponseBody extends $tea.Model {
  /**
   * @remarks
   * A list of listeners of the CLB instance.
   * 
   * >  This parameter is not returned if the CLB instance does not have a listener.
   */
  listeners?: DescribeLoadBalancerListenersResponseBodyListeners[];
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
   * The token that determines the start point of the query. Valid values:
   * 
   * *   If **NextToken** is empty, it indicates that no subsequent query is to be sent.
   * *   If a value is returned for **NextToken**, the value is the token that determines the start point of the next query.
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
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: { 'type': 'array', 'itemType': DescribeLoadBalancerListenersResponseBodyListeners },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerListenersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLoadBalancerListenersResponseBody;
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
      body: DescribeLoadBalancerListenersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerTCPListenerAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The frontend port used by the CLB instance.
   * 
   * Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1ygod3yctvg1y****
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * You can query the region ID from the [Regions and zones](https://help.aliyun.com/document_detail/40654.html) list or by calling the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerTCPListenerAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the network ACL that is associated with the listener.
   * 
   * If **AclStatus** is set to **on**, this parameter is returned.
   * 
   * @example
   * acl-uf60jwfi******
   */
  aclId?: string;
  /**
   * @remarks
   * The IDs of the ACLs.
   */
  aclIds?: DescribeLoadBalancerTCPListenerAttributeResponseBodyAclIds;
  /**
   * @remarks
   * Indicates whether access control is enabled. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * off
   */
  aclStatus?: string;
  /**
   * @remarks
   * The type of the ACL. Valid values:
   * 
   * *   **white**: a whitelist. Only requests from the IP addresses or CIDR blocks in the network ACL are forwarded. Whitelists apply to scenarios in which you want to allow only specific IP addresses to access an application.
   * 
   *     Your service may be adversely affected if the whitelist is not properly configured. After a whitelist is configured, only requests from IP addresses that are added to the whitelist are forwarded by the listener.
   * 
   *     If you enable a whitelist but do not add an IP address to the ACL, the listener forwards all requests.
   * 
   * *   **black**: a blacklist. All requests from the IP addresses or CIDR blocks in the network ACL are rejected. Blacklists apply to scenarios in which you want to block access from specified IP addresses to an application.
   * 
   *     If a blacklist is configured for a listener but no IP address is added to the blacklist, the listener forwards all requests.
   * 
   * >  If **AclStatus** is set to **on**, this parameter is returned.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The backend port used by the CLB instance.
   * 
   * >  If the listener is associated with a vServer group, this parameter is not returned.
   * 
   * @example
   * 443
   */
  backendServerPort?: number;
  /**
   * @remarks
   * The maximum bandwidth of the listener. Unit: Mbit/s. Valid values:
   * 
   * *   **-1**: For a pay-by-data-transfer Internet-facing CLB instance, this parameter is set to -1. This indicates that the bandwidth of the listener is unlimited.
   * *   **1** to **5120**: For a pay-by-bandwidth Internet-facing CLB instance, you can specify the maximum bandwidth of each listener. The sum of maximum bandwidth of all listeners cannot exceed the maximum bandwidth of the CLB instance.
   * 
   * @example
   * -1
   */
  bandwidth?: number;
  /**
   * @remarks
   * Indicates whether connection draining is enabled. If **ConnectionDrain** is set to **on**, the parameter is returned. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * off
   */
  connectionDrain?: string;
  /**
   * @remarks
   * The timeout period of connection draining. If **ConnectionDrain** is set to **on**, the parameter is returned.
   * 
   * Valid values: 10 to 900. Unit: seconds.
   * 
   * @example
   * 300
   */
  connectionDrainTimeout?: number;
  /**
   * @remarks
   * The description of the listener.
   * 
   * @example
   * TCP listener
   */
  description?: string;
  /**
   * @remarks
   * The timeout period of a connection.
   * 
   * @example
   * 500
   */
  establishedTimeout?: number;
  /**
   * @remarks
   * Indicates whether the health check feature is enabled. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  healthCheck?: string;
  /**
   * @remarks
   * The port that is used for health checks. Valid values: **1** to **65535**. If this parameter is not set, the port specified by BackendServerPort is used for health checks.
   * 
   * @example
   * 8080
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The timeout period.
   * 
   * @example
   * 100
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The domain name that is used for health checks. Valid values:
   * 
   * *   **$_ip**: the private IP addresses of backend servers. If you do not set the HealthCheckDomain parameter or set the parameter to $_ip, the CLB instance uses the private IP address of each backend server for health checks.
   * *   **domain**: The domain name is 1 to 80 characters in length, and can contain letters, digits, periods (.), and hyphens (-).
   * 
   * @example
   * www.domain.com
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code for a successful health check.
   * 
   * @example
   * http_2xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Valid values: **1** to **50**. Unit: seconds.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The health check method.
   * 
   * @example
   * tcp
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The health check method that is used by the TCP listener.
   * 
   * Valid values: **tcp** and **http**.
   * 
   * @example
   * tcp
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The URL that is used for health checks. The URL must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number signs (#), and ampersands (&). The URL is not a single forward slash (/) but it starts with a forward slash (/).
   * 
   * @example
   * /test/index.html
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The healthy threshold. The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from **fail** to **success**. Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The frontend port used by the CLB instance.
   * 
   * @example
   * 110
   */
  listenerPort?: number;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * @example
   * lb-bp1ygod3yctvg1y****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The ID of the primary/secondary server group that is associated with the listener.
   * 
   * @example
   * rsp-0bfucw****
   */
  masterSlaveServerGroupId?: string;
  /**
   * @remarks
   * The timeout period of session persistence.
   * 
   * Valid values: **0** to **3600**. Unit: seconds. Default value: **0**. If the default value is used, the system disables session persistence.
   * 
   * @example
   * 0
   */
  persistenceTimeout?: number;
  /**
   * @remarks
   * Indicates whether the Proxy protocol is used to pass client IP addresses to backend servers. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  proxyProtocolV2Enabled?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  /**
   * @remarks
   * The scheduling algorithm.
   * 
   * *   **wrr** (default): Backend servers with higher weights receive more requests than backend servers with lower weights.
   * *   **rr**: Requests are distributed to backend servers in sequence.
   * *   **sch**: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
   * *   **tch**: specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port, and destination port. Requests that contain the same information based on the four factors are distributed to the same backend server.
   * 
   * > Only high-performance CLB instances support the sch and tch algorithms.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The status of the listener. Valid values:
   * 
   * *   **running**
   * *   **stopped**
   * 
   * @example
   * stopped
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the SynProxy feature of CLB is enabled for protection.
   * 
   * We recommend that you use the default value of this parameter. Valid values:
   * 
   * *   **enable**: yes
   * *   **disable**: no
   * 
   * @example
   * enable
   */
  synProxy?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeLoadBalancerTCPListenerAttributeResponseBodyTags;
  /**
   * @remarks
   * The unhealthy threshold. The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from **success** to **fail**. Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * The ID of the associated server group.
   * 
   * @example
   * rsp-cige6******8
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclIds: 'AclIds',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      connectionDrain: 'ConnectionDrain',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      description: 'Description',
      establishedTimeout: 'EstablishedTimeout',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckType: 'HealthCheckType',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      persistenceTimeout: 'PersistenceTimeout',
      proxyProtocolV2Enabled: 'ProxyProtocolV2Enabled',
      requestId: 'RequestId',
      scheduler: 'Scheduler',
      status: 'Status',
      synProxy: 'SynProxy',
      tags: 'Tags',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclIds: DescribeLoadBalancerTCPListenerAttributeResponseBodyAclIds,
      aclStatus: 'string',
      aclType: 'string',
      backendServerPort: 'number',
      bandwidth: 'number',
      connectionDrain: 'string',
      connectionDrainTimeout: 'number',
      description: 'string',
      establishedTimeout: 'number',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckType: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      masterSlaveServerGroupId: 'string',
      persistenceTimeout: 'number',
      proxyProtocolV2Enabled: 'boolean',
      requestId: 'string',
      scheduler: 'string',
      status: 'string',
      synProxy: 'string',
      tags: DescribeLoadBalancerTCPListenerAttributeResponseBodyTags,
      unhealthyThreshold: 'number',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerTCPListenerAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLoadBalancerTCPListenerAttributeResponseBody;
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
      body: DescribeLoadBalancerTCPListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerUDPListenerAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The frontend port used by the CLB instance.
   * 
   * Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1rtfnodmywb43e*****
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the Classic Load Balancer (CLB) instance is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerUDPListenerAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the network ACL.
   * 
   * @example
   * 123943****
   */
  aclId?: string;
  /**
   * @remarks
   * The ID of the access control list (ACL).
   */
  aclIds?: DescribeLoadBalancerUDPListenerAttributeResponseBodyAclIds;
  /**
   * @remarks
   * Indicates whether access control is enabled. Valid values: **on** and **off**. Default value: off.
   * 
   * @example
   * off
   */
  aclStatus?: string;
  /**
   * @remarks
   * The type of the ACL. Valid values:
   * 
   * *   **white**: a whitelist. Only requests from the IP addresses or CIDR blocks in the network ACL are forwarded. Whitelists apply to scenarios in which you want to allow only specified IP addresses to access an application.
   * 
   *     Your service may be adversely affected if the whitelist is not properly configured. After a whitelist is configured, only requests from IP addresses that are added to the whitelist are forwarded by the listener. If you enable a whitelist but do not add an IP address to the ACL, the listener forwards all requests.
   * 
   * *   **black**: a blacklist. All requests from the IP addresses or CIDR blocks in the network ACL are blocked. Blacklists apply to scenarios in which you want to deny access from specific IP addresses or CIDR blocks to an application.
   * 
   *     If a blacklist is configured for a listener but no IP address is added to the blacklist, the listener forwards all requests.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The backend port used by the CLB instance.
   * 
   * >  If the listener is associated with a vServer group, this parameter is not returned.
   * 
   * @example
   * 90
   */
  backendServerPort?: number;
  /**
   * @remarks
   * The maximum bandwidth of the listener. Unit: Mbit/s. Valid values:
   * 
   * *   **-1**: For a pay-by-data-transfer Internet-facing CLB instance, this parameter is set to -1. This indicates that the bandwidth of the listener is unlimited.
   * *   **1** to **5120**: For a pay-by-bandwidth Internet-facing CLB instance, you can specify the maximum bandwidth of each listener. The sum of maximum bandwidth of all listeners cannot exceed the maximum bandwidth of the CLB instance.
   * 
   * @example
   * -1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The description of the listener.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the health check feature is enabled. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  healthCheck?: string;
  /**
   * @remarks
   * The port that is used for health checks. Valid values: **1** to **65535**. If this parameter is not set, the port specified by BackendServerPort is used for health checks.
   * 
   * >  This parameter takes effect only when the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 8080
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The timeout period of a health check. If a backend Elastic Compute Service (ECS) instance does not return a health check response within the specified timeout period, the server fails the health check. Valid values: **1** to **300**. Unit: seconds.
   * 
   * @example
   * 100
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The response string for UDP listener health checks. The string is up to 64 characters in length, and can contain letters and digits.
   * 
   * @example
   * ok
   */
  healthCheckExp?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Valid values: **1** to **50**. Unit: seconds.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The request string for UDP listener health checks. The string is up to 64 characters in length, and can contain letters and digits.
   * 
   * @example
   * hello
   */
  healthCheckReq?: string;
  /**
   * @remarks
   * The healthy threshold. The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from **fail** to **success**. Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The frontend port used by the CLB instance.
   * 
   * @example
   * 53
   */
  listenerPort?: number;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * @example
   * lb-bp1rtfnodmywb43e*****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The ID of the primary/secondary server group that is associated with the listener.
   * 
   * @example
   * rsp-0bfucw****
   */
  masterSlaveServerGroupId?: string;
  /**
   * @remarks
   * Indicates whether the Proxy protocol is used to pass client IP addresses to backend servers. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  proxyProtocolV2Enabled?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * *   **wrr** (default): Backend servers with higher weights receive more requests than backend servers with lower weights.
   * *   **rr**: Requests are distributed to backend servers in sequence.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The status of the listener. Valid values:
   * 
   * *   **running**
   * *   **stopped**
   * 
   * @example
   * stopped
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeLoadBalancerUDPListenerAttributeResponseBodyTags;
  /**
   * @remarks
   * The unhealthy threshold. The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from **success** to **fail**. Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * The ID of the vServer group that is associated with the listener.
   * 
   * @example
   * rsp-cige6j****
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclIds: 'AclIds',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      description: 'Description',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckExp: 'HealthCheckExp',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckReq: 'HealthCheckReq',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      proxyProtocolV2Enabled: 'ProxyProtocolV2Enabled',
      requestId: 'RequestId',
      scheduler: 'Scheduler',
      status: 'Status',
      tags: 'Tags',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclIds: DescribeLoadBalancerUDPListenerAttributeResponseBodyAclIds,
      aclStatus: 'string',
      aclType: 'string',
      backendServerPort: 'number',
      bandwidth: 'number',
      description: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckExp: 'string',
      healthCheckInterval: 'number',
      healthCheckReq: 'string',
      healthyThreshold: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      masterSlaveServerGroupId: 'string',
      proxyProtocolV2Enabled: 'boolean',
      requestId: 'string',
      scheduler: 'string',
      status: 'string',
      tags: DescribeLoadBalancerUDPListenerAttributeResponseBodyTags,
      unhealthyThreshold: 'number',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerUDPListenerAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLoadBalancerUDPListenerAttributeResponseBody;
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
      body: DescribeLoadBalancerUDPListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancersRequest extends $tea.Model {
  /**
   * @remarks
   * The IP address that the CLB instance uses to provide services.
   * 
   * @example
   * 192.168.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The IP version that is used by the CLB instance. Valid values: **ipv4** and **ipv6**.
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * The network type of the CLB instance. Valid values:
   * 
   * *   **internet:** After an Internet-facing CLB instance is created, the system assigns a public IP address to the CLB instance. Then, the CLB instance can forward requests over the Internet.
   * *   **intranet:** After an internal-facing CLB instance is created, the system assigns a private IP address to the CLB instance. Then, the CLB instance can forward requests only over internal networks.
   * 
   * @example
   * intranet
   */
  addressType?: string;
  /**
   * @remarks
   * The metering method of Internet data transfer. Valid values:
   * 
   * *   **paybybandwidth:** pay-by-bandwidth.
   * *   **paybytraffic:** pay-by-data-transfer.
   * 
   * @example
   * paybytraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * You can specify up to 10 IDs. Separate multiple IDs with commas (,).
   * 
   * @example
   * lb-bp1b6c719dfa****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The name of the CLB instance.
   * 
   * The name must be 1 to 80 characters in length, and can contain digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * You can specify up to 10 names. Separate multiple names with commas (,).
   * 
   * @example
   * test
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The status of the CLB instance. Valid values:
   * 
   * *   **inactive:** The CLB instance is disabled. CLB instances in the inactive state do not forward traffic.
   * *   **active:** The CLB instance runs as expected. By default, newly created CLB instances are in the **active** state.
   * *   **locked:** The CLB instance is locked. After a CLB instance expires, it is locked for seven days. A locked CLB instance cannot forward traffic and you cannot perform operations on the locked CLB instance. However, other settings such as the IP address are retained.
   * 
   * @example
   * active
   */
  loadBalancerStatus?: string;
  /**
   * @remarks
   * The ID of the primary zone to which the CLB instance belongs.
   * 
   * @example
   * cn-hangzhou-b
   */
  masterZoneId?: string;
  /**
   * @remarks
   * The network type of the internal-facing CLB instance. Valid values:
   * 
   * *   **vpc:** VPC.
   * *   **classic:** classic network.
   * 
   * @example
   * vpc
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: **1** to **100**.
   * 
   * >  If you specify the **PageSize** parameter, you must also specify the **PageNumber** parameter.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The billing method of the CLB instance. Valid values:
   * 
   * *   Set the value to **PayOnDemand**.
   * 
   * @example
   * PayOnDemand
   */
  payType?: string;
  /**
   * @remarks
   * The ID of the region where the CLB instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
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
   * @example
   * rg-acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the backend server that is added to the CLB instance.
   * 
   * @example
   * vm-server-23****
   */
  serverId?: string;
  /**
   * @remarks
   * The private IP address of the backend server that is added to the CLB instance.
   * 
   * You can specify multiple IP addresses. Separate multiple IP addresses with commas (,).
   * 
   * @example
   * 10.XX.XX.102
   */
  serverIntranetAddress?: string;
  /**
   * @remarks
   * The ID of the secondary zone to which the CLB instance belongs.
   * 
   * CLB instances on Alibaba Finance Cloud do not support cross-zone deployment.
   * 
   * @example
   * cn-hangzhou-d
   */
  slaveZoneId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: DescribeLoadBalancersRequestTag[];
  /**
   * @remarks
   * The tags that are added to the CLB instance. The tags must be key-value pairs that are contained in a JSON dictionary.
   * 
   * You can specify up to 10 tags in each call.
   * 
   * @example
   * [{"tagKey":"Key1","tagValue":"Value1"}]
   */
  tags?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the CLB instance belongs.
   * 
   * @example
   * vsw-bp12mw1f8k3****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the CLB instance belongs.
   * 
   * @example
   * vpc-bp1aevy8sof****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressIPVersion: 'AddressIPVersion',
      addressType: 'AddressType',
      internetChargeType: 'InternetChargeType',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerStatus: 'LoadBalancerStatus',
      masterZoneId: 'MasterZoneId',
      networkType: 'NetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      payType: 'PayType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serverId: 'ServerId',
      serverIntranetAddress: 'ServerIntranetAddress',
      slaveZoneId: 'SlaveZoneId',
      tag: 'Tag',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressIPVersion: 'string',
      addressType: 'string',
      internetChargeType: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerStatus: 'string',
      masterZoneId: 'string',
      networkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      payType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serverId: 'string',
      serverIntranetAddress: 'string',
      slaveZoneId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeLoadBalancersRequestTag },
      tags: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancersResponseBody extends $tea.Model {
  /**
   * @remarks
   * An array of CLB instances.
   */
  loadBalancers?: DescribeLoadBalancersResponseBodyLoadBalancers;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8B9DB03B-ED39-5DB8-9C9F-1ED5F548D61E
   */
  requestId?: string;
  /**
   * @remarks
   * The number of instances returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancers: 'LoadBalancers',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancers: DescribeLoadBalancersResponseBodyLoadBalancers,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLoadBalancersResponseBody;
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
      body: DescribeLoadBalancersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the primary/secondary server group.
   * 
   * This parameter is required.
   * 
   * @example
   * rsp-cige6j******
   */
  masterSlaveServerGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Classic Load Balancer (CLB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterSlaveServerGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The time when the CLB instance was created. The time follows the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2022-12-02T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the associated CLB instance.
   * 
   * @example
   * lb-14fadafw4343a******
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * A list of backend servers in the primary/secondary server group.
   */
  masterSlaveBackendServers?: DescribeMasterSlaveServerGroupAttributeResponseBodyMasterSlaveBackendServers;
  /**
   * @remarks
   * The ID of the primary/secondary server group.
   * 
   * @example
   * rsp-cige6******
   */
  masterSlaveServerGroupId?: string;
  /**
   * @remarks
   * The name of the primary/secondary server group.
   * 
   * @example
   * Group1
   */
  masterSlaveServerGroupName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DEC9C28-AB05-4DDF-9A78-6B08EC9CE18C
   */
  requestId?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: DescribeMasterSlaveServerGroupAttributeResponseBodyTags;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      loadBalancerId: 'LoadBalancerId',
      masterSlaveBackendServers: 'MasterSlaveBackendServers',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      masterSlaveServerGroupName: 'MasterSlaveServerGroupName',
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      loadBalancerId: 'string',
      masterSlaveBackendServers: DescribeMasterSlaveServerGroupAttributeResponseBodyMasterSlaveBackendServers,
      masterSlaveServerGroupId: 'string',
      masterSlaveServerGroupName: 'string',
      requestId: 'string',
      tags: DescribeMasterSlaveServerGroupAttributeResponseBodyTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMasterSlaveServerGroupAttributeResponseBody;
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
      body: DescribeMasterSlaveServerGroupAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupsRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the primary/secondary server group.
   * 
   * @example
   * test-112
   * 
   * **if can be null:**
   * true
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to return information about the associated listeners. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  includeListener?: boolean;
  /**
   * @remarks
   * The CLB instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp14zi0n66zpg6o******
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   */
  tag?: DescribeMasterSlaveServerGroupsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      includeListener: 'IncludeListener',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      includeListener: 'boolean',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeMasterSlaveServerGroupsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The primary/secondary server groups.
   */
  masterSlaveServerGroups?: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroups;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DEC9C28-AB05-4DDF-9A78-6B08EC9CE18C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      masterSlaveServerGroups: 'MasterSlaveServerGroups',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterSlaveServerGroups: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroups,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMasterSlaveServerGroupsResponseBody;
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
      body: DescribeMasterSlaveServerGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  /**
   * @remarks
   * The supported language. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US: English
   * *   ja: Japanese
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The list of regions.
   */
  regions?: DescribeRegionsResponseBodyRegions;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1651FBB6-4FBF-49FF-A9F5-DF5D696C7EC6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: DescribeRegionsResponseBodyRegions,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
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
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleAttributeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the Server Load Balancer (SLB) instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * This parameter is required.
   * 
   * @example
   * rule-bp1efemp9****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The cookie to be configured on the backend server.
   * 
   * The cookie must be 1 to 200 characters in length and can contain ASCII letters and digits. It cannot contain commas (,), semicolons (;), or whitespace characters. It cannot start with a dollar sign ($).
   * 
   * If you set the **StickySession** parameter to **on** and the **StickySessionType** parameter to **server**, this parameter is required.
   * 
   * @example
   * wwe
   */
  cookie?: string;
  /**
   * @remarks
   * The timeout period of a cookie.
   * 
   * Valid values: **1 to 86400**. Unit: seconds.
   * 
   * >  If you set the **StickySession** parameter to **on** and the **StickySessionType** parameter to **insert**, this parameter is required.
   * 
   * @example
   * 12
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * The domain name that is configured in the forwarding rule.
   * 
   * @example
   * test.com
   */
  domain?: string;
  /**
   * @remarks
   * Specifies whether to enable health checks.
   * 
   * Valid values: **on** and **off**.
   * 
   * >  If you set the **ListenerSync** parameter to **off**, this parameter is required. If you set the parameter to **on**, the configuration of the listener is used.
   * 
   * @example
   * off
   */
  healthCheck?: string;
  /**
   * @remarks
   * The backend port that is used for health checks.
   * 
   * Valid values: **1** to **65535**.
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required. If this parameter is empty but **HealthCheck** is set to **on**, the listener port is used for health checks.
   * 
   * @example
   * 23
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name that is used for health checks. Valid values:
   * 
   * *   **$_ip**: The private IP address of the backend server. If the $_ip parameter is set or the HealthCheckDomain parameter is not set, SLB uses the private IP addresses of backend servers as the domain names for health checks.
   * *   **domain**: The domain name must be 1 to 80 characters in length. It can contain only letters, digits, periods (.),and hyphens (-).
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required.
   * 
   * @example
   * www.example.com
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code that indicates a successful health check. Separate multiple HTTP status codes with commas (,). Default value: **http_2xx**.
   * 
   * Valid values: **http_2xx**, **http_3xx**, **http_4xx**, and **http_5xx**.
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required.
   * 
   * @example
   * http_3xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The time interval between two consecutive health checks.
   * 
   * Valid values: **1** to **50**. Unit: seconds.
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required.
   * 
   * @example
   * 34
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The timeout period of a health check response. If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check.
   * 
   * Valid values: **1** to **300**. Unit: seconds.
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required.
   * 
   * @example
   * 34
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The URI that is used for health checks.
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required.
   * 
   * @example
   * 10.21.22.1
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of consecutive successful health checks that must occur before an unhealthy backend server is declared healthy. In this case, the health check state is changed from **fail** to **success**.
   * 
   * Valid values: **2** to **10**.
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required.
   * 
   * @example
   * 2
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The listener port that is used by the SLB instance.
   * 
   * @example
   * 90
   */
  listenerPort?: string;
  /**
   * @remarks
   * Indicates whether the forwarding rule uses the scheduling algorithm, session persistence, and health check configurations of the listener.
   * 
   * Valid values: **on** and **off**.
   * 
   * *   **off**: does not use the configurations of the listener. You can customize health check and session persistence configurations for the forwarding rule.
   * *   **on**: uses the configurations of the listener.
   * 
   * @example
   * off
   */
  listenerSync?: string;
  /**
   * @remarks
   * The ID of the SLB instance.
   * 
   * @example
   * lb-bp1ca0zt07t934wxe****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9DEC9C28-AB05-4DDF-9A78-6B08EC9CE18C
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * @example
   * rule-hfgnd*****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the forwarding rule.
   * 
   * @example
   * Rule1
   */
  ruleName?: string;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * *   **wrr** (default): Backend servers that have higher weights receive more requests than backend servers that have lower weights.
   * *   **rr**: Requests are distributed to backend servers in sequence.
   * 
   * >  If you set the **ListenerSync** parameter to **off**, this parameter is required. If you set the parameter to **on**, the configuration of the listener is used.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * Indicates whether session persistence is enabled.
   * 
   * Valid values: **on** and **off**.
   * 
   * >  If you set the **ListenerSync** parameter to **off**, this parameter is required. If you set the parameter to **on**, the configuration of the listener is used.
   * 
   * @example
   * off
   */
  stickySession?: string;
  /**
   * @remarks
   * The method that is used to handle a cookie. Valid values:
   * 
   * *   **insert**: inserts a cookie into the response. SLB inserts a cookie (SERVERID) into the first HTTP or HTTPS response packet that is sent to a client. The next request from the client will contain this cookie, and the listener will distribute this request to the recorded backend server.
   * *   **server**: rewrites a cookie. When SLB detects a user-defined cookie, SLB overwrites the original cookie with the user-defined cookie. The next request from the client contains the user-defined cookie, and the listener distributes the request to the recorded backend server.
   * 
   * >  If you set the **StickySession** parameter to **on**, this parameter is required.
   * 
   * @example
   * insert
   */
  stickySessionType?: string;
  /**
   * @remarks
   * The number of consecutive failed health checks that must occur before a healthy backend server is declared unhealthy. In this case, the health check state is changed from **success** to **fail**.
   * 
   * Valid values: **2** to **10**.
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required.
   * 
   * @example
   * 3
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * The URL that is configured in the forwarding rule.
   * 
   * @example
   * /cache
   */
  url?: string;
  /**
   * @remarks
   * The ID of the vServer group that is associated with the forwarding rule.
   * 
   * @example
   * rsp-cige6j****
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      domain: 'Domain',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
      listenerSync: 'ListenerSync',
      loadBalancerId: 'LoadBalancerId',
      requestId: 'RequestId',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      scheduler: 'Scheduler',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      unhealthyThreshold: 'UnhealthyThreshold',
      url: 'Url',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      domain: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      listenerPort: 'string',
      listenerSync: 'string',
      loadBalancerId: 'string',
      requestId: 'string',
      ruleId: 'string',
      ruleName: 'string',
      scheduler: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      unhealthyThreshold: 'number',
      url: 'string',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRuleAttributeResponseBody;
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
      body: DescribeRuleAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRulesRequest extends $tea.Model {
  /**
   * @remarks
   * The frontend listener port that is used by the Server Load Balancer (SLB) instance.
   * 
   * Valid values: **1 to 65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 90
   */
  listenerPort?: number;
  /**
   * @remarks
   * The frontend listener protocol that is used by the SLB instance.
   * 
   * >  This parameter is required when listeners that use different protocols listen on the same port.
   * 
   * @example
   * https
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The ID of the SLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1ca0zt07t934****
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the SLB instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRulesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9DEC9C28-AB05-4DDF-9A78-6B08EC9CE18C
   */
  requestId?: string;
  /**
   * @remarks
   * The forwarding rules.
   */
  rules?: DescribeRulesResponseBodyRules;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rules: DescribeRulesResponseBodyRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRulesResponseBody;
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
      body: DescribeRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerCertificatesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region where the CLB instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * >  If the endpoint of the selected region is slb.aliyuncs.com, you must specify `RegionId`.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The server certificate ID.
   * 
   * @example
   * 12315790*******_166f8204689_1714763408_709981430
   */
  serverCertificateId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: DescribeServerCertificatesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serverCertificateId: 'ServerCertificateId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serverCertificateId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeServerCertificatesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerCertificatesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  /**
   * @remarks
   * The server certificates.
   */
  serverCertificates?: DescribeServerCertificatesResponseBodyServerCertificates;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serverCertificates: 'ServerCertificates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serverCertificates: DescribeServerCertificatesResponseBodyServerCertificates,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerCertificatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeServerCertificatesResponseBody;
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
      body: DescribeServerCertificatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether the tags contain distinct keys.
   * 
   * Valid values: true and false.
   * 
   * @example
   * false
   */
  distinctKey?: boolean;
  /**
   * @remarks
   * The SLB instance ID.
   * 
   * @example
   * lb-bp1kuzybm******
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 50. Maximum value: 100.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the Server Load Balancer (SLB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags that you want to query.
   * 
   * @example
   * [{"TagKey":"Key1","TagValue":"Value1"},{"TagKey":"Key2","TagValue":"Value2"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      distinctKey: 'DistinctKey',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distinctKey: 'boolean',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The number of the returned page. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: 50. Maximum value: 100.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  /**
   * @remarks
   * The tags that are queried.
   */
  tagSets?: DescribeTagsResponseBodyTagSets;
  /**
   * @remarks
   * The number of instances returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tagSets: 'TagSets',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tagSets: DescribeTagsResponseBodyTagSets,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTagsResponseBody;
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
      body: DescribeTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupAttributeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Classic Load Balancer (CLB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the vServer group.
   * 
   * This parameter is required.
   * 
   * @example
   * rsp-cige6****
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The backend servers.
   */
  backendServers?: DescribeVServerGroupAttributeResponseBodyBackendServers;
  /**
   * @remarks
   * The time when the CLB instance was created. The time follows the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2022-08-31T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * @example
   * lb-jfakd****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DEC9C28-AB05-4DDF-9A78-6B08EC9CE18C
   */
  requestId?: string;
  /**
   * @remarks
   * The tags of the backend server.
   */
  tags?: DescribeVServerGroupAttributeResponseBodyTags;
  /**
   * @remarks
   * The ID of the vServer group.
   * 
   * @example
   * rsp-cige6****
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * The name of the vServer group.
   * 
   * @example
   * Group1
   */
  VServerGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      createTime: 'CreateTime',
      loadBalancerId: 'LoadBalancerId',
      requestId: 'RequestId',
      tags: 'Tags',
      VServerGroupId: 'VServerGroupId',
      VServerGroupName: 'VServerGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: DescribeVServerGroupAttributeResponseBodyBackendServers,
      createTime: 'string',
      loadBalancerId: 'string',
      requestId: 'string',
      tags: DescribeVServerGroupAttributeResponseBodyTags,
      VServerGroupId: 'string',
      VServerGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVServerGroupAttributeResponseBody;
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
      body: DescribeVServerGroupAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the vServer group.
   * 
   * @example
   * Group3
   * 
   * **if can be null:**
   * true
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to return information about the associated listeners. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * @example
   * false
   */
  includeListener?: boolean;
  /**
   * @remarks
   * Specifies whether to return the forwarding rules associated with the vServer groups. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * @example
   * false
   */
  includeRule?: boolean;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1o94dp5i6ea*******
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Classic Load Balancer (CLB) instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   */
  tag?: DescribeVServerGroupsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      includeListener: 'IncludeListener',
      includeRule: 'IncludeRule',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      includeListener: 'boolean',
      includeRule: 'boolean',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeVServerGroupsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DEC9C28-AB05-4DDF-9A78-6B08EC9CE18C
   */
  requestId?: string;
  /**
   * @remarks
   * The backend servers.
   */
  VServerGroups?: DescribeVServerGroupsResponseBodyVServerGroups;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      VServerGroups: 'VServerGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      VServerGroups: DescribeVServerGroupsResponseBodyVServerGroups,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVServerGroupsResponseBody;
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
      body: DescribeVServerGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesRequest extends $tea.Model {
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * @example
   * testuser@aliyun.com
   */
  ownerAccount?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the VPC belongs.
   * 
   * @example
   * 1171915672241348
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Server Load Balancer (SLB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * ResourceOwnerAccount
   * 
   * @example
   * cmdb@5397832129092425.onaliyun.com
   */
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the asset owner.
   * 
   * @example
   * 1592622395492712
   */
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A48D35FF-440A-4BC0-A4A2-A9BF69B7E43A
   */
  requestId?: string;
  /**
   * @remarks
   * The zones.
   */
  zones?: DescribeZonesResponseBodyZones;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: DescribeZonesResponseBodyZones,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeZonesResponseBody;
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
      body: DescribeZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHighDefinationMonitorRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the project of Log Service. The name must be 4 to 63 characters in length, and can contain digits and lowercase letters. It must start and end with a digit or a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * my-project
   */
  logProject?: string;
  /**
   * @remarks
   * The name of the Logstore of Log Service. The name must be 2 to 64 characters in length and can contain digits, lowercase letters, hyphens (-) and underscores (_). It must start and end with a digit or a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * my-log-store
   */
  logStore?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the Classic Load Balancer (CLB) instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags of the logs. The tags must be key-value pairs that are contained in a JSON dictionary.
   * 
   * @example
   * [{"tagKey":"Key1","tagValue":"Value1"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      logProject: 'LogProject',
      logStore: 'LogStore',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logProject: 'string',
      logStore: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHighDefinationMonitorResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2F398FF5-B349-5C01-8638-8E9A0BF1DBE6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHighDefinationMonitorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableHighDefinationMonitorResponseBody;
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
      body: EnableHighDefinationMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTLSCipherPoliciesRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to return the information about the associated listeners. Valid values:
   * 
   * *   **true**: returns the information about the associated listeners.
   * *   **false** (default): does not return the information about the associated listeners.
   * 
   * @example
   * false
   */
  includeListener?: boolean;
  /**
   * @remarks
   * The maximum number of TLS policies to be queried in this call. Valid values: **1** to **100**. If you do not set this parameter, the default value **20** is used.
   * 
   * @example
   * 20
   */
  maxItems?: number;
  /**
   * @remarks
   * The name of the TLS policy. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * TLSPolicy-test****
   */
  name?: string;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   If this is your first query or no next query is to be sent, ignore this parameter.
   * *   If a next query is to be sent, set the value to the value of NextToken that is returned from the last call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the Classic Load Balancer (CLB) instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the TLS policy.
   * 
   * @example
   * tls-bp17elso1h323r****
   */
  TLSCipherPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      includeListener: 'IncludeListener',
      maxItems: 'MaxItems',
      name: 'Name',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      TLSCipherPolicyId: 'TLSCipherPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeListener: 'boolean',
      maxItems: 'number',
      name: 'string',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      TLSCipherPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTLSCipherPoliciesResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the current page is the last page. Valid values:
   * 
   * *   **true**: The current page is the last page.
   * *   **false**: The current page is not the last page.
   * 
   * @example
   * false
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   If **NextToken** is empty, it indicates that no next query is to be sent.
   * *   If **NextToken** is not empty, the value indicates the token that is used for the next query.
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
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
   * @remarks
   * The list of TLS policies.
   */
  TLSCipherPolicies?: ListTLSCipherPoliciesResponseBodyTLSCipherPolicies[];
  /**
   * @remarks
   * The total number of TLS policies returned.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      TLSCipherPolicies: 'TLSCipherPolicies',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      nextToken: 'string',
      requestId: 'string',
      TLSCipherPolicies: { 'type': 'array', 'itemType': ListTLSCipherPoliciesResponseBodyTLSCipherPolicies },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTLSCipherPoliciesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTLSCipherPoliciesResponseBody;
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
      body: ListTLSCipherPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The token that determines the start point of the query. Valid values:
   * 
   * *   If this is your first query or no subsequent query is to be sent, ignore this parameter.
   * *   If a subsequent query is to be sent, set the parameter to the value of NextToken that is returned from the last call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID. You can specify up to 20 resources.
   * 
   * >  The value of **ResourceId** of a **listener** is **LoadBalancerId_Listener protocol_Port**, where LoadBalancerId is the ID of the CLB instance and port is the listener port. Example: lb-bp1qnnvj18yy6h\\*\\*\\*\\*_http_80.
   * 
   * @example
   * lb-bp1qnnvj18yy6h******
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   **instance**: a CLB instance
   * *   **certificate**: a certificate
   * *   **acl**: an access control list (ACL)
   * *   **listener**: a listener
   * *   **vservergroup**: a vServer group
   * *   **masterslaveservergroup**: a primary/secondary server group
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
   * The token that determines the start point of the query. Valid values:
   * 
   * *   If **NextToken** is empty, it indicates that no subsequent query is to be sent.
   * *   If a value of **NextToken** is returned, the value is the token that is used for the subsequent query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
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
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
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

export class ModifyHighDefinationMonitorRequest extends $tea.Model {
  /**
   * @remarks
   * The new name of the project of Log Service. The name must be 4 to 63 characters in length, and can contain digits and lowercase letters. It must start and end with a digit or a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * my-project
   */
  logProject?: string;
  /**
   * @remarks
   * The new name of the Logstore of Log Service. The name must be 2 to 64 characters in length and can contain digits, lowercase letters, hyphens (-) and underscores (_). It must start and end with a digit or a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * my-log-store
   */
  logStore?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the Classic Load Balancer (CLB) instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      logProject: 'LogProject',
      logStore: 'LogStore',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logProject: 'string',
      logStore: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHighDefinationMonitorResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8B9DB03B-ED39-5DB8-9C9F-1ED5F548D61E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHighDefinationMonitorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyHighDefinationMonitorResponseBody;
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
      body: ModifyHighDefinationMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLoadBalancerInstanceChargeTypeRequest extends $tea.Model {
  /**
   * @remarks
   * The maximum bandwidth of the Internet-facing CLB instance that is billed on a pay-by-bandwidth basis.
   * 
   * You do not need to set this parameter. The metering method of Internet data transfer for pay-by-LCU instances supports only pay-by-traffic.
   * 
   * @example
   * 5
   */
  bandwidth?: number;
  /**
   * @remarks
   * The metering method of the instance after the change.
   * 
   * Valid value: **PayByCLCU**. Only pay-by-LCU is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * PayByCLCU
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of Internet data transfer after the change.
   * 
   * Valid value: **paybytraffic**.
   * 
   * > *   If the value of the **InstanceChargeType** parameter is set to **PayByCLCU**, only pay-by-data-transfer is supported.
   * >*   When you change the metering method, the new metering method takes effect at 00:00:00 the next day.
   * 
   * @example
   * paybytraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1b3jus5hpenznuu****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The specification of the CLB instance.
   * 
   * You do not need to set this parameter. For pay-as-you-go CLB instances, you can only change the metering method from pay-by-specification to pay-by-LCU. You cannot change the metering method from pay-by-LCU to pay-by-specification.
   * 
   * @example
   * slb.s1.small
   */
  loadBalancerSpec?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerSpec: 'LoadBalancerSpec',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      loadBalancerId: 'string',
      loadBalancerSpec: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLoadBalancerInstanceChargeTypeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
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

export class ModifyLoadBalancerInstanceChargeTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyLoadBalancerInstanceChargeTypeResponseBody;
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
      body: ModifyLoadBalancerInstanceChargeTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLoadBalancerInstanceSpecRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true**: automatically completes the payment.
   * *   **false** (default): If you select this option, you must complete the payment in the Order Center.
   * 
   * > This parameter takes effect only for subscription instances.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1b6c719df*********
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The specification of the CLB instance. Valid values:
   * 
   * *   **slb.s1.small**
   * *   **slb.s2.small**
   * *   **slb.s2.medium**
   * *   **slb.s3.small**
   * *   **slb.s3.medium**
   * *   **slb.s3.large**
   * 
   * The specifications available vary by region. For more information about the specifications, see [High-performance CLB instance](https://help.aliyun.com/document_detail/85931.html).
   * 
   * > When you switch a shared-resource CLB instance to a high-performance CLB instance, your service may be interrupted for 10 to 30 seconds. We recommend that you modify the specification during off-peak hours or use Alibaba Cloud DNS to schedule your workloads to another CLB instance before you modify the specification.
   * 
   * This parameter is required.
   * 
   * @example
   * slb.s2.small
   */
  loadBalancerSpec?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * You can query the region ID from the [Regions and zones](https://help.aliyun.com/document_detail/40654.html) list or by calling the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerSpec: 'LoadBalancerSpec',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      loadBalancerId: 'string',
      loadBalancerSpec: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLoadBalancerInstanceSpecResponseBody extends $tea.Model {
  /**
   * @remarks
   * The order ID of the subscription CLB instance.
   * 
   * @example
   * 201429619788910
   */
  orderId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLoadBalancerInstanceSpecResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyLoadBalancerInstanceSpecResponseBody;
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
      body: ModifyLoadBalancerInstanceSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLoadBalancerInternetSpecRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to automatically pay the subscription fee of the Internet-facing CLB instance. Valid values:
   * 
   * *   **true**: enables automatic payments. This is the default value.
   * *   **false**: disables automatic payment. You must complete the payment in Order Center.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The maximum bandwidth of the Internet-facing CLB instance that uses the pay-by-bandwidth metering method. Unit: Mbit/s.
   * 
   * Valid values: **1 to 5000**. The maximum bandwidth varies based on the region where the CLB instance is created.****
   * 
   * >  You do not need to specify this parameter if you set **InternetChargeType** to **paybytraffic** (pay-by-data-transfer).
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The metering method of the Internet-facing CLB instance. Valid values:
   * 
   * *   **paybybandwidth**: pay-by-bandwidth
   * *   **paybytraffic**: pay-by-data-transfer
   * 
   * @example
   * paybytraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1b6c719dfa08ex******
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the CLB instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      bandwidth: 'Bandwidth',
      internetChargeType: 'InternetChargeType',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      bandwidth: 'number',
      internetChargeType: 'string',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLoadBalancerInternetSpecResponseBody extends $tea.Model {
  /**
   * @remarks
   * The order ID of the subscription CLB instance.
   * 
   * @example
   * 20142961978****
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLoadBalancerInternetSpecResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyLoadBalancerInternetSpecResponseBody;
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
      body: ModifyLoadBalancerInternetSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLoadBalancerPayTypeRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * >  This parameter is valid only when the `PayType` parameter is set to **PrePay**. This parameter is valid only for pay-as-you-go instances.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The subscription duration.
   * 
   * *   If **PricingCycle** is set to **month**, the valid values are **1** to **9**.
   * *   If **PricingCycle** is set to **year**, the valid values are **1** to **3**.
   * 
   * >  This parameter is valid only when the **PayType** parameter is set to **PrePay**. This parameter is valid only for pay-as-you-go instances.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1b6c719dfa08ex*****
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method of the CLB instance. Valid values:
   * 
   * *   **PayOnDemand** (default): pay-as-you-go
   * 
   * To change the billing method of a pay-as-you-go CLB instance to subscription, you must set the parameter to **PrePay**. In addition, the previous billing method of the CLB instance must be **PayOnDemand**.
   * 
   * @example
   * PrePay
   */
  payType?: string;
  /**
   * @remarks
   * The billing cycle.
   * 
   * Valid values: **year** and **month**.
   * 
   * >  This parameter is valid only when the **PayType** parameter is set to **PrePay**. This parameter is valid only for pay-as-you-go instances.
   * 
   * @example
   * month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The ID of the region where the CLB instance is deployed.
   * 
   * You can query the region ID from the [Regions and zones](https://help.aliyun.com/document_detail/40654.html) list or by calling the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      duration: 'Duration',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      duration: 'number',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      pricingCycle: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLoadBalancerPayTypeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The order ID of the subscription CLB instance.
   * 
   * @example
   * 20212961978891
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLoadBalancerPayTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyLoadBalancerPayTypeResponseBody;
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
      body: ModifyLoadBalancerPayTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVServerGroupBackendServersRequest extends $tea.Model {
  /**
   * @remarks
   * The backend servers that you want to add to the vServer group. Configure the following parameters:
   * 
   * *   **ServerId**: required. The IDs of the backend servers. Specify the IDs in a string. You can specify the IDs of ECS instances, ENIs, and elastic container instances. If you set **ServerId** to the IDs of ENIs or elastic container instances, you must configure the **Type** parameter.
   * 
   * *   **Weight**: the weight of the backend server. Valid values: **0** to **100**. Default value: **100**. If you set the weight of a backend server to 0, no requests are forwarded to the backend server.
   * 
   * *   **Description**: optional. The description of the backend servers. Specify the description in a string. The description must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/). periods (.), and underscores (_).
   * 
   * *   **Type**: the type of the backend server. Valid values:
   * 
   *     *   **ecs** (default): ECS instance
   *     *   **eni**: ENI
   *     *   **eci**: elastic container instance
   * 
   * >  You can specify ENIs and elastic container instances as backend servers only for high-performance SLB instances.
   * 
   * *   **ServerIp**: the IP address of the ENI or elastic container instance.
   * *   **Port**: the backend port.
   * 
   * Examples:
   * 
   * *   Add an ECS instance:
   * 
   *     `[{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs", "Port":"80","Description":"test-112" }]`
   * 
   * *   Add an ENI:
   * 
   *     `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-112" }]`
   * 
   * *   Add an ENI with multiple IP addresses:
   * 
   *     `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-113" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``172.166.**.**``", "Port":"80","Description":"test-113" }]`
   * 
   * *   Add an elastic container instance
   * 
   *     `[{ "ServerId": "eci-xxxxxxxxx", "Weight": "100", "Type": "eci", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-114" }]`
   * 
   * >  You can add only running backend servers to SLB instances. You can specify at most 20 backend servers in each call.
   * 
   * @example
   * [{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-112" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``172.166.**.**``", "Port":"80","Description":"test-113" }]
   */
  newBackendServers?: string;
  /**
   * @remarks
   * The backend servers that you want to replace. Configure the following parameters:
   * 
   * *   **ServerId**: required. The IDs of the backend servers. Specify the IDs in a string. You can specify the IDs of Elastic Compute Service (ECS) instances, elastic network interfaces (ENIs), and elastic container instances. If you set **ServerId** to the IDs of ENIs or elastic container instances, you must configure the **Type** parameter.
   * 
   * *   **Weight**: the weight of the backend server. Valid values: **0** to **100**. Default value: **100**. If you set the weight of a backend server to 0, no requests are forwarded to the backend server.
   * 
   * *   **Description**: optional. The description of the backend servers. Specify the description in a string. The description must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/). periods (.), and underscores (_).
   * 
   * *   **Type**: the type of the backend server. Valid values:
   * 
   *     *   **ecs** (default): ECS instance
   *     *   **eni**: ENI
   *     *   **eci**: elastic container instance
   * 
   * >  You can specify ENIs and elastic container instances as backend servers only for high-performance SLB instances.
   * 
   * *   **ServerIp**: the IP address of the ENI or elastic container instance.
   * *   **Port**: the backend port.
   * 
   * Examples:
   * 
   * *   Add an ECS instance:
   * 
   *     `[{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs", "Port":"80","Description":"test-112" }]`
   * 
   * *   Add an ENI:
   * 
   *     `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-112" }]`
   * 
   * *   Add an ENI with multiple IP addresses:
   * 
   *     `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-113" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``172.166.**.**``", "Port":"80","Description":"test-113" }]`
   * 
   * *   Add an elastic container instance
   * 
   *     `[{ "ServerId": "eci-xxxxxxxxx", "Weight": "100", "Type": "eci", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-114" }]`
   * 
   * >  You can add only running backend servers to SLB instances. You can specify at most 20 backend servers in each call.
   * 
   * @example
   * [{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs",  "Port":"80","Description":"test-112" }]
   */
  oldBackendServers?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the Classic Load Balancer (CLB) instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the vServer group.
   * 
   * This parameter is required.
   * 
   * @example
   * rsp-cige6j****
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      newBackendServers: 'NewBackendServers',
      oldBackendServers: 'OldBackendServers',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newBackendServers: 'string',
      oldBackendServers: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVServerGroupBackendServersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The backend servers.
   */
  backendServers?: ModifyVServerGroupBackendServersResponseBodyBackendServers;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DEC9C28-AB05-4DDF-9A78-6B08EC9CE18C
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the vServer group.
   * 
   * @example
   * rsp-cige6j****
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      requestId: 'RequestId',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: ModifyVServerGroupBackendServersResponseBodyBackendServers,
      requestId: 'string',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVServerGroupBackendServersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyVServerGroupBackendServersResponseBody;
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
      body: ModifyVServerGroupBackendServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource group to which you want to move the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aek2rpsek5h****
   */
  newResourceGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Classic Load Balancer (CLB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2dmxj56z****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-uf6ghek7ds2btzt65****
   */
  resourceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   **loadbalancer**: a CLB instance
   * *   **certificate**: a certificate
   * *   **acl**: an access control list (ACL)
   * 
   * This parameter is required.
   * 
   * @example
   * loadbalancer
   */
  resourceType?: string;
  /**
   * @remarks
   * The AccessKey ID provided by Alibaba Cloud.
   * 
   * @example
   * LTAI5tPmFGUpmyWwD8gp****
   */
  accessKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      accessKeyId: 'access_key_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      accessKeyId: 'string',
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
   * 18CAE30A-79CF-544C-86DB-EB36C739642E
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

export class RemoveAccessControlListEntryRequest extends $tea.Model {
  /**
   * @remarks
   * The IP entries that you want to remove from the network ACL. Valid values:
   * 
   * *   **entry**: the IP address or CIDR block that you want to remove from the network ACL. Separate multiple IP addresses or CIDR blocks with commas (,).
   * *   **comment**: the description of the network ACL.
   * 
   * @example
   * [{"entry":"10.0.10.0/24","comment":"privaterule1"}]
   */
  aclEntrys?: string;
  /**
   * @remarks
   * The ID of the network ACL.
   * 
   * This parameter is required.
   * 
   * @example
   * acl-bp1l0kk4gxce43k******
   */
  aclId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the network ACL is created.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aclEntrys: 'AclEntrys',
      aclId: 'AclId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntrys: 'string',
      aclId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAccessControlListEntryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 988CB45E-1643-48C0-87B4-928DDF77EA49
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

export class RemoveAccessControlListEntryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveAccessControlListEntryResponseBody;
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
      body: RemoveAccessControlListEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBackendServersRequest extends $tea.Model {
  /**
   * @remarks
   * The backend servers that you want to remove.
   * 
   * *   **ServerId**: The IDs of the backend servers. Set the value to a string. This parameter is required.
   * 
   * *   **Type**: the type of the backend server. Valid values:
   * 
   *     *   **ecs** (default): Elastic Compute Service (ECS) instance
   *     *   **eni**: elastic network interface (ENI)
   *     *   **eci**: elastic container instance
   * 
   * *   **Weight**: the weight of the backend server. Valid values: **0** to **100**. Set the value to an integer.
   * 
   * You can specify at most 20 backend servers in each call. Examples:
   * 
   * *   Remove ECS instances:
   * 
   * `[{"ServerId":"i-bp1fq61enf4loa5i****", "Type": "ecs","Weight":"100"}]`
   * 
   * *   Remove ENIs:
   * 
   * `[{"ServerId":"eni-2ze1sdp5****","Type": "eni","Weight":"100"}]`
   * 
   * *   Remove elastic container instances:
   * 
   * `[{"ServerId":"eci-2ze1sdp5****","Type": "eci","Weight":"100"}]`
   * 
   * This parameter is required.
   * 
   * @example
   * [{"ServerId":"i-bp1fq61enf4loa5i****", "Type": "ecs","Weight":"100"}]
   */
  backendServers?: string;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp15lbk8uja8rvm4a****
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the CLB instance is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: 'string',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBackendServersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The backend servers.
   */
  backendServers?: RemoveBackendServersResponseBodyBackendServers;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * @example
   * lb-bp15lbk8uja8rvm4a****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      loadBalancerId: 'LoadBalancerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: RemoveBackendServersResponseBodyBackendServers,
      loadBalancerId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBackendServersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveBackendServersResponseBody;
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
      body: RemoveBackendServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveListenerWhiteListItemRequest extends $tea.Model {
  /**
   * @remarks
   * The listening port.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The frontend protocol that is used by the CLB instance.
   * 
   * >  This parameter is required when listeners that use different protocols listen on the same port.
   * 
   * @example
   * https
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-8vb86hxixo8lvsja8****
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region where the Classic Load Balancer (CLB) instance is created.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of IP addresses or CIDR blocks that you want to remove from the whitelist. Separate multiple IP addresses or CIDR blocks with commas (,).
   * 
   * >  If all IP addresses are removed from the whitelist, the listener does not forward requests.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.XX.XX
   */
  sourceItems?: string;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceItems: 'SourceItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceItems: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveListenerWhiteListItemResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
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

export class RemoveListenerWhiteListItemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveListenerWhiteListItemResponseBody;
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
      body: RemoveListenerWhiteListItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsRequest extends $tea.Model {
  /**
   * @remarks
   * The SLB instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1l5j******
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the Server Load Balancer (SLB) instance is created.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/2401682.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * A list of tags to be removed.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"TagKey":"Key1","TagValue":"Value1"},{"TagKey":"Key2","TagValue":"Value2"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
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

export class RemoveTagsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveTagsResponseBody;
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
      body: RemoveTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVServerGroupBackendServersRequest extends $tea.Model {
  /**
   * @remarks
   * The backend servers that you want to remove. Configure the following parameters:
   * 
   * *   **ServerId**: Required. The ID of the backend server. Specify the value in a string. You can specify the ID of an Elastic Compute Service (ECS) instance, an elastic network interface (ENI), or an elastic container instance. If you set **ServerId** to the ID of an ENI or an elastic container instance, you must configure the **Type** parameter.
   * 
   * *   **Weight**: the weight of the backend server. Valid values: **0** to **100**. Default value: **100**. If you set the weight of a backend server to 0, no requests are forwarded to the backend server.
   * 
   * *   **Description**: Optional. The description of the backend server. Specify the value in a string. The description must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * *   **Type**: the type of the backend server. Valid values:
   * 
   *     *   **ecs**: ECS instance
   *     *   **eni**: ENI
   *     *   **eci**: elastic container instance
   * 
   * >  You can specify ENIs and elastic container instances as backend servers only for high-performance SLB instances.
   * 
   * *   **ServerIp**: the IP address of an ENI or an elastic container instance.
   * *   **Port**: the backend port.
   * 
   * Examples:
   * 
   * *   Add ECS instances:
   * 
   *     `[{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs", "Port":"80","Description":"test-112" }]`
   * 
   * *   Add ENIs:
   * 
   *     `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-112" }]`
   * 
   * *   Add ENIs with multiple IP addresses:
   * 
   *     `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-113" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``172.166.**.**``", "Port":"80","Description":"test-113" }]`
   * 
   * *   Add elastic container instances:
   * 
   *     `[{ "ServerId": "eci-xxxxxxxxx", "Weight": "100", "Type": "eci", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-114" }]`
   * 
   * >  You can add only running backend servers to SLB instances. You can specify at most 20 backend servers.
   * 
   * This parameter is required.
   * 
   * @example
   * [{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-112" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``172.166.**.**``", "Port":"80","Description":"test-113" }]
   */
  backendServers?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Server Load Balancer (SLB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the vServer group.
   * 
   * This parameter is required.
   * 
   * @example
   * rsp-cige6****
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVServerGroupBackendServersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The backend servers.
   */
  backendServers?: RemoveVServerGroupBackendServersResponseBodyBackendServers;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DEC9C28-AB05-4DDF-9A78-6B08EC9CE18C
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the vServer group.
   * 
   * @example
   * rsp-cige6j****
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      requestId: 'RequestId',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: RemoveVServerGroupBackendServersResponseBodyBackendServers,
      requestId: 'string',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVServerGroupBackendServersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveVServerGroupBackendServersResponseBody;
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
      body: RemoveVServerGroupBackendServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAccessControlListAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The ACL ID.
   * 
   * This parameter is required.
   * 
   * @example
   * acl-bp1l0kk4gxce43k******
   */
  aclId?: string;
  /**
   * @remarks
   * The ACL name.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  aclName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the ACL.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclName: 'AclName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAccessControlListAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 988CB45E-1643-48C0-87B4-928DDF77EA49
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

export class SetAccessControlListAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetAccessControlListAttributeResponseBody;
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
      body: SetAccessControlListAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAccessLogsDownloadAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * @example
   * lb-bp1b6c719dfa08ex*****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The access log forwarding rule. Parameters:
   * 
   * *   **LogProject**: the name of the project of Simple Log Service.
   * *   **LogStore**: the name of the Logstore of Simple Log Service.
   * *   **LoadBalancerId**: the ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"logProject":"my-project", "LogStore":"my-log-store", "LoadBalancerId":"lb-uf68ps3rekbljmdb0****"}]
   */
  logsDownloadAttributes?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags that are added to the CLB instance. The tags must be key-value pairs that are contained in a JSON dictionary.
   * 
   * You can specify up to 10 tags in each call.
   * 
   * @example
   * [{"tagKey":"Key1","tagValue":"Value1"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      logsDownloadAttributes: 'LogsDownloadAttributes',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      logsDownloadAttributes: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAccessLogsDownloadAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DEC9C28-AB05-4DDF-9A78-6B08EC9C****
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

export class SetAccessLogsDownloadAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetAccessLogsDownloadAttributeResponseBody;
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
      body: SetAccessLogsDownloadAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackendServersRequest extends $tea.Model {
  /**
   * @remarks
   * The backend servers that you want to add. Configure the following parameters:
   * 
   * *   **ServerId**: Required. The ID of the backend server. Specify the value in a string. You can specify the ID of an Elastic Compute Service (ECS) instance, an elastic network interface (ENI), or an elastic container instance. If you set **ServerId** to the ID of an ENI or an elastic container instance, you must configure the **Type** parameter.
   * 
   * *   **Weight**: the weight of the backend server. Valid values: **0** to **100**. Default value: **100**. If you set the weight of a backend server to 0, no requests are forwarded to the backend server.
   * 
   * *   **Description**: Optional. The description of the backend server. Specify the value in a string. The description must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * *   **Type**: the type of the backend server. Valid values:
   * 
   *     *   **ecs** (default): ECS instance
   *     *   **eni**: ENI
   *     *   **eci**: elastic container instance
   * 
   * >  You can specify ENIs and elastic container instances as backend servers only for high-performance CLB instances.
   * 
   * *   **ServerIp**: the IP address of the ENI or elastic container instance.
   * *   **Port**: the backend port.
   * 
   * Examples:
   * 
   * *   ECS instance:
   * 
   *     `[{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs", "Port":"80","Description":"test-112" }]`
   * 
   * *   ENI:
   * 
   *     `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-112" }]`
   * 
   * *   ENI with multiple IP addresses:
   * 
   *     `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-113" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``172.166.**.**``", "Port":"80","Description":"test-113" }]`
   * 
   * *   Elastic container instance:
   * 
   *     `[{ "ServerId": "eci-xxxxxxxxx", "Weight": "100", "Type": "eci", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-114" }]`
   * 
   * >  You can add only running backend servers to a CLB instance. You can specify at most 20 backend servers in each call.
   * 
   * @example
   * [{ "ServerId": "ecs-******FmYAXG", "Weight": "100", "Type": "ecs",  "Port":"80","Description":"test-112" }]
   */
  backendServers?: string;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1qjwo61pqz3a******
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Classic Load Balancer (CLB) instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: 'string',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackendServersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The backend servers.
   */
  backendServers?: SetBackendServersResponseBodyBackendServers;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * @example
   * lb-bp1qjwo61pqz3a******
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      loadBalancerId: 'LoadBalancerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: SetBackendServersResponseBodyBackendServers,
      loadBalancerId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackendServersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetBackendServersResponseBody;
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
      body: SetBackendServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCACertificateNameRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the CA certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 139a0******-cn-east-hangzhou-01
   */
  CACertificateId?: string;
  /**
   * @remarks
   * The CA certificate name.
   * 
   * The name must be 1 to 80 character in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * mycacert02
   */
  CACertificateName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region of the CA certificate.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      CACertificateId: 'CACertificateId',
      CACertificateName: 'CACertificateName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificateId: 'string',
      CACertificateName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCACertificateNameResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FE7BA984
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

export class SetCACertificateNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetCACertificateNameResponseBody;
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
      body: SetCACertificateNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainExtensionAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the domain name that is associated with the additional certificate to be replaced.
   * 
   * This parameter is required.
   * 
   * @example
   * de-bp1rp7ta*****
   */
  domainExtensionId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Server Load Balancer (SLB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the new certificate.
   * 
   * @example
   * 1231579xxxxxxxx_166f8204689_1714763408_709981xxx
   */
  serverCertificateId?: string;
  static names(): { [key: string]: string } {
    return {
      domainExtensionId: 'DomainExtensionId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serverCertificateId: 'ServerCertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainExtensionId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serverCertificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainExtensionAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 149A2470-F010-4437-BF68-343D5099C19D
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

export class SetDomainExtensionAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDomainExtensionAttributeResponseBody;
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
      body: SetDomainExtensionAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetListenerAccessControlStatusRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable the whitelist. Valid values:
   * 
   * *   **open_white_list**: enables the whitelist.
   * *   **close**: disables the whitelist.
   * 
   * >  After the whitelist is enabled, if no IP address is added to the whitelist, the CLB instance does not distribute network traffic.
   * 
   * This parameter is required.
   * 
   * @example
   * open_white_list
   */
  accessControlStatus?: string;
  /**
   * @remarks
   * The frontend port that is used by the CLB instance.
   * 
   * Valid values: **1 to 65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The frontend protocol that is used by the CLB instance.
   * 
   * >  This parameter is required when listeners that use different protocols listen on the same port.
   * 
   * @example
   * https
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-8vb86hxixo8lvsja8****
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region where the Classic Load Balancer (CLB) instance is created.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accessControlStatus: 'AccessControlStatus',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlStatus: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetListenerAccessControlStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
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

export class SetListenerAccessControlStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetListenerAccessControlStatusResponseBody;
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
      body: SetListenerAccessControlStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerDeleteProtectionRequest extends $tea.Model {
  /**
   * @remarks
   * Specify whether to enable or disable deletion protection for the SLB instance.
   * 
   * Valid values: **on and off**.
   * 
   * This parameter is required.
   * 
   * @example
   * off
   */
  deleteProtection?: string;
  /**
   * @remarks
   * The ID of the SLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1b6c719dfa08e*****
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region where the SLB instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      deleteProtection: 'DeleteProtection',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteProtection: 'string',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerDeleteProtectionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 791D8B68-AE0F-4174-AF54-088C8B3C5D54
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

export class SetLoadBalancerDeleteProtectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetLoadBalancerDeleteProtectionResponseBody;
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
      body: SetLoadBalancerDeleteProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerHTTPListenerAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the access control list (ACL) that is associated with the listener.
   * 
   * > This parameter is required when **AclStatus** is set to **on**.
   * 
   * @example
   * 123
   */
  aclId?: string;
  /**
   * @remarks
   * Specifies whether to enable access control. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  aclStatus?: string;
  /**
   * @remarks
   * The type of the ACL. Valid values:
   * 
   * *   **white**: a whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. Whitelists apply to scenarios where you want to allow only specific IP addresses to access an application. Risks may occur if a whitelist is improperly configured. If a whitelist is configured, only requests from IP addresses that are added to the whitelist are forwarded by the listener.
   * 
   * If you enable a whitelist but do not add an IP address to the ACL, the listener forwards all requests.
   * 
   * *   **black**: a blacklist. All requests from the IP addresses or CIDR blocks in the ACL are rejected. Blacklists apply to scenarios where you want to block access from specified IP addresses to an application.
   * 
   * If a blacklist is configured for a listener but no IP addresses are added to the blacklist, the listener forwards all requests.
   * 
   * > This parameter takes effect when the value of **AclStatus** is set to **on**.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The maximum bandwidth of the listener. Unit: Mbit/s. Set the value to
   * 
   * *   **-1**: For a pay-by-data-transfer Internet-facing CLB instance, this value specifies that the bandwidth of the listener is unlimited.
   * 
   * @example
   * -1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The cookie that is configured on the server.
   * 
   * The cookie must be 1 to 200 characters in length, and can contain ASCII characters and digits. It cannot contain commas (,), semicolons (;), or spaces. It cannot start with a dollar sign ($).
   * 
   * > This parameter is required when **StickySession** is set to **on** and **StickySessionType** is set to **server**.
   * 
   * @example
   * B490B5EBF6F3CD402E515D22BCDA****
   */
  cookie?: string;
  /**
   * @remarks
   * The timeout period of a cookie.
   * 
   * Valid values: **1** to **86400**. Unit: seconds.
   * 
   * > This parameter is required when **StickySession** is set to **on** and **StickySessionType** is set to **insert**.
   * 
   * @example
   * 500
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * The description of the listener.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable `GZIP` compression to compress specific types of files. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  gzip?: string;
  /**
   * @remarks
   * Specifies whether to enable the health check feature. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  healthCheck?: string;
  /**
   * @remarks
   * The port that is used for health checks.
   * 
   * Valid values: **1** to **65535**.
   * 
   * > This parameter takes effect only if you set **HealthCheck** to **on**.
   * 
   * @example
   * 8080
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name that is used for health checks. Valid values:
   * 
   * *   **$_ip**: the private IP address of a backend server. If you specify \\*\\*$_ip **or** ignore HealthCheckDomain\\*\\*, CLB uses the private IP addresses of backend servers as the health check domain names.
   * *   **domain**: The domain name must be 1 to 80 characters in length, and can contain letters, digits, periods (.), and hyphens (-).
   * 
   * > The parameter takes effect only if you set **HealthCheck** to **on**.
   * 
   * @example
   * 172.XX.XX.16
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code for a successful health check. Separate multiple HTTP status codes with commas (,).
   * 
   * Valid values: **http_2xx**, **http_3xx**, **http_4xx**, and **http_5xx**.
   * 
   * >  The parameter takes effect only if you set **HealthCheck** to **on**.
   * 
   * @example
   * http_2xx,http_3xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The interval at which health checks are performed.
   * 
   * Valid values: **1** to **50**. Unit: seconds.
   * 
   * >  The parameter takes effect only if you set **HealthCheck** to **on**.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The health check method that is used in HTTP health checks. Valid values: **head** and **get**.
   * 
   * > The parameter takes effect only if you set **HealthCheck** to **on**.
   * 
   * @example
   * get
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The timeout period of a health check response. If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check. This parameter takes effect only if the **HealthCheck** parameter is set to **on**.
   * 
   * Valid values: **1** to **300**. Unit: seconds.
   * 
   * @example
   * 3
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The Uniform Resource Identifier (URI) that you want to use for health checks.
   * 
   * The URI must be 1 to 80 characters in length, and can contain letters, digits, and the following characters: - / . % ? # & The URI must start with a forward slash (/) but cannot be a single forward slash (/).
   * 
   * > The parameter takes effect only if you set **HealthCheck** to **on**.
   * 
   * @example
   * /test/index.html
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from **fail** to **success**.
   * 
   * Valid values: **2** to **10**.
   * 
   * > The parameter takes effect only if you set **HealthCheck** to **on**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The timeout period of an idle connection. Unit: seconds. Valid values: **1 to 60**. Default value: **15**.
   * 
   * If no request is received within the specified timeout period, CLB closes the connection. When a request is received, CLB establishes a new connection.
   * 
   * @example
   * 12
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The frontend port that is used by the CLB instance.
   * 
   * Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The CLB instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1qjwo61pqz3ah*****
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * You can query the region ID from the [Regions and zones](https://help.aliyun.com/document_detail/27585.html) list or by calling the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The timeout period of a request. Unit: seconds. Valid values: **1 to 180**. Default value: **60**.
   * 
   * If no response is received from the backend server within the request timeout period, CLB returns an HTTP 504 error code to the client.
   * 
   * @example
   * 3
   */
  requestTimeout?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * *   **wrr**: Backend servers that have higher weights receive more requests than backend servers that have lower weights.
   * *   **rr**: Requests are distributed to backend servers in sequence.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * Specifies whether to enable session persistence. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  stickySession?: string;
  /**
   * @remarks
   * The method that is used to handle a cookie. Valid values:
   * 
   * *   **insert**: inserts a cookie.
   * 
   * CLB inserts a cookie (SERVERID) into the first HTTP or HTTPS response packet that is sent to a client. The next request from the client contains this cookie, and the listener distributes the request to the recorded backend server.
   * 
   * *   **server**: rewrites a cookie.
   * 
   * When CLB detects a user-defined cookie, CLB overwrites the original cookie with the user-defined cookie. The next request from the client carries the user-defined cookie, and the listener forwards the request to the recorded backend server.
   * 
   * > This parameter is required when **StickySession** is set to **on**.
   * 
   * @example
   * insert
   */
  stickySessionType?: string;
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from **success** to **fail**.
   * 
   * Valid values: **2** to **10**.
   * 
   * > The parameter takes effect only if you set **HealthCheck** to **on**.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * Specifies whether to use a vServer group. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  VServerGroup?: string;
  /**
   * @remarks
   * The ID of the vServer group.
   * 
   * @example
   * rsp-cige6j*****
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-For` header to preserve client IP addresses. Valid values:
   * 
   * *   **on** (default)
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor?: string;
  /**
   * @remarks
   * Specifies whether to use the `XForwardedFor_ClientSrcPort` header to retrieve the client port. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_ClientSrcPort?: string;
  /**
   * @remarks
   * Specifies whether to use the `SLB-ID` header to retrieve the ID of the CLB instance. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_SLBID?: string;
  /**
   * @remarks
   * Specifies whether to use the `SLB-IP` header to retrieve the virtual IP address (VIP) requested by the client. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_SLBIP?: string;
  /**
   * @remarks
   * Specifies whether to use the `XForwardedFor_SLBPORT` header to retrieve the listener port of the CLB instance. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_SLBPORT?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Proto` header to retrieve the listener protocol. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_proto?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      bandwidth: 'Bandwidth',
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      description: 'Description',
      gzip: 'Gzip',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      idleTimeout: 'IdleTimeout',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      requestTimeout: 'RequestTimeout',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduler: 'Scheduler',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroup: 'VServerGroup',
      VServerGroupId: 'VServerGroupId',
      XForwardedFor: 'XForwardedFor',
      XForwardedFor_ClientSrcPort: 'XForwardedFor_ClientSrcPort',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      XForwardedFor_SLBPORT: 'XForwardedFor_SLBPORT',
      XForwardedFor_proto: 'XForwardedFor_proto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclStatus: 'string',
      aclType: 'string',
      bandwidth: 'number',
      cookie: 'string',
      cookieTimeout: 'number',
      description: 'string',
      gzip: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      idleTimeout: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      requestTimeout: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduler: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      unhealthyThreshold: 'number',
      VServerGroup: 'string',
      VServerGroupId: 'string',
      XForwardedFor: 'string',
      XForwardedFor_ClientSrcPort: 'string',
      XForwardedFor_SLBID: 'string',
      XForwardedFor_SLBIP: 'string',
      XForwardedFor_SLBPORT: 'string',
      XForwardedFor_proto: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerHTTPListenerAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
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

export class SetLoadBalancerHTTPListenerAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetLoadBalancerHTTPListenerAttributeResponseBody;
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
      body: SetLoadBalancerHTTPListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerHTTPSListenerAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the network access control list (ACL) that is associated with the listener.
   * 
   * This parameter is required if **AclStatus** is set to **on**.
   * 
   * @example
   * nacl-a2do9e413e0spzasx****
   */
  aclId?: string;
  /**
   * @remarks
   * Specifies whether to enable access control. Valid values:
   * 
   * *   **on**: enables access control
   * *   **off**: disables access control
   * 
   * @example
   * off
   */
  aclStatus?: string;
  /**
   * @remarks
   * The type of network ACL. Valid values:
   * 
   * *   **white**: a whitelist. Only requests from the IP addresses or CIDR blocks in the network ACL are forwarded. Whitelists apply to scenarios where you want to allow only specific IP addresses to access an application. Your business may be adversely affected if the whitelist is not set properly. After a whitelist is configured, only IP addresses in the whitelist can access the CLB listener.
   * 
   *     If no IP address is added to the whitelist, the CLB listener forwards all requests.
   * 
   * *   **black**: a blacklist. All requests from the IP addresses or CIDR blocks in the network ACL are denied. Blacklists apply to scenarios where you want to deny access from specified IP addresses to an application.
   * 
   *     If no IP address is added to the blacklist, the listener forwards all requests.
   * 
   * >  This parameter takes effect only when **AclStatus** is set to **on**.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The maximum bandwidth of the listener. Unit: Mbit/s.
   * 
   * Valid values:
   * 
   * *   **-1**: If you set the value to -1, the bandwidth of the listener is unlimited.
   * 
   * @example
   * -1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The ID of the CA certificate.
   * 
   * *   If both the CA certificate and the server certificate are uploaded, mutual authentication is used.
   * *   If you upload only the server certificate, one-way authentication is used.
   * 
   * @example
   * 139a00604ad-cn-east-****
   */
  CACertificateId?: string;
  /**
   * @remarks
   * The cookie that you want to configure for the server.
   * 
   * The cookie must be 1 to 200 characters in length, and can contain only ASCII letters and digits. It cannot contain commas (,), semicolons (;), or space characters. It cannot start with a dollar sign ($).
   * 
   * >  This parameter is required when you set the **StickySession** parameter to **on** and the **StickySessionType** parameter to **server**.
   * 
   * @example
   * B490B5EBF6F3CD4****
   */
  cookie?: string;
  /**
   * @remarks
   * The timeout period of the cookie. Unit: seconds.
   * 
   * Valid values: **1** to **86400**.
   * 
   * >  This parameter is required if the **StickySession** parameter is set to **on** and the **StickySessionType** parameter is set to **insert**.
   * 
   * @example
   * 500
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * The description of the listener.
   * The name must be 1 to 256 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * @example
   * Listener1
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to use `HTTP 2.0`. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * off
   */
  enableHttp2?: string;
  /**
   * @remarks
   * Specifies whether to enable `Gzip` compression to compress specific types of files. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  gzip?: string;
  /**
   * @remarks
   * Specifies whether to enable health checks. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  healthCheck?: string;
  /**
   * @remarks
   * The port that is used for health checks.
   * 
   * Valid values: **1** to **65535**.
   * 
   * >  This parameter takes effect only when the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 8080
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name that is used for health checks. Valid values:
   * 
   * *   **$_ip**: the private IP address of a backend server. If you do not set this parameter or set the parameter to $_ip, the CLB instance uses the private IP address of each backend server as the domain name for health checks.
   * *   **domain**: The domain name must be 1 to 80 characters in length, and can contain letters, digits, periods (.),and hyphens (-).
   * 
   * >  This parameter takes effect only when the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 172.XX.XX.16
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code of a successful health check. Separate multiple HTTP status codes with commas (,).
   * 
   * Valid values: **http_2xx**, **http_3xx**, **http_4xx**, and **http_5xx**.
   * 
   * >  This parameter takes effect only when the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * http_2xx,http_3xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Unit: seconds.
   * 
   * Valid values: **1** to **50**.
   * 
   * >  This parameter takes effect only when the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The HTTP method that is used for health checks. Valid values: **head** and **get**.
   * 
   * >  This parameter takes effect only when the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * get
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The timeout period of a health check response. If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check. Unit: seconds Valid values: **1** to **300**.
   * 
   * >  This parameter takes effect only if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 3
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The URL that is used for health checks.
   * 
   * The URL must be 1 to 80 characters in length and can contain letters, digits, and the following characters: - / . % ? # &. The URL must not be a single forward slash (/) but it must start with a forward slash (/).
   * 
   * >  This parameter takes effect only when the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * /test/index.html
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of health checks that an unhealthy backend server must consecutively pass before it can be declared healthy (from **fail** to **success**).
   * 
   * Valid values: **2** to **10**.
   * 
   * >  This parameter takes effect only when the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The timeout period of an idle connection. Unit: seconds. Valid values: **1 to 60**. Default value: **15**.
   * 
   * If no request is received within the specified timeout period, CLB closes the connection. When another request is received, CLB establishes a new connection.
   * 
   * @example
   * 23
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The frontend port that is used by the CLB instance.
   * 
   * Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-sjhfdji****
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the CLB instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The timeout period of a request. Unit: seconds. Valid values: **1 to 180**. Default value: **60**.
   * 
   * If no response is received from the backend server during the request timeout period, CLB sends an HTTP 504 error code to the client.
   * 
   * @example
   * 223
   */
  requestTimeout?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * *   **wrr**: Backend servers that have higher weights receive more requests than backend servers that have lower weights.
   * *   **rr**: Requests are distributed to backend servers in sequence.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The ID of the server certificate.
   * 
   * @example
   * idkp-123-cn-te****
   */
  serverCertificateId?: string;
  /**
   * @remarks
   * Specifies whether to enable session persistence. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  stickySession?: string;
  /**
   * @remarks
   * The method that is used to handle a cookie. Valid values:
   * 
   * *   **insert**: inserts a cookie.
   * 
   *     CLB inserts a cookie (SERVERID) into the first HTTP or HTTPS response that is sent to a client. The next request from the client will contain this cookie, and the listener will distribute this request to the recorded backend server.
   * 
   * *   **server**: rewrites a cookie.
   * 
   *     When CLB detects a user-defined cookie, it overwrites the original cookie with the user-defined cookie. The next request from the client will contain the user-defined cookie, and the listener will distribute this request to the recorded backend server.
   * 
   * >  This parameter is required if the **StickySession** parameter is set to **on**.
   * 
   * @example
   * insert
   */
  stickySessionType?: string;
  /**
   * @remarks
   * The Transport Layer Security (TLS) security policy. Each security policy contains TLS protocol versions and cipher suites available for HTTPS.
   * 
   * *   **tls_cipher_policy_1_0**:
   * 
   *     Supported TLS versions: TLS 1.0, TLS 1.1, and TLS 1.2
   * 
   *     Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA
   * 
   * *   **tls_cipher_policy_1_1**:
   * 
   *     Supported TLS versions: TLS 1.1 and TLS 1.2
   * 
   *     Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA
   * 
   * *   **tls_cipher_policy_1_2**
   * 
   *     Supported TLS version: TLS 1.2
   * 
   *     Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA
   * 
   * *   **tls_cipher_policy_1_2_strict**
   * 
   *     Supported TLS version: TLS 1.2
   * 
   *     Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, ECDHE-RSA-AES128-SHA, and ECDHE-RSA-AES256-SHA
   * 
   * *   **tls_cipher_policy_1_2_strict_with_1_3**
   * 
   *     Supported TLS versions: TLS 1.2 and TLS 1.3
   * 
   *     Supported cipher suites: TLS_AES_128_GCM_SHA256, TLS_AES_256_GCM_SHA384, TLS_CHACHA20_POLY1305_SHA256, TLS_AES_128_CCM_SHA256, TLS_AES_128_CCM_8_SHA256, ECDHE-ECDSA-AES128-GCM-SHA256, ECDHE-ECDSA-AES256-GCM-SHA384, ECDHE-ECDSA-AES128-SHA256, ECDHE-ECDSA-AES256-SHA384, ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, ECDHE-ECDSA-AES128-SHA, ECDHE-ECDSA-AES256-SHA, ECDHE-RSA-AES128-SHA, and ECDHE-RSA-AES256-SHA
   * 
   * @example
   * tls_cipher_policy_1_2
   */
  TLSCipherPolicy?: string;
  /**
   * @remarks
   * The number of health checks that a healthy backend server must consecutively fail before it can be declared unhealthy (from **success** to **fail**).
   * 
   * Valid values: **2** to **10**.
   * 
   * >  This parameter takes effect only when the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * Specifies whether to use a vServer group. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  VServerGroup?: string;
  /**
   * @remarks
   * The ID of the vServer group.
   * 
   * @example
   * rsp-cige6j****
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-For` header to retrieve client IP addresses. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  XForwardedFor?: string;
  /**
   * @remarks
   * Specifies whether to use the `XForwardedFor_ClientSrcPort` header to retrieve the client port. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_ClientSrcPort?: string;
  /**
   * @remarks
   * Specifies whether to use the `SLB-ID` header to retrieve the ID of the CLB instance. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  XForwardedFor_SLBID?: string;
  /**
   * @remarks
   * Specifies whether to use the `SLB-IP` header to obtain the virtual IP address (VIP) requested by the client. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  XForwardedFor_SLBIP?: string;
  /**
   * @remarks
   * Specifies whether to use the `XForwardedFor_SLBPORT` header to retrieve the listener port of the CLB instance. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_SLBPORT?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Proto` header to retrieve the listener protocol. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  XForwardedFor_proto?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      bandwidth: 'Bandwidth',
      CACertificateId: 'CACertificateId',
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      description: 'Description',
      enableHttp2: 'EnableHttp2',
      gzip: 'Gzip',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      idleTimeout: 'IdleTimeout',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      requestTimeout: 'RequestTimeout',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduler: 'Scheduler',
      serverCertificateId: 'ServerCertificateId',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      TLSCipherPolicy: 'TLSCipherPolicy',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroup: 'VServerGroup',
      VServerGroupId: 'VServerGroupId',
      XForwardedFor: 'XForwardedFor',
      XForwardedFor_ClientSrcPort: 'XForwardedFor_ClientSrcPort',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      XForwardedFor_SLBPORT: 'XForwardedFor_SLBPORT',
      XForwardedFor_proto: 'XForwardedFor_proto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclStatus: 'string',
      aclType: 'string',
      bandwidth: 'number',
      CACertificateId: 'string',
      cookie: 'string',
      cookieTimeout: 'number',
      description: 'string',
      enableHttp2: 'string',
      gzip: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      idleTimeout: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      requestTimeout: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduler: 'string',
      serverCertificateId: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      TLSCipherPolicy: 'string',
      unhealthyThreshold: 'number',
      VServerGroup: 'string',
      VServerGroupId: 'string',
      XForwardedFor: 'string',
      XForwardedFor_ClientSrcPort: 'string',
      XForwardedFor_SLBID: 'string',
      XForwardedFor_SLBIP: 'string',
      XForwardedFor_SLBPORT: 'string',
      XForwardedFor_proto: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerHTTPSListenerAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
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

export class SetLoadBalancerHTTPSListenerAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetLoadBalancerHTTPSListenerAttributeResponseBody;
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
      body: SetLoadBalancerHTTPSListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerModificationProtectionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1b6c719dfa08e*****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The reason why the configuration read-only mode is enabled. The value must be 1 to 80 characters in length. It must start with a letter and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * >  This parameter is valid only if the **ModificationProtectionStatus** parameter is set to **ConsoleProtection**.
   * 
   * @example
   * Configuration change
   */
  modificationProtectionReason?: string;
  /**
   * @remarks
   * Specifies whether to enable the configuration read-only mode. Valid values:
   * 
   * *   **NonProtection**: disables the configuration read-only mode. After you disable the configuration read-only mode, the value of **ModificationProtectionReason** is cleared.
   * *   **ConsoleProtection**: enables the configuration read-only mode.
   * 
   * >  If you set this parameter to **ConsoleProtection**, you cannot use the CLB console to modify instance configurations. However, you can call API operations to modify instance configurations.
   * 
   * This parameter is required.
   * 
   * @example
   * ConsoleProtection
   */
  modificationProtectionStatus?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      modificationProtectionReason: 'ModificationProtectionReason',
      modificationProtectionStatus: 'ModificationProtectionStatus',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      modificationProtectionReason: 'string',
      modificationProtectionStatus: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerModificationProtectionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 791D8B68-AE0F-4174-AF54-088C8B3C5D54
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

export class SetLoadBalancerModificationProtectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetLoadBalancerModificationProtectionResponseBody;
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
      body: SetLoadBalancerModificationProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerNameRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1b6c719dfa08e******
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The new name of the CLB instance.
   * 
   * The name must be 1 to 80 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  loadBalancerName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the CLB instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerNameResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
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

export class SetLoadBalancerNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetLoadBalancerNameResponseBody;
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
      body: SetLoadBalancerNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1b6c719dfa08e******
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The state of the CLB instance. Valid values: **active** and **inactive**.
   * 
   * *   **active** (default)
   * 
   *     If a CLB instance is in the **active** state, listeners of the CLB instance can forward traffic based on forwarding rules.
   * 
   *     By default, newly created CLB instances are in the **active** state.
   * 
   * *   **inactive**
   * 
   *     If a CLB instance is in the **inactive** state, listeners of the CLB instance do not forward traffic.
   * 
   * >  If all listeners of a CLB instance are deleted, the CLB instance automatically switches to the **inactive** state.
   * 
   * This parameter is required.
   * 
   * @example
   * active
   */
  loadBalancerStatus?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the CLB instance is deployed.
   * 
   * You can query region IDs from the [Regions and zones](https://help.aliyun.com/document_detail/40654.html) list or by calling the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      loadBalancerStatus: 'LoadBalancerStatus',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      loadBalancerStatus: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
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

export class SetLoadBalancerStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetLoadBalancerStatusResponseBody;
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
      body: SetLoadBalancerStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerTCPListenerAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the network access control list (ACL) that is associated with the listener.
   * 
   * If **AclStatus** is set to **on**, this parameter is required.
   * 
   * @example
   * 12333
   */
  aclId?: string;
  /**
   * @remarks
   * Specifies whether to enable access control. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * off
   */
  aclStatus?: string;
  /**
   * @remarks
   * The type of the network ACL. Valid values:
   * 
   * *   **white**: a whitelist. Only requests from the IP addresses or CIDR blocks in the network ACL are forwarded. Whitelists apply to scenarios where you want to allow only specific IP addresses to access an application. Your service may be adversely affected if the allowlist is not properly configured. After a whitelist is configured, only requests from IP addresses that are added to the whitelist are forwarded by the listener.
   * 
   *     If you enable a whitelist but do not add an IP address to the ACL, the listener forwards all requests.
   * 
   * *   **black**: a blacklist. All requests from the IP addresses or CIDR blocks in the ACL are rejected. Blacklists apply to scenarios where you want to block access from specified IP addresses to an application.
   * 
   *     If a blacklist is configured for a listener but no IP address is added to the blacklist, the listener forwards all requests.
   * 
   * >  If **AclStatus** is set to **on**, this parameter is required.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The maximum bandwidth of the listener. Unit: Mbit/s. Valid values: **-1** and **1** to **5120**.
   * 
   * *   **-1**: For a pay-by-data-transfer Internet-facing CLB instance, you can set this parameter to **-1**, which specifies unlimited bandwidth.
   * *   **1** to **5120**: For a pay-by-bandwidth Internet-facing CLB instance, you can specify the maximum bandwidth of each listener. The sum of the maximum bandwidth values of all listeners cannot exceed the maximum bandwidth of the CLB instance.
   * 
   * @example
   * 43
   */
  bandwidth?: number;
  /**
   * @remarks
   * Specifies whether to enable connection draining. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * off
   */
  connectionDrain?: string;
  /**
   * @remarks
   * The timeout period of connection draining. This parameter is required if **ConnectionDrain** is set to **on**. Unit: seconds.
   * 
   * Valid values: **10** to **900**.
   * 
   * @example
   * 300
   */
  connectionDrainTimeout?: number;
  /**
   * @remarks
   * The name of the listener.
   * 
   * The name must be 1 to 256 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * @example
   * tcp_80
   */
  description?: string;
  /**
   * @remarks
   * The timeout period of a connection. Unit: seconds. Valid values: **10** to **900**.
   * 
   * @example
   * 500
   */
  establishedTimeout?: number;
  /**
   * @remarks
   * The port that is used for health checks. Valid values: **1** to **65535**.
   * 
   * If you do not set this parameter, the port specified by the **BackendServerPort** parameter is used.
   * 
   * @example
   * 8080
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The timeout period of a health check.
   * 
   * If a backend ECS instance does not return a health check response within the specified timeout period, the server fails the health check.
   * 
   * Valid values: **1** to **300**. Unit: seconds.
   * 
   * >  If the value of the **HealthCheckConnectTimeout** parameter is smaller than that of the **HealthCheckInterval** parameter, the timeout period specified by the **HCTimeout** parameter is ignored and the period of time specified by the **HealthCheckInterval** parameter is used as the timeout period.
   * 
   * @example
   * 100
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The domain name that is used for health checks. You can set this parameter when the TCP listener requires HTTP health checks. If you do not set this parameter, TCP health checks are performed.
   * 
   * *   **$_ip**: the private IP addresses of the backend servers.
   * 
   *     If you do not set the HealthCheckHost parameter or set the parameter to $SERVER_IP, the CLB instance uses the private IP addresses of backend servers for health checks.
   * 
   * *   **domain**: The domain name is 1 to 80 characters in length, and can contain letters, digits, periods (.), and hyphens (-).
   * 
   * @example
   * 192.168.XX.XX
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code for a successful health check. Separate multiple HTTP status codes with commas (,).
   * 
   * Valid values: **http_2xx**, **http_3xx**, **http_4xx**, and **http_5xx**.
   * 
   * @example
   * http_2xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Unit: seconds.
   * 
   * Valid values: **1** to **50**.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * Specifies whether to enable the health check feature. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  healthCheckSwitch?: string;
  /**
   * @remarks
   * The type of the health check. Valid values: **tcp** and **http**.
   * 
   * @example
   * tcp
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The URI that is used for health checks. The URI must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number signs (#), and ampersands (&). The URI must start with a forward slash (/) but cannot be a single forward slash (/).
   * 
   * You can set this parameter when the TCP listener requires HTTP health checks.
   * 
   * If you do not set this parameter, TCP health checks are performed.
   * 
   * @example
   * /test/index.html
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from **fail** to **success**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The frontend port used by the CLB instance.
   * 
   * Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1ygod3yctvg1y****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * Specifies whether to use a primary/secondary server group. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * You cannot set both **VserverGroup** and **MasterSlaveServerGroup** to **on**.
   * 
   * @example
   * on
   */
  masterSlaveServerGroup?: string;
  /**
   * @remarks
   * The ID of the primary/secondary server group.
   * 
   * >  You can set only one of the VServerGroupId and MasterSlaveServerGroupId parameters.
   * 
   * @example
   * rsp-cige****
   */
  masterSlaveServerGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The timeout period of session persistence. Valid values: **0** to **3600**. Unit: seconds.
   * 
   * Default value: **0**. If the default value is used, the system disables session persistence.
   * 
   * @example
   * 0
   */
  persistenceTimeout?: number;
  /**
   * @remarks
   * Specifies whether to use the Proxy protocol to pass client IP addresses to backend servers. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  proxyProtocolV2Enabled?: boolean;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * You can query the region ID from the [Regions and zones](https://help.aliyun.com/document_detail/40654.html) list or by calling the [DescribeRegions](~~DescribeRegions~~) operation.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * *   **wrr**: Backend servers that have higher weights receive more requests than backend servers that have lower weights.
   * *   **rr**: Requests are distributed to backend servers in sequence.
   * *   **sch**: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
   * *   **tch**: specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port, and destination port. Requests that contain the same information based on the four factors are distributed to the same backend server.
   * 
   * > 
   * *   Only high-performance CLB instances support the **sch** and **tch** algorithms.
   * *   CLB does not support converting the **wrr** and **rr** algorithms to sch or tch. You cannot switch the hash algorithm from one to another.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * Specifies whether to enable the SynProxy feature of CLB for protection. Valid values:
   * 
   * *   **enable**: yes
   * *   **disable**: no
   * 
   * We recommend that you use the default value of this parameter.
   * 
   * @example
   * enable
   */
  synProxy?: string;
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from **success** to **fail**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * Specifies whether to use a vServer group. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * >  You cannot set both **VserverGroup** and **MasterSlaveServerGroup** to **on**.
   * 
   * @example
   * on
   */
  VServerGroup?: string;
  /**
   * @remarks
   * The ID of the vServer group.
   * 
   * @example
   * rsp-cige6j5****
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      bandwidth: 'Bandwidth',
      connectionDrain: 'ConnectionDrain',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      description: 'Description',
      establishedTimeout: 'EstablishedTimeout',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckSwitch: 'HealthCheckSwitch',
      healthCheckType: 'HealthCheckType',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      masterSlaveServerGroup: 'MasterSlaveServerGroup',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      persistenceTimeout: 'PersistenceTimeout',
      proxyProtocolV2Enabled: 'ProxyProtocolV2Enabled',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduler: 'Scheduler',
      synProxy: 'SynProxy',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroup: 'VServerGroup',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclStatus: 'string',
      aclType: 'string',
      bandwidth: 'number',
      connectionDrain: 'string',
      connectionDrainTimeout: 'number',
      description: 'string',
      establishedTimeout: 'number',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckSwitch: 'string',
      healthCheckType: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      masterSlaveServerGroup: 'string',
      masterSlaveServerGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      persistenceTimeout: 'number',
      proxyProtocolV2Enabled: 'boolean',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduler: 'string',
      synProxy: 'string',
      unhealthyThreshold: 'number',
      VServerGroup: 'string',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerTCPListenerAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
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

export class SetLoadBalancerTCPListenerAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetLoadBalancerTCPListenerAttributeResponseBody;
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
      body: SetLoadBalancerTCPListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerUDPListenerAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the network access control list (ACL) that is associated with the listener.
   * 
   * >  If **AclStatus** is set to **on**, this parameter is required.
   * 
   * @example
   * off
   */
  aclId?: string;
  /**
   * @remarks
   * Specifies whether to enable access control. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * off
   */
  aclStatus?: string;
  /**
   * @remarks
   * The type of the network ACL. Valid values:
   * 
   * *   **white**: a whitelist. Only requests from the IP addresses or CIDR blocks in the network ACL are forwarded. Whitelists apply to scenarios where you want to allow only specific IP addresses to access an application. Your service may be adversely affected if the whitelist is not properly configured. After a whitelist is configured, only requests from IP addresses that are added to the whitelist are forwarded by the listener.
   * 
   *     If you enable a whitelist but do not add an IP address to the ACL, the listener forwards all requests.
   * 
   * *   **black**: a blacklist. All requests from the IP addresses or CIDR blocks in the network ACL are denied. Blacklists apply to scenarios where you want to block access from specified IP addresses to an application.
   * 
   *     If a blacklist is configured for a listener but no IP address is added to the blacklist, the listener forwards all requests.
   * 
   * >  If **AclStatus** is set to **on**, this parameter is required.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The maximum bandwidth of the listener. Unit: Mbit/s. Valid values:
   * 
   * *   **-1**: For a pay-by-data-transfer Internet-facing CLB instance, you can set this parameter to **-1**. This way, the bandwidth of the listener is unlimited.
   * *   **1** to **5120**: For a pay-by-bandwidth Internet-facing CLB instance, you can specify the maximum bandwidth of each listener. The sum of bandwidth limits that you set for all listeners cannot exceed the maximum bandwidth of the CLB instance.
   * 
   * @example
   * -1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The name of the listener.
   * 
   * The name must be 1 to 256 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * @example
   * udp_80
   */
  description?: string;
  /**
   * @remarks
   * The port that is used for health checks.
   * 
   * Valid values: **1** to **65535**.
   * 
   * @example
   * 80
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The timeout period of a health check. If a backend server, such as an Elastic Compute Service (ECS) instance, does not return a health check response within the specified timeout period, the server fails the health check. Unit: seconds.
   * 
   * Valid values: **1** to **300**.
   * 
   * >  If the value of the **HealthCheckConnectTimeout** parameter is smaller than that of the **HealthCheckInterval** parameter, the timeout period specified by the **HealthCheckConnectTimeout** parameter is ignored and the period of time specified by the **HealthCheckInterval** parameter is used as the timeout period.
   * 
   * @example
   * 100
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The interval at which health checks are performed. Unit: seconds.
   * 
   * Valid values: **1** to **50**.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * Specifies whether to enable the health check feature. Valid values:
   * 
   * *   **on** (default): yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  healthCheckSwitch?: string;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it can be declared healthy (from **fail** to **success**).
   * 
   * Valid values: **1** to **10**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The frontend port used by the CLB instance.
   * 
   * Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1rtfnodmywb43ecu4sf-c****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * Specifies whether to use a primary/secondary server group. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * >  You cannot set **VserverGroup** and **MasterSlaveServerGroup** both to **on**.
   * 
   * @example
   * on
   */
  masterSlaveServerGroup?: string;
  /**
   * @remarks
   * The ID of the primary/secondary server group.
   * 
   * >  You cannot specify both VServerGroupId and MasterSlaveServerGroupId.
   * 
   * @example
   * rsp-0bfuc****
   */
  masterSlaveServerGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to use the Proxy protocol to pass client IP addresses to backend servers. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * @example
   * false
   */
  proxyProtocolV2Enabled?: boolean;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * *   **wrr**: Backend servers with higher weights receive more requests than those with lower weights.
   * 
   *     If two backend servers have the same weight, the backend server that has fewer connections is expected to receive more requests.
   * 
   * *   **rr**: Requests are distributed to backend servers in sequence.
   * 
   * *   **sch**: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
   * 
   * *   **tch**: specifies consistent hashing that is based on the following parameters: source IP address, destination IP address, source port, and destination port. Requests that contain the same preceding information are distributed to the same backend server.
   * 
   * *   **qch**: specifies consistent hashing that is based on QUIC connection IDs. Requests that contain the same QUIC connection ID are distributed to the same backend server.
   * 
   * > 
   * *   Only high-performance CLB instances support **sch**, **tch**, and **qch**.
   * *   You cannot switch the algorithm used by a CLB instance from **wrr** or **rr** to consistent hashing or from consistent hashing to weighted round robin or round robin.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from **success** to **fail**.
   * 
   * Valid values: **1** to **10**.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * Specifies whether to use a vServer group. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * >  You cannot set both **VserverGroup** and **MasterSlaveServerGroup** to **on**.
   * 
   * @example
   * on
   */
  VServerGroup?: string;
  /**
   * @remarks
   * The ID of the vServer group.
   * 
   * @example
   * rsp-cige6****
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * The response string for UDP listener health checks. The string must be 1 to 64 characters in length and can contain only letters and digits.
   * 
   * @example
   * ok
   */
  healthCheckExp?: string;
  /**
   * @remarks
   * The request string for UDP listener health checks. The string must be 1 to 64 characters in length and can contain only letters and digits.
   * 
   * @example
   * hello
   */
  healthCheckReq?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      bandwidth: 'Bandwidth',
      description: 'Description',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckSwitch: 'HealthCheckSwitch',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      masterSlaveServerGroup: 'MasterSlaveServerGroup',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      proxyProtocolV2Enabled: 'ProxyProtocolV2Enabled',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduler: 'Scheduler',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroup: 'VServerGroup',
      VServerGroupId: 'VServerGroupId',
      healthCheckExp: 'healthCheckExp',
      healthCheckReq: 'healthCheckReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclStatus: 'string',
      aclType: 'string',
      bandwidth: 'number',
      description: 'string',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckInterval: 'number',
      healthCheckSwitch: 'string',
      healthyThreshold: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      masterSlaveServerGroup: 'string',
      masterSlaveServerGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      proxyProtocolV2Enabled: 'boolean',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduler: 'string',
      unhealthyThreshold: 'number',
      VServerGroup: 'string',
      VServerGroupId: 'string',
      healthCheckExp: 'string',
      healthCheckReq: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerUDPListenerAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
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

export class SetLoadBalancerUDPListenerAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetLoadBalancerUDPListenerAttributeResponseBody;
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
      body: SetLoadBalancerUDPListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRuleRequest extends $tea.Model {
  /**
   * @remarks
   * The cookie that is configured on the server.
   * 
   * The cookie must be 1 to 200 characters in length and can contain only ASCII characters and digits. It cannot contain commas (,), semicolons (;), or space characters. It cannot start with a dollar sign ($).
   * 
   * >  This parameter is required and takes effect if **StickySession** is set to **on** and **StickySessionType** is set to **server**.
   * 
   * @example
   * 23ffsa
   */
  cookie?: string;
  /**
   * @remarks
   * The timeout period of a cookie. Unit: seconds. Valid values: **1** to **86400**.
   * 
   * >  This parameter is required and takes effect if **StickySession** is set to **on** and **StickySessionType** is set to **insert**.
   * 
   * @example
   * 123
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * Specifies whether to enable the health check feature. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * >  This parameter is required and takes effect if the **ListenerSync** parameter is set to **off**.
   * 
   * @example
   * off
   */
  healthCheck?: string;
  /**
   * @remarks
   * The port that is used for health checks. Valid values: **1** to **65535**.
   * 
   * >  This parameter takes effect when the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 80
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name that is used for health checks. Valid values:
   * 
   * *   **$_ip**: the private IP address of a backend server. If you do not set this parameter or set the parameter to $_ip, the SLB instance uses the private IP address of each backend server for health checks.
   * *   **domain**: The domain name must be 1 to 80 characters in length, and can contain letters, digits, periods (.), and hyphens (-).
   * 
   * >  This parameter takes effect if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * $_ip
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code for a successful health check. Multiple HTTP status codes are separated by commas (,).
   * 
   * Valid values: **http_2xx**, **http_3xx**, **http_4xx**, and **http_5xx**.
   * 
   * >  This parameter is required and takes effect if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * http_2xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Unit: seconds. Valid values: **1** to **50**.
   * 
   * >  This parameter is required and takes effect if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 20
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The timeout period of a health check response. If a backend server, such as an Elastic Compute Service (ECS) instance, does not return a health check response within the specified timeout period, the server fails the health check. Unit: seconds. Valid values: **1** to **300**.
   * 
   * >  This parameter is required and takes effect if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 20
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The URI that is used for health checks.
   * 
   * >  This parameter is required and takes effect if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * /example
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from **fail** to **success**.
   * 
   * Valid values: **2** to **10**.
   * 
   * >  This parameter is required and takes effect if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * Specifies whether to use the scheduling algorithm, session persistence, and health check configurations of the listener. Valid values:
   * 
   * *   **on**: uses the configurations of the listener.
   * *   **off**: does not use the configurations of the listener. You can customize the health check and session persistence configurations for the forwarding rule.
   * 
   * @example
   * off
   */
  listenerSync?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the Classic Load Balancer (CLB) instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * This parameter is required.
   * 
   * @example
   * rule-3ejhkt****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the forwarding rule. The name must be 1 to 40 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * > On the same listener, the forwarding rule names must be unique.
   * 
   * @example
   * doctest
   */
  ruleName?: string;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * *   **wrr**: Backend servers with higher weights receive more requests than those with lower weights.
   * *   **rr**: Requests are distributed to backend servers in sequence.
   * 
   * >  This parameter is required and takes effect if the **ListenerSync** parameter is set to **off**.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * Specifies whether to enable session persistence. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * This parameter is required and takes effect if the **ListenerSync** parameter is set to **off**.
   * 
   * @example
   * off
   */
  stickySession?: string;
  /**
   * @remarks
   * The method that is used to handle a cookie. Valid values:
   * 
   * *   **insert**: inserts a cookie.
   * 
   *     CLB inserts the backend server ID as a cookie into the first HTTP or HTTPS response that is sent to a client. The next request from the client will contain this cookie, and the listener will distribute this request to the recorded backend server.
   * 
   * *   **server**: rewrites a cookie.
   * 
   *     When CLB detects a user-defined cookie, it overwrites the original cookie with the user-defined cookie. The next request from the client will contain the user-defined cookie, and the listener will distribute this request to the recorded backend server.
   * 
   * >  This parameter is required and takes effect if the **StickySession** parameter is set to **on**.
   * 
   * @example
   * insert
   */
  stickySessionType?: string;
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from **success** to **fail**.
   * 
   * Valid values: **2** to **10**.
   * 
   * >  This parameter is required and takes effect if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * The ID of the vServer group that is associated with the forwarding rule.
   * 
   * @example
   * rsp-cige6****
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      listenerSync: 'ListenerSync',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      scheduler: 'Scheduler',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      listenerSync: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ruleId: 'string',
      ruleName: 'string',
      scheduler: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      unhealthyThreshold: 'number',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRuleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9DEC9C28-AB05-4DDF-9A78-6B08EC9CE18C
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

export class SetRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetRuleResponseBody;
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
      body: SetRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetServerCertificateNameRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Classic Load Balancer (CLB) instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/2401682.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the server certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 139a0******-cn-east-hangzhou-01
   */
  serverCertificateId?: string;
  /**
   * @remarks
   * The name of the third-party server certificate that you want to upload. The name must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), underscores (_), and asterisks (\\*).
   * 
   * This parameter is required.
   * 
   * @example
   * abc
   */
  serverCertificateName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serverCertificateId: 'ServerCertificateId',
      serverCertificateName: 'ServerCertificateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serverCertificateId: 'string',
      serverCertificateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetServerCertificateNameResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FE7BA984
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

export class SetServerCertificateNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetServerCertificateNameResponseBody;
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
      body: SetServerCertificateNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTLSCipherPolicyAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The cipher suites supported by the TLS version.
   * 
   * The specified cipher suites must be supported by at least one TLS protocol version that you specify. For example, if you set the TLSVersions parameter to TLSv1.3, you must specify cipher suites that are supported by this protocol version.
   * 
   * TLS 1.0 and TLS 1.1 support the following cipher suites:
   * 
   * *   ECDHE-ECDSA-AES128-SHA
   * *   ECDHE-ECDSA-AES256-SHA
   * *   ECDHE-RSA-AES128-SHA
   * *   ECDHE-RSA-AES256-SHA
   * *   AES128-SHA AES256-SHA
   * *   DES-CBC3-SHA
   * 
   * TLS 1.2 supports the following cipher suites:
   * 
   * *   ECDHE-ECDSA-AES128-SHA
   * *   ECDHE-ECDSA-AES256-SHA
   * *   ECDHE-RSA-AES128-SHA
   * *   ECDHE-RSA-AES256-SHA
   * *   AES128-SHA AES256-SHA
   * *   DES-CBC3-SHA
   * *   ECDHE-ECDSA-AES128-GCM-SHA256
   * *   ECDHE-ECDSA-AES256-GCM-SHA384
   * *   ECDHE-ECDSA-AES128-SHA256
   * *   ECDHE-ECDSA-AES256-SHA384
   * *   ECDHE-RSA-AES128-GCM-SHA256
   * *   ECDHE-RSA-AES256-GCM-SHA384
   * *   ECDHE-RSA-AES128-SHA256
   * *   ECDHE-RSA-AES256-SHA384
   * *   AES128-GCM-SHA256
   * *   AES256-GCM-SHA384
   * *   AES128-SHA256 AES256-SHA256
   * 
   * TLS 1.3 supports the following cipher suites:
   * 
   * *   TLS_AES_128_GCM_SHA256
   * *   TLS_AES_256_GCM_SHA384
   * *   TLS_CHACHA20_POLY1305_SHA256
   * *   TLS_AES_128_CCM_SHA256
   * *   TLS_AES_128_CCM_8_SHA256
   * 
   * This parameter is required.
   * 
   * @example
   * DES-CBC3-SHA
   */
  ciphers?: string[];
  /**
   * @remarks
   * The name of the TLS policy. The name must be 2 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * tls-policy*****-test
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the Server Load Balancer (SLB) instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the TLS policy.
   * 
   * This parameter is required.
   * 
   * @example
   * tls-bp1lp2076qx4e******bridp
   */
  TLSCipherPolicyId?: string;
  /**
   * @remarks
   * The version of the TLS protocol. Valid values: **TLSv1.0**, **TLSv1.1**, **TLSv1.2**, and **TLSv1.3**.
   * 
   * This parameter is required.
   * 
   * @example
   * TLSv1.0
   */
  TLSVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      TLSCipherPolicyId: 'TLSCipherPolicyId',
      TLSVersions: 'TLSVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      TLSCipherPolicyId: 'string',
      TLSVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTLSCipherPolicyAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af****-18f6aed5
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTLSCipherPolicyAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetTLSCipherPolicyAttributeResponseBody;
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
      body: SetTLSCipherPolicyAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVServerGroupAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The backend servers. This operation only can be used to modify the weights of backend servers and names of vServer groups. Configure the following parameters:
   * 
   * *   **ServerId**: Required. The ID of the backend server. Specify the value in a string. You can specify the ID of an Elastic Compute Service (ECS) instance, an elastic network interface (ENI), or an elastic container instance. If you set **ServerId** to the ID of an ENI or an elastic container instance, you must configure the **Type** parameter.
   * 
   * *   **Weight**: the weight of the backend server. Valid values: **0** to **100**. Default value: **100**. If you set the weight of a backend server to 0, no requests are forwarded to the backend server.
   * 
   * *   **Description**: Optional. The description of the backend server. Specify the value in a string. The description must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * *   **Type**: the type of the backend server. Valid values:
   * 
   *     *   **ecs** (default): ECS instance
   *     *   **eni**: ENI
   *     *   **eci**: elastic container instance
   * 
   * >  You can specify ENIs and elastic container instances as backend servers only for high-performance CLB instances.
   * 
   * *   **ServerIp**: the IP address of an ENI or an elastic container instance.
   * *   **Port**: the backend port.
   * 
   * Examples:
   * 
   * *   Add ECS instances:
   * 
   *     `[{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs", "Port":"80","Description":"test-112" }]`
   * 
   * *   Add ENIs:
   * 
   *     `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-112" }]`
   * 
   * *   Add ENIs with multiple IP addresses:
   * 
   *     `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-113" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``172.166.**.**``", "Port":"80","Description":"test-113" }]`
   * 
   * *   Add elastic container instances:
   * 
   *     `[{ "ServerId": "eci-xxxxxxxxx", "Weight": "100", "Type": "eci", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-114" }]`
   * 
   * >  You can add only running backend servers to SLB instances. You can specify at most 20 backend servers in each call.
   * 
   * @example
   * [{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.XX.XX.6", "Port":"80","Description":"test-112" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "172.XX.XX.6", "Port":"80","Description":"test-113" }]
   */
  backendServers?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Server Load Balancer (SLB) instance, which cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The vServer group ID, which cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * rsp-cige6****
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * The vServer group name. You can specify a name.
   * 
   * @example
   * Group1
   */
  VServerGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      VServerGroupId: 'VServerGroupId',
      VServerGroupName: 'VServerGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      VServerGroupId: 'string',
      VServerGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVServerGroupAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The backend servers.
   */
  backendServers?: SetVServerGroupAttributeResponseBodyBackendServers;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DEC9C28-AB05-4DDF-9A78-6B08EC9CE18C
   */
  requestId?: string;
  /**
   * @remarks
   * The server group ID.
   * 
   * @example
   * rsp-cige6****
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * The name of the vServer group.
   * 
   * @example
   * Group1
   */
  VServerGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      requestId: 'RequestId',
      VServerGroupId: 'VServerGroupId',
      VServerGroupName: 'VServerGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: SetVServerGroupAttributeResponseBodyBackendServers,
      requestId: 'string',
      VServerGroupId: 'string',
      VServerGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVServerGroupAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetVServerGroupAttributeResponseBody;
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
      body: SetVServerGroupAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartLoadBalancerListenerRequest extends $tea.Model {
  /**
   * @remarks
   * The frontend port that is used by the CLB instance.
   * 
   * Valid values: **1 to 65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The frontend protocol that is used by the CLB instance.
   * 
   * >  This parameter is required if the same port is used by listeners of different protocols.
   * 
   * @example
   * https
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The CLB instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp13jaf5qli5*********
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region where the CLB instance is created.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartLoadBalancerListenerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
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

export class StartLoadBalancerListenerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartLoadBalancerListenerResponseBody;
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
      body: StartLoadBalancerListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopLoadBalancerListenerRequest extends $tea.Model {
  /**
   * @remarks
   * The frontend port that is used by the CLB instance.
   * 
   * Valid values: **1 to 65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The frontend protocol that is used by the CLB instance.
   * 
   * > This parameter is required if the same port is used by listeners of different protocols.
   * 
   * @example
   * https
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The CLB instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp13jaf5qli5xmg******
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region to which the SLB instance belongs.
   * 
   * To query the region ID, refer to the list of  [regions and zones](https://help.aliyun.com/document_detail/40654.html) or call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopLoadBalancerListenerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
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

export class StopLoadBalancerListenerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopLoadBalancerListenerResponseBody;
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
      body: StopLoadBalancerListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the Server Load Balancer (SLB) instance is created.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource. You can specify at most 20 resources.
   * 
   * >  Set **ResourceId** of the **listener** to **LoadBalancerId_Listener protocol_Port**. Set LoadBalancerId to the ID of the SLB instance, and Port to the listener port. Example: lb-bp1snb10sbml4\\*\\*\\*\\*_http_80.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp16qjewdsunr41m1****
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   **instance**: a Server Load Balancer (SLB) instance
   * *   **certificate**: a certificate
   * *   **acl**: an access control list (ACL)
   * *   **listener**: a listener
   * *   **vservergroup**: a vServer group
   * *   **masterslaveservergroup**: a primary/secondary server group
   * 
   * This parameter is required.
   * 
   * @example
   * instance
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
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

export class UntagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the specified resource. This parameter takes effect only if **TagKey.N** is empty.
   * 
   * Valid values: **true** and **false**.
   * 
   * @example
   * true
   */
  all?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Classic Load Balancer (CLB) instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource. You can specify at most 20 resources.
   * 
   * >  Set **ResourceId** of the **listener** to **LoadBalancerId_Listener protocol_Port**. Set LoadBalancerId to the ID of the CLB instance, and Port to the listener port.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp16qjewdsunr41m1****
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of resource. Valid values:
   * 
   * *   **instance**: CLB instance
   * *   **certificate**: certificate
   * *   **acl**: access control list (ACL)
   * *   **listener**: listener
   * *   **vservergroup**: vServer group
   * *   **masterslaveservergroup**: primary/secondary server group
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key. You can specify at most 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.
   * 
   * >  If you do not specify **TagKey**, all tags are removed from the instance.
   * 
   * @example
   * FinanceDept
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C46FF5A8-C5F0-4024-8262-B16B639225A0
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

export class UntagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
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
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCACertificateRequest extends $tea.Model {
  /**
   * @remarks
   * The information about the CA certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  CACertificate?: string;
  /**
   * @remarks
   * The CA certificate name.
   * 
   * @example
   * mycacert01
   */
  CACertificateName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region of the CA certificates.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/2401682.html) operation to query the most recent region list.
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
   * @example
   * rg-atstuj3rto*****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * UploadCACertificate
   */
  tag?: UploadCACertificateRequestTag[];
  static names(): { [key: string]: string } {
    return {
      CACertificate: 'CACertificate',
      CACertificateName: 'CACertificateName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificate: 'string',
      CACertificateName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': UploadCACertificateRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCACertificateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the CA certificate.
   * 
   * @example
   * 139a0******-cn-east-hangzhou-01
   */
  CACertificateId?: string;
  /**
   * @remarks
   * The CA certificate name.
   * 
   * @example
   * mycacert01
   */
  CACertificateName?: string;
  /**
   * @remarks
   * The domain name on the CA certificate.
   * 
   * @example
   * .example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The time when the CA certificate was created.
   * 
   * @example
   * 2017-08-31T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The timestamp when the CA certificate was created.
   * 
   * @example
   * 1504147745000
   */
  createTimeStamp?: number;
  /**
   * @remarks
   * The time when the CA certificate expires.
   * 
   * @example
   * 2024-11-21T06:04:25Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The timestamp when the server certificate expires.
   * 
   * @example
   * 1732169065000
   */
  expireTimeStamp?: number;
  /**
   * @remarks
   * The fingerprint of the server certificate.
   * 
   * @example
   * 02:DF:AB:ED
   */
  fingerprint?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-atstuj3rt******
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      CACertificateId: 'CACertificateId',
      CACertificateName: 'CACertificateName',
      commonName: 'CommonName',
      createTime: 'CreateTime',
      createTimeStamp: 'CreateTimeStamp',
      expireTime: 'ExpireTime',
      expireTimeStamp: 'ExpireTimeStamp',
      fingerprint: 'Fingerprint',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificateId: 'string',
      CACertificateName: 'string',
      commonName: 'string',
      createTime: 'string',
      createTimeStamp: 'number',
      expireTime: 'string',
      expireTimeStamp: 'number',
      fingerprint: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCACertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadCACertificateResponseBody;
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
      body: UploadCACertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadServerCertificateRequest extends $tea.Model {
  /**
   * @remarks
   * AliCloud certificate ID.
   * 
   * @example
   * 775****
   */
  aliCloudCertificateId?: string;
  /**
   * @remarks
   * AliCloud certificate name.
   * 
   * @example
   * cloudcertificate
   */
  aliCloudCertificateName?: string;
  /**
   * @remarks
   * The region ID of AliCloud certificate.
   * 
   * @example
   * cn-hangzhou
   */
  aliCloudCertificateRegionId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The private key of the certificate.
   * 
   * @example
   * -----BEGIN RSA PRIVATE KEY----- MIIEogIB****** -----END RSA PRIVATE KEY-----
   */
  privateKey?: string;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-atstuj3rto****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The server certificate to be uploaded.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIGDTCC****** -----END CERTIFICATE-----
   */
  serverCertificate?: string;
  /**
   * @remarks
   * The name of the server certificate.
   * 
   * The name must be 1 to 80 characters in length. It must start with an English letter. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * mycert01
   */
  serverCertificateName?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: UploadServerCertificateRequestTag[];
  static names(): { [key: string]: string } {
    return {
      aliCloudCertificateId: 'AliCloudCertificateId',
      aliCloudCertificateName: 'AliCloudCertificateName',
      aliCloudCertificateRegionId: 'AliCloudCertificateRegionId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      privateKey: 'PrivateKey',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serverCertificate: 'ServerCertificate',
      serverCertificateName: 'ServerCertificateName',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliCloudCertificateId: 'string',
      aliCloudCertificateName: 'string',
      aliCloudCertificateRegionId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      privateKey: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serverCertificate: 'string',
      serverCertificateName: 'string',
      tag: { 'type': 'array', 'itemType': UploadServerCertificateRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadServerCertificateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The AliCloud certificate ID.
   * 
   * @example
   * 775****
   */
  aliCloudCertificateId?: string;
  /**
   * @remarks
   * The AliCloud certificate name.
   * 
   * @example
   * cloudcertificate****
   */
  aliCloudCertificateName?: string;
  /**
   * @remarks
   * The domain name of the CA certificate.
   * 
   * @example
   * example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The time when the CA certificate is uploaded.
   * 
   * @example
   * 2022-02-21T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The timestamp generated when the CA certificate is uploaded.
   * 
   * @example
   * 1504147745000
   */
  createTimeStamp?: number;
  /**
   * @remarks
   * The time when the CA certificate expires.
   * 
   * @example
   * 2022-10-18T23:59:59Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The timestamp generated when the CA certificate expires.
   * 
   * @example
   * 1504147745000
   */
  expireTimeStamp?: number;
  /**
   * @remarks
   * The fingerprint of the CA certificate.
   * 
   * @example
   * 8f:7d:cb:e5:f8:c8:33:9c:17:65:c1:92:30:9e:45:55:9c:3a:85:60
   */
  fingerprint?: string;
  /**
   * @remarks
   * Indicates whether the certificate is provided by Alibaba Cloud Certificate Management Service. Valid values:
   * - **0**: The certificate is not provided by Alibaba Cloud Certificate Management Service.
   * - **1**: The certificate is provided by Alibaba Cloud Certificate Management Service.
   * 
   * @example
   * 0
   */
  isAliCloudCertificate?: number;
  /**
   * @remarks
   * The ID of the region where the Classic Load Balancer (CLB) instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-atstuj3rt****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the server certificate.
   * 
   * @example
   * 1321932713******_17f1b4b696b_1114720822_-1671******
   */
  serverCertificateId?: string;
  /**
   * @remarks
   * The name of the server certificate.
   * 
   * The name must be 1 to 80 characters in length. It must start with an English letter. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * mycert01
   */
  serverCertificateName?: string;
  /**
   * @remarks
   * The subject alternative names.
   * 
   * A domain name list is supported. A maximum of 10 domain names are supported.
   */
  subjectAlternativeNames?: UploadServerCertificateResponseBodySubjectAlternativeNames;
  static names(): { [key: string]: string } {
    return {
      aliCloudCertificateId: 'AliCloudCertificateId',
      aliCloudCertificateName: 'AliCloudCertificateName',
      commonName: 'CommonName',
      createTime: 'CreateTime',
      createTimeStamp: 'CreateTimeStamp',
      expireTime: 'ExpireTime',
      expireTimeStamp: 'ExpireTimeStamp',
      fingerprint: 'Fingerprint',
      isAliCloudCertificate: 'IsAliCloudCertificate',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      serverCertificateId: 'ServerCertificateId',
      serverCertificateName: 'ServerCertificateName',
      subjectAlternativeNames: 'SubjectAlternativeNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliCloudCertificateId: 'string',
      aliCloudCertificateName: 'string',
      commonName: 'string',
      createTime: 'string',
      createTimeStamp: 'number',
      expireTime: 'string',
      expireTimeStamp: 'number',
      fingerprint: 'string',
      isAliCloudCertificate: 'number',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      serverCertificateId: 'string',
      serverCertificateName: 'string',
      subjectAlternativeNames: UploadServerCertificateResponseBodySubjectAlternativeNames,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadServerCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadServerCertificateResponseBody;
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
      body: UploadServerCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBackendServersResponseBodyBackendServersBackendServer extends $tea.Model {
  /**
   * @remarks
   * The description of the backend server.
   * 
   * @example
   * backend server
   */
  description?: string;
  /**
   * @remarks
   * The ID of the ECS instance, ENI, or elastic container instance.
   * 
   * @example
   * i-2zej4lxhjoq1icu*****
   */
  serverId?: string;
  /**
   * @remarks
   * The type of the backend server. Valid values:
   * 
   * *   **ecs** (default): an ECS instance
   * *   **eni**: an ENI
   * *   **eci**: an elastic container instance
   * 
   * @example
   * ecs
   */
  type?: string;
  /**
   * @remarks
   * The weight of the backend server.
   * 
   * Valid values: **0 to 100**. Default value: **100**.
   * 
   * If the value is set to **0**, no requests are forwarded to the backend server.
   * 
   * @example
   * 100
   */
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      serverId: 'string',
      type: 'string',
      weight: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBackendServersResponseBodyBackendServers extends $tea.Model {
  backendServer?: AddBackendServersResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': AddBackendServersResponseBodyBackendServersBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVServerGroupBackendServersResponseBodyBackendServersBackendServer extends $tea.Model {
  /**
   * @remarks
   * The description of the vServer group.
   * 
   * @example
   * backend server
   */
  description?: string;
  /**
   * @remarks
   * The port that is used by the backend server.
   * 
   * @example
   * 70
   */
  port?: number;
  /**
   * @remarks
   * The ID of the ECS instance or ENI.
   * 
   * @example
   * eni-hhshhs****
   */
  serverId?: string;
  /**
   * @remarks
   * The type of backend server. Valid values:
   * 
   * *   **ecs** (default): ECS instance
   * *   **eni**: ENI
   * *   **eci**: elastic container instance
   * 
   * @example
   * ecs
   */
  type?: string;
  /**
   * @remarks
   * The weight of the backend server.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
      serverId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVServerGroupBackendServersResponseBodyBackendServers extends $tea.Model {
  backendServer?: AddVServerGroupBackendServersResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': AddVServerGroupBackendServersResponseBodyBackendServersBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessControlListRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N. Valid values of N: **1** to **20**. The tag key cannot be an empty string. The tag key can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N. Valid values of N: **1** to **20**. The tag value can be an empty string. The tag value must be 0 to 128 characters in length, and cannot start with `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
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

export class CreateLoadBalancerRequestTag extends $tea.Model {
  /**
   * @remarks
   * The tag key of the bastion host. Valid values of N: **1 to 20**. The tag key cannot be an empty string.
   * 
   * The tag key can be at most 64 characters in length, and cannot contain `http://` or `https://`. It must not start with `aliyun` or `acs:`.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: **1 to 20**. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag value cannot contain `http://` or `https://`.
   * 
   * @example
   * value
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

export class CreateLoadBalancerHTTPListenerRequestTag extends $tea.Model {
  /**
   * @remarks
   * The tag key of the bastion host. Valid values of N: **1 to 20**. The tag key cannot be an empty string.
   * 
   * The tag key can be at most 64 characters in length, and cannot contain `http://` or `https://`. It must not start with `aliyun` or `acs:`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: **1 to 20**. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag value cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
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

export class CreateLoadBalancerHTTPSListenerRequestTag extends $tea.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys.
   * 
   * The tag key cannot be an empty string. The tag key must be 1 to 64 characters in length and cannot start with `aliyun` or `acs:`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value cannot be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag value cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
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

export class CreateLoadBalancerTCPListenerRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key must be 1 to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be at most 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
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

export class CreateLoadBalancerUDPListenerRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key must be 1 to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: **1 to 20**. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag value cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
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

export class CreateMasterSlaveServerGroupRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N. Valid values of N: **1** to **20**. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length, and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N. Valid values of N: **1 to 20**. The tag value can be an empty string. The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * 1
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

export class CreateMasterSlaveServerGroupResponseBodyMasterSlaveBackendServersMasterSlaveBackendServer extends $tea.Model {
  /**
   * @remarks
   * The description of the primary/secondary server group.
   * 
   * @example
   * test-112
   */
  description?: string;
  /**
   * @remarks
   * The port that is used by the backend server.
   * 
   * @example
   * 82
   */
  port?: number;
  /**
   * @remarks
   * The ID of the backend server that you want to add.
   * 
   * @example
   * i-bp1fq61enf4loa5i****
   */
  serverId?: string;
  /**
   * @remarks
   * The type of backend server.
   * 
   * Valid values: **Master** and **Slave**.
   * 
   * @example
   * Master
   */
  serverType?: string;
  /**
   * @remarks
   * The type of backend server. Valid values:
   * 
   * *   **ecs**: ECS instance
   * *   **eni**: ENI
   * *   **eci**: elastic container instance
   * 
   * @example
   * ecs
   */
  type?: string;
  /**
   * @remarks
   * The weight of the backend server.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
      serverType: 'ServerType',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
      serverId: 'string',
      serverType: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMasterSlaveServerGroupResponseBodyMasterSlaveBackendServers extends $tea.Model {
  masterSlaveBackendServer?: CreateMasterSlaveServerGroupResponseBodyMasterSlaveBackendServersMasterSlaveBackendServer[];
  static names(): { [key: string]: string } {
    return {
      masterSlaveBackendServer: 'MasterSlaveBackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterSlaveBackendServer: { 'type': 'array', 'itemType': CreateMasterSlaveServerGroupResponseBodyMasterSlaveBackendServersMasterSlaveBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesResponseBodyRulesRule extends $tea.Model {
  /**
   * @remarks
   * The forwarding rule ID.
   * 
   * @example
   * rule-bp12jzy0*****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the forwarding rule.
   * 
   * @example
   * Rule2
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesResponseBodyRules extends $tea.Model {
  rule?: CreateRulesResponseBodyRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': CreateRulesResponseBodyRulesRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVServerGroupRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N. Valid values of N: **1 to 20**. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length, and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: **1 to 20**. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag value cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
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

export class CreateVServerGroupResponseBodyBackendServersBackendServer extends $tea.Model {
  /**
   * @remarks
   * The description of the vServer group.
   * 
   * @example
   * backend server
   */
  description?: string;
  /**
   * @remarks
   * The port that is used by the backend server.
   * 
   * @example
   * 70
   */
  port?: number;
  /**
   * @remarks
   * The ID of the ECS instance or ENI.
   * 
   * @example
   * eni-hhshhs****
   */
  serverId?: string;
  /**
   * @remarks
   * The type of backend server. Valid values:
   * 
   * *   **ecs** (default): ECS instance
   * *   **eni**: elastic network interface (ENI)
   * *   **eci**: elastic container instance
   * 
   * @example
   * eni
   */
  type?: string;
  /**
   * @remarks
   * The weight of the backend server.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
      serverId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVServerGroupResponseBodyBackendServers extends $tea.Model {
  backendServer?: CreateVServerGroupResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': CreateVServerGroupResponseBodyBackendServersBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListAttributeResponseBodyAclEntrysAclEntry extends $tea.Model {
  /**
   * @remarks
   * The remarks of the ACL entry.
   * 
   * @example
   * test
   */
  aclEntryComment?: string;
  /**
   * @remarks
   * The IP entry in the ACL.
   * 
   * @example
   * 192.168.0.1
   */
  aclEntryIP?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntryComment: 'AclEntryComment',
      aclEntryIP: 'AclEntryIP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntryComment: 'string',
      aclEntryIP: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListAttributeResponseBodyAclEntrys extends $tea.Model {
  aclEntry?: DescribeAccessControlListAttributeResponseBodyAclEntrysAclEntry[];
  static names(): { [key: string]: string } {
    return {
      aclEntry: 'AclEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntry: { 'type': 'array', 'itemType': DescribeAccessControlListAttributeResponseBodyAclEntrysAclEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListAttributeResponseBodyRelatedListenersRelatedListener extends $tea.Model {
  /**
   * @remarks
   * The type of ACL. Valid values:
   * 
   * *   **black**
   * *   **white**
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The frontend port of the listener with which the ACL is associated.
   * 
   * @example
   * 443
   */
  listenerPort?: number;
  /**
   * @remarks
   * The CLB instance ID.
   * 
   * @example
   * lb-bp1qpzldlm38bnexl****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The type of protocol that the associated listener uses.
   * 
   * @example
   * https
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      aclType: 'AclType',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      listenerPort: 'number',
      loadBalancerId: 'string',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListAttributeResponseBodyRelatedListeners extends $tea.Model {
  relatedListener?: DescribeAccessControlListAttributeResponseBodyRelatedListenersRelatedListener[];
  static names(): { [key: string]: string } {
    return {
      relatedListener: 'RelatedListener',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relatedListener: { 'type': 'array', 'itemType': DescribeAccessControlListAttributeResponseBodyRelatedListenersRelatedListener },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListAttributeResponseBodyTagsTag extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListAttributeResponseBodyTags extends $tea.Model {
  tag?: DescribeAccessControlListAttributeResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeAccessControlListAttributeResponseBodyTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListsRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key must be 1 to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify at most 20 tag values. The tag value cannot be an empty string.
   * 
   * The tag value must be 1 to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * 1
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

export class DescribeAccessControlListsResponseBodyAclsAclTagsTag extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 1
   */
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListsResponseBodyAclsAclTags extends $tea.Model {
  tag?: DescribeAccessControlListsResponseBodyAclsAclTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeAccessControlListsResponseBodyAclsAclTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListsResponseBodyAclsAcl extends $tea.Model {
  /**
   * @remarks
   * The ACL ID.
   * 
   * @example
   * acl-bp1l0kk4gxce43k*****
   */
  aclId?: string;
  /**
   * @remarks
   * The ACL name.
   * 
   * @example
   * rule1
   */
  aclName?: string;
  /**
   * @remarks
   * The IP version that is used by the CLB instance associated with the ACL.
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * The time when the CLB instance was created. The time follows the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2022-08-31T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-jfenfbp1lhl0****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of tags added to the network ACL. The value of this parameter must be a STRING list in the JSON format.
   */
  tags?: DescribeAccessControlListsResponseBodyAclsAclTags;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclName: 'AclName',
      addressIPVersion: 'AddressIPVersion',
      createTime: 'CreateTime',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclName: 'string',
      addressIPVersion: 'string',
      createTime: 'string',
      resourceGroupId: 'string',
      tags: DescribeAccessControlListsResponseBodyAclsAclTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListsResponseBodyAcls extends $tea.Model {
  acl?: DescribeAccessControlListsResponseBodyAclsAcl[];
  static names(): { [key: string]: string } {
    return {
      acl: 'Acl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: { 'type': 'array', 'itemType': DescribeAccessControlListsResponseBodyAclsAcl },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessLogsDownloadAttributeResponseBodyLogsDownloadAttributesLogsDownloadAttribute extends $tea.Model {
  /**
   * @remarks
   * The CLB instance ID.
   * 
   * @example
   * lb-bp1b6c719dfa08ex*****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The name of the Log Service project.
   * 
   * @example
   * test-log-project
   */
  logProject?: string;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * @example
   * test-log-store
   */
  logStore?: string;
  /**
   * @remarks
   * The type of access log. Only **layer7** is returned, which indicates Layer 7 access logs.
   * 
   * @example
   * layer7
   */
  logType?: string;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      logProject: 'LogProject',
      logStore: 'LogStore',
      logType: 'LogType',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      logProject: 'string',
      logStore: 'string',
      logType: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessLogsDownloadAttributeResponseBodyLogsDownloadAttributes extends $tea.Model {
  logsDownloadAttribute?: DescribeAccessLogsDownloadAttributeResponseBodyLogsDownloadAttributesLogsDownloadAttribute[];
  static names(): { [key: string]: string } {
    return {
      logsDownloadAttribute: 'LogsDownloadAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logsDownloadAttribute: { 'type': 'array', 'itemType': DescribeAccessLogsDownloadAttributeResponseBodyLogsDownloadAttributesLogsDownloadAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResourceSupportResourcesSupportResource extends $tea.Model {
  /**
   * @remarks
   * The type of the IP address.
   * 
   * Valid values: **ipv4 and ipv6**.
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * The network type.
   * 
   * Valid values: **vpc, classic-internet, and classic-intranet**.
   * 
   * @example
   * classic_internet
   */
  addressType?: string;
  static names(): { [key: string]: string } {
    return {
      addressIPVersion: 'AddressIPVersion',
      addressType: 'AddressType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIPVersion: 'string',
      addressType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResourceSupportResources extends $tea.Model {
  supportResource?: DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResourceSupportResourcesSupportResource[];
  static names(): { [key: string]: string } {
    return {
      supportResource: 'SupportResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResourceSupportResourcesSupportResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResource extends $tea.Model {
  /**
   * @remarks
   * The primary zone.
   * 
   * @example
   * cn-shanghai-a
   */
  masterZoneId?: string;
  /**
   * @remarks
   * The secondary zone.
   * 
   * @example
   * cn-shanghai-b
   */
  slaveZoneId?: string;
  /**
   * @remarks
   * The supported resources.
   */
  supportResources?: DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResourceSupportResources;
  static names(): { [key: string]: string } {
    return {
      masterZoneId: 'MasterZoneId',
      slaveZoneId: 'SlaveZoneId',
      supportResources: 'SupportResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterZoneId: 'string',
      slaveZoneId: 'string',
      supportResources: DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResourceSupportResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableResources extends $tea.Model {
  availableResource?: DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResource[];
  static names(): { [key: string]: string } {
    return {
      availableResource: 'AvailableResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificatesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N. Valid values of N: **1 to 20**. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length, and cannot contain `http://` or `https://`. It must not start with `aliyun` or `acs:`.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N. Valid values of N: **1 to 20**. The tag value can be an empty string. The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. It must not start with `aliyun` or `acs:`.
   * 
   * @example
   * 1
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

export class DescribeCACertificatesResponseBodyCACertificatesCACertificateTagsTag extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 1
   */
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificatesResponseBodyCACertificatesCACertificateTags extends $tea.Model {
  tag?: DescribeCACertificatesResponseBodyCACertificatesCACertificateTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeCACertificatesResponseBodyCACertificatesCACertificateTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificatesResponseBodyCACertificatesCACertificate extends $tea.Model {
  /**
   * @remarks
   * The CA certificate ID.
   * 
   * @example
   * 139a00604bd-cn-east-hangzho****
   */
  CACertificateId?: string;
  /**
   * @remarks
   * The CA certificate name.
   * 
   * @example
   * test
   */
  CACertificateName?: string;
  /**
   * @remarks
   * The domain name of the CA certificate.
   * 
   * @example
   * www.example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The time when the CA certificate was created. The time is in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2021-08-31T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The timestamp when the CA certificate was created. Unit: milliseconds.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1504147745000
   */
  createTimeStamp?: number;
  /**
   * @remarks
   * The time when the CA certificate expires. The time is in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2024-11-21T06:04:25Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The timestamp that indicates when the CA certificate expires. Unit: milliseconds.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1732169065000
   */
  expireTimeStamp?: number;
  /**
   * @remarks
   * The fingerprint of the CA certificate.
   * 
   * @example
   * 79:43:fb:7d:a4:7f:44:32:61:16:57:17:e3:e8:b7:36:03:57:f6:89
   */
  fingerprint?: string;
  /**
   * @remarks
   * The region of the CA certificate.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tag.
   */
  tags?: DescribeCACertificatesResponseBodyCACertificatesCACertificateTags;
  static names(): { [key: string]: string } {
    return {
      CACertificateId: 'CACertificateId',
      CACertificateName: 'CACertificateName',
      commonName: 'CommonName',
      createTime: 'CreateTime',
      createTimeStamp: 'CreateTimeStamp',
      expireTime: 'ExpireTime',
      expireTimeStamp: 'ExpireTimeStamp',
      fingerprint: 'Fingerprint',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificateId: 'string',
      CACertificateName: 'string',
      commonName: 'string',
      createTime: 'string',
      createTimeStamp: 'number',
      expireTime: 'string',
      expireTimeStamp: 'number',
      fingerprint: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: DescribeCACertificatesResponseBodyCACertificatesCACertificateTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificatesResponseBodyCACertificates extends $tea.Model {
  CACertificate?: DescribeCACertificatesResponseBodyCACertificatesCACertificate[];
  static names(): { [key: string]: string } {
    return {
      CACertificate: 'CACertificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificate: { 'type': 'array', 'itemType': DescribeCACertificatesResponseBodyCACertificatesCACertificate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainExtensionsResponseBodyDomainExtensionsDomainExtension extends $tea.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the additional certificate.
   * 
   * @example
   * de-bp1rp7ta1****
   */
  domainExtensionId?: string;
  /**
   * @remarks
   * The ID of the server certificate that is used by the domain name.
   * 
   * @example
   * 1231579085529123_166f8204689_1714763408_70998****
   */
  serverCertificateId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      domainExtensionId: 'DomainExtensionId',
      serverCertificateId: 'ServerCertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      domainExtensionId: 'string',
      serverCertificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainExtensionsResponseBodyDomainExtensions extends $tea.Model {
  domainExtension?: DescribeDomainExtensionsResponseBodyDomainExtensionsDomainExtension[];
  static names(): { [key: string]: string } {
    return {
      domainExtension: 'DomainExtension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainExtension: { 'type': 'array', 'itemType': DescribeDomainExtensionsResponseBodyDomainExtensionsDomainExtension },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyBackendServersBackendServer extends $tea.Model {
  /**
   * @remarks
   * The frontend port that is used by the SLB instance.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The backend port that is used by the SLB instance.
   * 
   * @example
   * 70
   */
  port?: number;
  /**
   * @remarks
   * The frontend protocol that is used by the SLB instance.
   * 
   * @example
   * https
   */
  protocol?: string;
  /**
   * @remarks
   * The health status of the backend server. Valid values:
   * 
   * *   normal: The backend server is healthy.
   * *   abnormal: The backend server is unhealthy.
   * *   unavailable: The health check is not completed.
   * 
   * @example
   * abnormal
   */
  serverHealthStatus?: string;
  /**
   * @remarks
   * The ID of the backend server.
   * 
   * @example
   * i-bp1h5u3fv54ytf***
   */
  serverId?: string;
  /**
   * @remarks
   * The IP address of the backend server.
   * 
   * @example
   * 192.XX.XX.11
   */
  serverIp?: string;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      port: 'Port',
      protocol: 'Protocol',
      serverHealthStatus: 'ServerHealthStatus',
      serverId: 'ServerId',
      serverIp: 'ServerIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      port: 'number',
      protocol: 'string',
      serverHealthStatus: 'string',
      serverId: 'string',
      serverIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyBackendServers extends $tea.Model {
  backendServer?: DescribeHealthStatusResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': DescribeHealthStatusResponseBodyBackendServersBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyBackendServersBackendServer extends $tea.Model {
  /**
   * @remarks
   * The description of the backend server.
   * 
   * > This parameter is not returned if Description is not set.
   * 
   * @example
   * backend server description
   */
  description?: string;
  /**
   * @remarks
   * The backend server ID.
   * 
   * @example
   * i-2zej4lxhjoq1icu*****
   */
  serverId?: string;
  /**
   * @remarks
   * The ID of the elastic network interface (ENI) or elastic container instance.
   * 
   * @example
   * 192.XX.XX.11
   */
  serverIp?: string;
  /**
   * @remarks
   * The type of the backend server.
   * 
   * @example
   * ecs
   */
  type?: string;
  /**
   * @remarks
   * The weight of the backend server.
   * 
   * @example
   * 90
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      serverId: 'ServerId',
      serverIp: 'ServerIp',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      serverId: 'string',
      serverIp: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyBackendServers extends $tea.Model {
  backendServer?: DescribeLoadBalancerAttributeResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': DescribeLoadBalancerAttributeResponseBodyBackendServersBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyListenerPorts extends $tea.Model {
  listenerPort?: number[];
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocalListenerPortAndProtocal extends $tea.Model {
  /**
   * @remarks
   * The frontend port that is used by the CLB instance.
   * 
   * @example
   * 443
   */
  listenerPort?: number;
  /**
   * @remarks
   * The frontend protocol that is used by the CLB instance.
   * 
   * @example
   * http
   */
  listenerProtocal?: string;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocal: 'ListenerProtocal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocal: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocal extends $tea.Model {
  listenerPortAndProtocal?: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocalListenerPortAndProtocal[];
  static names(): { [key: string]: string } {
    return {
      listenerPortAndProtocal: 'ListenerPortAndProtocal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPortAndProtocal: { 'type': 'array', 'itemType': DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocalListenerPortAndProtocal },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocolListenerPortAndProtocol extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the listener is enabled.
   * 
   * @example
   * Listener Description
   */
  description?: string;
  /**
   * @remarks
   * The destination listening port to which requests are forwarded. The port must be open and use HTTPS.
   * 
   * @example
   * 443
   */
  forwardPort?: number;
  /**
   * @remarks
   * Indicates whether the listener is enabled.
   * 
   * @example
   * on
   */
  listenerForward?: string;
  /**
   * @remarks
   * The frontend port that is used by the CLB instance.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The frontend protocol that is used by the CLB instance.
   * 
   * @example
   * https
   */
  listenerProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      forwardPort: 'ForwardPort',
      listenerForward: 'ListenerForward',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      forwardPort: 'number',
      listenerForward: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocol extends $tea.Model {
  listenerPortAndProtocol?: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocolListenerPortAndProtocol[];
  static names(): { [key: string]: string } {
    return {
      listenerPortAndProtocol: 'ListenerPortAndProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPortAndProtocol: { 'type': 'array', 'itemType': DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocolListenerPortAndProtocol },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyTagsTag extends $tea.Model {
  /**
   * @remarks
   * The tag key. Valid values of N: **1** to **20**. The tag key cannot be an empty string.
   * 
   * The tag key can be at most 64 characters in length, and cannot contain `http://` or `https://`. It must not start with `aliyun` or `acs:`.
   * 
   * @example
   * test
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: **1** to **20**. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag value cannot contain `http://` or `https://`.
   * 
   * @example
   * value
   */
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyTags extends $tea.Model {
  tag?: DescribeLoadBalancerAttributeResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeLoadBalancerAttributeResponseBodyTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPListenerAttributeResponseBodyAclIds extends $tea.Model {
  aclId?: string[];
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPListenerAttributeResponseBodyRulesRule extends $tea.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * @example
   * 1234
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the forwarding rule.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * The request URL.
   * 
   * @example
   * /example
   */
  url?: string;
  /**
   * @remarks
   * The ID of the server group specified in the forwarding rule.
   * 
   * @example
   * 123
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      url: 'Url',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      ruleId: 'string',
      ruleName: 'string',
      url: 'string',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPListenerAttributeResponseBodyRules extends $tea.Model {
  rule?: DescribeLoadBalancerHTTPListenerAttributeResponseBodyRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeLoadBalancerHTTPListenerAttributeResponseBodyRulesRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPListenerAttributeResponseBodyTagsTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N. Valid values of N: **1** to **20**. The tag key cannot be an empty string. The tag key can be up to 64 characters in length. The key cannot start with `acs:` or `aliyun` or contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of tag N. Valid values of N: **1** to **20**. The tag value can be an empty string. The tag value must be 0 to 128 characters in length, and cannot start with `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
   */
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPListenerAttributeResponseBodyTags extends $tea.Model {
  tag?: DescribeLoadBalancerHTTPListenerAttributeResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeLoadBalancerHTTPListenerAttributeResponseBodyTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPSListenerAttributeResponseBodyAclIds extends $tea.Model {
  aclId?: string[];
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPSListenerAttributeResponseBodyDomainExtensionsDomainExtension extends $tea.Model {
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the additional domain name.
   * 
   * @example
   * 12
   */
  domainExtensionId?: string;
  /**
   * @remarks
   * The ID of the server certificate that is associated with the domain name.
   * 
   * @example
   * 13344444****
   */
  serverCertificateId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      domainExtensionId: 'DomainExtensionId',
      serverCertificateId: 'ServerCertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      domainExtensionId: 'string',
      serverCertificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPSListenerAttributeResponseBodyDomainExtensions extends $tea.Model {
  domainExtension?: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyDomainExtensionsDomainExtension[];
  static names(): { [key: string]: string } {
    return {
      domainExtension: 'DomainExtension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainExtension: { 'type': 'array', 'itemType': DescribeLoadBalancerHTTPSListenerAttributeResponseBodyDomainExtensionsDomainExtension },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPSListenerAttributeResponseBodyRulesRule extends $tea.Model {
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * @example
   * 23
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the forwarding rule.
   * 
   * @example
   * example
   */
  ruleName?: string;
  /**
   * @remarks
   * The request path.
   * 
   * @example
   * /example
   */
  url?: string;
  /**
   * @remarks
   * The ID of the server group that is associated with the forwarding rule.
   * 
   * @example
   * 12
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      url: 'Url',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      ruleId: 'string',
      ruleName: 'string',
      url: 'string',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPSListenerAttributeResponseBodyRules extends $tea.Model {
  rule?: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeLoadBalancerHTTPSListenerAttributeResponseBodyRulesRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPSListenerAttributeResponseBodyTagsTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N. Valid values of N: **1** to **20**. The tag key cannot be an empty string. The tag key can be up to 64 characters in length, and cannot start with `aliyun` or `acs:`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of tag N. Valid values of N: **1** to **20**. The tag value can be an empty string. The tag value can be up to 128 characters in length, and cannot start with `acs:`. The tag value cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
   */
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPSListenerAttributeResponseBodyTags extends $tea.Model {
  tag?: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeLoadBalancerHTTPSListenerAttributeResponseBodyTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerListenersRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key must be 1 to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: **1 to 20**. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag value cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
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

export class DescribeLoadBalancerListenersResponseBodyListenersHTTPListenerConfig extends $tea.Model {
  /**
   * @remarks
   * The cookie configures for the server.
   * 
   * @example
   * B490B5EBF6F3CD402E515D22BCDA****
   */
  cookie?: string;
  /**
   * @remarks
   * The maximum amount of time to wait before the session cookie expires. Unit: seconds.
   * 
   * Valid values: **1** to **86400**.
   * 
   * @example
   * 500
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * The listener port that is used for HTTP-to-HTTPS redirection.
   * 
   * >  If the **ListenerForward** parameter is set to **off**, this parameter is not returned.
   * 
   * @example
   * 80
   */
  forwardPort?: number;
  /**
   * @remarks
   * Indicates whether GZIP compression is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  gzip?: string;
  /**
   * @remarks
   * Indicates whether the health check feature is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  healthCheck?: string;
  /**
   * @remarks
   * The port that is used for health checks.
   * 
   * >  This parameter takes effect only when **HealthCheck** is set to **on**.
   * 
   * @example
   * 8080
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name that is used for health checks.
   * 
   * @example
   * www.example.com
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code that indicates a healthy backend server.
   * 
   * @example
   * http_2xx,http_3xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The HTTP version for health checks.
   * 
   * @example
   * HTTP 1.0
   */
  healthCheckHttpVersion?: string;
  /**
   * @remarks
   * The interval at which health checks are performed. Unit: seconds.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The health check method. Valid values: **head** and **get**.
   * 
   * @example
   * get
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The maximum timeout period of a health check. Unit: seconds.
   * 
   * @example
   * 3
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The protocol that you want to use for health checks.
   * 
   * @example
   * tcp
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The URI that is used for health checks.
   * 
   * @example
   * /test/index.html
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health check status of the backend server changes from **fail** to **success**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The timeout period of an idle connection. Unit: seconds. Valid values: **1** to **60**.
   * 
   * If no request is received within the specified timeout period, CLB closes the connection. When a request is received, CLB establishes a new connection.
   * 
   * @example
   * 15
   */
  idleTimeout?: number;
  /**
   * @remarks
   * Indicates whether HTTP-to-HTTPS redirection is enabled for the listener. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  listenerForward?: string;
  /**
   * @remarks
   * The timeout period of a request. Unit: seconds. Valid values: **1** to **180**.
   * 
   * If no response is received from a backend server during the request timeout period, CLB sends the `HTTP 504` status code to the client.
   * 
   * @example
   * 60
   */
  requestTimeout?: number;
  /**
   * @remarks
   * Indicates whether session persistence is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  stickySession?: string;
  /**
   * @remarks
   * The method used to handle the cookie. Valid values:
   * 
   * *   **insert**: inserts a cookie. CLB inserts the SERVERID cookie to the HTTP or HTTPS response to the first request from a client. Subsequent requests that carry the SERVERID cookie from the client are forwarded to the same backend server as the first request.
   * *   **server**: rewrites the original cookie. CLB rewrites the custom cookies in requests from a client. Subsequent requests from the client that carry the new cookie are forwarded to the same backend server as the first request.
   * 
   * @example
   * insert
   */
  stickySessionType?: string;
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health check status of the backend server changes from **success** to **fail**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-For` header is used to preserve client IP addresses. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_ClientSrcPort` header is used to retrieve the client port. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_ClientSrcPort?: string;
  /**
   * @remarks
   * Indicates whether the `SLB-ID` header is used to retrieve the ID of the CLB instance. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_SLBID?: string;
  /**
   * @remarks
   * Indicates whether the `SLB-IP` header is used to retrieve the VIP of the client. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_SLBIP?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_SLBPORT` header is used to retrieve the listener port of the CLB instance. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_SLBPORT?: string;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-Proto` header is used to obtain the listener protocol. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_proto?: string;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      forwardPort: 'ForwardPort',
      gzip: 'Gzip',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckHttpVersion: 'HealthCheckHttpVersion',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckType: 'HealthCheckType',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      idleTimeout: 'IdleTimeout',
      listenerForward: 'ListenerForward',
      requestTimeout: 'RequestTimeout',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      unhealthyThreshold: 'UnhealthyThreshold',
      XForwardedFor: 'XForwardedFor',
      XForwardedFor_ClientSrcPort: 'XForwardedFor_ClientSrcPort',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      XForwardedFor_SLBPORT: 'XForwardedFor_SLBPORT',
      XForwardedFor_proto: 'XForwardedFor_proto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      forwardPort: 'number',
      gzip: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckHttpVersion: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckType: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      idleTimeout: 'number',
      listenerForward: 'string',
      requestTimeout: 'number',
      stickySession: 'string',
      stickySessionType: 'string',
      unhealthyThreshold: 'number',
      XForwardedFor: 'string',
      XForwardedFor_ClientSrcPort: 'string',
      XForwardedFor_SLBID: 'string',
      XForwardedFor_SLBIP: 'string',
      XForwardedFor_SLBPORT: 'string',
      XForwardedFor_proto: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerListenersResponseBodyListenersHTTPSListenerConfig extends $tea.Model {
  /**
   * @remarks
   * The ID of the CA certificate.
   * 
   * @example
   * idkp-234-cn-test-0****
   */
  CACertificateId?: string;
  /**
   * @remarks
   * The cookie configures for the server.
   * 
   * @example
   * B490B5EBF6F3CD402E515D22BCDA****
   */
  cookie?: string;
  /**
   * @remarks
   * The maximum amount of time to wait before the session cookie expires. Unit: seconds.
   * 
   * Valid values: **1** to **86400**.
   * 
   * @example
   * 500
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * Indicates whether `HTTP 2.0` is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  enableHttp2?: string;
  /**
   * @remarks
   * Indicates whether GZIP compression is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  gzip?: string;
  /**
   * @remarks
   * Indicates whether the health check feature is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  healthCheck?: string;
  /**
   * @remarks
   * The port that is used for health checks.
   * 
   * @example
   * 8080
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name that is used for health checks.
   * 
   * @example
   * www.example.com
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code that indicates a healthy backend server.
   * 
   * @example
   * http_2xx,http_3xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The HTTP version for health checks.
   * 
   * @example
   * HTTP 1.0
   */
  healthCheckHttpVersion?: string;
  /**
   * @remarks
   * The interval at which health checks are performed. Unit: seconds.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The health check method.
   * 
   * @example
   * get
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The timeout period of a health check response. Unit: seconds.
   * 
   * @example
   * 3
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The protocol that you want to use for health checks.
   * 
   * @example
   * tcp
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The URI that is used for health checks.
   * 
   * @example
   * /test/index.html
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health check status of the backend server changes from **fail** to **success**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The timeout period of an idle connection. Unit: seconds. Valid values: **1** to **60**.
   * 
   * If no request is received within the specified timeout period, CLB closes the connection. When a request is received, CLB establishes a new connection.
   * 
   * @example
   * 15
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The request timeout period. Unit: seconds. Valid values: **1** to **180**.
   * 
   * If no response is received from a backend server during the request timeout period, CLB sends the `HTTP 504` status code to the client.
   * 
   * @example
   * 60
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The ID of the server certificate.
   * 
   * @example
   * idkp-123-cn-test-0****
   */
  serverCertificateId?: string;
  /**
   * @remarks
   * Indicates whether session persistence is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  stickySession?: string;
  /**
   * @remarks
   * The method used to handle the cookie.
   * 
   * *   **insert**: inserts a cookie. CLB inserts the SERVERID cookie to the HTTP or HTTPS response to the first request from a client. Subsequent requests that carry the SERVERID cookie from the client are forwarded to the same backend server as the first request.
   * *   **server**: rewrites the original cookie. CLB rewrites the custom cookies in requests from a client. Subsequent requests from the client that carry the new cookie are forwarded to the same backend server as the first request.
   * 
   * @example
   * insert
   */
  stickySessionType?: string;
  /**
   * @remarks
   * A TLS security policy contains TLS protocols and cipher suites available for HTTPS.
   * 
   * *   **tls_cipher_policy_1_0**:
   * 
   *     Supported TLS versions: TLSv1.0, TLSv1.1, and TLSv1.2.
   * 
   *     Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA.
   * 
   * *   **tls_cipher_policy_1_1**:
   * 
   *     Supported TLS versions: TLSv1.1 and TLSv1.2.
   * 
   *     Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA.
   * 
   * *   **tls_cipher_policy_1_2**
   * 
   *     Supported TLS versions: TLSv1.2.
   * 
   *     Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA.
   * 
   * *   **tls_cipher_policy_1_2_strict**
   * 
   *     Supported TLS versions: TLSv1.2.
   * 
   *     Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, ECDHE-RSA-AES128-SHA, and ECDHE-RSA-AES256-SHA.
   * 
   * *   **tls_cipher_policy_1_2_strict_with_1_3**
   * 
   *     Supported TLS versions: TLSv1.2 and TLSv1.3.
   * 
   *     Supported cipher suites: TLS_AES_128_GCM_SHA256, TLS_AES_256_GCM_SHA384, TLS_CHACHA20_POLY1305_SHA256, TLS_AES_128_CCM_SHA256, TLS_AES_128_CCM_8_SHA256, ECDHE-ECDSA-AES128-GCM-SHA256, ECDHE-ECDSA-AES256-GCM-SHA384, ECDHE-ECDSA-AES128-SHA256, ECDHE-ECDSA-AES256-SHA384, ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, ECDHE-ECDSA-AES128-SHA, ECDHE-ECDSA-AES256-SHA, ECDHE-RSA-AES128-SHA, and ECDHE-RSA-AES256-SHA.
   * 
   * @example
   * tls_cipher_policy_1_0
   */
  TLSCipherPolicy?: string;
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health check status of the backend server changes from **success** to **fail**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-For` header is used to retrieve client IP addresses. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_ClientCertClientVerify` header is used to obtain the verification result of the client certificate. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_ClientCertClientVerify?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_ClientCertFingerprint` header is used to obtain the fingerprint of the client certificate. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_ClientCertFingerprint?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_ClientCertIssuerDN` header is used to obtain information about the authority that issues the client certificate. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_ClientCertIssuerDN?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_ClientCertSubjectDN` header is used to obtain information about the owner of the client certificate. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_ClientCertSubjectDN?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_ClientSrcPort` header is used to retrieve the client port. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_ClientSrcPort?: string;
  /**
   * @remarks
   * Indicates whether the `SLB-ID` header is used to retrieve the ID of the CLB instance. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_SLBID?: string;
  /**
   * @remarks
   * Indicates whether the `SLB-IP` header is used to retrieve the VIP of the client. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_SLBIP?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_SLBPORT` header is used to retrieve the listener port of the CLB instance. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_SLBPORT?: string;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-Proto` header is used to obtain the listener protocol. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_proto?: string;
  static names(): { [key: string]: string } {
    return {
      CACertificateId: 'CACertificateId',
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      enableHttp2: 'EnableHttp2',
      gzip: 'Gzip',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckHttpVersion: 'HealthCheckHttpVersion',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckType: 'HealthCheckType',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      idleTimeout: 'IdleTimeout',
      requestTimeout: 'RequestTimeout',
      serverCertificateId: 'ServerCertificateId',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      TLSCipherPolicy: 'TLSCipherPolicy',
      unhealthyThreshold: 'UnhealthyThreshold',
      XForwardedFor: 'XForwardedFor',
      XForwardedFor_ClientCertClientVerify: 'XForwardedFor_ClientCertClientVerify',
      XForwardedFor_ClientCertFingerprint: 'XForwardedFor_ClientCertFingerprint',
      XForwardedFor_ClientCertIssuerDN: 'XForwardedFor_ClientCertIssuerDN',
      XForwardedFor_ClientCertSubjectDN: 'XForwardedFor_ClientCertSubjectDN',
      XForwardedFor_ClientSrcPort: 'XForwardedFor_ClientSrcPort',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      XForwardedFor_SLBPORT: 'XForwardedFor_SLBPORT',
      XForwardedFor_proto: 'XForwardedFor_proto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificateId: 'string',
      cookie: 'string',
      cookieTimeout: 'number',
      enableHttp2: 'string',
      gzip: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckHttpVersion: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckType: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      idleTimeout: 'number',
      requestTimeout: 'number',
      serverCertificateId: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      TLSCipherPolicy: 'string',
      unhealthyThreshold: 'number',
      XForwardedFor: 'string',
      XForwardedFor_ClientCertClientVerify: 'string',
      XForwardedFor_ClientCertFingerprint: 'string',
      XForwardedFor_ClientCertIssuerDN: 'string',
      XForwardedFor_ClientCertSubjectDN: 'string',
      XForwardedFor_ClientSrcPort: 'string',
      XForwardedFor_SLBID: 'string',
      XForwardedFor_SLBIP: 'string',
      XForwardedFor_SLBPORT: 'string',
      XForwardedFor_proto: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerListenersResponseBodyListenersTCPListenerConfig extends $tea.Model {
  /**
   * @remarks
   * Indicates whether connection draining is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  connectionDrain?: string;
  /**
   * @remarks
   * The timeout period of connection draining. Unit: seconds.
   * 
   * Value values: **10 to 900**.
   * 
   * @example
   * 300
   */
  connectionDrainTimeout?: number;
  /**
   * @remarks
   * The timeout period of a connection. Unit: seconds.
   * 
   * @example
   * 500
   */
  establishedTimeout?: number;
  /**
   * @remarks
   * Indicates whether the health check feature is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  healthCheck?: string;
  /**
   * @remarks
   * The port that is used for health checks.
   * 
   * @example
   * 8080
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The timeout period of health checks. Unit: seconds.
   * 
   * Valid values: **1** to **300**.
   * 
   * @example
   * 100
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The domain name that is used for health checks.
   * 
   * @example
   * www.example.com
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code that indicates a healthy backend server.
   * 
   * @example
   * http_2xx,http_3xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Unit: seconds.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The health check method.
   * 
   * @example
   * get
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The protocol that you want to use for health checks.
   * 
   * @example
   * tcp
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The URI that is used for health checks.
   * 
   * @example
   * /test/index.html
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health check status of the backend server changes from **fail** to **success**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The ID of the primary/secondary server group associated with the listener.
   * 
   * @example
   * rsp-0bfucw*****
   */
  masterSlaveServerGroupId?: string;
  /**
   * @remarks
   * Indicates whether session persistence is enabled. Unit: seconds.
   * 
   * Valid values: **0** to **3600**.
   * 
   * **0** indicates that session persistence is disabled.
   * 
   * @example
   * 0
   */
  persistenceTimeout?: number;
  /**
   * @remarks
   * Indicates whether the Proxy protocol is used to pass source client IP addresses to backend servers. Valid values:
   * 
   * *   **true**: enables the burst feature for the data disk.
   * *   **false**: The task is not being retried.
   * 
   * @example
   * false
   */
  proxyProtocolV2Enabled?: string;
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health check status of the backend server changes from **success** to **fail**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      connectionDrain: 'ConnectionDrain',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      establishedTimeout: 'EstablishedTimeout',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckType: 'HealthCheckType',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      persistenceTimeout: 'PersistenceTimeout',
      proxyProtocolV2Enabled: 'ProxyProtocolV2Enabled',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionDrain: 'string',
      connectionDrainTimeout: 'number',
      establishedTimeout: 'number',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckType: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      masterSlaveServerGroupId: 'string',
      persistenceTimeout: 'number',
      proxyProtocolV2Enabled: 'string',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerListenersResponseBodyListenersTags extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerListenersResponseBodyListenersUDPListenerConfig extends $tea.Model {
  /**
   * @remarks
   * Indicates whether connection draining is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  connectionDrain?: string;
  /**
   * @remarks
   * The timeout period of connection draining. Unit: seconds.
   * 
   * Value values: **10 to 900**.
   * 
   * @example
   * 300
   */
  connectionDrainTimeout?: number;
  /**
   * @remarks
   * Indicates whether the health check feature is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  healthCheck?: string;
  /**
   * @remarks
   * The port that is used for health checks.
   * 
   * @example
   * 8080
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The timeout period for a health check response.
   * 
   * @example
   * 100
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The response string of UDP health checks.
   * 
   * @example
   * ok
   */
  healthCheckExp?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Unit: seconds.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The request string of UDP health checks.
   * 
   * @example
   * hello
   */
  healthCheckReq?: string;
  /**
   * @remarks
   * The number of times that a backend server must consecutively pass health checks before it is declared healthy.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The ID of the primary/secondary server group that is associated with the listener.
   * 
   * @example
   * rsp-0bfucw****
   */
  masterSlaveServerGroupId?: string;
  /**
   * @remarks
   * Indicates whether the Proxy protocol is used to pass source client IP addresses to backend servers. Valid values:
   * 
   * *   **true**: enables the burst feature for the data disk.
   * *   **false**: The task is not being retried.
   * 
   * @example
   * false
   */
  proxyProtocolV2Enabled?: string;
  /**
   * @remarks
   * The number of times that a backend server must consecutively fail health checks before it is declared unhealthy.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      connectionDrain: 'ConnectionDrain',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckExp: 'HealthCheckExp',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckReq: 'HealthCheckReq',
      healthyThreshold: 'HealthyThreshold',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      proxyProtocolV2Enabled: 'ProxyProtocolV2Enabled',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionDrain: 'string',
      connectionDrainTimeout: 'number',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckExp: 'string',
      healthCheckInterval: 'number',
      healthCheckReq: 'string',
      healthyThreshold: 'number',
      masterSlaveServerGroupId: 'string',
      proxyProtocolV2Enabled: 'string',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerListenersResponseBodyListeners extends $tea.Model {
  /**
   * @remarks
   * The ID of the access control list (ACL).
   * 
   * @example
   * nacl-a2do9e413e0spzasx****
   */
  aclId?: string;
  /**
   * @remarks
   * The IDs of the ACLs.
   */
  aclIds?: string[];
  /**
   * @remarks
   * Indicates whether access control is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  aclStatus?: string;
  /**
   * @remarks
   * The type of access control. Valid values:
   * 
   * *   **white**: The listener forwards requests only from IP addresses and CIDR blocks on the whitelist. Your service may be adversely affected if the whitelist is not properly configured. If a whitelist is configured, the listener forwards requests only from IP addresses that are added to the whitelist.
   * 
   * If you configure a whitelist but no IP address is added to the whitelist, the listener forwards all requests.
   * 
   * *   **black**: The listener blocks requests from IP addresses and CIDR blocks on the blacklist.
   * 
   * If you configure a blacklist but no IP address is added to the blacklist, the listener forwards all requests.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The port of the backend server.
   * 
   * >  This parameter takes effect only when the `VServerGroupId` and `MasterSlaveServerGroupId` parameters are both empty.
   * 
   * @example
   * 80
   */
  backendServerPort?: number;
  /**
   * @remarks
   * The maximum bandwidth of the listener. Unit: Mbit/s.
   * 
   * @example
   * -1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The description of the listener.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The configurations of the HTTP listener.
   */
  HTTPListenerConfig?: DescribeLoadBalancerListenersResponseBodyListenersHTTPListenerConfig;
  /**
   * @remarks
   * The configurations of the HTTPS listener.
   */
  HTTPSListenerConfig?: DescribeLoadBalancerListenersResponseBodyListenersHTTPSListenerConfig;
  /**
   * @remarks
   * The listener port.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The protocol used by the listener.
   * 
   * @example
   * http
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * @example
   * lb-bp1b6c719dfa****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * *   **wrr**: Backend servers with higher weights receive more requests than those with lower weights.
   * *   **rr**: Requests are distributed to backend servers in sequence.
   * *   **sch**: consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
   * *   **tch**: specifies consistent hashing based on the source IP address, destination IP address, source port, and destination port. Requests that have the same four factors are distributed to the same backend server.
   * *   **qch**: specifies consistent hashing based on Quick UDP Internet Connection (QUIC) IDs. Requests that contain the same QUIC ID are scheduled to the same backend server.
   * 
   * >  Only high-performance CLB instances support the **sch**, **tch**, and **qch** consistent hashing algorithms.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The status of the listener. Valid values:
   * 
   * *   **running**
   * *   **stopped**
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The configurations of the TCP listener.
   */
  TCPListenerConfig?: DescribeLoadBalancerListenersResponseBodyListenersTCPListenerConfig;
  /**
   * @remarks
   * A list of tags.
   */
  tags?: DescribeLoadBalancerListenersResponseBodyListenersTags[];
  /**
   * @remarks
   * The configurations of the UDP listener.
   */
  UDPListenerConfig?: DescribeLoadBalancerListenersResponseBodyListenersUDPListenerConfig;
  /**
   * @remarks
   * The ID of the vServer group associated with the listener.
   * 
   * @example
   * rsp-cige6j****
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclIds: 'AclIds',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      description: 'Description',
      HTTPListenerConfig: 'HTTPListenerConfig',
      HTTPSListenerConfig: 'HTTPSListenerConfig',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      scheduler: 'Scheduler',
      status: 'Status',
      TCPListenerConfig: 'TCPListenerConfig',
      tags: 'Tags',
      UDPListenerConfig: 'UDPListenerConfig',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclIds: { 'type': 'array', 'itemType': 'string' },
      aclStatus: 'string',
      aclType: 'string',
      backendServerPort: 'number',
      bandwidth: 'number',
      description: 'string',
      HTTPListenerConfig: DescribeLoadBalancerListenersResponseBodyListenersHTTPListenerConfig,
      HTTPSListenerConfig: DescribeLoadBalancerListenersResponseBodyListenersHTTPSListenerConfig,
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      scheduler: 'string',
      status: 'string',
      TCPListenerConfig: DescribeLoadBalancerListenersResponseBodyListenersTCPListenerConfig,
      tags: { 'type': 'array', 'itemType': DescribeLoadBalancerListenersResponseBodyListenersTags },
      UDPListenerConfig: DescribeLoadBalancerListenersResponseBodyListenersUDPListenerConfig,
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerTCPListenerAttributeResponseBodyAclIds extends $tea.Model {
  aclId?: string[];
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerTCPListenerAttributeResponseBodyTagsTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N. Valid values of N: **1** to **20**. The tag value cannot be an empty string. The tag key can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of tag N. Valid values of N: **1** to **20**. The tag value can be an empty string. The tag value can be up to 128 characters in length, and cannot start with `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
   */
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerTCPListenerAttributeResponseBodyTags extends $tea.Model {
  tag?: DescribeLoadBalancerTCPListenerAttributeResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeLoadBalancerTCPListenerAttributeResponseBodyTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerUDPListenerAttributeResponseBodyAclIds extends $tea.Model {
  aclId?: string[];
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerUDPListenerAttributeResponseBodyTagsTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N. Valid values of N: **1** to **20**. The tag value cannot be an empty string. The tag key can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of tag N. Valid values of N: **1** to **20**. The tag value can be an empty string. The tag value can be up to 128 characters in length, and cannot start with `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
   */
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerUDPListenerAttributeResponseBodyTags extends $tea.Model {
  tag?: DescribeLoadBalancerUDPListenerAttributeResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeLoadBalancerUDPListenerAttributeResponseBodyTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancersRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key must be 1 to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be at most 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
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

export class DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancerTagsTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * FinanceDept
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * FinanceJoshua
   */
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancerTags extends $tea.Model {
  tag?: DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancerTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancerTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancer extends $tea.Model {
  /**
   * @remarks
   * The endpoint of the CLB instance.
   * 
   * @example
   * 100.XX.XX.28
   */
  address?: string;
  /**
   * @remarks
   * The IP version that is used by the CLB instance. Valid values: **ipv4** and **ipv6**.
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * The network type of the CLB instance. Valid values:
   * 
   * *   **internet:** After an Internet-facing CLB instance is created, the system assigns a public IP address to the CLB instance. Then, the CLB instance can forward requests over the Internet.
   * *   **intranet:** After an internal-facing CLB instance is created, the system assigns a private IP address to the CLB instance. Then, the CLB instance can forward requests only over internal networks.
   * 
   * @example
   * intranet
   */
  addressType?: string;
  /**
   * @remarks
   * The maximum bandwidth of the listener. Unit: Mbit/s.
   * 
   * @example
   * -1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The time when the CLB instance was created. The time follows the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2021-12-02T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The timestamp when the instance was created.
   * 
   * @example
   * 1504147745000
   */
  createTimeStamp?: number;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled for the CLB instance. Valid values:
   * 
   * *   **on:** Deletion protection is enabled.
   * *   **off:** Deletion protection is disabled.
   * 
   * @example
   * off
   */
  deleteProtection?: string;
  /**
   * @remarks
   * The metering method of the CLB instance. Valid values:
   * 
   * *   **PayBySpec:** pay-by-specification.
   * *   **PayByCLCU:** pay-by-LCU.
   * 
   * >  This parameter takes effect only for accounts registered on the China site (aliyun.com) and when the **PayType** parameter is set to **PayOnDemand**.
   * 
   * @example
   * PayBySpec
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of the Internet-facing CLB instance. Valid values:
   * 
   * *   **3:** pay-by-bandwidth (**paybybandwidth**).
   * *   **4:** pay-by-data-transfer (**paybytraffic**).
   * 
   * @example
   * 3
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The metering method of Internet data transfer. Valid values:
   * 
   * *   **paybybandwidth:** pay-by-bandwidth.
   * *   **paybytraffic:** pay-by-data-transfer.
   * 
   * @example
   * paybybandwidth
   */
  internetChargeTypeAlias?: string;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * @example
   * lb-bp1b6c719dfa****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The name of the CLB instance.
   * 
   * @example
   * lb-bp1o94dp5i6ea****
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The specification of the CLB instance.
   * 
   * >  Pay-as-you-go CLB instances are not subject to specifications. **slb.lcu.elastic** is returned by default.
   * 
   * @example
   * slb.s1.small
   */
  loadBalancerSpec?: string;
  /**
   * @remarks
   * The status of the CLB instance. Valid values:
   * 
   * *   **inactive:** The CLB instance is disabled. CLB instances in the inactive state do not forward traffic.
   * *   **active:** The CLB instance runs as expected. By default, newly created CLB instances are in the **active** state.
   * *   **locked:** The CLB instance is locked.
   * 
   * @example
   * active
   */
  loadBalancerStatus?: string;
  /**
   * @remarks
   * The ID of the primary zone to which the CLB instance belongs.
   * 
   * @example
   * cn-hangzhou-b
   */
  masterZoneId?: string;
  /**
   * @remarks
   * The reason why the configuration read-only mode was enabled. The reason must be 1 to 80 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The reason must start with a letter.
   * 
   * > This parameter takes effect only when you set the `ModificationProtectionStatus` parameter to **ConsoleProtection**.
   * 
   * @example
   * ManagedInstance
   */
  modificationProtectionReason?: string;
  /**
   * @remarks
   * Indicates whether the configuration read-only mode is enabled for the CLB instance. Valid values:
   * 
   * *   **NonProtection:** The configuration read-only mode is disabled. In this case, you cannot specify the ModificationProtectionReason parameter. If you specify the `ModificationProtectionReason` parameter, the value is cleared.
   * *   **ConsoleProtection:** The configuration read-only mode is enabled.
   * 
   * >  If you set this parameter to **ConsoleProtection**, you cannot modify the configurations of the CLB instance in the CLB console. However, you can call API operations to modify the configurations of the CLB instance.
   * 
   * @example
   * ConsoleProtection
   */
  modificationProtectionStatus?: string;
  /**
   * @remarks
   * The network type of the internal-facing CLB instance. Valid values:
   * 
   * *   **vpc:** VPC.
   * *   **classic:** classic network.
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The billing method of the CLB instance.
   * 
   * *   **PayOnDemand** is returned, which indicates the pay-as-you-go billing method.
   * 
   * @example
   * PayOnDemand
   */
  payType?: string;
  /**
   * @remarks
   * The ID of the region where the CLB instance was deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The region where the CLB instance was deployed.
   * 
   * @example
   * hangzhou
   */
  regionIdAlias?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-atstuj3r****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the secondary zone to which the CLB instance belongs.
   * 
   * @example
   * cn-hangzhou-d
   */
  slaveZoneId?: string;
  /**
   * @remarks
   * The tags of the CLB instance.
   */
  tags?: DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancerTags;
  /**
   * @remarks
   * The ID of the vSwitch to which the internal-facing CLB instance belongs.
   * 
   * @example
   * vsw-255ecr****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC in which the internal-facing CLB instance was deployed.
   * 
   * @example
   * vpc-25dvzy9f8****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressIPVersion: 'AddressIPVersion',
      addressType: 'AddressType',
      bandwidth: 'Bandwidth',
      createTime: 'CreateTime',
      createTimeStamp: 'CreateTimeStamp',
      deleteProtection: 'DeleteProtection',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      internetChargeTypeAlias: 'InternetChargeTypeAlias',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerSpec: 'LoadBalancerSpec',
      loadBalancerStatus: 'LoadBalancerStatus',
      masterZoneId: 'MasterZoneId',
      modificationProtectionReason: 'ModificationProtectionReason',
      modificationProtectionStatus: 'ModificationProtectionStatus',
      networkType: 'NetworkType',
      payType: 'PayType',
      regionId: 'RegionId',
      regionIdAlias: 'RegionIdAlias',
      resourceGroupId: 'ResourceGroupId',
      slaveZoneId: 'SlaveZoneId',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressIPVersion: 'string',
      addressType: 'string',
      bandwidth: 'number',
      createTime: 'string',
      createTimeStamp: 'number',
      deleteProtection: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      internetChargeTypeAlias: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerSpec: 'string',
      loadBalancerStatus: 'string',
      masterZoneId: 'string',
      modificationProtectionReason: 'string',
      modificationProtectionStatus: 'string',
      networkType: 'string',
      payType: 'string',
      regionId: 'string',
      regionIdAlias: 'string',
      resourceGroupId: 'string',
      slaveZoneId: 'string',
      tags: DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancerTags,
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancersResponseBodyLoadBalancers extends $tea.Model {
  loadBalancer?: DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancer[];
  static names(): { [key: string]: string } {
    return {
      loadBalancer: 'LoadBalancer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancer: { 'type': 'array', 'itemType': DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupAttributeResponseBodyMasterSlaveBackendServersMasterSlaveBackendServer extends $tea.Model {
  /**
   * @remarks
   * The description of the primary/secondary server group.
   * 
   * @example
   * Primary and secondary server group description
   */
  description?: string;
  /**
   * @remarks
   * The port that is used by the backend server.
   * 
   * @example
   * 90
   */
  port?: number;
  /**
   * @remarks
   * The ID of the backend server.
   * 
   * @example
   * vm-hrf******
   */
  serverId?: string;
  /**
   * @remarks
   * The type of backend server. Valid values: **Master** and **Slave**.
   * 
   * @example
   * Slave
   */
  serverType?: string;
  /**
   * @remarks
   * The type of the backend server. Valid values:
   * 
   * *   **ecs** (default): Elastic Compute Service (ECS) instance
   * *   **eni**: elastic network interface (ENI)
   * *   **eci**: elastic container instance
   * 
   * @example
   * ecs
   */
  type?: string;
  /**
   * @remarks
   * The weight of the backend server.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
      serverType: 'ServerType',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
      serverId: 'string',
      serverType: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupAttributeResponseBodyMasterSlaveBackendServers extends $tea.Model {
  masterSlaveBackendServer?: DescribeMasterSlaveServerGroupAttributeResponseBodyMasterSlaveBackendServersMasterSlaveBackendServer[];
  static names(): { [key: string]: string } {
    return {
      masterSlaveBackendServer: 'MasterSlaveBackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterSlaveBackendServer: { 'type': 'array', 'itemType': DescribeMasterSlaveServerGroupAttributeResponseBodyMasterSlaveBackendServersMasterSlaveBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupAttributeResponseBodyTagsTag extends $tea.Model {
  /**
   * @remarks
   * The tag key. Valid values of N: **1** to **20**. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length, and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * test
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: **1** to **20**. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. The tag value cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * value
   */
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupAttributeResponseBodyTags extends $tea.Model {
  tag?: DescribeMasterSlaveServerGroupAttributeResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeMasterSlaveServerGroupAttributeResponseBodyTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupsRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N. Valid values of N: **1 to 20**. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length, and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N. Valid values of N: **1 to 20**. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` and `acs:`.
   * 
   * @example
   * value
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

export class DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjectsListenersListener extends $tea.Model {
  /**
   * @remarks
   * The listener port.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The listener protocol.
   * 
   * @example
   * tcp
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjectsListeners extends $tea.Model {
  listener?: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjectsListenersListener[];
  static names(): { [key: string]: string } {
    return {
      listener: 'Listener',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listener: { 'type': 'array', 'itemType': DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjectsListenersListener },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjects extends $tea.Model {
  /**
   * @remarks
   * The listeners.
   */
  listeners?: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjectsListeners;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjectsListeners,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupTagsTag extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test_slb_yaochi_tag_key-0
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 000098dab00323fb
   */
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupTags extends $tea.Model {
  tag?: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroup extends $tea.Model {
  /**
   * @remarks
   * The associated resources.
   */
  associatedObjects?: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjects;
  /**
   * @remarks
   * The time when the CLB instance was created. Specify the time in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2022-12-02T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the primary/secondary server group.
   * 
   * @example
   * rsp-0bfuc******
   */
  masterSlaveServerGroupId?: string;
  /**
   * @remarks
   * The name of the primary/secondary server group.
   * 
   * @example
   * Group3
   */
  masterSlaveServerGroupName?: string;
  /**
   * @remarks
   * The tags to add to the resource.
   */
  tags?: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupTags;
  static names(): { [key: string]: string } {
    return {
      associatedObjects: 'AssociatedObjects',
      createTime: 'CreateTime',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      masterSlaveServerGroupName: 'MasterSlaveServerGroupName',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedObjects: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjects,
      createTime: 'string',
      masterSlaveServerGroupId: 'string',
      masterSlaveServerGroupName: 'string',
      tags: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroups extends $tea.Model {
  masterSlaveServerGroup?: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroup[];
  static names(): { [key: string]: string } {
    return {
      masterSlaveServerGroup: 'MasterSlaveServerGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterSlaveServerGroup: { 'type': 'array', 'itemType': DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China (Beijing)
   */
  localName?: string;
  /**
   * @remarks
   * The endpoint of the region.
   * 
   * @example
   * slb.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRulesResponseBodyRulesRule extends $tea.Model {
  /**
   * @remarks
   * The cookie that is configured on the backend server.
   * 
   * The value must be 1 to 200 characters in length, and can contain only ASCII letters and digits. It cannot contain commas (,), semicolons (;), or spaces. It cannot start with a dollar sign ($).
   * 
   * >  If you set the **StickySession** parameter to **on** and the **StickySessionType** parameter to **server**, this parameter is required.
   * 
   * @example
   * 23
   */
  cookie?: string;
  /**
   * @remarks
   * The timeout period of a cookie. Valid values: **1 to 86400**. Unit: seconds.
   * 
   * >  If you set the **StickySession** parameter to **on** and the **StickySessionType** parameter to **insert**, this parameter is required.
   * 
   * @example
   * 56
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * The requested domain name specified in the forwarding rule.
   * 
   * @example
   * test.com
   */
  domain?: string;
  /**
   * @remarks
   * Indicates whether health checks are enabled.
   * 
   * Valid values: **on** and **off**.
   * 
   * >  If you set the **ListenerSync** parameter to **off**, this parameter is required. If you set the parameter to **on**, the configuration of the listener is used.
   * 
   * @example
   * off
   */
  healthCheck?: string;
  /**
   * @remarks
   * The backend port that is used for health checks.
   * 
   * Valid values: **1 to 65535**.
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required. If this parameter is empty but **HealthCheck** is set to **on**, the listener port is used for health checks.
   * 
   * @example
   * 45
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name that is used for health checks. Valid values:
   * 
   * *   **$_ip**: The private IP address of the backend server.
   * 
   *     If you do not set this parameter or set the parameter to $_ip, the SLB instance uses the private IP address of each backend server as the domain name for health checks.
   * 
   * *   **domain**: The domain name must be 1 to 80 characters in length. The domain name can contain only letters, digits, periods (.),and hyphens (-).
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required.
   * 
   * @example
   * www.domain.com
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code that indicates a successful health check. Multiple HTTP status codes are separated by commas (,). Default value: **http_2xx**.
   * 
   * Valid values: **http_2xx**, **http_3xx**, **http_4xx**, and **http_5xx**.
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required.
   * 
   * @example
   * http_3xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The time interval between two consecutive health checks.
   * 
   * Valid values: **1 to 50**. Unit: seconds.
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The timeout period of a health check response. If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check. Unit: seconds
   * 
   * Valid values: **1 to 300**.
   * 
   * >  When you set the **HealthCheck** parameter to **on**, this parameter takes effect.
   * 
   * @example
   * 34
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The URI that is used for health checks.
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required.
   * 
   * @example
   * /example
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * Specifies the number of successful health checks that must be consecutively performed before a backend server can be declared healthy (from **fail** to **success**).
   * 
   * Valid values: **2 to 10**.
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required.
   * 
   * @example
   * 5
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * Indicates whether the forwarding rule uses the scheduling algorithm, session persistence, and health check configurations of the listener.
   * 
   * Valid values: **on** and **off**.
   * 
   * *   **off**: does not use the configurations of the listener. You can customize health check and session persistence configurations for the forwarding rule.
   * *   **on**: uses the configurations of the listener.
   * 
   * @example
   * off
   */
  listenerSync?: string;
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * @example
   * rule-tybqi6****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the forwarding rule. The name must be 1 to 80 characters in length, and can contain only letters, digits, hyphens (-), forward slashes (/), periods (.),and underscores (_).
   * 
   * >  The name of each forwarding rule must be unique within a listener.
   * 
   * @example
   * Rule2
   */
  ruleName?: string;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * *   **wrr** (default): Backend servers that have higher weights receive more requests than backend servers that have lower weights.
   * *   **rr**: Requests are distributed to backend servers in sequence.
   * 
   * >  If you set the **ListenerSync** parameter to **off**, this parameter is required. If you set the parameter to **on**, the configuration of the listener is used.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * Specifies whether to enable session persistence.
   * 
   * Valid values: **on** and **off**.
   * 
   * >  If you set the **ListenerSync** parameter to **off**, this parameter is required. If you set the parameter to **on**, the configuration of the listener is used.
   * 
   * @example
   * off
   */
  stickySession?: string;
  /**
   * @remarks
   * The method that is used to handle a cookie. Valid values:
   * 
   * *   **insert**: inserts a cookie into the response. SLB inserts a cookie (SERVERID) into the first HTTP or HTTPS response packet that is sent to a client. The next request from the client will contain this cookie, and the listener will distribute this request to the recorded backend server.
   * *   **server**: rewrites a cookie. When SLB detects a user-defined cookie, SLB overwrites the original cookie with the user-defined cookie. The next request from the client contains the user-defined cookie, and the listener distributes the request to the recorded backend server.
   * 
   * >  If you set the **StickySession** parameter to **on**, this parameter is required.
   * 
   * @example
   * insert
   */
  stickySessionType?: string;
  /**
   * @remarks
   * Specifies the number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy (from **success** to **fail**).
   * 
   * Valid values: **2 to 10**
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required.
   * 
   * @example
   * 2
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * The requested path specified in the forwarding rule.
   * 
   * @example
   * /cache
   */
  url?: string;
  /**
   * @remarks
   * The ID of the destination vServer group specified in the forwarding rule.
   * 
   * @example
   * rsp-6cejjzl****
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      domain: 'Domain',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      listenerSync: 'ListenerSync',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      scheduler: 'Scheduler',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      unhealthyThreshold: 'UnhealthyThreshold',
      url: 'Url',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      domain: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      listenerSync: 'string',
      ruleId: 'string',
      ruleName: 'string',
      scheduler: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      unhealthyThreshold: 'number',
      url: 'string',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRulesResponseBodyRules extends $tea.Model {
  rule?: DescribeRulesResponseBodyRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeRulesResponseBodyRulesRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerCertificatesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys.
   * 
   * The tag key cannot be an empty string. The tag key must be 1 to 64 characters in length and cannot start with `aliyun` or `acs`:. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value cannot be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag value cannot contain `http://` or `https://`.
   * 
   * @example
   * 1
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

export class DescribeServerCertificatesResponseBodyServerCertificatesServerCertificateSubjectAlternativeNames extends $tea.Model {
  subjectAlternativeName?: string[];
  static names(): { [key: string]: string } {
    return {
      subjectAlternativeName: 'SubjectAlternativeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subjectAlternativeName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerCertificatesResponseBodyServerCertificatesServerCertificateTagsTag extends $tea.Model {
  /**
   * @remarks
   * The tag keys of the resource.
   * 
   * @example
   * test
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 1
   */
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerCertificatesResponseBodyServerCertificatesServerCertificateTags extends $tea.Model {
  tag?: DescribeServerCertificatesResponseBodyServerCertificatesServerCertificateTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeServerCertificatesResponseBodyServerCertificatesServerCertificateTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerCertificatesResponseBodyServerCertificatesServerCertificate extends $tea.Model {
  /**
   * @remarks
   * The ID of the server certificate from Alibaba Cloud Certificate Management Service.
   * 
   * @example
   * 7309********_15d97e7709a_71445759hr_789289731
   */
  aliCloudCertificateId?: string;
  /**
   * @remarks
   * The name of the server certificate from Alibaba Cloud Certificate Management Service.
   * 
   * @example
   * testcertkey
   */
  aliCloudCertificateName?: string;
  /**
   * @remarks
   * The domain name of the server certificate. The domain name is specified in the `CommonName` field.
   * 
   * @example
   * www.example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The time when the server certificate was uploaded.
   * 
   * @example
   * 2021-08-31T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The timestamp when the server certificate was uploaded.
   * 
   * @example
   * 1504147745000
   */
  createTimeStamp?: number;
  /**
   * @remarks
   * The time when the server certificate expires.
   * 
   * @example
   * 2023-01-26T23:59:59Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The timestamp when the server certificate expires.
   * 
   * @example
   * 15041477450
   */
  expireTimeStamp?: number;
  /**
   * @remarks
   * The fingerprint of the server certificate.
   * 
   * @example
   * 68:08:1a:f8:2c:97:69:a3:a1:e6:16:41:4b:ca:4f:5d:ee:a5:ef:0d
   */
  fingerprint?: string;
  /**
   * @remarks
   * Indicates whether the server certificate is from Alibaba Cloud Certificate Management Service. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 0
   */
  isAliCloudCertificate?: number;
  /**
   * @remarks
   * The region ID of the server certificate.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The server certificate ID.
   * 
   * @example
   * 123157********_166f8204689_1714763408_709981430-cn-east-hangzhou-02
   */
  serverCertificateId?: string;
  /**
   * @remarks
   * The name of the server certificate.
   * 
   * @example
   * slb
   */
  serverCertificateName?: string;
  /**
   * @remarks
   * The alternative domain names of the server certificate. The alternative domain names are specified in the Subject Alternative Name field of the server certificate.
   */
  subjectAlternativeNames?: DescribeServerCertificatesResponseBodyServerCertificatesServerCertificateSubjectAlternativeNames;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeServerCertificatesResponseBodyServerCertificatesServerCertificateTags;
  static names(): { [key: string]: string } {
    return {
      aliCloudCertificateId: 'AliCloudCertificateId',
      aliCloudCertificateName: 'AliCloudCertificateName',
      commonName: 'CommonName',
      createTime: 'CreateTime',
      createTimeStamp: 'CreateTimeStamp',
      expireTime: 'ExpireTime',
      expireTimeStamp: 'ExpireTimeStamp',
      fingerprint: 'Fingerprint',
      isAliCloudCertificate: 'IsAliCloudCertificate',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serverCertificateId: 'ServerCertificateId',
      serverCertificateName: 'ServerCertificateName',
      subjectAlternativeNames: 'SubjectAlternativeNames',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliCloudCertificateId: 'string',
      aliCloudCertificateName: 'string',
      commonName: 'string',
      createTime: 'string',
      createTimeStamp: 'number',
      expireTime: 'string',
      expireTimeStamp: 'number',
      fingerprint: 'string',
      isAliCloudCertificate: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      serverCertificateId: 'string',
      serverCertificateName: 'string',
      subjectAlternativeNames: DescribeServerCertificatesResponseBodyServerCertificatesServerCertificateSubjectAlternativeNames,
      tags: DescribeServerCertificatesResponseBodyServerCertificatesServerCertificateTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerCertificatesResponseBodyServerCertificates extends $tea.Model {
  serverCertificate?: DescribeServerCertificatesResponseBodyServerCertificatesServerCertificate[];
  static names(): { [key: string]: string } {
    return {
      serverCertificate: 'ServerCertificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverCertificate: { 'type': 'array', 'itemType': DescribeServerCertificatesResponseBodyServerCertificatesServerCertificate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBodyTagSetsTagSet extends $tea.Model {
  /**
   * @remarks
   * The number of instances to which the tag is added.
   * 
   * @example
   * 10
   */
  instanceCount?: number;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * api
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      instanceCount: 'InstanceCount',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCount: 'number',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBodyTagSets extends $tea.Model {
  tagSet?: DescribeTagsResponseBodyTagSetsTagSet[];
  static names(): { [key: string]: string } {
    return {
      tagSet: 'TagSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagSet: { 'type': 'array', 'itemType': DescribeTagsResponseBodyTagSetsTagSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupAttributeResponseBodyBackendServersBackendServer extends $tea.Model {
  /**
   * @remarks
   * The description of the server group.
   * 
   * >  This parameter is not returned if the Description parameter is not specified in the request.
   * 
   * @example
   * Server Group Description
   */
  description?: string;
  /**
   * @remarks
   * The port that is used by the backend server.
   * 
   * @example
   * 90
   */
  port?: number;
  /**
   * @remarks
   * The ID of the backend server.
   * 
   * @example
   * vm-233
   */
  serverId?: string;
  /**
   * @remarks
   * The IP address of the backend server.
   * 
   * @example
   * 192.XX.XX.11
   */
  serverIp?: string;
  /**
   * @remarks
   * The type of backend server. Valid values:
   * 
   * *   **ecs**: ECS instance
   * *   **eni**: ENI
   * *   **eci**: elastic container instance
   * 
   * @example
   * ecs
   */
  type?: string;
  /**
   * @remarks
   * The weight of the backend server.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
      serverIp: 'ServerIp',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
      serverId: 'string',
      serverIp: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupAttributeResponseBodyBackendServers extends $tea.Model {
  backendServer?: DescribeVServerGroupAttributeResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': DescribeVServerGroupAttributeResponseBodyBackendServersBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupAttributeResponseBodyTagsTag extends $tea.Model {
  /**
   * @remarks
   * The tag key. Valid values of N: **1** to **20**. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length, and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: **1** to **20**. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. The tag value cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * TestValue
   */
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupAttributeResponseBodyTags extends $tea.Model {
  tag?: DescribeVServerGroupAttributeResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeVServerGroupAttributeResponseBodyTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N. Valid values of N: 1 to 20. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length, and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs`:.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: 1 to 20. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag value cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
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

export class DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsListenersListener extends $tea.Model {
  /**
   * @remarks
   * The listener port.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The listener protocol. Valid values: **tcp**, **udp**, **http**, and **https**.
   * 
   * @example
   * tcp
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsListeners extends $tea.Model {
  listener?: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsListenersListener[];
  static names(): { [key: string]: string } {
    return {
      listener: 'Listener',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listener: { 'type': 'array', 'itemType': DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsListenersListener },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsRulesRule extends $tea.Model {
  /**
   * @remarks
   * The requested domain name.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * @example
   * rule-a3x3pg1yohq3lq****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the forwarding rule.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * The request URL.
   * 
   * @example
   * /example
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      ruleId: 'string',
      ruleName: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsRules extends $tea.Model {
  rule?: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsRulesRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjects extends $tea.Model {
  /**
   * @remarks
   * The listeners.
   */
  listeners?: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsListeners;
  /**
   * @remarks
   * The forwarding rules.
   */
  rules?: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsRules;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsListeners,
      rules: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupTagsTag extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupTags extends $tea.Model {
  tag?: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsResponseBodyVServerGroupsVServerGroup extends $tea.Model {
  /**
   * @remarks
   * The associated resources.
   */
  associatedObjects?: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjects;
  /**
   * @remarks
   * The time when the CLB instance was created. The time follows the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2022-08-31T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The number of servers.
   * 
   * This parameter is unavailable by default. To use this parameter, submit a ticket or contact your account manager.
   * 
   * @example
   * 1
   */
  serverCount?: number;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupTags;
  /**
   * @remarks
   * The server group ID.
   * 
   * @example
   * rsp-0bfuc*****
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * The server group name.
   * 
   * @example
   * Group3
   */
  VServerGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      associatedObjects: 'AssociatedObjects',
      createTime: 'CreateTime',
      serverCount: 'ServerCount',
      tags: 'Tags',
      VServerGroupId: 'VServerGroupId',
      VServerGroupName: 'VServerGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedObjects: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjects,
      createTime: 'string',
      serverCount: 'number',
      tags: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupTags,
      VServerGroupId: 'string',
      VServerGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsResponseBodyVServerGroups extends $tea.Model {
  VServerGroup?: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroup[];
  static names(): { [key: string]: string } {
    return {
      VServerGroup: 'VServerGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VServerGroup: { 'type': 'array', 'itemType': DescribeVServerGroupsResponseBodyVServerGroupsVServerGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZoneSlaveZonesSlaveZone extends $tea.Model {
  /**
   * @remarks
   * The name of the secondary zone.
   * 
   * @example
   * Queries zones in a specified region.
   */
  localName?: string;
  /**
   * @remarks
   * The ID of the secondary zone.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZoneSlaveZones extends $tea.Model {
  slaveZone?: DescribeZonesResponseBodyZonesZoneSlaveZonesSlaveZone[];
  static names(): { [key: string]: string } {
    return {
      slaveZone: 'SlaveZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slaveZone: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZonesZoneSlaveZonesSlaveZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZone extends $tea.Model {
  /**
   * @remarks
   * The name of the zone.
   * 
   * @example
   * The list of secondary zones.
   */
  localName?: string;
  /**
   * @remarks
   * The secondary zones.
   */
  slaveZones?: DescribeZonesResponseBodyZonesZoneSlaveZones;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      slaveZones: 'SlaveZones',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      slaveZones: DescribeZonesResponseBodyZonesZoneSlaveZones,
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZones extends $tea.Model {
  zone?: DescribeZonesResponseBodyZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZonesZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTLSCipherPoliciesResponseBodyTLSCipherPoliciesRelateListeners extends $tea.Model {
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * @example
   * lb-bp1b6c719dfa08ex****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The listening port. Valid values: **1** to **65535**.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The listening protocol. Valid values:
   * 
   * *   **TCP**
   * *   **UDP**
   * *   **HTTP**
   * *   **HTTPS**
   * 
   * @example
   * HTTPS
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      port: 'number',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTLSCipherPoliciesResponseBodyTLSCipherPolicies extends $tea.Model {
  /**
   * @remarks
   * The cipher suites supported by the TLS version.
   * 
   * TLS 1.0 and TLS 1.1 support the following cipher suites:
   * 
   * *   ECDHE-ECDSA-AES128-SHA
   * *   ECDHE-ECDSA-AES256-SHA
   * *   ECDHE-RSA-AES128-SHA
   * *   ECDHE-RSA-AES256-SHA
   * *   AES128-SHA AES256-SHA
   * *   DES-CBC3-SHA
   * 
   * TLS 1.2 supports the following cipher suites:
   * 
   * *   ECDHE-ECDSA-AES128-SHA
   * *   ECDHE-ECDSA-AES256-SHA
   * *   ECDHE-RSA-AES128-SHA
   * *   ECDHE-RSA-AES256-SHA
   * *   AES128-SHA AES256-SHA
   * *   DES-CBC3-SHA
   * *   ECDHE-ECDSA-AES128-GCM-SHA256
   * *   ECDHE-ECDSA-AES256-GCM-SHA384
   * *   ECDHE-ECDSA-AES128-SHA256
   * *   ECDHE-ECDSA-AES256-SHA384
   * *   ECDHE-RSA-AES128-GCM-SHA256
   * *   ECDHE-RSA-AES256-GCM-SHA384
   * *   ECDHE-RSA-AES128-SHA256
   * *   ECDHE-RSA-AES256-SHA384
   * *   AES128-GCM-SHA256
   * *   AES256-GCM-SHA384
   * *   AES128-SHA256 AES256-SHA256
   * 
   * TLS 1.3 supports the following cipher suites:
   * 
   * *   TLS_AES_128_GCM_SHA256
   * *   TLS_AES_256_GCM_SHA384
   * *   TLS_CHACHA20_POLY1305_SHA256
   * *   TLS_AES_128_CCM_SHA256
   * *   TLS_AES_128_CCM_8_SHA256
   */
  ciphers?: string[];
  /**
   * @remarks
   * The timestamp generated when the TLS policy is created.
   * 
   * @example
   * 1608273800000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the TLS policy.
   * 
   * @example
   * tls-bp17elso1h323r****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the TLS policy.
   * 
   * @example
   * TLSPolicy-test****
   */
  name?: string;
  /**
   * @remarks
   * The list of associated listeners.
   */
  relateListeners?: ListTLSCipherPoliciesResponseBodyTLSCipherPoliciesRelateListeners[];
  /**
   * @remarks
   * The status of the TLS policy. Valid values:
   * 
   * *   **configuring**: The TLS policy is being configured.
   * *   **normal**: The TLS policy works as expected.
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * The version of the TLS protocol.
   */
  TLSVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      name: 'Name',
      relateListeners: 'RelateListeners',
      status: 'Status',
      TLSVersions: 'TLSVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: { 'type': 'array', 'itemType': 'string' },
      createTime: 'number',
      instanceId: 'string',
      name: 'string',
      relateListeners: { 'type': 'array', 'itemType': ListTLSCipherPoliciesResponseBodyTLSCipherPoliciesRelateListeners },
      status: 'string',
      TLSVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys.
   * 
   * The tag key cannot be an empty string. The tag key must be 1 to 64 characters in length and cannot start with `aliyun` or `acs:`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value cannot be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag value cannot contain `http://` or `https://`.
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

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * lb-bp16qjewdsunr4****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * instance
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
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVServerGroupBackendServersResponseBodyBackendServersBackendServer extends $tea.Model {
  /**
   * @remarks
   * The description of the backend server.
   * 
   * @example
   * Backend server description
   */
  description?: string;
  /**
   * @remarks
   * The port that is used by the backend server.
   * 
   * @example
   * 70
   */
  port?: number;
  /**
   * @remarks
   * The ID of the ECS instance or ENI.
   * 
   * @example
   * i-bp1ge5hrp****
   */
  serverId?: string;
  /**
   * @remarks
   * The type of backend server. Valid values:
   * 
   * *   **ecs** (default): ECS instance
   * *   **eni**: ENI
   * *   **eci**: elastic container instance
   * 
   * @example
   * ecs
   */
  type?: string;
  /**
   * @remarks
   * The weight of the backend server.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
      serverId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVServerGroupBackendServersResponseBodyBackendServers extends $tea.Model {
  backendServer?: ModifyVServerGroupBackendServersResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': ModifyVServerGroupBackendServersResponseBodyBackendServersBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBackendServersResponseBodyBackendServersBackendServer extends $tea.Model {
  /**
   * @remarks
   * The description of the server group.
   * 
   * @example
   * BackendServer1
   */
  description?: string;
  /**
   * @remarks
   * The ID of the backend server.
   * 
   * @example
   * i-bp1fq61enf4loa5i****
   */
  serverId?: string;
  /**
   * @remarks
   * The type of backend server. Valid values:
   * 
   * *   **ecs**: ECS instance
   * *   **eni**: ENI
   * *   **eci**: elastic container instances
   * 
   * @example
   * ecs
   */
  type?: string;
  /**
   * @remarks
   * The weight of the backend server. Valid values: **0 to 100**.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      serverId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBackendServersResponseBodyBackendServers extends $tea.Model {
  backendServer?: RemoveBackendServersResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': RemoveBackendServersResponseBodyBackendServersBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVServerGroupBackendServersResponseBodyBackendServersBackendServer extends $tea.Model {
  /**
   * @remarks
   * The port that is used by the backend server.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The ID of the backend server.
   * 
   * @example
   * vm-230
   */
  serverId?: string;
  /**
   * @remarks
   * The type of the backend server. Valid values:
   * 
   * *   **ecs** (default): ECS instance
   * *   **eni**: ENI
   * *   **eci**: elastic container instance
   * 
   * @example
   * ecs
   */
  type?: string;
  /**
   * @remarks
   * The weight of the backend server.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      serverId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVServerGroupBackendServersResponseBodyBackendServers extends $tea.Model {
  backendServer?: RemoveVServerGroupBackendServersResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': RemoveVServerGroupBackendServersResponseBodyBackendServersBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackendServersResponseBodyBackendServersBackendServer extends $tea.Model {
  /**
   * @remarks
   * The description of the backend server.
   * 
   * @example
   * backend server
   */
  description?: string;
  /**
   * @remarks
   * The ID of the server group.
   * 
   * @example
   * eni-hhshhs****
   */
  serverId?: string;
  /**
   * @remarks
   * The type of backend server. Valid values:
   * 
   * *   **ecs** (default): ECS instance
   * *   **eni**: ENI
   * *   **eci**: elastic container instance
   * 
   * @example
   * eni
   */
  type?: string;
  /**
   * @remarks
   * The weight of the backend server.
   * 
   * @example
   * 100
   */
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      serverId: 'string',
      type: 'string',
      weight: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackendServersResponseBodyBackendServers extends $tea.Model {
  backendServer?: SetBackendServersResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': SetBackendServersResponseBodyBackendServersBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVServerGroupAttributeResponseBodyBackendServersBackendServer extends $tea.Model {
  /**
   * @remarks
   * The description of the server group.
   * 
   * @example
   * Backend server group description
   */
  description?: string;
  /**
   * @remarks
   * The port that is used by the backend server.
   * 
   * @example
   * 70
   */
  port?: number;
  /**
   * @remarks
   * The ID of the backend server.
   * 
   * @example
   * i-bp1ek6yd7jvkx****
   */
  serverId?: string;
  /**
   * @remarks
   * The type of backend server. Valid values:
   * 
   * *   **ecs** (default): ECS instance
   * *   **eni**: ENI
   * *   **eci**: elastic container instance
   * 
   * @example
   * ecs
   */
  type?: string;
  /**
   * @remarks
   * The weight of the backend server.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
      serverId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVServerGroupAttributeResponseBodyBackendServers extends $tea.Model {
  backendServer?: SetVServerGroupAttributeResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': SetVServerGroupAttributeResponseBodyBackendServersBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The tag key. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key must be 1 to 64 characters in length and cannot start with `aliyun` or `acs:`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
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

export class UploadCACertificateRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N. Valid values of N: **1** to **20**. The tag key cannot be an empty string. The tag key can be up to 128 characters in length, and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: **1 to 20**. The tag value can be an empty string. The tag value must be 1 to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `acs:` or `aliyun`.
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

export class UploadServerCertificateRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N. Valid values of N: **1 to 20**. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length, and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N. Valid values of N: **1 to 20**. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` and `acs:`.
   * 
   * @example
   * TestValue
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

export class UploadServerCertificateResponseBodySubjectAlternativeNames extends $tea.Model {
  subjectAlternativeName?: string[];
  static names(): { [key: string]: string } {
    return {
      subjectAlternativeName: 'SubjectAlternativeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subjectAlternativeName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-qingdao': "slb.aliyuncs.com",
      'cn-beijing': "slb.aliyuncs.com",
      'cn-hangzhou': "slb.aliyuncs.com",
      'cn-shanghai': "slb.aliyuncs.com",
      'cn-shenzhen': "slb.aliyuncs.com",
      'cn-hongkong': "slb.aliyuncs.com",
      'ap-southeast-1': "slb.aliyuncs.com",
      'us-east-1': "slb.aliyuncs.com",
      'us-west-1': "slb.aliyuncs.com",
      'cn-shanghai-finance-1': "slb.aliyuncs.com",
      'cn-shenzhen-finance-1': "slb.aliyuncs.com",
      'cn-north-2-gov-1': "slb.aliyuncs.com",
      'ap-northeast-2-pop': "slb.aliyuncs.com",
      'cn-beijing-finance-pop': "slb.aliyuncs.com",
      'cn-beijing-gov-1': "slb.aliyuncs.com",
      'cn-beijing-nu16-b01': "slb.aliyuncs.com",
      'cn-edge-1': "slb.aliyuncs.com",
      'cn-fujian': "slb.aliyuncs.com",
      'cn-haidian-cm12-c01': "slb.aliyuncs.com",
      'cn-hangzhou-bj-b01': "slb.aliyuncs.com",
      'cn-hangzhou-finance': "slb.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "slb.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "slb.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "slb.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "slb.aliyuncs.com",
      'cn-hangzhou-test-306': "slb.aliyuncs.com",
      'cn-hongkong-finance-pop': "slb.aliyuncs.com",
      'cn-huhehaote-nebula-1': "slb-api.cn-qingdao-nebula.aliyuncs.com",
      'cn-shanghai-et15-b01': "slb.aliyuncs.com",
      'cn-shanghai-et2-b01': "slb.aliyuncs.com",
      'cn-shanghai-inner': "slb.aliyuncs.com",
      'cn-shanghai-internal-test-1': "slb.aliyuncs.com",
      'cn-shenzhen-inner': "slb.aliyuncs.com",
      'cn-shenzhen-st4-d01': "slb.aliyuncs.com",
      'cn-shenzhen-su18-b01': "slb.aliyuncs.com",
      'cn-wuhan': "slb.aliyuncs.com",
      'cn-yushanfang': "slb.aliyuncs.com",
      'cn-zhangbei': "slb.aliyuncs.com",
      'cn-zhangbei-na61-b01': "slb.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "slb.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "slb.aliyuncs.com",
      'eu-west-1-oxs': "slb.aliyuncs.com",
      'rus-west-1-pop': "slb.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("slb", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds IP entries to a network access control list (ACL).
   * 
   * @remarks
   * Each network ACL can contain one or more IP addresses or CIDR blocks. Take note of the following limits on network ACLs:
   * *   The number of IP entries that can be added to a network ACL with each Alibaba Cloud account at a time: 50
   * *   The maximum number of IP entries that each network ACL can contain: 300
   * 
   * @param request - AddAccessControlListEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddAccessControlListEntryResponse
   */
  async addAccessControlListEntryWithOptions(request: AddAccessControlListEntryRequest, runtime: $Util.RuntimeOptions): Promise<AddAccessControlListEntryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclEntrys)) {
      query["AclEntrys"] = request.aclEntrys;
    }

    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddAccessControlListEntry",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddAccessControlListEntryResponse>(await this.callApi(params, req, runtime), new AddAccessControlListEntryResponse({}));
  }

  /**
   * Adds IP entries to a network access control list (ACL).
   * 
   * @remarks
   * Each network ACL can contain one or more IP addresses or CIDR blocks. Take note of the following limits on network ACLs:
   * *   The number of IP entries that can be added to a network ACL with each Alibaba Cloud account at a time: 50
   * *   The maximum number of IP entries that each network ACL can contain: 300
   * 
   * @param request - AddAccessControlListEntryRequest
   * @returns AddAccessControlListEntryResponse
   */
  async addAccessControlListEntry(request: AddAccessControlListEntryRequest): Promise<AddAccessControlListEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAccessControlListEntryWithOptions(request, runtime);
  }

  /**
   * Adds backend servers.
   * 
   * @remarks
   * >  If multiple identical Elastic Compute Service (ECS) instances are specified in a request, only the first ECS instance is added. The other ECS instances are ignored. If the backend server that you add is the same as one of the existing backend servers that are already associated with the listener, an error message is returned.
   * 
   * @param request - AddBackendServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddBackendServersResponse
   */
  async addBackendServersWithOptions(request: AddBackendServersRequest, runtime: $Util.RuntimeOptions): Promise<AddBackendServersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendServers)) {
      query["BackendServers"] = request.backendServers;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddBackendServers",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddBackendServersResponse>(await this.callApi(params, req, runtime), new AddBackendServersResponse({}));
  }

  /**
   * Adds backend servers.
   * 
   * @remarks
   * >  If multiple identical Elastic Compute Service (ECS) instances are specified in a request, only the first ECS instance is added. The other ECS instances are ignored. If the backend server that you add is the same as one of the existing backend servers that are already associated with the listener, an error message is returned.
   * 
   * @param request - AddBackendServersRequest
   * @returns AddBackendServersResponse
   */
  async addBackendServers(request: AddBackendServersRequest): Promise<AddBackendServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addBackendServersWithOptions(request, runtime);
  }

  /**
   * Adds IP addresses to the whitelist of a listener.
   * 
   * @param request - AddListenerWhiteListItemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddListenerWhiteListItemResponse
   */
  async addListenerWhiteListItemWithOptions(request: AddListenerWhiteListItemRequest, runtime: $Util.RuntimeOptions): Promise<AddListenerWhiteListItemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceItems)) {
      query["SourceItems"] = request.sourceItems;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddListenerWhiteListItem",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddListenerWhiteListItemResponse>(await this.callApi(params, req, runtime), new AddListenerWhiteListItemResponse({}));
  }

  /**
   * Adds IP addresses to the whitelist of a listener.
   * 
   * @param request - AddListenerWhiteListItemRequest
   * @returns AddListenerWhiteListItemResponse
   */
  async addListenerWhiteListItem(request: AddListenerWhiteListItemRequest): Promise<AddListenerWhiteListItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addListenerWhiteListItemWithOptions(request, runtime);
  }

  /**
   * Adds tags to an SLB instance.
   * 
   * @remarks
   * # Limits
   * Before you call this API, note the following limits:
   * *   You can add up to 10 tags to each SLB instance.
   * *   You can add up to five pairs of tags at a time.
   * *   All the tags and keys added to an SLB instance must be unique.
   * *   If you add a tag of which the key is the same as that of an existing tag, but the value is different, the new tag overwrites the existing one.
   * 
   * @param request - AddTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTagsResponse
   */
  async addTagsWithOptions(request: AddTagsRequest, runtime: $Util.RuntimeOptions): Promise<AddTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddTags",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddTagsResponse>(await this.callApi(params, req, runtime), new AddTagsResponse({}));
  }

  /**
   * Adds tags to an SLB instance.
   * 
   * @remarks
   * # Limits
   * Before you call this API, note the following limits:
   * *   You can add up to 10 tags to each SLB instance.
   * *   You can add up to five pairs of tags at a time.
   * *   All the tags and keys added to an SLB instance must be unique.
   * *   If you add a tag of which the key is the same as that of an existing tag, but the value is different, the new tag overwrites the existing one.
   * 
   * @param request - AddTagsRequest
   * @returns AddTagsResponse
   */
  async addTags(request: AddTagsRequest): Promise<AddTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTagsWithOptions(request, runtime);
  }

  /**
   * Adds backend servers to a vServer group.
   * 
   * @param request - AddVServerGroupBackendServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddVServerGroupBackendServersResponse
   */
  async addVServerGroupBackendServersWithOptions(request: AddVServerGroupBackendServersRequest, runtime: $Util.RuntimeOptions): Promise<AddVServerGroupBackendServersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendServers)) {
      query["BackendServers"] = request.backendServers;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddVServerGroupBackendServers",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddVServerGroupBackendServersResponse>(await this.callApi(params, req, runtime), new AddVServerGroupBackendServersResponse({}));
  }

  /**
   * Adds backend servers to a vServer group.
   * 
   * @param request - AddVServerGroupBackendServersRequest
   * @returns AddVServerGroupBackendServersResponse
   */
  async addVServerGroupBackendServers(request: AddVServerGroupBackendServersRequest): Promise<AddVServerGroupBackendServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addVServerGroupBackendServersWithOptions(request, runtime);
  }

  /**
   * Creates an access control list (ACL).
   * 
   * @remarks
   * You can create multiple ACLs. Each ACL can contain one or more IP addresses or CIDR blocks. Before you create an ACL, take note of the following limits:
   * *   An account can have a maximum of 50 ACLs in each region.
   * *   You can add a maximum of 50 IP addresses or CIDR blocks at a time within an account.
   * *   Each ACL can contain a maximum of 300 IP addresses or CIDR blocks.
   * 
   * @param request - CreateAccessControlListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccessControlListResponse
   */
  async createAccessControlListWithOptions(request: CreateAccessControlListRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccessControlListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclName)) {
      query["AclName"] = request.aclName;
    }

    if (!Util.isUnset(request.addressIPVersion)) {
      query["AddressIPVersion"] = request.addressIPVersion;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAccessControlList",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAccessControlListResponse>(await this.callApi(params, req, runtime), new CreateAccessControlListResponse({}));
  }

  /**
   * Creates an access control list (ACL).
   * 
   * @remarks
   * You can create multiple ACLs. Each ACL can contain one or more IP addresses or CIDR blocks. Before you create an ACL, take note of the following limits:
   * *   An account can have a maximum of 50 ACLs in each region.
   * *   You can add a maximum of 50 IP addresses or CIDR blocks at a time within an account.
   * *   Each ACL can contain a maximum of 300 IP addresses or CIDR blocks.
   * 
   * @param request - CreateAccessControlListRequest
   * @returns CreateAccessControlListResponse
   */
  async createAccessControlList(request: CreateAccessControlListRequest): Promise<CreateAccessControlListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccessControlListWithOptions(request, runtime);
  }

  /**
   * Adds an additional domain name.
   * 
   * @param request - CreateDomainExtensionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDomainExtensionResponse
   */
  async createDomainExtensionWithOptions(request: CreateDomainExtensionRequest, runtime: $Util.RuntimeOptions): Promise<CreateDomainExtensionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.serverCertificateId)) {
      query["ServerCertificateId"] = request.serverCertificateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDomainExtension",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDomainExtensionResponse>(await this.callApi(params, req, runtime), new CreateDomainExtensionResponse({}));
  }

  /**
   * Adds an additional domain name.
   * 
   * @param request - CreateDomainExtensionRequest
   * @returns CreateDomainExtensionResponse
   */
  async createDomainExtension(request: CreateDomainExtensionRequest): Promise<CreateDomainExtensionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDomainExtensionWithOptions(request, runtime);
  }

  /**
   * Creates a Classic Load Balancer (CLB) instance.
   * 
   * @remarks
   *   Before you create a CLB instance, call the [DescribeAvailableResource](~~DescribeAvailableResource~~) operation to query the resources available for purchase in the region where you want to create the CLB instance.
   * *   After a CLB instance is created, you are charged for using the CLB instance.
   * *   The pay-as-you-go billing method supports the pay-by-specification and pay-by-LCU metering methods.
   * 
   * @param request - CreateLoadBalancerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoadBalancerResponse
   */
  async createLoadBalancerWithOptions(request: CreateLoadBalancerRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoadBalancerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.addressIPVersion)) {
      query["AddressIPVersion"] = request.addressIPVersion;
    }

    if (!Util.isUnset(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deleteProtection)) {
      query["DeleteProtection"] = request.deleteProtection;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!Util.isUnset(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!Util.isUnset(request.loadBalancerName)) {
      query["LoadBalancerName"] = request.loadBalancerName;
    }

    if (!Util.isUnset(request.loadBalancerSpec)) {
      query["LoadBalancerSpec"] = request.loadBalancerSpec;
    }

    if (!Util.isUnset(request.masterZoneId)) {
      query["MasterZoneId"] = request.masterZoneId;
    }

    if (!Util.isUnset(request.modificationProtectionReason)) {
      query["ModificationProtectionReason"] = request.modificationProtectionReason;
    }

    if (!Util.isUnset(request.modificationProtectionStatus)) {
      query["ModificationProtectionStatus"] = request.modificationProtectionStatus;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.slaveZoneId)) {
      query["SlaveZoneId"] = request.slaveZoneId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLoadBalancer",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLoadBalancerResponse>(await this.callApi(params, req, runtime), new CreateLoadBalancerResponse({}));
  }

  /**
   * Creates a Classic Load Balancer (CLB) instance.
   * 
   * @remarks
   *   Before you create a CLB instance, call the [DescribeAvailableResource](~~DescribeAvailableResource~~) operation to query the resources available for purchase in the region where you want to create the CLB instance.
   * *   After a CLB instance is created, you are charged for using the CLB instance.
   * *   The pay-as-you-go billing method supports the pay-by-specification and pay-by-LCU metering methods.
   * 
   * @param request - CreateLoadBalancerRequest
   * @returns CreateLoadBalancerResponse
   */
  async createLoadBalancer(request: CreateLoadBalancerRequest): Promise<CreateLoadBalancerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoadBalancerWithOptions(request, runtime);
  }

  /**
   * Creates an HTTP listener for a Classic Load Balancer (CLB) instance.
   * 
   * @remarks
   * A newly created listener is in the **stopped** state. After a listener is created, you can call the [StartLoadBalancerListener](~~StartLoadBalancerListener~~) operation to start the listener. After the listener is started, the listener can forward traffic to backend servers.
   * ## Prerequisites
   * A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](~~StartLoadBalancerListener~~).
   * 
   * @param request - CreateLoadBalancerHTTPListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoadBalancerHTTPListenerResponse
   */
  async createLoadBalancerHTTPListenerWithOptions(request: CreateLoadBalancerHTTPListenerRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoadBalancerHTTPListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.aclStatus)) {
      query["AclStatus"] = request.aclStatus;
    }

    if (!Util.isUnset(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!Util.isUnset(request.backendServerPort)) {
      query["BackendServerPort"] = request.backendServerPort;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.cookie)) {
      query["Cookie"] = request.cookie;
    }

    if (!Util.isUnset(request.cookieTimeout)) {
      query["CookieTimeout"] = request.cookieTimeout;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.forwardPort)) {
      query["ForwardPort"] = request.forwardPort;
    }

    if (!Util.isUnset(request.gzip)) {
      query["Gzip"] = request.gzip;
    }

    if (!Util.isUnset(request.healthCheck)) {
      query["HealthCheck"] = request.healthCheck;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!Util.isUnset(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!Util.isUnset(request.healthCheckMethod)) {
      query["HealthCheckMethod"] = request.healthCheckMethod;
    }

    if (!Util.isUnset(request.healthCheckTimeout)) {
      query["HealthCheckTimeout"] = request.healthCheckTimeout;
    }

    if (!Util.isUnset(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.idleTimeout)) {
      query["IdleTimeout"] = request.idleTimeout;
    }

    if (!Util.isUnset(request.listenerForward)) {
      query["ListenerForward"] = request.listenerForward;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.stickySession)) {
      query["StickySession"] = request.stickySession;
    }

    if (!Util.isUnset(request.stickySessionType)) {
      query["StickySessionType"] = request.stickySessionType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!Util.isUnset(request.XForwardedFor)) {
      query["XForwardedFor"] = request.XForwardedFor;
    }

    if (!Util.isUnset(request.XForwardedFor_ClientSrcPort)) {
      query["XForwardedFor_ClientSrcPort"] = request.XForwardedFor_ClientSrcPort;
    }

    if (!Util.isUnset(request.XForwardedFor_SLBID)) {
      query["XForwardedFor_SLBID"] = request.XForwardedFor_SLBID;
    }

    if (!Util.isUnset(request.XForwardedFor_SLBIP)) {
      query["XForwardedFor_SLBIP"] = request.XForwardedFor_SLBIP;
    }

    if (!Util.isUnset(request.XForwardedFor_SLBPORT)) {
      query["XForwardedFor_SLBPORT"] = request.XForwardedFor_SLBPORT;
    }

    if (!Util.isUnset(request.XForwardedFor_proto)) {
      query["XForwardedFor_proto"] = request.XForwardedFor_proto;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLoadBalancerHTTPListener",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLoadBalancerHTTPListenerResponse>(await this.callApi(params, req, runtime), new CreateLoadBalancerHTTPListenerResponse({}));
  }

  /**
   * Creates an HTTP listener for a Classic Load Balancer (CLB) instance.
   * 
   * @remarks
   * A newly created listener is in the **stopped** state. After a listener is created, you can call the [StartLoadBalancerListener](~~StartLoadBalancerListener~~) operation to start the listener. After the listener is started, the listener can forward traffic to backend servers.
   * ## Prerequisites
   * A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](~~StartLoadBalancerListener~~).
   * 
   * @param request - CreateLoadBalancerHTTPListenerRequest
   * @returns CreateLoadBalancerHTTPListenerResponse
   */
  async createLoadBalancerHTTPListener(request: CreateLoadBalancerHTTPListenerRequest): Promise<CreateLoadBalancerHTTPListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoadBalancerHTTPListenerWithOptions(request, runtime);
  }

  /**
   * Creates an HTTPS listener.
   * 
   * @remarks
   * A newly created listener is in the **stopped** state. After a listener is created, you can call the [StartLoadBalancerListener](https://help.aliyun.com/document_detail/27597.html) operation to start the listener. After the listener is started, the listener can forward traffic to backend servers.
   * ## Prerequisites
   * A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](https://www.alibabacloud.com/help/en/server-load-balancer/latest/createloadbalancer-2).
   * 
   * @param request - CreateLoadBalancerHTTPSListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoadBalancerHTTPSListenerResponse
   */
  async createLoadBalancerHTTPSListenerWithOptions(request: CreateLoadBalancerHTTPSListenerRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoadBalancerHTTPSListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.aclStatus)) {
      query["AclStatus"] = request.aclStatus;
    }

    if (!Util.isUnset(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!Util.isUnset(request.backendServerPort)) {
      query["BackendServerPort"] = request.backendServerPort;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.CACertificateId)) {
      query["CACertificateId"] = request.CACertificateId;
    }

    if (!Util.isUnset(request.cookie)) {
      query["Cookie"] = request.cookie;
    }

    if (!Util.isUnset(request.cookieTimeout)) {
      query["CookieTimeout"] = request.cookieTimeout;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.enableHttp2)) {
      query["EnableHttp2"] = request.enableHttp2;
    }

    if (!Util.isUnset(request.gzip)) {
      query["Gzip"] = request.gzip;
    }

    if (!Util.isUnset(request.healthCheck)) {
      query["HealthCheck"] = request.healthCheck;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!Util.isUnset(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!Util.isUnset(request.healthCheckMethod)) {
      query["HealthCheckMethod"] = request.healthCheckMethod;
    }

    if (!Util.isUnset(request.healthCheckTimeout)) {
      query["HealthCheckTimeout"] = request.healthCheckTimeout;
    }

    if (!Util.isUnset(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.idleTimeout)) {
      query["IdleTimeout"] = request.idleTimeout;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.serverCertificateId)) {
      query["ServerCertificateId"] = request.serverCertificateId;
    }

    if (!Util.isUnset(request.stickySession)) {
      query["StickySession"] = request.stickySession;
    }

    if (!Util.isUnset(request.stickySessionType)) {
      query["StickySessionType"] = request.stickySessionType;
    }

    if (!Util.isUnset(request.TLSCipherPolicy)) {
      query["TLSCipherPolicy"] = request.TLSCipherPolicy;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!Util.isUnset(request.XForwardedFor)) {
      query["XForwardedFor"] = request.XForwardedFor;
    }

    if (!Util.isUnset(request.XForwardedFor_ClientSrcPort)) {
      query["XForwardedFor_ClientSrcPort"] = request.XForwardedFor_ClientSrcPort;
    }

    if (!Util.isUnset(request.XForwardedFor_SLBID)) {
      query["XForwardedFor_SLBID"] = request.XForwardedFor_SLBID;
    }

    if (!Util.isUnset(request.XForwardedFor_SLBIP)) {
      query["XForwardedFor_SLBIP"] = request.XForwardedFor_SLBIP;
    }

    if (!Util.isUnset(request.XForwardedFor_SLBPORT)) {
      query["XForwardedFor_SLBPORT"] = request.XForwardedFor_SLBPORT;
    }

    if (!Util.isUnset(request.XForwardedFor_proto)) {
      query["XForwardedFor_proto"] = request.XForwardedFor_proto;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLoadBalancerHTTPSListener",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLoadBalancerHTTPSListenerResponse>(await this.callApi(params, req, runtime), new CreateLoadBalancerHTTPSListenerResponse({}));
  }

  /**
   * Creates an HTTPS listener.
   * 
   * @remarks
   * A newly created listener is in the **stopped** state. After a listener is created, you can call the [StartLoadBalancerListener](https://help.aliyun.com/document_detail/27597.html) operation to start the listener. After the listener is started, the listener can forward traffic to backend servers.
   * ## Prerequisites
   * A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](https://www.alibabacloud.com/help/en/server-load-balancer/latest/createloadbalancer-2).
   * 
   * @param request - CreateLoadBalancerHTTPSListenerRequest
   * @returns CreateLoadBalancerHTTPSListenerResponse
   */
  async createLoadBalancerHTTPSListener(request: CreateLoadBalancerHTTPSListenerRequest): Promise<CreateLoadBalancerHTTPSListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoadBalancerHTTPSListenerWithOptions(request, runtime);
  }

  /**
   * Creates a TCP listener.
   * 
   * @remarks
   * >  A newly created listener is in the **stopped** state. After a listener is created, you can call the [StartLoadBalancerListener](https://help.aliyun.com/document_detail/27597.html) operation to enable the listener to forward traffic to backend servers.
   * 
   * @param request - CreateLoadBalancerTCPListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoadBalancerTCPListenerResponse
   */
  async createLoadBalancerTCPListenerWithOptions(request: CreateLoadBalancerTCPListenerRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoadBalancerTCPListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.aclStatus)) {
      query["AclStatus"] = request.aclStatus;
    }

    if (!Util.isUnset(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!Util.isUnset(request.backendServerPort)) {
      query["BackendServerPort"] = request.backendServerPort;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.connectionDrain)) {
      query["ConnectionDrain"] = request.connectionDrain;
    }

    if (!Util.isUnset(request.connectionDrainTimeout)) {
      query["ConnectionDrainTimeout"] = request.connectionDrainTimeout;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.establishedTimeout)) {
      query["EstablishedTimeout"] = request.establishedTimeout;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckConnectTimeout)) {
      query["HealthCheckConnectTimeout"] = request.healthCheckConnectTimeout;
    }

    if (!Util.isUnset(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!Util.isUnset(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!Util.isUnset(request.healthCheckSwitch)) {
      query["HealthCheckSwitch"] = request.healthCheckSwitch;
    }

    if (!Util.isUnset(request.healthCheckType)) {
      query["HealthCheckType"] = request.healthCheckType;
    }

    if (!Util.isUnset(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.masterSlaveServerGroupId)) {
      query["MasterSlaveServerGroupId"] = request.masterSlaveServerGroupId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.persistenceTimeout)) {
      query["PersistenceTimeout"] = request.persistenceTimeout;
    }

    if (!Util.isUnset(request.proxyProtocolV2Enabled)) {
      query["ProxyProtocolV2Enabled"] = request.proxyProtocolV2Enabled;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["healthCheckInterval"] = request.healthCheckInterval;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLoadBalancerTCPListener",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLoadBalancerTCPListenerResponse>(await this.callApi(params, req, runtime), new CreateLoadBalancerTCPListenerResponse({}));
  }

  /**
   * Creates a TCP listener.
   * 
   * @remarks
   * >  A newly created listener is in the **stopped** state. After a listener is created, you can call the [StartLoadBalancerListener](https://help.aliyun.com/document_detail/27597.html) operation to enable the listener to forward traffic to backend servers.
   * 
   * @param request - CreateLoadBalancerTCPListenerRequest
   * @returns CreateLoadBalancerTCPListenerResponse
   */
  async createLoadBalancerTCPListener(request: CreateLoadBalancerTCPListenerRequest): Promise<CreateLoadBalancerTCPListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoadBalancerTCPListenerWithOptions(request, runtime);
  }

  /**
   * Creates a UDP listener.
   * 
   * @remarks
   * UDP listeners of Classic Load Balancer (CLB) instances in a classic network cannot pass client IP addresses to backend servers.
   * >  A newly created listener is in the **stopped** state. After a listener is created, you can call the [StartLoadBalancerListener](https://help.aliyun.com/document_detail/27597.html) operation to enable the listener to forward traffic to backend servers.
   * 
   * @param request - CreateLoadBalancerUDPListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoadBalancerUDPListenerResponse
   */
  async createLoadBalancerUDPListenerWithOptions(request: CreateLoadBalancerUDPListenerRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoadBalancerUDPListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.aclStatus)) {
      query["AclStatus"] = request.aclStatus;
    }

    if (!Util.isUnset(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!Util.isUnset(request.backendServerPort)) {
      query["BackendServerPort"] = request.backendServerPort;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckConnectTimeout)) {
      query["HealthCheckConnectTimeout"] = request.healthCheckConnectTimeout;
    }

    if (!Util.isUnset(request.healthCheckSwitch)) {
      query["HealthCheckSwitch"] = request.healthCheckSwitch;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.masterSlaveServerGroupId)) {
      query["MasterSlaveServerGroupId"] = request.masterSlaveServerGroupId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.proxyProtocolV2Enabled)) {
      query["ProxyProtocolV2Enabled"] = request.proxyProtocolV2Enabled;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!Util.isUnset(request.healthCheckExp)) {
      query["healthCheckExp"] = request.healthCheckExp;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["healthCheckInterval"] = request.healthCheckInterval;
    }

    if (!Util.isUnset(request.healthCheckReq)) {
      query["healthCheckReq"] = request.healthCheckReq;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLoadBalancerUDPListener",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLoadBalancerUDPListenerResponse>(await this.callApi(params, req, runtime), new CreateLoadBalancerUDPListenerResponse({}));
  }

  /**
   * Creates a UDP listener.
   * 
   * @remarks
   * UDP listeners of Classic Load Balancer (CLB) instances in a classic network cannot pass client IP addresses to backend servers.
   * >  A newly created listener is in the **stopped** state. After a listener is created, you can call the [StartLoadBalancerListener](https://help.aliyun.com/document_detail/27597.html) operation to enable the listener to forward traffic to backend servers.
   * 
   * @param request - CreateLoadBalancerUDPListenerRequest
   * @returns CreateLoadBalancerUDPListenerResponse
   */
  async createLoadBalancerUDPListener(request: CreateLoadBalancerUDPListenerRequest): Promise<CreateLoadBalancerUDPListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoadBalancerUDPListenerWithOptions(request, runtime);
  }

  /**
   * Creates a primary/secondary server group. Each primary/secondary server group consists of two backend servers. One backend server functions as the primary server, and the other backend server functions as the secondary backend server.
   * 
   * @param request - CreateMasterSlaveServerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMasterSlaveServerGroupResponse
   */
  async createMasterSlaveServerGroupWithOptions(request: CreateMasterSlaveServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateMasterSlaveServerGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.masterSlaveBackendServers)) {
      query["MasterSlaveBackendServers"] = request.masterSlaveBackendServers;
    }

    if (!Util.isUnset(request.masterSlaveServerGroupName)) {
      query["MasterSlaveServerGroupName"] = request.masterSlaveServerGroupName;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMasterSlaveServerGroup",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMasterSlaveServerGroupResponse>(await this.callApi(params, req, runtime), new CreateMasterSlaveServerGroupResponse({}));
  }

  /**
   * Creates a primary/secondary server group. Each primary/secondary server group consists of two backend servers. One backend server functions as the primary server, and the other backend server functions as the secondary backend server.
   * 
   * @param request - CreateMasterSlaveServerGroupRequest
   * @returns CreateMasterSlaveServerGroupResponse
   */
  async createMasterSlaveServerGroup(request: CreateMasterSlaveServerGroupRequest): Promise<CreateMasterSlaveServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMasterSlaveServerGroupWithOptions(request, runtime);
  }

  /**
   * Creates forwarding rules for an HTTP or HTTPS listener.
   * 
   * @param request - CreateRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRulesResponse
   */
  async createRulesWithOptions(request: CreateRulesRequest, runtime: $Util.RuntimeOptions): Promise<CreateRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.ruleList)) {
      query["RuleList"] = request.ruleList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRules",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRulesResponse>(await this.callApi(params, req, runtime), new CreateRulesResponse({}));
  }

  /**
   * Creates forwarding rules for an HTTP or HTTPS listener.
   * 
   * @param request - CreateRulesRequest
   * @returns CreateRulesResponse
   */
  async createRules(request: CreateRulesRequest): Promise<CreateRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRulesWithOptions(request, runtime);
  }

  /**
   * Creates a Transport Layer Security (TLS) policy.
   * 
   * @param request - CreateTLSCipherPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTLSCipherPolicyResponse
   */
  async createTLSCipherPolicyWithOptions(request: CreateTLSCipherPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateTLSCipherPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ciphers)) {
      query["Ciphers"] = request.ciphers;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.TLSVersions)) {
      query["TLSVersions"] = request.TLSVersions;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTLSCipherPolicy",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTLSCipherPolicyResponse>(await this.callApi(params, req, runtime), new CreateTLSCipherPolicyResponse({}));
  }

  /**
   * Creates a Transport Layer Security (TLS) policy.
   * 
   * @param request - CreateTLSCipherPolicyRequest
   * @returns CreateTLSCipherPolicyResponse
   */
  async createTLSCipherPolicy(request: CreateTLSCipherPolicyRequest): Promise<CreateTLSCipherPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTLSCipherPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a vServer group and adds backend servers to the vServer group.
   * 
   * @param request - CreateVServerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVServerGroupResponse
   */
  async createVServerGroupWithOptions(request: CreateVServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateVServerGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendServers)) {
      query["BackendServers"] = request.backendServers;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.VServerGroupName)) {
      query["VServerGroupName"] = request.VServerGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateVServerGroup",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateVServerGroupResponse>(await this.callApi(params, req, runtime), new CreateVServerGroupResponse({}));
  }

  /**
   * Creates a vServer group and adds backend servers to the vServer group.
   * 
   * @param request - CreateVServerGroupRequest
   * @returns CreateVServerGroupResponse
   */
  async createVServerGroup(request: CreateVServerGroupRequest): Promise<CreateVServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVServerGroupWithOptions(request, runtime);
  }

  /**
   * Deletes an access control list (ACL).
   * 
   * @remarks
   * You can delete an ACL only if it is not associated with a listener.
   * 
   * @param request - DeleteAccessControlListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccessControlListResponse
   */
  async deleteAccessControlListWithOptions(request: DeleteAccessControlListRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccessControlListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAccessControlList",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAccessControlListResponse>(await this.callApi(params, req, runtime), new DeleteAccessControlListResponse({}));
  }

  /**
   * Deletes an access control list (ACL).
   * 
   * @remarks
   * You can delete an ACL only if it is not associated with a listener.
   * 
   * @param request - DeleteAccessControlListRequest
   * @returns DeleteAccessControlListResponse
   */
  async deleteAccessControlList(request: DeleteAccessControlListRequest): Promise<DeleteAccessControlListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccessControlListWithOptions(request, runtime);
  }

  /**
   * Deletes the access log of a Classic Load Balancer (CLB) instance.
   * 
   * @param request - DeleteAccessLogsDownloadAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccessLogsDownloadAttributeResponse
   */
  async deleteAccessLogsDownloadAttributeWithOptions(request: DeleteAccessLogsDownloadAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccessLogsDownloadAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.logsDownloadAttributes)) {
      query["LogsDownloadAttributes"] = request.logsDownloadAttributes;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAccessLogsDownloadAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAccessLogsDownloadAttributeResponse>(await this.callApi(params, req, runtime), new DeleteAccessLogsDownloadAttributeResponse({}));
  }

  /**
   * Deletes the access log of a Classic Load Balancer (CLB) instance.
   * 
   * @param request - DeleteAccessLogsDownloadAttributeRequest
   * @returns DeleteAccessLogsDownloadAttributeResponse
   */
  async deleteAccessLogsDownloadAttribute(request: DeleteAccessLogsDownloadAttributeRequest): Promise<DeleteAccessLogsDownloadAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccessLogsDownloadAttributeWithOptions(request, runtime);
  }

  /**
   * Deletes a certificate authority (CA) certificate.
   * 
   * @remarks
   * You cannot delete a CA certificate that is in use.
   * 
   * @param request - DeleteCACertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCACertificateResponse
   */
  async deleteCACertificateWithOptions(request: DeleteCACertificateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCACertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.CACertificateId)) {
      query["CACertificateId"] = request.CACertificateId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCACertificate",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCACertificateResponse>(await this.callApi(params, req, runtime), new DeleteCACertificateResponse({}));
  }

  /**
   * Deletes a certificate authority (CA) certificate.
   * 
   * @remarks
   * You cannot delete a CA certificate that is in use.
   * 
   * @param request - DeleteCACertificateRequest
   * @returns DeleteCACertificateResponse
   */
  async deleteCACertificate(request: DeleteCACertificateRequest): Promise<DeleteCACertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCACertificateWithOptions(request, runtime);
  }

  /**
   * Deletes an additional domain name.
   * 
   * @param request - DeleteDomainExtensionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainExtensionResponse
   */
  async deleteDomainExtensionWithOptions(request: DeleteDomainExtensionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainExtensionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainExtensionId)) {
      query["DomainExtensionId"] = request.domainExtensionId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDomainExtension",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDomainExtensionResponse>(await this.callApi(params, req, runtime), new DeleteDomainExtensionResponse({}));
  }

  /**
   * Deletes an additional domain name.
   * 
   * @param request - DeleteDomainExtensionRequest
   * @returns DeleteDomainExtensionResponse
   */
  async deleteDomainExtension(request: DeleteDomainExtensionRequest): Promise<DeleteDomainExtensionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainExtensionWithOptions(request, runtime);
  }

  /**
   * Deletes a pay-as-you-go Server Load Balancer (SLB) instance.
   * 
   * @remarks
   * > The listeners and tags of the SLB instance are deleted along with the SLB instance.
   * 
   * @param request - DeleteLoadBalancerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLoadBalancerResponse
   */
  async deleteLoadBalancerWithOptions(request: DeleteLoadBalancerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLoadBalancerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLoadBalancer",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLoadBalancerResponse>(await this.callApi(params, req, runtime), new DeleteLoadBalancerResponse({}));
  }

  /**
   * Deletes a pay-as-you-go Server Load Balancer (SLB) instance.
   * 
   * @remarks
   * > The listeners and tags of the SLB instance are deleted along with the SLB instance.
   * 
   * @param request - DeleteLoadBalancerRequest
   * @returns DeleteLoadBalancerResponse
   */
  async deleteLoadBalancer(request: DeleteLoadBalancerRequest): Promise<DeleteLoadBalancerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLoadBalancerWithOptions(request, runtime);
  }

  /**
   * Deletes a listener.
   * 
   * @remarks
   * >  You can delete only listeners that are in the **stopped** or **running** state.
   * 
   * @param request - DeleteLoadBalancerListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLoadBalancerListenerResponse
   */
  async deleteLoadBalancerListenerWithOptions(request: DeleteLoadBalancerListenerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLoadBalancerListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLoadBalancerListener",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLoadBalancerListenerResponse>(await this.callApi(params, req, runtime), new DeleteLoadBalancerListenerResponse({}));
  }

  /**
   * Deletes a listener.
   * 
   * @remarks
   * >  You can delete only listeners that are in the **stopped** or **running** state.
   * 
   * @param request - DeleteLoadBalancerListenerRequest
   * @returns DeleteLoadBalancerListenerResponse
   */
  async deleteLoadBalancerListener(request: DeleteLoadBalancerListenerRequest): Promise<DeleteLoadBalancerListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLoadBalancerListenerWithOptions(request, runtime);
  }

  /**
   * Deletes a primary/secondary server group.
   * 
   * @param request - DeleteMasterSlaveServerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMasterSlaveServerGroupResponse
   */
  async deleteMasterSlaveServerGroupWithOptions(request: DeleteMasterSlaveServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMasterSlaveServerGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.masterSlaveServerGroupId)) {
      query["MasterSlaveServerGroupId"] = request.masterSlaveServerGroupId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMasterSlaveServerGroup",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMasterSlaveServerGroupResponse>(await this.callApi(params, req, runtime), new DeleteMasterSlaveServerGroupResponse({}));
  }

  /**
   * Deletes a primary/secondary server group.
   * 
   * @param request - DeleteMasterSlaveServerGroupRequest
   * @returns DeleteMasterSlaveServerGroupResponse
   */
  async deleteMasterSlaveServerGroup(request: DeleteMasterSlaveServerGroupRequest): Promise<DeleteMasterSlaveServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMasterSlaveServerGroupWithOptions(request, runtime);
  }

  /**
   * Deletes forwarding rules.
   * 
   * @remarks
   * ## Limits
   * The RuleIds parameter is required. You can specify up to 10 forwarding rules in each request.
   * 
   * @param request - DeleteRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRulesResponse
   */
  async deleteRulesWithOptions(request: DeleteRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.ruleIds)) {
      query["RuleIds"] = request.ruleIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRules",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRulesResponse>(await this.callApi(params, req, runtime), new DeleteRulesResponse({}));
  }

  /**
   * Deletes forwarding rules.
   * 
   * @remarks
   * ## Limits
   * The RuleIds parameter is required. You can specify up to 10 forwarding rules in each request.
   * 
   * @param request - DeleteRulesRequest
   * @returns DeleteRulesResponse
   */
  async deleteRules(request: DeleteRulesRequest): Promise<DeleteRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRulesWithOptions(request, runtime);
  }

  /**
   * Deletes a server certificate.
   * 
   * @remarks
   * >  You cannot delete server certificates that are in use.
   * 
   * @param request - DeleteServerCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServerCertificateResponse
   */
  async deleteServerCertificateWithOptions(request: DeleteServerCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServerCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.serverCertificateId)) {
      query["ServerCertificateId"] = request.serverCertificateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteServerCertificate",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteServerCertificateResponse>(await this.callApi(params, req, runtime), new DeleteServerCertificateResponse({}));
  }

  /**
   * Deletes a server certificate.
   * 
   * @remarks
   * >  You cannot delete server certificates that are in use.
   * 
   * @param request - DeleteServerCertificateRequest
   * @returns DeleteServerCertificateResponse
   */
  async deleteServerCertificate(request: DeleteServerCertificateRequest): Promise<DeleteServerCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServerCertificateWithOptions(request, runtime);
  }

  /**
   * Deletes a TLS policy.
   * 
   * @remarks
   * ## Debugging
   * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Slb\\&api=DeleteTLSCipherPolicy\\&type=RPC\\&version=2014-05-15)
   * 
   * @param request - DeleteTLSCipherPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTLSCipherPolicyResponse
   */
  async deleteTLSCipherPolicyWithOptions(request: DeleteTLSCipherPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTLSCipherPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.TLSCipherPolicyId)) {
      query["TLSCipherPolicyId"] = request.TLSCipherPolicyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTLSCipherPolicy",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTLSCipherPolicyResponse>(await this.callApi(params, req, runtime), new DeleteTLSCipherPolicyResponse({}));
  }

  /**
   * Deletes a TLS policy.
   * 
   * @remarks
   * ## Debugging
   * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Slb\\&api=DeleteTLSCipherPolicy\\&type=RPC\\&version=2014-05-15)
   * 
   * @param request - DeleteTLSCipherPolicyRequest
   * @returns DeleteTLSCipherPolicyResponse
   */
  async deleteTLSCipherPolicy(request: DeleteTLSCipherPolicyRequest): Promise<DeleteTLSCipherPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTLSCipherPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes a VServer group.
   * 
   * @param request - DeleteVServerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVServerGroupResponse
   */
  async deleteVServerGroupWithOptions(request: DeleteVServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVServerGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVServerGroup",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteVServerGroupResponse>(await this.callApi(params, req, runtime), new DeleteVServerGroupResponse({}));
  }

  /**
   * Deletes a VServer group.
   * 
   * @param request - DeleteVServerGroupRequest
   * @returns DeleteVServerGroupResponse
   */
  async deleteVServerGroup(request: DeleteVServerGroupRequest): Promise<DeleteVServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVServerGroupWithOptions(request, runtime);
  }

  /**
   * Queries the configuration of an access control list (ACL).
   * 
   * @param request - DescribeAccessControlListAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccessControlListAttributeResponse
   */
  async describeAccessControlListAttributeWithOptions(request: DescribeAccessControlListAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccessControlListAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclEntryComment)) {
      query["AclEntryComment"] = request.aclEntryComment;
    }

    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccessControlListAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAccessControlListAttributeResponse>(await this.callApi(params, req, runtime), new DescribeAccessControlListAttributeResponse({}));
  }

  /**
   * Queries the configuration of an access control list (ACL).
   * 
   * @param request - DescribeAccessControlListAttributeRequest
   * @returns DescribeAccessControlListAttributeResponse
   */
  async describeAccessControlListAttribute(request: DescribeAccessControlListAttributeRequest): Promise<DescribeAccessControlListAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccessControlListAttributeWithOptions(request, runtime);
  }

  /**
   * Queries access control lists (ACLs).
   * 
   * @param request - DescribeAccessControlListsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccessControlListsResponse
   */
  async describeAccessControlListsWithOptions(request: DescribeAccessControlListsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccessControlListsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclName)) {
      query["AclName"] = request.aclName;
    }

    if (!Util.isUnset(request.addressIPVersion)) {
      query["AddressIPVersion"] = request.addressIPVersion;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccessControlLists",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAccessControlListsResponse>(await this.callApi(params, req, runtime), new DescribeAccessControlListsResponse({}));
  }

  /**
   * Queries access control lists (ACLs).
   * 
   * @param request - DescribeAccessControlListsRequest
   * @returns DescribeAccessControlListsResponse
   */
  async describeAccessControlLists(request: DescribeAccessControlListsRequest): Promise<DescribeAccessControlListsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccessControlListsWithOptions(request, runtime);
  }

  /**
   * Queries the access log of a Classic Load Balancer (CLB) instance.
   * 
   * @param request - DescribeAccessLogsDownloadAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccessLogsDownloadAttributeResponse
   */
  async describeAccessLogsDownloadAttributeWithOptions(request: DescribeAccessLogsDownloadAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccessLogsDownloadAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.logType)) {
      query["LogType"] = request.logType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccessLogsDownloadAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAccessLogsDownloadAttributeResponse>(await this.callApi(params, req, runtime), new DescribeAccessLogsDownloadAttributeResponse({}));
  }

  /**
   * Queries the access log of a Classic Load Balancer (CLB) instance.
   * 
   * @param request - DescribeAccessLogsDownloadAttributeRequest
   * @returns DescribeAccessLogsDownloadAttributeResponse
   */
  async describeAccessLogsDownloadAttribute(request: DescribeAccessLogsDownloadAttributeRequest): Promise<DescribeAccessLogsDownloadAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccessLogsDownloadAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the available resources and resources that are available for purchase in the zones of a region.
   * 
   * @remarks
   * > Only the available resources and zones are returned.
   * 
   * @param request - DescribeAvailableResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailableResourceResponse
   */
  async describeAvailableResourceWithOptions(request: DescribeAvailableResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addressIPVersion)) {
      query["AddressIPVersion"] = request.addressIPVersion;
    }

    if (!Util.isUnset(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAvailableResource",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAvailableResourceResponse>(await this.callApi(params, req, runtime), new DescribeAvailableResourceResponse({}));
  }

  /**
   * Queries the available resources and resources that are available for purchase in the zones of a region.
   * 
   * @remarks
   * > Only the available resources and zones are returned.
   * 
   * @param request - DescribeAvailableResourceRequest
   * @returns DescribeAvailableResourceResponse
   */
  async describeAvailableResource(request: DescribeAvailableResourceRequest): Promise<DescribeAvailableResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableResourceWithOptions(request, runtime);
  }

  /**
   * Queries certificate authority (CA) certificates.
   * 
   * @remarks
   * > To ensure data confidentiality, only the certificate fingerprint and name are returned. The certificate content is not returned.
   * 
   * @param request - DescribeCACertificatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCACertificatesResponse
   */
  async describeCACertificatesWithOptions(request: DescribeCACertificatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCACertificatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.CACertificateId)) {
      query["CACertificateId"] = request.CACertificateId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCACertificates",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCACertificatesResponse>(await this.callApi(params, req, runtime), new DescribeCACertificatesResponse({}));
  }

  /**
   * Queries certificate authority (CA) certificates.
   * 
   * @remarks
   * > To ensure data confidentiality, only the certificate fingerprint and name are returned. The certificate content is not returned.
   * 
   * @param request - DescribeCACertificatesRequest
   * @returns DescribeCACertificatesResponse
   */
  async describeCACertificates(request: DescribeCACertificatesRequest): Promise<DescribeCACertificatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCACertificatesWithOptions(request, runtime);
  }

  /**
   * Queries the attributes of an additional domain name.
   * 
   * @param request - DescribeDomainExtensionAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainExtensionAttributeResponse
   */
  async describeDomainExtensionAttributeWithOptions(request: DescribeDomainExtensionAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainExtensionAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainExtensionId)) {
      query["DomainExtensionId"] = request.domainExtensionId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainExtensionAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainExtensionAttributeResponse>(await this.callApi(params, req, runtime), new DescribeDomainExtensionAttributeResponse({}));
  }

  /**
   * Queries the attributes of an additional domain name.
   * 
   * @param request - DescribeDomainExtensionAttributeRequest
   * @returns DescribeDomainExtensionAttributeResponse
   */
  async describeDomainExtensionAttribute(request: DescribeDomainExtensionAttributeRequest): Promise<DescribeDomainExtensionAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainExtensionAttributeWithOptions(request, runtime);
  }

  /**
   * Queries additional certificates.
   * 
   * @param request - DescribeDomainExtensionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainExtensionsResponse
   */
  async describeDomainExtensionsWithOptions(request: DescribeDomainExtensionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainExtensionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainExtensionId)) {
      query["DomainExtensionId"] = request.domainExtensionId;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainExtensions",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainExtensionsResponse>(await this.callApi(params, req, runtime), new DescribeDomainExtensionsResponse({}));
  }

  /**
   * Queries additional certificates.
   * 
   * @param request - DescribeDomainExtensionsRequest
   * @returns DescribeDomainExtensionsResponse
   */
  async describeDomainExtensions(request: DescribeDomainExtensionsRequest): Promise<DescribeDomainExtensionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainExtensionsWithOptions(request, runtime);
  }

  /**
   * Queries the health status of backend servers.
   * 
   * @param request - DescribeHealthStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHealthStatusResponse
   */
  async describeHealthStatusWithOptions(request: DescribeHealthStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHealthStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHealthStatus",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHealthStatusResponse>(await this.callApi(params, req, runtime), new DescribeHealthStatusResponse({}));
  }

  /**
   * Queries the health status of backend servers.
   * 
   * @param request - DescribeHealthStatusRequest
   * @returns DescribeHealthStatusResponse
   */
  async describeHealthStatus(request: DescribeHealthStatusRequest): Promise<DescribeHealthStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHealthStatusWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of fine-grained monitoring in a region.
   * 
   * @param request - DescribeHighDefinationMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHighDefinationMonitorResponse
   */
  async describeHighDefinationMonitorWithOptions(request: DescribeHighDefinationMonitorRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHighDefinationMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHighDefinationMonitor",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHighDefinationMonitorResponse>(await this.callApi(params, req, runtime), new DescribeHighDefinationMonitorResponse({}));
  }

  /**
   * Queries the configurations of fine-grained monitoring in a region.
   * 
   * @param request - DescribeHighDefinationMonitorRequest
   * @returns DescribeHighDefinationMonitorResponse
   */
  async describeHighDefinationMonitor(request: DescribeHighDefinationMonitorRequest): Promise<DescribeHighDefinationMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHighDefinationMonitorWithOptions(request, runtime);
  }

  /**
   * Queries the whitelist configurations of a listener.
   * 
   * @param request - DescribeListenerAccessControlAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeListenerAccessControlAttributeResponse
   */
  async describeListenerAccessControlAttributeWithOptions(request: DescribeListenerAccessControlAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeListenerAccessControlAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeListenerAccessControlAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeListenerAccessControlAttributeResponse>(await this.callApi(params, req, runtime), new DescribeListenerAccessControlAttributeResponse({}));
  }

  /**
   * Queries the whitelist configurations of a listener.
   * 
   * @param request - DescribeListenerAccessControlAttributeRequest
   * @returns DescribeListenerAccessControlAttributeResponse
   */
  async describeListenerAccessControlAttribute(request: DescribeListenerAccessControlAttributeRequest): Promise<DescribeListenerAccessControlAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeListenerAccessControlAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the detail of a Classic Load Balancer (CLB) instance.
   * 
   * @remarks
   * >  If backend servers are deployed in a vServer group, you can call the [DescribeVServerGroupAttribute](https://help.aliyun.com/document_detail/35224.html) operation to query the backend servers.
   * 
   * @param request - DescribeLoadBalancerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLoadBalancerAttributeResponse
   */
  async describeLoadBalancerAttributeWithOptions(request: DescribeLoadBalancerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLoadBalancerAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLoadBalancerAttributeResponse>(await this.callApi(params, req, runtime), new DescribeLoadBalancerAttributeResponse({}));
  }

  /**
   * Queries the detail of a Classic Load Balancer (CLB) instance.
   * 
   * @remarks
   * >  If backend servers are deployed in a vServer group, you can call the [DescribeVServerGroupAttribute](https://help.aliyun.com/document_detail/35224.html) operation to query the backend servers.
   * 
   * @param request - DescribeLoadBalancerAttributeRequest
   * @returns DescribeLoadBalancerAttributeResponse
   */
  async describeLoadBalancerAttribute(request: DescribeLoadBalancerAttributeRequest): Promise<DescribeLoadBalancerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancerAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of an HTTP listener.
   * 
   * @remarks
   *   A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/27577.html).
   * *   An HTTP listener is created. For more information about how to create an HTTP listener, see [CreateLoadBalancerHTTPListener](https://help.aliyun.com/document_detail/27592.html).
   * 
   * @param request - DescribeLoadBalancerHTTPListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLoadBalancerHTTPListenerAttributeResponse
   */
  async describeLoadBalancerHTTPListenerAttributeWithOptions(request: DescribeLoadBalancerHTTPListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancerHTTPListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLoadBalancerHTTPListenerAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLoadBalancerHTTPListenerAttributeResponse>(await this.callApi(params, req, runtime), new DescribeLoadBalancerHTTPListenerAttributeResponse({}));
  }

  /**
   * Queries the configurations of an HTTP listener.
   * 
   * @remarks
   *   A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/27577.html).
   * *   An HTTP listener is created. For more information about how to create an HTTP listener, see [CreateLoadBalancerHTTPListener](https://help.aliyun.com/document_detail/27592.html).
   * 
   * @param request - DescribeLoadBalancerHTTPListenerAttributeRequest
   * @returns DescribeLoadBalancerHTTPListenerAttributeResponse
   */
  async describeLoadBalancerHTTPListenerAttribute(request: DescribeLoadBalancerHTTPListenerAttributeRequest): Promise<DescribeLoadBalancerHTTPListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancerHTTPListenerAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of an HTTPS listener.
   * 
   * @remarks
   *   A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/27577.html).
   * *   An HTTPS listener is created. For more information about how to create an HTTPS listener, see [CreateLoadBalancerHTTPSListener](https://help.aliyun.com/document_detail/27593.html).
   * 
   * @param request - DescribeLoadBalancerHTTPSListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLoadBalancerHTTPSListenerAttributeResponse
   */
  async describeLoadBalancerHTTPSListenerAttributeWithOptions(request: DescribeLoadBalancerHTTPSListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancerHTTPSListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLoadBalancerHTTPSListenerAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLoadBalancerHTTPSListenerAttributeResponse>(await this.callApi(params, req, runtime), new DescribeLoadBalancerHTTPSListenerAttributeResponse({}));
  }

  /**
   * Queries the configurations of an HTTPS listener.
   * 
   * @remarks
   *   A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/27577.html).
   * *   An HTTPS listener is created. For more information about how to create an HTTPS listener, see [CreateLoadBalancerHTTPSListener](https://help.aliyun.com/document_detail/27593.html).
   * 
   * @param request - DescribeLoadBalancerHTTPSListenerAttributeRequest
   * @returns DescribeLoadBalancerHTTPSListenerAttributeResponse
   */
  async describeLoadBalancerHTTPSListenerAttribute(request: DescribeLoadBalancerHTTPSListenerAttributeRequest): Promise<DescribeLoadBalancerHTTPSListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancerHTTPSListenerAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the listeners of a Classic Load Balancer (CLB) instance.
   * 
   * @remarks
   *   A CLB instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/2401685.html).
   * *   One or more listeners are added to the CLB instance. For more information, see the following topics:
   *     *   [CreateLoadBalancerUDPListener](~~CreateLoadBalancerUDPListener~~)
   *     *   [CreateLoadBalancerTCPListener](~~CreateLoadBalancerTCPListener~~)
   *     *   [CreateLoadBalancerHTTPListener](~~CreateLoadBalancerHTTPListener~~)
   *     *   [CreateLoadBalancerHTTPSListener](~~CreateLoadBalancerHTTPSListener~~)
   * 
   * @param request - DescribeLoadBalancerListenersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLoadBalancerListenersResponse
   */
  async describeLoadBalancerListenersWithOptions(request: DescribeLoadBalancerListenersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancerListenersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLoadBalancerListeners",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLoadBalancerListenersResponse>(await this.callApi(params, req, runtime), new DescribeLoadBalancerListenersResponse({}));
  }

  /**
   * Queries the listeners of a Classic Load Balancer (CLB) instance.
   * 
   * @remarks
   *   A CLB instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/2401685.html).
   * *   One or more listeners are added to the CLB instance. For more information, see the following topics:
   *     *   [CreateLoadBalancerUDPListener](~~CreateLoadBalancerUDPListener~~)
   *     *   [CreateLoadBalancerTCPListener](~~CreateLoadBalancerTCPListener~~)
   *     *   [CreateLoadBalancerHTTPListener](~~CreateLoadBalancerHTTPListener~~)
   *     *   [CreateLoadBalancerHTTPSListener](~~CreateLoadBalancerHTTPSListener~~)
   * 
   * @param request - DescribeLoadBalancerListenersRequest
   * @returns DescribeLoadBalancerListenersResponse
   */
  async describeLoadBalancerListeners(request: DescribeLoadBalancerListenersRequest): Promise<DescribeLoadBalancerListenersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancerListenersWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of a TCP listener of Classic Load Balancer (CLB).
   * 
   * @param request - DescribeLoadBalancerTCPListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLoadBalancerTCPListenerAttributeResponse
   */
  async describeLoadBalancerTCPListenerAttributeWithOptions(request: DescribeLoadBalancerTCPListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancerTCPListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLoadBalancerTCPListenerAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLoadBalancerTCPListenerAttributeResponse>(await this.callApi(params, req, runtime), new DescribeLoadBalancerTCPListenerAttributeResponse({}));
  }

  /**
   * Queries the configurations of a TCP listener of Classic Load Balancer (CLB).
   * 
   * @param request - DescribeLoadBalancerTCPListenerAttributeRequest
   * @returns DescribeLoadBalancerTCPListenerAttributeResponse
   */
  async describeLoadBalancerTCPListenerAttribute(request: DescribeLoadBalancerTCPListenerAttributeRequest): Promise<DescribeLoadBalancerTCPListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancerTCPListenerAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of a UDP listener.
   * 
   * @param request - DescribeLoadBalancerUDPListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLoadBalancerUDPListenerAttributeResponse
   */
  async describeLoadBalancerUDPListenerAttributeWithOptions(request: DescribeLoadBalancerUDPListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancerUDPListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLoadBalancerUDPListenerAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLoadBalancerUDPListenerAttributeResponse>(await this.callApi(params, req, runtime), new DescribeLoadBalancerUDPListenerAttributeResponse({}));
  }

  /**
   * Queries the configurations of a UDP listener.
   * 
   * @param request - DescribeLoadBalancerUDPListenerAttributeRequest
   * @returns DescribeLoadBalancerUDPListenerAttributeResponse
   */
  async describeLoadBalancerUDPListenerAttribute(request: DescribeLoadBalancerUDPListenerAttributeRequest): Promise<DescribeLoadBalancerUDPListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancerUDPListenerAttributeWithOptions(request, runtime);
  }

  /**
   * Queries Classic Load Balancer (CLB) instances.
   * 
   * @param request - DescribeLoadBalancersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLoadBalancersResponse
   */
  async describeLoadBalancersWithOptions(request: DescribeLoadBalancersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.addressIPVersion)) {
      query["AddressIPVersion"] = request.addressIPVersion;
    }

    if (!Util.isUnset(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!Util.isUnset(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.loadBalancerName)) {
      query["LoadBalancerName"] = request.loadBalancerName;
    }

    if (!Util.isUnset(request.loadBalancerStatus)) {
      query["LoadBalancerStatus"] = request.loadBalancerStatus;
    }

    if (!Util.isUnset(request.masterZoneId)) {
      query["MasterZoneId"] = request.masterZoneId;
    }

    if (!Util.isUnset(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.serverId)) {
      query["ServerId"] = request.serverId;
    }

    if (!Util.isUnset(request.serverIntranetAddress)) {
      query["ServerIntranetAddress"] = request.serverIntranetAddress;
    }

    if (!Util.isUnset(request.slaveZoneId)) {
      query["SlaveZoneId"] = request.slaveZoneId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLoadBalancers",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLoadBalancersResponse>(await this.callApi(params, req, runtime), new DescribeLoadBalancersResponse({}));
  }

  /**
   * Queries Classic Load Balancer (CLB) instances.
   * 
   * @param request - DescribeLoadBalancersRequest
   * @returns DescribeLoadBalancersResponse
   */
  async describeLoadBalancers(request: DescribeLoadBalancersRequest): Promise<DescribeLoadBalancersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancersWithOptions(request, runtime);
  }

  /**
   * Queries the detailed information about a primary/secondary server group.
   * 
   * @param request - DescribeMasterSlaveServerGroupAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMasterSlaveServerGroupAttributeResponse
   */
  async describeMasterSlaveServerGroupAttributeWithOptions(request: DescribeMasterSlaveServerGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMasterSlaveServerGroupAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.masterSlaveServerGroupId)) {
      query["MasterSlaveServerGroupId"] = request.masterSlaveServerGroupId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMasterSlaveServerGroupAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMasterSlaveServerGroupAttributeResponse>(await this.callApi(params, req, runtime), new DescribeMasterSlaveServerGroupAttributeResponse({}));
  }

  /**
   * Queries the detailed information about a primary/secondary server group.
   * 
   * @param request - DescribeMasterSlaveServerGroupAttributeRequest
   * @returns DescribeMasterSlaveServerGroupAttributeResponse
   */
  async describeMasterSlaveServerGroupAttribute(request: DescribeMasterSlaveServerGroupAttributeRequest): Promise<DescribeMasterSlaveServerGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMasterSlaveServerGroupAttributeWithOptions(request, runtime);
  }

  /**
   * Queries primary/secondary server groups.
   * 
   * @param request - DescribeMasterSlaveServerGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMasterSlaveServerGroupsResponse
   */
  async describeMasterSlaveServerGroupsWithOptions(request: DescribeMasterSlaveServerGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMasterSlaveServerGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.includeListener)) {
      query["IncludeListener"] = request.includeListener;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMasterSlaveServerGroups",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMasterSlaveServerGroupsResponse>(await this.callApi(params, req, runtime), new DescribeMasterSlaveServerGroupsResponse({}));
  }

  /**
   * Queries primary/secondary server groups.
   * 
   * @param request - DescribeMasterSlaveServerGroupsRequest
   * @returns DescribeMasterSlaveServerGroupsResponse
   */
  async describeMasterSlaveServerGroups(request: DescribeMasterSlaveServerGroupsRequest): Promise<DescribeMasterSlaveServerGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMasterSlaveServerGroupsWithOptions(request, runtime);
  }

  /**
   * Queries available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  /**
   * Queries available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of a specified forwarding rule.
   * 
   * @param request - DescribeRuleAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRuleAttributeResponse
   */
  async describeRuleAttributeWithOptions(request: DescribeRuleAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRuleAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRuleAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRuleAttributeResponse>(await this.callApi(params, req, runtime), new DescribeRuleAttributeResponse({}));
  }

  /**
   * Queries the configurations of a specified forwarding rule.
   * 
   * @param request - DescribeRuleAttributeRequest
   * @returns DescribeRuleAttributeResponse
   */
  async describeRuleAttribute(request: DescribeRuleAttributeRequest): Promise<DescribeRuleAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRuleAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the forwarding rules that are configured for a specified listener.
   * 
   * @param request - DescribeRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRulesResponse
   */
  async describeRulesWithOptions(request: DescribeRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRules",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRulesResponse>(await this.callApi(params, req, runtime), new DescribeRulesResponse({}));
  }

  /**
   * Queries the forwarding rules that are configured for a specified listener.
   * 
   * @param request - DescribeRulesRequest
   * @returns DescribeRulesResponse
   */
  async describeRules(request: DescribeRulesRequest): Promise<DescribeRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRulesWithOptions(request, runtime);
  }

  /**
   * Queries the server certificates in a region.
   * 
   * @remarks
   * >  For security reasons, only the fingerprints and names of server certificates are returned. The content of server certificates and private keys is not returned.
   * 
   * @param request - DescribeServerCertificatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServerCertificatesResponse
   */
  async describeServerCertificatesWithOptions(request: DescribeServerCertificatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServerCertificatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.serverCertificateId)) {
      query["ServerCertificateId"] = request.serverCertificateId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeServerCertificates",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeServerCertificatesResponse>(await this.callApi(params, req, runtime), new DescribeServerCertificatesResponse({}));
  }

  /**
   * Queries the server certificates in a region.
   * 
   * @remarks
   * >  For security reasons, only the fingerprints and names of server certificates are returned. The content of server certificates and private keys is not returned.
   * 
   * @param request - DescribeServerCertificatesRequest
   * @returns DescribeServerCertificatesResponse
   */
  async describeServerCertificates(request: DescribeServerCertificatesRequest): Promise<DescribeServerCertificatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServerCertificatesWithOptions(request, runtime);
  }

  /**
   * Queries tags.
   * 
   * @remarks
   * Take note of the following items:
   * *   The system queries tags based on the instance ID, tag key, and tag value specified by you.
   * *   If the logical relationship among the specified conditions is AND, only tags that match all the specified conditions are returned.
   * *   If the Tagkey parameter is specified and but Tagvalue parameter is not specified, all tags that contain the specified tag key are returned.
   * *   If you specify the Tagvalue parameter in a request, you must also specify the Tagkey parameter in the request.
   * *   If you specify both the Tagkey and Tagvalue parameters, only tags that contain the specified keys and values are returned.
   * 
   * @param request - DescribeTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagsResponse
   */
  async describeTagsWithOptions(request: DescribeTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.distinctKey)) {
      query["DistinctKey"] = request.distinctKey;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTags",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTagsResponse>(await this.callApi(params, req, runtime), new DescribeTagsResponse({}));
  }

  /**
   * Queries tags.
   * 
   * @remarks
   * Take note of the following items:
   * *   The system queries tags based on the instance ID, tag key, and tag value specified by you.
   * *   If the logical relationship among the specified conditions is AND, only tags that match all the specified conditions are returned.
   * *   If the Tagkey parameter is specified and but Tagvalue parameter is not specified, all tags that contain the specified tag key are returned.
   * *   If you specify the Tagvalue parameter in a request, you must also specify the Tagkey parameter in the request.
   * *   If you specify both the Tagkey and Tagvalue parameters, only tags that contain the specified keys and values are returned.
   * 
   * @param request - DescribeTagsRequest
   * @returns DescribeTagsResponse
   */
  async describeTags(request: DescribeTagsRequest): Promise<DescribeTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagsWithOptions(request, runtime);
  }

  /**
   * Queries the detailed information about a vServer group.
   * 
   * @param request - DescribeVServerGroupAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVServerGroupAttributeResponse
   */
  async describeVServerGroupAttributeWithOptions(request: DescribeVServerGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVServerGroupAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVServerGroupAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVServerGroupAttributeResponse>(await this.callApi(params, req, runtime), new DescribeVServerGroupAttributeResponse({}));
  }

  /**
   * Queries the detailed information about a vServer group.
   * 
   * @param request - DescribeVServerGroupAttributeRequest
   * @returns DescribeVServerGroupAttributeResponse
   */
  async describeVServerGroupAttribute(request: DescribeVServerGroupAttributeRequest): Promise<DescribeVServerGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVServerGroupAttributeWithOptions(request, runtime);
  }

  /**
   * Queries vServer groups.
   * 
   * @param request - DescribeVServerGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVServerGroupsResponse
   */
  async describeVServerGroupsWithOptions(request: DescribeVServerGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVServerGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.includeListener)) {
      query["IncludeListener"] = request.includeListener;
    }

    if (!Util.isUnset(request.includeRule)) {
      query["IncludeRule"] = request.includeRule;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVServerGroups",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVServerGroupsResponse>(await this.callApi(params, req, runtime), new DescribeVServerGroupsResponse({}));
  }

  /**
   * Queries vServer groups.
   * 
   * @param request - DescribeVServerGroupsRequest
   * @returns DescribeVServerGroupsResponse
   */
  async describeVServerGroups(request: DescribeVServerGroupsRequest): Promise<DescribeVServerGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVServerGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the zones in a region.
   * 
   * @param request - DescribeZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZonesResponse
   */
  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZonesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeZones",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeZonesResponse>(await this.callApi(params, req, runtime), new DescribeZonesResponse({}));
  }

  /**
   * Queries the zones in a region.
   * 
   * @param request - DescribeZonesRequest
   * @returns DescribeZonesResponse
   */
  async describeZones(request: DescribeZonesRequest): Promise<DescribeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  /**
   * Enables fine-grained monitoring for the current region.
   * 
   * @param request - EnableHighDefinationMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableHighDefinationMonitorResponse
   */
  async enableHighDefinationMonitorWithOptions(request: EnableHighDefinationMonitorRequest, runtime: $Util.RuntimeOptions): Promise<EnableHighDefinationMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.logProject)) {
      query["LogProject"] = request.logProject;
    }

    if (!Util.isUnset(request.logStore)) {
      query["LogStore"] = request.logStore;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableHighDefinationMonitor",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableHighDefinationMonitorResponse>(await this.callApi(params, req, runtime), new EnableHighDefinationMonitorResponse({}));
  }

  /**
   * Enables fine-grained monitoring for the current region.
   * 
   * @param request - EnableHighDefinationMonitorRequest
   * @returns EnableHighDefinationMonitorResponse
   */
  async enableHighDefinationMonitor(request: EnableHighDefinationMonitorRequest): Promise<EnableHighDefinationMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableHighDefinationMonitorWithOptions(request, runtime);
  }

  /**
   * Queries Transport Layer Security (TLS) policies.
   * 
   * @param request - ListTLSCipherPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTLSCipherPoliciesResponse
   */
  async listTLSCipherPoliciesWithOptions(request: ListTLSCipherPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListTLSCipherPoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.includeListener)) {
      query["IncludeListener"] = request.includeListener;
    }

    if (!Util.isUnset(request.maxItems)) {
      query["MaxItems"] = request.maxItems;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.TLSCipherPolicyId)) {
      query["TLSCipherPolicyId"] = request.TLSCipherPolicyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTLSCipherPolicies",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTLSCipherPoliciesResponse>(await this.callApi(params, req, runtime), new ListTLSCipherPoliciesResponse({}));
  }

  /**
   * Queries Transport Layer Security (TLS) policies.
   * 
   * @param request - ListTLSCipherPoliciesRequest
   * @returns ListTLSCipherPoliciesResponse
   */
  async listTLSCipherPolicies(request: ListTLSCipherPoliciesRequest): Promise<ListTLSCipherPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTLSCipherPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to resources.
   * 
   * @remarks
   *   Set **ResourceId.N** or **Tag.N** that consists of **Tag.N.Key** and **Tag.N.Value** in the request to specify the object to be queried.
   * *   **Tag.N** is a resource tag that consists of a key-value pair. If you set only **Tag.N.Key**, all tag values that are associated with the specified tag key are returned. If you set only **Tag.N.Value**, an error message is returned.
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
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
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
      version: "2014-05-15",
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
   * Queries the tags that are added to resources.
   * 
   * @remarks
   *   Set **ResourceId.N** or **Tag.N** that consists of **Tag.N.Key** and **Tag.N.Value** in the request to specify the object to be queried.
   * *   **Tag.N** is a resource tag that consists of a key-value pair. If you set only **Tag.N.Key**, all tag values that are associated with the specified tag key are returned. If you set only **Tag.N.Value**, an error message is returned.
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
   * Modifies the configuration of fine-grained monitoring in a specified region.
   * 
   * @param request - ModifyHighDefinationMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHighDefinationMonitorResponse
   */
  async modifyHighDefinationMonitorWithOptions(request: ModifyHighDefinationMonitorRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHighDefinationMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.logProject)) {
      query["LogProject"] = request.logProject;
    }

    if (!Util.isUnset(request.logStore)) {
      query["LogStore"] = request.logStore;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyHighDefinationMonitor",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyHighDefinationMonitorResponse>(await this.callApi(params, req, runtime), new ModifyHighDefinationMonitorResponse({}));
  }

  /**
   * Modifies the configuration of fine-grained monitoring in a specified region.
   * 
   * @param request - ModifyHighDefinationMonitorRequest
   * @returns ModifyHighDefinationMonitorResponse
   */
  async modifyHighDefinationMonitor(request: ModifyHighDefinationMonitorRequest): Promise<ModifyHighDefinationMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHighDefinationMonitorWithOptions(request, runtime);
  }

  /**
   * Changes the metering method of a pay-as-you-go Classic Load Balancer (CLB) instance.
   * 
   * @remarks
   * > *   For pay-as-you-go CLB instances, you can only change the metering method from pay-by-specification to pay-by-LCU. You cannot change the metering method from pay-by-LCU to pay-by-specification.
   * >*   This operation can change the metering method of only one instance at a time.
   * 
   * @param request - ModifyLoadBalancerInstanceChargeTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLoadBalancerInstanceChargeTypeResponse
   */
  async modifyLoadBalancerInstanceChargeTypeWithOptions(request: ModifyLoadBalancerInstanceChargeTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLoadBalancerInstanceChargeTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!Util.isUnset(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.loadBalancerSpec)) {
      query["LoadBalancerSpec"] = request.loadBalancerSpec;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyLoadBalancerInstanceChargeType",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyLoadBalancerInstanceChargeTypeResponse>(await this.callApi(params, req, runtime), new ModifyLoadBalancerInstanceChargeTypeResponse({}));
  }

  /**
   * Changes the metering method of a pay-as-you-go Classic Load Balancer (CLB) instance.
   * 
   * @remarks
   * > *   For pay-as-you-go CLB instances, you can only change the metering method from pay-by-specification to pay-by-LCU. You cannot change the metering method from pay-by-LCU to pay-by-specification.
   * >*   This operation can change the metering method of only one instance at a time.
   * 
   * @param request - ModifyLoadBalancerInstanceChargeTypeRequest
   * @returns ModifyLoadBalancerInstanceChargeTypeResponse
   */
  async modifyLoadBalancerInstanceChargeType(request: ModifyLoadBalancerInstanceChargeTypeRequest): Promise<ModifyLoadBalancerInstanceChargeTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLoadBalancerInstanceChargeTypeWithOptions(request, runtime);
  }

  /**
   * Modifies the specification of a Classic Load Balancer (CLB) instance.
   * 
   * @param request - ModifyLoadBalancerInstanceSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLoadBalancerInstanceSpecResponse
   */
  async modifyLoadBalancerInstanceSpecWithOptions(request: ModifyLoadBalancerInstanceSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLoadBalancerInstanceSpecResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.loadBalancerSpec)) {
      query["LoadBalancerSpec"] = request.loadBalancerSpec;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyLoadBalancerInstanceSpec",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyLoadBalancerInstanceSpecResponse>(await this.callApi(params, req, runtime), new ModifyLoadBalancerInstanceSpecResponse({}));
  }

  /**
   * Modifies the specification of a Classic Load Balancer (CLB) instance.
   * 
   * @param request - ModifyLoadBalancerInstanceSpecRequest
   * @returns ModifyLoadBalancerInstanceSpecResponse
   */
  async modifyLoadBalancerInstanceSpec(request: ModifyLoadBalancerInstanceSpecRequest): Promise<ModifyLoadBalancerInstanceSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLoadBalancerInstanceSpecWithOptions(request, runtime);
  }

  /**
   * Modifies the metering method of an Internet-facing Classic Load Balancer (CLB) instance.
   * 
   * @remarks
   * ## Description
   * *   If you modify only the maximum bandwidth of a pay-by-bandwidth CLB instance, the new bandwidth immediately takes effect.
   * *   If you modify the metering method (for example, switch from pay-by-bandwidth to pay-by-data-transfer), the new metering method and the other changes specified in the operation take effect at 00:00:00 the next day.
   * 
   * @param request - ModifyLoadBalancerInternetSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLoadBalancerInternetSpecResponse
   */
  async modifyLoadBalancerInternetSpecWithOptions(request: ModifyLoadBalancerInternetSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLoadBalancerInternetSpecResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyLoadBalancerInternetSpec",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyLoadBalancerInternetSpecResponse>(await this.callApi(params, req, runtime), new ModifyLoadBalancerInternetSpecResponse({}));
  }

  /**
   * Modifies the metering method of an Internet-facing Classic Load Balancer (CLB) instance.
   * 
   * @remarks
   * ## Description
   * *   If you modify only the maximum bandwidth of a pay-by-bandwidth CLB instance, the new bandwidth immediately takes effect.
   * *   If you modify the metering method (for example, switch from pay-by-bandwidth to pay-by-data-transfer), the new metering method and the other changes specified in the operation take effect at 00:00:00 the next day.
   * 
   * @param request - ModifyLoadBalancerInternetSpecRequest
   * @returns ModifyLoadBalancerInternetSpecResponse
   */
  async modifyLoadBalancerInternetSpec(request: ModifyLoadBalancerInternetSpecRequest): Promise<ModifyLoadBalancerInternetSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLoadBalancerInternetSpecWithOptions(request, runtime);
  }

  /**
   * Changes the billing method of a Classic Load Balancer (CLB) instance from pay-as-you-go to subscription.
   * 
   * @deprecated OpenAPI ModifyLoadBalancerPayType is deprecated
   * 
   * @param request - ModifyLoadBalancerPayTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLoadBalancerPayTypeResponse
   */
  // Deprecated
  async modifyLoadBalancerPayTypeWithOptions(request: ModifyLoadBalancerPayTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLoadBalancerPayTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyLoadBalancerPayType",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyLoadBalancerPayTypeResponse>(await this.callApi(params, req, runtime), new ModifyLoadBalancerPayTypeResponse({}));
  }

  /**
   * Changes the billing method of a Classic Load Balancer (CLB) instance from pay-as-you-go to subscription.
   * 
   * @deprecated OpenAPI ModifyLoadBalancerPayType is deprecated
   * 
   * @param request - ModifyLoadBalancerPayTypeRequest
   * @returns ModifyLoadBalancerPayTypeResponse
   */
  // Deprecated
  async modifyLoadBalancerPayType(request: ModifyLoadBalancerPayTypeRequest): Promise<ModifyLoadBalancerPayTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLoadBalancerPayTypeWithOptions(request, runtime);
  }

  /**
   * Replaces backend servers in a vServer group.
   * 
   * @remarks
   * This operation can be used only to replace backend servers in a vServer group. To modify the attributes of backend servers, such as weights, call the [SetVServerGroupAttribute](https://help.aliyun.com/document_detail/35217.html) operation.
   * 
   * @param request - ModifyVServerGroupBackendServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVServerGroupBackendServersResponse
   */
  async modifyVServerGroupBackendServersWithOptions(request: ModifyVServerGroupBackendServersRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVServerGroupBackendServersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.newBackendServers)) {
      query["NewBackendServers"] = request.newBackendServers;
    }

    if (!Util.isUnset(request.oldBackendServers)) {
      query["OldBackendServers"] = request.oldBackendServers;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyVServerGroupBackendServers",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyVServerGroupBackendServersResponse>(await this.callApi(params, req, runtime), new ModifyVServerGroupBackendServersResponse({}));
  }

  /**
   * Replaces backend servers in a vServer group.
   * 
   * @remarks
   * This operation can be used only to replace backend servers in a vServer group. To modify the attributes of backend servers, such as weights, call the [SetVServerGroupAttribute](https://help.aliyun.com/document_detail/35217.html) operation.
   * 
   * @param request - ModifyVServerGroupBackendServersRequest
   * @returns ModifyVServerGroupBackendServersResponse
   */
  async modifyVServerGroupBackendServers(request: ModifyVServerGroupBackendServersRequest): Promise<ModifyVServerGroupBackendServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVServerGroupBackendServersWithOptions(request, runtime);
  }

  /**
   * Moves a resource to another resource group.
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

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.accessKeyId)) {
      query["access_key_id"] = request.accessKeyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MoveResourceGroup",
      version: "2014-05-15",
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
   * Moves a resource to another resource group.
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * Removes IP entries from the network access control list (ACL) of a Classic Load Balancer (CLB) instance.
   * 
   * @param request - RemoveAccessControlListEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveAccessControlListEntryResponse
   */
  async removeAccessControlListEntryWithOptions(request: RemoveAccessControlListEntryRequest, runtime: $Util.RuntimeOptions): Promise<RemoveAccessControlListEntryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclEntrys)) {
      query["AclEntrys"] = request.aclEntrys;
    }

    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveAccessControlListEntry",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveAccessControlListEntryResponse>(await this.callApi(params, req, runtime), new RemoveAccessControlListEntryResponse({}));
  }

  /**
   * Removes IP entries from the network access control list (ACL) of a Classic Load Balancer (CLB) instance.
   * 
   * @param request - RemoveAccessControlListEntryRequest
   * @returns RemoveAccessControlListEntryResponse
   */
  async removeAccessControlListEntry(request: RemoveAccessControlListEntryRequest): Promise<RemoveAccessControlListEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeAccessControlListEntryWithOptions(request, runtime);
  }

  /**
   * Removes backend servers.
   * 
   * @remarks
   * >  If the backend servers that you want to remove are not in the server list of the Classic Load Balancer (CLB) instance, the request fails. However, the system does not report an error.
   * 
   * @param request - RemoveBackendServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveBackendServersResponse
   */
  async removeBackendServersWithOptions(request: RemoveBackendServersRequest, runtime: $Util.RuntimeOptions): Promise<RemoveBackendServersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendServers)) {
      query["BackendServers"] = request.backendServers;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveBackendServers",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveBackendServersResponse>(await this.callApi(params, req, runtime), new RemoveBackendServersResponse({}));
  }

  /**
   * Removes backend servers.
   * 
   * @remarks
   * >  If the backend servers that you want to remove are not in the server list of the Classic Load Balancer (CLB) instance, the request fails. However, the system does not report an error.
   * 
   * @param request - RemoveBackendServersRequest
   * @returns RemoveBackendServersResponse
   */
  async removeBackendServers(request: RemoveBackendServersRequest): Promise<RemoveBackendServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeBackendServersWithOptions(request, runtime);
  }

  /**
   * Removes IP addresses or CIDR blocks from the whitelist of a listener.
   * 
   * @param request - RemoveListenerWhiteListItemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveListenerWhiteListItemResponse
   */
  async removeListenerWhiteListItemWithOptions(request: RemoveListenerWhiteListItemRequest, runtime: $Util.RuntimeOptions): Promise<RemoveListenerWhiteListItemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceItems)) {
      query["SourceItems"] = request.sourceItems;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveListenerWhiteListItem",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveListenerWhiteListItemResponse>(await this.callApi(params, req, runtime), new RemoveListenerWhiteListItemResponse({}));
  }

  /**
   * Removes IP addresses or CIDR blocks from the whitelist of a listener.
   * 
   * @param request - RemoveListenerWhiteListItemRequest
   * @returns RemoveListenerWhiteListItemResponse
   */
  async removeListenerWhiteListItem(request: RemoveListenerWhiteListItemRequest): Promise<RemoveListenerWhiteListItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeListenerWhiteListItemWithOptions(request, runtime);
  }

  /**
   * Removes tags from a Server Load Balancer (SLB) instance.
   * 
   * @param request - RemoveTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveTagsResponse
   */
  async removeTagsWithOptions(request: RemoveTagsRequest, runtime: $Util.RuntimeOptions): Promise<RemoveTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveTags",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveTagsResponse>(await this.callApi(params, req, runtime), new RemoveTagsResponse({}));
  }

  /**
   * Removes tags from a Server Load Balancer (SLB) instance.
   * 
   * @param request - RemoveTagsRequest
   * @returns RemoveTagsResponse
   */
  async removeTags(request: RemoveTagsRequest): Promise<RemoveTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeTagsWithOptions(request, runtime);
  }

  /**
   * Removes backend servers from a vServer group.
   * 
   * @remarks
   * >  If the backend servers specified by the **BackendServers** parameter do not exist in the vServer group, the backend servers are ignored. No error message is returned.
   * 
   * @param request - RemoveVServerGroupBackendServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveVServerGroupBackendServersResponse
   */
  async removeVServerGroupBackendServersWithOptions(request: RemoveVServerGroupBackendServersRequest, runtime: $Util.RuntimeOptions): Promise<RemoveVServerGroupBackendServersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendServers)) {
      query["BackendServers"] = request.backendServers;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveVServerGroupBackendServers",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveVServerGroupBackendServersResponse>(await this.callApi(params, req, runtime), new RemoveVServerGroupBackendServersResponse({}));
  }

  /**
   * Removes backend servers from a vServer group.
   * 
   * @remarks
   * >  If the backend servers specified by the **BackendServers** parameter do not exist in the vServer group, the backend servers are ignored. No error message is returned.
   * 
   * @param request - RemoveVServerGroupBackendServersRequest
   * @returns RemoveVServerGroupBackendServersResponse
   */
  async removeVServerGroupBackendServers(request: RemoveVServerGroupBackendServersRequest): Promise<RemoveVServerGroupBackendServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeVServerGroupBackendServersWithOptions(request, runtime);
  }

  /**
   * Renames an access control list (ACL).
   * 
   * @param request - SetAccessControlListAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAccessControlListAttributeResponse
   */
  async setAccessControlListAttributeWithOptions(request: SetAccessControlListAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetAccessControlListAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.aclName)) {
      query["AclName"] = request.aclName;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetAccessControlListAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetAccessControlListAttributeResponse>(await this.callApi(params, req, runtime), new SetAccessControlListAttributeResponse({}));
  }

  /**
   * Renames an access control list (ACL).
   * 
   * @param request - SetAccessControlListAttributeRequest
   * @returns SetAccessControlListAttributeResponse
   */
  async setAccessControlListAttribute(request: SetAccessControlListAttributeRequest): Promise<SetAccessControlListAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAccessControlListAttributeWithOptions(request, runtime);
  }

  /**
   * Adds an access log forwarding rule to a Classic Load Balancer (CLB) instance.
   * 
   * @param request - SetAccessLogsDownloadAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAccessLogsDownloadAttributeResponse
   */
  async setAccessLogsDownloadAttributeWithOptions(request: SetAccessLogsDownloadAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetAccessLogsDownloadAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.logsDownloadAttributes)) {
      query["LogsDownloadAttributes"] = request.logsDownloadAttributes;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetAccessLogsDownloadAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetAccessLogsDownloadAttributeResponse>(await this.callApi(params, req, runtime), new SetAccessLogsDownloadAttributeResponse({}));
  }

  /**
   * Adds an access log forwarding rule to a Classic Load Balancer (CLB) instance.
   * 
   * @param request - SetAccessLogsDownloadAttributeRequest
   * @returns SetAccessLogsDownloadAttributeResponse
   */
  async setAccessLogsDownloadAttribute(request: SetAccessLogsDownloadAttributeRequest): Promise<SetAccessLogsDownloadAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAccessLogsDownloadAttributeWithOptions(request, runtime);
  }

  /**
   * Specifies weights for backend servers.
   * 
   * @param request - SetBackendServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetBackendServersResponse
   */
  async setBackendServersWithOptions(request: SetBackendServersRequest, runtime: $Util.RuntimeOptions): Promise<SetBackendServersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendServers)) {
      query["BackendServers"] = request.backendServers;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetBackendServers",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetBackendServersResponse>(await this.callApi(params, req, runtime), new SetBackendServersResponse({}));
  }

  /**
   * Specifies weights for backend servers.
   * 
   * @param request - SetBackendServersRequest
   * @returns SetBackendServersResponse
   */
  async setBackendServers(request: SetBackendServersRequest): Promise<SetBackendServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setBackendServersWithOptions(request, runtime);
  }

  /**
   * Specifies a name for a CA certificate.
   * 
   * @param request - SetCACertificateNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetCACertificateNameResponse
   */
  async setCACertificateNameWithOptions(request: SetCACertificateNameRequest, runtime: $Util.RuntimeOptions): Promise<SetCACertificateNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.CACertificateId)) {
      query["CACertificateId"] = request.CACertificateId;
    }

    if (!Util.isUnset(request.CACertificateName)) {
      query["CACertificateName"] = request.CACertificateName;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetCACertificateName",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetCACertificateNameResponse>(await this.callApi(params, req, runtime), new SetCACertificateNameResponse({}));
  }

  /**
   * Specifies a name for a CA certificate.
   * 
   * @param request - SetCACertificateNameRequest
   * @returns SetCACertificateNameResponse
   */
  async setCACertificateName(request: SetCACertificateNameRequest): Promise<SetCACertificateNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCACertificateNameWithOptions(request, runtime);
  }

  /**
   * Replaces the certificate of an additional domain name.
   * 
   * @remarks
   * >  You cannot replace an additional certificate for a listener that is added to a shared-resource Server Load Balancer (SLB) instance.
   * 
   * @param request - SetDomainExtensionAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDomainExtensionAttributeResponse
   */
  async setDomainExtensionAttributeWithOptions(request: SetDomainExtensionAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetDomainExtensionAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainExtensionId)) {
      query["DomainExtensionId"] = request.domainExtensionId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.serverCertificateId)) {
      query["ServerCertificateId"] = request.serverCertificateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDomainExtensionAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDomainExtensionAttributeResponse>(await this.callApi(params, req, runtime), new SetDomainExtensionAttributeResponse({}));
  }

  /**
   * Replaces the certificate of an additional domain name.
   * 
   * @remarks
   * >  You cannot replace an additional certificate for a listener that is added to a shared-resource Server Load Balancer (SLB) instance.
   * 
   * @param request - SetDomainExtensionAttributeRequest
   * @returns SetDomainExtensionAttributeResponse
   */
  async setDomainExtensionAttribute(request: SetDomainExtensionAttributeRequest): Promise<SetDomainExtensionAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDomainExtensionAttributeWithOptions(request, runtime);
  }

  /**
   * Enables or disables the whitelist of a specified listener.
   * 
   * @param request - SetListenerAccessControlStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetListenerAccessControlStatusResponse
   */
  async setListenerAccessControlStatusWithOptions(request: SetListenerAccessControlStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetListenerAccessControlStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessControlStatus)) {
      query["AccessControlStatus"] = request.accessControlStatus;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetListenerAccessControlStatus",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetListenerAccessControlStatusResponse>(await this.callApi(params, req, runtime), new SetListenerAccessControlStatusResponse({}));
  }

  /**
   * Enables or disables the whitelist of a specified listener.
   * 
   * @param request - SetListenerAccessControlStatusRequest
   * @returns SetListenerAccessControlStatusResponse
   */
  async setListenerAccessControlStatus(request: SetListenerAccessControlStatusRequest): Promise<SetListenerAccessControlStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setListenerAccessControlStatusWithOptions(request, runtime);
  }

  /**
   * Enables or disables deletion protection for an SLB instance.
   * 
   * @param request - SetLoadBalancerDeleteProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoadBalancerDeleteProtectionResponse
   */
  async setLoadBalancerDeleteProtectionWithOptions(request: SetLoadBalancerDeleteProtectionRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerDeleteProtectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deleteProtection)) {
      query["DeleteProtection"] = request.deleteProtection;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetLoadBalancerDeleteProtection",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetLoadBalancerDeleteProtectionResponse>(await this.callApi(params, req, runtime), new SetLoadBalancerDeleteProtectionResponse({}));
  }

  /**
   * Enables or disables deletion protection for an SLB instance.
   * 
   * @param request - SetLoadBalancerDeleteProtectionRequest
   * @returns SetLoadBalancerDeleteProtectionResponse
   */
  async setLoadBalancerDeleteProtection(request: SetLoadBalancerDeleteProtectionRequest): Promise<SetLoadBalancerDeleteProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerDeleteProtectionWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of an HTTP listener.
   * 
   * @remarks
   * ### Prerequisites
   * *   A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/27577.html).
   * *   An HTTP listener is created. For more information about how to create an HTTP listener, see [CreateLoadBalancerHTTPListener](https://help.aliyun.com/document_detail/27592.html).
   * 
   * @param request - SetLoadBalancerHTTPListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoadBalancerHTTPListenerAttributeResponse
   */
  async setLoadBalancerHTTPListenerAttributeWithOptions(request: SetLoadBalancerHTTPListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerHTTPListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.aclStatus)) {
      query["AclStatus"] = request.aclStatus;
    }

    if (!Util.isUnset(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.cookie)) {
      query["Cookie"] = request.cookie;
    }

    if (!Util.isUnset(request.cookieTimeout)) {
      query["CookieTimeout"] = request.cookieTimeout;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.gzip)) {
      query["Gzip"] = request.gzip;
    }

    if (!Util.isUnset(request.healthCheck)) {
      query["HealthCheck"] = request.healthCheck;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!Util.isUnset(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!Util.isUnset(request.healthCheckMethod)) {
      query["HealthCheckMethod"] = request.healthCheckMethod;
    }

    if (!Util.isUnset(request.healthCheckTimeout)) {
      query["HealthCheckTimeout"] = request.healthCheckTimeout;
    }

    if (!Util.isUnset(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.idleTimeout)) {
      query["IdleTimeout"] = request.idleTimeout;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.stickySession)) {
      query["StickySession"] = request.stickySession;
    }

    if (!Util.isUnset(request.stickySessionType)) {
      query["StickySessionType"] = request.stickySessionType;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!Util.isUnset(request.VServerGroup)) {
      query["VServerGroup"] = request.VServerGroup;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!Util.isUnset(request.XForwardedFor)) {
      query["XForwardedFor"] = request.XForwardedFor;
    }

    if (!Util.isUnset(request.XForwardedFor_ClientSrcPort)) {
      query["XForwardedFor_ClientSrcPort"] = request.XForwardedFor_ClientSrcPort;
    }

    if (!Util.isUnset(request.XForwardedFor_SLBID)) {
      query["XForwardedFor_SLBID"] = request.XForwardedFor_SLBID;
    }

    if (!Util.isUnset(request.XForwardedFor_SLBIP)) {
      query["XForwardedFor_SLBIP"] = request.XForwardedFor_SLBIP;
    }

    if (!Util.isUnset(request.XForwardedFor_SLBPORT)) {
      query["XForwardedFor_SLBPORT"] = request.XForwardedFor_SLBPORT;
    }

    if (!Util.isUnset(request.XForwardedFor_proto)) {
      query["XForwardedFor_proto"] = request.XForwardedFor_proto;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetLoadBalancerHTTPListenerAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetLoadBalancerHTTPListenerAttributeResponse>(await this.callApi(params, req, runtime), new SetLoadBalancerHTTPListenerAttributeResponse({}));
  }

  /**
   * Modifies the configurations of an HTTP listener.
   * 
   * @remarks
   * ### Prerequisites
   * *   A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/27577.html).
   * *   An HTTP listener is created. For more information about how to create an HTTP listener, see [CreateLoadBalancerHTTPListener](https://help.aliyun.com/document_detail/27592.html).
   * 
   * @param request - SetLoadBalancerHTTPListenerAttributeRequest
   * @returns SetLoadBalancerHTTPListenerAttributeResponse
   */
  async setLoadBalancerHTTPListenerAttribute(request: SetLoadBalancerHTTPListenerAttributeRequest): Promise<SetLoadBalancerHTTPListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerHTTPListenerAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of an HTTPS listener.
   * 
   * @remarks
   *   A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/27577.html).
   * *   An HTTPS listener is created. For more information about how to create an HTTPS listener, see [CreateLoadBalancerHTTPSListener](https://help.aliyun.com/document_detail/27593.html).
   * 
   * @param request - SetLoadBalancerHTTPSListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoadBalancerHTTPSListenerAttributeResponse
   */
  async setLoadBalancerHTTPSListenerAttributeWithOptions(request: SetLoadBalancerHTTPSListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerHTTPSListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.aclStatus)) {
      query["AclStatus"] = request.aclStatus;
    }

    if (!Util.isUnset(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.CACertificateId)) {
      query["CACertificateId"] = request.CACertificateId;
    }

    if (!Util.isUnset(request.cookie)) {
      query["Cookie"] = request.cookie;
    }

    if (!Util.isUnset(request.cookieTimeout)) {
      query["CookieTimeout"] = request.cookieTimeout;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.enableHttp2)) {
      query["EnableHttp2"] = request.enableHttp2;
    }

    if (!Util.isUnset(request.gzip)) {
      query["Gzip"] = request.gzip;
    }

    if (!Util.isUnset(request.healthCheck)) {
      query["HealthCheck"] = request.healthCheck;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!Util.isUnset(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!Util.isUnset(request.healthCheckMethod)) {
      query["HealthCheckMethod"] = request.healthCheckMethod;
    }

    if (!Util.isUnset(request.healthCheckTimeout)) {
      query["HealthCheckTimeout"] = request.healthCheckTimeout;
    }

    if (!Util.isUnset(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.idleTimeout)) {
      query["IdleTimeout"] = request.idleTimeout;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.serverCertificateId)) {
      query["ServerCertificateId"] = request.serverCertificateId;
    }

    if (!Util.isUnset(request.stickySession)) {
      query["StickySession"] = request.stickySession;
    }

    if (!Util.isUnset(request.stickySessionType)) {
      query["StickySessionType"] = request.stickySessionType;
    }

    if (!Util.isUnset(request.TLSCipherPolicy)) {
      query["TLSCipherPolicy"] = request.TLSCipherPolicy;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!Util.isUnset(request.VServerGroup)) {
      query["VServerGroup"] = request.VServerGroup;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!Util.isUnset(request.XForwardedFor)) {
      query["XForwardedFor"] = request.XForwardedFor;
    }

    if (!Util.isUnset(request.XForwardedFor_ClientSrcPort)) {
      query["XForwardedFor_ClientSrcPort"] = request.XForwardedFor_ClientSrcPort;
    }

    if (!Util.isUnset(request.XForwardedFor_SLBID)) {
      query["XForwardedFor_SLBID"] = request.XForwardedFor_SLBID;
    }

    if (!Util.isUnset(request.XForwardedFor_SLBIP)) {
      query["XForwardedFor_SLBIP"] = request.XForwardedFor_SLBIP;
    }

    if (!Util.isUnset(request.XForwardedFor_SLBPORT)) {
      query["XForwardedFor_SLBPORT"] = request.XForwardedFor_SLBPORT;
    }

    if (!Util.isUnset(request.XForwardedFor_proto)) {
      query["XForwardedFor_proto"] = request.XForwardedFor_proto;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetLoadBalancerHTTPSListenerAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetLoadBalancerHTTPSListenerAttributeResponse>(await this.callApi(params, req, runtime), new SetLoadBalancerHTTPSListenerAttributeResponse({}));
  }

  /**
   * Modifies the configurations of an HTTPS listener.
   * 
   * @remarks
   *   A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/27577.html).
   * *   An HTTPS listener is created. For more information about how to create an HTTPS listener, see [CreateLoadBalancerHTTPSListener](https://help.aliyun.com/document_detail/27593.html).
   * 
   * @param request - SetLoadBalancerHTTPSListenerAttributeRequest
   * @returns SetLoadBalancerHTTPSListenerAttributeResponse
   */
  async setLoadBalancerHTTPSListenerAttribute(request: SetLoadBalancerHTTPSListenerAttributeRequest): Promise<SetLoadBalancerHTTPSListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerHTTPSListenerAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the configuration of the configuration read-only mode for a Classic Load Balancer (CLB) instance.
   * 
   * @param request - SetLoadBalancerModificationProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoadBalancerModificationProtectionResponse
   */
  async setLoadBalancerModificationProtectionWithOptions(request: SetLoadBalancerModificationProtectionRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerModificationProtectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.modificationProtectionReason)) {
      query["ModificationProtectionReason"] = request.modificationProtectionReason;
    }

    if (!Util.isUnset(request.modificationProtectionStatus)) {
      query["ModificationProtectionStatus"] = request.modificationProtectionStatus;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetLoadBalancerModificationProtection",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetLoadBalancerModificationProtectionResponse>(await this.callApi(params, req, runtime), new SetLoadBalancerModificationProtectionResponse({}));
  }

  /**
   * Modifies the configuration of the configuration read-only mode for a Classic Load Balancer (CLB) instance.
   * 
   * @param request - SetLoadBalancerModificationProtectionRequest
   * @returns SetLoadBalancerModificationProtectionResponse
   */
  async setLoadBalancerModificationProtection(request: SetLoadBalancerModificationProtectionRequest): Promise<SetLoadBalancerModificationProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerModificationProtectionWithOptions(request, runtime);
  }

  /**
   * Modifies the name of a Classic Load Balancer (CLB) instance.
   * 
   * @param request - SetLoadBalancerNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoadBalancerNameResponse
   */
  async setLoadBalancerNameWithOptions(request: SetLoadBalancerNameRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.loadBalancerName)) {
      query["LoadBalancerName"] = request.loadBalancerName;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetLoadBalancerName",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetLoadBalancerNameResponse>(await this.callApi(params, req, runtime), new SetLoadBalancerNameResponse({}));
  }

  /**
   * Modifies the name of a Classic Load Balancer (CLB) instance.
   * 
   * @param request - SetLoadBalancerNameRequest
   * @returns SetLoadBalancerNameResponse
   */
  async setLoadBalancerName(request: SetLoadBalancerNameRequest): Promise<SetLoadBalancerNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerNameWithOptions(request, runtime);
  }

  /**
   * Modifies the state of a Classic Load Balancer (CLB) instance.
   * 
   * @param request - SetLoadBalancerStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoadBalancerStatusResponse
   */
  async setLoadBalancerStatusWithOptions(request: SetLoadBalancerStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.loadBalancerStatus)) {
      query["LoadBalancerStatus"] = request.loadBalancerStatus;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetLoadBalancerStatus",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetLoadBalancerStatusResponse>(await this.callApi(params, req, runtime), new SetLoadBalancerStatusResponse({}));
  }

  /**
   * Modifies the state of a Classic Load Balancer (CLB) instance.
   * 
   * @param request - SetLoadBalancerStatusRequest
   * @returns SetLoadBalancerStatusResponse
   */
  async setLoadBalancerStatus(request: SetLoadBalancerStatusRequest): Promise<SetLoadBalancerStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerStatusWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a TCP listener of Classic Load Balancer (CLB).
   * 
   * @remarks
   *   A CLB instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/2401685.html).
   * *   A TCP listener is created. For more information, see [CreateLoadBalancerTCPListener](~~CreateLoadBalancerTCPListener~~).
   * 
   * @param request - SetLoadBalancerTCPListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoadBalancerTCPListenerAttributeResponse
   */
  async setLoadBalancerTCPListenerAttributeWithOptions(request: SetLoadBalancerTCPListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerTCPListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.aclStatus)) {
      query["AclStatus"] = request.aclStatus;
    }

    if (!Util.isUnset(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.connectionDrain)) {
      query["ConnectionDrain"] = request.connectionDrain;
    }

    if (!Util.isUnset(request.connectionDrainTimeout)) {
      query["ConnectionDrainTimeout"] = request.connectionDrainTimeout;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.establishedTimeout)) {
      query["EstablishedTimeout"] = request.establishedTimeout;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckConnectTimeout)) {
      query["HealthCheckConnectTimeout"] = request.healthCheckConnectTimeout;
    }

    if (!Util.isUnset(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!Util.isUnset(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!Util.isUnset(request.healthCheckSwitch)) {
      query["HealthCheckSwitch"] = request.healthCheckSwitch;
    }

    if (!Util.isUnset(request.healthCheckType)) {
      query["HealthCheckType"] = request.healthCheckType;
    }

    if (!Util.isUnset(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.masterSlaveServerGroup)) {
      query["MasterSlaveServerGroup"] = request.masterSlaveServerGroup;
    }

    if (!Util.isUnset(request.masterSlaveServerGroupId)) {
      query["MasterSlaveServerGroupId"] = request.masterSlaveServerGroupId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.persistenceTimeout)) {
      query["PersistenceTimeout"] = request.persistenceTimeout;
    }

    if (!Util.isUnset(request.proxyProtocolV2Enabled)) {
      query["ProxyProtocolV2Enabled"] = request.proxyProtocolV2Enabled;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.synProxy)) {
      query["SynProxy"] = request.synProxy;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!Util.isUnset(request.VServerGroup)) {
      query["VServerGroup"] = request.VServerGroup;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetLoadBalancerTCPListenerAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetLoadBalancerTCPListenerAttributeResponse>(await this.callApi(params, req, runtime), new SetLoadBalancerTCPListenerAttributeResponse({}));
  }

  /**
   * Modifies the configurations of a TCP listener of Classic Load Balancer (CLB).
   * 
   * @remarks
   *   A CLB instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/2401685.html).
   * *   A TCP listener is created. For more information, see [CreateLoadBalancerTCPListener](~~CreateLoadBalancerTCPListener~~).
   * 
   * @param request - SetLoadBalancerTCPListenerAttributeRequest
   * @returns SetLoadBalancerTCPListenerAttributeResponse
   */
  async setLoadBalancerTCPListenerAttribute(request: SetLoadBalancerTCPListenerAttributeRequest): Promise<SetLoadBalancerTCPListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerTCPListenerAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a UDP listener.
   * 
   * @remarks
   *   A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/27577.html).
   * *   A UDP listener is created. For more information, see [CreateLoadBalancerUDPListener](https://help.aliyun.com/document_detail/27595.html).
   * 
   * @param request - SetLoadBalancerUDPListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoadBalancerUDPListenerAttributeResponse
   */
  async setLoadBalancerUDPListenerAttributeWithOptions(request: SetLoadBalancerUDPListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerUDPListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.aclStatus)) {
      query["AclStatus"] = request.aclStatus;
    }

    if (!Util.isUnset(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckConnectTimeout)) {
      query["HealthCheckConnectTimeout"] = request.healthCheckConnectTimeout;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!Util.isUnset(request.healthCheckSwitch)) {
      query["HealthCheckSwitch"] = request.healthCheckSwitch;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.masterSlaveServerGroup)) {
      query["MasterSlaveServerGroup"] = request.masterSlaveServerGroup;
    }

    if (!Util.isUnset(request.masterSlaveServerGroupId)) {
      query["MasterSlaveServerGroupId"] = request.masterSlaveServerGroupId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.proxyProtocolV2Enabled)) {
      query["ProxyProtocolV2Enabled"] = request.proxyProtocolV2Enabled;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!Util.isUnset(request.VServerGroup)) {
      query["VServerGroup"] = request.VServerGroup;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!Util.isUnset(request.healthCheckExp)) {
      query["healthCheckExp"] = request.healthCheckExp;
    }

    if (!Util.isUnset(request.healthCheckReq)) {
      query["healthCheckReq"] = request.healthCheckReq;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetLoadBalancerUDPListenerAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetLoadBalancerUDPListenerAttributeResponse>(await this.callApi(params, req, runtime), new SetLoadBalancerUDPListenerAttributeResponse({}));
  }

  /**
   * Modifies the configurations of a UDP listener.
   * 
   * @remarks
   *   A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/27577.html).
   * *   A UDP listener is created. For more information, see [CreateLoadBalancerUDPListener](https://help.aliyun.com/document_detail/27595.html).
   * 
   * @param request - SetLoadBalancerUDPListenerAttributeRequest
   * @returns SetLoadBalancerUDPListenerAttributeResponse
   */
  async setLoadBalancerUDPListenerAttribute(request: SetLoadBalancerUDPListenerAttributeRequest): Promise<SetLoadBalancerUDPListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerUDPListenerAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies a forwarding rule that is associated with a vServer group.
   * 
   * @param request - SetRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetRuleResponse
   */
  async setRuleWithOptions(request: SetRuleRequest, runtime: $Util.RuntimeOptions): Promise<SetRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cookie)) {
      query["Cookie"] = request.cookie;
    }

    if (!Util.isUnset(request.cookieTimeout)) {
      query["CookieTimeout"] = request.cookieTimeout;
    }

    if (!Util.isUnset(request.healthCheck)) {
      query["HealthCheck"] = request.healthCheck;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!Util.isUnset(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!Util.isUnset(request.healthCheckTimeout)) {
      query["HealthCheckTimeout"] = request.healthCheckTimeout;
    }

    if (!Util.isUnset(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.listenerSync)) {
      query["ListenerSync"] = request.listenerSync;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.stickySession)) {
      query["StickySession"] = request.stickySession;
    }

    if (!Util.isUnset(request.stickySessionType)) {
      query["StickySessionType"] = request.stickySessionType;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetRule",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetRuleResponse>(await this.callApi(params, req, runtime), new SetRuleResponse({}));
  }

  /**
   * Modifies a forwarding rule that is associated with a vServer group.
   * 
   * @param request - SetRuleRequest
   * @returns SetRuleResponse
   */
  async setRule(request: SetRuleRequest): Promise<SetRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setRuleWithOptions(request, runtime);
  }

  /**
   * Sets a name for a server certificate.
   * 
   * @param request - SetServerCertificateNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetServerCertificateNameResponse
   */
  async setServerCertificateNameWithOptions(request: SetServerCertificateNameRequest, runtime: $Util.RuntimeOptions): Promise<SetServerCertificateNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.serverCertificateId)) {
      query["ServerCertificateId"] = request.serverCertificateId;
    }

    if (!Util.isUnset(request.serverCertificateName)) {
      query["ServerCertificateName"] = request.serverCertificateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetServerCertificateName",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetServerCertificateNameResponse>(await this.callApi(params, req, runtime), new SetServerCertificateNameResponse({}));
  }

  /**
   * Sets a name for a server certificate.
   * 
   * @param request - SetServerCertificateNameRequest
   * @returns SetServerCertificateNameResponse
   */
  async setServerCertificateName(request: SetServerCertificateNameRequest): Promise<SetServerCertificateNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setServerCertificateNameWithOptions(request, runtime);
  }

  /**
   * Configures a Transport Layer Security (TLS) policy.
   * 
   * @param request - SetTLSCipherPolicyAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetTLSCipherPolicyAttributeResponse
   */
  async setTLSCipherPolicyAttributeWithOptions(request: SetTLSCipherPolicyAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetTLSCipherPolicyAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ciphers)) {
      query["Ciphers"] = request.ciphers;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.TLSCipherPolicyId)) {
      query["TLSCipherPolicyId"] = request.TLSCipherPolicyId;
    }

    if (!Util.isUnset(request.TLSVersions)) {
      query["TLSVersions"] = request.TLSVersions;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetTLSCipherPolicyAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetTLSCipherPolicyAttributeResponse>(await this.callApi(params, req, runtime), new SetTLSCipherPolicyAttributeResponse({}));
  }

  /**
   * Configures a Transport Layer Security (TLS) policy.
   * 
   * @param request - SetTLSCipherPolicyAttributeRequest
   * @returns SetTLSCipherPolicyAttributeResponse
   */
  async setTLSCipherPolicyAttribute(request: SetTLSCipherPolicyAttributeRequest): Promise<SetTLSCipherPolicyAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setTLSCipherPolicyAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a vServer group.
   * 
   * @remarks
   * This operation can be used to modify the weights of backend servers and names of vServer groups.
   * *   If you want to modify backend servers in a specified vServer group, call the [ModifyVServerGroupBackendServers](https://help.aliyun.com/document_detail/35220.html) operation.
   * *   If you want to add backend servers to a specified vServer group, call the [AddVServerGroupBackendServers](https://help.aliyun.com/document_detail/35218.html) operation.
   * 
   * @param request - SetVServerGroupAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetVServerGroupAttributeResponse
   */
  async setVServerGroupAttributeWithOptions(request: SetVServerGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetVServerGroupAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendServers)) {
      query["BackendServers"] = request.backendServers;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!Util.isUnset(request.VServerGroupName)) {
      query["VServerGroupName"] = request.VServerGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetVServerGroupAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetVServerGroupAttributeResponse>(await this.callApi(params, req, runtime), new SetVServerGroupAttributeResponse({}));
  }

  /**
   * Modifies the configurations of a vServer group.
   * 
   * @remarks
   * This operation can be used to modify the weights of backend servers and names of vServer groups.
   * *   If you want to modify backend servers in a specified vServer group, call the [ModifyVServerGroupBackendServers](https://help.aliyun.com/document_detail/35220.html) operation.
   * *   If you want to add backend servers to a specified vServer group, call the [AddVServerGroupBackendServers](https://help.aliyun.com/document_detail/35218.html) operation.
   * 
   * @param request - SetVServerGroupAttributeRequest
   * @returns SetVServerGroupAttributeResponse
   */
  async setVServerGroupAttribute(request: SetVServerGroupAttributeRequest): Promise<SetVServerGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setVServerGroupAttributeWithOptions(request, runtime);
  }

  /**
   * Enables a listener.
   * 
   * @remarks
   * When you call this operation, take note of the following items:
   * *   You can call the operation only when the listener is in the Stopped state.
   * *   If the operation is successful, the listener switches to the Starting state.
   * *   You cannot perform this operation when the Classic Load Balancer (CLB) instance to which the listener belongs is in the Locked state.
   * 
   * @param request - StartLoadBalancerListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartLoadBalancerListenerResponse
   */
  async startLoadBalancerListenerWithOptions(request: StartLoadBalancerListenerRequest, runtime: $Util.RuntimeOptions): Promise<StartLoadBalancerListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartLoadBalancerListener",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartLoadBalancerListenerResponse>(await this.callApi(params, req, runtime), new StartLoadBalancerListenerResponse({}));
  }

  /**
   * Enables a listener.
   * 
   * @remarks
   * When you call this operation, take note of the following items:
   * *   You can call the operation only when the listener is in the Stopped state.
   * *   If the operation is successful, the listener switches to the Starting state.
   * *   You cannot perform this operation when the Classic Load Balancer (CLB) instance to which the listener belongs is in the Locked state.
   * 
   * @param request - StartLoadBalancerListenerRequest
   * @returns StartLoadBalancerListenerResponse
   */
  async startLoadBalancerListener(request: StartLoadBalancerListenerRequest): Promise<StartLoadBalancerListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startLoadBalancerListenerWithOptions(request, runtime);
  }

  /**
   * Stops a listener.
   * 
   * @remarks
   * Before you make this API call, note the following:
   * *   After the API call is successfully made, the listener enters the stopped state.
   * *   If the Server Load Balancer (SLB) instance to which the listener to be stopped belongs is in the locked state, this API call cannot be made.
   * >  If you stop the listener, your services will be disrupted. Exercise caution when you perform this action.
   * 
   * @param request - StopLoadBalancerListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopLoadBalancerListenerResponse
   */
  async stopLoadBalancerListenerWithOptions(request: StopLoadBalancerListenerRequest, runtime: $Util.RuntimeOptions): Promise<StopLoadBalancerListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopLoadBalancerListener",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopLoadBalancerListenerResponse>(await this.callApi(params, req, runtime), new StopLoadBalancerListenerResponse({}));
  }

  /**
   * Stops a listener.
   * 
   * @remarks
   * Before you make this API call, note the following:
   * *   After the API call is successfully made, the listener enters the stopped state.
   * *   If the Server Load Balancer (SLB) instance to which the listener to be stopped belongs is in the locked state, this API call cannot be made.
   * >  If you stop the listener, your services will be disrupted. Exercise caution when you perform this action.
   * 
   * @param request - StopLoadBalancerListenerRequest
   * @returns StopLoadBalancerListenerResponse
   */
  async stopLoadBalancerListener(request: StopLoadBalancerListenerRequest): Promise<StopLoadBalancerListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopLoadBalancerListenerWithOptions(request, runtime);
  }

  /**
   * Creates tags and adds the tags to resources.
   * 
   * @remarks
   * >  You can add at most 20 tags to each instance. Before you add tags to a resource, Alibaba Cloud checks the number of existing tags of the resource. If the maximum number is reached, an error message is returned.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
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
      version: "2014-05-15",
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
   * Creates tags and adds the tags to resources.
   * 
   * @remarks
   * >  You can add at most 20 tags to each instance. Before you add tags to a resource, Alibaba Cloud checks the number of existing tags of the resource. If the maximum number is reached, an error message is returned.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from a resource.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
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
      action: "UntagResources",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * Removes tags from a resource.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Uploads a CA certificate.
   * 
   * @remarks
   * You can upload only one CA certificate at a time. After a CA certificate is uploaded, the certificate ID, name, and fingerprint are returned.
   * 
   * @param request - UploadCACertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadCACertificateResponse
   */
  async uploadCACertificateWithOptions(request: UploadCACertificateRequest, runtime: $Util.RuntimeOptions): Promise<UploadCACertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.CACertificate)) {
      query["CACertificate"] = request.CACertificate;
    }

    if (!Util.isUnset(request.CACertificateName)) {
      query["CACertificateName"] = request.CACertificateName;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadCACertificate",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadCACertificateResponse>(await this.callApi(params, req, runtime), new UploadCACertificateResponse({}));
  }

  /**
   * Uploads a CA certificate.
   * 
   * @remarks
   * You can upload only one CA certificate at a time. After a CA certificate is uploaded, the certificate ID, name, and fingerprint are returned.
   * 
   * @param request - UploadCACertificateRequest
   * @returns UploadCACertificateResponse
   */
  async uploadCACertificate(request: UploadCACertificateRequest): Promise<UploadCACertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadCACertificateWithOptions(request, runtime);
  }

  /**
   * Uploads a server certificate.
   * 
   * @remarks
   *   You can upload only one server certificate and its private key in each call.
   * *   After a server certificate and its private key are uploaded, the fingerprints of all server certificates that belong to your Alibaba Cloud account are returned.
   * 
   * @param request - UploadServerCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadServerCertificateResponse
   */
  async uploadServerCertificateWithOptions(request: UploadServerCertificateRequest, runtime: $Util.RuntimeOptions): Promise<UploadServerCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliCloudCertificateId)) {
      query["AliCloudCertificateId"] = request.aliCloudCertificateId;
    }

    if (!Util.isUnset(request.aliCloudCertificateName)) {
      query["AliCloudCertificateName"] = request.aliCloudCertificateName;
    }

    if (!Util.isUnset(request.aliCloudCertificateRegionId)) {
      query["AliCloudCertificateRegionId"] = request.aliCloudCertificateRegionId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.serverCertificate)) {
      query["ServerCertificate"] = request.serverCertificate;
    }

    if (!Util.isUnset(request.serverCertificateName)) {
      query["ServerCertificateName"] = request.serverCertificateName;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadServerCertificate",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadServerCertificateResponse>(await this.callApi(params, req, runtime), new UploadServerCertificateResponse({}));
  }

  /**
   * Uploads a server certificate.
   * 
   * @remarks
   *   You can upload only one server certificate and its private key in each call.
   * *   After a server certificate and its private key are uploaded, the fingerprints of all server certificates that belong to your Alibaba Cloud account are returned.
   * 
   * @param request - UploadServerCertificateRequest
   * @returns UploadServerCertificateResponse
   */
  async uploadServerCertificate(request: UploadServerCertificateRequest): Promise<UploadServerCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadServerCertificateWithOptions(request, runtime);
  }

}
