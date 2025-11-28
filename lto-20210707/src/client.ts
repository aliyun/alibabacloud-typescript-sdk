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
    this._endpoint = this.getEndpoint("lto", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - AddBaaSAntChainBizChainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddBaaSAntChainBizChainResponse
   */
  async addBaaSAntChainBizChainWithOptions(request: $_model.AddBaaSAntChainBizChainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddBaaSAntChainBizChainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baaSAntChainChainId)) {
      query["BaaSAntChainChainId"] = request.baaSAntChainChainId;
    }

    if (!$dara.isNull(request.baaSAntChainConsortiumId)) {
      query["BaaSAntChainConsortiumId"] = request.baaSAntChainConsortiumId;
    }

    if (!$dara.isNull(request.caCert)) {
      query["CaCert"] = request.caCert;
    }

    if (!$dara.isNull(request.caCertPassword)) {
      query["CaCertPassword"] = request.caCertPassword;
    }

    if (!$dara.isNull(request.clientCert)) {
      query["ClientCert"] = request.clientCert;
    }

    if (!$dara.isNull(request.clientKey)) {
      query["ClientKey"] = request.clientKey;
    }

    if (!$dara.isNull(request.clientKeyPassword)) {
      query["ClientKeyPassword"] = request.clientKeyPassword;
    }

    if (!$dara.isNull(request.contractTemplateIdList)) {
      query["ContractTemplateIdList"] = request.contractTemplateIdList;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nodeNameList)) {
      query["NodeNameList"] = request.nodeNameList;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.userKey)) {
      query["UserKey"] = request.userKey;
    }

    if (!$dara.isNull(request.userKeyPassword)) {
      query["UserKeyPassword"] = request.userKeyPassword;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddBaaSAntChainBizChain",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddBaaSAntChainBizChainResponse>(await this.callApi(params, req, runtime), new $_model.AddBaaSAntChainBizChainResponse({}));
  }

  /**
   * @param request - AddBaaSAntChainBizChainRequest
   * @returns AddBaaSAntChainBizChainResponse
   */
  async addBaaSAntChainBizChain(request: $_model.AddBaaSAntChainBizChainRequest): Promise<$_model.AddBaaSAntChainBizChainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addBaaSAntChainBizChainWithOptions(request, runtime);
  }

  /**
   * @param request - AddBaaSFabricBizChainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddBaaSFabricBizChainResponse
   */
  async addBaaSFabricBizChainWithOptions(request: $_model.AddBaaSFabricBizChainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddBaaSFabricBizChainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baaSFabricChannelId)) {
      query["BaaSFabricChannelId"] = request.baaSFabricChannelId;
    }

    if (!$dara.isNull(request.baaSFabricConsortiumId)) {
      query["BaaSFabricConsortiumId"] = request.baaSFabricConsortiumId;
    }

    if (!$dara.isNull(request.baaSFabricOrganizationId)) {
      query["BaaSFabricOrganizationId"] = request.baaSFabricOrganizationId;
    }

    if (!$dara.isNull(request.contractTemplateIdList)) {
      query["ContractTemplateIdList"] = request.contractTemplateIdList;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddBaaSFabricBizChain",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddBaaSFabricBizChainResponse>(await this.callApi(params, req, runtime), new $_model.AddBaaSFabricBizChainResponse({}));
  }

  /**
   * @param request - AddBaaSFabricBizChainRequest
   * @returns AddBaaSFabricBizChainResponse
   */
  async addBaaSFabricBizChain(request: $_model.AddBaaSFabricBizChainRequest): Promise<$_model.AddBaaSFabricBizChainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addBaaSFabricBizChainWithOptions(request, runtime);
  }

  /**
   * @param request - AddBsnFabricBizChainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddBsnFabricBizChainResponse
   */
  async addBsnFabricBizChainWithOptions(request: $_model.AddBsnFabricBizChainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddBsnFabricBizChainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nodeList)) {
      query["NodeList"] = request.nodeList;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.userCode)) {
      query["UserCode"] = request.userCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddBsnFabricBizChain",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddBsnFabricBizChainResponse>(await this.callApi(params, req, runtime), new $_model.AddBsnFabricBizChainResponse({}));
  }

  /**
   * @param request - AddBsnFabricBizChainRequest
   * @returns AddBsnFabricBizChainResponse
   */
  async addBsnFabricBizChain(request: $_model.AddBsnFabricBizChainRequest): Promise<$_model.AddBsnFabricBizChainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addBsnFabricBizChainWithOptions(request, runtime);
  }

  /**
   * 添加设备组
   * 
   * @param request - AddDeviceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDeviceGroupResponse
   */
  async addDeviceGroupWithOptions(request: $_model.AddDeviceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDeviceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizedCount)) {
      query["AuthorizedCount"] = request.authorizedCount;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDeviceGroup",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDeviceGroupResponse>(await this.callApi(params, req, runtime), new $_model.AddDeviceGroupResponse({}));
  }

  /**
   * 添加设备组
   * 
   * @param request - AddDeviceGroupRequest
   * @returns AddDeviceGroupResponse
   */
  async addDeviceGroup(request: $_model.AddDeviceGroupRequest): Promise<$_model.AddDeviceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDeviceGroupWithOptions(request, runtime);
  }

  /**
   * 添加成员
   * 
   * @param request - AddMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMemberResponse
   */
  async addMemberWithOptions(request: $_model.AddMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddMemberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizedCount)) {
      query["AuthorizedCount"] = request.authorizedCount;
    }

    if (!$dara.isNull(request.authorizedDeviceCount)) {
      query["AuthorizedDeviceCount"] = request.authorizedDeviceCount;
    }

    if (!$dara.isNull(request.contactor)) {
      query["Contactor"] = request.contactor;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.telephony)) {
      query["Telephony"] = request.telephony;
    }

    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddMember",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddMemberResponse>(await this.callApi(params, req, runtime), new $_model.AddMemberResponse({}));
  }

  /**
   * 添加成员
   * 
   * @param request - AddMemberRequest
   * @returns AddMemberResponse
   */
  async addMember(request: $_model.AddMemberRequest): Promise<$_model.AddMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addMemberWithOptions(request, runtime);
  }

  /**
   * @param request - AddPrivacyRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddPrivacyRuleResponse
   */
  async addPrivacyRuleWithOptions(request: $_model.AddPrivacyRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddPrivacyRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algImpl)) {
      query["AlgImpl"] = request.algImpl;
    }

    if (!$dara.isNull(request.algType)) {
      query["AlgType"] = request.algType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddPrivacyRule",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddPrivacyRuleResponse>(await this.callApi(params, req, runtime), new $_model.AddPrivacyRuleResponse({}));
  }

  /**
   * @param request - AddPrivacyRuleRequest
   * @returns AddPrivacyRuleResponse
   */
  async addPrivacyRule(request: $_model.AddPrivacyRuleRequest): Promise<$_model.AddPrivacyRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addPrivacyRuleWithOptions(request, runtime);
  }

  /**
   * @param request - AddRouteRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddRouteRuleResponse
   */
  async addRouteRuleWithOptions(request: $_model.AddRouteRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddRouteRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!$dara.isNull(request.chainUpMode)) {
      query["ChainUpMode"] = request.chainUpMode;
    }

    if (!$dara.isNull(request.contractName)) {
      query["ContractName"] = request.contractName;
    }

    if (!$dara.isNull(request.contractTemplateId)) {
      query["ContractTemplateId"] = request.contractTemplateId;
    }

    if (!$dara.isNull(request.deviceGroupId)) {
      query["DeviceGroupId"] = request.deviceGroupId;
    }

    if (!$dara.isNull(request.invokeType)) {
      query["InvokeType"] = request.invokeType;
    }

    if (!$dara.isNull(request.privacyRuleId)) {
      query["PrivacyRuleId"] = request.privacyRuleId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddRouteRule",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddRouteRuleResponse>(await this.callApi(params, req, runtime), new $_model.AddRouteRuleResponse({}));
  }

  /**
   * @param request - AddRouteRuleRequest
   * @returns AddRouteRuleResponse
   */
  async addRouteRule(request: $_model.AddRouteRuleRequest): Promise<$_model.AddRouteRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addRouteRuleWithOptions(request, runtime);
  }

  /**
   * 成员同意接入
   * 
   * @param request - AgreeMemberAccessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgreeMemberAccessResponse
   */
  async agreeMemberAccessWithOptions(request: $_model.AgreeMemberAccessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AgreeMemberAccessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.memberAccountId)) {
      query["MemberAccountId"] = request.memberAccountId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AgreeMemberAccess",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AgreeMemberAccessResponse>(await this.callApi(params, req, runtime), new $_model.AgreeMemberAccessResponse({}));
  }

  /**
   * 成员同意接入
   * 
   * @param request - AgreeMemberAccessRequest
   * @returns AgreeMemberAccessResponse
   */
  async agreeMemberAccess(request: $_model.AgreeMemberAccessRequest): Promise<$_model.AgreeMemberAccessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.agreeMemberAccessWithOptions(request, runtime);
  }

  /**
   * @param request - AuthorizeBaaSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeBaaSResponse
   */
  async authorizeBaaSWithOptions(request: $_model.AuthorizeBaaSRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeBaaSResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeBaaS",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeBaaSResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeBaaSResponse({}));
  }

  /**
   * @param request - AuthorizeBaaSRequest
   * @returns AuthorizeBaaSResponse
   */
  async authorizeBaaS(request: $_model.AuthorizeBaaSRequest): Promise<$_model.AuthorizeBaaSResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeBaaSWithOptions(request, runtime);
  }

  /**
   * @param request - AuthorizeDeviceGroupBizChainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeDeviceGroupBizChainResponse
   */
  async authorizeDeviceGroupBizChainWithOptions(request: $_model.AuthorizeDeviceGroupBizChainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeDeviceGroupBizChainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizChainIdList)) {
      query["BizChainIdList"] = request.bizChainIdList;
    }

    if (!$dara.isNull(request.deviceGroupId)) {
      query["DeviceGroupId"] = request.deviceGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeDeviceGroupBizChain",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeDeviceGroupBizChainResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeDeviceGroupBizChainResponse({}));
  }

  /**
   * @param request - AuthorizeDeviceGroupBizChainRequest
   * @returns AuthorizeDeviceGroupBizChainResponse
   */
  async authorizeDeviceGroupBizChain(request: $_model.AuthorizeDeviceGroupBizChainRequest): Promise<$_model.AuthorizeDeviceGroupBizChainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeDeviceGroupBizChainWithOptions(request, runtime);
  }

  /**
   * @param request - AuthorizeMemberBizChainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeMemberBizChainResponse
   */
  async authorizeMemberBizChainWithOptions(request: $_model.AuthorizeMemberBizChainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeMemberBizChainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizChainInfo)) {
      query["BizChainInfo"] = request.bizChainInfo;
    }

    if (!$dara.isNull(request.memberId)) {
      query["MemberId"] = request.memberId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeMemberBizChain",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeMemberBizChainResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeMemberBizChainResponse({}));
  }

  /**
   * @param request - AuthorizeMemberBizChainRequest
   * @returns AuthorizeMemberBizChainResponse
   */
  async authorizeMemberBizChain(request: $_model.AuthorizeMemberBizChainRequest): Promise<$_model.AuthorizeMemberBizChainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeMemberBizChainWithOptions(request, runtime);
  }

  /**
   * @param request - DeletePrivacyRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePrivacyRuleResponse
   */
  async deletePrivacyRuleWithOptions(request: $_model.DeletePrivacyRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePrivacyRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.privacyRuleId)) {
      query["PrivacyRuleId"] = request.privacyRuleId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePrivacyRule",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePrivacyRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeletePrivacyRuleResponse({}));
  }

  /**
   * @param request - DeletePrivacyRuleRequest
   * @returns DeletePrivacyRuleResponse
   */
  async deletePrivacyRule(request: $_model.DeletePrivacyRuleRequest): Promise<$_model.DeletePrivacyRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePrivacyRuleWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteRouteRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRouteRuleResponse
   */
  async deleteRouteRuleWithOptions(request: $_model.DeleteRouteRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRouteRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.routeRuleId)) {
      query["RouteRuleId"] = request.routeRuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRouteRule",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRouteRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRouteRuleResponse({}));
  }

  /**
   * @param request - DeleteRouteRuleRequest
   * @returns DeleteRouteRuleResponse
   */
  async deleteRouteRule(request: $_model.DeleteRouteRuleRequest): Promise<$_model.DeleteRouteRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRouteRuleWithOptions(request, runtime);
  }

  /**
   * 成员拒绝接入
   * 
   * @param request - DeniedMemberAccessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeniedMemberAccessResponse
   */
  async deniedMemberAccessWithOptions(request: $_model.DeniedMemberAccessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeniedMemberAccessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.memberAccountId)) {
      query["MemberAccountId"] = request.memberAccountId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeniedMemberAccess",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeniedMemberAccessResponse>(await this.callApi(params, req, runtime), new $_model.DeniedMemberAccessResponse({}));
  }

  /**
   * 成员拒绝接入
   * 
   * @param request - DeniedMemberAccessRequest
   * @returns DeniedMemberAccessResponse
   */
  async deniedMemberAccess(request: $_model.DeniedMemberAccessRequest): Promise<$_model.DeniedMemberAccessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deniedMemberAccessWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeAccountRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountRoleResponse
   */
  async describeAccountRoleWithOptions(request: $_model.DescribeAccountRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccountRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccountRole",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccountRoleResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccountRoleResponse({}));
  }

  /**
   * @param request - DescribeAccountRoleRequest
   * @returns DescribeAccountRoleResponse
   */
  async describeAccountRole(request: $_model.DescribeAccountRoleRequest): Promise<$_model.DescribeAccountRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccountRoleWithOptions(request, runtime);
  }

  /**
   * 查询管理方信息
   * 
   * @param request - DescribeAdminInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdminInfoResponse
   */
  async describeAdminInfoWithOptions(request: $_model.DescribeAdminInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAdminInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAdminInfo",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAdminInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAdminInfoResponse({}));
  }

  /**
   * 查询管理方信息
   * 
   * @param request - DescribeAdminInfoRequest
   * @returns DescribeAdminInfoResponse
   */
  async describeAdminInfo(request: $_model.DescribeAdminInfoRequest): Promise<$_model.DescribeAdminInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAdminInfoWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeBizChainStatInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBizChainStatInfoResponse
   */
  async describeBizChainStatInfoWithOptions(request: $_model.DescribeBizChainStatInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBizChainStatInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBizChainStatInfo",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBizChainStatInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBizChainStatInfoResponse({}));
  }

  /**
   * @param request - DescribeBizChainStatInfoRequest
   * @returns DescribeBizChainStatInfoResponse
   */
  async describeBizChainStatInfo(request: $_model.DescribeBizChainStatInfoRequest): Promise<$_model.DescribeBizChainStatInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBizChainStatInfoWithOptions(request, runtime);
  }

  /**
   * 查询概览API信息
   * 
   * @param request - DescribeDashboardApiInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDashboardApiInfoResponse
   */
  async describeDashboardApiInfoWithOptions(request: $_model.DescribeDashboardApiInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDashboardApiInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDashboardApiInfo",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDashboardApiInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDashboardApiInfoResponse({}));
  }

  /**
   * 查询概览API信息
   * 
   * @param request - DescribeDashboardApiInfoRequest
   * @returns DescribeDashboardApiInfoResponse
   */
  async describeDashboardApiInfo(request: $_model.DescribeDashboardApiInfoRequest): Promise<$_model.DescribeDashboardApiInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDashboardApiInfoWithOptions(request, runtime);
  }

  /**
   * 查询概览信息
   * 
   * @param request - DescribeDashboardBaseInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDashboardBaseInfoResponse
   */
  async describeDashboardBaseInfoWithOptions(request: $_model.DescribeDashboardBaseInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDashboardBaseInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDashboardBaseInfo",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDashboardBaseInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDashboardBaseInfoResponse({}));
  }

  /**
   * 查询概览信息
   * 
   * @param request - DescribeDashboardBaseInfoRequest
   * @returns DescribeDashboardBaseInfoResponse
   */
  async describeDashboardBaseInfo(request: $_model.DescribeDashboardBaseInfoRequest): Promise<$_model.DescribeDashboardBaseInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDashboardBaseInfoWithOptions(request, runtime);
  }

  /**
   * 查询概览设备信息
   * 
   * @param request - DescribeDashboardDeviceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDashboardDeviceInfoResponse
   */
  async describeDashboardDeviceInfoWithOptions(request: $_model.DescribeDashboardDeviceInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDashboardDeviceInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDashboardDeviceInfo",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDashboardDeviceInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDashboardDeviceInfoResponse({}));
  }

  /**
   * 查询概览设备信息
   * 
   * @param request - DescribeDashboardDeviceInfoRequest
   * @returns DescribeDashboardDeviceInfoResponse
   */
  async describeDashboardDeviceInfo(request: $_model.DescribeDashboardDeviceInfoRequest): Promise<$_model.DescribeDashboardDeviceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDashboardDeviceInfoWithOptions(request, runtime);
  }

  /**
   * 查询概览成员API信息
   * 
   * @param request - DescribeDashboardMemberApiInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDashboardMemberApiInfoResponse
   */
  async describeDashboardMemberApiInfoWithOptions(request: $_model.DescribeDashboardMemberApiInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDashboardMemberApiInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDashboardMemberApiInfo",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDashboardMemberApiInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDashboardMemberApiInfoResponse({}));
  }

  /**
   * 查询概览成员API信息
   * 
   * @param request - DescribeDashboardMemberApiInfoRequest
   * @returns DescribeDashboardMemberApiInfoResponse
   */
  async describeDashboardMemberApiInfo(request: $_model.DescribeDashboardMemberApiInfoRequest): Promise<$_model.DescribeDashboardMemberApiInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDashboardMemberApiInfoWithOptions(request, runtime);
  }

  /**
   * 查询概览成员设备信息
   * 
   * @param request - DescribeDashboardMemberDeviceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDashboardMemberDeviceInfoResponse
   */
  async describeDashboardMemberDeviceInfoWithOptions(request: $_model.DescribeDashboardMemberDeviceInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDashboardMemberDeviceInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDashboardMemberDeviceInfo",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDashboardMemberDeviceInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDashboardMemberDeviceInfoResponse({}));
  }

  /**
   * 查询概览成员设备信息
   * 
   * @param request - DescribeDashboardMemberDeviceInfoRequest
   * @returns DescribeDashboardMemberDeviceInfoResponse
   */
  async describeDashboardMemberDeviceInfo(request: $_model.DescribeDashboardMemberDeviceInfoRequest): Promise<$_model.DescribeDashboardMemberDeviceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDashboardMemberDeviceInfoWithOptions(request, runtime);
  }

  /**
   * 查询设备信息
   * 
   * @param request - DescribeDeviceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeviceInfoResponse
   */
  async describeDeviceInfoWithOptions(request: $_model.DescribeDeviceInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDeviceInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDeviceInfo",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDeviceInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDeviceInfoResponse({}));
  }

  /**
   * 查询设备信息
   * 
   * @param request - DescribeDeviceInfoRequest
   * @returns DescribeDeviceInfoResponse
   */
  async describeDeviceInfo(request: $_model.DescribeDeviceInfoRequest): Promise<$_model.DescribeDeviceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeviceInfoWithOptions(request, runtime);
  }

  /**
   * 查询边缘一体机统计信息
   * 
   * @param request - DescribeEdgeStatInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEdgeStatInfoResponse
   */
  async describeEdgeStatInfoWithOptions(request: $_model.DescribeEdgeStatInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEdgeStatInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.edgeDn)) {
      query["EdgeDn"] = request.edgeDn;
    }

    if (!$dara.isNull(request.edgePk)) {
      query["EdgePk"] = request.edgePk;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEdgeStatInfo",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEdgeStatInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEdgeStatInfoResponse({}));
  }

  /**
   * 查询边缘一体机统计信息
   * 
   * @param request - DescribeEdgeStatInfoRequest
   * @returns DescribeEdgeStatInfoResponse
   */
  async describeEdgeStatInfo(request: $_model.DescribeEdgeStatInfoRequest): Promise<$_model.DescribeEdgeStatInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEdgeStatInfoWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeMemberBizChainStatInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMemberBizChainStatInfoResponse
   */
  async describeMemberBizChainStatInfoWithOptions(request: $_model.DescribeMemberBizChainStatInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMemberBizChainStatInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMemberBizChainStatInfo",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMemberBizChainStatInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMemberBizChainStatInfoResponse({}));
  }

  /**
   * @param request - DescribeMemberBizChainStatInfoRequest
   * @returns DescribeMemberBizChainStatInfoResponse
   */
  async describeMemberBizChainStatInfo(request: $_model.DescribeMemberBizChainStatInfoRequest): Promise<$_model.DescribeMemberBizChainStatInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMemberBizChainStatInfoWithOptions(request, runtime);
  }

  /**
   * 查询统计成员API信息
   * 
   * @param request - DescribeMemberStatInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMemberStatInfoResponse
   */
  async describeMemberStatInfoWithOptions(request: $_model.DescribeMemberStatInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMemberStatInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMemberStatInfo",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMemberStatInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMemberStatInfoResponse({}));
  }

  /**
   * 查询统计成员API信息
   * 
   * @param request - DescribeMemberStatInfoRequest
   * @returns DescribeMemberStatInfoResponse
   */
  async describeMemberStatInfo(request: $_model.DescribeMemberStatInfoRequest): Promise<$_model.DescribeMemberStatInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMemberStatInfoWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeMemberTotalStatInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMemberTotalStatInfoResponse
   */
  async describeMemberTotalStatInfoWithOptions(request: $_model.DescribeMemberTotalStatInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMemberTotalStatInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMemberTotalStatInfo",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMemberTotalStatInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMemberTotalStatInfoResponse({}));
  }

  /**
   * @param request - DescribeMemberTotalStatInfoRequest
   * @returns DescribeMemberTotalStatInfoResponse
   */
  async describeMemberTotalStatInfo(request: $_model.DescribeMemberTotalStatInfoRequest): Promise<$_model.DescribeMemberTotalStatInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMemberTotalStatInfoWithOptions(request, runtime);
  }

  /**
   * @param request - DescribePackgeInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePackgeInfoResponse
   */
  async describePackgeInfoWithOptions(request: $_model.DescribePackgeInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePackgeInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePackgeInfo",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePackgeInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribePackgeInfoResponse({}));
  }

  /**
   * @param request - DescribePackgeInfoRequest
   * @returns DescribePackgeInfoResponse
   */
  async describePackgeInfo(request: $_model.DescribePackgeInfoRequest): Promise<$_model.DescribePackgeInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePackgeInfoWithOptions(request, runtime);
  }

  /**
   * 查询统计设备信息
   * 
   * @param request - DescribeStatDeviceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStatDeviceInfoResponse
   */
  async describeStatDeviceInfoWithOptions(request: $_model.DescribeStatDeviceInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeStatDeviceInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeStatDeviceInfo",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeStatDeviceInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeStatDeviceInfoResponse({}));
  }

  /**
   * 查询统计设备信息
   * 
   * @param request - DescribeStatDeviceInfoRequest
   * @returns DescribeStatDeviceInfoResponse
   */
  async describeStatDeviceInfo(request: $_model.DescribeStatDeviceInfoRequest): Promise<$_model.DescribeStatDeviceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStatDeviceInfoWithOptions(request, runtime);
  }

  /**
   * 查询统计成员设备信息
   * 
   * @param request - DescribeStatMemberDeviceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStatMemberDeviceInfoResponse
   */
  async describeStatMemberDeviceInfoWithOptions(request: $_model.DescribeStatMemberDeviceInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeStatMemberDeviceInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeStatMemberDeviceInfo",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeStatMemberDeviceInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeStatMemberDeviceInfoResponse({}));
  }

  /**
   * 查询统计成员设备信息
   * 
   * @param request - DescribeStatMemberDeviceInfoRequest
   * @returns DescribeStatMemberDeviceInfoResponse
   */
  async describeStatMemberDeviceInfo(request: $_model.DescribeStatMemberDeviceInfoRequest): Promise<$_model.DescribeStatMemberDeviceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStatMemberDeviceInfoWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeTotalStatInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTotalStatInfoResponse
   */
  async describeTotalStatInfoWithOptions(request: $_model.DescribeTotalStatInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTotalStatInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTotalStatInfo",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTotalStatInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTotalStatInfoResponse({}));
  }

  /**
   * @param request - DescribeTotalStatInfoRequest
   * @returns DescribeTotalStatInfoResponse
   */
  async describeTotalStatInfo(request: $_model.DescribeTotalStatInfoRequest): Promise<$_model.DescribeTotalStatInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTotalStatInfoWithOptions(request, runtime);
  }

  /**
   * @param request - DisableDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableDeviceResponse
   */
  async disableDeviceWithOptions(request: $_model.DisableDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableDevice",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableDeviceResponse>(await this.callApi(params, req, runtime), new $_model.DisableDeviceResponse({}));
  }

  /**
   * @param request - DisableDeviceRequest
   * @returns DisableDeviceResponse
   */
  async disableDevice(request: $_model.DisableDeviceRequest): Promise<$_model.DisableDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - DisableDeviceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableDeviceGroupResponse
   */
  async disableDeviceGroupWithOptions(request: $_model.DisableDeviceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableDeviceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceGroupId)) {
      query["DeviceGroupId"] = request.deviceGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableDeviceGroup",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableDeviceGroupResponse>(await this.callApi(params, req, runtime), new $_model.DisableDeviceGroupResponse({}));
  }

  /**
   * @param request - DisableDeviceGroupRequest
   * @returns DisableDeviceGroupResponse
   */
  async disableDeviceGroup(request: $_model.DisableDeviceGroupRequest): Promise<$_model.DisableDeviceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableDeviceGroupWithOptions(request, runtime);
  }

  /**
   * @param request - DownloadPrivacyKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DownloadPrivacyKeyResponse
   */
  async downloadPrivacyKeyWithOptions(request: $_model.DownloadPrivacyKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DownloadPrivacyKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DownloadPrivacyKey",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DownloadPrivacyKeyResponse>(await this.callApi(params, req, runtime), new $_model.DownloadPrivacyKeyResponse({}));
  }

  /**
   * @param request - DownloadPrivacyKeyRequest
   * @returns DownloadPrivacyKeyResponse
   */
  async downloadPrivacyKey(request: $_model.DownloadPrivacyKeyRequest): Promise<$_model.DownloadPrivacyKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.downloadPrivacyKeyWithOptions(request, runtime);
  }

  /**
   * @param request - EnableDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableDeviceResponse
   */
  async enableDeviceWithOptions(request: $_model.EnableDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableDevice",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableDeviceResponse>(await this.callApi(params, req, runtime), new $_model.EnableDeviceResponse({}));
  }

  /**
   * @param request - EnableDeviceRequest
   * @returns EnableDeviceResponse
   */
  async enableDevice(request: $_model.EnableDeviceRequest): Promise<$_model.EnableDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - EnableDeviceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableDeviceGroupResponse
   */
  async enableDeviceGroupWithOptions(request: $_model.EnableDeviceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableDeviceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceGroupId)) {
      query["DeviceGroupId"] = request.deviceGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableDeviceGroup",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableDeviceGroupResponse>(await this.callApi(params, req, runtime), new $_model.EnableDeviceGroupResponse({}));
  }

  /**
   * @param request - EnableDeviceGroupRequest
   * @returns EnableDeviceGroupResponse
   */
  async enableDeviceGroup(request: $_model.EnableDeviceGroupRequest): Promise<$_model.EnableDeviceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableDeviceGroupWithOptions(request, runtime);
  }

  /**
   * @param request - FreezeMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FreezeMemberResponse
   */
  async freezeMemberWithOptions(request: $_model.FreezeMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FreezeMemberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.memberId)) {
      query["MemberId"] = request.memberId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FreezeMember",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FreezeMemberResponse>(await this.callApi(params, req, runtime), new $_model.FreezeMemberResponse({}));
  }

  /**
   * @param request - FreezeMemberRequest
   * @returns FreezeMemberResponse
   */
  async freezeMember(request: $_model.FreezeMemberRequest): Promise<$_model.FreezeMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.freezeMemberWithOptions(request, runtime);
  }

  /**
   * @param request - GetEdgeTotalDeviceCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEdgeTotalDeviceCountResponse
   */
  async getEdgeTotalDeviceCountWithOptions(request: $_model.GetEdgeTotalDeviceCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEdgeTotalDeviceCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEdgeTotalDeviceCount",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEdgeTotalDeviceCountResponse>(await this.callApi(params, req, runtime), new $_model.GetEdgeTotalDeviceCountResponse({}));
  }

  /**
   * @param request - GetEdgeTotalDeviceCountRequest
   * @returns GetEdgeTotalDeviceCountResponse
   */
  async getEdgeTotalDeviceCount(request: $_model.GetEdgeTotalDeviceCountRequest): Promise<$_model.GetEdgeTotalDeviceCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEdgeTotalDeviceCountWithOptions(request, runtime);
  }

  /**
   * @param request - ListAllAdminRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAllAdminResponse
   */
  async listAllAdminWithOptions(request: $_model.ListAllAdminRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAllAdminResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAllAdmin",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAllAdminResponse>(await this.callApi(params, req, runtime), new $_model.ListAllAdminResponse({}));
  }

  /**
   * @param request - ListAllAdminRequest
   * @returns ListAllAdminResponse
   */
  async listAllAdmin(request: $_model.ListAllAdminRequest): Promise<$_model.ListAllAdminResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAllAdminWithOptions(request, runtime);
  }

  /**
   * @param request - ListAllBizChainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAllBizChainResponse
   */
  async listAllBizChainWithOptions(request: $_model.ListAllBizChainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAllBizChainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAllBizChain",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAllBizChainResponse>(await this.callApi(params, req, runtime), new $_model.ListAllBizChainResponse({}));
  }

  /**
   * @param request - ListAllBizChainRequest
   * @returns ListAllBizChainResponse
   */
  async listAllBizChain(request: $_model.ListAllBizChainRequest): Promise<$_model.ListAllBizChainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAllBizChainWithOptions(request, runtime);
  }

  /**
   * @param request - ListAllBizChainContractRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAllBizChainContractResponse
   */
  async listAllBizChainContractWithOptions(request: $_model.ListAllBizChainContractRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAllBizChainContractResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAllBizChainContract",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAllBizChainContractResponse>(await this.callApi(params, req, runtime), new $_model.ListAllBizChainContractResponse({}));
  }

  /**
   * @param request - ListAllBizChainContractRequest
   * @returns ListAllBizChainContractResponse
   */
  async listAllBizChainContract(request: $_model.ListAllBizChainContractRequest): Promise<$_model.ListAllBizChainContractResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAllBizChainContractWithOptions(request, runtime);
  }

  /**
   * @param request - ListAllDeviceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAllDeviceGroupResponse
   */
  async listAllDeviceGroupWithOptions(request: $_model.ListAllDeviceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAllDeviceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAllDeviceGroup",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAllDeviceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListAllDeviceGroupResponse({}));
  }

  /**
   * @param request - ListAllDeviceGroupRequest
   * @returns ListAllDeviceGroupResponse
   */
  async listAllDeviceGroup(request: $_model.ListAllDeviceGroupRequest): Promise<$_model.ListAllDeviceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAllDeviceGroupWithOptions(request, runtime);
  }

  /**
   * @param request - ListAllMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAllMemberResponse
   */
  async listAllMemberWithOptions(request: $_model.ListAllMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAllMemberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAllMember",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAllMemberResponse>(await this.callApi(params, req, runtime), new $_model.ListAllMemberResponse({}));
  }

  /**
   * @param request - ListAllMemberRequest
   * @returns ListAllMemberResponse
   */
  async listAllMember(request: $_model.ListAllMemberRequest): Promise<$_model.ListAllMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAllMemberWithOptions(request, runtime);
  }

  /**
   * @param request - ListAllPrivacyAlgorithmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAllPrivacyAlgorithmResponse
   */
  async listAllPrivacyAlgorithmWithOptions(request: $_model.ListAllPrivacyAlgorithmRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAllPrivacyAlgorithmResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAllPrivacyAlgorithm",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAllPrivacyAlgorithmResponse>(await this.callApi(params, req, runtime), new $_model.ListAllPrivacyAlgorithmResponse({}));
  }

  /**
   * @param request - ListAllPrivacyAlgorithmRequest
   * @returns ListAllPrivacyAlgorithmResponse
   */
  async listAllPrivacyAlgorithm(request: $_model.ListAllPrivacyAlgorithmRequest): Promise<$_model.ListAllPrivacyAlgorithmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAllPrivacyAlgorithmWithOptions(request, runtime);
  }

  /**
   * @param request - ListAllPrivacyRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAllPrivacyRuleResponse
   */
  async listAllPrivacyRuleWithOptions(request: $_model.ListAllPrivacyRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAllPrivacyRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAllPrivacyRule",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAllPrivacyRuleResponse>(await this.callApi(params, req, runtime), new $_model.ListAllPrivacyRuleResponse({}));
  }

  /**
   * @param request - ListAllPrivacyRuleRequest
   * @returns ListAllPrivacyRuleResponse
   */
  async listAllPrivacyRule(request: $_model.ListAllPrivacyRuleRequest): Promise<$_model.ListAllPrivacyRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAllPrivacyRuleWithOptions(request, runtime);
  }

  /**
   * @param request - ListAllProductKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAllProductKeyResponse
   */
  async listAllProductKeyWithOptions(request: $_model.ListAllProductKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAllProductKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAllProductKey",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAllProductKeyResponse>(await this.callApi(params, req, runtime), new $_model.ListAllProductKeyResponse({}));
  }

  /**
   * @param request - ListAllProductKeyRequest
   * @returns ListAllProductKeyResponse
   */
  async listAllProductKey(request: $_model.ListAllProductKeyRequest): Promise<$_model.ListAllProductKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAllProductKeyWithOptions(request, runtime);
  }

  /**
   * @param request - ListAllSystemContractRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAllSystemContractResponse
   */
  async listAllSystemContractWithOptions(request: $_model.ListAllSystemContractRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAllSystemContractResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.blockChainType)) {
      query["BlockChainType"] = request.blockChainType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAllSystemContract",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAllSystemContractResponse>(await this.callApi(params, req, runtime), new $_model.ListAllSystemContractResponse({}));
  }

  /**
   * @param request - ListAllSystemContractRequest
   * @returns ListAllSystemContractResponse
   */
  async listAllSystemContract(request: $_model.ListAllSystemContractRequest): Promise<$_model.ListAllSystemContractResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAllSystemContractWithOptions(request, runtime);
  }

  /**
   * @param request - ListBaaSAntChainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBaaSAntChainResponse
   */
  async listBaaSAntChainWithOptions(request: $_model.ListBaaSAntChainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBaaSAntChainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baaSAntChainConsortiumId)) {
      query["BaaSAntChainConsortiumId"] = request.baaSAntChainConsortiumId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBaaSAntChain",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBaaSAntChainResponse>(await this.callApi(params, req, runtime), new $_model.ListBaaSAntChainResponse({}));
  }

  /**
   * @param request - ListBaaSAntChainRequest
   * @returns ListBaaSAntChainResponse
   */
  async listBaaSAntChain(request: $_model.ListBaaSAntChainRequest): Promise<$_model.ListBaaSAntChainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBaaSAntChainWithOptions(request, runtime);
  }

  /**
   * @param request - ListBaaSAntChainConsortiumRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBaaSAntChainConsortiumResponse
   */
  async listBaaSAntChainConsortiumWithOptions(request: $_model.ListBaaSAntChainConsortiumRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBaaSAntChainConsortiumResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBaaSAntChainConsortium",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBaaSAntChainConsortiumResponse>(await this.callApi(params, req, runtime), new $_model.ListBaaSAntChainConsortiumResponse({}));
  }

  /**
   * @param request - ListBaaSAntChainConsortiumRequest
   * @returns ListBaaSAntChainConsortiumResponse
   */
  async listBaaSAntChainConsortium(request: $_model.ListBaaSAntChainConsortiumRequest): Promise<$_model.ListBaaSAntChainConsortiumResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBaaSAntChainConsortiumWithOptions(request, runtime);
  }

  /**
   * @param request - ListBaaSAntChainPeerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBaaSAntChainPeerResponse
   */
  async listBaaSAntChainPeerWithOptions(request: $_model.ListBaaSAntChainPeerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBaaSAntChainPeerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baaSAntChainChainId)) {
      query["BaaSAntChainChainId"] = request.baaSAntChainChainId;
    }

    if (!$dara.isNull(request.baaSAntChainConsortiumId)) {
      query["BaaSAntChainConsortiumId"] = request.baaSAntChainConsortiumId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBaaSAntChainPeer",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBaaSAntChainPeerResponse>(await this.callApi(params, req, runtime), new $_model.ListBaaSAntChainPeerResponse({}));
  }

  /**
   * @param request - ListBaaSAntChainPeerRequest
   * @returns ListBaaSAntChainPeerResponse
   */
  async listBaaSAntChainPeer(request: $_model.ListBaaSAntChainPeerRequest): Promise<$_model.ListBaaSAntChainPeerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBaaSAntChainPeerWithOptions(request, runtime);
  }

  /**
   * @param request - ListBaaSFabricChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBaaSFabricChannelResponse
   */
  async listBaaSFabricChannelWithOptions(request: $_model.ListBaaSFabricChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBaaSFabricChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baaSFabricConsortiumId)) {
      query["BaaSFabricConsortiumId"] = request.baaSFabricConsortiumId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBaaSFabricChannel",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBaaSFabricChannelResponse>(await this.callApi(params, req, runtime), new $_model.ListBaaSFabricChannelResponse({}));
  }

  /**
   * @param request - ListBaaSFabricChannelRequest
   * @returns ListBaaSFabricChannelResponse
   */
  async listBaaSFabricChannel(request: $_model.ListBaaSFabricChannelRequest): Promise<$_model.ListBaaSFabricChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBaaSFabricChannelWithOptions(request, runtime);
  }

  /**
   * @param request - ListBaaSFabricConsortiumRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBaaSFabricConsortiumResponse
   */
  async listBaaSFabricConsortiumWithOptions(request: $_model.ListBaaSFabricConsortiumRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBaaSFabricConsortiumResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBaaSFabricConsortium",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBaaSFabricConsortiumResponse>(await this.callApi(params, req, runtime), new $_model.ListBaaSFabricConsortiumResponse({}));
  }

  /**
   * @param request - ListBaaSFabricConsortiumRequest
   * @returns ListBaaSFabricConsortiumResponse
   */
  async listBaaSFabricConsortium(request: $_model.ListBaaSFabricConsortiumRequest): Promise<$_model.ListBaaSFabricConsortiumResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBaaSFabricConsortiumWithOptions(request, runtime);
  }

  /**
   * @param request - ListBaaSFabricOrganizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBaaSFabricOrganizationResponse
   */
  async listBaaSFabricOrganizationWithOptions(request: $_model.ListBaaSFabricOrganizationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBaaSFabricOrganizationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baaSFabricChannelId)) {
      query["BaaSFabricChannelId"] = request.baaSFabricChannelId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBaaSFabricOrganization",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBaaSFabricOrganizationResponse>(await this.callApi(params, req, runtime), new $_model.ListBaaSFabricOrganizationResponse({}));
  }

  /**
   * @param request - ListBaaSFabricOrganizationRequest
   * @returns ListBaaSFabricOrganizationResponse
   */
  async listBaaSFabricOrganization(request: $_model.ListBaaSFabricOrganizationRequest): Promise<$_model.ListBaaSFabricOrganizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBaaSFabricOrganizationWithOptions(request, runtime);
  }

  /**
   * @param request - ListBizChainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBizChainResponse
   */
  async listBizChainWithOptions(request: $_model.ListBizChainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBizChainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.num)) {
      query["Num"] = request.num;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBizChain",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBizChainResponse>(await this.callApi(params, req, runtime), new $_model.ListBizChainResponse({}));
  }

  /**
   * @param request - ListBizChainRequest
   * @returns ListBizChainResponse
   */
  async listBizChain(request: $_model.ListBizChainRequest): Promise<$_model.ListBizChainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBizChainWithOptions(request, runtime);
  }

  /**
   * @param request - ListBizChainDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBizChainDataResponse
   */
  async listBizChainDataWithOptions(request: $_model.ListBizChainDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBizChainDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ioTDataDID)) {
      query["IoTDataDID"] = request.ioTDataDID;
    }

    if (!$dara.isNull(request.memberId)) {
      query["MemberId"] = request.memberId;
    }

    if (!$dara.isNull(request.num)) {
      query["Num"] = request.num;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBizChainData",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBizChainDataResponse>(await this.callApi(params, req, runtime), new $_model.ListBizChainDataResponse({}));
  }

  /**
   * @param request - ListBizChainDataRequest
   * @returns ListBizChainDataResponse
   */
  async listBizChainData(request: $_model.ListBizChainDataRequest): Promise<$_model.ListBizChainDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBizChainDataWithOptions(request, runtime);
  }

  /**
   * @param request - ListDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeviceResponse
   */
  async listDeviceWithOptions(request: $_model.ListDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceGroupId)) {
      query["DeviceGroupId"] = request.deviceGroupId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.num)) {
      query["Num"] = request.num;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDevice",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeviceResponse>(await this.callApi(params, req, runtime), new $_model.ListDeviceResponse({}));
  }

  /**
   * @param request - ListDeviceRequest
   * @returns ListDeviceResponse
   */
  async listDevice(request: $_model.ListDeviceRequest): Promise<$_model.ListDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDeviceWithOptions(request, runtime);
  }

  /**
   * 查询设备组列表
   * 
   * @param request - ListDeviceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeviceGroupResponse
   */
  async listDeviceGroupWithOptions(request: $_model.ListDeviceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeviceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.memberName)) {
      query["MemberName"] = request.memberName;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.num)) {
      query["Num"] = request.num;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeviceGroup",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeviceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListDeviceGroupResponse({}));
  }

  /**
   * 查询设备组列表
   * 
   * @param request - ListDeviceGroupRequest
   * @returns ListDeviceGroupResponse
   */
  async listDeviceGroup(request: $_model.ListDeviceGroupRequest): Promise<$_model.ListDeviceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDeviceGroupWithOptions(request, runtime);
  }

  /**
   * @param request - ListDeviceGroupAuthorizedBizChainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeviceGroupAuthorizedBizChainResponse
   */
  async listDeviceGroupAuthorizedBizChainWithOptions(request: $_model.ListDeviceGroupAuthorizedBizChainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeviceGroupAuthorizedBizChainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceGroupId)) {
      query["DeviceGroupId"] = request.deviceGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeviceGroupAuthorizedBizChain",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeviceGroupAuthorizedBizChainResponse>(await this.callApi(params, req, runtime), new $_model.ListDeviceGroupAuthorizedBizChainResponse({}));
  }

  /**
   * @param request - ListDeviceGroupAuthorizedBizChainRequest
   * @returns ListDeviceGroupAuthorizedBizChainResponse
   */
  async listDeviceGroupAuthorizedBizChain(request: $_model.ListDeviceGroupAuthorizedBizChainRequest): Promise<$_model.ListDeviceGroupAuthorizedBizChainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDeviceGroupAuthorizedBizChainWithOptions(request, runtime);
  }

  /**
   * 查询边缘设备列表
   * 
   * @param request - ListEdgeDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEdgeDeviceResponse
   */
  async listEdgeDeviceWithOptions(request: $_model.ListEdgeDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEdgeDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.num)) {
      query["Num"] = request.num;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEdgeDevice",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEdgeDeviceResponse>(await this.callApi(params, req, runtime), new $_model.ListEdgeDeviceResponse({}));
  }

  /**
   * 查询边缘设备列表
   * 
   * @param request - ListEdgeDeviceRequest
   * @returns ListEdgeDeviceResponse
   */
  async listEdgeDevice(request: $_model.ListEdgeDeviceRequest): Promise<$_model.ListEdgeDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEdgeDeviceWithOptions(request, runtime);
  }

  /**
   * 查询边缘设备组列表
   * 
   * @param request - ListEdgeDeviceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEdgeDeviceGroupResponse
   */
  async listEdgeDeviceGroupWithOptions(request: $_model.ListEdgeDeviceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEdgeDeviceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.num)) {
      query["Num"] = request.num;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEdgeDeviceGroup",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEdgeDeviceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListEdgeDeviceGroupResponse({}));
  }

  /**
   * 查询边缘设备组列表
   * 
   * @param request - ListEdgeDeviceGroupRequest
   * @returns ListEdgeDeviceGroupResponse
   */
  async listEdgeDeviceGroup(request: $_model.ListEdgeDeviceGroupRequest): Promise<$_model.ListEdgeDeviceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEdgeDeviceGroupWithOptions(request, runtime);
  }

  /**
   * 查询成员列表
   * 
   * @param request - ListMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMemberResponse
   */
  async listMemberWithOptions(request: $_model.ListMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMemberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactor)) {
      query["Contactor"] = request.contactor;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.num)) {
      query["Num"] = request.num;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMember",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMemberResponse>(await this.callApi(params, req, runtime), new $_model.ListMemberResponse({}));
  }

  /**
   * 查询成员列表
   * 
   * @param request - ListMemberRequest
   * @returns ListMemberResponse
   */
  async listMember(request: $_model.ListMemberRequest): Promise<$_model.ListMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMemberWithOptions(request, runtime);
  }

  /**
   * 查询成员接入记录分页列表
   * 
   * @param request - ListMemberAccessRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMemberAccessRecordResponse
   */
  async listMemberAccessRecordWithOptions(request: $_model.ListMemberAccessRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMemberAccessRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessStatus)) {
      query["AccessStatus"] = request.accessStatus;
    }

    if (!$dara.isNull(request.contactor)) {
      query["Contactor"] = request.contactor;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.num)) {
      query["Num"] = request.num;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMemberAccessRecord",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMemberAccessRecordResponse>(await this.callApi(params, req, runtime), new $_model.ListMemberAccessRecordResponse({}));
  }

  /**
   * 查询成员接入记录分页列表
   * 
   * @param request - ListMemberAccessRecordRequest
   * @returns ListMemberAccessRecordResponse
   */
  async listMemberAccessRecord(request: $_model.ListMemberAccessRecordRequest): Promise<$_model.ListMemberAccessRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMemberAccessRecordWithOptions(request, runtime);
  }

  /**
   * @param request - ListMemberAuthorizedBizChainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMemberAuthorizedBizChainResponse
   */
  async listMemberAuthorizedBizChainWithOptions(request: $_model.ListMemberAuthorizedBizChainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMemberAuthorizedBizChainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.memberId)) {
      query["MemberId"] = request.memberId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMemberAuthorizedBizChain",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMemberAuthorizedBizChainResponse>(await this.callApi(params, req, runtime), new $_model.ListMemberAuthorizedBizChainResponse({}));
  }

  /**
   * @param request - ListMemberAuthorizedBizChainRequest
   * @returns ListMemberAuthorizedBizChainResponse
   */
  async listMemberAuthorizedBizChain(request: $_model.ListMemberAuthorizedBizChainRequest): Promise<$_model.ListMemberAuthorizedBizChainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMemberAuthorizedBizChainWithOptions(request, runtime);
  }

  /**
   * @param request - ListPrivacyRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrivacyRuleResponse
   */
  async listPrivacyRuleWithOptions(request: $_model.ListPrivacyRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrivacyRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.num)) {
      query["Num"] = request.num;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrivacyRule",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrivacyRuleResponse>(await this.callApi(params, req, runtime), new $_model.ListPrivacyRuleResponse({}));
  }

  /**
   * @param request - ListPrivacyRuleRequest
   * @returns ListPrivacyRuleResponse
   */
  async listPrivacyRule(request: $_model.ListPrivacyRuleRequest): Promise<$_model.ListPrivacyRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPrivacyRuleWithOptions(request, runtime);
  }

  /**
   * @param request - ListPrivacyRuleSharedMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrivacyRuleSharedMemberResponse
   */
  async listPrivacyRuleSharedMemberWithOptions(request: $_model.ListPrivacyRuleSharedMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrivacyRuleSharedMemberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.privacyRuleId)) {
      query["PrivacyRuleId"] = request.privacyRuleId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrivacyRuleSharedMember",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrivacyRuleSharedMemberResponse>(await this.callApi(params, req, runtime), new $_model.ListPrivacyRuleSharedMemberResponse({}));
  }

  /**
   * @param request - ListPrivacyRuleSharedMemberRequest
   * @returns ListPrivacyRuleSharedMemberResponse
   */
  async listPrivacyRuleSharedMember(request: $_model.ListPrivacyRuleSharedMemberRequest): Promise<$_model.ListPrivacyRuleSharedMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPrivacyRuleSharedMemberWithOptions(request, runtime);
  }

  /**
   * @param request - ListRouteRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRouteRuleResponse
   */
  async listRouteRuleWithOptions(request: $_model.ListRouteRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRouteRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizChainName)) {
      query["BizChainName"] = request.bizChainName;
    }

    if (!$dara.isNull(request.chainUpMode)) {
      query["ChainUpMode"] = request.chainUpMode;
    }

    if (!$dara.isNull(request.deviceGroupName)) {
      query["DeviceGroupName"] = request.deviceGroupName;
    }

    if (!$dara.isNull(request.num)) {
      query["Num"] = request.num;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRouteRule",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRouteRuleResponse>(await this.callApi(params, req, runtime), new $_model.ListRouteRuleResponse({}));
  }

  /**
   * @param request - ListRouteRuleRequest
   * @returns ListRouteRuleResponse
   */
  async listRouteRule(request: $_model.ListRouteRuleRequest): Promise<$_model.ListRouteRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRouteRuleWithOptions(request, runtime);
  }

  /**
   * @param request - QueryBlockchainDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryBlockchainDataResponse
   */
  async queryBlockchainDataWithOptions(request: $_model.QueryBlockchainDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryBlockchainDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!$dara.isNull(request.contractName)) {
      query["ContractName"] = request.contractName;
    }

    if (!$dara.isNull(request.invokeType)) {
      query["InvokeType"] = request.invokeType;
    }

    if (!$dara.isNull(request.iotDataDID)) {
      query["IotDataDID"] = request.iotDataDID;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.transactionId)) {
      query["TransactionId"] = request.transactionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryBlockchainData",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryBlockchainDataResponse>(await this.callApi(params, req, runtime), new $_model.QueryBlockchainDataResponse({}));
  }

  /**
   * @param request - QueryBlockchainDataRequest
   * @returns QueryBlockchainDataResponse
   */
  async queryBlockchainData(request: $_model.QueryBlockchainDataRequest): Promise<$_model.QueryBlockchainDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryBlockchainDataWithOptions(request, runtime);
  }

  /**
   * @param request - QueryBlockchainMetadataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryBlockchainMetadataResponse
   */
  async queryBlockchainMetadataWithOptions(request: $_model.QueryBlockchainMetadataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryBlockchainMetadataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!$dara.isNull(request.contractName)) {
      query["ContractName"] = request.contractName;
    }

    if (!$dara.isNull(request.invokeType)) {
      query["InvokeType"] = request.invokeType;
    }

    if (!$dara.isNull(request.iotDataDID)) {
      query["IotDataDID"] = request.iotDataDID;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.transactionId)) {
      query["TransactionId"] = request.transactionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryBlockchainMetadata",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryBlockchainMetadataResponse>(await this.callApi(params, req, runtime), new $_model.QueryBlockchainMetadataResponse({}));
  }

  /**
   * @param request - QueryBlockchainMetadataRequest
   * @returns QueryBlockchainMetadataResponse
   */
  async queryBlockchainMetadata(request: $_model.QueryBlockchainMetadataRequest): Promise<$_model.QueryBlockchainMetadataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryBlockchainMetadataWithOptions(request, runtime);
  }

  /**
   * @param request - SharePrivacyRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SharePrivacyRuleResponse
   */
  async sharePrivacyRuleWithOptions(request: $_model.SharePrivacyRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SharePrivacyRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.memberIdList)) {
      query["MemberIdList"] = request.memberIdList;
    }

    if (!$dara.isNull(request.privacyRuleId)) {
      query["PrivacyRuleId"] = request.privacyRuleId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SharePrivacyRule",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SharePrivacyRuleResponse>(await this.callApi(params, req, runtime), new $_model.SharePrivacyRuleResponse({}));
  }

  /**
   * @param request - SharePrivacyRuleRequest
   * @returns SharePrivacyRuleResponse
   */
  async sharePrivacyRule(request: $_model.SharePrivacyRuleRequest): Promise<$_model.SharePrivacyRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sharePrivacyRuleWithOptions(request, runtime);
  }

  /**
   * @param request - UnFreezeMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnFreezeMemberResponse
   */
  async unFreezeMemberWithOptions(request: $_model.UnFreezeMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnFreezeMemberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.memberId)) {
      query["MemberId"] = request.memberId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnFreezeMember",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnFreezeMemberResponse>(await this.callApi(params, req, runtime), new $_model.UnFreezeMemberResponse({}));
  }

  /**
   * @param request - UnFreezeMemberRequest
   * @returns UnFreezeMemberResponse
   */
  async unFreezeMember(request: $_model.UnFreezeMemberRequest): Promise<$_model.UnFreezeMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unFreezeMemberWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateBizChainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBizChainResponse
   */
  async updateBizChainWithOptions(request: $_model.UpdateBizChainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBizChainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBizChain",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBizChainResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBizChainResponse({}));
  }

  /**
   * @param request - UpdateBizChainRequest
   * @returns UpdateBizChainResponse
   */
  async updateBizChain(request: $_model.UpdateBizChainRequest): Promise<$_model.UpdateBizChainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateBizChainWithOptions(request, runtime);
  }

  /**
   * 修改成员信息
   * 
   * @param request - UpdateMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMemberResponse
   */
  async updateMemberWithOptions(request: $_model.UpdateMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMemberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizedCount)) {
      query["AuthorizedCount"] = request.authorizedCount;
    }

    if (!$dara.isNull(request.authorizedDeviceCount)) {
      query["AuthorizedDeviceCount"] = request.authorizedDeviceCount;
    }

    if (!$dara.isNull(request.contactor)) {
      query["Contactor"] = request.contactor;
    }

    if (!$dara.isNull(request.memberId)) {
      query["MemberId"] = request.memberId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.telephony)) {
      query["Telephony"] = request.telephony;
    }

    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMember",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMemberResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMemberResponse({}));
  }

  /**
   * 修改成员信息
   * 
   * @param request - UpdateMemberRequest
   * @returns UpdateMemberResponse
   */
  async updateMember(request: $_model.UpdateMemberRequest): Promise<$_model.UpdateMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMemberWithOptions(request, runtime);
  }

  /**
   * @param request - UpdatePrivacyRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePrivacyRuleResponse
   */
  async updatePrivacyRuleWithOptions(request: $_model.UpdatePrivacyRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePrivacyRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algImpl)) {
      query["AlgImpl"] = request.algImpl;
    }

    if (!$dara.isNull(request.algType)) {
      query["AlgType"] = request.algType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.privacyRuleId)) {
      query["PrivacyRuleId"] = request.privacyRuleId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePrivacyRule",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePrivacyRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePrivacyRuleResponse({}));
  }

  /**
   * @param request - UpdatePrivacyRuleRequest
   * @returns UpdatePrivacyRuleResponse
   */
  async updatePrivacyRule(request: $_model.UpdatePrivacyRuleRequest): Promise<$_model.UpdatePrivacyRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePrivacyRuleWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateRouteRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRouteRuleResponse
   */
  async updateRouteRuleWithOptions(request: $_model.UpdateRouteRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRouteRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!$dara.isNull(request.contractName)) {
      query["ContractName"] = request.contractName;
    }

    if (!$dara.isNull(request.contractTemplateId)) {
      query["ContractTemplateId"] = request.contractTemplateId;
    }

    if (!$dara.isNull(request.invokeType)) {
      query["InvokeType"] = request.invokeType;
    }

    if (!$dara.isNull(request.privacyRuleId)) {
      query["PrivacyRuleId"] = request.privacyRuleId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.routeRuleId)) {
      query["RouteRuleId"] = request.routeRuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRouteRule",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRouteRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRouteRuleResponse({}));
  }

  /**
   * @param request - UpdateRouteRuleRequest
   * @returns UpdateRouteRuleResponse
   */
  async updateRouteRule(request: $_model.UpdateRouteRuleRequest): Promise<$_model.UpdateRouteRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRouteRuleWithOptions(request, runtime);
  }

  /**
   * @param request - UploadIoTDataToBlockchainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadIoTDataToBlockchainResponse
   */
  async uploadIoTDataToBlockchainWithOptions(request: $_model.UploadIoTDataToBlockchainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadIoTDataToBlockchainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.iotAuthType)) {
      query["IotAuthType"] = request.iotAuthType;
    }

    if (!$dara.isNull(request.iotDataDID)) {
      query["IotDataDID"] = request.iotDataDID;
    }

    if (!$dara.isNull(request.iotDataDigest)) {
      query["IotDataDigest"] = request.iotDataDigest;
    }

    if (!$dara.isNull(request.iotDataToken)) {
      query["IotDataToken"] = request.iotDataToken;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotIdServiceProvider)) {
      query["IotIdServiceProvider"] = request.iotIdServiceProvider;
    }

    if (!$dara.isNull(request.iotIdSource)) {
      query["IotIdSource"] = request.iotIdSource;
    }

    if (!$dara.isNull(request.plainData)) {
      query["PlainData"] = request.plainData;
    }

    if (!$dara.isNull(request.privacyData)) {
      query["PrivacyData"] = request.privacyData;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadIoTDataToBlockchain",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadIoTDataToBlockchainResponse>(await this.callApi(params, req, runtime), new $_model.UploadIoTDataToBlockchainResponse({}));
  }

  /**
   * @param request - UploadIoTDataToBlockchainRequest
   * @returns UploadIoTDataToBlockchainResponse
   */
  async uploadIoTDataToBlockchain(request: $_model.UploadIoTDataToBlockchainRequest): Promise<$_model.UploadIoTDataToBlockchainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadIoTDataToBlockchainWithOptions(request, runtime);
  }

}
