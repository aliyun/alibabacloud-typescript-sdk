// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeAuthorizedAppsRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  stageName?: string;
  apiId?: string;
  pageNumber?: number;
  pageSize?: number;
  appId?: number;
  appName?: string;
  appOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      stageName: 'StageName',
      apiId: 'ApiId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      appId: 'AppId',
      appName: 'AppName',
      appOwnerId: 'AppOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      stageName: 'string',
      apiId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      appId: 'number',
      appName: 'string',
      appOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuthorizedAppsResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  authorizedApps?: DescribeAuthorizedAppsResponseBodyAuthorizedApps;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      authorizedApps: 'AuthorizedApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      authorizedApps: DescribeAuthorizedAppsResponseBodyAuthorizedApps,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuthorizedAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAuthorizedAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAuthorizedAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiGroupsRequest extends $tea.Model {
  securityToken?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiGroupsResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  purchasedApiGroupAttributes?: DescribePurchasedApiGroupsResponseBodyPurchasedApiGroupAttributes;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      purchasedApiGroupAttributes: 'PurchasedApiGroupAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      purchasedApiGroupAttributes: DescribePurchasedApiGroupsResponseBodyPurchasedApiGroupAttributes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePurchasedApiGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePurchasedApiGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginsRequest extends $tea.Model {
  securityToken?: string;
  pluginId?: string;
  pluginType?: string;
  pluginName?: string;
  pageNumber?: number;
  pageSize?: number;
  tag?: DescribePluginsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      pluginId: 'PluginId',
      pluginType: 'PluginType',
      pluginName: 'PluginName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      pluginId: 'string',
      pluginType: 'string',
      pluginName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      tag: { 'type': 'array', 'itemType': DescribePluginsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginsResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  plugins?: DescribePluginsResponseBodyPlugins;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      plugins: 'Plugins',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      plugins: DescribePluginsResponseBodyPlugins,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePluginsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePluginsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  securityToken?: string;
  resourceType?: string;
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      resourceType: 'ResourceType',
      all: 'All',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      resourceType: 'string',
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
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
  headers: { [key: string]: string };
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogConfigRequest extends $tea.Model {
  securityToken?: string;
  logType?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      logType: 'LogType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      logType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogConfigResponseBody extends $tea.Model {
  requestId?: string;
  logInfos?: DescribeLogConfigResponseBodyLogInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      logInfos: 'LogInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      logInfos: DescribeLogConfigResponseBodyLogInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLogConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApisAuthoritiesRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  appId?: number;
  stageName?: string;
  apiIds?: string;
  description?: string;
  authValidTime?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      appId: 'AppId',
      stageName: 'StageName',
      apiIds: 'ApiIds',
      description: 'Description',
      authValidTime: 'AuthValidTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      appId: 'number',
      stageName: 'string',
      apiIds: 'string',
      description: 'string',
      authValidTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApisAuthoritiesResponseBody extends $tea.Model {
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

export class SetApisAuthoritiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetApisAuthoritiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetApisAuthoritiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupConfigSynFlowRequest extends $tea.Model {
  securityToken?: string;
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupConfigSynFlowResponseBody extends $tea.Model {
  apiCopyVersion?: string;
  sourceGroupId?: string;
  targetGroupId?: string;
  executionTime?: string;
  flowId?: string;
  requestId?: string;
  modifiedTime?: string;
  region?: string;
  flowStatus?: string;
  targetGroupName?: string;
  createdTime?: string;
  sourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      apiCopyVersion: 'ApiCopyVersion',
      sourceGroupId: 'SourceGroupId',
      targetGroupId: 'TargetGroupId',
      executionTime: 'ExecutionTime',
      flowId: 'FlowId',
      requestId: 'RequestId',
      modifiedTime: 'ModifiedTime',
      region: 'Region',
      flowStatus: 'FlowStatus',
      targetGroupName: 'TargetGroupName',
      createdTime: 'CreatedTime',
      sourceGroupName: 'SourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiCopyVersion: 'string',
      sourceGroupId: 'string',
      targetGroupId: 'string',
      executionTime: 'string',
      flowId: 'string',
      requestId: 'string',
      modifiedTime: 'string',
      region: 'string',
      flowStatus: 'string',
      targetGroupName: 'string',
      createdTime: 'string',
      sourceGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupConfigSynFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGroupConfigSynFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGroupConfigSynFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSignatureRequest extends $tea.Model {
  securityToken?: string;
  signatureId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      signatureId: 'SignatureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      signatureId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSignatureResponseBody extends $tea.Model {
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

export class DeleteSignatureResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSignatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSignatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrafficControlRequest extends $tea.Model {
  securityToken?: string;
  trafficControlId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      trafficControlId: 'TrafficControlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      trafficControlId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrafficControlResponseBody extends $tea.Model {
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

export class DeleteTrafficControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteTrafficControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTrafficControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFcServiceLinkedRoleRequest extends $tea.Model {
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFcServiceLinkedRoleResponseBody extends $tea.Model {
  roleArn?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      roleArn: 'RoleArn',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleArn: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFcServiceLinkedRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFcServiceLinkedRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFcServiceLinkedRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemParametersRequest extends $tea.Model {
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemParametersResponseBody extends $tea.Model {
  requestId?: string;
  systemParams?: DescribeSystemParametersResponseBodySystemParams;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      systemParams: 'SystemParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      systemParams: DescribeSystemParametersResponseBodySystemParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemParametersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSystemParametersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSystemParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceNewConnectionsRequest extends $tea.Model {
  securityToken?: string;
  startTime?: string;
  endTime?: string;
  instanceId?: string;
  sbcName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      sbcName: 'SbcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      startTime: 'string',
      endTime: 'string',
      instanceId: 'string',
      sbcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceNewConnectionsResponseBody extends $tea.Model {
  requestId?: string;
  instanceNewConnections?: DescribeInstanceNewConnectionsResponseBodyInstanceNewConnections;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceNewConnections: 'InstanceNewConnections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceNewConnections: DescribeInstanceNewConnectionsResponseBodyInstanceNewConnections,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceNewConnectionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceNewConnectionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceNewConnectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpdateVpcInfoTaskRequest extends $tea.Model {
  securityToken?: string;
  operationUid?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      operationUid: 'OperationUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      operationUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpdateVpcInfoTaskResponseBody extends $tea.Model {
  requestId?: string;
  apiUpdateVpcInfoResults?: DescribeUpdateVpcInfoTaskResponseBodyApiUpdateVpcInfoResults;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      apiUpdateVpcInfoResults: 'ApiUpdateVpcInfoResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      apiUpdateVpcInfoResults: DescribeUpdateVpcInfoTaskResponseBodyApiUpdateVpcInfoResults,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpdateVpcInfoTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUpdateVpcInfoTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUpdateVpcInfoTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePluginRequest extends $tea.Model {
  securityToken?: string;
  pluginId?: string;
  tag?: DeletePluginRequestTag[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      pluginId: 'PluginId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      pluginId: 'string',
      tag: { 'type': 'array', 'itemType': DeletePluginRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePluginResponseBody extends $tea.Model {
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

export class DeletePluginResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeletePluginResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeletePluginResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupConfigSynFlowRequest extends $tea.Model {
  securityToken?: string;
  flowVersion?: number;
  sourceGroupId?: string;
  targetGroupId?: string;
  apiSynVersion?: string;
  sourceGroupRegion?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      flowVersion: 'FlowVersion',
      sourceGroupId: 'SourceGroupId',
      targetGroupId: 'TargetGroupId',
      apiSynVersion: 'ApiSynVersion',
      sourceGroupRegion: 'SourceGroupRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      flowVersion: 'number',
      sourceGroupId: 'string',
      targetGroupId: 'string',
      apiSynVersion: 'string',
      sourceGroupRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupConfigSynFlowResponseBody extends $tea.Model {
  flowId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupConfigSynFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateGroupConfigSynFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateGroupConfigSynFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeployApisRequest extends $tea.Model {
  securityToken?: string;
  stageName?: string;
  description?: string;
  api?: BatchDeployApisRequestApi[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      stageName: 'StageName',
      description: 'Description',
      api: 'Api',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      stageName: 'string',
      description: 'string',
      api: { 'type': 'array', 'itemType': BatchDeployApisRequestApi },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeployApisResponseBody extends $tea.Model {
  operationId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeployApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchDeployApisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchDeployApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginTemplatesRequest extends $tea.Model {
  securityToken?: string;
  pluginName?: string;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      pluginName: 'PluginName',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      pluginName: 'string',
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginTemplatesResponseBody extends $tea.Model {
  requestId?: string;
  templates?: DescribePluginTemplatesResponseBodyTemplates;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templates: DescribePluginTemplatesResponseBodyTemplates,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePluginTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePluginTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveIpControlApisRequest extends $tea.Model {
  securityToken?: string;
  ipControlId?: string;
  groupId?: string;
  apiIds?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ipControlId: 'IpControlId',
      groupId: 'GroupId',
      apiIds: 'ApiIds',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ipControlId: 'string',
      groupId: 'string',
      apiIds: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveIpControlApisResponseBody extends $tea.Model {
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

export class RemoveIpControlApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveIpControlApisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveIpControlApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAbolishApiTaskRequest extends $tea.Model {
  securityToken?: string;
  operationUid?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      operationUid: 'OperationUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      operationUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAbolishApiTaskResponseBody extends $tea.Model {
  requestId?: string;
  apiAbolishResults?: DescribeAbolishApiTaskResponseBodyApiAbolishResults;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      apiAbolishResults: 'ApiAbolishResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      apiAbolishResults: DescribeAbolishApiTaskResponseBodyApiAbolishResults,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAbolishApiTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAbolishApiTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAbolishApiTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscribeRequest extends $tea.Model {
  securityToken?: string;
  productId?: number;
  subscribeId?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      productId: 'ProductId',
      subscribeId: 'SubscribeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      productId: 'number',
      subscribeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscribeResponseBody extends $tea.Model {
  userId?: number;
  subscribeId?: number;
  subscribeStatus?: number;
  requestId?: string;
  modifiedTime?: string;
  appKey?: string;
  secret?: string;
  version?: string;
  productId?: number;
  userName?: string;
  specsCode?: string;
  createdTime?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      subscribeId: 'SubscribeId',
      subscribeStatus: 'SubscribeStatus',
      requestId: 'RequestId',
      modifiedTime: 'ModifiedTime',
      appKey: 'AppKey',
      secret: 'Secret',
      version: 'Version',
      productId: 'ProductId',
      userName: 'UserName',
      specsCode: 'SpecsCode',
      createdTime: 'CreatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'number',
      subscribeId: 'number',
      subscribeStatus: 'number',
      requestId: 'string',
      modifiedTime: 'string',
      appKey: 'string',
      secret: 'string',
      version: 'string',
      productId: 'number',
      userName: 'string',
      specsCode: 'string',
      createdTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscribeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSubscribeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSubscribeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApiRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  apiName?: string;
  visibility?: string;
  description?: string;
  authType?: string;
  requestConfig?: string;
  serviceConfig?: string;
  requestParameters?: string;
  systemParameters?: string;
  constantParameters?: string;
  serviceParameters?: string;
  serviceParametersMap?: string;
  resultType?: string;
  resultSample?: string;
  failResultSample?: string;
  errorCodeSamples?: string;
  resultDescriptions?: string;
  openIdConnectConfig?: string;
  allowSignatureMethod?: string;
  webSocketApiType?: string;
  resultBodyModel?: string;
  forceNonceCheck?: boolean;
  disableInternet?: boolean;
  appCodeAuthType?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      apiName: 'ApiName',
      visibility: 'Visibility',
      description: 'Description',
      authType: 'AuthType',
      requestConfig: 'RequestConfig',
      serviceConfig: 'ServiceConfig',
      requestParameters: 'RequestParameters',
      systemParameters: 'SystemParameters',
      constantParameters: 'ConstantParameters',
      serviceParameters: 'ServiceParameters',
      serviceParametersMap: 'ServiceParametersMap',
      resultType: 'ResultType',
      resultSample: 'ResultSample',
      failResultSample: 'FailResultSample',
      errorCodeSamples: 'ErrorCodeSamples',
      resultDescriptions: 'ResultDescriptions',
      openIdConnectConfig: 'OpenIdConnectConfig',
      allowSignatureMethod: 'AllowSignatureMethod',
      webSocketApiType: 'WebSocketApiType',
      resultBodyModel: 'ResultBodyModel',
      forceNonceCheck: 'ForceNonceCheck',
      disableInternet: 'DisableInternet',
      appCodeAuthType: 'AppCodeAuthType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      apiName: 'string',
      visibility: 'string',
      description: 'string',
      authType: 'string',
      requestConfig: 'string',
      serviceConfig: 'string',
      requestParameters: 'string',
      systemParameters: 'string',
      constantParameters: 'string',
      serviceParameters: 'string',
      serviceParametersMap: 'string',
      resultType: 'string',
      resultSample: 'string',
      failResultSample: 'string',
      errorCodeSamples: 'string',
      resultDescriptions: 'string',
      openIdConnectConfig: 'string',
      allowSignatureMethod: 'string',
      webSocketApiType: 'string',
      resultBodyModel: 'string',
      forceNonceCheck: 'boolean',
      disableInternet: 'boolean',
      appCodeAuthType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApiResponseBody extends $tea.Model {
  apiId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConflictApisRequest extends $tea.Model {
  securityToken?: string;
  flowId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      flowId: 'FlowId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      flowId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConflictApisResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  conflictApis?: DescribeConflictApisResponseBodyConflictApis;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      conflictApis: 'ConflictApis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      conflictApis: DescribeConflictApisResponseBodyConflictApis,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConflictApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeConflictApisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeConflictApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppRequest extends $tea.Model {
  securityToken?: string;
  appId?: number;
  tag?: DeleteAppRequestTag[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      appId: 'AppId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      appId: 'number',
      tag: { 'type': 'array', 'itemType': DeleteAppRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResponseBody extends $tea.Model {
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

export class DeleteAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionLatencyRequest extends $tea.Model {
  securityToken?: string;
  startTime?: string;
  endTime?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
      endTime: 'EndTime',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      startTime: 'string',
      endTime: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionLatencyResponseBody extends $tea.Model {
  requestId?: string;
  latencyPacket?: DescribeRegionLatencyResponseBodyLatencyPacket;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      latencyPacket: 'LatencyPacket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      latencyPacket: DescribeRegionLatencyResponseBodyLatencyPacket,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionLatencyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionLatencyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionLatencyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceSpecRequest extends $tea.Model {
  instanceId?: string;
  instanceSpec?: string;
  autoPay?: boolean;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceSpec: 'InstanceSpec',
      autoPay: 'AutoPay',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceSpec: 'string',
      autoPay: 'boolean',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceSpecResponseBody extends $tea.Model {
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

export class ModifyInstanceSpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAbolishApisRequest extends $tea.Model {
  securityToken?: string;
  api?: BatchAbolishApisRequestApi[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      api: 'Api',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      api: { 'type': 'array', 'itemType': BatchAbolishApisRequestApi },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAbolishApisResponseBody extends $tea.Model {
  operationId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAbolishApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchAbolishApisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchAbolishApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoriesRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  stageName?: string;
  apiId?: string;
  apiName?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      stageName: 'StageName',
      apiId: 'ApiId',
      apiName: 'ApiName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      stageName: 'string',
      apiId: 'string',
      apiName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoriesResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  apiHisItems?: DescribeApiHistoriesResponseBodyApiHisItems;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      apiHisItems: 'ApiHisItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      apiHisItems: DescribeApiHistoriesResponseBodyApiHisItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApiHistoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApiHistoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTrafficControlApisRequest extends $tea.Model {
  securityToken?: string;
  trafficControlId?: string;
  groupId?: string;
  apiIds?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      trafficControlId: 'TrafficControlId',
      groupId: 'GroupId',
      apiIds: 'ApiIds',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      trafficControlId: 'string',
      groupId: 'string',
      apiIds: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTrafficControlApisResponseBody extends $tea.Model {
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

export class RemoveTrafficControlApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveTrafficControlApisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveTrafficControlApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiMarketAttributesRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  apiId?: string;
  needCharging?: boolean;
  marketChargingMode?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      apiId: 'ApiId',
      needCharging: 'NeedCharging',
      marketChargingMode: 'MarketChargingMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      apiId: 'string',
      needCharging: 'boolean',
      marketChargingMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiMarketAttributesResponseBody extends $tea.Model {
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

export class ModifyApiMarketAttributesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyApiMarketAttributesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyApiMarketAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAllTrafficSpecialControlRequest extends $tea.Model {
  securityToken?: string;
  trafficControlId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      trafficControlId: 'TrafficControlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      trafficControlId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAllTrafficSpecialControlResponseBody extends $tea.Model {
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

export class DeleteAllTrafficSpecialControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAllTrafficSpecialControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAllTrafficSpecialControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbolishApiRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  apiId?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      apiId: 'ApiId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      apiId: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbolishApiResponseBody extends $tea.Model {
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

export class AbolishApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AbolishApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AbolishApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApiGroupRequest extends $tea.Model {
  securityToken?: string;
  groupName?: string;
  basePath?: string;
  description?: string;
  instanceId?: string;
  tag?: CreateApiGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupName: 'GroupName',
      basePath: 'BasePath',
      description: 'Description',
      instanceId: 'InstanceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupName: 'string',
      basePath: 'string',
      description: 'string',
      instanceId: 'string',
      tag: { 'type': 'array', 'itemType': CreateApiGroupRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApiGroupResponseBody extends $tea.Model {
  tagStatus?: boolean;
  basePath?: string;
  requestId?: string;
  description?: string;
  groupName?: string;
  groupId?: string;
  instanceId?: string;
  subDomain?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      tagStatus: 'TagStatus',
      basePath: 'BasePath',
      requestId: 'RequestId',
      description: 'Description',
      groupName: 'GroupName',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      subDomain: 'SubDomain',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagStatus: 'boolean',
      basePath: 'string',
      requestId: 'string',
      description: 'string',
      groupName: 'string',
      groupId: 'string',
      instanceId: 'string',
      subDomain: 'string',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApiGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateApiGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateApiGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductRequest extends $tea.Model {
  securityToken?: string;
  productId?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      productId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResolutionRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  domainNames?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      domainNames: 'DomainNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      domainNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResolutionResponseBody extends $tea.Model {
  groupId?: string;
  requestId?: string;
  domainResolutions?: DescribeDomainsResolutionResponseBodyDomainResolutions;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      requestId: 'RequestId',
      domainResolutions: 'DomainResolutions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      requestId: 'string',
      domainResolutions: DescribeDomainsResolutionResponseBodyDomainResolutions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResolutionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainsResolutionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainsResolutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApiRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  apiId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      apiId: 'ApiId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      apiId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApiResponseBody extends $tea.Model {
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

export class DeleteApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SynchronizeGroupConfigFlowStartRequest extends $tea.Model {
  securityToken?: string;
  flowId?: string;
  modifyPolicy?: string;
  vpcName?: string;
  vpcSchema?: string;
  include?: string[];
  exclude?: string[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      flowId: 'FlowId',
      modifyPolicy: 'ModifyPolicy',
      vpcName: 'VpcName',
      vpcSchema: 'VpcSchema',
      include: 'Include',
      exclude: 'Exclude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      flowId: 'string',
      modifyPolicy: 'string',
      vpcName: 'string',
      vpcSchema: 'string',
      include: { 'type': 'array', 'itemType': 'string' },
      exclude: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SynchronizeGroupConfigFlowStartResponseBody extends $tea.Model {
  operationId?: string;
  requestId?: string;
  launch?: boolean;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      requestId: 'RequestId',
      launch: 'Launch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      requestId: 'string',
      launch: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SynchronizeGroupConfigFlowStartResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SynchronizeGroupConfigFlowStartResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SynchronizeGroupConfigFlowStartResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiGroupRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiGroupResponseBody extends $tea.Model {
  status?: string;
  purchasedTime?: string;
  requestId?: string;
  groupId?: string;
  groupName?: string;
  description?: string;
  regionId?: string;
  domains?: DescribePurchasedApiGroupResponseBodyDomains;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      purchasedTime: 'PurchasedTime',
      requestId: 'RequestId',
      groupId: 'GroupId',
      groupName: 'GroupName',
      description: 'Description',
      regionId: 'RegionId',
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      purchasedTime: 'string',
      requestId: 'string',
      groupId: 'string',
      groupName: 'string',
      description: 'string',
      regionId: 'string',
      domains: DescribePurchasedApiGroupResponseBodyDomains,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePurchasedApiGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePurchasedApiGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshMarketGroupAuthorizationsRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshMarketGroupAuthorizationsResponseBody extends $tea.Model {
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

export class RefreshMarketGroupAuthorizationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RefreshMarketGroupAuthorizationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RefreshMarketGroupAuthorizationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIpControlPolicyItemRequest extends $tea.Model {
  securityToken?: string;
  ipControlId?: string;
  policyItemId?: string;
  appId?: string;
  cidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ipControlId: 'IpControlId',
      policyItemId: 'PolicyItemId',
      appId: 'AppId',
      cidrIp: 'CidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ipControlId: 'string',
      policyItemId: 'string',
      appId: 'string',
      cidrIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIpControlPolicyItemResponseBody extends $tea.Model {
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

export class ModifyIpControlPolicyItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyIpControlPolicyItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyIpControlPolicyItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrafficControlRequest extends $tea.Model {
  securityToken?: string;
  trafficControlName?: string;
  trafficControlUnit?: string;
  apiDefault?: number;
  userDefault?: number;
  appDefault?: number;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      trafficControlName: 'TrafficControlName',
      trafficControlUnit: 'TrafficControlUnit',
      apiDefault: 'ApiDefault',
      userDefault: 'UserDefault',
      appDefault: 'AppDefault',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      trafficControlName: 'string',
      trafficControlUnit: 'string',
      apiDefault: 'number',
      userDefault: 'number',
      appDefault: 'number',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrafficControlResponseBody extends $tea.Model {
  trafficControlId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      trafficControlId: 'TrafficControlId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficControlId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrafficControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTrafficControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTrafficControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdkGenerateByAppRequest extends $tea.Model {
  securityToken?: string;
  appId?: number;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      appId: 'AppId',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      appId: 'number',
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdkGenerateByAppResponseBody extends $tea.Model {
  downloadLink?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      downloadLink: 'DownloadLink',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadLink: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdkGenerateByAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SdkGenerateByAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SdkGenerateByAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainCertificateRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  domainName?: string;
  certificateName?: string;
  certificateBody?: string;
  certificatePrivateKey?: string;
  caCertificateBody?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      domainName: 'DomainName',
      certificateName: 'CertificateName',
      certificateBody: 'CertificateBody',
      certificatePrivateKey: 'CertificatePrivateKey',
      caCertificateBody: 'CaCertificateBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      domainName: 'string',
      certificateName: 'string',
      certificateBody: 'string',
      certificatePrivateKey: 'string',
      caCertificateBody: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainCertificateResponseBody extends $tea.Model {
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

export class SetDomainCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetDomainCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDomainCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelsRequest extends $tea.Model {
  groupId?: string;
  modelName?: string;
  pageSize?: number;
  pageNumber?: number;
  modelId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      modelName: 'ModelName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      modelId: 'ModelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      modelName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      modelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelsResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  modelDetails?: DescribeModelsResponseBodyModelDetails;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      modelDetails: 'ModelDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      modelDetails: DescribeModelsResponseBodyModelDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeModelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeModelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdkGenerateByGroupRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdkGenerateByGroupResponseBody extends $tea.Model {
  downloadLink?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      downloadLink: 'DownloadLink',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadLink: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdkGenerateByGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SdkGenerateByGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SdkGenerateByGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAppsAuthoritiesRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  apiId?: string;
  stageName?: string;
  appIds?: string;
  description?: string;
  authValidTime?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      apiId: 'ApiId',
      stageName: 'StageName',
      appIds: 'AppIds',
      description: 'Description',
      authValidTime: 'AuthValidTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      apiId: 'string',
      stageName: 'string',
      appIds: 'string',
      description: 'string',
      authValidTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAppsAuthoritiesResponseBody extends $tea.Model {
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

export class SetAppsAuthoritiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetAppsAuthoritiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetAppsAuthoritiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstanceSupportStageNameRequest extends $tea.Model {
  securityToken?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstanceSupportStageNameResponseBody extends $tea.Model {
  isSupport?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isSupport: 'IsSupport',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSupport: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstanceSupportStageNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckInstanceSupportStageNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckInstanceSupportStageNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  securityToken?: string;
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  resourceId?: string[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      resourceType: 'ResourceType',
      tag: 'Tag',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
      resourceId: { 'type': 'array', 'itemType': 'string' },
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

export class DescribeApiTrafficDataRequest extends $tea.Model {
  securityToken?: string;
  apiId?: string;
  groupId?: string;
  startTime?: string;
  endTime?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      apiId: 'ApiId',
      groupId: 'GroupId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      apiId: 'string',
      groupId: 'string',
      startTime: 'string',
      endTime: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiTrafficDataResponseBody extends $tea.Model {
  requestId?: string;
  callUploads?: DescribeApiTrafficDataResponseBodyCallUploads;
  callDownloads?: DescribeApiTrafficDataResponseBodyCallDownloads;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      callUploads: 'CallUploads',
      callDownloads: 'CallDownloads',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      callUploads: DescribeApiTrafficDataResponseBodyCallUploads,
      callDownloads: DescribeApiTrafficDataResponseBodyCallDownloads,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApiTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApiTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequest extends $tea.Model {
  securityToken?: string;
  appName?: string;
  description?: string;
  source?: string;
  tag?: CreateAppRequestTag[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      appName: 'AppName',
      description: 'Description',
      source: 'Source',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      appName: 'string',
      description: 'string',
      source: 'string',
      tag: { 'type': 'array', 'itemType': CreateAppRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBody extends $tea.Model {
  tagStatus?: boolean;
  requestId?: string;
  appId?: number;
  static names(): { [key: string]: string } {
    return {
      tagStatus: 'TagStatus',
      requestId: 'RequestId',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagStatus: 'boolean',
      requestId: 'string',
      appId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAppCodeRequest extends $tea.Model {
  securityToken?: string;
  appCode?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      appCode: 'AppCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      appCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAppCodeResponseBody extends $tea.Model {
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

export class ResetAppCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResetAppCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetAppCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApiStageVariableRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  stageId?: string;
  variableName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      stageId: 'StageId',
      variableName: 'VariableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      stageId: 'string',
      variableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApiStageVariableResponseBody extends $tea.Model {
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

export class DeleteApiStageVariableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteApiStageVariableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteApiStageVariableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReadyReservationApisRequest extends $tea.Model {
  securityToken?: string;
  flowId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      flowId: 'FlowId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      flowId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReadyReservationApisResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  apis?: DescribeReadyReservationApisResponseBodyApis;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      apis: 'Apis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      apis: DescribeReadyReservationApisResponseBodyApis,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReadyReservationApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeReadyReservationApisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeReadyReservationApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySignatureRequest extends $tea.Model {
  securityToken?: string;
  signatureId?: string;
  signatureName?: string;
  signatureKey?: string;
  signatureSecret?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      signatureId: 'SignatureId',
      signatureName: 'SignatureName',
      signatureKey: 'SignatureKey',
      signatureSecret: 'SignatureSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      signatureId: 'string',
      signatureName: 'string',
      signatureKey: 'string',
      signatureSecret: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySignatureResponseBody extends $tea.Model {
  requestId?: string;
  signatureId?: string;
  signatureName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      signatureId: 'SignatureId',
      signatureName: 'SignatureName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      signatureId: 'string',
      signatureName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySignatureResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySignatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySignatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceLatencyRequest extends $tea.Model {
  securityToken?: string;
  startTime?: string;
  endTime?: string;
  stageName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
      endTime: 'EndTime',
      stageName: 'StageName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      startTime: 'string',
      endTime: 'string',
      stageName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceLatencyResponseBody extends $tea.Model {
  requestId?: string;
  instanceLatency?: DescribeInstanceLatencyResponseBodyInstanceLatency;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceLatency: 'InstanceLatency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceLatency: DescribeInstanceLatencyResponseBodyInstanceLatency,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceLatencyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceLatencyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceLatencyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiQpsDataRequest extends $tea.Model {
  securityToken?: string;
  apiId?: string;
  groupId?: string;
  startTime?: string;
  endTime?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      apiId: 'ApiId',
      groupId: 'GroupId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      apiId: 'string',
      groupId: 'string',
      startTime: 'string',
      endTime: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiQpsDataResponseBody extends $tea.Model {
  requestId?: string;
  callSuccesses?: DescribeApiQpsDataResponseBodyCallSuccesses;
  callFails?: DescribeApiQpsDataResponseBodyCallFails;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      callSuccesses: 'CallSuccesses',
      callFails: 'CallFails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      callSuccesses: DescribeApiQpsDataResponseBodyCallSuccesses,
      callFails: DescribeApiQpsDataResponseBodyCallFails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiQpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApiQpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApiQpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHttpCodeRequest extends $tea.Model {
  securityToken?: string;
  startTime?: string;
  endTime?: string;
  stageName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
      endTime: 'EndTime',
      stageName: 'StageName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      startTime: 'string',
      endTime: 'string',
      stageName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHttpCodeResponseBody extends $tea.Model {
  requestId?: string;
  instanceHttpCode?: DescribeInstanceHttpCodeResponseBodyInstanceHttpCode;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceHttpCode: 'InstanceHttpCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceHttpCode: DescribeInstanceHttpCodeResponseBodyInstanceHttpCode,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHttpCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceHttpCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceHttpCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppSecurityRequest extends $tea.Model {
  securityToken?: string;
  appId?: number;
  tag?: DescribeAppSecurityRequestTag[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      appId: 'AppId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      appId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeAppSecurityRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppSecurityResponseBody extends $tea.Model {
  appSecret?: string;
  requestId?: string;
  appKey?: string;
  modifiedTime?: string;
  appCode?: string;
  createdTime?: string;
  static names(): { [key: string]: string } {
    return {
      appSecret: 'AppSecret',
      requestId: 'RequestId',
      appKey: 'AppKey',
      modifiedTime: 'ModifiedTime',
      appCode: 'AppCode',
      createdTime: 'CreatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSecret: 'string',
      requestId: 'string',
      appKey: 'string',
      modifiedTime: 'string',
      appCode: 'string',
      createdTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppSecurityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppSecurityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppSecurityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesRequest extends $tea.Model {
  securityToken?: string;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBody extends $tea.Model {
  requestId?: string;
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

export class DescribeRegionTrafficRequest extends $tea.Model {
  securityToken?: string;
  startTime?: string;
  endTime?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
      endTime: 'EndTime',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      startTime: 'string',
      endTime: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionTrafficResponseBody extends $tea.Model {
  requestId?: string;
  trafficPerSecond?: DescribeRegionTrafficResponseBodyTrafficPerSecond;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficPerSecond: 'TrafficPerSecond',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficPerSecond: DescribeRegionTrafficResponseBodyTrafficPerSecond,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionTrafficResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionTrafficResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionTrafficResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByAppRequest extends $tea.Model {
  securityToken?: string;
  appId?: number;
  pageNumber?: number;
  pageSize?: number;
  apiUid?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      appId: 'AppId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      apiUid: 'ApiUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      appId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      apiUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByAppResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  appApiRelationInfos?: DescribeApisByAppResponseBodyAppApiRelationInfos;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      appApiRelationInfos: 'AppApiRelationInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      appApiRelationInfos: DescribeApisByAppResponseBodyAppApiRelationInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApisByAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApisByAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionQpsGroupByInstanceRequest extends $tea.Model {
  securityToken?: string;
  startTime?: string;
  endTime?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
      endTime: 'EndTime',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      startTime: 'string',
      endTime: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionQpsGroupByInstanceResponseBody extends $tea.Model {
  requestId?: string;
  instanceQps?: DescribeRegionQpsGroupByInstanceResponseBodyInstanceQps;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceQps: 'InstanceQps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceQps: DescribeRegionQpsGroupByInstanceResponseBodyInstanceQps,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionQpsGroupByInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionQpsGroupByInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionQpsGroupByInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DryRunSwaggerRequest extends $tea.Model {
  overwrite?: boolean;
  globalCondition?: { [key: string]: any };
  dataFormat?: string;
  data?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      overwrite: 'Overwrite',
      globalCondition: 'GlobalCondition',
      dataFormat: 'DataFormat',
      data: 'Data',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwrite: 'boolean',
      globalCondition: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dataFormat: 'string',
      data: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DryRunSwaggerShrinkRequest extends $tea.Model {
  overwrite?: boolean;
  globalConditionShrink?: string;
  dataFormat?: string;
  data?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      overwrite: 'Overwrite',
      globalConditionShrink: 'GlobalCondition',
      dataFormat: 'DataFormat',
      data: 'Data',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwrite: 'boolean',
      globalConditionShrink: 'string',
      dataFormat: 'string',
      data: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DryRunSwaggerResponseBody extends $tea.Model {
  globalCondition?: string;
  requestId?: string;
  success?: DryRunSwaggerResponseBodySuccess;
  failed?: DryRunSwaggerResponseBodyFailed;
  modelFailed?: DryRunSwaggerResponseBodyModelFailed;
  modelSuccess?: DryRunSwaggerResponseBodyModelSuccess;
  static names(): { [key: string]: string } {
    return {
      globalCondition: 'GlobalCondition',
      requestId: 'RequestId',
      success: 'Success',
      failed: 'Failed',
      modelFailed: 'ModelFailed',
      modelSuccess: 'ModelSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalCondition: 'string',
      requestId: 'string',
      success: DryRunSwaggerResponseBodySuccess,
      failed: DryRunSwaggerResponseBodyFailed,
      modelFailed: DryRunSwaggerResponseBodyModelFailed,
      modelSuccess: DryRunSwaggerResponseBodyModelSuccess,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DryRunSwaggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DryRunSwaggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DryRunSwaggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePluginRequest extends $tea.Model {
  securityToken?: string;
  pluginName?: string;
  pluginType?: string;
  pluginData?: string;
  description?: string;
  tag?: CreatePluginRequestTag[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      pluginName: 'PluginName',
      pluginType: 'PluginType',
      pluginData: 'PluginData',
      description: 'Description',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      pluginName: 'string',
      pluginType: 'string',
      pluginData: 'string',
      description: 'string',
      tag: { 'type': 'array', 'itemType': CreatePluginRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePluginResponseBody extends $tea.Model {
  pluginId?: string;
  tagStatus?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pluginId: 'PluginId',
      tagStatus: 'TagStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginId: 'string',
      tagStatus: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePluginResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreatePluginResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePluginResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLogConfigRequest extends $tea.Model {
  securityToken?: string;
  slsProject?: string;
  slsLogStore?: string;
  logType?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      slsProject: 'SlsProject',
      slsLogStore: 'SlsLogStore',
      logType: 'LogType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      slsProject: 'string',
      slsLogStore: 'string',
      logType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLogConfigResponseBody extends $tea.Model {
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

export class ModifyLogConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyLogConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByIpControlRequest extends $tea.Model {
  securityToken?: string;
  ipControlId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ipControlId: 'IpControlId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ipControlId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByIpControlResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  apiInfos?: DescribeApisByIpControlResponseBodyApiInfos;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      apiInfos: 'ApiInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      apiInfos: DescribeApisByIpControlResponseBodyApiInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByIpControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApisByIpControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApisByIpControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  apiId?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      apiId: 'ApiId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      apiId: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBody extends $tea.Model {
  apiId?: string;
  resultType?: string;
  disableInternet?: boolean;
  resultBodyModel?: string;
  resultSample?: string;
  allowSignatureMethod?: string;
  regionId?: string;
  forceNonceCheck?: boolean;
  visibility?: string;
  failResultSample?: string;
  authType?: string;
  requestId?: string;
  description?: string;
  groupName?: string;
  groupId?: string;
  deployedTime?: string;
  stageName?: string;
  apiName?: string;
  requestConfig?: DescribeDeployedApiResponseBodyRequestConfig;
  serviceConfig?: DescribeDeployedApiResponseBodyServiceConfig;
  openIdConnectConfig?: DescribeDeployedApiResponseBodyOpenIdConnectConfig;
  errorCodeSamples?: DescribeDeployedApiResponseBodyErrorCodeSamples;
  resultDescriptions?: DescribeDeployedApiResponseBodyResultDescriptions;
  systemParameters?: DescribeDeployedApiResponseBodySystemParameters;
  customSystemParameters?: DescribeDeployedApiResponseBodyCustomSystemParameters;
  constantParameters?: DescribeDeployedApiResponseBodyConstantParameters;
  requestParameters?: DescribeDeployedApiResponseBodyRequestParameters;
  serviceParameters?: DescribeDeployedApiResponseBodyServiceParameters;
  serviceParametersMap?: DescribeDeployedApiResponseBodyServiceParametersMap;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      resultType: 'ResultType',
      disableInternet: 'DisableInternet',
      resultBodyModel: 'ResultBodyModel',
      resultSample: 'ResultSample',
      allowSignatureMethod: 'AllowSignatureMethod',
      regionId: 'RegionId',
      forceNonceCheck: 'ForceNonceCheck',
      visibility: 'Visibility',
      failResultSample: 'FailResultSample',
      authType: 'AuthType',
      requestId: 'RequestId',
      description: 'Description',
      groupName: 'GroupName',
      groupId: 'GroupId',
      deployedTime: 'DeployedTime',
      stageName: 'StageName',
      apiName: 'ApiName',
      requestConfig: 'RequestConfig',
      serviceConfig: 'ServiceConfig',
      openIdConnectConfig: 'OpenIdConnectConfig',
      errorCodeSamples: 'ErrorCodeSamples',
      resultDescriptions: 'ResultDescriptions',
      systemParameters: 'SystemParameters',
      customSystemParameters: 'CustomSystemParameters',
      constantParameters: 'ConstantParameters',
      requestParameters: 'RequestParameters',
      serviceParameters: 'ServiceParameters',
      serviceParametersMap: 'ServiceParametersMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      resultType: 'string',
      disableInternet: 'boolean',
      resultBodyModel: 'string',
      resultSample: 'string',
      allowSignatureMethod: 'string',
      regionId: 'string',
      forceNonceCheck: 'boolean',
      visibility: 'string',
      failResultSample: 'string',
      authType: 'string',
      requestId: 'string',
      description: 'string',
      groupName: 'string',
      groupId: 'string',
      deployedTime: 'string',
      stageName: 'string',
      apiName: 'string',
      requestConfig: DescribeDeployedApiResponseBodyRequestConfig,
      serviceConfig: DescribeDeployedApiResponseBodyServiceConfig,
      openIdConnectConfig: DescribeDeployedApiResponseBodyOpenIdConnectConfig,
      errorCodeSamples: DescribeDeployedApiResponseBodyErrorCodeSamples,
      resultDescriptions: DescribeDeployedApiResponseBodyResultDescriptions,
      systemParameters: DescribeDeployedApiResponseBodySystemParameters,
      customSystemParameters: DescribeDeployedApiResponseBodyCustomSystemParameters,
      constantParameters: DescribeDeployedApiResponseBodyConstantParameters,
      requestParameters: DescribeDeployedApiResponseBodyRequestParameters,
      serviceParameters: DescribeDeployedApiResponseBodyServiceParameters,
      serviceParametersMap: DescribeDeployedApiResponseBodyServiceParametersMap,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeployedApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeployedApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisBySignatureRequest extends $tea.Model {
  securityToken?: string;
  signatureId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      signatureId: 'SignatureId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      signatureId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisBySignatureResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  apiInfos?: DescribeApisBySignatureResponseBodyApiInfos;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      apiInfos: 'ApiInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      apiInfos: DescribeApisBySignatureResponseBodyApiInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisBySignatureResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApisBySignatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApisBySignatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccordanceApisRequest extends $tea.Model {
  securityToken?: string;
  flowId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      flowId: 'FlowId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      flowId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccordanceApisResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  accordanceApis?: DescribeAccordanceApisResponseBodyAccordanceApis;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      accordanceApis: 'AccordanceApis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      accordanceApis: DescribeAccordanceApisResponseBodyAccordanceApis,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccordanceApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAccordanceApisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAccordanceApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveApisAuthoritiesRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  appId?: number;
  stageName?: string;
  apiIds?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      appId: 'AppId',
      stageName: 'StageName',
      apiIds: 'ApiIds',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      appId: 'number',
      stageName: 'string',
      apiIds: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveApisAuthoritiesResponseBody extends $tea.Model {
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

export class RemoveApisAuthoritiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveApisAuthoritiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveApisAuthoritiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVpcAccessRequest extends $tea.Model {
  securityToken?: string;
  name?: string;
  vpcId?: string;
  instanceId?: string;
  port?: number;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      name: 'Name',
      vpcId: 'VpcId',
      instanceId: 'InstanceId',
      port: 'Port',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      name: 'string',
      vpcId: 'string',
      instanceId: 'string',
      port: 'number',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVpcAccessResponseBody extends $tea.Model {
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

export class SetVpcAccessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetVpcAccessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetVpcAccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachPluginRequest extends $tea.Model {
  securityToken?: string;
  pluginId?: string;
  groupId?: string;
  apiIds?: string;
  stageName?: string;
  apiId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      pluginId: 'PluginId',
      groupId: 'GroupId',
      apiIds: 'ApiIds',
      stageName: 'StageName',
      apiId: 'ApiId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      pluginId: 'string',
      groupId: 'string',
      apiIds: 'string',
      stageName: 'string',
      apiId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachPluginResponseBody extends $tea.Model {
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

export class AttachPluginResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AttachPluginResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachPluginResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSignaturesByApiRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  apiId?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      apiId: 'ApiId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      apiId: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSignaturesByApiResponseBody extends $tea.Model {
  requestId?: string;
  signatures?: DescribeSignaturesByApiResponseBodySignatures;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      signatures: 'Signatures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      signatures: DescribeSignaturesByApiResponseBodySignatures,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSignaturesByApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSignaturesByApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSignaturesByApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  apiId?: string;
  apiName?: string;
  description?: string;
  visibility?: string;
  authType?: string;
  requestConfig?: string;
  serviceConfig?: string;
  requestParameters?: string;
  systemParameters?: string;
  constantParameters?: string;
  serviceParameters?: string;
  serviceParametersMap?: string;
  resultType?: string;
  resultSample?: string;
  failResultSample?: string;
  errorCodeSamples?: string;
  resultDescriptions?: string;
  openIdConnectConfig?: string;
  allowSignatureMethod?: string;
  webSocketApiType?: string;
  resultBodyModel?: string;
  forceNonceCheck?: boolean;
  disableInternet?: boolean;
  appCodeAuthType?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      apiId: 'ApiId',
      apiName: 'ApiName',
      description: 'Description',
      visibility: 'Visibility',
      authType: 'AuthType',
      requestConfig: 'RequestConfig',
      serviceConfig: 'ServiceConfig',
      requestParameters: 'RequestParameters',
      systemParameters: 'SystemParameters',
      constantParameters: 'ConstantParameters',
      serviceParameters: 'ServiceParameters',
      serviceParametersMap: 'ServiceParametersMap',
      resultType: 'ResultType',
      resultSample: 'ResultSample',
      failResultSample: 'FailResultSample',
      errorCodeSamples: 'ErrorCodeSamples',
      resultDescriptions: 'ResultDescriptions',
      openIdConnectConfig: 'OpenIdConnectConfig',
      allowSignatureMethod: 'AllowSignatureMethod',
      webSocketApiType: 'WebSocketApiType',
      resultBodyModel: 'ResultBodyModel',
      forceNonceCheck: 'ForceNonceCheck',
      disableInternet: 'DisableInternet',
      appCodeAuthType: 'AppCodeAuthType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      apiId: 'string',
      apiName: 'string',
      description: 'string',
      visibility: 'string',
      authType: 'string',
      requestConfig: 'string',
      serviceConfig: 'string',
      requestParameters: 'string',
      systemParameters: 'string',
      constantParameters: 'string',
      serviceParameters: 'string',
      serviceParametersMap: 'string',
      resultType: 'string',
      resultSample: 'string',
      failResultSample: 'string',
      errorCodeSamples: 'string',
      resultDescriptions: 'string',
      openIdConnectConfig: 'string',
      allowSignatureMethod: 'string',
      webSocketApiType: 'string',
      resultBodyModel: 'string',
      forceNonceCheck: 'boolean',
      disableInternet: 'boolean',
      appCodeAuthType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiResponseBody extends $tea.Model {
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

export class ModifyApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAppSecretRequest extends $tea.Model {
  securityToken?: string;
  appKey?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      appKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAppSecretResponseBody extends $tea.Model {
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

export class ResetAppSecretResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResetAppSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetAppSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTrafficSpecialControlRequest extends $tea.Model {
  securityToken?: string;
  trafficControlId?: string;
  specialType?: string;
  specialKey?: string;
  trafficValue?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      trafficControlId: 'TrafficControlId',
      specialType: 'SpecialType',
      specialKey: 'SpecialKey',
      trafficValue: 'TrafficValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      trafficControlId: 'string',
      specialType: 'string',
      specialKey: 'string',
      trafficValue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTrafficSpecialControlResponseBody extends $tea.Model {
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

export class AddTrafficSpecialControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddTrafficSpecialControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddTrafficSpecialControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployApiRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  apiId?: string;
  stageName?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      apiId: 'ApiId',
      stageName: 'StageName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      apiId: 'string',
      stageName: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployApiResponseBody extends $tea.Model {
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

export class DeployApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeployApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeployApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppRequest extends $tea.Model {
  securityToken?: string;
  appId?: number;
  appName?: string;
  description?: string;
  tag?: ModifyAppRequestTag[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      appId: 'AppId',
      appName: 'AppName',
      description: 'Description',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      appId: 'number',
      appName: 'string',
      description: 'string',
      tag: { 'type': 'array', 'itemType': ModifyAppRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppResponseBody extends $tea.Model {
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

export class ModifyAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainWebSocketStatusRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  domainName?: string;
  actionValue?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      domainName: 'DomainName',
      actionValue: 'ActionValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      domainName: 'string',
      actionValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainWebSocketStatusResponseBody extends $tea.Model {
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

export class SetDomainWebSocketStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetDomainWebSocketStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDomainWebSocketStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDropConnectionsRequest extends $tea.Model {
  securityToken?: string;
  startTime?: string;
  endTime?: string;
  instanceId?: string;
  sbcName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      sbcName: 'SbcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      startTime: 'string',
      endTime: 'string',
      instanceId: 'string',
      sbcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDropConnectionsResponseBody extends $tea.Model {
  requestId?: string;
  instanceDropConnections?: DescribeInstanceDropConnectionsResponseBodyInstanceDropConnections;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceDropConnections: 'InstanceDropConnections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceDropConnections: DescribeInstanceDropConnectionsResponseBodyInstanceDropConnections,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDropConnectionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceDropConnectionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceDropConnectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiTrafficControlsRequest extends $tea.Model {
  securityToken?: string;
  stageName?: string;
  groupId?: string;
  apiIds?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      stageName: 'StageName',
      groupId: 'GroupId',
      apiIds: 'ApiIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      stageName: 'string',
      groupId: 'string',
      apiIds: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiTrafficControlsResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  apiTrafficControls?: DescribeApiTrafficControlsResponseBodyApiTrafficControls;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      apiTrafficControls: 'ApiTrafficControls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      apiTrafficControls: DescribeApiTrafficControlsResponseBodyApiTrafficControls,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiTrafficControlsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApiTrafficControlsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApiTrafficControlsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSignatureApisRequest extends $tea.Model {
  securityToken?: string;
  signatureId?: string;
  groupId?: string;
  apiIds?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      signatureId: 'SignatureId',
      groupId: 'GroupId',
      apiIds: 'ApiIds',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      signatureId: 'string',
      groupId: 'string',
      apiIds: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSignatureApisResponseBody extends $tea.Model {
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

export class SetSignatureApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetSignatureApisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetSignatureApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRequest extends $tea.Model {
  securityToken?: string;
  appId?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      appId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponseBody extends $tea.Model {
  appName?: string;
  requestId?: string;
  modifiedTime?: string;
  description?: string;
  appId?: number;
  createdTime?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      requestId: 'RequestId',
      modifiedTime: 'ModifiedTime',
      description: 'Description',
      appId: 'AppId',
      createdTime: 'CreatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      requestId: 'string',
      modifiedTime: 'string',
      description: 'string',
      appId: 'number',
      createdTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveIpControlPolicyItemRequest extends $tea.Model {
  securityToken?: string;
  ipControlId?: string;
  policyItemIds?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ipControlId: 'IpControlId',
      policyItemIds: 'PolicyItemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ipControlId: 'string',
      policyItemIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveIpControlPolicyItemResponseBody extends $tea.Model {
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

export class RemoveIpControlPolicyItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveIpControlPolicyItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveIpControlPolicyItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTrafficRequest extends $tea.Model {
  securityToken?: string;
  startTime?: string;
  endTime?: string;
  stageName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
      endTime: 'EndTime',
      stageName: 'StageName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      startTime: 'string',
      endTime: 'string',
      stageName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTrafficResponseBody extends $tea.Model {
  requestId?: string;
  instanceTraffic?: DescribeInstanceTrafficResponseBodyInstanceTraffic;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceTraffic: 'InstanceTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceTraffic: DescribeInstanceTrafficResponseBodyInstanceTraffic,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTrafficResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceTrafficResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceTrafficResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceQpsRequest extends $tea.Model {
  securityToken?: string;
  startTime?: string;
  endTime?: string;
  stageName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
      endTime: 'EndTime',
      stageName: 'StageName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      startTime: 'string',
      endTime: 'string',
      stageName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceQpsResponseBody extends $tea.Model {
  requestId?: string;
  instanceQps?: DescribeInstanceQpsResponseBodyInstanceQps;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceQps: 'InstanceQps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceQps: DescribeInstanceQpsResponseBodyInstanceQps,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceQpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceQpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceQpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HideProductRequest extends $tea.Model {
  securityToken?: string;
  productId?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      productId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HideProductResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HideProductResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: HideProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: HideProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupQpsRequest extends $tea.Model {
  securityToken?: string;
  startTime?: string;
  endTime?: string;
  stageName?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
      endTime: 'EndTime',
      stageName: 'StageName',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      startTime: 'string',
      endTime: 'string',
      stageName: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupQpsResponseBody extends $tea.Model {
  requestId?: string;
  groupQps?: DescribeGroupQpsResponseBodyGroupQps;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      groupQps: 'GroupQps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      groupQps: DescribeGroupQpsResponseBodyGroupQps,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupQpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGroupQpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGroupQpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApiStageVariableRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  stageId?: string;
  variableName?: string;
  supportRoute?: boolean;
  variableValue?: string;
  stageRouteModel?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      stageId: 'StageId',
      variableName: 'VariableName',
      supportRoute: 'SupportRoute',
      variableValue: 'VariableValue',
      stageRouteModel: 'StageRouteModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      stageId: 'string',
      variableName: 'string',
      supportRoute: 'boolean',
      variableValue: 'string',
      stageRouteModel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApiStageVariableResponseBody extends $tea.Model {
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

export class CreateApiStageVariableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateApiStageVariableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateApiStageVariableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  rawMonitorGroupId?: number;
  auth?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      rawMonitorGroupId: 'RawMonitorGroupId',
      auth: 'Auth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      rawMonitorGroupId: 'number',
      auth: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupResponseBody extends $tea.Model {
  monitorGroupId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      monitorGroupId: 'MonitorGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorGroupId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMonitorGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMonitorGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiMarketAttributesRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  apiId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      apiId: 'ApiId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      apiId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiMarketAttributesResponseBody extends $tea.Model {
  apiId?: string;
  requestId?: string;
  marketChargingMode?: string;
  needCharging?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      requestId: 'RequestId',
      marketChargingMode: 'MarketChargingMode',
      needCharging: 'NeedCharging',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      requestId: 'string',
      marketChargingMode: 'string',
      needCharging: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiMarketAttributesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApiMarketAttributesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApiMarketAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiSignaturesRequest extends $tea.Model {
  securityToken?: string;
  stageName?: string;
  groupId?: string;
  apiIds?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      stageName: 'StageName',
      groupId: 'GroupId',
      apiIds: 'ApiIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      stageName: 'string',
      groupId: 'string',
      apiIds: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiSignaturesResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  apiSignatures?: DescribeApiSignaturesResponseBodyApiSignatures;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      apiSignatures: 'ApiSignatures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      apiSignatures: DescribeApiSignaturesResponseBodyApiSignatures,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiSignaturesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApiSignaturesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApiSignaturesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpControlPolicyItemsRequest extends $tea.Model {
  securityToken?: string;
  ipControlId?: string;
  policyItemId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ipControlId: 'IpControlId',
      policyItemId: 'PolicyItemId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ipControlId: 'string',
      policyItemId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpControlPolicyItemsResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  ipControlPolicyItems?: DescribeIpControlPolicyItemsResponseBodyIpControlPolicyItems;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      ipControlPolicyItems: 'IpControlPolicyItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      ipControlPolicyItems: DescribeIpControlPolicyItemsResponseBodyIpControlPolicyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpControlPolicyItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIpControlPolicyItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIpControlPolicyItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponseBody extends $tea.Model {
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

export class DeleteDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupConfigSynFlowsRequest extends $tea.Model {
  securityToken?: string;
  targetGroupName?: string;
  sourceGroupName?: string;
  startTime?: string;
  endTime?: string;
  flowStatus?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      targetGroupName: 'TargetGroupName',
      sourceGroupName: 'SourceGroupName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      flowStatus: 'FlowStatus',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      targetGroupName: 'string',
      sourceGroupName: 'string',
      startTime: 'string',
      endTime: 'string',
      flowStatus: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupConfigSynFlowsResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  flows?: DescribeGroupConfigSynFlowsResponseBodyFlows;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      flows: 'Flows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      flows: DescribeGroupConfigSynFlowsResponseBodyFlows,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupConfigSynFlowsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGroupConfigSynFlowsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGroupConfigSynFlowsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncApiTaskRequest extends $tea.Model {
  securityToken?: string;
  flowId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      flowId: 'FlowId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      flowId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncApiTaskResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  apis?: DescribeSyncApiTaskResponseBodyApis;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      apis: 'Apis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      apis: DescribeSyncApiTaskResponseBodyApis,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncApiTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSyncApiTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSyncApiTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiGroupRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  groupName?: string;
  basePath?: string;
  description?: string;
  userLogConfig?: string;
  customTraceConfig?: string;
  compatibleFlags?: string;
  customerConfigs?: string;
  passthroughHeaders?: string;
  defaultDomain?: string;
  rpcPattern?: string;
  tag?: ModifyApiGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      groupName: 'GroupName',
      basePath: 'BasePath',
      description: 'Description',
      userLogConfig: 'UserLogConfig',
      customTraceConfig: 'CustomTraceConfig',
      compatibleFlags: 'CompatibleFlags',
      customerConfigs: 'CustomerConfigs',
      passthroughHeaders: 'PassthroughHeaders',
      defaultDomain: 'DefaultDomain',
      rpcPattern: 'RpcPattern',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      groupName: 'string',
      basePath: 'string',
      description: 'string',
      userLogConfig: 'string',
      customTraceConfig: 'string',
      compatibleFlags: 'string',
      customerConfigs: 'string',
      passthroughHeaders: 'string',
      defaultDomain: 'string',
      rpcPattern: 'string',
      tag: { 'type': 'array', 'itemType': ModifyApiGroupRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiGroupResponseBody extends $tea.Model {
  requestId?: string;
  basePath?: string;
  groupId?: string;
  groupName?: string;
  description?: string;
  subDomain?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      basePath: 'BasePath',
      groupId: 'GroupId',
      groupName: 'GroupName',
      description: 'Description',
      subDomain: 'SubDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      basePath: 'string',
      groupId: 'string',
      groupName: 'string',
      description: 'string',
      subDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyApiGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyApiGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetWildcardDomainPatternsRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  domainName?: string;
  wildcardDomainPatterns?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      domainName: 'DomainName',
      wildcardDomainPatterns: 'WildcardDomainPatterns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      domainName: 'string',
      wildcardDomainPatterns: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetWildcardDomainPatternsResponseBody extends $tea.Model {
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

export class SetWildcardDomainPatternsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetWildcardDomainPatternsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetWildcardDomainPatternsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  apiId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      apiId: 'ApiId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      apiId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBody extends $tea.Model {
  apiId?: string;
  resultType?: string;
  webSocketApiType?: string;
  disableInternet?: boolean;
  resultBodyModel?: string;
  resultSample?: string;
  appCodeAuthType?: string;
  allowSignatureMethod?: string;
  regionId?: string;
  forceNonceCheck?: boolean;
  visibility?: string;
  failResultSample?: string;
  authType?: string;
  modifiedTime?: string;
  requestId?: string;
  description?: string;
  groupName?: string;
  groupId?: string;
  mock?: string;
  mockResult?: string;
  createdTime?: string;
  apiName?: string;
  requestConfig?: DescribeApiResponseBodyRequestConfig;
  serviceConfig?: DescribeApiResponseBodyServiceConfig;
  openIdConnectConfig?: DescribeApiResponseBodyOpenIdConnectConfig;
  errorCodeSamples?: DescribeApiResponseBodyErrorCodeSamples;
  resultDescriptions?: DescribeApiResponseBodyResultDescriptions;
  systemParameters?: DescribeApiResponseBodySystemParameters;
  customSystemParameters?: DescribeApiResponseBodyCustomSystemParameters;
  constantParameters?: DescribeApiResponseBodyConstantParameters;
  requestParameters?: DescribeApiResponseBodyRequestParameters;
  serviceParameters?: DescribeApiResponseBodyServiceParameters;
  serviceParametersMap?: DescribeApiResponseBodyServiceParametersMap;
  deployedInfos?: DescribeApiResponseBodyDeployedInfos;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      resultType: 'ResultType',
      webSocketApiType: 'WebSocketApiType',
      disableInternet: 'DisableInternet',
      resultBodyModel: 'ResultBodyModel',
      resultSample: 'ResultSample',
      appCodeAuthType: 'AppCodeAuthType',
      allowSignatureMethod: 'AllowSignatureMethod',
      regionId: 'RegionId',
      forceNonceCheck: 'ForceNonceCheck',
      visibility: 'Visibility',
      failResultSample: 'FailResultSample',
      authType: 'AuthType',
      modifiedTime: 'ModifiedTime',
      requestId: 'RequestId',
      description: 'Description',
      groupName: 'GroupName',
      groupId: 'GroupId',
      mock: 'Mock',
      mockResult: 'MockResult',
      createdTime: 'CreatedTime',
      apiName: 'ApiName',
      requestConfig: 'RequestConfig',
      serviceConfig: 'ServiceConfig',
      openIdConnectConfig: 'OpenIdConnectConfig',
      errorCodeSamples: 'ErrorCodeSamples',
      resultDescriptions: 'ResultDescriptions',
      systemParameters: 'SystemParameters',
      customSystemParameters: 'CustomSystemParameters',
      constantParameters: 'ConstantParameters',
      requestParameters: 'RequestParameters',
      serviceParameters: 'ServiceParameters',
      serviceParametersMap: 'ServiceParametersMap',
      deployedInfos: 'DeployedInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      resultType: 'string',
      webSocketApiType: 'string',
      disableInternet: 'boolean',
      resultBodyModel: 'string',
      resultSample: 'string',
      appCodeAuthType: 'string',
      allowSignatureMethod: 'string',
      regionId: 'string',
      forceNonceCheck: 'boolean',
      visibility: 'string',
      failResultSample: 'string',
      authType: 'string',
      modifiedTime: 'string',
      requestId: 'string',
      description: 'string',
      groupName: 'string',
      groupId: 'string',
      mock: 'string',
      mockResult: 'string',
      createdTime: 'string',
      apiName: 'string',
      requestConfig: DescribeApiResponseBodyRequestConfig,
      serviceConfig: DescribeApiResponseBodyServiceConfig,
      openIdConnectConfig: DescribeApiResponseBodyOpenIdConnectConfig,
      errorCodeSamples: DescribeApiResponseBodyErrorCodeSamples,
      resultDescriptions: DescribeApiResponseBodyResultDescriptions,
      systemParameters: DescribeApiResponseBodySystemParameters,
      customSystemParameters: DescribeApiResponseBodyCustomSystemParameters,
      constantParameters: DescribeApiResponseBodyConstantParameters,
      requestParameters: DescribeApiResponseBodyRequestParameters,
      serviceParameters: DescribeApiResponseBodyServiceParameters,
      serviceParametersMap: DescribeApiResponseBodyServiceParametersMap,
      deployedInfos: DescribeApiResponseBodyDeployedInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficControlsRequest extends $tea.Model {
  securityToken?: string;
  trafficControlId?: string;
  groupId?: string;
  apiId?: string;
  stageName?: string;
  trafficControlName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      trafficControlId: 'TrafficControlId',
      groupId: 'GroupId',
      apiId: 'ApiId',
      stageName: 'StageName',
      trafficControlName: 'TrafficControlName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      trafficControlId: 'string',
      groupId: 'string',
      apiId: 'string',
      stageName: 'string',
      trafficControlName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficControlsResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  trafficControls?: DescribeTrafficControlsResponseBodyTrafficControls;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      trafficControls: 'TrafficControls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      trafficControls: DescribeTrafficControlsResponseBodyTrafficControls,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficControlsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTrafficControlsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTrafficControlsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainRequest extends $tea.Model {
  groupId?: string;
  domainName?: string;
  bindStageName?: string;
  customDomainType?: string;
  isForce?: boolean;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      domainName: 'DomainName',
      bindStageName: 'BindStageName',
      customDomainType: 'CustomDomainType',
      isForce: 'IsForce',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      domainName: 'string',
      bindStageName: 'string',
      customDomainType: 'string',
      isForce: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainResponseBody extends $tea.Model {
  requestId?: string;
  domainLegalStatus?: string;
  groupId?: string;
  subDomain?: string;
  domainName?: string;
  domainBindingStatus?: string;
  domainRemark?: string;
  domainWebSocketStatus?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainLegalStatus: 'DomainLegalStatus',
      groupId: 'GroupId',
      subDomain: 'SubDomain',
      domainName: 'DomainName',
      domainBindingStatus: 'DomainBindingStatus',
      domainRemark: 'DomainRemark',
      domainWebSocketStatus: 'DomainWebSocketStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainLegalStatus: 'string',
      groupId: 'string',
      subDomain: 'string',
      domainName: 'string',
      domainBindingStatus: 'string',
      domainRemark: 'string',
      domainWebSocketStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpControlRequest extends $tea.Model {
  securityToken?: string;
  ipControlId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ipControlId: 'IpControlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ipControlId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpControlResponseBody extends $tea.Model {
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

export class DeleteIpControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteIpControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteIpControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiLatencyDataRequest extends $tea.Model {
  securityToken?: string;
  apiId?: string;
  groupId?: string;
  startTime?: string;
  endTime?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      apiId: 'ApiId',
      groupId: 'GroupId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      apiId: 'string',
      groupId: 'string',
      startTime: 'string',
      endTime: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiLatencyDataResponseBody extends $tea.Model {
  requestId?: string;
  callLatencys?: DescribeApiLatencyDataResponseBodyCallLatencys;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      callLatencys: 'CallLatencys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      callLatencys: DescribeApiLatencyDataResponseBodyCallLatencys,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiLatencyDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApiLatencyDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApiLatencyDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupLatencyRequest extends $tea.Model {
  securityToken?: string;
  startTime?: string;
  endTime?: string;
  stageName?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
      endTime: 'EndTime',
      stageName: 'StageName',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      startTime: 'string',
      endTime: 'string',
      stageName: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupLatencyResponseBody extends $tea.Model {
  requestId?: string;
  latencyPacket?: DescribeGroupLatencyResponseBodyLatencyPacket;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      latencyPacket: 'LatencyPacket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      latencyPacket: DescribeGroupLatencyResponseBodyLatencyPacket,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupLatencyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGroupLatencyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGroupLatencyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendDifferentApisRequest extends $tea.Model {
  securityToken?: string;
  flowId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      flowId: 'FlowId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      flowId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendDifferentApisResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  conflictApis?: DescribeBackendDifferentApisResponseBodyConflictApis;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      conflictApis: 'ConflictApis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      conflictApis: DescribeBackendDifferentApisResponseBodyConflictApis,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendDifferentApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackendDifferentApisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackendDifferentApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  apiId?: string;
  stageName?: string;
  historyVersion?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      apiId: 'ApiId',
      stageName: 'StageName',
      historyVersion: 'HistoryVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      apiId: 'string',
      stageName: 'string',
      historyVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBody extends $tea.Model {
  status?: string;
  apiId?: string;
  resultType?: string;
  webSocketApiType?: string;
  disableInternet?: boolean;
  resultBodyModel?: string;
  resultSample?: string;
  appCodeAuthType?: string;
  allowSignatureMethod?: string;
  regionId?: string;
  forceNonceCheck?: boolean;
  visibility?: string;
  failResultSample?: string;
  authType?: string;
  requestId?: string;
  description?: string;
  groupName?: string;
  groupId?: string;
  deployedTime?: string;
  stageName?: string;
  historyVersion?: string;
  apiName?: string;
  requestConfig?: DescribeApiHistoryResponseBodyRequestConfig;
  serviceConfig?: DescribeApiHistoryResponseBodyServiceConfig;
  openIdConnectConfig?: DescribeApiHistoryResponseBodyOpenIdConnectConfig;
  errorCodeSamples?: DescribeApiHistoryResponseBodyErrorCodeSamples;
  resultDescriptions?: DescribeApiHistoryResponseBodyResultDescriptions;
  systemParameters?: DescribeApiHistoryResponseBodySystemParameters;
  customSystemParameters?: DescribeApiHistoryResponseBodyCustomSystemParameters;
  constantParameters?: DescribeApiHistoryResponseBodyConstantParameters;
  requestParameters?: DescribeApiHistoryResponseBodyRequestParameters;
  serviceParameters?: DescribeApiHistoryResponseBodyServiceParameters;
  serviceParametersMap?: DescribeApiHistoryResponseBodyServiceParametersMap;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      apiId: 'ApiId',
      resultType: 'ResultType',
      webSocketApiType: 'WebSocketApiType',
      disableInternet: 'DisableInternet',
      resultBodyModel: 'ResultBodyModel',
      resultSample: 'ResultSample',
      appCodeAuthType: 'AppCodeAuthType',
      allowSignatureMethod: 'AllowSignatureMethod',
      regionId: 'RegionId',
      forceNonceCheck: 'ForceNonceCheck',
      visibility: 'Visibility',
      failResultSample: 'FailResultSample',
      authType: 'AuthType',
      requestId: 'RequestId',
      description: 'Description',
      groupName: 'GroupName',
      groupId: 'GroupId',
      deployedTime: 'DeployedTime',
      stageName: 'StageName',
      historyVersion: 'HistoryVersion',
      apiName: 'ApiName',
      requestConfig: 'RequestConfig',
      serviceConfig: 'ServiceConfig',
      openIdConnectConfig: 'OpenIdConnectConfig',
      errorCodeSamples: 'ErrorCodeSamples',
      resultDescriptions: 'ResultDescriptions',
      systemParameters: 'SystemParameters',
      customSystemParameters: 'CustomSystemParameters',
      constantParameters: 'ConstantParameters',
      requestParameters: 'RequestParameters',
      serviceParameters: 'ServiceParameters',
      serviceParametersMap: 'ServiceParametersMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      apiId: 'string',
      resultType: 'string',
      webSocketApiType: 'string',
      disableInternet: 'boolean',
      resultBodyModel: 'string',
      resultSample: 'string',
      appCodeAuthType: 'string',
      allowSignatureMethod: 'string',
      regionId: 'string',
      forceNonceCheck: 'boolean',
      visibility: 'string',
      failResultSample: 'string',
      authType: 'string',
      requestId: 'string',
      description: 'string',
      groupName: 'string',
      groupId: 'string',
      deployedTime: 'string',
      stageName: 'string',
      historyVersion: 'string',
      apiName: 'string',
      requestConfig: DescribeApiHistoryResponseBodyRequestConfig,
      serviceConfig: DescribeApiHistoryResponseBodyServiceConfig,
      openIdConnectConfig: DescribeApiHistoryResponseBodyOpenIdConnectConfig,
      errorCodeSamples: DescribeApiHistoryResponseBodyErrorCodeSamples,
      resultDescriptions: DescribeApiHistoryResponseBodyResultDescriptions,
      systemParameters: DescribeApiHistoryResponseBodySystemParameters,
      customSystemParameters: DescribeApiHistoryResponseBodyCustomSystemParameters,
      constantParameters: DescribeApiHistoryResponseBodyConstantParameters,
      requestParameters: DescribeApiHistoryResponseBodyRequestParameters,
      serviceParameters: DescribeApiHistoryResponseBodyServiceParameters,
      serviceParametersMap: DescribeApiHistoryResponseBodyServiceParametersMap,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApiHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApiHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePartProductRequest extends $tea.Model {
  securityToken?: string;
  productId?: number;
  name?: string;
  detail?: string;
  segment?: number;
  subscribeMode?: number;
  domain?: string;
  cateSecondId?: number[];
  userGroup?: number[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      productId: 'ProductId',
      name: 'Name',
      detail: 'Detail',
      segment: 'Segment',
      subscribeMode: 'SubscribeMode',
      domain: 'Domain',
      cateSecondId: 'CateSecondId',
      userGroup: 'UserGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      productId: 'number',
      name: 'string',
      detail: 'string',
      segment: 'number',
      subscribeMode: 'number',
      domain: 'string',
      cateSecondId: { 'type': 'array', 'itemType': 'number' },
      userGroup: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePartProductResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'isSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePartProductResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdatePartProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdatePartProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeProductSpecsOrderRequest extends $tea.Model {
  securityToken?: string;
  productId?: number;
  order?: ChangeProductSpecsOrderRequestOrder[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      productId: 'ProductId',
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      productId: 'number',
      order: { 'type': 'array', 'itemType': ChangeProductSpecsOrderRequestOrder },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeProductSpecsOrderResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeProductSpecsOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ChangeProductSpecsOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ChangeProductSpecsOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntranetDomainRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntranetDomainResponseBody extends $tea.Model {
  domainName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntranetDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateIntranetDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateIntranetDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyModelRequest extends $tea.Model {
  modelName?: string;
  description?: string;
  schema?: string;
  groupId?: string;
  newModelName?: string;
  static names(): { [key: string]: string } {
    return {
      modelName: 'ModelName',
      description: 'Description',
      schema: 'Schema',
      groupId: 'GroupId',
      newModelName: 'NewModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
      description: 'string',
      schema: 'string',
      groupId: 'string',
      newModelName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyModelResponseBody extends $tea.Model {
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

export class ModifyModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiErrorDataRequest extends $tea.Model {
  securityToken?: string;
  apiId?: string;
  groupId?: string;
  startTime?: string;
  endTime?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      apiId: 'ApiId',
      groupId: 'GroupId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      apiId: 'string',
      groupId: 'string',
      startTime: 'string',
      endTime: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiErrorDataResponseBody extends $tea.Model {
  requestId?: string;
  clientErrors?: DescribeApiErrorDataResponseBodyClientErrors;
  serverErrors?: DescribeApiErrorDataResponseBodyServerErrors;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clientErrors: 'ClientErrors',
      serverErrors: 'ServerErrors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clientErrors: DescribeApiErrorDataResponseBodyClientErrors,
      serverErrors: DescribeApiErrorDataResponseBodyServerErrors,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiErrorDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApiErrorDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApiErrorDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrafficSpecialControlRequest extends $tea.Model {
  securityToken?: string;
  trafficControlId?: string;
  specialType?: string;
  specialKey?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      trafficControlId: 'TrafficControlId',
      specialType: 'SpecialType',
      specialKey: 'SpecialKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      trafficControlId: 'string',
      specialType: 'string',
      specialKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrafficSpecialControlResponseBody extends $tea.Model {
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

export class DeleteTrafficSpecialControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteTrafficSpecialControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTrafficSpecialControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPluginRequest extends $tea.Model {
  securityToken?: string;
  pluginId?: string;
  pluginName?: string;
  pluginData?: string;
  description?: string;
  tag?: ModifyPluginRequestTag[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      pluginId: 'PluginId',
      pluginName: 'PluginName',
      pluginData: 'PluginData',
      description: 'Description',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      pluginId: 'string',
      pluginName: 'string',
      pluginData: 'string',
      description: 'string',
      tag: { 'type': 'array', 'itemType': ModifyPluginRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPluginResponseBody extends $tea.Model {
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

export class ModifyPluginResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyPluginResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyPluginResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSummaryDataRequest extends $tea.Model {
  securityToken?: string;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSummaryDataResponseBody extends $tea.Model {
  requestId?: string;
  usageGroupNum?: number;
  usageInstanceNum?: number;
  usageApiNum?: number;
  region?: string;
  comeingSoonInstanceNum?: number;
  expireInstanceNum?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageGroupNum: 'UsageGroupNum',
      usageInstanceNum: 'UsageInstanceNum',
      usageApiNum: 'UsageApiNum',
      region: 'Region',
      comeingSoonInstanceNum: 'ComeingSoonInstanceNum',
      expireInstanceNum: 'ExpireInstanceNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageGroupNum: 'number',
      usageInstanceNum: 'number',
      usageApiNum: 'number',
      region: 'string',
      comeingSoonInstanceNum: 'number',
      expireInstanceNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSummaryDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSummaryDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSummaryDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  tag?: DescribeApiGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeApiGroupRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupResponseBody extends $tea.Model {
  status?: string;
  compatibleFlags?: string;
  basePath?: string;
  ipv6Status?: string;
  userLogConfig?: string;
  customerConfigs?: string;
  requestId?: string;
  description?: string;
  httpsPolicy?: string;
  subDomain?: string;
  createdTime?: string;
  rpcPattern?: string;
  defaultDomain?: string;
  cmsMonitorGroup?: string;
  billingStatus?: string;
  trafficLimit?: number;
  passthroughHeaders?: string;
  instanceId?: string;
  vpcDomain?: string;
  instanceType?: string;
  customTraceConfig?: string;
  regionId?: string;
  modifiedTime?: string;
  groupId?: string;
  groupName?: string;
  classicVpcSubDomain?: string;
  illegalStatus?: string;
  instanceVipList?: string;
  vpcSlbIntranetDomain?: string;
  customDomains?: DescribeApiGroupResponseBodyCustomDomains;
  stageItems?: DescribeApiGroupResponseBodyStageItems;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      compatibleFlags: 'CompatibleFlags',
      basePath: 'BasePath',
      ipv6Status: 'Ipv6Status',
      userLogConfig: 'UserLogConfig',
      customerConfigs: 'CustomerConfigs',
      requestId: 'RequestId',
      description: 'Description',
      httpsPolicy: 'HttpsPolicy',
      subDomain: 'SubDomain',
      createdTime: 'CreatedTime',
      rpcPattern: 'RpcPattern',
      defaultDomain: 'DefaultDomain',
      cmsMonitorGroup: 'CmsMonitorGroup',
      billingStatus: 'BillingStatus',
      trafficLimit: 'TrafficLimit',
      passthroughHeaders: 'PassthroughHeaders',
      instanceId: 'InstanceId',
      vpcDomain: 'VpcDomain',
      instanceType: 'InstanceType',
      customTraceConfig: 'CustomTraceConfig',
      regionId: 'RegionId',
      modifiedTime: 'ModifiedTime',
      groupId: 'GroupId',
      groupName: 'GroupName',
      classicVpcSubDomain: 'ClassicVpcSubDomain',
      illegalStatus: 'IllegalStatus',
      instanceVipList: 'InstanceVipList',
      vpcSlbIntranetDomain: 'VpcSlbIntranetDomain',
      customDomains: 'CustomDomains',
      stageItems: 'StageItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      compatibleFlags: 'string',
      basePath: 'string',
      ipv6Status: 'string',
      userLogConfig: 'string',
      customerConfigs: 'string',
      requestId: 'string',
      description: 'string',
      httpsPolicy: 'string',
      subDomain: 'string',
      createdTime: 'string',
      rpcPattern: 'string',
      defaultDomain: 'string',
      cmsMonitorGroup: 'string',
      billingStatus: 'string',
      trafficLimit: 'number',
      passthroughHeaders: 'string',
      instanceId: 'string',
      vpcDomain: 'string',
      instanceType: 'string',
      customTraceConfig: 'string',
      regionId: 'string',
      modifiedTime: 'string',
      groupId: 'string',
      groupName: 'string',
      classicVpcSubDomain: 'string',
      illegalStatus: 'string',
      instanceVipList: 'string',
      vpcSlbIntranetDomain: 'string',
      customDomains: DescribeApiGroupResponseBodyCustomDomains,
      stageItems: DescribeApiGroupResponseBodyStageItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApiGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApiGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiGroupVpcWhitelistRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  vpcIds?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      vpcIds: 'VpcIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      vpcIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiGroupVpcWhitelistResponseBody extends $tea.Model {
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

export class ModifyApiGroupVpcWhitelistResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyApiGroupVpcWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyApiGroupVpcWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFcServiceLinkedRoleRequest extends $tea.Model {
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFcServiceLinkedRoleResponseBody extends $tea.Model {
  roleArn?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      roleArn: 'RoleArn',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleArn: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFcServiceLinkedRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckFcServiceLinkedRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckFcServiceLinkedRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SynchronizeGroupConfigRequest extends $tea.Model {
  securityToken?: string;
  flowId?: string;
  conflictSyncPolicy?: string;
  newSyncPolicy?: string;
  backendSyncPolicy?: string;
  conflictInclude?: string[];
  conflictExclude?: string[];
  newInclude?: string[];
  newExclude?: string[];
  backendInclude?: string[];
  backendExclude?: string[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      flowId: 'FlowId',
      conflictSyncPolicy: 'ConflictSyncPolicy',
      newSyncPolicy: 'NewSyncPolicy',
      backendSyncPolicy: 'BackendSyncPolicy',
      conflictInclude: 'ConflictInclude',
      conflictExclude: 'ConflictExclude',
      newInclude: 'NewInclude',
      newExclude: 'NewExclude',
      backendInclude: 'BackendInclude',
      backendExclude: 'BackendExclude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      flowId: 'string',
      conflictSyncPolicy: 'string',
      newSyncPolicy: 'string',
      backendSyncPolicy: 'string',
      conflictInclude: { 'type': 'array', 'itemType': 'string' },
      conflictExclude: { 'type': 'array', 'itemType': 'string' },
      newInclude: { 'type': 'array', 'itemType': 'string' },
      newExclude: { 'type': 'array', 'itemType': 'string' },
      backendInclude: { 'type': 'array', 'itemType': 'string' },
      backendExclude: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SynchronizeGroupConfigResponseBody extends $tea.Model {
  operationId?: string;
  requestId?: string;
  launch?: boolean;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      requestId: 'RequestId',
      launch: 'Launch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      requestId: 'string',
      launch: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SynchronizeGroupConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SynchronizeGroupConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SynchronizeGroupConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApiGroupRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  tag?: DeleteApiGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      tag: { 'type': 'array', 'itemType': DeleteApiGroupRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApiGroupResponseBody extends $tea.Model {
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

export class DeleteApiGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteApiGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteApiGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupsRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  groupName?: string;
  pageNumber?: number;
  pageSize?: number;
  enableTagAuth?: boolean;
  instanceId?: string;
  sort?: string;
  tag?: DescribeApiGroupsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      groupName: 'GroupName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      enableTagAuth: 'EnableTagAuth',
      instanceId: 'InstanceId',
      sort: 'Sort',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      groupName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      enableTagAuth: 'boolean',
      instanceId: 'string',
      sort: 'string',
      tag: { 'type': 'array', 'itemType': DescribeApiGroupsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupsResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  apiGroupAttributes?: DescribeApiGroupsResponseBodyApiGroupAttributes;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      apiGroupAttributes: 'ApiGroupAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      apiGroupAttributes: DescribeApiGroupsResponseBodyApiGroupAttributes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApiGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApiGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  apiId?: string;
  apiName?: string;
  catalogId?: string;
  visibility?: string;
  pageSize?: number;
  pageNumber?: number;
  enableTagAuth?: boolean;
  tag?: DescribeApisRequestTag[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      apiId: 'ApiId',
      apiName: 'ApiName',
      catalogId: 'CatalogId',
      visibility: 'Visibility',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      enableTagAuth: 'EnableTagAuth',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      apiId: 'string',
      apiName: 'string',
      catalogId: 'string',
      visibility: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      enableTagAuth: 'boolean',
      tag: { 'type': 'array', 'itemType': DescribeApisRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  apiSummarys?: DescribeApisResponseBodyApiSummarys;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      apiSummarys: 'ApiSummarys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      apiSummarys: DescribeApisResponseBodyApiSummarys,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVarDiffBetweenGroupRequest extends $tea.Model {
  securityToken?: string;
  targetGroupId?: string;
  sourceGroupId?: string;
  sourceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      targetGroupId: 'TargetGroupId',
      sourceGroupId: 'SourceGroupId',
      sourceRegionId: 'SourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      targetGroupId: 'string',
      sourceGroupId: 'string',
      sourceRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVarDiffBetweenGroupResponseBody extends $tea.Model {
  requestId?: string;
  variableDiffs?: DescribeVarDiffBetweenGroupResponseBodyVariableDiffs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      variableDiffs: 'VariableDiffs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      variableDiffs: DescribeVarDiffBetweenGroupResponseBodyVariableDiffs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVarDiffBetweenGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVarDiffBetweenGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVarDiffBetweenGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDropPacketRequest extends $tea.Model {
  securityToken?: string;
  startTime?: string;
  endTime?: string;
  instanceId?: string;
  sbcName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      sbcName: 'SbcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      startTime: 'string',
      endTime: 'string',
      instanceId: 'string',
      sbcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDropPacketResponseBody extends $tea.Model {
  requestId?: string;
  instanceDropPacket?: DescribeInstanceDropPacketResponseBodyInstanceDropPacket;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceDropPacket: 'InstanceDropPacket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceDropPacket: DescribeInstanceDropPacketResponseBodyInstanceDropPacket,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDropPacketResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceDropPacketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceDropPacketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIpControlApisRequest extends $tea.Model {
  securityToken?: string;
  ipControlId?: string;
  groupId?: string;
  apiIds?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ipControlId: 'IpControlId',
      groupId: 'GroupId',
      apiIds: 'ApiIds',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ipControlId: 'string',
      groupId: 'string',
      apiIds: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIpControlApisResponseBody extends $tea.Model {
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

export class SetIpControlApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetIpControlApisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetIpControlApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppAttributesRequest extends $tea.Model {
  securityToken?: string;
  appId?: number;
  appName?: string;
  pageNumber?: number;
  pageSize?: number;
  appCode?: string;
  appKey?: string;
  sort?: string;
  enableTagAuth?: boolean;
  tag?: DescribeAppAttributesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      appId: 'AppId',
      appName: 'AppName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      appCode: 'AppCode',
      appKey: 'AppKey',
      sort: 'Sort',
      enableTagAuth: 'EnableTagAuth',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      appId: 'number',
      appName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      appCode: 'string',
      appKey: 'string',
      sort: 'string',
      enableTagAuth: 'boolean',
      tag: { 'type': 'array', 'itemType': DescribeAppAttributesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppAttributesResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  apps?: DescribeAppAttributesResponseBodyApps;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      apps: 'Apps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      apps: DescribeAppAttributesResponseBodyApps,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppAttributesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppAttributesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupTrafficRequest extends $tea.Model {
  securityToken?: string;
  startTime?: string;
  endTime?: string;
  stageName?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
      endTime: 'EndTime',
      stageName: 'StageName',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      startTime: 'string',
      endTime: 'string',
      stageName: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupTrafficResponseBody extends $tea.Model {
  requestId?: string;
  trafficPerSecond?: DescribeGroupTrafficResponseBodyTrafficPerSecond;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficPerSecond: 'TrafficPerSecond',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficPerSecond: DescribeGroupTrafficResponseBodyTrafficPerSecond,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupTrafficResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGroupTrafficResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGroupTrafficResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployApiTaskRequest extends $tea.Model {
  securityToken?: string;
  operationUid?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      operationUid: 'OperationUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      operationUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployApiTaskResponseBody extends $tea.Model {
  requestId?: string;
  deployedResults?: DescribeDeployApiTaskResponseBodyDeployedResults;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deployedResults: 'DeployedResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deployedResults: DescribeDeployApiTaskResponseBodyDeployedResults,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployApiTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeployApiTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeployApiTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWillBeSyncApisRequest extends $tea.Model {
  securityToken?: string;
  flowId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      flowId: 'FlowId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      flowId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWillBeSyncApisResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  apis?: DescribeWillBeSyncApisResponseBodyApis;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      apis: 'Apis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      apis: DescribeWillBeSyncApisResponseBodyApis,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWillBeSyncApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWillBeSyncApisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWillBeSyncApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupHttpCodeRequest extends $tea.Model {
  securityToken?: string;
  startTime?: string;
  endTime?: string;
  stageName?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
      endTime: 'EndTime',
      stageName: 'StageName',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      startTime: 'string',
      endTime: 'string',
      stageName: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupHttpCodeResponseBody extends $tea.Model {
  requestId?: string;
  httpCodePacket?: DescribeGroupHttpCodeResponseBodyHttpCodePacket;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpCodePacket: 'HttpCodePacket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpCodePacket: DescribeGroupHttpCodeResponseBodyHttpCodePacket,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupHttpCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGroupHttpCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGroupHttpCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiDocRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  stageName?: string;
  apiId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      stageName: 'StageName',
      apiId: 'ApiId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      stageName: 'string',
      apiId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiDocResponseBody extends $tea.Model {
  apiId?: string;
  resultType?: string;
  disableInternet?: boolean;
  resultSample?: string;
  regionId?: string;
  forceNonceCheck?: boolean;
  visibility?: string;
  failResultSample?: string;
  authType?: string;
  requestId?: string;
  groupId?: string;
  groupName?: string;
  description?: string;
  deployedTime?: string;
  stageName?: string;
  apiName?: string;
  requestConfig?: DescribeApiDocResponseBodyRequestConfig;
  errorCodeSamples?: DescribeApiDocResponseBodyErrorCodeSamples;
  resultDescriptions?: DescribeApiDocResponseBodyResultDescriptions;
  requestParameters?: DescribeApiDocResponseBodyRequestParameters;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      resultType: 'ResultType',
      disableInternet: 'DisableInternet',
      resultSample: 'ResultSample',
      regionId: 'RegionId',
      forceNonceCheck: 'ForceNonceCheck',
      visibility: 'Visibility',
      failResultSample: 'FailResultSample',
      authType: 'AuthType',
      requestId: 'RequestId',
      groupId: 'GroupId',
      groupName: 'GroupName',
      description: 'Description',
      deployedTime: 'DeployedTime',
      stageName: 'StageName',
      apiName: 'ApiName',
      requestConfig: 'RequestConfig',
      errorCodeSamples: 'ErrorCodeSamples',
      resultDescriptions: 'ResultDescriptions',
      requestParameters: 'RequestParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      resultType: 'string',
      disableInternet: 'boolean',
      resultSample: 'string',
      regionId: 'string',
      forceNonceCheck: 'boolean',
      visibility: 'string',
      failResultSample: 'string',
      authType: 'string',
      requestId: 'string',
      groupId: 'string',
      groupName: 'string',
      description: 'string',
      deployedTime: 'string',
      stageName: 'string',
      apiName: 'string',
      requestConfig: DescribeApiDocResponseBodyRequestConfig,
      errorCodeSamples: DescribeApiDocResponseBodyErrorCodeSamples,
      resultDescriptions: DescribeApiDocResponseBodyResultDescriptions,
      requestParameters: DescribeApiDocResponseBodyRequestParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiDocResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApiDocResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApiDocResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionQpsRequest extends $tea.Model {
  securityToken?: string;
  startTime?: string;
  endTime?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
      endTime: 'EndTime',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      startTime: 'string',
      endTime: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionQpsResponseBody extends $tea.Model {
  requestId?: string;
  regionQps?: DescribeRegionQpsResponseBodyRegionQps;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionQps: 'RegionQps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionQps: DescribeRegionQpsResponseBodyRegionQps,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionQpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionQpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionQpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainCertificateRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  domainName?: string;
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      domainName: 'DomainName',
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      domainName: 'string',
      certificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainCertificateResponseBody extends $tea.Model {
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

export class DeleteDomainCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDomainCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDomainCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSignaturesRequest extends $tea.Model {
  securityToken?: string;
  signatureId?: string;
  signatureName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      signatureId: 'SignatureId',
      signatureName: 'SignatureName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      signatureId: 'string',
      signatureName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSignaturesResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  signatureInfos?: DescribeSignaturesResponseBodySignatureInfos;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      signatureInfos: 'SignatureInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      signatureInfos: DescribeSignaturesResponseBodySignatureInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSignaturesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSignaturesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSignaturesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiStageRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  stageId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      stageId: 'StageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      stageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiStageResponseBody extends $tea.Model {
  stageId?: string;
  modifiedTime?: string;
  requestId?: string;
  groupId?: string;
  description?: string;
  stageName?: string;
  createdTime?: string;
  variables?: DescribeApiStageResponseBodyVariables;
  static names(): { [key: string]: string } {
    return {
      stageId: 'StageId',
      modifiedTime: 'ModifiedTime',
      requestId: 'RequestId',
      groupId: 'GroupId',
      description: 'Description',
      stageName: 'StageName',
      createdTime: 'CreatedTime',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stageId: 'string',
      modifiedTime: 'string',
      requestId: 'string',
      groupId: 'string',
      description: 'string',
      stageName: 'string',
      createdTime: 'string',
      variables: DescribeApiStageResponseBodyVariables,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiStageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApiStageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApiStageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePacketsRequest extends $tea.Model {
  securityToken?: string;
  startTime?: string;
  endTime?: string;
  instanceId?: string;
  sbcName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      sbcName: 'SbcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      startTime: 'string',
      endTime: 'string',
      instanceId: 'string',
      sbcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePacketsResponseBody extends $tea.Model {
  requestId?: string;
  instancePackets?: DescribeInstancePacketsResponseBodyInstancePackets;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instancePackets: 'InstancePackets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instancePackets: DescribeInstancePacketsResponseBodyInstancePackets,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePacketsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstancePacketsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstancePacketsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByTrafficControlRequest extends $tea.Model {
  securityToken?: string;
  trafficControlId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      trafficControlId: 'TrafficControlId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      trafficControlId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByTrafficControlResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  apiInfos?: DescribeApisByTrafficControlResponseBodyApiInfos;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      apiInfos: 'ApiInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      apiInfos: DescribeApisByTrafficControlResponseBodyApiInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByTrafficControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApisByTrafficControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApisByTrafficControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVpcAccessRequest extends $tea.Model {
  securityToken?: string;
  vpcId?: string;
  instanceId?: string;
  port?: number;
  needBatchWork?: boolean;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      vpcId: 'VpcId',
      instanceId: 'InstanceId',
      port: 'Port',
      needBatchWork: 'NeedBatchWork',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      vpcId: 'string',
      instanceId: 'string',
      port: 'number',
      needBatchWork: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVpcAccessResponseBody extends $tea.Model {
  requestId?: string;
  apis?: RemoveVpcAccessResponseBodyApis;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      apis: 'Apis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      apis: RemoveVpcAccessResponseBodyApis,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVpcAccessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveVpcAccessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveVpcAccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductSpecsRequest extends $tea.Model {
  securityToken?: string;
  productId?: number;
  specCode?: string[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      productId: 'ProductId',
      specCode: 'SpecCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      productId: 'number',
      specCode: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductSpecsResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductSpecsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteProductSpecsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteProductSpecsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginsByApiRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  apiId?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      apiId: 'ApiId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      apiId: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginsByApiResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  plugins?: DescribePluginsByApiResponseBodyPlugins;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      plugins: 'Plugins',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      plugins: DescribePluginsByApiResponseBodyPlugins,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginsByApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePluginsByApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePluginsByApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIpControlRequest extends $tea.Model {
  securityToken?: string;
  ipControlId?: string;
  ipControlName?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ipControlId: 'IpControlId',
      ipControlName: 'IpControlName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ipControlId: 'string',
      ipControlName: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIpControlResponseBody extends $tea.Model {
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

export class ModifyIpControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyIpControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyIpControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceRequest extends $tea.Model {
  instanceId?: string;
  tag?: DeleteInstanceRequestTag[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tag: { 'type': 'array', 'itemType': DeleteInstanceRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponseBody extends $tea.Model {
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

export class DeleteInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsRequest extends $tea.Model {
  securityToken?: string;
  appId?: number;
  appOwner?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      appId: 'AppId',
      appOwner: 'AppOwner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      appId: 'number',
      appOwner: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  apps?: DescribeAppsResponseBodyApps;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      apps: 'Apps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      apps: DescribeAppsResponseBodyApps,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  resourceType?: string;
  nextToken?: string;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
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

export class DescribeReadyNewApisRequest extends $tea.Model {
  securityToken?: string;
  flowId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      flowId: 'FlowId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      flowId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReadyNewApisResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  apis?: DescribeReadyNewApisResponseBodyApis;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      apis: 'Apis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      apis: DescribeReadyNewApisResponseBodyApis,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReadyNewApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeReadyNewApisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeReadyNewApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSignatureApisRequest extends $tea.Model {
  securityToken?: string;
  signatureId?: string;
  groupId?: string;
  apiIds?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      signatureId: 'SignatureId',
      groupId: 'GroupId',
      apiIds: 'ApiIds',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      signatureId: 'string',
      groupId: 'string',
      apiIds: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSignatureApisResponseBody extends $tea.Model {
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

export class RemoveSignatureApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveSignatureApisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveSignatureApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIpControlPolicyItemRequest extends $tea.Model {
  securityToken?: string;
  ipControlId?: string;
  appId?: string;
  cidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ipControlId: 'IpControlId',
      appId: 'AppId',
      cidrIp: 'CidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ipControlId: 'string',
      appId: 'string',
      cidrIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIpControlPolicyItemResponseBody extends $tea.Model {
  policyItemId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyItemId: 'PolicyItemId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyItemId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIpControlPolicyItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddIpControlPolicyItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddIpControlPolicyItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  chargeType?: string;
  instanceName?: string;
  instanceSpec?: string;
  zoneId?: string;
  httpsPolicy?: string;
  duration?: number;
  pricingCycle?: string;
  autoPay?: boolean;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      instanceName: 'InstanceName',
      instanceSpec: 'InstanceSpec',
      zoneId: 'ZoneId',
      httpsPolicy: 'HttpsPolicy',
      duration: 'Duration',
      pricingCycle: 'PricingCycle',
      autoPay: 'AutoPay',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      instanceName: 'string',
      instanceSpec: 'string',
      zoneId: 'string',
      httpsPolicy: 'string',
      duration: 'number',
      pricingCycle: 'string',
      autoPay: 'boolean',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  instanceId?: string;
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

export class CreateInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResponseBody extends $tea.Model {
  certificatePrivateKey?: string;
  domainName?: string;
  domainBindingStatus?: string;
  domainRemark?: string;
  certificateId?: string;
  domainWebSocketStatus?: string;
  requestId?: string;
  certificateName?: string;
  domainLegalStatus?: string;
  groupId?: string;
  certificateBody?: string;
  subDomain?: string;
  domainCNAMEStatus?: string;
  static names(): { [key: string]: string } {
    return {
      certificatePrivateKey: 'CertificatePrivateKey',
      domainName: 'DomainName',
      domainBindingStatus: 'DomainBindingStatus',
      domainRemark: 'DomainRemark',
      certificateId: 'CertificateId',
      domainWebSocketStatus: 'DomainWebSocketStatus',
      requestId: 'RequestId',
      certificateName: 'CertificateName',
      domainLegalStatus: 'DomainLegalStatus',
      groupId: 'GroupId',
      certificateBody: 'CertificateBody',
      subDomain: 'SubDomain',
      domainCNAMEStatus: 'DomainCNAMEStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificatePrivateKey: 'string',
      domainName: 'string',
      domainBindingStatus: 'string',
      domainRemark: 'string',
      certificateId: 'string',
      domainWebSocketStatus: 'string',
      requestId: 'string',
      certificateName: 'string',
      domainLegalStatus: 'string',
      groupId: 'string',
      certificateBody: 'string',
      subDomain: 'string',
      domainCNAMEStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelRequest extends $tea.Model {
  modelName?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      modelName: 'ModelName',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelResponseBody extends $tea.Model {
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

export class DeleteModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelRequest extends $tea.Model {
  modelName?: string;
  groupId?: string;
  schema?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      modelName: 'ModelName',
      groupId: 'GroupId',
      schema: 'Schema',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
      groupId: 'string',
      schema: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelResponseBody extends $tea.Model {
  modifiedTime?: string;
  requestId?: string;
  description?: string;
  groupId?: string;
  schema?: string;
  modelName?: string;
  createdTime?: string;
  modelId?: string;
  regionId?: string;
  modelRef?: string;
  static names(): { [key: string]: string } {
    return {
      modifiedTime: 'ModifiedTime',
      requestId: 'RequestId',
      description: 'Description',
      groupId: 'GroupId',
      schema: 'Schema',
      modelName: 'ModelName',
      createdTime: 'CreatedTime',
      modelId: 'ModelId',
      regionId: 'RegionId',
      modelRef: 'ModelRef',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifiedTime: 'string',
      requestId: 'string',
      description: 'string',
      groupId: 'string',
      schema: 'string',
      modelName: 'string',
      createdTime: 'string',
      modelId: 'string',
      regionId: 'string',
      modelRef: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductRequest extends $tea.Model {
  securityToken?: string;
  productId?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      productId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBody extends $tea.Model {
  status?: number;
  subscribeMode?: string;
  domain?: number;
  subscribeNumber?: number;
  requestId?: string;
  modifiedTime?: string;
  description?: string;
  groupId?: string;
  productId?: number;
  name?: string;
  createdTime?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      subscribeMode: 'SubscribeMode',
      domain: 'Domain',
      subscribeNumber: 'SubscribeNumber',
      requestId: 'RequestId',
      modifiedTime: 'ModifiedTime',
      description: 'Description',
      groupId: 'GroupId',
      productId: 'ProductId',
      name: 'Name',
      createdTime: 'CreatedTime',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      subscribeMode: 'string',
      domain: 'number',
      subscribeNumber: 'number',
      requestId: 'string',
      modifiedTime: 'string',
      description: 'string',
      groupId: 'string',
      productId: 'number',
      name: 'string',
      createdTime: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpControlsRequest extends $tea.Model {
  securityToken?: string;
  ipControlId?: string;
  ipControlName?: string;
  ipControlType?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ipControlId: 'IpControlId',
      ipControlName: 'IpControlName',
      ipControlType: 'IpControlType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ipControlId: 'string',
      ipControlName: 'string',
      ipControlType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpControlsResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  ipControlInfos?: DescribeIpControlsResponseBodyIpControlInfos;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      ipControlInfos: 'IpControlInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      ipControlInfos: DescribeIpControlsResponseBodyIpControlInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpControlsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIpControlsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIpControlsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSwaggerRequest extends $tea.Model {
  overwrite?: boolean;
  globalCondition?: { [key: string]: any };
  dataFormat?: string;
  data?: string;
  groupId?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      overwrite: 'Overwrite',
      globalCondition: 'GlobalCondition',
      dataFormat: 'DataFormat',
      data: 'Data',
      groupId: 'GroupId',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwrite: 'boolean',
      globalCondition: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dataFormat: 'string',
      data: 'string',
      groupId: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSwaggerShrinkRequest extends $tea.Model {
  overwrite?: boolean;
  globalConditionShrink?: string;
  dataFormat?: string;
  data?: string;
  groupId?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      overwrite: 'Overwrite',
      globalConditionShrink: 'GlobalCondition',
      dataFormat: 'DataFormat',
      data: 'Data',
      groupId: 'GroupId',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwrite: 'boolean',
      globalConditionShrink: 'string',
      dataFormat: 'string',
      data: 'string',
      groupId: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSwaggerResponseBody extends $tea.Model {
  requestId?: string;
  success?: ImportSwaggerResponseBodySuccess;
  failed?: ImportSwaggerResponseBodyFailed;
  modelFailed?: ImportSwaggerResponseBodyModelFailed;
  modelSuccess?: ImportSwaggerResponseBodyModelSuccess;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      failed: 'Failed',
      modelFailed: 'ModelFailed',
      modelSuccess: 'ModelSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: ImportSwaggerResponseBodySuccess,
      failed: ImportSwaggerResponseBodyFailed,
      modelFailed: ImportSwaggerResponseBodyModelFailed,
      modelSuccess: ImportSwaggerResponseBodyModelSuccess,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSwaggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImportSwaggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImportSwaggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGroupConfigSynchronizePolicyRequest extends $tea.Model {
  securityToken?: string;
  flowId?: string;
  conflictSyncPolicy?: string;
  newSyncPolicy?: string;
  backendSyncPolicy?: string;
  conflictInclude?: string[];
  conflictExclude?: string[];
  newInclude?: string[];
  newExclude?: string[];
  backendInclude?: string[];
  backendExclude?: string[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      flowId: 'FlowId',
      conflictSyncPolicy: 'ConflictSyncPolicy',
      newSyncPolicy: 'NewSyncPolicy',
      backendSyncPolicy: 'BackendSyncPolicy',
      conflictInclude: 'ConflictInclude',
      conflictExclude: 'ConflictExclude',
      newInclude: 'NewInclude',
      newExclude: 'NewExclude',
      backendInclude: 'BackendInclude',
      backendExclude: 'BackendExclude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      flowId: 'string',
      conflictSyncPolicy: 'string',
      newSyncPolicy: 'string',
      backendSyncPolicy: 'string',
      conflictInclude: { 'type': 'array', 'itemType': 'string' },
      conflictExclude: { 'type': 'array', 'itemType': 'string' },
      newInclude: { 'type': 'array', 'itemType': 'string' },
      newExclude: { 'type': 'array', 'itemType': 'string' },
      backendInclude: { 'type': 'array', 'itemType': 'string' },
      backendExclude: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGroupConfigSynchronizePolicyResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGroupConfigSynchronizePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetGroupConfigSynchronizePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetGroupConfigSynchronizePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryApisRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  stageName?: string;
  apiId?: string;
  apiName?: string;
  pageSize?: string;
  pageNumber?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      stageName: 'StageName',
      apiId: 'ApiId',
      apiName: 'ApiName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      stageName: 'string',
      apiId: 'string',
      apiName: 'string',
      pageSize: 'string',
      pageNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryApisResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  apiHisItems?: DescribeHistoryApisResponseBodyApiHisItems;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      apiHisItems: 'ApiHisItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      apiHisItems: DescribeHistoryApisResponseBodyApiHisItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHistoryApisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHistoryApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiIpControlsRequest extends $tea.Model {
  securityToken?: string;
  stageName?: string;
  groupId?: string;
  apiIds?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      stageName: 'StageName',
      groupId: 'GroupId',
      apiIds: 'ApiIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      stageName: 'string',
      groupId: 'string',
      apiIds: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiIpControlsResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  apiIpControls?: DescribeApiIpControlsResponseBodyApiIpControls;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      apiIpControls: 'ApiIpControls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      apiIpControls: DescribeApiIpControlsResponseBodyApiIpControls,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiIpControlsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApiIpControlsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApiIpControlsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMarketRemainsQuotaRequest extends $tea.Model {
  securityToken?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMarketRemainsQuotaResponseBody extends $tea.Model {
  remainsQuota?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remainsQuota: 'RemainsQuota',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remainsQuota: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMarketRemainsQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMarketRemainsQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMarketRemainsQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpControlRequest extends $tea.Model {
  securityToken?: string;
  ipControlName?: string;
  ipControlType?: string;
  description?: string;
  ipControlPolicys?: CreateIpControlRequestIpControlPolicys[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ipControlName: 'IpControlName',
      ipControlType: 'IpControlType',
      description: 'Description',
      ipControlPolicys: 'IpControlPolicys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ipControlName: 'string',
      ipControlType: 'string',
      description: 'string',
      ipControlPolicys: { 'type': 'array', 'itemType': CreateIpControlRequestIpControlPolicys },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpControlResponseBody extends $tea.Model {
  ipControlId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipControlId: 'IpControlId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipControlId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateIpControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateIpControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginSchemasRequest extends $tea.Model {
  securityToken?: string;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginSchemasResponseBody extends $tea.Model {
  requestId?: string;
  pluginSchemas?: DescribePluginSchemasResponseBodyPluginSchemas;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pluginSchemas: 'PluginSchemas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pluginSchemas: DescribePluginSchemasResponseBodyPluginSchemas,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginSchemasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePluginSchemasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePluginSchemasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSignatureRequest extends $tea.Model {
  securityToken?: string;
  signatureName?: string;
  signatureKey?: string;
  signatureSecret?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      signatureName: 'SignatureName',
      signatureKey: 'SignatureKey',
      signatureSecret: 'SignatureSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      signatureName: 'string',
      signatureKey: 'string',
      signatureSecret: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSignatureResponseBody extends $tea.Model {
  requestId?: string;
  signatureId?: string;
  signatureName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      signatureId: 'SignatureId',
      signatureName: 'SignatureName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      signatureId: 'string',
      signatureName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSignatureResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSignatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSignatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVpcAccessAndAbolishApisRequest extends $tea.Model {
  securityToken?: string;
  vpcId?: string;
  instanceId?: string;
  port?: number;
  needBatchWork?: boolean;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      vpcId: 'VpcId',
      instanceId: 'InstanceId',
      port: 'Port',
      needBatchWork: 'NeedBatchWork',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      vpcId: 'string',
      instanceId: 'string',
      port: 'number',
      needBatchWork: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVpcAccessAndAbolishApisResponseBody extends $tea.Model {
  operationId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVpcAccessAndAbolishApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveVpcAccessAndAbolishApisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveVpcAccessAndAbolishApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishProductRequest extends $tea.Model {
  securityToken?: string;
  productId?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      productId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishProductResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishProductResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePartProductRequest extends $tea.Model {
  securityToken?: string;
  name?: string;
  description?: string;
  cateSecondId?: number[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      name: 'Name',
      description: 'Description',
      cateSecondId: 'CateSecondId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      name: 'string',
      description: 'string',
      cateSecondId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePartProductResponseBody extends $tea.Model {
  productId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      productId: 'ProductId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePartProductResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreatePartProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePartProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupVpcWhitelistRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupVpcWhitelistResponseBody extends $tea.Model {
  vpcIds?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcIds: 'VpcIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcIds: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupVpcWhitelistResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApiGroupVpcWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApiGroupVpcWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateApisVpcAccessRequest extends $tea.Model {
  securityToken?: string;
  oldVpcId?: string;
  oldInstanceId?: string;
  oldPort?: number;
  vpcId?: string;
  instanceId?: string;
  displayInstanceId?: string;
  port?: number;
  serviceAddress?: string;
  api?: BatchUpdateApisVpcAccessRequestApi[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      oldVpcId: 'OldVpcId',
      oldInstanceId: 'OldInstanceId',
      oldPort: 'OldPort',
      vpcId: 'VpcId',
      instanceId: 'InstanceId',
      displayInstanceId: 'DisplayInstanceId',
      port: 'Port',
      serviceAddress: 'ServiceAddress',
      api: 'Api',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      oldVpcId: 'string',
      oldInstanceId: 'string',
      oldPort: 'number',
      vpcId: 'string',
      instanceId: 'string',
      displayInstanceId: 'string',
      port: 'number',
      serviceAddress: 'string',
      api: { 'type': 'array', 'itemType': BatchUpdateApisVpcAccessRequestApi },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateApisVpcAccessResponseBody extends $tea.Model {
  operationId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateApisVpcAccessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchUpdateApisVpcAccessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchUpdateApisVpcAccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionHttpCodeRequest extends $tea.Model {
  securityToken?: string;
  startTime?: string;
  endTime?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
      endTime: 'EndTime',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      startTime: 'string',
      endTime: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionHttpCodeResponseBody extends $tea.Model {
  requestId?: string;
  httpCodePacket?: DescribeRegionHttpCodeResponseBodyHttpCodePacket;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpCodePacket: 'HttpCodePacket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpCodePacket: DescribeRegionHttpCodeResponseBodyHttpCodePacket,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionHttpCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionHttpCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionHttpCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncFailApiTaskRequest extends $tea.Model {
  securityToken?: string;
  flowId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      flowId: 'FlowId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      flowId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncFailApiTaskResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  apis?: DescribeSyncFailApiTaskResponseBodyApis;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      apis: 'Apis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      apis: DescribeSyncFailApiTaskResponseBodyApis,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncFailApiTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSyncFailApiTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSyncFailApiTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  securityToken?: string;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: DescribeRegionsResponseBodyRegions,
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

export class DescribePurchasedApisRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  stageName?: string;
  apiId?: string;
  apiName?: string;
  visibility?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      stageName: 'StageName',
      apiId: 'ApiId',
      apiName: 'ApiName',
      visibility: 'Visibility',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      stageName: 'string',
      apiId: 'string',
      apiName: 'string',
      visibility: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApisResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  purchasedApis?: DescribePurchasedApisResponseBodyPurchasedApis;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      purchasedApis: 'PurchasedApis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      purchasedApis: DescribePurchasedApisResponseBodyPurchasedApis,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePurchasedApisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePurchasedApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficControlsByApiRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  apiId?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      apiId: 'ApiId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      apiId: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficControlsByApiResponseBody extends $tea.Model {
  requestId?: string;
  trafficControlItems?: DescribeTrafficControlsByApiResponseBodyTrafficControlItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficControlItems: 'TrafficControlItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficControlItems: DescribeTrafficControlsByApiResponseBodyTrafficControlItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficControlsByApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTrafficControlsByApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTrafficControlsByApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApisRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  stageName?: string;
  apiId?: string;
  apiName?: string;
  pageNumber?: number;
  pageSize?: number;
  enableTagAuth?: boolean;
  tag?: DescribeDeployedApisRequestTag[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      stageName: 'StageName',
      apiId: 'ApiId',
      apiName: 'ApiName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      enableTagAuth: 'EnableTagAuth',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      stageName: 'string',
      apiId: 'string',
      apiName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      enableTagAuth: 'boolean',
      tag: { 'type': 'array', 'itemType': DescribeDeployedApisRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApisResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  deployedApis?: DescribeDeployedApisResponseBodyDeployedApis;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      deployedApis: 'DeployedApis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      deployedApis: DescribeDeployedApisResponseBodyDeployedApis,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeployedApisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeployedApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAppsAuthoritiesRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  apiId?: string;
  stageName?: string;
  appIds?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      apiId: 'ApiId',
      stageName: 'StageName',
      appIds: 'AppIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      apiId: 'string',
      stageName: 'string',
      appIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAppsAuthoritiesResponseBody extends $tea.Model {
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

export class RemoveAppsAuthoritiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveAppsAuthoritiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveAppsAuthoritiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLogConfigRequest extends $tea.Model {
  securityToken?: string;
  logType?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      logType: 'LogType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      logType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLogConfigResponseBody extends $tea.Model {
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

export class DeleteLogConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLogConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReactivateDomainRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReactivateDomainResponseBody extends $tea.Model {
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

export class ReactivateDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReactivateDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReactivateDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuthorizedApisRequest extends $tea.Model {
  securityToken?: string;
  appId?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      appId: 'AppId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      appId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuthorizedApisResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  authorizedApis?: DescribeAuthorizedApisResponseBodyAuthorizedApis;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      authorizedApis: 'AuthorizedApis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      authorizedApis: DescribeAuthorizedApisResponseBodyAuthorizedApis,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuthorizedApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAuthorizedApisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAuthorizedApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductSpecsRequest extends $tea.Model {
  securityToken?: string;
  productId?: number;
  name?: string;
  type?: number;
  isHide?: boolean;
  unit?: number;
  rpsValue?: number;
  quotaValue?: number;
  lifeCycle?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      productId: 'ProductId',
      name: 'Name',
      type: 'Type',
      isHide: 'IsHide',
      unit: 'Unit',
      rpsValue: 'RpsValue',
      quotaValue: 'QuotaValue',
      lifeCycle: 'LifeCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      productId: 'number',
      name: 'string',
      type: 'number',
      isHide: 'boolean',
      unit: 'number',
      rpsValue: 'number',
      quotaValue: 'number',
      lifeCycle: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductSpecsResponseBody extends $tea.Model {
  requestId?: string;
  productSpecsId?: number;
  productSpecsCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      productSpecsId: 'ProductSpecsId',
      productSpecsCode: 'ProductSpecsCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      productSpecsId: 'number',
      productSpecsCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductSpecsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateProductSpecsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateProductSpecsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTrafficControlRequest extends $tea.Model {
  securityToken?: string;
  trafficControlId?: string;
  trafficControlName?: string;
  trafficControlUnit?: string;
  apiDefault?: number;
  userDefault?: number;
  appDefault?: number;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      trafficControlId: 'TrafficControlId',
      trafficControlName: 'TrafficControlName',
      trafficControlUnit: 'TrafficControlUnit',
      apiDefault: 'ApiDefault',
      userDefault: 'UserDefault',
      appDefault: 'AppDefault',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      trafficControlId: 'string',
      trafficControlName: 'string',
      trafficControlUnit: 'string',
      apiDefault: 'number',
      userDefault: 'number',
      appDefault: 'number',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTrafficControlResponseBody extends $tea.Model {
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

export class ModifyTrafficControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyTrafficControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyTrafficControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLogConfigRequest extends $tea.Model {
  securityToken?: string;
  slsProject?: string;
  slsLogStore?: string;
  logType?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      slsProject: 'SlsProject',
      slsLogStore: 'SlsLogStore',
      logType: 'LogType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      slsProject: 'string',
      slsLogStore: 'string',
      logType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLogConfigResponseBody extends $tea.Model {
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

export class CreateLogConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLogConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTrafficControlApisRequest extends $tea.Model {
  securityToken?: string;
  trafficControlId?: string;
  groupId?: string;
  apiIds?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      trafficControlId: 'TrafficControlId',
      groupId: 'GroupId',
      apiIds: 'ApiIds',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      trafficControlId: 'string',
      groupId: 'string',
      apiIds: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTrafficControlApisResponseBody extends $tea.Model {
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

export class SetTrafficControlApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetTrafficControlApisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetTrafficControlApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbolishProductRequest extends $tea.Model {
  securityToken?: string;
  productId?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      productId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbolishProductResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbolishProductResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AbolishProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AbolishProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiGatewayServiceResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiGatewayServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpenApiGatewayServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenApiGatewayServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchApiRequest extends $tea.Model {
  securityToken?: string;
  groupId?: string;
  apiId?: string;
  stageName?: string;
  description?: string;
  historyVersion?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      groupId: 'GroupId',
      apiId: 'ApiId',
      stageName: 'StageName',
      description: 'Description',
      historyVersion: 'HistoryVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      groupId: 'string',
      apiId: 'string',
      stageName: 'string',
      description: 'string',
      historyVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchApiResponseBody extends $tea.Model {
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

export class SwitchApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SwitchApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SwitchApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAccessesRequest extends $tea.Model {
  securityToken?: string;
  pageNumber?: number;
  pageSize?: number;
  name?: string;
  accurateQuery?: boolean;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      name: 'Name',
      accurateQuery: 'AccurateQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      name: 'string',
      accurateQuery: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAccessesResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  vpcAccessAttributes?: DescribeVpcAccessesResponseBodyVpcAccessAttributes;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      vpcAccessAttributes: 'VpcAccessAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      vpcAccessAttributes: DescribeVpcAccessesResponseBodyVpcAccessAttributes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAccessesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVpcAccessesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVpcAccessesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSlbConnectRequest extends $tea.Model {
  securityToken?: string;
  startTime?: string;
  endTime?: string;
  instanceId?: string;
  sbcName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      sbcName: 'SbcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      startTime: 'string',
      endTime: 'string',
      instanceId: 'string',
      sbcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSlbConnectResponseBody extends $tea.Model {
  requestId?: string;
  instanceSlbConnect?: DescribeInstanceSlbConnectResponseBodyInstanceSlbConnect;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceSlbConnect: 'InstanceSlbConnect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceSlbConnect: DescribeInstanceSlbConnectResponseBodyInstanceSlbConnect,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSlbConnectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceSlbConnectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceSlbConnectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuthorizedAppsResponseBodyAuthorizedAppsAuthorizedApp extends $tea.Model {
  appName?: string;
  authorizationSource?: string;
  authVaildTime?: string;
  description?: string;
  authorizedTime?: string;
  appId?: number;
  stageName?: string;
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      authorizationSource: 'AuthorizationSource',
      authVaildTime: 'AuthVaildTime',
      description: 'Description',
      authorizedTime: 'AuthorizedTime',
      appId: 'AppId',
      stageName: 'StageName',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      authorizationSource: 'string',
      authVaildTime: 'string',
      description: 'string',
      authorizedTime: 'string',
      appId: 'number',
      stageName: 'string',
      operator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuthorizedAppsResponseBodyAuthorizedApps extends $tea.Model {
  authorizedApp?: DescribeAuthorizedAppsResponseBodyAuthorizedAppsAuthorizedApp[];
  static names(): { [key: string]: string } {
    return {
      authorizedApp: 'AuthorizedApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedApp: { 'type': 'array', 'itemType': DescribeAuthorizedAppsResponseBodyAuthorizedAppsAuthorizedApp },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiGroupsResponseBodyPurchasedApiGroupAttributesPurchasedApiGroupAttribute extends $tea.Model {
  status?: string;
  purchasedTime?: string;
  expireTime?: string;
  description?: string;
  groupName?: string;
  groupId?: string;
  invokeTimesMax?: number;
  invokeTimesNow?: number;
  billingType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      purchasedTime: 'PurchasedTime',
      expireTime: 'ExpireTime',
      description: 'Description',
      groupName: 'GroupName',
      groupId: 'GroupId',
      invokeTimesMax: 'InvokeTimesMax',
      invokeTimesNow: 'InvokeTimesNow',
      billingType: 'BillingType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      purchasedTime: 'string',
      expireTime: 'string',
      description: 'string',
      groupName: 'string',
      groupId: 'string',
      invokeTimesMax: 'number',
      invokeTimesNow: 'number',
      billingType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiGroupsResponseBodyPurchasedApiGroupAttributes extends $tea.Model {
  purchasedApiGroupAttribute?: DescribePurchasedApiGroupsResponseBodyPurchasedApiGroupAttributesPurchasedApiGroupAttribute[];
  static names(): { [key: string]: string } {
    return {
      purchasedApiGroupAttribute: 'PurchasedApiGroupAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      purchasedApiGroupAttribute: { 'type': 'array', 'itemType': DescribePurchasedApiGroupsResponseBodyPurchasedApiGroupAttributesPurchasedApiGroupAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginsRequestTag extends $tea.Model {
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

export class DescribePluginsResponseBodyPluginsPluginAttributeTagsTagInfo extends $tea.Model {
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

export class DescribePluginsResponseBodyPluginsPluginAttributeTags extends $tea.Model {
  tagInfo?: DescribePluginsResponseBodyPluginsPluginAttributeTagsTagInfo[];
  static names(): { [key: string]: string } {
    return {
      tagInfo: 'TagInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagInfo: { 'type': 'array', 'itemType': DescribePluginsResponseBodyPluginsPluginAttributeTagsTagInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginsResponseBodyPluginsPluginAttribute extends $tea.Model {
  pluginId?: string;
  modifiedTime?: string;
  pluginData?: string;
  description?: number;
  pluginName?: string;
  createdTime?: string;
  pluginType?: string;
  regionId?: number;
  tags?: DescribePluginsResponseBodyPluginsPluginAttributeTags;
  static names(): { [key: string]: string } {
    return {
      pluginId: 'PluginId',
      modifiedTime: 'ModifiedTime',
      pluginData: 'PluginData',
      description: 'Description',
      pluginName: 'PluginName',
      createdTime: 'CreatedTime',
      pluginType: 'PluginType',
      regionId: 'RegionId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginId: 'string',
      modifiedTime: 'string',
      pluginData: 'string',
      description: 'number',
      pluginName: 'string',
      createdTime: 'string',
      pluginType: 'string',
      regionId: 'number',
      tags: DescribePluginsResponseBodyPluginsPluginAttributeTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginsResponseBodyPlugins extends $tea.Model {
  pluginAttribute?: DescribePluginsResponseBodyPluginsPluginAttribute[];
  static names(): { [key: string]: string } {
    return {
      pluginAttribute: 'PluginAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginAttribute: { 'type': 'array', 'itemType': DescribePluginsResponseBodyPluginsPluginAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogConfigResponseBodyLogInfosLogInfo extends $tea.Model {
  slsLogStore?: string;
  logType?: string;
  slsProject?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      slsLogStore: 'SlsLogStore',
      logType: 'LogType',
      slsProject: 'SlsProject',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slsLogStore: 'string',
      logType: 'string',
      slsProject: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogConfigResponseBodyLogInfos extends $tea.Model {
  logInfo?: DescribeLogConfigResponseBodyLogInfosLogInfo[];
  static names(): { [key: string]: string } {
    return {
      logInfo: 'LogInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logInfo: { 'type': 'array', 'itemType': DescribeLogConfigResponseBodyLogInfosLogInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemParametersResponseBodySystemParamsSystemParamItem extends $tea.Model {
  demoValue?: string;
  description?: string;
  paramName?: string;
  paramType?: string;
  static names(): { [key: string]: string } {
    return {
      demoValue: 'DemoValue',
      description: 'Description',
      paramName: 'ParamName',
      paramType: 'ParamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoValue: 'string',
      description: 'string',
      paramName: 'string',
      paramType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemParametersResponseBodySystemParams extends $tea.Model {
  systemParamItem?: DescribeSystemParametersResponseBodySystemParamsSystemParamItem[];
  static names(): { [key: string]: string } {
    return {
      systemParamItem: 'SystemParamItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemParamItem: { 'type': 'array', 'itemType': DescribeSystemParametersResponseBodySystemParamsSystemParamItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceNewConnectionsResponseBodyInstanceNewConnectionsMonitorItem extends $tea.Model {
  itemValue?: string;
  itemTime?: string;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemTime: 'ItemTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceNewConnectionsResponseBodyInstanceNewConnections extends $tea.Model {
  monitorItem?: DescribeInstanceNewConnectionsResponseBodyInstanceNewConnectionsMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeInstanceNewConnectionsResponseBodyInstanceNewConnectionsMonitorItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpdateVpcInfoTaskResponseBodyApiUpdateVpcInfoResultsApiUpdateVpcInfoResult extends $tea.Model {
  stageId?: string;
  updateStatus?: string;
  groupId?: string;
  groupName?: string;
  apiUid?: string;
  errorMsg?: string;
  stageName?: string;
  apiName?: string;
  static names(): { [key: string]: string } {
    return {
      stageId: 'StageId',
      updateStatus: 'UpdateStatus',
      groupId: 'GroupId',
      groupName: 'GroupName',
      apiUid: 'ApiUid',
      errorMsg: 'ErrorMsg',
      stageName: 'StageName',
      apiName: 'ApiName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stageId: 'string',
      updateStatus: 'string',
      groupId: 'string',
      groupName: 'string',
      apiUid: 'string',
      errorMsg: 'string',
      stageName: 'string',
      apiName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpdateVpcInfoTaskResponseBodyApiUpdateVpcInfoResults extends $tea.Model {
  apiUpdateVpcInfoResult?: DescribeUpdateVpcInfoTaskResponseBodyApiUpdateVpcInfoResultsApiUpdateVpcInfoResult[];
  static names(): { [key: string]: string } {
    return {
      apiUpdateVpcInfoResult: 'ApiUpdateVpcInfoResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiUpdateVpcInfoResult: { 'type': 'array', 'itemType': DescribeUpdateVpcInfoTaskResponseBodyApiUpdateVpcInfoResultsApiUpdateVpcInfoResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePluginRequestTag extends $tea.Model {
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

export class BatchDeployApisRequestApi extends $tea.Model {
  groupId?: string;
  apiUid?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      apiUid: 'ApiUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      apiUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginTemplatesResponseBodyTemplatesTemplate extends $tea.Model {
  title?: string;
  documentAnchor?: string;
  description?: string;
  documentId?: string;
  sample?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      documentAnchor: 'DocumentAnchor',
      description: 'Description',
      documentId: 'DocumentId',
      sample: 'Sample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      documentAnchor: 'string',
      description: 'string',
      documentId: 'string',
      sample: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginTemplatesResponseBodyTemplates extends $tea.Model {
  template?: DescribePluginTemplatesResponseBodyTemplatesTemplate[];
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: { 'type': 'array', 'itemType': DescribePluginTemplatesResponseBodyTemplatesTemplate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAbolishApiTaskResponseBodyApiAbolishResultsApiAbolishResult extends $tea.Model {
  stageId?: string;
  abolishStatus?: string;
  groupId?: string;
  groupName?: string;
  apiUid?: string;
  errorMsg?: string;
  stageName?: string;
  apiName?: string;
  static names(): { [key: string]: string } {
    return {
      stageId: 'StageId',
      abolishStatus: 'AbolishStatus',
      groupId: 'GroupId',
      groupName: 'GroupName',
      apiUid: 'ApiUid',
      errorMsg: 'ErrorMsg',
      stageName: 'StageName',
      apiName: 'ApiName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stageId: 'string',
      abolishStatus: 'string',
      groupId: 'string',
      groupName: 'string',
      apiUid: 'string',
      errorMsg: 'string',
      stageName: 'string',
      apiName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAbolishApiTaskResponseBodyApiAbolishResults extends $tea.Model {
  apiAbolishResult?: DescribeAbolishApiTaskResponseBodyApiAbolishResultsApiAbolishResult[];
  static names(): { [key: string]: string } {
    return {
      apiAbolishResult: 'ApiAbolishResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiAbolishResult: { 'type': 'array', 'itemType': DescribeAbolishApiTaskResponseBodyApiAbolishResultsApiAbolishResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConflictApisResponseBodyConflictApisConflictApiSource extends $tea.Model {
  apiVersion?: string;
  apiId?: string;
  groupName?: string;
  groupId?: string;
  path?: string;
  method?: string;
  stageName?: string;
  apiName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      apiId: 'ApiId',
      groupName: 'GroupName',
      groupId: 'GroupId',
      path: 'Path',
      method: 'Method',
      stageName: 'StageName',
      apiName: 'ApiName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      apiId: 'string',
      groupName: 'string',
      groupId: 'string',
      path: 'string',
      method: 'string',
      stageName: 'string',
      apiName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConflictApisResponseBodyConflictApisConflictApiTarget extends $tea.Model {
  apiId?: string;
  groupId?: string;
  groupName?: string;
  path?: string;
  method?: string;
  apiName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      groupName: 'GroupName',
      path: 'Path',
      method: 'Method',
      apiName: 'ApiName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      groupName: 'string',
      path: 'string',
      method: 'string',
      apiName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConflictApisResponseBodyConflictApisConflictApi extends $tea.Model {
  source?: DescribeConflictApisResponseBodyConflictApisConflictApiSource;
  target?: DescribeConflictApisResponseBodyConflictApisConflictApiTarget;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: DescribeConflictApisResponseBodyConflictApisConflictApiSource,
      target: DescribeConflictApisResponseBodyConflictApisConflictApiTarget,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConflictApisResponseBodyConflictApis extends $tea.Model {
  conflictApi?: DescribeConflictApisResponseBodyConflictApisConflictApi[];
  static names(): { [key: string]: string } {
    return {
      conflictApi: 'ConflictApi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflictApi: { 'type': 'array', 'itemType': DescribeConflictApisResponseBodyConflictApisConflictApi },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppRequestTag extends $tea.Model {
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

export class DescribeRegionLatencyResponseBodyLatencyPacketMonitorItem extends $tea.Model {
  itemValue?: string;
  itemTime?: string;
  item?: string;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemTime: 'ItemTime',
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemTime: 'string',
      item: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionLatencyResponseBodyLatencyPacket extends $tea.Model {
  monitorItem?: DescribeRegionLatencyResponseBodyLatencyPacketMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeRegionLatencyResponseBodyLatencyPacketMonitorItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAbolishApisRequestApi extends $tea.Model {
  stageId?: string;
  groupId?: string;
  apiUid?: string;
  static names(): { [key: string]: string } {
    return {
      stageId: 'StageId',
      groupId: 'GroupId',
      apiUid: 'ApiUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stageId: 'string',
      groupId: 'string',
      apiUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoriesResponseBodyApiHisItemsApiHisItem extends $tea.Model {
  status?: string;
  apiId?: string;
  description?: string;
  groupName?: string;
  groupId?: string;
  deployedTime?: string;
  stageName?: string;
  historyVersion?: string;
  apiName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      apiId: 'ApiId',
      description: 'Description',
      groupName: 'GroupName',
      groupId: 'GroupId',
      deployedTime: 'DeployedTime',
      stageName: 'StageName',
      historyVersion: 'HistoryVersion',
      apiName: 'ApiName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      apiId: 'string',
      description: 'string',
      groupName: 'string',
      groupId: 'string',
      deployedTime: 'string',
      stageName: 'string',
      historyVersion: 'string',
      apiName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoriesResponseBodyApiHisItems extends $tea.Model {
  apiHisItem?: DescribeApiHistoriesResponseBodyApiHisItemsApiHisItem[];
  static names(): { [key: string]: string } {
    return {
      apiHisItem: 'ApiHisItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiHisItem: { 'type': 'array', 'itemType': DescribeApiHistoriesResponseBodyApiHisItemsApiHisItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApiGroupRequestTag extends $tea.Model {
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

export class DescribeDomainsResolutionResponseBodyDomainResolutionsDomainResolution extends $tea.Model {
  domainResolutionStatus?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      domainResolutionStatus: 'DomainResolutionStatus',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainResolutionStatus: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResolutionResponseBodyDomainResolutions extends $tea.Model {
  domainResolution?: DescribeDomainsResolutionResponseBodyDomainResolutionsDomainResolution[];
  static names(): { [key: string]: string } {
    return {
      domainResolution: 'DomainResolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainResolution: { 'type': 'array', 'itemType': DescribeDomainsResolutionResponseBodyDomainResolutionsDomainResolution },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiGroupResponseBodyDomainsDomainItem extends $tea.Model {
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiGroupResponseBodyDomains extends $tea.Model {
  domainItem?: DescribePurchasedApiGroupResponseBodyDomainsDomainItem[];
  static names(): { [key: string]: string } {
    return {
      domainItem: 'DomainItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainItem: { 'type': 'array', 'itemType': DescribePurchasedApiGroupResponseBodyDomainsDomainItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelsResponseBodyModelDetailsModelDetail extends $tea.Model {
  modifiedTime?: string;
  groupId?: string;
  description?: string;
  schema?: string;
  modelName?: string;
  createdTime?: string;
  modelId?: string;
  modelRef?: string;
  static names(): { [key: string]: string } {
    return {
      modifiedTime: 'ModifiedTime',
      groupId: 'GroupId',
      description: 'Description',
      schema: 'Schema',
      modelName: 'ModelName',
      createdTime: 'CreatedTime',
      modelId: 'ModelId',
      modelRef: 'ModelRef',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifiedTime: 'string',
      groupId: 'string',
      description: 'string',
      schema: 'string',
      modelName: 'string',
      createdTime: 'string',
      modelId: 'string',
      modelRef: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelsResponseBodyModelDetails extends $tea.Model {
  modelDetail?: DescribeModelsResponseBodyModelDetailsModelDetail[];
  static names(): { [key: string]: string } {
    return {
      modelDetail: 'ModelDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelDetail: { 'type': 'array', 'itemType': DescribeModelsResponseBodyModelDetailsModelDetail },
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

export class DescribeApiTrafficDataResponseBodyCallUploadsMonitorItem extends $tea.Model {
  itemValue?: string;
  itemTime?: string;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemTime: 'ItemTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiTrafficDataResponseBodyCallUploads extends $tea.Model {
  monitorItem?: DescribeApiTrafficDataResponseBodyCallUploadsMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeApiTrafficDataResponseBodyCallUploadsMonitorItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiTrafficDataResponseBodyCallDownloadsMonitorItem extends $tea.Model {
  itemValue?: string;
  itemTime?: string;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemTime: 'ItemTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiTrafficDataResponseBodyCallDownloads extends $tea.Model {
  monitorItem?: DescribeApiTrafficDataResponseBodyCallDownloadsMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeApiTrafficDataResponseBodyCallDownloadsMonitorItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestTag extends $tea.Model {
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

export class DescribeReadyReservationApisResponseBodyApisApiDigest extends $tea.Model {
  apiId?: string;
  groupId?: string;
  groupName?: string;
  path?: string;
  method?: string;
  apiName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      groupName: 'GroupName',
      path: 'Path',
      method: 'Method',
      apiName: 'ApiName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      groupName: 'string',
      path: 'string',
      method: 'string',
      apiName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReadyReservationApisResponseBodyApis extends $tea.Model {
  apiDigest?: DescribeReadyReservationApisResponseBodyApisApiDigest[];
  static names(): { [key: string]: string } {
    return {
      apiDigest: 'ApiDigest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDigest: { 'type': 'array', 'itemType': DescribeReadyReservationApisResponseBodyApisApiDigest },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceLatencyResponseBodyInstanceLatencyMonitorItem extends $tea.Model {
  itemValue?: string;
  itemTime?: string;
  item?: string;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemTime: 'ItemTime',
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemTime: 'string',
      item: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceLatencyResponseBodyInstanceLatency extends $tea.Model {
  monitorItem?: DescribeInstanceLatencyResponseBodyInstanceLatencyMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeInstanceLatencyResponseBodyInstanceLatencyMonitorItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiQpsDataResponseBodyCallSuccessesMonitorItem extends $tea.Model {
  itemValue?: string;
  itemTime?: string;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemTime: 'ItemTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiQpsDataResponseBodyCallSuccesses extends $tea.Model {
  monitorItem?: DescribeApiQpsDataResponseBodyCallSuccessesMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeApiQpsDataResponseBodyCallSuccessesMonitorItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiQpsDataResponseBodyCallFailsMonitorItem extends $tea.Model {
  itemValue?: string;
  itemTime?: string;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemTime: 'ItemTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiQpsDataResponseBodyCallFails extends $tea.Model {
  monitorItem?: DescribeApiQpsDataResponseBodyCallFailsMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeApiQpsDataResponseBodyCallFailsMonitorItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHttpCodeResponseBodyInstanceHttpCodeMonitorItem extends $tea.Model {
  itemValue?: string;
  itemTime?: string;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemTime: 'ItemTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHttpCodeResponseBodyInstanceHttpCode extends $tea.Model {
  monitorItem?: DescribeInstanceHttpCodeResponseBodyInstanceHttpCodeMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeInstanceHttpCodeResponseBodyInstanceHttpCodeMonitorItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppSecurityRequestTag extends $tea.Model {
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

export class DescribeZonesResponseBodyZonesZone extends $tea.Model {
  zoneId?: string;
  localName?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      localName: 'LocalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      localName: 'string',
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

export class DescribeRegionTrafficResponseBodyTrafficPerSecondMonitorItem extends $tea.Model {
  itemValue?: string;
  itemTime?: string;
  item?: string;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemTime: 'ItemTime',
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemTime: 'string',
      item: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionTrafficResponseBodyTrafficPerSecond extends $tea.Model {
  monitorItem?: DescribeRegionTrafficResponseBodyTrafficPerSecondMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeRegionTrafficResponseBodyTrafficPerSecondMonitorItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByAppResponseBodyAppApiRelationInfosAppApiRelationInfo extends $tea.Model {
  apiId?: string;
  authorizationSource?: string;
  authVaildTime?: string;
  description?: string;
  groupName?: string;
  groupId?: string;
  operator?: string;
  stageName?: string;
  createdTime?: string;
  apiName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      authorizationSource: 'AuthorizationSource',
      authVaildTime: 'AuthVaildTime',
      description: 'Description',
      groupName: 'GroupName',
      groupId: 'GroupId',
      operator: 'Operator',
      stageName: 'StageName',
      createdTime: 'CreatedTime',
      apiName: 'ApiName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      authorizationSource: 'string',
      authVaildTime: 'string',
      description: 'string',
      groupName: 'string',
      groupId: 'string',
      operator: 'string',
      stageName: 'string',
      createdTime: 'string',
      apiName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByAppResponseBodyAppApiRelationInfos extends $tea.Model {
  appApiRelationInfo?: DescribeApisByAppResponseBodyAppApiRelationInfosAppApiRelationInfo[];
  static names(): { [key: string]: string } {
    return {
      appApiRelationInfo: 'AppApiRelationInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appApiRelationInfo: { 'type': 'array', 'itemType': DescribeApisByAppResponseBodyAppApiRelationInfosAppApiRelationInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionQpsGroupByInstanceResponseBodyInstanceQpsMonitorItem extends $tea.Model {
  itemValue?: string;
  itemTime?: string;
  item?: string;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemTime: 'ItemTime',
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemTime: 'string',
      item: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionQpsGroupByInstanceResponseBodyInstanceQps extends $tea.Model {
  monitorItem?: DescribeRegionQpsGroupByInstanceResponseBodyInstanceQpsMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeRegionQpsGroupByInstanceResponseBodyInstanceQpsMonitorItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DryRunSwaggerResponseBodySuccessApiDryRunSwaggerSuccess extends $tea.Model {
  path?: string;
  httpMethod?: string;
  apiSwagger?: string;
  apiOperation?: string;
  apiUid?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      httpMethod: 'HttpMethod',
      apiSwagger: 'ApiSwagger',
      apiOperation: 'ApiOperation',
      apiUid: 'ApiUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      httpMethod: 'string',
      apiSwagger: 'string',
      apiOperation: 'string',
      apiUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DryRunSwaggerResponseBodySuccess extends $tea.Model {
  apiDryRunSwaggerSuccess?: DryRunSwaggerResponseBodySuccessApiDryRunSwaggerSuccess[];
  static names(): { [key: string]: string } {
    return {
      apiDryRunSwaggerSuccess: 'ApiDryRunSwaggerSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDryRunSwaggerSuccess: { 'type': 'array', 'itemType': DryRunSwaggerResponseBodySuccessApiDryRunSwaggerSuccess },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DryRunSwaggerResponseBodyFailedApiImportSwaggerFailed extends $tea.Model {
  path?: string;
  httpMethod?: string;
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      httpMethod: 'HttpMethod',
      errorMsg: 'ErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      httpMethod: 'string',
      errorMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DryRunSwaggerResponseBodyFailed extends $tea.Model {
  apiImportSwaggerFailed?: DryRunSwaggerResponseBodyFailedApiImportSwaggerFailed[];
  static names(): { [key: string]: string } {
    return {
      apiImportSwaggerFailed: 'ApiImportSwaggerFailed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiImportSwaggerFailed: { 'type': 'array', 'itemType': DryRunSwaggerResponseBodyFailedApiImportSwaggerFailed },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DryRunSwaggerResponseBodyModelFailedApiImportModelFailed extends $tea.Model {
  errorMsg?: string;
  modelName?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      modelName: 'ModelName',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      modelName: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DryRunSwaggerResponseBodyModelFailed extends $tea.Model {
  apiImportModelFailed?: DryRunSwaggerResponseBodyModelFailedApiImportModelFailed[];
  static names(): { [key: string]: string } {
    return {
      apiImportModelFailed: 'ApiImportModelFailed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiImportModelFailed: { 'type': 'array', 'itemType': DryRunSwaggerResponseBodyModelFailedApiImportModelFailed },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DryRunSwaggerResponseBodyModelSuccessApiImportModelSuccess extends $tea.Model {
  modelUid?: string;
  modelName?: string;
  groupId?: string;
  modelOperation?: string;
  static names(): { [key: string]: string } {
    return {
      modelUid: 'ModelUid',
      modelName: 'ModelName',
      groupId: 'GroupId',
      modelOperation: 'ModelOperation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelUid: 'string',
      modelName: 'string',
      groupId: 'string',
      modelOperation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DryRunSwaggerResponseBodyModelSuccess extends $tea.Model {
  apiImportModelSuccess?: DryRunSwaggerResponseBodyModelSuccessApiImportModelSuccess[];
  static names(): { [key: string]: string } {
    return {
      apiImportModelSuccess: 'ApiImportModelSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiImportModelSuccess: { 'type': 'array', 'itemType': DryRunSwaggerResponseBodyModelSuccessApiImportModelSuccess },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePluginRequestTag extends $tea.Model {
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

export class DescribeApisByIpControlResponseBodyApiInfosApiInfo extends $tea.Model {
  boundTime?: string;
  visibility?: string;
  apiId?: string;
  description?: string;
  groupName?: string;
  groupId?: string;
  stageName?: string;
  apiName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      boundTime: 'BoundTime',
      visibility: 'Visibility',
      apiId: 'ApiId',
      description: 'Description',
      groupName: 'GroupName',
      groupId: 'GroupId',
      stageName: 'StageName',
      apiName: 'ApiName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundTime: 'string',
      visibility: 'string',
      apiId: 'string',
      description: 'string',
      groupName: 'string',
      groupId: 'string',
      stageName: 'string',
      apiName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByIpControlResponseBodyApiInfos extends $tea.Model {
  apiInfo?: DescribeApisByIpControlResponseBodyApiInfosApiInfo[];
  static names(): { [key: string]: string } {
    return {
      apiInfo: 'ApiInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfo: { 'type': 'array', 'itemType': DescribeApisByIpControlResponseBodyApiInfosApiInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyRequestConfig extends $tea.Model {
  bodyModel?: string;
  requestPath?: string;
  requestHttpMethod?: string;
  bodyFormat?: string;
  requestMode?: string;
  postBodyDescription?: string;
  requestProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      bodyModel: 'BodyModel',
      requestPath: 'RequestPath',
      requestHttpMethod: 'RequestHttpMethod',
      bodyFormat: 'BodyFormat',
      requestMode: 'RequestMode',
      postBodyDescription: 'PostBodyDescription',
      requestProtocol: 'RequestProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyModel: 'string',
      requestPath: 'string',
      requestHttpMethod: 'string',
      bodyFormat: 'string',
      requestMode: 'string',
      postBodyDescription: 'string',
      requestProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyServiceConfigMockHeadersMockHeader extends $tea.Model {
  headerValue?: string;
  headerName?: string;
  static names(): { [key: string]: string } {
    return {
      headerValue: 'HeaderValue',
      headerName: 'HeaderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerValue: 'string',
      headerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyServiceConfigMockHeaders extends $tea.Model {
  mockHeader?: DescribeDeployedApiResponseBodyServiceConfigMockHeadersMockHeader[];
  static names(): { [key: string]: string } {
    return {
      mockHeader: 'MockHeader',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mockHeader: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodyServiceConfigMockHeadersMockHeader },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyServiceConfigVpcConfig extends $tea.Model {
  vpcId?: string;
  instanceId?: string;
  port?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      instanceId: 'InstanceId',
      port: 'Port',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      instanceId: 'string',
      port: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyServiceConfigFunctionComputeConfig extends $tea.Model {
  fcType?: string;
  roleArn?: string;
  method?: string;
  fcBaseUrl?: string;
  contentTypeValue?: string;
  regionId?: string;
  onlyBusinessPath?: boolean;
  functionName?: string;
  contentTypeCatagory?: string;
  path?: string;
  serviceName?: string;
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      fcType: 'FcType',
      roleArn: 'RoleArn',
      method: 'Method',
      fcBaseUrl: 'FcBaseUrl',
      contentTypeValue: 'ContentTypeValue',
      regionId: 'RegionId',
      onlyBusinessPath: 'OnlyBusinessPath',
      functionName: 'FunctionName',
      contentTypeCatagory: 'ContentTypeCatagory',
      path: 'Path',
      serviceName: 'ServiceName',
      qualifier: 'Qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fcType: 'string',
      roleArn: 'string',
      method: 'string',
      fcBaseUrl: 'string',
      contentTypeValue: 'string',
      regionId: 'string',
      onlyBusinessPath: 'boolean',
      functionName: 'string',
      contentTypeCatagory: 'string',
      path: 'string',
      serviceName: 'string',
      qualifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyServiceConfig extends $tea.Model {
  vpcId?: string;
  mockStatusCode?: number;
  servicePath?: string;
  mock?: string;
  serviceAddress?: string;
  serviceVpcEnable?: string;
  mockResult?: string;
  serviceHttpMethod?: string;
  serviceProtocol?: string;
  serviceTimeout?: number;
  mockHeaders?: DescribeDeployedApiResponseBodyServiceConfigMockHeaders;
  vpcConfig?: DescribeDeployedApiResponseBodyServiceConfigVpcConfig;
  functionComputeConfig?: DescribeDeployedApiResponseBodyServiceConfigFunctionComputeConfig;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      mockStatusCode: 'MockStatusCode',
      servicePath: 'ServicePath',
      mock: 'Mock',
      serviceAddress: 'ServiceAddress',
      serviceVpcEnable: 'ServiceVpcEnable',
      mockResult: 'MockResult',
      serviceHttpMethod: 'ServiceHttpMethod',
      serviceProtocol: 'ServiceProtocol',
      serviceTimeout: 'ServiceTimeout',
      mockHeaders: 'MockHeaders',
      vpcConfig: 'VpcConfig',
      functionComputeConfig: 'FunctionComputeConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      mockStatusCode: 'number',
      servicePath: 'string',
      mock: 'string',
      serviceAddress: 'string',
      serviceVpcEnable: 'string',
      mockResult: 'string',
      serviceHttpMethod: 'string',
      serviceProtocol: 'string',
      serviceTimeout: 'number',
      mockHeaders: DescribeDeployedApiResponseBodyServiceConfigMockHeaders,
      vpcConfig: DescribeDeployedApiResponseBodyServiceConfigVpcConfig,
      functionComputeConfig: DescribeDeployedApiResponseBodyServiceConfigFunctionComputeConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyOpenIdConnectConfig extends $tea.Model {
  openIdApiType?: string;
  idTokenParamName?: string;
  publicKeyId?: string;
  publicKey?: string;
  static names(): { [key: string]: string } {
    return {
      openIdApiType: 'OpenIdApiType',
      idTokenParamName: 'IdTokenParamName',
      publicKeyId: 'PublicKeyId',
      publicKey: 'PublicKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openIdApiType: 'string',
      idTokenParamName: 'string',
      publicKeyId: 'string',
      publicKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyErrorCodeSamplesErrorCodeSample extends $tea.Model {
  code?: string;
  message?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyErrorCodeSamples extends $tea.Model {
  errorCodeSample?: DescribeDeployedApiResponseBodyErrorCodeSamplesErrorCodeSample[];
  static names(): { [key: string]: string } {
    return {
      errorCodeSample: 'ErrorCodeSample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCodeSample: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodyErrorCodeSamplesErrorCodeSample },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyResultDescriptionsResultDescription extends $tea.Model {
  type?: string;
  key?: string;
  hasChild?: boolean;
  description?: string;
  pid?: string;
  mandatory?: boolean;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      key: 'Key',
      hasChild: 'HasChild',
      description: 'Description',
      pid: 'Pid',
      mandatory: 'Mandatory',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      key: 'string',
      hasChild: 'boolean',
      description: 'string',
      pid: 'string',
      mandatory: 'boolean',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyResultDescriptions extends $tea.Model {
  resultDescription?: DescribeDeployedApiResponseBodyResultDescriptionsResultDescription[];
  static names(): { [key: string]: string } {
    return {
      resultDescription: 'ResultDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultDescription: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodyResultDescriptionsResultDescription },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodySystemParametersSystemParameter extends $tea.Model {
  demoValue?: string;
  description?: string;
  parameterName?: string;
  location?: string;
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      demoValue: 'DemoValue',
      description: 'Description',
      parameterName: 'ParameterName',
      location: 'Location',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoValue: 'string',
      description: 'string',
      parameterName: 'string',
      location: 'string',
      serviceParameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodySystemParameters extends $tea.Model {
  systemParameter?: DescribeDeployedApiResponseBodySystemParametersSystemParameter[];
  static names(): { [key: string]: string } {
    return {
      systemParameter: 'SystemParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemParameter: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodySystemParametersSystemParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyCustomSystemParametersCustomSystemParameter extends $tea.Model {
  demoValue?: string;
  description?: string;
  parameterName?: string;
  location?: string;
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      demoValue: 'DemoValue',
      description: 'Description',
      parameterName: 'ParameterName',
      location: 'Location',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoValue: 'string',
      description: 'string',
      parameterName: 'string',
      location: 'string',
      serviceParameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyCustomSystemParameters extends $tea.Model {
  customSystemParameter?: DescribeDeployedApiResponseBodyCustomSystemParametersCustomSystemParameter[];
  static names(): { [key: string]: string } {
    return {
      customSystemParameter: 'CustomSystemParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSystemParameter: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodyCustomSystemParametersCustomSystemParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyConstantParametersConstantParameter extends $tea.Model {
  description?: string;
  location?: string;
  serviceParameterName?: string;
  constantValue?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      location: 'Location',
      serviceParameterName: 'ServiceParameterName',
      constantValue: 'ConstantValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      location: 'string',
      serviceParameterName: 'string',
      constantValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyConstantParameters extends $tea.Model {
  constantParameter?: DescribeDeployedApiResponseBodyConstantParametersConstantParameter[];
  static names(): { [key: string]: string } {
    return {
      constantParameter: 'ConstantParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constantParameter: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodyConstantParametersConstantParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyRequestParametersRequestParameter extends $tea.Model {
  jsonScheme?: string;
  maxValue?: number;
  arrayItemsType?: string;
  minValue?: number;
  docShow?: string;
  maxLength?: number;
  defaultValue?: string;
  apiParameterName?: string;
  enumValue?: string;
  demoValue?: string;
  required?: string;
  description?: string;
  parameterType?: string;
  regularExpression?: string;
  minLength?: number;
  docOrder?: number;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      jsonScheme: 'JsonScheme',
      maxValue: 'MaxValue',
      arrayItemsType: 'ArrayItemsType',
      minValue: 'MinValue',
      docShow: 'DocShow',
      maxLength: 'MaxLength',
      defaultValue: 'DefaultValue',
      apiParameterName: 'ApiParameterName',
      enumValue: 'EnumValue',
      demoValue: 'DemoValue',
      required: 'Required',
      description: 'Description',
      parameterType: 'ParameterType',
      regularExpression: 'RegularExpression',
      minLength: 'MinLength',
      docOrder: 'DocOrder',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonScheme: 'string',
      maxValue: 'number',
      arrayItemsType: 'string',
      minValue: 'number',
      docShow: 'string',
      maxLength: 'number',
      defaultValue: 'string',
      apiParameterName: 'string',
      enumValue: 'string',
      demoValue: 'string',
      required: 'string',
      description: 'string',
      parameterType: 'string',
      regularExpression: 'string',
      minLength: 'number',
      docOrder: 'number',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyRequestParameters extends $tea.Model {
  requestParameter?: DescribeDeployedApiResponseBodyRequestParametersRequestParameter[];
  static names(): { [key: string]: string } {
    return {
      requestParameter: 'RequestParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParameter: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodyRequestParametersRequestParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyServiceParametersServiceParameter extends $tea.Model {
  location?: string;
  parameterType?: string;
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      parameterType: 'ParameterType',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: 'string',
      parameterType: 'string',
      serviceParameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyServiceParameters extends $tea.Model {
  serviceParameter?: DescribeDeployedApiResponseBodyServiceParametersServiceParameter[];
  static names(): { [key: string]: string } {
    return {
      serviceParameter: 'ServiceParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceParameter: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodyServiceParametersServiceParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyServiceParametersMapServiceParameterMap extends $tea.Model {
  requestParameterName?: string;
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      requestParameterName: 'RequestParameterName',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParameterName: 'string',
      serviceParameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyServiceParametersMap extends $tea.Model {
  serviceParameterMap?: DescribeDeployedApiResponseBodyServiceParametersMapServiceParameterMap[];
  static names(): { [key: string]: string } {
    return {
      serviceParameterMap: 'ServiceParameterMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceParameterMap: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodyServiceParametersMapServiceParameterMap },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisBySignatureResponseBodyApiInfosApiInfo extends $tea.Model {
  boundTime?: string;
  visibility?: string;
  apiId?: string;
  description?: string;
  groupName?: string;
  groupId?: string;
  stageName?: string;
  apiName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      boundTime: 'BoundTime',
      visibility: 'Visibility',
      apiId: 'ApiId',
      description: 'Description',
      groupName: 'GroupName',
      groupId: 'GroupId',
      stageName: 'StageName',
      apiName: 'ApiName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundTime: 'string',
      visibility: 'string',
      apiId: 'string',
      description: 'string',
      groupName: 'string',
      groupId: 'string',
      stageName: 'string',
      apiName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisBySignatureResponseBodyApiInfos extends $tea.Model {
  apiInfo?: DescribeApisBySignatureResponseBodyApiInfosApiInfo[];
  static names(): { [key: string]: string } {
    return {
      apiInfo: 'ApiInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfo: { 'type': 'array', 'itemType': DescribeApisBySignatureResponseBodyApiInfosApiInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccordanceApisResponseBodyAccordanceApisAccordanceApiSource extends $tea.Model {
  apiId?: string;
  groupName?: string;
  groupId?: string;
  version?: string;
  path?: string;
  method?: string;
  stageName?: string;
  apiName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupName: 'GroupName',
      groupId: 'GroupId',
      version: 'Version',
      path: 'Path',
      method: 'Method',
      stageName: 'StageName',
      apiName: 'ApiName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupName: 'string',
      groupId: 'string',
      version: 'string',
      path: 'string',
      method: 'string',
      stageName: 'string',
      apiName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccordanceApisResponseBodyAccordanceApisAccordanceApiTarget extends $tea.Model {
  apiId?: string;
  groupId?: string;
  groupName?: string;
  path?: string;
  method?: string;
  apiName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      groupName: 'GroupName',
      path: 'Path',
      method: 'Method',
      apiName: 'ApiName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      groupName: 'string',
      path: 'string',
      method: 'string',
      apiName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccordanceApisResponseBodyAccordanceApisAccordanceApi extends $tea.Model {
  source?: DescribeAccordanceApisResponseBodyAccordanceApisAccordanceApiSource;
  target?: DescribeAccordanceApisResponseBodyAccordanceApisAccordanceApiTarget;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: DescribeAccordanceApisResponseBodyAccordanceApisAccordanceApiSource,
      target: DescribeAccordanceApisResponseBodyAccordanceApisAccordanceApiTarget,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccordanceApisResponseBodyAccordanceApis extends $tea.Model {
  accordanceApi?: DescribeAccordanceApisResponseBodyAccordanceApisAccordanceApi[];
  static names(): { [key: string]: string } {
    return {
      accordanceApi: 'AccordanceApi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accordanceApi: { 'type': 'array', 'itemType': DescribeAccordanceApisResponseBodyAccordanceApisAccordanceApi },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSignaturesByApiResponseBodySignaturesSignatureItem extends $tea.Model {
  boundTime?: string;
  signatureId?: string;
  signatureName?: string;
  static names(): { [key: string]: string } {
    return {
      boundTime: 'BoundTime',
      signatureId: 'SignatureId',
      signatureName: 'SignatureName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundTime: 'string',
      signatureId: 'string',
      signatureName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSignaturesByApiResponseBodySignatures extends $tea.Model {
  signatureItem?: DescribeSignaturesByApiResponseBodySignaturesSignatureItem[];
  static names(): { [key: string]: string } {
    return {
      signatureItem: 'SignatureItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signatureItem: { 'type': 'array', 'itemType': DescribeSignaturesByApiResponseBodySignaturesSignatureItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppRequestTag extends $tea.Model {
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

export class DescribeInstanceDropConnectionsResponseBodyInstanceDropConnectionsMonitorItem extends $tea.Model {
  itemValue?: string;
  itemTime?: string;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemTime: 'ItemTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDropConnectionsResponseBodyInstanceDropConnections extends $tea.Model {
  monitorItem?: DescribeInstanceDropConnectionsResponseBodyInstanceDropConnectionsMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeInstanceDropConnectionsResponseBodyInstanceDropConnectionsMonitorItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiTrafficControlsResponseBodyApiTrafficControlsApiTrafficControlItem extends $tea.Model {
  boundTime?: string;
  apiId?: string;
  trafficControlId?: string;
  trafficControlName?: string;
  apiName?: string;
  static names(): { [key: string]: string } {
    return {
      boundTime: 'BoundTime',
      apiId: 'ApiId',
      trafficControlId: 'TrafficControlId',
      trafficControlName: 'TrafficControlName',
      apiName: 'ApiName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundTime: 'string',
      apiId: 'string',
      trafficControlId: 'string',
      trafficControlName: 'string',
      apiName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiTrafficControlsResponseBodyApiTrafficControls extends $tea.Model {
  apiTrafficControlItem?: DescribeApiTrafficControlsResponseBodyApiTrafficControlsApiTrafficControlItem[];
  static names(): { [key: string]: string } {
    return {
      apiTrafficControlItem: 'ApiTrafficControlItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiTrafficControlItem: { 'type': 'array', 'itemType': DescribeApiTrafficControlsResponseBodyApiTrafficControlsApiTrafficControlItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTrafficResponseBodyInstanceTrafficMonitorItem extends $tea.Model {
  itemValue?: string;
  itemTime?: string;
  item?: string;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemTime: 'ItemTime',
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemTime: 'string',
      item: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTrafficResponseBodyInstanceTraffic extends $tea.Model {
  monitorItem?: DescribeInstanceTrafficResponseBodyInstanceTrafficMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeInstanceTrafficResponseBodyInstanceTrafficMonitorItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceQpsResponseBodyInstanceQpsMonitorItem extends $tea.Model {
  itemValue?: string;
  itemTime?: string;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemTime: 'ItemTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceQpsResponseBodyInstanceQps extends $tea.Model {
  monitorItem?: DescribeInstanceQpsResponseBodyInstanceQpsMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeInstanceQpsResponseBodyInstanceQpsMonitorItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupQpsResponseBodyGroupQpsMonitorItem extends $tea.Model {
  itemValue?: string;
  itemTime?: string;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemTime: 'ItemTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupQpsResponseBodyGroupQps extends $tea.Model {
  monitorItem?: DescribeGroupQpsResponseBodyGroupQpsMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeGroupQpsResponseBodyGroupQpsMonitorItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiSignaturesResponseBodyApiSignaturesApiSignatureItem extends $tea.Model {
  boundTime?: string;
  apiId?: string;
  signatureId?: string;
  signatureName?: string;
  apiName?: string;
  static names(): { [key: string]: string } {
    return {
      boundTime: 'BoundTime',
      apiId: 'ApiId',
      signatureId: 'SignatureId',
      signatureName: 'SignatureName',
      apiName: 'ApiName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundTime: 'string',
      apiId: 'string',
      signatureId: 'string',
      signatureName: 'string',
      apiName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiSignaturesResponseBodyApiSignatures extends $tea.Model {
  apiSignatureItem?: DescribeApiSignaturesResponseBodyApiSignaturesApiSignatureItem[];
  static names(): { [key: string]: string } {
    return {
      apiSignatureItem: 'ApiSignatureItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiSignatureItem: { 'type': 'array', 'itemType': DescribeApiSignaturesResponseBodyApiSignaturesApiSignatureItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpControlPolicyItemsResponseBodyIpControlPolicyItemsIpControlPolicyItem extends $tea.Model {
  modifiedTime?: string;
  policyItemId?: string;
  cidrIp?: string;
  createTime?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      modifiedTime: 'ModifiedTime',
      policyItemId: 'PolicyItemId',
      cidrIp: 'CidrIp',
      createTime: 'CreateTime',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifiedTime: 'string',
      policyItemId: 'string',
      cidrIp: 'string',
      createTime: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpControlPolicyItemsResponseBodyIpControlPolicyItems extends $tea.Model {
  ipControlPolicyItem?: DescribeIpControlPolicyItemsResponseBodyIpControlPolicyItemsIpControlPolicyItem[];
  static names(): { [key: string]: string } {
    return {
      ipControlPolicyItem: 'IpControlPolicyItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipControlPolicyItem: { 'type': 'array', 'itemType': DescribeIpControlPolicyItemsResponseBodyIpControlPolicyItemsIpControlPolicyItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupConfigSynFlowsResponseBodyFlowsFlow extends $tea.Model {
  apiCopyVersion?: string;
  sourceGroupId?: string;
  modifiedTime?: string;
  flowStatus?: string;
  region?: string;
  executionTime?: string;
  targetGroupName?: string;
  targetGroupId?: string;
  createdTime?: string;
  flowId?: string;
  sourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      apiCopyVersion: 'ApiCopyVersion',
      sourceGroupId: 'SourceGroupId',
      modifiedTime: 'ModifiedTime',
      flowStatus: 'FlowStatus',
      region: 'Region',
      executionTime: 'ExecutionTime',
      targetGroupName: 'TargetGroupName',
      targetGroupId: 'TargetGroupId',
      createdTime: 'CreatedTime',
      flowId: 'FlowId',
      sourceGroupName: 'SourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiCopyVersion: 'string',
      sourceGroupId: 'string',
      modifiedTime: 'string',
      flowStatus: 'string',
      region: 'string',
      executionTime: 'string',
      targetGroupName: 'string',
      targetGroupId: 'string',
      createdTime: 'string',
      flowId: 'string',
      sourceGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupConfigSynFlowsResponseBodyFlows extends $tea.Model {
  flow?: DescribeGroupConfigSynFlowsResponseBodyFlowsFlow[];
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: { 'type': 'array', 'itemType': DescribeGroupConfigSynFlowsResponseBodyFlowsFlow },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncApiTaskResponseBodyApisApiDigest extends $tea.Model {
  apiId?: string;
  groupName?: string;
  groupId?: string;
  version?: string;
  path?: string;
  synTime?: string;
  method?: string;
  apiName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupName: 'GroupName',
      groupId: 'GroupId',
      version: 'Version',
      path: 'Path',
      synTime: 'SynTime',
      method: 'Method',
      apiName: 'ApiName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupName: 'string',
      groupId: 'string',
      version: 'string',
      path: 'string',
      synTime: 'string',
      method: 'string',
      apiName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncApiTaskResponseBodyApis extends $tea.Model {
  apiDigest?: DescribeSyncApiTaskResponseBodyApisApiDigest[];
  static names(): { [key: string]: string } {
    return {
      apiDigest: 'ApiDigest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDigest: { 'type': 'array', 'itemType': DescribeSyncApiTaskResponseBodyApisApiDigest },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiGroupRequestTag extends $tea.Model {
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

export class DescribeApiResponseBodyRequestConfig extends $tea.Model {
  bodyModel?: string;
  requestPath?: string;
  requestHttpMethod?: string;
  bodyFormat?: string;
  requestMode?: string;
  postBodyDescription?: string;
  requestProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      bodyModel: 'BodyModel',
      requestPath: 'RequestPath',
      requestHttpMethod: 'RequestHttpMethod',
      bodyFormat: 'BodyFormat',
      requestMode: 'RequestMode',
      postBodyDescription: 'PostBodyDescription',
      requestProtocol: 'RequestProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyModel: 'string',
      requestPath: 'string',
      requestHttpMethod: 'string',
      bodyFormat: 'string',
      requestMode: 'string',
      postBodyDescription: 'string',
      requestProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyServiceConfigMockHeadersMockHeader extends $tea.Model {
  headerValue?: string;
  headerName?: string;
  static names(): { [key: string]: string } {
    return {
      headerValue: 'HeaderValue',
      headerName: 'HeaderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerValue: 'string',
      headerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyServiceConfigMockHeaders extends $tea.Model {
  mockHeader?: DescribeApiResponseBodyServiceConfigMockHeadersMockHeader[];
  static names(): { [key: string]: string } {
    return {
      mockHeader: 'MockHeader',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mockHeader: { 'type': 'array', 'itemType': DescribeApiResponseBodyServiceConfigMockHeadersMockHeader },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyServiceConfigVpcConfig extends $tea.Model {
  vpcId?: string;
  vpcScheme?: string;
  instanceId?: string;
  port?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      vpcScheme: 'VpcScheme',
      instanceId: 'InstanceId',
      port: 'Port',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vpcScheme: 'string',
      instanceId: 'string',
      port: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyServiceConfigFunctionComputeConfig extends $tea.Model {
  fcType?: string;
  roleArn?: string;
  method?: string;
  fcBaseUrl?: string;
  contentTypeValue?: string;
  regionId?: string;
  onlyBusinessPath?: boolean;
  functionName?: string;
  contentTypeCatagory?: string;
  path?: string;
  serviceName?: string;
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      fcType: 'FcType',
      roleArn: 'RoleArn',
      method: 'Method',
      fcBaseUrl: 'FcBaseUrl',
      contentTypeValue: 'ContentTypeValue',
      regionId: 'RegionId',
      onlyBusinessPath: 'OnlyBusinessPath',
      functionName: 'FunctionName',
      contentTypeCatagory: 'ContentTypeCatagory',
      path: 'Path',
      serviceName: 'ServiceName',
      qualifier: 'Qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fcType: 'string',
      roleArn: 'string',
      method: 'string',
      fcBaseUrl: 'string',
      contentTypeValue: 'string',
      regionId: 'string',
      onlyBusinessPath: 'boolean',
      functionName: 'string',
      contentTypeCatagory: 'string',
      path: 'string',
      serviceName: 'string',
      qualifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyServiceConfigOssConfig extends $tea.Model {
  key?: string;
  action?: string;
  ossRegionId?: string;
  bucketName?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      action: 'Action',
      ossRegionId: 'OssRegionId',
      bucketName: 'BucketName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      action: 'string',
      ossRegionId: 'string',
      bucketName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyServiceConfig extends $tea.Model {
  aoneAppName?: string;
  mockStatusCode?: number;
  contentTypeValue?: string;
  serviceProtocol?: string;
  servicePath?: string;
  contentTypeCatagory?: string;
  serviceAddress?: string;
  mock?: string;
  serviceVpcEnable?: string;
  mockResult?: string;
  serviceHttpMethod?: string;
  serviceTimeout?: number;
  mockHeaders?: DescribeApiResponseBodyServiceConfigMockHeaders;
  vpcConfig?: DescribeApiResponseBodyServiceConfigVpcConfig;
  functionComputeConfig?: DescribeApiResponseBodyServiceConfigFunctionComputeConfig;
  ossConfig?: DescribeApiResponseBodyServiceConfigOssConfig;
  static names(): { [key: string]: string } {
    return {
      aoneAppName: 'AoneAppName',
      mockStatusCode: 'MockStatusCode',
      contentTypeValue: 'ContentTypeValue',
      serviceProtocol: 'ServiceProtocol',
      servicePath: 'ServicePath',
      contentTypeCatagory: 'ContentTypeCatagory',
      serviceAddress: 'ServiceAddress',
      mock: 'Mock',
      serviceVpcEnable: 'ServiceVpcEnable',
      mockResult: 'MockResult',
      serviceHttpMethod: 'ServiceHttpMethod',
      serviceTimeout: 'ServiceTimeout',
      mockHeaders: 'MockHeaders',
      vpcConfig: 'VpcConfig',
      functionComputeConfig: 'FunctionComputeConfig',
      ossConfig: 'OssConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aoneAppName: 'string',
      mockStatusCode: 'number',
      contentTypeValue: 'string',
      serviceProtocol: 'string',
      servicePath: 'string',
      contentTypeCatagory: 'string',
      serviceAddress: 'string',
      mock: 'string',
      serviceVpcEnable: 'string',
      mockResult: 'string',
      serviceHttpMethod: 'string',
      serviceTimeout: 'number',
      mockHeaders: DescribeApiResponseBodyServiceConfigMockHeaders,
      vpcConfig: DescribeApiResponseBodyServiceConfigVpcConfig,
      functionComputeConfig: DescribeApiResponseBodyServiceConfigFunctionComputeConfig,
      ossConfig: DescribeApiResponseBodyServiceConfigOssConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyOpenIdConnectConfig extends $tea.Model {
  openIdApiType?: string;
  idTokenParamName?: string;
  publicKeyId?: string;
  publicKey?: string;
  static names(): { [key: string]: string } {
    return {
      openIdApiType: 'OpenIdApiType',
      idTokenParamName: 'IdTokenParamName',
      publicKeyId: 'PublicKeyId',
      publicKey: 'PublicKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openIdApiType: 'string',
      idTokenParamName: 'string',
      publicKeyId: 'string',
      publicKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyErrorCodeSamplesErrorCodeSample extends $tea.Model {
  code?: string;
  model?: string;
  message?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      model: 'Model',
      message: 'Message',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      model: 'string',
      message: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyErrorCodeSamples extends $tea.Model {
  errorCodeSample?: DescribeApiResponseBodyErrorCodeSamplesErrorCodeSample[];
  static names(): { [key: string]: string } {
    return {
      errorCodeSample: 'ErrorCodeSample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCodeSample: { 'type': 'array', 'itemType': DescribeApiResponseBodyErrorCodeSamplesErrorCodeSample },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyResultDescriptionsResultDescription extends $tea.Model {
  type?: string;
  key?: string;
  hasChild?: boolean;
  description?: string;
  pid?: string;
  mandatory?: boolean;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      key: 'Key',
      hasChild: 'HasChild',
      description: 'Description',
      pid: 'Pid',
      mandatory: 'Mandatory',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      key: 'string',
      hasChild: 'boolean',
      description: 'string',
      pid: 'string',
      mandatory: 'boolean',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyResultDescriptions extends $tea.Model {
  resultDescription?: DescribeApiResponseBodyResultDescriptionsResultDescription[];
  static names(): { [key: string]: string } {
    return {
      resultDescription: 'ResultDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultDescription: { 'type': 'array', 'itemType': DescribeApiResponseBodyResultDescriptionsResultDescription },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodySystemParametersSystemParameter extends $tea.Model {
  demoValue?: string;
  description?: string;
  parameterName?: string;
  location?: string;
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      demoValue: 'DemoValue',
      description: 'Description',
      parameterName: 'ParameterName',
      location: 'Location',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoValue: 'string',
      description: 'string',
      parameterName: 'string',
      location: 'string',
      serviceParameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodySystemParameters extends $tea.Model {
  systemParameter?: DescribeApiResponseBodySystemParametersSystemParameter[];
  static names(): { [key: string]: string } {
    return {
      systemParameter: 'SystemParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemParameter: { 'type': 'array', 'itemType': DescribeApiResponseBodySystemParametersSystemParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyCustomSystemParametersCustomSystemParameter extends $tea.Model {
  demoValue?: string;
  description?: string;
  parameterName?: string;
  location?: string;
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      demoValue: 'DemoValue',
      description: 'Description',
      parameterName: 'ParameterName',
      location: 'Location',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoValue: 'string',
      description: 'string',
      parameterName: 'string',
      location: 'string',
      serviceParameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyCustomSystemParameters extends $tea.Model {
  customSystemParameter?: DescribeApiResponseBodyCustomSystemParametersCustomSystemParameter[];
  static names(): { [key: string]: string } {
    return {
      customSystemParameter: 'CustomSystemParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSystemParameter: { 'type': 'array', 'itemType': DescribeApiResponseBodyCustomSystemParametersCustomSystemParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyConstantParametersConstantParameter extends $tea.Model {
  description?: string;
  location?: string;
  serviceParameterName?: string;
  constantValue?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      location: 'Location',
      serviceParameterName: 'ServiceParameterName',
      constantValue: 'ConstantValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      location: 'string',
      serviceParameterName: 'string',
      constantValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyConstantParameters extends $tea.Model {
  constantParameter?: DescribeApiResponseBodyConstantParametersConstantParameter[];
  static names(): { [key: string]: string } {
    return {
      constantParameter: 'ConstantParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constantParameter: { 'type': 'array', 'itemType': DescribeApiResponseBodyConstantParametersConstantParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyRequestParametersRequestParameter extends $tea.Model {
  jsonScheme?: string;
  maxValue?: number;
  arrayItemsType?: string;
  minValue?: number;
  docShow?: string;
  maxLength?: number;
  defaultValue?: string;
  apiParameterName?: string;
  enumValue?: string;
  demoValue?: string;
  required?: string;
  description?: string;
  parameterType?: string;
  regularExpression?: string;
  minLength?: number;
  docOrder?: number;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      jsonScheme: 'JsonScheme',
      maxValue: 'MaxValue',
      arrayItemsType: 'ArrayItemsType',
      minValue: 'MinValue',
      docShow: 'DocShow',
      maxLength: 'MaxLength',
      defaultValue: 'DefaultValue',
      apiParameterName: 'ApiParameterName',
      enumValue: 'EnumValue',
      demoValue: 'DemoValue',
      required: 'Required',
      description: 'Description',
      parameterType: 'ParameterType',
      regularExpression: 'RegularExpression',
      minLength: 'MinLength',
      docOrder: 'DocOrder',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonScheme: 'string',
      maxValue: 'number',
      arrayItemsType: 'string',
      minValue: 'number',
      docShow: 'string',
      maxLength: 'number',
      defaultValue: 'string',
      apiParameterName: 'string',
      enumValue: 'string',
      demoValue: 'string',
      required: 'string',
      description: 'string',
      parameterType: 'string',
      regularExpression: 'string',
      minLength: 'number',
      docOrder: 'number',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyRequestParameters extends $tea.Model {
  requestParameter?: DescribeApiResponseBodyRequestParametersRequestParameter[];
  static names(): { [key: string]: string } {
    return {
      requestParameter: 'RequestParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParameter: { 'type': 'array', 'itemType': DescribeApiResponseBodyRequestParametersRequestParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyServiceParametersServiceParameter extends $tea.Model {
  location?: string;
  parameterType?: string;
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      parameterType: 'ParameterType',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: 'string',
      parameterType: 'string',
      serviceParameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyServiceParameters extends $tea.Model {
  serviceParameter?: DescribeApiResponseBodyServiceParametersServiceParameter[];
  static names(): { [key: string]: string } {
    return {
      serviceParameter: 'ServiceParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceParameter: { 'type': 'array', 'itemType': DescribeApiResponseBodyServiceParametersServiceParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyServiceParametersMapServiceParameterMap extends $tea.Model {
  requestParameterName?: string;
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      requestParameterName: 'RequestParameterName',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParameterName: 'string',
      serviceParameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyServiceParametersMap extends $tea.Model {
  serviceParameterMap?: DescribeApiResponseBodyServiceParametersMapServiceParameterMap[];
  static names(): { [key: string]: string } {
    return {
      serviceParameterMap: 'ServiceParameterMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceParameterMap: { 'type': 'array', 'itemType': DescribeApiResponseBodyServiceParametersMapServiceParameterMap },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyDeployedInfosDeployedInfo extends $tea.Model {
  stageName?: string;
  effectiveVersion?: string;
  deployedStatus?: string;
  static names(): { [key: string]: string } {
    return {
      stageName: 'StageName',
      effectiveVersion: 'EffectiveVersion',
      deployedStatus: 'DeployedStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stageName: 'string',
      effectiveVersion: 'string',
      deployedStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyDeployedInfos extends $tea.Model {
  deployedInfo?: DescribeApiResponseBodyDeployedInfosDeployedInfo[];
  static names(): { [key: string]: string } {
    return {
      deployedInfo: 'DeployedInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployedInfo: { 'type': 'array', 'itemType': DescribeApiResponseBodyDeployedInfosDeployedInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicySpecialsSpecial extends $tea.Model {
  trafficValue?: number;
  specialKey?: string;
  static names(): { [key: string]: string } {
    return {
      trafficValue: 'TrafficValue',
      specialKey: 'SpecialKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficValue: 'number',
      specialKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicySpecials extends $tea.Model {
  special?: DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicySpecialsSpecial[];
  static names(): { [key: string]: string } {
    return {
      special: 'Special',
    };
  }

  static types(): { [key: string]: any } {
    return {
      special: { 'type': 'array', 'itemType': DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicySpecialsSpecial },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicy extends $tea.Model {
  specialType?: string;
  specials?: DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicySpecials;
  static names(): { [key: string]: string } {
    return {
      specialType: 'SpecialType',
      specials: 'Specials',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specialType: 'string',
      specials: DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicySpecials,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPolicies extends $tea.Model {
  specialPolicy?: DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicy[];
  static names(): { [key: string]: string } {
    return {
      specialPolicy: 'SpecialPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specialPolicy: { 'type': 'array', 'itemType': DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicy },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficControlsResponseBodyTrafficControlsTrafficControl extends $tea.Model {
  userDefault?: number;
  apiDefault?: number;
  modifiedTime?: string;
  description?: string;
  trafficControlUnit?: string;
  trafficControlName?: string;
  appDefault?: number;
  trafficControlId?: string;
  createdTime?: string;
  specialPolicies?: DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPolicies;
  static names(): { [key: string]: string } {
    return {
      userDefault: 'UserDefault',
      apiDefault: 'ApiDefault',
      modifiedTime: 'ModifiedTime',
      description: 'Description',
      trafficControlUnit: 'TrafficControlUnit',
      trafficControlName: 'TrafficControlName',
      appDefault: 'AppDefault',
      trafficControlId: 'TrafficControlId',
      createdTime: 'CreatedTime',
      specialPolicies: 'SpecialPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userDefault: 'number',
      apiDefault: 'number',
      modifiedTime: 'string',
      description: 'string',
      trafficControlUnit: 'string',
      trafficControlName: 'string',
      appDefault: 'number',
      trafficControlId: 'string',
      createdTime: 'string',
      specialPolicies: DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPolicies,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficControlsResponseBodyTrafficControls extends $tea.Model {
  trafficControl?: DescribeTrafficControlsResponseBodyTrafficControlsTrafficControl[];
  static names(): { [key: string]: string } {
    return {
      trafficControl: 'TrafficControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficControl: { 'type': 'array', 'itemType': DescribeTrafficControlsResponseBodyTrafficControlsTrafficControl },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiLatencyDataResponseBodyCallLatencysMonitorItem extends $tea.Model {
  itemValue?: string;
  itemTime?: string;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemTime: 'ItemTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiLatencyDataResponseBodyCallLatencys extends $tea.Model {
  monitorItem?: DescribeApiLatencyDataResponseBodyCallLatencysMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeApiLatencyDataResponseBodyCallLatencysMonitorItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupLatencyResponseBodyLatencyPacketMonitorItem extends $tea.Model {
  itemValue?: string;
  itemTime?: string;
  item?: string;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemTime: 'ItemTime',
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemTime: 'string',
      item: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupLatencyResponseBodyLatencyPacket extends $tea.Model {
  monitorItem?: DescribeGroupLatencyResponseBodyLatencyPacketMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeGroupLatencyResponseBodyLatencyPacketMonitorItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendDifferentApisResponseBodyConflictApisConflictApiSource extends $tea.Model {
  apiVersion?: string;
  apiId?: string;
  vpcName?: string;
  groupName?: string;
  groupId?: string;
  path?: string;
  method?: string;
  apiName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      apiId: 'ApiId',
      vpcName: 'VpcName',
      groupName: 'GroupName',
      groupId: 'GroupId',
      path: 'Path',
      method: 'Method',
      apiName: 'ApiName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      apiId: 'string',
      vpcName: 'string',
      groupName: 'string',
      groupId: 'string',
      path: 'string',
      method: 'string',
      apiName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendDifferentApisResponseBodyConflictApisConflictApiTarget extends $tea.Model {
  apiId?: string;
  vpcName?: string;
  groupId?: string;
  groupName?: string;
  path?: string;
  method?: string;
  apiName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      vpcName: 'VpcName',
      groupId: 'GroupId',
      groupName: 'GroupName',
      path: 'Path',
      method: 'Method',
      apiName: 'ApiName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      vpcName: 'string',
      groupId: 'string',
      groupName: 'string',
      path: 'string',
      method: 'string',
      apiName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendDifferentApisResponseBodyConflictApisConflictApi extends $tea.Model {
  source?: DescribeBackendDifferentApisResponseBodyConflictApisConflictApiSource;
  target?: DescribeBackendDifferentApisResponseBodyConflictApisConflictApiTarget;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: DescribeBackendDifferentApisResponseBodyConflictApisConflictApiSource,
      target: DescribeBackendDifferentApisResponseBodyConflictApisConflictApiTarget,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendDifferentApisResponseBodyConflictApis extends $tea.Model {
  conflictApi?: DescribeBackendDifferentApisResponseBodyConflictApisConflictApi[];
  static names(): { [key: string]: string } {
    return {
      conflictApi: 'ConflictApi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflictApi: { 'type': 'array', 'itemType': DescribeBackendDifferentApisResponseBodyConflictApisConflictApi },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyRequestConfig extends $tea.Model {
  bodyModel?: string;
  requestPath?: string;
  requestHttpMethod?: string;
  bodyFormat?: string;
  requestMode?: string;
  postBodyDescription?: string;
  requestProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      bodyModel: 'BodyModel',
      requestPath: 'RequestPath',
      requestHttpMethod: 'RequestHttpMethod',
      bodyFormat: 'BodyFormat',
      requestMode: 'RequestMode',
      postBodyDescription: 'PostBodyDescription',
      requestProtocol: 'RequestProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyModel: 'string',
      requestPath: 'string',
      requestHttpMethod: 'string',
      bodyFormat: 'string',
      requestMode: 'string',
      postBodyDescription: 'string',
      requestProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyServiceConfigMockHeadersMockHeader extends $tea.Model {
  headerValue?: string;
  headerName?: string;
  static names(): { [key: string]: string } {
    return {
      headerValue: 'HeaderValue',
      headerName: 'HeaderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerValue: 'string',
      headerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyServiceConfigMockHeaders extends $tea.Model {
  mockHeader?: DescribeApiHistoryResponseBodyServiceConfigMockHeadersMockHeader[];
  static names(): { [key: string]: string } {
    return {
      mockHeader: 'MockHeader',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mockHeader: { 'type': 'array', 'itemType': DescribeApiHistoryResponseBodyServiceConfigMockHeadersMockHeader },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyServiceConfigVpcConfig extends $tea.Model {
  vpcId?: string;
  vpcScheme?: string;
  instanceId?: string;
  port?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      vpcScheme: 'VpcScheme',
      instanceId: 'InstanceId',
      port: 'Port',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vpcScheme: 'string',
      instanceId: 'string',
      port: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyServiceConfigFunctionComputeConfig extends $tea.Model {
  fcType?: string;
  roleArn?: string;
  method?: string;
  fcBaseUrl?: string;
  contentTypeValue?: string;
  regionId?: string;
  onlyBusinessPath?: boolean;
  functionName?: string;
  contentTypeCatagory?: string;
  path?: string;
  serviceName?: string;
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      fcType: 'FcType',
      roleArn: 'RoleArn',
      method: 'Method',
      fcBaseUrl: 'FcBaseUrl',
      contentTypeValue: 'ContentTypeValue',
      regionId: 'RegionId',
      onlyBusinessPath: 'OnlyBusinessPath',
      functionName: 'FunctionName',
      contentTypeCatagory: 'ContentTypeCatagory',
      path: 'Path',
      serviceName: 'ServiceName',
      qualifier: 'Qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fcType: 'string',
      roleArn: 'string',
      method: 'string',
      fcBaseUrl: 'string',
      contentTypeValue: 'string',
      regionId: 'string',
      onlyBusinessPath: 'boolean',
      functionName: 'string',
      contentTypeCatagory: 'string',
      path: 'string',
      serviceName: 'string',
      qualifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyServiceConfigOssConfig extends $tea.Model {
  key?: string;
  action?: string;
  ossRegionId?: string;
  bucketName?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      action: 'Action',
      ossRegionId: 'OssRegionId',
      bucketName: 'BucketName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      action: 'string',
      ossRegionId: 'string',
      bucketName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyServiceConfig extends $tea.Model {
  vpcId?: string;
  mockStatusCode?: number;
  contentTypeValue?: string;
  serviceProtocol?: string;
  servicePath?: string;
  contentTypeCatagory?: string;
  serviceAddress?: string;
  mock?: string;
  serviceVpcEnable?: string;
  mockResult?: string;
  serviceHttpMethod?: string;
  serviceTimeout?: number;
  mockHeaders?: DescribeApiHistoryResponseBodyServiceConfigMockHeaders;
  vpcConfig?: DescribeApiHistoryResponseBodyServiceConfigVpcConfig;
  functionComputeConfig?: DescribeApiHistoryResponseBodyServiceConfigFunctionComputeConfig;
  ossConfig?: DescribeApiHistoryResponseBodyServiceConfigOssConfig;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      mockStatusCode: 'MockStatusCode',
      contentTypeValue: 'ContentTypeValue',
      serviceProtocol: 'ServiceProtocol',
      servicePath: 'ServicePath',
      contentTypeCatagory: 'ContentTypeCatagory',
      serviceAddress: 'ServiceAddress',
      mock: 'Mock',
      serviceVpcEnable: 'ServiceVpcEnable',
      mockResult: 'MockResult',
      serviceHttpMethod: 'ServiceHttpMethod',
      serviceTimeout: 'ServiceTimeout',
      mockHeaders: 'MockHeaders',
      vpcConfig: 'VpcConfig',
      functionComputeConfig: 'FunctionComputeConfig',
      ossConfig: 'OssConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      mockStatusCode: 'number',
      contentTypeValue: 'string',
      serviceProtocol: 'string',
      servicePath: 'string',
      contentTypeCatagory: 'string',
      serviceAddress: 'string',
      mock: 'string',
      serviceVpcEnable: 'string',
      mockResult: 'string',
      serviceHttpMethod: 'string',
      serviceTimeout: 'number',
      mockHeaders: DescribeApiHistoryResponseBodyServiceConfigMockHeaders,
      vpcConfig: DescribeApiHistoryResponseBodyServiceConfigVpcConfig,
      functionComputeConfig: DescribeApiHistoryResponseBodyServiceConfigFunctionComputeConfig,
      ossConfig: DescribeApiHistoryResponseBodyServiceConfigOssConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyOpenIdConnectConfig extends $tea.Model {
  openIdApiType?: string;
  idTokenParamName?: string;
  publicKeyId?: string;
  publicKey?: string;
  static names(): { [key: string]: string } {
    return {
      openIdApiType: 'OpenIdApiType',
      idTokenParamName: 'IdTokenParamName',
      publicKeyId: 'PublicKeyId',
      publicKey: 'PublicKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openIdApiType: 'string',
      idTokenParamName: 'string',
      publicKeyId: 'string',
      publicKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyErrorCodeSamplesErrorCodeSample extends $tea.Model {
  code?: string;
  message?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyErrorCodeSamples extends $tea.Model {
  errorCodeSample?: DescribeApiHistoryResponseBodyErrorCodeSamplesErrorCodeSample[];
  static names(): { [key: string]: string } {
    return {
      errorCodeSample: 'ErrorCodeSample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCodeSample: { 'type': 'array', 'itemType': DescribeApiHistoryResponseBodyErrorCodeSamplesErrorCodeSample },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyResultDescriptionsResultDescription extends $tea.Model {
  type?: string;
  key?: string;
  hasChild?: boolean;
  description?: string;
  pid?: string;
  mandatory?: boolean;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      key: 'Key',
      hasChild: 'HasChild',
      description: 'Description',
      pid: 'Pid',
      mandatory: 'Mandatory',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      key: 'string',
      hasChild: 'boolean',
      description: 'string',
      pid: 'string',
      mandatory: 'boolean',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyResultDescriptions extends $tea.Model {
  resultDescription?: DescribeApiHistoryResponseBodyResultDescriptionsResultDescription[];
  static names(): { [key: string]: string } {
    return {
      resultDescription: 'ResultDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultDescription: { 'type': 'array', 'itemType': DescribeApiHistoryResponseBodyResultDescriptionsResultDescription },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodySystemParametersSystemParameter extends $tea.Model {
  demoValue?: string;
  description?: string;
  parameterName?: string;
  location?: string;
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      demoValue: 'DemoValue',
      description: 'Description',
      parameterName: 'ParameterName',
      location: 'Location',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoValue: 'string',
      description: 'string',
      parameterName: 'string',
      location: 'string',
      serviceParameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodySystemParameters extends $tea.Model {
  systemParameter?: DescribeApiHistoryResponseBodySystemParametersSystemParameter[];
  static names(): { [key: string]: string } {
    return {
      systemParameter: 'SystemParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemParameter: { 'type': 'array', 'itemType': DescribeApiHistoryResponseBodySystemParametersSystemParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyCustomSystemParametersCustomSystemParameter extends $tea.Model {
  demoValue?: string;
  description?: string;
  parameterName?: string;
  location?: string;
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      demoValue: 'DemoValue',
      description: 'Description',
      parameterName: 'ParameterName',
      location: 'Location',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoValue: 'string',
      description: 'string',
      parameterName: 'string',
      location: 'string',
      serviceParameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyCustomSystemParameters extends $tea.Model {
  customSystemParameter?: DescribeApiHistoryResponseBodyCustomSystemParametersCustomSystemParameter[];
  static names(): { [key: string]: string } {
    return {
      customSystemParameter: 'CustomSystemParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSystemParameter: { 'type': 'array', 'itemType': DescribeApiHistoryResponseBodyCustomSystemParametersCustomSystemParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyConstantParametersConstantParameter extends $tea.Model {
  description?: string;
  location?: string;
  serviceParameterName?: string;
  constantValue?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      location: 'Location',
      serviceParameterName: 'ServiceParameterName',
      constantValue: 'ConstantValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      location: 'string',
      serviceParameterName: 'string',
      constantValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyConstantParameters extends $tea.Model {
  constantParameter?: DescribeApiHistoryResponseBodyConstantParametersConstantParameter[];
  static names(): { [key: string]: string } {
    return {
      constantParameter: 'ConstantParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constantParameter: { 'type': 'array', 'itemType': DescribeApiHistoryResponseBodyConstantParametersConstantParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyRequestParametersRequestParameter extends $tea.Model {
  jsonScheme?: string;
  maxValue?: number;
  arrayItemsType?: string;
  minValue?: number;
  docShow?: string;
  maxLength?: number;
  defaultValue?: string;
  apiParameterName?: string;
  enumValue?: string;
  demoValue?: string;
  required?: string;
  description?: string;
  parameterType?: string;
  regularExpression?: string;
  minLength?: number;
  docOrder?: number;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      jsonScheme: 'JsonScheme',
      maxValue: 'MaxValue',
      arrayItemsType: 'ArrayItemsType',
      minValue: 'MinValue',
      docShow: 'DocShow',
      maxLength: 'MaxLength',
      defaultValue: 'DefaultValue',
      apiParameterName: 'ApiParameterName',
      enumValue: 'EnumValue',
      demoValue: 'DemoValue',
      required: 'Required',
      description: 'Description',
      parameterType: 'ParameterType',
      regularExpression: 'RegularExpression',
      minLength: 'MinLength',
      docOrder: 'DocOrder',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonScheme: 'string',
      maxValue: 'number',
      arrayItemsType: 'string',
      minValue: 'number',
      docShow: 'string',
      maxLength: 'number',
      defaultValue: 'string',
      apiParameterName: 'string',
      enumValue: 'string',
      demoValue: 'string',
      required: 'string',
      description: 'string',
      parameterType: 'string',
      regularExpression: 'string',
      minLength: 'number',
      docOrder: 'number',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyRequestParameters extends $tea.Model {
  requestParameter?: DescribeApiHistoryResponseBodyRequestParametersRequestParameter[];
  static names(): { [key: string]: string } {
    return {
      requestParameter: 'RequestParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParameter: { 'type': 'array', 'itemType': DescribeApiHistoryResponseBodyRequestParametersRequestParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyServiceParametersServiceParameter extends $tea.Model {
  location?: string;
  parameterType?: string;
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      parameterType: 'ParameterType',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: 'string',
      parameterType: 'string',
      serviceParameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyServiceParameters extends $tea.Model {
  serviceParameter?: DescribeApiHistoryResponseBodyServiceParametersServiceParameter[];
  static names(): { [key: string]: string } {
    return {
      serviceParameter: 'ServiceParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceParameter: { 'type': 'array', 'itemType': DescribeApiHistoryResponseBodyServiceParametersServiceParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyServiceParametersMapServiceParameterMap extends $tea.Model {
  requestParameterName?: string;
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      requestParameterName: 'RequestParameterName',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParameterName: 'string',
      serviceParameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyServiceParametersMap extends $tea.Model {
  serviceParameterMap?: DescribeApiHistoryResponseBodyServiceParametersMapServiceParameterMap[];
  static names(): { [key: string]: string } {
    return {
      serviceParameterMap: 'ServiceParameterMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceParameterMap: { 'type': 'array', 'itemType': DescribeApiHistoryResponseBodyServiceParametersMapServiceParameterMap },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeProductSpecsOrderRequestOrder extends $tea.Model {
  productSpecsId?: number;
  productSpecsOrder?: number;
  static names(): { [key: string]: string } {
    return {
      productSpecsId: 'ProductSpecsId',
      productSpecsOrder: 'ProductSpecsOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productSpecsId: 'number',
      productSpecsOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiErrorDataResponseBodyClientErrorsMonitorItem extends $tea.Model {
  itemValue?: string;
  itemTime?: string;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemTime: 'ItemTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiErrorDataResponseBodyClientErrors extends $tea.Model {
  monitorItem?: DescribeApiErrorDataResponseBodyClientErrorsMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeApiErrorDataResponseBodyClientErrorsMonitorItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiErrorDataResponseBodyServerErrorsMonitorItem extends $tea.Model {
  itemValue?: string;
  itemTime?: string;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemTime: 'ItemTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiErrorDataResponseBodyServerErrors extends $tea.Model {
  monitorItem?: DescribeApiErrorDataResponseBodyServerErrorsMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeApiErrorDataResponseBodyServerErrorsMonitorItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPluginRequestTag extends $tea.Model {
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

export class DescribeApiGroupRequestTag extends $tea.Model {
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

export class DescribeApiGroupResponseBodyCustomDomainsDomainItem extends $tea.Model {
  bindStageName?: string;
  domainLegalStatus?: string;
  certificateName?: string;
  customDomainType?: string;
  domainCNAMEStatus?: string;
  wildcardDomainPatterns?: string;
  domainBindingStatus?: string;
  domainName?: string;
  domainRemark?: string;
  domainWebSocketStatus?: string;
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      bindStageName: 'BindStageName',
      domainLegalStatus: 'DomainLegalStatus',
      certificateName: 'CertificateName',
      customDomainType: 'CustomDomainType',
      domainCNAMEStatus: 'DomainCNAMEStatus',
      wildcardDomainPatterns: 'WildcardDomainPatterns',
      domainBindingStatus: 'DomainBindingStatus',
      domainName: 'DomainName',
      domainRemark: 'DomainRemark',
      domainWebSocketStatus: 'DomainWebSocketStatus',
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindStageName: 'string',
      domainLegalStatus: 'string',
      certificateName: 'string',
      customDomainType: 'string',
      domainCNAMEStatus: 'string',
      wildcardDomainPatterns: 'string',
      domainBindingStatus: 'string',
      domainName: 'string',
      domainRemark: 'string',
      domainWebSocketStatus: 'string',
      certificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupResponseBodyCustomDomains extends $tea.Model {
  domainItem?: DescribeApiGroupResponseBodyCustomDomainsDomainItem[];
  static names(): { [key: string]: string } {
    return {
      domainItem: 'DomainItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainItem: { 'type': 'array', 'itemType': DescribeApiGroupResponseBodyCustomDomainsDomainItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupResponseBodyStageItemsStageInfo extends $tea.Model {
  stageId?: string;
  stageName?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      stageId: 'StageId',
      stageName: 'StageName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stageId: 'string',
      stageName: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupResponseBodyStageItems extends $tea.Model {
  stageInfo?: DescribeApiGroupResponseBodyStageItemsStageInfo[];
  static names(): { [key: string]: string } {
    return {
      stageInfo: 'StageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stageInfo: { 'type': 'array', 'itemType': DescribeApiGroupResponseBodyStageItemsStageInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApiGroupRequestTag extends $tea.Model {
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

export class DescribeApiGroupsRequestTag extends $tea.Model {
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

export class DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttributeTagsTagInfo extends $tea.Model {
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

export class DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttributeTags extends $tea.Model {
  tagInfo?: DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttributeTagsTagInfo[];
  static names(): { [key: string]: string } {
    return {
      tagInfo: 'TagInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagInfo: { 'type': 'array', 'itemType': DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttributeTagsTagInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttribute extends $tea.Model {
  basePath?: string;
  billingStatus?: string;
  trafficLimit?: number;
  instanceId?: string;
  instanceType?: string;
  regionId?: string;
  modifiedTime?: string;
  groupId?: string;
  groupName?: string;
  description?: string;
  illegalStatus?: string;
  httpsPolicy?: string;
  subDomain?: string;
  createdTime?: string;
  tags?: DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttributeTags;
  static names(): { [key: string]: string } {
    return {
      basePath: 'BasePath',
      billingStatus: 'BillingStatus',
      trafficLimit: 'TrafficLimit',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
      modifiedTime: 'ModifiedTime',
      groupId: 'GroupId',
      groupName: 'GroupName',
      description: 'Description',
      illegalStatus: 'IllegalStatus',
      httpsPolicy: 'HttpsPolicy',
      subDomain: 'SubDomain',
      createdTime: 'CreatedTime',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basePath: 'string',
      billingStatus: 'string',
      trafficLimit: 'number',
      instanceId: 'string',
      instanceType: 'string',
      regionId: 'string',
      modifiedTime: 'string',
      groupId: 'string',
      groupName: 'string',
      description: 'string',
      illegalStatus: 'string',
      httpsPolicy: 'string',
      subDomain: 'string',
      createdTime: 'string',
      tags: DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttributeTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupsResponseBodyApiGroupAttributes extends $tea.Model {
  apiGroupAttribute?: DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttribute[];
  static names(): { [key: string]: string } {
    return {
      apiGroupAttribute: 'ApiGroupAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiGroupAttribute: { 'type': 'array', 'itemType': DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisRequestTag extends $tea.Model {
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

export class DescribeApisResponseBodyApiSummarysApiSummary extends $tea.Model {
  visibility?: string;
  apiId?: string;
  modifiedTime?: string;
  description?: string;
  groupName?: string;
  groupId?: string;
  createdTime?: string;
  apiName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      visibility: 'Visibility',
      apiId: 'ApiId',
      modifiedTime: 'ModifiedTime',
      description: 'Description',
      groupName: 'GroupName',
      groupId: 'GroupId',
      createdTime: 'CreatedTime',
      apiName: 'ApiName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      visibility: 'string',
      apiId: 'string',
      modifiedTime: 'string',
      description: 'string',
      groupName: 'string',
      groupId: 'string',
      createdTime: 'string',
      apiName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisResponseBodyApiSummarys extends $tea.Model {
  apiSummary?: DescribeApisResponseBodyApiSummarysApiSummary[];
  static names(): { [key: string]: string } {
    return {
      apiSummary: 'ApiSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiSummary: { 'type': 'array', 'itemType': DescribeApisResponseBodyApiSummarysApiSummary },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVarDiffBetweenGroupResponseBodyVariableDiffsVariableDiffTest extends $tea.Model {
  diffStatus?: string;
  oldValue?: string;
  newValue?: string;
  static names(): { [key: string]: string } {
    return {
      diffStatus: 'DiffStatus',
      oldValue: 'OldValue',
      newValue: 'NewValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diffStatus: 'string',
      oldValue: 'string',
      newValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVarDiffBetweenGroupResponseBodyVariableDiffsVariableDiffPre extends $tea.Model {
  diffStatus?: string;
  oldValue?: string;
  newValue?: string;
  static names(): { [key: string]: string } {
    return {
      diffStatus: 'DiffStatus',
      oldValue: 'OldValue',
      newValue: 'NewValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diffStatus: 'string',
      oldValue: 'string',
      newValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVarDiffBetweenGroupResponseBodyVariableDiffsVariableDiffRelease extends $tea.Model {
  diffStatus?: string;
  oldValue?: string;
  newValue?: string;
  static names(): { [key: string]: string } {
    return {
      diffStatus: 'DiffStatus',
      oldValue: 'OldValue',
      newValue: 'NewValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diffStatus: 'string',
      oldValue: 'string',
      newValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVarDiffBetweenGroupResponseBodyVariableDiffsVariableDiff extends $tea.Model {
  varName?: string;
  test?: DescribeVarDiffBetweenGroupResponseBodyVariableDiffsVariableDiffTest;
  pre?: DescribeVarDiffBetweenGroupResponseBodyVariableDiffsVariableDiffPre;
  release?: DescribeVarDiffBetweenGroupResponseBodyVariableDiffsVariableDiffRelease;
  static names(): { [key: string]: string } {
    return {
      varName: 'VarName',
      test: 'Test',
      pre: 'Pre',
      release: 'Release',
    };
  }

  static types(): { [key: string]: any } {
    return {
      varName: 'string',
      test: DescribeVarDiffBetweenGroupResponseBodyVariableDiffsVariableDiffTest,
      pre: DescribeVarDiffBetweenGroupResponseBodyVariableDiffsVariableDiffPre,
      release: DescribeVarDiffBetweenGroupResponseBodyVariableDiffsVariableDiffRelease,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVarDiffBetweenGroupResponseBodyVariableDiffs extends $tea.Model {
  variableDiff?: DescribeVarDiffBetweenGroupResponseBodyVariableDiffsVariableDiff[];
  static names(): { [key: string]: string } {
    return {
      variableDiff: 'VariableDiff',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variableDiff: { 'type': 'array', 'itemType': DescribeVarDiffBetweenGroupResponseBodyVariableDiffsVariableDiff },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDropPacketResponseBodyInstanceDropPacketMonitorItem extends $tea.Model {
  itemValue?: string;
  itemTime?: string;
  item?: string;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemTime: 'ItemTime',
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemTime: 'string',
      item: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDropPacketResponseBodyInstanceDropPacket extends $tea.Model {
  monitorItem?: DescribeInstanceDropPacketResponseBodyInstanceDropPacketMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeInstanceDropPacketResponseBodyInstanceDropPacketMonitorItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppAttributesRequestTag extends $tea.Model {
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

export class DescribeAppAttributesResponseBodyAppsAppAttributeTagsTagInfo extends $tea.Model {
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

export class DescribeAppAttributesResponseBodyAppsAppAttributeTags extends $tea.Model {
  tagInfo?: DescribeAppAttributesResponseBodyAppsAppAttributeTagsTagInfo[];
  static names(): { [key: string]: string } {
    return {
      tagInfo: 'TagInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagInfo: { 'type': 'array', 'itemType': DescribeAppAttributesResponseBodyAppsAppAttributeTagsTagInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppAttributesResponseBodyAppsAppAttribute extends $tea.Model {
  appName?: string;
  modifiedTime?: string;
  description?: string;
  createdTime?: string;
  appId?: number;
  tags?: DescribeAppAttributesResponseBodyAppsAppAttributeTags;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      modifiedTime: 'ModifiedTime',
      description: 'Description',
      createdTime: 'CreatedTime',
      appId: 'AppId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      modifiedTime: 'string',
      description: 'string',
      createdTime: 'string',
      appId: 'number',
      tags: DescribeAppAttributesResponseBodyAppsAppAttributeTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppAttributesResponseBodyApps extends $tea.Model {
  appAttribute?: DescribeAppAttributesResponseBodyAppsAppAttribute[];
  static names(): { [key: string]: string } {
    return {
      appAttribute: 'AppAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appAttribute: { 'type': 'array', 'itemType': DescribeAppAttributesResponseBodyAppsAppAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupTrafficResponseBodyTrafficPerSecondMonitorItem extends $tea.Model {
  itemValue?: string;
  itemTime?: string;
  item?: string;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemTime: 'ItemTime',
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemTime: 'string',
      item: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupTrafficResponseBodyTrafficPerSecond extends $tea.Model {
  monitorItem?: DescribeGroupTrafficResponseBodyTrafficPerSecondMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeGroupTrafficResponseBodyTrafficPerSecondMonitorItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployApiTaskResponseBodyDeployedResultsDeployedResult extends $tea.Model {
  errorMsg?: string;
  stageName?: string;
  groupId?: string;
  apiUid?: string;
  deployedStatus?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      stageName: 'StageName',
      groupId: 'GroupId',
      apiUid: 'ApiUid',
      deployedStatus: 'DeployedStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      stageName: 'string',
      groupId: 'string',
      apiUid: 'string',
      deployedStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployApiTaskResponseBodyDeployedResults extends $tea.Model {
  deployedResult?: DescribeDeployApiTaskResponseBodyDeployedResultsDeployedResult[];
  static names(): { [key: string]: string } {
    return {
      deployedResult: 'DeployedResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployedResult: { 'type': 'array', 'itemType': DescribeDeployApiTaskResponseBodyDeployedResultsDeployedResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWillBeSyncApisResponseBodyApisApiDigest extends $tea.Model {
  vpcName?: string;
  apiId?: string;
  groupName?: string;
  groupId?: string;
  vpcSchema?: string;
  version?: string;
  path?: string;
  method?: string;
  vpcEnabled?: boolean;
  apiName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcName: 'VpcName',
      apiId: 'ApiId',
      groupName: 'GroupName',
      groupId: 'GroupId',
      vpcSchema: 'VpcSchema',
      version: 'Version',
      path: 'Path',
      method: 'Method',
      vpcEnabled: 'VpcEnabled',
      apiName: 'ApiName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcName: 'string',
      apiId: 'string',
      groupName: 'string',
      groupId: 'string',
      vpcSchema: 'string',
      version: 'string',
      path: 'string',
      method: 'string',
      vpcEnabled: 'boolean',
      apiName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWillBeSyncApisResponseBodyApis extends $tea.Model {
  apiDigest?: DescribeWillBeSyncApisResponseBodyApisApiDigest[];
  static names(): { [key: string]: string } {
    return {
      apiDigest: 'ApiDigest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDigest: { 'type': 'array', 'itemType': DescribeWillBeSyncApisResponseBodyApisApiDigest },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupHttpCodeResponseBodyHttpCodePacketMonitorItem extends $tea.Model {
  itemValue?: string;
  itemTime?: string;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemTime: 'ItemTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupHttpCodeResponseBodyHttpCodePacket extends $tea.Model {
  monitorItem?: DescribeGroupHttpCodeResponseBodyHttpCodePacketMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeGroupHttpCodeResponseBodyHttpCodePacketMonitorItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiDocResponseBodyRequestConfig extends $tea.Model {
  requestPath?: string;
  requestHttpMethod?: string;
  bodyFormat?: string;
  requestMode?: string;
  postBodyDescription?: string;
  requestProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      requestPath: 'RequestPath',
      requestHttpMethod: 'RequestHttpMethod',
      bodyFormat: 'BodyFormat',
      requestMode: 'RequestMode',
      postBodyDescription: 'PostBodyDescription',
      requestProtocol: 'RequestProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestPath: 'string',
      requestHttpMethod: 'string',
      bodyFormat: 'string',
      requestMode: 'string',
      postBodyDescription: 'string',
      requestProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiDocResponseBodyErrorCodeSamplesErrorCodeSample extends $tea.Model {
  code?: string;
  message?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiDocResponseBodyErrorCodeSamples extends $tea.Model {
  errorCodeSample?: DescribeApiDocResponseBodyErrorCodeSamplesErrorCodeSample[];
  static names(): { [key: string]: string } {
    return {
      errorCodeSample: 'ErrorCodeSample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCodeSample: { 'type': 'array', 'itemType': DescribeApiDocResponseBodyErrorCodeSamplesErrorCodeSample },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiDocResponseBodyResultDescriptionsResultDescription extends $tea.Model {
  type?: string;
  key?: string;
  hasChild?: boolean;
  description?: string;
  pid?: string;
  mandatory?: boolean;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      key: 'Key',
      hasChild: 'HasChild',
      description: 'Description',
      pid: 'Pid',
      mandatory: 'Mandatory',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      key: 'string',
      hasChild: 'boolean',
      description: 'string',
      pid: 'string',
      mandatory: 'boolean',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiDocResponseBodyResultDescriptions extends $tea.Model {
  resultDescription?: DescribeApiDocResponseBodyResultDescriptionsResultDescription[];
  static names(): { [key: string]: string } {
    return {
      resultDescription: 'ResultDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultDescription: { 'type': 'array', 'itemType': DescribeApiDocResponseBodyResultDescriptionsResultDescription },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiDocResponseBodyRequestParametersRequestParameter extends $tea.Model {
  jsonScheme?: string;
  maxValue?: number;
  arrayItemsType?: string;
  minValue?: number;
  docShow?: string;
  maxLength?: number;
  defaultValue?: string;
  apiParameterName?: string;
  enumValue?: string;
  demoValue?: string;
  required?: string;
  description?: string;
  parameterType?: string;
  regularExpression?: string;
  minLength?: number;
  docOrder?: number;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      jsonScheme: 'JsonScheme',
      maxValue: 'MaxValue',
      arrayItemsType: 'ArrayItemsType',
      minValue: 'MinValue',
      docShow: 'DocShow',
      maxLength: 'MaxLength',
      defaultValue: 'DefaultValue',
      apiParameterName: 'ApiParameterName',
      enumValue: 'EnumValue',
      demoValue: 'DemoValue',
      required: 'Required',
      description: 'Description',
      parameterType: 'ParameterType',
      regularExpression: 'RegularExpression',
      minLength: 'MinLength',
      docOrder: 'DocOrder',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonScheme: 'string',
      maxValue: 'number',
      arrayItemsType: 'string',
      minValue: 'number',
      docShow: 'string',
      maxLength: 'number',
      defaultValue: 'string',
      apiParameterName: 'string',
      enumValue: 'string',
      demoValue: 'string',
      required: 'string',
      description: 'string',
      parameterType: 'string',
      regularExpression: 'string',
      minLength: 'number',
      docOrder: 'number',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiDocResponseBodyRequestParameters extends $tea.Model {
  requestParameter?: DescribeApiDocResponseBodyRequestParametersRequestParameter[];
  static names(): { [key: string]: string } {
    return {
      requestParameter: 'RequestParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParameter: { 'type': 'array', 'itemType': DescribeApiDocResponseBodyRequestParametersRequestParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionQpsResponseBodyRegionQpsMonitorItem extends $tea.Model {
  itemValue?: string;
  itemTime?: string;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemTime: 'ItemTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionQpsResponseBodyRegionQps extends $tea.Model {
  monitorItem?: DescribeRegionQpsResponseBodyRegionQpsMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeRegionQpsResponseBodyRegionQpsMonitorItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSignaturesResponseBodySignatureInfosSignatureInfo extends $tea.Model {
  modifiedTime?: string;
  signatureId?: string;
  signatureSecret?: string;
  signatureName?: string;
  signatureKey?: string;
  createdTime?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      modifiedTime: 'ModifiedTime',
      signatureId: 'SignatureId',
      signatureSecret: 'SignatureSecret',
      signatureName: 'SignatureName',
      signatureKey: 'SignatureKey',
      createdTime: 'CreatedTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifiedTime: 'string',
      signatureId: 'string',
      signatureSecret: 'string',
      signatureName: 'string',
      signatureKey: 'string',
      createdTime: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSignaturesResponseBodySignatureInfos extends $tea.Model {
  signatureInfo?: DescribeSignaturesResponseBodySignatureInfosSignatureInfo[];
  static names(): { [key: string]: string } {
    return {
      signatureInfo: 'SignatureInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signatureInfo: { 'type': 'array', 'itemType': DescribeSignaturesResponseBodySignatureInfosSignatureInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiStageResponseBodyVariablesVariableItemStageRouteModelRouteRulesRouteRuleItem extends $tea.Model {
  resultValue?: string;
  minValue?: number;
  conditionValue?: string;
  maxValue?: number;
  static names(): { [key: string]: string } {
    return {
      resultValue: 'ResultValue',
      minValue: 'MinValue',
      conditionValue: 'ConditionValue',
      maxValue: 'MaxValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultValue: 'string',
      minValue: 'number',
      conditionValue: 'string',
      maxValue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiStageResponseBodyVariablesVariableItemStageRouteModelRouteRules extends $tea.Model {
  routeRuleItem?: DescribeApiStageResponseBodyVariablesVariableItemStageRouteModelRouteRulesRouteRuleItem[];
  static names(): { [key: string]: string } {
    return {
      routeRuleItem: 'RouteRuleItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeRuleItem: { 'type': 'array', 'itemType': DescribeApiStageResponseBodyVariablesVariableItemStageRouteModelRouteRulesRouteRuleItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiStageResponseBodyVariablesVariableItemStageRouteModel extends $tea.Model {
  routeMatchSymbol?: string;
  parameterType?: string;
  location?: string;
  parameterCatalog?: string;
  serviceParameterName?: string;
  routeRules?: DescribeApiStageResponseBodyVariablesVariableItemStageRouteModelRouteRules;
  static names(): { [key: string]: string } {
    return {
      routeMatchSymbol: 'RouteMatchSymbol',
      parameterType: 'ParameterType',
      location: 'Location',
      parameterCatalog: 'ParameterCatalog',
      serviceParameterName: 'ServiceParameterName',
      routeRules: 'RouteRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeMatchSymbol: 'string',
      parameterType: 'string',
      location: 'string',
      parameterCatalog: 'string',
      serviceParameterName: 'string',
      routeRules: DescribeApiStageResponseBodyVariablesVariableItemStageRouteModelRouteRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiStageResponseBodyVariablesVariableItem extends $tea.Model {
  variableValue?: string;
  variableName?: string;
  supportRoute?: boolean;
  stageRouteModel?: DescribeApiStageResponseBodyVariablesVariableItemStageRouteModel;
  static names(): { [key: string]: string } {
    return {
      variableValue: 'VariableValue',
      variableName: 'VariableName',
      supportRoute: 'SupportRoute',
      stageRouteModel: 'StageRouteModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variableValue: 'string',
      variableName: 'string',
      supportRoute: 'boolean',
      stageRouteModel: DescribeApiStageResponseBodyVariablesVariableItemStageRouteModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiStageResponseBodyVariables extends $tea.Model {
  variableItem?: DescribeApiStageResponseBodyVariablesVariableItem[];
  static names(): { [key: string]: string } {
    return {
      variableItem: 'VariableItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variableItem: { 'type': 'array', 'itemType': DescribeApiStageResponseBodyVariablesVariableItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePacketsResponseBodyInstancePacketsMonitorItem extends $tea.Model {
  itemValue?: string;
  itemTime?: string;
  item?: string;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemTime: 'ItemTime',
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemTime: 'string',
      item: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePacketsResponseBodyInstancePackets extends $tea.Model {
  monitorItem?: DescribeInstancePacketsResponseBodyInstancePacketsMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeInstancePacketsResponseBodyInstancePacketsMonitorItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByTrafficControlResponseBodyApiInfosApiInfo extends $tea.Model {
  boundTime?: string;
  visibility?: string;
  apiId?: string;
  description?: string;
  groupName?: string;
  groupId?: string;
  stageName?: string;
  apiName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      boundTime: 'BoundTime',
      visibility: 'Visibility',
      apiId: 'ApiId',
      description: 'Description',
      groupName: 'GroupName',
      groupId: 'GroupId',
      stageName: 'StageName',
      apiName: 'ApiName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundTime: 'string',
      visibility: 'string',
      apiId: 'string',
      description: 'string',
      groupName: 'string',
      groupId: 'string',
      stageName: 'string',
      apiName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByTrafficControlResponseBodyApiInfos extends $tea.Model {
  apiInfo?: DescribeApisByTrafficControlResponseBodyApiInfosApiInfo[];
  static names(): { [key: string]: string } {
    return {
      apiInfo: 'ApiInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfo: { 'type': 'array', 'itemType': DescribeApisByTrafficControlResponseBodyApiInfosApiInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVpcAccessResponseBodyApisApi extends $tea.Model {
  apiId?: string;
  stageId?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      stageId: 'StageId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      stageId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVpcAccessResponseBodyApis extends $tea.Model {
  api?: RemoveVpcAccessResponseBodyApisApi[];
  static names(): { [key: string]: string } {
    return {
      api: 'Api',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: { 'type': 'array', 'itemType': RemoveVpcAccessResponseBodyApisApi },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginsByApiResponseBodyPluginsPluginAttribute extends $tea.Model {
  pluginId?: string;
  modifiedTime?: string;
  pluginData?: string;
  description?: string;
  pluginName?: string;
  createdTime?: string;
  pluginType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pluginId: 'PluginId',
      modifiedTime: 'ModifiedTime',
      pluginData: 'PluginData',
      description: 'Description',
      pluginName: 'PluginName',
      createdTime: 'CreatedTime',
      pluginType: 'PluginType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginId: 'string',
      modifiedTime: 'string',
      pluginData: 'string',
      description: 'string',
      pluginName: 'string',
      createdTime: 'string',
      pluginType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginsByApiResponseBodyPlugins extends $tea.Model {
  pluginAttribute?: DescribePluginsByApiResponseBodyPluginsPluginAttribute[];
  static names(): { [key: string]: string } {
    return {
      pluginAttribute: 'PluginAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginAttribute: { 'type': 'array', 'itemType': DescribePluginsByApiResponseBodyPluginsPluginAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceRequestTag extends $tea.Model {
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

export class DescribeAppsResponseBodyAppsAppItem extends $tea.Model {
  appName?: string;
  description?: string;
  appId?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      description: 'Description',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      description: 'string',
      appId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyApps extends $tea.Model {
  appItem?: DescribeAppsResponseBodyAppsAppItem[];
  static names(): { [key: string]: string } {
    return {
      appItem: 'AppItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appItem: { 'type': 'array', 'itemType': DescribeAppsResponseBodyAppsAppItem },
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

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  tagValue?: string;
  resourceType?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      resourceType: 'string',
      resourceId: 'string',
      tagKey: 'string',
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

export class DescribeReadyNewApisResponseBodyApisApiDigest extends $tea.Model {
  apiVersion?: string;
  apiId?: string;
  groupName?: string;
  groupId?: string;
  path?: string;
  method?: string;
  stageName?: string;
  apiName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      apiId: 'ApiId',
      groupName: 'GroupName',
      groupId: 'GroupId',
      path: 'Path',
      method: 'Method',
      stageName: 'StageName',
      apiName: 'ApiName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      apiId: 'string',
      groupName: 'string',
      groupId: 'string',
      path: 'string',
      method: 'string',
      stageName: 'string',
      apiName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReadyNewApisResponseBodyApis extends $tea.Model {
  apiDigest?: DescribeReadyNewApisResponseBodyApisApiDigest[];
  static names(): { [key: string]: string } {
    return {
      apiDigest: 'ApiDigest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDigest: { 'type': 'array', 'itemType': DescribeReadyNewApisResponseBodyApisApiDigest },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpControlsResponseBodyIpControlInfosIpControlInfo extends $tea.Model {
  ipControlId?: string;
  ipControlType?: string;
  modifiedTime?: string;
  ipControlName?: string;
  description?: string;
  createTime?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ipControlId: 'IpControlId',
      ipControlType: 'IpControlType',
      modifiedTime: 'ModifiedTime',
      ipControlName: 'IpControlName',
      description: 'Description',
      createTime: 'CreateTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipControlId: 'string',
      ipControlType: 'string',
      modifiedTime: 'string',
      ipControlName: 'string',
      description: 'string',
      createTime: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpControlsResponseBodyIpControlInfos extends $tea.Model {
  ipControlInfo?: DescribeIpControlsResponseBodyIpControlInfosIpControlInfo[];
  static names(): { [key: string]: string } {
    return {
      ipControlInfo: 'IpControlInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipControlInfo: { 'type': 'array', 'itemType': DescribeIpControlsResponseBodyIpControlInfosIpControlInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSwaggerResponseBodySuccessApiImportSwaggerSuccess extends $tea.Model {
  path?: string;
  httpMethod?: string;
  apiOperation?: string;
  apiUid?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      httpMethod: 'HttpMethod',
      apiOperation: 'ApiOperation',
      apiUid: 'ApiUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      httpMethod: 'string',
      apiOperation: 'string',
      apiUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSwaggerResponseBodySuccess extends $tea.Model {
  apiImportSwaggerSuccess?: ImportSwaggerResponseBodySuccessApiImportSwaggerSuccess[];
  static names(): { [key: string]: string } {
    return {
      apiImportSwaggerSuccess: 'ApiImportSwaggerSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiImportSwaggerSuccess: { 'type': 'array', 'itemType': ImportSwaggerResponseBodySuccessApiImportSwaggerSuccess },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSwaggerResponseBodyFailedApiImportSwaggerFailed extends $tea.Model {
  path?: string;
  httpMethod?: string;
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      httpMethod: 'HttpMethod',
      errorMsg: 'ErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      httpMethod: 'string',
      errorMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSwaggerResponseBodyFailed extends $tea.Model {
  apiImportSwaggerFailed?: ImportSwaggerResponseBodyFailedApiImportSwaggerFailed[];
  static names(): { [key: string]: string } {
    return {
      apiImportSwaggerFailed: 'ApiImportSwaggerFailed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiImportSwaggerFailed: { 'type': 'array', 'itemType': ImportSwaggerResponseBodyFailedApiImportSwaggerFailed },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSwaggerResponseBodyModelFailedApiImportModelFailed extends $tea.Model {
  errorMsg?: string;
  modelName?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      modelName: 'ModelName',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      modelName: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSwaggerResponseBodyModelFailed extends $tea.Model {
  apiImportModelFailed?: ImportSwaggerResponseBodyModelFailedApiImportModelFailed[];
  static names(): { [key: string]: string } {
    return {
      apiImportModelFailed: 'ApiImportModelFailed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiImportModelFailed: { 'type': 'array', 'itemType': ImportSwaggerResponseBodyModelFailedApiImportModelFailed },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSwaggerResponseBodyModelSuccessApiImportModelSuccess extends $tea.Model {
  modelUid?: string;
  modelName?: string;
  groupId?: string;
  modelOperation?: string;
  static names(): { [key: string]: string } {
    return {
      modelUid: 'ModelUid',
      modelName: 'ModelName',
      groupId: 'GroupId',
      modelOperation: 'ModelOperation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelUid: 'string',
      modelName: 'string',
      groupId: 'string',
      modelOperation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSwaggerResponseBodyModelSuccess extends $tea.Model {
  apiImportModelSuccess?: ImportSwaggerResponseBodyModelSuccessApiImportModelSuccess[];
  static names(): { [key: string]: string } {
    return {
      apiImportModelSuccess: 'ApiImportModelSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiImportModelSuccess: { 'type': 'array', 'itemType': ImportSwaggerResponseBodyModelSuccessApiImportModelSuccess },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryApisResponseBodyApiHisItemsApiHisItem extends $tea.Model {
  status?: string;
  apiId?: string;
  description?: string;
  groupName?: string;
  groupId?: string;
  deployedTime?: string;
  stageName?: string;
  historyVersion?: string;
  apiName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      apiId: 'ApiId',
      description: 'Description',
      groupName: 'GroupName',
      groupId: 'GroupId',
      deployedTime: 'DeployedTime',
      stageName: 'StageName',
      historyVersion: 'HistoryVersion',
      apiName: 'ApiName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      apiId: 'string',
      description: 'string',
      groupName: 'string',
      groupId: 'string',
      deployedTime: 'string',
      stageName: 'string',
      historyVersion: 'string',
      apiName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryApisResponseBodyApiHisItems extends $tea.Model {
  apiHisItem?: DescribeHistoryApisResponseBodyApiHisItemsApiHisItem[];
  static names(): { [key: string]: string } {
    return {
      apiHisItem: 'ApiHisItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiHisItem: { 'type': 'array', 'itemType': DescribeHistoryApisResponseBodyApiHisItemsApiHisItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiIpControlsResponseBodyApiIpControlsApiIpControlItem extends $tea.Model {
  boundTime?: string;
  apiId?: string;
  ipControlId?: string;
  ipControlName?: string;
  apiName?: string;
  static names(): { [key: string]: string } {
    return {
      boundTime: 'BoundTime',
      apiId: 'ApiId',
      ipControlId: 'IpControlId',
      ipControlName: 'IpControlName',
      apiName: 'ApiName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundTime: 'string',
      apiId: 'string',
      ipControlId: 'string',
      ipControlName: 'string',
      apiName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiIpControlsResponseBodyApiIpControls extends $tea.Model {
  apiIpControlItem?: DescribeApiIpControlsResponseBodyApiIpControlsApiIpControlItem[];
  static names(): { [key: string]: string } {
    return {
      apiIpControlItem: 'ApiIpControlItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIpControlItem: { 'type': 'array', 'itemType': DescribeApiIpControlsResponseBodyApiIpControlsApiIpControlItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpControlRequestIpControlPolicys extends $tea.Model {
  appId?: string;
  cidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cidrIp: 'CidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cidrIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginSchemasResponseBodyPluginSchemasPluginSchema extends $tea.Model {
  title?: string;
  description?: string;
  name?: string;
  documentId?: string;
  supportClassic?: boolean;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      description: 'Description',
      name: 'Name',
      documentId: 'DocumentId',
      supportClassic: 'SupportClassic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      description: 'string',
      name: 'string',
      documentId: 'string',
      supportClassic: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginSchemasResponseBodyPluginSchemas extends $tea.Model {
  pluginSchema?: DescribePluginSchemasResponseBodyPluginSchemasPluginSchema[];
  static names(): { [key: string]: string } {
    return {
      pluginSchema: 'PluginSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginSchema: { 'type': 'array', 'itemType': DescribePluginSchemasResponseBodyPluginSchemasPluginSchema },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateApisVpcAccessRequestApi extends $tea.Model {
  stageId?: string;
  groupId?: string;
  apiUid?: string;
  static names(): { [key: string]: string } {
    return {
      stageId: 'StageId',
      groupId: 'GroupId',
      apiUid: 'ApiUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stageId: 'string',
      groupId: 'string',
      apiUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionHttpCodeResponseBodyHttpCodePacketMonitorItem extends $tea.Model {
  itemValue?: string;
  itemTime?: string;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemTime: 'ItemTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionHttpCodeResponseBodyHttpCodePacket extends $tea.Model {
  monitorItem?: DescribeRegionHttpCodeResponseBodyHttpCodePacketMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeRegionHttpCodeResponseBodyHttpCodePacketMonitorItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncFailApiTaskResponseBodyApisApiDigest extends $tea.Model {
  apiId?: string;
  groupName?: string;
  groupId?: string;
  version?: string;
  path?: string;
  synTime?: string;
  method?: string;
  failReason?: string;
  apiName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupName: 'GroupName',
      groupId: 'GroupId',
      version: 'Version',
      path: 'Path',
      synTime: 'SynTime',
      method: 'Method',
      failReason: 'FailReason',
      apiName: 'ApiName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupName: 'string',
      groupId: 'string',
      version: 'string',
      path: 'string',
      synTime: 'string',
      method: 'string',
      failReason: 'string',
      apiName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncFailApiTaskResponseBodyApis extends $tea.Model {
  apiDigest?: DescribeSyncFailApiTaskResponseBodyApisApiDigest[];
  static names(): { [key: string]: string } {
    return {
      apiDigest: 'ApiDigest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDigest: { 'type': 'array', 'itemType': DescribeSyncFailApiTaskResponseBodyApisApiDigest },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
  regionEndpoint?: string;
  localName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionEndpoint: 'RegionEndpoint',
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionEndpoint: 'string',
      localName: 'string',
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

export class DescribePurchasedApisResponseBodyPurchasedApisPurchasedApi extends $tea.Model {
  visibility?: string;
  purchasedTime?: string;
  apiId?: string;
  modifiedTime?: string;
  description?: string;
  groupName?: string;
  groupId?: string;
  deployedTime?: string;
  stageName?: string;
  apiName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      visibility: 'Visibility',
      purchasedTime: 'PurchasedTime',
      apiId: 'ApiId',
      modifiedTime: 'ModifiedTime',
      description: 'Description',
      groupName: 'GroupName',
      groupId: 'GroupId',
      deployedTime: 'DeployedTime',
      stageName: 'StageName',
      apiName: 'ApiName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      visibility: 'string',
      purchasedTime: 'string',
      apiId: 'string',
      modifiedTime: 'string',
      description: 'string',
      groupName: 'string',
      groupId: 'string',
      deployedTime: 'string',
      stageName: 'string',
      apiName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApisResponseBodyPurchasedApis extends $tea.Model {
  purchasedApi?: DescribePurchasedApisResponseBodyPurchasedApisPurchasedApi[];
  static names(): { [key: string]: string } {
    return {
      purchasedApi: 'PurchasedApi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      purchasedApi: { 'type': 'array', 'itemType': DescribePurchasedApisResponseBodyPurchasedApisPurchasedApi },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficControlsByApiResponseBodyTrafficControlItemsTrafficControlItem extends $tea.Model {
  trafficControlItemId?: string;
  boundTime?: string;
  trafficControlItemName?: string;
  static names(): { [key: string]: string } {
    return {
      trafficControlItemId: 'TrafficControlItemId',
      boundTime: 'BoundTime',
      trafficControlItemName: 'TrafficControlItemName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficControlItemId: 'string',
      boundTime: 'string',
      trafficControlItemName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficControlsByApiResponseBodyTrafficControlItems extends $tea.Model {
  trafficControlItem?: DescribeTrafficControlsByApiResponseBodyTrafficControlItemsTrafficControlItem[];
  static names(): { [key: string]: string } {
    return {
      trafficControlItem: 'TrafficControlItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficControlItem: { 'type': 'array', 'itemType': DescribeTrafficControlsByApiResponseBodyTrafficControlItemsTrafficControlItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApisRequestTag extends $tea.Model {
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

export class DescribeDeployedApisResponseBodyDeployedApisDeployedApiItem extends $tea.Model {
  visibility?: string;
  apiId?: string;
  description?: string;
  groupName?: string;
  groupId?: string;
  deployedTime?: string;
  stageName?: string;
  apiName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      visibility: 'Visibility',
      apiId: 'ApiId',
      description: 'Description',
      groupName: 'GroupName',
      groupId: 'GroupId',
      deployedTime: 'DeployedTime',
      stageName: 'StageName',
      apiName: 'ApiName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      visibility: 'string',
      apiId: 'string',
      description: 'string',
      groupName: 'string',
      groupId: 'string',
      deployedTime: 'string',
      stageName: 'string',
      apiName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApisResponseBodyDeployedApis extends $tea.Model {
  deployedApiItem?: DescribeDeployedApisResponseBodyDeployedApisDeployedApiItem[];
  static names(): { [key: string]: string } {
    return {
      deployedApiItem: 'DeployedApiItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployedApiItem: { 'type': 'array', 'itemType': DescribeDeployedApisResponseBodyDeployedApisDeployedApiItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuthorizedApisResponseBodyAuthorizedApisAuthorizedApi extends $tea.Model {
  apiId?: string;
  authorizationSource?: string;
  authVaildTime?: string;
  description?: string;
  groupName?: string;
  groupId?: string;
  authorizedTime?: string;
  operator?: string;
  stageName?: string;
  apiName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      authorizationSource: 'AuthorizationSource',
      authVaildTime: 'AuthVaildTime',
      description: 'Description',
      groupName: 'GroupName',
      groupId: 'GroupId',
      authorizedTime: 'AuthorizedTime',
      operator: 'Operator',
      stageName: 'StageName',
      apiName: 'ApiName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      authorizationSource: 'string',
      authVaildTime: 'string',
      description: 'string',
      groupName: 'string',
      groupId: 'string',
      authorizedTime: 'string',
      operator: 'string',
      stageName: 'string',
      apiName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuthorizedApisResponseBodyAuthorizedApis extends $tea.Model {
  authorizedApi?: DescribeAuthorizedApisResponseBodyAuthorizedApisAuthorizedApi[];
  static names(): { [key: string]: string } {
    return {
      authorizedApi: 'AuthorizedApi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedApi: { 'type': 'array', 'itemType': DescribeAuthorizedApisResponseBodyAuthorizedApisAuthorizedApi },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAccessesResponseBodyVpcAccessAttributesVpcAccessAttribute extends $tea.Model {
  vpcId?: string;
  description?: string;
  instanceId?: string;
  port?: number;
  name?: string;
  createdTime?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      description: 'Description',
      instanceId: 'InstanceId',
      port: 'Port',
      name: 'Name',
      createdTime: 'CreatedTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      description: 'string',
      instanceId: 'string',
      port: 'number',
      name: 'string',
      createdTime: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAccessesResponseBodyVpcAccessAttributes extends $tea.Model {
  vpcAccessAttribute?: DescribeVpcAccessesResponseBodyVpcAccessAttributesVpcAccessAttribute[];
  static names(): { [key: string]: string } {
    return {
      vpcAccessAttribute: 'VpcAccessAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcAccessAttribute: { 'type': 'array', 'itemType': DescribeVpcAccessesResponseBodyVpcAccessAttributesVpcAccessAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSlbConnectResponseBodyInstanceSlbConnectMonitorItem extends $tea.Model {
  itemValue?: string;
  itemTime?: string;
  item?: string;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemTime: 'ItemTime',
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemTime: 'string',
      item: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSlbConnectResponseBodyInstanceSlbConnect extends $tea.Model {
  monitorItem?: DescribeInstanceSlbConnectResponseBodyInstanceSlbConnectMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeInstanceSlbConnectResponseBodyInstanceSlbConnectMonitorItem },
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
      'cn-qingdao': "apigateway.cn-qingdao.aliyuncs.com",
      'cn-beijing': "apigateway.cn-beijing.aliyuncs.com",
      'cn-chengdu': "apigateway.cn-chengdu.aliyuncs.com",
      'cn-zhangjiakou': "apigateway.cn-zhangjiakou.aliyuncs.com",
      'cn-huhehaote': "apigateway.cn-huhehaote.aliyuncs.com",
      'cn-hangzhou': "apigateway.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "apigateway.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "apigateway.cn-shenzhen.aliyuncs.com",
      'cn-hongkong': "apigateway.cn-hongkong.aliyuncs.com",
      'ap-southeast-1': "apigateway.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "apigateway.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "apigateway.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "apigateway.ap-southeast-5.aliyuncs.com",
      'ap-northeast-1': "apigateway.ap-northeast-1.aliyuncs.com",
      'eu-west-1': "apigateway.eu-west-1.aliyuncs.com",
      'us-west-1': "apigateway.us-west-1.aliyuncs.com",
      'us-east-1': "apigateway.us-east-1.aliyuncs.com",
      'eu-central-1': "apigateway.eu-central-1.aliyuncs.com",
      'me-east-1': "apigateway.me-east-1.aliyuncs.com",
      'ap-south-1': "apigateway.ap-south-1.aliyuncs.com",
      'cn-north-2-gov-1': "apigateway.cn-north-2-gov-1.aliyuncs.com",
      'cn-hangzhou-finance': "apigateway.aliyuncs.com",
      'cn-shenzhen-finance-1': "apigateway.aliyuncs.com",
      'cn-shanghai-finance-1': "apigateway.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cloudapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async describeAuthorizedAppsWithOptions(request: DescribeAuthorizedAppsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAuthorizedAppsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAuthorizedAppsResponse>(await this.doRPCRequest("DescribeAuthorizedApps", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAuthorizedAppsResponse({}));
  }

  async describeAuthorizedApps(request: DescribeAuthorizedAppsRequest): Promise<DescribeAuthorizedAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAuthorizedAppsWithOptions(request, runtime);
  }

  async describePurchasedApiGroupsWithOptions(request: DescribePurchasedApiGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePurchasedApiGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePurchasedApiGroupsResponse>(await this.doRPCRequest("DescribePurchasedApiGroups", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePurchasedApiGroupsResponse({}));
  }

  async describePurchasedApiGroups(request: DescribePurchasedApiGroupsRequest): Promise<DescribePurchasedApiGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePurchasedApiGroupsWithOptions(request, runtime);
  }

  async describePluginsWithOptions(request: DescribePluginsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePluginsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePluginsResponse>(await this.doRPCRequest("DescribePlugins", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePluginsResponse({}));
  }

  async describePlugins(request: DescribePluginsRequest): Promise<DescribePluginsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePluginsWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async describeLogConfigWithOptions(request: DescribeLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLogConfigResponse>(await this.doRPCRequest("DescribeLogConfig", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLogConfigResponse({}));
  }

  async describeLogConfig(request: DescribeLogConfigRequest): Promise<DescribeLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogConfigWithOptions(request, runtime);
  }

  async setApisAuthoritiesWithOptions(request: SetApisAuthoritiesRequest, runtime: $Util.RuntimeOptions): Promise<SetApisAuthoritiesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetApisAuthoritiesResponse>(await this.doRPCRequest("SetApisAuthorities", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetApisAuthoritiesResponse({}));
  }

  async setApisAuthorities(request: SetApisAuthoritiesRequest): Promise<SetApisAuthoritiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setApisAuthoritiesWithOptions(request, runtime);
  }

  async describeGroupConfigSynFlowWithOptions(request: DescribeGroupConfigSynFlowRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupConfigSynFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGroupConfigSynFlowResponse>(await this.doRPCRequest("DescribeGroupConfigSynFlow", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGroupConfigSynFlowResponse({}));
  }

  async describeGroupConfigSynFlow(request: DescribeGroupConfigSynFlowRequest): Promise<DescribeGroupConfigSynFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupConfigSynFlowWithOptions(request, runtime);
  }

  async deleteSignatureWithOptions(request: DeleteSignatureRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSignatureResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSignatureResponse>(await this.doRPCRequest("DeleteSignature", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSignatureResponse({}));
  }

  async deleteSignature(request: DeleteSignatureRequest): Promise<DeleteSignatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSignatureWithOptions(request, runtime);
  }

  async deleteTrafficControlWithOptions(request: DeleteTrafficControlRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTrafficControlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTrafficControlResponse>(await this.doRPCRequest("DeleteTrafficControl", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTrafficControlResponse({}));
  }

  async deleteTrafficControl(request: DeleteTrafficControlRequest): Promise<DeleteTrafficControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTrafficControlWithOptions(request, runtime);
  }

  async createFcServiceLinkedRoleWithOptions(request: CreateFcServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<CreateFcServiceLinkedRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFcServiceLinkedRoleResponse>(await this.doRPCRequest("CreateFcServiceLinkedRole", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFcServiceLinkedRoleResponse({}));
  }

  async createFcServiceLinkedRole(request: CreateFcServiceLinkedRoleRequest): Promise<CreateFcServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFcServiceLinkedRoleWithOptions(request, runtime);
  }

  async describeSystemParametersWithOptions(request: DescribeSystemParametersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSystemParametersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSystemParametersResponse>(await this.doRPCRequest("DescribeSystemParameters", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSystemParametersResponse({}));
  }

  async describeSystemParameters(request: DescribeSystemParametersRequest): Promise<DescribeSystemParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSystemParametersWithOptions(request, runtime);
  }

  async describeInstanceNewConnectionsWithOptions(request: DescribeInstanceNewConnectionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceNewConnectionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceNewConnectionsResponse>(await this.doRPCRequest("DescribeInstanceNewConnections", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceNewConnectionsResponse({}));
  }

  async describeInstanceNewConnections(request: DescribeInstanceNewConnectionsRequest): Promise<DescribeInstanceNewConnectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceNewConnectionsWithOptions(request, runtime);
  }

  async describeUpdateVpcInfoTaskWithOptions(request: DescribeUpdateVpcInfoTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUpdateVpcInfoTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUpdateVpcInfoTaskResponse>(await this.doRPCRequest("DescribeUpdateVpcInfoTask", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUpdateVpcInfoTaskResponse({}));
  }

  async describeUpdateVpcInfoTask(request: DescribeUpdateVpcInfoTaskRequest): Promise<DescribeUpdateVpcInfoTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUpdateVpcInfoTaskWithOptions(request, runtime);
  }

  async deletePluginWithOptions(request: DeletePluginRequest, runtime: $Util.RuntimeOptions): Promise<DeletePluginResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeletePluginResponse>(await this.doRPCRequest("DeletePlugin", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DeletePluginResponse({}));
  }

  async deletePlugin(request: DeletePluginRequest): Promise<DeletePluginResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePluginWithOptions(request, runtime);
  }

  async createGroupConfigSynFlowWithOptions(request: CreateGroupConfigSynFlowRequest, runtime: $Util.RuntimeOptions): Promise<CreateGroupConfigSynFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateGroupConfigSynFlowResponse>(await this.doRPCRequest("CreateGroupConfigSynFlow", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new CreateGroupConfigSynFlowResponse({}));
  }

  async createGroupConfigSynFlow(request: CreateGroupConfigSynFlowRequest): Promise<CreateGroupConfigSynFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupConfigSynFlowWithOptions(request, runtime);
  }

  async batchDeployApisWithOptions(request: BatchDeployApisRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeployApisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchDeployApisResponse>(await this.doRPCRequest("BatchDeployApis", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new BatchDeployApisResponse({}));
  }

  async batchDeployApis(request: BatchDeployApisRequest): Promise<BatchDeployApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeployApisWithOptions(request, runtime);
  }

  async describePluginTemplatesWithOptions(request: DescribePluginTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribePluginTemplatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePluginTemplatesResponse>(await this.doRPCRequest("DescribePluginTemplates", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePluginTemplatesResponse({}));
  }

  async describePluginTemplates(request: DescribePluginTemplatesRequest): Promise<DescribePluginTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePluginTemplatesWithOptions(request, runtime);
  }

  async removeIpControlApisWithOptions(request: RemoveIpControlApisRequest, runtime: $Util.RuntimeOptions): Promise<RemoveIpControlApisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveIpControlApisResponse>(await this.doRPCRequest("RemoveIpControlApis", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveIpControlApisResponse({}));
  }

  async removeIpControlApis(request: RemoveIpControlApisRequest): Promise<RemoveIpControlApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeIpControlApisWithOptions(request, runtime);
  }

  async describeAbolishApiTaskWithOptions(request: DescribeAbolishApiTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAbolishApiTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAbolishApiTaskResponse>(await this.doRPCRequest("DescribeAbolishApiTask", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAbolishApiTaskResponse({}));
  }

  async describeAbolishApiTask(request: DescribeAbolishApiTaskRequest): Promise<DescribeAbolishApiTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAbolishApiTaskWithOptions(request, runtime);
  }

  async describeSubscribeWithOptions(request: DescribeSubscribeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSubscribeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSubscribeResponse>(await this.doRPCRequest("DescribeSubscribe", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSubscribeResponse({}));
  }

  async describeSubscribe(request: DescribeSubscribeRequest): Promise<DescribeSubscribeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSubscribeWithOptions(request, runtime);
  }

  async createApiWithOptions(request: CreateApiRequest, runtime: $Util.RuntimeOptions): Promise<CreateApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateApiResponse>(await this.doRPCRequest("CreateApi", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new CreateApiResponse({}));
  }

  async createApi(request: CreateApiRequest): Promise<CreateApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApiWithOptions(request, runtime);
  }

  async describeConflictApisWithOptions(request: DescribeConflictApisRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConflictApisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeConflictApisResponse>(await this.doRPCRequest("DescribeConflictApis", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeConflictApisResponse({}));
  }

  async describeConflictApis(request: DescribeConflictApisRequest): Promise<DescribeConflictApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConflictApisWithOptions(request, runtime);
  }

  async deleteAppWithOptions(request: DeleteAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAppResponse>(await this.doRPCRequest("DeleteApp", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAppResponse({}));
  }

  async deleteApp(request: DeleteAppRequest): Promise<DeleteAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppWithOptions(request, runtime);
  }

  async describeRegionLatencyWithOptions(request: DescribeRegionLatencyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionLatencyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionLatencyResponse>(await this.doRPCRequest("DescribeRegionLatency", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionLatencyResponse({}));
  }

  async describeRegionLatency(request: DescribeRegionLatencyRequest): Promise<DescribeRegionLatencyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionLatencyWithOptions(request, runtime);
  }

  async modifyInstanceSpecWithOptions(request: ModifyInstanceSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceSpecResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceSpecResponse>(await this.doRPCRequest("ModifyInstanceSpec", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceSpecResponse({}));
  }

  async modifyInstanceSpec(request: ModifyInstanceSpecRequest): Promise<ModifyInstanceSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceSpecWithOptions(request, runtime);
  }

  async batchAbolishApisWithOptions(request: BatchAbolishApisRequest, runtime: $Util.RuntimeOptions): Promise<BatchAbolishApisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchAbolishApisResponse>(await this.doRPCRequest("BatchAbolishApis", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new BatchAbolishApisResponse({}));
  }

  async batchAbolishApis(request: BatchAbolishApisRequest): Promise<BatchAbolishApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchAbolishApisWithOptions(request, runtime);
  }

  async describeApiHistoriesWithOptions(request: DescribeApiHistoriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiHistoriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeApiHistoriesResponse>(await this.doRPCRequest("DescribeApiHistories", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeApiHistoriesResponse({}));
  }

  async describeApiHistories(request: DescribeApiHistoriesRequest): Promise<DescribeApiHistoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiHistoriesWithOptions(request, runtime);
  }

  async removeTrafficControlApisWithOptions(request: RemoveTrafficControlApisRequest, runtime: $Util.RuntimeOptions): Promise<RemoveTrafficControlApisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveTrafficControlApisResponse>(await this.doRPCRequest("RemoveTrafficControlApis", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveTrafficControlApisResponse({}));
  }

  async removeTrafficControlApis(request: RemoveTrafficControlApisRequest): Promise<RemoveTrafficControlApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeTrafficControlApisWithOptions(request, runtime);
  }

  async modifyApiMarketAttributesWithOptions(request: ModifyApiMarketAttributesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyApiMarketAttributesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyApiMarketAttributesResponse>(await this.doRPCRequest("ModifyApiMarketAttributes", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyApiMarketAttributesResponse({}));
  }

  async modifyApiMarketAttributes(request: ModifyApiMarketAttributesRequest): Promise<ModifyApiMarketAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyApiMarketAttributesWithOptions(request, runtime);
  }

  async deleteAllTrafficSpecialControlWithOptions(request: DeleteAllTrafficSpecialControlRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAllTrafficSpecialControlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAllTrafficSpecialControlResponse>(await this.doRPCRequest("DeleteAllTrafficSpecialControl", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAllTrafficSpecialControlResponse({}));
  }

  async deleteAllTrafficSpecialControl(request: DeleteAllTrafficSpecialControlRequest): Promise<DeleteAllTrafficSpecialControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAllTrafficSpecialControlWithOptions(request, runtime);
  }

  async abolishApiWithOptions(request: AbolishApiRequest, runtime: $Util.RuntimeOptions): Promise<AbolishApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AbolishApiResponse>(await this.doRPCRequest("AbolishApi", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new AbolishApiResponse({}));
  }

  async abolishApi(request: AbolishApiRequest): Promise<AbolishApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abolishApiWithOptions(request, runtime);
  }

  async createApiGroupWithOptions(request: CreateApiGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateApiGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateApiGroupResponse>(await this.doRPCRequest("CreateApiGroup", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new CreateApiGroupResponse({}));
  }

  async createApiGroup(request: CreateApiGroupRequest): Promise<CreateApiGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApiGroupWithOptions(request, runtime);
  }

  async deleteProductWithOptions(request: DeleteProductRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProductResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteProductResponse>(await this.doRPCRequest("DeleteProduct", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteProductResponse({}));
  }

  async deleteProduct(request: DeleteProductRequest): Promise<DeleteProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProductWithOptions(request, runtime);
  }

  async describeDomainsResolutionWithOptions(request: DescribeDomainsResolutionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainsResolutionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainsResolutionResponse>(await this.doRPCRequest("DescribeDomainsResolution", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainsResolutionResponse({}));
  }

  async describeDomainsResolution(request: DescribeDomainsResolutionRequest): Promise<DescribeDomainsResolutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainsResolutionWithOptions(request, runtime);
  }

  async deleteApiWithOptions(request: DeleteApiRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteApiResponse>(await this.doRPCRequest("DeleteApi", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteApiResponse({}));
  }

  async deleteApi(request: DeleteApiRequest): Promise<DeleteApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApiWithOptions(request, runtime);
  }

  async synchronizeGroupConfigFlowStartWithOptions(request: SynchronizeGroupConfigFlowStartRequest, runtime: $Util.RuntimeOptions): Promise<SynchronizeGroupConfigFlowStartResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SynchronizeGroupConfigFlowStartResponse>(await this.doRPCRequest("SynchronizeGroupConfigFlowStart", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new SynchronizeGroupConfigFlowStartResponse({}));
  }

  async synchronizeGroupConfigFlowStart(request: SynchronizeGroupConfigFlowStartRequest): Promise<SynchronizeGroupConfigFlowStartResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.synchronizeGroupConfigFlowStartWithOptions(request, runtime);
  }

  async describePurchasedApiGroupWithOptions(request: DescribePurchasedApiGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribePurchasedApiGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePurchasedApiGroupResponse>(await this.doRPCRequest("DescribePurchasedApiGroup", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePurchasedApiGroupResponse({}));
  }

  async describePurchasedApiGroup(request: DescribePurchasedApiGroupRequest): Promise<DescribePurchasedApiGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePurchasedApiGroupWithOptions(request, runtime);
  }

  async refreshMarketGroupAuthorizationsWithOptions(request: RefreshMarketGroupAuthorizationsRequest, runtime: $Util.RuntimeOptions): Promise<RefreshMarketGroupAuthorizationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RefreshMarketGroupAuthorizationsResponse>(await this.doRPCRequest("RefreshMarketGroupAuthorizations", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new RefreshMarketGroupAuthorizationsResponse({}));
  }

  async refreshMarketGroupAuthorizations(request: RefreshMarketGroupAuthorizationsRequest): Promise<RefreshMarketGroupAuthorizationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshMarketGroupAuthorizationsWithOptions(request, runtime);
  }

  async modifyIpControlPolicyItemWithOptions(request: ModifyIpControlPolicyItemRequest, runtime: $Util.RuntimeOptions): Promise<ModifyIpControlPolicyItemResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyIpControlPolicyItemResponse>(await this.doRPCRequest("ModifyIpControlPolicyItem", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyIpControlPolicyItemResponse({}));
  }

  async modifyIpControlPolicyItem(request: ModifyIpControlPolicyItemRequest): Promise<ModifyIpControlPolicyItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyIpControlPolicyItemWithOptions(request, runtime);
  }

  async createTrafficControlWithOptions(request: CreateTrafficControlRequest, runtime: $Util.RuntimeOptions): Promise<CreateTrafficControlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTrafficControlResponse>(await this.doRPCRequest("CreateTrafficControl", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTrafficControlResponse({}));
  }

  async createTrafficControl(request: CreateTrafficControlRequest): Promise<CreateTrafficControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTrafficControlWithOptions(request, runtime);
  }

  async sdkGenerateByAppWithOptions(request: SdkGenerateByAppRequest, runtime: $Util.RuntimeOptions): Promise<SdkGenerateByAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SdkGenerateByAppResponse>(await this.doRPCRequest("SdkGenerateByApp", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new SdkGenerateByAppResponse({}));
  }

  async sdkGenerateByApp(request: SdkGenerateByAppRequest): Promise<SdkGenerateByAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sdkGenerateByAppWithOptions(request, runtime);
  }

  async setDomainCertificateWithOptions(request: SetDomainCertificateRequest, runtime: $Util.RuntimeOptions): Promise<SetDomainCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDomainCertificateResponse>(await this.doRPCRequest("SetDomainCertificate", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetDomainCertificateResponse({}));
  }

  async setDomainCertificate(request: SetDomainCertificateRequest): Promise<SetDomainCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDomainCertificateWithOptions(request, runtime);
  }

  async describeModelsWithOptions(request: DescribeModelsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeModelsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeModelsResponse>(await this.doRPCRequest("DescribeModels", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeModelsResponse({}));
  }

  async describeModels(request: DescribeModelsRequest): Promise<DescribeModelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeModelsWithOptions(request, runtime);
  }

  async sdkGenerateByGroupWithOptions(request: SdkGenerateByGroupRequest, runtime: $Util.RuntimeOptions): Promise<SdkGenerateByGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SdkGenerateByGroupResponse>(await this.doRPCRequest("SdkGenerateByGroup", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new SdkGenerateByGroupResponse({}));
  }

  async sdkGenerateByGroup(request: SdkGenerateByGroupRequest): Promise<SdkGenerateByGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sdkGenerateByGroupWithOptions(request, runtime);
  }

  async setAppsAuthoritiesWithOptions(request: SetAppsAuthoritiesRequest, runtime: $Util.RuntimeOptions): Promise<SetAppsAuthoritiesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetAppsAuthoritiesResponse>(await this.doRPCRequest("SetAppsAuthorities", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetAppsAuthoritiesResponse({}));
  }

  async setAppsAuthorities(request: SetAppsAuthoritiesRequest): Promise<SetAppsAuthoritiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAppsAuthoritiesWithOptions(request, runtime);
  }

  async checkInstanceSupportStageNameWithOptions(request: CheckInstanceSupportStageNameRequest, runtime: $Util.RuntimeOptions): Promise<CheckInstanceSupportStageNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckInstanceSupportStageNameResponse>(await this.doRPCRequest("CheckInstanceSupportStageName", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new CheckInstanceSupportStageNameResponse({}));
  }

  async checkInstanceSupportStageName(request: CheckInstanceSupportStageNameRequest): Promise<CheckInstanceSupportStageNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkInstanceSupportStageNameWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async describeApiTrafficDataWithOptions(request: DescribeApiTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiTrafficDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeApiTrafficDataResponse>(await this.doRPCRequest("DescribeApiTrafficData", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeApiTrafficDataResponse({}));
  }

  async describeApiTrafficData(request: DescribeApiTrafficDataRequest): Promise<DescribeApiTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiTrafficDataWithOptions(request, runtime);
  }

  async createAppWithOptions(request: CreateAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAppResponse>(await this.doRPCRequest("CreateApp", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAppResponse({}));
  }

  async createApp(request: CreateAppRequest): Promise<CreateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppWithOptions(request, runtime);
  }

  async resetAppCodeWithOptions(request: ResetAppCodeRequest, runtime: $Util.RuntimeOptions): Promise<ResetAppCodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetAppCodeResponse>(await this.doRPCRequest("ResetAppCode", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new ResetAppCodeResponse({}));
  }

  async resetAppCode(request: ResetAppCodeRequest): Promise<ResetAppCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAppCodeWithOptions(request, runtime);
  }

  async deleteApiStageVariableWithOptions(request: DeleteApiStageVariableRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApiStageVariableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteApiStageVariableResponse>(await this.doRPCRequest("DeleteApiStageVariable", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteApiStageVariableResponse({}));
  }

  async deleteApiStageVariable(request: DeleteApiStageVariableRequest): Promise<DeleteApiStageVariableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApiStageVariableWithOptions(request, runtime);
  }

  async describeReadyReservationApisWithOptions(request: DescribeReadyReservationApisRequest, runtime: $Util.RuntimeOptions): Promise<DescribeReadyReservationApisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeReadyReservationApisResponse>(await this.doRPCRequest("DescribeReadyReservationApis", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeReadyReservationApisResponse({}));
  }

  async describeReadyReservationApis(request: DescribeReadyReservationApisRequest): Promise<DescribeReadyReservationApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeReadyReservationApisWithOptions(request, runtime);
  }

  async modifySignatureWithOptions(request: ModifySignatureRequest, runtime: $Util.RuntimeOptions): Promise<ModifySignatureResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySignatureResponse>(await this.doRPCRequest("ModifySignature", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySignatureResponse({}));
  }

  async modifySignature(request: ModifySignatureRequest): Promise<ModifySignatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySignatureWithOptions(request, runtime);
  }

  async describeInstanceLatencyWithOptions(request: DescribeInstanceLatencyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceLatencyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceLatencyResponse>(await this.doRPCRequest("DescribeInstanceLatency", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceLatencyResponse({}));
  }

  async describeInstanceLatency(request: DescribeInstanceLatencyRequest): Promise<DescribeInstanceLatencyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceLatencyWithOptions(request, runtime);
  }

  async describeApiQpsDataWithOptions(request: DescribeApiQpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiQpsDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeApiQpsDataResponse>(await this.doRPCRequest("DescribeApiQpsData", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeApiQpsDataResponse({}));
  }

  async describeApiQpsData(request: DescribeApiQpsDataRequest): Promise<DescribeApiQpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiQpsDataWithOptions(request, runtime);
  }

  async describeInstanceHttpCodeWithOptions(request: DescribeInstanceHttpCodeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceHttpCodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceHttpCodeResponse>(await this.doRPCRequest("DescribeInstanceHttpCode", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceHttpCodeResponse({}));
  }

  async describeInstanceHttpCode(request: DescribeInstanceHttpCodeRequest): Promise<DescribeInstanceHttpCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceHttpCodeWithOptions(request, runtime);
  }

  async describeAppSecurityWithOptions(request: DescribeAppSecurityRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppSecurityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAppSecurityResponse>(await this.doRPCRequest("DescribeAppSecurity", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAppSecurityResponse({}));
  }

  async describeAppSecurity(request: DescribeAppSecurityRequest): Promise<DescribeAppSecurityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppSecurityWithOptions(request, runtime);
  }

  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZonesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeZonesResponse>(await this.doRPCRequest("DescribeZones", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeZonesResponse({}));
  }

  async describeZones(request: DescribeZonesRequest): Promise<DescribeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  async describeRegionTrafficWithOptions(request: DescribeRegionTrafficRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionTrafficResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionTrafficResponse>(await this.doRPCRequest("DescribeRegionTraffic", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionTrafficResponse({}));
  }

  async describeRegionTraffic(request: DescribeRegionTrafficRequest): Promise<DescribeRegionTrafficResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionTrafficWithOptions(request, runtime);
  }

  async describeApisByAppWithOptions(request: DescribeApisByAppRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisByAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeApisByAppResponse>(await this.doRPCRequest("DescribeApisByApp", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeApisByAppResponse({}));
  }

  async describeApisByApp(request: DescribeApisByAppRequest): Promise<DescribeApisByAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisByAppWithOptions(request, runtime);
  }

  async describeRegionQpsGroupByInstanceWithOptions(request: DescribeRegionQpsGroupByInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionQpsGroupByInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionQpsGroupByInstanceResponse>(await this.doRPCRequest("DescribeRegionQpsGroupByInstance", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionQpsGroupByInstanceResponse({}));
  }

  async describeRegionQpsGroupByInstance(request: DescribeRegionQpsGroupByInstanceRequest): Promise<DescribeRegionQpsGroupByInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionQpsGroupByInstanceWithOptions(request, runtime);
  }

  async dryRunSwaggerWithOptions(tmpReq: DryRunSwaggerRequest, runtime: $Util.RuntimeOptions): Promise<DryRunSwaggerResponse> {
    Util.validateModel(tmpReq);
    let request = new DryRunSwaggerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.globalCondition)) {
      request.globalConditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.globalCondition, "GlobalCondition", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DryRunSwaggerResponse>(await this.doRPCRequest("DryRunSwagger", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DryRunSwaggerResponse({}));
  }

  async dryRunSwagger(request: DryRunSwaggerRequest): Promise<DryRunSwaggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dryRunSwaggerWithOptions(request, runtime);
  }

  async createPluginWithOptions(request: CreatePluginRequest, runtime: $Util.RuntimeOptions): Promise<CreatePluginResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreatePluginResponse>(await this.doRPCRequest("CreatePlugin", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new CreatePluginResponse({}));
  }

  async createPlugin(request: CreatePluginRequest): Promise<CreatePluginResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPluginWithOptions(request, runtime);
  }

  async modifyLogConfigWithOptions(request: ModifyLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLogConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyLogConfigResponse>(await this.doRPCRequest("ModifyLogConfig", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyLogConfigResponse({}));
  }

  async modifyLogConfig(request: ModifyLogConfigRequest): Promise<ModifyLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLogConfigWithOptions(request, runtime);
  }

  async describeApisByIpControlWithOptions(request: DescribeApisByIpControlRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisByIpControlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeApisByIpControlResponse>(await this.doRPCRequest("DescribeApisByIpControl", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeApisByIpControlResponse({}));
  }

  async describeApisByIpControl(request: DescribeApisByIpControlRequest): Promise<DescribeApisByIpControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisByIpControlWithOptions(request, runtime);
  }

  async describeDeployedApiWithOptions(request: DescribeDeployedApiRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeployedApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDeployedApiResponse>(await this.doRPCRequest("DescribeDeployedApi", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDeployedApiResponse({}));
  }

  async describeDeployedApi(request: DescribeDeployedApiRequest): Promise<DescribeDeployedApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeployedApiWithOptions(request, runtime);
  }

  async describeApisBySignatureWithOptions(request: DescribeApisBySignatureRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisBySignatureResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeApisBySignatureResponse>(await this.doRPCRequest("DescribeApisBySignature", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeApisBySignatureResponse({}));
  }

  async describeApisBySignature(request: DescribeApisBySignatureRequest): Promise<DescribeApisBySignatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisBySignatureWithOptions(request, runtime);
  }

  async describeAccordanceApisWithOptions(request: DescribeAccordanceApisRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccordanceApisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAccordanceApisResponse>(await this.doRPCRequest("DescribeAccordanceApis", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAccordanceApisResponse({}));
  }

  async describeAccordanceApis(request: DescribeAccordanceApisRequest): Promise<DescribeAccordanceApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccordanceApisWithOptions(request, runtime);
  }

  async removeApisAuthoritiesWithOptions(request: RemoveApisAuthoritiesRequest, runtime: $Util.RuntimeOptions): Promise<RemoveApisAuthoritiesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveApisAuthoritiesResponse>(await this.doRPCRequest("RemoveApisAuthorities", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveApisAuthoritiesResponse({}));
  }

  async removeApisAuthorities(request: RemoveApisAuthoritiesRequest): Promise<RemoveApisAuthoritiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeApisAuthoritiesWithOptions(request, runtime);
  }

  async setVpcAccessWithOptions(request: SetVpcAccessRequest, runtime: $Util.RuntimeOptions): Promise<SetVpcAccessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetVpcAccessResponse>(await this.doRPCRequest("SetVpcAccess", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetVpcAccessResponse({}));
  }

  async setVpcAccess(request: SetVpcAccessRequest): Promise<SetVpcAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setVpcAccessWithOptions(request, runtime);
  }

  async attachPluginWithOptions(request: AttachPluginRequest, runtime: $Util.RuntimeOptions): Promise<AttachPluginResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachPluginResponse>(await this.doRPCRequest("AttachPlugin", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new AttachPluginResponse({}));
  }

  async attachPlugin(request: AttachPluginRequest): Promise<AttachPluginResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachPluginWithOptions(request, runtime);
  }

  async describeSignaturesByApiWithOptions(request: DescribeSignaturesByApiRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSignaturesByApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSignaturesByApiResponse>(await this.doRPCRequest("DescribeSignaturesByApi", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSignaturesByApiResponse({}));
  }

  async describeSignaturesByApi(request: DescribeSignaturesByApiRequest): Promise<DescribeSignaturesByApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSignaturesByApiWithOptions(request, runtime);
  }

  async modifyApiWithOptions(request: ModifyApiRequest, runtime: $Util.RuntimeOptions): Promise<ModifyApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyApiResponse>(await this.doRPCRequest("ModifyApi", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyApiResponse({}));
  }

  async modifyApi(request: ModifyApiRequest): Promise<ModifyApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyApiWithOptions(request, runtime);
  }

  async resetAppSecretWithOptions(request: ResetAppSecretRequest, runtime: $Util.RuntimeOptions): Promise<ResetAppSecretResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetAppSecretResponse>(await this.doRPCRequest("ResetAppSecret", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new ResetAppSecretResponse({}));
  }

  async resetAppSecret(request: ResetAppSecretRequest): Promise<ResetAppSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAppSecretWithOptions(request, runtime);
  }

  async addTrafficSpecialControlWithOptions(request: AddTrafficSpecialControlRequest, runtime: $Util.RuntimeOptions): Promise<AddTrafficSpecialControlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddTrafficSpecialControlResponse>(await this.doRPCRequest("AddTrafficSpecialControl", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new AddTrafficSpecialControlResponse({}));
  }

  async addTrafficSpecialControl(request: AddTrafficSpecialControlRequest): Promise<AddTrafficSpecialControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTrafficSpecialControlWithOptions(request, runtime);
  }

  async deployApiWithOptions(request: DeployApiRequest, runtime: $Util.RuntimeOptions): Promise<DeployApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeployApiResponse>(await this.doRPCRequest("DeployApi", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DeployApiResponse({}));
  }

  async deployApi(request: DeployApiRequest): Promise<DeployApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployApiWithOptions(request, runtime);
  }

  async modifyAppWithOptions(request: ModifyAppRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAppResponse>(await this.doRPCRequest("ModifyApp", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAppResponse({}));
  }

  async modifyApp(request: ModifyAppRequest): Promise<ModifyAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAppWithOptions(request, runtime);
  }

  async setDomainWebSocketStatusWithOptions(request: SetDomainWebSocketStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetDomainWebSocketStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDomainWebSocketStatusResponse>(await this.doRPCRequest("SetDomainWebSocketStatus", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetDomainWebSocketStatusResponse({}));
  }

  async setDomainWebSocketStatus(request: SetDomainWebSocketStatusRequest): Promise<SetDomainWebSocketStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDomainWebSocketStatusWithOptions(request, runtime);
  }

  async describeInstanceDropConnectionsWithOptions(request: DescribeInstanceDropConnectionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceDropConnectionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceDropConnectionsResponse>(await this.doRPCRequest("DescribeInstanceDropConnections", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceDropConnectionsResponse({}));
  }

  async describeInstanceDropConnections(request: DescribeInstanceDropConnectionsRequest): Promise<DescribeInstanceDropConnectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceDropConnectionsWithOptions(request, runtime);
  }

  async describeApiTrafficControlsWithOptions(request: DescribeApiTrafficControlsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiTrafficControlsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeApiTrafficControlsResponse>(await this.doRPCRequest("DescribeApiTrafficControls", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeApiTrafficControlsResponse({}));
  }

  async describeApiTrafficControls(request: DescribeApiTrafficControlsRequest): Promise<DescribeApiTrafficControlsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiTrafficControlsWithOptions(request, runtime);
  }

  async setSignatureApisWithOptions(request: SetSignatureApisRequest, runtime: $Util.RuntimeOptions): Promise<SetSignatureApisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetSignatureApisResponse>(await this.doRPCRequest("SetSignatureApis", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetSignatureApisResponse({}));
  }

  async setSignatureApis(request: SetSignatureApisRequest): Promise<SetSignatureApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setSignatureApisWithOptions(request, runtime);
  }

  async describeAppWithOptions(request: DescribeAppRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAppResponse>(await this.doRPCRequest("DescribeApp", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAppResponse({}));
  }

  async describeApp(request: DescribeAppRequest): Promise<DescribeAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppWithOptions(request, runtime);
  }

  async removeIpControlPolicyItemWithOptions(request: RemoveIpControlPolicyItemRequest, runtime: $Util.RuntimeOptions): Promise<RemoveIpControlPolicyItemResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveIpControlPolicyItemResponse>(await this.doRPCRequest("RemoveIpControlPolicyItem", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveIpControlPolicyItemResponse({}));
  }

  async removeIpControlPolicyItem(request: RemoveIpControlPolicyItemRequest): Promise<RemoveIpControlPolicyItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeIpControlPolicyItemWithOptions(request, runtime);
  }

  async describeInstanceTrafficWithOptions(request: DescribeInstanceTrafficRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceTrafficResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceTrafficResponse>(await this.doRPCRequest("DescribeInstanceTraffic", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceTrafficResponse({}));
  }

  async describeInstanceTraffic(request: DescribeInstanceTrafficRequest): Promise<DescribeInstanceTrafficResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceTrafficWithOptions(request, runtime);
  }

  async describeInstanceQpsWithOptions(request: DescribeInstanceQpsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceQpsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceQpsResponse>(await this.doRPCRequest("DescribeInstanceQps", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceQpsResponse({}));
  }

  async describeInstanceQps(request: DescribeInstanceQpsRequest): Promise<DescribeInstanceQpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceQpsWithOptions(request, runtime);
  }

  async hideProductWithOptions(request: HideProductRequest, runtime: $Util.RuntimeOptions): Promise<HideProductResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<HideProductResponse>(await this.doRPCRequest("HideProduct", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new HideProductResponse({}));
  }

  async hideProduct(request: HideProductRequest): Promise<HideProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.hideProductWithOptions(request, runtime);
  }

  async describeGroupQpsWithOptions(request: DescribeGroupQpsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupQpsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGroupQpsResponse>(await this.doRPCRequest("DescribeGroupQps", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGroupQpsResponse({}));
  }

  async describeGroupQps(request: DescribeGroupQpsRequest): Promise<DescribeGroupQpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupQpsWithOptions(request, runtime);
  }

  async createApiStageVariableWithOptions(request: CreateApiStageVariableRequest, runtime: $Util.RuntimeOptions): Promise<CreateApiStageVariableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateApiStageVariableResponse>(await this.doRPCRequest("CreateApiStageVariable", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new CreateApiStageVariableResponse({}));
  }

  async createApiStageVariable(request: CreateApiStageVariableRequest): Promise<CreateApiStageVariableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApiStageVariableWithOptions(request, runtime);
  }

  async createMonitorGroupWithOptions(request: CreateMonitorGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateMonitorGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMonitorGroupResponse>(await this.doRPCRequest("CreateMonitorGroup", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMonitorGroupResponse({}));
  }

  async createMonitorGroup(request: CreateMonitorGroupRequest): Promise<CreateMonitorGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMonitorGroupWithOptions(request, runtime);
  }

  async describeApiMarketAttributesWithOptions(request: DescribeApiMarketAttributesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiMarketAttributesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeApiMarketAttributesResponse>(await this.doRPCRequest("DescribeApiMarketAttributes", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeApiMarketAttributesResponse({}));
  }

  async describeApiMarketAttributes(request: DescribeApiMarketAttributesRequest): Promise<DescribeApiMarketAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiMarketAttributesWithOptions(request, runtime);
  }

  async describeApiSignaturesWithOptions(request: DescribeApiSignaturesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiSignaturesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeApiSignaturesResponse>(await this.doRPCRequest("DescribeApiSignatures", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeApiSignaturesResponse({}));
  }

  async describeApiSignatures(request: DescribeApiSignaturesRequest): Promise<DescribeApiSignaturesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiSignaturesWithOptions(request, runtime);
  }

  async describeIpControlPolicyItemsWithOptions(request: DescribeIpControlPolicyItemsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIpControlPolicyItemsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeIpControlPolicyItemsResponse>(await this.doRPCRequest("DescribeIpControlPolicyItems", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeIpControlPolicyItemsResponse({}));
  }

  async describeIpControlPolicyItems(request: DescribeIpControlPolicyItemsRequest): Promise<DescribeIpControlPolicyItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIpControlPolicyItemsWithOptions(request, runtime);
  }

  async deleteDomainWithOptions(request: DeleteDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDomainResponse>(await this.doRPCRequest("DeleteDomain", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDomainResponse({}));
  }

  async deleteDomain(request: DeleteDomainRequest): Promise<DeleteDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  async describeGroupConfigSynFlowsWithOptions(request: DescribeGroupConfigSynFlowsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupConfigSynFlowsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGroupConfigSynFlowsResponse>(await this.doRPCRequest("DescribeGroupConfigSynFlows", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGroupConfigSynFlowsResponse({}));
  }

  async describeGroupConfigSynFlows(request: DescribeGroupConfigSynFlowsRequest): Promise<DescribeGroupConfigSynFlowsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupConfigSynFlowsWithOptions(request, runtime);
  }

  async describeSyncApiTaskWithOptions(request: DescribeSyncApiTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSyncApiTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSyncApiTaskResponse>(await this.doRPCRequest("DescribeSyncApiTask", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSyncApiTaskResponse({}));
  }

  async describeSyncApiTask(request: DescribeSyncApiTaskRequest): Promise<DescribeSyncApiTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSyncApiTaskWithOptions(request, runtime);
  }

  async modifyApiGroupWithOptions(request: ModifyApiGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyApiGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyApiGroupResponse>(await this.doRPCRequest("ModifyApiGroup", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyApiGroupResponse({}));
  }

  async modifyApiGroup(request: ModifyApiGroupRequest): Promise<ModifyApiGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyApiGroupWithOptions(request, runtime);
  }

  async setWildcardDomainPatternsWithOptions(request: SetWildcardDomainPatternsRequest, runtime: $Util.RuntimeOptions): Promise<SetWildcardDomainPatternsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetWildcardDomainPatternsResponse>(await this.doRPCRequest("SetWildcardDomainPatterns", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetWildcardDomainPatternsResponse({}));
  }

  async setWildcardDomainPatterns(request: SetWildcardDomainPatternsRequest): Promise<SetWildcardDomainPatternsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setWildcardDomainPatternsWithOptions(request, runtime);
  }

  async describeApiWithOptions(request: DescribeApiRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeApiResponse>(await this.doRPCRequest("DescribeApi", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeApiResponse({}));
  }

  async describeApi(request: DescribeApiRequest): Promise<DescribeApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiWithOptions(request, runtime);
  }

  async describeTrafficControlsWithOptions(request: DescribeTrafficControlsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTrafficControlsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTrafficControlsResponse>(await this.doRPCRequest("DescribeTrafficControls", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTrafficControlsResponse({}));
  }

  async describeTrafficControls(request: DescribeTrafficControlsRequest): Promise<DescribeTrafficControlsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTrafficControlsWithOptions(request, runtime);
  }

  async setDomainWithOptions(request: SetDomainRequest, runtime: $Util.RuntimeOptions): Promise<SetDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDomainResponse>(await this.doRPCRequest("SetDomain", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetDomainResponse({}));
  }

  async setDomain(request: SetDomainRequest): Promise<SetDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDomainWithOptions(request, runtime);
  }

  async deleteIpControlWithOptions(request: DeleteIpControlRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIpControlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteIpControlResponse>(await this.doRPCRequest("DeleteIpControl", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteIpControlResponse({}));
  }

  async deleteIpControl(request: DeleteIpControlRequest): Promise<DeleteIpControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIpControlWithOptions(request, runtime);
  }

  async describeApiLatencyDataWithOptions(request: DescribeApiLatencyDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiLatencyDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeApiLatencyDataResponse>(await this.doRPCRequest("DescribeApiLatencyData", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeApiLatencyDataResponse({}));
  }

  async describeApiLatencyData(request: DescribeApiLatencyDataRequest): Promise<DescribeApiLatencyDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiLatencyDataWithOptions(request, runtime);
  }

  async describeGroupLatencyWithOptions(request: DescribeGroupLatencyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupLatencyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGroupLatencyResponse>(await this.doRPCRequest("DescribeGroupLatency", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGroupLatencyResponse({}));
  }

  async describeGroupLatency(request: DescribeGroupLatencyRequest): Promise<DescribeGroupLatencyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupLatencyWithOptions(request, runtime);
  }

  async describeBackendDifferentApisWithOptions(request: DescribeBackendDifferentApisRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackendDifferentApisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackendDifferentApisResponse>(await this.doRPCRequest("DescribeBackendDifferentApis", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackendDifferentApisResponse({}));
  }

  async describeBackendDifferentApis(request: DescribeBackendDifferentApisRequest): Promise<DescribeBackendDifferentApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackendDifferentApisWithOptions(request, runtime);
  }

  async describeApiHistoryWithOptions(request: DescribeApiHistoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiHistoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeApiHistoryResponse>(await this.doRPCRequest("DescribeApiHistory", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeApiHistoryResponse({}));
  }

  async describeApiHistory(request: DescribeApiHistoryRequest): Promise<DescribeApiHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiHistoryWithOptions(request, runtime);
  }

  async updatePartProductWithOptions(request: UpdatePartProductRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePartProductResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdatePartProductResponse>(await this.doRPCRequest("UpdatePartProduct", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new UpdatePartProductResponse({}));
  }

  async updatePartProduct(request: UpdatePartProductRequest): Promise<UpdatePartProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePartProductWithOptions(request, runtime);
  }

  async changeProductSpecsOrderWithOptions(request: ChangeProductSpecsOrderRequest, runtime: $Util.RuntimeOptions): Promise<ChangeProductSpecsOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ChangeProductSpecsOrderResponse>(await this.doRPCRequest("ChangeProductSpecsOrder", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new ChangeProductSpecsOrderResponse({}));
  }

  async changeProductSpecsOrder(request: ChangeProductSpecsOrderRequest): Promise<ChangeProductSpecsOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeProductSpecsOrderWithOptions(request, runtime);
  }

  async createIntranetDomainWithOptions(request: CreateIntranetDomainRequest, runtime: $Util.RuntimeOptions): Promise<CreateIntranetDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateIntranetDomainResponse>(await this.doRPCRequest("CreateIntranetDomain", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new CreateIntranetDomainResponse({}));
  }

  async createIntranetDomain(request: CreateIntranetDomainRequest): Promise<CreateIntranetDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIntranetDomainWithOptions(request, runtime);
  }

  async modifyModelWithOptions(request: ModifyModelRequest, runtime: $Util.RuntimeOptions): Promise<ModifyModelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyModelResponse>(await this.doRPCRequest("ModifyModel", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyModelResponse({}));
  }

  async modifyModel(request: ModifyModelRequest): Promise<ModifyModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyModelWithOptions(request, runtime);
  }

  async describeApiErrorDataWithOptions(request: DescribeApiErrorDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiErrorDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeApiErrorDataResponse>(await this.doRPCRequest("DescribeApiErrorData", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeApiErrorDataResponse({}));
  }

  async describeApiErrorData(request: DescribeApiErrorDataRequest): Promise<DescribeApiErrorDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiErrorDataWithOptions(request, runtime);
  }

  async deleteTrafficSpecialControlWithOptions(request: DeleteTrafficSpecialControlRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTrafficSpecialControlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTrafficSpecialControlResponse>(await this.doRPCRequest("DeleteTrafficSpecialControl", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTrafficSpecialControlResponse({}));
  }

  async deleteTrafficSpecialControl(request: DeleteTrafficSpecialControlRequest): Promise<DeleteTrafficSpecialControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTrafficSpecialControlWithOptions(request, runtime);
  }

  async modifyPluginWithOptions(request: ModifyPluginRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPluginResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyPluginResponse>(await this.doRPCRequest("ModifyPlugin", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyPluginResponse({}));
  }

  async modifyPlugin(request: ModifyPluginRequest): Promise<ModifyPluginResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPluginWithOptions(request, runtime);
  }

  async describeSummaryDataWithOptions(request: DescribeSummaryDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSummaryDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSummaryDataResponse>(await this.doRPCRequest("DescribeSummaryData", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSummaryDataResponse({}));
  }

  async describeSummaryData(request: DescribeSummaryDataRequest): Promise<DescribeSummaryDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSummaryDataWithOptions(request, runtime);
  }

  async describeApiGroupWithOptions(request: DescribeApiGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeApiGroupResponse>(await this.doRPCRequest("DescribeApiGroup", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeApiGroupResponse({}));
  }

  async describeApiGroup(request: DescribeApiGroupRequest): Promise<DescribeApiGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiGroupWithOptions(request, runtime);
  }

  async modifyApiGroupVpcWhitelistWithOptions(request: ModifyApiGroupVpcWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<ModifyApiGroupVpcWhitelistResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyApiGroupVpcWhitelistResponse>(await this.doRPCRequest("ModifyApiGroupVpcWhitelist", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyApiGroupVpcWhitelistResponse({}));
  }

  async modifyApiGroupVpcWhitelist(request: ModifyApiGroupVpcWhitelistRequest): Promise<ModifyApiGroupVpcWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyApiGroupVpcWhitelistWithOptions(request, runtime);
  }

  async checkFcServiceLinkedRoleWithOptions(request: CheckFcServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<CheckFcServiceLinkedRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckFcServiceLinkedRoleResponse>(await this.doRPCRequest("CheckFcServiceLinkedRole", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new CheckFcServiceLinkedRoleResponse({}));
  }

  async checkFcServiceLinkedRole(request: CheckFcServiceLinkedRoleRequest): Promise<CheckFcServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkFcServiceLinkedRoleWithOptions(request, runtime);
  }

  async synchronizeGroupConfigWithOptions(request: SynchronizeGroupConfigRequest, runtime: $Util.RuntimeOptions): Promise<SynchronizeGroupConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SynchronizeGroupConfigResponse>(await this.doRPCRequest("SynchronizeGroupConfig", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new SynchronizeGroupConfigResponse({}));
  }

  async synchronizeGroupConfig(request: SynchronizeGroupConfigRequest): Promise<SynchronizeGroupConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.synchronizeGroupConfigWithOptions(request, runtime);
  }

  async deleteApiGroupWithOptions(request: DeleteApiGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApiGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteApiGroupResponse>(await this.doRPCRequest("DeleteApiGroup", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteApiGroupResponse({}));
  }

  async deleteApiGroup(request: DeleteApiGroupRequest): Promise<DeleteApiGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApiGroupWithOptions(request, runtime);
  }

  async describeApiGroupsWithOptions(request: DescribeApiGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeApiGroupsResponse>(await this.doRPCRequest("DescribeApiGroups", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeApiGroupsResponse({}));
  }

  async describeApiGroups(request: DescribeApiGroupsRequest): Promise<DescribeApiGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiGroupsWithOptions(request, runtime);
  }

  async describeApisWithOptions(request: DescribeApisRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeApisResponse>(await this.doRPCRequest("DescribeApis", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeApisResponse({}));
  }

  async describeApis(request: DescribeApisRequest): Promise<DescribeApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisWithOptions(request, runtime);
  }

  async describeVarDiffBetweenGroupWithOptions(request: DescribeVarDiffBetweenGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVarDiffBetweenGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVarDiffBetweenGroupResponse>(await this.doRPCRequest("DescribeVarDiffBetweenGroup", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVarDiffBetweenGroupResponse({}));
  }

  async describeVarDiffBetweenGroup(request: DescribeVarDiffBetweenGroupRequest): Promise<DescribeVarDiffBetweenGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVarDiffBetweenGroupWithOptions(request, runtime);
  }

  async describeInstanceDropPacketWithOptions(request: DescribeInstanceDropPacketRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceDropPacketResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceDropPacketResponse>(await this.doRPCRequest("DescribeInstanceDropPacket", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceDropPacketResponse({}));
  }

  async describeInstanceDropPacket(request: DescribeInstanceDropPacketRequest): Promise<DescribeInstanceDropPacketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceDropPacketWithOptions(request, runtime);
  }

  async setIpControlApisWithOptions(request: SetIpControlApisRequest, runtime: $Util.RuntimeOptions): Promise<SetIpControlApisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetIpControlApisResponse>(await this.doRPCRequest("SetIpControlApis", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetIpControlApisResponse({}));
  }

  async setIpControlApis(request: SetIpControlApisRequest): Promise<SetIpControlApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setIpControlApisWithOptions(request, runtime);
  }

  async describeAppAttributesWithOptions(request: DescribeAppAttributesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppAttributesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAppAttributesResponse>(await this.doRPCRequest("DescribeAppAttributes", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAppAttributesResponse({}));
  }

  async describeAppAttributes(request: DescribeAppAttributesRequest): Promise<DescribeAppAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppAttributesWithOptions(request, runtime);
  }

  async describeGroupTrafficWithOptions(request: DescribeGroupTrafficRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupTrafficResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGroupTrafficResponse>(await this.doRPCRequest("DescribeGroupTraffic", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGroupTrafficResponse({}));
  }

  async describeGroupTraffic(request: DescribeGroupTrafficRequest): Promise<DescribeGroupTrafficResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupTrafficWithOptions(request, runtime);
  }

  async describeDeployApiTaskWithOptions(request: DescribeDeployApiTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeployApiTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDeployApiTaskResponse>(await this.doRPCRequest("DescribeDeployApiTask", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDeployApiTaskResponse({}));
  }

  async describeDeployApiTask(request: DescribeDeployApiTaskRequest): Promise<DescribeDeployApiTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeployApiTaskWithOptions(request, runtime);
  }

  async describeWillBeSyncApisWithOptions(request: DescribeWillBeSyncApisRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWillBeSyncApisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWillBeSyncApisResponse>(await this.doRPCRequest("DescribeWillBeSyncApis", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWillBeSyncApisResponse({}));
  }

  async describeWillBeSyncApis(request: DescribeWillBeSyncApisRequest): Promise<DescribeWillBeSyncApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWillBeSyncApisWithOptions(request, runtime);
  }

  async describeGroupHttpCodeWithOptions(request: DescribeGroupHttpCodeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupHttpCodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGroupHttpCodeResponse>(await this.doRPCRequest("DescribeGroupHttpCode", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGroupHttpCodeResponse({}));
  }

  async describeGroupHttpCode(request: DescribeGroupHttpCodeRequest): Promise<DescribeGroupHttpCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupHttpCodeWithOptions(request, runtime);
  }

  async describeApiDocWithOptions(request: DescribeApiDocRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiDocResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeApiDocResponse>(await this.doRPCRequest("DescribeApiDoc", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeApiDocResponse({}));
  }

  async describeApiDoc(request: DescribeApiDocRequest): Promise<DescribeApiDocResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiDocWithOptions(request, runtime);
  }

  async describeRegionQpsWithOptions(request: DescribeRegionQpsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionQpsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionQpsResponse>(await this.doRPCRequest("DescribeRegionQps", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionQpsResponse({}));
  }

  async describeRegionQps(request: DescribeRegionQpsRequest): Promise<DescribeRegionQpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionQpsWithOptions(request, runtime);
  }

  async deleteDomainCertificateWithOptions(request: DeleteDomainCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDomainCertificateResponse>(await this.doRPCRequest("DeleteDomainCertificate", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDomainCertificateResponse({}));
  }

  async deleteDomainCertificate(request: DeleteDomainCertificateRequest): Promise<DeleteDomainCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainCertificateWithOptions(request, runtime);
  }

  async describeSignaturesWithOptions(request: DescribeSignaturesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSignaturesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSignaturesResponse>(await this.doRPCRequest("DescribeSignatures", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSignaturesResponse({}));
  }

  async describeSignatures(request: DescribeSignaturesRequest): Promise<DescribeSignaturesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSignaturesWithOptions(request, runtime);
  }

  async describeApiStageWithOptions(request: DescribeApiStageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiStageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeApiStageResponse>(await this.doRPCRequest("DescribeApiStage", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeApiStageResponse({}));
  }

  async describeApiStage(request: DescribeApiStageRequest): Promise<DescribeApiStageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiStageWithOptions(request, runtime);
  }

  async describeInstancePacketsWithOptions(request: DescribeInstancePacketsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancePacketsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstancePacketsResponse>(await this.doRPCRequest("DescribeInstancePackets", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstancePacketsResponse({}));
  }

  async describeInstancePackets(request: DescribeInstancePacketsRequest): Promise<DescribeInstancePacketsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancePacketsWithOptions(request, runtime);
  }

  async describeApisByTrafficControlWithOptions(request: DescribeApisByTrafficControlRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisByTrafficControlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeApisByTrafficControlResponse>(await this.doRPCRequest("DescribeApisByTrafficControl", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeApisByTrafficControlResponse({}));
  }

  async describeApisByTrafficControl(request: DescribeApisByTrafficControlRequest): Promise<DescribeApisByTrafficControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisByTrafficControlWithOptions(request, runtime);
  }

  async removeVpcAccessWithOptions(request: RemoveVpcAccessRequest, runtime: $Util.RuntimeOptions): Promise<RemoveVpcAccessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveVpcAccessResponse>(await this.doRPCRequest("RemoveVpcAccess", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveVpcAccessResponse({}));
  }

  async removeVpcAccess(request: RemoveVpcAccessRequest): Promise<RemoveVpcAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeVpcAccessWithOptions(request, runtime);
  }

  async deleteProductSpecsWithOptions(request: DeleteProductSpecsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProductSpecsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteProductSpecsResponse>(await this.doRPCRequest("DeleteProductSpecs", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteProductSpecsResponse({}));
  }

  async deleteProductSpecs(request: DeleteProductSpecsRequest): Promise<DeleteProductSpecsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProductSpecsWithOptions(request, runtime);
  }

  async describePluginsByApiWithOptions(request: DescribePluginsByApiRequest, runtime: $Util.RuntimeOptions): Promise<DescribePluginsByApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePluginsByApiResponse>(await this.doRPCRequest("DescribePluginsByApi", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePluginsByApiResponse({}));
  }

  async describePluginsByApi(request: DescribePluginsByApiRequest): Promise<DescribePluginsByApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePluginsByApiWithOptions(request, runtime);
  }

  async modifyIpControlWithOptions(request: ModifyIpControlRequest, runtime: $Util.RuntimeOptions): Promise<ModifyIpControlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyIpControlResponse>(await this.doRPCRequest("ModifyIpControl", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyIpControlResponse({}));
  }

  async modifyIpControl(request: ModifyIpControlRequest): Promise<ModifyIpControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyIpControlWithOptions(request, runtime);
  }

  async deleteInstanceWithOptions(request: DeleteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteInstanceResponse>(await this.doRPCRequest("DeleteInstance", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteInstanceResponse({}));
  }

  async deleteInstance(request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  async describeAppsWithOptions(request: DescribeAppsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAppsResponse>(await this.doRPCRequest("DescribeApps", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAppsResponse({}));
  }

  async describeApps(request: DescribeAppsRequest): Promise<DescribeAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppsWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async describeReadyNewApisWithOptions(request: DescribeReadyNewApisRequest, runtime: $Util.RuntimeOptions): Promise<DescribeReadyNewApisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeReadyNewApisResponse>(await this.doRPCRequest("DescribeReadyNewApis", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeReadyNewApisResponse({}));
  }

  async describeReadyNewApis(request: DescribeReadyNewApisRequest): Promise<DescribeReadyNewApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeReadyNewApisWithOptions(request, runtime);
  }

  async removeSignatureApisWithOptions(request: RemoveSignatureApisRequest, runtime: $Util.RuntimeOptions): Promise<RemoveSignatureApisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveSignatureApisResponse>(await this.doRPCRequest("RemoveSignatureApis", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveSignatureApisResponse({}));
  }

  async removeSignatureApis(request: RemoveSignatureApisRequest): Promise<RemoveSignatureApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeSignatureApisWithOptions(request, runtime);
  }

  async addIpControlPolicyItemWithOptions(request: AddIpControlPolicyItemRequest, runtime: $Util.RuntimeOptions): Promise<AddIpControlPolicyItemResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddIpControlPolicyItemResponse>(await this.doRPCRequest("AddIpControlPolicyItem", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new AddIpControlPolicyItemResponse({}));
  }

  async addIpControlPolicyItem(request: AddIpControlPolicyItemRequest): Promise<AddIpControlPolicyItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addIpControlPolicyItemWithOptions(request, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateInstanceResponse>(await this.doRPCRequest("CreateInstance", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new CreateInstanceResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  async describeDomainWithOptions(request: DescribeDomainRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainResponse>(await this.doRPCRequest("DescribeDomain", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainResponse({}));
  }

  async describeDomain(request: DescribeDomainRequest): Promise<DescribeDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainWithOptions(request, runtime);
  }

  async deleteModelWithOptions(request: DeleteModelRequest, runtime: $Util.RuntimeOptions): Promise<DeleteModelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteModelResponse>(await this.doRPCRequest("DeleteModel", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteModelResponse({}));
  }

  async deleteModel(request: DeleteModelRequest): Promise<DeleteModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteModelWithOptions(request, runtime);
  }

  async createModelWithOptions(request: CreateModelRequest, runtime: $Util.RuntimeOptions): Promise<CreateModelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateModelResponse>(await this.doRPCRequest("CreateModel", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new CreateModelResponse({}));
  }

  async createModel(request: CreateModelRequest): Promise<CreateModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createModelWithOptions(request, runtime);
  }

  async describeProductWithOptions(request: DescribeProductRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProductResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeProductResponse>(await this.doRPCRequest("DescribeProduct", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeProductResponse({}));
  }

  async describeProduct(request: DescribeProductRequest): Promise<DescribeProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProductWithOptions(request, runtime);
  }

  async describeIpControlsWithOptions(request: DescribeIpControlsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIpControlsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeIpControlsResponse>(await this.doRPCRequest("DescribeIpControls", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeIpControlsResponse({}));
  }

  async describeIpControls(request: DescribeIpControlsRequest): Promise<DescribeIpControlsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIpControlsWithOptions(request, runtime);
  }

  async importSwaggerWithOptions(tmpReq: ImportSwaggerRequest, runtime: $Util.RuntimeOptions): Promise<ImportSwaggerResponse> {
    Util.validateModel(tmpReq);
    let request = new ImportSwaggerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.globalCondition)) {
      request.globalConditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.globalCondition, "GlobalCondition", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImportSwaggerResponse>(await this.doRPCRequest("ImportSwagger", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new ImportSwaggerResponse({}));
  }

  async importSwagger(request: ImportSwaggerRequest): Promise<ImportSwaggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importSwaggerWithOptions(request, runtime);
  }

  async setGroupConfigSynchronizePolicyWithOptions(request: SetGroupConfigSynchronizePolicyRequest, runtime: $Util.RuntimeOptions): Promise<SetGroupConfigSynchronizePolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetGroupConfigSynchronizePolicyResponse>(await this.doRPCRequest("SetGroupConfigSynchronizePolicy", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetGroupConfigSynchronizePolicyResponse({}));
  }

  async setGroupConfigSynchronizePolicy(request: SetGroupConfigSynchronizePolicyRequest): Promise<SetGroupConfigSynchronizePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setGroupConfigSynchronizePolicyWithOptions(request, runtime);
  }

  async describeHistoryApisWithOptions(request: DescribeHistoryApisRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHistoryApisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHistoryApisResponse>(await this.doRPCRequest("DescribeHistoryApis", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHistoryApisResponse({}));
  }

  async describeHistoryApis(request: DescribeHistoryApisRequest): Promise<DescribeHistoryApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHistoryApisWithOptions(request, runtime);
  }

  async describeApiIpControlsWithOptions(request: DescribeApiIpControlsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiIpControlsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeApiIpControlsResponse>(await this.doRPCRequest("DescribeApiIpControls", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeApiIpControlsResponse({}));
  }

  async describeApiIpControls(request: DescribeApiIpControlsRequest): Promise<DescribeApiIpControlsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiIpControlsWithOptions(request, runtime);
  }

  async describeMarketRemainsQuotaWithOptions(request: DescribeMarketRemainsQuotaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMarketRemainsQuotaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMarketRemainsQuotaResponse>(await this.doRPCRequest("DescribeMarketRemainsQuota", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMarketRemainsQuotaResponse({}));
  }

  async describeMarketRemainsQuota(request: DescribeMarketRemainsQuotaRequest): Promise<DescribeMarketRemainsQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMarketRemainsQuotaWithOptions(request, runtime);
  }

  async createIpControlWithOptions(request: CreateIpControlRequest, runtime: $Util.RuntimeOptions): Promise<CreateIpControlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateIpControlResponse>(await this.doRPCRequest("CreateIpControl", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new CreateIpControlResponse({}));
  }

  async createIpControl(request: CreateIpControlRequest): Promise<CreateIpControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIpControlWithOptions(request, runtime);
  }

  async describePluginSchemasWithOptions(request: DescribePluginSchemasRequest, runtime: $Util.RuntimeOptions): Promise<DescribePluginSchemasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePluginSchemasResponse>(await this.doRPCRequest("DescribePluginSchemas", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePluginSchemasResponse({}));
  }

  async describePluginSchemas(request: DescribePluginSchemasRequest): Promise<DescribePluginSchemasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePluginSchemasWithOptions(request, runtime);
  }

  async createSignatureWithOptions(request: CreateSignatureRequest, runtime: $Util.RuntimeOptions): Promise<CreateSignatureResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSignatureResponse>(await this.doRPCRequest("CreateSignature", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSignatureResponse({}));
  }

  async createSignature(request: CreateSignatureRequest): Promise<CreateSignatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSignatureWithOptions(request, runtime);
  }

  async removeVpcAccessAndAbolishApisWithOptions(request: RemoveVpcAccessAndAbolishApisRequest, runtime: $Util.RuntimeOptions): Promise<RemoveVpcAccessAndAbolishApisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveVpcAccessAndAbolishApisResponse>(await this.doRPCRequest("RemoveVpcAccessAndAbolishApis", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveVpcAccessAndAbolishApisResponse({}));
  }

  async removeVpcAccessAndAbolishApis(request: RemoveVpcAccessAndAbolishApisRequest): Promise<RemoveVpcAccessAndAbolishApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeVpcAccessAndAbolishApisWithOptions(request, runtime);
  }

  async publishProductWithOptions(request: PublishProductRequest, runtime: $Util.RuntimeOptions): Promise<PublishProductResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PublishProductResponse>(await this.doRPCRequest("PublishProduct", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new PublishProductResponse({}));
  }

  async publishProduct(request: PublishProductRequest): Promise<PublishProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishProductWithOptions(request, runtime);
  }

  async createPartProductWithOptions(request: CreatePartProductRequest, runtime: $Util.RuntimeOptions): Promise<CreatePartProductResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreatePartProductResponse>(await this.doRPCRequest("CreatePartProduct", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new CreatePartProductResponse({}));
  }

  async createPartProduct(request: CreatePartProductRequest): Promise<CreatePartProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPartProductWithOptions(request, runtime);
  }

  async describeApiGroupVpcWhitelistWithOptions(request: DescribeApiGroupVpcWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiGroupVpcWhitelistResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeApiGroupVpcWhitelistResponse>(await this.doRPCRequest("DescribeApiGroupVpcWhitelist", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeApiGroupVpcWhitelistResponse({}));
  }

  async describeApiGroupVpcWhitelist(request: DescribeApiGroupVpcWhitelistRequest): Promise<DescribeApiGroupVpcWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiGroupVpcWhitelistWithOptions(request, runtime);
  }

  async batchUpdateApisVpcAccessWithOptions(request: BatchUpdateApisVpcAccessRequest, runtime: $Util.RuntimeOptions): Promise<BatchUpdateApisVpcAccessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchUpdateApisVpcAccessResponse>(await this.doRPCRequest("BatchUpdateApisVpcAccess", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new BatchUpdateApisVpcAccessResponse({}));
  }

  async batchUpdateApisVpcAccess(request: BatchUpdateApisVpcAccessRequest): Promise<BatchUpdateApisVpcAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUpdateApisVpcAccessWithOptions(request, runtime);
  }

  async describeRegionHttpCodeWithOptions(request: DescribeRegionHttpCodeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionHttpCodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionHttpCodeResponse>(await this.doRPCRequest("DescribeRegionHttpCode", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionHttpCodeResponse({}));
  }

  async describeRegionHttpCode(request: DescribeRegionHttpCodeRequest): Promise<DescribeRegionHttpCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionHttpCodeWithOptions(request, runtime);
  }

  async describeSyncFailApiTaskWithOptions(request: DescribeSyncFailApiTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSyncFailApiTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSyncFailApiTaskResponse>(await this.doRPCRequest("DescribeSyncFailApiTask", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSyncFailApiTaskResponse({}));
  }

  async describeSyncFailApiTask(request: DescribeSyncFailApiTaskRequest): Promise<DescribeSyncFailApiTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSyncFailApiTaskWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describePurchasedApisWithOptions(request: DescribePurchasedApisRequest, runtime: $Util.RuntimeOptions): Promise<DescribePurchasedApisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePurchasedApisResponse>(await this.doRPCRequest("DescribePurchasedApis", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePurchasedApisResponse({}));
  }

  async describePurchasedApis(request: DescribePurchasedApisRequest): Promise<DescribePurchasedApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePurchasedApisWithOptions(request, runtime);
  }

  async describeTrafficControlsByApiWithOptions(request: DescribeTrafficControlsByApiRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTrafficControlsByApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTrafficControlsByApiResponse>(await this.doRPCRequest("DescribeTrafficControlsByApi", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTrafficControlsByApiResponse({}));
  }

  async describeTrafficControlsByApi(request: DescribeTrafficControlsByApiRequest): Promise<DescribeTrafficControlsByApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTrafficControlsByApiWithOptions(request, runtime);
  }

  async describeDeployedApisWithOptions(request: DescribeDeployedApisRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeployedApisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDeployedApisResponse>(await this.doRPCRequest("DescribeDeployedApis", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDeployedApisResponse({}));
  }

  async describeDeployedApis(request: DescribeDeployedApisRequest): Promise<DescribeDeployedApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeployedApisWithOptions(request, runtime);
  }

  async removeAppsAuthoritiesWithOptions(request: RemoveAppsAuthoritiesRequest, runtime: $Util.RuntimeOptions): Promise<RemoveAppsAuthoritiesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveAppsAuthoritiesResponse>(await this.doRPCRequest("RemoveAppsAuthorities", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveAppsAuthoritiesResponse({}));
  }

  async removeAppsAuthorities(request: RemoveAppsAuthoritiesRequest): Promise<RemoveAppsAuthoritiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeAppsAuthoritiesWithOptions(request, runtime);
  }

  async deleteLogConfigWithOptions(request: DeleteLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLogConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLogConfigResponse>(await this.doRPCRequest("DeleteLogConfig", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLogConfigResponse({}));
  }

  async deleteLogConfig(request: DeleteLogConfigRequest): Promise<DeleteLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLogConfigWithOptions(request, runtime);
  }

  async reactivateDomainWithOptions(request: ReactivateDomainRequest, runtime: $Util.RuntimeOptions): Promise<ReactivateDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReactivateDomainResponse>(await this.doRPCRequest("ReactivateDomain", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new ReactivateDomainResponse({}));
  }

  async reactivateDomain(request: ReactivateDomainRequest): Promise<ReactivateDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reactivateDomainWithOptions(request, runtime);
  }

  async describeAuthorizedApisWithOptions(request: DescribeAuthorizedApisRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAuthorizedApisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAuthorizedApisResponse>(await this.doRPCRequest("DescribeAuthorizedApis", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAuthorizedApisResponse({}));
  }

  async describeAuthorizedApis(request: DescribeAuthorizedApisRequest): Promise<DescribeAuthorizedApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAuthorizedApisWithOptions(request, runtime);
  }

  async createProductSpecsWithOptions(request: CreateProductSpecsRequest, runtime: $Util.RuntimeOptions): Promise<CreateProductSpecsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateProductSpecsResponse>(await this.doRPCRequest("CreateProductSpecs", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new CreateProductSpecsResponse({}));
  }

  async createProductSpecs(request: CreateProductSpecsRequest): Promise<CreateProductSpecsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProductSpecsWithOptions(request, runtime);
  }

  async modifyTrafficControlWithOptions(request: ModifyTrafficControlRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTrafficControlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyTrafficControlResponse>(await this.doRPCRequest("ModifyTrafficControl", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyTrafficControlResponse({}));
  }

  async modifyTrafficControl(request: ModifyTrafficControlRequest): Promise<ModifyTrafficControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTrafficControlWithOptions(request, runtime);
  }

  async createLogConfigWithOptions(request: CreateLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateLogConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateLogConfigResponse>(await this.doRPCRequest("CreateLogConfig", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new CreateLogConfigResponse({}));
  }

  async createLogConfig(request: CreateLogConfigRequest): Promise<CreateLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLogConfigWithOptions(request, runtime);
  }

  async setTrafficControlApisWithOptions(request: SetTrafficControlApisRequest, runtime: $Util.RuntimeOptions): Promise<SetTrafficControlApisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetTrafficControlApisResponse>(await this.doRPCRequest("SetTrafficControlApis", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetTrafficControlApisResponse({}));
  }

  async setTrafficControlApis(request: SetTrafficControlApisRequest): Promise<SetTrafficControlApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setTrafficControlApisWithOptions(request, runtime);
  }

  async abolishProductWithOptions(request: AbolishProductRequest, runtime: $Util.RuntimeOptions): Promise<AbolishProductResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AbolishProductResponse>(await this.doRPCRequest("AbolishProduct", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new AbolishProductResponse({}));
  }

  async abolishProduct(request: AbolishProductRequest): Promise<AbolishProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abolishProductWithOptions(request, runtime);
  }

  async openApiGatewayServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<OpenApiGatewayServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<OpenApiGatewayServiceResponse>(await this.doRPCRequest("OpenApiGatewayService", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new OpenApiGatewayServiceResponse({}));
  }

  async openApiGatewayService(): Promise<OpenApiGatewayServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openApiGatewayServiceWithOptions(runtime);
  }

  async switchApiWithOptions(request: SwitchApiRequest, runtime: $Util.RuntimeOptions): Promise<SwitchApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SwitchApiResponse>(await this.doRPCRequest("SwitchApi", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new SwitchApiResponse({}));
  }

  async switchApi(request: SwitchApiRequest): Promise<SwitchApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchApiWithOptions(request, runtime);
  }

  async describeVpcAccessesWithOptions(request: DescribeVpcAccessesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcAccessesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVpcAccessesResponse>(await this.doRPCRequest("DescribeVpcAccesses", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVpcAccessesResponse({}));
  }

  async describeVpcAccesses(request: DescribeVpcAccessesRequest): Promise<DescribeVpcAccessesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcAccessesWithOptions(request, runtime);
  }

  async describeInstanceSlbConnectWithOptions(request: DescribeInstanceSlbConnectRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceSlbConnectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceSlbConnectResponse>(await this.doRPCRequest("DescribeInstanceSlbConnect", "2016-07-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceSlbConnectResponse({}));
  }

  async describeInstanceSlbConnect(request: DescribeInstanceSlbConnectRequest): Promise<DescribeInstanceSlbConnectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceSlbConnectWithOptions(request, runtime);
  }

}
