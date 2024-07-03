// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetConnectionTicketRequest extends $tea.Model {
  appId?: string;
  appInstanceGroupId?: string;
  appInstanceId?: string;
  appVersion?: string;
  bizRegionId?: string;
  clientId?: string;
  clientIp?: string;
  clientOS?: string;
  clientVersion?: string;
  connectionProperties?: string;
  endUserId?: string;
  loginRegionId?: string;
  loginToken?: string;
  param?: string;
  productType?: string;
  resourceId?: string;
  sessionId?: string;
  taskId?: string;
  tenantId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      appVersion: 'AppVersion',
      bizRegionId: 'BizRegionId',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      connectionProperties: 'ConnectionProperties',
      endUserId: 'EndUserId',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      param: 'Param',
      productType: 'ProductType',
      resourceId: 'ResourceId',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      tenantId: 'TenantId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      appVersion: 'string',
      bizRegionId: 'string',
      clientId: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      connectionProperties: 'string',
      endUserId: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      param: 'string',
      productType: 'string',
      resourceId: 'string',
      sessionId: 'string',
      taskId: 'string',
      tenantId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketResponseBody extends $tea.Model {
  appInstanceGroupId?: string;
  appInstanceId?: string;
  appInstancePersistentId?: string;
  code?: string;
  loginToken?: string;
  message?: string;
  osType?: string;
  policy?: GetConnectionTicketResponseBodyPolicy;
  regionId?: string;
  requestId?: string;
  retryTimes?: number;
  taskId?: string;
  taskStatus?: string;
  tenantId?: number;
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      appInstancePersistentId: 'AppInstancePersistentId',
      code: 'Code',
      loginToken: 'LoginToken',
      message: 'Message',
      osType: 'OsType',
      policy: 'Policy',
      regionId: 'RegionId',
      requestId: 'RequestId',
      retryTimes: 'RetryTimes',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      tenantId: 'TenantId',
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      appInstancePersistentId: 'string',
      code: 'string',
      loginToken: 'string',
      message: 'string',
      osType: 'string',
      policy: GetConnectionTicketResponseBodyPolicy,
      regionId: 'string',
      requestId: 'string',
      retryTimes: 'number',
      taskId: 'string',
      taskStatus: 'string',
      tenantId: 'number',
      ticket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConnectionTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetConnectionTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLFUAppRequest extends $tea.Model {
  aliUid?: number;
  apiType?: string;
  bizRegionId?: string;
  clientChannel?: string;
  clientId?: string;
  clientIp?: string;
  clientOS?: string;
  clientVersion?: string;
  endUserId?: string;
  extendsAccessToken?: string;
  idpId?: string;
  loginRegionId?: string;
  loginToken?: string;
  productType?: string;
  regionId?: string;
  sessionId?: string;
  traceId?: string;
  uuid?: string;
  wyId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      apiType: 'ApiType',
      bizRegionId: 'BizRegionId',
      clientChannel: 'ClientChannel',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      endUserId: 'EndUserId',
      extendsAccessToken: 'ExtendsAccessToken',
      idpId: 'IdpId',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      productType: 'ProductType',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      traceId: 'TraceId',
      uuid: 'Uuid',
      wyId: 'WyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      apiType: 'string',
      bizRegionId: 'string',
      clientChannel: 'string',
      clientId: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      endUserId: 'string',
      extendsAccessToken: 'string',
      idpId: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      productType: 'string',
      regionId: 'string',
      sessionId: 'string',
      traceId: 'string',
      uuid: 'string',
      wyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLFUAppResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  data?: ListLFUAppResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: { 'type': 'array', 'itemType': ListLFUAppResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLFUAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLFUAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLFUAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedAppInfoRequest extends $tea.Model {
  appName?: string;
  bizRegionId?: string;
  categoryId?: number;
  categoryType?: number;
  clientId?: string;
  clientIp?: string;
  clientOS?: string;
  clientVersion?: string;
  endUserId?: string;
  loginRegionId?: string;
  loginToken?: string;
  orderParam?: string;
  productType?: string;
  sessionId?: string;
  sortType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      bizRegionId: 'BizRegionId',
      categoryId: 'CategoryId',
      categoryType: 'CategoryType',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      endUserId: 'EndUserId',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      orderParam: 'OrderParam',
      productType: 'ProductType',
      sessionId: 'SessionId',
      sortType: 'SortType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      bizRegionId: 'string',
      categoryId: 'number',
      categoryType: 'number',
      clientId: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      endUserId: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      orderParam: 'string',
      productType: 'string',
      sessionId: 'string',
      sortType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedAppInfoResponseBody extends $tea.Model {
  appModels?: ListPublishedAppInfoResponseBodyAppModels[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appModels: 'AppModels',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appModels: { 'type': 'array', 'itemType': ListPublishedAppInfoResponseBodyAppModels },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedAppInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPublishedAppInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPublishedAppInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunningAppsRequest extends $tea.Model {
  bizRegionId?: string;
  clientId?: string;
  clientIp?: string;
  clientOS?: string;
  clientVersion?: string;
  endUserId?: string;
  loginRegionId?: string;
  loginToken?: string;
  productType?: string;
  sessionId?: string;
  tenantId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      endUserId: 'EndUserId',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      productType: 'ProductType',
      sessionId: 'SessionId',
      tenantId: 'TenantId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      clientId: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      endUserId: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      productType: 'string',
      sessionId: 'string',
      tenantId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunningAppsResponseBody extends $tea.Model {
  requestId?: string;
  runningCloudApps?: ListRunningAppsResponseBodyRunningCloudApps[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      runningCloudApps: 'RunningCloudApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      runningCloudApps: { 'type': 'array', 'itemType': ListRunningAppsResponseBodyRunningCloudApps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunningAppsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRunningAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRunningAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppRequest extends $tea.Model {
  aliUid?: number;
  apiType?: string;
  appId?: string;
  appInstanceGroupId?: string;
  appInstanceId?: string;
  bizRegionId?: string;
  clientChannel?: string;
  clientId?: string;
  clientIp?: string;
  clientOS?: string;
  clientVersion?: string;
  endUserId?: string;
  forceStop?: boolean;
  idpId?: string;
  loginRegionId?: string;
  loginToken?: string;
  productType?: string;
  regionId?: string;
  sessionId?: string;
  uuid?: string;
  wyId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      apiType: 'ApiType',
      appId: 'AppId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      bizRegionId: 'BizRegionId',
      clientChannel: 'ClientChannel',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      endUserId: 'EndUserId',
      forceStop: 'ForceStop',
      idpId: 'IdpId',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      productType: 'ProductType',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      uuid: 'Uuid',
      wyId: 'WyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      apiType: 'string',
      appId: 'string',
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      bizRegionId: 'string',
      clientChannel: 'string',
      clientId: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      endUserId: 'string',
      forceStop: 'boolean',
      idpId: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      productType: 'string',
      regionId: 'string',
      sessionId: 'string',
      uuid: 'string',
      wyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindRequest extends $tea.Model {
  appId?: string;
  appInstanceGroupId?: string;
  appInstanceId?: string;
  clientId?: string;
  clientIp?: string;
  clientOS?: string;
  clientVersion?: string;
  endUserId?: string;
  loginRegionId?: string;
  loginToken?: string;
  productType?: string;
  sessionId?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      endUserId: 'EndUserId',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      productType: 'ProductType',
      sessionId: 'SessionId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      clientId: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      endUserId: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      productType: 'string',
      sessionId: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnbindResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketResponseBodyPolicy extends $tea.Model {
  resolutionAdaptive?: string;
  resolutionHeight?: number;
  resolutionWidth?: number;
  static names(): { [key: string]: string } {
    return {
      resolutionAdaptive: 'ResolutionAdaptive',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resolutionAdaptive: 'string',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLFUAppResponseBodyData extends $tea.Model {
  appId?: string;
  appName?: string;
  appVersion?: string;
  appVersionName?: string;
  iconUrl?: string;
  isAuth?: boolean;
  osType?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appVersion: 'AppVersion',
      appVersionName: 'AppVersionName',
      iconUrl: 'IconUrl',
      isAuth: 'IsAuth',
      osType: 'OsType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appVersion: 'string',
      appVersionName: 'string',
      iconUrl: 'string',
      isAuth: 'boolean',
      osType: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedAppInfoResponseBodyAppModels extends $tea.Model {
  appCenterImageId?: string;
  appId?: string;
  appName?: string;
  appThemeColor?: string;
  appVersion?: string;
  appVersionName?: string;
  authTime?: string;
  categoryId?: number;
  categoryType?: number;
  iconUrl?: string;
  isAuth?: boolean;
  usedInSession?: boolean;
  static names(): { [key: string]: string } {
    return {
      appCenterImageId: 'AppCenterImageId',
      appId: 'AppId',
      appName: 'AppName',
      appThemeColor: 'AppThemeColor',
      appVersion: 'AppVersion',
      appVersionName: 'AppVersionName',
      authTime: 'AuthTime',
      categoryId: 'CategoryId',
      categoryType: 'CategoryType',
      iconUrl: 'IconUrl',
      isAuth: 'IsAuth',
      usedInSession: 'UsedInSession',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCenterImageId: 'string',
      appId: 'string',
      appName: 'string',
      appThemeColor: 'string',
      appVersion: 'string',
      appVersionName: 'string',
      authTime: 'string',
      categoryId: 'number',
      categoryType: 'number',
      iconUrl: 'string',
      isAuth: 'boolean',
      usedInSession: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunningAppsResponseBodyRunningCloudApps extends $tea.Model {
  appId?: string;
  appInstanceGroupId?: string;
  appInstanceId?: string;
  appName?: string;
  appVersion?: string;
  appVersionName?: string;
  duration?: number;
  iconUrl?: string;
  osType?: string;
  regionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      appName: 'AppName',
      appVersion: 'AppVersion',
      appVersionName: 'AppVersionName',
      duration: 'Duration',
      iconUrl: 'IconUrl',
      osType: 'OsType',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      appName: 'string',
      appVersion: 'string',
      appVersionName: 'string',
      duration: 'number',
      iconUrl: 'string',
      osType: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("appstream-center", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @summary 获取连接信息
   *
   * @param request GetConnectionTicketRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetConnectionTicketResponse
   */
  async getConnectionTicketWithOptions(request: GetConnectionTicketRequest, runtime: $Util.RuntimeOptions): Promise<GetConnectionTicketResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!Util.isUnset(request.appInstanceId)) {
      body["AppInstanceId"] = request.appInstanceId;
    }

    if (!Util.isUnset(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.bizRegionId)) {
      body["BizRegionId"] = request.bizRegionId;
    }

    if (!Util.isUnset(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientIp)) {
      body["ClientIp"] = request.clientIp;
    }

    if (!Util.isUnset(request.clientOS)) {
      body["ClientOS"] = request.clientOS;
    }

    if (!Util.isUnset(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!Util.isUnset(request.connectionProperties)) {
      body["ConnectionProperties"] = request.connectionProperties;
    }

    if (!Util.isUnset(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.loginRegionId)) {
      body["LoginRegionId"] = request.loginRegionId;
    }

    if (!Util.isUnset(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.param)) {
      body["Param"] = request.param;
    }

    if (!Util.isUnset(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetConnectionTicket",
      version: "2021-09-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetConnectionTicketResponse>(await this.callApi(params, req, runtime), new GetConnectionTicketResponse({}));
  }

  /**
   * @summary 获取连接信息
   *
   * @param request GetConnectionTicketRequest
   * @return GetConnectionTicketResponse
   */
  async getConnectionTicket(request: GetConnectionTicketRequest): Promise<GetConnectionTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConnectionTicketWithOptions(request, runtime);
  }

  /**
   * @param request ListLFUAppRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListLFUAppResponse
   */
  async listLFUAppWithOptions(request: ListLFUAppRequest, runtime: $Util.RuntimeOptions): Promise<ListLFUAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aliUid)) {
      body["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.apiType)) {
      body["ApiType"] = request.apiType;
    }

    if (!Util.isUnset(request.bizRegionId)) {
      body["BizRegionId"] = request.bizRegionId;
    }

    if (!Util.isUnset(request.clientChannel)) {
      body["ClientChannel"] = request.clientChannel;
    }

    if (!Util.isUnset(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientIp)) {
      body["ClientIp"] = request.clientIp;
    }

    if (!Util.isUnset(request.clientOS)) {
      body["ClientOS"] = request.clientOS;
    }

    if (!Util.isUnset(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!Util.isUnset(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.extendsAccessToken)) {
      body["ExtendsAccessToken"] = request.extendsAccessToken;
    }

    if (!Util.isUnset(request.idpId)) {
      body["IdpId"] = request.idpId;
    }

    if (!Util.isUnset(request.loginRegionId)) {
      body["LoginRegionId"] = request.loginRegionId;
    }

    if (!Util.isUnset(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.traceId)) {
      body["TraceId"] = request.traceId;
    }

    if (!Util.isUnset(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    if (!Util.isUnset(request.wyId)) {
      body["WyId"] = request.wyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListLFUApp",
      version: "2021-09-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLFUAppResponse>(await this.callApi(params, req, runtime), new ListLFUAppResponse({}));
  }

  /**
   * @param request ListLFUAppRequest
   * @return ListLFUAppResponse
   */
  async listLFUApp(request: ListLFUAppRequest): Promise<ListLFUAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLFUAppWithOptions(request, runtime);
  }

  /**
   * @summary 已上架应用列表
   *
   * @param request ListPublishedAppInfoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListPublishedAppInfoResponse
   */
  async listPublishedAppInfoWithOptions(request: ListPublishedAppInfoRequest, runtime: $Util.RuntimeOptions): Promise<ListPublishedAppInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!Util.isUnset(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.categoryType)) {
      query["CategoryType"] = request.categoryType;
    }

    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!Util.isUnset(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!Util.isUnset(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.loginRegionId)) {
      query["LoginRegionId"] = request.loginRegionId;
    }

    if (!Util.isUnset(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.orderParam)) {
      query["OrderParam"] = request.orderParam;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPublishedAppInfo",
      version: "2021-09-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPublishedAppInfoResponse>(await this.callApi(params, req, runtime), new ListPublishedAppInfoResponse({}));
  }

  /**
   * @summary 已上架应用列表
   *
   * @param request ListPublishedAppInfoRequest
   * @return ListPublishedAppInfoResponse
   */
  async listPublishedAppInfo(request: ListPublishedAppInfoRequest): Promise<ListPublishedAppInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPublishedAppInfoWithOptions(request, runtime);
  }

  /**
   * @summary 运行中应用列表
   *
   * @param request ListRunningAppsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListRunningAppsResponse
   */
  async listRunningAppsWithOptions(request: ListRunningAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListRunningAppsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!Util.isUnset(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!Util.isUnset(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.loginRegionId)) {
      query["LoginRegionId"] = request.loginRegionId;
    }

    if (!Util.isUnset(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRunningApps",
      version: "2021-09-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRunningAppsResponse>(await this.callApi(params, req, runtime), new ListRunningAppsResponse({}));
  }

  /**
   * @summary 运行中应用列表
   *
   * @param request ListRunningAppsRequest
   * @return ListRunningAppsResponse
   */
  async listRunningApps(request: ListRunningAppsRequest): Promise<ListRunningAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRunningAppsWithOptions(request, runtime);
  }

  /**
   * @summary 停止应用
   *
   * @param request StopAppRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopAppResponse
   */
  async stopAppWithOptions(request: StopAppRequest, runtime: $Util.RuntimeOptions): Promise<StopAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aliUid)) {
      body["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.apiType)) {
      body["ApiType"] = request.apiType;
    }

    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!Util.isUnset(request.appInstanceId)) {
      body["AppInstanceId"] = request.appInstanceId;
    }

    if (!Util.isUnset(request.bizRegionId)) {
      body["BizRegionId"] = request.bizRegionId;
    }

    if (!Util.isUnset(request.clientChannel)) {
      body["ClientChannel"] = request.clientChannel;
    }

    if (!Util.isUnset(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientIp)) {
      body["ClientIp"] = request.clientIp;
    }

    if (!Util.isUnset(request.clientOS)) {
      body["ClientOS"] = request.clientOS;
    }

    if (!Util.isUnset(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!Util.isUnset(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.forceStop)) {
      body["ForceStop"] = request.forceStop;
    }

    if (!Util.isUnset(request.idpId)) {
      body["IdpId"] = request.idpId;
    }

    if (!Util.isUnset(request.loginRegionId)) {
      body["LoginRegionId"] = request.loginRegionId;
    }

    if (!Util.isUnset(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    if (!Util.isUnset(request.wyId)) {
      body["WyId"] = request.wyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopApp",
      version: "2021-09-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopAppResponse>(await this.callApi(params, req, runtime), new StopAppResponse({}));
  }

  /**
   * @summary 停止应用
   *
   * @param request StopAppRequest
   * @return StopAppResponse
   */
  async stopApp(request: StopAppRequest): Promise<StopAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopAppWithOptions(request, runtime);
  }

  /**
   * @summary 解绑实例
   *
   * @param request UnbindRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UnbindResponse
   */
  async unbindWithOptions(request: UnbindRequest, runtime: $Util.RuntimeOptions): Promise<UnbindResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!Util.isUnset(request.appInstanceId)) {
      body["AppInstanceId"] = request.appInstanceId;
    }

    if (!Util.isUnset(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientIp)) {
      body["ClientIp"] = request.clientIp;
    }

    if (!Util.isUnset(request.clientOS)) {
      body["ClientOS"] = request.clientOS;
    }

    if (!Util.isUnset(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!Util.isUnset(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.loginRegionId)) {
      body["LoginRegionId"] = request.loginRegionId;
    }

    if (!Util.isUnset(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "Unbind",
      version: "2021-09-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindResponse>(await this.callApi(params, req, runtime), new UnbindResponse({}));
  }

  /**
   * @summary 解绑实例
   *
   * @param request UnbindRequest
   * @return UnbindResponse
   */
  async unbind(request: UnbindRequest): Promise<UnbindResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindWithOptions(request, runtime);
  }

}
