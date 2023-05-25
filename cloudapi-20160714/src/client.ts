// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AbolishApiRequest extends $tea.Model {
  apiId?: string;
  groupId?: string;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: AbolishApiResponseBody;
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
      body: AbolishApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAccessControlListEntryRequest extends $tea.Model {
  aclEntrys?: string;
  aclId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntrys: 'AclEntrys',
      aclId: 'AclId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntrys: 'string',
      aclId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAccessControlListEntryResponseBody extends $tea.Model {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: AddAccessControlListEntryResponseBody;
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

export class AddIpControlPolicyItemRequest extends $tea.Model {
  appId?: string;
  cidrIp?: string;
  ipControlId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cidrIp: 'CidrIp',
      ipControlId: 'IpControlId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cidrIp: 'string',
      ipControlId: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: AddIpControlPolicyItemResponseBody;
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
      body: AddIpControlPolicyItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTrafficSpecialControlRequest extends $tea.Model {
  securityToken?: string;
  specialKey?: string;
  specialType?: string;
  trafficControlId?: string;
  trafficValue?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      specialKey: 'SpecialKey',
      specialType: 'SpecialType',
      trafficControlId: 'TrafficControlId',
      trafficValue: 'TrafficValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      specialKey: 'string',
      specialType: 'string',
      trafficControlId: 'string',
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
  statusCode: number;
  body: AddTrafficSpecialControlResponseBody;
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
      body: AddTrafficSpecialControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachPluginRequest extends $tea.Model {
  apiId?: string;
  apiIds?: string;
  groupId?: string;
  pluginId?: string;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiIds: 'ApiIds',
      groupId: 'GroupId',
      pluginId: 'PluginId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiIds: 'string',
      groupId: 'string',
      pluginId: 'string',
      securityToken: 'string',
      stageName: 'string',
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
  statusCode: number;
  body: AttachPluginResponseBody;
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
      body: AttachPluginResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAbolishApisRequest extends $tea.Model {
  api?: BatchAbolishApisRequestApi[];
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      api: 'Api',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: { 'type': 'array', 'itemType': BatchAbolishApisRequestApi },
      securityToken: 'string',
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
  statusCode: number;
  body: BatchAbolishApisResponseBody;
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
      body: BatchAbolishApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeployApisRequest extends $tea.Model {
  api?: BatchDeployApisRequestApi[];
  description?: string;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      api: 'Api',
      description: 'Description',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: { 'type': 'array', 'itemType': BatchDeployApisRequestApi },
      description: 'string',
      securityToken: 'string',
      stageName: 'string',
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
  statusCode: number;
  body: BatchDeployApisResponseBody;
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
      body: BatchDeployApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessControlListRequest extends $tea.Model {
  aclName?: string;
  addressIPVersion?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      aclName: 'AclName',
      addressIPVersion: 'AddressIPVersion',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclName: 'string',
      addressIPVersion: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessControlListResponseBody extends $tea.Model {
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

export class CreateAccessControlListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAccessControlListResponseBody;
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

export class CreateApiRequest extends $tea.Model {
  allowSignatureMethod?: string;
  apiName?: string;
  appCodeAuthType?: string;
  authType?: string;
  backendEnable?: boolean;
  backendId?: string;
  constantParameters?: string;
  description?: string;
  disableInternet?: boolean;
  errorCodeSamples?: string;
  failResultSample?: string;
  forceNonceCheck?: boolean;
  groupId?: string;
  openIdConnectConfig?: string;
  requestConfig?: string;
  requestParameters?: string;
  resultBodyModel?: string;
  resultDescriptions?: string;
  resultSample?: string;
  resultType?: string;
  securityToken?: string;
  serviceConfig?: string;
  serviceParameters?: string;
  serviceParametersMap?: string;
  systemParameters?: string;
  visibility?: string;
  webSocketApiType?: string;
  static names(): { [key: string]: string } {
    return {
      allowSignatureMethod: 'AllowSignatureMethod',
      apiName: 'ApiName',
      appCodeAuthType: 'AppCodeAuthType',
      authType: 'AuthType',
      backendEnable: 'BackendEnable',
      backendId: 'BackendId',
      constantParameters: 'ConstantParameters',
      description: 'Description',
      disableInternet: 'DisableInternet',
      errorCodeSamples: 'ErrorCodeSamples',
      failResultSample: 'FailResultSample',
      forceNonceCheck: 'ForceNonceCheck',
      groupId: 'GroupId',
      openIdConnectConfig: 'OpenIdConnectConfig',
      requestConfig: 'RequestConfig',
      requestParameters: 'RequestParameters',
      resultBodyModel: 'ResultBodyModel',
      resultDescriptions: 'ResultDescriptions',
      resultSample: 'ResultSample',
      resultType: 'ResultType',
      securityToken: 'SecurityToken',
      serviceConfig: 'ServiceConfig',
      serviceParameters: 'ServiceParameters',
      serviceParametersMap: 'ServiceParametersMap',
      systemParameters: 'SystemParameters',
      visibility: 'Visibility',
      webSocketApiType: 'WebSocketApiType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowSignatureMethod: 'string',
      apiName: 'string',
      appCodeAuthType: 'string',
      authType: 'string',
      backendEnable: 'boolean',
      backendId: 'string',
      constantParameters: 'string',
      description: 'string',
      disableInternet: 'boolean',
      errorCodeSamples: 'string',
      failResultSample: 'string',
      forceNonceCheck: 'boolean',
      groupId: 'string',
      openIdConnectConfig: 'string',
      requestConfig: 'string',
      requestParameters: 'string',
      resultBodyModel: 'string',
      resultDescriptions: 'string',
      resultSample: 'string',
      resultType: 'string',
      securityToken: 'string',
      serviceConfig: 'string',
      serviceParameters: 'string',
      serviceParametersMap: 'string',
      systemParameters: 'string',
      visibility: 'string',
      webSocketApiType: 'string',
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
  statusCode: number;
  body: CreateApiResponseBody;
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
      body: CreateApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApiGroupRequest extends $tea.Model {
  basePath?: string;
  description?: string;
  groupName?: string;
  instanceId?: string;
  securityToken?: string;
  tag?: CreateApiGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      basePath: 'BasePath',
      description: 'Description',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basePath: 'string',
      description: 'string',
      groupName: 'string',
      instanceId: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': CreateApiGroupRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApiGroupResponseBody extends $tea.Model {
  basePath?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  instanceId?: string;
  instanceType?: string;
  requestId?: string;
  subDomain?: string;
  tagStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      basePath: 'BasePath',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      requestId: 'RequestId',
      subDomain: 'SubDomain',
      tagStatus: 'TagStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basePath: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      instanceId: 'string',
      instanceType: 'string',
      requestId: 'string',
      subDomain: 'string',
      tagStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApiGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateApiGroupResponseBody;
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
      body: CreateApiGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApiStageVariableRequest extends $tea.Model {
  groupId?: string;
  securityToken?: string;
  stageId?: string;
  stageRouteModel?: string;
  supportRoute?: boolean;
  variableName?: string;
  variableValue?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageId: 'StageId',
      stageRouteModel: 'StageRouteModel',
      supportRoute: 'SupportRoute',
      variableName: 'VariableName',
      variableValue: 'VariableValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      securityToken: 'string',
      stageId: 'string',
      stageRouteModel: 'string',
      supportRoute: 'boolean',
      variableName: 'string',
      variableValue: 'string',
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
  statusCode: number;
  body: CreateApiStageVariableResponseBody;
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
      body: CreateApiStageVariableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequest extends $tea.Model {
  appCode?: string;
  appKey?: string;
  appName?: string;
  appSecret?: string;
  description?: string;
  securityToken?: string;
  tag?: CreateAppRequestTag[];
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appKey: 'AppKey',
      appName: 'AppName',
      appSecret: 'AppSecret',
      description: 'Description',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appKey: 'string',
      appName: 'string',
      appSecret: 'string',
      description: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': CreateAppRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBody extends $tea.Model {
  appId?: number;
  requestId?: string;
  tagStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestId: 'RequestId',
      tagStatus: 'TagStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      requestId: 'string',
      tagStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppResponseBody;
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
      body: CreateAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackendRequest extends $tea.Model {
  backendName?: string;
  backendType?: string;
  createEventBridgeServiceLinkedRole?: boolean;
  description?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      backendName: 'BackendName',
      backendType: 'BackendType',
      createEventBridgeServiceLinkedRole: 'CreateEventBridgeServiceLinkedRole',
      description: 'Description',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendName: 'string',
      backendType: 'string',
      createEventBridgeServiceLinkedRole: 'boolean',
      description: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackendResponseBody extends $tea.Model {
  backendId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackendResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateBackendResponseBody;
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
      body: CreateBackendResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackendModelRequest extends $tea.Model {
  backendId?: string;
  backendModelData?: string;
  backendType?: string;
  description?: string;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      backendModelData: 'BackendModelData',
      backendType: 'BackendType',
      description: 'Description',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      backendModelData: 'string',
      backendType: 'string',
      description: 'string',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackendModelResponseBody extends $tea.Model {
  backendModelId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backendModelId: 'BackendModelId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendModelId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackendModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateBackendModelResponseBody;
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
      body: CreateBackendModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequest extends $tea.Model {
  datasetName?: string;
  datasetType?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      datasetType: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetResponseBody extends $tea.Model {
  datasetId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDatasetResponseBody;
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
      body: CreateDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetItemRequest extends $tea.Model {
  datasetId?: string;
  description?: string;
  expiredTime?: string;
  securityToken?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      securityToken: 'SecurityToken',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      description: 'string',
      expiredTime: 'string',
      securityToken: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetItemResponseBody extends $tea.Model {
  datasetItemId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetItemId: 'DatasetItemId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetItemId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDatasetItemResponseBody;
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
      body: CreateDatasetItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  autoPay?: boolean;
  chargeType?: string;
  duration?: number;
  httpsPolicy?: string;
  instanceCidr?: string;
  instanceName?: string;
  instanceSpec?: string;
  instanceType?: string;
  pricingCycle?: string;
  tag?: CreateInstanceRequestTag[];
  token?: string;
  userVpcId?: string;
  zoneId?: string;
  zoneVSwitchSecurityGroup?: CreateInstanceRequestZoneVSwitchSecurityGroup[];
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      chargeType: 'ChargeType',
      duration: 'Duration',
      httpsPolicy: 'HttpsPolicy',
      instanceCidr: 'InstanceCidr',
      instanceName: 'InstanceName',
      instanceSpec: 'InstanceSpec',
      instanceType: 'InstanceType',
      pricingCycle: 'PricingCycle',
      tag: 'Tag',
      token: 'Token',
      userVpcId: 'UserVpcId',
      zoneId: 'ZoneId',
      zoneVSwitchSecurityGroup: 'ZoneVSwitchSecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      chargeType: 'string',
      duration: 'number',
      httpsPolicy: 'string',
      instanceCidr: 'string',
      instanceName: 'string',
      instanceSpec: 'string',
      instanceType: 'string',
      pricingCycle: 'string',
      tag: { 'type': 'array', 'itemType': CreateInstanceRequestTag },
      token: 'string',
      userVpcId: 'string',
      zoneId: 'string',
      zoneVSwitchSecurityGroup: { 'type': 'array', 'itemType': CreateInstanceRequestZoneVSwitchSecurityGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  instanceId?: string;
  requestId?: string;
  tagStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      tagStatus: 'TagStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
      tagStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateInstanceResponseBody;
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
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntranetDomainRequest extends $tea.Model {
  groupId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: CreateIntranetDomainResponseBody;
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
      body: CreateIntranetDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpControlRequest extends $tea.Model {
  description?: string;
  ipControlName?: string;
  ipControlPolicys?: CreateIpControlRequestIpControlPolicys[];
  ipControlType?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ipControlName: 'IpControlName',
      ipControlPolicys: 'IpControlPolicys',
      ipControlType: 'IpControlType',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ipControlName: 'string',
      ipControlPolicys: { 'type': 'array', 'itemType': CreateIpControlRequestIpControlPolicys },
      ipControlType: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: CreateIpControlResponseBody;
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
      body: CreateIpControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLogConfigRequest extends $tea.Model {
  logType?: string;
  securityToken?: string;
  slsLogStore?: string;
  slsProject?: string;
  static names(): { [key: string]: string } {
    return {
      logType: 'LogType',
      securityToken: 'SecurityToken',
      slsLogStore: 'SlsLogStore',
      slsProject: 'SlsProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logType: 'string',
      securityToken: 'string',
      slsLogStore: 'string',
      slsProject: 'string',
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
  statusCode: number;
  body: CreateLogConfigResponseBody;
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
      body: CreateLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelRequest extends $tea.Model {
  description?: string;
  groupId?: string;
  modelName?: string;
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      modelName: 'ModelName',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      modelName: 'string',
      schema: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelResponseBody extends $tea.Model {
  createdTime?: string;
  description?: string;
  groupId?: string;
  modelId?: string;
  modelName?: string;
  modelRef?: string;
  modifiedTime?: string;
  regionId?: string;
  requestId?: string;
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      groupId: 'GroupId',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelRef: 'ModelRef',
      modifiedTime: 'ModifiedTime',
      regionId: 'RegionId',
      requestId: 'RequestId',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      groupId: 'string',
      modelId: 'string',
      modelName: 'string',
      modelRef: 'string',
      modifiedTime: 'string',
      regionId: 'string',
      requestId: 'string',
      schema: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateModelResponseBody;
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
      body: CreateModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupRequest extends $tea.Model {
  auth?: string;
  groupId?: string;
  rawMonitorGroupId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      auth: 'Auth',
      groupId: 'GroupId',
      rawMonitorGroupId: 'RawMonitorGroupId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth: 'string',
      groupId: 'string',
      rawMonitorGroupId: 'number',
      securityToken: 'string',
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
  statusCode: number;
  body: CreateMonitorGroupResponseBody;
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
      body: CreateMonitorGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePluginRequest extends $tea.Model {
  description?: string;
  pluginData?: string;
  pluginName?: string;
  pluginType?: string;
  securityToken?: string;
  tag?: CreatePluginRequestTag[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      pluginData: 'PluginData',
      pluginName: 'PluginName',
      pluginType: 'PluginType',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      pluginData: 'string',
      pluginName: 'string',
      pluginType: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': CreatePluginRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePluginResponseBody extends $tea.Model {
  pluginId?: string;
  requestId?: string;
  tagStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      pluginId: 'PluginId',
      requestId: 'RequestId',
      tagStatus: 'TagStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginId: 'string',
      requestId: 'string',
      tagStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePluginResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreatePluginResponseBody;
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
      body: CreatePluginResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSignatureRequest extends $tea.Model {
  securityToken?: string;
  signatureKey?: string;
  signatureName?: string;
  signatureSecret?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      signatureKey: 'SignatureKey',
      signatureName: 'SignatureName',
      signatureSecret: 'SignatureSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      signatureKey: 'string',
      signatureName: 'string',
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
  statusCode: number;
  body: CreateSignatureResponseBody;
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
      body: CreateSignatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrafficControlRequest extends $tea.Model {
  apiDefault?: number;
  appDefault?: number;
  description?: string;
  securityToken?: string;
  trafficControlName?: string;
  trafficControlUnit?: string;
  userDefault?: number;
  static names(): { [key: string]: string } {
    return {
      apiDefault: 'ApiDefault',
      appDefault: 'AppDefault',
      description: 'Description',
      securityToken: 'SecurityToken',
      trafficControlName: 'TrafficControlName',
      trafficControlUnit: 'TrafficControlUnit',
      userDefault: 'UserDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDefault: 'number',
      appDefault: 'number',
      description: 'string',
      securityToken: 'string',
      trafficControlName: 'string',
      trafficControlUnit: 'string',
      userDefault: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrafficControlResponseBody extends $tea.Model {
  requestId?: string;
  trafficControlId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficControlId: 'TrafficControlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficControlId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrafficControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTrafficControlResponseBody;
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
      body: CreateTrafficControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessControlListRequest extends $tea.Model {
  aclId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessControlListResponseBody extends $tea.Model {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAccessControlListResponseBody;
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
  statusCode: number;
  body: DeleteAllTrafficSpecialControlResponseBody;
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
      body: DeleteAllTrafficSpecialControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApiRequest extends $tea.Model {
  apiId?: string;
  groupId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: DeleteApiResponseBody;
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
      body: DeleteApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApiGroupRequest extends $tea.Model {
  groupId?: string;
  securityToken?: string;
  tag?: DeleteApiGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: DeleteApiGroupResponseBody;
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
      body: DeleteApiGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApiStageVariableRequest extends $tea.Model {
  groupId?: string;
  securityToken?: string;
  stageId?: string;
  variableName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageId: 'StageId',
      variableName: 'VariableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: DeleteApiStageVariableResponseBody;
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
      body: DeleteApiStageVariableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppRequest extends $tea.Model {
  appId?: number;
  securityToken?: string;
  tag?: DeleteAppRequestTag[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      securityToken: 'string',
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
  statusCode: number;
  body: DeleteAppResponseBody;
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
      body: DeleteAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackendRequest extends $tea.Model {
  backendId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackendResponseBody extends $tea.Model {
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

export class DeleteBackendResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteBackendResponseBody;
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
      body: DeleteBackendResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackendModelRequest extends $tea.Model {
  backendId?: string;
  backendModelId?: string;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      backendModelId: 'BackendModelId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      backendModelId: 'string',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackendModelResponseBody extends $tea.Model {
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

export class DeleteBackendModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteBackendModelResponseBody;
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
      body: DeleteBackendModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetRequest extends $tea.Model {
  datasetId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetResponseBody extends $tea.Model {
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

export class DeleteDatasetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDatasetResponseBody;
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
      body: DeleteDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetItemRequest extends $tea.Model {
  datasetId?: string;
  datasetItemId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetItemId: 'DatasetItemId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      datasetItemId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetItemResponseBody extends $tea.Model {
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

export class DeleteDatasetItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDatasetItemResponseBody;
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
      body: DeleteDatasetItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRequest extends $tea.Model {
  domainName?: string;
  groupId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      groupId: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: DeleteDomainResponseBody;
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
      body: DeleteDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainCertificateRequest extends $tea.Model {
  certificateId?: string;
  domainName?: string;
  groupId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      domainName: 'DomainName',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      domainName: 'string',
      groupId: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: DeleteDomainCertificateResponseBody;
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
      body: DeleteDomainCertificateResponseBody,
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
  statusCode: number;
  body: DeleteInstanceResponseBody;
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
      body: DeleteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpControlRequest extends $tea.Model {
  ipControlId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ipControlId: 'IpControlId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipControlId: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: DeleteIpControlResponseBody;
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
      body: DeleteIpControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLogConfigRequest extends $tea.Model {
  logType?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      logType: 'LogType',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logType: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: DeleteLogConfigResponseBody;
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
      body: DeleteLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelRequest extends $tea.Model {
  groupId?: string;
  modelName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      modelName: 'ModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      modelName: 'string',
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
  statusCode: number;
  body: DeleteModelResponseBody;
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
      body: DeleteModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupRequest extends $tea.Model {
  groupId?: string;
  rawMonitorGroupId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      rawMonitorGroupId: 'RawMonitorGroupId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      rawMonitorGroupId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupResponseBody extends $tea.Model {
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

export class DeleteMonitorGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMonitorGroupResponseBody;
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
      body: DeleteMonitorGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePluginRequest extends $tea.Model {
  pluginId?: string;
  securityToken?: string;
  tag?: DeletePluginRequestTag[];
  static names(): { [key: string]: string } {
    return {
      pluginId: 'PluginId',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginId: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: DeletePluginResponseBody;
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
      body: DeletePluginResponseBody,
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
  statusCode: number;
  body: DeleteSignatureResponseBody;
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
  statusCode: number;
  body: DeleteTrafficControlResponseBody;
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
      body: DeleteTrafficControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrafficSpecialControlRequest extends $tea.Model {
  securityToken?: string;
  specialKey?: string;
  specialType?: string;
  trafficControlId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      specialKey: 'SpecialKey',
      specialType: 'SpecialType',
      trafficControlId: 'TrafficControlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      specialKey: 'string',
      specialType: 'string',
      trafficControlId: 'string',
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
  statusCode: number;
  body: DeleteTrafficSpecialControlResponseBody;
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
      body: DeleteTrafficSpecialControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployApiRequest extends $tea.Model {
  apiId?: string;
  description?: string;
  groupId?: string;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      description: 'Description',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      description: 'string',
      groupId: 'string',
      securityToken: 'string',
      stageName: 'string',
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
  statusCode: number;
  body: DeployApiResponseBody;
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
      body: DeployApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAbolishApiTaskRequest extends $tea.Model {
  operationUid?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      operationUid: 'OperationUid',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationUid: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAbolishApiTaskResponseBody extends $tea.Model {
  apiAbolishResults?: DescribeAbolishApiTaskResponseBodyApiAbolishResults;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiAbolishResults: 'ApiAbolishResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiAbolishResults: DescribeAbolishApiTaskResponseBodyApiAbolishResults,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAbolishApiTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAbolishApiTaskResponseBody;
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
      body: DescribeAbolishApiTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListAttributeRequest extends $tea.Model {
  aclId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListAttributeResponseBody extends $tea.Model {
  aclEntrys?: DescribeAccessControlListAttributeResponseBodyAclEntrys;
  aclId?: string;
  aclName?: string;
  isUsed?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntrys: 'AclEntrys',
      aclId: 'AclId',
      aclName: 'AclName',
      isUsed: 'IsUsed',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntrys: DescribeAccessControlListAttributeResponseBodyAclEntrys,
      aclId: 'string',
      aclName: 'string',
      isUsed: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAccessControlListAttributeResponseBody;
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
  aclName?: string;
  addressIPVersion?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      aclName: 'AclName',
      addressIPVersion: 'AddressIPVersion',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclName: 'string',
      addressIPVersion: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListsResponseBody extends $tea.Model {
  acls?: DescribeAccessControlListsResponseBodyAcls;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      acls: 'Acls',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acls: DescribeAccessControlListsResponseBodyAcls,
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAccessControlListsResponseBody;
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

export class DescribeApiRequest extends $tea.Model {
  apiId?: string;
  groupId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBody extends $tea.Model {
  allowSignatureMethod?: string;
  apiId?: string;
  apiName?: string;
  appCodeAuthType?: string;
  authType?: string;
  backendConfig?: DescribeApiResponseBodyBackendConfig;
  backendEnable?: boolean;
  constantParameters?: DescribeApiResponseBodyConstantParameters;
  createdTime?: string;
  customSystemParameters?: DescribeApiResponseBodyCustomSystemParameters;
  deployedInfos?: DescribeApiResponseBodyDeployedInfos;
  description?: string;
  disableInternet?: boolean;
  errorCodeSamples?: DescribeApiResponseBodyErrorCodeSamples;
  failResultSample?: string;
  forceNonceCheck?: boolean;
  groupId?: string;
  groupName?: string;
  mock?: string;
  mockResult?: string;
  modifiedTime?: string;
  openIdConnectConfig?: DescribeApiResponseBodyOpenIdConnectConfig;
  regionId?: string;
  requestConfig?: DescribeApiResponseBodyRequestConfig;
  requestId?: string;
  requestParameters?: DescribeApiResponseBodyRequestParameters;
  resultBodyModel?: string;
  resultDescriptions?: DescribeApiResponseBodyResultDescriptions;
  resultSample?: string;
  resultType?: string;
  serviceConfig?: DescribeApiResponseBodyServiceConfig;
  serviceParameters?: DescribeApiResponseBodyServiceParameters;
  serviceParametersMap?: DescribeApiResponseBodyServiceParametersMap;
  systemParameters?: DescribeApiResponseBodySystemParameters;
  visibility?: string;
  webSocketApiType?: string;
  static names(): { [key: string]: string } {
    return {
      allowSignatureMethod: 'AllowSignatureMethod',
      apiId: 'ApiId',
      apiName: 'ApiName',
      appCodeAuthType: 'AppCodeAuthType',
      authType: 'AuthType',
      backendConfig: 'BackendConfig',
      backendEnable: 'BackendEnable',
      constantParameters: 'ConstantParameters',
      createdTime: 'CreatedTime',
      customSystemParameters: 'CustomSystemParameters',
      deployedInfos: 'DeployedInfos',
      description: 'Description',
      disableInternet: 'DisableInternet',
      errorCodeSamples: 'ErrorCodeSamples',
      failResultSample: 'FailResultSample',
      forceNonceCheck: 'ForceNonceCheck',
      groupId: 'GroupId',
      groupName: 'GroupName',
      mock: 'Mock',
      mockResult: 'MockResult',
      modifiedTime: 'ModifiedTime',
      openIdConnectConfig: 'OpenIdConnectConfig',
      regionId: 'RegionId',
      requestConfig: 'RequestConfig',
      requestId: 'RequestId',
      requestParameters: 'RequestParameters',
      resultBodyModel: 'ResultBodyModel',
      resultDescriptions: 'ResultDescriptions',
      resultSample: 'ResultSample',
      resultType: 'ResultType',
      serviceConfig: 'ServiceConfig',
      serviceParameters: 'ServiceParameters',
      serviceParametersMap: 'ServiceParametersMap',
      systemParameters: 'SystemParameters',
      visibility: 'Visibility',
      webSocketApiType: 'WebSocketApiType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowSignatureMethod: 'string',
      apiId: 'string',
      apiName: 'string',
      appCodeAuthType: 'string',
      authType: 'string',
      backendConfig: DescribeApiResponseBodyBackendConfig,
      backendEnable: 'boolean',
      constantParameters: DescribeApiResponseBodyConstantParameters,
      createdTime: 'string',
      customSystemParameters: DescribeApiResponseBodyCustomSystemParameters,
      deployedInfos: DescribeApiResponseBodyDeployedInfos,
      description: 'string',
      disableInternet: 'boolean',
      errorCodeSamples: DescribeApiResponseBodyErrorCodeSamples,
      failResultSample: 'string',
      forceNonceCheck: 'boolean',
      groupId: 'string',
      groupName: 'string',
      mock: 'string',
      mockResult: 'string',
      modifiedTime: 'string',
      openIdConnectConfig: DescribeApiResponseBodyOpenIdConnectConfig,
      regionId: 'string',
      requestConfig: DescribeApiResponseBodyRequestConfig,
      requestId: 'string',
      requestParameters: DescribeApiResponseBodyRequestParameters,
      resultBodyModel: 'string',
      resultDescriptions: DescribeApiResponseBodyResultDescriptions,
      resultSample: 'string',
      resultType: 'string',
      serviceConfig: DescribeApiResponseBodyServiceConfig,
      serviceParameters: DescribeApiResponseBodyServiceParameters,
      serviceParametersMap: DescribeApiResponseBodyServiceParametersMap,
      systemParameters: DescribeApiResponseBodySystemParameters,
      visibility: 'string',
      webSocketApiType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApiResponseBody;
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
      body: DescribeApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiDocRequest extends $tea.Model {
  apiId?: string;
  groupId?: string;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiDocResponseBody extends $tea.Model {
  apiId?: string;
  apiName?: string;
  authType?: string;
  deployedTime?: string;
  description?: string;
  disableInternet?: boolean;
  errorCodeSamples?: DescribeApiDocResponseBodyErrorCodeSamples;
  failResultSample?: string;
  forceNonceCheck?: boolean;
  groupId?: string;
  groupName?: string;
  regionId?: string;
  requestConfig?: DescribeApiDocResponseBodyRequestConfig;
  requestId?: string;
  requestParameters?: DescribeApiDocResponseBodyRequestParameters;
  resultDescriptions?: DescribeApiDocResponseBodyResultDescriptions;
  resultSample?: string;
  resultType?: string;
  stageName?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      authType: 'AuthType',
      deployedTime: 'DeployedTime',
      description: 'Description',
      disableInternet: 'DisableInternet',
      errorCodeSamples: 'ErrorCodeSamples',
      failResultSample: 'FailResultSample',
      forceNonceCheck: 'ForceNonceCheck',
      groupId: 'GroupId',
      groupName: 'GroupName',
      regionId: 'RegionId',
      requestConfig: 'RequestConfig',
      requestId: 'RequestId',
      requestParameters: 'RequestParameters',
      resultDescriptions: 'ResultDescriptions',
      resultSample: 'ResultSample',
      resultType: 'ResultType',
      stageName: 'StageName',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      authType: 'string',
      deployedTime: 'string',
      description: 'string',
      disableInternet: 'boolean',
      errorCodeSamples: DescribeApiDocResponseBodyErrorCodeSamples,
      failResultSample: 'string',
      forceNonceCheck: 'boolean',
      groupId: 'string',
      groupName: 'string',
      regionId: 'string',
      requestConfig: DescribeApiDocResponseBodyRequestConfig,
      requestId: 'string',
      requestParameters: DescribeApiDocResponseBodyRequestParameters,
      resultDescriptions: DescribeApiDocResponseBodyResultDescriptions,
      resultSample: 'string',
      resultType: 'string',
      stageName: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiDocResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApiDocResponseBody;
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
      body: DescribeApiDocResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupRequest extends $tea.Model {
  groupId?: string;
  securityToken?: string;
  tag?: DescribeApiGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': DescribeApiGroupRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupResponseBody extends $tea.Model {
  basePath?: string;
  billingStatus?: string;
  classicVpcSubDomain?: string;
  cloudMarketCommodity?: boolean;
  cmsMonitorGroup?: string;
  compatibleFlags?: string;
  createdTime?: string;
  customDomains?: DescribeApiGroupResponseBodyCustomDomains;
  customTraceConfig?: string;
  customerConfigs?: string;
  dedicatedInstanceType?: string;
  defaultDomain?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  httpsPolicy?: string;
  illegalStatus?: string;
  instanceId?: string;
  instanceType?: string;
  instanceVipList?: string;
  ipv6Status?: string;
  modifiedTime?: string;
  passthroughHeaders?: string;
  regionId?: string;
  requestId?: string;
  rpcPattern?: string;
  stageItems?: DescribeApiGroupResponseBodyStageItems;
  status?: string;
  subDomain?: string;
  trafficLimit?: number;
  userLogConfig?: string;
  vpcDomain?: string;
  vpcSlbIntranetDomain?: string;
  static names(): { [key: string]: string } {
    return {
      basePath: 'BasePath',
      billingStatus: 'BillingStatus',
      classicVpcSubDomain: 'ClassicVpcSubDomain',
      cloudMarketCommodity: 'CloudMarketCommodity',
      cmsMonitorGroup: 'CmsMonitorGroup',
      compatibleFlags: 'CompatibleFlags',
      createdTime: 'CreatedTime',
      customDomains: 'CustomDomains',
      customTraceConfig: 'CustomTraceConfig',
      customerConfigs: 'CustomerConfigs',
      dedicatedInstanceType: 'DedicatedInstanceType',
      defaultDomain: 'DefaultDomain',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      httpsPolicy: 'HttpsPolicy',
      illegalStatus: 'IllegalStatus',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      instanceVipList: 'InstanceVipList',
      ipv6Status: 'Ipv6Status',
      modifiedTime: 'ModifiedTime',
      passthroughHeaders: 'PassthroughHeaders',
      regionId: 'RegionId',
      requestId: 'RequestId',
      rpcPattern: 'RpcPattern',
      stageItems: 'StageItems',
      status: 'Status',
      subDomain: 'SubDomain',
      trafficLimit: 'TrafficLimit',
      userLogConfig: 'UserLogConfig',
      vpcDomain: 'VpcDomain',
      vpcSlbIntranetDomain: 'VpcSlbIntranetDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basePath: 'string',
      billingStatus: 'string',
      classicVpcSubDomain: 'string',
      cloudMarketCommodity: 'boolean',
      cmsMonitorGroup: 'string',
      compatibleFlags: 'string',
      createdTime: 'string',
      customDomains: DescribeApiGroupResponseBodyCustomDomains,
      customTraceConfig: 'string',
      customerConfigs: 'string',
      dedicatedInstanceType: 'string',
      defaultDomain: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      httpsPolicy: 'string',
      illegalStatus: 'string',
      instanceId: 'string',
      instanceType: 'string',
      instanceVipList: 'string',
      ipv6Status: 'string',
      modifiedTime: 'string',
      passthroughHeaders: 'string',
      regionId: 'string',
      requestId: 'string',
      rpcPattern: 'string',
      stageItems: DescribeApiGroupResponseBodyStageItems,
      status: 'string',
      subDomain: 'string',
      trafficLimit: 'number',
      userLogConfig: 'string',
      vpcDomain: 'string',
      vpcSlbIntranetDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApiGroupResponseBody;
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
      body: DescribeApiGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupVpcWhitelistRequest extends $tea.Model {
  groupId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupVpcWhitelistResponseBody extends $tea.Model {
  requestId?: string;
  vpcIds?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpcIds: 'VpcIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpcIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupVpcWhitelistResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApiGroupVpcWhitelistResponseBody;
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
      body: DescribeApiGroupVpcWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupsRequest extends $tea.Model {
  enableTagAuth?: boolean;
  groupId?: string;
  groupName?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  sort?: string;
  tag?: DescribeApiGroupsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      enableTagAuth: 'EnableTagAuth',
      groupId: 'GroupId',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      sort: 'Sort',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableTagAuth: 'boolean',
      groupId: 'string',
      groupName: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      sort: 'string',
      tag: { 'type': 'array', 'itemType': DescribeApiGroupsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupsResponseBody extends $tea.Model {
  apiGroupAttributes?: DescribeApiGroupsResponseBodyApiGroupAttributes;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiGroupAttributes: 'ApiGroupAttributes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiGroupAttributes: DescribeApiGroupsResponseBodyApiGroupAttributes,
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

export class DescribeApiGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApiGroupsResponseBody;
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
      body: DescribeApiGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoriesRequest extends $tea.Model {
  apiId?: string;
  apiName?: string;
  groupId?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoriesResponseBody extends $tea.Model {
  apiHisItems?: DescribeApiHistoriesResponseBodyApiHisItems;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiHisItems: 'ApiHisItems',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiHisItems: DescribeApiHistoriesResponseBodyApiHisItems,
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

export class DescribeApiHistoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApiHistoriesResponseBody;
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
      body: DescribeApiHistoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryRequest extends $tea.Model {
  apiId?: string;
  groupId?: string;
  historyVersion?: string;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      historyVersion: 'HistoryVersion',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      historyVersion: 'string',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBody extends $tea.Model {
  allowSignatureMethod?: string;
  apiId?: string;
  apiName?: string;
  appCodeAuthType?: string;
  authType?: string;
  backendConfig?: DescribeApiHistoryResponseBodyBackendConfig;
  backendEnable?: boolean;
  constantParameters?: DescribeApiHistoryResponseBodyConstantParameters;
  customSystemParameters?: DescribeApiHistoryResponseBodyCustomSystemParameters;
  deployedTime?: string;
  description?: string;
  disableInternet?: boolean;
  errorCodeSamples?: DescribeApiHistoryResponseBodyErrorCodeSamples;
  failResultSample?: string;
  forceNonceCheck?: boolean;
  groupId?: string;
  groupName?: string;
  historyVersion?: string;
  openIdConnectConfig?: DescribeApiHistoryResponseBodyOpenIdConnectConfig;
  regionId?: string;
  requestConfig?: DescribeApiHistoryResponseBodyRequestConfig;
  requestId?: string;
  requestParameters?: DescribeApiHistoryResponseBodyRequestParameters;
  resultBodyModel?: string;
  resultDescriptions?: DescribeApiHistoryResponseBodyResultDescriptions;
  resultSample?: string;
  resultType?: string;
  serviceConfig?: DescribeApiHistoryResponseBodyServiceConfig;
  serviceParameters?: DescribeApiHistoryResponseBodyServiceParameters;
  serviceParametersMap?: DescribeApiHistoryResponseBodyServiceParametersMap;
  stageName?: string;
  status?: string;
  systemParameters?: DescribeApiHistoryResponseBodySystemParameters;
  visibility?: string;
  webSocketApiType?: string;
  static names(): { [key: string]: string } {
    return {
      allowSignatureMethod: 'AllowSignatureMethod',
      apiId: 'ApiId',
      apiName: 'ApiName',
      appCodeAuthType: 'AppCodeAuthType',
      authType: 'AuthType',
      backendConfig: 'BackendConfig',
      backendEnable: 'BackendEnable',
      constantParameters: 'ConstantParameters',
      customSystemParameters: 'CustomSystemParameters',
      deployedTime: 'DeployedTime',
      description: 'Description',
      disableInternet: 'DisableInternet',
      errorCodeSamples: 'ErrorCodeSamples',
      failResultSample: 'FailResultSample',
      forceNonceCheck: 'ForceNonceCheck',
      groupId: 'GroupId',
      groupName: 'GroupName',
      historyVersion: 'HistoryVersion',
      openIdConnectConfig: 'OpenIdConnectConfig',
      regionId: 'RegionId',
      requestConfig: 'RequestConfig',
      requestId: 'RequestId',
      requestParameters: 'RequestParameters',
      resultBodyModel: 'ResultBodyModel',
      resultDescriptions: 'ResultDescriptions',
      resultSample: 'ResultSample',
      resultType: 'ResultType',
      serviceConfig: 'ServiceConfig',
      serviceParameters: 'ServiceParameters',
      serviceParametersMap: 'ServiceParametersMap',
      stageName: 'StageName',
      status: 'Status',
      systemParameters: 'SystemParameters',
      visibility: 'Visibility',
      webSocketApiType: 'WebSocketApiType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowSignatureMethod: 'string',
      apiId: 'string',
      apiName: 'string',
      appCodeAuthType: 'string',
      authType: 'string',
      backendConfig: DescribeApiHistoryResponseBodyBackendConfig,
      backendEnable: 'boolean',
      constantParameters: DescribeApiHistoryResponseBodyConstantParameters,
      customSystemParameters: DescribeApiHistoryResponseBodyCustomSystemParameters,
      deployedTime: 'string',
      description: 'string',
      disableInternet: 'boolean',
      errorCodeSamples: DescribeApiHistoryResponseBodyErrorCodeSamples,
      failResultSample: 'string',
      forceNonceCheck: 'boolean',
      groupId: 'string',
      groupName: 'string',
      historyVersion: 'string',
      openIdConnectConfig: DescribeApiHistoryResponseBodyOpenIdConnectConfig,
      regionId: 'string',
      requestConfig: DescribeApiHistoryResponseBodyRequestConfig,
      requestId: 'string',
      requestParameters: DescribeApiHistoryResponseBodyRequestParameters,
      resultBodyModel: 'string',
      resultDescriptions: DescribeApiHistoryResponseBodyResultDescriptions,
      resultSample: 'string',
      resultType: 'string',
      serviceConfig: DescribeApiHistoryResponseBodyServiceConfig,
      serviceParameters: DescribeApiHistoryResponseBodyServiceParameters,
      serviceParametersMap: DescribeApiHistoryResponseBodyServiceParametersMap,
      stageName: 'string',
      status: 'string',
      systemParameters: DescribeApiHistoryResponseBodySystemParameters,
      visibility: 'string',
      webSocketApiType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApiHistoryResponseBody;
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
      body: DescribeApiHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiIpControlsRequest extends $tea.Model {
  apiIds?: string;
  groupId?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiIds: 'ApiIds',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIds: 'string',
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiIpControlsResponseBody extends $tea.Model {
  apiIpControls?: DescribeApiIpControlsResponseBodyApiIpControls;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiIpControls: 'ApiIpControls',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIpControls: DescribeApiIpControlsResponseBodyApiIpControls,
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

export class DescribeApiIpControlsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApiIpControlsResponseBody;
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
      body: DescribeApiIpControlsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiLatencyDataRequest extends $tea.Model {
  apiId?: string;
  endTime?: string;
  groupId?: string;
  securityToken?: string;
  stageName?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      endTime: 'EndTime',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      endTime: 'string',
      groupId: 'string',
      securityToken: 'string',
      stageName: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiLatencyDataResponseBody extends $tea.Model {
  callLatencys?: DescribeApiLatencyDataResponseBodyCallLatencys;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callLatencys: 'CallLatencys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callLatencys: DescribeApiLatencyDataResponseBodyCallLatencys,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiLatencyDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApiLatencyDataResponseBody;
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
      body: DescribeApiLatencyDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiMarketAttributesRequest extends $tea.Model {
  apiId?: string;
  groupId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiMarketAttributesResponseBody extends $tea.Model {
  apiId?: string;
  marketChargingMode?: string;
  needCharging?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      marketChargingMode: 'MarketChargingMode',
      needCharging: 'NeedCharging',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      marketChargingMode: 'string',
      needCharging: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiMarketAttributesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApiMarketAttributesResponseBody;
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
      body: DescribeApiMarketAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiQpsDataRequest extends $tea.Model {
  apiId?: string;
  endTime?: string;
  groupId?: string;
  securityToken?: string;
  stageName?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      endTime: 'EndTime',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      endTime: 'string',
      groupId: 'string',
      securityToken: 'string',
      stageName: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiQpsDataResponseBody extends $tea.Model {
  callFails?: DescribeApiQpsDataResponseBodyCallFails;
  callSuccesses?: DescribeApiQpsDataResponseBodyCallSuccesses;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callFails: 'CallFails',
      callSuccesses: 'CallSuccesses',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callFails: DescribeApiQpsDataResponseBodyCallFails,
      callSuccesses: DescribeApiQpsDataResponseBodyCallSuccesses,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiQpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApiQpsDataResponseBody;
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
      body: DescribeApiQpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiSignaturesRequest extends $tea.Model {
  apiIds?: string;
  groupId?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiIds: 'ApiIds',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIds: 'string',
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiSignaturesResponseBody extends $tea.Model {
  apiSignatures?: DescribeApiSignaturesResponseBodyApiSignatures;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiSignatures: 'ApiSignatures',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiSignatures: DescribeApiSignaturesResponseBodyApiSignatures,
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

export class DescribeApiSignaturesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApiSignaturesResponseBody;
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
      body: DescribeApiSignaturesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiTrafficControlsRequest extends $tea.Model {
  apiIds?: string;
  groupId?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiIds: 'ApiIds',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIds: 'string',
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiTrafficControlsResponseBody extends $tea.Model {
  apiTrafficControls?: DescribeApiTrafficControlsResponseBodyApiTrafficControls;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiTrafficControls: 'ApiTrafficControls',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiTrafficControls: DescribeApiTrafficControlsResponseBodyApiTrafficControls,
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

export class DescribeApiTrafficControlsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApiTrafficControlsResponseBody;
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
      body: DescribeApiTrafficControlsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiTrafficDataRequest extends $tea.Model {
  apiId?: string;
  endTime?: string;
  groupId?: string;
  securityToken?: string;
  stageName?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      endTime: 'EndTime',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      endTime: 'string',
      groupId: 'string',
      securityToken: 'string',
      stageName: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiTrafficDataResponseBody extends $tea.Model {
  callDownloads?: DescribeApiTrafficDataResponseBodyCallDownloads;
  callUploads?: DescribeApiTrafficDataResponseBodyCallUploads;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callDownloads: 'CallDownloads',
      callUploads: 'CallUploads',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callDownloads: DescribeApiTrafficDataResponseBodyCallDownloads,
      callUploads: DescribeApiTrafficDataResponseBodyCallUploads,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApiTrafficDataResponseBody;
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
      body: DescribeApiTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisRequest extends $tea.Model {
  apiId?: string;
  apiMethod?: string;
  apiName?: string;
  apiPath?: string;
  catalogId?: string;
  enableTagAuth?: boolean;
  groupId?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  stageName?: string;
  tag?: DescribeApisRequestTag[];
  unDeployed?: boolean;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiMethod: 'ApiMethod',
      apiName: 'ApiName',
      apiPath: 'ApiPath',
      catalogId: 'CatalogId',
      enableTagAuth: 'EnableTagAuth',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
      tag: 'Tag',
      unDeployed: 'UnDeployed',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiMethod: 'string',
      apiName: 'string',
      apiPath: 'string',
      catalogId: 'string',
      enableTagAuth: 'boolean',
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      stageName: 'string',
      tag: { 'type': 'array', 'itemType': DescribeApisRequestTag },
      unDeployed: 'boolean',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisResponseBody extends $tea.Model {
  apiSummarys?: DescribeApisResponseBodyApiSummarys;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiSummarys: 'ApiSummarys',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiSummarys: DescribeApisResponseBodyApiSummarys,
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

export class DescribeApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApisResponseBody;
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
      body: DescribeApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByAppRequest extends $tea.Model {
  apiName?: string;
  apiUid?: string;
  appId?: number;
  description?: string;
  method?: string;
  pageNumber?: number;
  pageSize?: number;
  path?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      apiUid: 'ApiUid',
      appId: 'AppId',
      description: 'Description',
      method: 'Method',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      path: 'Path',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      apiUid: 'string',
      appId: 'number',
      description: 'string',
      method: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      path: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByAppResponseBody extends $tea.Model {
  appApiRelationInfos?: DescribeApisByAppResponseBodyAppApiRelationInfos;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      appApiRelationInfos: 'AppApiRelationInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appApiRelationInfos: DescribeApisByAppResponseBodyAppApiRelationInfos,
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

export class DescribeApisByAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApisByAppResponseBody;
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
      body: DescribeApisByAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByBackendRequest extends $tea.Model {
  backendId?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByBackendResponseBody extends $tea.Model {
  apiInfoList?: DescribeApisByBackendResponseBodyApiInfoList;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiInfoList: 'ApiInfoList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfoList: DescribeApisByBackendResponseBodyApiInfoList,
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

export class DescribeApisByBackendResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApisByBackendResponseBody;
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
      body: DescribeApisByBackendResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByIpControlRequest extends $tea.Model {
  ipControlId?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ipControlId: 'IpControlId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipControlId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByIpControlResponseBody extends $tea.Model {
  apiInfos?: DescribeApisByIpControlResponseBodyApiInfos;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiInfos: 'ApiInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfos: DescribeApisByIpControlResponseBodyApiInfos,
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

export class DescribeApisByIpControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApisByIpControlResponseBody;
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
      body: DescribeApisByIpControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisBySignatureRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  signatureId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      signatureId: 'SignatureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      signatureId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisBySignatureResponseBody extends $tea.Model {
  apiInfos?: DescribeApisBySignatureResponseBodyApiInfos;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiInfos: 'ApiInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfos: DescribeApisBySignatureResponseBodyApiInfos,
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

export class DescribeApisBySignatureResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApisBySignatureResponseBody;
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
      body: DescribeApisBySignatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByTrafficControlRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  trafficControlId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      trafficControlId: 'TrafficControlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      trafficControlId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByTrafficControlResponseBody extends $tea.Model {
  apiInfos?: DescribeApisByTrafficControlResponseBodyApiInfos;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiInfos: 'ApiInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfos: DescribeApisByTrafficControlResponseBodyApiInfos,
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

export class DescribeApisByTrafficControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApisByTrafficControlResponseBody;
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
      body: DescribeApisByTrafficControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRequest extends $tea.Model {
  appId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponseBody extends $tea.Model {
  appId?: number;
  appName?: string;
  createdTime?: string;
  description?: string;
  modifiedTime?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      createdTime: 'CreatedTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      createdTime: 'string',
      description: 'string',
      modifiedTime: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAppResponseBody;
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
      body: DescribeAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppAttributesRequest extends $tea.Model {
  appCode?: string;
  appId?: number;
  appKey?: string;
  appName?: string;
  enableTagAuth?: boolean;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  sort?: string;
  tag?: DescribeAppAttributesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appId: 'AppId',
      appKey: 'AppKey',
      appName: 'AppName',
      enableTagAuth: 'EnableTagAuth',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      sort: 'Sort',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appId: 'number',
      appKey: 'string',
      appName: 'string',
      enableTagAuth: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      sort: 'string',
      tag: { 'type': 'array', 'itemType': DescribeAppAttributesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppAttributesResponseBody extends $tea.Model {
  apps?: DescribeAppAttributesResponseBodyApps;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apps: 'Apps',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apps: DescribeAppAttributesResponseBodyApps,
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

export class DescribeAppAttributesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAppAttributesResponseBody;
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
      body: DescribeAppAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppSecurityRequest extends $tea.Model {
  appId?: number;
  securityToken?: string;
  tag?: DescribeAppSecurityRequestTag[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': DescribeAppSecurityRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppSecurityResponseBody extends $tea.Model {
  appCode?: string;
  appKey?: string;
  appSecret?: string;
  createdTime?: string;
  modifiedTime?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appKey: 'AppKey',
      appSecret: 'AppSecret',
      createdTime: 'CreatedTime',
      modifiedTime: 'ModifiedTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appKey: 'string',
      appSecret: 'string',
      createdTime: 'string',
      modifiedTime: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppSecurityResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAppSecurityResponseBody;
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
      body: DescribeAppSecurityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsRequest extends $tea.Model {
  appId?: number;
  appOwner?: number;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appOwner: 'AppOwner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appOwner: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBody extends $tea.Model {
  apps?: DescribeAppsResponseBodyApps;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apps: 'Apps',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apps: DescribeAppsResponseBodyApps,
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

export class DescribeAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAppsResponseBody;
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
      body: DescribeAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuthorizedApisRequest extends $tea.Model {
  appId?: number;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuthorizedApisResponseBody extends $tea.Model {
  authorizedApis?: DescribeAuthorizedApisResponseBodyAuthorizedApis;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      authorizedApis: 'AuthorizedApis',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedApis: DescribeAuthorizedApisResponseBodyAuthorizedApis,
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

export class DescribeAuthorizedApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAuthorizedApisResponseBody;
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
      body: DescribeAuthorizedApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuthorizedAppsRequest extends $tea.Model {
  apiId?: string;
  appId?: number;
  appName?: string;
  appOwnerId?: number;
  groupId?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      appId: 'AppId',
      appName: 'AppName',
      appOwnerId: 'AppOwnerId',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      appId: 'number',
      appName: 'string',
      appOwnerId: 'number',
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuthorizedAppsResponseBody extends $tea.Model {
  authorizedApps?: DescribeAuthorizedAppsResponseBodyAuthorizedApps;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      authorizedApps: 'AuthorizedApps',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedApps: DescribeAuthorizedAppsResponseBodyAuthorizedApps,
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

export class DescribeAuthorizedAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAuthorizedAppsResponseBody;
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
      body: DescribeAuthorizedAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendInfoRequest extends $tea.Model {
  backendId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendInfoResponseBody extends $tea.Model {
  backendInfo?: DescribeBackendInfoResponseBodyBackendInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backendInfo: 'BackendInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendInfo: DescribeBackendInfoResponseBodyBackendInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBackendInfoResponseBody;
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
      body: DescribeBackendInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendListRequest extends $tea.Model {
  backendName?: string;
  backendType?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      backendName: 'BackendName',
      backendType: 'BackendType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendName: 'string',
      backendType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendListResponseBody extends $tea.Model {
  backendInfoList?: DescribeBackendListResponseBodyBackendInfoList[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      backendInfoList: 'BackendInfoList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendInfoList: { 'type': 'array', 'itemType': DescribeBackendListResponseBodyBackendInfoList },
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

export class DescribeBackendListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBackendListResponseBody;
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
      body: DescribeBackendListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatasetInfoRequest extends $tea.Model {
  datasetId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatasetInfoResponseBody extends $tea.Model {
  datasetInfo?: DescribeDatasetInfoResponseBodyDatasetInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetInfo: 'DatasetInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetInfo: DescribeDatasetInfoResponseBodyDatasetInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatasetInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDatasetInfoResponseBody;
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
      body: DescribeDatasetInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatasetItemInfoRequest extends $tea.Model {
  datasetId?: string;
  datasetItemId?: string;
  securityToken?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetItemId: 'DatasetItemId',
      securityToken: 'SecurityToken',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      datasetItemId: 'string',
      securityToken: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatasetItemInfoResponseBody extends $tea.Model {
  datasetItemInfo?: DescribeDatasetItemInfoResponseBodyDatasetItemInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetItemInfo: 'DatasetItemInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetItemInfo: DescribeDatasetItemInfoResponseBodyDatasetItemInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatasetItemInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDatasetItemInfoResponseBody;
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
      body: DescribeDatasetItemInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatasetItemListRequest extends $tea.Model {
  datasetId?: string;
  datasetItemIds?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetItemIds: 'DatasetItemIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      datasetItemIds: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatasetItemListResponseBody extends $tea.Model {
  datasetItemInfoList?: DescribeDatasetItemListResponseBodyDatasetItemInfoList[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      datasetItemInfoList: 'DatasetItemInfoList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetItemInfoList: { 'type': 'array', 'itemType': DescribeDatasetItemListResponseBodyDatasetItemInfoList },
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

export class DescribeDatasetItemListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDatasetItemListResponseBody;
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
      body: DescribeDatasetItemListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatasetListRequest extends $tea.Model {
  datasetIds?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      datasetIds: 'DatasetIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetIds: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatasetListResponseBody extends $tea.Model {
  datasetInfoList?: DescribeDatasetListResponseBodyDatasetInfoList[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      datasetInfoList: 'DatasetInfoList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetInfoList: { 'type': 'array', 'itemType': DescribeDatasetListResponseBodyDatasetInfoList },
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

export class DescribeDatasetListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDatasetListResponseBody;
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
      body: DescribeDatasetListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployApiTaskRequest extends $tea.Model {
  operationUid?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      operationUid: 'OperationUid',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationUid: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployApiTaskResponseBody extends $tea.Model {
  deployedResults?: DescribeDeployApiTaskResponseBodyDeployedResults;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deployedResults: 'DeployedResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployedResults: DescribeDeployApiTaskResponseBodyDeployedResults,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployApiTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDeployApiTaskResponseBody;
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
      body: DescribeDeployApiTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiRequest extends $tea.Model {
  apiId?: string;
  groupId?: string;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBody extends $tea.Model {
  allowSignatureMethod?: string;
  apiId?: string;
  apiName?: string;
  authType?: string;
  constantParameters?: DescribeDeployedApiResponseBodyConstantParameters;
  customSystemParameters?: DescribeDeployedApiResponseBodyCustomSystemParameters;
  deployedTime?: string;
  description?: string;
  disableInternet?: boolean;
  errorCodeSamples?: DescribeDeployedApiResponseBodyErrorCodeSamples;
  failResultSample?: string;
  forceNonceCheck?: boolean;
  groupId?: string;
  groupName?: string;
  openIdConnectConfig?: DescribeDeployedApiResponseBodyOpenIdConnectConfig;
  regionId?: string;
  requestConfig?: DescribeDeployedApiResponseBodyRequestConfig;
  requestId?: string;
  requestParameters?: DescribeDeployedApiResponseBodyRequestParameters;
  resultBodyModel?: string;
  resultDescriptions?: DescribeDeployedApiResponseBodyResultDescriptions;
  resultSample?: string;
  resultType?: string;
  serviceConfig?: DescribeDeployedApiResponseBodyServiceConfig;
  serviceParameters?: DescribeDeployedApiResponseBodyServiceParameters;
  serviceParametersMap?: DescribeDeployedApiResponseBodyServiceParametersMap;
  stageName?: string;
  systemParameters?: DescribeDeployedApiResponseBodySystemParameters;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      allowSignatureMethod: 'AllowSignatureMethod',
      apiId: 'ApiId',
      apiName: 'ApiName',
      authType: 'AuthType',
      constantParameters: 'ConstantParameters',
      customSystemParameters: 'CustomSystemParameters',
      deployedTime: 'DeployedTime',
      description: 'Description',
      disableInternet: 'DisableInternet',
      errorCodeSamples: 'ErrorCodeSamples',
      failResultSample: 'FailResultSample',
      forceNonceCheck: 'ForceNonceCheck',
      groupId: 'GroupId',
      groupName: 'GroupName',
      openIdConnectConfig: 'OpenIdConnectConfig',
      regionId: 'RegionId',
      requestConfig: 'RequestConfig',
      requestId: 'RequestId',
      requestParameters: 'RequestParameters',
      resultBodyModel: 'ResultBodyModel',
      resultDescriptions: 'ResultDescriptions',
      resultSample: 'ResultSample',
      resultType: 'ResultType',
      serviceConfig: 'ServiceConfig',
      serviceParameters: 'ServiceParameters',
      serviceParametersMap: 'ServiceParametersMap',
      stageName: 'StageName',
      systemParameters: 'SystemParameters',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowSignatureMethod: 'string',
      apiId: 'string',
      apiName: 'string',
      authType: 'string',
      constantParameters: DescribeDeployedApiResponseBodyConstantParameters,
      customSystemParameters: DescribeDeployedApiResponseBodyCustomSystemParameters,
      deployedTime: 'string',
      description: 'string',
      disableInternet: 'boolean',
      errorCodeSamples: DescribeDeployedApiResponseBodyErrorCodeSamples,
      failResultSample: 'string',
      forceNonceCheck: 'boolean',
      groupId: 'string',
      groupName: 'string',
      openIdConnectConfig: DescribeDeployedApiResponseBodyOpenIdConnectConfig,
      regionId: 'string',
      requestConfig: DescribeDeployedApiResponseBodyRequestConfig,
      requestId: 'string',
      requestParameters: DescribeDeployedApiResponseBodyRequestParameters,
      resultBodyModel: 'string',
      resultDescriptions: DescribeDeployedApiResponseBodyResultDescriptions,
      resultSample: 'string',
      resultType: 'string',
      serviceConfig: DescribeDeployedApiResponseBodyServiceConfig,
      serviceParameters: DescribeDeployedApiResponseBodyServiceParameters,
      serviceParametersMap: DescribeDeployedApiResponseBodyServiceParametersMap,
      stageName: 'string',
      systemParameters: DescribeDeployedApiResponseBodySystemParameters,
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDeployedApiResponseBody;
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
      body: DescribeDeployedApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApisRequest extends $tea.Model {
  apiId?: string;
  apiMethod?: string;
  apiName?: string;
  apiPath?: string;
  enableTagAuth?: boolean;
  groupId?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  stageName?: string;
  tag?: DescribeDeployedApisRequestTag[];
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiMethod: 'ApiMethod',
      apiName: 'ApiName',
      apiPath: 'ApiPath',
      enableTagAuth: 'EnableTagAuth',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiMethod: 'string',
      apiName: 'string',
      apiPath: 'string',
      enableTagAuth: 'boolean',
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      stageName: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDeployedApisRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApisResponseBody extends $tea.Model {
  deployedApis?: DescribeDeployedApisResponseBodyDeployedApis;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      deployedApis: 'DeployedApis',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployedApis: DescribeDeployedApisResponseBodyDeployedApis,
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

export class DescribeDeployedApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDeployedApisResponseBody;
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
      body: DescribeDeployedApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRequest extends $tea.Model {
  domainName?: string;
  groupId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      groupId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResponseBody extends $tea.Model {
  certificateBody?: string;
  certificateId?: string;
  certificateName?: string;
  certificatePrivateKey?: string;
  certificateValidEnd?: number;
  certificateValidStart?: number;
  domainBindingStatus?: string;
  domainCNAMEStatus?: string;
  domainLegalStatus?: string;
  domainName?: string;
  domainRemark?: string;
  domainWebSocketStatus?: string;
  groupId?: string;
  requestId?: string;
  subDomain?: string;
  static names(): { [key: string]: string } {
    return {
      certificateBody: 'CertificateBody',
      certificateId: 'CertificateId',
      certificateName: 'CertificateName',
      certificatePrivateKey: 'CertificatePrivateKey',
      certificateValidEnd: 'CertificateValidEnd',
      certificateValidStart: 'CertificateValidStart',
      domainBindingStatus: 'DomainBindingStatus',
      domainCNAMEStatus: 'DomainCNAMEStatus',
      domainLegalStatus: 'DomainLegalStatus',
      domainName: 'DomainName',
      domainRemark: 'DomainRemark',
      domainWebSocketStatus: 'DomainWebSocketStatus',
      groupId: 'GroupId',
      requestId: 'RequestId',
      subDomain: 'SubDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateBody: 'string',
      certificateId: 'string',
      certificateName: 'string',
      certificatePrivateKey: 'string',
      certificateValidEnd: 'number',
      certificateValidStart: 'number',
      domainBindingStatus: 'string',
      domainCNAMEStatus: 'string',
      domainLegalStatus: 'string',
      domainName: 'string',
      domainRemark: 'string',
      domainWebSocketStatus: 'string',
      groupId: 'string',
      requestId: 'string',
      subDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainResponseBody;
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
      body: DescribeDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryApisRequest extends $tea.Model {
  apiId?: string;
  apiName?: string;
  groupId?: string;
  pageNumber?: string;
  pageSize?: string;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      groupId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryApisResponseBody extends $tea.Model {
  apiHisItems?: DescribeHistoryApisResponseBodyApiHisItems;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiHisItems: 'ApiHisItems',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiHisItems: DescribeHistoryApisResponseBodyApiHisItems,
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

export class DescribeHistoryApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeHistoryApisResponseBody;
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
      body: DescribeHistoryApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportOASTaskRequest extends $tea.Model {
  operationId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportOASTaskResponseBody extends $tea.Model {
  apiResults?: DescribeImportOASTaskResponseBodyApiResults;
  modelResults?: DescribeImportOASTaskResponseBodyModelResults;
  requestId?: string;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      apiResults: 'ApiResults',
      modelResults: 'ModelResults',
      requestId: 'RequestId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiResults: DescribeImportOASTaskResponseBodyApiResults,
      modelResults: DescribeImportOASTaskResponseBodyModelResults,
      requestId: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportOASTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeImportOASTaskResponseBody;
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
      body: DescribeImportOASTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDropConnectionsRequest extends $tea.Model {
  endTime?: string;
  instanceId?: string;
  sbcName?: string;
  securityToken?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      sbcName: 'SbcName',
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      sbcName: 'string',
      securityToken: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDropConnectionsResponseBody extends $tea.Model {
  instanceDropConnections?: DescribeInstanceDropConnectionsResponseBodyInstanceDropConnections;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceDropConnections: 'InstanceDropConnections',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceDropConnections: DescribeInstanceDropConnectionsResponseBodyInstanceDropConnections,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDropConnectionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceDropConnectionsResponseBody;
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
      body: DescribeInstanceDropConnectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDropPacketRequest extends $tea.Model {
  endTime?: string;
  instanceId?: string;
  sbcName?: string;
  securityToken?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      sbcName: 'SbcName',
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      sbcName: 'string',
      securityToken: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDropPacketResponseBody extends $tea.Model {
  instanceDropPacket?: DescribeInstanceDropPacketResponseBodyInstanceDropPacket;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceDropPacket: 'InstanceDropPacket',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceDropPacket: DescribeInstanceDropPacketResponseBodyInstanceDropPacket,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDropPacketResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceDropPacketResponseBody;
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
      body: DescribeInstanceDropPacketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHttpCodeRequest extends $tea.Model {
  endTime?: string;
  instanceId?: string;
  securityToken?: string;
  stageName?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      securityToken: 'string',
      stageName: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHttpCodeResponseBody extends $tea.Model {
  instanceHttpCode?: DescribeInstanceHttpCodeResponseBodyInstanceHttpCode;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceHttpCode: 'InstanceHttpCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceHttpCode: DescribeInstanceHttpCodeResponseBodyInstanceHttpCode,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHttpCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceHttpCodeResponseBody;
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
      body: DescribeInstanceHttpCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceLatencyRequest extends $tea.Model {
  endTime?: string;
  instanceId?: string;
  securityToken?: string;
  stageName?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      securityToken: 'string',
      stageName: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceLatencyResponseBody extends $tea.Model {
  instanceLatency?: DescribeInstanceLatencyResponseBodyInstanceLatency;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceLatency: 'InstanceLatency',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceLatency: DescribeInstanceLatencyResponseBodyInstanceLatency,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceLatencyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceLatencyResponseBody;
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
      body: DescribeInstanceLatencyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceNewConnectionsRequest extends $tea.Model {
  endTime?: string;
  instanceId?: string;
  sbcName?: string;
  securityToken?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      sbcName: 'SbcName',
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      sbcName: 'string',
      securityToken: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceNewConnectionsResponseBody extends $tea.Model {
  instanceNewConnections?: DescribeInstanceNewConnectionsResponseBodyInstanceNewConnections;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceNewConnections: 'InstanceNewConnections',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceNewConnections: DescribeInstanceNewConnectionsResponseBodyInstanceNewConnections,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceNewConnectionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceNewConnectionsResponseBody;
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
      body: DescribeInstanceNewConnectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePacketsRequest extends $tea.Model {
  endTime?: string;
  instanceId?: string;
  sbcName?: string;
  securityToken?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      sbcName: 'SbcName',
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      sbcName: 'string',
      securityToken: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePacketsResponseBody extends $tea.Model {
  instancePackets?: DescribeInstancePacketsResponseBodyInstancePackets;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instancePackets: 'InstancePackets',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instancePackets: DescribeInstancePacketsResponseBodyInstancePackets,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePacketsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstancePacketsResponseBody;
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
      body: DescribeInstancePacketsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceQpsRequest extends $tea.Model {
  endTime?: string;
  instanceId?: string;
  securityToken?: string;
  stageName?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      securityToken: 'string',
      stageName: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceQpsResponseBody extends $tea.Model {
  instanceQps?: DescribeInstanceQpsResponseBodyInstanceQps;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceQps: 'InstanceQps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceQps: DescribeInstanceQpsResponseBodyInstanceQps,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceQpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceQpsResponseBody;
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
      body: DescribeInstanceQpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSlbConnectRequest extends $tea.Model {
  endTime?: string;
  instanceId?: string;
  sbcName?: string;
  securityToken?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      sbcName: 'SbcName',
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      sbcName: 'string',
      securityToken: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSlbConnectResponseBody extends $tea.Model {
  instanceSlbConnect?: DescribeInstanceSlbConnectResponseBodyInstanceSlbConnect;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceSlbConnect: 'InstanceSlbConnect',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSlbConnect: DescribeInstanceSlbConnectResponseBodyInstanceSlbConnect,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSlbConnectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceSlbConnectResponseBody;
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
      body: DescribeInstanceSlbConnectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTrafficRequest extends $tea.Model {
  endTime?: string;
  instanceId?: string;
  securityToken?: string;
  stageName?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      securityToken: 'string',
      stageName: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTrafficResponseBody extends $tea.Model {
  instanceTraffic?: DescribeInstanceTrafficResponseBodyInstanceTraffic;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTraffic: 'InstanceTraffic',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTraffic: DescribeInstanceTrafficResponseBodyInstanceTraffic,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTrafficResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceTrafficResponseBody;
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
      body: DescribeInstanceTrafficResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequest extends $tea.Model {
  enableTagAuthorization?: boolean;
  instanceId?: string;
  language?: string;
  securityToken?: string;
  tag?: DescribeInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      enableTagAuthorization: 'EnableTagAuthorization',
      instanceId: 'InstanceId',
      language: 'Language',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableTagAuthorization: 'boolean',
      instanceId: 'string',
      language: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': DescribeInstancesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $tea.Model {
  instances?: DescribeInstancesResponseBodyInstances;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: DescribeInstancesResponseBodyInstances,
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

export class DescribeInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstancesResponseBody;
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
      body: DescribeInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpControlPolicyItemsRequest extends $tea.Model {
  ipControlId?: string;
  pageNumber?: number;
  pageSize?: number;
  policyItemId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ipControlId: 'IpControlId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyItemId: 'PolicyItemId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipControlId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      policyItemId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpControlPolicyItemsResponseBody extends $tea.Model {
  ipControlPolicyItems?: DescribeIpControlPolicyItemsResponseBodyIpControlPolicyItems;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ipControlPolicyItems: 'IpControlPolicyItems',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipControlPolicyItems: DescribeIpControlPolicyItemsResponseBodyIpControlPolicyItems,
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

export class DescribeIpControlPolicyItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeIpControlPolicyItemsResponseBody;
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
      body: DescribeIpControlPolicyItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpControlsRequest extends $tea.Model {
  ipControlId?: string;
  ipControlName?: string;
  ipControlType?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ipControlId: 'IpControlId',
      ipControlName: 'IpControlName',
      ipControlType: 'IpControlType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipControlId: 'string',
      ipControlName: 'string',
      ipControlType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpControlsResponseBody extends $tea.Model {
  ipControlInfos?: DescribeIpControlsResponseBodyIpControlInfos;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ipControlInfos: 'IpControlInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipControlInfos: DescribeIpControlsResponseBodyIpControlInfos,
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

export class DescribeIpControlsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeIpControlsResponseBody;
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
      body: DescribeIpControlsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogConfigRequest extends $tea.Model {
  logType?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      logType: 'LogType',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logType: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogConfigResponseBody extends $tea.Model {
  logInfos?: DescribeLogConfigResponseBodyLogInfos;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logInfos: 'LogInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logInfos: DescribeLogConfigResponseBodyLogInfos,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeLogConfigResponseBody;
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
      body: DescribeLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMarketRemainsQuotaRequest extends $tea.Model {
  domainName?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: DescribeMarketRemainsQuotaResponseBody;
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
      body: DescribeMarketRemainsQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelsRequest extends $tea.Model {
  groupId?: string;
  modelId?: string;
  modelName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      modelId: 'ModelId',
      modelName: 'ModelName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      modelId: 'string',
      modelName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelsResponseBody extends $tea.Model {
  modelDetails?: DescribeModelsResponseBodyModelDetails;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      modelDetails: 'ModelDetails',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelDetails: DescribeModelsResponseBodyModelDetails,
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

export class DescribeModelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeModelsResponseBody;
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
      body: DescribeModelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginApisRequest extends $tea.Model {
  apiId?: string;
  apiName?: string;
  description?: string;
  groupId?: string;
  method?: string;
  pageNumber?: number;
  pageSize?: number;
  path?: string;
  pluginId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      description: 'Description',
      groupId: 'GroupId',
      method: 'Method',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      path: 'Path',
      pluginId: 'PluginId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      description: 'string',
      groupId: 'string',
      method: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      path: 'string',
      pluginId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginApisResponseBody extends $tea.Model {
  apiSummarys?: DescribePluginApisResponseBodyApiSummarys;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiSummarys: 'ApiSummarys',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiSummarys: DescribePluginApisResponseBodyApiSummarys,
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

export class DescribePluginApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePluginApisResponseBody;
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
      body: DescribePluginApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginSchemasRequest extends $tea.Model {
  language?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginSchemasResponseBody extends $tea.Model {
  pluginSchemas?: DescribePluginSchemasResponseBodyPluginSchemas;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pluginSchemas: 'PluginSchemas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginSchemas: DescribePluginSchemasResponseBodyPluginSchemas,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginSchemasResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePluginSchemasResponseBody;
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
      body: DescribePluginSchemasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginTemplatesRequest extends $tea.Model {
  language?: string;
  pluginName?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      pluginName: 'PluginName',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      pluginName: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: DescribePluginTemplatesResponseBody;
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
      body: DescribePluginTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  pluginId?: string;
  pluginName?: string;
  pluginType?: string;
  securityToken?: string;
  tag?: DescribePluginsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pluginId: 'PluginId',
      pluginName: 'PluginName',
      pluginType: 'PluginType',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pluginId: 'string',
      pluginName: 'string',
      pluginType: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': DescribePluginsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  plugins?: DescribePluginsResponseBodyPlugins;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      plugins: 'Plugins',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      plugins: DescribePluginsResponseBodyPlugins,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePluginsResponseBody;
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
      body: DescribePluginsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginsByApiRequest extends $tea.Model {
  apiId?: string;
  groupId?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginsByApiResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  plugins?: DescribePluginsByApiResponseBodyPlugins;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      plugins: 'Plugins',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      plugins: DescribePluginsByApiResponseBodyPlugins,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginsByApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePluginsByApiResponseBody;
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
      body: DescribePluginsByApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiGroupRequest extends $tea.Model {
  groupId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiGroupResponseBody extends $tea.Model {
  description?: string;
  domains?: DescribePurchasedApiGroupResponseBodyDomains;
  groupId?: string;
  groupName?: string;
  purchasedTime?: string;
  regionId?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      domains: 'Domains',
      groupId: 'GroupId',
      groupName: 'GroupName',
      purchasedTime: 'PurchasedTime',
      regionId: 'RegionId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      domains: DescribePurchasedApiGroupResponseBodyDomains,
      groupId: 'string',
      groupName: 'string',
      purchasedTime: 'string',
      regionId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePurchasedApiGroupResponseBody;
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
      body: DescribePurchasedApiGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiGroupsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiGroupsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  purchasedApiGroupAttributes?: DescribePurchasedApiGroupsResponseBodyPurchasedApiGroupAttributes;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      purchasedApiGroupAttributes: 'PurchasedApiGroupAttributes',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      purchasedApiGroupAttributes: DescribePurchasedApiGroupsResponseBodyPurchasedApiGroupAttributes,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePurchasedApiGroupsResponseBody;
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
      body: DescribePurchasedApiGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApisRequest extends $tea.Model {
  apiId?: string;
  apiName?: string;
  groupId?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  stageName?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      stageName: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApisResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  purchasedApis?: DescribePurchasedApisResponseBodyPurchasedApis;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      purchasedApis: 'PurchasedApis',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      purchasedApis: DescribePurchasedApisResponseBodyPurchasedApis,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePurchasedApisResponseBody;
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
      body: DescribePurchasedApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  language?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRegionsResponseBody;
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

export class DescribeSignaturesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  signatureId?: string;
  signatureName?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      signatureId: 'SignatureId',
      signatureName: 'SignatureName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      signatureId: 'string',
      signatureName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSignaturesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  signatureInfos?: DescribeSignaturesResponseBodySignatureInfos;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      signatureInfos: 'SignatureInfos',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      signatureInfos: DescribeSignaturesResponseBodySignatureInfos,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSignaturesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSignaturesResponseBody;
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
      body: DescribeSignaturesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSignaturesByApiRequest extends $tea.Model {
  apiId?: string;
  groupId?: string;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: DescribeSignaturesByApiResponseBody;
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
      body: DescribeSignaturesByApiResponseBody,
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
  statusCode: number;
  body: DescribeSystemParametersResponseBody;
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
      body: DescribeSystemParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficControlsRequest extends $tea.Model {
  apiId?: string;
  groupId?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  stageName?: string;
  trafficControlId?: string;
  trafficControlName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
      trafficControlId: 'TrafficControlId',
      trafficControlName: 'TrafficControlName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      stageName: 'string',
      trafficControlId: 'string',
      trafficControlName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficControlsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  trafficControls?: DescribeTrafficControlsResponseBodyTrafficControls;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trafficControls: 'TrafficControls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
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
  statusCode: number;
  body: DescribeTrafficControlsResponseBody;
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
      body: DescribeTrafficControlsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficControlsByApiRequest extends $tea.Model {
  apiId?: string;
  groupId?: string;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: DescribeTrafficControlsByApiResponseBody;
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
      body: DescribeTrafficControlsByApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpdateBackendTaskRequest extends $tea.Model {
  operationUid?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      operationUid: 'OperationUid',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationUid: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpdateBackendTaskResponseBody extends $tea.Model {
  apiUpdateBackendResults?: DescribeUpdateBackendTaskResponseBodyApiUpdateBackendResults;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiUpdateBackendResults: 'ApiUpdateBackendResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiUpdateBackendResults: DescribeUpdateBackendTaskResponseBodyApiUpdateBackendResults,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpdateBackendTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUpdateBackendTaskResponseBody;
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
      body: DescribeUpdateBackendTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpdateVpcInfoTaskRequest extends $tea.Model {
  operationUid?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      operationUid: 'OperationUid',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationUid: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpdateVpcInfoTaskResponseBody extends $tea.Model {
  apiUpdateVpcInfoResults?: DescribeUpdateVpcInfoTaskResponseBodyApiUpdateVpcInfoResults;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiUpdateVpcInfoResults: 'ApiUpdateVpcInfoResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiUpdateVpcInfoResults: DescribeUpdateVpcInfoTaskResponseBodyApiUpdateVpcInfoResults,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpdateVpcInfoTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUpdateVpcInfoTaskResponseBody;
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
      body: DescribeUpdateVpcInfoTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAccessesRequest extends $tea.Model {
  instanceId?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  port?: string;
  securityToken?: string;
  vpcAccessId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      port: 'Port',
      securityToken: 'SecurityToken',
      vpcAccessId: 'VpcAccessId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      port: 'string',
      securityToken: 'string',
      vpcAccessId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAccessesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  vpcAccessAttributes?: DescribeVpcAccessesResponseBodyVpcAccessAttributes;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpcAccessAttributes: 'VpcAccessAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
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
  statusCode: number;
  body: DescribeVpcAccessesResponseBody;
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
      body: DescribeVpcAccessesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesRequest extends $tea.Model {
  language?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: DescribeZonesResponseBody;
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

export class DetachPluginRequest extends $tea.Model {
  apiId?: string;
  groupId?: string;
  pluginId?: string;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      pluginId: 'PluginId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      pluginId: 'string',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachPluginResponseBody extends $tea.Model {
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

export class DetachPluginResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetachPluginResponseBody;
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
      body: DetachPluginResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableInstanceAccessControlRequest extends $tea.Model {
  aclId?: string;
  addressIPVersion?: string;
  instanceId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      addressIPVersion: 'AddressIPVersion',
      instanceId: 'InstanceId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      addressIPVersion: 'string',
      instanceId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableInstanceAccessControlResponseBody extends $tea.Model {
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

export class DisableInstanceAccessControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableInstanceAccessControlResponseBody;
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
      body: DisableInstanceAccessControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DryRunSwaggerRequest extends $tea.Model {
  data?: string;
  dataFormat?: string;
  globalCondition?: { [key: string]: any };
  groupId?: string;
  overwrite?: boolean;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      dataFormat: 'DataFormat',
      globalCondition: 'GlobalCondition',
      groupId: 'GroupId',
      overwrite: 'Overwrite',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      dataFormat: 'string',
      globalCondition: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      groupId: 'string',
      overwrite: 'boolean',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DryRunSwaggerShrinkRequest extends $tea.Model {
  data?: string;
  dataFormat?: string;
  globalConditionShrink?: string;
  groupId?: string;
  overwrite?: boolean;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      dataFormat: 'DataFormat',
      globalConditionShrink: 'GlobalCondition',
      groupId: 'GroupId',
      overwrite: 'Overwrite',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      dataFormat: 'string',
      globalConditionShrink: 'string',
      groupId: 'string',
      overwrite: 'boolean',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DryRunSwaggerResponseBody extends $tea.Model {
  failed?: DryRunSwaggerResponseBodyFailed;
  globalCondition?: string;
  modelFailed?: DryRunSwaggerResponseBodyModelFailed;
  modelSuccess?: DryRunSwaggerResponseBodyModelSuccess;
  requestId?: string;
  success?: DryRunSwaggerResponseBodySuccess;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      globalCondition: 'GlobalCondition',
      modelFailed: 'ModelFailed',
      modelSuccess: 'ModelSuccess',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: DryRunSwaggerResponseBodyFailed,
      globalCondition: 'string',
      modelFailed: DryRunSwaggerResponseBodyModelFailed,
      modelSuccess: DryRunSwaggerResponseBodyModelSuccess,
      requestId: 'string',
      success: DryRunSwaggerResponseBodySuccess,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DryRunSwaggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DryRunSwaggerResponseBody;
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
      body: DryRunSwaggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableInstanceAccessControlRequest extends $tea.Model {
  aclId?: string;
  aclType?: string;
  addressIPVersion?: string;
  instanceId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclType: 'AclType',
      addressIPVersion: 'AddressIPVersion',
      instanceId: 'InstanceId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclType: 'string',
      addressIPVersion: 'string',
      instanceId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableInstanceAccessControlResponseBody extends $tea.Model {
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

export class EnableInstanceAccessControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableInstanceAccessControlResponseBody;
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
      body: EnableInstanceAccessControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportOASRequest extends $tea.Model {
  authType?: string;
  backendName?: string;
  data?: string;
  groupId?: string;
  ignoreWarning?: boolean;
  OASVersion?: string;
  overwrite?: boolean;
  requestMode?: string;
  securityToken?: string;
  skipDryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      backendName: 'BackendName',
      data: 'Data',
      groupId: 'GroupId',
      ignoreWarning: 'IgnoreWarning',
      OASVersion: 'OASVersion',
      overwrite: 'Overwrite',
      requestMode: 'RequestMode',
      securityToken: 'SecurityToken',
      skipDryRun: 'SkipDryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      backendName: 'string',
      data: 'string',
      groupId: 'string',
      ignoreWarning: 'boolean',
      OASVersion: 'string',
      overwrite: 'boolean',
      requestMode: 'string',
      securityToken: 'string',
      skipDryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportOASResponseBody extends $tea.Model {
  errorMessages?: ImportOASResponseBodyErrorMessages;
  failedApis?: ImportOASResponseBodyFailedApis;
  failedModels?: ImportOASResponseBodyFailedModels;
  operationId?: string;
  requestId?: string;
  successApis?: ImportOASResponseBodySuccessApis;
  successModels?: ImportOASResponseBodySuccessModels;
  warningMessages?: ImportOASResponseBodyWarningMessages;
  static names(): { [key: string]: string } {
    return {
      errorMessages: 'ErrorMessages',
      failedApis: 'FailedApis',
      failedModels: 'FailedModels',
      operationId: 'OperationId',
      requestId: 'RequestId',
      successApis: 'SuccessApis',
      successModels: 'SuccessModels',
      warningMessages: 'WarningMessages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessages: ImportOASResponseBodyErrorMessages,
      failedApis: ImportOASResponseBodyFailedApis,
      failedModels: ImportOASResponseBodyFailedModels,
      operationId: 'string',
      requestId: 'string',
      successApis: ImportOASResponseBodySuccessApis,
      successModels: ImportOASResponseBodySuccessModels,
      warningMessages: ImportOASResponseBodyWarningMessages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportOASResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ImportOASResponseBody;
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
      body: ImportOASResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSwaggerRequest extends $tea.Model {
  data?: string;
  dataFormat?: string;
  dryRun?: boolean;
  globalCondition?: { [key: string]: any };
  groupId?: string;
  overwrite?: boolean;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      dataFormat: 'DataFormat',
      dryRun: 'DryRun',
      globalCondition: 'GlobalCondition',
      groupId: 'GroupId',
      overwrite: 'Overwrite',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      dataFormat: 'string',
      dryRun: 'boolean',
      globalCondition: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      groupId: 'string',
      overwrite: 'boolean',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSwaggerShrinkRequest extends $tea.Model {
  data?: string;
  dataFormat?: string;
  dryRun?: boolean;
  globalConditionShrink?: string;
  groupId?: string;
  overwrite?: boolean;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      dataFormat: 'DataFormat',
      dryRun: 'DryRun',
      globalConditionShrink: 'GlobalCondition',
      groupId: 'GroupId',
      overwrite: 'Overwrite',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      dataFormat: 'string',
      dryRun: 'boolean',
      globalConditionShrink: 'string',
      groupId: 'string',
      overwrite: 'boolean',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSwaggerResponseBody extends $tea.Model {
  failed?: ImportSwaggerResponseBodyFailed;
  modelFailed?: ImportSwaggerResponseBodyModelFailed;
  modelSuccess?: ImportSwaggerResponseBodyModelSuccess;
  requestId?: string;
  success?: ImportSwaggerResponseBodySuccess;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      modelFailed: 'ModelFailed',
      modelSuccess: 'ModelSuccess',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: ImportSwaggerResponseBodyFailed,
      modelFailed: ImportSwaggerResponseBodyModelFailed,
      modelSuccess: ImportSwaggerResponseBodyModelSuccess,
      requestId: 'string',
      success: ImportSwaggerResponseBodySuccess,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSwaggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ImportSwaggerResponseBody;
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
      body: ImportSwaggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
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
  statusCode: number;
  body: ListTagResourcesResponseBody;
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

export class ModifyApiRequest extends $tea.Model {
  allowSignatureMethod?: string;
  apiId?: string;
  apiName?: string;
  appCodeAuthType?: string;
  authType?: string;
  backendEnable?: boolean;
  backendId?: string;
  constantParameters?: string;
  description?: string;
  disableInternet?: boolean;
  errorCodeSamples?: string;
  failResultSample?: string;
  forceNonceCheck?: boolean;
  groupId?: string;
  openIdConnectConfig?: string;
  requestConfig?: string;
  requestParameters?: string;
  resultBodyModel?: string;
  resultDescriptions?: string;
  resultSample?: string;
  resultType?: string;
  securityToken?: string;
  serviceConfig?: string;
  serviceParameters?: string;
  serviceParametersMap?: string;
  systemParameters?: string;
  visibility?: string;
  webSocketApiType?: string;
  static names(): { [key: string]: string } {
    return {
      allowSignatureMethod: 'AllowSignatureMethod',
      apiId: 'ApiId',
      apiName: 'ApiName',
      appCodeAuthType: 'AppCodeAuthType',
      authType: 'AuthType',
      backendEnable: 'BackendEnable',
      backendId: 'BackendId',
      constantParameters: 'ConstantParameters',
      description: 'Description',
      disableInternet: 'DisableInternet',
      errorCodeSamples: 'ErrorCodeSamples',
      failResultSample: 'FailResultSample',
      forceNonceCheck: 'ForceNonceCheck',
      groupId: 'GroupId',
      openIdConnectConfig: 'OpenIdConnectConfig',
      requestConfig: 'RequestConfig',
      requestParameters: 'RequestParameters',
      resultBodyModel: 'ResultBodyModel',
      resultDescriptions: 'ResultDescriptions',
      resultSample: 'ResultSample',
      resultType: 'ResultType',
      securityToken: 'SecurityToken',
      serviceConfig: 'ServiceConfig',
      serviceParameters: 'ServiceParameters',
      serviceParametersMap: 'ServiceParametersMap',
      systemParameters: 'SystemParameters',
      visibility: 'Visibility',
      webSocketApiType: 'WebSocketApiType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowSignatureMethod: 'string',
      apiId: 'string',
      apiName: 'string',
      appCodeAuthType: 'string',
      authType: 'string',
      backendEnable: 'boolean',
      backendId: 'string',
      constantParameters: 'string',
      description: 'string',
      disableInternet: 'boolean',
      errorCodeSamples: 'string',
      failResultSample: 'string',
      forceNonceCheck: 'boolean',
      groupId: 'string',
      openIdConnectConfig: 'string',
      requestConfig: 'string',
      requestParameters: 'string',
      resultBodyModel: 'string',
      resultDescriptions: 'string',
      resultSample: 'string',
      resultType: 'string',
      securityToken: 'string',
      serviceConfig: 'string',
      serviceParameters: 'string',
      serviceParametersMap: 'string',
      systemParameters: 'string',
      visibility: 'string',
      webSocketApiType: 'string',
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
  statusCode: number;
  body: ModifyApiResponseBody;
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
      body: ModifyApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiConfigurationRequest extends $tea.Model {
  allowSignatureMethod?: string;
  apiId?: string;
  apiName?: string;
  appCodeAuthType?: string;
  authType?: string;
  backendName?: string;
  bodyFormat?: string;
  bodyModel?: string;
  contentTypeCategory?: string;
  contentTypeValue?: string;
  description?: string;
  disableInternet?: boolean;
  errorCodeSamples?: string;
  failResultSample?: string;
  forceNonceCheck?: boolean;
  functionComputeConfig?: string;
  httpConfig?: string;
  mockConfig?: string;
  modelName?: string;
  ossConfig?: string;
  postBodyDescription?: string;
  requestHttpMethod?: string;
  requestMode?: string;
  requestParameters?: string;
  requestPath?: string;
  requestProtocol?: string;
  resultSample?: string;
  resultType?: string;
  securityToken?: string;
  serviceParameters?: string;
  serviceParametersMap?: string;
  serviceProtocol?: string;
  serviceTimeout?: number;
  useBackendService?: boolean;
  visibility?: string;
  vpcConfig?: string;
  static names(): { [key: string]: string } {
    return {
      allowSignatureMethod: 'AllowSignatureMethod',
      apiId: 'ApiId',
      apiName: 'ApiName',
      appCodeAuthType: 'AppCodeAuthType',
      authType: 'AuthType',
      backendName: 'BackendName',
      bodyFormat: 'BodyFormat',
      bodyModel: 'BodyModel',
      contentTypeCategory: 'ContentTypeCategory',
      contentTypeValue: 'ContentTypeValue',
      description: 'Description',
      disableInternet: 'DisableInternet',
      errorCodeSamples: 'ErrorCodeSamples',
      failResultSample: 'FailResultSample',
      forceNonceCheck: 'ForceNonceCheck',
      functionComputeConfig: 'FunctionComputeConfig',
      httpConfig: 'HttpConfig',
      mockConfig: 'MockConfig',
      modelName: 'ModelName',
      ossConfig: 'OssConfig',
      postBodyDescription: 'PostBodyDescription',
      requestHttpMethod: 'RequestHttpMethod',
      requestMode: 'RequestMode',
      requestParameters: 'RequestParameters',
      requestPath: 'RequestPath',
      requestProtocol: 'RequestProtocol',
      resultSample: 'ResultSample',
      resultType: 'ResultType',
      securityToken: 'SecurityToken',
      serviceParameters: 'ServiceParameters',
      serviceParametersMap: 'ServiceParametersMap',
      serviceProtocol: 'ServiceProtocol',
      serviceTimeout: 'ServiceTimeout',
      useBackendService: 'UseBackendService',
      visibility: 'Visibility',
      vpcConfig: 'VpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowSignatureMethod: 'string',
      apiId: 'string',
      apiName: 'string',
      appCodeAuthType: 'string',
      authType: 'string',
      backendName: 'string',
      bodyFormat: 'string',
      bodyModel: 'string',
      contentTypeCategory: 'string',
      contentTypeValue: 'string',
      description: 'string',
      disableInternet: 'boolean',
      errorCodeSamples: 'string',
      failResultSample: 'string',
      forceNonceCheck: 'boolean',
      functionComputeConfig: 'string',
      httpConfig: 'string',
      mockConfig: 'string',
      modelName: 'string',
      ossConfig: 'string',
      postBodyDescription: 'string',
      requestHttpMethod: 'string',
      requestMode: 'string',
      requestParameters: 'string',
      requestPath: 'string',
      requestProtocol: 'string',
      resultSample: 'string',
      resultType: 'string',
      securityToken: 'string',
      serviceParameters: 'string',
      serviceParametersMap: 'string',
      serviceProtocol: 'string',
      serviceTimeout: 'number',
      useBackendService: 'boolean',
      visibility: 'string',
      vpcConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiConfigurationResponseBody extends $tea.Model {
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

export class ModifyApiConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyApiConfigurationResponseBody;
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
      body: ModifyApiConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiGroupRequest extends $tea.Model {
  basePath?: string;
  compatibleFlags?: string;
  customTraceConfig?: string;
  customerConfigs?: string;
  defaultDomain?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  passthroughHeaders?: string;
  rpcPattern?: string;
  securityToken?: string;
  tag?: ModifyApiGroupRequestTag[];
  userLogConfig?: string;
  static names(): { [key: string]: string } {
    return {
      basePath: 'BasePath',
      compatibleFlags: 'CompatibleFlags',
      customTraceConfig: 'CustomTraceConfig',
      customerConfigs: 'CustomerConfigs',
      defaultDomain: 'DefaultDomain',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      passthroughHeaders: 'PassthroughHeaders',
      rpcPattern: 'RpcPattern',
      securityToken: 'SecurityToken',
      tag: 'Tag',
      userLogConfig: 'UserLogConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basePath: 'string',
      compatibleFlags: 'string',
      customTraceConfig: 'string',
      customerConfigs: 'string',
      defaultDomain: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      passthroughHeaders: 'string',
      rpcPattern: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': ModifyApiGroupRequestTag },
      userLogConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiGroupResponseBody extends $tea.Model {
  basePath?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  requestId?: string;
  subDomain?: string;
  static names(): { [key: string]: string } {
    return {
      basePath: 'BasePath',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      requestId: 'RequestId',
      subDomain: 'SubDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basePath: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      requestId: 'string',
      subDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyApiGroupResponseBody;
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
      body: ModifyApiGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiGroupVpcWhitelistRequest extends $tea.Model {
  groupId?: string;
  securityToken?: string;
  vpcIds?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      vpcIds: 'VpcIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: ModifyApiGroupVpcWhitelistResponseBody;
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
      body: ModifyApiGroupVpcWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppRequest extends $tea.Model {
  appId?: number;
  appName?: string;
  description?: string;
  securityToken?: string;
  tag?: ModifyAppRequestTag[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      description: 'Description',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      description: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: ModifyAppResponseBody;
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
      body: ModifyAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackendRequest extends $tea.Model {
  backendId?: string;
  backendName?: string;
  backendType?: string;
  description?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      backendName: 'BackendName',
      backendType: 'BackendType',
      description: 'Description',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      backendName: 'string',
      backendType: 'string',
      description: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackendResponseBody extends $tea.Model {
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

export class ModifyBackendResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyBackendResponseBody;
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
      body: ModifyBackendResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackendModelRequest extends $tea.Model {
  backendId?: string;
  backendModelData?: string;
  backendModelId?: string;
  backendType?: string;
  description?: string;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      backendModelData: 'BackendModelData',
      backendModelId: 'BackendModelId',
      backendType: 'BackendType',
      description: 'Description',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      backendModelData: 'string',
      backendModelId: 'string',
      backendType: 'string',
      description: 'string',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackendModelResponseBody extends $tea.Model {
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

export class ModifyBackendModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyBackendModelResponseBody;
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
      body: ModifyBackendModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatasetRequest extends $tea.Model {
  datasetId?: string;
  datasetName?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      datasetName: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatasetResponseBody extends $tea.Model {
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

export class ModifyDatasetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDatasetResponseBody;
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
      body: ModifyDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatasetItemRequest extends $tea.Model {
  datasetId?: string;
  datasetItemId?: string;
  description?: string;
  expiredTime?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetItemId: 'DatasetItemId',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      datasetItemId: 'string',
      description: 'string',
      expiredTime: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatasetItemResponseBody extends $tea.Model {
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

export class ModifyDatasetItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDatasetItemResponseBody;
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
      body: ModifyDatasetItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceSpecRequest extends $tea.Model {
  autoPay?: boolean;
  instanceId?: string;
  instanceSpec?: string;
  modifyAction?: string;
  skipWaitSwitch?: boolean;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      instanceId: 'InstanceId',
      instanceSpec: 'InstanceSpec',
      modifyAction: 'ModifyAction',
      skipWaitSwitch: 'SkipWaitSwitch',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      instanceId: 'string',
      instanceSpec: 'string',
      modifyAction: 'string',
      skipWaitSwitch: 'boolean',
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
  statusCode: number;
  body: ModifyInstanceSpecResponseBody;
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
      body: ModifyInstanceSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIpControlRequest extends $tea.Model {
  description?: string;
  ipControlId?: string;
  ipControlName?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ipControlId: 'IpControlId',
      ipControlName: 'IpControlName',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ipControlId: 'string',
      ipControlName: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: ModifyIpControlResponseBody;
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
      body: ModifyIpControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIpControlPolicyItemRequest extends $tea.Model {
  appId?: string;
  cidrIp?: string;
  ipControlId?: string;
  policyItemId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cidrIp: 'CidrIp',
      ipControlId: 'IpControlId',
      policyItemId: 'PolicyItemId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cidrIp: 'string',
      ipControlId: 'string',
      policyItemId: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: ModifyIpControlPolicyItemResponseBody;
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
      body: ModifyIpControlPolicyItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLogConfigRequest extends $tea.Model {
  logType?: string;
  securityToken?: string;
  slsLogStore?: string;
  slsProject?: string;
  static names(): { [key: string]: string } {
    return {
      logType: 'LogType',
      securityToken: 'SecurityToken',
      slsLogStore: 'SlsLogStore',
      slsProject: 'SlsProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logType: 'string',
      securityToken: 'string',
      slsLogStore: 'string',
      slsProject: 'string',
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
  statusCode: number;
  body: ModifyLogConfigResponseBody;
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
      body: ModifyLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyModelRequest extends $tea.Model {
  description?: string;
  groupId?: string;
  modelName?: string;
  newModelName?: string;
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      modelName: 'ModelName',
      newModelName: 'NewModelName',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      modelName: 'string',
      newModelName: 'string',
      schema: 'string',
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
  statusCode: number;
  body: ModifyModelResponseBody;
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
      body: ModifyModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPluginRequest extends $tea.Model {
  description?: string;
  pluginData?: string;
  pluginId?: string;
  pluginName?: string;
  securityToken?: string;
  tag?: ModifyPluginRequestTag[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      pluginData: 'PluginData',
      pluginId: 'PluginId',
      pluginName: 'PluginName',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      pluginData: 'string',
      pluginId: 'string',
      pluginName: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: ModifyPluginResponseBody;
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
      body: ModifyPluginResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySignatureRequest extends $tea.Model {
  securityToken?: string;
  signatureId?: string;
  signatureKey?: string;
  signatureName?: string;
  signatureSecret?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      signatureId: 'SignatureId',
      signatureKey: 'SignatureKey',
      signatureName: 'SignatureName',
      signatureSecret: 'SignatureSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      signatureId: 'string',
      signatureKey: 'string',
      signatureName: 'string',
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
  statusCode: number;
  body: ModifySignatureResponseBody;
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
      body: ModifySignatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTrafficControlRequest extends $tea.Model {
  apiDefault?: number;
  appDefault?: number;
  description?: string;
  securityToken?: string;
  trafficControlId?: string;
  trafficControlName?: string;
  trafficControlUnit?: string;
  userDefault?: number;
  static names(): { [key: string]: string } {
    return {
      apiDefault: 'ApiDefault',
      appDefault: 'AppDefault',
      description: 'Description',
      securityToken: 'SecurityToken',
      trafficControlId: 'TrafficControlId',
      trafficControlName: 'TrafficControlName',
      trafficControlUnit: 'TrafficControlUnit',
      userDefault: 'UserDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDefault: 'number',
      appDefault: 'number',
      description: 'string',
      securityToken: 'string',
      trafficControlId: 'string',
      trafficControlName: 'string',
      trafficControlUnit: 'string',
      userDefault: 'number',
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
  statusCode: number;
  body: ModifyTrafficControlResponseBody;
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
      body: ModifyTrafficControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcAccessAndUpdateApisRequest extends $tea.Model {
  instanceId?: string;
  name?: string;
  needBatchWork?: boolean;
  port?: number;
  refresh?: boolean;
  securityToken?: string;
  token?: string;
  vpcId?: string;
  vpcTargetHostName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      needBatchWork: 'NeedBatchWork',
      port: 'Port',
      refresh: 'Refresh',
      securityToken: 'SecurityToken',
      token: 'Token',
      vpcId: 'VpcId',
      vpcTargetHostName: 'VpcTargetHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      needBatchWork: 'boolean',
      port: 'number',
      refresh: 'boolean',
      securityToken: 'string',
      token: 'string',
      vpcId: 'string',
      vpcTargetHostName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcAccessAndUpdateApisResponseBody extends $tea.Model {
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

export class ModifyVpcAccessAndUpdateApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyVpcAccessAndUpdateApisResponseBody;
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
      body: ModifyVpcAccessAndUpdateApisResponseBody,
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
  statusCode: number;
  body: OpenApiGatewayServiceResponseBody;
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
      body: OpenApiGatewayServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRequestLogsRequest extends $tea.Model {
  requestLogId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      requestLogId: 'RequestLogId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestLogId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRequestLogsResponseBody extends $tea.Model {
  requestId?: string;
  requestLogs?: QueryRequestLogsResponseBodyRequestLogs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      requestLogs: 'RequestLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      requestLogs: QueryRequestLogsResponseBodyRequestLogs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRequestLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryRequestLogsResponseBody;
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
      body: QueryRequestLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReactivateDomainRequest extends $tea.Model {
  domainName?: string;
  groupId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      groupId: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: ReactivateDomainResponseBody;
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
      body: ReactivateDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAccessControlListEntryRequest extends $tea.Model {
  aclEntrys?: string;
  aclId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntrys: 'AclEntrys',
      aclId: 'AclId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntrys: 'string',
      aclId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAccessControlListEntryResponseBody extends $tea.Model {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveAccessControlListEntryResponseBody;
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

export class RemoveApisAuthoritiesRequest extends $tea.Model {
  apiIds?: string;
  appId?: number;
  description?: string;
  groupId?: string;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiIds: 'ApiIds',
      appId: 'AppId',
      description: 'Description',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIds: 'string',
      appId: 'number',
      description: 'string',
      groupId: 'string',
      securityToken: 'string',
      stageName: 'string',
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
  statusCode: number;
  body: RemoveApisAuthoritiesResponseBody;
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
      body: RemoveApisAuthoritiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAppsAuthoritiesRequest extends $tea.Model {
  apiId?: string;
  appIds?: string;
  groupId?: string;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      appIds: 'AppIds',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      appIds: 'string',
      groupId: 'string',
      securityToken: 'string',
      stageName: 'string',
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
  statusCode: number;
  body: RemoveAppsAuthoritiesResponseBody;
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
      body: RemoveAppsAuthoritiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveIpControlApisRequest extends $tea.Model {
  apiIds?: string;
  groupId?: string;
  ipControlId?: string;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiIds: 'ApiIds',
      groupId: 'GroupId',
      ipControlId: 'IpControlId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIds: 'string',
      groupId: 'string',
      ipControlId: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: RemoveIpControlApisResponseBody;
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
      body: RemoveIpControlApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveIpControlPolicyItemRequest extends $tea.Model {
  ipControlId?: string;
  policyItemIds?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ipControlId: 'IpControlId',
      policyItemIds: 'PolicyItemIds',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipControlId: 'string',
      policyItemIds: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: RemoveIpControlPolicyItemResponseBody;
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
      body: RemoveIpControlPolicyItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSignatureApisRequest extends $tea.Model {
  apiIds?: string;
  groupId?: string;
  securityToken?: string;
  signatureId?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiIds: 'ApiIds',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      signatureId: 'SignatureId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIds: 'string',
      groupId: 'string',
      securityToken: 'string',
      signatureId: 'string',
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
  statusCode: number;
  body: RemoveSignatureApisResponseBody;
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
      body: RemoveSignatureApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTrafficControlApisRequest extends $tea.Model {
  apiIds?: string;
  groupId?: string;
  securityToken?: string;
  stageName?: string;
  trafficControlId?: string;
  static names(): { [key: string]: string } {
    return {
      apiIds: 'ApiIds',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
      trafficControlId: 'TrafficControlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIds: 'string',
      groupId: 'string',
      securityToken: 'string',
      stageName: 'string',
      trafficControlId: 'string',
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
  statusCode: number;
  body: RemoveTrafficControlApisResponseBody;
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
      body: RemoveTrafficControlApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVpcAccessRequest extends $tea.Model {
  instanceId?: string;
  needBatchWork?: boolean;
  port?: number;
  securityToken?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      needBatchWork: 'NeedBatchWork',
      port: 'Port',
      securityToken: 'SecurityToken',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      needBatchWork: 'boolean',
      port: 'number',
      securityToken: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVpcAccessResponseBody extends $tea.Model {
  apis?: RemoveVpcAccessResponseBodyApis;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apis: 'Apis',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apis: RemoveVpcAccessResponseBodyApis,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVpcAccessResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveVpcAccessResponseBody;
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
      body: RemoveVpcAccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVpcAccessAndAbolishApisRequest extends $tea.Model {
  instanceId?: string;
  needBatchWork?: boolean;
  port?: number;
  securityToken?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      needBatchWork: 'NeedBatchWork',
      port: 'Port',
      securityToken: 'SecurityToken',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      needBatchWork: 'boolean',
      port: 'number',
      securityToken: 'string',
      vpcId: 'string',
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
  statusCode: number;
  body: RemoveVpcAccessAndAbolishApisResponseBody;
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
      body: RemoveVpcAccessAndAbolishApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAppCodeRequest extends $tea.Model {
  appCode?: string;
  newAppCode?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      newAppCode: 'NewAppCode',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      newAppCode: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: ResetAppCodeResponseBody;
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
      body: ResetAppCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAppSecretRequest extends $tea.Model {
  appKey?: string;
  newAppKey?: string;
  newAppSecret?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      newAppKey: 'NewAppKey',
      newAppSecret: 'NewAppSecret',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      newAppKey: 'string',
      newAppSecret: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: ResetAppSecretResponseBody;
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
      body: ResetAppSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdkGenerateByAppRequest extends $tea.Model {
  appId?: number;
  language?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      language: 'Language',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      language: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: SdkGenerateByAppResponseBody;
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
      body: SdkGenerateByAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdkGenerateByAppForRegionRequest extends $tea.Model {
  appId?: number;
  language?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      language: 'Language',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      language: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdkGenerateByAppForRegionResponseBody extends $tea.Model {
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

export class SdkGenerateByAppForRegionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SdkGenerateByAppForRegionResponseBody;
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
      body: SdkGenerateByAppForRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdkGenerateByGroupRequest extends $tea.Model {
  groupId?: string;
  language?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      language: 'Language',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      language: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: SdkGenerateByGroupResponseBody;
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
      body: SdkGenerateByGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAccessControlListAttributeRequest extends $tea.Model {
  aclId?: string;
  aclName?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclName: 'AclName',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclName: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAccessControlListAttributeResponseBody extends $tea.Model {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: SetAccessControlListAttributeResponseBody;
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

export class SetApisAuthoritiesRequest extends $tea.Model {
  apiIds?: string;
  appId?: number;
  authValidTime?: string;
  description?: string;
  groupId?: string;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiIds: 'ApiIds',
      appId: 'AppId',
      authValidTime: 'AuthValidTime',
      description: 'Description',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIds: 'string',
      appId: 'number',
      authValidTime: 'string',
      description: 'string',
      groupId: 'string',
      securityToken: 'string',
      stageName: 'string',
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
  statusCode: number;
  body: SetApisAuthoritiesResponseBody;
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
      body: SetApisAuthoritiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAppsAuthoritiesRequest extends $tea.Model {
  apiId?: string;
  appIds?: string;
  authValidTime?: string;
  description?: string;
  groupId?: string;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      appIds: 'AppIds',
      authValidTime: 'AuthValidTime',
      description: 'Description',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      appIds: 'string',
      authValidTime: 'string',
      description: 'string',
      groupId: 'string',
      securityToken: 'string',
      stageName: 'string',
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
  statusCode: number;
  body: SetAppsAuthoritiesResponseBody;
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
      body: SetAppsAuthoritiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainRequest extends $tea.Model {
  bindStageName?: string;
  customDomainType?: string;
  domainName?: string;
  groupId?: string;
  isForce?: boolean;
  isHttpRedirectToHttps?: boolean;
  static names(): { [key: string]: string } {
    return {
      bindStageName: 'BindStageName',
      customDomainType: 'CustomDomainType',
      domainName: 'DomainName',
      groupId: 'GroupId',
      isForce: 'IsForce',
      isHttpRedirectToHttps: 'IsHttpRedirectToHttps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindStageName: 'string',
      customDomainType: 'string',
      domainName: 'string',
      groupId: 'string',
      isForce: 'boolean',
      isHttpRedirectToHttps: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainResponseBody extends $tea.Model {
  domainBindingStatus?: string;
  domainLegalStatus?: string;
  domainName?: string;
  domainRemark?: string;
  domainWebSocketStatus?: string;
  groupId?: string;
  requestId?: string;
  subDomain?: string;
  static names(): { [key: string]: string } {
    return {
      domainBindingStatus: 'DomainBindingStatus',
      domainLegalStatus: 'DomainLegalStatus',
      domainName: 'DomainName',
      domainRemark: 'DomainRemark',
      domainWebSocketStatus: 'DomainWebSocketStatus',
      groupId: 'GroupId',
      requestId: 'RequestId',
      subDomain: 'SubDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainBindingStatus: 'string',
      domainLegalStatus: 'string',
      domainName: 'string',
      domainRemark: 'string',
      domainWebSocketStatus: 'string',
      groupId: 'string',
      requestId: 'string',
      subDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDomainResponseBody;
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
      body: SetDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainCertificateRequest extends $tea.Model {
  caCertificateBody?: string;
  certificateBody?: string;
  certificateName?: string;
  certificatePrivateKey?: string;
  domainName?: string;
  groupId?: string;
  securityToken?: string;
  sslVerifyDepth?: string;
  static names(): { [key: string]: string } {
    return {
      caCertificateBody: 'CaCertificateBody',
      certificateBody: 'CertificateBody',
      certificateName: 'CertificateName',
      certificatePrivateKey: 'CertificatePrivateKey',
      domainName: 'DomainName',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      sslVerifyDepth: 'SslVerifyDepth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertificateBody: 'string',
      certificateBody: 'string',
      certificateName: 'string',
      certificatePrivateKey: 'string',
      domainName: 'string',
      groupId: 'string',
      securityToken: 'string',
      sslVerifyDepth: 'string',
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
  statusCode: number;
  body: SetDomainCertificateResponseBody;
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
      body: SetDomainCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainWebSocketStatusRequest extends $tea.Model {
  actionValue?: string;
  domainName?: string;
  groupId?: string;
  securityToken?: string;
  WSSEnable?: string;
  static names(): { [key: string]: string } {
    return {
      actionValue: 'ActionValue',
      domainName: 'DomainName',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      WSSEnable: 'WSSEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionValue: 'string',
      domainName: 'string',
      groupId: 'string',
      securityToken: 'string',
      WSSEnable: 'string',
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
  statusCode: number;
  body: SetDomainWebSocketStatusResponseBody;
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
      body: SetDomainWebSocketStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGroupAuthAppCodeRequest extends $tea.Model {
  authAppCode?: string;
  groupId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      authAppCode: 'AuthAppCode',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAppCode: 'string',
      groupId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGroupAuthAppCodeResponseBody extends $tea.Model {
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

export class SetGroupAuthAppCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetGroupAuthAppCodeResponseBody;
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
      body: SetGroupAuthAppCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIpControlApisRequest extends $tea.Model {
  apiIds?: string;
  groupId?: string;
  ipControlId?: string;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiIds: 'ApiIds',
      groupId: 'GroupId',
      ipControlId: 'IpControlId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIds: 'string',
      groupId: 'string',
      ipControlId: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: SetIpControlApisResponseBody;
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
      body: SetIpControlApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSignatureApisRequest extends $tea.Model {
  apiIds?: string;
  groupId?: string;
  securityToken?: string;
  signatureId?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiIds: 'ApiIds',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      signatureId: 'SignatureId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIds: 'string',
      groupId: 'string',
      securityToken: 'string',
      signatureId: 'string',
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
  statusCode: number;
  body: SetSignatureApisResponseBody;
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
      body: SetSignatureApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTrafficControlApisRequest extends $tea.Model {
  apiIds?: string;
  groupId?: string;
  securityToken?: string;
  stageName?: string;
  trafficControlId?: string;
  static names(): { [key: string]: string } {
    return {
      apiIds: 'ApiIds',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
      trafficControlId: 'TrafficControlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIds: 'string',
      groupId: 'string',
      securityToken: 'string',
      stageName: 'string',
      trafficControlId: 'string',
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
  statusCode: number;
  body: SetTrafficControlApisResponseBody;
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
      body: SetTrafficControlApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVpcAccessRequest extends $tea.Model {
  description?: string;
  instanceId?: string;
  name?: string;
  port?: number;
  securityToken?: string;
  vpcId?: string;
  vpcTargetHostName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      port: 'Port',
      securityToken: 'SecurityToken',
      vpcId: 'VpcId',
      vpcTargetHostName: 'VpcTargetHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      name: 'string',
      port: 'number',
      securityToken: 'string',
      vpcId: 'string',
      vpcTargetHostName: 'string',
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
  statusCode: number;
  body: SetVpcAccessResponseBody;
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
      body: SetVpcAccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetWildcardDomainPatternsRequest extends $tea.Model {
  domainName?: string;
  groupId?: string;
  securityToken?: string;
  wildcardDomainPatterns?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      wildcardDomainPatterns: 'WildcardDomainPatterns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      groupId: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: SetWildcardDomainPatternsResponseBody;
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
      body: SetWildcardDomainPatternsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchApiRequest extends $tea.Model {
  apiId?: string;
  description?: string;
  groupId?: string;
  historyVersion?: string;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      description: 'Description',
      groupId: 'GroupId',
      historyVersion: 'HistoryVersion',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      description: 'string',
      groupId: 'string',
      historyVersion: 'string',
      securityToken: 'string',
      stageName: 'string',
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
  statusCode: number;
  body: SwitchApiResponseBody;
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
      body: SwitchApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  resourceId?: string[];
  resourceType?: string;
  securityToken?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: TagResourcesResponseBody;
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
  all?: boolean;
  resourceId?: string[];
  resourceType?: string;
  securityToken?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      securityToken: 'SecurityToken',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      securityToken: 'string',
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
  statusCode: number;
  body: UntagResourcesResponseBody;
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

export class ValidateVpcConnectivityRequest extends $tea.Model {
  instanceId?: string;
  securityToken?: string;
  vpcAccessId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      securityToken: 'SecurityToken',
      vpcAccessId: 'VpcAccessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      securityToken: 'string',
      vpcAccessId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateVpcConnectivityResponseBody extends $tea.Model {
  connected?: boolean;
  ipType?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      connected: 'Connected',
      ipType: 'IpType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connected: 'boolean',
      ipType: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateVpcConnectivityResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ValidateVpcConnectivityResponseBody;
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
      body: ValidateVpcConnectivityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAbolishApisRequestApi extends $tea.Model {
  apiUid?: string;
  groupId?: string;
  stageId?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiUid: 'ApiUid',
      groupId: 'GroupId',
      stageId: 'StageId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiUid: 'string',
      groupId: 'string',
      stageId: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeployApisRequestApi extends $tea.Model {
  apiUid?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      apiUid: 'ApiUid',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiUid: 'string',
      groupId: 'string',
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

export class CreateInstanceRequestTag extends $tea.Model {
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

export class CreateInstanceRequestZoneVSwitchSecurityGroup extends $tea.Model {
  cidrBlock?: string;
  securityGroupId?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
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

export class DescribeAbolishApiTaskResponseBodyApiAbolishResultsApiAbolishResult extends $tea.Model {
  abolishStatus?: string;
  apiName?: string;
  apiUid?: string;
  errorMsg?: string;
  groupId?: string;
  groupName?: string;
  stageId?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      abolishStatus: 'AbolishStatus',
      apiName: 'ApiName',
      apiUid: 'ApiUid',
      errorMsg: 'ErrorMsg',
      groupId: 'GroupId',
      groupName: 'GroupName',
      stageId: 'StageId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abolishStatus: 'string',
      apiName: 'string',
      apiUid: 'string',
      errorMsg: 'string',
      groupId: 'string',
      groupName: 'string',
      stageId: 'string',
      stageName: 'string',
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

export class DescribeAccessControlListAttributeResponseBodyAclEntrysAclEntry extends $tea.Model {
  aclEntryComment?: string;
  aclEntryIp?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntryComment: 'AclEntryComment',
      aclEntryIp: 'AclEntryIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntryComment: 'string',
      aclEntryIp: 'string',
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

export class DescribeAccessControlListsResponseBodyAclsAcl extends $tea.Model {
  aclId?: string;
  aclName?: string;
  addressIPVersion?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclName: 'AclName',
      addressIPVersion: 'AddressIPVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclName: 'string',
      addressIPVersion: 'string',
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

export class DescribeApiResponseBodyBackendConfig extends $tea.Model {
  backendId?: string;
  backendName?: string;
  backendType?: string;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      backendName: 'BackendName',
      backendType: 'BackendType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      backendName: 'string',
      backendType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyConstantParametersConstantParameter extends $tea.Model {
  constantValue?: string;
  description?: string;
  location?: string;
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      constantValue: 'ConstantValue',
      description: 'Description',
      location: 'Location',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constantValue: 'string',
      description: 'string',
      location: 'string',
      serviceParameterName: 'string',
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

export class DescribeApiResponseBodyCustomSystemParametersCustomSystemParameter extends $tea.Model {
  demoValue?: string;
  description?: string;
  location?: string;
  parameterName?: string;
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      demoValue: 'DemoValue',
      description: 'Description',
      location: 'Location',
      parameterName: 'ParameterName',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoValue: 'string',
      description: 'string',
      location: 'string',
      parameterName: 'string',
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

export class DescribeApiResponseBodyDeployedInfosDeployedInfo extends $tea.Model {
  deployedStatus?: string;
  effectiveVersion?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      deployedStatus: 'DeployedStatus',
      effectiveVersion: 'EffectiveVersion',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployedStatus: 'string',
      effectiveVersion: 'string',
      stageName: 'string',
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

export class DescribeApiResponseBodyErrorCodeSamplesErrorCodeSample extends $tea.Model {
  code?: string;
  description?: string;
  message?: string;
  model?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      message: 'Message',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      message: 'string',
      model: 'string',
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

export class DescribeApiResponseBodyOpenIdConnectConfig extends $tea.Model {
  idTokenParamName?: string;
  openIdApiType?: string;
  publicKey?: string;
  publicKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      idTokenParamName: 'IdTokenParamName',
      openIdApiType: 'OpenIdApiType',
      publicKey: 'PublicKey',
      publicKeyId: 'PublicKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idTokenParamName: 'string',
      openIdApiType: 'string',
      publicKey: 'string',
      publicKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyRequestConfig extends $tea.Model {
  bodyFormat?: string;
  bodyModel?: string;
  postBodyDescription?: string;
  requestHttpMethod?: string;
  requestMode?: string;
  requestPath?: string;
  requestProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      bodyFormat: 'BodyFormat',
      bodyModel: 'BodyModel',
      postBodyDescription: 'PostBodyDescription',
      requestHttpMethod: 'RequestHttpMethod',
      requestMode: 'RequestMode',
      requestPath: 'RequestPath',
      requestProtocol: 'RequestProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyFormat: 'string',
      bodyModel: 'string',
      postBodyDescription: 'string',
      requestHttpMethod: 'string',
      requestMode: 'string',
      requestPath: 'string',
      requestProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyRequestParametersRequestParameter extends $tea.Model {
  apiParameterName?: string;
  arrayItemsType?: string;
  defaultValue?: string;
  demoValue?: string;
  description?: string;
  docOrder?: number;
  docShow?: string;
  enumValue?: string;
  jsonScheme?: string;
  location?: string;
  maxLength?: number;
  maxValue?: number;
  minLength?: number;
  minValue?: number;
  parameterType?: string;
  regularExpression?: string;
  required?: string;
  static names(): { [key: string]: string } {
    return {
      apiParameterName: 'ApiParameterName',
      arrayItemsType: 'ArrayItemsType',
      defaultValue: 'DefaultValue',
      demoValue: 'DemoValue',
      description: 'Description',
      docOrder: 'DocOrder',
      docShow: 'DocShow',
      enumValue: 'EnumValue',
      jsonScheme: 'JsonScheme',
      location: 'Location',
      maxLength: 'MaxLength',
      maxValue: 'MaxValue',
      minLength: 'MinLength',
      minValue: 'MinValue',
      parameterType: 'ParameterType',
      regularExpression: 'RegularExpression',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiParameterName: 'string',
      arrayItemsType: 'string',
      defaultValue: 'string',
      demoValue: 'string',
      description: 'string',
      docOrder: 'number',
      docShow: 'string',
      enumValue: 'string',
      jsonScheme: 'string',
      location: 'string',
      maxLength: 'number',
      maxValue: 'number',
      minLength: 'number',
      minValue: 'number',
      parameterType: 'string',
      regularExpression: 'string',
      required: 'string',
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

export class DescribeApiResponseBodyResultDescriptionsResultDescription extends $tea.Model {
  description?: string;
  hasChild?: boolean;
  id?: string;
  key?: string;
  mandatory?: boolean;
  name?: string;
  pid?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      hasChild: 'HasChild',
      id: 'Id',
      key: 'Key',
      mandatory: 'Mandatory',
      name: 'Name',
      pid: 'Pid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hasChild: 'boolean',
      id: 'string',
      key: 'string',
      mandatory: 'boolean',
      name: 'string',
      pid: 'string',
      type: 'string',
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

export class DescribeApiResponseBodyServiceConfigEventBridgeConfig extends $tea.Model {
  eventBridgeRegionId?: string;
  eventBus?: string;
  eventSource?: string;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      eventBridgeRegionId: 'EventBridgeRegionId',
      eventBus: 'EventBus',
      eventSource: 'EventSource',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBridgeRegionId: 'string',
      eventBus: 'string',
      eventSource: 'string',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyServiceConfigFunctionComputeConfig extends $tea.Model {
  contentTypeCatagory?: string;
  contentTypeValue?: string;
  fcBaseUrl?: string;
  fcType?: string;
  functionName?: string;
  method?: string;
  onlyBusinessPath?: boolean;
  path?: string;
  qualifier?: string;
  regionId?: string;
  roleArn?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      contentTypeCatagory: 'ContentTypeCatagory',
      contentTypeValue: 'ContentTypeValue',
      fcBaseUrl: 'FcBaseUrl',
      fcType: 'FcType',
      functionName: 'FunctionName',
      method: 'Method',
      onlyBusinessPath: 'OnlyBusinessPath',
      path: 'Path',
      qualifier: 'Qualifier',
      regionId: 'RegionId',
      roleArn: 'RoleArn',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentTypeCatagory: 'string',
      contentTypeValue: 'string',
      fcBaseUrl: 'string',
      fcType: 'string',
      functionName: 'string',
      method: 'string',
      onlyBusinessPath: 'boolean',
      path: 'string',
      qualifier: 'string',
      regionId: 'string',
      roleArn: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyServiceConfigMockHeadersMockHeader extends $tea.Model {
  headerName?: string;
  headerValue?: string;
  static names(): { [key: string]: string } {
    return {
      headerName: 'HeaderName',
      headerValue: 'HeaderValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerName: 'string',
      headerValue: 'string',
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

export class DescribeApiResponseBodyServiceConfigOssConfig extends $tea.Model {
  action?: string;
  bucketName?: string;
  key?: string;
  ossRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      bucketName: 'BucketName',
      key: 'Key',
      ossRegionId: 'OssRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      bucketName: 'string',
      key: 'string',
      ossRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyServiceConfigVpcConfig extends $tea.Model {
  instanceId?: string;
  name?: string;
  port?: number;
  vpcId?: string;
  vpcScheme?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      port: 'Port',
      vpcId: 'VpcId',
      vpcScheme: 'VpcScheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      port: 'number',
      vpcId: 'string',
      vpcScheme: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyServiceConfig extends $tea.Model {
  aoneAppName?: string;
  contentTypeCatagory?: string;
  contentTypeValue?: string;
  eventBridgeConfig?: DescribeApiResponseBodyServiceConfigEventBridgeConfig;
  functionComputeConfig?: DescribeApiResponseBodyServiceConfigFunctionComputeConfig;
  mock?: string;
  mockHeaders?: DescribeApiResponseBodyServiceConfigMockHeaders;
  mockResult?: string;
  mockStatusCode?: number;
  ossConfig?: DescribeApiResponseBodyServiceConfigOssConfig;
  serviceAddress?: string;
  serviceHttpMethod?: string;
  servicePath?: string;
  serviceProtocol?: string;
  serviceTimeout?: number;
  serviceVpcEnable?: string;
  vpcConfig?: DescribeApiResponseBodyServiceConfigVpcConfig;
  static names(): { [key: string]: string } {
    return {
      aoneAppName: 'AoneAppName',
      contentTypeCatagory: 'ContentTypeCatagory',
      contentTypeValue: 'ContentTypeValue',
      eventBridgeConfig: 'EventBridgeConfig',
      functionComputeConfig: 'FunctionComputeConfig',
      mock: 'Mock',
      mockHeaders: 'MockHeaders',
      mockResult: 'MockResult',
      mockStatusCode: 'MockStatusCode',
      ossConfig: 'OssConfig',
      serviceAddress: 'ServiceAddress',
      serviceHttpMethod: 'ServiceHttpMethod',
      servicePath: 'ServicePath',
      serviceProtocol: 'ServiceProtocol',
      serviceTimeout: 'ServiceTimeout',
      serviceVpcEnable: 'ServiceVpcEnable',
      vpcConfig: 'VpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aoneAppName: 'string',
      contentTypeCatagory: 'string',
      contentTypeValue: 'string',
      eventBridgeConfig: DescribeApiResponseBodyServiceConfigEventBridgeConfig,
      functionComputeConfig: DescribeApiResponseBodyServiceConfigFunctionComputeConfig,
      mock: 'string',
      mockHeaders: DescribeApiResponseBodyServiceConfigMockHeaders,
      mockResult: 'string',
      mockStatusCode: 'number',
      ossConfig: DescribeApiResponseBodyServiceConfigOssConfig,
      serviceAddress: 'string',
      serviceHttpMethod: 'string',
      servicePath: 'string',
      serviceProtocol: 'string',
      serviceTimeout: 'number',
      serviceVpcEnable: 'string',
      vpcConfig: DescribeApiResponseBodyServiceConfigVpcConfig,
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

export class DescribeApiResponseBodySystemParametersSystemParameter extends $tea.Model {
  demoValue?: string;
  description?: string;
  location?: string;
  parameterName?: string;
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      demoValue: 'DemoValue',
      description: 'Description',
      location: 'Location',
      parameterName: 'ParameterName',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoValue: 'string',
      description: 'string',
      location: 'string',
      parameterName: 'string',
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

export class DescribeApiDocResponseBodyErrorCodeSamplesErrorCodeSample extends $tea.Model {
  code?: string;
  description?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      message: 'string',
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

export class DescribeApiDocResponseBodyRequestConfig extends $tea.Model {
  bodyFormat?: string;
  postBodyDescription?: string;
  requestHttpMethod?: string;
  requestMode?: string;
  requestPath?: string;
  requestProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      bodyFormat: 'BodyFormat',
      postBodyDescription: 'PostBodyDescription',
      requestHttpMethod: 'RequestHttpMethod',
      requestMode: 'RequestMode',
      requestPath: 'RequestPath',
      requestProtocol: 'RequestProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyFormat: 'string',
      postBodyDescription: 'string',
      requestHttpMethod: 'string',
      requestMode: 'string',
      requestPath: 'string',
      requestProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiDocResponseBodyRequestParametersRequestParameter extends $tea.Model {
  apiParameterName?: string;
  arrayItemsType?: string;
  defaultValue?: string;
  demoValue?: string;
  description?: string;
  docOrder?: number;
  docShow?: string;
  enumValue?: string;
  jsonScheme?: string;
  location?: string;
  maxLength?: number;
  maxValue?: number;
  minLength?: number;
  minValue?: number;
  parameterType?: string;
  regularExpression?: string;
  required?: string;
  static names(): { [key: string]: string } {
    return {
      apiParameterName: 'ApiParameterName',
      arrayItemsType: 'ArrayItemsType',
      defaultValue: 'DefaultValue',
      demoValue: 'DemoValue',
      description: 'Description',
      docOrder: 'DocOrder',
      docShow: 'DocShow',
      enumValue: 'EnumValue',
      jsonScheme: 'JsonScheme',
      location: 'Location',
      maxLength: 'MaxLength',
      maxValue: 'MaxValue',
      minLength: 'MinLength',
      minValue: 'MinValue',
      parameterType: 'ParameterType',
      regularExpression: 'RegularExpression',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiParameterName: 'string',
      arrayItemsType: 'string',
      defaultValue: 'string',
      demoValue: 'string',
      description: 'string',
      docOrder: 'number',
      docShow: 'string',
      enumValue: 'string',
      jsonScheme: 'string',
      location: 'string',
      maxLength: 'number',
      maxValue: 'number',
      minLength: 'number',
      minValue: 'number',
      parameterType: 'string',
      regularExpression: 'string',
      required: 'string',
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

export class DescribeApiDocResponseBodyResultDescriptionsResultDescription extends $tea.Model {
  description?: string;
  hasChild?: boolean;
  id?: string;
  key?: string;
  mandatory?: boolean;
  name?: string;
  pid?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      hasChild: 'HasChild',
      id: 'Id',
      key: 'Key',
      mandatory: 'Mandatory',
      name: 'Name',
      pid: 'Pid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hasChild: 'boolean',
      id: 'string',
      key: 'string',
      mandatory: 'boolean',
      name: 'string',
      pid: 'string',
      type: 'string',
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
  certificateId?: string;
  certificateName?: string;
  certificateValidEnd?: number;
  certificateValidStart?: number;
  customDomainType?: string;
  domainBindingStatus?: string;
  domainCNAMEStatus?: string;
  domainLegalStatus?: string;
  domainName?: string;
  domainRemark?: string;
  domainWebSocketStatus?: string;
  isHttpRedirectToHttps?: boolean;
  wildcardDomainPatterns?: string;
  wssEnable?: string;
  static names(): { [key: string]: string } {
    return {
      bindStageName: 'BindStageName',
      certificateId: 'CertificateId',
      certificateName: 'CertificateName',
      certificateValidEnd: 'CertificateValidEnd',
      certificateValidStart: 'CertificateValidStart',
      customDomainType: 'CustomDomainType',
      domainBindingStatus: 'DomainBindingStatus',
      domainCNAMEStatus: 'DomainCNAMEStatus',
      domainLegalStatus: 'DomainLegalStatus',
      domainName: 'DomainName',
      domainRemark: 'DomainRemark',
      domainWebSocketStatus: 'DomainWebSocketStatus',
      isHttpRedirectToHttps: 'IsHttpRedirectToHttps',
      wildcardDomainPatterns: 'WildcardDomainPatterns',
      wssEnable: 'WssEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindStageName: 'string',
      certificateId: 'string',
      certificateName: 'string',
      certificateValidEnd: 'number',
      certificateValidStart: 'number',
      customDomainType: 'string',
      domainBindingStatus: 'string',
      domainCNAMEStatus: 'string',
      domainLegalStatus: 'string',
      domainName: 'string',
      domainRemark: 'string',
      domainWebSocketStatus: 'string',
      isHttpRedirectToHttps: 'boolean',
      wildcardDomainPatterns: 'string',
      wssEnable: 'string',
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
  description?: string;
  stageId?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      stageId: 'StageId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      stageId: 'string',
      stageName: 'string',
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
  createdTime?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  httpsPolicy?: string;
  illegalStatus?: string;
  instanceId?: string;
  instanceType?: string;
  modifiedTime?: string;
  regionId?: string;
  subDomain?: string;
  tags?: DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttributeTags;
  trafficLimit?: number;
  static names(): { [key: string]: string } {
    return {
      basePath: 'BasePath',
      billingStatus: 'BillingStatus',
      createdTime: 'CreatedTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      httpsPolicy: 'HttpsPolicy',
      illegalStatus: 'IllegalStatus',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      modifiedTime: 'ModifiedTime',
      regionId: 'RegionId',
      subDomain: 'SubDomain',
      tags: 'Tags',
      trafficLimit: 'TrafficLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basePath: 'string',
      billingStatus: 'string',
      createdTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      httpsPolicy: 'string',
      illegalStatus: 'string',
      instanceId: 'string',
      instanceType: 'string',
      modifiedTime: 'string',
      regionId: 'string',
      subDomain: 'string',
      tags: DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttributeTags,
      trafficLimit: 'number',
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

export class DescribeApiHistoriesResponseBodyApiHisItemsApiHisItem extends $tea.Model {
  apiId?: string;
  apiName?: string;
  deployedTime?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  historyVersion?: string;
  regionId?: string;
  stageName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      deployedTime: 'DeployedTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      historyVersion: 'HistoryVersion',
      regionId: 'RegionId',
      stageName: 'StageName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      deployedTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      historyVersion: 'string',
      regionId: 'string',
      stageName: 'string',
      status: 'string',
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

export class DescribeApiHistoryResponseBodyBackendConfig extends $tea.Model {
  backendId?: string;
  backendName?: string;
  backendType?: string;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      backendName: 'BackendName',
      backendType: 'BackendType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      backendName: 'string',
      backendType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyConstantParametersConstantParameter extends $tea.Model {
  constantValue?: string;
  description?: string;
  location?: string;
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      constantValue: 'ConstantValue',
      description: 'Description',
      location: 'Location',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constantValue: 'string',
      description: 'string',
      location: 'string',
      serviceParameterName: 'string',
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

export class DescribeApiHistoryResponseBodyCustomSystemParametersCustomSystemParameter extends $tea.Model {
  demoValue?: string;
  description?: string;
  location?: string;
  parameterName?: string;
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      demoValue: 'DemoValue',
      description: 'Description',
      location: 'Location',
      parameterName: 'ParameterName',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoValue: 'string',
      description: 'string',
      location: 'string',
      parameterName: 'string',
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

export class DescribeApiHistoryResponseBodyErrorCodeSamplesErrorCodeSample extends $tea.Model {
  code?: string;
  description?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      message: 'string',
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

export class DescribeApiHistoryResponseBodyOpenIdConnectConfig extends $tea.Model {
  idTokenParamName?: string;
  openIdApiType?: string;
  publicKey?: string;
  publicKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      idTokenParamName: 'IdTokenParamName',
      openIdApiType: 'OpenIdApiType',
      publicKey: 'PublicKey',
      publicKeyId: 'PublicKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idTokenParamName: 'string',
      openIdApiType: 'string',
      publicKey: 'string',
      publicKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyRequestConfig extends $tea.Model {
  bodyFormat?: string;
  bodyModel?: string;
  postBodyDescription?: string;
  requestHttpMethod?: string;
  requestMode?: string;
  requestPath?: string;
  requestProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      bodyFormat: 'BodyFormat',
      bodyModel: 'BodyModel',
      postBodyDescription: 'PostBodyDescription',
      requestHttpMethod: 'RequestHttpMethod',
      requestMode: 'RequestMode',
      requestPath: 'RequestPath',
      requestProtocol: 'RequestProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyFormat: 'string',
      bodyModel: 'string',
      postBodyDescription: 'string',
      requestHttpMethod: 'string',
      requestMode: 'string',
      requestPath: 'string',
      requestProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyRequestParametersRequestParameter extends $tea.Model {
  apiParameterName?: string;
  arrayItemsType?: string;
  defaultValue?: string;
  demoValue?: string;
  description?: string;
  docOrder?: number;
  docShow?: string;
  enumValue?: string;
  jsonScheme?: string;
  location?: string;
  maxLength?: number;
  maxValue?: number;
  minLength?: number;
  minValue?: number;
  parameterType?: string;
  regularExpression?: string;
  required?: string;
  static names(): { [key: string]: string } {
    return {
      apiParameterName: 'ApiParameterName',
      arrayItemsType: 'ArrayItemsType',
      defaultValue: 'DefaultValue',
      demoValue: 'DemoValue',
      description: 'Description',
      docOrder: 'DocOrder',
      docShow: 'DocShow',
      enumValue: 'EnumValue',
      jsonScheme: 'JsonScheme',
      location: 'Location',
      maxLength: 'MaxLength',
      maxValue: 'MaxValue',
      minLength: 'MinLength',
      minValue: 'MinValue',
      parameterType: 'ParameterType',
      regularExpression: 'RegularExpression',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiParameterName: 'string',
      arrayItemsType: 'string',
      defaultValue: 'string',
      demoValue: 'string',
      description: 'string',
      docOrder: 'number',
      docShow: 'string',
      enumValue: 'string',
      jsonScheme: 'string',
      location: 'string',
      maxLength: 'number',
      maxValue: 'number',
      minLength: 'number',
      minValue: 'number',
      parameterType: 'string',
      regularExpression: 'string',
      required: 'string',
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

export class DescribeApiHistoryResponseBodyResultDescriptionsResultDescription extends $tea.Model {
  description?: string;
  hasChild?: boolean;
  id?: string;
  key?: string;
  mandatory?: boolean;
  name?: string;
  pid?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      hasChild: 'HasChild',
      id: 'Id',
      key: 'Key',
      mandatory: 'Mandatory',
      name: 'Name',
      pid: 'Pid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hasChild: 'boolean',
      id: 'string',
      key: 'string',
      mandatory: 'boolean',
      name: 'string',
      pid: 'string',
      type: 'string',
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

export class DescribeApiHistoryResponseBodyServiceConfigEventBridgeConfig extends $tea.Model {
  eventBridgeRegionId?: string;
  eventBus?: string;
  eventSource?: string;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      eventBridgeRegionId: 'EventBridgeRegionId',
      eventBus: 'EventBus',
      eventSource: 'EventSource',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBridgeRegionId: 'string',
      eventBus: 'string',
      eventSource: 'string',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyServiceConfigFunctionComputeConfig extends $tea.Model {
  contentTypeCatagory?: string;
  contentTypeValue?: string;
  fcBaseUrl?: string;
  fcType?: string;
  functionName?: string;
  method?: string;
  onlyBusinessPath?: boolean;
  path?: string;
  qualifier?: string;
  regionId?: string;
  roleArn?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      contentTypeCatagory: 'ContentTypeCatagory',
      contentTypeValue: 'ContentTypeValue',
      fcBaseUrl: 'FcBaseUrl',
      fcType: 'FcType',
      functionName: 'FunctionName',
      method: 'Method',
      onlyBusinessPath: 'OnlyBusinessPath',
      path: 'Path',
      qualifier: 'Qualifier',
      regionId: 'RegionId',
      roleArn: 'RoleArn',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentTypeCatagory: 'string',
      contentTypeValue: 'string',
      fcBaseUrl: 'string',
      fcType: 'string',
      functionName: 'string',
      method: 'string',
      onlyBusinessPath: 'boolean',
      path: 'string',
      qualifier: 'string',
      regionId: 'string',
      roleArn: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyServiceConfigMockHeadersMockHeader extends $tea.Model {
  headerName?: string;
  headerValue?: string;
  static names(): { [key: string]: string } {
    return {
      headerName: 'HeaderName',
      headerValue: 'HeaderValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerName: 'string',
      headerValue: 'string',
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

export class DescribeApiHistoryResponseBodyServiceConfigOssConfig extends $tea.Model {
  action?: string;
  bucketName?: string;
  key?: string;
  ossRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      bucketName: 'BucketName',
      key: 'Key',
      ossRegionId: 'OssRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      bucketName: 'string',
      key: 'string',
      ossRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyServiceConfigVpcConfig extends $tea.Model {
  instanceId?: string;
  name?: string;
  port?: number;
  vpcId?: string;
  vpcScheme?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      port: 'Port',
      vpcId: 'VpcId',
      vpcScheme: 'VpcScheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      port: 'number',
      vpcId: 'string',
      vpcScheme: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyServiceConfig extends $tea.Model {
  contentTypeCatagory?: string;
  contentTypeValue?: string;
  eventBridgeConfig?: DescribeApiHistoryResponseBodyServiceConfigEventBridgeConfig;
  functionComputeConfig?: DescribeApiHistoryResponseBodyServiceConfigFunctionComputeConfig;
  mock?: string;
  mockHeaders?: DescribeApiHistoryResponseBodyServiceConfigMockHeaders;
  mockResult?: string;
  mockStatusCode?: number;
  ossConfig?: DescribeApiHistoryResponseBodyServiceConfigOssConfig;
  serviceAddress?: string;
  serviceHttpMethod?: string;
  servicePath?: string;
  serviceProtocol?: string;
  serviceTimeout?: number;
  serviceVpcEnable?: string;
  vpcConfig?: DescribeApiHistoryResponseBodyServiceConfigVpcConfig;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      contentTypeCatagory: 'ContentTypeCatagory',
      contentTypeValue: 'ContentTypeValue',
      eventBridgeConfig: 'EventBridgeConfig',
      functionComputeConfig: 'FunctionComputeConfig',
      mock: 'Mock',
      mockHeaders: 'MockHeaders',
      mockResult: 'MockResult',
      mockStatusCode: 'MockStatusCode',
      ossConfig: 'OssConfig',
      serviceAddress: 'ServiceAddress',
      serviceHttpMethod: 'ServiceHttpMethod',
      servicePath: 'ServicePath',
      serviceProtocol: 'ServiceProtocol',
      serviceTimeout: 'ServiceTimeout',
      serviceVpcEnable: 'ServiceVpcEnable',
      vpcConfig: 'VpcConfig',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentTypeCatagory: 'string',
      contentTypeValue: 'string',
      eventBridgeConfig: DescribeApiHistoryResponseBodyServiceConfigEventBridgeConfig,
      functionComputeConfig: DescribeApiHistoryResponseBodyServiceConfigFunctionComputeConfig,
      mock: 'string',
      mockHeaders: DescribeApiHistoryResponseBodyServiceConfigMockHeaders,
      mockResult: 'string',
      mockStatusCode: 'number',
      ossConfig: DescribeApiHistoryResponseBodyServiceConfigOssConfig,
      serviceAddress: 'string',
      serviceHttpMethod: 'string',
      servicePath: 'string',
      serviceProtocol: 'string',
      serviceTimeout: 'number',
      serviceVpcEnable: 'string',
      vpcConfig: DescribeApiHistoryResponseBodyServiceConfigVpcConfig,
      vpcId: 'string',
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

export class DescribeApiHistoryResponseBodySystemParametersSystemParameter extends $tea.Model {
  demoValue?: string;
  description?: string;
  location?: string;
  parameterName?: string;
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      demoValue: 'DemoValue',
      description: 'Description',
      location: 'Location',
      parameterName: 'ParameterName',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoValue: 'string',
      description: 'string',
      location: 'string',
      parameterName: 'string',
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

export class DescribeApiIpControlsResponseBodyApiIpControlsApiIpControlItem extends $tea.Model {
  apiId?: string;
  apiName?: string;
  boundTime?: string;
  ipControlId?: string;
  ipControlName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      boundTime: 'BoundTime',
      ipControlId: 'IpControlId',
      ipControlName: 'IpControlName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      boundTime: 'string',
      ipControlId: 'string',
      ipControlName: 'string',
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

export class DescribeApiLatencyDataResponseBodyCallLatencysMonitorItem extends $tea.Model {
  itemTime?: string;
  itemValue?: string;
  static names(): { [key: string]: string } {
    return {
      itemTime: 'ItemTime',
      itemValue: 'ItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemTime: 'string',
      itemValue: 'string',
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

export class DescribeApiQpsDataResponseBodyCallFailsMonitorItem extends $tea.Model {
  itemTime?: string;
  itemValue?: string;
  static names(): { [key: string]: string } {
    return {
      itemTime: 'ItemTime',
      itemValue: 'ItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemTime: 'string',
      itemValue: 'string',
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

export class DescribeApiQpsDataResponseBodyCallSuccessesMonitorItem extends $tea.Model {
  itemTime?: string;
  itemValue?: string;
  static names(): { [key: string]: string } {
    return {
      itemTime: 'ItemTime',
      itemValue: 'ItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemTime: 'string',
      itemValue: 'string',
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

export class DescribeApiSignaturesResponseBodyApiSignaturesApiSignatureItem extends $tea.Model {
  apiId?: string;
  apiName?: string;
  boundTime?: string;
  signatureId?: string;
  signatureName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      boundTime: 'BoundTime',
      signatureId: 'SignatureId',
      signatureName: 'SignatureName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      boundTime: 'string',
      signatureId: 'string',
      signatureName: 'string',
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

export class DescribeApiTrafficControlsResponseBodyApiTrafficControlsApiTrafficControlItem extends $tea.Model {
  apiId?: string;
  apiName?: string;
  boundTime?: string;
  trafficControlId?: string;
  trafficControlName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      boundTime: 'BoundTime',
      trafficControlId: 'TrafficControlId',
      trafficControlName: 'TrafficControlName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      boundTime: 'string',
      trafficControlId: 'string',
      trafficControlName: 'string',
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

export class DescribeApiTrafficDataResponseBodyCallDownloadsMonitorItem extends $tea.Model {
  itemTime?: string;
  itemValue?: string;
  static names(): { [key: string]: string } {
    return {
      itemTime: 'ItemTime',
      itemValue: 'ItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemTime: 'string',
      itemValue: 'string',
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

export class DescribeApiTrafficDataResponseBodyCallUploadsMonitorItem extends $tea.Model {
  itemTime?: string;
  itemValue?: string;
  static names(): { [key: string]: string } {
    return {
      itemTime: 'ItemTime',
      itemValue: 'ItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemTime: 'string',
      itemValue: 'string',
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

export class DescribeApisResponseBodyApiSummarysApiSummaryDeployedInfosDeployedInfo extends $tea.Model {
  deployedStatus?: string;
  effectiveVersion?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      deployedStatus: 'DeployedStatus',
      effectiveVersion: 'EffectiveVersion',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployedStatus: 'string',
      effectiveVersion: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisResponseBodyApiSummarysApiSummaryDeployedInfos extends $tea.Model {
  deployedInfo?: DescribeApisResponseBodyApiSummarysApiSummaryDeployedInfosDeployedInfo[];
  static names(): { [key: string]: string } {
    return {
      deployedInfo: 'DeployedInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployedInfo: { 'type': 'array', 'itemType': DescribeApisResponseBodyApiSummarysApiSummaryDeployedInfosDeployedInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisResponseBodyApiSummarysApiSummaryTagListTag extends $tea.Model {
  tagKey?: string;
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

export class DescribeApisResponseBodyApiSummarysApiSummaryTagList extends $tea.Model {
  tag?: DescribeApisResponseBodyApiSummarysApiSummaryTagListTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeApisResponseBodyApiSummarysApiSummaryTagListTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisResponseBodyApiSummarysApiSummary extends $tea.Model {
  apiId?: string;
  apiMethod?: string;
  apiName?: string;
  apiPath?: string;
  createdTime?: string;
  deployedInfos?: DescribeApisResponseBodyApiSummarysApiSummaryDeployedInfos;
  description?: string;
  groupId?: string;
  groupName?: string;
  modifiedTime?: string;
  regionId?: string;
  tagList?: DescribeApisResponseBodyApiSummarysApiSummaryTagList;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiMethod: 'ApiMethod',
      apiName: 'ApiName',
      apiPath: 'ApiPath',
      createdTime: 'CreatedTime',
      deployedInfos: 'DeployedInfos',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      modifiedTime: 'ModifiedTime',
      regionId: 'RegionId',
      tagList: 'TagList',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiMethod: 'string',
      apiName: 'string',
      apiPath: 'string',
      createdTime: 'string',
      deployedInfos: DescribeApisResponseBodyApiSummarysApiSummaryDeployedInfos,
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      modifiedTime: 'string',
      regionId: 'string',
      tagList: DescribeApisResponseBodyApiSummarysApiSummaryTagList,
      visibility: 'string',
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

export class DescribeApisByAppResponseBodyAppApiRelationInfosAppApiRelationInfo extends $tea.Model {
  apiId?: string;
  apiName?: string;
  authVaildTime?: string;
  authorizationSource?: string;
  createdTime?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  method?: string;
  operator?: string;
  path?: string;
  regionId?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      authVaildTime: 'AuthVaildTime',
      authorizationSource: 'AuthorizationSource',
      createdTime: 'CreatedTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      method: 'Method',
      operator: 'Operator',
      path: 'Path',
      regionId: 'RegionId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      authVaildTime: 'string',
      authorizationSource: 'string',
      createdTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      method: 'string',
      operator: 'string',
      path: 'string',
      regionId: 'string',
      stageName: 'string',
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

export class DescribeApisByBackendResponseBodyApiInfoListApiInfo extends $tea.Model {
  apiId?: string;
  apiName?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  method?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      method: 'Method',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      method: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByBackendResponseBodyApiInfoList extends $tea.Model {
  apiInfo?: DescribeApisByBackendResponseBodyApiInfoListApiInfo[];
  static names(): { [key: string]: string } {
    return {
      apiInfo: 'ApiInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfo: { 'type': 'array', 'itemType': DescribeApisByBackendResponseBodyApiInfoListApiInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByIpControlResponseBodyApiInfosApiInfo extends $tea.Model {
  apiId?: string;
  apiName?: string;
  boundTime?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  regionId?: string;
  stageName?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      boundTime: 'BoundTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      regionId: 'RegionId',
      stageName: 'StageName',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      boundTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      regionId: 'string',
      stageName: 'string',
      visibility: 'string',
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

export class DescribeApisBySignatureResponseBodyApiInfosApiInfo extends $tea.Model {
  apiId?: string;
  apiName?: string;
  boundTime?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  regionId?: string;
  stageName?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      boundTime: 'BoundTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      regionId: 'RegionId',
      stageName: 'StageName',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      boundTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      regionId: 'string',
      stageName: 'string',
      visibility: 'string',
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

export class DescribeApisByTrafficControlResponseBodyApiInfosApiInfo extends $tea.Model {
  apiId?: string;
  apiName?: string;
  boundTime?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  regionId?: string;
  stageName?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      boundTime: 'BoundTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      regionId: 'RegionId',
      stageName: 'StageName',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      boundTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      regionId: 'string',
      stageName: 'string',
      visibility: 'string',
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
  appId?: number;
  appName?: string;
  createdTime?: string;
  description?: string;
  modifiedTime?: string;
  tags?: DescribeAppAttributesResponseBodyAppsAppAttributeTags;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      createdTime: 'CreatedTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      createdTime: 'string',
      description: 'string',
      modifiedTime: 'string',
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

export class DescribeAppsResponseBodyAppsAppItem extends $tea.Model {
  appId?: number;
  appName?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      description: 'string',
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

export class DescribeAuthorizedApisResponseBodyAuthorizedApisAuthorizedApi extends $tea.Model {
  apiId?: string;
  apiName?: string;
  authVaildTime?: string;
  authorizationSource?: string;
  authorizedTime?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  operator?: string;
  regionId?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      authVaildTime: 'AuthVaildTime',
      authorizationSource: 'AuthorizationSource',
      authorizedTime: 'AuthorizedTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      operator: 'Operator',
      regionId: 'RegionId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      authVaildTime: 'string',
      authorizationSource: 'string',
      authorizedTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      operator: 'string',
      regionId: 'string',
      stageName: 'string',
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

export class DescribeAuthorizedAppsResponseBodyAuthorizedAppsAuthorizedApp extends $tea.Model {
  appId?: number;
  appName?: string;
  authVaildTime?: string;
  authorizationSource?: string;
  authorizedTime?: string;
  description?: string;
  operator?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      authVaildTime: 'AuthVaildTime',
      authorizationSource: 'AuthorizationSource',
      authorizedTime: 'AuthorizedTime',
      description: 'Description',
      operator: 'Operator',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      authVaildTime: 'string',
      authorizationSource: 'string',
      authorizedTime: 'string',
      description: 'string',
      operator: 'string',
      stageName: 'string',
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

export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigEventBridgeConfig extends $tea.Model {
  eventBridgeRegionId?: string;
  eventBus?: string;
  eventSource?: string;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      eventBridgeRegionId: 'EventBridgeRegionId',
      eventBus: 'EventBus',
      eventSource: 'EventSource',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBridgeRegionId: 'string',
      eventBus: 'string',
      eventSource: 'string',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigFunctionComputeConfig extends $tea.Model {
  fcBaseUrl?: string;
  fcRegionId?: string;
  fcType?: string;
  functionName?: string;
  onlyBusinessPath?: boolean;
  qualifier?: string;
  roleArn?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      fcBaseUrl: 'FcBaseUrl',
      fcRegionId: 'FcRegionId',
      fcType: 'FcType',
      functionName: 'FunctionName',
      onlyBusinessPath: 'OnlyBusinessPath',
      qualifier: 'Qualifier',
      roleArn: 'RoleArn',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fcBaseUrl: 'string',
      fcRegionId: 'string',
      fcType: 'string',
      functionName: 'string',
      onlyBusinessPath: 'boolean',
      qualifier: 'string',
      roleArn: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigMockConfigMockHeaders extends $tea.Model {
  headerName?: string;
  headerValue?: string;
  static names(): { [key: string]: string } {
    return {
      headerName: 'HeaderName',
      headerValue: 'HeaderValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerName: 'string',
      headerValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigMockConfig extends $tea.Model {
  mockHeaders?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigMockConfigMockHeaders[];
  mockResult?: string;
  mockStatusCode?: string;
  static names(): { [key: string]: string } {
    return {
      mockHeaders: 'MockHeaders',
      mockResult: 'MockResult',
      mockStatusCode: 'MockStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mockHeaders: { 'type': 'array', 'itemType': DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigMockConfigMockHeaders },
      mockResult: 'string',
      mockStatusCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigOssConfig extends $tea.Model {
  bucketName?: string;
  ossRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      ossRegionId: 'OssRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      ossRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigVpcConfig extends $tea.Model {
  instanceId?: string;
  name?: string;
  port?: number;
  vpcAccessId?: string;
  vpcId?: string;
  vpcScheme?: string;
  vpcTargetHostName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      port: 'Port',
      vpcAccessId: 'VpcAccessId',
      vpcId: 'VpcId',
      vpcScheme: 'VpcScheme',
      vpcTargetHostName: 'VpcTargetHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      port: 'number',
      vpcAccessId: 'string',
      vpcId: 'string',
      vpcScheme: 'string',
      vpcTargetHostName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfig extends $tea.Model {
  eventBridgeConfig?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigEventBridgeConfig;
  functionComputeConfig?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigFunctionComputeConfig;
  httpTargetHostName?: string;
  mockConfig?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigMockConfig;
  ossConfig?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigOssConfig;
  serviceAddress?: string;
  type?: string;
  vpcConfig?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigVpcConfig;
  static names(): { [key: string]: string } {
    return {
      eventBridgeConfig: 'EventBridgeConfig',
      functionComputeConfig: 'FunctionComputeConfig',
      httpTargetHostName: 'HttpTargetHostName',
      mockConfig: 'MockConfig',
      ossConfig: 'OssConfig',
      serviceAddress: 'ServiceAddress',
      type: 'Type',
      vpcConfig: 'VpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBridgeConfig: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigEventBridgeConfig,
      functionComputeConfig: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigFunctionComputeConfig,
      httpTargetHostName: 'string',
      mockConfig: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigMockConfig,
      ossConfig: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigOssConfig,
      serviceAddress: 'string',
      type: 'string',
      vpcConfig: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigVpcConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendInfoResponseBodyBackendInfoBackendModels extends $tea.Model {
  backendConfig?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfig;
  backendModelId?: string;
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  stageModeId?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      backendConfig: 'BackendConfig',
      backendModelId: 'BackendModelId',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      stageModeId: 'StageModeId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendConfig: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfig,
      backendModelId: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      stageModeId: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendInfoResponseBodyBackendInfo extends $tea.Model {
  backendId?: string;
  backendModels?: DescribeBackendInfoResponseBodyBackendInfoBackendModels[];
  backendName?: string;
  backendType?: string;
  createdTime?: string;
  description?: string;
  modifiedTime?: string;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      backendModels: 'BackendModels',
      backendName: 'BackendName',
      backendType: 'BackendType',
      createdTime: 'CreatedTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      backendModels: { 'type': 'array', 'itemType': DescribeBackendInfoResponseBodyBackendInfoBackendModels },
      backendName: 'string',
      backendType: 'string',
      createdTime: 'string',
      description: 'string',
      modifiedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendListResponseBodyBackendInfoList extends $tea.Model {
  backendId?: string;
  backendName?: string;
  backendType?: string;
  createdTime?: string;
  description?: string;
  modifiedTime?: string;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      backendName: 'BackendName',
      backendType: 'BackendType',
      createdTime: 'CreatedTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      backendName: 'string',
      backendType: 'string',
      createdTime: 'string',
      description: 'string',
      modifiedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatasetInfoResponseBodyDatasetInfo extends $tea.Model {
  createdTime?: string;
  datasetId?: string;
  datasetName?: string;
  datasetType?: string;
  modifiedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      modifiedTime: 'ModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      datasetId: 'string',
      datasetName: 'string',
      datasetType: 'string',
      modifiedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatasetItemInfoResponseBodyDatasetItemInfo extends $tea.Model {
  createdTime?: string;
  datasetId?: string;
  datasetItemId?: string;
  description?: string;
  expiredTime?: string;
  modifiedTime?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      datasetId: 'DatasetId',
      datasetItemId: 'DatasetItemId',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      modifiedTime: 'ModifiedTime',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      datasetId: 'string',
      datasetItemId: 'string',
      description: 'string',
      expiredTime: 'string',
      modifiedTime: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatasetItemListResponseBodyDatasetItemInfoList extends $tea.Model {
  createdTime?: string;
  datasetId?: string;
  datasetItemId?: string;
  description?: string;
  expiredTime?: string;
  modifiedTime?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      datasetId: 'DatasetId',
      datasetItemId: 'DatasetItemId',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      modifiedTime: 'ModifiedTime',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      datasetId: 'string',
      datasetItemId: 'string',
      description: 'string',
      expiredTime: 'string',
      modifiedTime: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatasetListResponseBodyDatasetInfoList extends $tea.Model {
  createdTime?: string;
  datasetId?: string;
  datasetName?: string;
  datasetType?: string;
  modifiedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      modifiedTime: 'ModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      datasetId: 'string',
      datasetName: 'string',
      datasetType: 'string',
      modifiedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployApiTaskResponseBodyDeployedResultsDeployedResult extends $tea.Model {
  apiUid?: string;
  deployedStatus?: string;
  errorMsg?: string;
  groupId?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiUid: 'ApiUid',
      deployedStatus: 'DeployedStatus',
      errorMsg: 'ErrorMsg',
      groupId: 'GroupId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiUid: 'string',
      deployedStatus: 'string',
      errorMsg: 'string',
      groupId: 'string',
      stageName: 'string',
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

export class DescribeDeployedApiResponseBodyConstantParametersConstantParameter extends $tea.Model {
  constantValue?: string;
  description?: string;
  location?: string;
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      constantValue: 'ConstantValue',
      description: 'Description',
      location: 'Location',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constantValue: 'string',
      description: 'string',
      location: 'string',
      serviceParameterName: 'string',
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

export class DescribeDeployedApiResponseBodyCustomSystemParametersCustomSystemParameter extends $tea.Model {
  demoValue?: string;
  description?: string;
  location?: string;
  parameterName?: string;
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      demoValue: 'DemoValue',
      description: 'Description',
      location: 'Location',
      parameterName: 'ParameterName',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoValue: 'string',
      description: 'string',
      location: 'string',
      parameterName: 'string',
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

export class DescribeDeployedApiResponseBodyErrorCodeSamplesErrorCodeSample extends $tea.Model {
  code?: string;
  description?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      message: 'string',
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

export class DescribeDeployedApiResponseBodyOpenIdConnectConfig extends $tea.Model {
  idTokenParamName?: string;
  openIdApiType?: string;
  publicKey?: string;
  publicKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      idTokenParamName: 'IdTokenParamName',
      openIdApiType: 'OpenIdApiType',
      publicKey: 'PublicKey',
      publicKeyId: 'PublicKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idTokenParamName: 'string',
      openIdApiType: 'string',
      publicKey: 'string',
      publicKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyRequestConfig extends $tea.Model {
  bodyFormat?: string;
  bodyModel?: string;
  postBodyDescription?: string;
  requestHttpMethod?: string;
  requestMode?: string;
  requestPath?: string;
  requestProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      bodyFormat: 'BodyFormat',
      bodyModel: 'BodyModel',
      postBodyDescription: 'PostBodyDescription',
      requestHttpMethod: 'RequestHttpMethod',
      requestMode: 'RequestMode',
      requestPath: 'RequestPath',
      requestProtocol: 'RequestProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyFormat: 'string',
      bodyModel: 'string',
      postBodyDescription: 'string',
      requestHttpMethod: 'string',
      requestMode: 'string',
      requestPath: 'string',
      requestProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyRequestParametersRequestParameter extends $tea.Model {
  apiParameterName?: string;
  arrayItemsType?: string;
  defaultValue?: string;
  demoValue?: string;
  description?: string;
  docOrder?: number;
  docShow?: string;
  enumValue?: string;
  jsonScheme?: string;
  location?: string;
  maxLength?: number;
  maxValue?: number;
  minLength?: number;
  minValue?: number;
  parameterType?: string;
  regularExpression?: string;
  required?: string;
  static names(): { [key: string]: string } {
    return {
      apiParameterName: 'ApiParameterName',
      arrayItemsType: 'ArrayItemsType',
      defaultValue: 'DefaultValue',
      demoValue: 'DemoValue',
      description: 'Description',
      docOrder: 'DocOrder',
      docShow: 'DocShow',
      enumValue: 'EnumValue',
      jsonScheme: 'JsonScheme',
      location: 'Location',
      maxLength: 'MaxLength',
      maxValue: 'MaxValue',
      minLength: 'MinLength',
      minValue: 'MinValue',
      parameterType: 'ParameterType',
      regularExpression: 'RegularExpression',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiParameterName: 'string',
      arrayItemsType: 'string',
      defaultValue: 'string',
      demoValue: 'string',
      description: 'string',
      docOrder: 'number',
      docShow: 'string',
      enumValue: 'string',
      jsonScheme: 'string',
      location: 'string',
      maxLength: 'number',
      maxValue: 'number',
      minLength: 'number',
      minValue: 'number',
      parameterType: 'string',
      regularExpression: 'string',
      required: 'string',
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

export class DescribeDeployedApiResponseBodyResultDescriptionsResultDescription extends $tea.Model {
  description?: string;
  hasChild?: boolean;
  id?: string;
  key?: string;
  mandatory?: boolean;
  name?: string;
  pid?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      hasChild: 'HasChild',
      id: 'Id',
      key: 'Key',
      mandatory: 'Mandatory',
      name: 'Name',
      pid: 'Pid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hasChild: 'boolean',
      id: 'string',
      key: 'string',
      mandatory: 'boolean',
      name: 'string',
      pid: 'string',
      type: 'string',
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

export class DescribeDeployedApiResponseBodyServiceConfigFunctionComputeConfig extends $tea.Model {
  contentTypeCatagory?: string;
  contentTypeValue?: string;
  fcBaseUrl?: string;
  fcType?: string;
  functionName?: string;
  method?: string;
  onlyBusinessPath?: boolean;
  path?: string;
  qualifier?: string;
  regionId?: string;
  roleArn?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      contentTypeCatagory: 'ContentTypeCatagory',
      contentTypeValue: 'ContentTypeValue',
      fcBaseUrl: 'FcBaseUrl',
      fcType: 'FcType',
      functionName: 'FunctionName',
      method: 'Method',
      onlyBusinessPath: 'OnlyBusinessPath',
      path: 'Path',
      qualifier: 'Qualifier',
      regionId: 'RegionId',
      roleArn: 'RoleArn',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentTypeCatagory: 'string',
      contentTypeValue: 'string',
      fcBaseUrl: 'string',
      fcType: 'string',
      functionName: 'string',
      method: 'string',
      onlyBusinessPath: 'boolean',
      path: 'string',
      qualifier: 'string',
      regionId: 'string',
      roleArn: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyServiceConfigMockHeadersMockHeader extends $tea.Model {
  headerName?: string;
  headerValue?: string;
  static names(): { [key: string]: string } {
    return {
      headerName: 'HeaderName',
      headerValue: 'HeaderValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerName: 'string',
      headerValue: 'string',
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
  instanceId?: string;
  name?: string;
  port?: number;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      port: 'Port',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      port: 'number',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyServiceConfig extends $tea.Model {
  functionComputeConfig?: DescribeDeployedApiResponseBodyServiceConfigFunctionComputeConfig;
  mock?: string;
  mockHeaders?: DescribeDeployedApiResponseBodyServiceConfigMockHeaders;
  mockResult?: string;
  mockStatusCode?: number;
  serviceAddress?: string;
  serviceHttpMethod?: string;
  servicePath?: string;
  serviceProtocol?: string;
  serviceTimeout?: number;
  serviceVpcEnable?: string;
  vpcConfig?: DescribeDeployedApiResponseBodyServiceConfigVpcConfig;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      functionComputeConfig: 'FunctionComputeConfig',
      mock: 'Mock',
      mockHeaders: 'MockHeaders',
      mockResult: 'MockResult',
      mockStatusCode: 'MockStatusCode',
      serviceAddress: 'ServiceAddress',
      serviceHttpMethod: 'ServiceHttpMethod',
      servicePath: 'ServicePath',
      serviceProtocol: 'ServiceProtocol',
      serviceTimeout: 'ServiceTimeout',
      serviceVpcEnable: 'ServiceVpcEnable',
      vpcConfig: 'VpcConfig',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionComputeConfig: DescribeDeployedApiResponseBodyServiceConfigFunctionComputeConfig,
      mock: 'string',
      mockHeaders: DescribeDeployedApiResponseBodyServiceConfigMockHeaders,
      mockResult: 'string',
      mockStatusCode: 'number',
      serviceAddress: 'string',
      serviceHttpMethod: 'string',
      servicePath: 'string',
      serviceProtocol: 'string',
      serviceTimeout: 'number',
      serviceVpcEnable: 'string',
      vpcConfig: DescribeDeployedApiResponseBodyServiceConfigVpcConfig,
      vpcId: 'string',
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

export class DescribeDeployedApiResponseBodySystemParametersSystemParameter extends $tea.Model {
  demoValue?: string;
  description?: string;
  location?: string;
  parameterName?: string;
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      demoValue: 'DemoValue',
      description: 'Description',
      location: 'Location',
      parameterName: 'ParameterName',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoValue: 'string',
      description: 'string',
      location: 'string',
      parameterName: 'string',
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
  apiId?: string;
  apiMethod?: string;
  apiName?: string;
  apiPath?: string;
  deployedTime?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  regionId?: string;
  stageName?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiMethod: 'ApiMethod',
      apiName: 'ApiName',
      apiPath: 'ApiPath',
      deployedTime: 'DeployedTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      regionId: 'RegionId',
      stageName: 'StageName',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiMethod: 'string',
      apiName: 'string',
      apiPath: 'string',
      deployedTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      regionId: 'string',
      stageName: 'string',
      visibility: 'string',
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

export class DescribeHistoryApisResponseBodyApiHisItemsApiHisItem extends $tea.Model {
  apiId?: string;
  apiName?: string;
  deployedTime?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  historyVersion?: string;
  regionId?: string;
  stageName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      deployedTime: 'DeployedTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      historyVersion: 'HistoryVersion',
      regionId: 'RegionId',
      stageName: 'StageName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      deployedTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      historyVersion: 'string',
      regionId: 'string',
      stageName: 'string',
      status: 'string',
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

export class DescribeImportOASTaskResponseBodyApiResultsApiResult extends $tea.Model {
  apiId?: string;
  apiName?: string;
  description?: string;
  errorMessage?: string;
  groupId?: string;
  method?: string;
  path?: string;
  updateStatus?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      description: 'Description',
      errorMessage: 'ErrorMessage',
      groupId: 'GroupId',
      method: 'Method',
      path: 'Path',
      updateStatus: 'UpdateStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      description: 'string',
      errorMessage: 'string',
      groupId: 'string',
      method: 'string',
      path: 'string',
      updateStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportOASTaskResponseBodyApiResults extends $tea.Model {
  apiResult?: DescribeImportOASTaskResponseBodyApiResultsApiResult[];
  static names(): { [key: string]: string } {
    return {
      apiResult: 'ApiResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiResult: { 'type': 'array', 'itemType': DescribeImportOASTaskResponseBodyApiResultsApiResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportOASTaskResponseBodyModelResultsModelResult extends $tea.Model {
  errorMessage?: string;
  groupId?: string;
  modelId?: string;
  modelName?: string;
  updateStatus?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      groupId: 'GroupId',
      modelId: 'ModelId',
      modelName: 'ModelName',
      updateStatus: 'UpdateStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      groupId: 'string',
      modelId: 'string',
      modelName: 'string',
      updateStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportOASTaskResponseBodyModelResults extends $tea.Model {
  modelResult?: DescribeImportOASTaskResponseBodyModelResultsModelResult[];
  static names(): { [key: string]: string } {
    return {
      modelResult: 'ModelResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelResult: { 'type': 'array', 'itemType': DescribeImportOASTaskResponseBodyModelResultsModelResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDropConnectionsResponseBodyInstanceDropConnectionsMonitorItem extends $tea.Model {
  itemTime?: string;
  itemValue?: string;
  static names(): { [key: string]: string } {
    return {
      itemTime: 'ItemTime',
      itemValue: 'ItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemTime: 'string',
      itemValue: 'string',
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

export class DescribeInstanceDropPacketResponseBodyInstanceDropPacketMonitorItem extends $tea.Model {
  item?: string;
  itemTime?: string;
  itemValue?: string;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      itemTime: 'ItemTime',
      itemValue: 'ItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      itemTime: 'string',
      itemValue: 'string',
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

export class DescribeInstanceHttpCodeResponseBodyInstanceHttpCodeMonitorItem extends $tea.Model {
  itemTime?: string;
  itemValue?: string;
  static names(): { [key: string]: string } {
    return {
      itemTime: 'ItemTime',
      itemValue: 'ItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemTime: 'string',
      itemValue: 'string',
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

export class DescribeInstanceLatencyResponseBodyInstanceLatencyMonitorItem extends $tea.Model {
  item?: string;
  itemTime?: string;
  itemValue?: string;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      itemTime: 'ItemTime',
      itemValue: 'ItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      itemTime: 'string',
      itemValue: 'string',
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

export class DescribeInstanceNewConnectionsResponseBodyInstanceNewConnectionsMonitorItem extends $tea.Model {
  itemTime?: string;
  itemValue?: string;
  static names(): { [key: string]: string } {
    return {
      itemTime: 'ItemTime',
      itemValue: 'ItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemTime: 'string',
      itemValue: 'string',
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

export class DescribeInstancePacketsResponseBodyInstancePacketsMonitorItem extends $tea.Model {
  item?: string;
  itemTime?: string;
  itemValue?: string;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      itemTime: 'ItemTime',
      itemValue: 'ItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      itemTime: 'string',
      itemValue: 'string',
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

export class DescribeInstanceQpsResponseBodyInstanceQpsMonitorItem extends $tea.Model {
  itemTime?: string;
  itemValue?: string;
  static names(): { [key: string]: string } {
    return {
      itemTime: 'ItemTime',
      itemValue: 'ItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemTime: 'string',
      itemValue: 'string',
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

export class DescribeInstanceSlbConnectResponseBodyInstanceSlbConnectMonitorItem extends $tea.Model {
  item?: string;
  itemTime?: string;
  itemValue?: string;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      itemTime: 'ItemTime',
      itemValue: 'ItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      itemTime: 'string',
      itemValue: 'string',
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

export class DescribeInstanceTrafficResponseBodyInstanceTrafficMonitorItem extends $tea.Model {
  item?: string;
  itemTime?: string;
  itemValue?: string;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      itemTime: 'ItemTime',
      itemValue: 'ItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      itemTime: 'string',
      itemValue: 'string',
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

export class DescribeInstancesRequestTag extends $tea.Model {
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

export class DescribeInstancesResponseBodyInstancesInstanceAttributeInstanceSpecAttributesSpecAttribute extends $tea.Model {
  localName?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceAttributeInstanceSpecAttributes extends $tea.Model {
  specAttribute?: DescribeInstancesResponseBodyInstancesInstanceAttributeInstanceSpecAttributesSpecAttribute[];
  static names(): { [key: string]: string } {
    return {
      specAttribute: 'SpecAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specAttribute: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceAttributeInstanceSpecAttributesSpecAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceAttributeNetworkInterfaceAttributesNetworkInterfaceAttribute extends $tea.Model {
  cidrBlock?: string;
  networkInterfaceId?: string;
  securityGroupId?: string;
  vswitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      networkInterfaceId: 'NetworkInterfaceId',
      securityGroupId: 'SecurityGroupId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      networkInterfaceId: 'string',
      securityGroupId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceAttributeNetworkInterfaceAttributes extends $tea.Model {
  networkInterfaceAttribute?: DescribeInstancesResponseBodyInstancesInstanceAttributeNetworkInterfaceAttributesNetworkInterfaceAttribute[];
  static names(): { [key: string]: string } {
    return {
      networkInterfaceAttribute: 'NetworkInterfaceAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceAttribute: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceAttributeNetworkInterfaceAttributesNetworkInterfaceAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceAttribute extends $tea.Model {
  aclId?: string;
  aclName?: string;
  aclStatus?: string;
  aclType?: string;
  classicEgressAddress?: string;
  connectVpcId?: string;
  createdTime?: string;
  dedicatedInstanceType?: string;
  egressIpv6Enable?: boolean;
  expiredTime?: string;
  httpsPolicies?: string;
  IPV6AclId?: string;
  IPV6AclName?: string;
  IPV6AclStatus?: string;
  IPV6AclType?: string;
  instanceChargeType?: string;
  instanceCidrBlock?: string;
  instanceClusterId?: string;
  instanceId?: string;
  instanceName?: string;
  instanceRpsLimit?: number;
  instanceSpec?: string;
  instanceSpecAttributes?: DescribeInstancesResponseBodyInstancesInstanceAttributeInstanceSpecAttributes;
  instanceType?: string;
  internetEgressAddress?: string;
  intranetSegments?: string;
  networkInterfaceAttributes?: DescribeInstancesResponseBodyInstancesInstanceAttributeNetworkInterfaceAttributes;
  regionId?: string;
  status?: string;
  supportIpv6?: boolean;
  userVpcId?: string;
  userVswitchId?: string;
  vipTypeList?: string;
  vpcEgressAddress?: string;
  vpcIntranetEnable?: boolean;
  vpcOwnerId?: number;
  vpcSlbIntranetEnable?: boolean;
  zoneId?: string;
  zoneLocalName?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclName: 'AclName',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      classicEgressAddress: 'ClassicEgressAddress',
      connectVpcId: 'ConnectVpcId',
      createdTime: 'CreatedTime',
      dedicatedInstanceType: 'DedicatedInstanceType',
      egressIpv6Enable: 'EgressIpv6Enable',
      expiredTime: 'ExpiredTime',
      httpsPolicies: 'HttpsPolicies',
      IPV6AclId: 'IPV6AclId',
      IPV6AclName: 'IPV6AclName',
      IPV6AclStatus: 'IPV6AclStatus',
      IPV6AclType: 'IPV6AclType',
      instanceChargeType: 'InstanceChargeType',
      instanceCidrBlock: 'InstanceCidrBlock',
      instanceClusterId: 'InstanceClusterId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceRpsLimit: 'InstanceRpsLimit',
      instanceSpec: 'InstanceSpec',
      instanceSpecAttributes: 'InstanceSpecAttributes',
      instanceType: 'InstanceType',
      internetEgressAddress: 'InternetEgressAddress',
      intranetSegments: 'IntranetSegments',
      networkInterfaceAttributes: 'NetworkInterfaceAttributes',
      regionId: 'RegionId',
      status: 'Status',
      supportIpv6: 'SupportIpv6',
      userVpcId: 'UserVpcId',
      userVswitchId: 'UserVswitchId',
      vipTypeList: 'VipTypeList',
      vpcEgressAddress: 'VpcEgressAddress',
      vpcIntranetEnable: 'VpcIntranetEnable',
      vpcOwnerId: 'VpcOwnerId',
      vpcSlbIntranetEnable: 'VpcSlbIntranetEnable',
      zoneId: 'ZoneId',
      zoneLocalName: 'ZoneLocalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclName: 'string',
      aclStatus: 'string',
      aclType: 'string',
      classicEgressAddress: 'string',
      connectVpcId: 'string',
      createdTime: 'string',
      dedicatedInstanceType: 'string',
      egressIpv6Enable: 'boolean',
      expiredTime: 'string',
      httpsPolicies: 'string',
      IPV6AclId: 'string',
      IPV6AclName: 'string',
      IPV6AclStatus: 'string',
      IPV6AclType: 'string',
      instanceChargeType: 'string',
      instanceCidrBlock: 'string',
      instanceClusterId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceRpsLimit: 'number',
      instanceSpec: 'string',
      instanceSpecAttributes: DescribeInstancesResponseBodyInstancesInstanceAttributeInstanceSpecAttributes,
      instanceType: 'string',
      internetEgressAddress: 'string',
      intranetSegments: 'string',
      networkInterfaceAttributes: DescribeInstancesResponseBodyInstancesInstanceAttributeNetworkInterfaceAttributes,
      regionId: 'string',
      status: 'string',
      supportIpv6: 'boolean',
      userVpcId: 'string',
      userVswitchId: 'string',
      vipTypeList: 'string',
      vpcEgressAddress: 'string',
      vpcIntranetEnable: 'boolean',
      vpcOwnerId: 'number',
      vpcSlbIntranetEnable: 'boolean',
      zoneId: 'string',
      zoneLocalName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstances extends $tea.Model {
  instanceAttribute?: DescribeInstancesResponseBodyInstancesInstanceAttribute[];
  static names(): { [key: string]: string } {
    return {
      instanceAttribute: 'InstanceAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceAttribute: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpControlPolicyItemsResponseBodyIpControlPolicyItemsIpControlPolicyItem extends $tea.Model {
  appId?: string;
  cidrIp?: string;
  createTime?: string;
  modifiedTime?: string;
  policyItemId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cidrIp: 'CidrIp',
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      policyItemId: 'PolicyItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cidrIp: 'string',
      createTime: 'string',
      modifiedTime: 'string',
      policyItemId: 'string',
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

export class DescribeIpControlsResponseBodyIpControlInfosIpControlInfo extends $tea.Model {
  createTime?: string;
  description?: string;
  ipControlId?: string;
  ipControlName?: string;
  ipControlType?: string;
  modifiedTime?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      ipControlId: 'IpControlId',
      ipControlName: 'IpControlName',
      ipControlType: 'IpControlType',
      modifiedTime: 'ModifiedTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      ipControlId: 'string',
      ipControlName: 'string',
      ipControlType: 'string',
      modifiedTime: 'string',
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

export class DescribeLogConfigResponseBodyLogInfosLogInfo extends $tea.Model {
  logType?: string;
  regionId?: string;
  slsLogStore?: string;
  slsProject?: string;
  static names(): { [key: string]: string } {
    return {
      logType: 'LogType',
      regionId: 'RegionId',
      slsLogStore: 'SlsLogStore',
      slsProject: 'SlsProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logType: 'string',
      regionId: 'string',
      slsLogStore: 'string',
      slsProject: 'string',
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

export class DescribeModelsResponseBodyModelDetailsModelDetail extends $tea.Model {
  createdTime?: string;
  description?: string;
  groupId?: string;
  modelId?: string;
  modelName?: string;
  modelRef?: string;
  modifiedTime?: string;
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      groupId: 'GroupId',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelRef: 'ModelRef',
      modifiedTime: 'ModifiedTime',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      groupId: 'string',
      modelId: 'string',
      modelName: 'string',
      modelRef: 'string',
      modifiedTime: 'string',
      schema: 'string',
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

export class DescribePluginApisResponseBodyApiSummarysApiPluginSummary extends $tea.Model {
  apiId?: string;
  apiName?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  method?: string;
  path?: string;
  regionId?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      method: 'Method',
      path: 'Path',
      regionId: 'RegionId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      method: 'string',
      path: 'string',
      regionId: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginApisResponseBodyApiSummarys extends $tea.Model {
  apiPluginSummary?: DescribePluginApisResponseBodyApiSummarysApiPluginSummary[];
  static names(): { [key: string]: string } {
    return {
      apiPluginSummary: 'ApiPluginSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiPluginSummary: { 'type': 'array', 'itemType': DescribePluginApisResponseBodyApiSummarysApiPluginSummary },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginSchemasResponseBodyPluginSchemasPluginSchema extends $tea.Model {
  description?: string;
  documentId?: string;
  name?: string;
  supportClassic?: boolean;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      documentId: 'DocumentId',
      name: 'Name',
      supportClassic: 'SupportClassic',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      documentId: 'string',
      name: 'string',
      supportClassic: 'boolean',
      title: 'string',
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

export class DescribePluginTemplatesResponseBodyTemplatesTemplate extends $tea.Model {
  description?: string;
  documentAnchor?: string;
  documentId?: string;
  sample?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      documentAnchor: 'DocumentAnchor',
      documentId: 'DocumentId',
      sample: 'Sample',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      documentAnchor: 'string',
      documentId: 'string',
      sample: 'string',
      title: 'string',
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
  createdTime?: string;
  description?: string;
  modifiedTime?: string;
  pluginData?: string;
  pluginId?: string;
  pluginName?: string;
  pluginType?: string;
  regionId?: string;
  tags?: DescribePluginsResponseBodyPluginsPluginAttributeTags;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      pluginData: 'PluginData',
      pluginId: 'PluginId',
      pluginName: 'PluginName',
      pluginType: 'PluginType',
      regionId: 'RegionId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      modifiedTime: 'string',
      pluginData: 'string',
      pluginId: 'string',
      pluginName: 'string',
      pluginType: 'string',
      regionId: 'string',
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

export class DescribePluginsByApiResponseBodyPluginsPluginAttribute extends $tea.Model {
  createdTime?: string;
  description?: string;
  modifiedTime?: string;
  pluginData?: string;
  pluginId?: string;
  pluginName?: string;
  pluginType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      pluginData: 'PluginData',
      pluginId: 'PluginId',
      pluginName: 'PluginName',
      pluginType: 'PluginType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      modifiedTime: 'string',
      pluginData: 'string',
      pluginId: 'string',
      pluginName: 'string',
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

export class DescribePurchasedApiGroupsResponseBodyPurchasedApiGroupAttributesPurchasedApiGroupAttribute extends $tea.Model {
  billingType?: string;
  description?: string;
  expireTime?: string;
  groupId?: string;
  groupName?: string;
  invokeTimesMax?: number;
  invokeTimesNow?: number;
  purchasedTime?: string;
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      billingType: 'BillingType',
      description: 'Description',
      expireTime: 'ExpireTime',
      groupId: 'GroupId',
      groupName: 'GroupName',
      invokeTimesMax: 'InvokeTimesMax',
      invokeTimesNow: 'InvokeTimesNow',
      purchasedTime: 'PurchasedTime',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingType: 'string',
      description: 'string',
      expireTime: 'string',
      groupId: 'string',
      groupName: 'string',
      invokeTimesMax: 'number',
      invokeTimesNow: 'number',
      purchasedTime: 'string',
      regionId: 'string',
      status: 'string',
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

export class DescribePurchasedApisResponseBodyPurchasedApisPurchasedApi extends $tea.Model {
  apiId?: string;
  apiName?: string;
  deployedTime?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  modifiedTime?: string;
  purchasedTime?: string;
  regionId?: string;
  stageName?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      deployedTime: 'DeployedTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      modifiedTime: 'ModifiedTime',
      purchasedTime: 'PurchasedTime',
      regionId: 'RegionId',
      stageName: 'StageName',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      deployedTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      modifiedTime: 'string',
      purchasedTime: 'string',
      regionId: 'string',
      stageName: 'string',
      visibility: 'string',
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

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
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

export class DescribeSignaturesResponseBodySignatureInfosSignatureInfo extends $tea.Model {
  createdTime?: string;
  modifiedTime?: string;
  regionId?: string;
  signatureId?: string;
  signatureKey?: string;
  signatureName?: string;
  signatureSecret?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      modifiedTime: 'ModifiedTime',
      regionId: 'RegionId',
      signatureId: 'SignatureId',
      signatureKey: 'SignatureKey',
      signatureName: 'SignatureName',
      signatureSecret: 'SignatureSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      modifiedTime: 'string',
      regionId: 'string',
      signatureId: 'string',
      signatureKey: 'string',
      signatureName: 'string',
      signatureSecret: 'string',
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

export class DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicySpecialsSpecial extends $tea.Model {
  specialKey?: string;
  trafficValue?: number;
  static names(): { [key: string]: string } {
    return {
      specialKey: 'SpecialKey',
      trafficValue: 'TrafficValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specialKey: 'string',
      trafficValue: 'number',
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
  apiDefault?: number;
  appDefault?: number;
  createdTime?: string;
  description?: string;
  modifiedTime?: string;
  specialPolicies?: DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPolicies;
  trafficControlId?: string;
  trafficControlName?: string;
  trafficControlUnit?: string;
  userDefault?: number;
  static names(): { [key: string]: string } {
    return {
      apiDefault: 'ApiDefault',
      appDefault: 'AppDefault',
      createdTime: 'CreatedTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      specialPolicies: 'SpecialPolicies',
      trafficControlId: 'TrafficControlId',
      trafficControlName: 'TrafficControlName',
      trafficControlUnit: 'TrafficControlUnit',
      userDefault: 'UserDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDefault: 'number',
      appDefault: 'number',
      createdTime: 'string',
      description: 'string',
      modifiedTime: 'string',
      specialPolicies: DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPolicies,
      trafficControlId: 'string',
      trafficControlName: 'string',
      trafficControlUnit: 'string',
      userDefault: 'number',
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

export class DescribeTrafficControlsByApiResponseBodyTrafficControlItemsTrafficControlItem extends $tea.Model {
  boundTime?: string;
  trafficControlItemId?: string;
  trafficControlItemName?: string;
  static names(): { [key: string]: string } {
    return {
      boundTime: 'BoundTime',
      trafficControlItemId: 'TrafficControlItemId',
      trafficControlItemName: 'TrafficControlItemName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundTime: 'string',
      trafficControlItemId: 'string',
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

export class DescribeUpdateBackendTaskResponseBodyApiUpdateBackendResultsApiUpdateBackendResult extends $tea.Model {
  apiName?: string;
  apiUid?: string;
  backendId?: string;
  errorMsg?: string;
  groupId?: string;
  groupName?: string;
  stageId?: string;
  stageName?: string;
  updateStatus?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      apiUid: 'ApiUid',
      backendId: 'BackendId',
      errorMsg: 'ErrorMsg',
      groupId: 'GroupId',
      groupName: 'GroupName',
      stageId: 'StageId',
      stageName: 'StageName',
      updateStatus: 'UpdateStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      apiUid: 'string',
      backendId: 'string',
      errorMsg: 'string',
      groupId: 'string',
      groupName: 'string',
      stageId: 'string',
      stageName: 'string',
      updateStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpdateBackendTaskResponseBodyApiUpdateBackendResults extends $tea.Model {
  apiUpdateBackendResult?: DescribeUpdateBackendTaskResponseBodyApiUpdateBackendResultsApiUpdateBackendResult[];
  static names(): { [key: string]: string } {
    return {
      apiUpdateBackendResult: 'ApiUpdateBackendResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiUpdateBackendResult: { 'type': 'array', 'itemType': DescribeUpdateBackendTaskResponseBodyApiUpdateBackendResultsApiUpdateBackendResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpdateVpcInfoTaskResponseBodyApiUpdateVpcInfoResultsApiUpdateVpcInfoResult extends $tea.Model {
  apiName?: string;
  apiUid?: string;
  errorMsg?: string;
  groupId?: string;
  groupName?: string;
  stageId?: string;
  stageName?: string;
  updateStatus?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      apiUid: 'ApiUid',
      errorMsg: 'ErrorMsg',
      groupId: 'GroupId',
      groupName: 'GroupName',
      stageId: 'StageId',
      stageName: 'StageName',
      updateStatus: 'UpdateStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      apiUid: 'string',
      errorMsg: 'string',
      groupId: 'string',
      groupName: 'string',
      stageId: 'string',
      stageName: 'string',
      updateStatus: 'string',
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

export class DescribeVpcAccessesResponseBodyVpcAccessAttributesVpcAccessAttribute extends $tea.Model {
  createdTime?: string;
  description?: string;
  instanceId?: string;
  name?: string;
  port?: number;
  regionId?: string;
  vpcAccessId?: string;
  vpcId?: string;
  vpcTargetHostName?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      port: 'Port',
      regionId: 'RegionId',
      vpcAccessId: 'VpcAccessId',
      vpcId: 'VpcId',
      vpcTargetHostName: 'VpcTargetHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      port: 'number',
      regionId: 'string',
      vpcAccessId: 'string',
      vpcId: 'string',
      vpcTargetHostName: 'string',
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

export class DescribeZonesResponseBodyZonesZone extends $tea.Model {
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

export class DryRunSwaggerResponseBodyFailedApiImportSwaggerFailed extends $tea.Model {
  errorMsg?: string;
  httpMethod?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      httpMethod: 'HttpMethod',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      httpMethod: 'string',
      path: 'string',
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
  groupId?: string;
  modelName?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      groupId: 'GroupId',
      modelName: 'ModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      groupId: 'string',
      modelName: 'string',
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
  groupId?: string;
  modelName?: string;
  modelOperation?: string;
  modelUid?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      modelName: 'ModelName',
      modelOperation: 'ModelOperation',
      modelUid: 'ModelUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      modelName: 'string',
      modelOperation: 'string',
      modelUid: 'string',
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

export class DryRunSwaggerResponseBodySuccessApiDryRunSwaggerSuccess extends $tea.Model {
  apiOperation?: string;
  apiSwagger?: string;
  apiUid?: string;
  httpMethod?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      apiOperation: 'ApiOperation',
      apiSwagger: 'ApiSwagger',
      apiUid: 'ApiUid',
      httpMethod: 'HttpMethod',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiOperation: 'string',
      apiSwagger: 'string',
      apiUid: 'string',
      httpMethod: 'string',
      path: 'string',
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

export class ImportOASResponseBodyErrorMessages extends $tea.Model {
  errorMessage?: string[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportOASResponseBodyFailedApisFailedApi extends $tea.Model {
  errorMsg?: string;
  httpMethod?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      httpMethod: 'HttpMethod',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      httpMethod: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportOASResponseBodyFailedApis extends $tea.Model {
  failedApi?: ImportOASResponseBodyFailedApisFailedApi[];
  static names(): { [key: string]: string } {
    return {
      failedApi: 'FailedApi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedApi: { 'type': 'array', 'itemType': ImportOASResponseBodyFailedApisFailedApi },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportOASResponseBodyFailedModelsFailedModel extends $tea.Model {
  errorMsg?: string;
  groupId?: string;
  modelName?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      groupId: 'GroupId',
      modelName: 'ModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      groupId: 'string',
      modelName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportOASResponseBodyFailedModels extends $tea.Model {
  failedModel?: ImportOASResponseBodyFailedModelsFailedModel[];
  static names(): { [key: string]: string } {
    return {
      failedModel: 'FailedModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedModel: { 'type': 'array', 'itemType': ImportOASResponseBodyFailedModelsFailedModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportOASResponseBodySuccessApisSuccessApi extends $tea.Model {
  apiId?: string;
  apiOperation?: string;
  httpMethod?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiOperation: 'ApiOperation',
      httpMethod: 'HttpMethod',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiOperation: 'string',
      httpMethod: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportOASResponseBodySuccessApis extends $tea.Model {
  successApi?: ImportOASResponseBodySuccessApisSuccessApi[];
  static names(): { [key: string]: string } {
    return {
      successApi: 'SuccessApi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successApi: { 'type': 'array', 'itemType': ImportOASResponseBodySuccessApisSuccessApi },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportOASResponseBodySuccessModelsSuccessModel extends $tea.Model {
  groupId?: string;
  modelName?: string;
  modelOperation?: string;
  modelUid?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      modelName: 'ModelName',
      modelOperation: 'ModelOperation',
      modelUid: 'ModelUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      modelName: 'string',
      modelOperation: 'string',
      modelUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportOASResponseBodySuccessModels extends $tea.Model {
  successModel?: ImportOASResponseBodySuccessModelsSuccessModel[];
  static names(): { [key: string]: string } {
    return {
      successModel: 'SuccessModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successModel: { 'type': 'array', 'itemType': ImportOASResponseBodySuccessModelsSuccessModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportOASResponseBodyWarningMessages extends $tea.Model {
  warningMessage?: string[];
  static names(): { [key: string]: string } {
    return {
      warningMessage: 'WarningMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      warningMessage: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSwaggerResponseBodyFailedApiImportSwaggerFailed extends $tea.Model {
  errorMsg?: string;
  httpMethod?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      httpMethod: 'HttpMethod',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      httpMethod: 'string',
      path: 'string',
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
  groupId?: string;
  modelName?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      groupId: 'GroupId',
      modelName: 'ModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      groupId: 'string',
      modelName: 'string',
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
  groupId?: string;
  modelName?: string;
  modelOperation?: string;
  modelUid?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      modelName: 'ModelName',
      modelOperation: 'ModelOperation',
      modelUid: 'ModelUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      modelName: 'string',
      modelOperation: 'string',
      modelUid: 'string',
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

export class ImportSwaggerResponseBodySuccessApiImportSwaggerSuccess extends $tea.Model {
  apiOperation?: string;
  apiUid?: string;
  httpMethod?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      apiOperation: 'ApiOperation',
      apiUid: 'ApiUid',
      httpMethod: 'HttpMethod',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiOperation: 'string',
      apiUid: 'string',
      httpMethod: 'string',
      path: 'string',
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

export class QueryRequestLogsResponseBodyRequestLogsRequestLog extends $tea.Model {
  apiId?: string;
  apiName?: string;
  appName?: string;
  backendRequestEnd?: number;
  backendRequestStart?: number;
  backendResponseEnd?: number;
  backendResponseStart?: number;
  clientIp?: string;
  clientNonce?: string;
  consumerAppId?: string;
  consumerAppKey?: string;
  customTraceId?: string;
  domain?: string;
  errorCode?: string;
  errorMessage?: string;
  exception?: string;
  frontRequestEnd?: number;
  frontRequestStart?: number;
  frontResponseEnd?: number;
  frontResponseStart?: number;
  groupId?: string;
  groupName?: string;
  httpMethod?: string;
  httpPath?: string;
  initialRequestId?: string;
  instanceId?: string;
  jwtClaims?: string;
  region?: string;
  requestBody?: string;
  requestHeaders?: string;
  requestId?: string;
  requestProtocol?: string;
  requestQueryString?: string;
  requestSize?: string;
  requestTime?: string;
  responseBody?: string;
  responseHeaders?: string;
  responseSize?: string;
  serviceLatency?: string;
  stageId?: string;
  stageName?: string;
  statusCode?: string;
  totalLatency?: string;
  plugin?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      appName: 'AppName',
      backendRequestEnd: 'BackendRequestEnd',
      backendRequestStart: 'BackendRequestStart',
      backendResponseEnd: 'BackendResponseEnd',
      backendResponseStart: 'BackendResponseStart',
      clientIp: 'ClientIp',
      clientNonce: 'ClientNonce',
      consumerAppId: 'ConsumerAppId',
      consumerAppKey: 'ConsumerAppKey',
      customTraceId: 'CustomTraceId',
      domain: 'Domain',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      exception: 'Exception',
      frontRequestEnd: 'FrontRequestEnd',
      frontRequestStart: 'FrontRequestStart',
      frontResponseEnd: 'FrontResponseEnd',
      frontResponseStart: 'FrontResponseStart',
      groupId: 'GroupId',
      groupName: 'GroupName',
      httpMethod: 'HttpMethod',
      httpPath: 'HttpPath',
      initialRequestId: 'InitialRequestId',
      instanceId: 'InstanceId',
      jwtClaims: 'JwtClaims',
      region: 'Region',
      requestBody: 'RequestBody',
      requestHeaders: 'RequestHeaders',
      requestId: 'RequestId',
      requestProtocol: 'RequestProtocol',
      requestQueryString: 'RequestQueryString',
      requestSize: 'RequestSize',
      requestTime: 'RequestTime',
      responseBody: 'ResponseBody',
      responseHeaders: 'ResponseHeaders',
      responseSize: 'ResponseSize',
      serviceLatency: 'ServiceLatency',
      stageId: 'StageId',
      stageName: 'StageName',
      statusCode: 'StatusCode',
      totalLatency: 'TotalLatency',
      plugin: 'plugin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      appName: 'string',
      backendRequestEnd: 'number',
      backendRequestStart: 'number',
      backendResponseEnd: 'number',
      backendResponseStart: 'number',
      clientIp: 'string',
      clientNonce: 'string',
      consumerAppId: 'string',
      consumerAppKey: 'string',
      customTraceId: 'string',
      domain: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      exception: 'string',
      frontRequestEnd: 'number',
      frontRequestStart: 'number',
      frontResponseEnd: 'number',
      frontResponseStart: 'number',
      groupId: 'string',
      groupName: 'string',
      httpMethod: 'string',
      httpPath: 'string',
      initialRequestId: 'string',
      instanceId: 'string',
      jwtClaims: 'string',
      region: 'string',
      requestBody: 'string',
      requestHeaders: 'string',
      requestId: 'string',
      requestProtocol: 'string',
      requestQueryString: 'string',
      requestSize: 'string',
      requestTime: 'string',
      responseBody: 'string',
      responseHeaders: 'string',
      responseSize: 'string',
      serviceLatency: 'string',
      stageId: 'string',
      stageName: 'string',
      statusCode: 'string',
      totalLatency: 'string',
      plugin: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRequestLogsResponseBodyRequestLogs extends $tea.Model {
  requestLog?: QueryRequestLogsResponseBodyRequestLogsRequestLog[];
  static names(): { [key: string]: string } {
    return {
      requestLog: 'RequestLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestLog: { 'type': 'array', 'itemType': QueryRequestLogsResponseBodyRequestLogsRequestLog },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVpcAccessResponseBodyApisApi extends $tea.Model {
  apiId?: string;
  groupId?: string;
  stageId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      stageId: 'StageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      stageId: 'string',
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

  async abolishApiWithOptions(request: AbolishApiRequest, runtime: $Util.RuntimeOptions): Promise<AbolishApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AbolishApi",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AbolishApiResponse>(await this.callApi(params, req, runtime), new AbolishApiResponse({}));
  }

  async abolishApi(request: AbolishApiRequest): Promise<AbolishApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abolishApiWithOptions(request, runtime);
  }

  async addAccessControlListEntryWithOptions(request: AddAccessControlListEntryRequest, runtime: $Util.RuntimeOptions): Promise<AddAccessControlListEntryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclEntrys)) {
      query["AclEntrys"] = request.aclEntrys;
    }

    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddAccessControlListEntry",
      version: "2016-07-14",
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

  async addAccessControlListEntry(request: AddAccessControlListEntryRequest): Promise<AddAccessControlListEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAccessControlListEntryWithOptions(request, runtime);
  }

  /**
    * The restriction policy on app IDs for a specific policy. You can restrict app IDs only for whitelists. The IpControlType values of whitelists are ALLOW.
    * *   You can add only one app ID restriction policy at a time.
    * *   If this parameter is empty, no restriction is imposed on the app IDs.
    * *   If this parameter is not empty, there is restriction not only on IP addresses, but also on apps.
    * *   Please note that if this parameter is not empty and the security authentication method of the API is No Authentication, all API calls are restricted.
    * *   If this parameter is not empty for a blacklist, API Gateway automatically skips this parameter and sets only restriction on IP addresses. The IpControlType value of a blacklist is REFUSE.
    *
    * @param request AddIpControlPolicyItemRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddIpControlPolicyItemResponse
   */
  async addIpControlPolicyItemWithOptions(request: AddIpControlPolicyItemRequest, runtime: $Util.RuntimeOptions): Promise<AddIpControlPolicyItemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.cidrIp)) {
      query["CidrIp"] = request.cidrIp;
    }

    if (!Util.isUnset(request.ipControlId)) {
      query["IpControlId"] = request.ipControlId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddIpControlPolicyItem",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddIpControlPolicyItemResponse>(await this.callApi(params, req, runtime), new AddIpControlPolicyItemResponse({}));
  }

  /**
    * The restriction policy on app IDs for a specific policy. You can restrict app IDs only for whitelists. The IpControlType values of whitelists are ALLOW.
    * *   You can add only one app ID restriction policy at a time.
    * *   If this parameter is empty, no restriction is imposed on the app IDs.
    * *   If this parameter is not empty, there is restriction not only on IP addresses, but also on apps.
    * *   Please note that if this parameter is not empty and the security authentication method of the API is No Authentication, all API calls are restricted.
    * *   If this parameter is not empty for a blacklist, API Gateway automatically skips this parameter and sets only restriction on IP addresses. The IpControlType value of a blacklist is REFUSE.
    *
    * @param request AddIpControlPolicyItemRequest
    * @return AddIpControlPolicyItemResponse
   */
  async addIpControlPolicyItem(request: AddIpControlPolicyItemRequest): Promise<AddIpControlPolicyItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addIpControlPolicyItemWithOptions(request, runtime);
  }

  /**
    * The type of the special throttling policy. Valid values:
    * *   **APP**
    * *   **USER**
    *
    * @param request AddTrafficSpecialControlRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddTrafficSpecialControlResponse
   */
  async addTrafficSpecialControlWithOptions(request: AddTrafficSpecialControlRequest, runtime: $Util.RuntimeOptions): Promise<AddTrafficSpecialControlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.specialKey)) {
      query["SpecialKey"] = request.specialKey;
    }

    if (!Util.isUnset(request.specialType)) {
      query["SpecialType"] = request.specialType;
    }

    if (!Util.isUnset(request.trafficControlId)) {
      query["TrafficControlId"] = request.trafficControlId;
    }

    if (!Util.isUnset(request.trafficValue)) {
      query["TrafficValue"] = request.trafficValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddTrafficSpecialControl",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddTrafficSpecialControlResponse>(await this.callApi(params, req, runtime), new AddTrafficSpecialControlResponse({}));
  }

  /**
    * The type of the special throttling policy. Valid values:
    * *   **APP**
    * *   **USER**
    *
    * @param request AddTrafficSpecialControlRequest
    * @return AddTrafficSpecialControlResponse
   */
  async addTrafficSpecialControl(request: AddTrafficSpecialControlRequest): Promise<AddTrafficSpecialControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTrafficSpecialControlWithOptions(request, runtime);
  }

  async attachPluginWithOptions(request: AttachPluginRequest, runtime: $Util.RuntimeOptions): Promise<AttachPluginResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.apiIds)) {
      query["ApiIds"] = request.apiIds;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachPlugin",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachPluginResponse>(await this.callApi(params, req, runtime), new AttachPluginResponse({}));
  }

  async attachPlugin(request: AttachPluginRequest): Promise<AttachPluginResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachPluginWithOptions(request, runtime);
  }

  async batchAbolishApisWithOptions(request: BatchAbolishApisRequest, runtime: $Util.RuntimeOptions): Promise<BatchAbolishApisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.api)) {
      query["Api"] = request.api;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchAbolishApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchAbolishApisResponse>(await this.callApi(params, req, runtime), new BatchAbolishApisResponse({}));
  }

  async batchAbolishApis(request: BatchAbolishApisRequest): Promise<BatchAbolishApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchAbolishApisWithOptions(request, runtime);
  }

  async batchDeployApisWithOptions(request: BatchDeployApisRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeployApisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.api)) {
      query["Api"] = request.api;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchDeployApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchDeployApisResponse>(await this.callApi(params, req, runtime), new BatchDeployApisResponse({}));
  }

  async batchDeployApis(request: BatchDeployApisRequest): Promise<BatchDeployApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeployApisWithOptions(request, runtime);
  }

  async createAccessControlListWithOptions(request: CreateAccessControlListRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccessControlListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclName)) {
      query["AclName"] = request.aclName;
    }

    if (!Util.isUnset(request.addressIPVersion)) {
      query["AddressIPVersion"] = request.addressIPVersion;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAccessControlList",
      version: "2016-07-14",
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

  async createAccessControlList(request: CreateAccessControlListRequest): Promise<CreateAccessControlListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccessControlListWithOptions(request, runtime);
  }

  /**
    * *   This operation is intended for API providers.
    * *   The name of each API within the same group must be unique.
    * *   Each request path within the same group must be unique.
    * *   The QPS limit on this operation is 50 per user.
    *
    * @param request CreateApiRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateApiResponse
   */
  async createApiWithOptions(request: CreateApiRequest, runtime: $Util.RuntimeOptions): Promise<CreateApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allowSignatureMethod)) {
      query["AllowSignatureMethod"] = request.allowSignatureMethod;
    }

    if (!Util.isUnset(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!Util.isUnset(request.appCodeAuthType)) {
      query["AppCodeAuthType"] = request.appCodeAuthType;
    }

    if (!Util.isUnset(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!Util.isUnset(request.backendEnable)) {
      query["BackendEnable"] = request.backendEnable;
    }

    if (!Util.isUnset(request.backendId)) {
      query["BackendId"] = request.backendId;
    }

    if (!Util.isUnset(request.constantParameters)) {
      query["ConstantParameters"] = request.constantParameters;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.disableInternet)) {
      query["DisableInternet"] = request.disableInternet;
    }

    if (!Util.isUnset(request.errorCodeSamples)) {
      query["ErrorCodeSamples"] = request.errorCodeSamples;
    }

    if (!Util.isUnset(request.failResultSample)) {
      query["FailResultSample"] = request.failResultSample;
    }

    if (!Util.isUnset(request.forceNonceCheck)) {
      query["ForceNonceCheck"] = request.forceNonceCheck;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.openIdConnectConfig)) {
      query["OpenIdConnectConfig"] = request.openIdConnectConfig;
    }

    if (!Util.isUnset(request.requestConfig)) {
      query["RequestConfig"] = request.requestConfig;
    }

    if (!Util.isUnset(request.requestParameters)) {
      query["RequestParameters"] = request.requestParameters;
    }

    if (!Util.isUnset(request.resultBodyModel)) {
      query["ResultBodyModel"] = request.resultBodyModel;
    }

    if (!Util.isUnset(request.resultDescriptions)) {
      query["ResultDescriptions"] = request.resultDescriptions;
    }

    if (!Util.isUnset(request.resultSample)) {
      query["ResultSample"] = request.resultSample;
    }

    if (!Util.isUnset(request.resultType)) {
      query["ResultType"] = request.resultType;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.serviceConfig)) {
      query["ServiceConfig"] = request.serviceConfig;
    }

    if (!Util.isUnset(request.serviceParameters)) {
      query["ServiceParameters"] = request.serviceParameters;
    }

    if (!Util.isUnset(request.serviceParametersMap)) {
      query["ServiceParametersMap"] = request.serviceParametersMap;
    }

    if (!Util.isUnset(request.systemParameters)) {
      query["SystemParameters"] = request.systemParameters;
    }

    if (!Util.isUnset(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    if (!Util.isUnset(request.webSocketApiType)) {
      query["WebSocketApiType"] = request.webSocketApiType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApi",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateApiResponse>(await this.callApi(params, req, runtime), new CreateApiResponse({}));
  }

  /**
    * *   This operation is intended for API providers.
    * *   The name of each API within the same group must be unique.
    * *   Each request path within the same group must be unique.
    * *   The QPS limit on this operation is 50 per user.
    *
    * @param request CreateApiRequest
    * @return CreateApiResponse
   */
  async createApi(request: CreateApiRequest): Promise<CreateApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApiWithOptions(request, runtime);
  }

  async createApiGroupWithOptions(request: CreateApiGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateApiGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.basePath)) {
      query["BasePath"] = request.basePath;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApiGroup",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateApiGroupResponse>(await this.callApi(params, req, runtime), new CreateApiGroupResponse({}));
  }

  async createApiGroup(request: CreateApiGroupRequest): Promise<CreateApiGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApiGroupWithOptions(request, runtime);
  }

  async createApiStageVariableWithOptions(request: CreateApiStageVariableRequest, runtime: $Util.RuntimeOptions): Promise<CreateApiStageVariableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageId)) {
      query["StageId"] = request.stageId;
    }

    if (!Util.isUnset(request.stageRouteModel)) {
      query["StageRouteModel"] = request.stageRouteModel;
    }

    if (!Util.isUnset(request.supportRoute)) {
      query["SupportRoute"] = request.supportRoute;
    }

    if (!Util.isUnset(request.variableName)) {
      query["VariableName"] = request.variableName;
    }

    if (!Util.isUnset(request.variableValue)) {
      query["VariableValue"] = request.variableValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApiStageVariable",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateApiStageVariableResponse>(await this.callApi(params, req, runtime), new CreateApiStageVariableResponse({}));
  }

  async createApiStageVariable(request: CreateApiStageVariableRequest): Promise<CreateApiStageVariableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApiStageVariableWithOptions(request, runtime);
  }

  async createAppWithOptions(request: CreateAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.appSecret)) {
      query["AppSecret"] = request.appSecret;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApp",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppResponse>(await this.callApi(params, req, runtime), new CreateAppResponse({}));
  }

  async createApp(request: CreateAppRequest): Promise<CreateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppWithOptions(request, runtime);
  }

  async createBackendWithOptions(request: CreateBackendRequest, runtime: $Util.RuntimeOptions): Promise<CreateBackendResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendName)) {
      query["BackendName"] = request.backendName;
    }

    if (!Util.isUnset(request.backendType)) {
      query["BackendType"] = request.backendType;
    }

    if (!Util.isUnset(request.createEventBridgeServiceLinkedRole)) {
      query["CreateEventBridgeServiceLinkedRole"] = request.createEventBridgeServiceLinkedRole;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateBackend",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBackendResponse>(await this.callApi(params, req, runtime), new CreateBackendResponse({}));
  }

  async createBackend(request: CreateBackendRequest): Promise<CreateBackendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBackendWithOptions(request, runtime);
  }

  async createBackendModelWithOptions(request: CreateBackendModelRequest, runtime: $Util.RuntimeOptions): Promise<CreateBackendModelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendId)) {
      query["BackendId"] = request.backendId;
    }

    if (!Util.isUnset(request.backendModelData)) {
      query["BackendModelData"] = request.backendModelData;
    }

    if (!Util.isUnset(request.backendType)) {
      query["BackendType"] = request.backendType;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateBackendModel",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBackendModelResponse>(await this.callApi(params, req, runtime), new CreateBackendModelResponse({}));
  }

  async createBackendModel(request: CreateBackendModelRequest): Promise<CreateBackendModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBackendModelWithOptions(request, runtime);
  }

  async createDatasetWithOptions(request: CreateDatasetRequest, runtime: $Util.RuntimeOptions): Promise<CreateDatasetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.datasetType)) {
      query["DatasetType"] = request.datasetType;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDataset",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDatasetResponse>(await this.callApi(params, req, runtime), new CreateDatasetResponse({}));
  }

  async createDataset(request: CreateDatasetRequest): Promise<CreateDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDatasetWithOptions(request, runtime);
  }

  async createDatasetItemWithOptions(request: CreateDatasetItemRequest, runtime: $Util.RuntimeOptions): Promise<CreateDatasetItemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.expiredTime)) {
      query["ExpiredTime"] = request.expiredTime;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDatasetItem",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDatasetItemResponse>(await this.callApi(params, req, runtime), new CreateDatasetItemResponse({}));
  }

  async createDatasetItem(request: CreateDatasetItemRequest): Promise<CreateDatasetItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDatasetItemWithOptions(request, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.httpsPolicy)) {
      query["HttpsPolicy"] = request.httpsPolicy;
    }

    if (!Util.isUnset(request.instanceCidr)) {
      query["InstanceCidr"] = request.instanceCidr;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.instanceSpec)) {
      query["InstanceSpec"] = request.instanceSpec;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    if (!Util.isUnset(request.userVpcId)) {
      query["UserVpcId"] = request.userVpcId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    if (!Util.isUnset(request.zoneVSwitchSecurityGroup)) {
      query["ZoneVSwitchSecurityGroup"] = request.zoneVSwitchSecurityGroup;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstance",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  async createIntranetDomainWithOptions(request: CreateIntranetDomainRequest, runtime: $Util.RuntimeOptions): Promise<CreateIntranetDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateIntranetDomain",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateIntranetDomainResponse>(await this.callApi(params, req, runtime), new CreateIntranetDomainResponse({}));
  }

  async createIntranetDomain(request: CreateIntranetDomainRequest): Promise<CreateIntranetDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIntranetDomainWithOptions(request, runtime);
  }

  async createIpControlWithOptions(request: CreateIpControlRequest, runtime: $Util.RuntimeOptions): Promise<CreateIpControlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.ipControlName)) {
      query["IpControlName"] = request.ipControlName;
    }

    if (!Util.isUnset(request.ipControlPolicys)) {
      query["IpControlPolicys"] = request.ipControlPolicys;
    }

    if (!Util.isUnset(request.ipControlType)) {
      query["IpControlType"] = request.ipControlType;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateIpControl",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateIpControlResponse>(await this.callApi(params, req, runtime), new CreateIpControlResponse({}));
  }

  async createIpControl(request: CreateIpControlRequest): Promise<CreateIpControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIpControlWithOptions(request, runtime);
  }

  async createLogConfigWithOptions(request: CreateLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateLogConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.logType)) {
      query["LogType"] = request.logType;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.slsLogStore)) {
      query["SlsLogStore"] = request.slsLogStore;
    }

    if (!Util.isUnset(request.slsProject)) {
      query["SlsProject"] = request.slsProject;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLogConfig",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLogConfigResponse>(await this.callApi(params, req, runtime), new CreateLogConfigResponse({}));
  }

  async createLogConfig(request: CreateLogConfigRequest): Promise<CreateLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLogConfigWithOptions(request, runtime);
  }

  /**
    * *   For more information about the model definition, see [JSON Schema Draft 4](https://tools.ietf.org/html/draft-zyp-json-schema-04?spm=a2c4g.11186623.2.10.2e977ff7p4BpQd).
    * *   JSON Schema supports only element attributes of the Object type.
    *
    * @param request CreateModelRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateModelResponse
   */
  async createModelWithOptions(request: CreateModelRequest, runtime: $Util.RuntimeOptions): Promise<CreateModelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.modelName)) {
      query["ModelName"] = request.modelName;
    }

    if (!Util.isUnset(request.schema)) {
      query["Schema"] = request.schema;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateModel",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateModelResponse>(await this.callApi(params, req, runtime), new CreateModelResponse({}));
  }

  /**
    * *   For more information about the model definition, see [JSON Schema Draft 4](https://tools.ietf.org/html/draft-zyp-json-schema-04?spm=a2c4g.11186623.2.10.2e977ff7p4BpQd).
    * *   JSON Schema supports only element attributes of the Object type.
    *
    * @param request CreateModelRequest
    * @return CreateModelResponse
   */
  async createModel(request: CreateModelRequest): Promise<CreateModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createModelWithOptions(request, runtime);
  }

  async createMonitorGroupWithOptions(request: CreateMonitorGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateMonitorGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auth)) {
      query["Auth"] = request.auth;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.rawMonitorGroupId)) {
      query["RawMonitorGroupId"] = request.rawMonitorGroupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMonitorGroup",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMonitorGroupResponse>(await this.callApi(params, req, runtime), new CreateMonitorGroupResponse({}));
  }

  async createMonitorGroup(request: CreateMonitorGroupRequest): Promise<CreateMonitorGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMonitorGroupWithOptions(request, runtime);
  }

  async createPluginWithOptions(request: CreatePluginRequest, runtime: $Util.RuntimeOptions): Promise<CreatePluginResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.pluginData)) {
      query["PluginData"] = request.pluginData;
    }

    if (!Util.isUnset(request.pluginName)) {
      query["PluginName"] = request.pluginName;
    }

    if (!Util.isUnset(request.pluginType)) {
      query["PluginType"] = request.pluginType;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePlugin",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePluginResponse>(await this.callApi(params, req, runtime), new CreatePluginResponse({}));
  }

  async createPlugin(request: CreatePluginRequest): Promise<CreatePluginResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPluginWithOptions(request, runtime);
  }

  /**
    * The Key value of the key. The value must be 6 to 20 characters in length and can contain letters, digits, and underscores (\\_). It must start with a letter.
    *
    * @param request CreateSignatureRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateSignatureResponse
   */
  async createSignatureWithOptions(request: CreateSignatureRequest, runtime: $Util.RuntimeOptions): Promise<CreateSignatureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.signatureKey)) {
      query["SignatureKey"] = request.signatureKey;
    }

    if (!Util.isUnset(request.signatureName)) {
      query["SignatureName"] = request.signatureName;
    }

    if (!Util.isUnset(request.signatureSecret)) {
      query["SignatureSecret"] = request.signatureSecret;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSignature",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSignatureResponse>(await this.callApi(params, req, runtime), new CreateSignatureResponse({}));
  }

  /**
    * The Key value of the key. The value must be 6 to 20 characters in length and can contain letters, digits, and underscores (\\_). It must start with a letter.
    *
    * @param request CreateSignatureRequest
    * @return CreateSignatureResponse
   */
  async createSignature(request: CreateSignatureRequest): Promise<CreateSignatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSignatureWithOptions(request, runtime);
  }

  /**
    * ThrottlingTest
    *
    * @param request CreateTrafficControlRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateTrafficControlResponse
   */
  async createTrafficControlWithOptions(request: CreateTrafficControlRequest, runtime: $Util.RuntimeOptions): Promise<CreateTrafficControlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiDefault)) {
      query["ApiDefault"] = request.apiDefault;
    }

    if (!Util.isUnset(request.appDefault)) {
      query["AppDefault"] = request.appDefault;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.trafficControlName)) {
      query["TrafficControlName"] = request.trafficControlName;
    }

    if (!Util.isUnset(request.trafficControlUnit)) {
      query["TrafficControlUnit"] = request.trafficControlUnit;
    }

    if (!Util.isUnset(request.userDefault)) {
      query["UserDefault"] = request.userDefault;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTrafficControl",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTrafficControlResponse>(await this.callApi(params, req, runtime), new CreateTrafficControlResponse({}));
  }

  /**
    * ThrottlingTest
    *
    * @param request CreateTrafficControlRequest
    * @return CreateTrafficControlResponse
   */
  async createTrafficControl(request: CreateTrafficControlRequest): Promise<CreateTrafficControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTrafficControlWithOptions(request, runtime);
  }

  async deleteAccessControlListWithOptions(request: DeleteAccessControlListRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccessControlListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAccessControlList",
      version: "2016-07-14",
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

  async deleteAccessControlList(request: DeleteAccessControlListRequest): Promise<DeleteAccessControlListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccessControlListWithOptions(request, runtime);
  }

  /**
    * The ID of the request.
    *
    * @param request DeleteAllTrafficSpecialControlRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteAllTrafficSpecialControlResponse
   */
  async deleteAllTrafficSpecialControlWithOptions(request: DeleteAllTrafficSpecialControlRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAllTrafficSpecialControlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.trafficControlId)) {
      query["TrafficControlId"] = request.trafficControlId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAllTrafficSpecialControl",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAllTrafficSpecialControlResponse>(await this.callApi(params, req, runtime), new DeleteAllTrafficSpecialControlResponse({}));
  }

  /**
    * The ID of the request.
    *
    * @param request DeleteAllTrafficSpecialControlRequest
    * @return DeleteAllTrafficSpecialControlResponse
   */
  async deleteAllTrafficSpecialControl(request: DeleteAllTrafficSpecialControlRequest): Promise<DeleteAllTrafficSpecialControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAllTrafficSpecialControlWithOptions(request, runtime);
  }

  async deleteApiWithOptions(request: DeleteApiRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApi",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteApiResponse>(await this.callApi(params, req, runtime), new DeleteApiResponse({}));
  }

  async deleteApi(request: DeleteApiRequest): Promise<DeleteApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApiWithOptions(request, runtime);
  }

  async deleteApiGroupWithOptions(request: DeleteApiGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApiGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApiGroup",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteApiGroupResponse>(await this.callApi(params, req, runtime), new DeleteApiGroupResponse({}));
  }

  async deleteApiGroup(request: DeleteApiGroupRequest): Promise<DeleteApiGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApiGroupWithOptions(request, runtime);
  }

  async deleteApiStageVariableWithOptions(request: DeleteApiStageVariableRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApiStageVariableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageId)) {
      query["StageId"] = request.stageId;
    }

    if (!Util.isUnset(request.variableName)) {
      query["VariableName"] = request.variableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApiStageVariable",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteApiStageVariableResponse>(await this.callApi(params, req, runtime), new DeleteApiStageVariableResponse({}));
  }

  async deleteApiStageVariable(request: DeleteApiStageVariableRequest): Promise<DeleteApiStageVariableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApiStageVariableWithOptions(request, runtime);
  }

  async deleteAppWithOptions(request: DeleteAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApp",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppResponse>(await this.callApi(params, req, runtime), new DeleteAppResponse({}));
  }

  async deleteApp(request: DeleteAppRequest): Promise<DeleteAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppWithOptions(request, runtime);
  }

  async deleteBackendWithOptions(request: DeleteBackendRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBackendResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendId)) {
      query["BackendId"] = request.backendId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBackend",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBackendResponse>(await this.callApi(params, req, runtime), new DeleteBackendResponse({}));
  }

  async deleteBackend(request: DeleteBackendRequest): Promise<DeleteBackendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBackendWithOptions(request, runtime);
  }

  async deleteBackendModelWithOptions(request: DeleteBackendModelRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBackendModelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendId)) {
      query["BackendId"] = request.backendId;
    }

    if (!Util.isUnset(request.backendModelId)) {
      query["BackendModelId"] = request.backendModelId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBackendModel",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBackendModelResponse>(await this.callApi(params, req, runtime), new DeleteBackendModelResponse({}));
  }

  async deleteBackendModel(request: DeleteBackendModelRequest): Promise<DeleteBackendModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBackendModelWithOptions(request, runtime);
  }

  async deleteDatasetWithOptions(request: DeleteDatasetRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDatasetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataset",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDatasetResponse>(await this.callApi(params, req, runtime), new DeleteDatasetResponse({}));
  }

  async deleteDataset(request: DeleteDatasetRequest): Promise<DeleteDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDatasetWithOptions(request, runtime);
  }

  async deleteDatasetItemWithOptions(request: DeleteDatasetItemRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDatasetItemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    if (!Util.isUnset(request.datasetItemId)) {
      query["DatasetItemId"] = request.datasetItemId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDatasetItem",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDatasetItemResponse>(await this.callApi(params, req, runtime), new DeleteDatasetItemResponse({}));
  }

  async deleteDatasetItem(request: DeleteDatasetItemRequest): Promise<DeleteDatasetItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDatasetItemWithOptions(request, runtime);
  }

  /**
    * The custom domain name.
    *
    * @param request DeleteDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteDomainResponse
   */
  async deleteDomainWithOptions(request: DeleteDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDomain",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDomainResponse>(await this.callApi(params, req, runtime), new DeleteDomainResponse({}));
  }

  /**
    * The custom domain name.
    *
    * @param request DeleteDomainRequest
    * @return DeleteDomainResponse
   */
  async deleteDomain(request: DeleteDomainRequest): Promise<DeleteDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  async deleteDomainCertificateWithOptions(request: DeleteDomainCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDomainCertificate",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDomainCertificateResponse>(await this.callApi(params, req, runtime), new DeleteDomainCertificateResponse({}));
  }

  async deleteDomainCertificate(request: DeleteDomainCertificateRequest): Promise<DeleteDomainCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainCertificateWithOptions(request, runtime);
  }

  async deleteInstanceWithOptions(request: DeleteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstance",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceResponse>(await this.callApi(params, req, runtime), new DeleteInstanceResponse({}));
  }

  async deleteInstance(request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  /**
    * The ID of the request.
    *
    * @param request DeleteIpControlRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteIpControlResponse
   */
  async deleteIpControlWithOptions(request: DeleteIpControlRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIpControlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ipControlId)) {
      query["IpControlId"] = request.ipControlId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteIpControl",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteIpControlResponse>(await this.callApi(params, req, runtime), new DeleteIpControlResponse({}));
  }

  /**
    * The ID of the request.
    *
    * @param request DeleteIpControlRequest
    * @return DeleteIpControlResponse
   */
  async deleteIpControl(request: DeleteIpControlRequest): Promise<DeleteIpControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIpControlWithOptions(request, runtime);
  }

  async deleteLogConfigWithOptions(request: DeleteLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLogConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.logType)) {
      query["LogType"] = request.logType;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLogConfig",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLogConfigResponse>(await this.callApi(params, req, runtime), new DeleteLogConfigResponse({}));
  }

  async deleteLogConfig(request: DeleteLogConfigRequest): Promise<DeleteLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLogConfigWithOptions(request, runtime);
  }

  async deleteModelWithOptions(request: DeleteModelRequest, runtime: $Util.RuntimeOptions): Promise<DeleteModelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.modelName)) {
      query["ModelName"] = request.modelName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteModel",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteModelResponse>(await this.callApi(params, req, runtime), new DeleteModelResponse({}));
  }

  async deleteModel(request: DeleteModelRequest): Promise<DeleteModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteModelWithOptions(request, runtime);
  }

  async deleteMonitorGroupWithOptions(request: DeleteMonitorGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMonitorGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.rawMonitorGroupId)) {
      query["RawMonitorGroupId"] = request.rawMonitorGroupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMonitorGroup",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMonitorGroupResponse>(await this.callApi(params, req, runtime), new DeleteMonitorGroupResponse({}));
  }

  async deleteMonitorGroup(request: DeleteMonitorGroupRequest): Promise<DeleteMonitorGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMonitorGroupWithOptions(request, runtime);
  }

  async deletePluginWithOptions(request: DeletePluginRequest, runtime: $Util.RuntimeOptions): Promise<DeletePluginResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePlugin",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePluginResponse>(await this.callApi(params, req, runtime), new DeletePluginResponse({}));
  }

  async deletePlugin(request: DeletePluginRequest): Promise<DeletePluginResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePluginWithOptions(request, runtime);
  }

  /**
    * The ID of the request.
    *
    * @param request DeleteSignatureRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteSignatureResponse
   */
  async deleteSignatureWithOptions(request: DeleteSignatureRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSignatureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.signatureId)) {
      query["SignatureId"] = request.signatureId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSignature",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSignatureResponse>(await this.callApi(params, req, runtime), new DeleteSignatureResponse({}));
  }

  /**
    * The ID of the request.
    *
    * @param request DeleteSignatureRequest
    * @return DeleteSignatureResponse
   */
  async deleteSignature(request: DeleteSignatureRequest): Promise<DeleteSignatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSignatureWithOptions(request, runtime);
  }

  async deleteTrafficControlWithOptions(request: DeleteTrafficControlRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTrafficControlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.trafficControlId)) {
      query["TrafficControlId"] = request.trafficControlId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTrafficControl",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTrafficControlResponse>(await this.callApi(params, req, runtime), new DeleteTrafficControlResponse({}));
  }

  async deleteTrafficControl(request: DeleteTrafficControlRequest): Promise<DeleteTrafficControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTrafficControlWithOptions(request, runtime);
  }

  /**
    * The type of the special throttling policy. Valid values:
    * *   **APP**
    * *   **USER**
    *
    * @param request DeleteTrafficSpecialControlRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteTrafficSpecialControlResponse
   */
  async deleteTrafficSpecialControlWithOptions(request: DeleteTrafficSpecialControlRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTrafficSpecialControlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.specialKey)) {
      query["SpecialKey"] = request.specialKey;
    }

    if (!Util.isUnset(request.specialType)) {
      query["SpecialType"] = request.specialType;
    }

    if (!Util.isUnset(request.trafficControlId)) {
      query["TrafficControlId"] = request.trafficControlId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTrafficSpecialControl",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTrafficSpecialControlResponse>(await this.callApi(params, req, runtime), new DeleteTrafficSpecialControlResponse({}));
  }

  /**
    * The type of the special throttling policy. Valid values:
    * *   **APP**
    * *   **USER**
    *
    * @param request DeleteTrafficSpecialControlRequest
    * @return DeleteTrafficSpecialControlResponse
   */
  async deleteTrafficSpecialControl(request: DeleteTrafficSpecialControlRequest): Promise<DeleteTrafficSpecialControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTrafficSpecialControlWithOptions(request, runtime);
  }

  /**
    * The ID of the API.
    *
    * @param request DeployApiRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeployApiResponse
   */
  async deployApiWithOptions(request: DeployApiRequest, runtime: $Util.RuntimeOptions): Promise<DeployApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeployApi",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeployApiResponse>(await this.callApi(params, req, runtime), new DeployApiResponse({}));
  }

  /**
    * The ID of the API.
    *
    * @param request DeployApiRequest
    * @return DeployApiResponse
   */
  async deployApi(request: DeployApiRequest): Promise<DeployApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployApiWithOptions(request, runtime);
  }

  async describeAbolishApiTaskWithOptions(request: DescribeAbolishApiTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAbolishApiTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operationUid)) {
      query["OperationUid"] = request.operationUid;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAbolishApiTask",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAbolishApiTaskResponse>(await this.callApi(params, req, runtime), new DescribeAbolishApiTaskResponse({}));
  }

  async describeAbolishApiTask(request: DescribeAbolishApiTaskRequest): Promise<DescribeAbolishApiTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAbolishApiTaskWithOptions(request, runtime);
  }

  async describeAccessControlListAttributeWithOptions(request: DescribeAccessControlListAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccessControlListAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccessControlListAttribute",
      version: "2016-07-14",
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

  async describeAccessControlListAttribute(request: DescribeAccessControlListAttributeRequest): Promise<DescribeAccessControlListAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccessControlListAttributeWithOptions(request, runtime);
  }

  async describeAccessControlListsWithOptions(request: DescribeAccessControlListsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccessControlListsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclName)) {
      query["AclName"] = request.aclName;
    }

    if (!Util.isUnset(request.addressIPVersion)) {
      query["AddressIPVersion"] = request.addressIPVersion;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccessControlLists",
      version: "2016-07-14",
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

  async describeAccessControlLists(request: DescribeAccessControlListsRequest): Promise<DescribeAccessControlListsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccessControlListsWithOptions(request, runtime);
  }

  /**
    * The ID of the public key.
    *
    * @param request DescribeApiRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeApiResponse
   */
  async describeApiWithOptions(request: DescribeApiRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApi",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApiResponse>(await this.callApi(params, req, runtime), new DescribeApiResponse({}));
  }

  /**
    * The ID of the public key.
    *
    * @param request DescribeApiRequest
    * @return DescribeApiResponse
   */
  async describeApi(request: DescribeApiRequest): Promise<DescribeApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiWithOptions(request, runtime);
  }

  async describeApiDocWithOptions(request: DescribeApiDocRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiDocResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiDoc",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApiDocResponse>(await this.callApi(params, req, runtime), new DescribeApiDocResponse({}));
  }

  async describeApiDoc(request: DescribeApiDocRequest): Promise<DescribeApiDocResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiDocWithOptions(request, runtime);
  }

  /**
    * *   This operation is intended for API providers.
    *
    * @param request DescribeApiGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeApiGroupResponse
   */
  async describeApiGroupWithOptions(request: DescribeApiGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiGroup",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApiGroupResponse>(await this.callApi(params, req, runtime), new DescribeApiGroupResponse({}));
  }

  /**
    * *   This operation is intended for API providers.
    *
    * @param request DescribeApiGroupRequest
    * @return DescribeApiGroupResponse
   */
  async describeApiGroup(request: DescribeApiGroupRequest): Promise<DescribeApiGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiGroupWithOptions(request, runtime);
  }

  async describeApiGroupVpcWhitelistWithOptions(request: DescribeApiGroupVpcWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiGroupVpcWhitelistResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiGroupVpcWhitelist",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApiGroupVpcWhitelistResponse>(await this.callApi(params, req, runtime), new DescribeApiGroupVpcWhitelistResponse({}));
  }

  async describeApiGroupVpcWhitelist(request: DescribeApiGroupVpcWhitelistRequest): Promise<DescribeApiGroupVpcWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiGroupVpcWhitelistWithOptions(request, runtime);
  }

  async describeApiGroupsWithOptions(request: DescribeApiGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.enableTagAuth)) {
      query["EnableTagAuth"] = request.enableTagAuth;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiGroups",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApiGroupsResponse>(await this.callApi(params, req, runtime), new DescribeApiGroupsResponse({}));
  }

  async describeApiGroups(request: DescribeApiGroupsRequest): Promise<DescribeApiGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiGroupsWithOptions(request, runtime);
  }

  /**
    * The name of the runtime environment. Valid values:
    * *   **RELEASE**
    * *   **TEST: the test environment**
    *
    * @param request DescribeApiHistoriesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeApiHistoriesResponse
   */
  async describeApiHistoriesWithOptions(request: DescribeApiHistoriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiHistoriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiHistories",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApiHistoriesResponse>(await this.callApi(params, req, runtime), new DescribeApiHistoriesResponse({}));
  }

  /**
    * The name of the runtime environment. Valid values:
    * *   **RELEASE**
    * *   **TEST: the test environment**
    *
    * @param request DescribeApiHistoriesRequest
    * @return DescribeApiHistoriesResponse
   */
  async describeApiHistories(request: DescribeApiHistoriesRequest): Promise<DescribeApiHistoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiHistoriesWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query the definition of a specified published version of an API.
    * *   This operation is intended for API providers.
    * *   Each time an API is published, API Gateway records the publishing details, such as the time and the API definition. You can use the version number obtained from other API operations to query the details of an API definition that is published on a specific occasion.
    *
    * @param request DescribeApiHistoryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeApiHistoryResponse
   */
  async describeApiHistoryWithOptions(request: DescribeApiHistoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiHistoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.historyVersion)) {
      query["HistoryVersion"] = request.historyVersion;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiHistory",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApiHistoryResponse>(await this.callApi(params, req, runtime), new DescribeApiHistoryResponse({}));
  }

  /**
    * You can call this operation to query the definition of a specified published version of an API.
    * *   This operation is intended for API providers.
    * *   Each time an API is published, API Gateway records the publishing details, such as the time and the API definition. You can use the version number obtained from other API operations to query the details of an API definition that is published on a specific occasion.
    *
    * @param request DescribeApiHistoryRequest
    * @return DescribeApiHistoryResponse
   */
  async describeApiHistory(request: DescribeApiHistoryRequest): Promise<DescribeApiHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiHistoryWithOptions(request, runtime);
  }

  /**
    * The ID of the API group.
    *
    * @param request DescribeApiIpControlsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeApiIpControlsResponse
   */
  async describeApiIpControlsWithOptions(request: DescribeApiIpControlsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiIpControlsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiIds)) {
      query["ApiIds"] = request.apiIds;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiIpControls",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApiIpControlsResponse>(await this.callApi(params, req, runtime), new DescribeApiIpControlsResponse({}));
  }

  /**
    * The ID of the API group.
    *
    * @param request DescribeApiIpControlsRequest
    * @return DescribeApiIpControlsResponse
   */
  async describeApiIpControls(request: DescribeApiIpControlsRequest): Promise<DescribeApiIpControlsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiIpControlsWithOptions(request, runtime);
  }

  async describeApiLatencyDataWithOptions(request: DescribeApiLatencyDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiLatencyDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiLatencyData",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApiLatencyDataResponse>(await this.callApi(params, req, runtime), new DescribeApiLatencyDataResponse({}));
  }

  async describeApiLatencyData(request: DescribeApiLatencyDataRequest): Promise<DescribeApiLatencyDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiLatencyDataWithOptions(request, runtime);
  }

  async describeApiMarketAttributesWithOptions(request: DescribeApiMarketAttributesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiMarketAttributesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiMarketAttributes",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApiMarketAttributesResponse>(await this.callApi(params, req, runtime), new DescribeApiMarketAttributesResponse({}));
  }

  async describeApiMarketAttributes(request: DescribeApiMarketAttributesRequest): Promise<DescribeApiMarketAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiMarketAttributesWithOptions(request, runtime);
  }

  async describeApiQpsDataWithOptions(request: DescribeApiQpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiQpsDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiQpsData",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApiQpsDataResponse>(await this.callApi(params, req, runtime), new DescribeApiQpsDataResponse({}));
  }

  async describeApiQpsData(request: DescribeApiQpsDataRequest): Promise<DescribeApiQpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiQpsDataWithOptions(request, runtime);
  }

  /**
    * The runtime environment. Valid values:
    * *   **RELEASE**
    * *   **TEST**
    *
    * @param request DescribeApiSignaturesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeApiSignaturesResponse
   */
  async describeApiSignaturesWithOptions(request: DescribeApiSignaturesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiSignaturesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiIds)) {
      query["ApiIds"] = request.apiIds;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiSignatures",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApiSignaturesResponse>(await this.callApi(params, req, runtime), new DescribeApiSignaturesResponse({}));
  }

  /**
    * The runtime environment. Valid values:
    * *   **RELEASE**
    * *   **TEST**
    *
    * @param request DescribeApiSignaturesRequest
    * @return DescribeApiSignaturesResponse
   */
  async describeApiSignatures(request: DescribeApiSignaturesRequest): Promise<DescribeApiSignaturesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiSignaturesWithOptions(request, runtime);
  }

  /**
    * The runtime environment of the API. Valid values:
    * *   **RELEASE**
    * *   **TEST**: the test environment
    *
    * @param request DescribeApiTrafficControlsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeApiTrafficControlsResponse
   */
  async describeApiTrafficControlsWithOptions(request: DescribeApiTrafficControlsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiTrafficControlsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiIds)) {
      query["ApiIds"] = request.apiIds;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiTrafficControls",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApiTrafficControlsResponse>(await this.callApi(params, req, runtime), new DescribeApiTrafficControlsResponse({}));
  }

  /**
    * The runtime environment of the API. Valid values:
    * *   **RELEASE**
    * *   **TEST**: the test environment
    *
    * @param request DescribeApiTrafficControlsRequest
    * @return DescribeApiTrafficControlsResponse
   */
  async describeApiTrafficControls(request: DescribeApiTrafficControlsRequest): Promise<DescribeApiTrafficControlsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiTrafficControlsWithOptions(request, runtime);
  }

  async describeApiTrafficDataWithOptions(request: DescribeApiTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiTrafficDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiTrafficData",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApiTrafficDataResponse>(await this.callApi(params, req, runtime), new DescribeApiTrafficDataResponse({}));
  }

  async describeApiTrafficData(request: DescribeApiTrafficDataRequest): Promise<DescribeApiTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiTrafficDataWithOptions(request, runtime);
  }

  /**
    * *   This operation is intended for API callers.
    * *   This operation returns a list of all APIs that are being defined. The basic information about these APIs is also returned in the list.
    * *   This operation returns all APIs that are being edited, regardless of their environments. The returned definitions may be different from the definitions in the environments.
    *
    * @param request DescribeApisRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeApisResponse
   */
  async describeApisWithOptions(request: DescribeApisRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.apiMethod)) {
      query["ApiMethod"] = request.apiMethod;
    }

    if (!Util.isUnset(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!Util.isUnset(request.apiPath)) {
      query["ApiPath"] = request.apiPath;
    }

    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.enableTagAuth)) {
      query["EnableTagAuth"] = request.enableTagAuth;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.unDeployed)) {
      query["UnDeployed"] = request.unDeployed;
    }

    if (!Util.isUnset(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApisResponse>(await this.callApi(params, req, runtime), new DescribeApisResponse({}));
  }

  /**
    * *   This operation is intended for API callers.
    * *   This operation returns a list of all APIs that are being defined. The basic information about these APIs is also returned in the list.
    * *   This operation returns all APIs that are being edited, regardless of their environments. The returned definitions may be different from the definitions in the environments.
    *
    * @param request DescribeApisRequest
    * @return DescribeApisResponse
   */
  async describeApis(request: DescribeApisRequest): Promise<DescribeApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisWithOptions(request, runtime);
  }

  async describeApisByAppWithOptions(request: DescribeApisByAppRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisByAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!Util.isUnset(request.apiUid)) {
      query["ApiUid"] = request.apiUid;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.method)) {
      query["Method"] = request.method;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApisByApp",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApisByAppResponse>(await this.callApi(params, req, runtime), new DescribeApisByAppResponse({}));
  }

  async describeApisByApp(request: DescribeApisByAppRequest): Promise<DescribeApisByAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisByAppWithOptions(request, runtime);
  }

  async describeApisByBackendWithOptions(request: DescribeApisByBackendRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisByBackendResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendId)) {
      query["BackendId"] = request.backendId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApisByBackend",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApisByBackendResponse>(await this.callApi(params, req, runtime), new DescribeApisByBackendResponse({}));
  }

  async describeApisByBackend(request: DescribeApisByBackendRequest): Promise<DescribeApisByBackendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisByBackendWithOptions(request, runtime);
  }

  /**
    * The number of entries to return on each page. Maximum value: 100. Default value: 10.
    *
    * @param request DescribeApisByIpControlRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeApisByIpControlResponse
   */
  async describeApisByIpControlWithOptions(request: DescribeApisByIpControlRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisByIpControlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ipControlId)) {
      query["IpControlId"] = request.ipControlId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApisByIpControl",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApisByIpControlResponse>(await this.callApi(params, req, runtime), new DescribeApisByIpControlResponse({}));
  }

  /**
    * The number of entries to return on each page. Maximum value: 100. Default value: 10.
    *
    * @param request DescribeApisByIpControlRequest
    * @return DescribeApisByIpControlResponse
   */
  async describeApisByIpControl(request: DescribeApisByIpControlRequest): Promise<DescribeApisByIpControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisByIpControlWithOptions(request, runtime);
  }

  /**
    * The ID of the signature key.
    *
    * @param request DescribeApisBySignatureRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeApisBySignatureResponse
   */
  async describeApisBySignatureWithOptions(request: DescribeApisBySignatureRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisBySignatureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.signatureId)) {
      query["SignatureId"] = request.signatureId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApisBySignature",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApisBySignatureResponse>(await this.callApi(params, req, runtime), new DescribeApisBySignatureResponse({}));
  }

  /**
    * The ID of the signature key.
    *
    * @param request DescribeApisBySignatureRequest
    * @return DescribeApisBySignatureResponse
   */
  async describeApisBySignature(request: DescribeApisBySignatureRequest): Promise<DescribeApisBySignatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisBySignatureWithOptions(request, runtime);
  }

  /**
    * The number of entries to return on each page. Maximum value: 100. Default value: 10.
    *
    * @param request DescribeApisByTrafficControlRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeApisByTrafficControlResponse
   */
  async describeApisByTrafficControlWithOptions(request: DescribeApisByTrafficControlRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisByTrafficControlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.trafficControlId)) {
      query["TrafficControlId"] = request.trafficControlId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApisByTrafficControl",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApisByTrafficControlResponse>(await this.callApi(params, req, runtime), new DescribeApisByTrafficControlResponse({}));
  }

  /**
    * The number of entries to return on each page. Maximum value: 100. Default value: 10.
    *
    * @param request DescribeApisByTrafficControlRequest
    * @return DescribeApisByTrafficControlResponse
   */
  async describeApisByTrafficControl(request: DescribeApisByTrafficControlRequest): Promise<DescribeApisByTrafficControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisByTrafficControlWithOptions(request, runtime);
  }

  async describeAppWithOptions(request: DescribeAppRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApp",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppResponse>(await this.callApi(params, req, runtime), new DescribeAppResponse({}));
  }

  async describeApp(request: DescribeAppRequest): Promise<DescribeAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppWithOptions(request, runtime);
  }

  async describeAppAttributesWithOptions(request: DescribeAppAttributesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppAttributesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.enableTagAuth)) {
      query["EnableTagAuth"] = request.enableTagAuth;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppAttributes",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppAttributesResponse>(await this.callApi(params, req, runtime), new DescribeAppAttributesResponse({}));
  }

  async describeAppAttributes(request: DescribeAppAttributesRequest): Promise<DescribeAppAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppAttributesWithOptions(request, runtime);
  }

  async describeAppSecurityWithOptions(request: DescribeAppSecurityRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppSecurityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppSecurity",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppSecurityResponse>(await this.callApi(params, req, runtime), new DescribeAppSecurityResponse({}));
  }

  async describeAppSecurity(request: DescribeAppSecurityRequest): Promise<DescribeAppSecurityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppSecurityWithOptions(request, runtime);
  }

  /**
    * The ID of the app.
    *
    * @param request DescribeAppsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeAppsResponse
   */
  async describeAppsWithOptions(request: DescribeAppsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appOwner)) {
      query["AppOwner"] = request.appOwner;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApps",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppsResponse>(await this.callApi(params, req, runtime), new DescribeAppsResponse({}));
  }

  /**
    * The ID of the app.
    *
    * @param request DescribeAppsRequest
    * @return DescribeAppsResponse
   */
  async describeApps(request: DescribeAppsRequest): Promise<DescribeAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppsWithOptions(request, runtime);
  }

  /**
    * The number of the page to return. Pages start from page 1. Default value: 1.
    *
    * @param request DescribeAuthorizedApisRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeAuthorizedApisResponse
   */
  async describeAuthorizedApisWithOptions(request: DescribeAuthorizedApisRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAuthorizedApisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAuthorizedApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAuthorizedApisResponse>(await this.callApi(params, req, runtime), new DescribeAuthorizedApisResponse({}));
  }

  /**
    * The number of the page to return. Pages start from page 1. Default value: 1.
    *
    * @param request DescribeAuthorizedApisRequest
    * @return DescribeAuthorizedApisResponse
   */
  async describeAuthorizedApis(request: DescribeAuthorizedApisRequest): Promise<DescribeAuthorizedApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAuthorizedApisWithOptions(request, runtime);
  }

  async describeAuthorizedAppsWithOptions(request: DescribeAuthorizedAppsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAuthorizedAppsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.appOwnerId)) {
      query["AppOwnerId"] = request.appOwnerId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAuthorizedApps",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAuthorizedAppsResponse>(await this.callApi(params, req, runtime), new DescribeAuthorizedAppsResponse({}));
  }

  async describeAuthorizedApps(request: DescribeAuthorizedAppsRequest): Promise<DescribeAuthorizedAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAuthorizedAppsWithOptions(request, runtime);
  }

  async describeBackendInfoWithOptions(request: DescribeBackendInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackendInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendId)) {
      query["BackendId"] = request.backendId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackendInfo",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackendInfoResponse>(await this.callApi(params, req, runtime), new DescribeBackendInfoResponse({}));
  }

  async describeBackendInfo(request: DescribeBackendInfoRequest): Promise<DescribeBackendInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackendInfoWithOptions(request, runtime);
  }

  async describeBackendListWithOptions(request: DescribeBackendListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackendListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendName)) {
      query["BackendName"] = request.backendName;
    }

    if (!Util.isUnset(request.backendType)) {
      query["BackendType"] = request.backendType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackendList",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackendListResponse>(await this.callApi(params, req, runtime), new DescribeBackendListResponse({}));
  }

  async describeBackendList(request: DescribeBackendListRequest): Promise<DescribeBackendListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackendListWithOptions(request, runtime);
  }

  async describeDatasetInfoWithOptions(request: DescribeDatasetInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDatasetInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDatasetInfo",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDatasetInfoResponse>(await this.callApi(params, req, runtime), new DescribeDatasetInfoResponse({}));
  }

  async describeDatasetInfo(request: DescribeDatasetInfoRequest): Promise<DescribeDatasetInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDatasetInfoWithOptions(request, runtime);
  }

  async describeDatasetItemInfoWithOptions(request: DescribeDatasetItemInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDatasetItemInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    if (!Util.isUnset(request.datasetItemId)) {
      query["DatasetItemId"] = request.datasetItemId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDatasetItemInfo",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDatasetItemInfoResponse>(await this.callApi(params, req, runtime), new DescribeDatasetItemInfoResponse({}));
  }

  async describeDatasetItemInfo(request: DescribeDatasetItemInfoRequest): Promise<DescribeDatasetItemInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDatasetItemInfoWithOptions(request, runtime);
  }

  async describeDatasetItemListWithOptions(request: DescribeDatasetItemListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDatasetItemListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    if (!Util.isUnset(request.datasetItemIds)) {
      query["DatasetItemIds"] = request.datasetItemIds;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDatasetItemList",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDatasetItemListResponse>(await this.callApi(params, req, runtime), new DescribeDatasetItemListResponse({}));
  }

  async describeDatasetItemList(request: DescribeDatasetItemListRequest): Promise<DescribeDatasetItemListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDatasetItemListWithOptions(request, runtime);
  }

  async describeDatasetListWithOptions(request: DescribeDatasetListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDatasetListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetIds)) {
      query["DatasetIds"] = request.datasetIds;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDatasetList",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDatasetListResponse>(await this.callApi(params, req, runtime), new DescribeDatasetListResponse({}));
  }

  async describeDatasetList(request: DescribeDatasetListRequest): Promise<DescribeDatasetListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDatasetListWithOptions(request, runtime);
  }

  async describeDeployApiTaskWithOptions(request: DescribeDeployApiTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeployApiTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operationUid)) {
      query["OperationUid"] = request.operationUid;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDeployApiTask",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDeployApiTaskResponse>(await this.callApi(params, req, runtime), new DescribeDeployApiTaskResponse({}));
  }

  async describeDeployApiTask(request: DescribeDeployApiTaskRequest): Promise<DescribeDeployApiTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeployApiTaskWithOptions(request, runtime);
  }

  async describeDeployedApiWithOptions(request: DescribeDeployedApiRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeployedApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDeployedApi",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDeployedApiResponse>(await this.callApi(params, req, runtime), new DescribeDeployedApiResponse({}));
  }

  async describeDeployedApi(request: DescribeDeployedApiRequest): Promise<DescribeDeployedApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeployedApiWithOptions(request, runtime);
  }

  async describeDeployedApisWithOptions(request: DescribeDeployedApisRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeployedApisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.apiMethod)) {
      query["ApiMethod"] = request.apiMethod;
    }

    if (!Util.isUnset(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!Util.isUnset(request.apiPath)) {
      query["ApiPath"] = request.apiPath;
    }

    if (!Util.isUnset(request.enableTagAuth)) {
      query["EnableTagAuth"] = request.enableTagAuth;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDeployedApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDeployedApisResponse>(await this.callApi(params, req, runtime), new DescribeDeployedApisResponse({}));
  }

  async describeDeployedApis(request: DescribeDeployedApisRequest): Promise<DescribeDeployedApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeployedApisWithOptions(request, runtime);
  }

  /**
    * The ID of the API group to which the domain name is bound. This ID is generated by the system and globally unique.
    *
    * @param request DescribeDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainResponse
   */
  async describeDomainWithOptions(request: DescribeDomainRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomain",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainResponse>(await this.callApi(params, req, runtime), new DescribeDomainResponse({}));
  }

  /**
    * The ID of the API group to which the domain name is bound. This ID is generated by the system and globally unique.
    *
    * @param request DescribeDomainRequest
    * @return DescribeDomainResponse
   */
  async describeDomain(request: DescribeDomainRequest): Promise<DescribeDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainWithOptions(request, runtime);
  }

  async describeHistoryApisWithOptions(request: DescribeHistoryApisRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHistoryApisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHistoryApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHistoryApisResponse>(await this.callApi(params, req, runtime), new DescribeHistoryApisResponse({}));
  }

  async describeHistoryApis(request: DescribeHistoryApisRequest): Promise<DescribeHistoryApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHistoryApisWithOptions(request, runtime);
  }

  async describeImportOASTaskWithOptions(request: DescribeImportOASTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImportOASTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operationId)) {
      query["OperationId"] = request.operationId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeImportOASTask",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImportOASTaskResponse>(await this.callApi(params, req, runtime), new DescribeImportOASTaskResponse({}));
  }

  async describeImportOASTask(request: DescribeImportOASTaskRequest): Promise<DescribeImportOASTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImportOASTaskWithOptions(request, runtime);
  }

  async describeInstanceDropConnectionsWithOptions(request: DescribeInstanceDropConnectionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceDropConnectionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.sbcName)) {
      query["SbcName"] = request.sbcName;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceDropConnections",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceDropConnectionsResponse>(await this.callApi(params, req, runtime), new DescribeInstanceDropConnectionsResponse({}));
  }

  async describeInstanceDropConnections(request: DescribeInstanceDropConnectionsRequest): Promise<DescribeInstanceDropConnectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceDropConnectionsWithOptions(request, runtime);
  }

  async describeInstanceDropPacketWithOptions(request: DescribeInstanceDropPacketRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceDropPacketResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.sbcName)) {
      query["SbcName"] = request.sbcName;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceDropPacket",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceDropPacketResponse>(await this.callApi(params, req, runtime), new DescribeInstanceDropPacketResponse({}));
  }

  async describeInstanceDropPacket(request: DescribeInstanceDropPacketRequest): Promise<DescribeInstanceDropPacketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceDropPacketWithOptions(request, runtime);
  }

  async describeInstanceHttpCodeWithOptions(request: DescribeInstanceHttpCodeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceHttpCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceHttpCode",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceHttpCodeResponse>(await this.callApi(params, req, runtime), new DescribeInstanceHttpCodeResponse({}));
  }

  async describeInstanceHttpCode(request: DescribeInstanceHttpCodeRequest): Promise<DescribeInstanceHttpCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceHttpCodeWithOptions(request, runtime);
  }

  async describeInstanceLatencyWithOptions(request: DescribeInstanceLatencyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceLatencyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceLatency",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceLatencyResponse>(await this.callApi(params, req, runtime), new DescribeInstanceLatencyResponse({}));
  }

  async describeInstanceLatency(request: DescribeInstanceLatencyRequest): Promise<DescribeInstanceLatencyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceLatencyWithOptions(request, runtime);
  }

  async describeInstanceNewConnectionsWithOptions(request: DescribeInstanceNewConnectionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceNewConnectionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.sbcName)) {
      query["SbcName"] = request.sbcName;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceNewConnections",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceNewConnectionsResponse>(await this.callApi(params, req, runtime), new DescribeInstanceNewConnectionsResponse({}));
  }

  async describeInstanceNewConnections(request: DescribeInstanceNewConnectionsRequest): Promise<DescribeInstanceNewConnectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceNewConnectionsWithOptions(request, runtime);
  }

  async describeInstancePacketsWithOptions(request: DescribeInstancePacketsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancePacketsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.sbcName)) {
      query["SbcName"] = request.sbcName;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstancePackets",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstancePacketsResponse>(await this.callApi(params, req, runtime), new DescribeInstancePacketsResponse({}));
  }

  async describeInstancePackets(request: DescribeInstancePacketsRequest): Promise<DescribeInstancePacketsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancePacketsWithOptions(request, runtime);
  }

  async describeInstanceQpsWithOptions(request: DescribeInstanceQpsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceQpsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceQps",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceQpsResponse>(await this.callApi(params, req, runtime), new DescribeInstanceQpsResponse({}));
  }

  async describeInstanceQps(request: DescribeInstanceQpsRequest): Promise<DescribeInstanceQpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceQpsWithOptions(request, runtime);
  }

  async describeInstanceSlbConnectWithOptions(request: DescribeInstanceSlbConnectRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceSlbConnectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.sbcName)) {
      query["SbcName"] = request.sbcName;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceSlbConnect",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceSlbConnectResponse>(await this.callApi(params, req, runtime), new DescribeInstanceSlbConnectResponse({}));
  }

  async describeInstanceSlbConnect(request: DescribeInstanceSlbConnectRequest): Promise<DescribeInstanceSlbConnectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceSlbConnectWithOptions(request, runtime);
  }

  async describeInstanceTrafficWithOptions(request: DescribeInstanceTrafficRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceTrafficResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceTraffic",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceTrafficResponse>(await this.callApi(params, req, runtime), new DescribeInstanceTrafficResponse({}));
  }

  async describeInstanceTraffic(request: DescribeInstanceTrafficRequest): Promise<DescribeInstanceTrafficResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceTrafficWithOptions(request, runtime);
  }

  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.enableTagAuthorization)) {
      query["EnableTagAuthorization"] = request.enableTagAuthorization;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstances",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstancesResponse>(await this.callApi(params, req, runtime), new DescribeInstancesResponse({}));
  }

  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  async describeIpControlPolicyItemsWithOptions(request: DescribeIpControlPolicyItemsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIpControlPolicyItemsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ipControlId)) {
      query["IpControlId"] = request.ipControlId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.policyItemId)) {
      query["PolicyItemId"] = request.policyItemId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIpControlPolicyItems",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeIpControlPolicyItemsResponse>(await this.callApi(params, req, runtime), new DescribeIpControlPolicyItemsResponse({}));
  }

  async describeIpControlPolicyItems(request: DescribeIpControlPolicyItemsRequest): Promise<DescribeIpControlPolicyItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIpControlPolicyItemsWithOptions(request, runtime);
  }

  /**
    * *   This operation is intended for API providers.
    * *   This operation is used to query the ACLs in a region. Region is a system parameter.
    * *   You can filter the query results by ACL ID, name, or type.
    * *   This operation cannot be used to query specific policies. If you want to query specific policies, call the [DescribeIpControlPolicyItems](~~65532~~) operation.
    *
    * @param request DescribeIpControlsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeIpControlsResponse
   */
  async describeIpControlsWithOptions(request: DescribeIpControlsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIpControlsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ipControlId)) {
      query["IpControlId"] = request.ipControlId;
    }

    if (!Util.isUnset(request.ipControlName)) {
      query["IpControlName"] = request.ipControlName;
    }

    if (!Util.isUnset(request.ipControlType)) {
      query["IpControlType"] = request.ipControlType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIpControls",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeIpControlsResponse>(await this.callApi(params, req, runtime), new DescribeIpControlsResponse({}));
  }

  /**
    * *   This operation is intended for API providers.
    * *   This operation is used to query the ACLs in a region. Region is a system parameter.
    * *   You can filter the query results by ACL ID, name, or type.
    * *   This operation cannot be used to query specific policies. If you want to query specific policies, call the [DescribeIpControlPolicyItems](~~65532~~) operation.
    *
    * @param request DescribeIpControlsRequest
    * @return DescribeIpControlsResponse
   */
  async describeIpControls(request: DescribeIpControlsRequest): Promise<DescribeIpControlsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIpControlsWithOptions(request, runtime);
  }

  async describeLogConfigWithOptions(request: DescribeLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.logType)) {
      query["LogType"] = request.logType;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLogConfig",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLogConfigResponse>(await this.callApi(params, req, runtime), new DescribeLogConfigResponse({}));
  }

  async describeLogConfig(request: DescribeLogConfigRequest): Promise<DescribeLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogConfigWithOptions(request, runtime);
  }

  async describeMarketRemainsQuotaWithOptions(request: DescribeMarketRemainsQuotaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMarketRemainsQuotaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMarketRemainsQuota",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMarketRemainsQuotaResponse>(await this.callApi(params, req, runtime), new DescribeMarketRemainsQuotaResponse({}));
  }

  async describeMarketRemainsQuota(request: DescribeMarketRemainsQuotaRequest): Promise<DescribeMarketRemainsQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMarketRemainsQuotaWithOptions(request, runtime);
  }

  /**
    * The name of the model.
    *
    * @param request DescribeModelsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeModelsResponse
   */
  async describeModelsWithOptions(request: DescribeModelsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeModelsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.modelId)) {
      query["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.modelName)) {
      query["ModelName"] = request.modelName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeModels",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeModelsResponse>(await this.callApi(params, req, runtime), new DescribeModelsResponse({}));
  }

  /**
    * The name of the model.
    *
    * @param request DescribeModelsRequest
    * @return DescribeModelsResponse
   */
  async describeModels(request: DescribeModelsRequest): Promise<DescribeModelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeModelsWithOptions(request, runtime);
  }

  async describePluginApisWithOptions(request: DescribePluginApisRequest, runtime: $Util.RuntimeOptions): Promise<DescribePluginApisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.method)) {
      query["Method"] = request.method;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePluginApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePluginApisResponse>(await this.callApi(params, req, runtime), new DescribePluginApisResponse({}));
  }

  async describePluginApis(request: DescribePluginApisRequest): Promise<DescribePluginApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePluginApisWithOptions(request, runtime);
  }

  async describePluginSchemasWithOptions(request: DescribePluginSchemasRequest, runtime: $Util.RuntimeOptions): Promise<DescribePluginSchemasResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePluginSchemas",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePluginSchemasResponse>(await this.callApi(params, req, runtime), new DescribePluginSchemasResponse({}));
  }

  async describePluginSchemas(request: DescribePluginSchemasRequest): Promise<DescribePluginSchemasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePluginSchemasWithOptions(request, runtime);
  }

  async describePluginTemplatesWithOptions(request: DescribePluginTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribePluginTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.pluginName)) {
      query["PluginName"] = request.pluginName;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePluginTemplates",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePluginTemplatesResponse>(await this.callApi(params, req, runtime), new DescribePluginTemplatesResponse({}));
  }

  async describePluginTemplates(request: DescribePluginTemplatesRequest): Promise<DescribePluginTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePluginTemplatesWithOptions(request, runtime);
  }

  async describePluginsWithOptions(request: DescribePluginsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePluginsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    if (!Util.isUnset(request.pluginName)) {
      query["PluginName"] = request.pluginName;
    }

    if (!Util.isUnset(request.pluginType)) {
      query["PluginType"] = request.pluginType;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePlugins",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePluginsResponse>(await this.callApi(params, req, runtime), new DescribePluginsResponse({}));
  }

  async describePlugins(request: DescribePluginsRequest): Promise<DescribePluginsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePluginsWithOptions(request, runtime);
  }

  /**
    * *   This operation is intended for API callers.
    * *   This operation supports pagination.
    *
    * @param request DescribePluginsByApiRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribePluginsByApiResponse
   */
  async describePluginsByApiWithOptions(request: DescribePluginsByApiRequest, runtime: $Util.RuntimeOptions): Promise<DescribePluginsByApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePluginsByApi",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePluginsByApiResponse>(await this.callApi(params, req, runtime), new DescribePluginsByApiResponse({}));
  }

  /**
    * *   This operation is intended for API callers.
    * *   This operation supports pagination.
    *
    * @param request DescribePluginsByApiRequest
    * @return DescribePluginsByApiResponse
   */
  async describePluginsByApi(request: DescribePluginsByApiRequest): Promise<DescribePluginsByApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePluginsByApiWithOptions(request, runtime);
  }

  async describePurchasedApiGroupWithOptions(request: DescribePurchasedApiGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribePurchasedApiGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePurchasedApiGroup",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePurchasedApiGroupResponse>(await this.callApi(params, req, runtime), new DescribePurchasedApiGroupResponse({}));
  }

  async describePurchasedApiGroup(request: DescribePurchasedApiGroupRequest): Promise<DescribePurchasedApiGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePurchasedApiGroupWithOptions(request, runtime);
  }

  async describePurchasedApiGroupsWithOptions(request: DescribePurchasedApiGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePurchasedApiGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePurchasedApiGroups",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePurchasedApiGroupsResponse>(await this.callApi(params, req, runtime), new DescribePurchasedApiGroupsResponse({}));
  }

  async describePurchasedApiGroups(request: DescribePurchasedApiGroupsRequest): Promise<DescribePurchasedApiGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePurchasedApiGroupsWithOptions(request, runtime);
  }

  async describePurchasedApisWithOptions(request: DescribePurchasedApisRequest, runtime: $Util.RuntimeOptions): Promise<DescribePurchasedApisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!Util.isUnset(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePurchasedApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePurchasedApisResponse>(await this.callApi(params, req, runtime), new DescribePurchasedApisResponse({}));
  }

  async describePurchasedApis(request: DescribePurchasedApisRequest): Promise<DescribePurchasedApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePurchasedApisWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2016-07-14",
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

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
    * The IDs of the keys to query.
    *
    * @param request DescribeSignaturesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeSignaturesResponse
   */
  async describeSignaturesWithOptions(request: DescribeSignaturesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSignaturesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.signatureId)) {
      query["SignatureId"] = request.signatureId;
    }

    if (!Util.isUnset(request.signatureName)) {
      query["SignatureName"] = request.signatureName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSignatures",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSignaturesResponse>(await this.callApi(params, req, runtime), new DescribeSignaturesResponse({}));
  }

  /**
    * The IDs of the keys to query.
    *
    * @param request DescribeSignaturesRequest
    * @return DescribeSignaturesResponse
   */
  async describeSignatures(request: DescribeSignaturesRequest): Promise<DescribeSignaturesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSignaturesWithOptions(request, runtime);
  }

  /**
    * The ID of the group to which the API belongs.
    *
    * @param request DescribeSignaturesByApiRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeSignaturesByApiResponse
   */
  async describeSignaturesByApiWithOptions(request: DescribeSignaturesByApiRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSignaturesByApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSignaturesByApi",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSignaturesByApiResponse>(await this.callApi(params, req, runtime), new DescribeSignaturesByApiResponse({}));
  }

  /**
    * The ID of the group to which the API belongs.
    *
    * @param request DescribeSignaturesByApiRequest
    * @return DescribeSignaturesByApiResponse
   */
  async describeSignaturesByApi(request: DescribeSignaturesByApiRequest): Promise<DescribeSignaturesByApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSignaturesByApiWithOptions(request, runtime);
  }

  /**
    * The returned information about system parameters. It is an array that consists of SystemParam data.
    *
    * @param request DescribeSystemParametersRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeSystemParametersResponse
   */
  async describeSystemParametersWithOptions(request: DescribeSystemParametersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSystemParametersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSystemParameters",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSystemParametersResponse>(await this.callApi(params, req, runtime), new DescribeSystemParametersResponse({}));
  }

  /**
    * The returned information about system parameters. It is an array that consists of SystemParam data.
    *
    * @param request DescribeSystemParametersRequest
    * @return DescribeSystemParametersResponse
   */
  async describeSystemParameters(request: DescribeSystemParametersRequest): Promise<DescribeSystemParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSystemParametersWithOptions(request, runtime);
  }

  /**
    * The specified group ID. This parameter must be specified together with ApiId and StageName.
    *
    * @param request DescribeTrafficControlsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeTrafficControlsResponse
   */
  async describeTrafficControlsWithOptions(request: DescribeTrafficControlsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTrafficControlsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!Util.isUnset(request.trafficControlId)) {
      query["TrafficControlId"] = request.trafficControlId;
    }

    if (!Util.isUnset(request.trafficControlName)) {
      query["TrafficControlName"] = request.trafficControlName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTrafficControls",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTrafficControlsResponse>(await this.callApi(params, req, runtime), new DescribeTrafficControlsResponse({}));
  }

  /**
    * The specified group ID. This parameter must be specified together with ApiId and StageName.
    *
    * @param request DescribeTrafficControlsRequest
    * @return DescribeTrafficControlsResponse
   */
  async describeTrafficControls(request: DescribeTrafficControlsRequest): Promise<DescribeTrafficControlsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTrafficControlsWithOptions(request, runtime);
  }

  /**
    * The ID of the API.
    *
    * @param request DescribeTrafficControlsByApiRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeTrafficControlsByApiResponse
   */
  async describeTrafficControlsByApiWithOptions(request: DescribeTrafficControlsByApiRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTrafficControlsByApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTrafficControlsByApi",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTrafficControlsByApiResponse>(await this.callApi(params, req, runtime), new DescribeTrafficControlsByApiResponse({}));
  }

  /**
    * The ID of the API.
    *
    * @param request DescribeTrafficControlsByApiRequest
    * @return DescribeTrafficControlsByApiResponse
   */
  async describeTrafficControlsByApi(request: DescribeTrafficControlsByApiRequest): Promise<DescribeTrafficControlsByApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTrafficControlsByApiWithOptions(request, runtime);
  }

  async describeUpdateBackendTaskWithOptions(request: DescribeUpdateBackendTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUpdateBackendTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operationUid)) {
      query["OperationUid"] = request.operationUid;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUpdateBackendTask",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUpdateBackendTaskResponse>(await this.callApi(params, req, runtime), new DescribeUpdateBackendTaskResponse({}));
  }

  async describeUpdateBackendTask(request: DescribeUpdateBackendTaskRequest): Promise<DescribeUpdateBackendTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUpdateBackendTaskWithOptions(request, runtime);
  }

  async describeUpdateVpcInfoTaskWithOptions(request: DescribeUpdateVpcInfoTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUpdateVpcInfoTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operationUid)) {
      query["OperationUid"] = request.operationUid;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUpdateVpcInfoTask",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUpdateVpcInfoTaskResponse>(await this.callApi(params, req, runtime), new DescribeUpdateVpcInfoTaskResponse({}));
  }

  async describeUpdateVpcInfoTask(request: DescribeUpdateVpcInfoTaskRequest): Promise<DescribeUpdateVpcInfoTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUpdateVpcInfoTaskWithOptions(request, runtime);
  }

  async describeVpcAccessesWithOptions(request: DescribeVpcAccessesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcAccessesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.vpcAccessId)) {
      query["VpcAccessId"] = request.vpcAccessId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVpcAccesses",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVpcAccessesResponse>(await this.callApi(params, req, runtime), new DescribeVpcAccessesResponse({}));
  }

  async describeVpcAccesses(request: DescribeVpcAccessesRequest): Promise<DescribeVpcAccessesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcAccessesWithOptions(request, runtime);
  }

  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZonesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeZones",
      version: "2016-07-14",
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

  async describeZones(request: DescribeZonesRequest): Promise<DescribeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  async detachPluginWithOptions(request: DetachPluginRequest, runtime: $Util.RuntimeOptions): Promise<DetachPluginResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachPlugin",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachPluginResponse>(await this.callApi(params, req, runtime), new DetachPluginResponse({}));
  }

  async detachPlugin(request: DetachPluginRequest): Promise<DetachPluginResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachPluginWithOptions(request, runtime);
  }

  async disableInstanceAccessControlWithOptions(request: DisableInstanceAccessControlRequest, runtime: $Util.RuntimeOptions): Promise<DisableInstanceAccessControlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.addressIPVersion)) {
      query["AddressIPVersion"] = request.addressIPVersion;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableInstanceAccessControl",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableInstanceAccessControlResponse>(await this.callApi(params, req, runtime), new DisableInstanceAccessControlResponse({}));
  }

  async disableInstanceAccessControl(request: DisableInstanceAccessControlRequest): Promise<DisableInstanceAccessControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableInstanceAccessControlWithOptions(request, runtime);
  }

  async dryRunSwaggerWithOptions(tmpReq: DryRunSwaggerRequest, runtime: $Util.RuntimeOptions): Promise<DryRunSwaggerResponse> {
    Util.validateModel(tmpReq);
    let request = new DryRunSwaggerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.globalCondition)) {
      request.globalConditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.globalCondition, "GlobalCondition", "json");
    }

    let query = { };
    if (!Util.isUnset(request.dataFormat)) {
      query["DataFormat"] = request.dataFormat;
    }

    if (!Util.isUnset(request.globalConditionShrink)) {
      query["GlobalCondition"] = request.globalConditionShrink;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.overwrite)) {
      query["Overwrite"] = request.overwrite;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.data)) {
      body["Data"] = request.data;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DryRunSwagger",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DryRunSwaggerResponse>(await this.callApi(params, req, runtime), new DryRunSwaggerResponse({}));
  }

  async dryRunSwagger(request: DryRunSwaggerRequest): Promise<DryRunSwaggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dryRunSwaggerWithOptions(request, runtime);
  }

  async enableInstanceAccessControlWithOptions(request: EnableInstanceAccessControlRequest, runtime: $Util.RuntimeOptions): Promise<EnableInstanceAccessControlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!Util.isUnset(request.addressIPVersion)) {
      query["AddressIPVersion"] = request.addressIPVersion;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableInstanceAccessControl",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableInstanceAccessControlResponse>(await this.callApi(params, req, runtime), new EnableInstanceAccessControlResponse({}));
  }

  async enableInstanceAccessControl(request: EnableInstanceAccessControlRequest): Promise<EnableInstanceAccessControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableInstanceAccessControlWithOptions(request, runtime);
  }

  async importOASWithOptions(request: ImportOASRequest, runtime: $Util.RuntimeOptions): Promise<ImportOASResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!Util.isUnset(request.backendName)) {
      query["BackendName"] = request.backendName;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.ignoreWarning)) {
      query["IgnoreWarning"] = request.ignoreWarning;
    }

    if (!Util.isUnset(request.OASVersion)) {
      query["OASVersion"] = request.OASVersion;
    }

    if (!Util.isUnset(request.overwrite)) {
      query["Overwrite"] = request.overwrite;
    }

    if (!Util.isUnset(request.requestMode)) {
      query["RequestMode"] = request.requestMode;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.skipDryRun)) {
      query["SkipDryRun"] = request.skipDryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.data)) {
      body["Data"] = request.data;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ImportOAS",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportOASResponse>(await this.callApi(params, req, runtime), new ImportOASResponse({}));
  }

  async importOAS(request: ImportOASRequest): Promise<ImportOASResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importOASWithOptions(request, runtime);
  }

  /**
    * 0009db9c828549768a200320714b8930
    *
    * @param tmpReq ImportSwaggerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ImportSwaggerResponse
   */
  async importSwaggerWithOptions(tmpReq: ImportSwaggerRequest, runtime: $Util.RuntimeOptions): Promise<ImportSwaggerResponse> {
    Util.validateModel(tmpReq);
    let request = new ImportSwaggerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.globalCondition)) {
      request.globalConditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.globalCondition, "GlobalCondition", "json");
    }

    let query = { };
    if (!Util.isUnset(request.dataFormat)) {
      query["DataFormat"] = request.dataFormat;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.globalConditionShrink)) {
      query["GlobalCondition"] = request.globalConditionShrink;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.overwrite)) {
      query["Overwrite"] = request.overwrite;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.data)) {
      body["Data"] = request.data;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ImportSwagger",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportSwaggerResponse>(await this.callApi(params, req, runtime), new ImportSwaggerResponse({}));
  }

  /**
    * 0009db9c828549768a200320714b8930
    *
    * @param request ImportSwaggerRequest
    * @return ImportSwaggerResponse
   */
  async importSwagger(request: ImportSwaggerRequest): Promise<ImportSwaggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importSwaggerWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
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
      version: "2016-07-14",
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

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
    * 58928
    *
    * @param request ModifyApiRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyApiResponse
   */
  async modifyApiWithOptions(request: ModifyApiRequest, runtime: $Util.RuntimeOptions): Promise<ModifyApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allowSignatureMethod)) {
      query["AllowSignatureMethod"] = request.allowSignatureMethod;
    }

    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!Util.isUnset(request.appCodeAuthType)) {
      query["AppCodeAuthType"] = request.appCodeAuthType;
    }

    if (!Util.isUnset(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!Util.isUnset(request.backendEnable)) {
      query["BackendEnable"] = request.backendEnable;
    }

    if (!Util.isUnset(request.backendId)) {
      query["BackendId"] = request.backendId;
    }

    if (!Util.isUnset(request.constantParameters)) {
      query["ConstantParameters"] = request.constantParameters;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.disableInternet)) {
      query["DisableInternet"] = request.disableInternet;
    }

    if (!Util.isUnset(request.errorCodeSamples)) {
      query["ErrorCodeSamples"] = request.errorCodeSamples;
    }

    if (!Util.isUnset(request.failResultSample)) {
      query["FailResultSample"] = request.failResultSample;
    }

    if (!Util.isUnset(request.forceNonceCheck)) {
      query["ForceNonceCheck"] = request.forceNonceCheck;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.openIdConnectConfig)) {
      query["OpenIdConnectConfig"] = request.openIdConnectConfig;
    }

    if (!Util.isUnset(request.requestConfig)) {
      query["RequestConfig"] = request.requestConfig;
    }

    if (!Util.isUnset(request.requestParameters)) {
      query["RequestParameters"] = request.requestParameters;
    }

    if (!Util.isUnset(request.resultBodyModel)) {
      query["ResultBodyModel"] = request.resultBodyModel;
    }

    if (!Util.isUnset(request.resultDescriptions)) {
      query["ResultDescriptions"] = request.resultDescriptions;
    }

    if (!Util.isUnset(request.resultSample)) {
      query["ResultSample"] = request.resultSample;
    }

    if (!Util.isUnset(request.resultType)) {
      query["ResultType"] = request.resultType;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.serviceConfig)) {
      query["ServiceConfig"] = request.serviceConfig;
    }

    if (!Util.isUnset(request.serviceParameters)) {
      query["ServiceParameters"] = request.serviceParameters;
    }

    if (!Util.isUnset(request.serviceParametersMap)) {
      query["ServiceParametersMap"] = request.serviceParametersMap;
    }

    if (!Util.isUnset(request.systemParameters)) {
      query["SystemParameters"] = request.systemParameters;
    }

    if (!Util.isUnset(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    if (!Util.isUnset(request.webSocketApiType)) {
      query["WebSocketApiType"] = request.webSocketApiType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyApi",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyApiResponse>(await this.callApi(params, req, runtime), new ModifyApiResponse({}));
  }

  /**
    * 58928
    *
    * @param request ModifyApiRequest
    * @return ModifyApiResponse
   */
  async modifyApi(request: ModifyApiRequest): Promise<ModifyApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyApiWithOptions(request, runtime);
  }

  async modifyApiConfigurationWithOptions(request: ModifyApiConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<ModifyApiConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allowSignatureMethod)) {
      query["AllowSignatureMethod"] = request.allowSignatureMethod;
    }

    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!Util.isUnset(request.appCodeAuthType)) {
      query["AppCodeAuthType"] = request.appCodeAuthType;
    }

    if (!Util.isUnset(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!Util.isUnset(request.backendName)) {
      query["BackendName"] = request.backendName;
    }

    if (!Util.isUnset(request.bodyFormat)) {
      query["BodyFormat"] = request.bodyFormat;
    }

    if (!Util.isUnset(request.bodyModel)) {
      query["BodyModel"] = request.bodyModel;
    }

    if (!Util.isUnset(request.contentTypeCategory)) {
      query["ContentTypeCategory"] = request.contentTypeCategory;
    }

    if (!Util.isUnset(request.contentTypeValue)) {
      query["ContentTypeValue"] = request.contentTypeValue;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.disableInternet)) {
      query["DisableInternet"] = request.disableInternet;
    }

    if (!Util.isUnset(request.errorCodeSamples)) {
      query["ErrorCodeSamples"] = request.errorCodeSamples;
    }

    if (!Util.isUnset(request.failResultSample)) {
      query["FailResultSample"] = request.failResultSample;
    }

    if (!Util.isUnset(request.forceNonceCheck)) {
      query["ForceNonceCheck"] = request.forceNonceCheck;
    }

    if (!Util.isUnset(request.functionComputeConfig)) {
      query["FunctionComputeConfig"] = request.functionComputeConfig;
    }

    if (!Util.isUnset(request.httpConfig)) {
      query["HttpConfig"] = request.httpConfig;
    }

    if (!Util.isUnset(request.mockConfig)) {
      query["MockConfig"] = request.mockConfig;
    }

    if (!Util.isUnset(request.modelName)) {
      query["ModelName"] = request.modelName;
    }

    if (!Util.isUnset(request.ossConfig)) {
      query["OssConfig"] = request.ossConfig;
    }

    if (!Util.isUnset(request.postBodyDescription)) {
      query["PostBodyDescription"] = request.postBodyDescription;
    }

    if (!Util.isUnset(request.requestHttpMethod)) {
      query["RequestHttpMethod"] = request.requestHttpMethod;
    }

    if (!Util.isUnset(request.requestMode)) {
      query["RequestMode"] = request.requestMode;
    }

    if (!Util.isUnset(request.requestParameters)) {
      query["RequestParameters"] = request.requestParameters;
    }

    if (!Util.isUnset(request.requestPath)) {
      query["RequestPath"] = request.requestPath;
    }

    if (!Util.isUnset(request.requestProtocol)) {
      query["RequestProtocol"] = request.requestProtocol;
    }

    if (!Util.isUnset(request.resultSample)) {
      query["ResultSample"] = request.resultSample;
    }

    if (!Util.isUnset(request.resultType)) {
      query["ResultType"] = request.resultType;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.serviceParameters)) {
      query["ServiceParameters"] = request.serviceParameters;
    }

    if (!Util.isUnset(request.serviceParametersMap)) {
      query["ServiceParametersMap"] = request.serviceParametersMap;
    }

    if (!Util.isUnset(request.serviceProtocol)) {
      query["ServiceProtocol"] = request.serviceProtocol;
    }

    if (!Util.isUnset(request.serviceTimeout)) {
      query["ServiceTimeout"] = request.serviceTimeout;
    }

    if (!Util.isUnset(request.useBackendService)) {
      query["UseBackendService"] = request.useBackendService;
    }

    if (!Util.isUnset(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    if (!Util.isUnset(request.vpcConfig)) {
      query["VpcConfig"] = request.vpcConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyApiConfiguration",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyApiConfigurationResponse>(await this.callApi(params, req, runtime), new ModifyApiConfigurationResponse({}));
  }

  async modifyApiConfiguration(request: ModifyApiConfigurationRequest): Promise<ModifyApiConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyApiConfigurationWithOptions(request, runtime);
  }

  async modifyApiGroupWithOptions(request: ModifyApiGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyApiGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.basePath)) {
      query["BasePath"] = request.basePath;
    }

    if (!Util.isUnset(request.compatibleFlags)) {
      query["CompatibleFlags"] = request.compatibleFlags;
    }

    if (!Util.isUnset(request.customTraceConfig)) {
      query["CustomTraceConfig"] = request.customTraceConfig;
    }

    if (!Util.isUnset(request.customerConfigs)) {
      query["CustomerConfigs"] = request.customerConfigs;
    }

    if (!Util.isUnset(request.defaultDomain)) {
      query["DefaultDomain"] = request.defaultDomain;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.passthroughHeaders)) {
      query["PassthroughHeaders"] = request.passthroughHeaders;
    }

    if (!Util.isUnset(request.rpcPattern)) {
      query["RpcPattern"] = request.rpcPattern;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.userLogConfig)) {
      query["UserLogConfig"] = request.userLogConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyApiGroup",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyApiGroupResponse>(await this.callApi(params, req, runtime), new ModifyApiGroupResponse({}));
  }

  async modifyApiGroup(request: ModifyApiGroupRequest): Promise<ModifyApiGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyApiGroupWithOptions(request, runtime);
  }

  async modifyApiGroupVpcWhitelistWithOptions(request: ModifyApiGroupVpcWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<ModifyApiGroupVpcWhitelistResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.vpcIds)) {
      query["VpcIds"] = request.vpcIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyApiGroupVpcWhitelist",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyApiGroupVpcWhitelistResponse>(await this.callApi(params, req, runtime), new ModifyApiGroupVpcWhitelistResponse({}));
  }

  async modifyApiGroupVpcWhitelist(request: ModifyApiGroupVpcWhitelistRequest): Promise<ModifyApiGroupVpcWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyApiGroupVpcWhitelistWithOptions(request, runtime);
  }

  async modifyAppWithOptions(request: ModifyAppRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyApp",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAppResponse>(await this.callApi(params, req, runtime), new ModifyAppResponse({}));
  }

  async modifyApp(request: ModifyAppRequest): Promise<ModifyAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAppWithOptions(request, runtime);
  }

  async modifyBackendWithOptions(request: ModifyBackendRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackendResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendId)) {
      query["BackendId"] = request.backendId;
    }

    if (!Util.isUnset(request.backendName)) {
      query["BackendName"] = request.backendName;
    }

    if (!Util.isUnset(request.backendType)) {
      query["BackendType"] = request.backendType;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyBackend",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyBackendResponse>(await this.callApi(params, req, runtime), new ModifyBackendResponse({}));
  }

  async modifyBackend(request: ModifyBackendRequest): Promise<ModifyBackendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackendWithOptions(request, runtime);
  }

  async modifyBackendModelWithOptions(request: ModifyBackendModelRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackendModelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendId)) {
      query["BackendId"] = request.backendId;
    }

    if (!Util.isUnset(request.backendModelData)) {
      query["BackendModelData"] = request.backendModelData;
    }

    if (!Util.isUnset(request.backendModelId)) {
      query["BackendModelId"] = request.backendModelId;
    }

    if (!Util.isUnset(request.backendType)) {
      query["BackendType"] = request.backendType;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyBackendModel",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyBackendModelResponse>(await this.callApi(params, req, runtime), new ModifyBackendModelResponse({}));
  }

  async modifyBackendModel(request: ModifyBackendModelRequest): Promise<ModifyBackendModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackendModelWithOptions(request, runtime);
  }

  async modifyDatasetWithOptions(request: ModifyDatasetRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDatasetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDataset",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDatasetResponse>(await this.callApi(params, req, runtime), new ModifyDatasetResponse({}));
  }

  async modifyDataset(request: ModifyDatasetRequest): Promise<ModifyDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDatasetWithOptions(request, runtime);
  }

  async modifyDatasetItemWithOptions(request: ModifyDatasetItemRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDatasetItemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    if (!Util.isUnset(request.datasetItemId)) {
      query["DatasetItemId"] = request.datasetItemId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.expiredTime)) {
      query["ExpiredTime"] = request.expiredTime;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDatasetItem",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDatasetItemResponse>(await this.callApi(params, req, runtime), new ModifyDatasetItemResponse({}));
  }

  async modifyDatasetItem(request: ModifyDatasetItemRequest): Promise<ModifyDatasetItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDatasetItemWithOptions(request, runtime);
  }

  async modifyInstanceSpecWithOptions(request: ModifyInstanceSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceSpecResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceSpec)) {
      query["InstanceSpec"] = request.instanceSpec;
    }

    if (!Util.isUnset(request.modifyAction)) {
      query["ModifyAction"] = request.modifyAction;
    }

    if (!Util.isUnset(request.skipWaitSwitch)) {
      query["SkipWaitSwitch"] = request.skipWaitSwitch;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstanceSpec",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceSpecResponse>(await this.callApi(params, req, runtime), new ModifyInstanceSpecResponse({}));
  }

  async modifyInstanceSpec(request: ModifyInstanceSpecRequest): Promise<ModifyInstanceSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceSpecWithOptions(request, runtime);
  }

  /**
    * The name of the ACL. The name must be 4 to 50 characters in length, and can contain letters, digits, and underscores (\\_). The name cannot start with an underscore (\\_).
    *
    * @param request ModifyIpControlRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyIpControlResponse
   */
  async modifyIpControlWithOptions(request: ModifyIpControlRequest, runtime: $Util.RuntimeOptions): Promise<ModifyIpControlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.ipControlId)) {
      query["IpControlId"] = request.ipControlId;
    }

    if (!Util.isUnset(request.ipControlName)) {
      query["IpControlName"] = request.ipControlName;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyIpControl",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyIpControlResponse>(await this.callApi(params, req, runtime), new ModifyIpControlResponse({}));
  }

  /**
    * The name of the ACL. The name must be 4 to 50 characters in length, and can contain letters, digits, and underscores (\\_). The name cannot start with an underscore (\\_).
    *
    * @param request ModifyIpControlRequest
    * @return ModifyIpControlResponse
   */
  async modifyIpControl(request: ModifyIpControlRequest): Promise<ModifyIpControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyIpControlWithOptions(request, runtime);
  }

  /**
    * The ID of the policy.
    *
    * @param request ModifyIpControlPolicyItemRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyIpControlPolicyItemResponse
   */
  async modifyIpControlPolicyItemWithOptions(request: ModifyIpControlPolicyItemRequest, runtime: $Util.RuntimeOptions): Promise<ModifyIpControlPolicyItemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.cidrIp)) {
      query["CidrIp"] = request.cidrIp;
    }

    if (!Util.isUnset(request.ipControlId)) {
      query["IpControlId"] = request.ipControlId;
    }

    if (!Util.isUnset(request.policyItemId)) {
      query["PolicyItemId"] = request.policyItemId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyIpControlPolicyItem",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyIpControlPolicyItemResponse>(await this.callApi(params, req, runtime), new ModifyIpControlPolicyItemResponse({}));
  }

  /**
    * The ID of the policy.
    *
    * @param request ModifyIpControlPolicyItemRequest
    * @return ModifyIpControlPolicyItemResponse
   */
  async modifyIpControlPolicyItem(request: ModifyIpControlPolicyItemRequest): Promise<ModifyIpControlPolicyItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyIpControlPolicyItemWithOptions(request, runtime);
  }

  async modifyLogConfigWithOptions(request: ModifyLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLogConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.logType)) {
      query["LogType"] = request.logType;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.slsLogStore)) {
      query["SlsLogStore"] = request.slsLogStore;
    }

    if (!Util.isUnset(request.slsProject)) {
      query["SlsProject"] = request.slsProject;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyLogConfig",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyLogConfigResponse>(await this.callApi(params, req, runtime), new ModifyLogConfigResponse({}));
  }

  async modifyLogConfig(request: ModifyLogConfigRequest): Promise<ModifyLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLogConfigWithOptions(request, runtime);
  }

  async modifyModelWithOptions(request: ModifyModelRequest, runtime: $Util.RuntimeOptions): Promise<ModifyModelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.modelName)) {
      query["ModelName"] = request.modelName;
    }

    if (!Util.isUnset(request.newModelName)) {
      query["NewModelName"] = request.newModelName;
    }

    if (!Util.isUnset(request.schema)) {
      query["Schema"] = request.schema;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyModel",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyModelResponse>(await this.callApi(params, req, runtime), new ModifyModelResponse({}));
  }

  async modifyModel(request: ModifyModelRequest): Promise<ModifyModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyModelWithOptions(request, runtime);
  }

  async modifyPluginWithOptions(request: ModifyPluginRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPluginResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.pluginData)) {
      query["PluginData"] = request.pluginData;
    }

    if (!Util.isUnset(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    if (!Util.isUnset(request.pluginName)) {
      query["PluginName"] = request.pluginName;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPlugin",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyPluginResponse>(await this.callApi(params, req, runtime), new ModifyPluginResponse({}));
  }

  async modifyPlugin(request: ModifyPluginRequest): Promise<ModifyPluginResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPluginWithOptions(request, runtime);
  }

  /**
    * The new name of the key. The name must be 4 to 50 characters in length and can contain letters, digits, and underscores (\\_). It must start with a letter.
    *
    * @param request ModifySignatureRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifySignatureResponse
   */
  async modifySignatureWithOptions(request: ModifySignatureRequest, runtime: $Util.RuntimeOptions): Promise<ModifySignatureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.signatureId)) {
      query["SignatureId"] = request.signatureId;
    }

    if (!Util.isUnset(request.signatureKey)) {
      query["SignatureKey"] = request.signatureKey;
    }

    if (!Util.isUnset(request.signatureName)) {
      query["SignatureName"] = request.signatureName;
    }

    if (!Util.isUnset(request.signatureSecret)) {
      query["SignatureSecret"] = request.signatureSecret;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySignature",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySignatureResponse>(await this.callApi(params, req, runtime), new ModifySignatureResponse({}));
  }

  /**
    * The new name of the key. The name must be 4 to 50 characters in length and can contain letters, digits, and underscores (\\_). It must start with a letter.
    *
    * @param request ModifySignatureRequest
    * @return ModifySignatureResponse
   */
  async modifySignature(request: ModifySignatureRequest): Promise<ModifySignatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySignatureWithOptions(request, runtime);
  }

  /**
    * The throttling policy name. The name must be 4 to 50 characters in length and can contain letters, digits, and underscores (\\_). It cannot start with an underscore.
    *
    * @param request ModifyTrafficControlRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyTrafficControlResponse
   */
  async modifyTrafficControlWithOptions(request: ModifyTrafficControlRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTrafficControlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiDefault)) {
      query["ApiDefault"] = request.apiDefault;
    }

    if (!Util.isUnset(request.appDefault)) {
      query["AppDefault"] = request.appDefault;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.trafficControlId)) {
      query["TrafficControlId"] = request.trafficControlId;
    }

    if (!Util.isUnset(request.trafficControlName)) {
      query["TrafficControlName"] = request.trafficControlName;
    }

    if (!Util.isUnset(request.trafficControlUnit)) {
      query["TrafficControlUnit"] = request.trafficControlUnit;
    }

    if (!Util.isUnset(request.userDefault)) {
      query["UserDefault"] = request.userDefault;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTrafficControl",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTrafficControlResponse>(await this.callApi(params, req, runtime), new ModifyTrafficControlResponse({}));
  }

  /**
    * The throttling policy name. The name must be 4 to 50 characters in length and can contain letters, digits, and underscores (\\_). It cannot start with an underscore.
    *
    * @param request ModifyTrafficControlRequest
    * @return ModifyTrafficControlResponse
   */
  async modifyTrafficControl(request: ModifyTrafficControlRequest): Promise<ModifyTrafficControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTrafficControlWithOptions(request, runtime);
  }

  async modifyVpcAccessAndUpdateApisWithOptions(request: ModifyVpcAccessAndUpdateApisRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVpcAccessAndUpdateApisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.needBatchWork)) {
      query["NeedBatchWork"] = request.needBatchWork;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.refresh)) {
      query["Refresh"] = request.refresh;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vpcTargetHostName)) {
      query["VpcTargetHostName"] = request.vpcTargetHostName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyVpcAccessAndUpdateApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyVpcAccessAndUpdateApisResponse>(await this.callApi(params, req, runtime), new ModifyVpcAccessAndUpdateApisResponse({}));
  }

  async modifyVpcAccessAndUpdateApis(request: ModifyVpcAccessAndUpdateApisRequest): Promise<ModifyVpcAccessAndUpdateApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVpcAccessAndUpdateApisWithOptions(request, runtime);
  }

  async openApiGatewayServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<OpenApiGatewayServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "OpenApiGatewayService",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenApiGatewayServiceResponse>(await this.callApi(params, req, runtime), new OpenApiGatewayServiceResponse({}));
  }

  async openApiGatewayService(): Promise<OpenApiGatewayServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openApiGatewayServiceWithOptions(runtime);
  }

  async queryRequestLogsWithOptions(request: QueryRequestLogsRequest, runtime: $Util.RuntimeOptions): Promise<QueryRequestLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.requestLogId)) {
      query["RequestLogId"] = request.requestLogId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRequestLogs",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRequestLogsResponse>(await this.callApi(params, req, runtime), new QueryRequestLogsResponse({}));
  }

  async queryRequestLogs(request: QueryRequestLogsRequest): Promise<QueryRequestLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRequestLogsWithOptions(request, runtime);
  }

  /**
    * The ID of the API group to which the domain name is bound. This ID is generated by the system and globally unique.
    *
    * @param request ReactivateDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ReactivateDomainResponse
   */
  async reactivateDomainWithOptions(request: ReactivateDomainRequest, runtime: $Util.RuntimeOptions): Promise<ReactivateDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReactivateDomain",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReactivateDomainResponse>(await this.callApi(params, req, runtime), new ReactivateDomainResponse({}));
  }

  /**
    * The ID of the API group to which the domain name is bound. This ID is generated by the system and globally unique.
    *
    * @param request ReactivateDomainRequest
    * @return ReactivateDomainResponse
   */
  async reactivateDomain(request: ReactivateDomainRequest): Promise<ReactivateDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reactivateDomainWithOptions(request, runtime);
  }

  async removeAccessControlListEntryWithOptions(request: RemoveAccessControlListEntryRequest, runtime: $Util.RuntimeOptions): Promise<RemoveAccessControlListEntryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclEntrys)) {
      query["AclEntrys"] = request.aclEntrys;
    }

    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveAccessControlListEntry",
      version: "2016-07-14",
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

  async removeAccessControlListEntry(request: RemoveAccessControlListEntryRequest): Promise<RemoveAccessControlListEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeAccessControlListEntryWithOptions(request, runtime);
  }

  /**
    * The ID of the app. The ID is generated by the system and globally unique.
    *
    * @param request RemoveApisAuthoritiesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RemoveApisAuthoritiesResponse
   */
  async removeApisAuthoritiesWithOptions(request: RemoveApisAuthoritiesRequest, runtime: $Util.RuntimeOptions): Promise<RemoveApisAuthoritiesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiIds)) {
      query["ApiIds"] = request.apiIds;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveApisAuthorities",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveApisAuthoritiesResponse>(await this.callApi(params, req, runtime), new RemoveApisAuthoritiesResponse({}));
  }

  /**
    * The ID of the app. The ID is generated by the system and globally unique.
    *
    * @param request RemoveApisAuthoritiesRequest
    * @return RemoveApisAuthoritiesResponse
   */
  async removeApisAuthorities(request: RemoveApisAuthoritiesRequest): Promise<RemoveApisAuthoritiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeApisAuthoritiesWithOptions(request, runtime);
  }

  /**
    * The ID of the API. This ID is generated by the system and globally unique.
    *
    * @param request RemoveAppsAuthoritiesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RemoveAppsAuthoritiesResponse
   */
  async removeAppsAuthoritiesWithOptions(request: RemoveAppsAuthoritiesRequest, runtime: $Util.RuntimeOptions): Promise<RemoveAppsAuthoritiesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveAppsAuthorities",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveAppsAuthoritiesResponse>(await this.callApi(params, req, runtime), new RemoveAppsAuthoritiesResponse({}));
  }

  /**
    * The ID of the API. This ID is generated by the system and globally unique.
    *
    * @param request RemoveAppsAuthoritiesRequest
    * @return RemoveAppsAuthoritiesResponse
   */
  async removeAppsAuthorities(request: RemoveAppsAuthoritiesRequest): Promise<RemoveAppsAuthoritiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeAppsAuthoritiesWithOptions(request, runtime);
  }

  /**
    * The ID of the API group containing the API to be managed.
    *
    * @param request RemoveIpControlApisRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RemoveIpControlApisResponse
   */
  async removeIpControlApisWithOptions(request: RemoveIpControlApisRequest, runtime: $Util.RuntimeOptions): Promise<RemoveIpControlApisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiIds)) {
      query["ApiIds"] = request.apiIds;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.ipControlId)) {
      query["IpControlId"] = request.ipControlId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveIpControlApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveIpControlApisResponse>(await this.callApi(params, req, runtime), new RemoveIpControlApisResponse({}));
  }

  /**
    * The ID of the API group containing the API to be managed.
    *
    * @param request RemoveIpControlApisRequest
    * @return RemoveIpControlApisResponse
   */
  async removeIpControlApis(request: RemoveIpControlApisRequest): Promise<RemoveIpControlApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeIpControlApisWithOptions(request, runtime);
  }

  /**
    * The ID of a policy. Separate multiple IDs with semicolons (;). A maximum of 100 IDs can be entered.
    *
    * @param request RemoveIpControlPolicyItemRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RemoveIpControlPolicyItemResponse
   */
  async removeIpControlPolicyItemWithOptions(request: RemoveIpControlPolicyItemRequest, runtime: $Util.RuntimeOptions): Promise<RemoveIpControlPolicyItemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ipControlId)) {
      query["IpControlId"] = request.ipControlId;
    }

    if (!Util.isUnset(request.policyItemIds)) {
      query["PolicyItemIds"] = request.policyItemIds;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveIpControlPolicyItem",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveIpControlPolicyItemResponse>(await this.callApi(params, req, runtime), new RemoveIpControlPolicyItemResponse({}));
  }

  /**
    * The ID of a policy. Separate multiple IDs with semicolons (;). A maximum of 100 IDs can be entered.
    *
    * @param request RemoveIpControlPolicyItemRequest
    * @return RemoveIpControlPolicyItemResponse
   */
  async removeIpControlPolicyItem(request: RemoveIpControlPolicyItemRequest): Promise<RemoveIpControlPolicyItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeIpControlPolicyItemWithOptions(request, runtime);
  }

  /**
    * The ID of the signature key.
    *
    * @param request RemoveSignatureApisRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RemoveSignatureApisResponse
   */
  async removeSignatureApisWithOptions(request: RemoveSignatureApisRequest, runtime: $Util.RuntimeOptions): Promise<RemoveSignatureApisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiIds)) {
      query["ApiIds"] = request.apiIds;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.signatureId)) {
      query["SignatureId"] = request.signatureId;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveSignatureApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveSignatureApisResponse>(await this.callApi(params, req, runtime), new RemoveSignatureApisResponse({}));
  }

  /**
    * The ID of the signature key.
    *
    * @param request RemoveSignatureApisRequest
    * @return RemoveSignatureApisResponse
   */
  async removeSignatureApis(request: RemoveSignatureApisRequest): Promise<RemoveSignatureApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeSignatureApisWithOptions(request, runtime);
  }

  /**
    * The ID of the API group containing the APIs from which you want to unbind a specified throttling policy.
    *
    * @param request RemoveTrafficControlApisRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RemoveTrafficControlApisResponse
   */
  async removeTrafficControlApisWithOptions(request: RemoveTrafficControlApisRequest, runtime: $Util.RuntimeOptions): Promise<RemoveTrafficControlApisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiIds)) {
      query["ApiIds"] = request.apiIds;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!Util.isUnset(request.trafficControlId)) {
      query["TrafficControlId"] = request.trafficControlId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveTrafficControlApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveTrafficControlApisResponse>(await this.callApi(params, req, runtime), new RemoveTrafficControlApisResponse({}));
  }

  /**
    * The ID of the API group containing the APIs from which you want to unbind a specified throttling policy.
    *
    * @param request RemoveTrafficControlApisRequest
    * @return RemoveTrafficControlApisResponse
   */
  async removeTrafficControlApis(request: RemoveTrafficControlApisRequest): Promise<RemoveTrafficControlApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeTrafficControlApisWithOptions(request, runtime);
  }

  async removeVpcAccessWithOptions(request: RemoveVpcAccessRequest, runtime: $Util.RuntimeOptions): Promise<RemoveVpcAccessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.needBatchWork)) {
      query["NeedBatchWork"] = request.needBatchWork;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveVpcAccess",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveVpcAccessResponse>(await this.callApi(params, req, runtime), new RemoveVpcAccessResponse({}));
  }

  async removeVpcAccess(request: RemoveVpcAccessRequest): Promise<RemoveVpcAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeVpcAccessWithOptions(request, runtime);
  }

  async removeVpcAccessAndAbolishApisWithOptions(request: RemoveVpcAccessAndAbolishApisRequest, runtime: $Util.RuntimeOptions): Promise<RemoveVpcAccessAndAbolishApisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.needBatchWork)) {
      query["NeedBatchWork"] = request.needBatchWork;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveVpcAccessAndAbolishApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveVpcAccessAndAbolishApisResponse>(await this.callApi(params, req, runtime), new RemoveVpcAccessAndAbolishApisResponse({}));
  }

  async removeVpcAccessAndAbolishApis(request: RemoveVpcAccessAndAbolishApisRequest): Promise<RemoveVpcAccessAndAbolishApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeVpcAccessAndAbolishApisWithOptions(request, runtime);
  }

  /**
    * The new AppCode takes effect about 2 seconds after you call this operation.
    *
    * @param request ResetAppCodeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ResetAppCodeResponse
   */
  async resetAppCodeWithOptions(request: ResetAppCodeRequest, runtime: $Util.RuntimeOptions): Promise<ResetAppCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!Util.isUnset(request.newAppCode)) {
      query["NewAppCode"] = request.newAppCode;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetAppCode",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetAppCodeResponse>(await this.callApi(params, req, runtime), new ResetAppCodeResponse({}));
  }

  /**
    * The new AppCode takes effect about 2 seconds after you call this operation.
    *
    * @param request ResetAppCodeRequest
    * @return ResetAppCodeResponse
   */
  async resetAppCode(request: ResetAppCodeRequest): Promise<ResetAppCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAppCodeWithOptions(request, runtime);
  }

  /**
    * *   This operation is intended for API callers.
    * *   A new secret is automatically generated after you have called this operation. This secret cannot be customized.
    * *   The results returned by this operation do not contain the application secret. You can obtain the secret by calling DescribeAppSecurity.
    *
    * @param request ResetAppSecretRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ResetAppSecretResponse
   */
  async resetAppSecretWithOptions(request: ResetAppSecretRequest, runtime: $Util.RuntimeOptions): Promise<ResetAppSecretResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.newAppKey)) {
      query["NewAppKey"] = request.newAppKey;
    }

    if (!Util.isUnset(request.newAppSecret)) {
      query["NewAppSecret"] = request.newAppSecret;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetAppSecret",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetAppSecretResponse>(await this.callApi(params, req, runtime), new ResetAppSecretResponse({}));
  }

  /**
    * *   This operation is intended for API callers.
    * *   A new secret is automatically generated after you have called this operation. This secret cannot be customized.
    * *   The results returned by this operation do not contain the application secret. You can obtain the secret by calling DescribeAppSecurity.
    *
    * @param request ResetAppSecretRequest
    * @return ResetAppSecretResponse
   */
  async resetAppSecret(request: ResetAppSecretRequest): Promise<ResetAppSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAppSecretWithOptions(request, runtime);
  }

  async sdkGenerateByAppWithOptions(request: SdkGenerateByAppRequest, runtime: $Util.RuntimeOptions): Promise<SdkGenerateByAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SdkGenerateByApp",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SdkGenerateByAppResponse>(await this.callApi(params, req, runtime), new SdkGenerateByAppResponse({}));
  }

  async sdkGenerateByApp(request: SdkGenerateByAppRequest): Promise<SdkGenerateByAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sdkGenerateByAppWithOptions(request, runtime);
  }

  async sdkGenerateByAppForRegionWithOptions(request: SdkGenerateByAppForRegionRequest, runtime: $Util.RuntimeOptions): Promise<SdkGenerateByAppForRegionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SdkGenerateByAppForRegion",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SdkGenerateByAppForRegionResponse>(await this.callApi(params, req, runtime), new SdkGenerateByAppForRegionResponse({}));
  }

  async sdkGenerateByAppForRegion(request: SdkGenerateByAppForRegionRequest): Promise<SdkGenerateByAppForRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sdkGenerateByAppForRegionWithOptions(request, runtime);
  }

  async sdkGenerateByGroupWithOptions(request: SdkGenerateByGroupRequest, runtime: $Util.RuntimeOptions): Promise<SdkGenerateByGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SdkGenerateByGroup",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SdkGenerateByGroupResponse>(await this.callApi(params, req, runtime), new SdkGenerateByGroupResponse({}));
  }

  async sdkGenerateByGroup(request: SdkGenerateByGroupRequest): Promise<SdkGenerateByGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sdkGenerateByGroupWithOptions(request, runtime);
  }

  async setAccessControlListAttributeWithOptions(request: SetAccessControlListAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetAccessControlListAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.aclName)) {
      query["AclName"] = request.aclName;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetAccessControlListAttribute",
      version: "2016-07-14",
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

  async setAccessControlListAttribute(request: SetAccessControlListAttributeRequest): Promise<SetAccessControlListAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAccessControlListAttributeWithOptions(request, runtime);
  }

  /**
    * The ID of the app. This ID is generated by the system and globally unique.
    *
    * @param request SetApisAuthoritiesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetApisAuthoritiesResponse
   */
  async setApisAuthoritiesWithOptions(request: SetApisAuthoritiesRequest, runtime: $Util.RuntimeOptions): Promise<SetApisAuthoritiesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiIds)) {
      query["ApiIds"] = request.apiIds;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.authValidTime)) {
      query["AuthValidTime"] = request.authValidTime;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetApisAuthorities",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetApisAuthoritiesResponse>(await this.callApi(params, req, runtime), new SetApisAuthoritiesResponse({}));
  }

  /**
    * The ID of the app. This ID is generated by the system and globally unique.
    *
    * @param request SetApisAuthoritiesRequest
    * @return SetApisAuthoritiesResponse
   */
  async setApisAuthorities(request: SetApisAuthoritiesRequest): Promise<SetApisAuthoritiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setApisAuthoritiesWithOptions(request, runtime);
  }

  /**
    * The ID of the API. This ID is generated by the system and globally unique.
    *
    * @param request SetAppsAuthoritiesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetAppsAuthoritiesResponse
   */
  async setAppsAuthoritiesWithOptions(request: SetAppsAuthoritiesRequest, runtime: $Util.RuntimeOptions): Promise<SetAppsAuthoritiesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!Util.isUnset(request.authValidTime)) {
      query["AuthValidTime"] = request.authValidTime;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetAppsAuthorities",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetAppsAuthoritiesResponse>(await this.callApi(params, req, runtime), new SetAppsAuthoritiesResponse({}));
  }

  /**
    * The ID of the API. This ID is generated by the system and globally unique.
    *
    * @param request SetAppsAuthoritiesRequest
    * @return SetAppsAuthoritiesResponse
   */
  async setAppsAuthorities(request: SetAppsAuthoritiesRequest): Promise<SetAppsAuthoritiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAppsAuthoritiesWithOptions(request, runtime);
  }

  async setDomainWithOptions(request: SetDomainRequest, runtime: $Util.RuntimeOptions): Promise<SetDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bindStageName)) {
      query["BindStageName"] = request.bindStageName;
    }

    if (!Util.isUnset(request.customDomainType)) {
      query["CustomDomainType"] = request.customDomainType;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.isForce)) {
      query["IsForce"] = request.isForce;
    }

    if (!Util.isUnset(request.isHttpRedirectToHttps)) {
      query["IsHttpRedirectToHttps"] = request.isHttpRedirectToHttps;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDomain",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDomainResponse>(await this.callApi(params, req, runtime), new SetDomainResponse({}));
  }

  async setDomain(request: SetDomainRequest): Promise<SetDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDomainWithOptions(request, runtime);
  }

  /**
    * 382271
    *
    * @param request SetDomainCertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetDomainCertificateResponse
   */
  async setDomainCertificateWithOptions(request: SetDomainCertificateRequest, runtime: $Util.RuntimeOptions): Promise<SetDomainCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.caCertificateBody)) {
      query["CaCertificateBody"] = request.caCertificateBody;
    }

    if (!Util.isUnset(request.certificateBody)) {
      query["CertificateBody"] = request.certificateBody;
    }

    if (!Util.isUnset(request.certificateName)) {
      query["CertificateName"] = request.certificateName;
    }

    if (!Util.isUnset(request.certificatePrivateKey)) {
      query["CertificatePrivateKey"] = request.certificatePrivateKey;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.sslVerifyDepth)) {
      query["SslVerifyDepth"] = request.sslVerifyDepth;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDomainCertificate",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDomainCertificateResponse>(await this.callApi(params, req, runtime), new SetDomainCertificateResponse({}));
  }

  /**
    * 382271
    *
    * @param request SetDomainCertificateRequest
    * @return SetDomainCertificateResponse
   */
  async setDomainCertificate(request: SetDomainCertificateRequest): Promise<SetDomainCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDomainCertificateWithOptions(request, runtime);
  }

  async setDomainWebSocketStatusWithOptions(request: SetDomainWebSocketStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetDomainWebSocketStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.actionValue)) {
      query["ActionValue"] = request.actionValue;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.WSSEnable)) {
      query["WSSEnable"] = request.WSSEnable;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDomainWebSocketStatus",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDomainWebSocketStatusResponse>(await this.callApi(params, req, runtime), new SetDomainWebSocketStatusResponse({}));
  }

  async setDomainWebSocketStatus(request: SetDomainWebSocketStatusRequest): Promise<SetDomainWebSocketStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDomainWebSocketStatusWithOptions(request, runtime);
  }

  async setGroupAuthAppCodeWithOptions(request: SetGroupAuthAppCodeRequest, runtime: $Util.RuntimeOptions): Promise<SetGroupAuthAppCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authAppCode)) {
      query["AuthAppCode"] = request.authAppCode;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetGroupAuthAppCode",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetGroupAuthAppCodeResponse>(await this.callApi(params, req, runtime), new SetGroupAuthAppCodeResponse({}));
  }

  async setGroupAuthAppCode(request: SetGroupAuthAppCodeRequest): Promise<SetGroupAuthAppCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setGroupAuthAppCodeWithOptions(request, runtime);
  }

  /**
    * The ID of the API group.
    *
    * @param request SetIpControlApisRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetIpControlApisResponse
   */
  async setIpControlApisWithOptions(request: SetIpControlApisRequest, runtime: $Util.RuntimeOptions): Promise<SetIpControlApisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiIds)) {
      query["ApiIds"] = request.apiIds;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.ipControlId)) {
      query["IpControlId"] = request.ipControlId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetIpControlApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetIpControlApisResponse>(await this.callApi(params, req, runtime), new SetIpControlApisResponse({}));
  }

  /**
    * The ID of the API group.
    *
    * @param request SetIpControlApisRequest
    * @return SetIpControlApisResponse
   */
  async setIpControlApis(request: SetIpControlApisRequest): Promise<SetIpControlApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setIpControlApisWithOptions(request, runtime);
  }

  /**
    * The ID of the signature key.
    *
    * @param request SetSignatureApisRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetSignatureApisResponse
   */
  async setSignatureApisWithOptions(request: SetSignatureApisRequest, runtime: $Util.RuntimeOptions): Promise<SetSignatureApisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiIds)) {
      query["ApiIds"] = request.apiIds;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.signatureId)) {
      query["SignatureId"] = request.signatureId;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetSignatureApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetSignatureApisResponse>(await this.callApi(params, req, runtime), new SetSignatureApisResponse({}));
  }

  /**
    * The ID of the signature key.
    *
    * @param request SetSignatureApisRequest
    * @return SetSignatureApisResponse
   */
  async setSignatureApis(request: SetSignatureApisRequest): Promise<SetSignatureApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setSignatureApisWithOptions(request, runtime);
  }

  /**
    * The ID of the API group containing the APIs to which you want to bind a specified throttling policy.
    *
    * @param request SetTrafficControlApisRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetTrafficControlApisResponse
   */
  async setTrafficControlApisWithOptions(request: SetTrafficControlApisRequest, runtime: $Util.RuntimeOptions): Promise<SetTrafficControlApisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiIds)) {
      query["ApiIds"] = request.apiIds;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!Util.isUnset(request.trafficControlId)) {
      query["TrafficControlId"] = request.trafficControlId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetTrafficControlApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetTrafficControlApisResponse>(await this.callApi(params, req, runtime), new SetTrafficControlApisResponse({}));
  }

  /**
    * The ID of the API group containing the APIs to which you want to bind a specified throttling policy.
    *
    * @param request SetTrafficControlApisRequest
    * @return SetTrafficControlApisResponse
   */
  async setTrafficControlApis(request: SetTrafficControlApisRequest): Promise<SetTrafficControlApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setTrafficControlApisWithOptions(request, runtime);
  }

  async setVpcAccessWithOptions(request: SetVpcAccessRequest, runtime: $Util.RuntimeOptions): Promise<SetVpcAccessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vpcTargetHostName)) {
      query["VpcTargetHostName"] = request.vpcTargetHostName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetVpcAccess",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetVpcAccessResponse>(await this.callApi(params, req, runtime), new SetVpcAccessResponse({}));
  }

  async setVpcAccess(request: SetVpcAccessRequest): Promise<SetVpcAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setVpcAccessWithOptions(request, runtime);
  }

  async setWildcardDomainPatternsWithOptions(request: SetWildcardDomainPatternsRequest, runtime: $Util.RuntimeOptions): Promise<SetWildcardDomainPatternsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.wildcardDomainPatterns)) {
      query["WildcardDomainPatterns"] = request.wildcardDomainPatterns;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetWildcardDomainPatterns",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetWildcardDomainPatternsResponse>(await this.callApi(params, req, runtime), new SetWildcardDomainPatternsResponse({}));
  }

  async setWildcardDomainPatterns(request: SetWildcardDomainPatternsRequest): Promise<SetWildcardDomainPatternsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setWildcardDomainPatternsWithOptions(request, runtime);
  }

  /**
    * The ID of the API.
    *
    * @param request SwitchApiRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SwitchApiResponse
   */
  async switchApiWithOptions(request: SwitchApiRequest, runtime: $Util.RuntimeOptions): Promise<SwitchApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.historyVersion)) {
      query["HistoryVersion"] = request.historyVersion;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SwitchApi",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SwitchApiResponse>(await this.callApi(params, req, runtime), new SwitchApiResponse({}));
  }

  /**
    * The ID of the API.
    *
    * @param request SwitchApiRequest
    * @return SwitchApiResponse
   */
  async switchApi(request: SwitchApiRequest): Promise<SwitchApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchApiWithOptions(request, runtime);
  }

  /**
    * The key of tag N.
    * Valid values of N: `1 to 20.`
    *
    * @param request TagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2016-07-14",
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
    * The key of tag N.
    * Valid values of N: `1 to 20.`
    *
    * @param request TagResourcesRequest
    * @return TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
    * Specifies whether to delete all tags. This parameter is valid only when the **TagKey.N**parameter is not specified. Default value: false. Valid values:
    * *   **true**
    * *   **false**
    *
    * @param request UntagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2016-07-14",
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
    * Specifies whether to delete all tags. This parameter is valid only when the **TagKey.N**parameter is not specified. Default value: false. Valid values:
    * *   **true**
    * *   **false**
    *
    * @param request UntagResourcesRequest
    * @return UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async validateVpcConnectivityWithOptions(request: ValidateVpcConnectivityRequest, runtime: $Util.RuntimeOptions): Promise<ValidateVpcConnectivityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.vpcAccessId)) {
      query["VpcAccessId"] = request.vpcAccessId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ValidateVpcConnectivity",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ValidateVpcConnectivityResponse>(await this.callApi(params, req, runtime), new ValidateVpcConnectivityResponse({}));
  }

  async validateVpcConnectivity(request: ValidateVpcConnectivityRequest): Promise<ValidateVpcConnectivityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.validateVpcConnectivityWithOptions(request, runtime);
  }

}
