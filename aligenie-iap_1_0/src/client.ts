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
   * 应用使用时长上报
   * 
   * @param tmpReq - AppUseTimeReportRequest
   * @param headers - AppUseTimeReportHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AppUseTimeReportResponse
   */
  async appUseTimeReportWithOptions(tmpReq: $_model.AppUseTimeReportRequest, headers: $_model.AppUseTimeReportHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AppUseTimeReportResponse> {
    tmpReq.validate();
    let request = new $_model.AppUseTimeReportShrinkRequest({ });
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
      action: "AppUseTimeReport",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/vip/use/time/report`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AppUseTimeReportResponse>(await this.callApi(params, req, runtime), new $_model.AppUseTimeReportResponse({}));
  }

  /**
   * 应用使用时长上报
   * 
   * @param request - AppUseTimeReportRequest
   * @returns AppUseTimeReportResponse
   */
  async appUseTimeReport(request: $_model.AppUseTimeReportRequest): Promise<$_model.AppUseTimeReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AppUseTimeReportHeaders({ });
    return await this.appUseTimeReportWithOptions(request, headers, runtime);
  }

  /**
   * 三方领取回调接口
   * 
   * @param tmpReq - CallBackThirdRightSendPlanRequest
   * @param headers - CallBackThirdRightSendPlanHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CallBackThirdRightSendPlanResponse
   */
  async callBackThirdRightSendPlanWithOptions(tmpReq: $_model.CallBackThirdRightSendPlanRequest, headers: $_model.CallBackThirdRightSendPlanHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CallBackThirdRightSendPlanResponse> {
    tmpReq.validate();
    let request = new $_model.CallBackThirdRightSendPlanShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.extendInfo)) {
      request.extendInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extendInfo, "ExtendInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizGroup)) {
      query["BizGroup"] = request.bizGroup;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.cardType)) {
      query["CardType"] = request.cardType;
    }

    if (!$dara.isNull(request.errorMsg)) {
      query["ErrorMsg"] = request.errorMsg;
    }

    if (!$dara.isNull(request.extendInfoShrink)) {
      query["ExtendInfo"] = request.extendInfoShrink;
    }

    if (!$dara.isNull(request.genieOpenId)) {
      query["GenieOpenId"] = request.genieOpenId;
    }

    if (!$dara.isNull(request.receiveStatus)) {
      query["ReceiveStatus"] = request.receiveStatus;
    }

    if (!$dara.isNull(request.sn)) {
      query["Sn"] = request.sn;
    }

    if (!$dara.isNull(request.supplierId)) {
      query["SupplierId"] = request.supplierId;
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
      action: "CallBackThirdRightSendPlan",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/business/CallBackThirdRightSendPlan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CallBackThirdRightSendPlanResponse>(await this.callApi(params, req, runtime), new $_model.CallBackThirdRightSendPlanResponse({}));
  }

  /**
   * 三方领取回调接口
   * 
   * @param request - CallBackThirdRightSendPlanRequest
   * @returns CallBackThirdRightSendPlanResponse
   */
  async callBackThirdRightSendPlan(request: $_model.CallBackThirdRightSendPlanRequest): Promise<$_model.CallBackThirdRightSendPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CallBackThirdRightSendPlanHeaders({ });
    return await this.callBackThirdRightSendPlanWithOptions(request, headers, runtime);
  }

  /**
   * 商业化移动屏三方app领卡校验
   * 
   * @param tmpReq - CheckThirdRightSendPlanRequest
   * @param headers - CheckThirdRightSendPlanHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckThirdRightSendPlanResponse
   */
  async checkThirdRightSendPlanWithOptions(tmpReq: $_model.CheckThirdRightSendPlanRequest, headers: $_model.CheckThirdRightSendPlanHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CheckThirdRightSendPlanResponse> {
    tmpReq.validate();
    let request = new $_model.CheckThirdRightSendPlanShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.extendInfo)) {
      request.extendInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extendInfo, "ExtendInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizGroup)) {
      query["BizGroup"] = request.bizGroup;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.extendInfoShrink)) {
      query["ExtendInfo"] = request.extendInfoShrink;
    }

    if (!$dara.isNull(request.sn)) {
      query["Sn"] = request.sn;
    }

    if (!$dara.isNull(request.supplierId)) {
      query["SupplierId"] = request.supplierId;
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
      action: "CheckThirdRightSendPlan",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/business/CheckThirdRightSendPlan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckThirdRightSendPlanResponse>(await this.callApi(params, req, runtime), new $_model.CheckThirdRightSendPlanResponse({}));
  }

  /**
   * 商业化移动屏三方app领卡校验
   * 
   * @param request - CheckThirdRightSendPlanRequest
   * @returns CheckThirdRightSendPlanResponse
   */
  async checkThirdRightSendPlan(request: $_model.CheckThirdRightSendPlanRequest): Promise<$_model.CheckThirdRightSendPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CheckThirdRightSendPlanHeaders({ });
    return await this.checkThirdRightSendPlanWithOptions(request, headers, runtime);
  }

  /**
   * 创建提醒
   * 
   * @param tmpReq - CreateReminderRequest
   * @param headers - CreateReminderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateReminderResponse
   */
  async createReminderWithOptions(tmpReq: $_model.CreateReminderRequest, headers: $_model.CreateReminderHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateReminderResponse> {
    tmpReq.validate();
    let request = new $_model.CreateReminderShrinkRequest({ });
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
      action: "CreateReminder",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/reminder/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateReminderResponse>(await this.callApi(params, req, runtime), new $_model.CreateReminderResponse({}));
  }

  /**
   * 创建提醒
   * 
   * @param request - CreateReminderRequest
   * @returns CreateReminderResponse
   */
  async createReminder(request: $_model.CreateReminderRequest): Promise<$_model.CreateReminderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateReminderHeaders({ });
    return await this.createReminderWithOptions(request, headers, runtime);
  }

  /**
   * 删除提醒
   * 
   * @param tmpReq - DeleteReminderRequest
   * @param headers - DeleteReminderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteReminderResponse
   */
  async deleteReminderWithOptions(tmpReq: $_model.DeleteReminderRequest, headers: $_model.DeleteReminderHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteReminderResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteReminderShrinkRequest({ });
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

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
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
      action: "DeleteReminder",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/reminder/delete`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteReminderResponse>(await this.callApi(params, req, runtime), new $_model.DeleteReminderResponse({}));
  }

  /**
   * 删除提醒
   * 
   * @param request - DeleteReminderRequest
   * @returns DeleteReminderResponse
   */
  async deleteReminder(request: $_model.DeleteReminderRequest): Promise<$_model.DeleteReminderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteReminderHeaders({ });
    return await this.deleteReminderWithOptions(request, headers, runtime);
  }

  /**
   * 获取会员信息
   * 
   * @param tmpReq - GetAccountForAppRequest
   * @param headers - GetAccountForAppHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountForAppResponse
   */
  async getAccountForAppWithOptions(tmpReq: $_model.GetAccountForAppRequest, headers: $_model.GetAccountForAppHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccountForAppResponse> {
    tmpReq.validate();
    let request = new $_model.GetAccountForAppShrinkRequest({ });
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

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
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
      action: "GetAccountForApp",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/vip/account/get`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccountForAppResponse>(await this.callApi(params, req, runtime), new $_model.GetAccountForAppResponse({}));
  }

  /**
   * 获取会员信息
   * 
   * @param request - GetAccountForAppRequest
   * @returns GetAccountForAppResponse
   */
  async getAccountForApp(request: $_model.GetAccountForAppRequest): Promise<$_model.GetAccountForAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetAccountForAppHeaders({ });
    return await this.getAccountForAppWithOptions(request, headers, runtime);
  }

  /**
   * 获取应用配置
   * 
   * @param tmpReq - GetBusAppConfigRequest
   * @param headers - GetBusAppConfigHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBusAppConfigResponse
   */
  async getBusAppConfigWithOptions(tmpReq: $_model.GetBusAppConfigRequest, headers: $_model.GetBusAppConfigHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetBusAppConfigResponse> {
    tmpReq.validate();
    let request = new $_model.GetBusAppConfigShrinkRequest({ });
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

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
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
      action: "GetBusAppConfig",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/app/config/get`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBusAppConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetBusAppConfigResponse({}));
  }

  /**
   * 获取应用配置
   * 
   * @param request - GetBusAppConfigRequest
   * @returns GetBusAppConfigResponse
   */
  async getBusAppConfig(request: $_model.GetBusAppConfigRequest): Promise<$_model.GetBusAppConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetBusAppConfigHeaders({ });
    return await this.getBusAppConfigWithOptions(request, headers, runtime);
  }

  /**
   * 用户手机号获取
   * 
   * @param tmpReq - GetPhoneNumberRequest
   * @param headers - GetPhoneNumberHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPhoneNumberResponse
   */
  async getPhoneNumberWithOptions(tmpReq: $_model.GetPhoneNumberRequest, headers: $_model.GetPhoneNumberHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetPhoneNumberResponse> {
    tmpReq.validate();
    let request = new $_model.GetPhoneNumberShrinkRequest({ });
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
      action: "GetPhoneNumber",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/profile/phoneNumber`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPhoneNumberResponse>(await this.callApi(params, req, runtime), new $_model.GetPhoneNumberResponse({}));
  }

  /**
   * 用户手机号获取
   * 
   * @param request - GetPhoneNumberRequest
   * @returns GetPhoneNumberResponse
   */
  async getPhoneNumber(request: $_model.GetPhoneNumberRequest): Promise<$_model.GetPhoneNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetPhoneNumberHeaders({ });
    return await this.getPhoneNumberWithOptions(request, headers, runtime);
  }

  /**
   * 查询提醒
   * 
   * @param tmpReq - GetReminderRequest
   * @param headers - GetReminderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetReminderResponse
   */
  async getReminderWithOptions(tmpReq: $_model.GetReminderRequest, headers: $_model.GetReminderHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetReminderResponse> {
    tmpReq.validate();
    let request = new $_model.GetReminderShrinkRequest({ });
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

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
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
      action: "GetReminder",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/reminder/get`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetReminderResponse>(await this.callApi(params, req, runtime), new $_model.GetReminderResponse({}));
  }

  /**
   * 查询提醒
   * 
   * @param request - GetReminderRequest
   * @returns GetReminderResponse
   */
  async getReminder(request: $_model.GetReminderRequest): Promise<$_model.GetReminderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetReminderHeaders({ });
    return await this.getReminderWithOptions(request, headers, runtime);
  }

  /**
   * 查询提醒列表
   * 
   * @param tmpReq - ListRemindersRequest
   * @param headers - ListRemindersHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRemindersResponse
   */
  async listRemindersWithOptions(tmpReq: $_model.ListRemindersRequest, headers: $_model.ListRemindersHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListRemindersResponse> {
    tmpReq.validate();
    let request = new $_model.ListRemindersShrinkRequest({ });
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

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
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
      action: "ListReminders",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/reminder/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRemindersResponse>(await this.callApi(params, req, runtime), new $_model.ListRemindersResponse({}));
  }

  /**
   * 查询提醒列表
   * 
   * @param request - ListRemindersRequest
   * @returns ListRemindersResponse
   */
  async listReminders(request: $_model.ListRemindersRequest): Promise<$_model.ListRemindersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListRemindersHeaders({ });
    return await this.listRemindersWithOptions(request, headers, runtime);
  }

  /**
   * 拉取收银台
   * 
   * @param tmpReq - PullCashierRequest
   * @param headers - PullCashierHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PullCashierResponse
   */
  async pullCashierWithOptions(tmpReq: $_model.PullCashierRequest, headers: $_model.PullCashierHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.PullCashierResponse> {
    tmpReq.validate();
    let request = new $_model.PullCashierShrinkRequest({ });
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

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
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
      action: "PullCashier",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/pull/cashier/`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PullCashierResponse>(await this.callApi(params, req, runtime), new $_model.PullCashierResponse({}));
  }

  /**
   * 拉取收银台
   * 
   * @param request - PullCashierRequest
   * @returns PullCashierResponse
   */
  async pullCashier(request: $_model.PullCashierRequest): Promise<$_model.PullCashierResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.PullCashierHeaders({ });
    return await this.pullCashierWithOptions(request, headers, runtime);
  }

  /**
   * 猫精系统消息推送
   * 
   * @param tmpReq - PushNotificationsRequest
   * @param headers - PushNotificationsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushNotificationsResponse
   */
  async pushNotificationsWithOptions(tmpReq: $_model.PushNotificationsRequest, headers: $_model.PushNotificationsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.PushNotificationsResponse> {
    tmpReq.validate();
    let request = new $_model.PushNotificationsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.notificationUnicastRequest)) {
      request.notificationUnicastRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notificationUnicastRequest, "NotificationUnicastRequest", "json");
    }

    if (!$dara.isNull(tmpReq.tenantInfo)) {
      request.tenantInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantInfo, "TenantInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.notificationUnicastRequestShrink)) {
      body["NotificationUnicastRequest"] = request.notificationUnicastRequestShrink;
    }

    if (!$dara.isNull(request.tenantInfoShrink)) {
      body["TenantInfo"] = request.tenantInfoShrink;
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
      action: "PushNotifications",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/notifications`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "none",
    });
    return $dara.cast<$_model.PushNotificationsResponse>(await this.callApi(params, req, runtime), new $_model.PushNotificationsResponse({}));
  }

  /**
   * 猫精系统消息推送
   * 
   * @param request - PushNotificationsRequest
   * @returns PushNotificationsResponse
   */
  async pushNotifications(request: $_model.PushNotificationsRequest): Promise<$_model.PushNotificationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.PushNotificationsHeaders({ });
    return await this.pushNotificationsWithOptions(request, headers, runtime);
  }

  /**
   * 消息推送服务（普通版）
   * 
   * @param tmpReq - SendNotificationsRequest
   * @param headers - SendNotificationsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendNotificationsResponse
   */
  async sendNotificationsWithOptions(tmpReq: $_model.SendNotificationsRequest, headers: $_model.SendNotificationsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SendNotificationsResponse> {
    tmpReq.validate();
    let request = new $_model.SendNotificationsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.notificationUnicastRequest)) {
      request.notificationUnicastRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notificationUnicastRequest, "NotificationUnicastRequest", "json");
    }

    if (!$dara.isNull(tmpReq.tenantInfo)) {
      request.tenantInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantInfo, "TenantInfo", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      body["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.notificationUnicastRequestShrink)) {
      body["NotificationUnicastRequest"] = request.notificationUnicastRequestShrink;
    }

    if (!$dara.isNull(request.tenantInfoShrink)) {
      body["TenantInfo"] = request.tenantInfoShrink;
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
      action: "SendNotifications",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/general/notifications`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "none",
    });
    return $dara.cast<$_model.SendNotificationsResponse>(await this.callApi(params, req, runtime), new $_model.SendNotificationsResponse({}));
  }

  /**
   * 消息推送服务（普通版）
   * 
   * @param request - SendNotificationsRequest
   * @returns SendNotificationsResponse
   */
  async sendNotifications(request: $_model.SendNotificationsRequest): Promise<$_model.SendNotificationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SendNotificationsHeaders({ });
    return await this.sendNotificationsWithOptions(request, headers, runtime);
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
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/thirdImmediateMsgPush`,
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
   * 更新提醒
   * 
   * @param tmpReq - UpdateReminderRequest
   * @param headers - UpdateReminderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateReminderResponse
   */
  async updateReminderWithOptions(tmpReq: $_model.UpdateReminderRequest, headers: $_model.UpdateReminderHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateReminderResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateReminderShrinkRequest({ });
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
      action: "UpdateReminder",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/reminder/update`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateReminderResponse>(await this.callApi(params, req, runtime), new $_model.UpdateReminderResponse({}));
  }

  /**
   * 更新提醒
   * 
   * @param request - UpdateReminderRequest
   * @returns UpdateReminderResponse
   */
  async updateReminder(request: $_model.UpdateReminderRequest): Promise<$_model.UpdateReminderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateReminderHeaders({ });
    return await this.updateReminderWithOptions(request, headers, runtime);
  }

  /**
   * 视频类应用会员信息上报
   * 
   * @param tmpReq - VideoAppReportRequest
   * @param headers - VideoAppReportHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VideoAppReportResponse
   */
  async videoAppReportWithOptions(tmpReq: $_model.VideoAppReportRequest, headers: $_model.VideoAppReportHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.VideoAppReportResponse> {
    tmpReq.validate();
    let request = new $_model.VideoAppReportShrinkRequest({ });
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
      action: "VideoAppReport",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/vip/use/video/report`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VideoAppReportResponse>(await this.callApi(params, req, runtime), new $_model.VideoAppReportResponse({}));
  }

  /**
   * 视频类应用会员信息上报
   * 
   * @param request - VideoAppReportRequest
   * @returns VideoAppReportResponse
   */
  async videoAppReport(request: $_model.VideoAppReportRequest): Promise<$_model.VideoAppReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.VideoAppReportHeaders({ });
    return await this.videoAppReportWithOptions(request, headers, runtime);
  }

  /**
   * 猫精应用唤起
   * 
   * @param request - WakeUpAppRequest
   * @param headers - WakeUpAppHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WakeUpAppResponse
   */
  async wakeUpAppWithOptions(request: $_model.WakeUpAppRequest, headers: $_model.WakeUpAppHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.WakeUpAppResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isDebug)) {
      body["IsDebug"] = request.isDebug;
    }

    if (!$dara.isNull(request.path)) {
      body["Path"] = request.path;
    }

    if (!$dara.isNull(request.targetInfo)) {
      body["TargetInfo"] = request.targetInfo;
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
      action: "WakeUpApp",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/wakeup`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.WakeUpAppResponse>(await this.callApi(params, req, runtime), new $_model.WakeUpAppResponse({}));
  }

  /**
   * 猫精应用唤起
   * 
   * @param request - WakeUpAppRequest
   * @returns WakeUpAppResponse
   */
  async wakeUpApp(request: $_model.WakeUpAppRequest): Promise<$_model.WakeUpAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.WakeUpAppHeaders({ });
    return await this.wakeUpAppWithOptions(request, headers, runtime);
  }

}
