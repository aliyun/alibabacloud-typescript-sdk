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
    this._endpoint = this.getEndpoint("account-crm", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - AccountOneKeyDeleteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AccountOneKeyDeleteResponse
   */
  async accountOneKeyDeleteWithOptions(request: $_model.AccountOneKeyDeleteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AccountOneKeyDeleteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AccountOneKeyDelete",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AccountOneKeyDeleteResponse>(await this.callApi(params, req, runtime), new $_model.AccountOneKeyDeleteResponse({}));
  }

  /**
   * @param request - AccountOneKeyDeleteRequest
   * @returns AccountOneKeyDeleteResponse
   */
  async accountOneKeyDelete(request: $_model.AccountOneKeyDeleteRequest): Promise<$_model.AccountOneKeyDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.accountOneKeyDeleteWithOptions(request, runtime);
  }

  /**
   * @param request - AddCustomerLabelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCustomerLabelResponse
   */
  async addCustomerLabelWithOptions(request: $_model.AddCustomerLabelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddCustomerLabelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endtime)) {
      query["Endtime"] = request.endtime;
    }

    if (!$dara.isNull(request.labelSeries)) {
      query["LabelSeries"] = request.labelSeries;
    }

    if (!$dara.isNull(request.labelTypes)) {
      query["LabelTypes"] = request.labelTypes;
    }

    if (!$dara.isNull(request.organization)) {
      query["Organization"] = request.organization;
    }

    if (!$dara.isNull(request.PK)) {
      query["PK"] = request.PK;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCustomerLabel",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddCustomerLabelResponse>(await this.callApi(params, req, runtime), new $_model.AddCustomerLabelResponse({}));
  }

  /**
   * @param request - AddCustomerLabelRequest
   * @returns AddCustomerLabelResponse
   */
  async addCustomerLabel(request: $_model.AddCustomerLabelRequest): Promise<$_model.AddCustomerLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addCustomerLabelWithOptions(request, runtime);
  }

  /**
   * @param request - AllowAgAccountLoginRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllowAgAccountLoginResponse
   */
  async allowAgAccountLoginWithOptions(request: $_model.AllowAgAccountLoginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AllowAgAccountLoginResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agAccountType)) {
      query["AgAccountType"] = request.agAccountType;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.mpk)) {
      query["Mpk"] = request.mpk;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AllowAgAccountLogin",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AllowAgAccountLoginResponse>(await this.callApi(params, req, runtime), new $_model.AllowAgAccountLoginResponse({}));
  }

  /**
   * @param request - AllowAgAccountLoginRequest
   * @returns AllowAgAccountLoginResponse
   */
  async allowAgAccountLogin(request: $_model.AllowAgAccountLoginRequest): Promise<$_model.AllowAgAccountLoginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allowAgAccountLoginWithOptions(request, runtime);
  }

  /**
   * 申请ag注销
   * 
   * @param request - ApplyAgOneKeyDeleteTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyAgOneKeyDeleteTaskResponse
   */
  async applyAgOneKeyDeleteTaskWithOptions(request: $_model.ApplyAgOneKeyDeleteTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyAgOneKeyDeleteTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.abandonedDependency)) {
      query["AbandonedDependency"] = request.abandonedDependency;
    }

    if (!$dara.isNull(request.agAccountType)) {
      query["AgAccountType"] = request.agAccountType;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.mpk)) {
      query["Mpk"] = request.mpk;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyAgOneKeyDeleteTask",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyAgOneKeyDeleteTaskResponse>(await this.callApi(params, req, runtime), new $_model.ApplyAgOneKeyDeleteTaskResponse({}));
  }

  /**
   * 申请ag注销
   * 
   * @param request - ApplyAgOneKeyDeleteTaskRequest
   * @returns ApplyAgOneKeyDeleteTaskResponse
   */
  async applyAgOneKeyDeleteTask(request: $_model.ApplyAgOneKeyDeleteTaskRequest): Promise<$_model.ApplyAgOneKeyDeleteTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyAgOneKeyDeleteTaskWithOptions(request, runtime);
  }

  /**
   * 申请ag注销
   * 
   * @param request - ApplyAgOneKeyOnlyCheckerTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyAgOneKeyOnlyCheckerTaskResponse
   */
  async applyAgOneKeyOnlyCheckerTaskWithOptions(request: $_model.ApplyAgOneKeyOnlyCheckerTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyAgOneKeyOnlyCheckerTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agAccountType)) {
      query["AgAccountType"] = request.agAccountType;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.mpk)) {
      query["Mpk"] = request.mpk;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyAgOneKeyOnlyCheckerTask",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyAgOneKeyOnlyCheckerTaskResponse>(await this.callApi(params, req, runtime), new $_model.ApplyAgOneKeyOnlyCheckerTaskResponse({}));
  }

  /**
   * 申请ag注销
   * 
   * @param request - ApplyAgOneKeyOnlyCheckerTaskRequest
   * @returns ApplyAgOneKeyOnlyCheckerTaskResponse
   */
  async applyAgOneKeyOnlyCheckerTask(request: $_model.ApplyAgOneKeyOnlyCheckerTaskRequest): Promise<$_model.ApplyAgOneKeyOnlyCheckerTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyAgOneKeyOnlyCheckerTaskWithOptions(request, runtime);
  }

  /**
   * @param request - ApplyIdentityRegistrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyIdentityRegistrationResponse
   */
  async applyIdentityRegistrationWithOptions(request: $_model.ApplyIdentityRegistrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyIdentityRegistrationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!$dara.isNull(request.customerId)) {
      query["CustomerId"] = request.customerId;
    }

    if (!$dara.isNull(request.docBackPic)) {
      query["DocBackPic"] = request.docBackPic;
    }

    if (!$dara.isNull(request.docFrontPic)) {
      query["DocFrontPic"] = request.docFrontPic;
    }

    if (!$dara.isNull(request.docNum)) {
      query["DocNum"] = request.docNum;
    }

    if (!$dara.isNull(request.docType)) {
      query["DocType"] = request.docType;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.fullName)) {
      query["FullName"] = request.fullName;
    }

    if (!$dara.isNull(request.registeredAddress)) {
      query["RegisteredAddress"] = request.registeredAddress;
    }

    if (!$dara.isNull(request.registeredCountry)) {
      query["RegisteredCountry"] = request.registeredCountry;
    }

    if (!$dara.isNull(request.registeredNum)) {
      query["RegisteredNum"] = request.registeredNum;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.tel)) {
      query["Tel"] = request.tel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyIdentityRegistration",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyIdentityRegistrationResponse>(await this.callApi(params, req, runtime), new $_model.ApplyIdentityRegistrationResponse({}));
  }

  /**
   * @param request - ApplyIdentityRegistrationRequest
   * @returns ApplyIdentityRegistrationResponse
   */
  async applyIdentityRegistration(request: $_model.ApplyIdentityRegistrationRequest): Promise<$_model.ApplyIdentityRegistrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyIdentityRegistrationWithOptions(request, runtime);
  }

  /**
   * @param request - AsyncCreateAgAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AsyncCreateAgAccountResponse
   */
  async asyncCreateAgAccountWithOptions(request: $_model.AsyncCreateAgAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AsyncCreateAgAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.loginEmail)) {
      query["LoginEmail"] = request.loginEmail;
    }

    if (!$dara.isNull(request.maserAccountInfo)) {
      query["MaserAccountInfo"] = request.maserAccountInfo;
    }

    if (!$dara.isNull(request.mpk)) {
      query["Mpk"] = request.mpk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AsyncCreateAgAccount",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AsyncCreateAgAccountResponse>(await this.callApi(params, req, runtime), new $_model.AsyncCreateAgAccountResponse({}));
  }

  /**
   * @param request - AsyncCreateAgAccountRequest
   * @returns AsyncCreateAgAccountResponse
   */
  async asyncCreateAgAccount(request: $_model.AsyncCreateAgAccountRequest): Promise<$_model.AsyncCreateAgAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.asyncCreateAgAccountWithOptions(request, runtime);
  }

  /**
   * @param request - AsyncModifyAgLoginEmailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AsyncModifyAgLoginEmailResponse
   */
  async asyncModifyAgLoginEmailWithOptions(request: $_model.AsyncModifyAgLoginEmailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AsyncModifyAgLoginEmailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mpk)) {
      query["Mpk"] = request.mpk;
    }

    if (!$dara.isNull(request.newLoginEmail)) {
      query["NewLoginEmail"] = request.newLoginEmail;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AsyncModifyAgLoginEmail",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AsyncModifyAgLoginEmailResponse>(await this.callApi(params, req, runtime), new $_model.AsyncModifyAgLoginEmailResponse({}));
  }

  /**
   * @param request - AsyncModifyAgLoginEmailRequest
   * @returns AsyncModifyAgLoginEmailResponse
   */
  async asyncModifyAgLoginEmail(request: $_model.AsyncModifyAgLoginEmailRequest): Promise<$_model.AsyncModifyAgLoginEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.asyncModifyAgLoginEmailWithOptions(request, runtime);
  }

  /**
   * @param request - AuthAndActiveWithHidRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthAndActiveWithHidResponse
   */
  async authAndActiveWithHidWithOptions(request: $_model.AuthAndActiveWithHidRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthAndActiveWithHidResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.havanaId)) {
      query["HavanaId"] = request.havanaId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthAndActiveWithHid",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthAndActiveWithHidResponse>(await this.callApi(params, req, runtime), new $_model.AuthAndActiveWithHidResponse({}));
  }

  /**
   * @param request - AuthAndActiveWithHidRequest
   * @returns AuthAndActiveWithHidResponse
   */
  async authAndActiveWithHid(request: $_model.AuthAndActiveWithHidRequest): Promise<$_model.AuthAndActiveWithHidResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authAndActiveWithHidWithOptions(request, runtime);
  }

  /**
   * @param request - AuthAndRefreshLoginTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthAndRefreshLoginTicketResponse
   */
  async authAndRefreshLoginTicketWithOptions(request: $_model.AuthAndRefreshLoginTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthAndRefreshLoginTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.havanaId)) {
      query["HavanaId"] = request.havanaId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthAndRefreshLoginTicket",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthAndRefreshLoginTicketResponse>(await this.callApi(params, req, runtime), new $_model.AuthAndRefreshLoginTicketResponse({}));
  }

  /**
   * @param request - AuthAndRefreshLoginTicketRequest
   * @returns AuthAndRefreshLoginTicketResponse
   */
  async authAndRefreshLoginTicket(request: $_model.AuthAndRefreshLoginTicketRequest): Promise<$_model.AuthAndRefreshLoginTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authAndRefreshLoginTicketWithOptions(request, runtime);
  }

  /**
   * @param request - AuthLoginTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthLoginTicketResponse
   */
  async authLoginTicketWithOptions(request: $_model.AuthLoginTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthLoginTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.minorAuthCode)) {
      query["MinorAuthCode"] = request.minorAuthCode;
    }

    if (!$dara.isNull(request.scene)) {
      query["Scene"] = request.scene;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthLoginTicket",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthLoginTicketResponse>(await this.callApi(params, req, runtime), new $_model.AuthLoginTicketResponse({}));
  }

  /**
   * @param request - AuthLoginTicketRequest
   * @returns AuthLoginTicketResponse
   */
  async authLoginTicket(request: $_model.AuthLoginTicketRequest): Promise<$_model.AuthLoginTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authLoginTicketWithOptions(request, runtime);
  }

  /**
   * @param request - BatchQueryAgAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchQueryAgAccountResponse
   */
  async batchQueryAgAccountWithOptions(request: $_model.BatchQueryAgAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchQueryAgAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mpk)) {
      query["Mpk"] = request.mpk;
    }

    if (!$dara.isNull(request.pkList)) {
      query["PkList"] = request.pkList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchQueryAgAccount",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchQueryAgAccountResponse>(await this.callApi(params, req, runtime), new $_model.BatchQueryAgAccountResponse({}));
  }

  /**
   * @param request - BatchQueryAgAccountRequest
   * @returns BatchQueryAgAccountResponse
   */
  async batchQueryAgAccount(request: $_model.BatchQueryAgAccountRequest): Promise<$_model.BatchQueryAgAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchQueryAgAccountWithOptions(request, runtime);
  }

  /**
   * @param request - BatchQueryCreateAccountTraceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchQueryCreateAccountTraceResponse
   */
  async batchQueryCreateAccountTraceWithOptions(request: $_model.BatchQueryCreateAccountTraceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchQueryCreateAccountTraceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mpk)) {
      query["Mpk"] = request.mpk;
    }

    if (!$dara.isNull(request.traceNoList)) {
      query["TraceNoList"] = request.traceNoList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchQueryCreateAccountTrace",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchQueryCreateAccountTraceResponse>(await this.callApi(params, req, runtime), new $_model.BatchQueryCreateAccountTraceResponse({}));
  }

  /**
   * @param request - BatchQueryCreateAccountTraceRequest
   * @returns BatchQueryCreateAccountTraceResponse
   */
  async batchQueryCreateAccountTrace(request: $_model.BatchQueryCreateAccountTraceRequest): Promise<$_model.BatchQueryCreateAccountTraceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchQueryCreateAccountTraceWithOptions(request, runtime);
  }

  /**
   * @param request - BatchQueryModifyLoginEmailTraceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchQueryModifyLoginEmailTraceResponse
   */
  async batchQueryModifyLoginEmailTraceWithOptions(request: $_model.BatchQueryModifyLoginEmailTraceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchQueryModifyLoginEmailTraceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mpk)) {
      query["Mpk"] = request.mpk;
    }

    if (!$dara.isNull(request.traceNoList)) {
      query["TraceNoList"] = request.traceNoList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchQueryModifyLoginEmailTrace",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchQueryModifyLoginEmailTraceResponse>(await this.callApi(params, req, runtime), new $_model.BatchQueryModifyLoginEmailTraceResponse({}));
  }

  /**
   * @param request - BatchQueryModifyLoginEmailTraceRequest
   * @returns BatchQueryModifyLoginEmailTraceResponse
   */
  async batchQueryModifyLoginEmailTrace(request: $_model.BatchQueryModifyLoginEmailTraceRequest): Promise<$_model.BatchQueryModifyLoginEmailTraceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchQueryModifyLoginEmailTraceWithOptions(request, runtime);
  }

  /**
   * @param request - CancelAsyncCreateAgAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelAsyncCreateAgAccountResponse
   */
  async cancelAsyncCreateAgAccountWithOptions(request: $_model.CancelAsyncCreateAgAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelAsyncCreateAgAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mpk)) {
      query["Mpk"] = request.mpk;
    }

    if (!$dara.isNull(request.traceNo)) {
      query["TraceNo"] = request.traceNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelAsyncCreateAgAccount",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelAsyncCreateAgAccountResponse>(await this.callApi(params, req, runtime), new $_model.CancelAsyncCreateAgAccountResponse({}));
  }

  /**
   * @param request - CancelAsyncCreateAgAccountRequest
   * @returns CancelAsyncCreateAgAccountResponse
   */
  async cancelAsyncCreateAgAccount(request: $_model.CancelAsyncCreateAgAccountRequest): Promise<$_model.CancelAsyncCreateAgAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelAsyncCreateAgAccountWithOptions(request, runtime);
  }

  /**
   * @param request - CancelAsyncModifyLoginEmailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelAsyncModifyLoginEmailResponse
   */
  async cancelAsyncModifyLoginEmailWithOptions(request: $_model.CancelAsyncModifyLoginEmailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelAsyncModifyLoginEmailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mpk)) {
      query["Mpk"] = request.mpk;
    }

    if (!$dara.isNull(request.traceNo)) {
      query["TraceNo"] = request.traceNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelAsyncModifyLoginEmail",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelAsyncModifyLoginEmailResponse>(await this.callApi(params, req, runtime), new $_model.CancelAsyncModifyLoginEmailResponse({}));
  }

  /**
   * @param request - CancelAsyncModifyLoginEmailRequest
   * @returns CancelAsyncModifyLoginEmailResponse
   */
  async cancelAsyncModifyLoginEmail(request: $_model.CancelAsyncModifyLoginEmailRequest): Promise<$_model.CancelAsyncModifyLoginEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelAsyncModifyLoginEmailWithOptions(request, runtime);
  }

  /**
   * @param request - ChangeAgAccountNationalityCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeAgAccountNationalityCodeResponse
   */
  async changeAgAccountNationalityCodeWithOptions(request: $_model.ChangeAgAccountNationalityCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeAgAccountNationalityCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.mpk)) {
      query["Mpk"] = request.mpk;
    }

    if (!$dara.isNull(request.nationalityCode)) {
      query["NationalityCode"] = request.nationalityCode;
    }

    if (!$dara.isNull(request.PK)) {
      query["PK"] = request.PK;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeAgAccountNationalityCode",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeAgAccountNationalityCodeResponse>(await this.callApi(params, req, runtime), new $_model.ChangeAgAccountNationalityCodeResponse({}));
  }

  /**
   * @param request - ChangeAgAccountNationalityCodeRequest
   * @returns ChangeAgAccountNationalityCodeResponse
   */
  async changeAgAccountNationalityCode(request: $_model.ChangeAgAccountNationalityCodeRequest): Promise<$_model.ChangeAgAccountNationalityCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeAgAccountNationalityCodeWithOptions(request, runtime);
  }

  /**
   * @param request - ChangeAgSecurityEmailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeAgSecurityEmailResponse
   */
  async changeAgSecurityEmailWithOptions(request: $_model.ChangeAgSecurityEmailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeAgSecurityEmailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.mpk)) {
      query["Mpk"] = request.mpk;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    if (!$dara.isNull(request.securityEmail)) {
      query["SecurityEmail"] = request.securityEmail;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeAgSecurityEmail",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeAgSecurityEmailResponse>(await this.callApi(params, req, runtime), new $_model.ChangeAgSecurityEmailResponse({}));
  }

  /**
   * @param request - ChangeAgSecurityEmailRequest
   * @returns ChangeAgSecurityEmailResponse
   */
  async changeAgSecurityEmail(request: $_model.ChangeAgSecurityEmailRequest): Promise<$_model.ChangeAgSecurityEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeAgSecurityEmailWithOptions(request, runtime);
  }

  /**
   * @param request - ChangeAgSecurityMobileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeAgSecurityMobileResponse
   */
  async changeAgSecurityMobileWithOptions(request: $_model.ChangeAgSecurityMobileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeAgSecurityMobileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.mpk)) {
      query["Mpk"] = request.mpk;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    if (!$dara.isNull(request.securityMobile)) {
      query["SecurityMobile"] = request.securityMobile;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeAgSecurityMobile",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeAgSecurityMobileResponse>(await this.callApi(params, req, runtime), new $_model.ChangeAgSecurityMobileResponse({}));
  }

  /**
   * @param request - ChangeAgSecurityMobileRequest
   * @returns ChangeAgSecurityMobileResponse
   */
  async changeAgSecurityMobile(request: $_model.ChangeAgSecurityMobileRequest): Promise<$_model.ChangeAgSecurityMobileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeAgSecurityMobileWithOptions(request, runtime);
  }

  /**
   * @param request - CreateAccountProfileInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccountProfileInfoResponse
   */
  async createAccountProfileInfoWithOptions(request: $_model.CreateAccountProfileInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccountProfileInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountJson)) {
      query["AccountJson"] = request.accountJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccountProfileInfo",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAccountProfileInfoResponse>(await this.callApi(params, req, runtime), new $_model.CreateAccountProfileInfoResponse({}));
  }

  /**
   * @param request - CreateAccountProfileInfoRequest
   * @returns CreateAccountProfileInfoResponse
   */
  async createAccountProfileInfo(request: $_model.CreateAccountProfileInfoRequest): Promise<$_model.CreateAccountProfileInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccountProfileInfoWithOptions(request, runtime);
  }

  /**
   * @param request - CreateAgAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAgAccountResponse
   */
  async createAgAccountWithOptions(request: $_model.CreateAgAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.loginEmail)) {
      query["LoginEmail"] = request.loginEmail;
    }

    if (!$dara.isNull(request.mpk)) {
      query["Mpk"] = request.mpk;
    }

    if (!$dara.isNull(request.nationCode)) {
      query["NationCode"] = request.nationCode;
    }

    if (!$dara.isNull(request.own)) {
      query["Own"] = request.own;
    }

    if (!$dara.isNull(request.realParentPk)) {
      query["RealParentPk"] = request.realParentPk;
    }

    if (!$dara.isNull(request.securityMobile)) {
      query["SecurityMobile"] = request.securityMobile;
    }

    if (!$dara.isNull(request.showNickName)) {
      query["ShowNickName"] = request.showNickName;
    }

    if (!$dara.isNull(request.siteNick)) {
      query["SiteNick"] = request.siteNick;
    }

    if (!$dara.isNull(request.srcAccountInfo)) {
      query["srcAccountInfo"] = request.srcAccountInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAgAccount",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAgAccountResponse>(await this.callApi(params, req, runtime), new $_model.CreateAgAccountResponse({}));
  }

  /**
   * @param request - CreateAgAccountRequest
   * @returns CreateAgAccountResponse
   */
  async createAgAccount(request: $_model.CreateAgAccountRequest): Promise<$_model.CreateAgAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAgAccountWithOptions(request, runtime);
  }

  /**
   * @param request - CreateContacterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateContacterResponse
   */
  async createContacterWithOptions(request: $_model.CreateContacterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateContacterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contacterAddress)) {
      query["ContacterAddress"] = request.contacterAddress;
    }

    if (!$dara.isNull(request.contacterDingding)) {
      query["ContacterDingding"] = request.contacterDingding;
    }

    if (!$dara.isNull(request.contacterEmail)) {
      query["ContacterEmail"] = request.contacterEmail;
    }

    if (!$dara.isNull(request.contacterMobile)) {
      query["ContacterMobile"] = request.contacterMobile;
    }

    if (!$dara.isNull(request.contacterName)) {
      query["ContacterName"] = request.contacterName;
    }

    if (!$dara.isNull(request.contacterPosition)) {
      query["ContacterPosition"] = request.contacterPosition;
    }

    if (!$dara.isNull(request.contacterStaffNo)) {
      query["ContacterStaffNo"] = request.contacterStaffNo;
    }

    if (!$dara.isNull(request.contacterType)) {
      query["ContacterType"] = request.contacterType;
    }

    if (!$dara.isNull(request.contacterWangwang)) {
      query["ContacterWangwang"] = request.contacterWangwang;
    }

    if (!$dara.isNull(request.emailConfirmed)) {
      query["EmailConfirmed"] = request.emailConfirmed;
    }

    if (!$dara.isNull(request.mobileConfirmed)) {
      query["MobileConfirmed"] = request.mobileConfirmed;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateContacter",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateContacterResponse>(await this.callApi(params, req, runtime), new $_model.CreateContacterResponse({}));
  }

  /**
   * @param request - CreateContacterRequest
   * @returns CreateContacterResponse
   */
  async createContacter(request: $_model.CreateContacterRequest): Promise<$_model.CreateContacterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createContacterWithOptions(request, runtime);
  }

  /**
   * @param request - CreateRealNameCertificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRealNameCertificationResponse
   */
  async createRealNameCertificationWithOptions(request: $_model.CreateRealNameCertificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRealNameCertificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountCertifyType)) {
      query["AccountCertifyType"] = request.accountCertifyType;
    }

    if (!$dara.isNull(request.corporateLicenseNumber)) {
      query["CorporateLicenseNumber"] = request.corporateLicenseNumber;
    }

    if (!$dara.isNull(request.corporateName)) {
      query["CorporateName"] = request.corporateName;
    }

    if (!$dara.isNull(request.licenseNumber)) {
      query["LicenseNumber"] = request.licenseNumber;
    }

    if (!$dara.isNull(request.licenseType)) {
      query["LicenseType"] = request.licenseType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRealNameCertification",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRealNameCertificationResponse>(await this.callApi(params, req, runtime), new $_model.CreateRealNameCertificationResponse({}));
  }

  /**
   * @param request - CreateRealNameCertificationRequest
   * @returns CreateRealNameCertificationResponse
   */
  async createRealNameCertification(request: $_model.CreateRealNameCertificationRequest): Promise<$_model.CreateRealNameCertificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRealNameCertificationWithOptions(request, runtime);
  }

  /**
   * @param request - CustomerSensitiveInfoLogicalDeleteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CustomerSensitiveInfoLogicalDeleteResponse
   */
  async customerSensitiveInfoLogicalDeleteWithOptions(request: $_model.CustomerSensitiveInfoLogicalDeleteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CustomerSensitiveInfoLogicalDeleteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CustomerSensitiveInfoLogicalDelete",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CustomerSensitiveInfoLogicalDeleteResponse>(await this.callApi(params, req, runtime), new $_model.CustomerSensitiveInfoLogicalDeleteResponse({}));
  }

  /**
   * @param request - CustomerSensitiveInfoLogicalDeleteRequest
   * @returns CustomerSensitiveInfoLogicalDeleteResponse
   */
  async customerSensitiveInfoLogicalDelete(request: $_model.CustomerSensitiveInfoLogicalDeleteRequest): Promise<$_model.CustomerSensitiveInfoLogicalDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.customerSensitiveInfoLogicalDeleteWithOptions(request, runtime);
  }

  /**
   * @param request - CustomerSensitiveInfoPhysicalDeleteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CustomerSensitiveInfoPhysicalDeleteResponse
   */
  async customerSensitiveInfoPhysicalDeleteWithOptions(request: $_model.CustomerSensitiveInfoPhysicalDeleteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CustomerSensitiveInfoPhysicalDeleteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CustomerSensitiveInfoPhysicalDelete",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CustomerSensitiveInfoPhysicalDeleteResponse>(await this.callApi(params, req, runtime), new $_model.CustomerSensitiveInfoPhysicalDeleteResponse({}));
  }

  /**
   * @param request - CustomerSensitiveInfoPhysicalDeleteRequest
   * @returns CustomerSensitiveInfoPhysicalDeleteResponse
   */
  async customerSensitiveInfoPhysicalDelete(request: $_model.CustomerSensitiveInfoPhysicalDeleteRequest): Promise<$_model.CustomerSensitiveInfoPhysicalDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.customerSensitiveInfoPhysicalDeleteWithOptions(request, runtime);
  }

  /**
   * 同步Del缓存操作
   * 
   * @param request - DelCacheOperateSyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DelCacheOperateSyncResponse
   */
  async delCacheOperateSyncWithOptions(request: $_model.DelCacheOperateSyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DelCacheOperateSyncResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DelCacheOperateSync",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DelCacheOperateSyncResponse>(await this.callApi(params, req, runtime), new $_model.DelCacheOperateSyncResponse({}));
  }

  /**
   * 同步Del缓存操作
   * 
   * @param request - DelCacheOperateSyncRequest
   * @returns DelCacheOperateSyncResponse
   */
  async delCacheOperateSync(request: $_model.DelCacheOperateSyncRequest): Promise<$_model.DelCacheOperateSyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.delCacheOperateSyncWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteContacterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteContacterResponse
   */
  async deleteContacterWithOptions(request: $_model.DeleteContacterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContacterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contacterId)) {
      query["ContacterId"] = request.contacterId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteContacter",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteContacterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteContacterResponse({}));
  }

  /**
   * @param request - DeleteContacterRequest
   * @returns DeleteContacterResponse
   */
  async deleteContacter(request: $_model.DeleteContacterRequest): Promise<$_model.DeleteContacterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteContacterWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteCustomerLabelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomerLabelResponse
   */
  async deleteCustomerLabelWithOptions(request: $_model.DeleteCustomerLabelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomerLabelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.labelSeries)) {
      query["LabelSeries"] = request.labelSeries;
    }

    if (!$dara.isNull(request.labelTypes)) {
      query["LabelTypes"] = request.labelTypes;
    }

    if (!$dara.isNull(request.organization)) {
      query["Organization"] = request.organization;
    }

    if (!$dara.isNull(request.PK)) {
      query["PK"] = request.PK;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomerLabel",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomerLabelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomerLabelResponse({}));
  }

  /**
   * @param request - DeleteCustomerLabelRequest
   * @returns DeleteCustomerLabelResponse
   */
  async deleteCustomerLabel(request: $_model.DeleteCustomerLabelRequest): Promise<$_model.DeleteCustomerLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomerLabelWithOptions(request, runtime);
  }

  /**
   * 根据outerId查询是否存在绑定关系
   * 
   * @param request - ExistBindsByOuterIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExistBindsByOuterIdResponse
   */
  async existBindsByOuterIdWithOptions(request: $_model.ExistBindsByOuterIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExistBindsByOuterIdResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExistBindsByOuterId",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExistBindsByOuterIdResponse>(await this.callApi(params, req, runtime), new $_model.ExistBindsByOuterIdResponse({}));
  }

  /**
   * 根据outerId查询是否存在绑定关系
   * 
   * @param request - ExistBindsByOuterIdRequest
   * @returns ExistBindsByOuterIdResponse
   */
  async existBindsByOuterId(request: $_model.ExistBindsByOuterIdRequest): Promise<$_model.ExistBindsByOuterIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.existBindsByOuterIdWithOptions(request, runtime);
  }

  /**
   * @param request - FindAllContacterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FindAllContacterResponse
   */
  async findAllContacterWithOptions(request: $_model.FindAllContacterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FindAllContacterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.localeString)) {
      query["LocaleString"] = request.localeString;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FindAllContacter",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FindAllContacterResponse>(await this.callApi(params, req, runtime), new $_model.FindAllContacterResponse({}));
  }

  /**
   * @param request - FindAllContacterRequest
   * @returns FindAllContacterResponse
   */
  async findAllContacter(request: $_model.FindAllContacterRequest): Promise<$_model.FindAllContacterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.findAllContacterWithOptions(request, runtime);
  }

  /**
   * @param request - FindBizCategoryConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FindBizCategoryConfigResponse
   */
  async findBizCategoryConfigWithOptions(request: $_model.FindBizCategoryConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FindBizCategoryConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.localeString)) {
      query["LocaleString"] = request.localeString;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FindBizCategoryConfig",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FindBizCategoryConfigResponse>(await this.callApi(params, req, runtime), new $_model.FindBizCategoryConfigResponse({}));
  }

  /**
   * @param request - FindBizCategoryConfigRequest
   * @returns FindBizCategoryConfigResponse
   */
  async findBizCategoryConfig(request: $_model.FindBizCategoryConfigRequest): Promise<$_model.FindBizCategoryConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.findBizCategoryConfigWithOptions(request, runtime);
  }

  /**
   * @param request - FindContacterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FindContacterResponse
   */
  async findContacterWithOptions(request: $_model.FindContacterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FindContacterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contacterId)) {
      query["ContacterId"] = request.contacterId;
    }

    if (!$dara.isNull(request.localeString)) {
      query["LocaleString"] = request.localeString;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FindContacter",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FindContacterResponse>(await this.callApi(params, req, runtime), new $_model.FindContacterResponse({}));
  }

  /**
   * @param request - FindContacterRequest
   * @returns FindContacterResponse
   */
  async findContacter(request: $_model.FindContacterRequest): Promise<$_model.FindContacterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.findContacterWithOptions(request, runtime);
  }

  /**
   * @param request - FindCustomerInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FindCustomerInfoResponse
   */
  async findCustomerInfoWithOptions(request: $_model.FindCustomerInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FindCustomerInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FindCustomerInfo",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FindCustomerInfoResponse>(await this.callApi(params, req, runtime), new $_model.FindCustomerInfoResponse({}));
  }

  /**
   * @param request - FindCustomerInfoRequest
   * @returns FindCustomerInfoResponse
   */
  async findCustomerInfo(request: $_model.FindCustomerInfoRequest): Promise<$_model.FindCustomerInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.findCustomerInfoWithOptions(request, runtime);
  }

  /**
   * @param request - FindCustomerSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FindCustomerSnapshotResponse
   */
  async findCustomerSnapshotWithOptions(request: $_model.FindCustomerSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FindCustomerSnapshotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.infoType)) {
      query["InfoType"] = request.infoType;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FindCustomerSnapshot",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FindCustomerSnapshotResponse>(await this.callApi(params, req, runtime), new $_model.FindCustomerSnapshotResponse({}));
  }

  /**
   * @param request - FindCustomerSnapshotRequest
   * @returns FindCustomerSnapshotResponse
   */
  async findCustomerSnapshot(request: $_model.FindCustomerSnapshotRequest): Promise<$_model.FindCustomerSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.findCustomerSnapshotWithOptions(request, runtime);
  }

  /**
   * @param request - FindFinanceTaxRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FindFinanceTaxResponse
   */
  async findFinanceTaxWithOptions(request: $_model.FindFinanceTaxRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FindFinanceTaxResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.HId)) {
      query["HId"] = request.HId;
    }

    if (!$dara.isNull(request.taxVersion)) {
      query["TaxVersion"] = request.taxVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FindFinanceTax",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FindFinanceTaxResponse>(await this.callApi(params, req, runtime), new $_model.FindFinanceTaxResponse({}));
  }

  /**
   * @param request - FindFinanceTaxRequest
   * @returns FindFinanceTaxResponse
   */
  async findFinanceTax(request: $_model.FindFinanceTaxRequest): Promise<$_model.FindFinanceTaxResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.findFinanceTaxWithOptions(request, runtime);
  }

  /**
   * @param request - FindFinanceTaxDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FindFinanceTaxDetailResponse
   */
  async findFinanceTaxDetailWithOptions(request: $_model.FindFinanceTaxDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FindFinanceTaxDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.kpId)) {
      query["KpId"] = request.kpId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FindFinanceTaxDetail",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FindFinanceTaxDetailResponse>(await this.callApi(params, req, runtime), new $_model.FindFinanceTaxDetailResponse({}));
  }

  /**
   * @param request - FindFinanceTaxDetailRequest
   * @returns FindFinanceTaxDetailResponse
   */
  async findFinanceTaxDetail(request: $_model.FindFinanceTaxDetailRequest): Promise<$_model.FindFinanceTaxDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.findFinanceTaxDetailWithOptions(request, runtime);
  }

  /**
   * 登录过程中根据HID匹配Pk的历史逻辑
   * 
   * @param request - FindPkByHidForLoginWithLegacyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FindPkByHidForLoginWithLegacyResponse
   */
  async findPkByHidForLoginWithLegacyWithOptions(request: $_model.FindPkByHidForLoginWithLegacyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FindPkByHidForLoginWithLegacyResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FindPkByHidForLoginWithLegacy",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FindPkByHidForLoginWithLegacyResponse>(await this.callApi(params, req, runtime), new $_model.FindPkByHidForLoginWithLegacyResponse({}));
  }

  /**
   * 登录过程中根据HID匹配Pk的历史逻辑
   * 
   * @param request - FindPkByHidForLoginWithLegacyRequest
   * @returns FindPkByHidForLoginWithLegacyResponse
   */
  async findPkByHidForLoginWithLegacy(request: $_model.FindPkByHidForLoginWithLegacyRequest): Promise<$_model.FindPkByHidForLoginWithLegacyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.findPkByHidForLoginWithLegacyWithOptions(request, runtime);
  }

  /**
   * @param request - ForbiddenAgAccountLoginRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ForbiddenAgAccountLoginResponse
   */
  async forbiddenAgAccountLoginWithOptions(request: $_model.ForbiddenAgAccountLoginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ForbiddenAgAccountLoginResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agAccountType)) {
      query["AgAccountType"] = request.agAccountType;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.mpk)) {
      query["Mpk"] = request.mpk;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ForbiddenAgAccountLogin",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ForbiddenAgAccountLoginResponse>(await this.callApi(params, req, runtime), new $_model.ForbiddenAgAccountLoginResponse({}));
  }

  /**
   * @param request - ForbiddenAgAccountLoginRequest
   * @returns ForbiddenAgAccountLoginResponse
   */
  async forbiddenAgAccountLogin(request: $_model.ForbiddenAgAccountLoginRequest): Promise<$_model.ForbiddenAgAccountLoginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.forbiddenAgAccountLoginWithOptions(request, runtime);
  }

  /**
   * 获取实名认证url
   * 
   * @param request - GenerateAliyunCertUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateAliyunCertUrlResponse
   */
  async generateAliyunCertUrlWithOptions(request: $_model.GenerateAliyunCertUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateAliyunCertUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunPk)) {
      query["AliyunPk"] = request.aliyunPk;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.applyChannel)) {
      query["ApplyChannel"] = request.applyChannel;
    }

    if (!$dara.isNull(request.applyType)) {
      query["ApplyType"] = request.applyType;
    }

    if (!$dara.isNull(request.callback)) {
      query["Callback"] = request.callback;
    }

    if (!$dara.isNull(request.certWay)) {
      query["CertWay"] = request.certWay;
    }

    if (!$dara.isNull(request.ignoreAlreadyCert)) {
      query["IgnoreAlreadyCert"] = request.ignoreAlreadyCert;
    }

    if (!$dara.isNull(request.isMobile)) {
      query["IsMobile"] = request.isMobile;
    }

    if (!$dara.isNull(request.isOpenApp)) {
      query["IsOpenApp"] = request.isOpenApp;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.subjectType)) {
      query["SubjectType"] = request.subjectType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateAliyunCertUrl",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateAliyunCertUrlResponse>(await this.callApi(params, req, runtime), new $_model.GenerateAliyunCertUrlResponse({}));
  }

  /**
   * 获取实名认证url
   * 
   * @param request - GenerateAliyunCertUrlRequest
   * @returns GenerateAliyunCertUrlResponse
   */
  async generateAliyunCertUrl(request: $_model.GenerateAliyunCertUrlRequest): Promise<$_model.GenerateAliyunCertUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateAliyunCertUrlWithOptions(request, runtime);
  }

  /**
   * @param request - GetAgAccountAkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgAccountAkResponse
   */
  async getAgAccountAkWithOptions(request: $_model.GetAgAccountAkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgAccountAkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agAccountType)) {
      query["AgAccountType"] = request.agAccountType;
    }

    if (!$dara.isNull(request.mpk)) {
      query["Mpk"] = request.mpk;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgAccountAk",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgAccountAkResponse>(await this.callApi(params, req, runtime), new $_model.GetAgAccountAkResponse({}));
  }

  /**
   * @param request - GetAgAccountAkRequest
   * @returns GetAgAccountAkResponse
   */
  async getAgAccountAk(request: $_model.GetAgAccountAkRequest): Promise<$_model.GetAgAccountAkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgAccountAkWithOptions(request, runtime);
  }

  /**
   * 申请ag注销
   * 
   * @param request - GetAgOneKeyDeleteTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgOneKeyDeleteTaskResponse
   */
  async getAgOneKeyDeleteTaskWithOptions(request: $_model.GetAgOneKeyDeleteTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgOneKeyDeleteTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agAccountType)) {
      query["AgAccountType"] = request.agAccountType;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.mpk)) {
      query["Mpk"] = request.mpk;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgOneKeyDeleteTask",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgOneKeyDeleteTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetAgOneKeyDeleteTaskResponse({}));
  }

  /**
   * 申请ag注销
   * 
   * @param request - GetAgOneKeyDeleteTaskRequest
   * @returns GetAgOneKeyDeleteTaskResponse
   */
  async getAgOneKeyDeleteTask(request: $_model.GetAgOneKeyDeleteTaskRequest): Promise<$_model.GetAgOneKeyDeleteTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgOneKeyDeleteTaskWithOptions(request, runtime);
  }

  /**
   * @param request - GetAgRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgRelationResponse
   */
  async getAgRelationWithOptions(request: $_model.GetAgRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgRelationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agAccountType)) {
      query["AgAccountType"] = request.agAccountType;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgRelation",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgRelationResponse>(await this.callApi(params, req, runtime), new $_model.GetAgRelationResponse({}));
  }

  /**
   * @param request - GetAgRelationRequest
   * @returns GetAgRelationResponse
   */
  async getAgRelation(request: $_model.GetAgRelationRequest): Promise<$_model.GetAgRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgRelationWithOptions(request, runtime);
  }

  /**
   * @param request - GetAliyunIdByPkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAliyunIdByPkResponse
   */
  async getAliyunIdByPkWithOptions(request: $_model.GetAliyunIdByPkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAliyunIdByPkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAliyunIdByPk",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAliyunIdByPkResponse>(await this.callApi(params, req, runtime), new $_model.GetAliyunIdByPkResponse({}));
  }

  /**
   * @param request - GetAliyunIdByPkRequest
   * @returns GetAliyunIdByPkResponse
   */
  async getAliyunIdByPk(request: $_model.GetAliyunIdByPkRequest): Promise<$_model.GetAliyunIdByPkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAliyunIdByPkWithOptions(request, runtime);
  }

  /**
   * @param request - GetAliyunPKByAliyunIDRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAliyunPKByAliyunIDResponse
   */
  async getAliyunPKByAliyunIDWithOptions(request: $_model.GetAliyunPKByAliyunIDRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAliyunPKByAliyunIDResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunId)) {
      query["AliyunId"] = request.aliyunId;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.havanaId)) {
      query["HavanaId"] = request.havanaId;
    }

    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.PK)) {
      query["PK"] = request.PK;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAliyunPKByAliyunID",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAliyunPKByAliyunIDResponse>(await this.callApi(params, req, runtime), new $_model.GetAliyunPKByAliyunIDResponse({}));
  }

  /**
   * @param request - GetAliyunPKByAliyunIDRequest
   * @returns GetAliyunPKByAliyunIDResponse
   */
  async getAliyunPKByAliyunID(request: $_model.GetAliyunPKByAliyunIDRequest): Promise<$_model.GetAliyunPKByAliyunIDResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAliyunPKByAliyunIDWithOptions(request, runtime);
  }

  /**
   * @param request - GetCustomerCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomerCategoryResponse
   */
  async getCustomerCategoryWithOptions(request: $_model.GetCustomerCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomerCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.localeString)) {
      query["LocaleString"] = request.localeString;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomerCategory",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCustomerCategoryResponse>(await this.callApi(params, req, runtime), new $_model.GetCustomerCategoryResponse({}));
  }

  /**
   * @param request - GetCustomerCategoryRequest
   * @returns GetCustomerCategoryResponse
   */
  async getCustomerCategory(request: $_model.GetCustomerCategoryRequest): Promise<$_model.GetCustomerCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCustomerCategoryWithOptions(request, runtime);
  }

  /**
   * @param request - GetCustomerCategoryDictionaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomerCategoryDictionaryResponse
   */
  async getCustomerCategoryDictionaryWithOptions(request: $_model.GetCustomerCategoryDictionaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomerCategoryDictionaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomerCategoryDictionary",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCustomerCategoryDictionaryResponse>(await this.callApi(params, req, runtime), new $_model.GetCustomerCategoryDictionaryResponse({}));
  }

  /**
   * @param request - GetCustomerCategoryDictionaryRequest
   * @returns GetCustomerCategoryDictionaryResponse
   */
  async getCustomerCategoryDictionary(request: $_model.GetCustomerCategoryDictionaryRequest): Promise<$_model.GetCustomerCategoryDictionaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCustomerCategoryDictionaryWithOptions(request, runtime);
  }

  /**
   * @param request - GetCustomerInformationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomerInformationResponse
   */
  async getCustomerInformationWithOptions(request: $_model.GetCustomerInformationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomerInformationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomerInformation",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCustomerInformationResponse>(await this.callApi(params, req, runtime), new $_model.GetCustomerInformationResponse({}));
  }

  /**
   * @param request - GetCustomerInformationRequest
   * @returns GetCustomerInformationResponse
   */
  async getCustomerInformation(request: $_model.GetCustomerInformationRequest): Promise<$_model.GetCustomerInformationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCustomerInformationWithOptions(request, runtime);
  }

  /**
   * @param request - GetDingTalkUserOrgByAliyunTmpCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDingTalkUserOrgByAliyunTmpCodeResponse
   */
  async getDingTalkUserOrgByAliyunTmpCodeWithOptions(request: $_model.GetDingTalkUserOrgByAliyunTmpCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDingTalkUserOrgByAliyunTmpCodeResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDingTalkUserOrgByAliyunTmpCode",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDingTalkUserOrgByAliyunTmpCodeResponse>(await this.callApi(params, req, runtime), new $_model.GetDingTalkUserOrgByAliyunTmpCodeResponse({}));
  }

  /**
   * @param request - GetDingTalkUserOrgByAliyunTmpCodeRequest
   * @returns GetDingTalkUserOrgByAliyunTmpCodeResponse
   */
  async getDingTalkUserOrgByAliyunTmpCode(request: $_model.GetDingTalkUserOrgByAliyunTmpCodeRequest): Promise<$_model.GetDingTalkUserOrgByAliyunTmpCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDingTalkUserOrgByAliyunTmpCodeWithOptions(request, runtime);
  }

  /**
   * @param request - GetIdentityRegistrationByCustomerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIdentityRegistrationByCustomerResponse
   */
  async getIdentityRegistrationByCustomerWithOptions(request: $_model.GetIdentityRegistrationByCustomerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIdentityRegistrationByCustomerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerId)) {
      query["CustomerId"] = request.customerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIdentityRegistrationByCustomer",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIdentityRegistrationByCustomerResponse>(await this.callApi(params, req, runtime), new $_model.GetIdentityRegistrationByCustomerResponse({}));
  }

  /**
   * @param request - GetIdentityRegistrationByCustomerRequest
   * @returns GetIdentityRegistrationByCustomerResponse
   */
  async getIdentityRegistrationByCustomer(request: $_model.GetIdentityRegistrationByCustomerRequest): Promise<$_model.GetIdentityRegistrationByCustomerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIdentityRegistrationByCustomerWithOptions(request, runtime);
  }

  /**
   * @param request - GetProfileTypeByPkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProfileTypeByPkResponse
   */
  async getProfileTypeByPkWithOptions(request: $_model.GetProfileTypeByPkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProfileTypeByPkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProfileTypeByPk",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProfileTypeByPkResponse>(await this.callApi(params, req, runtime), new $_model.GetProfileTypeByPkResponse({}));
  }

  /**
   * @param request - GetProfileTypeByPkRequest
   * @returns GetProfileTypeByPkResponse
   */
  async getProfileTypeByPk(request: $_model.GetProfileTypeByPkRequest): Promise<$_model.GetProfileTypeByPkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProfileTypeByPkWithOptions(request, runtime);
  }

  /**
   * @param request - GetUploadIdentityRegistrationDocConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUploadIdentityRegistrationDocConfigResponse
   */
  async getUploadIdentityRegistrationDocConfigWithOptions(request: $_model.GetUploadIdentityRegistrationDocConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUploadIdentityRegistrationDocConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerId)) {
      query["CustomerId"] = request.customerId;
    }

    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUploadIdentityRegistrationDocConfig",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUploadIdentityRegistrationDocConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetUploadIdentityRegistrationDocConfigResponse({}));
  }

  /**
   * @param request - GetUploadIdentityRegistrationDocConfigRequest
   * @returns GetUploadIdentityRegistrationDocConfigResponse
   */
  async getUploadIdentityRegistrationDocConfig(request: $_model.GetUploadIdentityRegistrationDocConfigRequest): Promise<$_model.GetUploadIdentityRegistrationDocConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUploadIdentityRegistrationDocConfigWithOptions(request, runtime);
  }

  /**
   * IncrBy缓存操作
   * 
   * @param request - IncrByCacheOperateSyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IncrByCacheOperateSyncResponse
   */
  async incrByCacheOperateSyncWithOptions(request: $_model.IncrByCacheOperateSyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.IncrByCacheOperateSyncResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.defaultValue)) {
      query["DefaultValue"] = request.defaultValue;
    }

    if (!$dara.isNull(request.expireSeconds)) {
      query["ExpireSeconds"] = request.expireSeconds;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.step)) {
      query["Step"] = request.step;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IncrByCacheOperateSync",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.IncrByCacheOperateSyncResponse>(await this.callApi(params, req, runtime), new $_model.IncrByCacheOperateSyncResponse({}));
  }

  /**
   * IncrBy缓存操作
   * 
   * @param request - IncrByCacheOperateSyncRequest
   * @returns IncrByCacheOperateSyncResponse
   */
  async incrByCacheOperateSync(request: $_model.IncrByCacheOperateSyncRequest): Promise<$_model.IncrByCacheOperateSyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.incrByCacheOperateSyncWithOptions(request, runtime);
  }

  /**
   * 申请ag注销
   * 
   * @param request - JudgeAgExistQuietPeriodRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns JudgeAgExistQuietPeriodResponse
   */
  async judgeAgExistQuietPeriodWithOptions(request: $_model.JudgeAgExistQuietPeriodRequest, runtime: $dara.RuntimeOptions): Promise<$_model.JudgeAgExistQuietPeriodResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agAccountType)) {
      query["AgAccountType"] = request.agAccountType;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.mpk)) {
      query["Mpk"] = request.mpk;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "JudgeAgExistQuietPeriod",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.JudgeAgExistQuietPeriodResponse>(await this.callApi(params, req, runtime), new $_model.JudgeAgExistQuietPeriodResponse({}));
  }

  /**
   * 申请ag注销
   * 
   * @param request - JudgeAgExistQuietPeriodRequest
   * @returns JudgeAgExistQuietPeriodResponse
   */
  async judgeAgExistQuietPeriod(request: $_model.JudgeAgExistQuietPeriodRequest): Promise<$_model.JudgeAgExistQuietPeriodResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.judgeAgExistQuietPeriodWithOptions(request, runtime);
  }

  /**
   * @param request - LoadRealNameInfoByPkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LoadRealNameInfoByPkResponse
   */
  async loadRealNameInfoByPkWithOptions(request: $_model.LoadRealNameInfoByPkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LoadRealNameInfoByPkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.PK)) {
      query["PK"] = request.PK;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LoadRealNameInfoByPk",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LoadRealNameInfoByPkResponse>(await this.callApi(params, req, runtime), new $_model.LoadRealNameInfoByPkResponse({}));
  }

  /**
   * @param request - LoadRealNameInfoByPkRequest
   * @returns LoadRealNameInfoByPkResponse
   */
  async loadRealNameInfoByPk(request: $_model.LoadRealNameInfoByPkRequest): Promise<$_model.LoadRealNameInfoByPkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.loadRealNameInfoByPkWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - MapFromHavanaBindIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MapFromHavanaBindIdResponse
   */
  async mapFromHavanaBindIdWithOptions(tmpReq: $_model.MapFromHavanaBindIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MapFromHavanaBindIdResponse> {
    tmpReq.validate();
    let request = new $_model.MapFromHavanaBindIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.havanaBindStations)) {
      request.havanaBindStationsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.havanaBindStations, "HavanaBindStations", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.havanaBindId)) {
      query["HavanaBindId"] = request.havanaBindId;
    }

    if (!$dara.isNull(request.havanaBindStationsShrink)) {
      query["HavanaBindStations"] = request.havanaBindStationsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MapFromHavanaBindId",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MapFromHavanaBindIdResponse>(await this.callApi(params, req, runtime), new $_model.MapFromHavanaBindIdResponse({}));
  }

  /**
   * @param request - MapFromHavanaBindIdRequest
   * @returns MapFromHavanaBindIdResponse
   */
  async mapFromHavanaBindId(request: $_model.MapFromHavanaBindIdRequest): Promise<$_model.MapFromHavanaBindIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mapFromHavanaBindIdWithOptions(request, runtime);
  }

  /**
   * @param request - MapPkFromHidRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MapPkFromHidResponse
   */
  async mapPkFromHidWithOptions(request: $_model.MapPkFromHidRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MapPkFromHidResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.bid)) {
      query["Bid"] = request.bid;
    }

    if (!$dara.isNull(request.hid)) {
      query["Hid"] = request.hid;
    }

    if (!$dara.isNull(request.mappingScenes)) {
      query["MappingScenes"] = request.mappingScenes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MapPkFromHid",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MapPkFromHidResponse>(await this.callApi(params, req, runtime), new $_model.MapPkFromHidResponse({}));
  }

  /**
   * @param request - MapPkFromHidRequest
   * @returns MapPkFromHidResponse
   */
  async mapPkFromHid(request: $_model.MapPkFromHidRequest): Promise<$_model.MapPkFromHidResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mapPkFromHidWithOptions(request, runtime);
  }

  /**
   * @param request - MapPkToHidRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MapPkToHidResponse
   */
  async mapPkToHidWithOptions(request: $_model.MapPkToHidRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MapPkToHidResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.mappingScenes)) {
      query["MappingScenes"] = request.mappingScenes;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MapPkToHid",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MapPkToHidResponse>(await this.callApi(params, req, runtime), new $_model.MapPkToHidResponse({}));
  }

  /**
   * @param request - MapPkToHidRequest
   * @returns MapPkToHidResponse
   */
  async mapPkToHid(request: $_model.MapPkToHidRequest): Promise<$_model.MapPkToHidResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mapPkToHidWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - MapToHavanaBindIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MapToHavanaBindIdResponse
   */
  async mapToHavanaBindIdWithOptions(tmpReq: $_model.MapToHavanaBindIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MapToHavanaBindIdResponse> {
    tmpReq.validate();
    let request = new $_model.MapToHavanaBindIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.havanaBindStations)) {
      request.havanaBindStationsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.havanaBindStations, "HavanaBindStations", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.havanaBindStationsShrink)) {
      query["HavanaBindStations"] = request.havanaBindStationsShrink;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MapToHavanaBindId",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MapToHavanaBindIdResponse>(await this.callApi(params, req, runtime), new $_model.MapToHavanaBindIdResponse({}));
  }

  /**
   * @param request - MapToHavanaBindIdRequest
   * @returns MapToHavanaBindIdResponse
   */
  async mapToHavanaBindId(request: $_model.MapToHavanaBindIdRequest): Promise<$_model.MapToHavanaBindIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mapToHavanaBindIdWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyBizCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBizCategoryResponse
   */
  async modifyBizCategoryWithOptions(request: $_model.ModifyBizCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBizCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.paramList)) {
      query["ParamList"] = request.paramList;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBizCategory",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyBizCategoryResponse>(await this.callApi(params, req, runtime), new $_model.ModifyBizCategoryResponse({}));
  }

  /**
   * @param request - ModifyBizCategoryRequest
   * @returns ModifyBizCategoryResponse
   */
  async modifyBizCategory(request: $_model.ModifyBizCategoryRequest): Promise<$_model.ModifyBizCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBizCategoryWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyContacterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyContacterResponse
   */
  async modifyContacterWithOptions(request: $_model.ModifyContacterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyContacterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contacterAddress)) {
      query["ContacterAddress"] = request.contacterAddress;
    }

    if (!$dara.isNull(request.contacterDingding)) {
      query["ContacterDingding"] = request.contacterDingding;
    }

    if (!$dara.isNull(request.contacterEmail)) {
      query["ContacterEmail"] = request.contacterEmail;
    }

    if (!$dara.isNull(request.contacterId)) {
      query["ContacterId"] = request.contacterId;
    }

    if (!$dara.isNull(request.contacterMobile)) {
      query["ContacterMobile"] = request.contacterMobile;
    }

    if (!$dara.isNull(request.contacterName)) {
      query["ContacterName"] = request.contacterName;
    }

    if (!$dara.isNull(request.contacterPosition)) {
      query["ContacterPosition"] = request.contacterPosition;
    }

    if (!$dara.isNull(request.contacterStaffNo)) {
      query["ContacterStaffNo"] = request.contacterStaffNo;
    }

    if (!$dara.isNull(request.contacterType)) {
      query["ContacterType"] = request.contacterType;
    }

    if (!$dara.isNull(request.contacterWangwang)) {
      query["ContacterWangwang"] = request.contacterWangwang;
    }

    if (!$dara.isNull(request.emailConfirmed)) {
      query["EmailConfirmed"] = request.emailConfirmed;
    }

    if (!$dara.isNull(request.mobileConfirmed)) {
      query["MobileConfirmed"] = request.mobileConfirmed;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyContacter",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyContacterResponse>(await this.callApi(params, req, runtime), new $_model.ModifyContacterResponse({}));
  }

  /**
   * @param request - ModifyContacterRequest
   * @returns ModifyContacterResponse
   */
  async modifyContacter(request: $_model.ModifyContacterRequest): Promise<$_model.ModifyContacterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyContacterWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyCustomerInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCustomerInfoResponse
   */
  async modifyCustomerInfoWithOptions(request: $_model.ModifyCustomerInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCustomerInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.biz)) {
      query["Biz"] = request.biz;
    }

    if (!$dara.isNull(request.customerCategory)) {
      query["CustomerCategory"] = request.customerCategory;
    }

    if (!$dara.isNull(request.customerSubCategory)) {
      query["CustomerSubCategory"] = request.customerSubCategory;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.website)) {
      query["Website"] = request.website;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCustomerInfo",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCustomerInfoResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCustomerInfoResponse({}));
  }

  /**
   * @param request - ModifyCustomerInfoRequest
   * @returns ModifyCustomerInfoResponse
   */
  async modifyCustomerInfo(request: $_model.ModifyCustomerInfoRequest): Promise<$_model.ModifyCustomerInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCustomerInfoWithOptions(request, runtime);
  }

  /**
   * @param request - OperateFinanceTaxRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateFinanceTaxResponse
   */
  async operateFinanceTaxWithOptions(request: $_model.OperateFinanceTaxRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateFinanceTaxResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.financeTax)) {
      query["FinanceTax"] = request.financeTax;
    }

    if (!$dara.isNull(request.financeTaxCertificateImgName)) {
      query["FinanceTaxCertificateImgName"] = request.financeTaxCertificateImgName;
    }

    if (!$dara.isNull(request.HId)) {
      query["HId"] = request.HId;
    }

    if (!$dara.isNull(request.secondFinanceTax)) {
      query["SecondFinanceTax"] = request.secondFinanceTax;
    }

    if (!$dara.isNull(request.secondFinanceTaxCertificateImgName)) {
      query["SecondFinanceTaxCertificateImgName"] = request.secondFinanceTaxCertificateImgName;
    }

    if (!$dara.isNull(request.secondFinanceTaxCertificateImgUrl)) {
      query["SecondFinanceTaxCertificateImgUrl"] = request.secondFinanceTaxCertificateImgUrl;
    }

    if (!$dara.isNull(request.financeTaxCertificateImgUrl)) {
      query["financeTaxCertificateImgUrl"] = request.financeTaxCertificateImgUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateFinanceTax",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateFinanceTaxResponse>(await this.callApi(params, req, runtime), new $_model.OperateFinanceTaxResponse({}));
  }

  /**
   * @param request - OperateFinanceTaxRequest
   * @returns OperateFinanceTaxResponse
   */
  async operateFinanceTax(request: $_model.OperateFinanceTaxRequest): Promise<$_model.OperateFinanceTaxResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateFinanceTaxWithOptions(request, runtime);
  }

  /**
   * @param request - QueryAccountAddressInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAccountAddressInfoResponse
   */
  async queryAccountAddressInfoWithOptions(request: $_model.QueryAccountAddressInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAccountAddressInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressVersion)) {
      query["AddressVersion"] = request.addressVersion;
    }

    if (!$dara.isNull(request.havanaId)) {
      query["HavanaId"] = request.havanaId;
    }

    if (!$dara.isNull(request.PK)) {
      query["PK"] = request.PK;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAccountAddressInfo",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAccountAddressInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryAccountAddressInfoResponse({}));
  }

  /**
   * @param request - QueryAccountAddressInfoRequest
   * @returns QueryAccountAddressInfoResponse
   */
  async queryAccountAddressInfo(request: $_model.QueryAccountAddressInfoRequest): Promise<$_model.QueryAccountAddressInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAccountAddressInfoWithOptions(request, runtime);
  }

  /**
   * @param request - QueryAccountAddressInfoWithoutHavanaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAccountAddressInfoWithoutHavanaResponse
   */
  async queryAccountAddressInfoWithoutHavanaWithOptions(request: $_model.QueryAccountAddressInfoWithoutHavanaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAccountAddressInfoWithoutHavanaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressVersion)) {
      query["AddressVersion"] = request.addressVersion;
    }

    if (!$dara.isNull(request.havanaId)) {
      query["HavanaId"] = request.havanaId;
    }

    if (!$dara.isNull(request.PK)) {
      query["PK"] = request.PK;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAccountAddressInfoWithoutHavana",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAccountAddressInfoWithoutHavanaResponse>(await this.callApi(params, req, runtime), new $_model.QueryAccountAddressInfoWithoutHavanaResponse({}));
  }

  /**
   * @param request - QueryAccountAddressInfoWithoutHavanaRequest
   * @returns QueryAccountAddressInfoWithoutHavanaResponse
   */
  async queryAccountAddressInfoWithoutHavana(request: $_model.QueryAccountAddressInfoWithoutHavanaRequest): Promise<$_model.QueryAccountAddressInfoWithoutHavanaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAccountAddressInfoWithoutHavanaWithOptions(request, runtime);
  }

  /**
   * 查询账号收货地址
   * 
   * @param request - QueryAccountDeliveryAddressInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAccountDeliveryAddressInfoResponse
   */
  async queryAccountDeliveryAddressInfoWithOptions(request: $_model.QueryAccountDeliveryAddressInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAccountDeliveryAddressInfoResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAccountDeliveryAddressInfo",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAccountDeliveryAddressInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryAccountDeliveryAddressInfoResponse({}));
  }

  /**
   * 查询账号收货地址
   * 
   * @param request - QueryAccountDeliveryAddressInfoRequest
   * @returns QueryAccountDeliveryAddressInfoResponse
   */
  async queryAccountDeliveryAddressInfo(request: $_model.QueryAccountDeliveryAddressInfoRequest): Promise<$_model.QueryAccountDeliveryAddressInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAccountDeliveryAddressInfoWithOptions(request, runtime);
  }

  /**
   * @param request - QueryAccountProfileInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAccountProfileInfoResponse
   */
  async queryAccountProfileInfoWithOptions(request: $_model.QueryAccountProfileInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAccountProfileInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.havanaId)) {
      query["HavanaId"] = request.havanaId;
    }

    if (!$dara.isNull(request.PK)) {
      query["PK"] = request.PK;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAccountProfileInfo",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAccountProfileInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryAccountProfileInfoResponse({}));
  }

  /**
   * @param request - QueryAccountProfileInfoRequest
   * @returns QueryAccountProfileInfoResponse
   */
  async queryAccountProfileInfo(request: $_model.QueryAccountProfileInfoRequest): Promise<$_model.QueryAccountProfileInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAccountProfileInfoWithOptions(request, runtime);
  }

  /**
   * @param request - QueryAccountRealNameInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAccountRealNameInfoResponse
   */
  async queryAccountRealNameInfoWithOptions(request: $_model.QueryAccountRealNameInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAccountRealNameInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.PK)) {
      query["PK"] = request.PK;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAccountRealNameInfo",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAccountRealNameInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryAccountRealNameInfoResponse({}));
  }

  /**
   * @param request - QueryAccountRealNameInfoRequest
   * @returns QueryAccountRealNameInfoResponse
   */
  async queryAccountRealNameInfo(request: $_model.QueryAccountRealNameInfoRequest): Promise<$_model.QueryAccountRealNameInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAccountRealNameInfoWithOptions(request, runtime);
  }

  /**
   * @param request - QueryAccountSiteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAccountSiteResponse
   */
  async queryAccountSiteWithOptions(request: $_model.QueryAccountSiteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAccountSiteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAccountSite",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAccountSiteResponse>(await this.callApi(params, req, runtime), new $_model.QueryAccountSiteResponse({}));
  }

  /**
   * @param request - QueryAccountSiteRequest
   * @returns QueryAccountSiteResponse
   */
  async queryAccountSite(request: $_model.QueryAccountSiteRequest): Promise<$_model.QueryAccountSiteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAccountSiteWithOptions(request, runtime);
  }

  /**
   * @param request - QueryAccountTrueNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAccountTrueNameResponse
   */
  async queryAccountTrueNameWithOptions(request: $_model.QueryAccountTrueNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAccountTrueNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.havanaId)) {
      query["HavanaId"] = request.havanaId;
    }

    if (!$dara.isNull(request.PK)) {
      query["PK"] = request.PK;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAccountTrueName",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAccountTrueNameResponse>(await this.callApi(params, req, runtime), new $_model.QueryAccountTrueNameResponse({}));
  }

  /**
   * @param request - QueryAccountTrueNameRequest
   * @returns QueryAccountTrueNameResponse
   */
  async queryAccountTrueName(request: $_model.QueryAccountTrueNameRequest): Promise<$_model.QueryAccountTrueNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAccountTrueNameWithOptions(request, runtime);
  }

  /**
   * @param request - QueryAgAccountLoginPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAgAccountLoginPermissionResponse
   */
  async queryAgAccountLoginPermissionWithOptions(request: $_model.QueryAgAccountLoginPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAgAccountLoginPermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agAccountType)) {
      query["AgAccountType"] = request.agAccountType;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.mpk)) {
      query["Mpk"] = request.mpk;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAgAccountLoginPermission",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAgAccountLoginPermissionResponse>(await this.callApi(params, req, runtime), new $_model.QueryAgAccountLoginPermissionResponse({}));
  }

  /**
   * @param request - QueryAgAccountLoginPermissionRequest
   * @returns QueryAgAccountLoginPermissionResponse
   */
  async queryAgAccountLoginPermission(request: $_model.QueryAgAccountLoginPermissionRequest): Promise<$_model.QueryAgAccountLoginPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAgAccountLoginPermissionWithOptions(request, runtime);
  }

  /**
   * @param request - QueryAgRelationCountAndQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAgRelationCountAndQuotaResponse
   */
  async queryAgRelationCountAndQuotaWithOptions(request: $_model.QueryAgRelationCountAndQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAgRelationCountAndQuotaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.callerBid)) {
      body["CallerBid"] = request.callerBid;
    }

    if (!$dara.isNull(request.callerParentId)) {
      body["CallerParentId"] = request.callerParentId;
    }

    if (!$dara.isNull(request.callerType)) {
      body["CallerType"] = request.callerType;
    }

    if (!$dara.isNull(request.callerUid)) {
      body["CallerUid"] = request.callerUid;
    }

    if (!$dara.isNull(request.mpk)) {
      body["Mpk"] = request.mpk;
    }

    if (!$dara.isNull(request.nullObject)) {
      body["NullObject"] = request.nullObject;
    }

    if (!$dara.isNull(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.securityToken)) {
      body["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.sourceIp)) {
      body["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.stsTokenCallerBid)) {
      body["StsTokenCallerBid"] = request.stsTokenCallerBid;
    }

    if (!$dara.isNull(request.stsTokenCallerUid)) {
      body["StsTokenCallerUid"] = request.stsTokenCallerUid;
    }

    if (!$dara.isNull(request.stsTokenRoleId)) {
      body["StsTokenRoleId"] = request.stsTokenRoleId;
    }

    if (!$dara.isNull(request.version)) {
      body["Version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAgRelationCountAndQuota",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAgRelationCountAndQuotaResponse>(await this.callApi(params, req, runtime), new $_model.QueryAgRelationCountAndQuotaResponse({}));
  }

  /**
   * @param request - QueryAgRelationCountAndQuotaRequest
   * @returns QueryAgRelationCountAndQuotaResponse
   */
  async queryAgRelationCountAndQuota(request: $_model.QueryAgRelationCountAndQuotaRequest): Promise<$_model.QueryAgRelationCountAndQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAgRelationCountAndQuotaWithOptions(request, runtime);
  }

  /**
   * @param request - QueryAgSecurityMobileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAgSecurityMobileResponse
   */
  async queryAgSecurityMobileWithOptions(request: $_model.QueryAgSecurityMobileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAgSecurityMobileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agAccountType)) {
      query["AgAccountType"] = request.agAccountType;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.mpk)) {
      query["Mpk"] = request.mpk;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAgSecurityMobile",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAgSecurityMobileResponse>(await this.callApi(params, req, runtime), new $_model.QueryAgSecurityMobileResponse({}));
  }

  /**
   * @param request - QueryAgSecurityMobileRequest
   * @returns QueryAgSecurityMobileResponse
   */
  async queryAgSecurityMobile(request: $_model.QueryAgSecurityMobileRequest): Promise<$_model.QueryAgSecurityMobileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAgSecurityMobileWithOptions(request, runtime);
  }

  /**
   * @param request - QueryBindsByOuterIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryBindsByOuterIdResponse
   */
  async queryBindsByOuterIdWithOptions(request: $_model.QueryBindsByOuterIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryBindsByOuterIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.minorOuterId)) {
      query["MinorOuterId"] = request.minorOuterId;
    }

    if (!$dara.isNull(request.outerId)) {
      query["OuterId"] = request.outerId;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryBindsByOuterId",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryBindsByOuterIdResponse>(await this.callApi(params, req, runtime), new $_model.QueryBindsByOuterIdResponse({}));
  }

  /**
   * @param request - QueryBindsByOuterIdRequest
   * @returns QueryBindsByOuterIdResponse
   */
  async queryBindsByOuterId(request: $_model.QueryBindsByOuterIdRequest): Promise<$_model.QueryBindsByOuterIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryBindsByOuterIdWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - QueryBindsByPkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryBindsByPkResponse
   */
  async queryBindsByPkWithOptions(tmpReq: $_model.QueryBindsByPkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryBindsByPkResponse> {
    tmpReq.validate();
    let request = new $_model.QueryBindsByPkShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tenantIds)) {
      request.tenantIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantIds, "TenantIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    if (!$dara.isNull(request.tenantIdsShrink)) {
      query["TenantIds"] = request.tenantIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryBindsByPk",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryBindsByPkResponse>(await this.callApi(params, req, runtime), new $_model.QueryBindsByPkResponse({}));
  }

  /**
   * @param request - QueryBindsByPkRequest
   * @returns QueryBindsByPkResponse
   */
  async queryBindsByPk(request: $_model.QueryBindsByPkRequest): Promise<$_model.QueryBindsByPkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryBindsByPkWithOptions(request, runtime);
  }

  /**
   * @param request - QueryCustomerLabelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCustomerLabelResponse
   */
  async queryCustomerLabelWithOptions(request: $_model.QueryCustomerLabelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCustomerLabelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.labelSeries)) {
      query["LabelSeries"] = request.labelSeries;
    }

    if (!$dara.isNull(request.PK)) {
      query["PK"] = request.PK;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCustomerLabel",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCustomerLabelResponse>(await this.callApi(params, req, runtime), new $_model.QueryCustomerLabelResponse({}));
  }

  /**
   * @param request - QueryCustomerLabelRequest
   * @returns QueryCustomerLabelResponse
   */
  async queryCustomerLabel(request: $_model.QueryCustomerLabelRequest): Promise<$_model.QueryCustomerLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCustomerLabelWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDeleteTaskCheckDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDeleteTaskCheckDataResponse
   */
  async queryDeleteTaskCheckDataWithOptions(request: $_model.QueryDeleteTaskCheckDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDeleteTaskCheckDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agAccountType)) {
      query["AgAccountType"] = request.agAccountType;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.longLang)) {
      query["LongLang"] = request.longLang;
    }

    if (!$dara.isNull(request.mpk)) {
      query["Mpk"] = request.mpk;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDeleteTaskCheckData",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDeleteTaskCheckDataResponse>(await this.callApi(params, req, runtime), new $_model.QueryDeleteTaskCheckDataResponse({}));
  }

  /**
   * @param request - QueryDeleteTaskCheckDataRequest
   * @returns QueryDeleteTaskCheckDataResponse
   */
  async queryDeleteTaskCheckData(request: $_model.QueryDeleteTaskCheckDataRequest): Promise<$_model.QueryDeleteTaskCheckDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDeleteTaskCheckDataWithOptions(request, runtime);
  }

  /**
   * @param request - QueryEncryptedAccountProfileInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEncryptedAccountProfileInfoResponse
   */
  async queryEncryptedAccountProfileInfoWithOptions(request: $_model.QueryEncryptedAccountProfileInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryEncryptedAccountProfileInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.havanaId)) {
      query["HavanaId"] = request.havanaId;
    }

    if (!$dara.isNull(request.PK)) {
      query["PK"] = request.PK;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryEncryptedAccountProfileInfo",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryEncryptedAccountProfileInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryEncryptedAccountProfileInfoResponse({}));
  }

  /**
   * @param request - QueryEncryptedAccountProfileInfoRequest
   * @returns QueryEncryptedAccountProfileInfoResponse
   */
  async queryEncryptedAccountProfileInfo(request: $_model.QueryEncryptedAccountProfileInfoRequest): Promise<$_model.QueryEncryptedAccountProfileInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryEncryptedAccountProfileInfoWithOptions(request, runtime);
  }

  /**
   * @param request - QueryEnterpriseInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEnterpriseInfoResponse
   */
  async queryEnterpriseInfoWithOptions(request: $_model.QueryEnterpriseInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryEnterpriseInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseVersion)) {
      query["EnterpriseVersion"] = request.enterpriseVersion;
    }

    if (!$dara.isNull(request.havanaId)) {
      query["HavanaId"] = request.havanaId;
    }

    if (!$dara.isNull(request.PK)) {
      query["PK"] = request.PK;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryEnterpriseInfo",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryEnterpriseInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryEnterpriseInfoResponse({}));
  }

  /**
   * @param request - QueryEnterpriseInfoRequest
   * @returns QueryEnterpriseInfoResponse
   */
  async queryEnterpriseInfo(request: $_model.QueryEnterpriseInfoRequest): Promise<$_model.QueryEnterpriseInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryEnterpriseInfoWithOptions(request, runtime);
  }

  /**
   * @param request - QueryEnumConfigByTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEnumConfigByTypeResponse
   */
  async queryEnumConfigByTypeWithOptions(request: $_model.QueryEnumConfigByTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryEnumConfigByTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryEnumConfigByType",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryEnumConfigByTypeResponse>(await this.callApi(params, req, runtime), new $_model.QueryEnumConfigByTypeResponse({}));
  }

  /**
   * @param request - QueryEnumConfigByTypeRequest
   * @returns QueryEnumConfigByTypeResponse
   */
  async queryEnumConfigByType(request: $_model.QueryEnumConfigByTypeRequest): Promise<$_model.QueryEnumConfigByTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryEnumConfigByTypeWithOptions(request, runtime);
  }

  /**
   * @param request - QueryOneKeyDeleteBlockListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryOneKeyDeleteBlockListResponse
   */
  async queryOneKeyDeleteBlockListWithOptions(request: $_model.QueryOneKeyDeleteBlockListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryOneKeyDeleteBlockListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryOneKeyDeleteBlockList",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryOneKeyDeleteBlockListResponse>(await this.callApi(params, req, runtime), new $_model.QueryOneKeyDeleteBlockListResponse({}));
  }

  /**
   * @param request - QueryOneKeyDeleteBlockListRequest
   * @returns QueryOneKeyDeleteBlockListResponse
   */
  async queryOneKeyDeleteBlockList(request: $_model.QueryOneKeyDeleteBlockListRequest): Promise<$_model.QueryOneKeyDeleteBlockListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryOneKeyDeleteBlockListWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySecurityInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySecurityInfoResponse
   */
  async querySecurityInfoWithOptions(request: $_model.QuerySecurityInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySecurityInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySecurityInfo",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySecurityInfoResponse>(await this.callApi(params, req, runtime), new $_model.QuerySecurityInfoResponse({}));
  }

  /**
   * @param request - QuerySecurityInfoRequest
   * @returns QuerySecurityInfoResponse
   */
  async querySecurityInfo(request: $_model.QuerySecurityInfoRequest): Promise<$_model.QuerySecurityInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySecurityInfoWithOptions(request, runtime);
  }

  /**
   * @param request - RegisterInternalAccountForBucRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterInternalAccountForBucResponse
   */
  async registerInternalAccountForBucWithOptions(request: $_model.RegisterInternalAccountForBucRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterInternalAccountForBucResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bid)) {
      query["Bid"] = request.bid;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.isEmailConfirmed)) {
      query["IsEmailConfirmed"] = request.isEmailConfirmed;
    }

    if (!$dara.isNull(request.isMobileConfirmed)) {
      query["IsMobileConfirmed"] = request.isMobileConfirmed;
    }

    if (!$dara.isNull(request.isMobileLogin)) {
      query["IsMobileLogin"] = request.isMobileLogin;
    }

    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.nationalityCode)) {
      query["NationalityCode"] = request.nationalityCode;
    }

    if (!$dara.isNull(request.plainPassword)) {
      query["PlainPassword"] = request.plainPassword;
    }

    if (!$dara.isNull(request.preferredLanguage)) {
      query["PreferredLanguage"] = request.preferredLanguage;
    }

    if (!$dara.isNull(request.accountTypeCode)) {
      query["accountTypeCode"] = request.accountTypeCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterInternalAccountForBuc",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterInternalAccountForBucResponse>(await this.callApi(params, req, runtime), new $_model.RegisterInternalAccountForBucResponse({}));
  }

  /**
   * @param request - RegisterInternalAccountForBucRequest
   * @returns RegisterInternalAccountForBucResponse
   */
  async registerInternalAccountForBuc(request: $_model.RegisterInternalAccountForBucRequest): Promise<$_model.RegisterInternalAccountForBucResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerInternalAccountForBucWithOptions(request, runtime);
  }

  /**
   * @param request - ReleaseAgAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseAgAccountResponse
   */
  async releaseAgAccountWithOptions(request: $_model.ReleaseAgAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseAgAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mpk)) {
      query["Mpk"] = request.mpk;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    if (!$dara.isNull(request.releaseReason)) {
      query["ReleaseReason"] = request.releaseReason;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseAgAccount",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseAgAccountResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseAgAccountResponse({}));
  }

  /**
   * @param request - ReleaseAgAccountRequest
   * @returns ReleaseAgAccountResponse
   */
  async releaseAgAccount(request: $_model.ReleaseAgAccountRequest): Promise<$_model.ReleaseAgAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseAgAccountWithOptions(request, runtime);
  }

  /**
   * @param request - ResendAsyncCreateAgAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResendAsyncCreateAgAccountResponse
   */
  async resendAsyncCreateAgAccountWithOptions(request: $_model.ResendAsyncCreateAgAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResendAsyncCreateAgAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mpk)) {
      query["Mpk"] = request.mpk;
    }

    if (!$dara.isNull(request.traceNo)) {
      query["TraceNo"] = request.traceNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResendAsyncCreateAgAccount",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResendAsyncCreateAgAccountResponse>(await this.callApi(params, req, runtime), new $_model.ResendAsyncCreateAgAccountResponse({}));
  }

  /**
   * @param request - ResendAsyncCreateAgAccountRequest
   * @returns ResendAsyncCreateAgAccountResponse
   */
  async resendAsyncCreateAgAccount(request: $_model.ResendAsyncCreateAgAccountRequest): Promise<$_model.ResendAsyncCreateAgAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resendAsyncCreateAgAccountWithOptions(request, runtime);
  }

  /**
   * @param request - ResendAsyncModifyLoginEmailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResendAsyncModifyLoginEmailResponse
   */
  async resendAsyncModifyLoginEmailWithOptions(request: $_model.ResendAsyncModifyLoginEmailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResendAsyncModifyLoginEmailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mpk)) {
      query["Mpk"] = request.mpk;
    }

    if (!$dara.isNull(request.traceNo)) {
      query["TraceNo"] = request.traceNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResendAsyncModifyLoginEmail",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResendAsyncModifyLoginEmailResponse>(await this.callApi(params, req, runtime), new $_model.ResendAsyncModifyLoginEmailResponse({}));
  }

  /**
   * @param request - ResendAsyncModifyLoginEmailRequest
   * @returns ResendAsyncModifyLoginEmailResponse
   */
  async resendAsyncModifyLoginEmail(request: $_model.ResendAsyncModifyLoginEmailRequest): Promise<$_model.ResendAsyncModifyLoginEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resendAsyncModifyLoginEmailWithOptions(request, runtime);
  }

  /**
   * @param request - SeparateAgRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SeparateAgRelationResponse
   */
  async separateAgRelationWithOptions(request: $_model.SeparateAgRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SeparateAgRelationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mpk)) {
      query["Mpk"] = request.mpk;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SeparateAgRelation",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SeparateAgRelationResponse>(await this.callApi(params, req, runtime), new $_model.SeparateAgRelationResponse({}));
  }

  /**
   * @param request - SeparateAgRelationRequest
   * @returns SeparateAgRelationResponse
   */
  async separateAgRelation(request: $_model.SeparateAgRelationRequest): Promise<$_model.SeparateAgRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.separateAgRelationWithOptions(request, runtime);
  }

  /**
   * 同步set操作
   * 
   * @param request - SetCacheOperateSyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetCacheOperateSyncResponse
   */
  async setCacheOperateSyncWithOptions(request: $_model.SetCacheOperateSyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetCacheOperateSyncResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.exceptVersion)) {
      query["ExceptVersion"] = request.exceptVersion;
    }

    if (!$dara.isNull(request.expireSeconds)) {
      query["ExpireSeconds"] = request.expireSeconds;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.setType)) {
      query["SetType"] = request.setType;
    }

    if (!$dara.isNull(request.valueClazz)) {
      query["ValueClazz"] = request.valueClazz;
    }

    if (!$dara.isNull(request.valueString)) {
      query["ValueString"] = request.valueString;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetCacheOperateSync",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetCacheOperateSyncResponse>(await this.callApi(params, req, runtime), new $_model.SetCacheOperateSyncResponse({}));
  }

  /**
   * 同步set操作
   * 
   * @param request - SetCacheOperateSyncRequest
   * @returns SetCacheOperateSyncResponse
   */
  async setCacheOperateSync(request: $_model.SetCacheOperateSyncRequest): Promise<$_model.SetCacheOperateSyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setCacheOperateSyncWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - UpdateAccountAddressInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAccountAddressInfoResponse
   */
  async updateAccountAddressInfoWithOptions(tmpReq: $_model.UpdateAccountAddressInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAccountAddressInfoResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAccountAddressInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.cityJsonString)) {
      request.cityJsonStringShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cityJsonString, "CityJsonString", "json");
    }

    if (!$dara.isNull(tmpReq.districtJsonString)) {
      request.districtJsonStringShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.districtJsonString, "DistrictJsonString", "json");
    }

    if (!$dara.isNull(tmpReq.provinceJsonString)) {
      request.provinceJsonStringShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.provinceJsonString, "ProvinceJsonString", "json");
    }

    let query = { };
    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.address2)) {
      query["Address2"] = request.address2;
    }

    if (!$dara.isNull(request.cityJsonStringShrink)) {
      query["CityJsonString"] = request.cityJsonStringShrink;
    }

    if (!$dara.isNull(request.districtJsonStringShrink)) {
      query["DistrictJsonString"] = request.districtJsonStringShrink;
    }

    if (!$dara.isNull(request.PK)) {
      query["PK"] = request.PK;
    }

    if (!$dara.isNull(request.postCode)) {
      query["PostCode"] = request.postCode;
    }

    if (!$dara.isNull(request.provinceJsonStringShrink)) {
      query["ProvinceJsonString"] = request.provinceJsonStringShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAccountAddressInfo",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAccountAddressInfoResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAccountAddressInfoResponse({}));
  }

  /**
   * @param request - UpdateAccountAddressInfoRequest
   * @returns UpdateAccountAddressInfoResponse
   */
  async updateAccountAddressInfo(request: $_model.UpdateAccountAddressInfoRequest): Promise<$_model.UpdateAccountAddressInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAccountAddressInfoWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - UpdateAccountProfileInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAccountProfileInfoResponse
   */
  async updateAccountProfileInfoWithOptions(tmpReq: $_model.UpdateAccountProfileInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAccountProfileInfoResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAccountProfileInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.cityJsonString)) {
      request.cityJsonStringShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cityJsonString, "CityJsonString", "json");
    }

    if (!$dara.isNull(tmpReq.districtJsonString)) {
      request.districtJsonStringShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.districtJsonString, "DistrictJsonString", "json");
    }

    if (!$dara.isNull(tmpReq.provinceJsonString)) {
      request.provinceJsonStringShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.provinceJsonString, "ProvinceJsonString", "json");
    }

    let query = { };
    if (!$dara.isNull(request.accountAttribute)) {
      query["AccountAttribute"] = request.accountAttribute;
    }

    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.address2)) {
      query["Address2"] = request.address2;
    }

    if (!$dara.isNull(request.bindAlipayNo)) {
      query["BindAlipayNo"] = request.bindAlipayNo;
    }

    if (!$dara.isNull(request.certType)) {
      query["CertType"] = request.certType;
    }

    if (!$dara.isNull(request.cityJsonStringShrink)) {
      query["CityJsonString"] = request.cityJsonStringShrink;
    }

    if (!$dara.isNull(request.contactMethod)) {
      query["ContactMethod"] = request.contactMethod;
    }

    if (!$dara.isNull(request.districtJsonStringShrink)) {
      query["DistrictJsonString"] = request.districtJsonStringShrink;
    }

    if (!$dara.isNull(request.fax)) {
      query["Fax"] = request.fax;
    }

    if (!$dara.isNull(request.firstName)) {
      query["FirstName"] = request.firstName;
    }

    if (!$dara.isNull(request.head)) {
      query["Head"] = request.head;
    }

    if (!$dara.isNull(request.headColor)) {
      query["HeadColor"] = request.headColor;
    }

    if (!$dara.isNull(request.lastName)) {
      query["LastName"] = request.lastName;
    }

    if (!$dara.isNull(request.PK)) {
      query["PK"] = request.PK;
    }

    if (!$dara.isNull(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!$dara.isNull(request.postCode)) {
      query["PostCode"] = request.postCode;
    }

    if (!$dara.isNull(request.provinceJsonStringShrink)) {
      query["ProvinceJsonString"] = request.provinceJsonStringShrink;
    }

    if (!$dara.isNull(request.selfServicingBusinessRegNum)) {
      query["SelfServicingBusinessRegNum"] = request.selfServicingBusinessRegNum;
    }

    if (!$dara.isNull(request.selfServicingIdentificationNum)) {
      query["SelfServicingIdentificationNum"] = request.selfServicingIdentificationNum;
    }

    if (!$dara.isNull(request.trueName)) {
      query["TrueName"] = request.trueName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAccountProfileInfo",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAccountProfileInfoResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAccountProfileInfoResponse({}));
  }

  /**
   * @param request - UpdateAccountProfileInfoRequest
   * @returns UpdateAccountProfileInfoResponse
   */
  async updateAccountProfileInfo(request: $_model.UpdateAccountProfileInfoRequest): Promise<$_model.UpdateAccountProfileInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAccountProfileInfoWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateAgAccountAddressInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAgAccountAddressInfoResponse
   */
  async updateAgAccountAddressInfoWithOptions(request: $_model.UpdateAgAccountAddressInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAgAccountAddressInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.address2)) {
      query["Address2"] = request.address2;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.city)) {
      query["City"] = request.city;
    }

    if (!$dara.isNull(request.mpk)) {
      query["Mpk"] = request.mpk;
    }

    if (!$dara.isNull(request.PK)) {
      query["PK"] = request.PK;
    }

    if (!$dara.isNull(request.postCode)) {
      query["PostCode"] = request.postCode;
    }

    if (!$dara.isNull(request.province)) {
      query["Province"] = request.province;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAgAccountAddressInfo",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAgAccountAddressInfoResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAgAccountAddressInfoResponse({}));
  }

  /**
   * @param request - UpdateAgAccountAddressInfoRequest
   * @returns UpdateAgAccountAddressInfoResponse
   */
  async updateAgAccountAddressInfo(request: $_model.UpdateAgAccountAddressInfoRequest): Promise<$_model.UpdateAgAccountAddressInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAgAccountAddressInfoWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateAgServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAgServiceStatusResponse
   */
  async updateAgServiceStatusWithOptions(request: $_model.UpdateAgServiceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAgServiceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agAccountType)) {
      query["AgAccountType"] = request.agAccountType;
    }

    if (!$dara.isNull(request.mpk)) {
      query["Mpk"] = request.mpk;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAgServiceStatus",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAgServiceStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAgServiceStatusResponse({}));
  }

  /**
   * @param request - UpdateAgServiceStatusRequest
   * @returns UpdateAgServiceStatusResponse
   */
  async updateAgServiceStatus(request: $_model.UpdateAgServiceStatusRequest): Promise<$_model.UpdateAgServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAgServiceStatusWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateCustomerCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomerCategoryResponse
   */
  async updateCustomerCategoryWithOptions(request: $_model.UpdateCustomerCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCustomerCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.paramList)) {
      query["ParamList"] = request.paramList;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomerCategory",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCustomerCategoryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCustomerCategoryResponse({}));
  }

  /**
   * @param request - UpdateCustomerCategoryRequest
   * @returns UpdateCustomerCategoryResponse
   */
  async updateCustomerCategory(request: $_model.UpdateCustomerCategoryRequest): Promise<$_model.UpdateCustomerCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCustomerCategoryWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateCustomerInformationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomerInformationResponse
   */
  async updateCustomerInformationWithOptions(request: $_model.UpdateCustomerInformationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCustomerInformationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.biz)) {
      query["Biz"] = request.biz;
    }

    if (!$dara.isNull(request.customerCategory)) {
      query["CustomerCategory"] = request.customerCategory;
    }

    if (!$dara.isNull(request.customerSubCategory)) {
      query["CustomerSubCategory"] = request.customerSubCategory;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.website)) {
      query["Website"] = request.website;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomerInformation",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCustomerInformationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCustomerInformationResponse({}));
  }

  /**
   * @param request - UpdateCustomerInformationRequest
   * @returns UpdateCustomerInformationResponse
   */
  async updateCustomerInformation(request: $_model.UpdateCustomerInformationRequest): Promise<$_model.UpdateCustomerInformationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCustomerInformationWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - UpdateOrInsertEnterpriseInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOrInsertEnterpriseInfoResponse
   */
  async updateOrInsertEnterpriseInfoWithOptions(tmpReq: $_model.UpdateOrInsertEnterpriseInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOrInsertEnterpriseInfoResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateOrInsertEnterpriseInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.cityJsonString)) {
      request.cityJsonStringShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cityJsonString, "CityJsonString", "json");
    }

    if (!$dara.isNull(tmpReq.provinceJsonString)) {
      request.provinceJsonStringShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.provinceJsonString, "ProvinceJsonString", "json");
    }

    let query = { };
    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.alias)) {
      query["Alias"] = request.alias;
    }

    if (!$dara.isNull(request.cityJsonStringShrink)) {
      query["CityJsonString"] = request.cityJsonStringShrink;
    }

    if (!$dara.isNull(request.enterpriseSize)) {
      query["EnterpriseSize"] = request.enterpriseSize;
    }

    if (!$dara.isNull(request.fax)) {
      query["Fax"] = request.fax;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.PK)) {
      query["PK"] = request.PK;
    }

    if (!$dara.isNull(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!$dara.isNull(request.provinceJsonStringShrink)) {
      query["ProvinceJsonString"] = request.provinceJsonStringShrink;
    }

    if (!$dara.isNull(request.years)) {
      query["Years"] = request.years;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOrInsertEnterpriseInfo",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateOrInsertEnterpriseInfoResponse>(await this.callApi(params, req, runtime), new $_model.UpdateOrInsertEnterpriseInfoResponse({}));
  }

  /**
   * @param request - UpdateOrInsertEnterpriseInfoRequest
   * @returns UpdateOrInsertEnterpriseInfoResponse
   */
  async updateOrInsertEnterpriseInfo(request: $_model.UpdateOrInsertEnterpriseInfoRequest): Promise<$_model.UpdateOrInsertEnterpriseInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateOrInsertEnterpriseInfoWithOptions(request, runtime);
  }

  /**
   * @param request - DoLogicalDeleteResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DoLogicalDeleteResourceResponse
   */
  async doLogicalDeleteResourceWithOptions(request: $_model.DoLogicalDeleteResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DoLogicalDeleteResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bid)) {
      query["Bid"] = request.bid;
    }

    if (!$dara.isNull(request.country)) {
      query["Country"] = request.country;
    }

    if (!$dara.isNull(request.gmtWakeup)) {
      query["GmtWakeup"] = request.gmtWakeup;
    }

    if (!$dara.isNull(request.hid)) {
      query["Hid"] = request.hid;
    }

    if (!$dara.isNull(request.interrupt)) {
      query["Interrupt"] = request.interrupt;
    }

    if (!$dara.isNull(request.invoker)) {
      query["Invoker"] = request.invoker;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    if (!$dara.isNull(request.success)) {
      query["Success"] = request.success;
    }

    if (!$dara.isNull(request.taskExtraData)) {
      query["TaskExtraData"] = request.taskExtraData;
    }

    if (!$dara.isNull(request.taskIdentifier)) {
      query["TaskIdentifier"] = request.taskIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "doLogicalDeleteResource",
      version: "2016-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DoLogicalDeleteResourceResponse>(await this.callApi(params, req, runtime), new $_model.DoLogicalDeleteResourceResponse({}));
  }

  /**
   * @param request - DoLogicalDeleteResourceRequest
   * @returns DoLogicalDeleteResourceResponse
   */
  async doLogicalDeleteResource(request: $_model.DoLogicalDeleteResourceRequest): Promise<$_model.DoLogicalDeleteResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.doLogicalDeleteResourceWithOptions(request, runtime);
  }

}
