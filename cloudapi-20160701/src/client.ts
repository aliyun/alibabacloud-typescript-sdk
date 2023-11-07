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

export class AddBlackListRequest extends $tea.Model {
  blackContent?: string;
  blackType?: string;
  description?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      blackContent: 'BlackContent',
      blackType: 'BlackType',
      description: 'Description',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackContent: 'string',
      blackType: 'string',
      description: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBlackListResponseBody extends $tea.Model {
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

export class AddBlackListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddBlackListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddBlackListResponseBody,
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

export class CreateApiRequest extends $tea.Model {
  allowSignatureMethod?: string;
  apiName?: string;
  appCodeAuthType?: string;
  authType?: string;
  description?: string;
  disableInternet?: boolean;
  errorCodeSamples?: string;
  failResultSample?: string;
  forceNonceCheck?: boolean;
  groupId?: string;
  openIdConnectConfig?: string;
  requestConfig?: string;
  requestParamters?: string;
  resultBodyModel?: string;
  resultDescriptions?: string;
  resultSample?: string;
  resultType?: string;
  securityToken?: string;
  serviceConfig?: string;
  serviceParameters?: string;
  serviceParametersMap?: string;
  visibility?: string;
  webSocketApiType?: string;
  static names(): { [key: string]: string } {
    return {
      allowSignatureMethod: 'AllowSignatureMethod',
      apiName: 'ApiName',
      appCodeAuthType: 'AppCodeAuthType',
      authType: 'AuthType',
      description: 'Description',
      disableInternet: 'DisableInternet',
      errorCodeSamples: 'ErrorCodeSamples',
      failResultSample: 'FailResultSample',
      forceNonceCheck: 'ForceNonceCheck',
      groupId: 'GroupId',
      openIdConnectConfig: 'OpenIdConnectConfig',
      requestConfig: 'RequestConfig',
      requestParamters: 'RequestParamters',
      resultBodyModel: 'ResultBodyModel',
      resultDescriptions: 'ResultDescriptions',
      resultSample: 'ResultSample',
      resultType: 'ResultType',
      securityToken: 'SecurityToken',
      serviceConfig: 'ServiceConfig',
      serviceParameters: 'ServiceParameters',
      serviceParametersMap: 'ServiceParametersMap',
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
      description: 'string',
      disableInternet: 'boolean',
      errorCodeSamples: 'string',
      failResultSample: 'string',
      forceNonceCheck: 'boolean',
      groupId: 'string',
      openIdConnectConfig: 'string',
      requestConfig: 'string',
      requestParamters: 'string',
      resultBodyModel: 'string',
      resultDescriptions: 'string',
      resultSample: 'string',
      resultType: 'string',
      securityToken: 'string',
      serviceConfig: 'string',
      serviceParameters: 'string',
      serviceParametersMap: 'string',
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
  description?: string;
  groupName?: string;
  instanceId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupName: 'string',
      instanceId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApiGroupResponseBody extends $tea.Model {
  description?: string;
  groupId?: string;
  groupName?: string;
  instanceId?: string;
  instanceType?: string;
  requestId?: string;
  subDomain?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      requestId: 'RequestId',
      subDomain: 'SubDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      instanceId: 'string',
      instanceType: 'string',
      requestId: 'string',
      subDomain: 'string',
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
  appName?: string;
  description?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      description: 'Description',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      description: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBody extends $tea.Model {
  appId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      requestId: 'string',
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

export class CreateCustomizedInfoRequest extends $tea.Model {
  apiId?: string;
  apiName?: string;
  csharpDemo?: string;
  curlDemo?: string;
  groupId?: string;
  javaDemo?: string;
  objectcDemo?: string;
  phpDemo?: string;
  pythonDemo?: string;
  securityToken?: string;
  stageId?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      csharpDemo: 'CsharpDemo',
      curlDemo: 'CurlDemo',
      groupId: 'GroupId',
      javaDemo: 'JavaDemo',
      objectcDemo: 'ObjectcDemo',
      phpDemo: 'PhpDemo',
      pythonDemo: 'PythonDemo',
      securityToken: 'SecurityToken',
      stageId: 'StageId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      csharpDemo: 'string',
      curlDemo: 'string',
      groupId: 'string',
      javaDemo: 'string',
      objectcDemo: 'string',
      phpDemo: 'string',
      pythonDemo: 'string',
      securityToken: 'string',
      stageId: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedInfoResponseBody extends $tea.Model {
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

export class CreateCustomizedInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCustomizedInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCustomizedInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  accountQuantity?: number;
  expiredOn?: string;
  securityToken?: string;
  skuId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      accountQuantity: 'AccountQuantity',
      expiredOn: 'ExpiredOn',
      securityToken: 'SecurityToken',
      skuId: 'SkuId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountQuantity: 'number',
      expiredOn: 'string',
      securityToken: 'string',
      skuId: 'string',
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

export class CreateRaceWorkForInnerRequest extends $tea.Model {
  commodityCode?: string;
  groupId?: string;
  keywords?: string;
  logoUrl?: string;
  securityToken?: string;
  shortDescription?: string;
  workName?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      groupId: 'GroupId',
      keywords: 'Keywords',
      logoUrl: 'LogoUrl',
      securityToken: 'SecurityToken',
      shortDescription: 'ShortDescription',
      workName: 'WorkName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      groupId: 'string',
      keywords: 'string',
      logoUrl: 'string',
      securityToken: 'string',
      shortDescription: 'string',
      workName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRaceWorkForInnerResponseBody extends $tea.Model {
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

export class CreateRaceWorkForInnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateRaceWorkForInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRaceWorkForInnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretKeyRequest extends $tea.Model {
  secretKey?: string;
  secretKeyName?: string;
  secretValue?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      secretKey: 'SecretKey',
      secretKeyName: 'SecretKeyName',
      secretValue: 'SecretValue',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretKey: 'string',
      secretKeyName: 'string',
      secretValue: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretKeyResponseBody extends $tea.Model {
  requestId?: string;
  secretKeyId?: string;
  secretKeyName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      secretKeyId: 'SecretKeyId',
      secretKeyName: 'SecretKeyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      secretKeyId: 'string',
      secretKeyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSecretKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSecretKeyResponseBody,
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

export class DeleteSecretKeyRequest extends $tea.Model {
  secretKeyId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      secretKeyId: 'SecretKeyId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretKeyId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretKeyResponseBody extends $tea.Model {
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

export class DeleteSecretKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSecretKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSecretKeyResponseBody,
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
  supportMock?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      description: 'Description',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
      supportMock: 'SupportMock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      description: 'string',
      groupId: 'string',
      securityToken: 'string',
      stageName: 'string',
      supportMock: 'string',
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
  originResultDescription?: string;
  parametersMapObject?: DescribeApiResponseBodyParametersMapObject;
  regionId?: string;
  requestConfig?: DescribeApiResponseBodyRequestConfig;
  requestId?: string;
  requestParametersObject?: DescribeApiResponseBodyRequestParametersObject;
  resultBodyModel?: string;
  resultSample?: string;
  resultType?: string;
  serviceConfig?: DescribeApiResponseBodyServiceConfig;
  serviceParametersObject?: DescribeApiResponseBodyServiceParametersObject;
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
      originResultDescription: 'OriginResultDescription',
      parametersMapObject: 'ParametersMapObject',
      regionId: 'RegionId',
      requestConfig: 'RequestConfig',
      requestId: 'RequestId',
      requestParametersObject: 'RequestParametersObject',
      resultBodyModel: 'ResultBodyModel',
      resultSample: 'ResultSample',
      resultType: 'ResultType',
      serviceConfig: 'ServiceConfig',
      serviceParametersObject: 'ServiceParametersObject',
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
      originResultDescription: 'string',
      parametersMapObject: DescribeApiResponseBodyParametersMapObject,
      regionId: 'string',
      requestConfig: DescribeApiResponseBodyRequestConfig,
      requestId: 'string',
      requestParametersObject: DescribeApiResponseBodyRequestParametersObject,
      resultBodyModel: 'string',
      resultSample: 'string',
      resultType: 'string',
      serviceConfig: DescribeApiResponseBodyServiceConfig,
      serviceParametersObject: DescribeApiResponseBodyServiceParametersObject,
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
  bodyFormat?: string;
  deployedTime?: string;
  description?: string;
  disableInternet?: boolean;
  errorCodeSamples?: DescribeApiDocResponseBodyErrorCodeSamples;
  failResultSample?: string;
  forceNonceCheck?: boolean;
  groupId?: string;
  groupName?: string;
  httpMethod?: string;
  httpProtocol?: string;
  mock?: string;
  mockResult?: string;
  originResultDescription?: string;
  path?: string;
  pathParameters?: DescribeApiDocResponseBodyPathParameters;
  postBodyDescription?: string;
  postBodyType?: string;
  regionId?: string;
  requestBody?: DescribeApiDocResponseBodyRequestBody;
  requestHeaders?: DescribeApiDocResponseBodyRequestHeaders;
  requestId?: string;
  requestMode?: string;
  requestQueries?: DescribeApiDocResponseBodyRequestQueries;
  resultSample?: string;
  resultType?: string;
  serviceTimeout?: number;
  serviceVpcEnable?: string;
  stageName?: string;
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      bodyFormat: 'BodyFormat',
      deployedTime: 'DeployedTime',
      description: 'Description',
      disableInternet: 'DisableInternet',
      errorCodeSamples: 'ErrorCodeSamples',
      failResultSample: 'FailResultSample',
      forceNonceCheck: 'ForceNonceCheck',
      groupId: 'GroupId',
      groupName: 'GroupName',
      httpMethod: 'HttpMethod',
      httpProtocol: 'HttpProtocol',
      mock: 'Mock',
      mockResult: 'MockResult',
      originResultDescription: 'OriginResultDescription',
      path: 'Path',
      pathParameters: 'PathParameters',
      postBodyDescription: 'PostBodyDescription',
      postBodyType: 'PostBodyType',
      regionId: 'RegionId',
      requestBody: 'RequestBody',
      requestHeaders: 'RequestHeaders',
      requestId: 'RequestId',
      requestMode: 'RequestMode',
      requestQueries: 'RequestQueries',
      resultSample: 'ResultSample',
      resultType: 'ResultType',
      serviceTimeout: 'ServiceTimeout',
      serviceVpcEnable: 'ServiceVpcEnable',
      stageName: 'StageName',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      bodyFormat: 'string',
      deployedTime: 'string',
      description: 'string',
      disableInternet: 'boolean',
      errorCodeSamples: DescribeApiDocResponseBodyErrorCodeSamples,
      failResultSample: 'string',
      forceNonceCheck: 'boolean',
      groupId: 'string',
      groupName: 'string',
      httpMethod: 'string',
      httpProtocol: 'string',
      mock: 'string',
      mockResult: 'string',
      originResultDescription: 'string',
      path: 'string',
      pathParameters: DescribeApiDocResponseBodyPathParameters,
      postBodyDescription: 'string',
      postBodyType: 'string',
      regionId: 'string',
      requestBody: DescribeApiDocResponseBodyRequestBody,
      requestHeaders: DescribeApiDocResponseBodyRequestHeaders,
      requestId: 'string',
      requestMode: 'string',
      requestQueries: DescribeApiDocResponseBodyRequestQueries,
      resultSample: 'string',
      resultType: 'string',
      serviceTimeout: 'number',
      serviceVpcEnable: 'string',
      stageName: 'string',
      vpcName: 'string',
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

export class DescribeApiDocsRequest extends $tea.Model {
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

export class DescribeApiDocsResponseBody extends $tea.Model {
  apiInfos?: DescribeApiDocsResponseBodyApiInfos;
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
      apiInfos: DescribeApiDocsResponseBodyApiInfos,
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

export class DescribeApiDocsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApiDocsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApiDocsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiErrorRequest extends $tea.Model {
  apiId?: string;
  endTime?: string;
  groupId?: string;
  securityToken?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      endTime: 'EndTime',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      endTime: 'string',
      groupId: 'string',
      securityToken: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiErrorResponseBody extends $tea.Model {
  clientErrors?: DescribeApiErrorResponseBodyClientErrors;
  requestId?: string;
  serverErrors?: DescribeApiErrorResponseBodyServerErrors;
  static names(): { [key: string]: string } {
    return {
      clientErrors: 'ClientErrors',
      requestId: 'RequestId',
      serverErrors: 'ServerErrors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientErrors: DescribeApiErrorResponseBodyClientErrors,
      requestId: 'string',
      serverErrors: DescribeApiErrorResponseBodyServerErrors,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiErrorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApiErrorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApiErrorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupDetailRequest extends $tea.Model {
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

export class DescribeApiGroupDetailResponseBody extends $tea.Model {
  billingStatus?: string;
  classicVpcSubDomain?: string;
  compatibleFlags?: string;
  createdTime?: string;
  customTraceConfig?: string;
  defaultDomain?: string;
  description?: string;
  domainItems?: DescribeApiGroupDetailResponseBodyDomainItems;
  groupId?: string;
  groupName?: string;
  httpsPolicy?: string;
  illegalStatus?: string;
  instanceId?: string;
  instanceName?: string;
  instanceType?: string;
  instanceVipList?: string;
  ipv6Status?: string;
  modifiedTime?: string;
  passthroughHeaders?: string;
  regionId?: string;
  requestId?: string;
  rpcPattern?: string;
  stageItems?: DescribeApiGroupDetailResponseBodyStageItems;
  status?: string;
  subDomain?: string;
  trafficLimit?: number;
  userLogConfig?: string;
  vpcDomain?: string;
  static names(): { [key: string]: string } {
    return {
      billingStatus: 'BillingStatus',
      classicVpcSubDomain: 'ClassicVpcSubDomain',
      compatibleFlags: 'CompatibleFlags',
      createdTime: 'CreatedTime',
      customTraceConfig: 'CustomTraceConfig',
      defaultDomain: 'DefaultDomain',
      description: 'Description',
      domainItems: 'DomainItems',
      groupId: 'GroupId',
      groupName: 'GroupName',
      httpsPolicy: 'HttpsPolicy',
      illegalStatus: 'IllegalStatus',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingStatus: 'string',
      classicVpcSubDomain: 'string',
      compatibleFlags: 'string',
      createdTime: 'string',
      customTraceConfig: 'string',
      defaultDomain: 'string',
      description: 'string',
      domainItems: DescribeApiGroupDetailResponseBodyDomainItems,
      groupId: 'string',
      groupName: 'string',
      httpsPolicy: 'string',
      illegalStatus: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      instanceVipList: 'string',
      ipv6Status: 'string',
      modifiedTime: 'string',
      passthroughHeaders: 'string',
      regionId: 'string',
      requestId: 'string',
      rpcPattern: 'string',
      stageItems: DescribeApiGroupDetailResponseBodyStageItems,
      status: 'string',
      subDomain: 'string',
      trafficLimit: 'number',
      userLogConfig: 'string',
      vpcDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApiGroupDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApiGroupDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupDetailForConsumerRequest extends $tea.Model {
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

export class DescribeApiGroupDetailForConsumerResponseBody extends $tea.Model {
  billingStatus?: string;
  createdTime?: string;
  description?: string;
  domainItems?: DescribeApiGroupDetailForConsumerResponseBodyDomainItems;
  groupId?: string;
  groupName?: string;
  illegalStatus?: string;
  modifiedTime?: string;
  purchased?: string;
  regionId?: string;
  requestId?: string;
  status?: string;
  subDomain?: string;
  trafficLimit?: number;
  static names(): { [key: string]: string } {
    return {
      billingStatus: 'BillingStatus',
      createdTime: 'CreatedTime',
      description: 'Description',
      domainItems: 'DomainItems',
      groupId: 'GroupId',
      groupName: 'GroupName',
      illegalStatus: 'IllegalStatus',
      modifiedTime: 'ModifiedTime',
      purchased: 'Purchased',
      regionId: 'RegionId',
      requestId: 'RequestId',
      status: 'Status',
      subDomain: 'SubDomain',
      trafficLimit: 'TrafficLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingStatus: 'string',
      createdTime: 'string',
      description: 'string',
      domainItems: DescribeApiGroupDetailForConsumerResponseBodyDomainItems,
      groupId: 'string',
      groupName: 'string',
      illegalStatus: 'string',
      modifiedTime: 'string',
      purchased: 'string',
      regionId: 'string',
      requestId: 'string',
      status: 'string',
      subDomain: 'string',
      trafficLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupDetailForConsumerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApiGroupDetailForConsumerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApiGroupDetailForConsumerResponseBody,
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
  notClassic?: boolean;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  tag?: DescribeApiGroupsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      enableTagAuth: 'EnableTagAuth',
      groupId: 'GroupId',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      notClassic: 'NotClassic',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableTagAuth: 'boolean',
      groupId: 'string',
      groupName: 'string',
      instanceId: 'string',
      notClassic: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
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

export class DescribeApiLatencyRequest extends $tea.Model {
  apiId?: string;
  endTime?: string;
  groupId?: string;
  securityToken?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      endTime: 'EndTime',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      endTime: 'string',
      groupId: 'string',
      securityToken: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiLatencyResponseBody extends $tea.Model {
  latencys?: DescribeApiLatencyResponseBodyLatencys;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      latencys: 'Latencys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latencys: DescribeApiLatencyResponseBodyLatencys,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiLatencyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApiLatencyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApiLatencyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiQpsRequest extends $tea.Model {
  apiId?: string;
  endTime?: string;
  groupId?: string;
  securityToken?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      endTime: 'EndTime',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      endTime: 'string',
      groupId: 'string',
      securityToken: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiQpsResponseBody extends $tea.Model {
  fails?: DescribeApiQpsResponseBodyFails;
  requestId?: string;
  successes?: DescribeApiQpsResponseBodySuccesses;
  static names(): { [key: string]: string } {
    return {
      fails: 'Fails',
      requestId: 'RequestId',
      successes: 'Successes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fails: DescribeApiQpsResponseBodyFails,
      requestId: 'string',
      successes: DescribeApiQpsResponseBodySuccesses,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiQpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApiQpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApiQpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiRulesRequest extends $tea.Model {
  apiIds?: string;
  apiName?: string;
  groupId?: string;
  pageNumber?: number;
  pageSize?: number;
  ruleType?: string;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiIds: 'ApiIds',
      apiName: 'ApiName',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ruleType: 'RuleType',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIds: 'string',
      apiName: 'string',
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      ruleType: 'string',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiRulesResponseBody extends $tea.Model {
  apiRules?: DescribeApiRulesResponseBodyApiRules;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiRules: 'ApiRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiRules: DescribeApiRulesResponseBodyApiRules,
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

export class DescribeApiRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApiRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApiRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiStageDetailRequest extends $tea.Model {
  groupId?: string;
  securityToken?: string;
  stageId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageId: 'StageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      securityToken: 'string',
      stageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiStageDetailResponseBody extends $tea.Model {
  createdTime?: string;
  description?: string;
  groupId?: string;
  modifiedTime?: string;
  requestId?: string;
  stageId?: string;
  stageName?: string;
  variables?: DescribeApiStageDetailResponseBodyVariables;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      groupId: 'GroupId',
      modifiedTime: 'ModifiedTime',
      requestId: 'RequestId',
      stageId: 'StageId',
      stageName: 'StageName',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      groupId: 'string',
      modifiedTime: 'string',
      requestId: 'string',
      stageId: 'string',
      stageName: 'string',
      variables: DescribeApiStageDetailResponseBodyVariables,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiStageDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApiStageDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApiStageDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiTrafficRequest extends $tea.Model {
  apiId?: string;
  endTime?: string;
  groupId?: string;
  securityToken?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      endTime: 'EndTime',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      endTime: 'string',
      groupId: 'string',
      securityToken: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiTrafficResponseBody extends $tea.Model {
  downloads?: DescribeApiTrafficResponseBodyDownloads;
  requestId?: string;
  uploads?: DescribeApiTrafficResponseBodyUploads;
  static names(): { [key: string]: string } {
    return {
      downloads: 'Downloads',
      requestId: 'RequestId',
      uploads: 'Uploads',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloads: DescribeApiTrafficResponseBodyDownloads,
      requestId: 'string',
      uploads: DescribeApiTrafficResponseBodyUploads,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiTrafficResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApiTrafficResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApiTrafficResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisRequest extends $tea.Model {
  apiId?: string;
  apiName?: string;
  groupId?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
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
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisResponseBody extends $tea.Model {
  apiInfos?: DescribeApisResponseBodyApiInfos;
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
      apiInfos: DescribeApisResponseBodyApiInfos,
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

export class DescribeApisByRuleRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  ruleId?: string;
  ruleType?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ruleId: 'RuleId',
      ruleType: 'RuleType',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      ruleId: 'string',
      ruleType: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByRuleResponseBody extends $tea.Model {
  apiInfos?: DescribeApisByRuleResponseBodyApiInfos;
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
      apiInfos: DescribeApisByRuleResponseBodyApiInfos,
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

export class DescribeApisByRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApisByRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApisByRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisForConsoleRequest extends $tea.Model {
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

export class DescribeApisForConsoleResponseBody extends $tea.Model {
  apiInfos?: DescribeApisForConsoleResponseBodyApiInfos;
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
      apiInfos: DescribeApisForConsoleResponseBodyApiInfos,
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

export class DescribeApisForConsoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApisForConsoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApisForConsoleResponseBody,
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

export class DescribeAppSecuritiesRequest extends $tea.Model {
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

export class DescribeAppSecuritiesResponseBody extends $tea.Model {
  appSecuritys?: DescribeAppSecuritiesResponseBodyAppSecuritys;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appSecuritys: 'AppSecuritys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSecuritys: DescribeAppSecuritiesResponseBodyAppSecuritys,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppSecuritiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAppSecuritiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppSecuritiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppSecurityRequest extends $tea.Model {
  appKey?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      securityToken: 'string',
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
  appName?: string;
  enableTagAuth?: boolean;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  tag?: DescribeAppsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      enableTagAuth: 'EnableTagAuth',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      enableTagAuth: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': DescribeAppsRequestTag },
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

export class DescribeAppsByApiRequest extends $tea.Model {
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

export class DescribeAppsByApiResponseBody extends $tea.Model {
  appApiRelationInfos?: DescribeAppsByApiResponseBodyAppApiRelationInfos;
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
      appApiRelationInfos: DescribeAppsByApiResponseBodyAppApiRelationInfos,
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

export class DescribeAppsByApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAppsByApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppsByApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsForProviderRequest extends $tea.Model {
  appId?: number;
  appOwnerId?: number;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appOwnerId: 'AppOwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appOwnerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsForProviderResponseBody extends $tea.Model {
  apps?: DescribeAppsForProviderResponseBodyApps;
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
      apps: DescribeAppsForProviderResponseBodyApps,
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

export class DescribeAppsForProviderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAppsForProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppsForProviderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlackListsRequest extends $tea.Model {
  blackType?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      blackType: 'BlackType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlackListsResponseBody extends $tea.Model {
  blackLists?: DescribeBlackListsResponseBodyBlackLists;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      blackLists: 'BlackLists',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackLists: DescribeBlackListsResponseBodyBlackLists,
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

export class DescribeBlackListsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBlackListsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBlackListsResponseBody,
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
  apiId?: string;
  apiName?: string;
  authType?: string;
  bodyFormat?: string;
  constantParameters?: DescribeDeployedApiResponseBodyConstantParameters;
  deployedTime?: string;
  disableInternet?: boolean;
  errorCodeSamples?: DescribeDeployedApiResponseBodyErrorCodeSamples;
  failResultSample?: string;
  forceNonceCheck?: boolean;
  functionComputeConfig?: DescribeDeployedApiResponseBodyFunctionComputeConfig;
  groupId?: string;
  groupName?: string;
  httpMethod?: string;
  httpProtocol?: string;
  path?: string;
  pathParameters?: DescribeDeployedApiResponseBodyPathParameters;
  postBodyDescription?: string;
  postBodyType?: string;
  regionId?: string;
  requestBody?: DescribeDeployedApiResponseBodyRequestBody;
  requestHeaders?: DescribeDeployedApiResponseBodyRequestHeaders;
  requestId?: string;
  requestMode?: string;
  requestQueries?: DescribeDeployedApiResponseBodyRequestQueries;
  resultSample?: string;
  resultType?: string;
  serviceAddress?: string;
  serviceFCEnable?: string;
  serviceProtocol?: string;
  serviceTimeout?: number;
  serviceVpcEnable?: string;
  stageName?: string;
  systemParameters?: DescribeDeployedApiResponseBodySystemParameters;
  visibility?: string;
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      authType: 'AuthType',
      bodyFormat: 'BodyFormat',
      constantParameters: 'ConstantParameters',
      deployedTime: 'DeployedTime',
      disableInternet: 'DisableInternet',
      errorCodeSamples: 'ErrorCodeSamples',
      failResultSample: 'FailResultSample',
      forceNonceCheck: 'ForceNonceCheck',
      functionComputeConfig: 'FunctionComputeConfig',
      groupId: 'GroupId',
      groupName: 'GroupName',
      httpMethod: 'HttpMethod',
      httpProtocol: 'HttpProtocol',
      path: 'Path',
      pathParameters: 'PathParameters',
      postBodyDescription: 'PostBodyDescription',
      postBodyType: 'PostBodyType',
      regionId: 'RegionId',
      requestBody: 'RequestBody',
      requestHeaders: 'RequestHeaders',
      requestId: 'RequestId',
      requestMode: 'RequestMode',
      requestQueries: 'RequestQueries',
      resultSample: 'ResultSample',
      resultType: 'ResultType',
      serviceAddress: 'ServiceAddress',
      serviceFCEnable: 'ServiceFCEnable',
      serviceProtocol: 'ServiceProtocol',
      serviceTimeout: 'ServiceTimeout',
      serviceVpcEnable: 'ServiceVpcEnable',
      stageName: 'StageName',
      systemParameters: 'SystemParameters',
      visibility: 'Visibility',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      authType: 'string',
      bodyFormat: 'string',
      constantParameters: DescribeDeployedApiResponseBodyConstantParameters,
      deployedTime: 'string',
      disableInternet: 'boolean',
      errorCodeSamples: DescribeDeployedApiResponseBodyErrorCodeSamples,
      failResultSample: 'string',
      forceNonceCheck: 'boolean',
      functionComputeConfig: DescribeDeployedApiResponseBodyFunctionComputeConfig,
      groupId: 'string',
      groupName: 'string',
      httpMethod: 'string',
      httpProtocol: 'string',
      path: 'string',
      pathParameters: DescribeDeployedApiResponseBodyPathParameters,
      postBodyDescription: 'string',
      postBodyType: 'string',
      regionId: 'string',
      requestBody: DescribeDeployedApiResponseBodyRequestBody,
      requestHeaders: DescribeDeployedApiResponseBodyRequestHeaders,
      requestId: 'string',
      requestMode: 'string',
      requestQueries: DescribeDeployedApiResponseBodyRequestQueries,
      resultSample: 'string',
      resultType: 'string',
      serviceAddress: 'string',
      serviceFCEnable: 'string',
      serviceProtocol: 'string',
      serviceTimeout: 'number',
      serviceVpcEnable: 'string',
      stageName: 'string',
      systemParameters: DescribeDeployedApiResponseBodySystemParameters,
      visibility: 'string',
      vpcName: 'string',
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

export class DescribeDeployedApisResponseBody extends $tea.Model {
  apiInfos?: DescribeDeployedApisResponseBodyApiInfos;
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
      apiInfos: DescribeDeployedApisResponseBodyApiInfos,
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
  domainBindingStatus?: string;
  domainLegalStatus?: string;
  domainName?: string;
  domainNameResolution?: string;
  domainRemark?: string;
  domainWebSocketStatus?: string;
  groupId?: string;
  privateKey?: string;
  requestId?: string;
  subDomain?: string;
  static names(): { [key: string]: string } {
    return {
      certificateBody: 'CertificateBody',
      certificateId: 'CertificateId',
      certificateName: 'CertificateName',
      domainBindingStatus: 'DomainBindingStatus',
      domainLegalStatus: 'DomainLegalStatus',
      domainName: 'DomainName',
      domainNameResolution: 'DomainNameResolution',
      domainRemark: 'DomainRemark',
      domainWebSocketStatus: 'DomainWebSocketStatus',
      groupId: 'GroupId',
      privateKey: 'PrivateKey',
      requestId: 'RequestId',
      subDomain: 'SubDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateBody: 'string',
      certificateId: 'string',
      certificateName: 'string',
      domainBindingStatus: 'string',
      domainLegalStatus: 'string',
      domainName: 'string',
      domainNameResolution: 'string',
      domainRemark: 'string',
      domainWebSocketStatus: 'string',
      groupId: 'string',
      privateKey: 'string',
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

export class DescribeDomainResolutionRequest extends $tea.Model {
  domainNames?: string;
  groupId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      groupId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResolutionResponseBody extends $tea.Model {
  domainResolutions?: DescribeDomainResolutionResponseBodyDomainResolutions;
  groupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainResolutions: 'DomainResolutions',
      groupId: 'GroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainResolutions: DescribeDomainResolutionResponseBodyDomainResolutions,
      groupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResolutionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainResolutionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainResolutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryApiRequest extends $tea.Model {
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

export class DescribeHistoryApiResponseBody extends $tea.Model {
  allowSignatureMethod?: string;
  apiId?: string;
  apiName?: string;
  authType?: string;
  bodyFormat?: string;
  constantParameters?: DescribeHistoryApiResponseBodyConstantParameters;
  customSystemParameters?: DescribeHistoryApiResponseBodyCustomSystemParameters;
  deployedTime?: string;
  description?: string;
  errorCodeSamples?: DescribeHistoryApiResponseBodyErrorCodeSamples;
  failResultSample?: string;
  functionComputeConfig?: DescribeHistoryApiResponseBodyFunctionComputeConfig;
  groupId?: string;
  groupName?: string;
  historyVersion?: string;
  httpMethod?: string;
  httpProtocol?: string;
  mock?: string;
  mockResult?: string;
  openIdConnectConfig?: DescribeHistoryApiResponseBodyOpenIdConnectConfig;
  originResultDescription?: string;
  path?: string;
  pathParameters?: DescribeHistoryApiResponseBodyPathParameters;
  postBodyDescription?: string;
  postBodyType?: string;
  regionId?: string;
  requestBody?: DescribeHistoryApiResponseBodyRequestBody;
  requestHeaders?: DescribeHistoryApiResponseBodyRequestHeaders;
  requestId?: string;
  requestMode?: string;
  requestQueries?: DescribeHistoryApiResponseBodyRequestQueries;
  resultSample?: string;
  resultType?: string;
  serviceAddress?: string;
  serviceFCEnable?: string;
  serviceProtocol?: string;
  serviceTimeout?: number;
  serviceVpcEnable?: string;
  status?: string;
  systemParameters?: DescribeHistoryApiResponseBodySystemParameters;
  visibility?: string;
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      allowSignatureMethod: 'AllowSignatureMethod',
      apiId: 'ApiId',
      apiName: 'ApiName',
      authType: 'AuthType',
      bodyFormat: 'BodyFormat',
      constantParameters: 'ConstantParameters',
      customSystemParameters: 'CustomSystemParameters',
      deployedTime: 'DeployedTime',
      description: 'Description',
      errorCodeSamples: 'ErrorCodeSamples',
      failResultSample: 'FailResultSample',
      functionComputeConfig: 'FunctionComputeConfig',
      groupId: 'GroupId',
      groupName: 'GroupName',
      historyVersion: 'HistoryVersion',
      httpMethod: 'HttpMethod',
      httpProtocol: 'HttpProtocol',
      mock: 'Mock',
      mockResult: 'MockResult',
      openIdConnectConfig: 'OpenIdConnectConfig',
      originResultDescription: 'OriginResultDescription',
      path: 'Path',
      pathParameters: 'PathParameters',
      postBodyDescription: 'PostBodyDescription',
      postBodyType: 'PostBodyType',
      regionId: 'RegionId',
      requestBody: 'RequestBody',
      requestHeaders: 'RequestHeaders',
      requestId: 'RequestId',
      requestMode: 'RequestMode',
      requestQueries: 'RequestQueries',
      resultSample: 'ResultSample',
      resultType: 'ResultType',
      serviceAddress: 'ServiceAddress',
      serviceFCEnable: 'ServiceFCEnable',
      serviceProtocol: 'ServiceProtocol',
      serviceTimeout: 'ServiceTimeout',
      serviceVpcEnable: 'ServiceVpcEnable',
      status: 'Status',
      systemParameters: 'SystemParameters',
      visibility: 'Visibility',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowSignatureMethod: 'string',
      apiId: 'string',
      apiName: 'string',
      authType: 'string',
      bodyFormat: 'string',
      constantParameters: DescribeHistoryApiResponseBodyConstantParameters,
      customSystemParameters: DescribeHistoryApiResponseBodyCustomSystemParameters,
      deployedTime: 'string',
      description: 'string',
      errorCodeSamples: DescribeHistoryApiResponseBodyErrorCodeSamples,
      failResultSample: 'string',
      functionComputeConfig: DescribeHistoryApiResponseBodyFunctionComputeConfig,
      groupId: 'string',
      groupName: 'string',
      historyVersion: 'string',
      httpMethod: 'string',
      httpProtocol: 'string',
      mock: 'string',
      mockResult: 'string',
      openIdConnectConfig: DescribeHistoryApiResponseBodyOpenIdConnectConfig,
      originResultDescription: 'string',
      path: 'string',
      pathParameters: DescribeHistoryApiResponseBodyPathParameters,
      postBodyDescription: 'string',
      postBodyType: 'string',
      regionId: 'string',
      requestBody: DescribeHistoryApiResponseBodyRequestBody,
      requestHeaders: DescribeHistoryApiResponseBodyRequestHeaders,
      requestId: 'string',
      requestMode: 'string',
      requestQueries: DescribeHistoryApiResponseBodyRequestQueries,
      resultSample: 'string',
      resultType: 'string',
      serviceAddress: 'string',
      serviceFCEnable: 'string',
      serviceProtocol: 'string',
      serviceTimeout: 'number',
      serviceVpcEnable: 'string',
      status: 'string',
      systemParameters: DescribeHistoryApiResponseBodySystemParameters,
      visibility: 'string',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeHistoryApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeHistoryApiResponseBody,
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

export class DescribeHistoryApisResponseBody extends $tea.Model {
  apiInfos?: DescribeHistoryApisResponseBodyApiInfos;
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
      apiInfos: DescribeHistoryApisResponseBodyApiInfos,
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

export class DescribePurchasedApiRequest extends $tea.Model {
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

export class DescribePurchasedApiResponseBody extends $tea.Model {
  apiId?: string;
  apiName?: string;
  bodyFormat?: string;
  createdTime?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  httpMethod?: string;
  httpProtocol?: string;
  mock?: string;
  mockResult?: string;
  modifiedTime?: string;
  path?: string;
  pathParameters?: DescribePurchasedApiResponseBodyPathParameters;
  postBodyDescription?: string;
  postBodyType?: string;
  regionId?: string;
  requestBody?: DescribePurchasedApiResponseBodyRequestBody;
  requestHeaders?: DescribePurchasedApiResponseBodyRequestHeaders;
  requestId?: string;
  requestQueries?: DescribePurchasedApiResponseBodyRequestQueries;
  resultSample?: string;
  resultType?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      bodyFormat: 'BodyFormat',
      createdTime: 'CreatedTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      httpMethod: 'HttpMethod',
      httpProtocol: 'HttpProtocol',
      mock: 'Mock',
      mockResult: 'MockResult',
      modifiedTime: 'ModifiedTime',
      path: 'Path',
      pathParameters: 'PathParameters',
      postBodyDescription: 'PostBodyDescription',
      postBodyType: 'PostBodyType',
      regionId: 'RegionId',
      requestBody: 'RequestBody',
      requestHeaders: 'RequestHeaders',
      requestId: 'RequestId',
      requestQueries: 'RequestQueries',
      resultSample: 'ResultSample',
      resultType: 'ResultType',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      bodyFormat: 'string',
      createdTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      httpMethod: 'string',
      httpProtocol: 'string',
      mock: 'string',
      mockResult: 'string',
      modifiedTime: 'string',
      path: 'string',
      pathParameters: DescribePurchasedApiResponseBodyPathParameters,
      postBodyDescription: 'string',
      postBodyType: 'string',
      regionId: 'string',
      requestBody: DescribePurchasedApiResponseBodyRequestBody,
      requestHeaders: DescribePurchasedApiResponseBodyRequestHeaders,
      requestId: 'string',
      requestQueries: DescribePurchasedApiResponseBodyRequestQueries,
      resultSample: 'string',
      resultType: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePurchasedApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePurchasedApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiGroupDetailRequest extends $tea.Model {
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

export class DescribePurchasedApiGroupDetailResponseBody extends $tea.Model {
  createdTime?: string;
  description?: string;
  domainItems?: DescribePurchasedApiGroupDetailResponseBodyDomainItems;
  groupId?: string;
  groupName?: string;
  modifiedTime?: string;
  regionId?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      domainItems: 'DomainItems',
      groupId: 'GroupId',
      groupName: 'GroupName',
      modifiedTime: 'ModifiedTime',
      regionId: 'RegionId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      domainItems: DescribePurchasedApiGroupDetailResponseBodyDomainItems,
      groupId: 'string',
      groupName: 'string',
      modifiedTime: 'string',
      regionId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiGroupDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePurchasedApiGroupDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePurchasedApiGroupDetailResponseBody,
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
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApisResponseBody extends $tea.Model {
  apiInfos?: DescribePurchasedApisResponseBodyApiInfos;
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
      apiInfos: DescribePurchasedApisResponseBodyApiInfos,
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

export class DescribeRaceWorkForInnerRequest extends $tea.Model {
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

export class DescribeRaceWorkForInnerResponseBody extends $tea.Model {
  commodityCode?: string;
  createTime?: string;
  groupId?: string;
  keywords?: string;
  logoUrl?: string;
  modifiedTime?: string;
  requestId?: string;
  shortDescription?: string;
  workName?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      groupId: 'GroupId',
      keywords: 'Keywords',
      logoUrl: 'LogoUrl',
      modifiedTime: 'ModifiedTime',
      requestId: 'RequestId',
      shortDescription: 'ShortDescription',
      workName: 'WorkName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      createTime: 'string',
      groupId: 'string',
      keywords: 'string',
      logoUrl: 'string',
      modifiedTime: 'string',
      requestId: 'string',
      shortDescription: 'string',
      workName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRaceWorkForInnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRaceWorkForInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRaceWorkForInnerResponseBody,
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

export class DescribeRulesByApiRequest extends $tea.Model {
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

export class DescribeRulesByApiResponseBody extends $tea.Model {
  requestId?: string;
  rules?: DescribeRulesByApiResponseBodyRules;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rules: DescribeRulesByApiResponseBodyRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRulesByApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRulesByApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRulesByApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecretKeysRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  secretKeyId?: string;
  secretKeyName?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      secretKeyId: 'SecretKeyId',
      secretKeyName: 'SecretKeyName',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      secretKeyId: 'string',
      secretKeyName: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecretKeysResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  secretKeys?: DescribeSecretKeysResponseBodySecretKeys;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      secretKeys: 'SecretKeys',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      secretKeys: DescribeSecretKeysResponseBodySecretKeys,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecretKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSecretKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSecretKeysResponseBody,
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
  systemParameters?: DescribeSystemParametersResponseBodySystemParameters;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      systemParameters: 'SystemParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      systemParameters: DescribeSystemParametersResponseBodySystemParameters,
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

export class DescribeSystemParamsRequest extends $tea.Model {
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

export class DescribeSystemParamsResponseBody extends $tea.Model {
  requestId?: string;
  systemParams?: DescribeSystemParamsResponseBodySystemParams;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      systemParams: 'SystemParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      systemParams: DescribeSystemParamsResponseBodySystemParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemParamsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSystemParamsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSystemParamsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficControlsRequest extends $tea.Model {
  apiUid?: string;
  groupId?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  stageName?: string;
  trafficControlId?: string;
  trafficControlName?: string;
  static names(): { [key: string]: string } {
    return {
      apiUid: 'ApiUid',
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
      apiUid: 'string',
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

export class ExportSwaggerRequest extends $tea.Model {
  apiUid?: string;
  dataFormat?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      apiUid: 'ApiUid',
      dataFormat: 'DataFormat',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiUid: 'string',
      dataFormat: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportSwaggerResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportSwaggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ExportSwaggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportSwaggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiMethodsRequest extends $tea.Model {
  apiPath?: string;
  groupId?: string;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiPath: 'ApiPath',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiPath: 'string',
      groupId: 'string',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiMethodsResponseBody extends $tea.Model {
  methods?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      methods: 'Methods',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      methods: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiMethodsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetApiMethodsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetApiMethodsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomizedInfoRequest extends $tea.Model {
  apiId?: string;
  apiName?: string;
  groupId?: string;
  securityToken?: string;
  stageId?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageId: 'StageId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      groupId: 'string',
      securityToken: 'string',
      stageId: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomizedInfoResponseBody extends $tea.Model {
  requestId?: string;
  sdkDemos?: GetCustomizedInfoResponseBodySdkDemos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sdkDemos: 'SdkDemos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sdkDemos: GetCustomizedInfoResponseBodySdkDemos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomizedInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCustomizedInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCustomizedInfoResponseBody,
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
  groupId?: string;
  overwrite?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      dataFormat: 'DataFormat',
      dryRun: 'DryRun',
      groupId: 'GroupId',
      overwrite: 'Overwrite',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      dataFormat: 'string',
      dryRun: 'boolean',
      groupId: 'string',
      overwrite: 'boolean',
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

export class ModifyApiRequest extends $tea.Model {
  allowSignatureMethod?: string;
  apiId?: string;
  apiName?: string;
  appCodeAuthType?: string;
  authType?: string;
  description?: string;
  disableInternet?: boolean;
  errorCodeSamples?: string;
  failResultSample?: string;
  forceNonceCheck?: boolean;
  groupId?: string;
  openIdConnectConfig?: string;
  requestConfig?: string;
  requestParamters?: string;
  resultBodyModel?: string;
  resultDescriptions?: string;
  resultSample?: string;
  resultType?: string;
  securityToken?: string;
  serviceConfig?: string;
  serviceParameters?: string;
  serviceParametersMap?: string;
  visibility?: string;
  webSocketApiType?: string;
  static names(): { [key: string]: string } {
    return {
      allowSignatureMethod: 'AllowSignatureMethod',
      apiId: 'ApiId',
      apiName: 'ApiName',
      appCodeAuthType: 'AppCodeAuthType',
      authType: 'AuthType',
      description: 'Description',
      disableInternet: 'DisableInternet',
      errorCodeSamples: 'ErrorCodeSamples',
      failResultSample: 'FailResultSample',
      forceNonceCheck: 'ForceNonceCheck',
      groupId: 'GroupId',
      openIdConnectConfig: 'OpenIdConnectConfig',
      requestConfig: 'RequestConfig',
      requestParamters: 'RequestParamters',
      resultBodyModel: 'ResultBodyModel',
      resultDescriptions: 'ResultDescriptions',
      resultSample: 'ResultSample',
      resultType: 'ResultType',
      securityToken: 'SecurityToken',
      serviceConfig: 'ServiceConfig',
      serviceParameters: 'ServiceParameters',
      serviceParametersMap: 'ServiceParametersMap',
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
      description: 'string',
      disableInternet: 'boolean',
      errorCodeSamples: 'string',
      failResultSample: 'string',
      forceNonceCheck: 'boolean',
      groupId: 'string',
      openIdConnectConfig: 'string',
      requestConfig: 'string',
      requestParamters: 'string',
      resultBodyModel: 'string',
      resultDescriptions: 'string',
      resultSample: 'string',
      resultType: 'string',
      securityToken: 'string',
      serviceConfig: 'string',
      serviceParameters: 'string',
      serviceParametersMap: 'string',
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

export class ModifyApiGroupRequest extends $tea.Model {
  compatibleFlags?: string;
  customTraceConfig?: string;
  defaultDomain?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  passthroughHeaders?: string;
  rpcPattern?: string;
  securityToken?: string;
  userLogConfig?: string;
  static names(): { [key: string]: string } {
    return {
      compatibleFlags: 'CompatibleFlags',
      customTraceConfig: 'CustomTraceConfig',
      defaultDomain: 'DefaultDomain',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      passthroughHeaders: 'PassthroughHeaders',
      rpcPattern: 'RpcPattern',
      securityToken: 'SecurityToken',
      userLogConfig: 'UserLogConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compatibleFlags: 'string',
      customTraceConfig: 'string',
      defaultDomain: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      passthroughHeaders: 'string',
      rpcPattern: 'string',
      securityToken: 'string',
      userLogConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiGroupResponseBody extends $tea.Model {
  description?: string;
  groupId?: string;
  groupName?: string;
  requestId?: string;
  subDomain?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      requestId: 'RequestId',
      subDomain: 'SubDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ModifyAppRequest extends $tea.Model {
  appId?: number;
  appName?: string;
  description?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      description: 'Description',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      description: 'string',
      securityToken: 'string',
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

export class ModifyInstanceAttributeRequest extends $tea.Model {
  httpsPolicy?: string;
  instanceId?: string;
  instanceName?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      httpsPolicy: 'HttpsPolicy',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpsPolicy: 'string',
      instanceId: 'string',
      instanceName: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAttributeResponseBody extends $tea.Model {
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

export class ModifyInstanceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyInstanceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyInstanceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceVpcAttributeRequest extends $tea.Model {
  instanceId?: string;
  token?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      token: 'Token',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      token: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceVpcAttributeResponseBody extends $tea.Model {
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

export class ModifyInstanceVpcAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyInstanceVpcAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyInstanceVpcAttributeResponseBody,
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

export class ModifySecretKeyRequest extends $tea.Model {
  secretKey?: string;
  secretKeyId?: string;
  secretKeyName?: string;
  secretValue?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      secretKey: 'SecretKey',
      secretKeyId: 'SecretKeyId',
      secretKeyName: 'SecretKeyName',
      secretValue: 'SecretValue',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretKey: 'string',
      secretKeyId: 'string',
      secretKeyName: 'string',
      secretValue: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecretKeyResponseBody extends $tea.Model {
  requestId?: string;
  secretKeyId?: string;
  secretKeyName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      secretKeyId: 'SecretKeyId',
      secretKeyName: 'SecretKeyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      secretKeyId: 'string',
      secretKeyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecretKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySecretKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifySecretKeyResponseBody,
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

export class RecoverApiFromHistoricalRequest extends $tea.Model {
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

export class RecoverApiFromHistoricalResponseBody extends $tea.Model {
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

export class RecoverApiFromHistoricalResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecoverApiFromHistoricalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecoverApiFromHistoricalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoveryApiDefineFromHistoricalRequest extends $tea.Model {
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

export class RecoveryApiDefineFromHistoricalResponseBody extends $tea.Model {
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

export class RecoveryApiDefineFromHistoricalResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecoveryApiDefineFromHistoricalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecoveryApiDefineFromHistoricalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoveryApiFromHistoricalRequest extends $tea.Model {
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

export class RecoveryApiFromHistoricalResponseBody extends $tea.Model {
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

export class RecoveryApiFromHistoricalResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecoveryApiFromHistoricalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecoveryApiFromHistoricalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDomainRequest extends $tea.Model {
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

export class RefreshDomainResponseBody extends $tea.Model {
  certificateId?: string;
  certificateName?: string;
  domainName?: string;
  domainNameResolution?: string;
  domainStatus?: string;
  groupId?: string;
  requestId?: string;
  subDomain?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      certificateName: 'CertificateName',
      domainName: 'DomainName',
      domainNameResolution: 'DomainNameResolution',
      domainStatus: 'DomainStatus',
      groupId: 'GroupId',
      requestId: 'RequestId',
      subDomain: 'SubDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      certificateName: 'string',
      domainName: 'string',
      domainNameResolution: 'string',
      domainStatus: 'string',
      groupId: 'string',
      requestId: 'string',
      subDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RefreshDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefreshDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAccessPermissionByApisRequest extends $tea.Model {
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

export class RemoveAccessPermissionByApisResponseBody extends $tea.Model {
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

export class RemoveAccessPermissionByApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveAccessPermissionByApisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveAccessPermissionByApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAccessPermissionByAppsRequest extends $tea.Model {
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

export class RemoveAccessPermissionByAppsResponseBody extends $tea.Model {
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

export class RemoveAccessPermissionByAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveAccessPermissionByAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveAccessPermissionByAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAllBlackListRequest extends $tea.Model {
  blackType?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      blackType: 'BlackType',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackType: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAllBlackListResponseBody extends $tea.Model {
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

export class RemoveAllBlackListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveAllBlackListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveAllBlackListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveApiRuleRequest extends $tea.Model {
  apiIds?: string;
  groupId?: string;
  ruleId?: string;
  ruleType?: string;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiIds: 'ApiIds',
      groupId: 'GroupId',
      ruleId: 'RuleId',
      ruleType: 'RuleType',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIds: 'string',
      groupId: 'string',
      ruleId: 'string',
      ruleType: 'string',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveApiRuleResponseBody extends $tea.Model {
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

export class RemoveApiRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveApiRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveApiRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBlackListRequest extends $tea.Model {
  blackContent?: string;
  blackType?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      blackContent: 'BlackContent',
      blackType: 'BlackType',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackContent: 'string',
      blackType: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBlackListResponseBody extends $tea.Model {
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

export class RemoveBlackListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveBlackListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveBlackListResponseBody,
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

export class ResetAppKeySecretRequest extends $tea.Model {
  appKey?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAppKeySecretResponseBody extends $tea.Model {
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

export class ResetAppKeySecretResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResetAppKeySecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetAppKeySecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetCustomizedRequest extends $tea.Model {
  apiId?: string;
  apiName?: string;
  groupId?: string;
  securityToken?: string;
  stageId?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageId: 'StageId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      groupId: 'string',
      securityToken: 'string',
      stageId: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetCustomizedResponseBody extends $tea.Model {
  requestId?: string;
  sdkDemos?: ResetCustomizedResponseBodySdkDemos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sdkDemos: 'SdkDemos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sdkDemos: ResetCustomizedResponseBodySdkDemos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetCustomizedResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResetCustomizedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetCustomizedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdkGenerateRequest extends $tea.Model {
  appId?: number;
  groupId?: string;
  language?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      groupId: 'GroupId',
      language: 'Language',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      groupId: 'string',
      language: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdkGenerateResponseBody extends $tea.Model {
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

export class SdkGenerateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SdkGenerateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SdkGenerateResponseBody,
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

export class SetAccessPermissionByApisRequest extends $tea.Model {
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

export class SetAccessPermissionByApisResponseBody extends $tea.Model {
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

export class SetAccessPermissionByApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetAccessPermissionByApisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetAccessPermissionByApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAccessPermissionsRequest extends $tea.Model {
  apiId?: string;
  appIds?: string;
  description?: string;
  groupId?: string;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      appIds: 'AppIds',
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

export class SetAccessPermissionsResponseBody extends $tea.Model {
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

export class SetAccessPermissionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetAccessPermissionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetAccessPermissionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApiRuleRequest extends $tea.Model {
  apiIds?: string;
  groupId?: string;
  ruleId?: string;
  ruleType?: string;
  securityToken?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiIds: 'ApiIds',
      groupId: 'GroupId',
      ruleId: 'RuleId',
      ruleType: 'RuleType',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIds: 'string',
      groupId: 'string',
      ruleId: 'string',
      ruleType: 'string',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApiRuleResponseBody extends $tea.Model {
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

export class SetApiRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetApiRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetApiRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainRequest extends $tea.Model {
  bindStageName?: string;
  certificateBody?: string;
  certificateName?: string;
  domainName?: string;
  groupId?: string;
  isForce?: boolean;
  privateKey?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      bindStageName: 'BindStageName',
      certificateBody: 'CertificateBody',
      certificateName: 'CertificateName',
      domainName: 'DomainName',
      groupId: 'GroupId',
      isForce: 'IsForce',
      privateKey: 'PrivateKey',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindStageName: 'string',
      certificateBody: 'string',
      certificateName: 'string',
      domainName: 'string',
      groupId: 'string',
      isForce: 'boolean',
      privateKey: 'string',
      securityToken: 'string',
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
  domainName?: string;
  groupId?: string;
  privateKey?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      caCertificateBody: 'CaCertificateBody',
      certificateBody: 'CertificateBody',
      certificateName: 'CertificateName',
      domainName: 'DomainName',
      groupId: 'GroupId',
      privateKey: 'PrivateKey',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertificateBody: 'string',
      certificateBody: 'string',
      certificateName: 'string',
      domainName: 'string',
      groupId: 'string',
      privateKey: 'string',
      securityToken: 'string',
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
  static names(): { [key: string]: string } {
    return {
      actionValue: 'ActionValue',
      domainName: 'DomainName',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionValue: 'string',
      domainName: 'string',
      groupId: 'string',
      securityToken: 'string',
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

export class SetMockIntegrationRequest extends $tea.Model {
  apiId?: string;
  groupId?: string;
  mock?: string;
  mockResult?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      mock: 'Mock',
      mockResult: 'MockResult',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      mock: 'string',
      mockResult: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMockIntegrationResponseBody extends $tea.Model {
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

export class SetMockIntegrationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetMockIntegrationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetMockIntegrationResponseBody,
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

export class VpcDescribeAccessesRequest extends $tea.Model {
  instanceId?: string;
  instancePort?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instancePort: 'InstancePort',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instancePort: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VpcDescribeAccessesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  vpcAccessAttributes?: VpcDescribeAccessesResponseBodyVpcAccessAttributes;
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
      vpcAccessAttributes: VpcDescribeAccessesResponseBodyVpcAccessAttributes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VpcDescribeAccessesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VpcDescribeAccessesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VpcDescribeAccessesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VpcGrantAccessRequest extends $tea.Model {
  instanceId?: string;
  instancePort?: string;
  name?: string;
  securityToken?: string;
  token?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instancePort: 'InstancePort',
      name: 'Name',
      securityToken: 'SecurityToken',
      token: 'Token',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instancePort: 'string',
      name: 'string',
      securityToken: 'string',
      token: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VpcGrantAccessResponseBody extends $tea.Model {
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

export class VpcGrantAccessResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VpcGrantAccessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VpcGrantAccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VpcModifyAccessRequest extends $tea.Model {
  instanceId?: string;
  instancePort?: string;
  securityToken?: string;
  token?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instancePort: 'InstancePort',
      securityToken: 'SecurityToken',
      token: 'Token',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instancePort: 'string',
      securityToken: 'string',
      token: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VpcModifyAccessResponseBody extends $tea.Model {
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

export class VpcModifyAccessResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VpcModifyAccessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VpcModifyAccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VpcRevokeAccessRequest extends $tea.Model {
  instanceId?: string;
  instancePort?: string;
  securityToken?: string;
  token?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instancePort: 'InstancePort',
      securityToken: 'SecurityToken',
      token: 'Token',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instancePort: 'string',
      securityToken: 'string',
      token: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VpcRevokeAccessResponseBody extends $tea.Model {
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

export class VpcRevokeAccessResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VpcRevokeAccessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VpcRevokeAccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpControlRequestIpControlPolicys extends $tea.Model {
  appId?: string;
  IP?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      IP: 'IP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      IP: 'string',
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

export class DescribeApiResponseBodyParametersMapObjectServiceParameterMap extends $tea.Model {
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

export class DescribeApiResponseBodyParametersMapObject extends $tea.Model {
  serviceParameterMap?: DescribeApiResponseBodyParametersMapObjectServiceParameterMap[];
  static names(): { [key: string]: string } {
    return {
      serviceParameterMap: 'ServiceParameterMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceParameterMap: { 'type': 'array', 'itemType': DescribeApiResponseBodyParametersMapObjectServiceParameterMap },
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

export class DescribeApiResponseBodyRequestParametersObjectRequestParam extends $tea.Model {
  apiParameterName?: string;
  arrayItemsType?: string;
  defaultValue?: string;
  demoValue?: string;
  description?: string;
  docOrder?: string;
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
      docOrder: 'string',
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

export class DescribeApiResponseBodyRequestParametersObject extends $tea.Model {
  requestParam?: DescribeApiResponseBodyRequestParametersObjectRequestParam[];
  static names(): { [key: string]: string } {
    return {
      requestParam: 'RequestParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParam: { 'type': 'array', 'itemType': DescribeApiResponseBodyRequestParametersObjectRequestParam },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyServiceConfigFunctionComputeConfig extends $tea.Model {
  fcRegionId?: string;
  functionName?: string;
  qualifier?: string;
  roleArn?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      fcRegionId: 'FcRegionId',
      functionName: 'FunctionName',
      qualifier: 'Qualifier',
      roleArn: 'RoleArn',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fcRegionId: 'string',
      functionName: 'string',
      qualifier: 'string',
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

export class DescribeApiResponseBodyServiceConfigVpcConfig extends $tea.Model {
  id?: string;
  instanceId?: string;
  name?: string;
  port?: number;
  vpcId?: string;
  vpcScheme?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      instanceId: 'InstanceId',
      name: 'Name',
      port: 'Port',
      vpcId: 'VpcId',
      vpcScheme: 'VpcScheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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
  functionComputeConfig?: DescribeApiResponseBodyServiceConfigFunctionComputeConfig;
  innerServiceInfo?: string;
  innerServiceType?: string;
  mock?: string;
  mockHeaders?: DescribeApiResponseBodyServiceConfigMockHeaders;
  mockResult?: string;
  mockStatusCode?: number;
  serviceAddress?: string;
  serviceHttpMethod?: string;
  servicePath?: string;
  serviceProtocol?: string;
  serviceTimeout?: string;
  serviceVpcEnable?: string;
  vpcConfig?: DescribeApiResponseBodyServiceConfigVpcConfig;
  static names(): { [key: string]: string } {
    return {
      aoneAppName: 'AoneAppName',
      contentTypeCatagory: 'ContentTypeCatagory',
      contentTypeValue: 'ContentTypeValue',
      functionComputeConfig: 'FunctionComputeConfig',
      innerServiceInfo: 'InnerServiceInfo',
      innerServiceType: 'InnerServiceType',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      aoneAppName: 'string',
      contentTypeCatagory: 'string',
      contentTypeValue: 'string',
      functionComputeConfig: DescribeApiResponseBodyServiceConfigFunctionComputeConfig,
      innerServiceInfo: 'string',
      innerServiceType: 'string',
      mock: 'string',
      mockHeaders: DescribeApiResponseBodyServiceConfigMockHeaders,
      mockResult: 'string',
      mockStatusCode: 'number',
      serviceAddress: 'string',
      serviceHttpMethod: 'string',
      servicePath: 'string',
      serviceProtocol: 'string',
      serviceTimeout: 'string',
      serviceVpcEnable: 'string',
      vpcConfig: DescribeApiResponseBodyServiceConfigVpcConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyServiceParametersObjectServiceParam extends $tea.Model {
  location?: string;
  serviceParameterName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      serviceParameterName: 'ServiceParameterName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: 'string',
      serviceParameterName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyServiceParametersObject extends $tea.Model {
  serviceParam?: DescribeApiResponseBodyServiceParametersObjectServiceParam[];
  static names(): { [key: string]: string } {
    return {
      serviceParam: 'ServiceParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceParam: { 'type': 'array', 'itemType': DescribeApiResponseBodyServiceParametersObjectServiceParam },
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

export class DescribeApiDocResponseBodyPathParametersPathParameter extends $tea.Model {
  apiParameterName?: string;
  demoValue?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      apiParameterName: 'ApiParameterName',
      demoValue: 'DemoValue',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiParameterName: 'string',
      demoValue: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiDocResponseBodyPathParameters extends $tea.Model {
  pathParameter?: DescribeApiDocResponseBodyPathParametersPathParameter[];
  static names(): { [key: string]: string } {
    return {
      pathParameter: 'PathParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pathParameter: { 'type': 'array', 'itemType': DescribeApiDocResponseBodyPathParametersPathParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiDocResponseBodyRequestBodyRequestParam extends $tea.Model {
  apiParameterName?: string;
  arrayItemsType?: string;
  defaultValue?: string;
  demoValue?: string;
  description?: string;
  enumValue?: string;
  jsonScheme?: string;
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
      enumValue: 'EnumValue',
      jsonScheme: 'JsonScheme',
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
      enumValue: 'string',
      jsonScheme: 'string',
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

export class DescribeApiDocResponseBodyRequestBody extends $tea.Model {
  requestParam?: DescribeApiDocResponseBodyRequestBodyRequestParam[];
  static names(): { [key: string]: string } {
    return {
      requestParam: 'RequestParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParam: { 'type': 'array', 'itemType': DescribeApiDocResponseBodyRequestBodyRequestParam },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiDocResponseBodyRequestHeadersRequestParam extends $tea.Model {
  apiParameterName?: string;
  arrayItemsType?: string;
  defaultValue?: string;
  demoValue?: string;
  description?: string;
  enumValue?: string;
  jsonScheme?: string;
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
      enumValue: 'EnumValue',
      jsonScheme: 'JsonScheme',
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
      enumValue: 'string',
      jsonScheme: 'string',
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

export class DescribeApiDocResponseBodyRequestHeaders extends $tea.Model {
  requestParam?: DescribeApiDocResponseBodyRequestHeadersRequestParam[];
  static names(): { [key: string]: string } {
    return {
      requestParam: 'RequestParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParam: { 'type': 'array', 'itemType': DescribeApiDocResponseBodyRequestHeadersRequestParam },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiDocResponseBodyRequestQueriesRequestParam extends $tea.Model {
  apiParameterName?: string;
  arrayItemsType?: string;
  defaultValue?: string;
  demoValue?: string;
  description?: string;
  enumValue?: string;
  jsonScheme?: string;
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
      enumValue: 'EnumValue',
      jsonScheme: 'JsonScheme',
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
      enumValue: 'string',
      jsonScheme: 'string',
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

export class DescribeApiDocResponseBodyRequestQueries extends $tea.Model {
  requestParam?: DescribeApiDocResponseBodyRequestQueriesRequestParam[];
  static names(): { [key: string]: string } {
    return {
      requestParam: 'RequestParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParam: { 'type': 'array', 'itemType': DescribeApiDocResponseBodyRequestQueriesRequestParam },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiDocsResponseBodyApiInfosApiInfo extends $tea.Model {
  apiId?: string;
  apiName?: string;
  deployedTime?: string;
  description?: string;
  groupDescription?: string;
  groupId?: string;
  groupName?: string;
  regionId?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      deployedTime: 'DeployedTime',
      description: 'Description',
      groupDescription: 'GroupDescription',
      groupId: 'GroupId',
      groupName: 'GroupName',
      regionId: 'RegionId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      deployedTime: 'string',
      description: 'string',
      groupDescription: 'string',
      groupId: 'string',
      groupName: 'string',
      regionId: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiDocsResponseBodyApiInfos extends $tea.Model {
  apiInfo?: DescribeApiDocsResponseBodyApiInfosApiInfo[];
  static names(): { [key: string]: string } {
    return {
      apiInfo: 'ApiInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfo: { 'type': 'array', 'itemType': DescribeApiDocsResponseBodyApiInfosApiInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiErrorResponseBodyClientErrorsClientError extends $tea.Model {
  time?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiErrorResponseBodyClientErrors extends $tea.Model {
  clientError?: DescribeApiErrorResponseBodyClientErrorsClientError[];
  static names(): { [key: string]: string } {
    return {
      clientError: 'ClientError',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientError: { 'type': 'array', 'itemType': DescribeApiErrorResponseBodyClientErrorsClientError },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiErrorResponseBodyServerErrorsServerError extends $tea.Model {
  time?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiErrorResponseBodyServerErrors extends $tea.Model {
  serverError?: DescribeApiErrorResponseBodyServerErrorsServerError[];
  static names(): { [key: string]: string } {
    return {
      serverError: 'ServerError',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverError: { 'type': 'array', 'itemType': DescribeApiErrorResponseBodyServerErrorsServerError },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupDetailResponseBodyDomainItemsDomainItem extends $tea.Model {
  bindStageName?: string;
  certificateId?: string;
  certificateName?: string;
  domainBindingStatus?: string;
  domainLegalStatus?: string;
  domainName?: string;
  domainNameResolution?: string;
  domainRemark?: string;
  domainWebSocketStatus?: string;
  wildcardDomainPatterns?: string;
  static names(): { [key: string]: string } {
    return {
      bindStageName: 'BindStageName',
      certificateId: 'CertificateId',
      certificateName: 'CertificateName',
      domainBindingStatus: 'DomainBindingStatus',
      domainLegalStatus: 'DomainLegalStatus',
      domainName: 'DomainName',
      domainNameResolution: 'DomainNameResolution',
      domainRemark: 'DomainRemark',
      domainWebSocketStatus: 'DomainWebSocketStatus',
      wildcardDomainPatterns: 'WildcardDomainPatterns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindStageName: 'string',
      certificateId: 'string',
      certificateName: 'string',
      domainBindingStatus: 'string',
      domainLegalStatus: 'string',
      domainName: 'string',
      domainNameResolution: 'string',
      domainRemark: 'string',
      domainWebSocketStatus: 'string',
      wildcardDomainPatterns: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupDetailResponseBodyDomainItems extends $tea.Model {
  domainItem?: DescribeApiGroupDetailResponseBodyDomainItemsDomainItem[];
  static names(): { [key: string]: string } {
    return {
      domainItem: 'DomainItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainItem: { 'type': 'array', 'itemType': DescribeApiGroupDetailResponseBodyDomainItemsDomainItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupDetailResponseBodyStageItemsStageInfo extends $tea.Model {
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

export class DescribeApiGroupDetailResponseBodyStageItems extends $tea.Model {
  stageInfo?: DescribeApiGroupDetailResponseBodyStageItemsStageInfo[];
  static names(): { [key: string]: string } {
    return {
      stageInfo: 'StageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stageInfo: { 'type': 'array', 'itemType': DescribeApiGroupDetailResponseBodyStageItemsStageInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupDetailForConsumerResponseBodyDomainItemsDomainItem extends $tea.Model {
  certificateId?: string;
  certificateName?: string;
  domainName?: string;
  domainNameResolution?: string;
  domainStatus?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      certificateName: 'CertificateName',
      domainName: 'DomainName',
      domainNameResolution: 'DomainNameResolution',
      domainStatus: 'DomainStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      certificateName: 'string',
      domainName: 'string',
      domainNameResolution: 'string',
      domainStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupDetailForConsumerResponseBodyDomainItems extends $tea.Model {
  domainItem?: DescribeApiGroupDetailForConsumerResponseBodyDomainItemsDomainItem[];
  static names(): { [key: string]: string } {
    return {
      domainItem: 'DomainItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainItem: { 'type': 'array', 'itemType': DescribeApiGroupDetailForConsumerResponseBodyDomainItemsDomainItem },
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

export class DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttribute extends $tea.Model {
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
  trafficLimit?: number;
  static names(): { [key: string]: string } {
    return {
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
      trafficLimit: 'TrafficLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeApiLatencyResponseBodyLatencysLatency extends $tea.Model {
  time?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiLatencyResponseBodyLatencys extends $tea.Model {
  latency?: DescribeApiLatencyResponseBodyLatencysLatency[];
  static names(): { [key: string]: string } {
    return {
      latency: 'Latency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latency: { 'type': 'array', 'itemType': DescribeApiLatencyResponseBodyLatencysLatency },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiQpsResponseBodyFailsFail extends $tea.Model {
  time?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiQpsResponseBodyFails extends $tea.Model {
  fail?: DescribeApiQpsResponseBodyFailsFail[];
  static names(): { [key: string]: string } {
    return {
      fail: 'Fail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fail: { 'type': 'array', 'itemType': DescribeApiQpsResponseBodyFailsFail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiQpsResponseBodySuccessesSuccess extends $tea.Model {
  time?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiQpsResponseBodySuccesses extends $tea.Model {
  success?: DescribeApiQpsResponseBodySuccessesSuccess[];
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: { 'type': 'array', 'itemType': DescribeApiQpsResponseBodySuccessesSuccess },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiRulesResponseBodyApiRulesApiRule extends $tea.Model {
  apiId?: string;
  apiName?: string;
  createdTime?: string;
  ruleId?: string;
  ruleName?: string;
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      createdTime: 'CreatedTime',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      createdTime: 'string',
      ruleId: 'string',
      ruleName: 'string',
      ruleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiRulesResponseBodyApiRules extends $tea.Model {
  apiRule?: DescribeApiRulesResponseBodyApiRulesApiRule[];
  static names(): { [key: string]: string } {
    return {
      apiRule: 'ApiRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiRule: { 'type': 'array', 'itemType': DescribeApiRulesResponseBodyApiRulesApiRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiStageDetailResponseBodyVariablesVariableItemStageRouteModelRouteRulesRouteRuleItem extends $tea.Model {
  conditionValue?: string;
  maxValue?: number;
  minValue?: number;
  resultValue?: string;
  static names(): { [key: string]: string } {
    return {
      conditionValue: 'ConditionValue',
      maxValue: 'MaxValue',
      minValue: 'MinValue',
      resultValue: 'ResultValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionValue: 'string',
      maxValue: 'number',
      minValue: 'number',
      resultValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiStageDetailResponseBodyVariablesVariableItemStageRouteModelRouteRules extends $tea.Model {
  routeRuleItem?: DescribeApiStageDetailResponseBodyVariablesVariableItemStageRouteModelRouteRulesRouteRuleItem[];
  static names(): { [key: string]: string } {
    return {
      routeRuleItem: 'RouteRuleItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeRuleItem: { 'type': 'array', 'itemType': DescribeApiStageDetailResponseBodyVariablesVariableItemStageRouteModelRouteRulesRouteRuleItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiStageDetailResponseBodyVariablesVariableItemStageRouteModel extends $tea.Model {
  location?: string;
  parameterCatalog?: string;
  parameterType?: string;
  routeMatchSymbol?: string;
  routeRules?: DescribeApiStageDetailResponseBodyVariablesVariableItemStageRouteModelRouteRules;
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      parameterCatalog: 'ParameterCatalog',
      parameterType: 'ParameterType',
      routeMatchSymbol: 'RouteMatchSymbol',
      routeRules: 'RouteRules',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: 'string',
      parameterCatalog: 'string',
      parameterType: 'string',
      routeMatchSymbol: 'string',
      routeRules: DescribeApiStageDetailResponseBodyVariablesVariableItemStageRouteModelRouteRules,
      serviceParameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiStageDetailResponseBodyVariablesVariableItem extends $tea.Model {
  stageRouteModel?: DescribeApiStageDetailResponseBodyVariablesVariableItemStageRouteModel;
  supportRoute?: boolean;
  variableName?: string;
  variableValue?: string;
  static names(): { [key: string]: string } {
    return {
      stageRouteModel: 'StageRouteModel',
      supportRoute: 'SupportRoute',
      variableName: 'VariableName',
      variableValue: 'VariableValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stageRouteModel: DescribeApiStageDetailResponseBodyVariablesVariableItemStageRouteModel,
      supportRoute: 'boolean',
      variableName: 'string',
      variableValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiStageDetailResponseBodyVariables extends $tea.Model {
  variableItem?: DescribeApiStageDetailResponseBodyVariablesVariableItem[];
  static names(): { [key: string]: string } {
    return {
      variableItem: 'VariableItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variableItem: { 'type': 'array', 'itemType': DescribeApiStageDetailResponseBodyVariablesVariableItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiTrafficResponseBodyDownloadsDownload extends $tea.Model {
  time?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiTrafficResponseBodyDownloads extends $tea.Model {
  download?: DescribeApiTrafficResponseBodyDownloadsDownload[];
  static names(): { [key: string]: string } {
    return {
      download: 'Download',
    };
  }

  static types(): { [key: string]: any } {
    return {
      download: { 'type': 'array', 'itemType': DescribeApiTrafficResponseBodyDownloadsDownload },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiTrafficResponseBodyUploadsUpload extends $tea.Model {
  time?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiTrafficResponseBodyUploads extends $tea.Model {
  upload?: DescribeApiTrafficResponseBodyUploadsUpload[];
  static names(): { [key: string]: string } {
    return {
      upload: 'Upload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      upload: { 'type': 'array', 'itemType': DescribeApiTrafficResponseBodyUploadsUpload },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisResponseBodyApiInfosApiInfo extends $tea.Model {
  apiId?: string;
  apiName?: string;
  createdTime?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  modifiedTime?: string;
  regionId?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      createdTime: 'CreatedTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      modifiedTime: 'ModifiedTime',
      regionId: 'RegionId',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      createdTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      modifiedTime: 'string',
      regionId: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisResponseBodyApiInfos extends $tea.Model {
  apiInfo?: DescribeApisResponseBodyApiInfosApiInfo[];
  static names(): { [key: string]: string } {
    return {
      apiInfo: 'ApiInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfo: { 'type': 'array', 'itemType': DescribeApisResponseBodyApiInfosApiInfo },
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
  operator?: string;
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
      createdTime: 'string',
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

export class DescribeApisByRuleResponseBodyApiInfosApiInfo extends $tea.Model {
  apiId?: string;
  apiName?: string;
  createdTime?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  modifiedTime?: string;
  regionId?: string;
  stageName?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      createdTime: 'CreatedTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      modifiedTime: 'ModifiedTime',
      regionId: 'RegionId',
      stageName: 'StageName',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      createdTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      modifiedTime: 'string',
      regionId: 'string',
      stageName: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByRuleResponseBodyApiInfos extends $tea.Model {
  apiInfo?: DescribeApisByRuleResponseBodyApiInfosApiInfo[];
  static names(): { [key: string]: string } {
    return {
      apiInfo: 'ApiInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfo: { 'type': 'array', 'itemType': DescribeApisByRuleResponseBodyApiInfosApiInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisForConsoleResponseBodyApiInfosApiInfoDeployedInfosDeployedInfo extends $tea.Model {
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

export class DescribeApisForConsoleResponseBodyApiInfosApiInfoDeployedInfos extends $tea.Model {
  deployedInfo?: DescribeApisForConsoleResponseBodyApiInfosApiInfoDeployedInfosDeployedInfo[];
  static names(): { [key: string]: string } {
    return {
      deployedInfo: 'DeployedInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployedInfo: { 'type': 'array', 'itemType': DescribeApisForConsoleResponseBodyApiInfosApiInfoDeployedInfosDeployedInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisForConsoleResponseBodyApiInfosApiInfo extends $tea.Model {
  apiId?: string;
  apiName?: string;
  createdTime?: string;
  deployedInfos?: DescribeApisForConsoleResponseBodyApiInfosApiInfoDeployedInfos;
  description?: string;
  groupId?: string;
  groupName?: string;
  modifiedTime?: string;
  regionId?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      createdTime: 'CreatedTime',
      deployedInfos: 'DeployedInfos',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      modifiedTime: 'ModifiedTime',
      regionId: 'RegionId',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      createdTime: 'string',
      deployedInfos: DescribeApisForConsoleResponseBodyApiInfosApiInfoDeployedInfos,
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      modifiedTime: 'string',
      regionId: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisForConsoleResponseBodyApiInfos extends $tea.Model {
  apiInfo?: DescribeApisForConsoleResponseBodyApiInfosApiInfo[];
  static names(): { [key: string]: string } {
    return {
      apiInfo: 'ApiInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfo: { 'type': 'array', 'itemType': DescribeApisForConsoleResponseBodyApiInfosApiInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppSecuritiesResponseBodyAppSecuritysAppSecurity extends $tea.Model {
  appCode?: string;
  appKey?: string;
  appSecret?: string;
  createdTime?: string;
  modifiedTime?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appKey: 'AppKey',
      appSecret: 'AppSecret',
      createdTime: 'CreatedTime',
      modifiedTime: 'ModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appKey: 'string',
      appSecret: 'string',
      createdTime: 'string',
      modifiedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppSecuritiesResponseBodyAppSecuritys extends $tea.Model {
  appSecurity?: DescribeAppSecuritiesResponseBodyAppSecuritysAppSecurity[];
  static names(): { [key: string]: string } {
    return {
      appSecurity: 'AppSecurity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSecurity: { 'type': 'array', 'itemType': DescribeAppSecuritiesResponseBodyAppSecuritysAppSecurity },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsRequestTag extends $tea.Model {
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

export class DescribeAppsResponseBodyAppsApp extends $tea.Model {
  appId?: number;
  appName?: string;
  createdTime?: string;
  description?: string;
  modifiedTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      createdTime: 'CreatedTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      createdTime: 'string',
      description: 'string',
      modifiedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyApps extends $tea.Model {
  app?: DescribeAppsResponseBodyAppsApp[];
  static names(): { [key: string]: string } {
    return {
      app: 'App',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: { 'type': 'array', 'itemType': DescribeAppsResponseBodyAppsApp },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsByApiResponseBodyAppApiRelationInfosAppApiRelationInfo extends $tea.Model {
  appId?: string;
  appName?: string;
  authVaildTime?: string;
  authorizationSource?: string;
  createdTime?: string;
  description?: string;
  operator?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      authVaildTime: 'AuthVaildTime',
      authorizationSource: 'AuthorizationSource',
      createdTime: 'CreatedTime',
      description: 'Description',
      operator: 'Operator',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      authVaildTime: 'string',
      authorizationSource: 'string',
      createdTime: 'string',
      description: 'string',
      operator: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsByApiResponseBodyAppApiRelationInfos extends $tea.Model {
  appApiRelationInfo?: DescribeAppsByApiResponseBodyAppApiRelationInfosAppApiRelationInfo[];
  static names(): { [key: string]: string } {
    return {
      appApiRelationInfo: 'AppApiRelationInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appApiRelationInfo: { 'type': 'array', 'itemType': DescribeAppsByApiResponseBodyAppApiRelationInfosAppApiRelationInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsForProviderResponseBodyAppsApp extends $tea.Model {
  appId?: number;
  appName?: string;
  createTime?: string;
  description?: string;
  modifiedTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      createTime: 'CreateTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      createTime: 'string',
      description: 'string',
      modifiedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsForProviderResponseBodyApps extends $tea.Model {
  app?: DescribeAppsForProviderResponseBodyAppsApp[];
  static names(): { [key: string]: string } {
    return {
      app: 'App',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: { 'type': 'array', 'itemType': DescribeAppsForProviderResponseBodyAppsApp },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlackListsResponseBodyBlackListsBlackList extends $tea.Model {
  blackContent?: string;
  blackType?: string;
  createTime?: string;
  description?: string;
  modifiedTime?: string;
  static names(): { [key: string]: string } {
    return {
      blackContent: 'BlackContent',
      blackType: 'BlackType',
      createTime: 'CreateTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackContent: 'string',
      blackType: 'string',
      createTime: 'string',
      description: 'string',
      modifiedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlackListsResponseBodyBlackLists extends $tea.Model {
  blackList?: DescribeBlackListsResponseBodyBlackListsBlackList[];
  static names(): { [key: string]: string } {
    return {
      blackList: 'BlackList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackList: { 'type': 'array', 'itemType': DescribeBlackListsResponseBodyBlackListsBlackList },
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

export class DescribeDeployedApiResponseBodyFunctionComputeConfig extends $tea.Model {
  fcRegionId?: string;
  functionName?: string;
  roleArn?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      fcRegionId: 'FcRegionId',
      functionName: 'FunctionName',
      roleArn: 'RoleArn',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fcRegionId: 'string',
      functionName: 'string',
      roleArn: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyPathParametersPathParameter extends $tea.Model {
  apiParameterName?: string;
  demoValue?: string;
  description?: string;
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      apiParameterName: 'ApiParameterName',
      demoValue: 'DemoValue',
      description: 'Description',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiParameterName: 'string',
      demoValue: 'string',
      description: 'string',
      serviceParameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyPathParameters extends $tea.Model {
  pathParameter?: DescribeDeployedApiResponseBodyPathParametersPathParameter[];
  static names(): { [key: string]: string } {
    return {
      pathParameter: 'PathParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pathParameter: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodyPathParametersPathParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyRequestBodyRequestParam extends $tea.Model {
  apiParameterName?: string;
  arrayItemsType?: string;
  defaultValue?: string;
  demoValue?: string;
  description?: string;
  docOrder?: string;
  docShow?: string;
  enumValue?: string;
  jsonScheme?: string;
  maxLength?: number;
  maxValue?: number;
  minLength?: number;
  minValue?: number;
  parameterType?: string;
  regularExpression?: string;
  required?: string;
  serviceParameterName?: string;
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
      maxLength: 'MaxLength',
      maxValue: 'MaxValue',
      minLength: 'MinLength',
      minValue: 'MinValue',
      parameterType: 'ParameterType',
      regularExpression: 'RegularExpression',
      required: 'Required',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiParameterName: 'string',
      arrayItemsType: 'string',
      defaultValue: 'string',
      demoValue: 'string',
      description: 'string',
      docOrder: 'string',
      docShow: 'string',
      enumValue: 'string',
      jsonScheme: 'string',
      maxLength: 'number',
      maxValue: 'number',
      minLength: 'number',
      minValue: 'number',
      parameterType: 'string',
      regularExpression: 'string',
      required: 'string',
      serviceParameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyRequestBody extends $tea.Model {
  requestParam?: DescribeDeployedApiResponseBodyRequestBodyRequestParam[];
  static names(): { [key: string]: string } {
    return {
      requestParam: 'RequestParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParam: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodyRequestBodyRequestParam },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyRequestHeadersRequestParam extends $tea.Model {
  apiParameterName?: string;
  arrayItemsType?: string;
  defaultValue?: string;
  demoValue?: string;
  description?: string;
  docOrder?: string;
  docShow?: string;
  enumValue?: string;
  jsonScheme?: string;
  maxLength?: number;
  maxValue?: number;
  minLength?: number;
  minValue?: number;
  parameterType?: string;
  regularExpression?: string;
  required?: string;
  serviceParameterName?: string;
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
      maxLength: 'MaxLength',
      maxValue: 'MaxValue',
      minLength: 'MinLength',
      minValue: 'MinValue',
      parameterType: 'ParameterType',
      regularExpression: 'RegularExpression',
      required: 'Required',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiParameterName: 'string',
      arrayItemsType: 'string',
      defaultValue: 'string',
      demoValue: 'string',
      description: 'string',
      docOrder: 'string',
      docShow: 'string',
      enumValue: 'string',
      jsonScheme: 'string',
      maxLength: 'number',
      maxValue: 'number',
      minLength: 'number',
      minValue: 'number',
      parameterType: 'string',
      regularExpression: 'string',
      required: 'string',
      serviceParameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyRequestHeaders extends $tea.Model {
  requestParam?: DescribeDeployedApiResponseBodyRequestHeadersRequestParam[];
  static names(): { [key: string]: string } {
    return {
      requestParam: 'RequestParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParam: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodyRequestHeadersRequestParam },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyRequestQueriesRequestParam extends $tea.Model {
  apiParameterName?: string;
  arrayItemsType?: string;
  defaultValue?: string;
  demoValue?: string;
  description?: string;
  docOrder?: string;
  docShow?: string;
  enumValue?: string;
  jsonScheme?: string;
  maxLength?: number;
  maxValue?: number;
  minLength?: number;
  minValue?: number;
  parameterType?: string;
  regularExpression?: string;
  required?: string;
  serviceParameterName?: string;
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
      maxLength: 'MaxLength',
      maxValue: 'MaxValue',
      minLength: 'MinLength',
      minValue: 'MinValue',
      parameterType: 'ParameterType',
      regularExpression: 'RegularExpression',
      required: 'Required',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiParameterName: 'string',
      arrayItemsType: 'string',
      defaultValue: 'string',
      demoValue: 'string',
      description: 'string',
      docOrder: 'string',
      docShow: 'string',
      enumValue: 'string',
      jsonScheme: 'string',
      maxLength: 'number',
      maxValue: 'number',
      minLength: 'number',
      minValue: 'number',
      parameterType: 'string',
      regularExpression: 'string',
      required: 'string',
      serviceParameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyRequestQueries extends $tea.Model {
  requestParam?: DescribeDeployedApiResponseBodyRequestQueriesRequestParam[];
  static names(): { [key: string]: string } {
    return {
      requestParam: 'RequestParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParam: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodyRequestQueriesRequestParam },
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

export class DescribeDeployedApisResponseBodyApiInfosApiInfo extends $tea.Model {
  apiId?: string;
  apiName?: string;
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
      apiName: 'ApiName',
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
      apiName: 'string',
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

export class DescribeDeployedApisResponseBodyApiInfos extends $tea.Model {
  apiInfo?: DescribeDeployedApisResponseBodyApiInfosApiInfo[];
  static names(): { [key: string]: string } {
    return {
      apiInfo: 'ApiInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfo: { 'type': 'array', 'itemType': DescribeDeployedApisResponseBodyApiInfosApiInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResolutionResponseBodyDomainResolutionsDomainResolution extends $tea.Model {
  domainName?: string;
  domainNameResolution?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainNameResolution: 'DomainNameResolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainNameResolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResolutionResponseBodyDomainResolutions extends $tea.Model {
  domainResolution?: DescribeDomainResolutionResponseBodyDomainResolutionsDomainResolution[];
  static names(): { [key: string]: string } {
    return {
      domainResolution: 'DomainResolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainResolution: { 'type': 'array', 'itemType': DescribeDomainResolutionResponseBodyDomainResolutionsDomainResolution },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryApiResponseBodyConstantParametersConstantParameter extends $tea.Model {
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

export class DescribeHistoryApiResponseBodyConstantParameters extends $tea.Model {
  constantParameter?: DescribeHistoryApiResponseBodyConstantParametersConstantParameter[];
  static names(): { [key: string]: string } {
    return {
      constantParameter: 'ConstantParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constantParameter: { 'type': 'array', 'itemType': DescribeHistoryApiResponseBodyConstantParametersConstantParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryApiResponseBodyCustomSystemParametersCustomSystemParameter extends $tea.Model {
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

export class DescribeHistoryApiResponseBodyCustomSystemParameters extends $tea.Model {
  customSystemParameter?: DescribeHistoryApiResponseBodyCustomSystemParametersCustomSystemParameter[];
  static names(): { [key: string]: string } {
    return {
      customSystemParameter: 'CustomSystemParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSystemParameter: { 'type': 'array', 'itemType': DescribeHistoryApiResponseBodyCustomSystemParametersCustomSystemParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryApiResponseBodyErrorCodeSamplesErrorCodeSample extends $tea.Model {
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

export class DescribeHistoryApiResponseBodyErrorCodeSamples extends $tea.Model {
  errorCodeSample?: DescribeHistoryApiResponseBodyErrorCodeSamplesErrorCodeSample[];
  static names(): { [key: string]: string } {
    return {
      errorCodeSample: 'ErrorCodeSample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCodeSample: { 'type': 'array', 'itemType': DescribeHistoryApiResponseBodyErrorCodeSamplesErrorCodeSample },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryApiResponseBodyFunctionComputeConfig extends $tea.Model {
  fcRegionId?: string;
  functionName?: string;
  roleArn?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      fcRegionId: 'FcRegionId',
      functionName: 'FunctionName',
      roleArn: 'RoleArn',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fcRegionId: 'string',
      functionName: 'string',
      roleArn: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryApiResponseBodyOpenIdConnectConfig extends $tea.Model {
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

export class DescribeHistoryApiResponseBodyPathParametersPathParameter extends $tea.Model {
  apiParameterName?: string;
  demoValue?: string;
  description?: string;
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      apiParameterName: 'ApiParameterName',
      demoValue: 'DemoValue',
      description: 'Description',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiParameterName: 'string',
      demoValue: 'string',
      description: 'string',
      serviceParameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryApiResponseBodyPathParameters extends $tea.Model {
  pathParameter?: DescribeHistoryApiResponseBodyPathParametersPathParameter[];
  static names(): { [key: string]: string } {
    return {
      pathParameter: 'PathParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pathParameter: { 'type': 'array', 'itemType': DescribeHistoryApiResponseBodyPathParametersPathParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryApiResponseBodyRequestBodyRequestParam extends $tea.Model {
  apiParameterName?: string;
  arrayItemsType?: string;
  defaultValue?: string;
  demoValue?: string;
  description?: string;
  docOrder?: string;
  docShow?: string;
  enumValue?: string;
  jsonScheme?: string;
  maxLength?: number;
  maxValue?: number;
  minLength?: number;
  minValue?: number;
  parameterType?: string;
  regularExpression?: string;
  required?: string;
  serviceParameterName?: string;
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
      maxLength: 'MaxLength',
      maxValue: 'MaxValue',
      minLength: 'MinLength',
      minValue: 'MinValue',
      parameterType: 'ParameterType',
      regularExpression: 'RegularExpression',
      required: 'Required',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiParameterName: 'string',
      arrayItemsType: 'string',
      defaultValue: 'string',
      demoValue: 'string',
      description: 'string',
      docOrder: 'string',
      docShow: 'string',
      enumValue: 'string',
      jsonScheme: 'string',
      maxLength: 'number',
      maxValue: 'number',
      minLength: 'number',
      minValue: 'number',
      parameterType: 'string',
      regularExpression: 'string',
      required: 'string',
      serviceParameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryApiResponseBodyRequestBody extends $tea.Model {
  requestParam?: DescribeHistoryApiResponseBodyRequestBodyRequestParam[];
  static names(): { [key: string]: string } {
    return {
      requestParam: 'RequestParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParam: { 'type': 'array', 'itemType': DescribeHistoryApiResponseBodyRequestBodyRequestParam },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryApiResponseBodyRequestHeadersRequestParam extends $tea.Model {
  apiParameterName?: string;
  arrayItemsType?: string;
  defaultValue?: string;
  demoValue?: string;
  description?: string;
  docOrder?: string;
  docShow?: string;
  enumValue?: string;
  jsonScheme?: string;
  maxLength?: number;
  maxValue?: number;
  minLength?: number;
  minValue?: number;
  parameterType?: string;
  regularExpression?: string;
  required?: string;
  serviceParameterName?: string;
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
      maxLength: 'MaxLength',
      maxValue: 'MaxValue',
      minLength: 'MinLength',
      minValue: 'MinValue',
      parameterType: 'ParameterType',
      regularExpression: 'RegularExpression',
      required: 'Required',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiParameterName: 'string',
      arrayItemsType: 'string',
      defaultValue: 'string',
      demoValue: 'string',
      description: 'string',
      docOrder: 'string',
      docShow: 'string',
      enumValue: 'string',
      jsonScheme: 'string',
      maxLength: 'number',
      maxValue: 'number',
      minLength: 'number',
      minValue: 'number',
      parameterType: 'string',
      regularExpression: 'string',
      required: 'string',
      serviceParameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryApiResponseBodyRequestHeaders extends $tea.Model {
  requestParam?: DescribeHistoryApiResponseBodyRequestHeadersRequestParam[];
  static names(): { [key: string]: string } {
    return {
      requestParam: 'RequestParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParam: { 'type': 'array', 'itemType': DescribeHistoryApiResponseBodyRequestHeadersRequestParam },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryApiResponseBodyRequestQueriesRequestParam extends $tea.Model {
  apiParameterName?: string;
  arrayItemsType?: string;
  defaultValue?: string;
  demoValue?: string;
  description?: string;
  docOrder?: string;
  docShow?: string;
  enumValue?: string;
  jsonScheme?: string;
  maxLength?: number;
  maxValue?: number;
  minLength?: number;
  minValue?: number;
  parameterType?: string;
  regularExpression?: string;
  required?: string;
  serviceParameterName?: string;
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
      maxLength: 'MaxLength',
      maxValue: 'MaxValue',
      minLength: 'MinLength',
      minValue: 'MinValue',
      parameterType: 'ParameterType',
      regularExpression: 'RegularExpression',
      required: 'Required',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiParameterName: 'string',
      arrayItemsType: 'string',
      defaultValue: 'string',
      demoValue: 'string',
      description: 'string',
      docOrder: 'string',
      docShow: 'string',
      enumValue: 'string',
      jsonScheme: 'string',
      maxLength: 'number',
      maxValue: 'number',
      minLength: 'number',
      minValue: 'number',
      parameterType: 'string',
      regularExpression: 'string',
      required: 'string',
      serviceParameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryApiResponseBodyRequestQueries extends $tea.Model {
  requestParam?: DescribeHistoryApiResponseBodyRequestQueriesRequestParam[];
  static names(): { [key: string]: string } {
    return {
      requestParam: 'RequestParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParam: { 'type': 'array', 'itemType': DescribeHistoryApiResponseBodyRequestQueriesRequestParam },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryApiResponseBodySystemParametersSystemParameter extends $tea.Model {
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

export class DescribeHistoryApiResponseBodySystemParameters extends $tea.Model {
  systemParameter?: DescribeHistoryApiResponseBodySystemParametersSystemParameter[];
  static names(): { [key: string]: string } {
    return {
      systemParameter: 'SystemParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemParameter: { 'type': 'array', 'itemType': DescribeHistoryApiResponseBodySystemParametersSystemParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryApisResponseBodyApiInfosApiInfo extends $tea.Model {
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

export class DescribeHistoryApisResponseBodyApiInfos extends $tea.Model {
  apiInfo?: DescribeHistoryApisResponseBodyApiInfosApiInfo[];
  static names(): { [key: string]: string } {
    return {
      apiInfo: 'ApiInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfo: { 'type': 'array', 'itemType': DescribeHistoryApisResponseBodyApiInfosApiInfo },
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

export class DescribePurchasedApiResponseBodyPathParametersPathParameter extends $tea.Model {
  apiParameterName?: string;
  demoValue?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      apiParameterName: 'ApiParameterName',
      demoValue: 'DemoValue',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiParameterName: 'string',
      demoValue: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiResponseBodyPathParameters extends $tea.Model {
  pathParameter?: DescribePurchasedApiResponseBodyPathParametersPathParameter[];
  static names(): { [key: string]: string } {
    return {
      pathParameter: 'PathParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pathParameter: { 'type': 'array', 'itemType': DescribePurchasedApiResponseBodyPathParametersPathParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiResponseBodyRequestBodyRequestParam extends $tea.Model {
  apiParameterName?: string;
  defaultValue?: string;
  demoValue?: string;
  description?: string;
  docOrder?: string;
  docShow?: string;
  enumValue?: string;
  jsonScheme?: string;
  maxLength?: number;
  maxValue?: string;
  minLength?: number;
  minValue?: string;
  parameterType?: string;
  regularExpression?: string;
  required?: string;
  static names(): { [key: string]: string } {
    return {
      apiParameterName: 'ApiParameterName',
      defaultValue: 'DefaultValue',
      demoValue: 'DemoValue',
      description: 'Description',
      docOrder: 'DocOrder',
      docShow: 'DocShow',
      enumValue: 'EnumValue',
      jsonScheme: 'JsonScheme',
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
      defaultValue: 'string',
      demoValue: 'string',
      description: 'string',
      docOrder: 'string',
      docShow: 'string',
      enumValue: 'string',
      jsonScheme: 'string',
      maxLength: 'number',
      maxValue: 'string',
      minLength: 'number',
      minValue: 'string',
      parameterType: 'string',
      regularExpression: 'string',
      required: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiResponseBodyRequestBody extends $tea.Model {
  requestParam?: DescribePurchasedApiResponseBodyRequestBodyRequestParam[];
  static names(): { [key: string]: string } {
    return {
      requestParam: 'RequestParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParam: { 'type': 'array', 'itemType': DescribePurchasedApiResponseBodyRequestBodyRequestParam },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiResponseBodyRequestHeadersRequestParam extends $tea.Model {
  apiParameterName?: string;
  defaultValue?: string;
  demoValue?: string;
  description?: string;
  docOrder?: string;
  docShow?: string;
  enumValue?: string;
  jsonScheme?: string;
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
      defaultValue: 'DefaultValue',
      demoValue: 'DemoValue',
      description: 'Description',
      docOrder: 'DocOrder',
      docShow: 'DocShow',
      enumValue: 'EnumValue',
      jsonScheme: 'JsonScheme',
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
      defaultValue: 'string',
      demoValue: 'string',
      description: 'string',
      docOrder: 'string',
      docShow: 'string',
      enumValue: 'string',
      jsonScheme: 'string',
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

export class DescribePurchasedApiResponseBodyRequestHeaders extends $tea.Model {
  requestParam?: DescribePurchasedApiResponseBodyRequestHeadersRequestParam[];
  static names(): { [key: string]: string } {
    return {
      requestParam: 'RequestParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParam: { 'type': 'array', 'itemType': DescribePurchasedApiResponseBodyRequestHeadersRequestParam },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiResponseBodyRequestQueriesRequestParam extends $tea.Model {
  apiParameterName?: string;
  defaultValue?: string;
  demoValue?: string;
  description?: string;
  docOrder?: string;
  docShow?: string;
  enumValue?: string;
  jsonScheme?: string;
  maxLength?: number;
  maxValue?: string;
  minLength?: number;
  minValue?: string;
  parameterType?: string;
  regularExpression?: string;
  required?: string;
  static names(): { [key: string]: string } {
    return {
      apiParameterName: 'ApiParameterName',
      defaultValue: 'DefaultValue',
      demoValue: 'DemoValue',
      description: 'Description',
      docOrder: 'DocOrder',
      docShow: 'DocShow',
      enumValue: 'EnumValue',
      jsonScheme: 'JsonScheme',
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
      defaultValue: 'string',
      demoValue: 'string',
      description: 'string',
      docOrder: 'string',
      docShow: 'string',
      enumValue: 'string',
      jsonScheme: 'string',
      maxLength: 'number',
      maxValue: 'string',
      minLength: 'number',
      minValue: 'string',
      parameterType: 'string',
      regularExpression: 'string',
      required: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiResponseBodyRequestQueries extends $tea.Model {
  requestParam?: DescribePurchasedApiResponseBodyRequestQueriesRequestParam[];
  static names(): { [key: string]: string } {
    return {
      requestParam: 'RequestParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParam: { 'type': 'array', 'itemType': DescribePurchasedApiResponseBodyRequestQueriesRequestParam },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiGroupDetailResponseBodyDomainItemsDomainItem extends $tea.Model {
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

export class DescribePurchasedApiGroupDetailResponseBodyDomainItems extends $tea.Model {
  domainItem?: DescribePurchasedApiGroupDetailResponseBodyDomainItemsDomainItem[];
  static names(): { [key: string]: string } {
    return {
      domainItem: 'DomainItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainItem: { 'type': 'array', 'itemType': DescribePurchasedApiGroupDetailResponseBodyDomainItemsDomainItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiGroupsResponseBodyPurchasedApiGroupAttributesPurchasedApiGroupAttribute extends $tea.Model {
  billingType?: string;
  createdTime?: string;
  expireTime?: string;
  groupDescription?: string;
  groupId?: string;
  groupName?: string;
  invokeTimesMax?: number;
  invokeTimesNow?: number;
  modifiedTime?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      billingType: 'BillingType',
      createdTime: 'CreatedTime',
      expireTime: 'ExpireTime',
      groupDescription: 'GroupDescription',
      groupId: 'GroupId',
      groupName: 'GroupName',
      invokeTimesMax: 'InvokeTimesMax',
      invokeTimesNow: 'InvokeTimesNow',
      modifiedTime: 'ModifiedTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingType: 'string',
      createdTime: 'string',
      expireTime: 'string',
      groupDescription: 'string',
      groupId: 'string',
      groupName: 'string',
      invokeTimesMax: 'number',
      invokeTimesNow: 'number',
      modifiedTime: 'string',
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

export class DescribePurchasedApisResponseBodyApiInfosApiInfo extends $tea.Model {
  apiId?: string;
  apiName?: string;
  deployedTime?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  modifiedTime?: string;
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
      regionId: 'string',
      stageName: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApisResponseBodyApiInfos extends $tea.Model {
  apiInfo?: DescribePurchasedApisResponseBodyApiInfosApiInfo[];
  static names(): { [key: string]: string } {
    return {
      apiInfo: 'ApiInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfo: { 'type': 'array', 'itemType': DescribePurchasedApisResponseBodyApiInfosApiInfo },
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

export class DescribeRulesByApiResponseBodyRulesRule extends $tea.Model {
  createdTime?: number;
  ruleId?: string;
  ruleName?: string;
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'number',
      ruleId: 'string',
      ruleName: 'string',
      ruleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRulesByApiResponseBodyRules extends $tea.Model {
  rule?: DescribeRulesByApiResponseBodyRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeRulesByApiResponseBodyRulesRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecretKeysResponseBodySecretKeysSecretKey extends $tea.Model {
  createdTime?: string;
  modifiedTime?: string;
  regionId?: string;
  secretKey?: string;
  secretKeyId?: string;
  secretKeyName?: string;
  secretKeyValue?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      modifiedTime: 'ModifiedTime',
      regionId: 'RegionId',
      secretKey: 'SecretKey',
      secretKeyId: 'SecretKeyId',
      secretKeyName: 'SecretKeyName',
      secretKeyValue: 'SecretKeyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      modifiedTime: 'string',
      regionId: 'string',
      secretKey: 'string',
      secretKeyId: 'string',
      secretKeyName: 'string',
      secretKeyValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecretKeysResponseBodySecretKeys extends $tea.Model {
  secretKey?: DescribeSecretKeysResponseBodySecretKeysSecretKey[];
  static names(): { [key: string]: string } {
    return {
      secretKey: 'SecretKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretKey: { 'type': 'array', 'itemType': DescribeSecretKeysResponseBodySecretKeysSecretKey },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemParametersResponseBodySystemParametersSystemParameter extends $tea.Model {
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

export class DescribeSystemParametersResponseBodySystemParameters extends $tea.Model {
  systemParameter?: DescribeSystemParametersResponseBodySystemParametersSystemParameter[];
  static names(): { [key: string]: string } {
    return {
      systemParameter: 'SystemParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemParameter: { 'type': 'array', 'itemType': DescribeSystemParametersResponseBodySystemParametersSystemParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemParamsResponseBodySystemParamsSystemParam extends $tea.Model {
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

export class DescribeSystemParamsResponseBodySystemParams extends $tea.Model {
  systemParam?: DescribeSystemParamsResponseBodySystemParamsSystemParam[];
  static names(): { [key: string]: string } {
    return {
      systemParam: 'SystemParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemParam: { 'type': 'array', 'itemType': DescribeSystemParamsResponseBodySystemParamsSystemParam },
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

export class GetCustomizedInfoResponseBodySdkDemosSdkDemo extends $tea.Model {
  callDemo?: string;
  ideKey?: string;
  static names(): { [key: string]: string } {
    return {
      callDemo: 'CallDemo',
      ideKey: 'IdeKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callDemo: 'string',
      ideKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomizedInfoResponseBodySdkDemos extends $tea.Model {
  sdkDemo?: GetCustomizedInfoResponseBodySdkDemosSdkDemo[];
  static names(): { [key: string]: string } {
    return {
      sdkDemo: 'SdkDemo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sdkDemo: { 'type': 'array', 'itemType': GetCustomizedInfoResponseBodySdkDemosSdkDemo },
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

export class ResetCustomizedResponseBodySdkDemosSdkDemo extends $tea.Model {
  callDemo?: string;
  ideKey?: string;
  static names(): { [key: string]: string } {
    return {
      callDemo: 'CallDemo',
      ideKey: 'IdeKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callDemo: 'string',
      ideKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetCustomizedResponseBodySdkDemos extends $tea.Model {
  sdkDemo?: ResetCustomizedResponseBodySdkDemosSdkDemo[];
  static names(): { [key: string]: string } {
    return {
      sdkDemo: 'SdkDemo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sdkDemo: { 'type': 'array', 'itemType': ResetCustomizedResponseBodySdkDemosSdkDemo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VpcDescribeAccessesResponseBodyVpcAccessAttributesVpcAccessAttribute extends $tea.Model {
  createdTime?: string;
  id?: string;
  instanceId?: string;
  modifiedTime?: string;
  name?: string;
  port?: string;
  regionId?: string;
  status?: string;
  userId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      id: 'Id',
      instanceId: 'InstanceId',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      port: 'Port',
      regionId: 'RegionId',
      status: 'Status',
      userId: 'UserId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      id: 'string',
      instanceId: 'string',
      modifiedTime: 'string',
      name: 'string',
      port: 'string',
      regionId: 'string',
      status: 'string',
      userId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VpcDescribeAccessesResponseBodyVpcAccessAttributes extends $tea.Model {
  vpcAccessAttribute?: VpcDescribeAccessesResponseBodyVpcAccessAttributesVpcAccessAttribute[];
  static names(): { [key: string]: string } {
    return {
      vpcAccessAttribute: 'VpcAccessAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcAccessAttribute: { 'type': 'array', 'itemType': VpcDescribeAccessesResponseBodyVpcAccessAttributesVpcAccessAttribute },
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
      'cn-zhangjiakou': "apigateway.cn-zhangjiakou.aliyuncs.com",
      'cn-huhehaote': "apigateway.cn-huhehaote.aliyuncs.com",
      'cn-wulanchabu': "apigateway.cn-wulanchabu.aliyuncs.com",
      'cn-hangzhou': "apigateway.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "apigateway.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "apigateway.cn-shenzhen.aliyuncs.com",
      'cn-heyuan': "apigateway.cn-heyuan.aliyuncs.com",
      'cn-guangzhou': "apigateway.cn-guangzhou.aliyuncs.com",
      'cn-chengdu': "apigateway.cn-chengdu.aliyuncs.com",
      'cn-hongkong': "apigateway.cn-hongkong.aliyuncs.com",
      'ap-northeast-1': "apigateway.ap-northeast-1.aliyuncs.com",
      'ap-southeast-1': "apigateway.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "apigateway.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "apigateway.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "apigateway.ap-southeast-5.aliyuncs.com",
      'ap-southeast-6': "apigateway.ap-southeast-6.aliyuncs.com",
      'ap-southeast-7': "apigateway.ap-southeast-7.aliyuncs.com",
      'us-east-1': "apigateway.us-east-1.aliyuncs.com",
      'us-west-1': "apigateway.us-west-1.aliyuncs.com",
      'eu-west-1': "apigateway.eu-west-1.aliyuncs.com",
      'eu-central-1': "apigateway.eu-central-1.aliyuncs.com",
      'ap-south-1': "apigateway.ap-south-1.aliyuncs.com",
      'me-east-1': "apigateway.me-east-1.aliyuncs.com",
      'me-central-1': "apigateway.me-central-1.aliyuncs.com",
      'cn-hangzhou-finance': "apigateway.cn-hangzhou-finance.aliyuncs.com",
      'cn-shanghai-finance-1': "apigateway.cn-shanghai-finance-1.aliyuncs.com",
      'cn-shenzhen-finance-1': "apigateway.cn-shenzhen-finance-1.aliyuncs.com",
      'cn-north-2-gov-1': "apigateway.cn-north-2-gov-1.aliyuncs.com",
      'ap-northeast-2-pop': "apigateway.aliyuncs.com",
      'cn-beijing-finance-1': "apigateway.cn-beijing-finance-1.aliyuncs.com",
      'cn-beijing-finance-pop': "apigateway.aliyuncs.com",
      'cn-beijing-gov-1': "apigateway.aliyuncs.com",
      'cn-beijing-nu16-b01': "apigateway.aliyuncs.com",
      'cn-edge-1': "apigateway.aliyuncs.com",
      'cn-fujian': "apigateway.aliyuncs.com",
      'cn-haidian-cm12-c01': "apigateway.aliyuncs.com",
      'cn-hangzhou-bj-b01': "apigateway.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "apigateway.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "apigateway.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "apigateway.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "apigateway.aliyuncs.com",
      'cn-hangzhou-test-306': "apigateway.aliyuncs.com",
      'cn-hongkong-finance-pop': "apigateway.aliyuncs.com",
      'cn-huhehaote-nebula-1': "apigateway.aliyuncs.com",
      'cn-qingdao-nebula': "apigateway.aliyuncs.com",
      'cn-shanghai-et15-b01': "apigateway.aliyuncs.com",
      'cn-shanghai-et2-b01': "apigateway.aliyuncs.com",
      'cn-shanghai-inner': "apigateway.cn-shanghai-inner.aliyuncs.com",
      'cn-shanghai-internal-test-1': "apigateway.aliyuncs.com",
      'cn-shenzhen-inner': "apigateway.aliyuncs.com",
      'cn-shenzhen-st4-d01': "apigateway.aliyuncs.com",
      'cn-shenzhen-su18-b01': "apigateway.aliyuncs.com",
      'cn-wuhan': "apigateway.aliyuncs.com",
      'cn-yushanfang': "apigateway.aliyuncs.com",
      'cn-zhangbei': "apigateway.aliyuncs.com",
      'cn-zhangbei-na61-b01': "apigateway.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "apigateway.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "apigateway.aliyuncs.com",
      'eu-west-1-oxs': "apigateway.aliyuncs.com",
      'rus-west-1-pop': "apigateway.aliyuncs.com",
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
      version: "2016-07-01",
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

  async addBlackListWithOptions(request: AddBlackListRequest, runtime: $Util.RuntimeOptions): Promise<AddBlackListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.blackContent)) {
      query["BlackContent"] = request.blackContent;
    }

    if (!Util.isUnset(request.blackType)) {
      query["BlackType"] = request.blackType;
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
      action: "AddBlackList",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddBlackListResponse>(await this.callApi(params, req, runtime), new AddBlackListResponse({}));
  }

  async addBlackList(request: AddBlackListRequest): Promise<AddBlackListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addBlackListWithOptions(request, runtime);
  }

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
      version: "2016-07-01",
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

  async addIpControlPolicyItem(request: AddIpControlPolicyItemRequest): Promise<AddIpControlPolicyItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addIpControlPolicyItemWithOptions(request, runtime);
  }

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
      version: "2016-07-01",
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

  async addTrafficSpecialControl(request: AddTrafficSpecialControlRequest): Promise<AddTrafficSpecialControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTrafficSpecialControlWithOptions(request, runtime);
  }

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

    if (!Util.isUnset(request.requestParamters)) {
      query["RequestParamters"] = request.requestParamters;
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
      version: "2016-07-01",
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

  async createApi(request: CreateApiRequest): Promise<CreateApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApiWithOptions(request, runtime);
  }

  async createApiGroupWithOptions(request: CreateApiGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateApiGroupResponse> {
    Util.validateModel(request);
    let query = { };
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApiGroup",
      version: "2016-07-01",
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
      version: "2016-07-01",
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
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
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
      action: "CreateApp",
      version: "2016-07-01",
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

  async createCustomizedInfoWithOptions(request: CreateCustomizedInfoRequest, runtime: $Util.RuntimeOptions): Promise<CreateCustomizedInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!Util.isUnset(request.csharpDemo)) {
      query["CsharpDemo"] = request.csharpDemo;
    }

    if (!Util.isUnset(request.curlDemo)) {
      query["CurlDemo"] = request.curlDemo;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.javaDemo)) {
      query["JavaDemo"] = request.javaDemo;
    }

    if (!Util.isUnset(request.objectcDemo)) {
      query["ObjectcDemo"] = request.objectcDemo;
    }

    if (!Util.isUnset(request.phpDemo)) {
      query["PhpDemo"] = request.phpDemo;
    }

    if (!Util.isUnset(request.pythonDemo)) {
      query["PythonDemo"] = request.pythonDemo;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageId)) {
      query["StageId"] = request.stageId;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCustomizedInfo",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCustomizedInfoResponse>(await this.callApi(params, req, runtime), new CreateCustomizedInfoResponse({}));
  }

  async createCustomizedInfo(request: CreateCustomizedInfoRequest): Promise<CreateCustomizedInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCustomizedInfoWithOptions(request, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountQuantity)) {
      query["AccountQuantity"] = request.accountQuantity;
    }

    if (!Util.isUnset(request.expiredOn)) {
      query["ExpiredOn"] = request.expiredOn;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.skuId)) {
      query["SkuId"] = request.skuId;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstance",
      version: "2016-07-01",
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
      version: "2016-07-01",
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
      version: "2016-07-01",
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
      version: "2016-07-01",
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

  async createRaceWorkForInnerWithOptions(request: CreateRaceWorkForInnerRequest, runtime: $Util.RuntimeOptions): Promise<CreateRaceWorkForInnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.keywords)) {
      query["Keywords"] = request.keywords;
    }

    if (!Util.isUnset(request.logoUrl)) {
      query["LogoUrl"] = request.logoUrl;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.shortDescription)) {
      query["ShortDescription"] = request.shortDescription;
    }

    if (!Util.isUnset(request.workName)) {
      query["WorkName"] = request.workName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRaceWorkForInner",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRaceWorkForInnerResponse>(await this.callApi(params, req, runtime), new CreateRaceWorkForInnerResponse({}));
  }

  async createRaceWorkForInner(request: CreateRaceWorkForInnerRequest): Promise<CreateRaceWorkForInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRaceWorkForInnerWithOptions(request, runtime);
  }

  async createSecretKeyWithOptions(request: CreateSecretKeyRequest, runtime: $Util.RuntimeOptions): Promise<CreateSecretKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.secretKey)) {
      query["SecretKey"] = request.secretKey;
    }

    if (!Util.isUnset(request.secretKeyName)) {
      query["SecretKeyName"] = request.secretKeyName;
    }

    if (!Util.isUnset(request.secretValue)) {
      query["SecretValue"] = request.secretValue;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSecretKey",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSecretKeyResponse>(await this.callApi(params, req, runtime), new CreateSecretKeyResponse({}));
  }

  async createSecretKey(request: CreateSecretKeyRequest): Promise<CreateSecretKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSecretKeyWithOptions(request, runtime);
  }

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
      version: "2016-07-01",
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

  async createTrafficControl(request: CreateTrafficControlRequest): Promise<CreateTrafficControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTrafficControlWithOptions(request, runtime);
  }

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
      version: "2016-07-01",
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
      version: "2016-07-01",
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApiGroup",
      version: "2016-07-01",
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
      version: "2016-07-01",
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApp",
      version: "2016-07-01",
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
      version: "2016-07-01",
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
      version: "2016-07-01",
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
      version: "2016-07-01",
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
      version: "2016-07-01",
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

  async deleteSecretKeyWithOptions(request: DeleteSecretKeyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSecretKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.secretKeyId)) {
      query["SecretKeyId"] = request.secretKeyId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSecretKey",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSecretKeyResponse>(await this.callApi(params, req, runtime), new DeleteSecretKeyResponse({}));
  }

  async deleteSecretKey(request: DeleteSecretKeyRequest): Promise<DeleteSecretKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSecretKeyWithOptions(request, runtime);
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
      version: "2016-07-01",
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
      version: "2016-07-01",
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

  async deleteTrafficSpecialControl(request: DeleteTrafficSpecialControlRequest): Promise<DeleteTrafficSpecialControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTrafficSpecialControlWithOptions(request, runtime);
  }

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

    if (!Util.isUnset(request.supportMock)) {
      query["SupportMock"] = request.supportMock;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeployApi",
      version: "2016-07-01",
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

  async deployApi(request: DeployApiRequest): Promise<DeployApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployApiWithOptions(request, runtime);
  }

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
      version: "2016-07-01",
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
      version: "2016-07-01",
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

  async describeApiDocsWithOptions(request: DescribeApiDocsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiDocsResponse> {
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
      action: "DescribeApiDocs",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApiDocsResponse>(await this.callApi(params, req, runtime), new DescribeApiDocsResponse({}));
  }

  async describeApiDocs(request: DescribeApiDocsRequest): Promise<DescribeApiDocsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiDocsWithOptions(request, runtime);
  }

  async describeApiErrorWithOptions(request: DescribeApiErrorRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiErrorResponse> {
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiError",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApiErrorResponse>(await this.callApi(params, req, runtime), new DescribeApiErrorResponse({}));
  }

  async describeApiError(request: DescribeApiErrorRequest): Promise<DescribeApiErrorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiErrorWithOptions(request, runtime);
  }

  async describeApiGroupDetailWithOptions(request: DescribeApiGroupDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiGroupDetailResponse> {
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
      action: "DescribeApiGroupDetail",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApiGroupDetailResponse>(await this.callApi(params, req, runtime), new DescribeApiGroupDetailResponse({}));
  }

  async describeApiGroupDetail(request: DescribeApiGroupDetailRequest): Promise<DescribeApiGroupDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiGroupDetailWithOptions(request, runtime);
  }

  async describeApiGroupDetailForConsumerWithOptions(request: DescribeApiGroupDetailForConsumerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiGroupDetailForConsumerResponse> {
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
      action: "DescribeApiGroupDetailForConsumer",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApiGroupDetailForConsumerResponse>(await this.callApi(params, req, runtime), new DescribeApiGroupDetailForConsumerResponse({}));
  }

  async describeApiGroupDetailForConsumer(request: DescribeApiGroupDetailForConsumerRequest): Promise<DescribeApiGroupDetailForConsumerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiGroupDetailForConsumerWithOptions(request, runtime);
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

    if (!Util.isUnset(request.notClassic)) {
      query["NotClassic"] = request.notClassic;
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

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiGroups",
      version: "2016-07-01",
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
      version: "2016-07-01",
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

  async describeApiIpControls(request: DescribeApiIpControlsRequest): Promise<DescribeApiIpControlsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiIpControlsWithOptions(request, runtime);
  }

  async describeApiLatencyWithOptions(request: DescribeApiLatencyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiLatencyResponse> {
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiLatency",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApiLatencyResponse>(await this.callApi(params, req, runtime), new DescribeApiLatencyResponse({}));
  }

  async describeApiLatency(request: DescribeApiLatencyRequest): Promise<DescribeApiLatencyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiLatencyWithOptions(request, runtime);
  }

  async describeApiQpsWithOptions(request: DescribeApiQpsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiQpsResponse> {
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiQps",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApiQpsResponse>(await this.callApi(params, req, runtime), new DescribeApiQpsResponse({}));
  }

  async describeApiQps(request: DescribeApiQpsRequest): Promise<DescribeApiQpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiQpsWithOptions(request, runtime);
  }

  async describeApiRulesWithOptions(request: DescribeApiRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiIds)) {
      query["ApiIds"] = request.apiIds;
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

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
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
      action: "DescribeApiRules",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApiRulesResponse>(await this.callApi(params, req, runtime), new DescribeApiRulesResponse({}));
  }

  async describeApiRules(request: DescribeApiRulesRequest): Promise<DescribeApiRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiRulesWithOptions(request, runtime);
  }

  async describeApiStageDetailWithOptions(request: DescribeApiStageDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiStageDetailResponse> {
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiStageDetail",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApiStageDetailResponse>(await this.callApi(params, req, runtime), new DescribeApiStageDetailResponse({}));
  }

  async describeApiStageDetail(request: DescribeApiStageDetailRequest): Promise<DescribeApiStageDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiStageDetailWithOptions(request, runtime);
  }

  async describeApiTrafficWithOptions(request: DescribeApiTrafficRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiTrafficResponse> {
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiTraffic",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApiTrafficResponse>(await this.callApi(params, req, runtime), new DescribeApiTrafficResponse({}));
  }

  async describeApiTraffic(request: DescribeApiTrafficRequest): Promise<DescribeApiTrafficResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiTrafficWithOptions(request, runtime);
  }

  async describeApisWithOptions(request: DescribeApisRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisResponse> {
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

    if (!Util.isUnset(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApis",
      version: "2016-07-01",
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

  async describeApis(request: DescribeApisRequest): Promise<DescribeApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisWithOptions(request, runtime);
  }

  async describeApisByAppWithOptions(request: DescribeApisByAppRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisByAppResponse> {
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
      action: "DescribeApisByApp",
      version: "2016-07-01",
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
      version: "2016-07-01",
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

  async describeApisByIpControl(request: DescribeApisByIpControlRequest): Promise<DescribeApisByIpControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisByIpControlWithOptions(request, runtime);
  }

  async describeApisByRuleWithOptions(request: DescribeApisByRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisByRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApisByRule",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApisByRuleResponse>(await this.callApi(params, req, runtime), new DescribeApisByRuleResponse({}));
  }

  async describeApisByRule(request: DescribeApisByRuleRequest): Promise<DescribeApisByRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisByRuleWithOptions(request, runtime);
  }

  async describeApisForConsoleWithOptions(request: DescribeApisForConsoleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisForConsoleResponse> {
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
      action: "DescribeApisForConsole",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApisForConsoleResponse>(await this.callApi(params, req, runtime), new DescribeApisForConsoleResponse({}));
  }

  async describeApisForConsole(request: DescribeApisForConsoleRequest): Promise<DescribeApisForConsoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisForConsoleWithOptions(request, runtime);
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
      version: "2016-07-01",
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

  async describeAppSecuritiesWithOptions(request: DescribeAppSecuritiesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppSecuritiesResponse> {
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
      action: "DescribeAppSecurities",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppSecuritiesResponse>(await this.callApi(params, req, runtime), new DescribeAppSecuritiesResponse({}));
  }

  async describeAppSecurities(request: DescribeAppSecuritiesRequest): Promise<DescribeAppSecuritiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppSecuritiesWithOptions(request, runtime);
  }

  async describeAppSecurityWithOptions(request: DescribeAppSecurityRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppSecurityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppSecurity",
      version: "2016-07-01",
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

  async describeAppsWithOptions(request: DescribeAppsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
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

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApps",
      version: "2016-07-01",
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

  async describeApps(request: DescribeAppsRequest): Promise<DescribeAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppsWithOptions(request, runtime);
  }

  async describeAppsByApiWithOptions(request: DescribeAppsByApiRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppsByApiResponse> {
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
      action: "DescribeAppsByApi",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppsByApiResponse>(await this.callApi(params, req, runtime), new DescribeAppsByApiResponse({}));
  }

  async describeAppsByApi(request: DescribeAppsByApiRequest): Promise<DescribeAppsByApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppsByApiWithOptions(request, runtime);
  }

  async describeAppsForProviderWithOptions(request: DescribeAppsForProviderRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppsForProviderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appOwnerId)) {
      query["AppOwnerId"] = request.appOwnerId;
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
      action: "DescribeAppsForProvider",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppsForProviderResponse>(await this.callApi(params, req, runtime), new DescribeAppsForProviderResponse({}));
  }

  async describeAppsForProvider(request: DescribeAppsForProviderRequest): Promise<DescribeAppsForProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppsForProviderWithOptions(request, runtime);
  }

  async describeBlackListsWithOptions(request: DescribeBlackListsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBlackListsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.blackType)) {
      query["BlackType"] = request.blackType;
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
      action: "DescribeBlackLists",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBlackListsResponse>(await this.callApi(params, req, runtime), new DescribeBlackListsResponse({}));
  }

  async describeBlackLists(request: DescribeBlackListsRequest): Promise<DescribeBlackListsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBlackListsWithOptions(request, runtime);
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
      version: "2016-07-01",
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
      action: "DescribeDeployedApis",
      version: "2016-07-01",
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
      version: "2016-07-01",
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

  async describeDomain(request: DescribeDomainRequest): Promise<DescribeDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainWithOptions(request, runtime);
  }

  async describeDomainResolutionWithOptions(request: DescribeDomainResolutionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainResolutionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
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
      action: "DescribeDomainResolution",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainResolutionResponse>(await this.callApi(params, req, runtime), new DescribeDomainResolutionResponse({}));
  }

  async describeDomainResolution(request: DescribeDomainResolutionRequest): Promise<DescribeDomainResolutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainResolutionWithOptions(request, runtime);
  }

  async describeHistoryApiWithOptions(request: DescribeHistoryApiRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHistoryApiResponse> {
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
      action: "DescribeHistoryApi",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHistoryApiResponse>(await this.callApi(params, req, runtime), new DescribeHistoryApiResponse({}));
  }

  async describeHistoryApi(request: DescribeHistoryApiRequest): Promise<DescribeHistoryApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHistoryApiWithOptions(request, runtime);
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
      version: "2016-07-01",
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
      version: "2016-07-01",
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
      version: "2016-07-01",
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
      version: "2016-07-01",
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

  async describePurchasedApiWithOptions(request: DescribePurchasedApiRequest, runtime: $Util.RuntimeOptions): Promise<DescribePurchasedApiResponse> {
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
      action: "DescribePurchasedApi",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePurchasedApiResponse>(await this.callApi(params, req, runtime), new DescribePurchasedApiResponse({}));
  }

  async describePurchasedApi(request: DescribePurchasedApiRequest): Promise<DescribePurchasedApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePurchasedApiWithOptions(request, runtime);
  }

  async describePurchasedApiGroupDetailWithOptions(request: DescribePurchasedApiGroupDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribePurchasedApiGroupDetailResponse> {
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
      action: "DescribePurchasedApiGroupDetail",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePurchasedApiGroupDetailResponse>(await this.callApi(params, req, runtime), new DescribePurchasedApiGroupDetailResponse({}));
  }

  async describePurchasedApiGroupDetail(request: DescribePurchasedApiGroupDetailRequest): Promise<DescribePurchasedApiGroupDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePurchasedApiGroupDetailWithOptions(request, runtime);
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
      version: "2016-07-01",
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePurchasedApis",
      version: "2016-07-01",
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

  async describeRaceWorkForInnerWithOptions(request: DescribeRaceWorkForInnerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRaceWorkForInnerResponse> {
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
      action: "DescribeRaceWorkForInner",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRaceWorkForInnerResponse>(await this.callApi(params, req, runtime), new DescribeRaceWorkForInnerResponse({}));
  }

  async describeRaceWorkForInner(request: DescribeRaceWorkForInnerRequest): Promise<DescribeRaceWorkForInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRaceWorkForInnerWithOptions(request, runtime);
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
      version: "2016-07-01",
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

  async describeRulesByApiWithOptions(request: DescribeRulesByApiRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRulesByApiResponse> {
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
      action: "DescribeRulesByApi",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRulesByApiResponse>(await this.callApi(params, req, runtime), new DescribeRulesByApiResponse({}));
  }

  async describeRulesByApi(request: DescribeRulesByApiRequest): Promise<DescribeRulesByApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRulesByApiWithOptions(request, runtime);
  }

  async describeSecretKeysWithOptions(request: DescribeSecretKeysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecretKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.secretKeyId)) {
      query["SecretKeyId"] = request.secretKeyId;
    }

    if (!Util.isUnset(request.secretKeyName)) {
      query["SecretKeyName"] = request.secretKeyName;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSecretKeys",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSecretKeysResponse>(await this.callApi(params, req, runtime), new DescribeSecretKeysResponse({}));
  }

  async describeSecretKeys(request: DescribeSecretKeysRequest): Promise<DescribeSecretKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecretKeysWithOptions(request, runtime);
  }

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
      version: "2016-07-01",
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

  async describeSystemParameters(request: DescribeSystemParametersRequest): Promise<DescribeSystemParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSystemParametersWithOptions(request, runtime);
  }

  async describeSystemParamsWithOptions(request: DescribeSystemParamsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSystemParamsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSystemParams",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSystemParamsResponse>(await this.callApi(params, req, runtime), new DescribeSystemParamsResponse({}));
  }

  async describeSystemParams(request: DescribeSystemParamsRequest): Promise<DescribeSystemParamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSystemParamsWithOptions(request, runtime);
  }

  async describeTrafficControlsWithOptions(request: DescribeTrafficControlsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTrafficControlsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiUid)) {
      query["ApiUid"] = request.apiUid;
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
      version: "2016-07-01",
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

  async describeTrafficControls(request: DescribeTrafficControlsRequest): Promise<DescribeTrafficControlsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTrafficControlsWithOptions(request, runtime);
  }

  async exportSwaggerWithOptions(request: ExportSwaggerRequest, runtime: $Util.RuntimeOptions): Promise<ExportSwaggerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiUid)) {
      query["ApiUid"] = request.apiUid;
    }

    if (!Util.isUnset(request.dataFormat)) {
      query["DataFormat"] = request.dataFormat;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportSwagger",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportSwaggerResponse>(await this.callApi(params, req, runtime), new ExportSwaggerResponse({}));
  }

  async exportSwagger(request: ExportSwaggerRequest): Promise<ExportSwaggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportSwaggerWithOptions(request, runtime);
  }

  async getApiMethodsWithOptions(request: GetApiMethodsRequest, runtime: $Util.RuntimeOptions): Promise<GetApiMethodsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiPath)) {
      query["ApiPath"] = request.apiPath;
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
      action: "GetApiMethods",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetApiMethodsResponse>(await this.callApi(params, req, runtime), new GetApiMethodsResponse({}));
  }

  async getApiMethods(request: GetApiMethodsRequest): Promise<GetApiMethodsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApiMethodsWithOptions(request, runtime);
  }

  async getCustomizedInfoWithOptions(request: GetCustomizedInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetCustomizedInfoResponse> {
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

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageId)) {
      query["StageId"] = request.stageId;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCustomizedInfo",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCustomizedInfoResponse>(await this.callApi(params, req, runtime), new GetCustomizedInfoResponse({}));
  }

  async getCustomizedInfo(request: GetCustomizedInfoRequest): Promise<GetCustomizedInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCustomizedInfoWithOptions(request, runtime);
  }

  async importSwaggerWithOptions(request: ImportSwaggerRequest, runtime: $Util.RuntimeOptions): Promise<ImportSwaggerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataFormat)) {
      query["DataFormat"] = request.dataFormat;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.overwrite)) {
      query["Overwrite"] = request.overwrite;
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
      version: "2016-07-01",
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

  async importSwagger(request: ImportSwaggerRequest): Promise<ImportSwaggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importSwaggerWithOptions(request, runtime);
  }

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

    if (!Util.isUnset(request.requestParamters)) {
      query["RequestParamters"] = request.requestParamters;
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
      version: "2016-07-01",
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

  async modifyApi(request: ModifyApiRequest): Promise<ModifyApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyApiWithOptions(request, runtime);
  }

  async modifyApiGroupWithOptions(request: ModifyApiGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyApiGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.compatibleFlags)) {
      query["CompatibleFlags"] = request.compatibleFlags;
    }

    if (!Util.isUnset(request.customTraceConfig)) {
      query["CustomTraceConfig"] = request.customTraceConfig;
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

    if (!Util.isUnset(request.userLogConfig)) {
      query["UserLogConfig"] = request.userLogConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyApiGroup",
      version: "2016-07-01",
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyApp",
      version: "2016-07-01",
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

  async modifyInstanceAttributeWithOptions(request: ModifyInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.httpsPolicy)) {
      query["HttpsPolicy"] = request.httpsPolicy;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstanceAttribute",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceAttributeResponse>(await this.callApi(params, req, runtime), new ModifyInstanceAttributeResponse({}));
  }

  async modifyInstanceAttribute(request: ModifyInstanceAttributeRequest): Promise<ModifyInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceAttributeWithOptions(request, runtime);
  }

  async modifyInstanceVpcAttributeWithOptions(request: ModifyInstanceVpcAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceVpcAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstanceVpcAttribute",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceVpcAttributeResponse>(await this.callApi(params, req, runtime), new ModifyInstanceVpcAttributeResponse({}));
  }

  async modifyInstanceVpcAttribute(request: ModifyInstanceVpcAttributeRequest): Promise<ModifyInstanceVpcAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceVpcAttributeWithOptions(request, runtime);
  }

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
      version: "2016-07-01",
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

  async modifyIpControl(request: ModifyIpControlRequest): Promise<ModifyIpControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyIpControlWithOptions(request, runtime);
  }

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
      version: "2016-07-01",
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
      version: "2016-07-01",
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

  async modifySecretKeyWithOptions(request: ModifySecretKeyRequest, runtime: $Util.RuntimeOptions): Promise<ModifySecretKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.secretKey)) {
      query["SecretKey"] = request.secretKey;
    }

    if (!Util.isUnset(request.secretKeyId)) {
      query["SecretKeyId"] = request.secretKeyId;
    }

    if (!Util.isUnset(request.secretKeyName)) {
      query["SecretKeyName"] = request.secretKeyName;
    }

    if (!Util.isUnset(request.secretValue)) {
      query["SecretValue"] = request.secretValue;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySecretKey",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySecretKeyResponse>(await this.callApi(params, req, runtime), new ModifySecretKeyResponse({}));
  }

  async modifySecretKey(request: ModifySecretKeyRequest): Promise<ModifySecretKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySecretKeyWithOptions(request, runtime);
  }

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
      version: "2016-07-01",
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

  async modifyTrafficControl(request: ModifyTrafficControlRequest): Promise<ModifyTrafficControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTrafficControlWithOptions(request, runtime);
  }

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
      version: "2016-07-01",
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

  async reactivateDomain(request: ReactivateDomainRequest): Promise<ReactivateDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reactivateDomainWithOptions(request, runtime);
  }

  async recoverApiFromHistoricalWithOptions(request: RecoverApiFromHistoricalRequest, runtime: $Util.RuntimeOptions): Promise<RecoverApiFromHistoricalResponse> {
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
      action: "RecoverApiFromHistorical",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecoverApiFromHistoricalResponse>(await this.callApi(params, req, runtime), new RecoverApiFromHistoricalResponse({}));
  }

  async recoverApiFromHistorical(request: RecoverApiFromHistoricalRequest): Promise<RecoverApiFromHistoricalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recoverApiFromHistoricalWithOptions(request, runtime);
  }

  async recoveryApiDefineFromHistoricalWithOptions(request: RecoveryApiDefineFromHistoricalRequest, runtime: $Util.RuntimeOptions): Promise<RecoveryApiDefineFromHistoricalResponse> {
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
      action: "RecoveryApiDefineFromHistorical",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecoveryApiDefineFromHistoricalResponse>(await this.callApi(params, req, runtime), new RecoveryApiDefineFromHistoricalResponse({}));
  }

  async recoveryApiDefineFromHistorical(request: RecoveryApiDefineFromHistoricalRequest): Promise<RecoveryApiDefineFromHistoricalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recoveryApiDefineFromHistoricalWithOptions(request, runtime);
  }

  async recoveryApiFromHistoricalWithOptions(request: RecoveryApiFromHistoricalRequest, runtime: $Util.RuntimeOptions): Promise<RecoveryApiFromHistoricalResponse> {
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
      action: "RecoveryApiFromHistorical",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecoveryApiFromHistoricalResponse>(await this.callApi(params, req, runtime), new RecoveryApiFromHistoricalResponse({}));
  }

  async recoveryApiFromHistorical(request: RecoveryApiFromHistoricalRequest): Promise<RecoveryApiFromHistoricalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recoveryApiFromHistoricalWithOptions(request, runtime);
  }

  async refreshDomainWithOptions(request: RefreshDomainRequest, runtime: $Util.RuntimeOptions): Promise<RefreshDomainResponse> {
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
      action: "RefreshDomain",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefreshDomainResponse>(await this.callApi(params, req, runtime), new RefreshDomainResponse({}));
  }

  async refreshDomain(request: RefreshDomainRequest): Promise<RefreshDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshDomainWithOptions(request, runtime);
  }

  async removeAccessPermissionByApisWithOptions(request: RemoveAccessPermissionByApisRequest, runtime: $Util.RuntimeOptions): Promise<RemoveAccessPermissionByApisResponse> {
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
      action: "RemoveAccessPermissionByApis",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveAccessPermissionByApisResponse>(await this.callApi(params, req, runtime), new RemoveAccessPermissionByApisResponse({}));
  }

  async removeAccessPermissionByApis(request: RemoveAccessPermissionByApisRequest): Promise<RemoveAccessPermissionByApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeAccessPermissionByApisWithOptions(request, runtime);
  }

  async removeAccessPermissionByAppsWithOptions(request: RemoveAccessPermissionByAppsRequest, runtime: $Util.RuntimeOptions): Promise<RemoveAccessPermissionByAppsResponse> {
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
      action: "RemoveAccessPermissionByApps",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveAccessPermissionByAppsResponse>(await this.callApi(params, req, runtime), new RemoveAccessPermissionByAppsResponse({}));
  }

  async removeAccessPermissionByApps(request: RemoveAccessPermissionByAppsRequest): Promise<RemoveAccessPermissionByAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeAccessPermissionByAppsWithOptions(request, runtime);
  }

  async removeAllBlackListWithOptions(request: RemoveAllBlackListRequest, runtime: $Util.RuntimeOptions): Promise<RemoveAllBlackListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.blackType)) {
      query["BlackType"] = request.blackType;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveAllBlackList",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveAllBlackListResponse>(await this.callApi(params, req, runtime), new RemoveAllBlackListResponse({}));
  }

  async removeAllBlackList(request: RemoveAllBlackListRequest): Promise<RemoveAllBlackListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeAllBlackListWithOptions(request, runtime);
  }

  async removeApiRuleWithOptions(request: RemoveApiRuleRequest, runtime: $Util.RuntimeOptions): Promise<RemoveApiRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiIds)) {
      query["ApiIds"] = request.apiIds;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
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
      action: "RemoveApiRule",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveApiRuleResponse>(await this.callApi(params, req, runtime), new RemoveApiRuleResponse({}));
  }

  async removeApiRule(request: RemoveApiRuleRequest): Promise<RemoveApiRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeApiRuleWithOptions(request, runtime);
  }

  async removeBlackListWithOptions(request: RemoveBlackListRequest, runtime: $Util.RuntimeOptions): Promise<RemoveBlackListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.blackContent)) {
      query["BlackContent"] = request.blackContent;
    }

    if (!Util.isUnset(request.blackType)) {
      query["BlackType"] = request.blackType;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveBlackList",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveBlackListResponse>(await this.callApi(params, req, runtime), new RemoveBlackListResponse({}));
  }

  async removeBlackList(request: RemoveBlackListRequest): Promise<RemoveBlackListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeBlackListWithOptions(request, runtime);
  }

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
      version: "2016-07-01",
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

  async removeIpControlApis(request: RemoveIpControlApisRequest): Promise<RemoveIpControlApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeIpControlApisWithOptions(request, runtime);
  }

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
      version: "2016-07-01",
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

  async removeIpControlPolicyItem(request: RemoveIpControlPolicyItemRequest): Promise<RemoveIpControlPolicyItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeIpControlPolicyItemWithOptions(request, runtime);
  }

  async resetAppKeySecretWithOptions(request: ResetAppKeySecretRequest, runtime: $Util.RuntimeOptions): Promise<ResetAppKeySecretResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetAppKeySecret",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetAppKeySecretResponse>(await this.callApi(params, req, runtime), new ResetAppKeySecretResponse({}));
  }

  async resetAppKeySecret(request: ResetAppKeySecretRequest): Promise<ResetAppKeySecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAppKeySecretWithOptions(request, runtime);
  }

  async resetCustomizedWithOptions(request: ResetCustomizedRequest, runtime: $Util.RuntimeOptions): Promise<ResetCustomizedResponse> {
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

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.stageId)) {
      query["StageId"] = request.stageId;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetCustomized",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetCustomizedResponse>(await this.callApi(params, req, runtime), new ResetCustomizedResponse({}));
  }

  async resetCustomized(request: ResetCustomizedRequest): Promise<ResetCustomizedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetCustomizedWithOptions(request, runtime);
  }

  async sdkGenerateWithOptions(request: SdkGenerateRequest, runtime: $Util.RuntimeOptions): Promise<SdkGenerateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

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
      action: "SdkGenerate",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SdkGenerateResponse>(await this.callApi(params, req, runtime), new SdkGenerateResponse({}));
  }

  async sdkGenerate(request: SdkGenerateRequest): Promise<SdkGenerateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sdkGenerateWithOptions(request, runtime);
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
      version: "2016-07-01",
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
      version: "2016-07-01",
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

  async setAccessPermissionByApisWithOptions(request: SetAccessPermissionByApisRequest, runtime: $Util.RuntimeOptions): Promise<SetAccessPermissionByApisResponse> {
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
      action: "SetAccessPermissionByApis",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetAccessPermissionByApisResponse>(await this.callApi(params, req, runtime), new SetAccessPermissionByApisResponse({}));
  }

  async setAccessPermissionByApis(request: SetAccessPermissionByApisRequest): Promise<SetAccessPermissionByApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAccessPermissionByApisWithOptions(request, runtime);
  }

  async setAccessPermissionsWithOptions(request: SetAccessPermissionsRequest, runtime: $Util.RuntimeOptions): Promise<SetAccessPermissionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.appIds)) {
      query["AppIds"] = request.appIds;
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
      action: "SetAccessPermissions",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetAccessPermissionsResponse>(await this.callApi(params, req, runtime), new SetAccessPermissionsResponse({}));
  }

  async setAccessPermissions(request: SetAccessPermissionsRequest): Promise<SetAccessPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAccessPermissionsWithOptions(request, runtime);
  }

  async setApiRuleWithOptions(request: SetApiRuleRequest, runtime: $Util.RuntimeOptions): Promise<SetApiRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiIds)) {
      query["ApiIds"] = request.apiIds;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
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
      action: "SetApiRule",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetApiRuleResponse>(await this.callApi(params, req, runtime), new SetApiRuleResponse({}));
  }

  async setApiRule(request: SetApiRuleRequest): Promise<SetApiRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setApiRuleWithOptions(request, runtime);
  }

  async setDomainWithOptions(request: SetDomainRequest, runtime: $Util.RuntimeOptions): Promise<SetDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bindStageName)) {
      query["BindStageName"] = request.bindStageName;
    }

    if (!Util.isUnset(request.certificateBody)) {
      query["CertificateBody"] = request.certificateBody;
    }

    if (!Util.isUnset(request.certificateName)) {
      query["CertificateName"] = request.certificateName;
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

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDomain",
      version: "2016-07-01",
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

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDomainCertificate",
      version: "2016-07-01",
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDomainWebSocketStatus",
      version: "2016-07-01",
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
      version: "2016-07-01",
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

  async setIpControlApis(request: SetIpControlApisRequest): Promise<SetIpControlApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setIpControlApisWithOptions(request, runtime);
  }

  async setMockIntegrationWithOptions(request: SetMockIntegrationRequest, runtime: $Util.RuntimeOptions): Promise<SetMockIntegrationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.mock)) {
      query["Mock"] = request.mock;
    }

    if (!Util.isUnset(request.mockResult)) {
      query["MockResult"] = request.mockResult;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetMockIntegration",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetMockIntegrationResponse>(await this.callApi(params, req, runtime), new SetMockIntegrationResponse({}));
  }

  async setMockIntegration(request: SetMockIntegrationRequest): Promise<SetMockIntegrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setMockIntegrationWithOptions(request, runtime);
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
      version: "2016-07-01",
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
      version: "2016-07-01",
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

  async switchApi(request: SwitchApiRequest): Promise<SwitchApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchApiWithOptions(request, runtime);
  }

  async vpcDescribeAccessesWithOptions(request: VpcDescribeAccessesRequest, runtime: $Util.RuntimeOptions): Promise<VpcDescribeAccessesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instancePort)) {
      query["InstancePort"] = request.instancePort;
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
      action: "VpcDescribeAccesses",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VpcDescribeAccessesResponse>(await this.callApi(params, req, runtime), new VpcDescribeAccessesResponse({}));
  }

  async vpcDescribeAccesses(request: VpcDescribeAccessesRequest): Promise<VpcDescribeAccessesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.vpcDescribeAccessesWithOptions(request, runtime);
  }

  async vpcGrantAccessWithOptions(request: VpcGrantAccessRequest, runtime: $Util.RuntimeOptions): Promise<VpcGrantAccessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instancePort)) {
      query["InstancePort"] = request.instancePort;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VpcGrantAccess",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VpcGrantAccessResponse>(await this.callApi(params, req, runtime), new VpcGrantAccessResponse({}));
  }

  async vpcGrantAccess(request: VpcGrantAccessRequest): Promise<VpcGrantAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.vpcGrantAccessWithOptions(request, runtime);
  }

  async vpcModifyAccessWithOptions(request: VpcModifyAccessRequest, runtime: $Util.RuntimeOptions): Promise<VpcModifyAccessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instancePort)) {
      query["InstancePort"] = request.instancePort;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VpcModifyAccess",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VpcModifyAccessResponse>(await this.callApi(params, req, runtime), new VpcModifyAccessResponse({}));
  }

  async vpcModifyAccess(request: VpcModifyAccessRequest): Promise<VpcModifyAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.vpcModifyAccessWithOptions(request, runtime);
  }

  async vpcRevokeAccessWithOptions(request: VpcRevokeAccessRequest, runtime: $Util.RuntimeOptions): Promise<VpcRevokeAccessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instancePort)) {
      query["InstancePort"] = request.instancePort;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VpcRevokeAccess",
      version: "2016-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VpcRevokeAccessResponse>(await this.callApi(params, req, runtime), new VpcRevokeAccessResponse({}));
  }

  async vpcRevokeAccess(request: VpcRevokeAccessRequest): Promise<VpcRevokeAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.vpcRevokeAccessWithOptions(request, runtime);
  }

}
