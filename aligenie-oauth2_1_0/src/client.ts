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
    this._endpoint = this.getEndpoint("aligenie", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建播放列表
   * 
   * @param tmpReq - CreatePlayingListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePlayingListResponse
   */
  async createPlayingListWithOptions(tmpReq: $_model.CreatePlayingListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePlayingListResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePlayingListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.openCreatePlayingListRequest)) {
      request.openCreatePlayingListRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.openCreatePlayingListRequest, "OpenCreatePlayingListRequest", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.openCreatePlayingListRequestShrink)) {
      body["OpenCreatePlayingListRequest"] = request.openCreatePlayingListRequestShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePlayingList",
      version: "oauth2_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/oauth2/content/playing/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePlayingListResponse>(await this.callApi(params, req, runtime), new $_model.CreatePlayingListResponse({}));
  }

  /**
   * 创建播放列表
   * 
   * @param request - CreatePlayingListRequest
   * @returns CreatePlayingListResponse
   */
  async createPlayingList(request: $_model.CreatePlayingListRequest): Promise<$_model.CreatePlayingListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPlayingListWithOptions(request, headers, runtime);
  }

  /**
   * 执行场景
   * 
   * @param request - ExecuteSceneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteSceneResponse
   */
  async executeSceneWithOptions(request: $_model.ExecuteSceneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteSceneResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteScene",
      version: "oauth2_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/oauth2/iot/scene/execute`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteSceneResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteSceneResponse({}));
  }

  /**
   * 执行场景
   * 
   * @param request - ExecuteSceneRequest
   * @returns ExecuteSceneResponse
   */
  async executeScene(request: $_model.ExecuteSceneRequest): Promise<$_model.ExecuteSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeSceneWithOptions(request, headers, runtime);
  }

  /**
   * 执行场景（全屋）
   * 
   * @param request - ExecuteSmartHomeSceneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteSmartHomeSceneResponse
   */
  async executeSmartHomeSceneWithOptions(request: $_model.ExecuteSmartHomeSceneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteSmartHomeSceneResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.familyId)) {
      body["FamilyId"] = request.familyId;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteSmartHomeScene",
      version: "oauth2_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/oauth2/iot/smart_home/scene/execute`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteSmartHomeSceneResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteSmartHomeSceneResponse({}));
  }

  /**
   * 执行场景（全屋）
   * 
   * @param request - ExecuteSmartHomeSceneRequest
   * @returns ExecuteSmartHomeSceneResponse
   */
  async executeSmartHomeScene(request: $_model.ExecuteSmartHomeSceneRequest): Promise<$_model.ExecuteSmartHomeSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeSmartHomeSceneWithOptions(request, headers, runtime);
  }

  /**
   * 获取场景列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSceneListResponse
   */
  async getSceneListWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSceneListResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSceneList",
      version: "oauth2_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/oauth2/iot/scene/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSceneListResponse>(await this.callApi(params, req, runtime), new $_model.GetSceneListResponse({}));
  }

  /**
   * 获取场景列表
   * @returns GetSceneListResponse
   */
  async getSceneList(): Promise<$_model.GetSceneListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSceneListWithOptions(headers, runtime);
  }

  /**
   * 获取场景列表（全屋）
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSmartHomeSceneListResponse
   */
  async getSmartHomeSceneListWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSmartHomeSceneListResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSmartHomeSceneList",
      version: "oauth2_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/oauth2/iot/smart_home/scene/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSmartHomeSceneListResponse>(await this.callApi(params, req, runtime), new $_model.GetSmartHomeSceneListResponse({}));
  }

  /**
   * 获取场景列表（全屋）
   * @returns GetSmartHomeSceneListResponse
   */
  async getSmartHomeSceneList(): Promise<$_model.GetSmartHomeSceneListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSmartHomeSceneListWithOptions(headers, runtime);
  }

  /**
   * 获取
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserBasicInfoResponse
   */
  async getUserBasicInfoWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserBasicInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserBasicInfo",
      version: "oauth2_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/oauth2/users/basic`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserBasicInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetUserBasicInfoResponse({}));
  }

  /**
   * 获取
   * @returns GetUserBasicInfoResponse
   */
  async getUserBasicInfo(): Promise<$_model.GetUserBasicInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserBasicInfoWithOptions(headers, runtime);
  }

  /**
   * 获取天猫精灵用户绑定的手机号
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserPhoneResponse
   */
  async getUserPhoneWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserPhoneResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserPhone",
      version: "oauth2_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/oauth2/user/profile/phone`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserPhoneResponse>(await this.callApi(params, req, runtime), new $_model.GetUserPhoneResponse({}));
  }

  /**
   * 获取天猫精灵用户绑定的手机号
   * @returns GetUserPhoneResponse
   */
  async getUserPhone(): Promise<$_model.GetUserPhoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserPhoneWithOptions(headers, runtime);
  }

  /**
   * OAuth2令牌撤销端点
   * 
   * @param request - OAuth2RevocationEndpointRequest
   * @param headers - OAuth2RevocationEndpointHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OAuth2RevocationEndpointResponse
   */
  async oAuth2RevocationEndpointWithOptions(request: $_model.OAuth2RevocationEndpointRequest, headers: $_model.OAuth2RevocationEndpointHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.OAuth2RevocationEndpointResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.token)) {
      body["Token"] = request.token;
    }

    if (!$dara.isNull(request.tokenTypeHint)) {
      body["TokenTypeHint"] = request.tokenTypeHint;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OAuth2RevocationEndpoint",
      version: "oauth2_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/oauth2/revoke`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OAuth2RevocationEndpointResponse>(await this.callApi(params, req, runtime), new $_model.OAuth2RevocationEndpointResponse({}));
  }

  /**
   * OAuth2令牌撤销端点
   * 
   * @param request - OAuth2RevocationEndpointRequest
   * @returns OAuth2RevocationEndpointResponse
   */
  async oAuth2RevocationEndpoint(request: $_model.OAuth2RevocationEndpointRequest): Promise<$_model.OAuth2RevocationEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.OAuth2RevocationEndpointHeaders({ });
    return await this.oAuth2RevocationEndpointWithOptions(request, headers, runtime);
  }

  /**
   * OAuth2令牌端点
   * 
   * @param request - OAuth2TokenEndpointRequest
   * @param headers - OAuth2TokenEndpointHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OAuth2TokenEndpointResponse
   */
  async oAuth2TokenEndpointWithOptions(request: $_model.OAuth2TokenEndpointRequest, headers: $_model.OAuth2TokenEndpointHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.OAuth2TokenEndpointResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["Code"] = request.code;
    }

    if (!$dara.isNull(request.grantType)) {
      body["GrantType"] = request.grantType;
    }

    if (!$dara.isNull(request.redirectUri)) {
      body["RedirectUri"] = request.redirectUri;
    }

    if (!$dara.isNull(request.refreshToken)) {
      body["RefreshToken"] = request.refreshToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OAuth2TokenEndpoint",
      version: "oauth2_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/oauth2/token`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OAuth2TokenEndpointResponse>(await this.callApi(params, req, runtime), new $_model.OAuth2TokenEndpointResponse({}));
  }

  /**
   * OAuth2令牌端点
   * 
   * @param request - OAuth2TokenEndpointRequest
   * @returns OAuth2TokenEndpointResponse
   */
  async oAuth2TokenEndpoint(request: $_model.OAuth2TokenEndpointRequest): Promise<$_model.OAuth2TokenEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.OAuth2TokenEndpointHeaders({ });
    return await this.oAuth2TokenEndpointWithOptions(request, headers, runtime);
  }

  /**
   * 推送设备通知
   * 
   * @param tmpReq - PushDeviceNotificationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushDeviceNotificationResponse
   */
  async pushDeviceNotificationWithOptions(tmpReq: $_model.PushDeviceNotificationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PushDeviceNotificationResponse> {
    tmpReq.validate();
    let request = new $_model.PushDeviceNotificationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tenantInfo)) {
      request.tenantInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantInfo, "TenantInfo", "json");
    }

    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantInfoShrink)) {
      body["TenantInfo"] = request.tenantInfoShrink;
    }

    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushDeviceNotification",
      version: "oauth2_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/oauth2/device/notification/push`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushDeviceNotificationResponse>(await this.callApi(params, req, runtime), new $_model.PushDeviceNotificationResponse({}));
  }

  /**
   * 推送设备通知
   * 
   * @param request - PushDeviceNotificationRequest
   * @returns PushDeviceNotificationResponse
   */
  async pushDeviceNotification(request: $_model.PushDeviceNotificationRequest): Promise<$_model.PushDeviceNotificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushDeviceNotificationWithOptions(request, headers, runtime);
  }

  /**
   * 查询设备列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDeviceListResponse
   */
  async queryDeviceListWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDeviceListResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDeviceList",
      version: "oauth2_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/oauth2/device/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDeviceListResponse>(await this.callApi(params, req, runtime), new $_model.QueryDeviceListResponse({}));
  }

  /**
   * 查询设备列表
   * @returns QueryDeviceListResponse
   */
  async queryDeviceList(): Promise<$_model.QueryDeviceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryDeviceListWithOptions(headers, runtime);
  }

}
