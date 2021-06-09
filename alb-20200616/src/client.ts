// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ListAclsRequest extends $tea.Model {
  aclIds?: string[];
  aclNames?: string[];
  resourceGroupId?: string;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      aclIds: 'AclIds',
      aclNames: 'AclNames',
      resourceGroupId: 'ResourceGroupId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclIds: { 'type': 'array', 'itemType': 'string' },
      aclNames: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclsResponseBody extends $tea.Model {
  acls?: ListAclsResponseBodyAcls[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      acls: 'Acls',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acls: { 'type': 'array', 'itemType': ListAclsResponseBodyAcls },
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

export class ListAclsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAclsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAclsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHealthCheckTemplateRequest extends $tea.Model {
  clientToken?: string;
  healthCheckTemplateName?: string;
  healthCheckConnectPort?: number;
  healthCheckHost?: string;
  healthCheckCodes?: string[];
  healthCheckInterval?: number;
  healthCheckTimeout?: number;
  healthCheckPath?: string;
  healthCheckMethod?: string;
  healthCheckProtocol?: string;
  healthCheckHttpVersion?: string;
  healthyThreshold?: number;
  unhealthyThreshold?: number;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      healthCheckTemplateName: 'HealthCheckTemplateName',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckHost: 'HealthCheckHost',
      healthCheckCodes: 'HealthCheckCodes',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckPath: 'HealthCheckPath',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckProtocol: 'HealthCheckProtocol',
      healthCheckHttpVersion: 'HealthCheckHttpVersion',
      healthyThreshold: 'HealthyThreshold',
      unhealthyThreshold: 'UnhealthyThreshold',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      healthCheckTemplateName: 'string',
      healthCheckConnectPort: 'number',
      healthCheckHost: 'string',
      healthCheckCodes: { 'type': 'array', 'itemType': 'string' },
      healthCheckInterval: 'number',
      healthCheckTimeout: 'number',
      healthCheckPath: 'string',
      healthCheckMethod: 'string',
      healthCheckProtocol: 'string',
      healthCheckHttpVersion: 'string',
      healthyThreshold: 'number',
      unhealthyThreshold: 'number',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHealthCheckTemplateResponseBody extends $tea.Model {
  healthCheckTemplateId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      healthCheckTemplateId: 'HealthCheckTemplateId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckTemplateId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHealthCheckTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateHealthCheckTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateHealthCheckTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  resourceType?: string;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeRequest extends $tea.Model {
  listenerId?: string;
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBody extends $tea.Model {
  aclConfig?: GetListenerAttributeResponseBodyAclConfig;
  certificates?: GetListenerAttributeResponseBodyCertificates[];
  caEnabled?: boolean;
  defaultActions?: GetListenerAttributeResponseBodyDefaultActions[];
  gzipEnabled?: boolean;
  http2Enabled?: boolean;
  idleTimeout?: number;
  listenerDescription?: string;
  listenerId?: string;
  listenerPort?: number;
  listenerProtocol?: string;
  listenerStatus?: string;
  loadBalancerId?: string;
  logConfig?: GetListenerAttributeResponseBodyLogConfig;
  quicConfig?: GetListenerAttributeResponseBodyQuicConfig;
  requestId?: string;
  requestTimeout?: number;
  securityPolicyId?: string;
  XForwardedForConfig?: GetListenerAttributeResponseBodyXForwardedForConfig;
  static names(): { [key: string]: string } {
    return {
      aclConfig: 'AclConfig',
      certificates: 'Certificates',
      caEnabled: 'CaEnabled',
      defaultActions: 'DefaultActions',
      gzipEnabled: 'GzipEnabled',
      http2Enabled: 'Http2Enabled',
      idleTimeout: 'IdleTimeout',
      listenerDescription: 'ListenerDescription',
      listenerId: 'ListenerId',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      listenerStatus: 'ListenerStatus',
      loadBalancerId: 'LoadBalancerId',
      logConfig: 'LogConfig',
      quicConfig: 'QuicConfig',
      requestId: 'RequestId',
      requestTimeout: 'RequestTimeout',
      securityPolicyId: 'SecurityPolicyId',
      XForwardedForConfig: 'XForwardedForConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclConfig: GetListenerAttributeResponseBodyAclConfig,
      certificates: { 'type': 'array', 'itemType': GetListenerAttributeResponseBodyCertificates },
      caEnabled: 'boolean',
      defaultActions: { 'type': 'array', 'itemType': GetListenerAttributeResponseBodyDefaultActions },
      gzipEnabled: 'boolean',
      http2Enabled: 'boolean',
      idleTimeout: 'number',
      listenerDescription: 'string',
      listenerId: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      listenerStatus: 'string',
      loadBalancerId: 'string',
      logConfig: GetListenerAttributeResponseBodyLogConfig,
      quicConfig: GetListenerAttributeResponseBodyQuicConfig,
      requestId: 'string',
      requestTimeout: 'number',
      securityPolicyId: 'string',
      XForwardedForConfig: GetListenerAttributeResponseBodyXForwardedForConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetListenerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHealthCheckTemplateAttributeRequest extends $tea.Model {
  clientToken?: string;
  healthCheckTemplateName?: string;
  healthCheckConnectPort?: number;
  healthCheckHost?: string;
  healthCheckCodes?: string[];
  healthCheckInterval?: number;
  healthCheckTimeout?: number;
  healthCheckPath?: string;
  healthCheckMethod?: string;
  healthCheckProtocol?: string;
  healthCheckHttpVersion?: string;
  healthyThreshold?: number;
  unhealthyThreshold?: number;
  dryRun?: boolean;
  healthCheckTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      healthCheckTemplateName: 'HealthCheckTemplateName',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckHost: 'HealthCheckHost',
      healthCheckCodes: 'HealthCheckCodes',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckPath: 'HealthCheckPath',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckProtocol: 'HealthCheckProtocol',
      healthCheckHttpVersion: 'HealthCheckHttpVersion',
      healthyThreshold: 'HealthyThreshold',
      unhealthyThreshold: 'UnhealthyThreshold',
      dryRun: 'DryRun',
      healthCheckTemplateId: 'HealthCheckTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      healthCheckTemplateName: 'string',
      healthCheckConnectPort: 'number',
      healthCheckHost: 'string',
      healthCheckCodes: { 'type': 'array', 'itemType': 'string' },
      healthCheckInterval: 'number',
      healthCheckTimeout: 'number',
      healthCheckPath: 'string',
      healthCheckMethod: 'string',
      healthCheckProtocol: 'string',
      healthCheckHttpVersion: 'string',
      healthyThreshold: 'number',
      unhealthyThreshold: 'number',
      dryRun: 'boolean',
      healthCheckTemplateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHealthCheckTemplateAttributeResponseBody extends $tea.Model {
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

export class UpdateHealthCheckTemplateAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateHealthCheckTemplateAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateHealthCheckTemplateAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupServersRequest extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  serverGroupId?: string;
  serverIds?: string[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      serverGroupId: 'ServerGroupId',
      serverIds: 'ServerIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      serverGroupId: 'string',
      serverIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupServersResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  servers?: ListServerGroupServersResponseBodyServers[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      servers: 'Servers',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      servers: { 'type': 'array', 'itemType': ListServerGroupServersResponseBodyServers },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupServersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListServerGroupServersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListServerGroupServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveEntriesFromAclRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  aclId?: string;
  entries?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      aclId: 'AclId',
      entries: 'Entries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      aclId: 'string',
      entries: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveEntriesFromAclResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveEntriesFromAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveEntriesFromAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveEntriesFromAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityPolicyRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  securityPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      securityPolicyId: 'SecurityPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      securityPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityPolicyResponseBody extends $tea.Model {
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

export class DeleteSecurityPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSecurityPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSecurityPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLoadBalancerAccessLogRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLoadBalancerAccessLogResponseBody extends $tea.Model {
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

export class DisableLoadBalancerAccessLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableLoadBalancerAccessLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableLoadBalancerAccessLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupsRequest extends $tea.Model {
  serverGroupIds?: string[];
  serverGroupNames?: string[];
  resourceGroupId?: string;
  nextToken?: string;
  maxResults?: number;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      serverGroupIds: 'ServerGroupIds',
      serverGroupNames: 'ServerGroupNames',
      resourceGroupId: 'ResourceGroupId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupIds: { 'type': 'array', 'itemType': 'string' },
      serverGroupNames: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  serverGroups?: ListServerGroupsResponseBodyServerGroups[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      serverGroups: 'ServerGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      serverGroups: { 'type': 'array', 'itemType': ListServerGroupsResponseBodyServerGroups },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListServerGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListServerGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupRequest extends $tea.Model {
  resourceType?: string;
  resourceId?: string;
  newResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      newResourceGroupId: 'NewResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceId: 'string',
      newResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBody extends $tea.Model {
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
  headers: { [key: string]: string };
  body: MoveResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MoveResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableDeletionProtectionRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableDeletionProtectionResponseBody extends $tea.Model {
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

export class EnableDeletionProtectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableDeletionProtectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableDeletionProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerAttributeRequest extends $tea.Model {
  listenerId?: string;
  clientToken?: string;
  dryRun?: boolean;
  listenerDescription?: string;
  requestTimeout?: number;
  idleTimeout?: number;
  gzipEnabled?: boolean;
  http2Enabled?: boolean;
  securityPolicyId?: string;
  XForwardedForConfig?: UpdateListenerAttributeRequestXForwardedForConfig;
  quicConfig?: UpdateListenerAttributeRequestQuicConfig;
  certificates?: UpdateListenerAttributeRequestCertificates[];
  defaultActions?: UpdateListenerAttributeRequestDefaultActions[];
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerDescription: 'ListenerDescription',
      requestTimeout: 'RequestTimeout',
      idleTimeout: 'IdleTimeout',
      gzipEnabled: 'GzipEnabled',
      http2Enabled: 'Http2Enabled',
      securityPolicyId: 'SecurityPolicyId',
      XForwardedForConfig: 'XForwardedForConfig',
      quicConfig: 'QuicConfig',
      certificates: 'Certificates',
      defaultActions: 'DefaultActions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      listenerDescription: 'string',
      requestTimeout: 'number',
      idleTimeout: 'number',
      gzipEnabled: 'boolean',
      http2Enabled: 'boolean',
      securityPolicyId: 'string',
      XForwardedForConfig: UpdateListenerAttributeRequestXForwardedForConfig,
      quicConfig: UpdateListenerAttributeRequestQuicConfig,
      certificates: { 'type': 'array', 'itemType': UpdateListenerAttributeRequestCertificates },
      defaultActions: { 'type': 'array', 'itemType': UpdateListenerAttributeRequestDefaultActions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerAttributeResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateListenerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  vpcId?: string;
  addressType?: string;
  loadBalancerName?: string;
  deletionProtectionEnabled?: boolean;
  modificationProtectionConfig?: CreateLoadBalancerRequestModificationProtectionConfig;
  zoneMappings?: CreateLoadBalancerRequestZoneMappings[];
  addressAllocatedMode?: string;
  resourceGroupId?: string;
  loadBalancerEdition?: string;
  loadBalancerBillingConfig?: CreateLoadBalancerRequestLoadBalancerBillingConfig;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      vpcId: 'VpcId',
      addressType: 'AddressType',
      loadBalancerName: 'LoadBalancerName',
      deletionProtectionEnabled: 'DeletionProtectionEnabled',
      modificationProtectionConfig: 'ModificationProtectionConfig',
      zoneMappings: 'ZoneMappings',
      addressAllocatedMode: 'AddressAllocatedMode',
      resourceGroupId: 'ResourceGroupId',
      loadBalancerEdition: 'LoadBalancerEdition',
      loadBalancerBillingConfig: 'LoadBalancerBillingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      vpcId: 'string',
      addressType: 'string',
      loadBalancerName: 'string',
      deletionProtectionEnabled: 'boolean',
      modificationProtectionConfig: CreateLoadBalancerRequestModificationProtectionConfig,
      zoneMappings: { 'type': 'array', 'itemType': CreateLoadBalancerRequestZoneMappings },
      addressAllocatedMode: 'string',
      resourceGroupId: 'string',
      loadBalancerEdition: 'string',
      loadBalancerBillingConfig: CreateLoadBalancerRequestLoadBalancerBillingConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerResponseBody extends $tea.Model {
  loadBalancerId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLoadBalancerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLoadBalancerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHealthCheckTemplatesRequest extends $tea.Model {
  healthCheckTemplateIds?: string[];
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      healthCheckTemplateIds: 'HealthCheckTemplateIds',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckTemplateIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHealthCheckTemplatesResponseBody extends $tea.Model {
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

export class DeleteHealthCheckTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteHealthCheckTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteHealthCheckTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupAttributeRequest extends $tea.Model {
  serverGroupName?: string;
  scheduler?: string;
  clientToken?: string;
  dryRun?: boolean;
  healthCheckConfig?: UpdateServerGroupAttributeRequestHealthCheckConfig;
  stickySessionConfig?: UpdateServerGroupAttributeRequestStickySessionConfig;
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      serverGroupName: 'ServerGroupName',
      scheduler: 'Scheduler',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      healthCheckConfig: 'HealthCheckConfig',
      stickySessionConfig: 'StickySessionConfig',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupName: 'string',
      scheduler: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      healthCheckConfig: UpdateServerGroupAttributeRequestHealthCheckConfig,
      stickySessionConfig: UpdateServerGroupAttributeRequestStickySessionConfig,
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupAttributeResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateServerGroupAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateServerGroupAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerGroupRequest extends $tea.Model {
  serverGroupName?: string;
  vpcId?: string;
  scheduler?: string;
  protocol?: string;
  resourceGroupId?: string;
  healthCheckConfig?: CreateServerGroupRequestHealthCheckConfig;
  stickySessionConfig?: CreateServerGroupRequestStickySessionConfig;
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      serverGroupName: 'ServerGroupName',
      vpcId: 'VpcId',
      scheduler: 'Scheduler',
      protocol: 'Protocol',
      resourceGroupId: 'ResourceGroupId',
      healthCheckConfig: 'HealthCheckConfig',
      stickySessionConfig: 'StickySessionConfig',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupName: 'string',
      vpcId: 'string',
      scheduler: 'string',
      protocol: 'string',
      resourceGroupId: 'string',
      healthCheckConfig: CreateServerGroupRequestHealthCheckConfig,
      stickySessionConfig: CreateServerGroupRequestStickySessionConfig,
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerGroupResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateServerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateServerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAclsWithListenerRequest extends $tea.Model {
  aclIds?: string[];
  listenerId?: string;
  aclType?: string;
  dryRun?: boolean;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      aclIds: 'AclIds',
      listenerId: 'ListenerId',
      aclType: 'AclType',
      dryRun: 'DryRun',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclIds: { 'type': 'array', 'itemType': 'string' },
      listenerId: 'string',
      aclType: 'string',
      dryRun: 'boolean',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAclsWithListenerResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAclsWithListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssociateAclsWithListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssociateAclsWithListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesRequest extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  ruleIds?: string[];
  listenerIds?: string[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      ruleIds: 'RuleIds',
      listenerIds: 'ListenerIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      ruleIds: { 'type': 'array', 'itemType': 'string' },
      listenerIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  rules?: ListRulesResponseBodyRules[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      rules: 'Rules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': ListRulesResponseBodyRules },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBody extends $tea.Model {
  requestId?: string;
  zones?: DescribeZonesResponseBodyZones[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServerGroupRequest extends $tea.Model {
  clientToken?: string;
  serverGroupId?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      serverGroupId: 'ServerGroupId',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      serverGroupId: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServerGroupResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteServerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteServerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServersToServerGroupRequest extends $tea.Model {
  serverGroupId?: string;
  servers?: AddServersToServerGroupRequestServers[];
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
      servers: 'Servers',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
      servers: { 'type': 'array', 'itemType': AddServersToServerGroupRequestServers },
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServersToServerGroupResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServersToServerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddServersToServerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddServersToServerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLoadBalancerRequest extends $tea.Model {
  loadBalancerId?: string;
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLoadBalancerResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLoadBalancerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLoadBalancerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLoadBalancerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerLogConfigRequest extends $tea.Model {
  listenerId?: string;
  clientToken?: string;
  dryRun?: boolean;
  accessLogRecordCustomizedHeadersEnabled?: boolean;
  accessLogTracingConfig?: UpdateListenerLogConfigRequestAccessLogTracingConfig;
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      accessLogRecordCustomizedHeadersEnabled: 'AccessLogRecordCustomizedHeadersEnabled',
      accessLogTracingConfig: 'AccessLogTracingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      accessLogRecordCustomizedHeadersEnabled: 'boolean',
      accessLogTracingConfig: UpdateListenerLogConfigRequestAccessLogTracingConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerLogConfigResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerLogConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateListenerLogConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateListenerLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnTagResourcesRequest extends $tea.Model {
  resourceType?: string;
  resourceId?: string[];
  tag?: UnTagResourcesRequestTag[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': UnTagResourcesRequestTag },
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnTagResourcesResponseBody extends $tea.Model {
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

export class UnTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemSecurityPoliciesResponseBody extends $tea.Model {
  requestId?: string;
  securityPolicies?: ListSystemSecurityPoliciesResponseBodySecurityPolicies[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityPolicies: 'SecurityPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityPolicies: { 'type': 'array', 'itemType': ListSystemSecurityPoliciesResponseBodySecurityPolicies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemSecurityPoliciesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSystemSecurityPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSystemSecurityPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEntriesToAclRequest extends $tea.Model {
  aclId?: string;
  aclEntries?: AddEntriesToAclRequestAclEntries[];
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclEntries: 'AclEntries',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclEntries: { 'type': 'array', 'itemType': AddEntriesToAclRequestAclEntries },
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEntriesToAclResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEntriesToAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddEntriesToAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddEntriesToAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclRequest extends $tea.Model {
  aclId?: string;
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateAdditionalCertificatesFromListenerRequest extends $tea.Model {
  listenerId?: string;
  certificates?: DissociateAdditionalCertificatesFromListenerRequestCertificates[];
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      certificates: 'Certificates',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      certificates: { 'type': 'array', 'itemType': DissociateAdditionalCertificatesFromListenerRequestCertificates },
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateAdditionalCertificatesFromListenerResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateAdditionalCertificatesFromListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DissociateAdditionalCertificatesFromListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DissociateAdditionalCertificatesFromListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerEditionRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  loadBalancerId?: string;
  loadBalancerEdition?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerEdition: 'LoadBalancerEdition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      loadBalancerEdition: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerEditionResponseBody extends $tea.Model {
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

export class UpdateLoadBalancerEditionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateLoadBalancerEditionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateLoadBalancerEditionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersRequest extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  listenerIds?: string[];
  loadBalancerIds?: string[];
  listenerProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      listenerIds: 'ListenerIds',
      loadBalancerIds: 'LoadBalancerIds',
      listenerProtocol: 'ListenerProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      listenerIds: { 'type': 'array', 'itemType': 'string' },
      loadBalancerIds: { 'type': 'array', 'itemType': 'string' },
      listenerProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBody extends $tea.Model {
  listeners?: ListListenersResponseBodyListeners[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
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
      listeners: { 'type': 'array', 'itemType': ListListenersResponseBodyListeners },
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

export class ListListenersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListListenersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListListenersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclRelationsRequest extends $tea.Model {
  aclIds?: string[];
  static names(): { [key: string]: string } {
    return {
      aclIds: 'AclIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclRelationsResponseBody extends $tea.Model {
  aclRelations?: ListAclRelationsResponseBodyAclRelations[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclRelations: 'AclRelations',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclRelations: { 'type': 'array', 'itemType': ListAclRelationsResponseBodyAclRelations },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclRelationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAclRelationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAclRelationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRulesRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ruleIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ruleIds: 'RuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ruleIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRulesResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteListenerRequest extends $tea.Model {
  listenerId?: string;
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteListenerResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  resourceType?: string;
  category?: string;
  keyword?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      resourceType: 'ResourceType',
      category: 'Category',
      keyword: 'Keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      resourceType: 'string',
      category: 'string',
      keyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  tagKeys?: ListTagKeysResponseBodyTagKeys[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagKeys: 'TagKeys',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      tagKeys: { 'type': 'array', 'itemType': ListTagKeysResponseBodyTagKeys },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAdditionalCertificatesWithListenerRequest extends $tea.Model {
  listenerId?: string;
  certificates?: AssociateAdditionalCertificatesWithListenerRequestCertificates[];
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      certificates: 'Certificates',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      certificates: { 'type': 'array', 'itemType': AssociateAdditionalCertificatesWithListenerRequestCertificates },
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAdditionalCertificatesWithListenerResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAdditionalCertificatesWithListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssociateAdditionalCertificatesWithListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssociateAdditionalCertificatesWithListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHealthCheckTemplatesRequest extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  healthCheckTemplateIds?: string[];
  healthCheckTemplateNames?: string[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      healthCheckTemplateIds: 'HealthCheckTemplateIds',
      healthCheckTemplateNames: 'HealthCheckTemplateNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      healthCheckTemplateIds: { 'type': 'array', 'itemType': 'string' },
      healthCheckTemplateNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHealthCheckTemplatesResponseBody extends $tea.Model {
  healthCheckTemplates?: ListHealthCheckTemplatesResponseBodyHealthCheckTemplates[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheckTemplates: 'HealthCheckTemplates',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckTemplates: { 'type': 'array', 'itemType': ListHealthCheckTemplatesResponseBodyHealthCheckTemplates },
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

export class ListHealthCheckTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListHealthCheckTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListHealthCheckTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeRequest extends $tea.Model {
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBody extends $tea.Model {
  accessLogConfig?: GetLoadBalancerAttributeResponseBodyAccessLogConfig;
  addressAllocatedMode?: string;
  addressType?: string;
  bandwidthPackageId?: string;
  createTime?: string;
  DNSName?: string;
  deletionProtectionConfig?: GetLoadBalancerAttributeResponseBodyDeletionProtectionConfig;
  loadBalancerBillingConfig?: GetLoadBalancerAttributeResponseBodyLoadBalancerBillingConfig;
  loadBalancerBussinessStatus?: string;
  loadBalancerEdition?: string;
  loadBalancerId?: string;
  loadBalancerName?: string;
  loadBalancerOperationLocks?: GetLoadBalancerAttributeResponseBodyLoadBalancerOperationLocks[];
  loadBalancerStatus?: string;
  modificationProtectionConfig?: GetLoadBalancerAttributeResponseBodyModificationProtectionConfig;
  regionId?: string;
  requestId?: string;
  resourceGroupId?: string;
  tags?: GetLoadBalancerAttributeResponseBodyTags[];
  vpcId?: string;
  zoneMappings?: GetLoadBalancerAttributeResponseBodyZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      accessLogConfig: 'AccessLogConfig',
      addressAllocatedMode: 'AddressAllocatedMode',
      addressType: 'AddressType',
      bandwidthPackageId: 'BandwidthPackageId',
      createTime: 'CreateTime',
      DNSName: 'DNSName',
      deletionProtectionConfig: 'DeletionProtectionConfig',
      loadBalancerBillingConfig: 'LoadBalancerBillingConfig',
      loadBalancerBussinessStatus: 'LoadBalancerBussinessStatus',
      loadBalancerEdition: 'LoadBalancerEdition',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerOperationLocks: 'LoadBalancerOperationLocks',
      loadBalancerStatus: 'LoadBalancerStatus',
      modificationProtectionConfig: 'ModificationProtectionConfig',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      vpcId: 'VpcId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogConfig: GetLoadBalancerAttributeResponseBodyAccessLogConfig,
      addressAllocatedMode: 'string',
      addressType: 'string',
      bandwidthPackageId: 'string',
      createTime: 'string',
      DNSName: 'string',
      deletionProtectionConfig: GetLoadBalancerAttributeResponseBodyDeletionProtectionConfig,
      loadBalancerBillingConfig: GetLoadBalancerAttributeResponseBodyLoadBalancerBillingConfig,
      loadBalancerBussinessStatus: 'string',
      loadBalancerEdition: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerOperationLocks: { 'type': 'array', 'itemType': GetLoadBalancerAttributeResponseBodyLoadBalancerOperationLocks },
      loadBalancerStatus: 'string',
      modificationProtectionConfig: GetLoadBalancerAttributeResponseBodyModificationProtectionConfig,
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': GetLoadBalancerAttributeResponseBodyTags },
      vpcId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': GetLoadBalancerAttributeResponseBodyZoneMappings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLoadBalancerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLoadBalancerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesRequest extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  resourceType?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      resourceType: 'string',
      resourceId: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  tagValues?: string[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagValues: 'TagValues',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      tagValues: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagValuesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagValuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersRequest extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  zoneId?: string;
  loadBalancerStatus?: string;
  loadBalancerBussinessStatus?: string;
  loadBalancerIds?: string[];
  loadBalancerNames?: string[];
  vpcIds?: string[];
  tag?: ListLoadBalancersRequestTag[];
  addressType?: string;
  payType?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      zoneId: 'ZoneId',
      loadBalancerStatus: 'LoadBalancerStatus',
      loadBalancerBussinessStatus: 'LoadBalancerBussinessStatus',
      loadBalancerIds: 'LoadBalancerIds',
      loadBalancerNames: 'LoadBalancerNames',
      vpcIds: 'VpcIds',
      tag: 'Tag',
      addressType: 'AddressType',
      payType: 'PayType',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      zoneId: 'string',
      loadBalancerStatus: 'string',
      loadBalancerBussinessStatus: 'string',
      loadBalancerIds: { 'type': 'array', 'itemType': 'string' },
      loadBalancerNames: { 'type': 'array', 'itemType': 'string' },
      vpcIds: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListLoadBalancersRequestTag },
      addressType: 'string',
      payType: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersResponseBody extends $tea.Model {
  loadBalancers?: ListLoadBalancersResponseBodyLoadBalancers[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancers: 'LoadBalancers',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancers: { 'type': 'array', 'itemType': ListLoadBalancersResponseBodyLoadBalancers },
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

export class ListLoadBalancersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLoadBalancersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLoadBalancersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLoadBalancerAccessLogRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  loadBalancerId?: string;
  logProject?: string;
  logStore?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      logProject: 'LogProject',
      logStore: 'LogStore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      logProject: 'string',
      logStore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLoadBalancerAccessLogResponseBody extends $tea.Model {
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

export class EnableLoadBalancerAccessLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableLoadBalancerAccessLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableLoadBalancerAccessLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateAclsFromListenerRequest extends $tea.Model {
  aclIds?: string[];
  listenerId?: string;
  dryRun?: boolean;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      aclIds: 'AclIds',
      listenerId: 'ListenerId',
      dryRun: 'DryRun',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclIds: { 'type': 'array', 'itemType': 'string' },
      listenerId: 'string',
      dryRun: 'boolean',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateAclsFromListenerResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateAclsFromListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DissociateAclsFromListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DissociateAclsFromListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenerCertificatesRequest extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  listenerId?: string;
  certificateType?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      listenerId: 'ListenerId',
      certificateType: 'CertificateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      listenerId: 'string',
      certificateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenerCertificatesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  certificates?: ListListenerCertificatesResponseBodyCertificates[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      certificates: 'Certificates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      certificates: { 'type': 'array', 'itemType': ListListenerCertificatesResponseBodyCertificates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenerCertificatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListListenerCertificatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListListenerCertificatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclRequest extends $tea.Model {
  aclName?: string;
  clientToken?: string;
  dryRun?: boolean;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      aclName: 'AclName',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclName: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclResponseBody extends $tea.Model {
  aclId?: string;
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthCheckTemplateAttributeRequest extends $tea.Model {
  healthCheckTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      healthCheckTemplateId: 'HealthCheckTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckTemplateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthCheckTemplateAttributeResponseBody extends $tea.Model {
  healthCheckConnectPort?: number;
  healthCheckHost?: string;
  healthCheckCodes?: string[];
  healthCheckHttpVersion?: string;
  healthCheckTemplateId?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckPath?: string;
  healthCheckProtocol?: string;
  healthCheckTemplateName?: string;
  healthCheckTimeout?: number;
  healthyThreshold?: number;
  requestId?: string;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckHost: 'HealthCheckHost',
      healthCheckCodes: 'HealthCheckCodes',
      healthCheckHttpVersion: 'HealthCheckHttpVersion',
      healthCheckTemplateId: 'HealthCheckTemplateId',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckPath: 'HealthCheckPath',
      healthCheckProtocol: 'HealthCheckProtocol',
      healthCheckTemplateName: 'HealthCheckTemplateName',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthyThreshold: 'HealthyThreshold',
      requestId: 'RequestId',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckConnectPort: 'number',
      healthCheckHost: 'string',
      healthCheckCodes: { 'type': 'array', 'itemType': 'string' },
      healthCheckHttpVersion: 'string',
      healthCheckTemplateId: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckPath: 'string',
      healthCheckProtocol: 'string',
      healthCheckTemplateName: 'string',
      healthCheckTimeout: 'number',
      healthyThreshold: 'number',
      requestId: 'string',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthCheckTemplateAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetHealthCheckTemplateAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetHealthCheckTemplateAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecurityPolicyAttributeRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  securityPolicyId?: string;
  TLSVersions?: string[];
  ciphers?: string[];
  securityPolicyName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      securityPolicyId: 'SecurityPolicyId',
      TLSVersions: 'TLSVersions',
      ciphers: 'Ciphers',
      securityPolicyName: 'SecurityPolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      securityPolicyId: 'string',
      TLSVersions: { 'type': 'array', 'itemType': 'string' },
      ciphers: { 'type': 'array', 'itemType': 'string' },
      securityPolicyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecurityPolicyAttributeResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecurityPolicyAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSecurityPolicyAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSecurityPolicyAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPolicyRelationsRequest extends $tea.Model {
  securityPolicyIds?: string[];
  static names(): { [key: string]: string } {
    return {
      securityPolicyIds: 'SecurityPolicyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityPolicyIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPolicyRelationsResponseBody extends $tea.Model {
  requestId?: string;
  secrityPolicyRelations?: ListSecurityPolicyRelationsResponseBodySecrityPolicyRelations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      secrityPolicyRelations: 'SecrityPolicyRelations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      secrityPolicyRelations: { 'type': 'array', 'itemType': ListSecurityPolicyRelationsResponseBodySecrityPolicyRelations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPolicyRelationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSecurityPolicyRelationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSecurityPolicyRelationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerAttributeRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  loadBalancerId?: string;
  loadBalancerName?: string;
  modificationProtectionConfig?: UpdateLoadBalancerAttributeRequestModificationProtectionConfig;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      modificationProtectionConfig: 'ModificationProtectionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      modificationProtectionConfig: UpdateLoadBalancerAttributeRequestModificationProtectionConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerAttributeResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateLoadBalancerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateLoadBalancerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsynJobsRequest extends $tea.Model {
  jobIds?: string[];
  resourceType?: string;
  resourceIds?: string[];
  apiName?: string;
  beginTime?: number;
  endTime?: number;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      jobIds: 'JobIds',
      resourceType: 'ResourceType',
      resourceIds: 'ResourceIds',
      apiName: 'ApiName',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      apiName: 'string',
      beginTime: 'number',
      endTime: 'number',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsynJobsResponseBody extends $tea.Model {
  jobs?: ListAsynJobsResponseBodyJobs[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListAsynJobsResponseBodyJobs },
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

export class ListAsynJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAsynJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAsynJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequest extends $tea.Model {
  listenerId?: string;
  clientToken?: string;
  dryRun?: boolean;
  priority?: number;
  ruleActions?: CreateRuleRequestRuleActions[];
  ruleConditions?: CreateRuleRequestRuleConditions[];
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      priority: 'Priority',
      ruleActions: 'RuleActions',
      ruleConditions: 'RuleConditions',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      priority: 'number',
      ruleActions: { 'type': 'array', 'itemType': CreateRuleRequestRuleActions },
      ruleConditions: { 'type': 'array', 'itemType': CreateRuleRequestRuleConditions },
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveServersFromServerGroupRequest extends $tea.Model {
  serverGroupId?: string;
  servers?: RemoveServersFromServerGroupRequestServers[];
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
      servers: 'Servers',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
      servers: { 'type': 'array', 'itemType': RemoveServersFromServerGroupRequestServers },
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveServersFromServerGroupResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveServersFromServerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveServersFromServerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveServersFromServerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityPolicyRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  TLSVersions?: string[];
  resourceGroupId?: string;
  securityPolicyName?: string;
  ciphers?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      TLSVersions: 'TLSVersions',
      resourceGroupId: 'ResourceGroupId',
      securityPolicyName: 'SecurityPolicyName',
      ciphers: 'Ciphers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      TLSVersions: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      securityPolicyName: 'string',
      ciphers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityPolicyResponseBody extends $tea.Model {
  requestId?: string;
  securityPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityPolicyId: 'SecurityPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSecurityPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSecurityPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequest extends $tea.Model {
  ruleId?: string;
  clientToken?: string;
  dryRun?: boolean;
  ruleConditions?: UpdateRuleAttributeRequestRuleConditions[];
  ruleActions?: UpdateRuleAttributeRequestRuleActions[];
  ruleName?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ruleConditions: 'RuleConditions',
      ruleActions: 'RuleActions',
      ruleName: 'RuleName',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ruleConditions: { 'type': 'array', 'itemType': UpdateRuleAttributeRequestRuleConditions },
      ruleActions: { 'type': 'array', 'itemType': UpdateRuleAttributeRequestRuleActions },
      ruleName: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateRuleAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateRuleAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPoliciesRequest extends $tea.Model {
  resourceGroupId?: string;
  nextToken?: string;
  maxResults?: number;
  securityPolicyNames?: string[];
  securityPolicyIds?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      securityPolicyNames: 'SecurityPolicyNames',
      securityPolicyIds: 'SecurityPolicyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      securityPolicyNames: { 'type': 'array', 'itemType': 'string' },
      securityPolicyIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPoliciesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  securityPolicies?: ListSecurityPoliciesResponseBodySecurityPolicies[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      securityPolicies: 'SecurityPolicies',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      securityPolicies: { 'type': 'array', 'itemType': ListSecurityPoliciesResponseBodySecurityPolicies },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPoliciesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSecurityPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSecurityPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAclAttributeRequest extends $tea.Model {
  clientToken?: string;
  aclId?: string;
  aclName?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      aclId: 'AclId',
      aclName: 'AclName',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      aclId: 'string',
      aclName: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAclAttributeResponseBody extends $tea.Model {
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

export class UpdateAclAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAclAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAclAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDeletionProtectionRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDeletionProtectionResponseBody extends $tea.Model {
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

export class DisableDeletionProtectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableDeletionProtectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableDeletionProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopListenerRequest extends $tea.Model {
  listenerId?: string;
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopListenerResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequest extends $tea.Model {
  loadBalancerId?: string;
  clientToken?: string;
  dryRun?: boolean;
  listenerProtocol?: string;
  listenerPort?: number;
  listenerDescription?: string;
  requestTimeout?: number;
  idleTimeout?: number;
  gzipEnabled?: boolean;
  http2Enabled?: boolean;
  securityPolicyId?: string;
  XForwardedForConfig?: CreateListenerRequestXForwardedForConfig;
  quicConfig?: CreateListenerRequestQuicConfig;
  certificates?: CreateListenerRequestCertificates[];
  defaultActions?: CreateListenerRequestDefaultActions[];
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerProtocol: 'ListenerProtocol',
      listenerPort: 'ListenerPort',
      listenerDescription: 'ListenerDescription',
      requestTimeout: 'RequestTimeout',
      idleTimeout: 'IdleTimeout',
      gzipEnabled: 'GzipEnabled',
      http2Enabled: 'Http2Enabled',
      securityPolicyId: 'SecurityPolicyId',
      XForwardedForConfig: 'XForwardedForConfig',
      quicConfig: 'QuicConfig',
      certificates: 'Certificates',
      defaultActions: 'DefaultActions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      listenerProtocol: 'string',
      listenerPort: 'number',
      listenerDescription: 'string',
      requestTimeout: 'number',
      idleTimeout: 'number',
      gzipEnabled: 'boolean',
      http2Enabled: 'boolean',
      securityPolicyId: 'string',
      XForwardedForConfig: CreateListenerRequestXForwardedForConfig,
      quicConfig: CreateListenerRequestQuicConfig,
      certificates: { 'type': 'array', 'itemType': CreateListenerRequestCertificates },
      defaultActions: { 'type': 'array', 'itemType': CreateListenerRequestDefaultActions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerResponseBody extends $tea.Model {
  jobId?: string;
  listenerId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      listenerId: 'ListenerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      listenerId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  resourceType?: string;
  resourceId?: string[];
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
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
  headers: { [key: string]: string };
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupServersAttributeRequest extends $tea.Model {
  serverGroupId?: string;
  servers?: UpdateServerGroupServersAttributeRequestServers[];
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
      servers: 'Servers',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
      servers: { 'type': 'array', 'itemType': UpdateServerGroupServersAttributeRequestServers },
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupServersAttributeResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupServersAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateServerGroupServersAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateServerGroupServersAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartListenerRequest extends $tea.Model {
  listenerId?: string;
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartListenerResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequest extends $tea.Model {
  listenerId?: string;
  clientToken?: string;
  dryRun?: boolean;
  rules?: CreateRulesRequestRules[];
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      rules: { 'type': 'array', 'itemType': CreateRulesRequestRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  ruleIds?: CreateRulesResponseBodyRuleIds[];
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      ruleIds: 'RuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      ruleIds: { 'type': 'array', 'itemType': CreateRulesResponseBodyRuleIds },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclEntriesRequest extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  aclId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      aclId: 'AclId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      aclId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclEntriesResponseBody extends $tea.Model {
  aclEntries?: ListAclEntriesResponseBodyAclEntries[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      aclEntries: 'AclEntries',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntries: { 'type': 'array', 'itemType': ListAclEntriesResponseBodyAclEntries },
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

export class ListAclEntriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAclEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAclEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclsResponseBodyAcls extends $tea.Model {
  aclId?: string;
  aclName?: string;
  aclStatus?: string;
  addressIPVersion?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclName: 'AclName',
      aclStatus: 'AclStatus',
      addressIPVersion: 'AddressIPVersion',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclName: 'string',
      aclStatus: 'string',
      addressIPVersion: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
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

export class GetListenerAttributeResponseBodyAclConfigAclRelations extends $tea.Model {
  aclId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBodyAclConfig extends $tea.Model {
  aclRelations?: GetListenerAttributeResponseBodyAclConfigAclRelations[];
  aclType?: string;
  static names(): { [key: string]: string } {
    return {
      aclRelations: 'AclRelations',
      aclType: 'AclType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclRelations: { 'type': 'array', 'itemType': GetListenerAttributeResponseBodyAclConfigAclRelations },
      aclType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBodyCertificates extends $tea.Model {
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfigServerGroupTuples extends $tea.Model {
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfig extends $tea.Model {
  serverGroupTuples?: GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfigServerGroupTuples },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBodyDefaultActions extends $tea.Model {
  forwardGroupConfig?: GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      forwardGroupConfig: 'ForwardGroupConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardGroupConfig: GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBodyLogConfigAccessLogTracingConfig extends $tea.Model {
  tracingEnabled?: boolean;
  tracingSample?: number;
  tracingType?: string;
  static names(): { [key: string]: string } {
    return {
      tracingEnabled: 'TracingEnabled',
      tracingSample: 'TracingSample',
      tracingType: 'TracingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tracingEnabled: 'boolean',
      tracingSample: 'number',
      tracingType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBodyLogConfig extends $tea.Model {
  accessLogRecordCustomizedHeadersEnabled?: boolean;
  accessLogTracingConfig?: GetListenerAttributeResponseBodyLogConfigAccessLogTracingConfig;
  static names(): { [key: string]: string } {
    return {
      accessLogRecordCustomizedHeadersEnabled: 'AccessLogRecordCustomizedHeadersEnabled',
      accessLogTracingConfig: 'AccessLogTracingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogRecordCustomizedHeadersEnabled: 'boolean',
      accessLogTracingConfig: GetListenerAttributeResponseBodyLogConfigAccessLogTracingConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBodyQuicConfig extends $tea.Model {
  quicListenerId?: string;
  quicUpgradeEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      quicListenerId: 'QuicListenerId',
      quicUpgradeEnabled: 'QuicUpgradeEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quicListenerId: 'string',
      quicUpgradeEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBodyXForwardedForConfig extends $tea.Model {
  XForwardedForClientCertClientVerifyAlias?: string;
  XForwardedForClientCertClientVerifyEnabled?: boolean;
  XForwardedForClientCertFingerprintAlias?: string;
  XForwardedForClientCertFingerprintEnabled?: boolean;
  XForwardedForClientCertIssuerDNAlias?: string;
  XForwardedForClientCertIssuerDNEnabled?: boolean;
  XForwardedForClientCertSubjectDNAlias?: string;
  XForwardedForClientCertSubjectDNEnabled?: boolean;
  XForwardedForClientSrcPortEnabled?: boolean;
  XForwardedForEnabled?: boolean;
  XForwardedForProtoEnabled?: boolean;
  XForwardedForSLBIdEnabled?: boolean;
  XForwardedForSLBPortEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      XForwardedForClientCertClientVerifyAlias: 'XForwardedForClientCertClientVerifyAlias',
      XForwardedForClientCertClientVerifyEnabled: 'XForwardedForClientCertClientVerifyEnabled',
      XForwardedForClientCertFingerprintAlias: 'XForwardedForClientCertFingerprintAlias',
      XForwardedForClientCertFingerprintEnabled: 'XForwardedForClientCertFingerprintEnabled',
      XForwardedForClientCertIssuerDNAlias: 'XForwardedForClientCertIssuerDNAlias',
      XForwardedForClientCertIssuerDNEnabled: 'XForwardedForClientCertIssuerDNEnabled',
      XForwardedForClientCertSubjectDNAlias: 'XForwardedForClientCertSubjectDNAlias',
      XForwardedForClientCertSubjectDNEnabled: 'XForwardedForClientCertSubjectDNEnabled',
      XForwardedForClientSrcPortEnabled: 'XForwardedForClientSrcPortEnabled',
      XForwardedForEnabled: 'XForwardedForEnabled',
      XForwardedForProtoEnabled: 'XForwardedForProtoEnabled',
      XForwardedForSLBIdEnabled: 'XForwardedForSLBIdEnabled',
      XForwardedForSLBPortEnabled: 'XForwardedForSLBPortEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      XForwardedForClientCertClientVerifyAlias: 'string',
      XForwardedForClientCertClientVerifyEnabled: 'boolean',
      XForwardedForClientCertFingerprintAlias: 'string',
      XForwardedForClientCertFingerprintEnabled: 'boolean',
      XForwardedForClientCertIssuerDNAlias: 'string',
      XForwardedForClientCertIssuerDNEnabled: 'boolean',
      XForwardedForClientCertSubjectDNAlias: 'string',
      XForwardedForClientCertSubjectDNEnabled: 'boolean',
      XForwardedForClientSrcPortEnabled: 'boolean',
      XForwardedForEnabled: 'boolean',
      XForwardedForProtoEnabled: 'boolean',
      XForwardedForSLBIdEnabled: 'boolean',
      XForwardedForSLBPortEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupServersResponseBodyServers extends $tea.Model {
  description?: string;
  port?: number;
  serverId?: string;
  serverIp?: string;
  serverType?: string;
  status?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
      serverIp: 'ServerIp',
      serverType: 'ServerType',
      status: 'Status',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
      serverId: 'string',
      serverIp: 'string',
      serverType: 'string',
      status: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupsResponseBodyServerGroupsHealthCheckConfig extends $tea.Model {
  healthCheckConnectPort?: number;
  healthCheckEnabled?: boolean;
  healthCheckHost?: string;
  healthCheckCodes?: string[];
  healthCheckHttpVersion?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckPath?: string;
  healthCheckProtocol?: string;
  healthCheckTimeout?: number;
  healthyThreshold?: number;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckEnabled: 'HealthCheckEnabled',
      healthCheckHost: 'HealthCheckHost',
      healthCheckCodes: 'HealthCheckCodes',
      healthCheckHttpVersion: 'HealthCheckHttpVersion',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckPath: 'HealthCheckPath',
      healthCheckProtocol: 'HealthCheckProtocol',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthyThreshold: 'HealthyThreshold',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckConnectPort: 'number',
      healthCheckEnabled: 'boolean',
      healthCheckHost: 'string',
      healthCheckCodes: { 'type': 'array', 'itemType': 'string' },
      healthCheckHttpVersion: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckPath: 'string',
      healthCheckProtocol: 'string',
      healthCheckTimeout: 'number',
      healthyThreshold: 'number',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupsResponseBodyServerGroupsStickySessionConfig extends $tea.Model {
  cookie?: string;
  cookieTimeout?: number;
  stickySessionEnabled?: boolean;
  stickySessionType?: string;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      stickySessionEnabled: 'StickySessionEnabled',
      stickySessionType: 'StickySessionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      stickySessionEnabled: 'boolean',
      stickySessionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupsResponseBodyServerGroups extends $tea.Model {
  healthCheckConfig?: ListServerGroupsResponseBodyServerGroupsHealthCheckConfig;
  protocol?: string;
  resourceGroupId?: string;
  scheduler?: string;
  serverGroupId?: string;
  serverGroupName?: string;
  serverGroupStatus?: string;
  stickySessionConfig?: ListServerGroupsResponseBodyServerGroupsStickySessionConfig;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      healthCheckConfig: 'HealthCheckConfig',
      protocol: 'Protocol',
      resourceGroupId: 'ResourceGroupId',
      scheduler: 'Scheduler',
      serverGroupId: 'ServerGroupId',
      serverGroupName: 'ServerGroupName',
      serverGroupStatus: 'ServerGroupStatus',
      stickySessionConfig: 'StickySessionConfig',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckConfig: ListServerGroupsResponseBodyServerGroupsHealthCheckConfig,
      protocol: 'string',
      resourceGroupId: 'string',
      scheduler: 'string',
      serverGroupId: 'string',
      serverGroupName: 'string',
      serverGroupStatus: 'string',
      stickySessionConfig: ListServerGroupsResponseBodyServerGroupsStickySessionConfig,
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerAttributeRequestXForwardedForConfig extends $tea.Model {
  XForwardedForClientCertClientVerifyAlias?: string;
  XForwardedForClientCertClientVerifyEnabled?: boolean;
  XForwardedForClientCertFingerprintAlias?: string;
  XForwardedForClientCertFingerprintEnabled?: boolean;
  XForwardedForClientCertIssuerDNAlias?: string;
  XForwardedForClientCertIssuerDNEnabled?: boolean;
  XForwardedForClientCertSubjectDNAlias?: string;
  XForwardedForClientCertSubjectDNEnabled?: boolean;
  XForwardedForClientSrcPortEnabled?: boolean;
  XForwardedForEnabled?: boolean;
  XForwardedForProtoEnabled?: boolean;
  XForwardedForSLBIdEnabled?: boolean;
  XForwardedForSLBPortEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      XForwardedForClientCertClientVerifyAlias: 'XForwardedForClientCertClientVerifyAlias',
      XForwardedForClientCertClientVerifyEnabled: 'XForwardedForClientCertClientVerifyEnabled',
      XForwardedForClientCertFingerprintAlias: 'XForwardedForClientCertFingerprintAlias',
      XForwardedForClientCertFingerprintEnabled: 'XForwardedForClientCertFingerprintEnabled',
      XForwardedForClientCertIssuerDNAlias: 'XForwardedForClientCertIssuerDNAlias',
      XForwardedForClientCertIssuerDNEnabled: 'XForwardedForClientCertIssuerDNEnabled',
      XForwardedForClientCertSubjectDNAlias: 'XForwardedForClientCertSubjectDNAlias',
      XForwardedForClientCertSubjectDNEnabled: 'XForwardedForClientCertSubjectDNEnabled',
      XForwardedForClientSrcPortEnabled: 'XForwardedForClientSrcPortEnabled',
      XForwardedForEnabled: 'XForwardedForEnabled',
      XForwardedForProtoEnabled: 'XForwardedForProtoEnabled',
      XForwardedForSLBIdEnabled: 'XForwardedForSLBIdEnabled',
      XForwardedForSLBPortEnabled: 'XForwardedForSLBPortEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      XForwardedForClientCertClientVerifyAlias: 'string',
      XForwardedForClientCertClientVerifyEnabled: 'boolean',
      XForwardedForClientCertFingerprintAlias: 'string',
      XForwardedForClientCertFingerprintEnabled: 'boolean',
      XForwardedForClientCertIssuerDNAlias: 'string',
      XForwardedForClientCertIssuerDNEnabled: 'boolean',
      XForwardedForClientCertSubjectDNAlias: 'string',
      XForwardedForClientCertSubjectDNEnabled: 'boolean',
      XForwardedForClientSrcPortEnabled: 'boolean',
      XForwardedForEnabled: 'boolean',
      XForwardedForProtoEnabled: 'boolean',
      XForwardedForSLBIdEnabled: 'boolean',
      XForwardedForSLBPortEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerAttributeRequestQuicConfig extends $tea.Model {
  quicListenerId?: string;
  quicUpgradeEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      quicListenerId: 'QuicListenerId',
      quicUpgradeEnabled: 'QuicUpgradeEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quicListenerId: 'string',
      quicUpgradeEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerAttributeRequestCertificates extends $tea.Model {
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerAttributeRequestDefaultActionsForwardGroupConfigServerGroupTuples extends $tea.Model {
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerAttributeRequestDefaultActionsForwardGroupConfig extends $tea.Model {
  serverGroupTuples?: UpdateListenerAttributeRequestDefaultActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': UpdateListenerAttributeRequestDefaultActionsForwardGroupConfigServerGroupTuples },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerAttributeRequestDefaultActions extends $tea.Model {
  forwardGroupConfig?: UpdateListenerAttributeRequestDefaultActionsForwardGroupConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      forwardGroupConfig: 'ForwardGroupConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardGroupConfig: UpdateListenerAttributeRequestDefaultActionsForwardGroupConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerRequestModificationProtectionConfig extends $tea.Model {
  reason?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerRequestZoneMappings extends $tea.Model {
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerRequestLoadBalancerBillingConfig extends $tea.Model {
  payType?: string;
  static names(): { [key: string]: string } {
    return {
      payType: 'PayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupAttributeRequestHealthCheckConfig extends $tea.Model {
  healthCheckConnectPort?: number;
  healthCheckEnabled?: boolean;
  healthCheckHost?: string;
  healthCheckCodes?: string[];
  healthCheckHttpVersion?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckPath?: string;
  healthCheckProtocol?: string;
  healthCheckTimeout?: number;
  healthyThreshold?: number;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckEnabled: 'HealthCheckEnabled',
      healthCheckHost: 'HealthCheckHost',
      healthCheckCodes: 'HealthCheckCodes',
      healthCheckHttpVersion: 'HealthCheckHttpVersion',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckPath: 'HealthCheckPath',
      healthCheckProtocol: 'HealthCheckProtocol',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthyThreshold: 'HealthyThreshold',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckConnectPort: 'number',
      healthCheckEnabled: 'boolean',
      healthCheckHost: 'string',
      healthCheckCodes: { 'type': 'array', 'itemType': 'string' },
      healthCheckHttpVersion: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckPath: 'string',
      healthCheckProtocol: 'string',
      healthCheckTimeout: 'number',
      healthyThreshold: 'number',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupAttributeRequestStickySessionConfig extends $tea.Model {
  cookie?: string;
  cookieTimeout?: number;
  stickySessionEnabled?: boolean;
  stickySessionType?: string;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      stickySessionEnabled: 'StickySessionEnabled',
      stickySessionType: 'StickySessionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      stickySessionEnabled: 'boolean',
      stickySessionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerGroupRequestHealthCheckConfig extends $tea.Model {
  healthCheckConnectPort?: number;
  healthCheckEnabled?: boolean;
  healthCheckHost?: string;
  healthCheckCodes?: string[];
  healthCheckHttpVersion?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckPath?: string;
  healthCheckProtocol?: string;
  healthCheckTimeout?: number;
  healthyThreshold?: number;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckEnabled: 'HealthCheckEnabled',
      healthCheckHost: 'HealthCheckHost',
      healthCheckCodes: 'HealthCheckCodes',
      healthCheckHttpVersion: 'HealthCheckHttpVersion',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckPath: 'HealthCheckPath',
      healthCheckProtocol: 'HealthCheckProtocol',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthyThreshold: 'HealthyThreshold',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckConnectPort: 'number',
      healthCheckEnabled: 'boolean',
      healthCheckHost: 'string',
      healthCheckCodes: { 'type': 'array', 'itemType': 'string' },
      healthCheckHttpVersion: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckPath: 'string',
      healthCheckProtocol: 'string',
      healthCheckTimeout: 'number',
      healthyThreshold: 'number',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerGroupRequestStickySessionConfig extends $tea.Model {
  cookie?: string;
  cookieTimeout?: number;
  stickySessionEnabled?: boolean;
  stickySessionType?: string;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      stickySessionEnabled: 'StickySessionEnabled',
      stickySessionType: 'StickySessionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      stickySessionEnabled: 'boolean',
      stickySessionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleActionsFixedResponseConfig extends $tea.Model {
  content?: string;
  contentType?: string;
  httpCode?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      httpCode: 'HttpCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      httpCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleActionsForwardGroupConfigServerGroupTuples extends $tea.Model {
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleActionsForwardGroupConfig extends $tea.Model {
  serverGroupTuples?: ListRulesResponseBodyRulesRuleActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': ListRulesResponseBodyRulesRuleActionsForwardGroupConfigServerGroupTuples },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleActionsInsertHeaderConfig extends $tea.Model {
  key?: string;
  value?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleActionsRedirectConfig extends $tea.Model {
  host?: string;
  httpCode?: string;
  path?: string;
  port?: string;
  protocol?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      httpCode: 'HttpCode',
      path: 'Path',
      port: 'Port',
      protocol: 'Protocol',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      httpCode: 'string',
      path: 'string',
      port: 'string',
      protocol: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleActionsRewriteConfig extends $tea.Model {
  host?: string;
  path?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      path: 'Path',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      path: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleActions extends $tea.Model {
  fixedResponseConfig?: ListRulesResponseBodyRulesRuleActionsFixedResponseConfig;
  forwardGroupConfig?: ListRulesResponseBodyRulesRuleActionsForwardGroupConfig;
  insertHeaderConfig?: ListRulesResponseBodyRulesRuleActionsInsertHeaderConfig;
  order?: number;
  redirectConfig?: ListRulesResponseBodyRulesRuleActionsRedirectConfig;
  rewriteConfig?: ListRulesResponseBodyRulesRuleActionsRewriteConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fixedResponseConfig: 'FixedResponseConfig',
      forwardGroupConfig: 'ForwardGroupConfig',
      insertHeaderConfig: 'InsertHeaderConfig',
      order: 'Order',
      redirectConfig: 'RedirectConfig',
      rewriteConfig: 'RewriteConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fixedResponseConfig: ListRulesResponseBodyRulesRuleActionsFixedResponseConfig,
      forwardGroupConfig: ListRulesResponseBodyRulesRuleActionsForwardGroupConfig,
      insertHeaderConfig: ListRulesResponseBodyRulesRuleActionsInsertHeaderConfig,
      order: 'number',
      redirectConfig: ListRulesResponseBodyRulesRuleActionsRedirectConfig,
      rewriteConfig: ListRulesResponseBodyRulesRuleActionsRewriteConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleConditionsCookieConfigValues extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleConditionsCookieConfig extends $tea.Model {
  values?: ListRulesResponseBodyRulesRuleConditionsCookieConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': ListRulesResponseBodyRulesRuleConditionsCookieConfigValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleConditionsHeaderConfig extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleConditionsHostConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleConditionsMethodConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleConditionsPathConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleConditionsQueryStringConfigValues extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleConditionsQueryStringConfig extends $tea.Model {
  values?: ListRulesResponseBodyRulesRuleConditionsQueryStringConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': ListRulesResponseBodyRulesRuleConditionsQueryStringConfigValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleConditions extends $tea.Model {
  cookieConfig?: ListRulesResponseBodyRulesRuleConditionsCookieConfig;
  headerConfig?: ListRulesResponseBodyRulesRuleConditionsHeaderConfig;
  hostConfig?: ListRulesResponseBodyRulesRuleConditionsHostConfig;
  methodConfig?: ListRulesResponseBodyRulesRuleConditionsMethodConfig;
  pathConfig?: ListRulesResponseBodyRulesRuleConditionsPathConfig;
  queryStringConfig?: ListRulesResponseBodyRulesRuleConditionsQueryStringConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cookieConfig: 'CookieConfig',
      headerConfig: 'HeaderConfig',
      hostConfig: 'HostConfig',
      methodConfig: 'MethodConfig',
      pathConfig: 'PathConfig',
      queryStringConfig: 'QueryStringConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookieConfig: ListRulesResponseBodyRulesRuleConditionsCookieConfig,
      headerConfig: ListRulesResponseBodyRulesRuleConditionsHeaderConfig,
      hostConfig: ListRulesResponseBodyRulesRuleConditionsHostConfig,
      methodConfig: ListRulesResponseBodyRulesRuleConditionsMethodConfig,
      pathConfig: ListRulesResponseBodyRulesRuleConditionsPathConfig,
      queryStringConfig: ListRulesResponseBodyRulesRuleConditionsQueryStringConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRules extends $tea.Model {
  listenerId?: string;
  loadBalancerId?: string;
  priority?: number;
  ruleActions?: ListRulesResponseBodyRulesRuleActions[];
  ruleConditions?: ListRulesResponseBodyRulesRuleConditions[];
  ruleId?: string;
  ruleName?: string;
  ruleStatus?: string;
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      loadBalancerId: 'LoadBalancerId',
      priority: 'Priority',
      ruleActions: 'RuleActions',
      ruleConditions: 'RuleConditions',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleStatus: 'RuleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      loadBalancerId: 'string',
      priority: 'number',
      ruleActions: { 'type': 'array', 'itemType': ListRulesResponseBodyRulesRuleActions },
      ruleConditions: { 'type': 'array', 'itemType': ListRulesResponseBodyRulesRuleConditions },
      ruleId: 'string',
      ruleName: 'string',
      ruleStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZones extends $tea.Model {
  localName?: string;
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

export class AddServersToServerGroupRequestServers extends $tea.Model {
  description?: string;
  port?: number;
  serverId?: string;
  serverIp?: string;
  serverType?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
      serverIp: 'ServerIp',
      serverType: 'ServerType',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
      serverId: 'string',
      serverIp: 'string',
      serverType: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerLogConfigRequestAccessLogTracingConfig extends $tea.Model {
  tracingEnabled?: boolean;
  tracingSample?: number;
  tracingType?: string;
  static names(): { [key: string]: string } {
    return {
      tracingEnabled: 'TracingEnabled',
      tracingSample: 'TracingSample',
      tracingType: 'TracingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tracingEnabled: 'boolean',
      tracingSample: 'number',
      tracingType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnTagResourcesRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemSecurityPoliciesResponseBodySecurityPolicies extends $tea.Model {
  ciphers?: string[];
  securityPolicyId?: string;
  TLSVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      securityPolicyId: 'SecurityPolicyId',
      TLSVersions: 'TLSVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: { 'type': 'array', 'itemType': 'string' },
      securityPolicyId: 'string',
      TLSVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEntriesToAclRequestAclEntries extends $tea.Model {
  description?: string;
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      entry: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateAdditionalCertificatesFromListenerRequestCertificates extends $tea.Model {
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersDefaultActionsForwardGroupConfigServerGroupTuples extends $tea.Model {
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersDefaultActionsForwardGroupConfig extends $tea.Model {
  serverGroupTuples?: ListListenersResponseBodyListenersDefaultActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': ListListenersResponseBodyListenersDefaultActionsForwardGroupConfigServerGroupTuples },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersDefaultActions extends $tea.Model {
  forwardGroupConfig?: ListListenersResponseBodyListenersDefaultActionsForwardGroupConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      forwardGroupConfig: 'ForwardGroupConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardGroupConfig: ListListenersResponseBodyListenersDefaultActionsForwardGroupConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersLogConfigAccessLogTracingConfig extends $tea.Model {
  tracingEnabled?: boolean;
  tracingSample?: number;
  tracingType?: string;
  static names(): { [key: string]: string } {
    return {
      tracingEnabled: 'TracingEnabled',
      tracingSample: 'TracingSample',
      tracingType: 'TracingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tracingEnabled: 'boolean',
      tracingSample: 'number',
      tracingType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersLogConfig extends $tea.Model {
  accessLogRecordCustomizedHeadersEnabled?: boolean;
  accessLogTracingConfig?: ListListenersResponseBodyListenersLogConfigAccessLogTracingConfig;
  static names(): { [key: string]: string } {
    return {
      accessLogRecordCustomizedHeadersEnabled: 'AccessLogRecordCustomizedHeadersEnabled',
      accessLogTracingConfig: 'AccessLogTracingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogRecordCustomizedHeadersEnabled: 'boolean',
      accessLogTracingConfig: ListListenersResponseBodyListenersLogConfigAccessLogTracingConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersQuicConfig extends $tea.Model {
  quicListenerId?: string;
  quicUpgradeEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      quicListenerId: 'QuicListenerId',
      quicUpgradeEnabled: 'QuicUpgradeEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quicListenerId: 'string',
      quicUpgradeEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersXForwardedForConfig extends $tea.Model {
  XForwardedForClientCertClientVerifyAlias?: string;
  XForwardedForClientCertClientVerifyEnabled?: boolean;
  XForwardedForClientCertFingerprintAlias?: string;
  XForwardedForClientCertFingerprintEnabled?: boolean;
  XForwardedForClientCertIssuerDNAlias?: string;
  XForwardedForClientCertIssuerDNEnabled?: boolean;
  XForwardedForClientCertSubjectDNAlias?: string;
  XForwardedForClientCertSubjectDNEnabled?: boolean;
  XForwardedForClientSrcPortEnabled?: boolean;
  XForwardedForEnabled?: boolean;
  XForwardedForProtoEnabled?: boolean;
  XForwardedForSLBIdEnabled?: boolean;
  XForwardedForSLBPortEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      XForwardedForClientCertClientVerifyAlias: 'XForwardedForClientCertClientVerifyAlias',
      XForwardedForClientCertClientVerifyEnabled: 'XForwardedForClientCertClientVerifyEnabled',
      XForwardedForClientCertFingerprintAlias: 'XForwardedForClientCertFingerprintAlias',
      XForwardedForClientCertFingerprintEnabled: 'XForwardedForClientCertFingerprintEnabled',
      XForwardedForClientCertIssuerDNAlias: 'XForwardedForClientCertIssuerDNAlias',
      XForwardedForClientCertIssuerDNEnabled: 'XForwardedForClientCertIssuerDNEnabled',
      XForwardedForClientCertSubjectDNAlias: 'XForwardedForClientCertSubjectDNAlias',
      XForwardedForClientCertSubjectDNEnabled: 'XForwardedForClientCertSubjectDNEnabled',
      XForwardedForClientSrcPortEnabled: 'XForwardedForClientSrcPortEnabled',
      XForwardedForEnabled: 'XForwardedForEnabled',
      XForwardedForProtoEnabled: 'XForwardedForProtoEnabled',
      XForwardedForSLBIdEnabled: 'XForwardedForSLBIdEnabled',
      XForwardedForSLBPortEnabled: 'XForwardedForSLBPortEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      XForwardedForClientCertClientVerifyAlias: 'string',
      XForwardedForClientCertClientVerifyEnabled: 'boolean',
      XForwardedForClientCertFingerprintAlias: 'string',
      XForwardedForClientCertFingerprintEnabled: 'boolean',
      XForwardedForClientCertIssuerDNAlias: 'string',
      XForwardedForClientCertIssuerDNEnabled: 'boolean',
      XForwardedForClientCertSubjectDNAlias: 'string',
      XForwardedForClientCertSubjectDNEnabled: 'boolean',
      XForwardedForClientSrcPortEnabled: 'boolean',
      XForwardedForEnabled: 'boolean',
      XForwardedForProtoEnabled: 'boolean',
      XForwardedForSLBIdEnabled: 'boolean',
      XForwardedForSLBPortEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListeners extends $tea.Model {
  defaultActions?: ListListenersResponseBodyListenersDefaultActions[];
  gzipEnabled?: boolean;
  http2Enabled?: boolean;
  idleTimeout?: number;
  listenerDescription?: string;
  listenerId?: string;
  listenerPort?: number;
  listenerProtocol?: string;
  listenerStatus?: string;
  loadBalancerId?: string;
  logConfig?: ListListenersResponseBodyListenersLogConfig;
  quicConfig?: ListListenersResponseBodyListenersQuicConfig;
  requestTimeout?: number;
  securityPolicyId?: string;
  XForwardedForConfig?: ListListenersResponseBodyListenersXForwardedForConfig;
  static names(): { [key: string]: string } {
    return {
      defaultActions: 'DefaultActions',
      gzipEnabled: 'GzipEnabled',
      http2Enabled: 'Http2Enabled',
      idleTimeout: 'IdleTimeout',
      listenerDescription: 'ListenerDescription',
      listenerId: 'ListenerId',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      listenerStatus: 'ListenerStatus',
      loadBalancerId: 'LoadBalancerId',
      logConfig: 'LogConfig',
      quicConfig: 'QuicConfig',
      requestTimeout: 'RequestTimeout',
      securityPolicyId: 'SecurityPolicyId',
      XForwardedForConfig: 'XForwardedForConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultActions: { 'type': 'array', 'itemType': ListListenersResponseBodyListenersDefaultActions },
      gzipEnabled: 'boolean',
      http2Enabled: 'boolean',
      idleTimeout: 'number',
      listenerDescription: 'string',
      listenerId: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      listenerStatus: 'string',
      loadBalancerId: 'string',
      logConfig: ListListenersResponseBodyListenersLogConfig,
      quicConfig: ListListenersResponseBodyListenersQuicConfig,
      requestTimeout: 'number',
      securityPolicyId: 'string',
      XForwardedForConfig: ListListenersResponseBodyListenersXForwardedForConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclRelationsResponseBodyAclRelationsRelatedListeners extends $tea.Model {
  listenerId?: string;
  listenerPort?: number;
  listenerProtocol?: string;
  loadBalancerId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclRelationsResponseBodyAclRelations extends $tea.Model {
  aclId?: string;
  relatedListeners?: ListAclRelationsResponseBodyAclRelationsRelatedListeners[];
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      relatedListeners: 'RelatedListeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      relatedListeners: { 'type': 'array', 'itemType': ListAclRelationsResponseBodyAclRelationsRelatedListeners },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBodyTagKeys extends $tea.Model {
  category?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAdditionalCertificatesWithListenerRequestCertificates extends $tea.Model {
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHealthCheckTemplatesResponseBodyHealthCheckTemplates extends $tea.Model {
  healthCheckConnectPort?: number;
  healthCheckHost?: string;
  healthCheckCodes?: string[];
  healthCheckHttpVersion?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckPath?: string;
  healthCheckProtocol?: string;
  healthCheckTemplateId?: string;
  healthCheckTemplateName?: string;
  healthCheckTimeout?: number;
  healthyThreshold?: number;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckHost: 'HealthCheckHost',
      healthCheckCodes: 'HealthCheckCodes',
      healthCheckHttpVersion: 'HealthCheckHttpVersion',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckPath: 'HealthCheckPath',
      healthCheckProtocol: 'HealthCheckProtocol',
      healthCheckTemplateId: 'HealthCheckTemplateId',
      healthCheckTemplateName: 'HealthCheckTemplateName',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthyThreshold: 'HealthyThreshold',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckConnectPort: 'number',
      healthCheckHost: 'string',
      healthCheckCodes: { 'type': 'array', 'itemType': 'string' },
      healthCheckHttpVersion: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckPath: 'string',
      healthCheckProtocol: 'string',
      healthCheckTemplateId: 'string',
      healthCheckTemplateName: 'string',
      healthCheckTimeout: 'number',
      healthyThreshold: 'number',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyAccessLogConfig extends $tea.Model {
  logProject?: string;
  logStore?: string;
  static names(): { [key: string]: string } {
    return {
      logProject: 'LogProject',
      logStore: 'LogStore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logProject: 'string',
      logStore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyDeletionProtectionConfig extends $tea.Model {
  enabled?: boolean;
  enabledTime?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      enabledTime: 'EnabledTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      enabledTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyLoadBalancerBillingConfig extends $tea.Model {
  payType?: string;
  static names(): { [key: string]: string } {
    return {
      payType: 'PayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyLoadBalancerOperationLocks extends $tea.Model {
  lockReason?: string;
  lockType?: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
      lockType: 'LockType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
      lockType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyModificationProtectionConfig extends $tea.Model {
  reason?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyTags extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyZoneMappingsLoadBalancerAddresses extends $tea.Model {
  address?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyZoneMappings extends $tea.Model {
  loadBalancerAddresses?: GetLoadBalancerAttributeResponseBodyZoneMappingsLoadBalancerAddresses[];
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerAddresses: 'LoadBalancerAddresses',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerAddresses: { 'type': 'array', 'itemType': GetLoadBalancerAttributeResponseBodyZoneMappingsLoadBalancerAddresses },
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersResponseBodyLoadBalancersAccessLogConfig extends $tea.Model {
  logProject?: string;
  logStore?: string;
  static names(): { [key: string]: string } {
    return {
      logProject: 'LogProject',
      logStore: 'LogStore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logProject: 'string',
      logStore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersResponseBodyLoadBalancersDeletionProtectionConfig extends $tea.Model {
  enabled?: boolean;
  enabledTime?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      enabledTime: 'EnabledTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      enabledTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersResponseBodyLoadBalancersLoadBalancerBillingConfig extends $tea.Model {
  payType?: string;
  static names(): { [key: string]: string } {
    return {
      payType: 'PayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersResponseBodyLoadBalancersLoadBalancerOperationLocks extends $tea.Model {
  lockReason?: string;
  lockType?: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
      lockType: 'LockType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
      lockType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersResponseBodyLoadBalancersModificationProtectionConfig extends $tea.Model {
  reason?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersResponseBodyLoadBalancersTags extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersResponseBodyLoadBalancers extends $tea.Model {
  accessLogConfig?: ListLoadBalancersResponseBodyLoadBalancersAccessLogConfig;
  addressAllocatedMode?: string;
  addressType?: string;
  bandwidthPackageId?: string;
  createTime?: string;
  DNSName?: string;
  deletionProtectionConfig?: ListLoadBalancersResponseBodyLoadBalancersDeletionProtectionConfig;
  loadBalancerBillingConfig?: ListLoadBalancersResponseBodyLoadBalancersLoadBalancerBillingConfig;
  loadBalancerBussinessStatus?: string;
  loadBalancerEdition?: string;
  loadBalancerId?: string;
  loadBalancerName?: string;
  loadBalancerOperationLocks?: ListLoadBalancersResponseBodyLoadBalancersLoadBalancerOperationLocks[];
  loadBalancerStatus?: string;
  modificationProtectionConfig?: ListLoadBalancersResponseBodyLoadBalancersModificationProtectionConfig;
  resourceGroupId?: string;
  tags?: ListLoadBalancersResponseBodyLoadBalancersTags[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessLogConfig: 'AccessLogConfig',
      addressAllocatedMode: 'AddressAllocatedMode',
      addressType: 'AddressType',
      bandwidthPackageId: 'BandwidthPackageId',
      createTime: 'CreateTime',
      DNSName: 'DNSName',
      deletionProtectionConfig: 'DeletionProtectionConfig',
      loadBalancerBillingConfig: 'LoadBalancerBillingConfig',
      loadBalancerBussinessStatus: 'LoadBalancerBussinessStatus',
      loadBalancerEdition: 'LoadBalancerEdition',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerOperationLocks: 'LoadBalancerOperationLocks',
      loadBalancerStatus: 'LoadBalancerStatus',
      modificationProtectionConfig: 'ModificationProtectionConfig',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogConfig: ListLoadBalancersResponseBodyLoadBalancersAccessLogConfig,
      addressAllocatedMode: 'string',
      addressType: 'string',
      bandwidthPackageId: 'string',
      createTime: 'string',
      DNSName: 'string',
      deletionProtectionConfig: ListLoadBalancersResponseBodyLoadBalancersDeletionProtectionConfig,
      loadBalancerBillingConfig: ListLoadBalancersResponseBodyLoadBalancersLoadBalancerBillingConfig,
      loadBalancerBussinessStatus: 'string',
      loadBalancerEdition: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerOperationLocks: { 'type': 'array', 'itemType': ListLoadBalancersResponseBodyLoadBalancersLoadBalancerOperationLocks },
      loadBalancerStatus: 'string',
      modificationProtectionConfig: ListLoadBalancersResponseBodyLoadBalancersModificationProtectionConfig,
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListLoadBalancersResponseBodyLoadBalancersTags },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenerCertificatesResponseBodyCertificates extends $tea.Model {
  certificateId?: string;
  isDefault?: boolean;
  status?: string;
  certificateType?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      isDefault: 'IsDefault',
      status: 'Status',
      certificateType: 'CertificateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      isDefault: 'boolean',
      status: 'string',
      certificateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPolicyRelationsResponseBodySecrityPolicyRelationsRelatedListeners extends $tea.Model {
  listenerId?: string;
  listenerPort?: number;
  listenerProtocol?: string;
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPolicyRelationsResponseBodySecrityPolicyRelations extends $tea.Model {
  relatedListeners?: ListSecurityPolicyRelationsResponseBodySecrityPolicyRelationsRelatedListeners[];
  securityPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      relatedListeners: 'RelatedListeners',
      securityPolicyId: 'SecurityPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relatedListeners: { 'type': 'array', 'itemType': ListSecurityPolicyRelationsResponseBodySecrityPolicyRelationsRelatedListeners },
      securityPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerAttributeRequestModificationProtectionConfig extends $tea.Model {
  reason?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsynJobsResponseBodyJobs extends $tea.Model {
  apiName?: string;
  createTime?: number;
  errorCode?: string;
  errorMessage?: string;
  id?: string;
  modifyTime?: number;
  operateType?: string;
  resourceId?: string;
  resourceType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      id: 'Id',
      modifyTime: 'ModifyTime',
      operateType: 'OperateType',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      createTime: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      id: 'string',
      modifyTime: 'number',
      operateType: 'string',
      resourceId: 'string',
      resourceType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleActionsFixedResponseConfig extends $tea.Model {
  content?: string;
  contentType?: string;
  httpCode?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      httpCode: 'HttpCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      httpCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleActionsForwardGroupConfigServerGroupTuples extends $tea.Model {
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleActionsForwardGroupConfig extends $tea.Model {
  serverGroupTuples?: CreateRuleRequestRuleActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': CreateRuleRequestRuleActionsForwardGroupConfigServerGroupTuples },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleActionsInsertHeaderConfig extends $tea.Model {
  key?: string;
  value?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleActionsRedirectConfig extends $tea.Model {
  host?: string;
  httpCode?: string;
  path?: string;
  port?: string;
  protocol?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      httpCode: 'HttpCode',
      path: 'Path',
      port: 'Port',
      protocol: 'Protocol',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      httpCode: 'string',
      path: 'string',
      port: 'string',
      protocol: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleActionsRewriteConfig extends $tea.Model {
  host?: string;
  path?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      path: 'Path',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      path: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleActions extends $tea.Model {
  fixedResponseConfig?: CreateRuleRequestRuleActionsFixedResponseConfig;
  forwardGroupConfig?: CreateRuleRequestRuleActionsForwardGroupConfig;
  insertHeaderConfig?: CreateRuleRequestRuleActionsInsertHeaderConfig;
  order?: number;
  redirectConfig?: CreateRuleRequestRuleActionsRedirectConfig;
  rewriteConfig?: CreateRuleRequestRuleActionsRewriteConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fixedResponseConfig: 'FixedResponseConfig',
      forwardGroupConfig: 'ForwardGroupConfig',
      insertHeaderConfig: 'InsertHeaderConfig',
      order: 'Order',
      redirectConfig: 'RedirectConfig',
      rewriteConfig: 'RewriteConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fixedResponseConfig: CreateRuleRequestRuleActionsFixedResponseConfig,
      forwardGroupConfig: CreateRuleRequestRuleActionsForwardGroupConfig,
      insertHeaderConfig: CreateRuleRequestRuleActionsInsertHeaderConfig,
      order: 'number',
      redirectConfig: CreateRuleRequestRuleActionsRedirectConfig,
      rewriteConfig: CreateRuleRequestRuleActionsRewriteConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleConditionsCookieConfigValues extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleConditionsCookieConfig extends $tea.Model {
  values?: CreateRuleRequestRuleConditionsCookieConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': CreateRuleRequestRuleConditionsCookieConfigValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleConditionsHeaderConfig extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleConditionsHostConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleConditionsMethodConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleConditionsPathConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleConditionsQueryStringConfigValues extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleConditionsQueryStringConfig extends $tea.Model {
  values?: CreateRuleRequestRuleConditionsQueryStringConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': CreateRuleRequestRuleConditionsQueryStringConfigValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleConditions extends $tea.Model {
  cookieConfig?: CreateRuleRequestRuleConditionsCookieConfig;
  headerConfig?: CreateRuleRequestRuleConditionsHeaderConfig;
  hostConfig?: CreateRuleRequestRuleConditionsHostConfig;
  methodConfig?: CreateRuleRequestRuleConditionsMethodConfig;
  pathConfig?: CreateRuleRequestRuleConditionsPathConfig;
  queryStringConfig?: CreateRuleRequestRuleConditionsQueryStringConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cookieConfig: 'CookieConfig',
      headerConfig: 'HeaderConfig',
      hostConfig: 'HostConfig',
      methodConfig: 'MethodConfig',
      pathConfig: 'PathConfig',
      queryStringConfig: 'QueryStringConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookieConfig: CreateRuleRequestRuleConditionsCookieConfig,
      headerConfig: CreateRuleRequestRuleConditionsHeaderConfig,
      hostConfig: CreateRuleRequestRuleConditionsHostConfig,
      methodConfig: CreateRuleRequestRuleConditionsMethodConfig,
      pathConfig: CreateRuleRequestRuleConditionsPathConfig,
      queryStringConfig: CreateRuleRequestRuleConditionsQueryStringConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveServersFromServerGroupRequestServers extends $tea.Model {
  port?: number;
  serverId?: string;
  serverIp?: string;
  serverType?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      serverId: 'ServerId',
      serverIp: 'ServerIp',
      serverType: 'ServerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      serverId: 'string',
      serverIp: 'string',
      serverType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  localName?: string;
  regionEndpoint?: string;
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

export class UpdateRuleAttributeRequestRuleConditionsCookieConfigValues extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleConditionsCookieConfig extends $tea.Model {
  values?: UpdateRuleAttributeRequestRuleConditionsCookieConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': UpdateRuleAttributeRequestRuleConditionsCookieConfigValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleConditionsHeaderConfig extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleConditionsHostConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleConditionsMethodConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleConditionsPathConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleConditionsQueryStringConfigValues extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleConditionsQueryStringConfig extends $tea.Model {
  values?: UpdateRuleAttributeRequestRuleConditionsQueryStringConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': UpdateRuleAttributeRequestRuleConditionsQueryStringConfigValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleConditions extends $tea.Model {
  cookieConfig?: UpdateRuleAttributeRequestRuleConditionsCookieConfig;
  headerConfig?: UpdateRuleAttributeRequestRuleConditionsHeaderConfig;
  hostConfig?: UpdateRuleAttributeRequestRuleConditionsHostConfig;
  methodConfig?: UpdateRuleAttributeRequestRuleConditionsMethodConfig;
  pathConfig?: UpdateRuleAttributeRequestRuleConditionsPathConfig;
  queryStringConfig?: UpdateRuleAttributeRequestRuleConditionsQueryStringConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cookieConfig: 'CookieConfig',
      headerConfig: 'HeaderConfig',
      hostConfig: 'HostConfig',
      methodConfig: 'MethodConfig',
      pathConfig: 'PathConfig',
      queryStringConfig: 'QueryStringConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookieConfig: UpdateRuleAttributeRequestRuleConditionsCookieConfig,
      headerConfig: UpdateRuleAttributeRequestRuleConditionsHeaderConfig,
      hostConfig: UpdateRuleAttributeRequestRuleConditionsHostConfig,
      methodConfig: UpdateRuleAttributeRequestRuleConditionsMethodConfig,
      pathConfig: UpdateRuleAttributeRequestRuleConditionsPathConfig,
      queryStringConfig: UpdateRuleAttributeRequestRuleConditionsQueryStringConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleActionsFixedResponseConfig extends $tea.Model {
  content?: string;
  contentType?: string;
  httpCode?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      httpCode: 'HttpCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      httpCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleActionsForwardGroupConfigServerGroupTuples extends $tea.Model {
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleActionsForwardGroupConfig extends $tea.Model {
  serverGroupTuples?: UpdateRuleAttributeRequestRuleActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': UpdateRuleAttributeRequestRuleActionsForwardGroupConfigServerGroupTuples },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleActionsInsertHeaderConfig extends $tea.Model {
  key?: string;
  value?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleActionsRedirectConfig extends $tea.Model {
  host?: string;
  httpCode?: string;
  path?: string;
  port?: string;
  protocol?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      httpCode: 'HttpCode',
      path: 'Path',
      port: 'Port',
      protocol: 'Protocol',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      httpCode: 'string',
      path: 'string',
      port: 'string',
      protocol: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleActionsRewriteConfig extends $tea.Model {
  host?: string;
  path?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      path: 'Path',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      path: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleActions extends $tea.Model {
  fixedResponseConfig?: UpdateRuleAttributeRequestRuleActionsFixedResponseConfig;
  forwardGroupConfig?: UpdateRuleAttributeRequestRuleActionsForwardGroupConfig;
  insertHeaderConfig?: UpdateRuleAttributeRequestRuleActionsInsertHeaderConfig;
  order?: number;
  redirectConfig?: UpdateRuleAttributeRequestRuleActionsRedirectConfig;
  rewriteConfig?: UpdateRuleAttributeRequestRuleActionsRewriteConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fixedResponseConfig: 'FixedResponseConfig',
      forwardGroupConfig: 'ForwardGroupConfig',
      insertHeaderConfig: 'InsertHeaderConfig',
      order: 'Order',
      redirectConfig: 'RedirectConfig',
      rewriteConfig: 'RewriteConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fixedResponseConfig: UpdateRuleAttributeRequestRuleActionsFixedResponseConfig,
      forwardGroupConfig: UpdateRuleAttributeRequestRuleActionsForwardGroupConfig,
      insertHeaderConfig: UpdateRuleAttributeRequestRuleActionsInsertHeaderConfig,
      order: 'number',
      redirectConfig: UpdateRuleAttributeRequestRuleActionsRedirectConfig,
      rewriteConfig: UpdateRuleAttributeRequestRuleActionsRewriteConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPoliciesResponseBodySecurityPolicies extends $tea.Model {
  ciphers?: string[];
  resourceGroupId?: string;
  securityPolicyId?: string;
  securityPolicyName?: string;
  securityPolicyStatus?: string;
  TLSVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      resourceGroupId: 'ResourceGroupId',
      securityPolicyId: 'SecurityPolicyId',
      securityPolicyName: 'SecurityPolicyName',
      securityPolicyStatus: 'SecurityPolicyStatus',
      TLSVersions: 'TLSVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      securityPolicyId: 'string',
      securityPolicyName: 'string',
      securityPolicyStatus: 'string',
      TLSVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestXForwardedForConfig extends $tea.Model {
  XForwardedForClientCertClientVerifyAlias?: string;
  XForwardedForClientCertClientVerifyEnabled?: boolean;
  XForwardedForClientCertFingerprintAlias?: string;
  XForwardedForClientCertFingerprintEnabled?: boolean;
  XForwardedForClientCertIssuerDNAlias?: string;
  XForwardedForClientCertIssuerDNEnabled?: boolean;
  XForwardedForClientCertSubjectDNAlias?: string;
  XForwardedForClientCertSubjectDNEnabled?: boolean;
  XForwardedForClientSrcPortEnabled?: boolean;
  XForwardedForEnabled?: boolean;
  XForwardedForProtoEnabled?: boolean;
  XForwardedForSLBIdEnabled?: boolean;
  XForwardedForSLBPortEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      XForwardedForClientCertClientVerifyAlias: 'XForwardedForClientCertClientVerifyAlias',
      XForwardedForClientCertClientVerifyEnabled: 'XForwardedForClientCertClientVerifyEnabled',
      XForwardedForClientCertFingerprintAlias: 'XForwardedForClientCertFingerprintAlias',
      XForwardedForClientCertFingerprintEnabled: 'XForwardedForClientCertFingerprintEnabled',
      XForwardedForClientCertIssuerDNAlias: 'XForwardedForClientCertIssuerDNAlias',
      XForwardedForClientCertIssuerDNEnabled: 'XForwardedForClientCertIssuerDNEnabled',
      XForwardedForClientCertSubjectDNAlias: 'XForwardedForClientCertSubjectDNAlias',
      XForwardedForClientCertSubjectDNEnabled: 'XForwardedForClientCertSubjectDNEnabled',
      XForwardedForClientSrcPortEnabled: 'XForwardedForClientSrcPortEnabled',
      XForwardedForEnabled: 'XForwardedForEnabled',
      XForwardedForProtoEnabled: 'XForwardedForProtoEnabled',
      XForwardedForSLBIdEnabled: 'XForwardedForSLBIdEnabled',
      XForwardedForSLBPortEnabled: 'XForwardedForSLBPortEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      XForwardedForClientCertClientVerifyAlias: 'string',
      XForwardedForClientCertClientVerifyEnabled: 'boolean',
      XForwardedForClientCertFingerprintAlias: 'string',
      XForwardedForClientCertFingerprintEnabled: 'boolean',
      XForwardedForClientCertIssuerDNAlias: 'string',
      XForwardedForClientCertIssuerDNEnabled: 'boolean',
      XForwardedForClientCertSubjectDNAlias: 'string',
      XForwardedForClientCertSubjectDNEnabled: 'boolean',
      XForwardedForClientSrcPortEnabled: 'boolean',
      XForwardedForEnabled: 'boolean',
      XForwardedForProtoEnabled: 'boolean',
      XForwardedForSLBIdEnabled: 'boolean',
      XForwardedForSLBPortEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestQuicConfig extends $tea.Model {
  quicListenerId?: string;
  quicUpgradeEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      quicListenerId: 'QuicListenerId',
      quicUpgradeEnabled: 'QuicUpgradeEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quicListenerId: 'string',
      quicUpgradeEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestCertificates extends $tea.Model {
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestDefaultActionsForwardGroupConfigServerGroupTuples extends $tea.Model {
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestDefaultActionsForwardGroupConfig extends $tea.Model {
  serverGroupTuples?: CreateListenerRequestDefaultActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': CreateListenerRequestDefaultActionsForwardGroupConfigServerGroupTuples },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestDefaultActions extends $tea.Model {
  forwardGroupConfig?: CreateListenerRequestDefaultActionsForwardGroupConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      forwardGroupConfig: 'ForwardGroupConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardGroupConfig: CreateListenerRequestDefaultActionsForwardGroupConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupServersAttributeRequestServers extends $tea.Model {
  description?: string;
  port?: number;
  serverId?: string;
  serverIp?: string;
  serverType?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
      serverIp: 'ServerIp',
      serverType: 'ServerType',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
      serverId: 'string',
      serverIp: 'string',
      serverType: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsFixedResponseConfig extends $tea.Model {
  content?: string;
  contentType?: string;
  httpCode?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      httpCode: 'HttpCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      httpCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsForwardGroupConfigServerGroupTuples extends $tea.Model {
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsForwardGroupConfig extends $tea.Model {
  serverGroupTuples?: CreateRulesRequestRulesRuleActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': CreateRulesRequestRulesRuleActionsForwardGroupConfigServerGroupTuples },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsInsertHeaderConfig extends $tea.Model {
  key?: string;
  value?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsRedirectConfig extends $tea.Model {
  host?: string;
  httpCode?: string;
  path?: string;
  port?: string;
  protocol?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      httpCode: 'HttpCode',
      path: 'Path',
      port: 'Port',
      protocol: 'Protocol',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      httpCode: 'string',
      path: 'string',
      port: 'string',
      protocol: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsRewriteConfig extends $tea.Model {
  host?: string;
  path?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      path: 'Path',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      path: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActions extends $tea.Model {
  fixedResponseConfig?: CreateRulesRequestRulesRuleActionsFixedResponseConfig;
  forwardGroupConfig?: CreateRulesRequestRulesRuleActionsForwardGroupConfig;
  insertHeaderConfig?: CreateRulesRequestRulesRuleActionsInsertHeaderConfig;
  order?: number;
  redirectConfig?: CreateRulesRequestRulesRuleActionsRedirectConfig;
  rewriteConfig?: CreateRulesRequestRulesRuleActionsRewriteConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fixedResponseConfig: 'FixedResponseConfig',
      forwardGroupConfig: 'ForwardGroupConfig',
      insertHeaderConfig: 'InsertHeaderConfig',
      order: 'Order',
      redirectConfig: 'RedirectConfig',
      rewriteConfig: 'RewriteConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fixedResponseConfig: CreateRulesRequestRulesRuleActionsFixedResponseConfig,
      forwardGroupConfig: CreateRulesRequestRulesRuleActionsForwardGroupConfig,
      insertHeaderConfig: CreateRulesRequestRulesRuleActionsInsertHeaderConfig,
      order: 'number',
      redirectConfig: CreateRulesRequestRulesRuleActionsRedirectConfig,
      rewriteConfig: CreateRulesRequestRulesRuleActionsRewriteConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleConditionsCookieConfigValues extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleConditionsCookieConfig extends $tea.Model {
  values?: CreateRulesRequestRulesRuleConditionsCookieConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': CreateRulesRequestRulesRuleConditionsCookieConfigValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleConditionsHeaderConfig extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleConditionsHostConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleConditionsMethodConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleConditionsPathConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleConditionsQueryStringConfigValues extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleConditionsQueryStringConfig extends $tea.Model {
  values?: CreateRulesRequestRulesRuleConditionsQueryStringConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': CreateRulesRequestRulesRuleConditionsQueryStringConfigValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleConditionsResponseHeaderConfig extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleConditions extends $tea.Model {
  cookieConfig?: CreateRulesRequestRulesRuleConditionsCookieConfig;
  headerConfig?: CreateRulesRequestRulesRuleConditionsHeaderConfig;
  hostConfig?: CreateRulesRequestRulesRuleConditionsHostConfig;
  methodConfig?: CreateRulesRequestRulesRuleConditionsMethodConfig;
  pathConfig?: CreateRulesRequestRulesRuleConditionsPathConfig;
  queryStringConfig?: CreateRulesRequestRulesRuleConditionsQueryStringConfig;
  responseHeaderConfig?: CreateRulesRequestRulesRuleConditionsResponseHeaderConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cookieConfig: 'CookieConfig',
      headerConfig: 'HeaderConfig',
      hostConfig: 'HostConfig',
      methodConfig: 'MethodConfig',
      pathConfig: 'PathConfig',
      queryStringConfig: 'QueryStringConfig',
      responseHeaderConfig: 'ResponseHeaderConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookieConfig: CreateRulesRequestRulesRuleConditionsCookieConfig,
      headerConfig: CreateRulesRequestRulesRuleConditionsHeaderConfig,
      hostConfig: CreateRulesRequestRulesRuleConditionsHostConfig,
      methodConfig: CreateRulesRequestRulesRuleConditionsMethodConfig,
      pathConfig: CreateRulesRequestRulesRuleConditionsPathConfig,
      queryStringConfig: CreateRulesRequestRulesRuleConditionsQueryStringConfig,
      responseHeaderConfig: CreateRulesRequestRulesRuleConditionsResponseHeaderConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRules extends $tea.Model {
  priority?: number;
  ruleActions?: CreateRulesRequestRulesRuleActions[];
  ruleConditions?: CreateRulesRequestRulesRuleConditions[];
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      priority: 'Priority',
      ruleActions: 'RuleActions',
      ruleConditions: 'RuleConditions',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priority: 'number',
      ruleActions: { 'type': 'array', 'itemType': CreateRulesRequestRulesRuleActions },
      ruleConditions: { 'type': 'array', 'itemType': CreateRulesRequestRulesRuleConditions },
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesResponseBodyRuleIds extends $tea.Model {
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclEntriesResponseBodyAclEntries extends $tea.Model {
  description?: string;
  entry?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      entry: 'Entry',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      entry: 'string',
      status: 'string',
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
    this._endpointMap = {
      'cn-beijing': "alb.cn-beijing.aliyuncs.com",
      'cn-zhangjiakou': "alb.cn-zhangjiakou.aliyuncs.com",
      'cn-hangzhou': "alb.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "alb.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "alb.cn-shenzhen.aliyuncs.com",
      'cn-hongkong': "alb.cn-hongkong.aliyuncs.com",
      'ap-southeast-1': "alb.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "alb.ap-southeast-2.aliyuncs.com",
      'ap-southeast-5': "alb.ap-southeast-5.aliyuncs.com",
      'us-east-1': "alb.us-east-1.aliyuncs.com",
      'eu-central-1': "alb.eu-central-1.aliyuncs.com",
      'ap-south-1': "alb.ap-south-1.aliyuncs.com",
      'ap-northeast-1': "alb.ap-northeast-1.aliyuncs.com",
      'ap-southeast-3': "alb.ap-southeast-3.aliyuncs.com",
      'cn-chengdu': "alb.cn-chengdu.aliyuncs.com",
      'cn-huhehaote': "alb.cn-huhehaote.aliyuncs.com",
      'cn-qingdao': "alb.cn-qingdao.aliyuncs.com",
      'cn-wulanchabu': "alb.cn-wulanchabu.aliyuncs.com",
      'eu-west-1': "alb.eu-west-1.aliyuncs.com",
      'us-west-1': "alb.us-west-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("alb", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async listAclsWithOptions(request: ListAclsRequest, runtime: $Util.RuntimeOptions): Promise<ListAclsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAclsResponse>(await this.doRPCRequest("ListAcls", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new ListAclsResponse({}));
  }

  async listAcls(request: ListAclsRequest): Promise<ListAclsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAclsWithOptions(request, runtime);
  }

  async createHealthCheckTemplateWithOptions(request: CreateHealthCheckTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateHealthCheckTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateHealthCheckTemplateResponse>(await this.doRPCRequest("CreateHealthCheckTemplate", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new CreateHealthCheckTemplateResponse({}));
  }

  async createHealthCheckTemplate(request: CreateHealthCheckTemplateRequest): Promise<CreateHealthCheckTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHealthCheckTemplateWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async getListenerAttributeWithOptions(request: GetListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<GetListenerAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetListenerAttributeResponse>(await this.doRPCRequest("GetListenerAttribute", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new GetListenerAttributeResponse({}));
  }

  async getListenerAttribute(request: GetListenerAttributeRequest): Promise<GetListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getListenerAttributeWithOptions(request, runtime);
  }

  async updateHealthCheckTemplateAttributeWithOptions(request: UpdateHealthCheckTemplateAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateHealthCheckTemplateAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateHealthCheckTemplateAttributeResponse>(await this.doRPCRequest("UpdateHealthCheckTemplateAttribute", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateHealthCheckTemplateAttributeResponse({}));
  }

  async updateHealthCheckTemplateAttribute(request: UpdateHealthCheckTemplateAttributeRequest): Promise<UpdateHealthCheckTemplateAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateHealthCheckTemplateAttributeWithOptions(request, runtime);
  }

  async listServerGroupServersWithOptions(request: ListServerGroupServersRequest, runtime: $Util.RuntimeOptions): Promise<ListServerGroupServersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListServerGroupServersResponse>(await this.doRPCRequest("ListServerGroupServers", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new ListServerGroupServersResponse({}));
  }

  async listServerGroupServers(request: ListServerGroupServersRequest): Promise<ListServerGroupServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServerGroupServersWithOptions(request, runtime);
  }

  async removeEntriesFromAclWithOptions(request: RemoveEntriesFromAclRequest, runtime: $Util.RuntimeOptions): Promise<RemoveEntriesFromAclResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveEntriesFromAclResponse>(await this.doRPCRequest("RemoveEntriesFromAcl", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveEntriesFromAclResponse({}));
  }

  async removeEntriesFromAcl(request: RemoveEntriesFromAclRequest): Promise<RemoveEntriesFromAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeEntriesFromAclWithOptions(request, runtime);
  }

  async deleteSecurityPolicyWithOptions(request: DeleteSecurityPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSecurityPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSecurityPolicyResponse>(await this.doRPCRequest("DeleteSecurityPolicy", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSecurityPolicyResponse({}));
  }

  async deleteSecurityPolicy(request: DeleteSecurityPolicyRequest): Promise<DeleteSecurityPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSecurityPolicyWithOptions(request, runtime);
  }

  async disableLoadBalancerAccessLogWithOptions(request: DisableLoadBalancerAccessLogRequest, runtime: $Util.RuntimeOptions): Promise<DisableLoadBalancerAccessLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableLoadBalancerAccessLogResponse>(await this.doRPCRequest("DisableLoadBalancerAccessLog", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new DisableLoadBalancerAccessLogResponse({}));
  }

  async disableLoadBalancerAccessLog(request: DisableLoadBalancerAccessLogRequest): Promise<DisableLoadBalancerAccessLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableLoadBalancerAccessLogWithOptions(request, runtime);
  }

  async listServerGroupsWithOptions(request: ListServerGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListServerGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListServerGroupsResponse>(await this.doRPCRequest("ListServerGroups", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new ListServerGroupsResponse({}));
  }

  async listServerGroups(request: ListServerGroupsRequest): Promise<ListServerGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServerGroupsWithOptions(request, runtime);
  }

  async moveResourceGroupWithOptions(request: MoveResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveResourceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MoveResourceGroupResponse>(await this.doRPCRequest("MoveResourceGroup", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new MoveResourceGroupResponse({}));
  }

  async moveResourceGroup(request: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  async enableDeletionProtectionWithOptions(request: EnableDeletionProtectionRequest, runtime: $Util.RuntimeOptions): Promise<EnableDeletionProtectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableDeletionProtectionResponse>(await this.doRPCRequest("EnableDeletionProtection", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new EnableDeletionProtectionResponse({}));
  }

  async enableDeletionProtection(request: EnableDeletionProtectionRequest): Promise<EnableDeletionProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableDeletionProtectionWithOptions(request, runtime);
  }

  async updateListenerAttributeWithOptions(request: UpdateListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateListenerAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateListenerAttributeResponse>(await this.doRPCRequest("UpdateListenerAttribute", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateListenerAttributeResponse({}));
  }

  async updateListenerAttribute(request: UpdateListenerAttributeRequest): Promise<UpdateListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateListenerAttributeWithOptions(request, runtime);
  }

  async createLoadBalancerWithOptions(request: CreateLoadBalancerRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoadBalancerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateLoadBalancerResponse>(await this.doRPCRequest("CreateLoadBalancer", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new CreateLoadBalancerResponse({}));
  }

  async createLoadBalancer(request: CreateLoadBalancerRequest): Promise<CreateLoadBalancerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoadBalancerWithOptions(request, runtime);
  }

  async deleteHealthCheckTemplatesWithOptions(request: DeleteHealthCheckTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHealthCheckTemplatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteHealthCheckTemplatesResponse>(await this.doRPCRequest("DeleteHealthCheckTemplates", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteHealthCheckTemplatesResponse({}));
  }

  async deleteHealthCheckTemplates(request: DeleteHealthCheckTemplatesRequest): Promise<DeleteHealthCheckTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHealthCheckTemplatesWithOptions(request, runtime);
  }

  async updateServerGroupAttributeWithOptions(request: UpdateServerGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateServerGroupAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateServerGroupAttributeResponse>(await this.doRPCRequest("UpdateServerGroupAttribute", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateServerGroupAttributeResponse({}));
  }

  async updateServerGroupAttribute(request: UpdateServerGroupAttributeRequest): Promise<UpdateServerGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateServerGroupAttributeWithOptions(request, runtime);
  }

  async createServerGroupWithOptions(request: CreateServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateServerGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateServerGroupResponse>(await this.doRPCRequest("CreateServerGroup", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new CreateServerGroupResponse({}));
  }

  async createServerGroup(request: CreateServerGroupRequest): Promise<CreateServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServerGroupWithOptions(request, runtime);
  }

  async associateAclsWithListenerWithOptions(request: AssociateAclsWithListenerRequest, runtime: $Util.RuntimeOptions): Promise<AssociateAclsWithListenerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssociateAclsWithListenerResponse>(await this.doRPCRequest("AssociateAclsWithListener", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new AssociateAclsWithListenerResponse({}));
  }

  async associateAclsWithListener(request: AssociateAclsWithListenerRequest): Promise<AssociateAclsWithListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateAclsWithListenerWithOptions(request, runtime);
  }

  async deleteRuleWithOptions(request: DeleteRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRuleResponse>(await this.doRPCRequest("DeleteRule", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRuleResponse({}));
  }

  async deleteRule(request: DeleteRuleRequest): Promise<DeleteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRuleWithOptions(request, runtime);
  }

  async listRulesWithOptions(request: ListRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRulesResponse>(await this.doRPCRequest("ListRules", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new ListRulesResponse({}));
  }

  async listRules(request: ListRulesRequest): Promise<ListRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRulesWithOptions(request, runtime);
  }

  async describeZonesWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeZonesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeZonesResponse>(await this.doRPCRequest("DescribeZones", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeZonesResponse({}));
  }

  async describeZones(): Promise<DescribeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZonesWithOptions(runtime);
  }

  async deleteServerGroupWithOptions(request: DeleteServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServerGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteServerGroupResponse>(await this.doRPCRequest("DeleteServerGroup", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteServerGroupResponse({}));
  }

  async deleteServerGroup(request: DeleteServerGroupRequest): Promise<DeleteServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServerGroupWithOptions(request, runtime);
  }

  async addServersToServerGroupWithOptions(request: AddServersToServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddServersToServerGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddServersToServerGroupResponse>(await this.doRPCRequest("AddServersToServerGroup", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new AddServersToServerGroupResponse({}));
  }

  async addServersToServerGroup(request: AddServersToServerGroupRequest): Promise<AddServersToServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addServersToServerGroupWithOptions(request, runtime);
  }

  async deleteLoadBalancerWithOptions(request: DeleteLoadBalancerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLoadBalancerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLoadBalancerResponse>(await this.doRPCRequest("DeleteLoadBalancer", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLoadBalancerResponse({}));
  }

  async deleteLoadBalancer(request: DeleteLoadBalancerRequest): Promise<DeleteLoadBalancerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLoadBalancerWithOptions(request, runtime);
  }

  async updateListenerLogConfigWithOptions(request: UpdateListenerLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateListenerLogConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateListenerLogConfigResponse>(await this.doRPCRequest("UpdateListenerLogConfig", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateListenerLogConfigResponse({}));
  }

  async updateListenerLogConfig(request: UpdateListenerLogConfigRequest): Promise<UpdateListenerLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateListenerLogConfigWithOptions(request, runtime);
  }

  async unTagResourcesWithOptions(request: UnTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UnTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnTagResourcesResponse>(await this.doRPCRequest("UnTagResources", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new UnTagResourcesResponse({}));
  }

  async unTagResources(request: UnTagResourcesRequest): Promise<UnTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unTagResourcesWithOptions(request, runtime);
  }

  async listSystemSecurityPoliciesWithOptions(runtime: $Util.RuntimeOptions): Promise<ListSystemSecurityPoliciesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListSystemSecurityPoliciesResponse>(await this.doRPCRequest("ListSystemSecurityPolicies", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new ListSystemSecurityPoliciesResponse({}));
  }

  async listSystemSecurityPolicies(): Promise<ListSystemSecurityPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSystemSecurityPoliciesWithOptions(runtime);
  }

  async addEntriesToAclWithOptions(request: AddEntriesToAclRequest, runtime: $Util.RuntimeOptions): Promise<AddEntriesToAclResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddEntriesToAclResponse>(await this.doRPCRequest("AddEntriesToAcl", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new AddEntriesToAclResponse({}));
  }

  async addEntriesToAcl(request: AddEntriesToAclRequest): Promise<AddEntriesToAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addEntriesToAclWithOptions(request, runtime);
  }

  async deleteAclWithOptions(request: DeleteAclRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAclResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAclResponse>(await this.doRPCRequest("DeleteAcl", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAclResponse({}));
  }

  async deleteAcl(request: DeleteAclRequest): Promise<DeleteAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAclWithOptions(request, runtime);
  }

  async dissociateAdditionalCertificatesFromListenerWithOptions(request: DissociateAdditionalCertificatesFromListenerRequest, runtime: $Util.RuntimeOptions): Promise<DissociateAdditionalCertificatesFromListenerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DissociateAdditionalCertificatesFromListenerResponse>(await this.doRPCRequest("DissociateAdditionalCertificatesFromListener", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new DissociateAdditionalCertificatesFromListenerResponse({}));
  }

  async dissociateAdditionalCertificatesFromListener(request: DissociateAdditionalCertificatesFromListenerRequest): Promise<DissociateAdditionalCertificatesFromListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dissociateAdditionalCertificatesFromListenerWithOptions(request, runtime);
  }

  async updateLoadBalancerEditionWithOptions(request: UpdateLoadBalancerEditionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLoadBalancerEditionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateLoadBalancerEditionResponse>(await this.doRPCRequest("UpdateLoadBalancerEdition", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateLoadBalancerEditionResponse({}));
  }

  async updateLoadBalancerEdition(request: UpdateLoadBalancerEditionRequest): Promise<UpdateLoadBalancerEditionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLoadBalancerEditionWithOptions(request, runtime);
  }

  async listListenersWithOptions(request: ListListenersRequest, runtime: $Util.RuntimeOptions): Promise<ListListenersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListListenersResponse>(await this.doRPCRequest("ListListeners", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new ListListenersResponse({}));
  }

  async listListeners(request: ListListenersRequest): Promise<ListListenersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listListenersWithOptions(request, runtime);
  }

  async listAclRelationsWithOptions(request: ListAclRelationsRequest, runtime: $Util.RuntimeOptions): Promise<ListAclRelationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAclRelationsResponse>(await this.doRPCRequest("ListAclRelations", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new ListAclRelationsResponse({}));
  }

  async listAclRelations(request: ListAclRelationsRequest): Promise<ListAclRelationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAclRelationsWithOptions(request, runtime);
  }

  async deleteRulesWithOptions(request: DeleteRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRulesResponse>(await this.doRPCRequest("DeleteRules", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRulesResponse({}));
  }

  async deleteRules(request: DeleteRulesRequest): Promise<DeleteRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRulesWithOptions(request, runtime);
  }

  async deleteListenerWithOptions(request: DeleteListenerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteListenerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteListenerResponse>(await this.doRPCRequest("DeleteListener", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteListenerResponse({}));
  }

  async deleteListener(request: DeleteListenerRequest): Promise<DeleteListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteListenerWithOptions(request, runtime);
  }

  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagKeysResponse>(await this.doRPCRequest("ListTagKeys", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagKeysResponse({}));
  }

  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  async associateAdditionalCertificatesWithListenerWithOptions(request: AssociateAdditionalCertificatesWithListenerRequest, runtime: $Util.RuntimeOptions): Promise<AssociateAdditionalCertificatesWithListenerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssociateAdditionalCertificatesWithListenerResponse>(await this.doRPCRequest("AssociateAdditionalCertificatesWithListener", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new AssociateAdditionalCertificatesWithListenerResponse({}));
  }

  async associateAdditionalCertificatesWithListener(request: AssociateAdditionalCertificatesWithListenerRequest): Promise<AssociateAdditionalCertificatesWithListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateAdditionalCertificatesWithListenerWithOptions(request, runtime);
  }

  async listHealthCheckTemplatesWithOptions(request: ListHealthCheckTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListHealthCheckTemplatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListHealthCheckTemplatesResponse>(await this.doRPCRequest("ListHealthCheckTemplates", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new ListHealthCheckTemplatesResponse({}));
  }

  async listHealthCheckTemplates(request: ListHealthCheckTemplatesRequest): Promise<ListHealthCheckTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHealthCheckTemplatesWithOptions(request, runtime);
  }

  async getLoadBalancerAttributeWithOptions(request: GetLoadBalancerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<GetLoadBalancerAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLoadBalancerAttributeResponse>(await this.doRPCRequest("GetLoadBalancerAttribute", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new GetLoadBalancerAttributeResponse({}));
  }

  async getLoadBalancerAttribute(request: GetLoadBalancerAttributeRequest): Promise<GetLoadBalancerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLoadBalancerAttributeWithOptions(request, runtime);
  }

  async listTagValuesWithOptions(request: ListTagValuesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagValuesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagValuesResponse>(await this.doRPCRequest("ListTagValues", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagValuesResponse({}));
  }

  async listTagValues(request: ListTagValuesRequest): Promise<ListTagValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  async listLoadBalancersWithOptions(request: ListLoadBalancersRequest, runtime: $Util.RuntimeOptions): Promise<ListLoadBalancersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListLoadBalancersResponse>(await this.doRPCRequest("ListLoadBalancers", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new ListLoadBalancersResponse({}));
  }

  async listLoadBalancers(request: ListLoadBalancersRequest): Promise<ListLoadBalancersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLoadBalancersWithOptions(request, runtime);
  }

  async enableLoadBalancerAccessLogWithOptions(request: EnableLoadBalancerAccessLogRequest, runtime: $Util.RuntimeOptions): Promise<EnableLoadBalancerAccessLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableLoadBalancerAccessLogResponse>(await this.doRPCRequest("EnableLoadBalancerAccessLog", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new EnableLoadBalancerAccessLogResponse({}));
  }

  async enableLoadBalancerAccessLog(request: EnableLoadBalancerAccessLogRequest): Promise<EnableLoadBalancerAccessLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableLoadBalancerAccessLogWithOptions(request, runtime);
  }

  async dissociateAclsFromListenerWithOptions(request: DissociateAclsFromListenerRequest, runtime: $Util.RuntimeOptions): Promise<DissociateAclsFromListenerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DissociateAclsFromListenerResponse>(await this.doRPCRequest("DissociateAclsFromListener", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new DissociateAclsFromListenerResponse({}));
  }

  async dissociateAclsFromListener(request: DissociateAclsFromListenerRequest): Promise<DissociateAclsFromListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dissociateAclsFromListenerWithOptions(request, runtime);
  }

  async listListenerCertificatesWithOptions(request: ListListenerCertificatesRequest, runtime: $Util.RuntimeOptions): Promise<ListListenerCertificatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListListenerCertificatesResponse>(await this.doRPCRequest("ListListenerCertificates", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new ListListenerCertificatesResponse({}));
  }

  async listListenerCertificates(request: ListListenerCertificatesRequest): Promise<ListListenerCertificatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listListenerCertificatesWithOptions(request, runtime);
  }

  async createAclWithOptions(request: CreateAclRequest, runtime: $Util.RuntimeOptions): Promise<CreateAclResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAclResponse>(await this.doRPCRequest("CreateAcl", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAclResponse({}));
  }

  async createAcl(request: CreateAclRequest): Promise<CreateAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAclWithOptions(request, runtime);
  }

  async getHealthCheckTemplateAttributeWithOptions(request: GetHealthCheckTemplateAttributeRequest, runtime: $Util.RuntimeOptions): Promise<GetHealthCheckTemplateAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetHealthCheckTemplateAttributeResponse>(await this.doRPCRequest("GetHealthCheckTemplateAttribute", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new GetHealthCheckTemplateAttributeResponse({}));
  }

  async getHealthCheckTemplateAttribute(request: GetHealthCheckTemplateAttributeRequest): Promise<GetHealthCheckTemplateAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHealthCheckTemplateAttributeWithOptions(request, runtime);
  }

  async updateSecurityPolicyAttributeWithOptions(request: UpdateSecurityPolicyAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSecurityPolicyAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSecurityPolicyAttributeResponse>(await this.doRPCRequest("UpdateSecurityPolicyAttribute", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSecurityPolicyAttributeResponse({}));
  }

  async updateSecurityPolicyAttribute(request: UpdateSecurityPolicyAttributeRequest): Promise<UpdateSecurityPolicyAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSecurityPolicyAttributeWithOptions(request, runtime);
  }

  async listSecurityPolicyRelationsWithOptions(request: ListSecurityPolicyRelationsRequest, runtime: $Util.RuntimeOptions): Promise<ListSecurityPolicyRelationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSecurityPolicyRelationsResponse>(await this.doRPCRequest("ListSecurityPolicyRelations", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new ListSecurityPolicyRelationsResponse({}));
  }

  async listSecurityPolicyRelations(request: ListSecurityPolicyRelationsRequest): Promise<ListSecurityPolicyRelationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSecurityPolicyRelationsWithOptions(request, runtime);
  }

  async updateLoadBalancerAttributeWithOptions(request: UpdateLoadBalancerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLoadBalancerAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateLoadBalancerAttributeResponse>(await this.doRPCRequest("UpdateLoadBalancerAttribute", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateLoadBalancerAttributeResponse({}));
  }

  async updateLoadBalancerAttribute(request: UpdateLoadBalancerAttributeRequest): Promise<UpdateLoadBalancerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLoadBalancerAttributeWithOptions(request, runtime);
  }

  async listAsynJobsWithOptions(request: ListAsynJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListAsynJobsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAsynJobsResponse>(await this.doRPCRequest("ListAsynJobs", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new ListAsynJobsResponse({}));
  }

  async listAsynJobs(request: ListAsynJobsRequest): Promise<ListAsynJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAsynJobsWithOptions(request, runtime);
  }

  async createRuleWithOptions(request: CreateRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRuleResponse>(await this.doRPCRequest("CreateRule", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRuleResponse({}));
  }

  async createRule(request: CreateRuleRequest): Promise<CreateRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRuleWithOptions(request, runtime);
  }

  async removeServersFromServerGroupWithOptions(request: RemoveServersFromServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveServersFromServerGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveServersFromServerGroupResponse>(await this.doRPCRequest("RemoveServersFromServerGroup", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveServersFromServerGroupResponse({}));
  }

  async removeServersFromServerGroup(request: RemoveServersFromServerGroupRequest): Promise<RemoveServersFromServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeServersFromServerGroupWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async createSecurityPolicyWithOptions(request: CreateSecurityPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateSecurityPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSecurityPolicyResponse>(await this.doRPCRequest("CreateSecurityPolicy", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSecurityPolicyResponse({}));
  }

  async createSecurityPolicy(request: CreateSecurityPolicyRequest): Promise<CreateSecurityPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSecurityPolicyWithOptions(request, runtime);
  }

  async updateRuleAttributeWithOptions(request: UpdateRuleAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRuleAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateRuleAttributeResponse>(await this.doRPCRequest("UpdateRuleAttribute", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateRuleAttributeResponse({}));
  }

  async updateRuleAttribute(request: UpdateRuleAttributeRequest): Promise<UpdateRuleAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRuleAttributeWithOptions(request, runtime);
  }

  async listSecurityPoliciesWithOptions(request: ListSecurityPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListSecurityPoliciesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSecurityPoliciesResponse>(await this.doRPCRequest("ListSecurityPolicies", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new ListSecurityPoliciesResponse({}));
  }

  async listSecurityPolicies(request: ListSecurityPoliciesRequest): Promise<ListSecurityPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSecurityPoliciesWithOptions(request, runtime);
  }

  async updateAclAttributeWithOptions(request: UpdateAclAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAclAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAclAttributeResponse>(await this.doRPCRequest("UpdateAclAttribute", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAclAttributeResponse({}));
  }

  async updateAclAttribute(request: UpdateAclAttributeRequest): Promise<UpdateAclAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAclAttributeWithOptions(request, runtime);
  }

  async disableDeletionProtectionWithOptions(request: DisableDeletionProtectionRequest, runtime: $Util.RuntimeOptions): Promise<DisableDeletionProtectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableDeletionProtectionResponse>(await this.doRPCRequest("DisableDeletionProtection", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new DisableDeletionProtectionResponse({}));
  }

  async disableDeletionProtection(request: DisableDeletionProtectionRequest): Promise<DisableDeletionProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableDeletionProtectionWithOptions(request, runtime);
  }

  async stopListenerWithOptions(request: StopListenerRequest, runtime: $Util.RuntimeOptions): Promise<StopListenerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopListenerResponse>(await this.doRPCRequest("StopListener", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new StopListenerResponse({}));
  }

  async stopListener(request: StopListenerRequest): Promise<StopListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopListenerWithOptions(request, runtime);
  }

  async createListenerWithOptions(request: CreateListenerRequest, runtime: $Util.RuntimeOptions): Promise<CreateListenerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateListenerResponse>(await this.doRPCRequest("CreateListener", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new CreateListenerResponse({}));
  }

  async createListener(request: CreateListenerRequest): Promise<CreateListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createListenerWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async updateServerGroupServersAttributeWithOptions(request: UpdateServerGroupServersAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateServerGroupServersAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateServerGroupServersAttributeResponse>(await this.doRPCRequest("UpdateServerGroupServersAttribute", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateServerGroupServersAttributeResponse({}));
  }

  async updateServerGroupServersAttribute(request: UpdateServerGroupServersAttributeRequest): Promise<UpdateServerGroupServersAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateServerGroupServersAttributeWithOptions(request, runtime);
  }

  async startListenerWithOptions(request: StartListenerRequest, runtime: $Util.RuntimeOptions): Promise<StartListenerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartListenerResponse>(await this.doRPCRequest("StartListener", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new StartListenerResponse({}));
  }

  async startListener(request: StartListenerRequest): Promise<StartListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startListenerWithOptions(request, runtime);
  }

  async createRulesWithOptions(request: CreateRulesRequest, runtime: $Util.RuntimeOptions): Promise<CreateRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRulesResponse>(await this.doRPCRequest("CreateRules", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRulesResponse({}));
  }

  async createRules(request: CreateRulesRequest): Promise<CreateRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRulesWithOptions(request, runtime);
  }

  async listAclEntriesWithOptions(request: ListAclEntriesRequest, runtime: $Util.RuntimeOptions): Promise<ListAclEntriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAclEntriesResponse>(await this.doRPCRequest("ListAclEntries", "2020-06-16", "HTTPS", "POST", "AK", "json", req, runtime), new ListAclEntriesResponse({}));
  }

  async listAclEntries(request: ListAclEntriesRequest): Promise<ListAclEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAclEntriesWithOptions(request, runtime);
  }

}
