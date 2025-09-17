// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("appstream-center", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 获取连接信息
   * 
   * @param request - GetConnectionTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConnectionTicketResponse
   */
  async getConnectionTicketWithOptions(request: $_model.GetConnectionTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetConnectionTicketResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessType)) {
      body["AccessType"] = request.accessType;
    }

    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.appInstanceId)) {
      body["AppInstanceId"] = request.appInstanceId;
    }

    if (!$dara.isNull(request.appPolicyId)) {
      body["AppPolicyId"] = request.appPolicyId;
    }

    if (!$dara.isNull(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.autoConnectInQueue)) {
      body["AutoConnectInQueue"] = request.autoConnectInQueue;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      body["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientIp)) {
      body["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.clientOS)) {
      body["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientType)) {
      body["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.connectionProperties)) {
      body["ConnectionProperties"] = request.connectionProperties;
    }

    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.environmentConfig)) {
      body["EnvironmentConfig"] = request.environmentConfig;
    }

    if (!$dara.isNull(request.loginRegionId)) {
      body["LoginRegionId"] = request.loginRegionId;
    }

    if (!$dara.isNull(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.param)) {
      body["Param"] = request.param;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetConnectionTicketResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.GetConnectionTicketResponse({}));
  }

  /**
   * 获取连接信息
   * 
   * @param request - GetConnectionTicketRequest
   * @returns GetConnectionTicketResponse
   */
  async getConnectionTicket(request: $_model.GetConnectionTicketRequest): Promise<$_model.GetConnectionTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConnectionTicketWithOptions(request, runtime);
  }

  /**
   * 已上架应用列表
   * 
   * @param request - ListPublishedAppInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPublishedAppInfoResponse
   */
  async listPublishedAppInfoWithOptions(request: $_model.ListPublishedAppInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPublishedAppInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.categoryType)) {
      query["CategoryType"] = request.categoryType;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.loginRegionId)) {
      query["LoginRegionId"] = request.loginRegionId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.orderParam)) {
      query["OrderParam"] = request.orderParam;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListPublishedAppInfoResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.ListPublishedAppInfoResponse({}));
  }

  /**
   * 已上架应用列表
   * 
   * @param request - ListPublishedAppInfoRequest
   * @returns ListPublishedAppInfoResponse
   */
  async listPublishedAppInfo(request: $_model.ListPublishedAppInfoRequest): Promise<$_model.ListPublishedAppInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPublishedAppInfoWithOptions(request, runtime);
  }

  /**
   * 运行中应用列表
   * 
   * @param request - ListRunningAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRunningAppsResponse
   */
  async listRunningAppsWithOptions(request: $_model.ListRunningAppsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRunningAppsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.loginRegionId)) {
      query["LoginRegionId"] = request.loginRegionId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListRunningAppsResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.ListRunningAppsResponse({}));
  }

  /**
   * 运行中应用列表
   * 
   * @param request - ListRunningAppsRequest
   * @returns ListRunningAppsResponse
   */
  async listRunningApps(request: $_model.ListRunningAppsRequest): Promise<$_model.ListRunningAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRunningAppsWithOptions(request, runtime);
  }

  /**
   * 重置应用资源
   * 
   * @param request - ResetAppResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetAppResourcesResponse
   */
  async resetAppResourcesWithOptions(request: $_model.ResetAppResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetAppResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      body["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientIp)) {
      body["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.clientOS)) {
      body["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.loginRegionId)) {
      body["LoginRegionId"] = request.loginRegionId;
    }

    if (!$dara.isNull(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.resourceIds)) {
      body["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetAppResources",
      version: "2021-09-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetAppResourcesResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.ResetAppResourcesResponse({}));
  }

  /**
   * 重置应用资源
   * 
   * @param request - ResetAppResourcesRequest
   * @returns ResetAppResourcesResponse
   */
  async resetAppResources(request: $_model.ResetAppResourcesRequest): Promise<$_model.ResetAppResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetAppResourcesWithOptions(request, runtime);
  }

  /**
   * 重启应用资源
   * 
   * @param request - RestartAppResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartAppResourcesResponse
   */
  async restartAppResourcesWithOptions(request: $_model.RestartAppResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartAppResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      body["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientIp)) {
      body["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.clientOS)) {
      body["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.loginRegionId)) {
      body["LoginRegionId"] = request.loginRegionId;
    }

    if (!$dara.isNull(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.resourceIds)) {
      body["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartAppResources",
      version: "2021-09-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartAppResourcesResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.RestartAppResourcesResponse({}));
  }

  /**
   * 重启应用资源
   * 
   * @param request - RestartAppResourcesRequest
   * @returns RestartAppResourcesResponse
   */
  async restartAppResources(request: $_model.RestartAppResourcesRequest): Promise<$_model.RestartAppResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartAppResourcesWithOptions(request, runtime);
  }

  /**
   * 启动应用资源
   * 
   * @param request - StartAppResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartAppResourcesResponse
   */
  async startAppResourcesWithOptions(request: $_model.StartAppResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartAppResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      body["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientIp)) {
      body["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.clientOS)) {
      body["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.loginRegionId)) {
      body["LoginRegionId"] = request.loginRegionId;
    }

    if (!$dara.isNull(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.resourceIds)) {
      body["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartAppResources",
      version: "2021-09-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartAppResourcesResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.StartAppResourcesResponse({}));
  }

  /**
   * 启动应用资源
   * 
   * @param request - StartAppResourcesRequest
   * @returns StartAppResourcesResponse
   */
  async startAppResources(request: $_model.StartAppResourcesRequest): Promise<$_model.StartAppResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startAppResourcesWithOptions(request, runtime);
  }

  /**
   * 停止应用
   * 
   * @param request - StopAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopAppResponse
   */
  async stopAppWithOptions(request: $_model.StopAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopAppResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliUid)) {
      body["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.apiType)) {
      body["ApiType"] = request.apiType;
    }

    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.appInstanceId)) {
      body["AppInstanceId"] = request.appInstanceId;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      body["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.clientChannel)) {
      body["ClientChannel"] = request.clientChannel;
    }

    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientIp)) {
      body["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.clientOS)) {
      body["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.forceStop)) {
      body["ForceStop"] = request.forceStop;
    }

    if (!$dara.isNull(request.idpId)) {
      body["IdpId"] = request.idpId;
    }

    if (!$dara.isNull(request.loginRegionId)) {
      body["LoginRegionId"] = request.loginRegionId;
    }

    if (!$dara.isNull(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    if (!$dara.isNull(request.wyId)) {
      body["WyId"] = request.wyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.StopAppResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.StopAppResponse({}));
  }

  /**
   * 停止应用
   * 
   * @param request - StopAppRequest
   * @returns StopAppResponse
   */
  async stopApp(request: $_model.StopAppRequest): Promise<$_model.StopAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopAppWithOptions(request, runtime);
  }

  /**
   * 关闭应用资源
   * 
   * @param request - StopAppResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopAppResourcesResponse
   */
  async stopAppResourcesWithOptions(request: $_model.StopAppResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopAppResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      body["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientIp)) {
      body["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.clientOS)) {
      body["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.loginRegionId)) {
      body["LoginRegionId"] = request.loginRegionId;
    }

    if (!$dara.isNull(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.resourceIds)) {
      body["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopAppResources",
      version: "2021-09-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopAppResourcesResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.StopAppResourcesResponse({}));
  }

  /**
   * 关闭应用资源
   * 
   * @param request - StopAppResourcesRequest
   * @returns StopAppResourcesResponse
   */
  async stopAppResources(request: $_model.StopAppResourcesRequest): Promise<$_model.StopAppResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopAppResourcesWithOptions(request, runtime);
  }

  /**
   * 解绑实例
   * 
   * @param request - UnbindRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindResponse
   */
  async unbindWithOptions(request: $_model.UnbindRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.appInstanceId)) {
      body["AppInstanceId"] = request.appInstanceId;
    }

    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientIp)) {
      body["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.clientOS)) {
      body["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.loginRegionId)) {
      body["LoginRegionId"] = request.loginRegionId;
    }

    if (!$dara.isNull(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UnbindResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.UnbindResponse({}));
  }

  /**
   * 解绑实例
   * 
   * @param request - UnbindRequest
   * @returns UnbindResponse
   */
  async unbind(request: $_model.UnbindRequest): Promise<$_model.UnbindResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindWithOptions(request, runtime);
  }

}
