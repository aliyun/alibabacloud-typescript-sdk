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
   * 收藏/取消收藏
   * 
   * @param tmpReq - AddAndRemoveFavoriteContentRequest
   * @param headers - AddAndRemoveFavoriteContentHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddAndRemoveFavoriteContentResponse
   */
  async addAndRemoveFavoriteContentWithOptions(tmpReq: $_model.AddAndRemoveFavoriteContentRequest, headers: $_model.AddAndRemoveFavoriteContentHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddAndRemoveFavoriteContentResponse> {
    tmpReq.validate();
    let request = new $_model.AddAndRemoveFavoriteContentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.openAddAndRemoveFavoriteContentRequest)) {
      request.openAddAndRemoveFavoriteContentRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.openAddAndRemoveFavoriteContentRequest, "OpenAddAndRemoveFavoriteContentRequest", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.openAddAndRemoveFavoriteContentRequestShrink)) {
      body["OpenAddAndRemoveFavoriteContentRequest"] = request.openAddAndRemoveFavoriteContentRequestShrink;
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
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddAndRemoveFavoriteContent",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/AddAndRemoveFavoriteContent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddAndRemoveFavoriteContentResponse>(await this.callApi(params, req, runtime), new $_model.AddAndRemoveFavoriteContentResponse({}));
  }

  /**
   * 收藏/取消收藏
   * 
   * @param request - AddAndRemoveFavoriteContentRequest
   * @returns AddAndRemoveFavoriteContentResponse
   */
  async addAndRemoveFavoriteContent(request: $_model.AddAndRemoveFavoriteContentRequest): Promise<$_model.AddAndRemoveFavoriteContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddAndRemoveFavoriteContentHeaders({ });
    return await this.addAndRemoveFavoriteContentWithOptions(request, headers, runtime);
  }

  /**
   * 新增订阅
   * 
   * @param tmpReq - AddSubRequest
   * @param headers - AddSubHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSubResponse
   */
  async addSubWithOptions(tmpReq: $_model.AddSubRequest, headers: $_model.AddSubHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddSubResponse> {
    tmpReq.validate();
    let request = new $_model.AddSubShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.addSubscriptionInfoRequest)) {
      request.addSubscriptionInfoRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addSubscriptionInfoRequest, "AddSubscriptionInfoRequest", "json");
    }

    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addSubscriptionInfoRequestShrink)) {
      query["AddSubscriptionInfoRequest"] = request.addSubscriptionInfoRequestShrink;
    }

    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddSub",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/addSub`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddSubResponse>(await this.callApi(params, req, runtime), new $_model.AddSubResponse({}));
  }

  /**
   * 新增订阅
   * 
   * @param request - AddSubRequest
   * @returns AddSubResponse
   */
  async addSub(request: $_model.AddSubRequest): Promise<$_model.AddSubResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddSubHeaders({ });
    return await this.addSubWithOptions(request, headers, runtime);
  }

  /**
   * 通过指定精灵账号进行授权登录
   * 
   * @param request - AuthLoginWithAligenieUserInfoRequest
   * @param headers - AuthLoginWithAligenieUserInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthLoginWithAligenieUserInfoResponse
   */
  async authLoginWithAligenieUserInfoWithOptions(request: $_model.AuthLoginWithAligenieUserInfoRequest, headers: $_model.AuthLoginWithAligenieUserInfoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AuthLoginWithAligenieUserInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.encryptedAligenieUserIdentifier)) {
      body["EncryptedAligenieUserIdentifier"] = request.encryptedAligenieUserIdentifier;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
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
      action: "AuthLoginWithAligenieUserInfo",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/authLoginWithAligenieUserInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthLoginWithAligenieUserInfoResponse>(await this.callApi(params, req, runtime), new $_model.AuthLoginWithAligenieUserInfoResponse({}));
  }

  /**
   * 通过指定精灵账号进行授权登录
   * 
   * @param request - AuthLoginWithAligenieUserInfoRequest
   * @returns AuthLoginWithAligenieUserInfoResponse
   */
  async authLoginWithAligenieUserInfo(request: $_model.AuthLoginWithAligenieUserInfoRequest): Promise<$_model.AuthLoginWithAligenieUserInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AuthLoginWithAligenieUserInfoHeaders({ });
    return await this.authLoginWithAligenieUserInfoWithOptions(request, headers, runtime);
  }

  /**
   * 通过手机号生成精灵账号进行授权登录
   * 
   * @param request - AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberRequest
   * @param headers - AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberResponse
   */
  async authLoginWithAligenieUserInfoGeneratedByPhoneNumberWithOptions(request: $_model.AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberRequest, headers: $_model.AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
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
      action: "AuthLoginWithAligenieUserInfoGeneratedByPhoneNumber",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/authLoginWithAligenieUserInfoGeneratedByPhoneNumber`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberResponse>(await this.callApi(params, req, runtime), new $_model.AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberResponse({}));
  }

  /**
   * 通过手机号生成精灵账号进行授权登录
   * 
   * @param request - AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberRequest
   * @returns AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberResponse
   */
  async authLoginWithAligenieUserInfoGeneratedByPhoneNumber(request: $_model.AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberRequest): Promise<$_model.AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AuthLoginWithAligenieUserInfoGeneratedByPhoneNumberHeaders({ });
    return await this.authLoginWithAligenieUserInfoGeneratedByPhoneNumberWithOptions(request, headers, runtime);
  }

  /**
   * 通过指定淘宝账号进行授权登录
   * 
   * @param request - AuthLoginWithTaobaoUserInfoRequest
   * @param headers - AuthLoginWithTaobaoUserInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthLoginWithTaobaoUserInfoResponse
   */
  async authLoginWithTaobaoUserInfoWithOptions(request: $_model.AuthLoginWithTaobaoUserInfoRequest, headers: $_model.AuthLoginWithTaobaoUserInfoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AuthLoginWithTaobaoUserInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.encryptedTaobaoUserIdentifier)) {
      body["EncryptedTaobaoUserIdentifier"] = request.encryptedTaobaoUserIdentifier;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
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
      action: "AuthLoginWithTaobaoUserInfo",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/authLoginWithTaobaoUserInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthLoginWithTaobaoUserInfoResponse>(await this.callApi(params, req, runtime), new $_model.AuthLoginWithTaobaoUserInfoResponse({}));
  }

  /**
   * 通过指定淘宝账号进行授权登录
   * 
   * @param request - AuthLoginWithTaobaoUserInfoRequest
   * @returns AuthLoginWithTaobaoUserInfoResponse
   */
  async authLoginWithTaobaoUserInfo(request: $_model.AuthLoginWithTaobaoUserInfoRequest): Promise<$_model.AuthLoginWithTaobaoUserInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AuthLoginWithTaobaoUserInfoHeaders({ });
    return await this.authLoginWithTaobaoUserInfoWithOptions(request, headers, runtime);
  }

  /**
   * 通过三方用户信息进行授权登录
   * 
   * @param tmpReq - AuthLoginWithThirdUserInfoRequest
   * @param headers - AuthLoginWithThirdUserInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthLoginWithThirdUserInfoResponse
   */
  async authLoginWithThirdUserInfoWithOptions(tmpReq: $_model.AuthLoginWithThirdUserInfoRequest, headers: $_model.AuthLoginWithThirdUserInfoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AuthLoginWithThirdUserInfoResponse> {
    tmpReq.validate();
    let request = new $_model.AuthLoginWithThirdUserInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.extInfo)) {
      request.extInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extInfo, "ExtInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extInfoShrink)) {
      body["ExtInfo"] = request.extInfoShrink;
    }

    if (!$dara.isNull(request.sceneCode)) {
      body["SceneCode"] = request.sceneCode;
    }

    if (!$dara.isNull(request.thirdUserIdentifier)) {
      body["ThirdUserIdentifier"] = request.thirdUserIdentifier;
    }

    if (!$dara.isNull(request.thirdUserType)) {
      body["ThirdUserType"] = request.thirdUserType;
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
      action: "AuthLoginWithThirdUserInfo",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/authLoginWithThirdUserInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthLoginWithThirdUserInfoResponse>(await this.callApi(params, req, runtime), new $_model.AuthLoginWithThirdUserInfoResponse({}));
  }

  /**
   * 通过三方用户信息进行授权登录
   * 
   * @param request - AuthLoginWithThirdUserInfoRequest
   * @returns AuthLoginWithThirdUserInfoResponse
   */
  async authLoginWithThirdUserInfo(request: $_model.AuthLoginWithThirdUserInfoRequest): Promise<$_model.AuthLoginWithThirdUserInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AuthLoginWithThirdUserInfoHeaders({ });
    return await this.authLoginWithThirdUserInfoWithOptions(request, headers, runtime);
  }

  /**
   * 检查并拨打voip电话【酒店业务】
   * 
   * @param tmpReq - CheckAndDoVoipCallForHotelRequest
   * @param headers - CheckAndDoVoipCallForHotelHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckAndDoVoipCallForHotelResponse
   */
  async checkAndDoVoipCallForHotelWithOptions(tmpReq: $_model.CheckAndDoVoipCallForHotelRequest, headers: $_model.CheckAndDoVoipCallForHotelHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CheckAndDoVoipCallForHotelResponse> {
    tmpReq.validate();
    let request = new $_model.CheckAndDoVoipCallForHotelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizData)) {
      body["BizData"] = request.bizData;
    }

    if (!$dara.isNull(request.calleeNick)) {
      body["CalleeNick"] = request.calleeNick;
    }

    if (!$dara.isNull(request.calleePhoneNum)) {
      body["CalleePhoneNum"] = request.calleePhoneNum;
    }

    if (!$dara.isNull(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
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
      action: "CheckAndDoVoipCallForHotel",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/checkAndDoVoipCallForHotel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckAndDoVoipCallForHotelResponse>(await this.callApi(params, req, runtime), new $_model.CheckAndDoVoipCallForHotelResponse({}));
  }

  /**
   * 检查并拨打voip电话【酒店业务】
   * 
   * @param request - CheckAndDoVoipCallForHotelRequest
   * @returns CheckAndDoVoipCallForHotelResponse
   */
  async checkAndDoVoipCallForHotel(request: $_model.CheckAndDoVoipCallForHotelRequest): Promise<$_model.CheckAndDoVoipCallForHotelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CheckAndDoVoipCallForHotelHeaders({ });
    return await this.checkAndDoVoipCallForHotelWithOptions(request, headers, runtime);
  }

  /**
   * 轮询激活绑定结果
   * 
   * @param tmpReq - CheckAuthCodeBindForExtRequest
   * @param headers - CheckAuthCodeBindForExtHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckAuthCodeBindForExtResponse
   */
  async checkAuthCodeBindForExtWithOptions(tmpReq: $_model.CheckAuthCodeBindForExtRequest, headers: $_model.CheckAuthCodeBindForExtHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CheckAuthCodeBindForExtResponse> {
    tmpReq.validate();
    let request = new $_model.CheckAuthCodeBindForExtShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.encodeKey)) {
      query["EncodeKey"] = request.encodeKey;
    }

    if (!$dara.isNull(request.encodeType)) {
      query["EncodeType"] = request.encodeType;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckAuthCodeBindForExt",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/checkAuthCodeBindForExt`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckAuthCodeBindForExtResponse>(await this.callApi(params, req, runtime), new $_model.CheckAuthCodeBindForExtResponse({}));
  }

  /**
   * 轮询激活绑定结果
   * 
   * @param request - CheckAuthCodeBindForExtRequest
   * @returns CheckAuthCodeBindForExtResponse
   */
  async checkAuthCodeBindForExt(request: $_model.CheckAuthCodeBindForExtRequest): Promise<$_model.CheckAuthCodeBindForExtResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CheckAuthCodeBindForExtHeaders({ });
    return await this.checkAuthCodeBindForExtWithOptions(request, headers, runtime);
  }

  /**
   * 云播放器：对外
   * 
   * @param tmpReq - CloudPlayerRequest
   * @param headers - CloudPlayerHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudPlayerResponse
   */
  async cloudPlayerWithOptions(tmpReq: $_model.CloudPlayerRequest, headers: $_model.CloudPlayerHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CloudPlayerResponse> {
    tmpReq.validate();
    let request = new $_model.CloudPlayerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.songIdList)) {
      request.songIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.songIdList, "SongIdList", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.curPlayIndex)) {
      query["CurPlayIndex"] = request.curPlayIndex;
    }

    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.playMode)) {
      query["PlayMode"] = request.playMode;
    }

    if (!$dara.isNull(request.songId)) {
      query["SongId"] = request.songId;
    }

    if (!$dara.isNull(request.songIdListShrink)) {
      query["SongIdList"] = request.songIdListShrink;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudPlayer",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/cloud/player`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudPlayerResponse>(await this.callApi(params, req, runtime), new $_model.CloudPlayerResponse({}));
  }

  /**
   * 云播放器：对外
   * 
   * @param request - CloudPlayerRequest
   * @returns CloudPlayerResponse
   */
  async cloudPlayer(request: $_model.CloudPlayerRequest): Promise<$_model.CloudPlayerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CloudPlayerHeaders({ });
    return await this.cloudPlayerWithOptions(request, headers, runtime);
  }

  /**
   * 创建闹钟
   * 
   * @param tmpReq - CreateAlarmRequest
   * @param headers - CreateAlarmHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAlarmResponse
   */
  async createAlarmWithOptions(tmpReq: $_model.CreateAlarmRequest, headers: $_model.CreateAlarmHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAlarmResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAlarmShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.payloadShrink)) {
      body["Payload"] = request.payloadShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
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
      action: "CreateAlarm",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/createAlarm`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAlarmResponse>(await this.callApi(params, req, runtime), new $_model.CreateAlarmResponse({}));
  }

  /**
   * 创建闹钟
   * 
   * @param request - CreateAlarmRequest
   * @returns CreateAlarmResponse
   */
  async createAlarm(request: $_model.CreateAlarmRequest): Promise<$_model.CreateAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateAlarmHeaders({ });
    return await this.createAlarmWithOptions(request, headers, runtime);
  }

  /**
   * 播放列表创建
   * 
   * @param tmpReq - CreatePlayingListRequest
   * @param headers - CreatePlayingListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePlayingListResponse
   */
  async createPlayingListWithOptions(tmpReq: $_model.CreatePlayingListRequest, headers: $_model.CreatePlayingListHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePlayingListResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePlayingListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.openCreatePlayingListRequest)) {
      request.openCreatePlayingListRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.openCreatePlayingListRequest, "OpenCreatePlayingListRequest", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.openCreatePlayingListRequestShrink)) {
      body["OpenCreatePlayingListRequest"] = request.openCreatePlayingListRequestShrink;
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
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePlayingList",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/CreatePlayingList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePlayingListResponse>(await this.callApi(params, req, runtime), new $_model.CreatePlayingListResponse({}));
  }

  /**
   * 播放列表创建
   * 
   * @param request - CreatePlayingListRequest
   * @returns CreatePlayingListResponse
   */
  async createPlayingList(request: $_model.CreatePlayingListRequest): Promise<$_model.CreatePlayingListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreatePlayingListHeaders({ });
    return await this.createPlayingListWithOptions(request, headers, runtime);
  }

  /**
   * 播放列表创建走OAuth2授权
   * 
   * @param tmpReq - CreatePlayingListOAuth2Request
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePlayingListOAuth2Response
   */
  async createPlayingListOAuth2WithOptions(tmpReq: $_model.CreatePlayingListOAuth2Request, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePlayingListOAuth2Response> {
    tmpReq.validate();
    let request = new $_model.CreatePlayingListOAuth2ShrinkRequest({ });
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
      action: "CreatePlayingListOAuth2",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/CreatePlayingListOAuth2`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePlayingListOAuth2Response>(await this.callApi(params, req, runtime), new $_model.CreatePlayingListOAuth2Response({}));
  }

  /**
   * 播放列表创建走OAuth2授权
   * 
   * @param request - CreatePlayingListOAuth2Request
   * @returns CreatePlayingListOAuth2Response
   */
  async createPlayingListOAuth2(request: $_model.CreatePlayingListOAuth2Request): Promise<$_model.CreatePlayingListOAuth2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPlayingListOAuth2WithOptions(request, headers, runtime);
  }

  /**
   * 创建定时任务
   * 
   * @param tmpReq - CreateScheduleTaskRequest
   * @param headers - CreateScheduleTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScheduleTaskResponse
   */
  async createScheduleTaskWithOptions(tmpReq: $_model.CreateScheduleTaskRequest, headers: $_model.CreateScheduleTaskHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScheduleTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateScheduleTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.payloadShrink)) {
      body["Payload"] = request.payloadShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
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
      action: "CreateScheduleTask",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/CreateScheduleTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateScheduleTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateScheduleTaskResponse({}));
  }

  /**
   * 创建定时任务
   * 
   * @param request - CreateScheduleTaskRequest
   * @returns CreateScheduleTaskResponse
   */
  async createScheduleTask(request: $_model.CreateScheduleTaskRequest): Promise<$_model.CreateScheduleTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateScheduleTaskHeaders({ });
    return await this.createScheduleTaskWithOptions(request, headers, runtime);
  }

  /**
   * 闹钟批量删除
   * 
   * @param tmpReq - DeleteAlarmsRequest
   * @param headers - DeleteAlarmsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAlarmsResponse
   */
  async deleteAlarmsWithOptions(tmpReq: $_model.DeleteAlarmsRequest, headers: $_model.DeleteAlarmsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAlarmsResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteAlarmsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.payloadShrink)) {
      body["Payload"] = request.payloadShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
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
      action: "DeleteAlarms",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/deleteAlarms`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAlarmsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAlarmsResponse({}));
  }

  /**
   * 闹钟批量删除
   * 
   * @param request - DeleteAlarmsRequest
   * @returns DeleteAlarmsResponse
   */
  async deleteAlarms(request: $_model.DeleteAlarmsRequest): Promise<$_model.DeleteAlarmsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteAlarmsHeaders({ });
    return await this.deleteAlarmsWithOptions(request, headers, runtime);
  }

  /**
   * 删除定时任务
   * 
   * @param tmpReq - DeleteScheduleTaskRequest
   * @param headers - DeleteScheduleTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScheduleTaskResponse
   */
  async deleteScheduleTaskWithOptions(tmpReq: $_model.DeleteScheduleTaskRequest, headers: $_model.DeleteScheduleTaskHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteScheduleTaskResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteScheduleTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.payloadShrink)) {
      body["Payload"] = request.payloadShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
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
      action: "DeleteScheduleTask",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/DeleteScheduleTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteScheduleTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteScheduleTaskResponse({}));
  }

  /**
   * 删除定时任务
   * 
   * @param request - DeleteScheduleTaskRequest
   * @returns DeleteScheduleTaskResponse
   */
  async deleteScheduleTask(request: $_model.DeleteScheduleTaskRequest): Promise<$_model.DeleteScheduleTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteScheduleTaskHeaders({ });
    return await this.deleteScheduleTaskWithOptions(request, headers, runtime);
  }

  /**
   * 删除订阅
   * 
   * @param request - DeleteSubRequest
   * @param headers - DeleteSubHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSubResponse
   */
  async deleteSubWithOptions(request: $_model.DeleteSubRequest, headers: $_model.DeleteSubHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSubResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.subId)) {
      query["SubId"] = request.subId;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSub",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/deleteSub`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSubResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSubResponse({}));
  }

  /**
   * 删除订阅
   * 
   * @param request - DeleteSubRequest
   * @returns DeleteSubResponse
   */
  async deleteSub(request: $_model.DeleteSubRequest): Promise<$_model.DeleteSubResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteSubHeaders({ });
    return await this.deleteSubWithOptions(request, headers, runtime);
  }

  /**
   * 设备控制
   * 
   * @param tmpReq - DeviceControlRequest
   * @param headers - DeviceControlHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeviceControlResponse
   */
  async deviceControlWithOptions(tmpReq: $_model.DeviceControlRequest, headers: $_model.DeviceControlHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeviceControlResponse> {
    tmpReq.validate();
    let request = new $_model.DeviceControlShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.controlRequest)) {
      request.controlRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.controlRequest, "ControlRequest", "json");
    }

    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.controlRequestShrink)) {
      body["ControlRequest"] = request.controlRequestShrink;
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
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeviceControl",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/control`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeviceControlResponse>(await this.callApi(params, req, runtime), new $_model.DeviceControlResponse({}));
  }

  /**
   * 设备控制
   * 
   * @param request - DeviceControlRequest
   * @returns DeviceControlResponse
   */
  async deviceControl(request: $_model.DeviceControlRequest): Promise<$_model.DeviceControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeviceControlHeaders({ });
    return await this.deviceControlWithOptions(request, headers, runtime);
  }

  /**
   * 生态开放鉴权
   * 
   * @param request - EcologyOpennessAuthenticateRequest
   * @param headers - EcologyOpennessAuthenticateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EcologyOpennessAuthenticateResponse
   */
  async ecologyOpennessAuthenticateWithOptions(request: $_model.EcologyOpennessAuthenticateRequest, headers: $_model.EcologyOpennessAuthenticateHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.EcologyOpennessAuthenticateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.encodeKey)) {
      body["EncodeKey"] = request.encodeKey;
    }

    if (!$dara.isNull(request.encodeType)) {
      body["EncodeType"] = request.encodeType;
    }

    if (!$dara.isNull(request.loginStateAccessToken)) {
      body["LoginStateAccessToken"] = request.loginStateAccessToken;
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
      action: "EcologyOpennessAuthenticate",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/ecologyOpennessAuthenticate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EcologyOpennessAuthenticateResponse>(await this.callApi(params, req, runtime), new $_model.EcologyOpennessAuthenticateResponse({}));
  }

  /**
   * 生态开放鉴权
   * 
   * @param request - EcologyOpennessAuthenticateRequest
   * @returns EcologyOpennessAuthenticateResponse
   */
  async ecologyOpennessAuthenticate(request: $_model.EcologyOpennessAuthenticateRequest): Promise<$_model.EcologyOpennessAuthenticateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.EcologyOpennessAuthenticateHeaders({ });
    return await this.ecologyOpennessAuthenticateWithOptions(request, headers, runtime);
  }

  /**
   * 生态开放发送短信验证码
   * 
   * @param request - EcologyOpennessSendVerificationCodeRequest
   * @param headers - EcologyOpennessSendVerificationCodeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EcologyOpennessSendVerificationCodeResponse
   */
  async ecologyOpennessSendVerificationCodeWithOptions(request: $_model.EcologyOpennessSendVerificationCodeRequest, headers: $_model.EcologyOpennessSendVerificationCodeHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.EcologyOpennessSendVerificationCodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
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
      action: "EcologyOpennessSendVerificationCode",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/ecologyOpennessSendVerificationCode`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EcologyOpennessSendVerificationCodeResponse>(await this.callApi(params, req, runtime), new $_model.EcologyOpennessSendVerificationCodeResponse({}));
  }

  /**
   * 生态开放发送短信验证码
   * 
   * @param request - EcologyOpennessSendVerificationCodeRequest
   * @returns EcologyOpennessSendVerificationCodeResponse
   */
  async ecologyOpennessSendVerificationCode(request: $_model.EcologyOpennessSendVerificationCodeRequest): Promise<$_model.EcologyOpennessSendVerificationCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.EcologyOpennessSendVerificationCodeHeaders({ });
    return await this.ecologyOpennessSendVerificationCodeWithOptions(request, headers, runtime);
  }

  /**
   * 通过手机号寻找可授权登录的账号列表
   * 
   * @param request - FindUserlistToAuthLoginWithPhoneNumberRequest
   * @param headers - FindUserlistToAuthLoginWithPhoneNumberHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FindUserlistToAuthLoginWithPhoneNumberResponse
   */
  async findUserlistToAuthLoginWithPhoneNumberWithOptions(request: $_model.FindUserlistToAuthLoginWithPhoneNumberRequest, headers: $_model.FindUserlistToAuthLoginWithPhoneNumberHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.FindUserlistToAuthLoginWithPhoneNumberResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      query["Code"] = request.code;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FindUserlistToAuthLoginWithPhoneNumber",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/findUserlistToAuthLoginWithPhoneNumber`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FindUserlistToAuthLoginWithPhoneNumberResponse>(await this.callApi(params, req, runtime), new $_model.FindUserlistToAuthLoginWithPhoneNumberResponse({}));
  }

  /**
   * 通过手机号寻找可授权登录的账号列表
   * 
   * @param request - FindUserlistToAuthLoginWithPhoneNumberRequest
   * @returns FindUserlistToAuthLoginWithPhoneNumberResponse
   */
  async findUserlistToAuthLoginWithPhoneNumber(request: $_model.FindUserlistToAuthLoginWithPhoneNumberRequest): Promise<$_model.FindUserlistToAuthLoginWithPhoneNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FindUserlistToAuthLoginWithPhoneNumberHeaders({ });
    return await this.findUserlistToAuthLoginWithPhoneNumberWithOptions(request, headers, runtime);
  }

  /**
   * 获取单个闹钟
   * 
   * @param tmpReq - GetAlarmRequest
   * @param headers - GetAlarmHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAlarmResponse
   */
  async getAlarmWithOptions(tmpReq: $_model.GetAlarmRequest, headers: $_model.GetAlarmHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetAlarmResponse> {
    tmpReq.validate();
    let request = new $_model.GetAlarmShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.payloadShrink)) {
      body["Payload"] = request.payloadShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
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
      action: "GetAlarm",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/getAlarm`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAlarmResponse>(await this.callApi(params, req, runtime), new $_model.GetAlarmResponse({}));
  }

  /**
   * 获取单个闹钟
   * 
   * @param request - GetAlarmRequest
   * @returns GetAlarmResponse
   */
  async getAlarm(request: $_model.GetAlarmRequest): Promise<$_model.GetAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetAlarmHeaders({ });
    return await this.getAlarmWithOptions(request, headers, runtime);
  }

  /**
   * 根据id获取专辑信息
   * 
   * @param request - GetAlbumRequest
   * @param headers - GetAlbumHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAlbumResponse
   */
  async getAlbumWithOptions(request: $_model.GetAlbumRequest, headers: $_model.GetAlbumHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetAlbumResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAlbum",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/GetAlbum`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAlbumResponse>(await this.callApi(params, req, runtime), new $_model.GetAlbumResponse({}));
  }

  /**
   * 根据id获取专辑信息
   * 
   * @param request - GetAlbumRequest
   * @returns GetAlbumResponse
   */
  async getAlbum(request: $_model.GetAlbumRequest): Promise<$_model.GetAlbumResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetAlbumHeaders({ });
    return await this.getAlbumWithOptions(request, headers, runtime);
  }

  /**
   * 获取专辑数据
   * 
   * @param request - GetAlbumDetailByIdRequest
   * @param headers - GetAlbumDetailByIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAlbumDetailByIdResponse
   */
  async getAlbumDetailByIdWithOptions(request: $_model.GetAlbumDetailByIdRequest, headers: $_model.GetAlbumDetailByIdHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetAlbumDetailByIdResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.albumId)) {
      query["AlbumId"] = request.albumId;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAlbumDetailById",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/getAlbumDetailById`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAlbumDetailByIdResponse>(await this.callApi(params, req, runtime), new $_model.GetAlbumDetailByIdResponse({}));
  }

  /**
   * 获取专辑数据
   * 
   * @param request - GetAlbumDetailByIdRequest
   * @returns GetAlbumDetailByIdResponse
   */
  async getAlbumDetailById(request: $_model.GetAlbumDetailByIdRequest): Promise<$_model.GetAlbumDetailByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetAlbumDetailByIdHeaders({ });
    return await this.getAlbumDetailByIdWithOptions(request, headers, runtime);
  }

  /**
   * 获取三方绑定的精灵账号信息
   * 
   * @param request - GetAligenieUserInfoRequest
   * @param headers - GetAligenieUserInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAligenieUserInfoResponse
   */
  async getAligenieUserInfoWithOptions(request: $_model.GetAligenieUserInfoRequest, headers: $_model.GetAligenieUserInfoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetAligenieUserInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.loginStateAccessToken)) {
      query["LoginStateAccessToken"] = request.loginStateAccessToken;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAligenieUserInfo",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/getAligenieUserInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAligenieUserInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetAligenieUserInfoResponse({}));
  }

  /**
   * 获取三方绑定的精灵账号信息
   * 
   * @param request - GetAligenieUserInfoRequest
   * @returns GetAligenieUserInfoResponse
   */
  async getAligenieUserInfo(request: $_model.GetAligenieUserInfoRequest): Promise<$_model.GetAligenieUserInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetAligenieUserInfoHeaders({ });
    return await this.getAligenieUserInfoWithOptions(request, headers, runtime);
  }

  /**
   * 获取authCode
   * 
   * @param tmpReq - GetCodeEnhanceRequest
   * @param headers - GetCodeEnhanceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCodeEnhanceResponse
   */
  async getCodeEnhanceWithOptions(tmpReq: $_model.GetCodeEnhanceRequest, headers: $_model.GetCodeEnhanceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetCodeEnhanceResponse> {
    tmpReq.validate();
    let request = new $_model.GetCodeEnhanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.channelInfo)) {
      request.channelInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.channelInfo, "ChannelInfo", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channelInfoShrink)) {
      query["ChannelInfo"] = request.channelInfoShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCodeEnhance",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/getCodeEnhance`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCodeEnhanceResponse>(await this.callApi(params, req, runtime), new $_model.GetCodeEnhanceResponse({}));
  }

  /**
   * 获取authCode
   * 
   * @param request - GetCodeEnhanceRequest
   * @returns GetCodeEnhanceResponse
   */
  async getCodeEnhance(request: $_model.GetCodeEnhanceRequest): Promise<$_model.GetCodeEnhanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetCodeEnhanceHeaders({ });
    return await this.getCodeEnhanceWithOptions(request, headers, runtime);
  }

  /**
   * 按照特定的id获取内容信息
   * 
   * @param request - GetContentRequest
   * @param headers - GetContentHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContentResponse
   */
  async getContentWithOptions(request: $_model.GetContentRequest, headers: $_model.GetContentHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetContentResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetContent",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/GetContent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetContentResponse>(await this.callApi(params, req, runtime), new $_model.GetContentResponse({}));
  }

  /**
   * 按照特定的id获取内容信息
   * 
   * @param request - GetContentRequest
   * @returns GetContentResponse
   */
  async getContent(request: $_model.GetContentRequest): Promise<$_model.GetContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetContentHeaders({ });
    return await this.getContentWithOptions(request, headers, runtime);
  }

  /**
   * 获取当前播放项
   * 
   * @param tmpReq - GetCurrentPlayingItemRequest
   * @param headers - GetCurrentPlayingItemHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCurrentPlayingItemResponse
   */
  async getCurrentPlayingItemWithOptions(tmpReq: $_model.GetCurrentPlayingItemRequest, headers: $_model.GetCurrentPlayingItemHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetCurrentPlayingItemResponse> {
    tmpReq.validate();
    let request = new $_model.GetCurrentPlayingItemShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCurrentPlayingItem",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/GetCurrentPlayingItem`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCurrentPlayingItemResponse>(await this.callApi(params, req, runtime), new $_model.GetCurrentPlayingItemResponse({}));
  }

  /**
   * 获取当前播放项
   * 
   * @param request - GetCurrentPlayingItemRequest
   * @returns GetCurrentPlayingItemResponse
   */
  async getCurrentPlayingItem(request: $_model.GetCurrentPlayingItemRequest): Promise<$_model.GetCurrentPlayingItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetCurrentPlayingItemHeaders({ });
    return await this.getCurrentPlayingItemWithOptions(request, headers, runtime);
  }

  /**
   * 获取当前播放列表
   * 
   * @param tmpReq - GetCurrentPlayingListRequest
   * @param headers - GetCurrentPlayingListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCurrentPlayingListResponse
   */
  async getCurrentPlayingListWithOptions(tmpReq: $_model.GetCurrentPlayingListRequest, headers: $_model.GetCurrentPlayingListHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetCurrentPlayingListResponse> {
    tmpReq.validate();
    let request = new $_model.GetCurrentPlayingListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.openQueryPlayListRequest)) {
      request.openQueryPlayListRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.openQueryPlayListRequest, "OpenQueryPlayListRequest", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.openQueryPlayListRequestShrink)) {
      body["OpenQueryPlayListRequest"] = request.openQueryPlayListRequestShrink;
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
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCurrentPlayingList",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/GetCurrentPlayingList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCurrentPlayingListResponse>(await this.callApi(params, req, runtime), new $_model.GetCurrentPlayingListResponse({}));
  }

  /**
   * 获取当前播放列表
   * 
   * @param request - GetCurrentPlayingListRequest
   * @returns GetCurrentPlayingListResponse
   */
  async getCurrentPlayingList(request: $_model.GetCurrentPlayingListRequest): Promise<$_model.GetCurrentPlayingListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetCurrentPlayingListHeaders({ });
    return await this.getCurrentPlayingListWithOptions(request, headers, runtime);
  }

  /**
   * 获取设备认证信息
   * 
   * @param tmpReq - GetDeviceBasicInfoRequest
   * @param headers - GetDeviceBasicInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceBasicInfoResponse
   */
  async getDeviceBasicInfoWithOptions(tmpReq: $_model.GetDeviceBasicInfoRequest, headers: $_model.GetDeviceBasicInfoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeviceBasicInfoResponse> {
    tmpReq.validate();
    let request = new $_model.GetDeviceBasicInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeviceBasicInfo",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/getDeviceBasicInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeviceBasicInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetDeviceBasicInfoResponse({}));
  }

  /**
   * 获取设备认证信息
   * 
   * @param request - GetDeviceBasicInfoRequest
   * @returns GetDeviceBasicInfoResponse
   */
  async getDeviceBasicInfo(request: $_model.GetDeviceBasicInfoRequest): Promise<$_model.GetDeviceBasicInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetDeviceBasicInfoHeaders({ });
    return await this.getDeviceBasicInfoWithOptions(request, headers, runtime);
  }

  /**
   * 获取设备信息
   * 
   * @param request - GetDeviceIdByIdentityRequest
   * @param headers - GetDeviceIdByIdentityHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceIdByIdentityResponse
   */
  async getDeviceIdByIdentityWithOptions(request: $_model.GetDeviceIdByIdentityRequest, headers: $_model.GetDeviceIdByIdentityHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeviceIdByIdentityResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.encodeKey)) {
      query["EncodeKey"] = request.encodeKey;
    }

    if (!$dara.isNull(request.encodeType)) {
      query["EncodeType"] = request.encodeType;
    }

    if (!$dara.isNull(request.identityId)) {
      query["IdentityId"] = request.identityId;
    }

    if (!$dara.isNull(request.identityType)) {
      query["IdentityType"] = request.identityType;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeviceIdByIdentity",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/getDeviceIdByIdentity`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeviceIdByIdentityResponse>(await this.callApi(params, req, runtime), new $_model.GetDeviceIdByIdentityResponse({}));
  }

  /**
   * 获取设备信息
   * 
   * @param request - GetDeviceIdByIdentityRequest
   * @returns GetDeviceIdByIdentityResponse
   */
  async getDeviceIdByIdentity(request: $_model.GetDeviceIdByIdentityRequest): Promise<$_model.GetDeviceIdByIdentityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetDeviceIdByIdentityHeaders({ });
    return await this.getDeviceIdByIdentityWithOptions(request, headers, runtime);
  }

  /**
   * 获取设备的用户设置
   * 
   * @param tmpReq - GetDeviceSettingRequest
   * @param headers - GetDeviceSettingHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceSettingResponse
   */
  async getDeviceSettingWithOptions(tmpReq: $_model.GetDeviceSettingRequest, headers: $_model.GetDeviceSettingHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeviceSettingResponse> {
    tmpReq.validate();
    let request = new $_model.GetDeviceSettingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.keys)) {
      request.keysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keys, "Keys", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.keysShrink)) {
      query["Keys"] = request.keysShrink;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeviceSetting",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/getDeviceSetting`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeviceSettingResponse>(await this.callApi(params, req, runtime), new $_model.GetDeviceSettingResponse({}));
  }

  /**
   * 获取设备的用户设置
   * 
   * @param request - GetDeviceSettingRequest
   * @returns GetDeviceSettingResponse
   */
  async getDeviceSetting(request: $_model.GetDeviceSettingRequest): Promise<$_model.GetDeviceSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetDeviceSettingHeaders({ });
    return await this.getDeviceSettingWithOptions(request, headers, runtime);
  }

  /**
   * 获取设备状态详情
   * 
   * @param tmpReq - GetDeviceStatusDetailRequest
   * @param headers - GetDeviceStatusDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceStatusDetailResponse
   */
  async getDeviceStatusDetailWithOptions(tmpReq: $_model.GetDeviceStatusDetailRequest, headers: $_model.GetDeviceStatusDetailHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeviceStatusDetailResponse> {
    tmpReq.validate();
    let request = new $_model.GetDeviceStatusDetailShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.keys)) {
      request.keysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keys, "Keys", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.keysShrink)) {
      query["Keys"] = request.keysShrink;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeviceStatusDetail",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/getDeviceStatusDetail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeviceStatusDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetDeviceStatusDetailResponse({}));
  }

  /**
   * 获取设备状态详情
   * 
   * @param request - GetDeviceStatusDetailRequest
   * @returns GetDeviceStatusDetailResponse
   */
  async getDeviceStatusDetail(request: $_model.GetDeviceStatusDetailRequest): Promise<$_model.GetDeviceStatusDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetDeviceStatusDetailHeaders({ });
    return await this.getDeviceStatusDetailWithOptions(request, headers, runtime);
  }

  /**
   * 获取设备状态信息
   * 
   * @param tmpReq - GetDeviceStatusInfoRequest
   * @param headers - GetDeviceStatusInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceStatusInfoResponse
   */
  async getDeviceStatusInfoWithOptions(tmpReq: $_model.GetDeviceStatusInfoRequest, headers: $_model.GetDeviceStatusInfoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeviceStatusInfoResponse> {
    tmpReq.validate();
    let request = new $_model.GetDeviceStatusInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeviceStatusInfo",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/getDeviceStatusInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeviceStatusInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetDeviceStatusInfoResponse({}));
  }

  /**
   * 获取设备状态信息
   * 
   * @param request - GetDeviceStatusInfoRequest
   * @returns GetDeviceStatusInfoResponse
   */
  async getDeviceStatusInfo(request: $_model.GetDeviceStatusInfoRequest): Promise<$_model.GetDeviceStatusInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetDeviceStatusInfoHeaders({ });
    return await this.getDeviceStatusInfoWithOptions(request, headers, runtime);
  }

  /**
   * 获取设备标签
   * 
   * @param tmpReq - GetDeviceTagRequest
   * @param headers - GetDeviceTagHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceTagResponse
   */
  async getDeviceTagWithOptions(tmpReq: $_model.GetDeviceTagRequest, headers: $_model.GetDeviceTagHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeviceTagResponse> {
    tmpReq.validate();
    let request = new $_model.GetDeviceTagShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeviceTag",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/getDeviceTag`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeviceTagResponse>(await this.callApi(params, req, runtime), new $_model.GetDeviceTagResponse({}));
  }

  /**
   * 获取设备标签
   * 
   * @param request - GetDeviceTagRequest
   * @returns GetDeviceTagResponse
   */
  async getDeviceTag(request: $_model.GetDeviceTagRequest): Promise<$_model.GetDeviceTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetDeviceTagHeaders({ });
    return await this.getDeviceTagWithOptions(request, headers, runtime);
  }

  /**
   * 江苏电信号百
   * 
   * @param request - GetJiangSuTelecomDataRequest
   * @param headers - GetJiangSuTelecomDataHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJiangSuTelecomDataResponse
   */
  async getJiangSuTelecomDataWithOptions(request: $_model.GetJiangSuTelecomDataRequest, headers: $_model.GetJiangSuTelecomDataHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetJiangSuTelecomDataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.date)) {
      query["Date"] = request.date;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJiangSuTelecomData",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/GetJiangSuTelecomData`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJiangSuTelecomDataResponse>(await this.callApi(params, req, runtime), new $_model.GetJiangSuTelecomDataResponse({}));
  }

  /**
   * 江苏电信号百
   * 
   * @param request - GetJiangSuTelecomDataRequest
   * @returns GetJiangSuTelecomDataResponse
   */
  async getJiangSuTelecomData(request: $_model.GetJiangSuTelecomDataRequest): Promise<$_model.GetJiangSuTelecomDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetJiangSuTelecomDataHeaders({ });
    return await this.getJiangSuTelecomDataWithOptions(request, headers, runtime);
  }

  /**
   * 查询定时任务
   * 
   * @param tmpReq - GetScheduleTaskRequest
   * @param headers - GetScheduleTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScheduleTaskResponse
   */
  async getScheduleTaskWithOptions(tmpReq: $_model.GetScheduleTaskRequest, headers: $_model.GetScheduleTaskHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetScheduleTaskResponse> {
    tmpReq.validate();
    let request = new $_model.GetScheduleTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.payloadShrink)) {
      body["Payload"] = request.payloadShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
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
      action: "GetScheduleTask",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/GetScheduleTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetScheduleTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetScheduleTaskResponse({}));
  }

  /**
   * 查询定时任务
   * 
   * @param request - GetScheduleTaskRequest
   * @returns GetScheduleTaskResponse
   */
  async getScheduleTask(request: $_model.GetScheduleTaskRequest): Promise<$_model.GetScheduleTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetScheduleTaskHeaders({ });
    return await this.getScheduleTaskWithOptions(request, headers, runtime);
  }

  /**
   * 查询未读留言数量
   * 
   * @param tmpReq - GetUnreadMessageCountRequest
   * @param headers - GetUnreadMessageCountHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUnreadMessageCountResponse
   */
  async getUnreadMessageCountWithOptions(tmpReq: $_model.GetUnreadMessageCountRequest, headers: $_model.GetUnreadMessageCountHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetUnreadMessageCountResponse> {
    tmpReq.validate();
    let request = new $_model.GetUnreadMessageCountShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUnreadMessageCount",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/getUnreadMessageCount`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUnreadMessageCountResponse>(await this.callApi(params, req, runtime), new $_model.GetUnreadMessageCountResponse({}));
  }

  /**
   * 查询未读留言数量
   * 
   * @param request - GetUnreadMessageCountRequest
   * @returns GetUnreadMessageCountResponse
   */
  async getUnreadMessageCount(request: $_model.GetUnreadMessageCountRequest): Promise<$_model.GetUnreadMessageCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetUnreadMessageCountHeaders({ });
    return await this.getUnreadMessageCountWithOptions(request, headers, runtime);
  }

  /**
   * 查询设备绑定的用户
   * 
   * @param tmpReq - GetUserByDeviceIdRequest
   * @param headers - GetUserByDeviceIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserByDeviceIdResponse
   */
  async getUserByDeviceIdWithOptions(tmpReq: $_model.GetUserByDeviceIdRequest, headers: $_model.GetUserByDeviceIdHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserByDeviceIdResponse> {
    tmpReq.validate();
    let request = new $_model.GetUserByDeviceIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserByDeviceId",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/getUserByDeviceId`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserByDeviceIdResponse>(await this.callApi(params, req, runtime), new $_model.GetUserByDeviceIdResponse({}));
  }

  /**
   * 查询设备绑定的用户
   * 
   * @param request - GetUserByDeviceIdRequest
   * @returns GetUserByDeviceIdResponse
   */
  async getUserByDeviceId(request: $_model.GetUserByDeviceIdRequest): Promise<$_model.GetUserByDeviceIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetUserByDeviceIdHeaders({ });
    return await this.getUserByDeviceIdWithOptions(request, headers, runtime);
  }

  /**
   * 查询天气
   * 
   * @param tmpReq - GetWeatherRequest
   * @param headers - GetWeatherHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWeatherResponse
   */
  async getWeatherWithOptions(tmpReq: $_model.GetWeatherRequest, headers: $_model.GetWeatherHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetWeatherResponse> {
    tmpReq.validate();
    let request = new $_model.GetWeatherShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.payloadShrink)) {
      body["Payload"] = request.payloadShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
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
      action: "GetWeather",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/GetWeather`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWeatherResponse>(await this.callApi(params, req, runtime), new $_model.GetWeatherResponse({}));
  }

  /**
   * 查询天气
   * 
   * @param request - GetWeatherRequest
   * @returns GetWeatherResponse
   */
  async getWeather(request: $_model.GetWeatherRequest): Promise<$_model.GetWeatherResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetWeatherHeaders({ });
    return await this.getWeatherWithOptions(request, headers, runtime);
  }

  /**
   * 播放列表点击播放
   * 
   * @param tmpReq - IndexControlPlayingListRequest
   * @param headers - IndexControlPlayingListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IndexControlPlayingListResponse
   */
  async indexControlPlayingListWithOptions(tmpReq: $_model.IndexControlPlayingListRequest, headers: $_model.IndexControlPlayingListHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.IndexControlPlayingListResponse> {
    tmpReq.validate();
    let request = new $_model.IndexControlPlayingListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.openIndexControlRequest)) {
      request.openIndexControlRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.openIndexControlRequest, "OpenIndexControlRequest", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.openIndexControlRequestShrink)) {
      body["OpenIndexControlRequest"] = request.openIndexControlRequestShrink;
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
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "IndexControlPlayingList",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/IndexControlPlayingList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.IndexControlPlayingListResponse>(await this.callApi(params, req, runtime), new $_model.IndexControlPlayingListResponse({}));
  }

  /**
   * 播放列表点击播放
   * 
   * @param request - IndexControlPlayingListRequest
   * @returns IndexControlPlayingListResponse
   */
  async indexControlPlayingList(request: $_model.IndexControlPlayingListRequest): Promise<$_model.IndexControlPlayingListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.IndexControlPlayingListHeaders({ });
    return await this.indexControlPlayingListWithOptions(request, headers, runtime);
  }

  /**
   * 失效三方应用登录态
   * 
   * @param tmpReq - InvalidateThirdPartyAppLoginStateRequest
   * @param headers - InvalidateThirdPartyAppLoginStateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvalidateThirdPartyAppLoginStateResponse
   */
  async invalidateThirdPartyAppLoginStateWithOptions(tmpReq: $_model.InvalidateThirdPartyAppLoginStateRequest, headers: $_model.InvalidateThirdPartyAppLoginStateHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InvalidateThirdPartyAppLoginStateResponse> {
    tmpReq.validate();
    let request = new $_model.InvalidateThirdPartyAppLoginStateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.thirdPartyAppId)) {
      body["ThirdPartyAppId"] = request.thirdPartyAppId;
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
      action: "InvalidateThirdPartyAppLoginState",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/invalidateThirdPartyAppLoginState`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InvalidateThirdPartyAppLoginStateResponse>(await this.callApi(params, req, runtime), new $_model.InvalidateThirdPartyAppLoginStateResponse({}));
  }

  /**
   * 失效三方应用登录态
   * 
   * @param request - InvalidateThirdPartyAppLoginStateRequest
   * @returns InvalidateThirdPartyAppLoginStateResponse
   */
  async invalidateThirdPartyAppLoginState(request: $_model.InvalidateThirdPartyAppLoginStateRequest): Promise<$_model.InvalidateThirdPartyAppLoginStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InvalidateThirdPartyAppLoginStateHeaders({ });
    return await this.invalidateThirdPartyAppLoginStateWithOptions(request, headers, runtime);
  }

  /**
   * 查询闹钟列表
   * 
   * @param tmpReq - ListAlarmsRequest
   * @param headers - ListAlarmsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlarmsResponse
   */
  async listAlarmsWithOptions(tmpReq: $_model.ListAlarmsRequest, headers: $_model.ListAlarmsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListAlarmsResponse> {
    tmpReq.validate();
    let request = new $_model.ListAlarmsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.payloadShrink)) {
      body["Payload"] = request.payloadShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
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
      action: "ListAlarms",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/listAlarm`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAlarmsResponse>(await this.callApi(params, req, runtime), new $_model.ListAlarmsResponse({}));
  }

  /**
   * 查询闹钟列表
   * 
   * @param request - ListAlarmsRequest
   * @returns ListAlarmsResponse
   */
  async listAlarms(request: $_model.ListAlarmsRequest): Promise<$_model.ListAlarmsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListAlarmsHeaders({ });
    return await this.listAlarmsWithOptions(request, headers, runtime);
  }

  /**
   * 获取音乐音频专辑里面的内容列表
   * 
   * @param request - ListAlbumDetailRequest
   * @param headers - ListAlbumDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlbumDetailResponse
   */
  async listAlbumDetailWithOptions(request: $_model.ListAlbumDetailRequest, headers: $_model.ListAlbumDetailHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListAlbumDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAlbumDetail",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/ListAlbumDetail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAlbumDetailResponse>(await this.callApi(params, req, runtime), new $_model.ListAlbumDetailResponse({}));
  }

  /**
   * 获取音乐音频专辑里面的内容列表
   * 
   * @param request - ListAlbumDetailRequest
   * @returns ListAlbumDetailResponse
   */
  async listAlbumDetail(request: $_model.ListAlbumDetailRequest): Promise<$_model.ListAlbumDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListAlbumDetailHeaders({ });
    return await this.listAlbumDetailWithOptions(request, headers, runtime);
  }

  /**
   * 专辑是否被订阅
   * 
   * @param tmpReq - ListAlbumIsAddedRequest
   * @param headers - ListAlbumIsAddedHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlbumIsAddedResponse
   */
  async listAlbumIsAddedWithOptions(tmpReq: $_model.ListAlbumIsAddedRequest, headers: $_model.ListAlbumIsAddedHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListAlbumIsAddedResponse> {
    tmpReq.validate();
    let request = new $_model.ListAlbumIsAddedShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.albumIdList)) {
      request.albumIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.albumIdList, "AlbumIdList", "json");
    }

    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.albumIdListShrink)) {
      query["AlbumIdList"] = request.albumIdListShrink;
    }

    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAlbumIsAdded",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/listAlbumIsAdded`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAlbumIsAddedResponse>(await this.callApi(params, req, runtime), new $_model.ListAlbumIsAddedResponse({}));
  }

  /**
   * 专辑是否被订阅
   * 
   * @param request - ListAlbumIsAddedRequest
   * @returns ListAlbumIsAddedResponse
   */
  async listAlbumIsAdded(request: $_model.ListAlbumIsAddedRequest): Promise<$_model.ListAlbumIsAddedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListAlbumIsAddedHeaders({ });
    return await this.listAlbumIsAddedWithOptions(request, headers, runtime);
  }

  /**
   * 根据特定的类目,按照指定的排序顺序获取该类目下的内容.
   * 
   * @param tmpReq - ListCateContentRequest
   * @param headers - ListCateContentHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCateContentResponse
   */
  async listCateContentWithOptions(tmpReq: $_model.ListCateContentRequest, headers: $_model.ListCateContentHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListCateContentResponse> {
    tmpReq.validate();
    let request = new $_model.ListCateContentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.request)) {
      request.requestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.request, "Request", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.requestShrink)) {
      body["Request"] = request.requestShrink;
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
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCateContent",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/ListCateContent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCateContentResponse>(await this.callApi(params, req, runtime), new $_model.ListCateContentResponse({}));
  }

  /**
   * 根据特定的类目,按照指定的排序顺序获取该类目下的内容.
   * 
   * @param request - ListCateContentRequest
   * @returns ListCateContentResponse
   */
  async listCateContent(request: $_model.ListCateContentRequest): Promise<$_model.ListCateContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListCateContentHeaders({ });
    return await this.listCateContentWithOptions(request, headers, runtime);
  }

  /**
   * 获取音乐音频类目列表
   * 
   * @param request - ListCateInfoRequest
   * @param headers - ListCateInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCateInfoResponse
   */
  async listCateInfoWithOptions(request: $_model.ListCateInfoRequest, headers: $_model.ListCateInfoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListCateInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCateInfo",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/ListCateInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCateInfoResponse>(await this.callApi(params, req, runtime), new $_model.ListCateInfoResponse({}));
  }

  /**
   * 获取音乐音频类目列表
   * 
   * @param request - ListCateInfoRequest
   * @returns ListCateInfoResponse
   */
  async listCateInfo(request: $_model.ListCateInfoRequest): Promise<$_model.ListCateInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListCateInfoHeaders({ });
    return await this.listCateInfoWithOptions(request, headers, runtime);
  }

  /**
   * 获取音乐/音频的一级类目列表
   * 
   * @param request - ListCommonCateFirstFloorRequest
   * @param headers - ListCommonCateFirstFloorHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCommonCateFirstFloorResponse
   */
  async listCommonCateFirstFloorWithOptions(request: $_model.ListCommonCateFirstFloorRequest, headers: $_model.ListCommonCateFirstFloorHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListCommonCateFirstFloorResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCommonCateFirstFloor",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/ListCommonCateFirstFloor`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCommonCateFirstFloorResponse>(await this.callApi(params, req, runtime), new $_model.ListCommonCateFirstFloorResponse({}));
  }

  /**
   * 获取音乐/音频的一级类目列表
   * 
   * @param request - ListCommonCateFirstFloorRequest
   * @returns ListCommonCateFirstFloorResponse
   */
  async listCommonCateFirstFloor(request: $_model.ListCommonCateFirstFloorRequest): Promise<$_model.ListCommonCateFirstFloorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListCommonCateFirstFloorHeaders({ });
    return await this.listCommonCateFirstFloorWithOptions(request, headers, runtime);
  }

  /**
   * 获取指定一级类目下面的二级类目列表
   * 
   * @param request - ListCommonCateSecondFloorRequest
   * @param headers - ListCommonCateSecondFloorHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCommonCateSecondFloorResponse
   */
  async listCommonCateSecondFloorWithOptions(request: $_model.ListCommonCateSecondFloorRequest, headers: $_model.ListCommonCateSecondFloorHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListCommonCateSecondFloorResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.parentCateId)) {
      query["ParentCateId"] = request.parentCateId;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCommonCateSecondFloor",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/ListCommonCateSecondFloor`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCommonCateSecondFloorResponse>(await this.callApi(params, req, runtime), new $_model.ListCommonCateSecondFloorResponse({}));
  }

  /**
   * 获取指定一级类目下面的二级类目列表
   * 
   * @param request - ListCommonCateSecondFloorRequest
   * @returns ListCommonCateSecondFloorResponse
   */
  async listCommonCateSecondFloor(request: $_model.ListCommonCateSecondFloorRequest): Promise<$_model.ListCommonCateSecondFloorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListCommonCateSecondFloorHeaders({ });
    return await this.listCommonCateSecondFloorWithOptions(request, headers, runtime);
  }

  /**
   * 批量获取设备基本信息
   * 
   * @param tmpReq - ListDeviceBasicInfoRequest
   * @param headers - ListDeviceBasicInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeviceBasicInfoResponse
   */
  async listDeviceBasicInfoWithOptions(tmpReq: $_model.ListDeviceBasicInfoRequest, headers: $_model.ListDeviceBasicInfoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeviceBasicInfoResponse> {
    tmpReq.validate();
    let request = new $_model.ListDeviceBasicInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfos)) {
      request.deviceInfosShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfos, "DeviceInfos", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfosShrink)) {
      query["DeviceInfos"] = request.deviceInfosShrink;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeviceBasicInfo",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/listDeviceBasicInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeviceBasicInfoResponse>(await this.callApi(params, req, runtime), new $_model.ListDeviceBasicInfoResponse({}));
  }

  /**
   * 批量获取设备基本信息
   * 
   * @param request - ListDeviceBasicInfoRequest
   * @returns ListDeviceBasicInfoResponse
   */
  async listDeviceBasicInfo(request: $_model.ListDeviceBasicInfoRequest): Promise<$_model.ListDeviceBasicInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListDeviceBasicInfoHeaders({ });
    return await this.listDeviceBasicInfoWithOptions(request, headers, runtime);
  }

  /**
   * 查询用户名下的设备
   * 
   * @param tmpReq - ListDeviceByUserIdRequest
   * @param headers - ListDeviceByUserIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeviceByUserIdResponse
   */
  async listDeviceByUserIdWithOptions(tmpReq: $_model.ListDeviceByUserIdRequest, headers: $_model.ListDeviceByUserIdHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeviceByUserIdResponse> {
    tmpReq.validate();
    let request = new $_model.ListDeviceByUserIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeviceByUserId",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/listDeviceByUserId`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeviceByUserIdResponse>(await this.callApi(params, req, runtime), new $_model.ListDeviceByUserIdResponse({}));
  }

  /**
   * 查询用户名下的设备
   * 
   * @param request - ListDeviceByUserIdRequest
   * @returns ListDeviceByUserIdResponse
   */
  async listDeviceByUserId(request: $_model.ListDeviceByUserIdRequest): Promise<$_model.ListDeviceByUserIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListDeviceByUserIdHeaders({ });
    return await this.listDeviceByUserIdWithOptions(request, headers, runtime);
  }

  /**
   * 获取指定渠道的设备列表
   * 
   * @param tmpReq - ListDeviceByUserIdAndChanelRequest
   * @param headers - ListDeviceByUserIdAndChanelHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeviceByUserIdAndChanelResponse
   */
  async listDeviceByUserIdAndChanelWithOptions(tmpReq: $_model.ListDeviceByUserIdAndChanelRequest, headers: $_model.ListDeviceByUserIdAndChanelHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeviceByUserIdAndChanelResponse> {
    tmpReq.validate();
    let request = new $_model.ListDeviceByUserIdAndChanelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.channelInfo)) {
      request.channelInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.channelInfo, "ChannelInfo", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channelInfoShrink)) {
      query["ChannelInfo"] = request.channelInfoShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeviceByUserIdAndChanel",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/listDeviceByUserIdAndChanel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeviceByUserIdAndChanelResponse>(await this.callApi(params, req, runtime), new $_model.ListDeviceByUserIdAndChanelResponse({}));
  }

  /**
   * 获取指定渠道的设备列表
   * 
   * @param request - ListDeviceByUserIdAndChanelRequest
   * @returns ListDeviceByUserIdAndChanelResponse
   */
  async listDeviceByUserIdAndChanel(request: $_model.ListDeviceByUserIdAndChanelRequest): Promise<$_model.ListDeviceByUserIdAndChanelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListDeviceByUserIdAndChanelHeaders({ });
    return await this.listDeviceByUserIdAndChanelWithOptions(request, headers, runtime);
  }

  /**
   * 批量获取设备openId
   * 
   * @param tmpReq - ListDeviceIdByIdentitiesRequest
   * @param headers - ListDeviceIdByIdentitiesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeviceIdByIdentitiesResponse
   */
  async listDeviceIdByIdentitiesWithOptions(tmpReq: $_model.ListDeviceIdByIdentitiesRequest, headers: $_model.ListDeviceIdByIdentitiesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeviceIdByIdentitiesResponse> {
    tmpReq.validate();
    let request = new $_model.ListDeviceIdByIdentitiesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.identityIds)) {
      request.identityIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.identityIds, "IdentityIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.encodeKey)) {
      query["EncodeKey"] = request.encodeKey;
    }

    if (!$dara.isNull(request.encodeType)) {
      query["EncodeType"] = request.encodeType;
    }

    if (!$dara.isNull(request.identityIdsShrink)) {
      query["IdentityIds"] = request.identityIdsShrink;
    }

    if (!$dara.isNull(request.identityType)) {
      query["IdentityType"] = request.identityType;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeviceIdByIdentities",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/listDeviceIdByIdentities`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeviceIdByIdentitiesResponse>(await this.callApi(params, req, runtime), new $_model.ListDeviceIdByIdentitiesResponse({}));
  }

  /**
   * 批量获取设备openId
   * 
   * @param request - ListDeviceIdByIdentitiesRequest
   * @returns ListDeviceIdByIdentitiesResponse
   */
  async listDeviceIdByIdentities(request: $_model.ListDeviceIdByIdentitiesRequest): Promise<$_model.ListDeviceIdByIdentitiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListDeviceIdByIdentitiesHeaders({ });
    return await this.listDeviceIdByIdentitiesWithOptions(request, headers, runtime);
  }

  /**
   * 基于音乐类型查询铃声列表（分页）
   * 
   * @param tmpReq - ListMusicRequest
   * @param headers - ListMusicHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMusicResponse
   */
  async listMusicWithOptions(tmpReq: $_model.ListMusicRequest, headers: $_model.ListMusicHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListMusicResponse> {
    tmpReq.validate();
    let request = new $_model.ListMusicShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.payloadShrink)) {
      body["Payload"] = request.payloadShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
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
      action: "ListMusic",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/listMusic`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMusicResponse>(await this.callApi(params, req, runtime), new $_model.ListMusicResponse({}));
  }

  /**
   * 基于音乐类型查询铃声列表（分页）
   * 
   * @param request - ListMusicRequest
   * @returns ListMusicResponse
   */
  async listMusic(request: $_model.ListMusicRequest): Promise<$_model.ListMusicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListMusicHeaders({ });
    return await this.listMusicWithOptions(request, headers, runtime);
  }

  /**
   * 获取用户的播放历史
   * 
   * @param tmpReq - ListPlayHistoryRequest
   * @param headers - ListPlayHistoryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPlayHistoryResponse
   */
  async listPlayHistoryWithOptions(tmpReq: $_model.ListPlayHistoryRequest, headers: $_model.ListPlayHistoryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListPlayHistoryResponse> {
    tmpReq.validate();
    let request = new $_model.ListPlayHistoryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.request)) {
      request.requestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.request, "Request", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.requestShrink)) {
      body["Request"] = request.requestShrink;
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
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPlayHistory",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/ListPlayHistory`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPlayHistoryResponse>(await this.callApi(params, req, runtime), new $_model.ListPlayHistoryResponse({}));
  }

  /**
   * 获取用户的播放历史
   * 
   * @param request - ListPlayHistoryRequest
   * @returns ListPlayHistoryResponse
   */
  async listPlayHistory(request: $_model.ListPlayHistoryRequest): Promise<$_model.ListPlayHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListPlayHistoryHeaders({ });
    return await this.listPlayHistoryWithOptions(request, headers, runtime);
  }

  /**
   * 获取每日推荐的音乐或者音频
   * 
   * @param tmpReq - ListRecommendContentRequest
   * @param headers - ListRecommendContentHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecommendContentResponse
   */
  async listRecommendContentWithOptions(tmpReq: $_model.ListRecommendContentRequest, headers: $_model.ListRecommendContentHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListRecommendContentResponse> {
    tmpReq.validate();
    let request = new $_model.ListRecommendContentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.request)) {
      request.requestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.request, "Request", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.requestShrink)) {
      body["Request"] = request.requestShrink;
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
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRecommendContent",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/ListRecommendContent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRecommendContentResponse>(await this.callApi(params, req, runtime), new $_model.ListRecommendContentResponse({}));
  }

  /**
   * 获取每日推荐的音乐或者音频
   * 
   * @param request - ListRecommendContentRequest
   * @returns ListRecommendContentResponse
   */
  async listRecommendContent(request: $_model.ListRecommendContentRequest): Promise<$_model.ListRecommendContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListRecommendContentHeaders({ });
    return await this.listRecommendContentWithOptions(request, headers, runtime);
  }

  /**
   * 订阅列表
   * 
   * @param tmpReq - ListSubRequest
   * @param headers - ListSubHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSubResponse
   */
  async listSubWithOptions(tmpReq: $_model.ListSubRequest, headers: $_model.ListSubHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListSubResponse> {
    tmpReq.validate();
    let request = new $_model.ListSubShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.page)) {
      request.pageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.page, "Page", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.pageShrink)) {
      query["Page"] = request.pageShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSub",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/listSub`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSubResponse>(await this.callApi(params, req, runtime), new $_model.ListSubResponse({}));
  }

  /**
   * 订阅列表
   * 
   * @param request - ListSubRequest
   * @returns ListSubResponse
   */
  async listSub(request: $_model.ListSubRequest): Promise<$_model.ListSubResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListSubHeaders({ });
    return await this.listSubWithOptions(request, headers, runtime);
  }

  /**
   * 订阅专辑元数据列表
   * 
   * @param tmpReq - ListSubAlbumRequest
   * @param headers - ListSubAlbumHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSubAlbumResponse
   */
  async listSubAlbumWithOptions(tmpReq: $_model.ListSubAlbumRequest, headers: $_model.ListSubAlbumHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListSubAlbumResponse> {
    tmpReq.validate();
    let request = new $_model.ListSubAlbumShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.querySubscriptionAlbumRequest)) {
      request.querySubscriptionAlbumRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.querySubscriptionAlbumRequest, "QuerySubscriptionAlbumRequest", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.querySubscriptionAlbumRequestShrink)) {
      query["QuerySubscriptionAlbumRequest"] = request.querySubscriptionAlbumRequestShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSubAlbum",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/listSubAlbum`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSubAlbumResponse>(await this.callApi(params, req, runtime), new $_model.ListSubAlbumResponse({}));
  }

  /**
   * 订阅专辑元数据列表
   * 
   * @param request - ListSubAlbumRequest
   * @returns ListSubAlbumResponse
   */
  async listSubAlbum(request: $_model.ListSubAlbumRequest): Promise<$_model.ListSubAlbumResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListSubAlbumHeaders({ });
    return await this.listSubAlbumWithOptions(request, headers, runtime);
  }

  /**
   * 内容订阅元数据分类
   * 
   * @param request - ListSubscriptionAlbumCategoryRequest
   * @param headers - ListSubscriptionAlbumCategoryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSubscriptionAlbumCategoryResponse
   */
  async listSubscriptionAlbumCategoryWithOptions(request: $_model.ListSubscriptionAlbumCategoryRequest, headers: $_model.ListSubscriptionAlbumCategoryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListSubscriptionAlbumCategoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryName)) {
      query["CategoryName"] = request.categoryName;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSubscriptionAlbumCategory",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/listSubscriptionAlbumCategory`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSubscriptionAlbumCategoryResponse>(await this.callApi(params, req, runtime), new $_model.ListSubscriptionAlbumCategoryResponse({}));
  }

  /**
   * 内容订阅元数据分类
   * 
   * @param request - ListSubscriptionAlbumCategoryRequest
   * @returns ListSubscriptionAlbumCategoryResponse
   */
  async listSubscriptionAlbumCategory(request: $_model.ListSubscriptionAlbumCategoryRequest): Promise<$_model.ListSubscriptionAlbumCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListSubscriptionAlbumCategoryHeaders({ });
    return await this.listSubscriptionAlbumCategoryWithOptions(request, headers, runtime);
  }

  /**
   * 获取留言列表
   * 
   * @param tmpReq - ListUserMessageRequest
   * @param headers - ListUserMessageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserMessageResponse
   */
  async listUserMessageWithOptions(tmpReq: $_model.ListUserMessageRequest, headers: $_model.ListUserMessageHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserMessageResponse> {
    tmpReq.validate();
    let request = new $_model.ListUserMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.beforeTime)) {
      query["BeforeTime"] = request.beforeTime;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserMessage",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/listUserMessage`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserMessageResponse>(await this.callApi(params, req, runtime), new $_model.ListUserMessageResponse({}));
  }

  /**
   * 获取留言列表
   * 
   * @param request - ListUserMessageRequest
   * @returns ListUserMessageResponse
   */
  async listUserMessage(request: $_model.ListUserMessageRequest): Promise<$_model.ListUserMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListUserMessageHeaders({ });
    return await this.listUserMessageWithOptions(request, headers, runtime);
  }

  /**
   * 移动轻纳管
   * 
   * @param tmpReq - MobileRecommendRequest
   * @param headers - MobileRecommendHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MobileRecommendResponse
   */
  async mobileRecommendWithOptions(tmpReq: $_model.MobileRecommendRequest, headers: $_model.MobileRecommendHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.MobileRecommendResponse> {
    tmpReq.validate();
    let request = new $_model.MobileRecommendShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.botId)) {
      query["BotId"] = request.botId;
    }

    if (!$dara.isNull(request.count)) {
      query["Count"] = request.count;
    }

    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.style)) {
      query["Style"] = request.style;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MobileRecommend",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/mobile/recommend/music`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.MobileRecommendResponse>(await this.callApi(params, req, runtime), new $_model.MobileRecommendResponse({}));
  }

  /**
   * 移动轻纳管
   * 
   * @param request - MobileRecommendRequest
   * @returns MobileRecommendResponse
   */
  async mobileRecommend(request: $_model.MobileRecommendRequest): Promise<$_model.MobileRecommendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.MobileRecommendHeaders({ });
    return await this.mobileRecommendWithOptions(request, headers, runtime);
  }

  /**
   * 播放暂停控制
   * 
   * @param tmpReq - PlayAndPauseControlRequest
   * @param headers - PlayAndPauseControlHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PlayAndPauseControlResponse
   */
  async playAndPauseControlWithOptions(tmpReq: $_model.PlayAndPauseControlRequest, headers: $_model.PlayAndPauseControlHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.PlayAndPauseControlResponse> {
    tmpReq.validate();
    let request = new $_model.PlayAndPauseControlShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.openPlayAndPauseControlParam)) {
      request.openPlayAndPauseControlParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.openPlayAndPauseControlParam, "OpenPlayAndPauseControlParam", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.openPlayAndPauseControlParamShrink)) {
      body["OpenPlayAndPauseControlParam"] = request.openPlayAndPauseControlParamShrink;
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
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PlayAndPauseControl",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/PlayAndPauseControl`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PlayAndPauseControlResponse>(await this.callApi(params, req, runtime), new $_model.PlayAndPauseControlResponse({}));
  }

  /**
   * 播放暂停控制
   * 
   * @param request - PlayAndPauseControlRequest
   * @returns PlayAndPauseControlResponse
   */
  async playAndPauseControl(request: $_model.PlayAndPauseControlRequest): Promise<$_model.PlayAndPauseControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.PlayAndPauseControlHeaders({ });
    return await this.playAndPauseControlWithOptions(request, headers, runtime);
  }

  /**
   * 播放模式切换
   * 
   * @param tmpReq - PlayModeControlRequest
   * @param headers - PlayModeControlHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PlayModeControlResponse
   */
  async playModeControlWithOptions(tmpReq: $_model.PlayModeControlRequest, headers: $_model.PlayModeControlHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.PlayModeControlResponse> {
    tmpReq.validate();
    let request = new $_model.PlayModeControlShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.openPlayModeControlRequest)) {
      request.openPlayModeControlRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.openPlayModeControlRequest, "OpenPlayModeControlRequest", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.openPlayModeControlRequestShrink)) {
      body["OpenPlayModeControlRequest"] = request.openPlayModeControlRequestShrink;
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
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PlayModeControl",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/PlayModeControl`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PlayModeControlResponse>(await this.callApi(params, req, runtime), new $_model.PlayModeControlResponse({}));
  }

  /**
   * 播放模式切换
   * 
   * @param request - PlayModeControlRequest
   * @returns PlayModeControlResponse
   */
  async playModeControl(request: $_model.PlayModeControlRequest): Promise<$_model.PlayModeControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.PlayModeControlHeaders({ });
    return await this.playModeControlWithOptions(request, headers, runtime);
  }

  /**
   * 上下首控制
   * 
   * @param tmpReq - PreviousAndNextControlRequest
   * @param headers - PreviousAndNextControlHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreviousAndNextControlResponse
   */
  async previousAndNextControlWithOptions(tmpReq: $_model.PreviousAndNextControlRequest, headers: $_model.PreviousAndNextControlHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.PreviousAndNextControlResponse> {
    tmpReq.validate();
    let request = new $_model.PreviousAndNextControlShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.openControlPlayingListRequest)) {
      request.openControlPlayingListRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.openControlPlayingListRequest, "OpenControlPlayingListRequest", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.openControlPlayingListRequestShrink)) {
      body["OpenControlPlayingListRequest"] = request.openControlPlayingListRequestShrink;
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
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PreviousAndNextControl",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/PreviousAndNextControl`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PreviousAndNextControlResponse>(await this.callApi(params, req, runtime), new $_model.PreviousAndNextControlResponse({}));
  }

  /**
   * 上下首控制
   * 
   * @param request - PreviousAndNextControlRequest
   * @returns PreviousAndNextControlResponse
   */
  async previousAndNextControl(request: $_model.PreviousAndNextControlRequest): Promise<$_model.PreviousAndNextControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.PreviousAndNextControlHeaders({ });
    return await this.previousAndNextControlWithOptions(request, headers, runtime);
  }

  /**
   * 进度控制
   * 
   * @param tmpReq - ProgressControlRequest
   * @param headers - ProgressControlHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ProgressControlResponse
   */
  async progressControlWithOptions(tmpReq: $_model.ProgressControlRequest, headers: $_model.ProgressControlHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ProgressControlResponse> {
    tmpReq.validate();
    let request = new $_model.ProgressControlShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.openProgressControlRequest)) {
      request.openProgressControlRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.openProgressControlRequest, "OpenProgressControlRequest", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.openProgressControlRequestShrink)) {
      body["OpenProgressControlRequest"] = request.openProgressControlRequestShrink;
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
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ProgressControl",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/ProgressControl`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ProgressControlResponse>(await this.callApi(params, req, runtime), new $_model.ProgressControlResponse({}));
  }

  /**
   * 进度控制
   * 
   * @param request - ProgressControlRequest
   * @returns ProgressControlResponse
   */
  async progressControl(request: $_model.ProgressControlRequest): Promise<$_model.ProgressControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ProgressControlHeaders({ });
    return await this.progressControlWithOptions(request, headers, runtime);
  }

  /**
   * 获取闹钟音乐类型列表
   * 
   * @param tmpReq - QueryMusicTypeRequest
   * @param headers - QueryMusicTypeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMusicTypeResponse
   */
  async queryMusicTypeWithOptions(tmpReq: $_model.QueryMusicTypeRequest, headers: $_model.QueryMusicTypeHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMusicTypeResponse> {
    tmpReq.validate();
    let request = new $_model.QueryMusicTypeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.payloadShrink)) {
      body["Payload"] = request.payloadShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
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
      action: "QueryMusicType",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/queryMusicType`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMusicTypeResponse>(await this.callApi(params, req, runtime), new $_model.QueryMusicTypeResponse({}));
  }

  /**
   * 获取闹钟音乐类型列表
   * 
   * @param request - QueryMusicTypeRequest
   * @returns QueryMusicTypeResponse
   */
  async queryMusicType(request: $_model.QueryMusicTypeRequest): Promise<$_model.QueryMusicTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryMusicTypeHeaders({ });
    return await this.queryMusicTypeWithOptions(request, headers, runtime);
  }

  /**
   * 通过tme用户id获取授权的天猫精灵用户+设备列表
   * 
   * @param request - QueryUserDeviceListByTmeUserIdRequest
   * @param headers - QueryUserDeviceListByTmeUserIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserDeviceListByTmeUserIdResponse
   */
  async queryUserDeviceListByTmeUserIdWithOptions(request: $_model.QueryUserDeviceListByTmeUserIdRequest, headers: $_model.QueryUserDeviceListByTmeUserIdHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryUserDeviceListByTmeUserIdResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sp)) {
      query["Sp"] = request.sp;
    }

    if (!$dara.isNull(request.tmeUserId)) {
      query["TmeUserId"] = request.tmeUserId;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUserDeviceListByTmeUserId",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/queryUserDeviceListByTmeUserId`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryUserDeviceListByTmeUserIdResponse>(await this.callApi(params, req, runtime), new $_model.QueryUserDeviceListByTmeUserIdResponse({}));
  }

  /**
   * 通过tme用户id获取授权的天猫精灵用户+设备列表
   * 
   * @param request - QueryUserDeviceListByTmeUserIdRequest
   * @returns QueryUserDeviceListByTmeUserIdResponse
   */
  async queryUserDeviceListByTmeUserId(request: $_model.QueryUserDeviceListByTmeUserIdRequest): Promise<$_model.QueryUserDeviceListByTmeUserIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryUserDeviceListByTmeUserIdHeaders({ });
    return await this.queryUserDeviceListByTmeUserIdWithOptions(request, headers, runtime);
  }

  /**
   * 读取留言
   * 
   * @param tmpReq - ReadMessageRequest
   * @param headers - ReadMessageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadMessageResponse
   */
  async readMessageWithOptions(tmpReq: $_model.ReadMessageRequest, headers: $_model.ReadMessageHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ReadMessageResponse> {
    tmpReq.validate();
    let request = new $_model.ReadMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReadMessage",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/readMessage`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadMessageResponse>(await this.callApi(params, req, runtime), new $_model.ReadMessageResponse({}));
  }

  /**
   * 读取留言
   * 
   * @param request - ReadMessageRequest
   * @returns ReadMessageResponse
   */
  async readMessage(request: $_model.ReadMessageRequest): Promise<$_model.ReadMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ReadMessageHeaders({ });
    return await this.readMessageWithOptions(request, headers, runtime);
  }

  /**
   * 扫描二维码激活绑定设备
   * 
   * @param tmpReq - ScanCodeBindRequest
   * @param headers - ScanCodeBindHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScanCodeBindResponse
   */
  async scanCodeBindWithOptions(tmpReq: $_model.ScanCodeBindRequest, headers: $_model.ScanCodeBindHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ScanCodeBindResponse> {
    tmpReq.validate();
    let request = new $_model.ScanCodeBindShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bindReq)) {
      request.bindReqShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bindReq, "BindReq", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bindReqShrink)) {
      body["BindReq"] = request.bindReqShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
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
      action: "ScanCodeBind",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/scanCode`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ScanCodeBindResponse>(await this.callApi(params, req, runtime), new $_model.ScanCodeBindResponse({}));
  }

  /**
   * 扫描二维码激活绑定设备
   * 
   * @param request - ScanCodeBindRequest
   * @returns ScanCodeBindResponse
   */
  async scanCodeBind(request: $_model.ScanCodeBindRequest): Promise<$_model.ScanCodeBindResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ScanCodeBindHeaders({ });
    return await this.scanCodeBindWithOptions(request, headers, runtime);
  }

  /**
   * 选品池投放能力
   * 
   * @param tmpReq - ScgSearchRequest
   * @param headers - ScgSearchHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScgSearchResponse
   */
  async scgSearchWithOptions(tmpReq: $_model.ScgSearchRequest, headers: $_model.ScgSearchHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ScgSearchResponse> {
    tmpReq.validate();
    let request = new $_model.ScgSearchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.scgFilter)) {
      request.scgFilterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scgFilter, "ScgFilter", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.scgFilterShrink)) {
      query["ScgFilter"] = request.scgFilterShrink;
    }

    if (!$dara.isNull(request.topicId)) {
      query["TopicId"] = request.topicId;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ScgSearch",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/scgSearch`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ScgSearchResponse>(await this.callApi(params, req, runtime), new $_model.ScgSearchResponse({}));
  }

  /**
   * 选品池投放能力
   * 
   * @param request - ScgSearchRequest
   * @returns ScgSearchResponse
   */
  async scgSearch(request: $_model.ScgSearchRequest): Promise<$_model.ScgSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ScgSearchHeaders({ });
    return await this.scgSearchWithOptions(request, headers, runtime);
  }

  /**
   * 按照特定的搜索条件搜索
   * 
   * @param tmpReq - SearchContentRequest
   * @param headers - SearchContentHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchContentResponse
   */
  async searchContentWithOptions(tmpReq: $_model.SearchContentRequest, headers: $_model.SearchContentHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SearchContentResponse> {
    tmpReq.validate();
    let request = new $_model.SearchContentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.request)) {
      request.requestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.request, "Request", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.requestShrink)) {
      body["Request"] = request.requestShrink;
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
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchContent",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/SearchContent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchContentResponse>(await this.callApi(params, req, runtime), new $_model.SearchContentResponse({}));
  }

  /**
   * 按照特定的搜索条件搜索
   * 
   * @param request - SearchContentRequest
   * @returns SearchContentResponse
   */
  async searchContent(request: $_model.SearchContentRequest): Promise<$_model.SearchContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SearchContentHeaders({ });
    return await this.searchContentWithOptions(request, headers, runtime);
  }

  /**
   * 发送留言
   * 
   * @param tmpReq - SendMessageRequest
   * @param headers - SendMessageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendMessageResponse
   */
  async sendMessageWithOptions(tmpReq: $_model.SendMessageRequest, headers: $_model.SendMessageHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SendMessageResponse> {
    tmpReq.validate();
    let request = new $_model.SendMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendMessage",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/sendMessage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendMessageResponse>(await this.callApi(params, req, runtime), new $_model.SendMessageResponse({}));
  }

  /**
   * 发送留言
   * 
   * @param request - SendMessageRequest
   * @returns SendMessageResponse
   */
  async sendMessage(request: $_model.SendMessageRequest): Promise<$_model.SendMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SendMessageHeaders({ });
    return await this.sendMessageWithOptions(request, headers, runtime);
  }

  /**
   * 修改设备设置
   * 
   * @param tmpReq - SetDeviceSettingRequest
   * @param headers - SetDeviceSettingHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDeviceSettingResponse
   */
  async setDeviceSettingWithOptions(tmpReq: $_model.SetDeviceSettingRequest, headers: $_model.SetDeviceSettingHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SetDeviceSettingResponse> {
    tmpReq.validate();
    let request = new $_model.SetDeviceSettingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.key)) {
      body["Key"] = request.key;
    }

    if (!$dara.isNull(request.value)) {
      body["Value"] = request.value;
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
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDeviceSetting",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/setDeviceSetting`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDeviceSettingResponse>(await this.callApi(params, req, runtime), new $_model.SetDeviceSettingResponse({}));
  }

  /**
   * 修改设备设置
   * 
   * @param request - SetDeviceSettingRequest
   * @returns SetDeviceSettingResponse
   */
  async setDeviceSetting(request: $_model.SetDeviceSettingRequest): Promise<$_model.SetDeviceSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SetDeviceSettingHeaders({ });
    return await this.setDeviceSettingWithOptions(request, headers, runtime);
  }

  /**
   * 三方即时信息数据变更事件推送
   * 
   * @param request - ThirdImmediateMsgPushRequest
   * @param headers - ThirdImmediateMsgPushHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ThirdImmediateMsgPushResponse
   */
  async thirdImmediateMsgPushWithOptions(request: $_model.ThirdImmediateMsgPushRequest, headers: $_model.ThirdImmediateMsgPushHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ThirdImmediateMsgPushResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.changeDetail)) {
      query["ChangeDetail"] = request.changeDetail;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.psgIds)) {
      query["PsgIds"] = request.psgIds;
    }

    if (!$dara.isNull(request.trafficChangeType)) {
      query["TrafficChangeType"] = request.trafficChangeType;
    }

    if (!$dara.isNull(request.trafficChangeTypeDesc)) {
      query["TrafficChangeTypeDesc"] = request.trafficChangeTypeDesc;
    }

    if (!$dara.isNull(request.trafficJourneyIds)) {
      query["TrafficJourneyIds"] = request.trafficJourneyIds;
    }

    if (!$dara.isNull(request.trafficSubOrderIds)) {
      query["TrafficSubOrderIds"] = request.trafficSubOrderIds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ThirdImmediateMsgPush",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/thirdImmediateMsgPush`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ThirdImmediateMsgPushResponse>(await this.callApi(params, req, runtime), new $_model.ThirdImmediateMsgPushResponse({}));
  }

  /**
   * 三方即时信息数据变更事件推送
   * 
   * @param request - ThirdImmediateMsgPushRequest
   * @returns ThirdImmediateMsgPushResponse
   */
  async thirdImmediateMsgPush(request: $_model.ThirdImmediateMsgPushRequest): Promise<$_model.ThirdImmediateMsgPushResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ThirdImmediateMsgPushHeaders({ });
    return await this.thirdImmediateMsgPushWithOptions(request, headers, runtime);
  }

  /**
   * 解除三方和精灵账号的关系
   * 
   * @param request - UnbindAligenieUserRequest
   * @param headers - UnbindAligenieUserHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindAligenieUserResponse
   */
  async unbindAligenieUserWithOptions(request: $_model.UnbindAligenieUserRequest, headers: $_model.UnbindAligenieUserHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindAligenieUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.loginStateAccessToken)) {
      body["LoginStateAccessToken"] = request.loginStateAccessToken;
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
      action: "UnbindAligenieUser",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/unbindAligenieUser`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindAligenieUserResponse>(await this.callApi(params, req, runtime), new $_model.UnbindAligenieUserResponse({}));
  }

  /**
   * 解除三方和精灵账号的关系
   * 
   * @param request - UnbindAligenieUserRequest
   * @returns UnbindAligenieUserResponse
   */
  async unbindAligenieUser(request: $_model.UnbindAligenieUserRequest): Promise<$_model.UnbindAligenieUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UnbindAligenieUserHeaders({ });
    return await this.unbindAligenieUserWithOptions(request, headers, runtime);
  }

  /**
   * 解绑设备
   * 
   * @param tmpReq - UnbindDeviceRequest
   * @param headers - UnbindDeviceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindDeviceResponse
   */
  async unbindDeviceWithOptions(tmpReq: $_model.UnbindDeviceRequest, headers: $_model.UnbindDeviceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindDeviceResponse> {
    tmpReq.validate();
    let request = new $_model.UnbindDeviceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
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
      action: "UnbindDevice",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/unbindDevice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindDeviceResponse>(await this.callApi(params, req, runtime), new $_model.UnbindDeviceResponse({}));
  }

  /**
   * 解绑设备
   * 
   * @param request - UnbindDeviceRequest
   * @returns UnbindDeviceResponse
   */
  async unbindDevice(request: $_model.UnbindDeviceRequest): Promise<$_model.UnbindDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UnbindDeviceHeaders({ });
    return await this.unbindDeviceWithOptions(request, headers, runtime);
  }

  /**
   * 更新闹钟
   * 
   * @param tmpReq - UpdateAlarmRequest
   * @param headers - UpdateAlarmHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAlarmResponse
   */
  async updateAlarmWithOptions(tmpReq: $_model.UpdateAlarmRequest, headers: $_model.UpdateAlarmHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAlarmResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAlarmShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.payloadShrink)) {
      body["Payload"] = request.payloadShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
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
      action: "UpdateAlarm",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/updateAlarm`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAlarmResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAlarmResponse({}));
  }

  /**
   * 更新闹钟
   * 
   * @param request - UpdateAlarmRequest
   * @returns UpdateAlarmResponse
   */
  async updateAlarm(request: $_model.UpdateAlarmRequest): Promise<$_model.UpdateAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateAlarmHeaders({ });
    return await this.updateAlarmWithOptions(request, headers, runtime);
  }

}
