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
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
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

export class AbolishApiForInnerRequest extends $tea.Model {
  aliUid?: number;
  apiId?: string;
  groupId?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      apiId: 'ApiId',
      groupId: 'GroupId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      apiId: 'string',
      groupId: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbolishApiForInnerResponseBody extends $tea.Model {
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

export class AbolishApiForInnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AbolishApiForInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AbolishApiForInnerResponseBody,
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
  static names(): { [key: string]: string } {
    return {
      blackContent: 'BlackContent',
      blackType: 'BlackType',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackContent: 'string',
      blackType: 'string',
      description: 'string',
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

export class AddTrafficSpecialControlRequest extends $tea.Model {
  specialKey?: string;
  specialType?: string;
  trafficControlId?: string;
  trafficValue?: number;
  static names(): { [key: string]: string } {
    return {
      specialKey: 'SpecialKey',
      specialType: 'SpecialType',
      trafficControlId: 'TrafficControlId',
      trafficValue: 'TrafficValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CheckAccountForInnerRequest extends $tea.Model {
  aliUid?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAccountForInnerResponseBody extends $tea.Model {
  checkResult?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkResult: 'CheckResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResult: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAccountForInnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckAccountForInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckAccountForInnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAoneAppAuditRequest extends $tea.Model {
  aoneAppName?: string;
  static names(): { [key: string]: string } {
    return {
      aoneAppName: 'AoneAppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aoneAppName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAoneAppAuditResponseBody extends $tea.Model {
  checkResult?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkResult: 'CheckResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResult: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAoneAppAuditResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckAoneAppAuditResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckAoneAppAuditResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyConsumerOpenForInnerRequest extends $tea.Model {
  copyList?: string;
  static names(): { [key: string]: string } {
    return {
      copyList: 'CopyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copyList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyConsumerOpenForInnerResponseBody extends $tea.Model {
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

export class CopyConsumerOpenForInnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CopyConsumerOpenForInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CopyConsumerOpenForInnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApiRequest extends $tea.Model {
  apiName?: string;
  authType?: string;
  bodyFormat?: string;
  constantParameters?: string;
  description?: string;
  groupId?: string;
  httpMethod?: string;
  httpProtocol?: string;
  path?: string;
  pathParameters?: string;
  postBodyDescription?: string;
  postBodyType?: string;
  requestBody?: string;
  requestHeaders?: string;
  requestQueries?: string;
  resultSample?: string;
  resultType?: string;
  serviceAddress?: string;
  serviceProtocol?: string;
  serviceTimeout?: number;
  systemParameters?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      authType: 'AuthType',
      bodyFormat: 'BodyFormat',
      constantParameters: 'ConstantParameters',
      description: 'Description',
      groupId: 'GroupId',
      httpMethod: 'HttpMethod',
      httpProtocol: 'HttpProtocol',
      path: 'Path',
      pathParameters: 'PathParameters',
      postBodyDescription: 'PostBodyDescription',
      postBodyType: 'PostBodyType',
      requestBody: 'RequestBody',
      requestHeaders: 'RequestHeaders',
      requestQueries: 'RequestQueries',
      resultSample: 'ResultSample',
      resultType: 'ResultType',
      serviceAddress: 'ServiceAddress',
      serviceProtocol: 'ServiceProtocol',
      serviceTimeout: 'ServiceTimeout',
      systemParameters: 'SystemParameters',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      authType: 'string',
      bodyFormat: 'string',
      constantParameters: 'string',
      description: 'string',
      groupId: 'string',
      httpMethod: 'string',
      httpProtocol: 'string',
      path: 'string',
      pathParameters: 'string',
      postBodyDescription: 'string',
      postBodyType: 'string',
      requestBody: 'string',
      requestHeaders: 'string',
      requestQueries: 'string',
      resultSample: 'string',
      resultType: 'string',
      serviceAddress: 'string',
      serviceProtocol: 'string',
      serviceTimeout: 'number',
      systemParameters: 'string',
      visibility: 'string',
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

export class CreateApiForInnerRequest extends $tea.Model {
  aliUid?: number;
  apiName?: string;
  authType?: string;
  description?: string;
  groupId?: string;
  requestConfig?: string;
  requestParamters?: string;
  resultSample?: string;
  resultType?: string;
  serviceConfig?: string;
  serviceParameters?: string;
  serviceParametersMap?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      apiName: 'ApiName',
      authType: 'AuthType',
      description: 'Description',
      groupId: 'GroupId',
      requestConfig: 'RequestConfig',
      requestParamters: 'RequestParamters',
      resultSample: 'ResultSample',
      resultType: 'ResultType',
      serviceConfig: 'ServiceConfig',
      serviceParameters: 'ServiceParameters',
      serviceParametersMap: 'ServiceParametersMap',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      apiName: 'string',
      authType: 'string',
      description: 'string',
      groupId: 'string',
      requestConfig: 'string',
      requestParamters: 'string',
      resultSample: 'string',
      resultType: 'string',
      serviceConfig: 'string',
      serviceParameters: 'string',
      serviceParametersMap: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApiForInnerResponseBody extends $tea.Model {
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

export class CreateApiForInnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateApiForInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateApiForInnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApiGroupRequest extends $tea.Model {
  description?: string;
  groupName?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupName: 'GroupName',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupName: 'string',
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

export class CreateApiGroupForInnerRequest extends $tea.Model {
  aliUid?: number;
  description?: string;
  groupName?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      description: 'Description',
      groupName: 'GroupName',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      description: 'string',
      groupName: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApiGroupForInnerResponseBody extends $tea.Model {
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

export class CreateApiGroupForInnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateApiGroupForInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateApiGroupForInnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequest extends $tea.Model {
  appName?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      description: 'string',
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

export class CreateAppForBackendRequest extends $tea.Model {
  aliUid?: number;
  appName?: string;
  description?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      appName: 'AppName',
      description: 'Description',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      appName: 'string',
      description: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppForBackendResponseBody extends $tea.Model {
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

export class CreateAppForBackendResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppForBackendResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAppForBackendResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppForInnerRequest extends $tea.Model {
  aliUid?: number;
  appCode?: string;
  appKey?: string;
  appName?: string;
  appSecret?: string;
  description?: string;
  extend?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      appCode: 'AppCode',
      appKey: 'AppKey',
      appName: 'AppName',
      appSecret: 'AppSecret',
      description: 'Description',
      extend: 'Extend',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      appCode: 'string',
      appKey: 'string',
      appName: 'string',
      appSecret: 'string',
      description: 'string',
      extend: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppForInnerResponseBody extends $tea.Model {
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

export class CreateAppForInnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppForInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAppForInnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  accountQuantity?: number;
  alarmQuota?: number;
  aliUid?: number;
  appId?: number;
  billingType?: string;
  cloudMarketInstanceId?: string;
  expiredOn?: string;
  instanceAttributes?: string;
  skuId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      accountQuantity: 'AccountQuantity',
      alarmQuota: 'AlarmQuota',
      aliUid: 'AliUid',
      appId: 'AppId',
      billingType: 'BillingType',
      cloudMarketInstanceId: 'CloudMarketInstanceId',
      expiredOn: 'ExpiredOn',
      instanceAttributes: 'InstanceAttributes',
      skuId: 'SkuId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountQuantity: 'number',
      alarmQuota: 'number',
      aliUid: 'number',
      appId: 'number',
      billingType: 'string',
      cloudMarketInstanceId: 'string',
      expiredOn: 'string',
      instanceAttributes: 'string',
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

export class CreateRaceWorkForInnerRequest extends $tea.Model {
  commodityCode?: string;
  groupId?: string;
  keywords?: string;
  logoUrl?: string;
  shortDescription?: string;
  workName?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      groupId: 'GroupId',
      keywords: 'Keywords',
      logoUrl: 'LogoUrl',
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
  static names(): { [key: string]: string } {
    return {
      secretKey: 'SecretKey',
      secretKeyName: 'SecretKeyName',
      secretValue: 'SecretValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretKey: 'string',
      secretKeyName: 'string',
      secretValue: 'string',
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
  trafficControlName?: string;
  trafficControlUnit?: string;
  userDefault?: number;
  static names(): { [key: string]: string } {
    return {
      apiDefault: 'ApiDefault',
      appDefault: 'AppDefault',
      description: 'Description',
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

export class CreateUserWhiteListRequest extends $tea.Model {
  aoneId?: string;
  description?: string;
  entityId?: string;
  limitCount?: number;
  type?: string;
  uid?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      aoneId: 'AoneId',
      description: 'Description',
      entityId: 'EntityId',
      limitCount: 'LimitCount',
      type: 'Type',
      uid: 'Uid',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aoneId: 'string',
      description: 'string',
      entityId: 'string',
      limitCount: 'number',
      type: 'string',
      uid: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserWhiteListResponseBody extends $tea.Model {
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

export class CreateUserWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateUserWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateUserWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAllTrafficSpecialControlRequest extends $tea.Model {
  trafficControlId?: string;
  static names(): { [key: string]: string } {
    return {
      trafficControlId: 'TrafficControlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
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

export class DeleteApiForInnerRequest extends $tea.Model {
  aliUid?: number;
  apiId?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      apiId: 'ApiId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      apiId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApiForInnerResponseBody extends $tea.Model {
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

export class DeleteApiForInnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteApiForInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteApiForInnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApiGroupRequest extends $tea.Model {
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
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

export class DeleteAppRequest extends $tea.Model {
  appId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
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

export class DeleteAppForInnerRequest extends $tea.Model {
  aliUid?: number;
  appId?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      appId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppForInnerResponseBody extends $tea.Model {
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

export class DeleteAppForInnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAppForInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAppForInnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRequest extends $tea.Model {
  domainName?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      groupId: 'string',
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
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      domainName: 'DomainName',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      domainName: 'string',
      groupId: 'string',
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

export class DeleteSecretKeyRequest extends $tea.Model {
  secretKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      secretKeyId: 'SecretKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretKeyId: 'string',
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
  trafficControlId?: string;
  static names(): { [key: string]: string } {
    return {
      trafficControlId: 'TrafficControlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  specialKey?: string;
  specialType?: string;
  trafficControlId?: string;
  static names(): { [key: string]: string } {
    return {
      specialKey: 'SpecialKey',
      specialType: 'SpecialType',
      trafficControlId: 'TrafficControlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DeleteUserWhiteListByTypeRequest extends $tea.Model {
  entityId?: string;
  type?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      type: 'Type',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      type: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserWhiteListByTypeResponseBody extends $tea.Model {
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

export class DeleteUserWhiteListByTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteUserWhiteListByTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserWhiteListByTypeResponseBody,
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
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      description: 'Description',
      groupId: 'GroupId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      description: 'string',
      groupId: 'string',
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

export class DeployApiForInnerRequest extends $tea.Model {
  aliUid?: number;
  apiId?: string;
  description?: string;
  groupId?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      apiId: 'ApiId',
      description: 'Description',
      groupId: 'GroupId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      apiId: 'string',
      description: 'string',
      groupId: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployApiForInnerResponseBody extends $tea.Model {
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

export class DeployApiForInnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeployApiForInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeployApiForInnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiRequest extends $tea.Model {
  apiId?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBody extends $tea.Model {
  apiId?: string;
  apiName?: string;
  authType?: string;
  constantParameters?: DescribeApiResponseBodyConstantParameters;
  createdTime?: string;
  customSystemParameters?: DescribeApiResponseBodyCustomSystemParameters;
  deployedInfos?: DescribeApiResponseBodyDeployedInfos;
  description?: string;
  errorCodeSamples?: DescribeApiResponseBodyErrorCodeSamples;
  failResultSample?: string;
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
  resultSample?: string;
  resultType?: string;
  serviceConfig?: DescribeApiResponseBodyServiceConfig;
  serviceParametersObject?: DescribeApiResponseBodyServiceParametersObject;
  systemParameters?: DescribeApiResponseBodySystemParameters;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      authType: 'AuthType',
      constantParameters: 'ConstantParameters',
      createdTime: 'CreatedTime',
      customSystemParameters: 'CustomSystemParameters',
      deployedInfos: 'DeployedInfos',
      description: 'Description',
      errorCodeSamples: 'ErrorCodeSamples',
      failResultSample: 'FailResultSample',
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
      resultSample: 'ResultSample',
      resultType: 'ResultType',
      serviceConfig: 'ServiceConfig',
      serviceParametersObject: 'ServiceParametersObject',
      systemParameters: 'SystemParameters',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      authType: 'string',
      constantParameters: DescribeApiResponseBodyConstantParameters,
      createdTime: 'string',
      customSystemParameters: DescribeApiResponseBodyCustomSystemParameters,
      deployedInfos: DescribeApiResponseBodyDeployedInfos,
      description: 'string',
      errorCodeSamples: DescribeApiResponseBodyErrorCodeSamples,
      failResultSample: 'string',
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
      resultSample: 'string',
      resultType: 'string',
      serviceConfig: DescribeApiResponseBodyServiceConfig,
      serviceParametersObject: DescribeApiResponseBodyServiceParametersObject,
      systemParameters: DescribeApiResponseBodySystemParameters,
      visibility: 'string',
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
  errorCodeSamples?: DescribeApiDocResponseBodyErrorCodeSamples;
  failResultSample?: string;
  groupId?: string;
  groupName?: string;
  httpMethod?: string;
  httpProtocol?: string;
  path?: string;
  pathParameters?: DescribeApiDocResponseBodyPathParameters;
  postBodyDescription?: string;
  postBodyType?: string;
  regionId?: string;
  requestBody?: DescribeApiDocResponseBodyRequestBody;
  requestHeaders?: DescribeApiDocResponseBodyRequestHeaders;
  requestId?: string;
  requestQueries?: DescribeApiDocResponseBodyRequestQueries;
  resultDescriptions?: DescribeApiDocResponseBodyResultDescriptions;
  resultSample?: string;
  resultType?: string;
  sdkDemos?: DescribeApiDocResponseBodySdkDemos;
  serviceTimeout?: number;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      bodyFormat: 'BodyFormat',
      deployedTime: 'DeployedTime',
      description: 'Description',
      errorCodeSamples: 'ErrorCodeSamples',
      failResultSample: 'FailResultSample',
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
      requestQueries: 'RequestQueries',
      resultDescriptions: 'ResultDescriptions',
      resultSample: 'ResultSample',
      resultType: 'ResultType',
      sdkDemos: 'SdkDemos',
      serviceTimeout: 'ServiceTimeout',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      bodyFormat: 'string',
      deployedTime: 'string',
      description: 'string',
      errorCodeSamples: DescribeApiDocResponseBodyErrorCodeSamples,
      failResultSample: 'string',
      groupId: 'string',
      groupName: 'string',
      httpMethod: 'string',
      httpProtocol: 'string',
      path: 'string',
      pathParameters: DescribeApiDocResponseBodyPathParameters,
      postBodyDescription: 'string',
      postBodyType: 'string',
      regionId: 'string',
      requestBody: DescribeApiDocResponseBodyRequestBody,
      requestHeaders: DescribeApiDocResponseBodyRequestHeaders,
      requestId: 'string',
      requestQueries: DescribeApiDocResponseBodyRequestQueries,
      resultDescriptions: DescribeApiDocResponseBodyResultDescriptions,
      resultSample: 'string',
      resultType: 'string',
      sdkDemos: DescribeApiDocResponseBodySdkDemos,
      serviceTimeout: 'number',
      stageName: 'string',
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

export class DescribeApiDocsForBackendRequest extends $tea.Model {
  aliUid?: number;
  apiId?: string;
  apiName?: string;
  groupId?: string;
  pageNumber?: number;
  pageSize?: number;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      apiId: 'ApiId',
      apiName: 'ApiName',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      apiId: 'string',
      apiName: 'string',
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiDocsForBackendResponseBody extends $tea.Model {
  apiInfos?: DescribeApiDocsForBackendResponseBodyApiInfos;
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
      apiInfos: DescribeApiDocsForBackendResponseBodyApiInfos,
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

export class DescribeApiDocsForBackendResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApiDocsForBackendResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApiDocsForBackendResponseBody,
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
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      endTime: 'EndTime',
      groupId: 'GroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      endTime: 'string',
      groupId: 'string',
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
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupDetailResponseBody extends $tea.Model {
  billingStatus?: string;
  createdTime?: string;
  description?: string;
  domainItems?: DescribeApiGroupDetailResponseBodyDomainItems;
  groupId?: string;
  groupName?: string;
  illegalStatus?: string;
  modifiedTime?: string;
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
      domainItems: DescribeApiGroupDetailResponseBodyDomainItems,
      groupId: 'string',
      groupName: 'string',
      illegalStatus: 'string',
      modifiedTime: 'string',
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

export class DescribeApiGroupsRequest extends $tea.Model {
  groupId?: string;
  groupName?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
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

export class DescribeApiLatencyRequest extends $tea.Model {
  apiId?: string;
  endTime?: string;
  groupId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      endTime: 'EndTime',
      groupId: 'GroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      endTime: 'string',
      groupId: 'string',
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

export class DescribeApiMarketInstanceRequest extends $tea.Model {
  aliUid?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiMarketInstanceResponseBody extends $tea.Model {
  instanceAttributes?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceAttributes: 'InstanceAttributes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceAttributes: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiMarketInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApiMarketInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApiMarketInstanceResponseBody,
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
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      endTime: 'EndTime',
      groupId: 'GroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      endTime: 'string',
      groupId: 'string',
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
  groupId?: string;
  pageNumber?: number;
  pageSize?: number;
  ruleType?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiIds: 'ApiIds',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ruleType: 'RuleType',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIds: 'string',
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      ruleType: 'string',
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

export class DescribeApiTrafficRequest extends $tea.Model {
  apiId?: string;
  endTime?: string;
  groupId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      endTime: 'EndTime',
      groupId: 'GroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      endTime: 'string',
      groupId: 'string',
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
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
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

export class DescribeApisByRuleRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  ruleId?: string;
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ruleId: 'RuleId',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      ruleId: 'string',
      ruleType: 'string',
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
  stageName?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
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
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppSecurityResponseBody extends $tea.Model {
  appKey?: string;
  appSecret?: string;
  createdTime?: string;
  modifiedTime?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appSecret: 'AppSecret',
      createdTime: 'CreatedTime',
      modifiedTime: 'ModifiedTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeAppSecurityForInnerRequest extends $tea.Model {
  aliUid?: number;
  appId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      appId: 'AppId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      appId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppSecurityForInnerResponseBody extends $tea.Model {
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

export class DescribeAppSecurityForInnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAppSecurityForInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppSecurityForInnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsRequest extends $tea.Model {
  appId?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
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
  groupId?: string;
  pageNumber?: number;
  pageSize?: number;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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
  appOwner?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appOwner: 'AppOwner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appOwner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

export class DescribeAvailableVipsRequest extends $tea.Model {
  vip?: string;
  static names(): { [key: string]: string } {
    return {
      vip: 'Vip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableVipsResponseBody extends $tea.Model {
  availableVips?: DescribeAvailableVipsResponseBodyAvailableVips;
  static names(): { [key: string]: string } {
    return {
      availableVips: 'AvailableVips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableVips: DescribeAvailableVipsResponseBodyAvailableVips,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableVipsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAvailableVipsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAvailableVipsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBidByUserIdForInnerRequest extends $tea.Model {
  aliUid?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBidByUserIdForInnerResponseBody extends $tea.Model {
  bid?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBidByUserIdForInnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBidByUserIdForInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBidByUserIdForInnerResponseBody,
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
  static names(): { [key: string]: string } {
    return {
      blackType: 'BlackType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
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
  errorCodeSamples?: DescribeDeployedApiResponseBodyErrorCodeSamples;
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
      errorCodeSamples: 'ErrorCodeSamples',
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
      errorCodeSamples: DescribeDeployedApiResponseBodyErrorCodeSamples,
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
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      groupId: 'string',
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
  domainName?: string;
  domainNameResolution?: string;
  domainStatus?: string;
  groupId?: string;
  privateKey?: string;
  requestId?: string;
  subDomain?: string;
  static names(): { [key: string]: string } {
    return {
      certificateBody: 'CertificateBody',
      certificateId: 'CertificateId',
      certificateName: 'CertificateName',
      domainName: 'DomainName',
      domainNameResolution: 'DomainNameResolution',
      domainStatus: 'DomainStatus',
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
      domainName: 'string',
      domainNameResolution: 'string',
      domainStatus: 'string',
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
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      groupId: 'string',
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
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      historyVersion: 'HistoryVersion',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      historyVersion: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryApiResponseBody extends $tea.Model {
  apiId?: string;
  apiName?: string;
  authType?: string;
  bodyFormat?: string;
  constantParameters?: DescribeHistoryApiResponseBodyConstantParameters;
  deployedTime?: string;
  description?: string;
  errorCodeSamples?: DescribeHistoryApiResponseBodyErrorCodeSamples;
  functionComputeConfig?: DescribeHistoryApiResponseBodyFunctionComputeConfig;
  groupId?: string;
  groupName?: string;
  historyVersion?: string;
  httpMethod?: string;
  httpProtocol?: string;
  mock?: string;
  mockResult?: string;
  originResultDescription?: string;
  path?: string;
  pathParameters?: DescribeHistoryApiResponseBodyPathParameters;
  postBodyDescription?: string;
  postBodyType?: string;
  regionId?: string;
  requestBody?: DescribeHistoryApiResponseBodyRequestBody;
  requestHeaders?: DescribeHistoryApiResponseBodyRequestHeaders;
  requestId?: string;
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
      apiId: 'ApiId',
      apiName: 'ApiName',
      authType: 'AuthType',
      bodyFormat: 'BodyFormat',
      constantParameters: 'ConstantParameters',
      deployedTime: 'DeployedTime',
      description: 'Description',
      errorCodeSamples: 'ErrorCodeSamples',
      functionComputeConfig: 'FunctionComputeConfig',
      groupId: 'GroupId',
      groupName: 'GroupName',
      historyVersion: 'HistoryVersion',
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
      apiId: 'string',
      apiName: 'string',
      authType: 'string',
      bodyFormat: 'string',
      constantParameters: DescribeHistoryApiResponseBodyConstantParameters,
      deployedTime: 'string',
      description: 'string',
      errorCodeSamples: DescribeHistoryApiResponseBodyErrorCodeSamples,
      functionComputeConfig: DescribeHistoryApiResponseBodyFunctionComputeConfig,
      groupId: 'string',
      groupName: 'string',
      historyVersion: 'string',
      httpMethod: 'string',
      httpProtocol: 'string',
      mock: 'string',
      mockResult: 'string',
      originResultDescription: 'string',
      path: 'string',
      pathParameters: DescribeHistoryApiResponseBodyPathParameters,
      postBodyDescription: 'string',
      postBodyType: 'string',
      regionId: 'string',
      requestBody: DescribeHistoryApiResponseBodyRequestBody,
      requestHeaders: DescribeHistoryApiResponseBodyRequestHeaders,
      requestId: 'string',
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
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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

export class DescribeModelsForInnerRequest extends $tea.Model {
  aliUid?: number;
  groupId?: string;
  modelId?: string;
  modelName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      groupId: 'GroupId',
      modelId: 'ModelId',
      modelName: 'ModelName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
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

export class DescribeModelsForInnerResponseBody extends $tea.Model {
  modelDetails?: DescribeModelsForInnerResponseBodyModelDetails;
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
      modelDetails: DescribeModelsForInnerResponseBodyModelDetails,
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

export class DescribeModelsForInnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeModelsForInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeModelsForInnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiRequest extends $tea.Model {
  apiId?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
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
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
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
  groupIds?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      groupIds: 'GroupIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIds: 'string',
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
  stageName?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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
      stageName: 'string',
      visibility: 'string',
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
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
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

export class DescribeRaceWorksForInnerRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRaceWorksForInnerResponseBody extends $tea.Model {
  apiWorks?: DescribeRaceWorksForInnerResponseBodyApiWorks;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiWorks: 'ApiWorks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiWorks: DescribeRaceWorksForInnerResponseBodyApiWorks,
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

export class DescribeRaceWorksForInnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRaceWorksForInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRaceWorksForInnerResponseBody,
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
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
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
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      secretKeyId: 'SecretKeyId',
      secretKeyName: 'SecretKeyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      secretKeyId: 'string',
      secretKeyName: 'string',
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
  stageName?: string;
  trafficControlId?: string;
  trafficControlName?: string;
  static names(): { [key: string]: string } {
    return {
      apiUid: 'ApiUid',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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

export class DescribeUserWhiteListsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  type?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      type: 'Type',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      type: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserWhiteListsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  userWhiteListInfos?: DescribeUserWhiteListsResponseBodyUserWhiteListInfos;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      userWhiteListInfos: 'UserWhiteListInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      userWhiteListInfos: DescribeUserWhiteListsResponseBodyUserWhiteListInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserWhiteListsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUserWhiteListsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserWhiteListsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsIncludedByUserWhitelistRequest extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsIncludedByUserWhitelistResponseBody extends $tea.Model {
  isIncluded?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isIncluded: 'IsIncluded',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isIncluded: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsIncludedByUserWhitelistResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: IsIncludedByUserWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: IsIncludedByUserWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiRequest extends $tea.Model {
  apiId?: string;
  apiName?: string;
  authType?: string;
  bodyFormat?: string;
  constantParameters?: string;
  description?: string;
  groupId?: string;
  httpMethod?: string;
  httpProtocol?: string;
  path?: string;
  pathParameters?: string;
  postBodyDescription?: string;
  postBodyType?: string;
  requestBody?: string;
  requestHeaders?: string;
  requestQueries?: string;
  resultSample?: string;
  resultType?: string;
  serviceAddress?: string;
  serviceProtocol?: string;
  serviceTimeout?: number;
  systemParameters?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      authType: 'AuthType',
      bodyFormat: 'BodyFormat',
      constantParameters: 'ConstantParameters',
      description: 'Description',
      groupId: 'GroupId',
      httpMethod: 'HttpMethod',
      httpProtocol: 'HttpProtocol',
      path: 'Path',
      pathParameters: 'PathParameters',
      postBodyDescription: 'PostBodyDescription',
      postBodyType: 'PostBodyType',
      requestBody: 'RequestBody',
      requestHeaders: 'RequestHeaders',
      requestQueries: 'RequestQueries',
      resultSample: 'ResultSample',
      resultType: 'ResultType',
      serviceAddress: 'ServiceAddress',
      serviceProtocol: 'ServiceProtocol',
      serviceTimeout: 'ServiceTimeout',
      systemParameters: 'SystemParameters',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      authType: 'string',
      bodyFormat: 'string',
      constantParameters: 'string',
      description: 'string',
      groupId: 'string',
      httpMethod: 'string',
      httpProtocol: 'string',
      path: 'string',
      pathParameters: 'string',
      postBodyDescription: 'string',
      postBodyType: 'string',
      requestBody: 'string',
      requestHeaders: 'string',
      requestQueries: 'string',
      resultSample: 'string',
      resultType: 'string',
      serviceAddress: 'string',
      serviceProtocol: 'string',
      serviceTimeout: 'number',
      systemParameters: 'string',
      visibility: 'string',
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

export class ModifyApiForInnerRequest extends $tea.Model {
  aliUid?: number;
  apiId?: string;
  apiName?: string;
  authType?: string;
  description?: string;
  groupId?: string;
  requestConfig?: string;
  requestParamters?: string;
  resultSample?: string;
  resultType?: string;
  serviceConfig?: string;
  serviceParameters?: string;
  serviceParametersMap?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      apiId: 'ApiId',
      apiName: 'ApiName',
      authType: 'AuthType',
      description: 'Description',
      groupId: 'GroupId',
      requestConfig: 'RequestConfig',
      requestParamters: 'RequestParamters',
      resultSample: 'ResultSample',
      resultType: 'ResultType',
      serviceConfig: 'ServiceConfig',
      serviceParameters: 'ServiceParameters',
      serviceParametersMap: 'ServiceParametersMap',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      apiId: 'string',
      apiName: 'string',
      authType: 'string',
      description: 'string',
      groupId: 'string',
      requestConfig: 'string',
      requestParamters: 'string',
      resultSample: 'string',
      resultType: 'string',
      serviceConfig: 'string',
      serviceParameters: 'string',
      serviceParametersMap: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiForInnerResponseBody extends $tea.Model {
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

export class ModifyApiForInnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyApiForInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyApiForInnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiGroupRequest extends $tea.Model {
  description?: string;
  groupId?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      groupName: 'string',
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

export class ModifyApiMarketInstanceAttributeRequest extends $tea.Model {
  aliUid?: string;
  groupId?: string;
  instanceAttributes?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      groupId: 'GroupId',
      instanceAttributes: 'InstanceAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      groupId: 'string',
      instanceAttributes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiMarketInstanceAttributeResponseBody extends $tea.Model {
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

export class ModifyApiMarketInstanceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyApiMarketInstanceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyApiMarketInstanceAttributeResponseBody,
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

export class ModifyAppForInnerRequest extends $tea.Model {
  aliUid?: number;
  appId?: number;
  appName?: string;
  description?: string;
  extend?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      appId: 'AppId',
      appName: 'AppName',
      description: 'Description',
      extend: 'Extend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      appId: 'number',
      appName: 'string',
      description: 'string',
      extend: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppForInnerResponseBody extends $tea.Model {
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

export class ModifyAppForInnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyAppForInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAppForInnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGroupAuthAppCodeForBackendRequest extends $tea.Model {
  aliUid?: number;
  authAppCode?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      authAppCode: 'AuthAppCode',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      authAppCode: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGroupAuthAppCodeForBackendResponseBody extends $tea.Model {
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

export class ModifyGroupAuthAppCodeForBackendResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyGroupAuthAppCodeForBackendResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyGroupAuthAppCodeForBackendResponseBody,
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
  static names(): { [key: string]: string } {
    return {
      secretKey: 'SecretKey',
      secretKeyId: 'SecretKeyId',
      secretKeyName: 'SecretKeyName',
      secretValue: 'SecretValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretKey: 'string',
      secretKeyId: 'string',
      secretKeyName: 'string',
      secretValue: 'string',
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
  trafficControlId?: string;
  trafficControlName?: string;
  trafficControlUnit?: string;
  userDefault?: number;
  static names(): { [key: string]: string } {
    return {
      apiDefault: 'ApiDefault',
      appDefault: 'AppDefault',
      description: 'Description',
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

export class ModifyUserWhiteListValueByTypeRequest extends $tea.Model {
  description?: string;
  type?: string;
  uid?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      type: 'Type',
      uid: 'Uid',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      type: 'string',
      uid: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserWhiteListValueByTypeResponseBody extends $tea.Model {
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

export class ModifyUserWhiteListValueByTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyUserWhiteListValueByTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyUserWhiteListValueByTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReactivateDomainForBackendRequest extends $tea.Model {
  aliuid?: number;
  domainName?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'Aliuid',
      domainName: 'DomainName',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'number',
      domainName: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReactivateDomainForBackendResponseBody extends $tea.Model {
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

export class ReactivateDomainForBackendResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReactivateDomainForBackendResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReactivateDomainForBackendResponseBody,
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
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      historyVersion: 'HistoryVersion',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      historyVersion: 'string',
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
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      historyVersion: 'HistoryVersion',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      historyVersion: 'string',
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
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      historyVersion: 'HistoryVersion',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      historyVersion: 'string',
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
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      groupId: 'string',
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
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiIds: 'ApiIds',
      appId: 'AppId',
      description: 'Description',
      groupId: 'GroupId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIds: 'string',
      appId: 'number',
      description: 'string',
      groupId: 'string',
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
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      appIds: 'AppIds',
      groupId: 'GroupId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      appIds: 'string',
      groupId: 'string',
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

export class RemoveAccessPermissionByAppsForInnerRequest extends $tea.Model {
  aliUid?: number;
  apiId?: string;
  appIds?: string;
  groupId?: string;
  source?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      apiId: 'ApiId',
      appIds: 'AppIds',
      groupId: 'GroupId',
      source: 'Source',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      apiId: 'string',
      appIds: 'string',
      groupId: 'string',
      source: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAccessPermissionByAppsForInnerResponseBody extends $tea.Model {
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

export class RemoveAccessPermissionByAppsForInnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveAccessPermissionByAppsForInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveAccessPermissionByAppsForInnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAllBlackListRequest extends $tea.Model {
  blackType?: string;
  static names(): { [key: string]: string } {
    return {
      blackType: 'BlackType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackType: 'string',
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
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiIds: 'ApiIds',
      groupId: 'GroupId',
      ruleId: 'RuleId',
      ruleType: 'RuleType',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIds: 'string',
      groupId: 'string',
      ruleId: 'string',
      ruleType: 'string',
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

export class RemoveAppsFromApiRequest extends $tea.Model {
  apiId?: string;
  appIds?: string;
  groupId?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      appIds: 'AppIds',
      groupId: 'GroupId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      appIds: 'string',
      groupId: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAppsFromApiResponseBody extends $tea.Model {
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

export class RemoveAppsFromApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveAppsFromApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveAppsFromApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBlackListRequest extends $tea.Model {
  blackContent?: string;
  blackType?: string;
  static names(): { [key: string]: string } {
    return {
      blackContent: 'BlackContent',
      blackType: 'BlackType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackContent: 'string',
      blackType: 'string',
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

export class ResetAppCodeRequest extends $tea.Model {
  appCode?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ResetAppCodeForInnerRequest extends $tea.Model {
  aliUid?: number;
  appCode?: string;
  newAppCode?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      appCode: 'AppCode',
      newAppCode: 'NewAppCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      appCode: 'string',
      newAppCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAppCodeForInnerResponseBody extends $tea.Model {
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

export class ResetAppCodeForInnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResetAppCodeForInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetAppCodeForInnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAppKeySecretRequest extends $tea.Model {
  appKey?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
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

export class ResetSecretByAppKeyForInnerRequest extends $tea.Model {
  aliUid?: number;
  appKey?: string;
  newAppKey?: string;
  newAppSecret?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      appKey: 'AppKey',
      newAppKey: 'NewAppKey',
      newAppSecret: 'NewAppSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      appKey: 'string',
      newAppKey: 'string',
      newAppSecret: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSecretByAppKeyForInnerResponseBody extends $tea.Model {
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

export class ResetSecretByAppKeyForInnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResetSecretByAppKeyForInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetSecretByAppKeyForInnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAccessPermissionByApisRequest extends $tea.Model {
  apiIds?: string;
  appId?: number;
  description?: string;
  groupId?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiIds: 'ApiIds',
      appId: 'AppId',
      description: 'Description',
      groupId: 'GroupId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIds: 'string',
      appId: 'number',
      description: 'string',
      groupId: 'string',
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

export class SetAccessPermissionByGroupForBackendRequest extends $tea.Model {
  appId?: number;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAccessPermissionByGroupForBackendResponseBody extends $tea.Model {
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

export class SetAccessPermissionByGroupForBackendResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetAccessPermissionByGroupForBackendResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetAccessPermissionByGroupForBackendResponseBody,
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
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      appIds: 'AppIds',
      description: 'Description',
      groupId: 'GroupId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      appIds: 'string',
      description: 'string',
      groupId: 'string',
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

export class SetAccessPermissionsForInnerRequest extends $tea.Model {
  aliUid?: number;
  apiId?: string;
  appIds?: string;
  description?: string;
  groupId?: string;
  source?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      apiId: 'ApiId',
      appIds: 'AppIds',
      description: 'Description',
      groupId: 'GroupId',
      source: 'Source',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      apiId: 'string',
      appIds: 'string',
      description: 'string',
      groupId: 'string',
      source: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAccessPermissionsForInnerResponseBody extends $tea.Model {
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

export class SetAccessPermissionsForInnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetAccessPermissionsForInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetAccessPermissionsForInnerResponseBody,
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
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiIds: 'ApiIds',
      groupId: 'GroupId',
      ruleId: 'RuleId',
      ruleType: 'RuleType',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIds: 'string',
      groupId: 'string',
      ruleId: 'string',
      ruleType: 'string',
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
  certificateBody?: string;
  certificateName?: string;
  domainName?: string;
  groupId?: string;
  privateKey?: string;
  static names(): { [key: string]: string } {
    return {
      certificateBody: 'CertificateBody',
      certificateName: 'CertificateName',
      domainName: 'DomainName',
      groupId: 'GroupId',
      privateKey: 'PrivateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateBody: 'string',
      certificateName: 'string',
      domainName: 'string',
      groupId: 'string',
      privateKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainResponseBody extends $tea.Model {
  domainName?: string;
  domainStatus?: string;
  groupId?: string;
  requestId?: string;
  subDomain?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      groupId: 'GroupId',
      requestId: 'RequestId',
      subDomain: 'SubDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
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
  certificateBody?: string;
  certificateName?: string;
  domainName?: string;
  groupId?: string;
  privateKey?: string;
  static names(): { [key: string]: string } {
    return {
      certificateBody: 'CertificateBody',
      certificateName: 'CertificateName',
      domainName: 'DomainName',
      groupId: 'GroupId',
      privateKey: 'PrivateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateBody: 'string',
      certificateName: 'string',
      domainName: 'string',
      groupId: 'string',
      privateKey: 'string',
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

export class SetDomainForBackendRequest extends $tea.Model {
  certificateBody?: string;
  certificateName?: string;
  certificatePrivateKey?: string;
  domainName?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateBody: 'CertificateBody',
      certificateName: 'CertificateName',
      certificatePrivateKey: 'CertificatePrivateKey',
      domainName: 'DomainName',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateBody: 'string',
      certificateName: 'string',
      certificatePrivateKey: 'string',
      domainName: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainForBackendResponseBody extends $tea.Model {
  domainBindingStatus?: string;
  domainName?: string;
  groupId?: string;
  requestId?: string;
  subDomain?: string;
  static names(): { [key: string]: string } {
    return {
      domainBindingStatus: 'DomainBindingStatus',
      domainName: 'DomainName',
      groupId: 'GroupId',
      requestId: 'RequestId',
      subDomain: 'SubDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainBindingStatus: 'string',
      domainName: 'string',
      groupId: 'string',
      requestId: 'string',
      subDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainForBackendResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDomainForBackendResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetDomainForBackendResponseBody,
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
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      mock: 'Mock',
      mockResult: 'MockResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      mock: 'string',
      mockResult: 'string',
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

export class SetPurchasedApiGroupStatusRequest extends $tea.Model {
  aliUid?: number;
  billingStatus?: string;
  closeOrder?: boolean;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      billingStatus: 'BillingStatus',
      closeOrder: 'CloseOrder',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      billingStatus: 'string',
      closeOrder: 'boolean',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPurchasedApiGroupStatusResponseBody extends $tea.Model {
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

export class SetPurchasedApiGroupStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetPurchasedApiGroupStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetPurchasedApiGroupStatusResponseBody,
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
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      description: 'Description',
      groupId: 'GroupId',
      historyVersion: 'HistoryVersion',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      description: 'string',
      groupId: 'string',
      historyVersion: 'string',
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

export class SwitchApiForInnerRequest extends $tea.Model {
  apiId?: string;
  description?: string;
  groupId?: string;
  historyVersion?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      description: 'Description',
      groupId: 'GroupId',
      historyVersion: 'HistoryVersion',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      description: 'string',
      groupId: 'string',
      historyVersion: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchApiForInnerResponseBody extends $tea.Model {
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

export class SwitchApiForInnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SwitchApiForInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SwitchApiForInnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SynCreateAppForInnerRequest extends $tea.Model {
  aliUid?: number;
  appKey?: number;
  appName?: string;
  appSecret?: string;
  description?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      appKey: 'AppKey',
      appName: 'AppName',
      appSecret: 'AppSecret',
      description: 'Description',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      appKey: 'number',
      appName: 'string',
      appSecret: 'string',
      description: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SynCreateAppForInnerResponseBody extends $tea.Model {
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

export class SynCreateAppForInnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SynCreateAppForInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SynCreateAppForInnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesSystemTagsRequest extends $tea.Model {
  resourceId?: string[];
  resourceType?: string;
  scope?: string;
  securityToken?: string;
  tag?: TagResourcesSystemTagsRequestTag[];
  tagOwnerBid?: string;
  tagOwnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      scope: 'Scope',
      securityToken: 'SecurityToken',
      tag: 'Tag',
      tagOwnerBid: 'TagOwnerBid',
      tagOwnerUid: 'TagOwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      scope: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesSystemTagsRequestTag },
      tagOwnerBid: 'string',
      tagOwnerUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesSystemTagsResponseBody extends $tea.Model {
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

export class TagResourcesSystemTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TagResourcesSystemTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesSystemTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesSystemTagsRequest extends $tea.Model {
  all?: boolean;
  resourceId?: string[];
  resourceType?: string;
  securityToken?: string;
  tagKey?: string[];
  tagOwnerBid?: string;
  tagOwnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      securityToken: 'SecurityToken',
      tagKey: 'TagKey',
      tagOwnerBid: 'TagOwnerBid',
      tagOwnerUid: 'TagOwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      securityToken: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
      tagOwnerBid: 'string',
      tagOwnerUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesSystemTagsResponseBody extends $tea.Model {
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

export class UntagResourcesSystemTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UntagResourcesSystemTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesSystemTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VipMigrationRequest extends $tea.Model {
  newVip?: string;
  originalVip?: string;
  static names(): { [key: string]: string } {
    return {
      newVip: 'NewVip',
      originalVip: 'OriginalVip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newVip: 'string',
      originalVip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VipMigrationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VipMigrationByUidRequest extends $tea.Model {
  newVip?: string;
  originalVip?: string;
  static names(): { [key: string]: string } {
    return {
      newVip: 'NewVip',
      originalVip: 'OriginalVip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newVip: 'string',
      originalVip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VipMigrationByUidResponseBody extends $tea.Model {
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

export class VipMigrationByUidResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VipMigrationByUidResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VipMigrationByUidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VpcAddAppServerRequest extends $tea.Model {
  addressPoolId?: string;
  appId?: string;
  serverIp?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      addressPoolId: 'AddressPoolId',
      appId: 'AppId',
      serverIp: 'ServerIp',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressPoolId: 'string',
      appId: 'string',
      serverIp: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VpcAddAppServerResponseBody extends $tea.Model {
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

export class VpcAddAppServerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VpcAddAppServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VpcAddAppServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VpcCreateAddressPoolRequest extends $tea.Model {
  appId?: string;
  description?: string;
  name?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      description: 'Description',
      name: 'Name',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      description: 'string',
      name: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VpcCreateAddressPoolResponseBody extends $tea.Model {
  addressPoolId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addressPoolId: 'AddressPoolId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressPoolId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VpcCreateAddressPoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VpcCreateAddressPoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VpcCreateAddressPoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VpcQueryAppServersRequest extends $tea.Model {
  addressPoolId?: string;
  appId?: string;
  serverIp?: string;
  static names(): { [key: string]: string } {
    return {
      addressPoolId: 'AddressPoolId',
      appId: 'AppId',
      serverIp: 'ServerIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressPoolId: 'string',
      appId: 'string',
      serverIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VpcQueryAppServersResponseBody extends $tea.Model {
  appServerInfos?: VpcQueryAppServersResponseBodyAppServerInfos;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appServerInfos: 'AppServerInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appServerInfos: VpcQueryAppServersResponseBodyAppServerInfos,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VpcQueryAppServersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VpcQueryAppServersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VpcQueryAppServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VpcRegisterAppRequest extends $tea.Model {
  appId?: string;
  description?: string;
  name?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      description: 'Description',
      name: 'Name',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      description: 'string',
      name: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VpcRegisterAppResponseBody extends $tea.Model {
  appId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VpcRegisterAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VpcRegisterAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VpcRegisterAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VpcRemoveAppServerRequest extends $tea.Model {
  appId?: string;
  serverIp?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      serverIp: 'ServerIp',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      serverIp: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VpcRemoveAppServerResponseBody extends $tea.Model {
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

export class VpcRemoveAppServerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VpcRemoveAppServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VpcRemoveAppServerResponseBody,
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
  postBodyDescription?: string;
  requestHttpMethod?: string;
  requestPath?: string;
  requestProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      bodyFormat: 'BodyFormat',
      postBodyDescription: 'PostBodyDescription',
      requestHttpMethod: 'RequestHttpMethod',
      requestPath: 'RequestPath',
      requestProtocol: 'RequestProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyFormat: 'string',
      postBodyDescription: 'string',
      requestHttpMethod: 'string',
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

export class DescribeApiResponseBodyServiceConfigVpcConfig extends $tea.Model {
  id?: string;
  instanceId?: string;
  name?: string;
  port?: number;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      instanceId: 'InstanceId',
      name: 'Name',
      port: 'Port',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class DescribeApiResponseBodyServiceConfig extends $tea.Model {
  contentTypeCatagory?: string;
  contentTypeValue?: string;
  functionComputeConfig?: DescribeApiResponseBodyServiceConfigFunctionComputeConfig;
  mock?: string;
  mockResult?: string;
  serviceAddress?: string;
  serviceHttpMethod?: string;
  servicePath?: string;
  serviceProtocol?: string;
  serviceTimeout?: string;
  serviceVpcEnable?: string;
  vpcConfig?: DescribeApiResponseBodyServiceConfigVpcConfig;
  static names(): { [key: string]: string } {
    return {
      contentTypeCatagory: 'ContentTypeCatagory',
      contentTypeValue: 'ContentTypeValue',
      functionComputeConfig: 'FunctionComputeConfig',
      mock: 'Mock',
      mockResult: 'MockResult',
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
      contentTypeCatagory: 'string',
      contentTypeValue: 'string',
      functionComputeConfig: DescribeApiResponseBodyServiceConfigFunctionComputeConfig,
      mock: 'string',
      mockResult: 'string',
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

export class DescribeApiDocResponseBodySdkDemosSdkDemo extends $tea.Model {
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

export class DescribeApiDocResponseBodySdkDemos extends $tea.Model {
  sdkDemo?: DescribeApiDocResponseBodySdkDemosSdkDemo[];
  static names(): { [key: string]: string } {
    return {
      sdkDemo: 'SdkDemo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sdkDemo: { 'type': 'array', 'itemType': DescribeApiDocResponseBodySdkDemosSdkDemo },
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

export class DescribeApiDocsForBackendResponseBodyApiInfosApiInfo extends $tea.Model {
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

export class DescribeApiDocsForBackendResponseBodyApiInfos extends $tea.Model {
  apiInfo?: DescribeApiDocsForBackendResponseBodyApiInfosApiInfo[];
  static names(): { [key: string]: string } {
    return {
      apiInfo: 'ApiInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfo: { 'type': 'array', 'itemType': DescribeApiDocsForBackendResponseBodyApiInfosApiInfo },
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

export class DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttribute extends $tea.Model {
  billingStatus?: string;
  createdTime?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  illegalStatus?: string;
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
      illegalStatus: 'IllegalStatus',
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
      illegalStatus: 'string',
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
  authorizationSource?: string;
  createdTime?: string;
  description?: string;
  operator?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
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

export class DescribeAvailableVipsResponseBodyAvailableVips extends $tea.Model {
  availableVip?: string[];
  static names(): { [key: string]: string } {
    return {
      availableVip: 'AvailableVip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableVip: { 'type': 'array', 'itemType': 'string' },
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

export class DescribeModelsForInnerResponseBodyModelDetailsModelDetail extends $tea.Model {
  createdTime?: string;
  description?: string;
  groupId?: string;
  modelName?: string;
  modelRef?: string;
  modifiedTime?: string;
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      groupId: 'GroupId',
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

export class DescribeModelsForInnerResponseBodyModelDetails extends $tea.Model {
  modelDetail?: DescribeModelsForInnerResponseBodyModelDetailsModelDetail[];
  static names(): { [key: string]: string } {
    return {
      modelDetail: 'ModelDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelDetail: { 'type': 'array', 'itemType': DescribeModelsForInnerResponseBodyModelDetailsModelDetail },
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
  status?: string;
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
      status: 'Status',
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

export class DescribePurchasedApisResponseBodyApiInfosApiInfo extends $tea.Model {
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

export class DescribeRaceWorksForInnerResponseBodyApiWorksApiWork extends $tea.Model {
  commodityCode?: string;
  createTime?: string;
  groupId?: string;
  keywords?: string;
  logoUrl?: string;
  modifiedTime?: string;
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
      shortDescription: 'string',
      workName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRaceWorksForInnerResponseBodyApiWorks extends $tea.Model {
  apiWork?: DescribeRaceWorksForInnerResponseBodyApiWorksApiWork[];
  static names(): { [key: string]: string } {
    return {
      apiWork: 'ApiWork',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiWork: { 'type': 'array', 'itemType': DescribeRaceWorksForInnerResponseBodyApiWorksApiWork },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
  endPoint?: string;
  localName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      endPoint: 'EndPoint',
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endPoint: 'string',
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

export class DescribeUserWhiteListsResponseBodyUserWhiteListInfosUserWhiteListInfo extends $tea.Model {
  aoneId?: string;
  createTime?: string;
  description?: string;
  id?: number;
  modifiedTime?: string;
  type?: string;
  uid?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      aoneId: 'AoneId',
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      type: 'Type',
      uid: 'Uid',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aoneId: 'string',
      createTime: 'string',
      description: 'string',
      id: 'number',
      modifiedTime: 'string',
      type: 'string',
      uid: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserWhiteListsResponseBodyUserWhiteListInfos extends $tea.Model {
  userWhiteListInfo?: DescribeUserWhiteListsResponseBodyUserWhiteListInfosUserWhiteListInfo[];
  static names(): { [key: string]: string } {
    return {
      userWhiteListInfo: 'UserWhiteListInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userWhiteListInfo: { 'type': 'array', 'itemType': DescribeUserWhiteListsResponseBodyUserWhiteListInfosUserWhiteListInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesSystemTagsRequestTag extends $tea.Model {
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

export class VpcQueryAppServersResponseBodyAppServerInfosAppServerInfo extends $tea.Model {
  addressPoolId?: string;
  appId?: string;
  serverIp?: string;
  serverMappingIp?: string;
  serverType?: string;
  status?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      addressPoolId: 'AddressPoolId',
      appId: 'AppId',
      serverIp: 'ServerIp',
      serverMappingIp: 'ServerMappingIp',
      serverType: 'ServerType',
      status: 'Status',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressPoolId: 'string',
      appId: 'string',
      serverIp: 'string',
      serverMappingIp: 'string',
      serverType: 'string',
      status: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VpcQueryAppServersResponseBodyAppServerInfos extends $tea.Model {
  appServerInfo?: VpcQueryAppServersResponseBodyAppServerInfosAppServerInfo[];
  static names(): { [key: string]: string } {
    return {
      appServerInfo: 'AppServerInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appServerInfo: { 'type': 'array', 'itemType': VpcQueryAppServersResponseBodyAppServerInfosAppServerInfo },
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

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AbolishApi",
      version: "2016-02-01",
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

  async abolishApiForInnerWithOptions(request: AbolishApiForInnerRequest, runtime: $Util.RuntimeOptions): Promise<AbolishApiForInnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AbolishApiForInner",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AbolishApiForInnerResponse>(await this.callApi(params, req, runtime), new AbolishApiForInnerResponse({}));
  }

  async abolishApiForInner(request: AbolishApiForInnerRequest): Promise<AbolishApiForInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abolishApiForInnerWithOptions(request, runtime);
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddBlackList",
      version: "2016-02-01",
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

  async addTrafficSpecialControlWithOptions(request: AddTrafficSpecialControlRequest, runtime: $Util.RuntimeOptions): Promise<AddTrafficSpecialControlResponse> {
    Util.validateModel(request);
    let query = { };
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
      version: "2016-02-01",
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

  async checkAccountForInnerWithOptions(request: CheckAccountForInnerRequest, runtime: $Util.RuntimeOptions): Promise<CheckAccountForInnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckAccountForInner",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckAccountForInnerResponse>(await this.callApi(params, req, runtime), new CheckAccountForInnerResponse({}));
  }

  async checkAccountForInner(request: CheckAccountForInnerRequest): Promise<CheckAccountForInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkAccountForInnerWithOptions(request, runtime);
  }

  async checkAoneAppAuditWithOptions(request: CheckAoneAppAuditRequest, runtime: $Util.RuntimeOptions): Promise<CheckAoneAppAuditResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aoneAppName)) {
      query["AoneAppName"] = request.aoneAppName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckAoneAppAudit",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckAoneAppAuditResponse>(await this.callApi(params, req, runtime), new CheckAoneAppAuditResponse({}));
  }

  async checkAoneAppAudit(request: CheckAoneAppAuditRequest): Promise<CheckAoneAppAuditResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkAoneAppAuditWithOptions(request, runtime);
  }

  async copyConsumerOpenForInnerWithOptions(request: CopyConsumerOpenForInnerRequest, runtime: $Util.RuntimeOptions): Promise<CopyConsumerOpenForInnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.copyList)) {
      query["CopyList"] = request.copyList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CopyConsumerOpenForInner",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CopyConsumerOpenForInnerResponse>(await this.callApi(params, req, runtime), new CopyConsumerOpenForInnerResponse({}));
  }

  async copyConsumerOpenForInner(request: CopyConsumerOpenForInnerRequest): Promise<CopyConsumerOpenForInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyConsumerOpenForInnerWithOptions(request, runtime);
  }

  async createApiWithOptions(request: CreateApiRequest, runtime: $Util.RuntimeOptions): Promise<CreateApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!Util.isUnset(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!Util.isUnset(request.bodyFormat)) {
      query["BodyFormat"] = request.bodyFormat;
    }

    if (!Util.isUnset(request.constantParameters)) {
      query["ConstantParameters"] = request.constantParameters;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.httpMethod)) {
      query["HttpMethod"] = request.httpMethod;
    }

    if (!Util.isUnset(request.httpProtocol)) {
      query["HttpProtocol"] = request.httpProtocol;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.pathParameters)) {
      query["PathParameters"] = request.pathParameters;
    }

    if (!Util.isUnset(request.postBodyDescription)) {
      query["PostBodyDescription"] = request.postBodyDescription;
    }

    if (!Util.isUnset(request.postBodyType)) {
      query["PostBodyType"] = request.postBodyType;
    }

    if (!Util.isUnset(request.requestBody)) {
      query["RequestBody"] = request.requestBody;
    }

    if (!Util.isUnset(request.requestHeaders)) {
      query["RequestHeaders"] = request.requestHeaders;
    }

    if (!Util.isUnset(request.requestQueries)) {
      query["RequestQueries"] = request.requestQueries;
    }

    if (!Util.isUnset(request.resultSample)) {
      query["ResultSample"] = request.resultSample;
    }

    if (!Util.isUnset(request.resultType)) {
      query["ResultType"] = request.resultType;
    }

    if (!Util.isUnset(request.serviceAddress)) {
      query["ServiceAddress"] = request.serviceAddress;
    }

    if (!Util.isUnset(request.serviceProtocol)) {
      query["ServiceProtocol"] = request.serviceProtocol;
    }

    if (!Util.isUnset(request.serviceTimeout)) {
      query["ServiceTimeout"] = request.serviceTimeout;
    }

    if (!Util.isUnset(request.systemParameters)) {
      query["SystemParameters"] = request.systemParameters;
    }

    if (!Util.isUnset(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApi",
      version: "2016-02-01",
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

  async createApiForInnerWithOptions(request: CreateApiForInnerRequest, runtime: $Util.RuntimeOptions): Promise<CreateApiForInnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!Util.isUnset(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.requestConfig)) {
      query["RequestConfig"] = request.requestConfig;
    }

    if (!Util.isUnset(request.requestParamters)) {
      query["RequestParamters"] = request.requestParamters;
    }

    if (!Util.isUnset(request.resultSample)) {
      query["ResultSample"] = request.resultSample;
    }

    if (!Util.isUnset(request.resultType)) {
      query["ResultType"] = request.resultType;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApiForInner",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateApiForInnerResponse>(await this.callApi(params, req, runtime), new CreateApiForInnerResponse({}));
  }

  async createApiForInner(request: CreateApiForInnerRequest): Promise<CreateApiForInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApiForInnerWithOptions(request, runtime);
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

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApiGroup",
      version: "2016-02-01",
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

  async createApiGroupForInnerWithOptions(request: CreateApiGroupForInnerRequest, runtime: $Util.RuntimeOptions): Promise<CreateApiGroupForInnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApiGroupForInner",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateApiGroupForInnerResponse>(await this.callApi(params, req, runtime), new CreateApiGroupForInnerResponse({}));
  }

  async createApiGroupForInner(request: CreateApiGroupForInnerRequest): Promise<CreateApiGroupForInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApiGroupForInnerWithOptions(request, runtime);
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApp",
      version: "2016-02-01",
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

  async createAppForBackendWithOptions(request: CreateAppForBackendRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppForBackendResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppForBackend",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppForBackendResponse>(await this.callApi(params, req, runtime), new CreateAppForBackendResponse({}));
  }

  async createAppForBackend(request: CreateAppForBackendRequest): Promise<CreateAppForBackendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppForBackendWithOptions(request, runtime);
  }

  async createAppForInnerWithOptions(request: CreateAppForInnerRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppForInnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

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

    if (!Util.isUnset(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppForInner",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppForInnerResponse>(await this.callApi(params, req, runtime), new CreateAppForInnerResponse({}));
  }

  async createAppForInner(request: CreateAppForInnerRequest): Promise<CreateAppForInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppForInnerWithOptions(request, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountQuantity)) {
      query["AccountQuantity"] = request.accountQuantity;
    }

    if (!Util.isUnset(request.alarmQuota)) {
      query["AlarmQuota"] = request.alarmQuota;
    }

    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.billingType)) {
      query["BillingType"] = request.billingType;
    }

    if (!Util.isUnset(request.cloudMarketInstanceId)) {
      query["CloudMarketInstanceId"] = request.cloudMarketInstanceId;
    }

    if (!Util.isUnset(request.expiredOn)) {
      query["ExpiredOn"] = request.expiredOn;
    }

    if (!Util.isUnset(request.instanceAttributes)) {
      query["InstanceAttributes"] = request.instanceAttributes;
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
      version: "2016-02-01",
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
      version: "2016-02-01",
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSecretKey",
      version: "2016-02-01",
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
      version: "2016-02-01",
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

  async createUserWhiteListWithOptions(request: CreateUserWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserWhiteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aoneId)) {
      query["AoneId"] = request.aoneId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.limitCount)) {
      query["LimitCount"] = request.limitCount;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateUserWhiteList",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUserWhiteListResponse>(await this.callApi(params, req, runtime), new CreateUserWhiteListResponse({}));
  }

  async createUserWhiteList(request: CreateUserWhiteListRequest): Promise<CreateUserWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserWhiteListWithOptions(request, runtime);
  }

  async deleteAllTrafficSpecialControlWithOptions(request: DeleteAllTrafficSpecialControlRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAllTrafficSpecialControlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.trafficControlId)) {
      query["TrafficControlId"] = request.trafficControlId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAllTrafficSpecialControl",
      version: "2016-02-01",
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApi",
      version: "2016-02-01",
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

  async deleteApiForInnerWithOptions(request: DeleteApiForInnerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApiForInnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApiForInner",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteApiForInnerResponse>(await this.callApi(params, req, runtime), new DeleteApiForInnerResponse({}));
  }

  async deleteApiForInner(request: DeleteApiForInnerRequest): Promise<DeleteApiForInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApiForInnerWithOptions(request, runtime);
  }

  async deleteApiGroupWithOptions(request: DeleteApiGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApiGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApiGroup",
      version: "2016-02-01",
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

  async deleteAppWithOptions(request: DeleteAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApp",
      version: "2016-02-01",
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

  async deleteAppForInnerWithOptions(request: DeleteAppForInnerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppForInnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAppForInner",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppForInnerResponse>(await this.callApi(params, req, runtime), new DeleteAppForInnerResponse({}));
  }

  async deleteAppForInner(request: DeleteAppForInnerRequest): Promise<DeleteAppForInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppForInnerWithOptions(request, runtime);
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDomain",
      version: "2016-02-01",
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDomainCertificate",
      version: "2016-02-01",
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

  async deleteSecretKeyWithOptions(request: DeleteSecretKeyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSecretKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.secretKeyId)) {
      query["SecretKeyId"] = request.secretKeyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSecretKey",
      version: "2016-02-01",
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
    if (!Util.isUnset(request.trafficControlId)) {
      query["TrafficControlId"] = request.trafficControlId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTrafficControl",
      version: "2016-02-01",
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
      version: "2016-02-01",
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

  async deleteUserWhiteListByTypeWithOptions(request: DeleteUserWhiteListByTypeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserWhiteListByTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUserWhiteListByType",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserWhiteListByTypeResponse>(await this.callApi(params, req, runtime), new DeleteUserWhiteListByTypeResponse({}));
  }

  async deleteUserWhiteListByType(request: DeleteUserWhiteListByTypeRequest): Promise<DeleteUserWhiteListByTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWhiteListByTypeWithOptions(request, runtime);
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

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeployApi",
      version: "2016-02-01",
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

  async deployApiForInnerWithOptions(request: DeployApiForInnerRequest, runtime: $Util.RuntimeOptions): Promise<DeployApiForInnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeployApiForInner",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeployApiForInnerResponse>(await this.callApi(params, req, runtime), new DeployApiForInnerResponse({}));
  }

  async deployApiForInner(request: DeployApiForInnerRequest): Promise<DeployApiForInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployApiForInnerWithOptions(request, runtime);
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApi",
      version: "2016-02-01",
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
      version: "2016-02-01",
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
      version: "2016-02-01",
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

  async describeApiDocsForBackendWithOptions(request: DescribeApiDocsForBackendRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiDocsForBackendResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

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

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiDocsForBackend",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApiDocsForBackendResponse>(await this.callApi(params, req, runtime), new DescribeApiDocsForBackendResponse({}));
  }

  async describeApiDocsForBackend(request: DescribeApiDocsForBackendRequest): Promise<DescribeApiDocsForBackendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiDocsForBackendWithOptions(request, runtime);
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiError",
      version: "2016-02-01",
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiGroupDetail",
      version: "2016-02-01",
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

  async describeApiGroupsWithOptions(request: DescribeApiGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
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
      action: "DescribeApiGroups",
      version: "2016-02-01",
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiLatency",
      version: "2016-02-01",
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

  async describeApiMarketInstanceWithOptions(request: DescribeApiMarketInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiMarketInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiMarketInstance",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApiMarketInstanceResponse>(await this.callApi(params, req, runtime), new DescribeApiMarketInstanceResponse({}));
  }

  async describeApiMarketInstance(request: DescribeApiMarketInstanceRequest): Promise<DescribeApiMarketInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiMarketInstanceWithOptions(request, runtime);
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiQps",
      version: "2016-02-01",
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

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiRules",
      version: "2016-02-01",
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiTraffic",
      version: "2016-02-01",
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

    if (!Util.isUnset(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApis",
      version: "2016-02-01",
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApisByApp",
      version: "2016-02-01",
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApisByRule",
      version: "2016-02-01",
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
      version: "2016-02-01",
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApp",
      version: "2016-02-01",
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
      version: "2016-02-01",
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppSecurity",
      version: "2016-02-01",
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

  async describeAppSecurityForInnerWithOptions(request: DescribeAppSecurityForInnerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppSecurityForInnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

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
      action: "DescribeAppSecurityForInner",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppSecurityForInnerResponse>(await this.callApi(params, req, runtime), new DescribeAppSecurityForInnerResponse({}));
  }

  async describeAppSecurityForInner(request: DescribeAppSecurityForInnerRequest): Promise<DescribeAppSecurityForInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppSecurityForInnerWithOptions(request, runtime);
  }

  async describeAppsWithOptions(request: DescribeAppsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppsResponse> {
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApps",
      version: "2016-02-01",
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

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppsByApi",
      version: "2016-02-01",
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

    if (!Util.isUnset(request.appOwner)) {
      query["AppOwner"] = request.appOwner;
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
      action: "DescribeAppsForProvider",
      version: "2016-02-01",
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

  async describeAvailableVipsWithOptions(request: DescribeAvailableVipsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableVipsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.vip)) {
      query["Vip"] = request.vip;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAvailableVips",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAvailableVipsResponse>(await this.callApi(params, req, runtime), new DescribeAvailableVipsResponse({}));
  }

  async describeAvailableVips(request: DescribeAvailableVipsRequest): Promise<DescribeAvailableVipsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableVipsWithOptions(request, runtime);
  }

  async describeBidByUserIdForInnerWithOptions(request: DescribeBidByUserIdForInnerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBidByUserIdForInnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBidByUserIdForInner",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBidByUserIdForInnerResponse>(await this.callApi(params, req, runtime), new DescribeBidByUserIdForInnerResponse({}));
  }

  async describeBidByUserIdForInner(request: DescribeBidByUserIdForInnerRequest): Promise<DescribeBidByUserIdForInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBidByUserIdForInnerWithOptions(request, runtime);
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBlackLists",
      version: "2016-02-01",
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

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDeployedApi",
      version: "2016-02-01",
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

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDeployedApis",
      version: "2016-02-01",
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomain",
      version: "2016-02-01",
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainResolution",
      version: "2016-02-01",
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

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHistoryApi",
      version: "2016-02-01",
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

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHistoryApis",
      version: "2016-02-01",
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

  async describeModelsForInnerWithOptions(request: DescribeModelsForInnerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeModelsForInnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

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
      action: "DescribeModelsForInner",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeModelsForInnerResponse>(await this.callApi(params, req, runtime), new DescribeModelsForInnerResponse({}));
  }

  async describeModelsForInner(request: DescribeModelsForInnerRequest): Promise<DescribeModelsForInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeModelsForInnerWithOptions(request, runtime);
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePurchasedApi",
      version: "2016-02-01",
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePurchasedApiGroupDetail",
      version: "2016-02-01",
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
    if (!Util.isUnset(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
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
      action: "DescribePurchasedApiGroups",
      version: "2016-02-01",
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
      version: "2016-02-01",
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRaceWorkForInner",
      version: "2016-02-01",
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

  async describeRaceWorksForInnerWithOptions(request: DescribeRaceWorksForInnerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRaceWorksForInnerResponse> {
    Util.validateModel(request);
    let query = { };
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
      action: "DescribeRaceWorksForInner",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRaceWorksForInnerResponse>(await this.callApi(params, req, runtime), new DescribeRaceWorksForInnerResponse({}));
  }

  async describeRaceWorksForInner(request: DescribeRaceWorksForInnerRequest): Promise<DescribeRaceWorksForInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRaceWorksForInnerWithOptions(request, runtime);
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
      version: "2016-02-01",
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

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRulesByApi",
      version: "2016-02-01",
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSecretKeys",
      version: "2016-02-01",
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
      version: "2016-02-01",
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
      version: "2016-02-01",
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
      version: "2016-02-01",
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

  async describeUserWhiteListsWithOptions(request: DescribeUserWhiteListsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserWhiteListsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserWhiteLists",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserWhiteListsResponse>(await this.callApi(params, req, runtime), new DescribeUserWhiteListsResponse({}));
  }

  async describeUserWhiteLists(request: DescribeUserWhiteListsRequest): Promise<DescribeUserWhiteListsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserWhiteListsWithOptions(request, runtime);
  }

  async isIncludedByUserWhitelistWithOptions(request: IsIncludedByUserWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<IsIncludedByUserWhitelistResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "IsIncludedByUserWhitelist",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<IsIncludedByUserWhitelistResponse>(await this.callApi(params, req, runtime), new IsIncludedByUserWhitelistResponse({}));
  }

  async isIncludedByUserWhitelist(request: IsIncludedByUserWhitelistRequest): Promise<IsIncludedByUserWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.isIncludedByUserWhitelistWithOptions(request, runtime);
  }

  async modifyApiWithOptions(request: ModifyApiRequest, runtime: $Util.RuntimeOptions): Promise<ModifyApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!Util.isUnset(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!Util.isUnset(request.bodyFormat)) {
      query["BodyFormat"] = request.bodyFormat;
    }

    if (!Util.isUnset(request.constantParameters)) {
      query["ConstantParameters"] = request.constantParameters;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.httpMethod)) {
      query["HttpMethod"] = request.httpMethod;
    }

    if (!Util.isUnset(request.httpProtocol)) {
      query["HttpProtocol"] = request.httpProtocol;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.pathParameters)) {
      query["PathParameters"] = request.pathParameters;
    }

    if (!Util.isUnset(request.postBodyDescription)) {
      query["PostBodyDescription"] = request.postBodyDescription;
    }

    if (!Util.isUnset(request.postBodyType)) {
      query["PostBodyType"] = request.postBodyType;
    }

    if (!Util.isUnset(request.requestBody)) {
      query["RequestBody"] = request.requestBody;
    }

    if (!Util.isUnset(request.requestHeaders)) {
      query["RequestHeaders"] = request.requestHeaders;
    }

    if (!Util.isUnset(request.requestQueries)) {
      query["RequestQueries"] = request.requestQueries;
    }

    if (!Util.isUnset(request.resultSample)) {
      query["ResultSample"] = request.resultSample;
    }

    if (!Util.isUnset(request.resultType)) {
      query["ResultType"] = request.resultType;
    }

    if (!Util.isUnset(request.serviceAddress)) {
      query["ServiceAddress"] = request.serviceAddress;
    }

    if (!Util.isUnset(request.serviceProtocol)) {
      query["ServiceProtocol"] = request.serviceProtocol;
    }

    if (!Util.isUnset(request.serviceTimeout)) {
      query["ServiceTimeout"] = request.serviceTimeout;
    }

    if (!Util.isUnset(request.systemParameters)) {
      query["SystemParameters"] = request.systemParameters;
    }

    if (!Util.isUnset(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyApi",
      version: "2016-02-01",
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

  async modifyApiForInnerWithOptions(request: ModifyApiForInnerRequest, runtime: $Util.RuntimeOptions): Promise<ModifyApiForInnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!Util.isUnset(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.requestConfig)) {
      query["RequestConfig"] = request.requestConfig;
    }

    if (!Util.isUnset(request.requestParamters)) {
      query["RequestParamters"] = request.requestParamters;
    }

    if (!Util.isUnset(request.resultSample)) {
      query["ResultSample"] = request.resultSample;
    }

    if (!Util.isUnset(request.resultType)) {
      query["ResultType"] = request.resultType;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyApiForInner",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyApiForInnerResponse>(await this.callApi(params, req, runtime), new ModifyApiForInnerResponse({}));
  }

  async modifyApiForInner(request: ModifyApiForInnerRequest): Promise<ModifyApiForInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyApiForInnerWithOptions(request, runtime);
  }

  async modifyApiGroupWithOptions(request: ModifyApiGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyApiGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyApiGroup",
      version: "2016-02-01",
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

  async modifyApiMarketInstanceAttributeWithOptions(request: ModifyApiMarketInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyApiMarketInstanceAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceAttributes)) {
      query["InstanceAttributes"] = request.instanceAttributes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyApiMarketInstanceAttribute",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyApiMarketInstanceAttributeResponse>(await this.callApi(params, req, runtime), new ModifyApiMarketInstanceAttributeResponse({}));
  }

  async modifyApiMarketInstanceAttribute(request: ModifyApiMarketInstanceAttributeRequest): Promise<ModifyApiMarketInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyApiMarketInstanceAttributeWithOptions(request, runtime);
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyApp",
      version: "2016-02-01",
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

  async modifyAppForInnerWithOptions(request: ModifyAppForInnerRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAppForInnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.extend)) {
      query["Extend"] = request.extend;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAppForInner",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAppForInnerResponse>(await this.callApi(params, req, runtime), new ModifyAppForInnerResponse({}));
  }

  async modifyAppForInner(request: ModifyAppForInnerRequest): Promise<ModifyAppForInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAppForInnerWithOptions(request, runtime);
  }

  async modifyGroupAuthAppCodeForBackendWithOptions(request: ModifyGroupAuthAppCodeForBackendRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGroupAuthAppCodeForBackendResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.authAppCode)) {
      query["AuthAppCode"] = request.authAppCode;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyGroupAuthAppCodeForBackend",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyGroupAuthAppCodeForBackendResponse>(await this.callApi(params, req, runtime), new ModifyGroupAuthAppCodeForBackendResponse({}));
  }

  async modifyGroupAuthAppCodeForBackend(request: ModifyGroupAuthAppCodeForBackendRequest): Promise<ModifyGroupAuthAppCodeForBackendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGroupAuthAppCodeForBackendWithOptions(request, runtime);
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySecretKey",
      version: "2016-02-01",
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
      version: "2016-02-01",
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

  async modifyUserWhiteListValueByTypeWithOptions(request: ModifyUserWhiteListValueByTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUserWhiteListValueByTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyUserWhiteListValueByType",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyUserWhiteListValueByTypeResponse>(await this.callApi(params, req, runtime), new ModifyUserWhiteListValueByTypeResponse({}));
  }

  async modifyUserWhiteListValueByType(request: ModifyUserWhiteListValueByTypeRequest): Promise<ModifyUserWhiteListValueByTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUserWhiteListValueByTypeWithOptions(request, runtime);
  }

  async reactivateDomainForBackendWithOptions(request: ReactivateDomainForBackendRequest, runtime: $Util.RuntimeOptions): Promise<ReactivateDomainForBackendResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliuid)) {
      query["Aliuid"] = request.aliuid;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReactivateDomainForBackend",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReactivateDomainForBackendResponse>(await this.callApi(params, req, runtime), new ReactivateDomainForBackendResponse({}));
  }

  async reactivateDomainForBackend(request: ReactivateDomainForBackendRequest): Promise<ReactivateDomainForBackendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reactivateDomainForBackendWithOptions(request, runtime);
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

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RecoverApiFromHistorical",
      version: "2016-02-01",
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

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RecoveryApiDefineFromHistorical",
      version: "2016-02-01",
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

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RecoveryApiFromHistorical",
      version: "2016-02-01",
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefreshDomain",
      version: "2016-02-01",
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

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveAccessPermissionByApis",
      version: "2016-02-01",
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

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveAccessPermissionByApps",
      version: "2016-02-01",
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

  async removeAccessPermissionByAppsForInnerWithOptions(request: RemoveAccessPermissionByAppsForInnerRequest, runtime: $Util.RuntimeOptions): Promise<RemoveAccessPermissionByAppsForInnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveAccessPermissionByAppsForInner",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveAccessPermissionByAppsForInnerResponse>(await this.callApi(params, req, runtime), new RemoveAccessPermissionByAppsForInnerResponse({}));
  }

  async removeAccessPermissionByAppsForInner(request: RemoveAccessPermissionByAppsForInnerRequest): Promise<RemoveAccessPermissionByAppsForInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeAccessPermissionByAppsForInnerWithOptions(request, runtime);
  }

  async removeAllBlackListWithOptions(request: RemoveAllBlackListRequest, runtime: $Util.RuntimeOptions): Promise<RemoveAllBlackListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.blackType)) {
      query["BlackType"] = request.blackType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveAllBlackList",
      version: "2016-02-01",
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

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveApiRule",
      version: "2016-02-01",
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

  async removeAppsFromApiWithOptions(request: RemoveAppsFromApiRequest, runtime: $Util.RuntimeOptions): Promise<RemoveAppsFromApiResponse> {
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

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveAppsFromApi",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveAppsFromApiResponse>(await this.callApi(params, req, runtime), new RemoveAppsFromApiResponse({}));
  }

  async removeAppsFromApi(request: RemoveAppsFromApiRequest): Promise<RemoveAppsFromApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeAppsFromApiWithOptions(request, runtime);
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveBlackList",
      version: "2016-02-01",
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

  async resetAppCodeWithOptions(request: ResetAppCodeRequest, runtime: $Util.RuntimeOptions): Promise<ResetAppCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetAppCode",
      version: "2016-02-01",
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

  async resetAppCode(request: ResetAppCodeRequest): Promise<ResetAppCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAppCodeWithOptions(request, runtime);
  }

  async resetAppCodeForInnerWithOptions(request: ResetAppCodeForInnerRequest, runtime: $Util.RuntimeOptions): Promise<ResetAppCodeForInnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!Util.isUnset(request.newAppCode)) {
      query["NewAppCode"] = request.newAppCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetAppCodeForInner",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetAppCodeForInnerResponse>(await this.callApi(params, req, runtime), new ResetAppCodeForInnerResponse({}));
  }

  async resetAppCodeForInner(request: ResetAppCodeForInnerRequest): Promise<ResetAppCodeForInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAppCodeForInnerWithOptions(request, runtime);
  }

  async resetAppKeySecretWithOptions(request: ResetAppKeySecretRequest, runtime: $Util.RuntimeOptions): Promise<ResetAppKeySecretResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetAppKeySecret",
      version: "2016-02-01",
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

  async resetSecretByAppKeyForInnerWithOptions(request: ResetSecretByAppKeyForInnerRequest, runtime: $Util.RuntimeOptions): Promise<ResetSecretByAppKeyForInnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.newAppKey)) {
      query["NewAppKey"] = request.newAppKey;
    }

    if (!Util.isUnset(request.newAppSecret)) {
      query["NewAppSecret"] = request.newAppSecret;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetSecretByAppKeyForInner",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetSecretByAppKeyForInnerResponse>(await this.callApi(params, req, runtime), new ResetSecretByAppKeyForInnerResponse({}));
  }

  async resetSecretByAppKeyForInner(request: ResetSecretByAppKeyForInnerRequest): Promise<ResetSecretByAppKeyForInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetSecretByAppKeyForInnerWithOptions(request, runtime);
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

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetAccessPermissionByApis",
      version: "2016-02-01",
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

  async setAccessPermissionByGroupForBackendWithOptions(request: SetAccessPermissionByGroupForBackendRequest, runtime: $Util.RuntimeOptions): Promise<SetAccessPermissionByGroupForBackendResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetAccessPermissionByGroupForBackend",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetAccessPermissionByGroupForBackendResponse>(await this.callApi(params, req, runtime), new SetAccessPermissionByGroupForBackendResponse({}));
  }

  async setAccessPermissionByGroupForBackend(request: SetAccessPermissionByGroupForBackendRequest): Promise<SetAccessPermissionByGroupForBackendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAccessPermissionByGroupForBackendWithOptions(request, runtime);
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

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetAccessPermissions",
      version: "2016-02-01",
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

  async setAccessPermissionsForInnerWithOptions(request: SetAccessPermissionsForInnerRequest, runtime: $Util.RuntimeOptions): Promise<SetAccessPermissionsForInnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

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

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetAccessPermissionsForInner",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetAccessPermissionsForInnerResponse>(await this.callApi(params, req, runtime), new SetAccessPermissionsForInnerResponse({}));
  }

  async setAccessPermissionsForInner(request: SetAccessPermissionsForInnerRequest): Promise<SetAccessPermissionsForInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAccessPermissionsForInnerWithOptions(request, runtime);
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

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetApiRule",
      version: "2016-02-01",
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDomain",
      version: "2016-02-01",
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDomainCertificate",
      version: "2016-02-01",
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

  async setDomainForBackendWithOptions(request: SetDomainForBackendRequest, runtime: $Util.RuntimeOptions): Promise<SetDomainForBackendResponse> {
    Util.validateModel(request);
    let query = { };
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDomainForBackend",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDomainForBackendResponse>(await this.callApi(params, req, runtime), new SetDomainForBackendResponse({}));
  }

  async setDomainForBackend(request: SetDomainForBackendRequest): Promise<SetDomainForBackendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDomainForBackendWithOptions(request, runtime);
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetMockIntegration",
      version: "2016-02-01",
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

  async setPurchasedApiGroupStatusWithOptions(request: SetPurchasedApiGroupStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetPurchasedApiGroupStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.billingStatus)) {
      query["BillingStatus"] = request.billingStatus;
    }

    if (!Util.isUnset(request.closeOrder)) {
      query["CloseOrder"] = request.closeOrder;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetPurchasedApiGroupStatus",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetPurchasedApiGroupStatusResponse>(await this.callApi(params, req, runtime), new SetPurchasedApiGroupStatusResponse({}));
  }

  async setPurchasedApiGroupStatus(request: SetPurchasedApiGroupStatusRequest): Promise<SetPurchasedApiGroupStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setPurchasedApiGroupStatusWithOptions(request, runtime);
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

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SwitchApi",
      version: "2016-02-01",
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

  async switchApiForInnerWithOptions(request: SwitchApiForInnerRequest, runtime: $Util.RuntimeOptions): Promise<SwitchApiForInnerResponse> {
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

    if (!Util.isUnset(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SwitchApiForInner",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SwitchApiForInnerResponse>(await this.callApi(params, req, runtime), new SwitchApiForInnerResponse({}));
  }

  async switchApiForInner(request: SwitchApiForInnerRequest): Promise<SwitchApiForInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchApiForInnerWithOptions(request, runtime);
  }

  async synCreateAppForInnerWithOptions(request: SynCreateAppForInnerRequest, runtime: $Util.RuntimeOptions): Promise<SynCreateAppForInnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
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

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SynCreateAppForInner",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SynCreateAppForInnerResponse>(await this.callApi(params, req, runtime), new SynCreateAppForInnerResponse({}));
  }

  async synCreateAppForInner(request: SynCreateAppForInnerRequest): Promise<SynCreateAppForInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.synCreateAppForInnerWithOptions(request, runtime);
  }

  async tagResourcesSystemTagsWithOptions(request: TagResourcesSystemTagsRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesSystemTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.tagOwnerBid)) {
      query["TagOwnerBid"] = request.tagOwnerBid;
    }

    if (!Util.isUnset(request.tagOwnerUid)) {
      query["TagOwnerUid"] = request.tagOwnerUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResourcesSystemTags",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesSystemTagsResponse>(await this.callApi(params, req, runtime), new TagResourcesSystemTagsResponse({}));
  }

  async tagResourcesSystemTags(request: TagResourcesSystemTagsRequest): Promise<TagResourcesSystemTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesSystemTagsWithOptions(request, runtime);
  }

  async untagResourcesSystemTagsWithOptions(request: UntagResourcesSystemTagsRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesSystemTagsResponse> {
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

    if (!Util.isUnset(request.tagOwnerBid)) {
      query["TagOwnerBid"] = request.tagOwnerBid;
    }

    if (!Util.isUnset(request.tagOwnerUid)) {
      query["TagOwnerUid"] = request.tagOwnerUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResourcesSystemTags",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesSystemTagsResponse>(await this.callApi(params, req, runtime), new UntagResourcesSystemTagsResponse({}));
  }

  async untagResourcesSystemTags(request: UntagResourcesSystemTagsRequest): Promise<UntagResourcesSystemTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesSystemTagsWithOptions(request, runtime);
  }

  async vipMigrationWithOptions(request: VipMigrationRequest, runtime: $Util.RuntimeOptions): Promise<VipMigrationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.newVip)) {
      query["NewVip"] = request.newVip;
    }

    if (!Util.isUnset(request.originalVip)) {
      query["OriginalVip"] = request.originalVip;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VipMigration",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "none",
    });
    return $tea.cast<VipMigrationResponse>(await this.callApi(params, req, runtime), new VipMigrationResponse({}));
  }

  async vipMigration(request: VipMigrationRequest): Promise<VipMigrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.vipMigrationWithOptions(request, runtime);
  }

  async vipMigrationByUidWithOptions(request: VipMigrationByUidRequest, runtime: $Util.RuntimeOptions): Promise<VipMigrationByUidResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.newVip)) {
      query["NewVip"] = request.newVip;
    }

    if (!Util.isUnset(request.originalVip)) {
      query["OriginalVip"] = request.originalVip;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VipMigrationByUid",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VipMigrationByUidResponse>(await this.callApi(params, req, runtime), new VipMigrationByUidResponse({}));
  }

  async vipMigrationByUid(request: VipMigrationByUidRequest): Promise<VipMigrationByUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.vipMigrationByUidWithOptions(request, runtime);
  }

  async vpcAddAppServerWithOptions(request: VpcAddAppServerRequest, runtime: $Util.RuntimeOptions): Promise<VpcAddAppServerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addressPoolId)) {
      query["AddressPoolId"] = request.addressPoolId;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.serverIp)) {
      query["ServerIp"] = request.serverIp;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VpcAddAppServer",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VpcAddAppServerResponse>(await this.callApi(params, req, runtime), new VpcAddAppServerResponse({}));
  }

  async vpcAddAppServer(request: VpcAddAppServerRequest): Promise<VpcAddAppServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.vpcAddAppServerWithOptions(request, runtime);
  }

  async vpcCreateAddressPoolWithOptions(request: VpcCreateAddressPoolRequest, runtime: $Util.RuntimeOptions): Promise<VpcCreateAddressPoolResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VpcCreateAddressPool",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VpcCreateAddressPoolResponse>(await this.callApi(params, req, runtime), new VpcCreateAddressPoolResponse({}));
  }

  async vpcCreateAddressPool(request: VpcCreateAddressPoolRequest): Promise<VpcCreateAddressPoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.vpcCreateAddressPoolWithOptions(request, runtime);
  }

  async vpcQueryAppServersWithOptions(request: VpcQueryAppServersRequest, runtime: $Util.RuntimeOptions): Promise<VpcQueryAppServersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addressPoolId)) {
      query["AddressPoolId"] = request.addressPoolId;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.serverIp)) {
      query["ServerIp"] = request.serverIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VpcQueryAppServers",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VpcQueryAppServersResponse>(await this.callApi(params, req, runtime), new VpcQueryAppServersResponse({}));
  }

  async vpcQueryAppServers(request: VpcQueryAppServersRequest): Promise<VpcQueryAppServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.vpcQueryAppServersWithOptions(request, runtime);
  }

  async vpcRegisterAppWithOptions(request: VpcRegisterAppRequest, runtime: $Util.RuntimeOptions): Promise<VpcRegisterAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VpcRegisterApp",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VpcRegisterAppResponse>(await this.callApi(params, req, runtime), new VpcRegisterAppResponse({}));
  }

  async vpcRegisterApp(request: VpcRegisterAppRequest): Promise<VpcRegisterAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.vpcRegisterAppWithOptions(request, runtime);
  }

  async vpcRemoveAppServerWithOptions(request: VpcRemoveAppServerRequest, runtime: $Util.RuntimeOptions): Promise<VpcRemoveAppServerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.serverIp)) {
      query["ServerIp"] = request.serverIp;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VpcRemoveAppServer",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VpcRemoveAppServerResponse>(await this.callApi(params, req, runtime), new VpcRemoveAppServerResponse({}));
  }

  async vpcRemoveAppServer(request: VpcRemoveAppServerRequest): Promise<VpcRemoveAppServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.vpcRemoveAppServerWithOptions(request, runtime);
  }

}
