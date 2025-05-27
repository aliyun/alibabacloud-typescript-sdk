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

}
