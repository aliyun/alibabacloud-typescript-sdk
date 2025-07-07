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
    this._endpoint = this.getEndpoint("accountcenter", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 修改登录密码
   * 
   * @param request - EnterpriseAccountChangeLoginPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnterpriseAccountChangeLoginPasswordResponse
   */
  async enterpriseAccountChangeLoginPasswordWithOptions(request: $_model.EnterpriseAccountChangeLoginPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnterpriseAccountChangeLoginPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.encryptPassword)) {
      query["EncryptPassword"] = request.encryptPassword;
    }

    if (!$dara.isNull(request.orientedLeId)) {
      query["OrientedLeId"] = request.orientedLeId;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.orientedEcId)) {
      body["OrientedEcId"] = request.orientedEcId;
    }

    if (!$dara.isNull(request.orientedNbId)) {
      body["OrientedNbId"] = request.orientedNbId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnterpriseAccountChangeLoginPassword",
      version: "2024-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnterpriseAccountChangeLoginPasswordResponse>(await this.callApi(params, req, runtime), new $_model.EnterpriseAccountChangeLoginPasswordResponse({}));
  }

  /**
   * 修改登录密码
   * 
   * @param request - EnterpriseAccountChangeLoginPasswordRequest
   * @returns EnterpriseAccountChangeLoginPasswordResponse
   */
  async enterpriseAccountChangeLoginPassword(request: $_model.EnterpriseAccountChangeLoginPasswordRequest): Promise<$_model.EnterpriseAccountChangeLoginPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enterpriseAccountChangeLoginPasswordWithOptions(request, runtime);
  }

  /**
   * 修改安全邮箱
   * 
   * @param request - EnterpriseAccountChangeSecurityEmailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnterpriseAccountChangeSecurityEmailResponse
   */
  async enterpriseAccountChangeSecurityEmailWithOptions(request: $_model.EnterpriseAccountChangeSecurityEmailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnterpriseAccountChangeSecurityEmailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orientedLeId)) {
      query["OrientedLeId"] = request.orientedLeId;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.securityEmail)) {
      query["SecurityEmail"] = request.securityEmail;
    }

    if (!$dara.isNull(request.verifyCode)) {
      query["VerifyCode"] = request.verifyCode;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.orientedEcId)) {
      body["OrientedEcId"] = request.orientedEcId;
    }

    if (!$dara.isNull(request.orientedNbId)) {
      body["OrientedNbId"] = request.orientedNbId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnterpriseAccountChangeSecurityEmail",
      version: "2024-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnterpriseAccountChangeSecurityEmailResponse>(await this.callApi(params, req, runtime), new $_model.EnterpriseAccountChangeSecurityEmailResponse({}));
  }

  /**
   * 修改安全邮箱
   * 
   * @param request - EnterpriseAccountChangeSecurityEmailRequest
   * @returns EnterpriseAccountChangeSecurityEmailResponse
   */
  async enterpriseAccountChangeSecurityEmail(request: $_model.EnterpriseAccountChangeSecurityEmailRequest): Promise<$_model.EnterpriseAccountChangeSecurityEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enterpriseAccountChangeSecurityEmailWithOptions(request, runtime);
  }

  /**
   * 修改成员账号安全手机号
   * 
   * @param request - EnterpriseAccountChangeSecurityMobileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnterpriseAccountChangeSecurityMobileResponse
   */
  async enterpriseAccountChangeSecurityMobileWithOptions(request: $_model.EnterpriseAccountChangeSecurityMobileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnterpriseAccountChangeSecurityMobileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.encryptTicket)) {
      query["EncryptTicket"] = request.encryptTicket;
    }

    if (!$dara.isNull(request.newMobile)) {
      query["NewMobile"] = request.newMobile;
    }

    if (!$dara.isNull(request.orientedLeId)) {
      query["OrientedLeId"] = request.orientedLeId;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.verificationCode)) {
      query["VerificationCode"] = request.verificationCode;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.orientedEcId)) {
      body["OrientedEcId"] = request.orientedEcId;
    }

    if (!$dara.isNull(request.orientedNbId)) {
      body["OrientedNbId"] = request.orientedNbId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnterpriseAccountChangeSecurityMobile",
      version: "2024-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnterpriseAccountChangeSecurityMobileResponse>(await this.callApi(params, req, runtime), new $_model.EnterpriseAccountChangeSecurityMobileResponse({}));
  }

  /**
   * 修改成员账号安全手机号
   * 
   * @param request - EnterpriseAccountChangeSecurityMobileRequest
   * @returns EnterpriseAccountChangeSecurityMobileResponse
   */
  async enterpriseAccountChangeSecurityMobile(request: $_model.EnterpriseAccountChangeSecurityMobileRequest): Promise<$_model.EnterpriseAccountChangeSecurityMobileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enterpriseAccountChangeSecurityMobileWithOptions(request, runtime);
  }

  /**
   * 查询纳管账号授权角色
   * 
   * @param request - EnterpriseAccountQueryAccountGrantedRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnterpriseAccountQueryAccountGrantedRolesResponse
   */
  async enterpriseAccountQueryAccountGrantedRolesWithOptions(request: $_model.EnterpriseAccountQueryAccountGrantedRolesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnterpriseAccountQueryAccountGrantedRolesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.isOpenApi)) {
      body["IsOpenApi"] = request.isOpenApi;
    }

    if (!$dara.isNull(request.orientedEcId)) {
      body["OrientedEcId"] = request.orientedEcId;
    }

    if (!$dara.isNull(request.orientedLeId)) {
      body["OrientedLeId"] = request.orientedLeId;
    }

    if (!$dara.isNull(request.orientedNbId)) {
      body["OrientedNbId"] = request.orientedNbId;
    }

    if (!$dara.isNull(request.pk)) {
      body["Pk"] = request.pk;
    }

    if (!$dara.isNull(request.showCompleteInfo)) {
      body["ShowCompleteInfo"] = request.showCompleteInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnterpriseAccountQueryAccountGrantedRoles",
      version: "2024-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnterpriseAccountQueryAccountGrantedRolesResponse>(await this.callApi(params, req, runtime), new $_model.EnterpriseAccountQueryAccountGrantedRolesResponse({}));
  }

  /**
   * 查询纳管账号授权角色
   * 
   * @param request - EnterpriseAccountQueryAccountGrantedRolesRequest
   * @returns EnterpriseAccountQueryAccountGrantedRolesResponse
   */
  async enterpriseAccountQueryAccountGrantedRoles(request: $_model.EnterpriseAccountQueryAccountGrantedRolesRequest): Promise<$_model.EnterpriseAccountQueryAccountGrantedRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enterpriseAccountQueryAccountGrantedRolesWithOptions(request, runtime);
  }

  /**
   * 批量查询纳管账号信息
   * 
   * @param request - EnterpriseAccountQueryAccountsInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnterpriseAccountQueryAccountsInfoResponse
   */
  async enterpriseAccountQueryAccountsInfoWithOptions(request: $_model.EnterpriseAccountQueryAccountsInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnterpriseAccountQueryAccountsInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.encryptTicket)) {
      query["EncryptTicket"] = request.encryptTicket;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pksJson)) {
      query["PksJson"] = request.pksJson;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orientedEcId)) {
      body["OrientedEcId"] = request.orientedEcId;
    }

    if (!$dara.isNull(request.orientedLeId)) {
      body["OrientedLeId"] = request.orientedLeId;
    }

    if (!$dara.isNull(request.orientedNbId)) {
      body["OrientedNbId"] = request.orientedNbId;
    }

    if (!$dara.isNull(request.showCompleteInfo)) {
      body["ShowCompleteInfo"] = request.showCompleteInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnterpriseAccountQueryAccountsInfo",
      version: "2024-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnterpriseAccountQueryAccountsInfoResponse>(await this.callApi(params, req, runtime), new $_model.EnterpriseAccountQueryAccountsInfoResponse({}));
  }

  /**
   * 批量查询纳管账号信息
   * 
   * @param request - EnterpriseAccountQueryAccountsInfoRequest
   * @returns EnterpriseAccountQueryAccountsInfoResponse
   */
  async enterpriseAccountQueryAccountsInfo(request: $_model.EnterpriseAccountQueryAccountsInfoRequest): Promise<$_model.EnterpriseAccountQueryAccountsInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enterpriseAccountQueryAccountsInfoWithOptions(request, runtime);
  }

  /**
   * 查询纳管账号登录设置
   * 
   * @param request - EnterpriseAccountQueryLoginSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnterpriseAccountQueryLoginSettingsResponse
   */
  async enterpriseAccountQueryLoginSettingsWithOptions(request: $_model.EnterpriseAccountQueryLoginSettingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnterpriseAccountQueryLoginSettingsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.isOpenApi)) {
      body["IsOpenApi"] = request.isOpenApi;
    }

    if (!$dara.isNull(request.orientedEcId)) {
      body["OrientedEcId"] = request.orientedEcId;
    }

    if (!$dara.isNull(request.orientedLeId)) {
      body["OrientedLeId"] = request.orientedLeId;
    }

    if (!$dara.isNull(request.orientedNbId)) {
      body["OrientedNbId"] = request.orientedNbId;
    }

    if (!$dara.isNull(request.pk)) {
      body["Pk"] = request.pk;
    }

    if (!$dara.isNull(request.showCompleteInfo)) {
      body["ShowCompleteInfo"] = request.showCompleteInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnterpriseAccountQueryLoginSettings",
      version: "2024-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnterpriseAccountQueryLoginSettingsResponse>(await this.callApi(params, req, runtime), new $_model.EnterpriseAccountQueryLoginSettingsResponse({}));
  }

  /**
   * 查询纳管账号登录设置
   * 
   * @param request - EnterpriseAccountQueryLoginSettingsRequest
   * @returns EnterpriseAccountQueryLoginSettingsResponse
   */
  async enterpriseAccountQueryLoginSettings(request: $_model.EnterpriseAccountQueryLoginSettingsRequest): Promise<$_model.EnterpriseAccountQueryLoginSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enterpriseAccountQueryLoginSettingsWithOptions(request, runtime);
  }

  /**
   * 移除mfa
   * 
   * @param request - EnterpriseAccountRemoveMfaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnterpriseAccountRemoveMfaResponse
   */
  async enterpriseAccountRemoveMfaWithOptions(request: $_model.EnterpriseAccountRemoveMfaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnterpriseAccountRemoveMfaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orientedLeId)) {
      query["OrientedLeId"] = request.orientedLeId;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.orientedEcId)) {
      body["OrientedEcId"] = request.orientedEcId;
    }

    if (!$dara.isNull(request.orientedNbId)) {
      body["OrientedNbId"] = request.orientedNbId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnterpriseAccountRemoveMfa",
      version: "2024-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnterpriseAccountRemoveMfaResponse>(await this.callApi(params, req, runtime), new $_model.EnterpriseAccountRemoveMfaResponse({}));
  }

  /**
   * 移除mfa
   * 
   * @param request - EnterpriseAccountRemoveMfaRequest
   * @returns EnterpriseAccountRemoveMfaResponse
   */
  async enterpriseAccountRemoveMfa(request: $_model.EnterpriseAccountRemoveMfaRequest): Promise<$_model.EnterpriseAccountRemoveMfaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enterpriseAccountRemoveMfaWithOptions(request, runtime);
  }

  /**
   * 脱离ea
   * 
   * @param request - EnterpriseAccountSeparateEaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnterpriseAccountSeparateEaResponse
   */
  async enterpriseAccountSeparateEaWithOptions(request: $_model.EnterpriseAccountSeparateEaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnterpriseAccountSeparateEaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.encryptTicket)) {
      query["EncryptTicket"] = request.encryptTicket;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orientedEcId)) {
      body["OrientedEcId"] = request.orientedEcId;
    }

    if (!$dara.isNull(request.orientedLeId)) {
      body["OrientedLeId"] = request.orientedLeId;
    }

    if (!$dara.isNull(request.orientedNbId)) {
      body["OrientedNbId"] = request.orientedNbId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnterpriseAccountSeparateEa",
      version: "2024-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnterpriseAccountSeparateEaResponse>(await this.callApi(params, req, runtime), new $_model.EnterpriseAccountSeparateEaResponse({}));
  }

  /**
   * 脱离ea
   * 
   * @param request - EnterpriseAccountSeparateEaRequest
   * @returns EnterpriseAccountSeparateEaResponse
   */
  async enterpriseAccountSeparateEa(request: $_model.EnterpriseAccountSeparateEaRequest): Promise<$_model.EnterpriseAccountSeparateEaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enterpriseAccountSeparateEaWithOptions(request, runtime);
  }

  /**
   * 更新账号企业多账号中的别名
   * 
   * @param request - EnterpriseAccountUpdateAccountAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnterpriseAccountUpdateAccountAliasResponse
   */
  async enterpriseAccountUpdateAccountAliasWithOptions(request: $_model.EnterpriseAccountUpdateAccountAliasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnterpriseAccountUpdateAccountAliasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alias)) {
      query["Alias"] = request.alias;
    }

    if (!$dara.isNull(request.encryptTicket)) {
      query["EncryptTicket"] = request.encryptTicket;
    }

    if (!$dara.isNull(request.orientedLeId)) {
      query["OrientedLeId"] = request.orientedLeId;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.orientedEcId)) {
      body["OrientedEcId"] = request.orientedEcId;
    }

    if (!$dara.isNull(request.orientedNbId)) {
      body["OrientedNbId"] = request.orientedNbId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnterpriseAccountUpdateAccountAlias",
      version: "2024-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnterpriseAccountUpdateAccountAliasResponse>(await this.callApi(params, req, runtime), new $_model.EnterpriseAccountUpdateAccountAliasResponse({}));
  }

  /**
   * 更新账号企业多账号中的别名
   * 
   * @param request - EnterpriseAccountUpdateAccountAliasRequest
   * @returns EnterpriseAccountUpdateAccountAliasResponse
   */
  async enterpriseAccountUpdateAccountAlias(request: $_model.EnterpriseAccountUpdateAccountAliasRequest): Promise<$_model.EnterpriseAccountUpdateAccountAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enterpriseAccountUpdateAccountAliasWithOptions(request, runtime);
  }

  /**
   * 更新账号授权
   * 
   * @param request - EnterpriseAccountUpdateAccountBizRoleGrantRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnterpriseAccountUpdateAccountBizRoleGrantResponse
   */
  async enterpriseAccountUpdateAccountBizRoleGrantWithOptions(request: $_model.EnterpriseAccountUpdateAccountBizRoleGrantRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnterpriseAccountUpdateAccountBizRoleGrantResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizRoleCodeListJson)) {
      query["BizRoleCodeListJson"] = request.bizRoleCodeListJson;
    }

    if (!$dara.isNull(request.encryptTicket)) {
      query["EncryptTicket"] = request.encryptTicket;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orientedEcId)) {
      body["OrientedEcId"] = request.orientedEcId;
    }

    if (!$dara.isNull(request.orientedLeId)) {
      body["OrientedLeId"] = request.orientedLeId;
    }

    if (!$dara.isNull(request.orientedNbId)) {
      body["OrientedNbId"] = request.orientedNbId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnterpriseAccountUpdateAccountBizRoleGrant",
      version: "2024-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnterpriseAccountUpdateAccountBizRoleGrantResponse>(await this.callApi(params, req, runtime), new $_model.EnterpriseAccountUpdateAccountBizRoleGrantResponse({}));
  }

  /**
   * 更新账号授权
   * 
   * @param request - EnterpriseAccountUpdateAccountBizRoleGrantRequest
   * @returns EnterpriseAccountUpdateAccountBizRoleGrantResponse
   */
  async enterpriseAccountUpdateAccountBizRoleGrant(request: $_model.EnterpriseAccountUpdateAccountBizRoleGrantRequest): Promise<$_model.EnterpriseAccountUpdateAccountBizRoleGrantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enterpriseAccountUpdateAccountBizRoleGrantWithOptions(request, runtime);
  }

  /**
   * 设置Ip掩码
   * 
   * @param request - EnterpriseAccountUpdateIpMaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnterpriseAccountUpdateIpMaskResponse
   */
  async enterpriseAccountUpdateIpMaskWithOptions(request: $_model.EnterpriseAccountUpdateIpMaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnterpriseAccountUpdateIpMaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipMasksJson)) {
      query["IpMasksJson"] = request.ipMasksJson;
    }

    if (!$dara.isNull(request.orientedLeId)) {
      query["OrientedLeId"] = request.orientedLeId;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.orientedEcId)) {
      body["OrientedEcId"] = request.orientedEcId;
    }

    if (!$dara.isNull(request.orientedNbId)) {
      body["OrientedNbId"] = request.orientedNbId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnterpriseAccountUpdateIpMask",
      version: "2024-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnterpriseAccountUpdateIpMaskResponse>(await this.callApi(params, req, runtime), new $_model.EnterpriseAccountUpdateIpMaskResponse({}));
  }

  /**
   * 设置Ip掩码
   * 
   * @param request - EnterpriseAccountUpdateIpMaskRequest
   * @returns EnterpriseAccountUpdateIpMaskResponse
   */
  async enterpriseAccountUpdateIpMask(request: $_model.EnterpriseAccountUpdateIpMaskRequest): Promise<$_model.EnterpriseAccountUpdateIpMaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enterpriseAccountUpdateIpMaskWithOptions(request, runtime);
  }

  /**
   * 更新操作风控
   * 
   * @param request - EnterpriseAccountUpdateOperateRiskControlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnterpriseAccountUpdateOperateRiskControlResponse
   */
  async enterpriseAccountUpdateOperateRiskControlWithOptions(request: $_model.EnterpriseAccountUpdateOperateRiskControlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnterpriseAccountUpdateOperateRiskControlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orientedLeId)) {
      query["OrientedLeId"] = request.orientedLeId;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    if (!$dara.isNull(request.productLevel)) {
      query["ProductLevel"] = request.productLevel;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.validateType)) {
      query["ValidateType"] = request.validateType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.orientedEcId)) {
      body["OrientedEcId"] = request.orientedEcId;
    }

    if (!$dara.isNull(request.orientedNbId)) {
      body["OrientedNbId"] = request.orientedNbId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnterpriseAccountUpdateOperateRiskControl",
      version: "2024-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnterpriseAccountUpdateOperateRiskControlResponse>(await this.callApi(params, req, runtime), new $_model.EnterpriseAccountUpdateOperateRiskControlResponse({}));
  }

  /**
   * 更新操作风控
   * 
   * @param request - EnterpriseAccountUpdateOperateRiskControlRequest
   * @returns EnterpriseAccountUpdateOperateRiskControlResponse
   */
  async enterpriseAccountUpdateOperateRiskControl(request: $_model.EnterpriseAccountUpdateOperateRiskControlRequest): Promise<$_model.EnterpriseAccountUpdateOperateRiskControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enterpriseAccountUpdateOperateRiskControlWithOptions(request, runtime);
  }

  /**
   * 修改安全手机启用状态
   * 
   * @param request - EnterpriseAccountUpdateSecurityMobileLoginStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnterpriseAccountUpdateSecurityMobileLoginStatusResponse
   */
  async enterpriseAccountUpdateSecurityMobileLoginStatusWithOptions(request: $_model.EnterpriseAccountUpdateSecurityMobileLoginStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnterpriseAccountUpdateSecurityMobileLoginStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orientedLeId)) {
      query["OrientedLeId"] = request.orientedLeId;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.orientedEcId)) {
      body["OrientedEcId"] = request.orientedEcId;
    }

    if (!$dara.isNull(request.orientedNbId)) {
      body["OrientedNbId"] = request.orientedNbId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnterpriseAccountUpdateSecurityMobileLoginStatus",
      version: "2024-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnterpriseAccountUpdateSecurityMobileLoginStatusResponse>(await this.callApi(params, req, runtime), new $_model.EnterpriseAccountUpdateSecurityMobileLoginStatusResponse({}));
  }

  /**
   * 修改安全手机启用状态
   * 
   * @param request - EnterpriseAccountUpdateSecurityMobileLoginStatusRequest
   * @returns EnterpriseAccountUpdateSecurityMobileLoginStatusResponse
   */
  async enterpriseAccountUpdateSecurityMobileLoginStatus(request: $_model.EnterpriseAccountUpdateSecurityMobileLoginStatusRequest): Promise<$_model.EnterpriseAccountUpdateSecurityMobileLoginStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enterpriseAccountUpdateSecurityMobileLoginStatusWithOptions(request, runtime);
  }

  /**
   * 更新过期时间
   * 
   * @param request - EnterpriseAccountUpdateSessionExpireTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnterpriseAccountUpdateSessionExpireTimeResponse
   */
  async enterpriseAccountUpdateSessionExpireTimeWithOptions(request: $_model.EnterpriseAccountUpdateSessionExpireTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnterpriseAccountUpdateSessionExpireTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orientedLeId)) {
      query["OrientedLeId"] = request.orientedLeId;
    }

    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.sessionExpireTime)) {
      query["SessionExpireTime"] = request.sessionExpireTime;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.orientedEcId)) {
      body["OrientedEcId"] = request.orientedEcId;
    }

    if (!$dara.isNull(request.orientedNbId)) {
      body["OrientedNbId"] = request.orientedNbId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnterpriseAccountUpdateSessionExpireTime",
      version: "2024-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnterpriseAccountUpdateSessionExpireTimeResponse>(await this.callApi(params, req, runtime), new $_model.EnterpriseAccountUpdateSessionExpireTimeResponse({}));
  }

  /**
   * 更新过期时间
   * 
   * @param request - EnterpriseAccountUpdateSessionExpireTimeRequest
   * @returns EnterpriseAccountUpdateSessionExpireTimeResponse
   */
  async enterpriseAccountUpdateSessionExpireTime(request: $_model.EnterpriseAccountUpdateSessionExpireTimeRequest): Promise<$_model.EnterpriseAccountUpdateSessionExpireTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enterpriseAccountUpdateSessionExpireTimeWithOptions(request, runtime);
  }

  /**
   * 组织目录树查询
   * 
   * @param request - EnterpriseOrgQueryLoadTreeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnterpriseOrgQueryLoadTreeResponse
   */
  async enterpriseOrgQueryLoadTreeWithOptions(request: $_model.EnterpriseOrgQueryLoadTreeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnterpriseOrgQueryLoadTreeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.encryptTicket)) {
      query["EncryptTicket"] = request.encryptTicket;
    }

    if (!$dara.isNull(request.loadOrgOnly)) {
      query["LoadOrgOnly"] = request.loadOrgOnly;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orientedEcId)) {
      body["OrientedEcId"] = request.orientedEcId;
    }

    if (!$dara.isNull(request.orientedLeId)) {
      body["OrientedLeId"] = request.orientedLeId;
    }

    if (!$dara.isNull(request.orientedNbId)) {
      body["OrientedNbId"] = request.orientedNbId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnterpriseOrgQueryLoadTree",
      version: "2024-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnterpriseOrgQueryLoadTreeResponse>(await this.callApi(params, req, runtime), new $_model.EnterpriseOrgQueryLoadTreeResponse({}));
  }

  /**
   * 组织目录树查询
   * 
   * @param request - EnterpriseOrgQueryLoadTreeRequest
   * @returns EnterpriseOrgQueryLoadTreeResponse
   */
  async enterpriseOrgQueryLoadTree(request: $_model.EnterpriseOrgQueryLoadTreeRequest): Promise<$_model.EnterpriseOrgQueryLoadTreeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enterpriseOrgQueryLoadTreeWithOptions(request, runtime);
  }

  /**
   * 创建成员账号
   * 
   * @param request - EnterpriseRegisterAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnterpriseRegisterAccountResponse
   */
  async enterpriseRegisterAccountWithOptions(request: $_model.EnterpriseRegisterAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnterpriseRegisterAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alias)) {
      query["Alias"] = request.alias;
    }

    if (!$dara.isNull(request.encryptPassword)) {
      query["EncryptPassword"] = request.encryptPassword;
    }

    if (!$dara.isNull(request.encryptTicket)) {
      query["EncryptTicket"] = request.encryptTicket;
    }

    if (!$dara.isNull(request.loginEmail)) {
      query["LoginEmail"] = request.loginEmail;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.showCompleteInfo)) {
      query["ShowCompleteInfo"] = request.showCompleteInfo;
    }

    if (!$dara.isNull(request.siteNick)) {
      query["SiteNick"] = request.siteNick;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orientedEcId)) {
      body["OrientedEcId"] = request.orientedEcId;
    }

    if (!$dara.isNull(request.orientedLeId)) {
      body["OrientedLeId"] = request.orientedLeId;
    }

    if (!$dara.isNull(request.orientedNbId)) {
      body["OrientedNbId"] = request.orientedNbId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnterpriseRegisterAccount",
      version: "2024-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnterpriseRegisterAccountResponse>(await this.callApi(params, req, runtime), new $_model.EnterpriseRegisterAccountResponse({}));
  }

  /**
   * 创建成员账号
   * 
   * @param request - EnterpriseRegisterAccountRequest
   * @returns EnterpriseRegisterAccountResponse
   */
  async enterpriseRegisterAccount(request: $_model.EnterpriseRegisterAccountRequest): Promise<$_model.EnterpriseRegisterAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enterpriseRegisterAccountWithOptions(request, runtime);
  }

  /**
   * 创建业务角色
   * 
   * @param request - EnterpriseRoleCreateBizRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnterpriseRoleCreateBizRoleResponse
   */
  async enterpriseRoleCreateBizRoleWithOptions(request: $_model.EnterpriseRoleCreateBizRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnterpriseRoleCreateBizRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizPermissionCodeListJson)) {
      query["BizPermissionCodeListJson"] = request.bizPermissionCodeListJson;
    }

    if (!$dara.isNull(request.bizRoleDesc)) {
      query["BizRoleDesc"] = request.bizRoleDesc;
    }

    if (!$dara.isNull(request.bizRoleName)) {
      query["BizRoleName"] = request.bizRoleName;
    }

    if (!$dara.isNull(request.encryptTicket)) {
      query["EncryptTicket"] = request.encryptTicket;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orientedEcId)) {
      body["OrientedEcId"] = request.orientedEcId;
    }

    if (!$dara.isNull(request.orientedLeId)) {
      body["OrientedLeId"] = request.orientedLeId;
    }

    if (!$dara.isNull(request.orientedNbId)) {
      body["OrientedNbId"] = request.orientedNbId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnterpriseRoleCreateBizRole",
      version: "2024-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnterpriseRoleCreateBizRoleResponse>(await this.callApi(params, req, runtime), new $_model.EnterpriseRoleCreateBizRoleResponse({}));
  }

  /**
   * 创建业务角色
   * 
   * @param request - EnterpriseRoleCreateBizRoleRequest
   * @returns EnterpriseRoleCreateBizRoleResponse
   */
  async enterpriseRoleCreateBizRole(request: $_model.EnterpriseRoleCreateBizRoleRequest): Promise<$_model.EnterpriseRoleCreateBizRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enterpriseRoleCreateBizRoleWithOptions(request, runtime);
  }

  /**
   * 删除业务角色
   * 
   * @param request - EnterpriseRoleDeleteBizRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnterpriseRoleDeleteBizRoleResponse
   */
  async enterpriseRoleDeleteBizRoleWithOptions(request: $_model.EnterpriseRoleDeleteBizRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnterpriseRoleDeleteBizRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizRoleCode)) {
      query["BizRoleCode"] = request.bizRoleCode;
    }

    if (!$dara.isNull(request.encryptTicket)) {
      query["EncryptTicket"] = request.encryptTicket;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orientedEcId)) {
      body["OrientedEcId"] = request.orientedEcId;
    }

    if (!$dara.isNull(request.orientedLeId)) {
      body["OrientedLeId"] = request.orientedLeId;
    }

    if (!$dara.isNull(request.orientedNbId)) {
      body["OrientedNbId"] = request.orientedNbId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnterpriseRoleDeleteBizRole",
      version: "2024-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnterpriseRoleDeleteBizRoleResponse>(await this.callApi(params, req, runtime), new $_model.EnterpriseRoleDeleteBizRoleResponse({}));
  }

  /**
   * 删除业务角色
   * 
   * @param request - EnterpriseRoleDeleteBizRoleRequest
   * @returns EnterpriseRoleDeleteBizRoleResponse
   */
  async enterpriseRoleDeleteBizRole(request: $_model.EnterpriseRoleDeleteBizRoleRequest): Promise<$_model.EnterpriseRoleDeleteBizRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enterpriseRoleDeleteBizRoleWithOptions(request, runtime);
  }

  /**
   * 角色授权场景下分页查询账号
   * 
   * @param request - EnterpriseRoleQueryAccountForRoleGrantByPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnterpriseRoleQueryAccountForRoleGrantByPageResponse
   */
  async enterpriseRoleQueryAccountForRoleGrantByPageWithOptions(request: $_model.EnterpriseRoleQueryAccountForRoleGrantByPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnterpriseRoleQueryAccountForRoleGrantByPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizRoleCode)) {
      query["BizRoleCode"] = request.bizRoleCode;
    }

    if (!$dara.isNull(request.encryptTicket)) {
      query["EncryptTicket"] = request.encryptTicket;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orgId)) {
      query["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.showCompleteInfo)) {
      query["ShowCompleteInfo"] = request.showCompleteInfo;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orientedEcId)) {
      body["OrientedEcId"] = request.orientedEcId;
    }

    if (!$dara.isNull(request.orientedLeId)) {
      body["OrientedLeId"] = request.orientedLeId;
    }

    if (!$dara.isNull(request.orientedNbId)) {
      body["OrientedNbId"] = request.orientedNbId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnterpriseRoleQueryAccountForRoleGrantByPage",
      version: "2024-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnterpriseRoleQueryAccountForRoleGrantByPageResponse>(await this.callApi(params, req, runtime), new $_model.EnterpriseRoleQueryAccountForRoleGrantByPageResponse({}));
  }

  /**
   * 角色授权场景下分页查询账号
   * 
   * @param request - EnterpriseRoleQueryAccountForRoleGrantByPageRequest
   * @returns EnterpriseRoleQueryAccountForRoleGrantByPageResponse
   */
  async enterpriseRoleQueryAccountForRoleGrantByPage(request: $_model.EnterpriseRoleQueryAccountForRoleGrantByPageRequest): Promise<$_model.EnterpriseRoleQueryAccountForRoleGrantByPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enterpriseRoleQueryAccountForRoleGrantByPageWithOptions(request, runtime);
  }

  /**
   * 分页查询业务角色
   * 
   * @param request - EnterpriseRoleQueryBizRoleByPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnterpriseRoleQueryBizRoleByPageResponse
   */
  async enterpriseRoleQueryBizRoleByPageWithOptions(request: $_model.EnterpriseRoleQueryBizRoleByPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnterpriseRoleQueryBizRoleByPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.encryptTicket)) {
      query["EncryptTicket"] = request.encryptTicket;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orientedLeId)) {
      query["OrientedLeId"] = request.orientedLeId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.srcType)) {
      query["SrcType"] = request.srcType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orientedEcId)) {
      body["OrientedEcId"] = request.orientedEcId;
    }

    if (!$dara.isNull(request.orientedNbId)) {
      body["OrientedNbId"] = request.orientedNbId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnterpriseRoleQueryBizRoleByPage",
      version: "2024-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnterpriseRoleQueryBizRoleByPageResponse>(await this.callApi(params, req, runtime), new $_model.EnterpriseRoleQueryBizRoleByPageResponse({}));
  }

  /**
   * 分页查询业务角色
   * 
   * @param request - EnterpriseRoleQueryBizRoleByPageRequest
   * @returns EnterpriseRoleQueryBizRoleByPageResponse
   */
  async enterpriseRoleQueryBizRoleByPage(request: $_model.EnterpriseRoleQueryBizRoleByPageRequest): Promise<$_model.EnterpriseRoleQueryBizRoleByPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enterpriseRoleQueryBizRoleByPageWithOptions(request, runtime);
  }

  /**
   * 查询业务角色详情
   * 
   * @param request - EnterpriseRoleQueryBizRoleDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnterpriseRoleQueryBizRoleDetailResponse
   */
  async enterpriseRoleQueryBizRoleDetailWithOptions(request: $_model.EnterpriseRoleQueryBizRoleDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnterpriseRoleQueryBizRoleDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizRoleCode)) {
      query["BizRoleCode"] = request.bizRoleCode;
    }

    if (!$dara.isNull(request.encryptTicket)) {
      query["EncryptTicket"] = request.encryptTicket;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orientedEcId)) {
      body["OrientedEcId"] = request.orientedEcId;
    }

    if (!$dara.isNull(request.orientedLeId)) {
      body["OrientedLeId"] = request.orientedLeId;
    }

    if (!$dara.isNull(request.orientedNbId)) {
      body["OrientedNbId"] = request.orientedNbId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnterpriseRoleQueryBizRoleDetail",
      version: "2024-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnterpriseRoleQueryBizRoleDetailResponse>(await this.callApi(params, req, runtime), new $_model.EnterpriseRoleQueryBizRoleDetailResponse({}));
  }

  /**
   * 查询业务角色详情
   * 
   * @param request - EnterpriseRoleQueryBizRoleDetailRequest
   * @returns EnterpriseRoleQueryBizRoleDetailResponse
   */
  async enterpriseRoleQueryBizRoleDetail(request: $_model.EnterpriseRoleQueryBizRoleDetailRequest): Promise<$_model.EnterpriseRoleQueryBizRoleDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enterpriseRoleQueryBizRoleDetailWithOptions(request, runtime);
  }

  /**
   * 更新业务角色
   * 
   * @param request - EnterpriseRoleUpdateBizRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnterpriseRoleUpdateBizRoleResponse
   */
  async enterpriseRoleUpdateBizRoleWithOptions(request: $_model.EnterpriseRoleUpdateBizRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnterpriseRoleUpdateBizRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizPermissionCodeListJson)) {
      query["BizPermissionCodeListJson"] = request.bizPermissionCodeListJson;
    }

    if (!$dara.isNull(request.bizRoleCode)) {
      query["BizRoleCode"] = request.bizRoleCode;
    }

    if (!$dara.isNull(request.bizRoleDesc)) {
      query["BizRoleDesc"] = request.bizRoleDesc;
    }

    if (!$dara.isNull(request.bizRoleName)) {
      query["BizRoleName"] = request.bizRoleName;
    }

    if (!$dara.isNull(request.encryptTicket)) {
      query["EncryptTicket"] = request.encryptTicket;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orientedEcId)) {
      body["OrientedEcId"] = request.orientedEcId;
    }

    if (!$dara.isNull(request.orientedLeId)) {
      body["OrientedLeId"] = request.orientedLeId;
    }

    if (!$dara.isNull(request.orientedNbId)) {
      body["OrientedNbId"] = request.orientedNbId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnterpriseRoleUpdateBizRole",
      version: "2024-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnterpriseRoleUpdateBizRoleResponse>(await this.callApi(params, req, runtime), new $_model.EnterpriseRoleUpdateBizRoleResponse({}));
  }

  /**
   * 更新业务角色
   * 
   * @param request - EnterpriseRoleUpdateBizRoleRequest
   * @returns EnterpriseRoleUpdateBizRoleResponse
   */
  async enterpriseRoleUpdateBizRole(request: $_model.EnterpriseRoleUpdateBizRoleRequest): Promise<$_model.EnterpriseRoleUpdateBizRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enterpriseRoleUpdateBizRoleWithOptions(request, runtime);
  }

  /**
   * 处理待办项
   * 
   * @param request - EnterpriseTodoDealAccountTodoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnterpriseTodoDealAccountTodoResponse
   */
  async enterpriseTodoDealAccountTodoWithOptions(request: $_model.EnterpriseTodoDealAccountTodoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnterpriseTodoDealAccountTodoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.orientedEcId)) {
      body["OrientedEcId"] = request.orientedEcId;
    }

    if (!$dara.isNull(request.orientedLeId)) {
      body["OrientedLeId"] = request.orientedLeId;
    }

    if (!$dara.isNull(request.orientedNbId)) {
      body["OrientedNbId"] = request.orientedNbId;
    }

    if (!$dara.isNull(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.todoId)) {
      body["TodoId"] = request.todoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnterpriseTodoDealAccountTodo",
      version: "2024-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnterpriseTodoDealAccountTodoResponse>(await this.callApi(params, req, runtime), new $_model.EnterpriseTodoDealAccountTodoResponse({}));
  }

  /**
   * 处理待办项
   * 
   * @param request - EnterpriseTodoDealAccountTodoRequest
   * @returns EnterpriseTodoDealAccountTodoResponse
   */
  async enterpriseTodoDealAccountTodo(request: $_model.EnterpriseTodoDealAccountTodoRequest): Promise<$_model.EnterpriseTodoDealAccountTodoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enterpriseTodoDealAccountTodoWithOptions(request, runtime);
  }

  /**
   * 查询当前登录用户处理的待办项列表
   * 
   * @param request - EnterpriseTodoQueryAccountTodoListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnterpriseTodoQueryAccountTodoListResponse
   */
  async enterpriseTodoQueryAccountTodoListWithOptions(request: $_model.EnterpriseTodoQueryAccountTodoListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnterpriseTodoQueryAccountTodoListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.operatePk)) {
      body["OperatePk"] = request.operatePk;
    }

    if (!$dara.isNull(request.orientedEcId)) {
      body["OrientedEcId"] = request.orientedEcId;
    }

    if (!$dara.isNull(request.orientedLeId)) {
      body["OrientedLeId"] = request.orientedLeId;
    }

    if (!$dara.isNull(request.orientedNbId)) {
      body["OrientedNbId"] = request.orientedNbId;
    }

    if (!$dara.isNull(request.page)) {
      body["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.showCompleteInfo)) {
      body["ShowCompleteInfo"] = request.showCompleteInfo;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.todoType)) {
      body["TodoType"] = request.todoType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnterpriseTodoQueryAccountTodoList",
      version: "2024-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnterpriseTodoQueryAccountTodoListResponse>(await this.callApi(params, req, runtime), new $_model.EnterpriseTodoQueryAccountTodoListResponse({}));
  }

  /**
   * 查询当前登录用户处理的待办项列表
   * 
   * @param request - EnterpriseTodoQueryAccountTodoListRequest
   * @returns EnterpriseTodoQueryAccountTodoListResponse
   */
  async enterpriseTodoQueryAccountTodoList(request: $_model.EnterpriseTodoQueryAccountTodoListRequest): Promise<$_model.EnterpriseTodoQueryAccountTodoListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enterpriseTodoQueryAccountTodoListWithOptions(request, runtime);
  }

  /**
   * 查询当前登录用户发起的待办项列表
   * 
   * @param request - EnterpriseTodoQueryAccountTodoListByApplicantRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnterpriseTodoQueryAccountTodoListByApplicantResponse
   */
  async enterpriseTodoQueryAccountTodoListByApplicantWithOptions(request: $_model.EnterpriseTodoQueryAccountTodoListByApplicantRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnterpriseTodoQueryAccountTodoListByApplicantResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.operatePk)) {
      body["OperatePk"] = request.operatePk;
    }

    if (!$dara.isNull(request.orientedEcId)) {
      body["OrientedEcId"] = request.orientedEcId;
    }

    if (!$dara.isNull(request.orientedLeId)) {
      body["OrientedLeId"] = request.orientedLeId;
    }

    if (!$dara.isNull(request.orientedNbId)) {
      body["OrientedNbId"] = request.orientedNbId;
    }

    if (!$dara.isNull(request.page)) {
      body["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.showCompleteInfo)) {
      body["ShowCompleteInfo"] = request.showCompleteInfo;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.todoType)) {
      body["TodoType"] = request.todoType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnterpriseTodoQueryAccountTodoListByApplicant",
      version: "2024-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnterpriseTodoQueryAccountTodoListByApplicantResponse>(await this.callApi(params, req, runtime), new $_model.EnterpriseTodoQueryAccountTodoListByApplicantResponse({}));
  }

  /**
   * 查询当前登录用户发起的待办项列表
   * 
   * @param request - EnterpriseTodoQueryAccountTodoListByApplicantRequest
   * @returns EnterpriseTodoQueryAccountTodoListByApplicantResponse
   */
  async enterpriseTodoQueryAccountTodoListByApplicant(request: $_model.EnterpriseTodoQueryAccountTodoListByApplicantRequest): Promise<$_model.EnterpriseTodoQueryAccountTodoListByApplicantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enterpriseTodoQueryAccountTodoListByApplicantWithOptions(request, runtime);
  }

  /**
   * 管理员邀请纳管
   * 
   * @param request - EnterpriseUninvitedAdminInviteJoinEnterpriseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnterpriseUninvitedAdminInviteJoinEnterpriseResponse
   */
  async enterpriseUninvitedAdminInviteJoinEnterpriseWithOptions(request: $_model.EnterpriseUninvitedAdminInviteJoinEnterpriseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnterpriseUninvitedAdminInviteJoinEnterpriseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ecId)) {
      query["EcId"] = request.ecId;
    }

    if (!$dara.isNull(request.encryptTicket)) {
      query["EncryptTicket"] = request.encryptTicket;
    }

    if (!$dara.isNull(request.inviteePk)) {
      query["InviteePk"] = request.inviteePk;
    }

    if (!$dara.isNull(request.leId)) {
      query["LeId"] = request.leId;
    }

    if (!$dara.isNull(request.nbId)) {
      query["NbId"] = request.nbId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnterpriseUninvitedAdminInviteJoinEnterprise",
      version: "2024-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnterpriseUninvitedAdminInviteJoinEnterpriseResponse>(await this.callApi(params, req, runtime), new $_model.EnterpriseUninvitedAdminInviteJoinEnterpriseResponse({}));
  }

  /**
   * 管理员邀请纳管
   * 
   * @param request - EnterpriseUninvitedAdminInviteJoinEnterpriseRequest
   * @returns EnterpriseUninvitedAdminInviteJoinEnterpriseResponse
   */
  async enterpriseUninvitedAdminInviteJoinEnterprise(request: $_model.EnterpriseUninvitedAdminInviteJoinEnterpriseRequest): Promise<$_model.EnterpriseUninvitedAdminInviteJoinEnterpriseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enterpriseUninvitedAdminInviteJoinEnterpriseWithOptions(request, runtime);
  }

}
