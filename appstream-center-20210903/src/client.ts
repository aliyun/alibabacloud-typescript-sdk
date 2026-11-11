// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "appstream-center";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "regional";
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
   * Retrieves the connection credentials for cloud applications.
   * 
   * @remarks
   * It is a time-consuming operation to issue connection credentials. Therefore, you may need to invoke this API operation multiple times to obtain the connection credentials.
   * 1. When you invoke the API for the first time, an application instance is allocated to the specified convenience account, and the application is started. The start node ID (`TaskId`) is returned.
   * 2. When you invoke the API subsequently, you must pass the `TaskId` parameter as a request parameter to check whether the node is completed. When the returned node status (`TaskStatus`) is `Finished`, the connection ticket (`Ticket`) is also returned.
   * > 
   * > - If the startup process is fast enough, the connection ticket (`Ticket`) may also be returned when you invoke the API for the first time.
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

    if (!$dara.isNull(request.requireUuidValidation)) {
      body["RequireUuidValidation"] = request.requireUuidValidation;
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
   * Retrieves the connection credentials for cloud applications.
   * 
   * @remarks
   * It is a time-consuming operation to issue connection credentials. Therefore, you may need to invoke this API operation multiple times to obtain the connection credentials.
   * 1. When you invoke the API for the first time, an application instance is allocated to the specified convenience account, and the application is started. The start node ID (`TaskId`) is returned.
   * 2. When you invoke the API subsequently, you must pass the `TaskId` parameter as a request parameter to check whether the node is completed. When the returned node status (`TaskStatus`) is `Finished`, the connection ticket (`Ticket`) is also returned.
   * > 
   * > - If the startup process is fast enough, the connection ticket (`Ticket`) may also be returned when you invoke the API for the first time.
   * 
   * @param request - GetConnectionTicketRequest
   * @returns GetConnectionTicketResponse
   */
  async getConnectionTicket(request: $_model.GetConnectionTicketRequest): Promise<$_model.GetConnectionTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConnectionTicketWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of published applications.
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
   * Retrieves a list of published applications.
   * 
   * @param request - ListPublishedAppInfoRequest
   * @returns ListPublishedAppInfoResponse
   */
  async listPublishedAppInfo(request: $_model.ListPublishedAppInfoRequest): Promise<$_model.ListPublishedAppInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPublishedAppInfoWithOptions(request, runtime);
  }

  /**
   * Queries running applications.
   * 
   * @remarks
   * ## Prerequisites
   * This operation is an anonymous API operation, but the server still verifies the logon status. The `LoginToken` and `SessionId` request parameters are actually required. If either parameter is missing, an HTTP 400 error is returned with the error code `InvalidParameter.loginToken` or `InvalidParameter.sessionId`.
   * ## Obtain credentials
   * To obtain the `LoginToken` and `SessionId` by using `GetLoginToken`, call the `GetLoginToken` operation of the `appstream-center` 2021-02-20 version. The 2021-09-03 version does not provide this operation. You can also call `RefreshLoginToken` to update and obtain the `LoginToken`.
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
   * Queries running applications.
   * 
   * @remarks
   * ## Prerequisites
   * This operation is an anonymous API operation, but the server still verifies the logon status. The `LoginToken` and `SessionId` request parameters are actually required. If either parameter is missing, an HTTP 400 error is returned with the error code `InvalidParameter.loginToken` or `InvalidParameter.sessionId`.
   * ## Obtain credentials
   * To obtain the `LoginToken` and `SessionId` by using `GetLoginToken`, call the `GetLoginToken` operation of the `appstream-center` 2021-02-20 version. The 2021-09-03 version does not provide this operation. You can also call `RefreshLoginToken` to update and obtain the `LoginToken`.
   * 
   * @param request - ListRunningAppsRequest
   * @returns ListRunningAppsResponse
   */
  async listRunningApps(request: $_model.ListRunningAppsRequest): Promise<$_model.ListRunningAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRunningAppsWithOptions(request, runtime);
  }

  /**
   * Resets application resources.
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
   * Resets application resources.
   * 
   * @param request - ResetAppResourcesRequest
   * @returns ResetAppResourcesResponse
   */
  async resetAppResources(request: $_model.ResetAppResourcesRequest): Promise<$_model.ResetAppResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetAppResourcesWithOptions(request, runtime);
  }

  /**
   * Restarts application resources.
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
   * Restarts application resources.
   * 
   * @param request - RestartAppResourcesRequest
   * @returns RestartAppResourcesResponse
   */
  async restartAppResources(request: $_model.RestartAppResourcesRequest): Promise<$_model.RestartAppResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartAppResourcesWithOptions(request, runtime);
  }

  /**
   * Starts application resources.
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
   * Starts application resources.
   * 
   * @param request - StartAppResourcesRequest
   * @returns StartAppResourcesResponse
   */
  async startAppResources(request: $_model.StartAppResourcesRequest): Promise<$_model.StartAppResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startAppResourcesWithOptions(request, runtime);
  }

  /**
   * Stops a specified application.
   * 
   * @remarks
   * ## Credential acquisition
   * To obtain the `LoginToken` and `SessionId` by using `GetLoginToken`, call the `GetLoginToken` operation of the `appstream-center` 2021-02-20 version. The 2021-09-03 version does not provide this operation. You can also update and obtain the `LoginToken` by using `RefreshLoginToken`.
   * ### Required parameters and authentication invocation flow for GetLoginToken (2021-02-20 version)
   * API documentation: [GetLoginToken (2021-02-20)](https://www.alibabacloud.com/help/en/wuying-appstreaming/developer-reference/api-appstream-center-2021-02-20-getlogintoken)
   * Required metric descriptions:
   * - `ClientId`: Required. The unique ID generated by the client, serving as the identity for the client that initiates the logon. Reuse the same value within the same session.
   * - `LoginIdentifier`: The enterprise identity (i.e., enterprise alias). This parameter is required when you use the enterprise identity logon method. Note that the parameter name is `LoginIdentifier`, not `TenantAlias`.
   * - When you use a convenience account or an AD domain account for authentication, the Settings for `CurrentStage` must be `ADPassword`, and you must provide both `EndUserId` (username) and `Password` (password).
   * Complete authentication invocation flow:
   * 1. Invoke `GetLoginToken` for the first time with `ClientId`, `LoginIdentifier`, `CurrentStage` based on the logon method, and the corresponding credentials. Save the returned `LoginToken` and `SessionId`. `SessionId` is returned only during the first invocation in the same session and must be reused in subsequent stage invocations.
   * 2. If `NextStage` (such as `MFAVerify`, `TokenVerify`, or `ChangePassword`) is returned, carry the same `SessionId` and `ClientId`, update the Settings of `CurrentStage` to the value of `NextStage`, and provide the parameters required for this stage (such as `AuthenticationCode` for the `MFAVerify` stage and `TokenCode` for the `TokenVerify` stage). Repeat the invocation until the final `LoginToken` is obtained.
   * 3. Use the final `LoginToken` and `SessionId` to invoke this operation (`StopApp`).
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
   * Stops a specified application.
   * 
   * @remarks
   * ## Credential acquisition
   * To obtain the `LoginToken` and `SessionId` by using `GetLoginToken`, call the `GetLoginToken` operation of the `appstream-center` 2021-02-20 version. The 2021-09-03 version does not provide this operation. You can also update and obtain the `LoginToken` by using `RefreshLoginToken`.
   * ### Required parameters and authentication invocation flow for GetLoginToken (2021-02-20 version)
   * API documentation: [GetLoginToken (2021-02-20)](https://www.alibabacloud.com/help/en/wuying-appstreaming/developer-reference/api-appstream-center-2021-02-20-getlogintoken)
   * Required metric descriptions:
   * - `ClientId`: Required. The unique ID generated by the client, serving as the identity for the client that initiates the logon. Reuse the same value within the same session.
   * - `LoginIdentifier`: The enterprise identity (i.e., enterprise alias). This parameter is required when you use the enterprise identity logon method. Note that the parameter name is `LoginIdentifier`, not `TenantAlias`.
   * - When you use a convenience account or an AD domain account for authentication, the Settings for `CurrentStage` must be `ADPassword`, and you must provide both `EndUserId` (username) and `Password` (password).
   * Complete authentication invocation flow:
   * 1. Invoke `GetLoginToken` for the first time with `ClientId`, `LoginIdentifier`, `CurrentStage` based on the logon method, and the corresponding credentials. Save the returned `LoginToken` and `SessionId`. `SessionId` is returned only during the first invocation in the same session and must be reused in subsequent stage invocations.
   * 2. If `NextStage` (such as `MFAVerify`, `TokenVerify`, or `ChangePassword`) is returned, carry the same `SessionId` and `ClientId`, update the Settings of `CurrentStage` to the value of `NextStage`, and provide the parameters required for this stage (such as `AuthenticationCode` for the `MFAVerify` stage and `TokenCode` for the `TokenVerify` stage). Repeat the invocation until the final `LoginToken` is obtained.
   * 3. Use the final `LoginToken` and `SessionId` to invoke this operation (`StopApp`).
   * 
   * @param request - StopAppRequest
   * @returns StopAppResponse
   */
  async stopApp(request: $_model.StopAppRequest): Promise<$_model.StopAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopAppWithOptions(request, runtime);
  }

  /**
   * Stops application resources.
   * 
   * @remarks
   * ## Before you begin
   * Before you call this operation, you must complete user logon authentication to obtain the `LoginToken` and `SessionId`. This `StopAppResources` operation uses the **2021-09-03** version of `appstream-center`. The prerequisite logon operation uses the **2021-02-20** version of [GetLoginToken](https://www.alibabacloud.com/help/en/wuying-appstreaming/developer-reference/api-appstream-center-2021-02-20-getlogintoken). Use the respective API versions for each operation.
   * ### 1. Prepare the enterprise identifier and account information
   * The following procedure applies to password authentication for convenience accounts or AD domain accounts that log on by using an enterprise identifier.
   * | Parameter | Description |
   * | --- | --- |
   * | `ClientId` | The unique ID generated by the client. This parameter is required when you call `GetLoginToken`. The same client ID is reused in the following call sequence. |
   * | `LoginIdentifier` | The enterprise identifier for logon, which is the `TenantAlias`. The parameter name in the logon request is `LoginIdentifier`, not `TenantAlias`. To query the logon configuration of this identifier, you can call [FindIdpListByLoginIdentifier (2021-02-20)](https://www.alibabacloud.com/help/en/wuying-appstreaming/developer-reference/api-appstream-center-2021-02-20-findidplistbyloginidentifier). The `TenantAliasInfo.TenantAlias` field in the response indicates the enterprise identifier. |
   * | `CurrentStage` | Set this parameter to `ADPassword` for password authentication. This value applies to both convenience accounts and AD domain accounts, not only AD domain accounts. |
   * | `EndUserId` | The username of the convenience account or AD domain account. This parameter is required when `CurrentStage` is set to `ADPassword`. |
   * | `Password` | The password of the corresponding account. This parameter is required when `CurrentStage` is set to `ADPassword`. |
   * ### 2. Continue logon based on the returned authentication stage
   * After you invoke `GetLoginToken` for the first time, save the returned `SessionId`. This value is returned only during the first invocation in the same logon session. If you need to authenticate further, include the saved `SessionId` in subsequent requests. Do not clear this value even if it is not returned in subsequent responses.
   * Determine whether you still need to authenticate based on the `NextStage` field in the response, and set the required next authentication stage as the `CurrentStage` for subsequent requests. Examples:
   * | Next authentication stage | What to do next |
   * | --- | --- |
   * | `MFAVerify` | Include the `SessionId` and the `AuthenticationCode` generated by the virtual MFA device to continue to invoke `GetLoginToken`. |
   * | `TokenVerify` | Include the `SessionId` and the client secondary authentication verification code `TokenCode` to continue to authenticate. |
   * | `ChangePassword` | Specify `OldPassword` and `NewPassword` as required to complete the password change stage. |
   * | `MFABind` or other authentication stages | Complete the corresponding operations based on the actual returned stage and the `GetLoginToken` documentation. Do not directly apply the request parameters of `MFAVerify`. |
   * The authentication stages are determined by the account configuration and the result of the current logon. Not every logon must go through all the preceding stages in sequence. Invoke `StopAppResources` only after logon authentication is complete and the `LoginToken` is obtained. Do not proceed with the shutdown of resources if authentication failed or if there are pending authentication stages.
   * ### 3. Call sequence example
   * The following is pseudocode for parameter passing and is not an executable SDK example. `clientId`, `tenantAlias`, `endUserId`, `password`, and `authenticationCode` are runtime variables of the caller. `resourceIds`, `productType`, and `appInstanceGroupId` are business parameters for this operation. Do not write real passwords, verification codes, or logon credentials in examples or logs.
   * ```text
   * login1 = GetLoginToken(version="2021-02-20",
   *     ClientId=clientId, LoginIdentifier=tenantAlias,
   *     CurrentStage="ADPassword", EndUserId=endUserId, Password=password)
   * sessionId = login1.SessionId
   * loginResult = login1
   * if loginResult.NextStage == "MFAVerify":
   *     loginResult = GetLoginToken(version="2021-02-20",
   *         ClientId=clientId, LoginIdentifier=tenantAlias,
   *         SessionId=sessionId, CurrentStage="MFAVerify",
   *         AuthenticationCode=authenticationCode)
   * ```
   * If other authentication stages are still required, continue processing based on `NextStage`. Do not treat the preceding single MFA call as a fixed endpoint. After logon is complete, call this operation by using the `LoginToken` obtained during this logon and the saved `SessionId`:
   * ```text
   * StopAppResources(version="2021-09-03",
   *     ClientId=clientId, LoginToken=loginResult.LoginToken, SessionId=sessionId,
   *     ProductType=productType, AppInstanceGroupId=appInstanceGroupId,
   *     ResourceIds=resourceIds)
   * ```
   * `Password`, `LoginIdentifier`, and `CurrentStage` belong to the prerequisite logon request and are not request parameters of `StopAppResources`. For the rules on how to specify other parameters and resource IDs for this operation, see the request parameter table below.
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
   * Stops application resources.
   * 
   * @remarks
   * ## Before you begin
   * Before you call this operation, you must complete user logon authentication to obtain the `LoginToken` and `SessionId`. This `StopAppResources` operation uses the **2021-09-03** version of `appstream-center`. The prerequisite logon operation uses the **2021-02-20** version of [GetLoginToken](https://www.alibabacloud.com/help/en/wuying-appstreaming/developer-reference/api-appstream-center-2021-02-20-getlogintoken). Use the respective API versions for each operation.
   * ### 1. Prepare the enterprise identifier and account information
   * The following procedure applies to password authentication for convenience accounts or AD domain accounts that log on by using an enterprise identifier.
   * | Parameter | Description |
   * | --- | --- |
   * | `ClientId` | The unique ID generated by the client. This parameter is required when you call `GetLoginToken`. The same client ID is reused in the following call sequence. |
   * | `LoginIdentifier` | The enterprise identifier for logon, which is the `TenantAlias`. The parameter name in the logon request is `LoginIdentifier`, not `TenantAlias`. To query the logon configuration of this identifier, you can call [FindIdpListByLoginIdentifier (2021-02-20)](https://www.alibabacloud.com/help/en/wuying-appstreaming/developer-reference/api-appstream-center-2021-02-20-findidplistbyloginidentifier). The `TenantAliasInfo.TenantAlias` field in the response indicates the enterprise identifier. |
   * | `CurrentStage` | Set this parameter to `ADPassword` for password authentication. This value applies to both convenience accounts and AD domain accounts, not only AD domain accounts. |
   * | `EndUserId` | The username of the convenience account or AD domain account. This parameter is required when `CurrentStage` is set to `ADPassword`. |
   * | `Password` | The password of the corresponding account. This parameter is required when `CurrentStage` is set to `ADPassword`. |
   * ### 2. Continue logon based on the returned authentication stage
   * After you invoke `GetLoginToken` for the first time, save the returned `SessionId`. This value is returned only during the first invocation in the same logon session. If you need to authenticate further, include the saved `SessionId` in subsequent requests. Do not clear this value even if it is not returned in subsequent responses.
   * Determine whether you still need to authenticate based on the `NextStage` field in the response, and set the required next authentication stage as the `CurrentStage` for subsequent requests. Examples:
   * | Next authentication stage | What to do next |
   * | --- | --- |
   * | `MFAVerify` | Include the `SessionId` and the `AuthenticationCode` generated by the virtual MFA device to continue to invoke `GetLoginToken`. |
   * | `TokenVerify` | Include the `SessionId` and the client secondary authentication verification code `TokenCode` to continue to authenticate. |
   * | `ChangePassword` | Specify `OldPassword` and `NewPassword` as required to complete the password change stage. |
   * | `MFABind` or other authentication stages | Complete the corresponding operations based on the actual returned stage and the `GetLoginToken` documentation. Do not directly apply the request parameters of `MFAVerify`. |
   * The authentication stages are determined by the account configuration and the result of the current logon. Not every logon must go through all the preceding stages in sequence. Invoke `StopAppResources` only after logon authentication is complete and the `LoginToken` is obtained. Do not proceed with the shutdown of resources if authentication failed or if there are pending authentication stages.
   * ### 3. Call sequence example
   * The following is pseudocode for parameter passing and is not an executable SDK example. `clientId`, `tenantAlias`, `endUserId`, `password`, and `authenticationCode` are runtime variables of the caller. `resourceIds`, `productType`, and `appInstanceGroupId` are business parameters for this operation. Do not write real passwords, verification codes, or logon credentials in examples or logs.
   * ```text
   * login1 = GetLoginToken(version="2021-02-20",
   *     ClientId=clientId, LoginIdentifier=tenantAlias,
   *     CurrentStage="ADPassword", EndUserId=endUserId, Password=password)
   * sessionId = login1.SessionId
   * loginResult = login1
   * if loginResult.NextStage == "MFAVerify":
   *     loginResult = GetLoginToken(version="2021-02-20",
   *         ClientId=clientId, LoginIdentifier=tenantAlias,
   *         SessionId=sessionId, CurrentStage="MFAVerify",
   *         AuthenticationCode=authenticationCode)
   * ```
   * If other authentication stages are still required, continue processing based on `NextStage`. Do not treat the preceding single MFA call as a fixed endpoint. After logon is complete, call this operation by using the `LoginToken` obtained during this logon and the saved `SessionId`:
   * ```text
   * StopAppResources(version="2021-09-03",
   *     ClientId=clientId, LoginToken=loginResult.LoginToken, SessionId=sessionId,
   *     ProductType=productType, AppInstanceGroupId=appInstanceGroupId,
   *     ResourceIds=resourceIds)
   * ```
   * `Password`, `LoginIdentifier`, and `CurrentStage` belong to the prerequisite logon request and are not request parameters of `StopAppResources`. For the rules on how to specify other parameters and resource IDs for this operation, see the request parameter table below.
   * 
   * @param request - StopAppResourcesRequest
   * @returns StopAppResourcesResponse
   */
  async stopAppResources(request: $_model.StopAppResourcesRequest): Promise<$_model.StopAppResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopAppResourcesWithOptions(request, runtime);
  }

  /**
   * Unbinds an application instance from a user.
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

    if (!$dara.isNull(request.appInstancePersistentId)) {
      body["AppInstancePersistentId"] = request.appInstancePersistentId;
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

    if (!$dara.isNull(request.sessionToken)) {
      body["SessionToken"] = request.sessionToken;
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
   * Unbinds an application instance from a user.
   * 
   * @param request - UnbindRequest
   * @returns UnbindResponse
   */
  async unbind(request: $_model.UnbindRequest): Promise<$_model.UnbindResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindWithOptions(request, runtime);
  }

}
