// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("mse", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 新增服务鉴权规则
   * 
   * @param request - AddAuthPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddAuthPolicyResponse
   */
  async addAuthPolicyWithOptions(request: $_model.AddAuthPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddAuthPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.authRule)) {
      query["AuthRule"] = request.authRule;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.k8sNamespace)) {
      query["K8sNamespace"] = request.k8sNamespace;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddAuthPolicy",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddAuthPolicyResponse>(await this.callApi(params, req, runtime), new $_model.AddAuthPolicyResponse({}));
  }

  /**
   * 新增服务鉴权规则
   * 
   * @param request - AddAuthPolicyRequest
   * @returns AddAuthPolicyResponse
   */
  async addAuthPolicy(request: $_model.AddAuthPolicyRequest): Promise<$_model.AddAuthPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addAuthPolicyWithOptions(request, runtime);
  }

  /**
   * Creates authorization information for a gateway.
   * 
   * @param tmpReq - AddAuthResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddAuthResourceResponse
   */
  async addAuthResourceWithOptions(tmpReq: $_model.AddAuthResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddAuthResourceResponse> {
    tmpReq.validate();
    let request = new $_model.AddAuthResourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.authResourceHeaderList)) {
      request.authResourceHeaderListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.authResourceHeaderList, "AuthResourceHeaderList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.authId)) {
      query["AuthId"] = request.authId;
    }

    if (!$dara.isNull(request.authResourceHeaderListShrink)) {
      query["AuthResourceHeaderList"] = request.authResourceHeaderListShrink;
    }

    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.ignoreCase)) {
      query["IgnoreCase"] = request.ignoreCase;
    }

    if (!$dara.isNull(request.matchType)) {
      query["MatchType"] = request.matchType;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddAuthResource",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddAuthResourceResponse>(await this.callApi(params, req, runtime), new $_model.AddAuthResourceResponse({}));
  }

  /**
   * Creates authorization information for a gateway.
   * 
   * @param request - AddAuthResourceRequest
   * @returns AddAuthResourceResponse
   */
  async addAuthResource(request: $_model.AddAuthResourceRequest): Promise<$_model.AddAuthResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addAuthResourceWithOptions(request, runtime);
  }

  /**
   * Creates a blacklist or a whitelist.
   * 
   * @param request - AddBlackWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddBlackWhiteListResponse
   */
  async addBlackWhiteListWithOptions(request: $_model.AddBlackWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddBlackWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.isWhite)) {
      query["IsWhite"] = request.isWhite;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.note)) {
      query["Note"] = request.note;
    }

    if (!$dara.isNull(request.resourceIdJsonList)) {
      query["ResourceIdJsonList"] = request.resourceIdJsonList;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddBlackWhiteList",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddBlackWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.AddBlackWhiteListResponse({}));
  }

  /**
   * Creates a blacklist or a whitelist.
   * 
   * @param request - AddBlackWhiteListRequest
   * @returns AddBlackWhiteListResponse
   */
  async addBlackWhiteList(request: $_model.AddBlackWhiteListRequest): Promise<$_model.AddBlackWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addBlackWhiteListWithOptions(request, runtime);
  }

  /**
   * Adds a gateway.
   * 
   * @param tmpReq - AddGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddGatewayResponse
   */
  async addGatewayWithOptions(tmpReq: $_model.AddGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddGatewayResponse> {
    tmpReq.validate();
    let request = new $_model.AddGatewayShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.zoneInfo)) {
      request.zoneInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.zoneInfo, "ZoneInfo", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.clbNetworkType)) {
      query["ClbNetworkType"] = request.clbNetworkType;
    }

    if (!$dara.isNull(request.enableHardwareAcceleration)) {
      query["EnableHardwareAcceleration"] = request.enableHardwareAcceleration;
    }

    if (!$dara.isNull(request.enableSls)) {
      query["EnableSls"] = request.enableSls;
    }

    if (!$dara.isNull(request.enableXtrace)) {
      query["EnableXtrace"] = request.enableXtrace;
    }

    if (!$dara.isNull(request.enterpriseSecurityGroup)) {
      query["EnterpriseSecurityGroup"] = request.enterpriseSecurityGroup;
    }

    if (!$dara.isNull(request.internetSlbSpec)) {
      query["InternetSlbSpec"] = request.internetSlbSpec;
    }

    if (!$dara.isNull(request.managedEntryNetworkType)) {
      query["ManagedEntryNetworkType"] = request.managedEntryNetworkType;
    }

    if (!$dara.isNull(request.mserVersion)) {
      query["MserVersion"] = request.mserVersion;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nlbNetworkType)) {
      query["NlbNetworkType"] = request.nlbNetworkType;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.replica)) {
      query["Replica"] = request.replica;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.slbSpec)) {
      query["SlbSpec"] = request.slbSpec;
    }

    if (!$dara.isNull(request.spec)) {
      query["Spec"] = request.spec;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vSwitchId2)) {
      query["VSwitchId2"] = request.vSwitchId2;
    }

    if (!$dara.isNull(request.vpc)) {
      query["Vpc"] = request.vpc;
    }

    if (!$dara.isNull(request.xtraceRatio)) {
      query["XtraceRatio"] = request.xtraceRatio;
    }

    if (!$dara.isNull(request.zoneInfoShrink)) {
      query["ZoneInfo"] = request.zoneInfoShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddGateway",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddGatewayResponse>(await this.callApi(params, req, runtime), new $_model.AddGatewayResponse({}));
  }

  /**
   * Adds a gateway.
   * 
   * @param request - AddGatewayRequest
   * @returns AddGatewayResponse
   */
  async addGateway(request: $_model.AddGatewayRequest): Promise<$_model.AddGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addGatewayWithOptions(request, runtime);
  }

  /**
   * Adds an authentication configuration for a gateway.
   * 
   * @param tmpReq - AddGatewayAuthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddGatewayAuthResponse
   */
  async addGatewayAuthWithOptions(tmpReq: $_model.AddGatewayAuthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddGatewayAuthResponse> {
    tmpReq.validate();
    let request = new $_model.AddGatewayAuthShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.authResourceList)) {
      request.authResourceListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.authResourceList, "AuthResourceList", "json");
    }

    if (!$dara.isNull(tmpReq.externalAuthZJSON)) {
      request.externalAuthZJSONShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.externalAuthZJSON, "ExternalAuthZJSON", "json");
    }

    if (!$dara.isNull(tmpReq.scopesList)) {
      request.scopesListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scopesList, "ScopesList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.authResourceConfig)) {
      query["AuthResourceConfig"] = request.authResourceConfig;
    }

    if (!$dara.isNull(request.authResourceListShrink)) {
      query["AuthResourceList"] = request.authResourceListShrink;
    }

    if (!$dara.isNull(request.authResourceMode)) {
      query["AuthResourceMode"] = request.authResourceMode;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientSecret)) {
      query["ClientSecret"] = request.clientSecret;
    }

    if (!$dara.isNull(request.cookieDomain)) {
      query["CookieDomain"] = request.cookieDomain;
    }

    if (!$dara.isNull(request.externalAuthZJSONShrink)) {
      query["ExternalAuthZJSON"] = request.externalAuthZJSONShrink;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.isWhite)) {
      query["IsWhite"] = request.isWhite;
    }

    if (!$dara.isNull(request.issuer)) {
      query["Issuer"] = request.issuer;
    }

    if (!$dara.isNull(request.jwks)) {
      query["Jwks"] = request.jwks;
    }

    if (!$dara.isNull(request.loginUrl)) {
      query["LoginUrl"] = request.loginUrl;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.redirectUrl)) {
      query["RedirectUrl"] = request.redirectUrl;
    }

    if (!$dara.isNull(request.scopesListShrink)) {
      query["ScopesList"] = request.scopesListShrink;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.sub)) {
      query["Sub"] = request.sub;
    }

    if (!$dara.isNull(request.tokenName)) {
      query["TokenName"] = request.tokenName;
    }

    if (!$dara.isNull(request.tokenNamePrefix)) {
      query["TokenNamePrefix"] = request.tokenNamePrefix;
    }

    if (!$dara.isNull(request.tokenPass)) {
      query["TokenPass"] = request.tokenPass;
    }

    if (!$dara.isNull(request.tokenPosition)) {
      query["TokenPosition"] = request.tokenPosition;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddGatewayAuth",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddGatewayAuthResponse>(await this.callApi(params, req, runtime), new $_model.AddGatewayAuthResponse({}));
  }

  /**
   * Adds an authentication configuration for a gateway.
   * 
   * @param request - AddGatewayAuthRequest
   * @returns AddGatewayAuthResponse
   */
  async addGatewayAuth(request: $_model.AddGatewayAuthRequest): Promise<$_model.AddGatewayAuthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addGatewayAuthWithOptions(request, runtime);
  }

  /**
   * Adds a consumer on which a gateway performs authentication operations.
   * 
   * @param request - AddGatewayAuthConsumerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddGatewayAuthConsumerResponse
   */
  async addGatewayAuthConsumerWithOptions(request: $_model.AddGatewayAuthConsumerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddGatewayAuthConsumerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.encodeType)) {
      query["EncodeType"] = request.encodeType;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.jwks)) {
      query["Jwks"] = request.jwks;
    }

    if (!$dara.isNull(request.keyName)) {
      query["KeyName"] = request.keyName;
    }

    if (!$dara.isNull(request.keyValue)) {
      query["KeyValue"] = request.keyValue;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.tokenName)) {
      query["TokenName"] = request.tokenName;
    }

    if (!$dara.isNull(request.tokenPass)) {
      query["TokenPass"] = request.tokenPass;
    }

    if (!$dara.isNull(request.tokenPosition)) {
      query["TokenPosition"] = request.tokenPosition;
    }

    if (!$dara.isNull(request.tokenPrefix)) {
      query["TokenPrefix"] = request.tokenPrefix;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddGatewayAuthConsumer",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddGatewayAuthConsumerResponse>(await this.callApi(params, req, runtime), new $_model.AddGatewayAuthConsumerResponse({}));
  }

  /**
   * Adds a consumer on which a gateway performs authentication operations.
   * 
   * @param request - AddGatewayAuthConsumerRequest
   * @returns AddGatewayAuthConsumerResponse
   */
  async addGatewayAuthConsumer(request: $_model.AddGatewayAuthConsumerRequest): Promise<$_model.AddGatewayAuthConsumerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addGatewayAuthConsumerWithOptions(request, runtime);
  }

  /**
   * Associates a domain name with a gateway.
   * 
   * @param request - AddGatewayDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddGatewayDomainResponse
   */
  async addGatewayDomainWithOptions(request: $_model.AddGatewayDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddGatewayDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.http2)) {
      query["Http2"] = request.http2;
    }

    if (!$dara.isNull(request.mustHttps)) {
      query["MustHttps"] = request.mustHttps;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.tlsMax)) {
      query["TlsMax"] = request.tlsMax;
    }

    if (!$dara.isNull(request.tlsMin)) {
      query["TlsMin"] = request.tlsMin;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddGatewayDomain",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddGatewayDomainResponse>(await this.callApi(params, req, runtime), new $_model.AddGatewayDomainResponse({}));
  }

  /**
   * Associates a domain name with a gateway.
   * 
   * @param request - AddGatewayDomainRequest
   * @returns AddGatewayDomainResponse
   */
  async addGatewayDomain(request: $_model.AddGatewayDomainRequest): Promise<$_model.AddGatewayDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addGatewayDomainWithOptions(request, runtime);
  }

  /**
   * Adds a gateway route.
   * 
   * @param tmpReq - AddGatewayRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddGatewayRouteResponse
   */
  async addGatewayRouteWithOptions(tmpReq: $_model.AddGatewayRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddGatewayRouteResponse> {
    tmpReq.validate();
    let request = new $_model.AddGatewayRouteShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.directResponseJSON)) {
      request.directResponseJSONShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.directResponseJSON, "DirectResponseJSON", "json");
    }

    if (!$dara.isNull(tmpReq.fallbackServices)) {
      request.fallbackServicesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fallbackServices, "FallbackServices", "json");
    }

    if (!$dara.isNull(tmpReq.predicates)) {
      request.predicatesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.predicates, "Predicates", "json");
    }

    if (!$dara.isNull(tmpReq.redirectJSON)) {
      request.redirectJSONShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.redirectJSON, "RedirectJSON", "json");
    }

    if (!$dara.isNull(tmpReq.services)) {
      request.servicesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.services, "Services", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!$dara.isNull(request.directResponseJSONShrink)) {
      query["DirectResponseJSON"] = request.directResponseJSONShrink;
    }

    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.domainIdListJSON)) {
      query["DomainIdListJSON"] = request.domainIdListJSON;
    }

    if (!$dara.isNull(request.enableWaf)) {
      query["EnableWaf"] = request.enableWaf;
    }

    if (!$dara.isNull(request.fallback)) {
      query["Fallback"] = request.fallback;
    }

    if (!$dara.isNull(request.fallbackServicesShrink)) {
      query["FallbackServices"] = request.fallbackServicesShrink;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.policies)) {
      query["Policies"] = request.policies;
    }

    if (!$dara.isNull(request.predicatesShrink)) {
      query["Predicates"] = request.predicatesShrink;
    }

    if (!$dara.isNull(request.redirectJSONShrink)) {
      query["RedirectJSON"] = request.redirectJSONShrink;
    }

    if (!$dara.isNull(request.routeOrder)) {
      query["RouteOrder"] = request.routeOrder;
    }

    if (!$dara.isNull(request.routeType)) {
      query["RouteType"] = request.routeType;
    }

    if (!$dara.isNull(request.servicesShrink)) {
      query["Services"] = request.servicesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddGatewayRoute",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddGatewayRouteResponse>(await this.callApi(params, req, runtime), new $_model.AddGatewayRouteResponse({}));
  }

  /**
   * Adds a gateway route.
   * 
   * @param request - AddGatewayRouteRequest
   * @returns AddGatewayRouteResponse
   */
  async addGatewayRoute(request: $_model.AddGatewayRouteRequest): Promise<$_model.AddGatewayRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addGatewayRouteWithOptions(request, runtime);
  }

  /**
   * Adds a service version.
   * 
   * @param request - AddGatewayServiceVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddGatewayServiceVersionResponse
   */
  async addGatewayServiceVersionWithOptions(request: $_model.AddGatewayServiceVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddGatewayServiceVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddGatewayServiceVersion",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddGatewayServiceVersionResponse>(await this.callApi(params, req, runtime), new $_model.AddGatewayServiceVersionResponse({}));
  }

  /**
   * Adds a service version.
   * 
   * @param request - AddGatewayServiceVersionRequest
   * @returns AddGatewayServiceVersionResponse
   */
  async addGatewayServiceVersion(request: $_model.AddGatewayServiceVersionRequest): Promise<$_model.AddGatewayServiceVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addGatewayServiceVersionWithOptions(request, runtime);
  }

  /**
   * Associates a Server Load Balancer (SLB) instance with a gateway.
   * 
   * @param tmpReq - AddGatewaySlbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddGatewaySlbResponse
   */
  async addGatewaySlbWithOptions(tmpReq: $_model.AddGatewaySlbRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddGatewaySlbResponse> {
    tmpReq.validate();
    let request = new $_model.AddGatewaySlbShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.VServiceList)) {
      request.VServiceListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.VServiceList, "VServiceList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.httpPort)) {
      query["HttpPort"] = request.httpPort;
    }

    if (!$dara.isNull(request.httpsPort)) {
      query["HttpsPort"] = request.httpsPort;
    }

    if (!$dara.isNull(request.httpsVServerGroupId)) {
      query["HttpsVServerGroupId"] = request.httpsVServerGroupId;
    }

    if (!$dara.isNull(request.serviceWeight)) {
      query["ServiceWeight"] = request.serviceWeight;
    }

    if (!$dara.isNull(request.slbId)) {
      query["SlbId"] = request.slbId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!$dara.isNull(request.VServiceListShrink)) {
      query["VServiceList"] = request.VServiceListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddGatewaySlb",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddGatewaySlbResponse>(await this.callApi(params, req, runtime), new $_model.AddGatewaySlbResponse({}));
  }

  /**
   * Associates a Server Load Balancer (SLB) instance with a gateway.
   * 
   * @param request - AddGatewaySlbRequest
   * @returns AddGatewaySlbResponse
   */
  async addGatewaySlb(request: $_model.AddGatewaySlbRequest): Promise<$_model.AddGatewaySlbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addGatewaySlbWithOptions(request, runtime);
  }

  /**
   * Create a new migration task
   * 
   * @param request - AddMigrationTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMigrationTaskResponse
   */
  async addMigrationTaskWithOptions(request: $_model.AddMigrationTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddMigrationTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.originInstanceAddress)) {
      query["OriginInstanceAddress"] = request.originInstanceAddress;
    }

    if (!$dara.isNull(request.originInstanceName)) {
      query["OriginInstanceName"] = request.originInstanceName;
    }

    if (!$dara.isNull(request.originInstanceNamespace)) {
      query["OriginInstanceNamespace"] = request.originInstanceNamespace;
    }

    if (!$dara.isNull(request.projectDesc)) {
      query["ProjectDesc"] = request.projectDesc;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    if (!$dara.isNull(request.syncType)) {
      query["SyncType"] = request.syncType;
    }

    if (!$dara.isNull(request.targetClusterName)) {
      query["TargetClusterName"] = request.targetClusterName;
    }

    if (!$dara.isNull(request.targetClusterUrl)) {
      query["TargetClusterUrl"] = request.targetClusterUrl;
    }

    if (!$dara.isNull(request.targetInstanceId)) {
      query["TargetInstanceId"] = request.targetInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddMigrationTask",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddMigrationTaskResponse>(await this.callApi(params, req, runtime), new $_model.AddMigrationTaskResponse({}));
  }

  /**
   * Create a new migration task
   * 
   * @param request - AddMigrationTaskRequest
   * @returns AddMigrationTaskResponse
   */
  async addMigrationTask(request: $_model.AddMigrationTaskRequest): Promise<$_model.AddMigrationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addMigrationTaskWithOptions(request, runtime);
  }

  /**
   * Creates a mock rule.
   * 
   * @param request - AddMockRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMockRuleResponse
   */
  async addMockRuleWithOptions(request: $_model.AddMockRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddMockRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.consumerAppIds)) {
      query["ConsumerAppIds"] = request.consumerAppIds;
    }

    if (!$dara.isNull(request.dubboMockItems)) {
      query["DubboMockItems"] = request.dubboMockItems;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.extraJson)) {
      query["ExtraJson"] = request.extraJson;
    }

    if (!$dara.isNull(request.mockType)) {
      query["MockType"] = request.mockType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.providerAppId)) {
      query["ProviderAppId"] = request.providerAppId;
    }

    if (!$dara.isNull(request.providerAppName)) {
      query["ProviderAppName"] = request.providerAppName;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.scMockItems)) {
      query["ScMockItems"] = request.scMockItems;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddMockRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddMockRuleResponse>(await this.callApi(params, req, runtime), new $_model.AddMockRuleResponse({}));
  }

  /**
   * Creates a mock rule.
   * 
   * @param request - AddMockRuleRequest
   * @returns AddMockRuleResponse
   */
  async addMockRule(request: $_model.AddMockRuleRequest): Promise<$_model.AddMockRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addMockRuleWithOptions(request, runtime);
  }

  /**
   * Associates a certificate with a domain name of a gateway. You can specify a certificate that is hosted in Alibaba Cloud Security.
   * 
   * @param request - AddSSLCertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSSLCertResponse
   */
  async addSSLCertWithOptions(request: $_model.AddSSLCertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddSSLCertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddSSLCert",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddSSLCertResponse>(await this.callApi(params, req, runtime), new $_model.AddSSLCertResponse({}));
  }

  /**
   * Associates a certificate with a domain name of a gateway. You can specify a certificate that is hosted in Alibaba Cloud Security.
   * 
   * @param request - AddSSLCertRequest
   * @returns AddSSLCertResponse
   */
  async addSSLCert(request: $_model.AddSSLCertRequest): Promise<$_model.AddSSLCertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addSSLCertWithOptions(request, runtime);
  }

  /**
   * Creates a security group rule for a gateway.
   * 
   * @param request - AddSecurityGroupRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSecurityGroupRuleResponse
   */
  async addSecurityGroupRuleWithOptions(request: $_model.AddSecurityGroupRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddSecurityGroupRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.portRange)) {
      query["PortRange"] = request.portRange;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddSecurityGroupRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddSecurityGroupRuleResponse>(await this.callApi(params, req, runtime), new $_model.AddSecurityGroupRuleResponse({}));
  }

  /**
   * Creates a security group rule for a gateway.
   * 
   * @param request - AddSecurityGroupRuleRequest
   * @returns AddSecurityGroupRuleResponse
   */
  async addSecurityGroupRule(request: $_model.AddSecurityGroupRuleRequest): Promise<$_model.AddSecurityGroupRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addSecurityGroupRuleWithOptions(request, runtime);
  }

  /**
   * Adds a Nacos service source.
   * 
   * @param tmpReq - AddServiceSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddServiceSourceResponse
   */
  async addServiceSourceWithOptions(tmpReq: $_model.AddServiceSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddServiceSourceResponse> {
    tmpReq.validate();
    let request = new $_model.AddServiceSourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.groupList)) {
      request.groupListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupList, "GroupList", "json");
    }

    if (!$dara.isNull(tmpReq.ingressOptionsRequest)) {
      request.ingressOptionsRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ingressOptionsRequest, "IngressOptionsRequest", "json");
    }

    if (!$dara.isNull(tmpReq.pathList)) {
      request.pathListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pathList, "PathList", "json");
    }

    if (!$dara.isNull(tmpReq.toAuthorizeSecurityGroups)) {
      request.toAuthorizeSecurityGroupsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.toAuthorizeSecurityGroups, "ToAuthorizeSecurityGroups", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.groupListShrink)) {
      query["GroupList"] = request.groupListShrink;
    }

    if (!$dara.isNull(request.ingressOptionsRequestShrink)) {
      query["IngressOptionsRequest"] = request.ingressOptionsRequestShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pathListShrink)) {
      query["PathList"] = request.pathListShrink;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.toAuthorizeSecurityGroupsShrink)) {
      query["ToAuthorizeSecurityGroups"] = request.toAuthorizeSecurityGroupsShrink;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddServiceSource",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddServiceSourceResponse>(await this.callApi(params, req, runtime), new $_model.AddServiceSourceResponse({}));
  }

  /**
   * Adds a Nacos service source.
   * 
   * @param request - AddServiceSourceRequest
   * @returns AddServiceSourceResponse
   */
  async addServiceSource(request: $_model.AddServiceSourceRequest): Promise<$_model.AddServiceSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addServiceSourceWithOptions(request, runtime);
  }

  /**
   * Publishes a route for a gateway.
   * 
   * @param request - ApplyGatewayRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyGatewayRouteResponse
   */
  async applyGatewayRouteWithOptions(request: $_model.ApplyGatewayRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyGatewayRouteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.routeId)) {
      query["RouteId"] = request.routeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyGatewayRoute",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyGatewayRouteResponse>(await this.callApi(params, req, runtime), new $_model.ApplyGatewayRouteResponse({}));
  }

  /**
   * Publishes a route for a gateway.
   * 
   * @param request - ApplyGatewayRouteRequest
   * @returns ApplyGatewayRouteResponse
   */
  async applyGatewayRoute(request: $_model.ApplyGatewayRouteRequest): Promise<$_model.ApplyGatewayRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyGatewayRouteWithOptions(request, runtime);
  }

  /**
   * Modifies a tag-based routing rule.
   * 
   * @param tmpReq - ApplyTagPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyTagPoliciesResponse
   */
  async applyTagPoliciesWithOptions(tmpReq: $_model.ApplyTagPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyTagPoliciesResponse> {
    tmpReq.validate();
    let request = new $_model.ApplyTagPoliciesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.rules)) {
      request.rulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rules, "Rules", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.rulesShrink)) {
      query["Rules"] = request.rulesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyTagPolicies",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyTagPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ApplyTagPoliciesResponse({}));
  }

  /**
   * Modifies a tag-based routing rule.
   * 
   * @param request - ApplyTagPoliciesRequest
   * @returns ApplyTagPoliciesResponse
   */
  async applyTagPolicies(request: $_model.ApplyTagPoliciesRequest): Promise<$_model.ApplyTagPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyTagPoliciesWithOptions(request, runtime);
  }

  /**
   * Binds traffic protection behavior.
   * 
   * @param request - BindSentinelBlockFallbackDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindSentinelBlockFallbackDefinitionResponse
   */
  async bindSentinelBlockFallbackDefinitionWithOptions(request: $_model.BindSentinelBlockFallbackDefinitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindSentinelBlockFallbackDefinitionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.fallbackId)) {
      query["FallbackId"] = request.fallbackId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindSentinelBlockFallbackDefinition",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindSentinelBlockFallbackDefinitionResponse>(await this.callApi(params, req, runtime), new $_model.BindSentinelBlockFallbackDefinitionResponse({}));
  }

  /**
   * Binds traffic protection behavior.
   * 
   * @param request - BindSentinelBlockFallbackDefinitionRequest
   * @returns BindSentinelBlockFallbackDefinitionResponse
   */
  async bindSentinelBlockFallbackDefinition(request: $_model.BindSentinelBlockFallbackDefinitionRequest): Promise<$_model.BindSentinelBlockFallbackDefinitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindSentinelBlockFallbackDefinitionWithOptions(request, runtime);
  }

  /**
   * Resource Transfer
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResourceGroupResponse({}));
  }

  /**
   * Resource Transfer
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Copy Nacos Configuration
   * 
   * @remarks
   * > This OpenAPI is not the Nacos-SDK API. For information related to the Nacos-SDK API, please refer to the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - CloneNacosConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneNacosConfigResponse
   */
  async cloneNacosConfigWithOptions(request: $_model.CloneNacosConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloneNacosConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.dataIds)) {
      query["DataIds"] = request.dataIds;
    }

    if (!$dara.isNull(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.originNamespaceId)) {
      query["OriginNamespaceId"] = request.originNamespaceId;
    }

    if (!$dara.isNull(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!$dara.isNull(request.targetNamespaceId)) {
      query["TargetNamespaceId"] = request.targetNamespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloneNacosConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloneNacosConfigResponse>(await this.callApi(params, req, runtime), new $_model.CloneNacosConfigResponse({}));
  }

  /**
   * Copy Nacos Configuration
   * 
   * @remarks
   * > This OpenAPI is not the Nacos-SDK API. For information related to the Nacos-SDK API, please refer to the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - CloneNacosConfigRequest
   * @returns CloneNacosConfigResponse
   */
  async cloneNacosConfig(request: $_model.CloneNacosConfigRequest): Promise<$_model.CloneNacosConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloneNacosConfigWithOptions(request, runtime);
  }

  /**
   * Clones rules from Application High Availability Service.
   * 
   * @param request - CloneSentinelRuleFromAhasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneSentinelRuleFromAhasResponse
   */
  async cloneSentinelRuleFromAhasWithOptions(request: $_model.CloneSentinelRuleFromAhasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloneSentinelRuleFromAhasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.ahasNamespace)) {
      query["AhasNamespace"] = request.ahasNamespace;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.isAHASPublicRegion)) {
      query["IsAHASPublicRegion"] = request.isAHASPublicRegion;
    }

    if (!$dara.isNull(request.mseAppName)) {
      query["MseAppName"] = request.mseAppName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloneSentinelRuleFromAhas",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloneSentinelRuleFromAhasResponse>(await this.callApi(params, req, runtime), new $_model.CloneSentinelRuleFromAhasResponse({}));
  }

  /**
   * Clones rules from Application High Availability Service.
   * 
   * @param request - CloneSentinelRuleFromAhasRequest
   * @returns CloneSentinelRuleFromAhasResponse
   */
  async cloneSentinelRuleFromAhas(request: $_model.CloneSentinelRuleFromAhasRequest): Promise<$_model.CloneSentinelRuleFromAhasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloneSentinelRuleFromAhasWithOptions(request, runtime);
  }

  /**
   * Creates an application.
   * 
   * @param tmpReq - CreateApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApplicationResponse
   */
  async createApplicationWithOptions(tmpReq: $_model.CreateApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApplicationResponse> {
    tmpReq.validate();
    let request = new $_model.CreateApplicationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.sentinelEnable)) {
      query["SentinelEnable"] = request.sentinelEnable;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.switchEnable)) {
      query["SwitchEnable"] = request.switchEnable;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApplication",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApplicationResponse>(await this.callApi(params, req, runtime), new $_model.CreateApplicationResponse({}));
  }

  /**
   * Creates an application.
   * 
   * @param request - CreateApplicationRequest
   * @returns CreateApplicationResponse
   */
  async createApplication(request: $_model.CreateApplicationRequest): Promise<$_model.CreateApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApplicationWithOptions(request, runtime);
  }

  /**
   * Creates a circuit breaking rule.
   * 
   * @param request - CreateCircuitBreakerRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCircuitBreakerRuleResponse
   */
  async createCircuitBreakerRuleWithOptions(request: $_model.CreateCircuitBreakerRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCircuitBreakerRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.halfOpenBaseAmountPerStep)) {
      query["HalfOpenBaseAmountPerStep"] = request.halfOpenBaseAmountPerStep;
    }

    if (!$dara.isNull(request.halfOpenRecoveryStepNum)) {
      query["HalfOpenRecoveryStepNum"] = request.halfOpenRecoveryStepNum;
    }

    if (!$dara.isNull(request.maxAllowedRtMs)) {
      query["MaxAllowedRtMs"] = request.maxAllowedRtMs;
    }

    if (!$dara.isNull(request.minRequestAmount)) {
      query["MinRequestAmount"] = request.minRequestAmount;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.retryTimeoutMs)) {
      query["RetryTimeoutMs"] = request.retryTimeoutMs;
    }

    if (!$dara.isNull(request.statIntervalMs)) {
      query["StatIntervalMs"] = request.statIntervalMs;
    }

    if (!$dara.isNull(request.strategy)) {
      query["Strategy"] = request.strategy;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCircuitBreakerRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCircuitBreakerRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateCircuitBreakerRuleResponse({}));
  }

  /**
   * Creates a circuit breaking rule.
   * 
   * @param request - CreateCircuitBreakerRuleRequest
   * @returns CreateCircuitBreakerRuleResponse
   */
  async createCircuitBreakerRule(request: $_model.CreateCircuitBreakerRuleRequest): Promise<$_model.CreateCircuitBreakerRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCircuitBreakerRuleWithOptions(request, runtime);
  }

  /**
   * Create an MSE registration and configuration center instance
   * 
   * @remarks
   * Please ensure that you fully understand the billing method and pricing of the MSE (Microservice Engine) product before using this interface.
   * 
   * @param request - CreateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterResponse
   */
  async createClusterWithOptions(request: $_model.CreateClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.clusterSpecification)) {
      query["ClusterSpecification"] = request.clusterSpecification;
    }

    if (!$dara.isNull(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.clusterVersion)) {
      query["ClusterVersion"] = request.clusterVersion;
    }

    if (!$dara.isNull(request.connectionType)) {
      query["ConnectionType"] = request.connectionType;
    }

    if (!$dara.isNull(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!$dara.isNull(request.eipEnabled)) {
      query["EipEnabled"] = request.eipEnabled;
    }

    if (!$dara.isNull(request.instanceCount)) {
      query["InstanceCount"] = request.instanceCount;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.mseVersion)) {
      query["MseVersion"] = request.mseVersion;
    }

    if (!$dara.isNull(request.netType)) {
      query["NetType"] = request.netType;
    }

    if (!$dara.isNull(request.privateSlbSpecification)) {
      query["PrivateSlbSpecification"] = request.privateSlbSpecification;
    }

    if (!$dara.isNull(request.pubNetworkFlow)) {
      query["PubNetworkFlow"] = request.pubNetworkFlow;
    }

    if (!$dara.isNull(request.pubSlbSpecification)) {
      query["PubSlbSpecification"] = request.pubSlbSpecification;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityGroupType)) {
      query["SecurityGroupType"] = request.securityGroupType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCluster",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateClusterResponse>(await this.callApi(params, req, runtime), new $_model.CreateClusterResponse({}));
  }

  /**
   * Create an MSE registration and configuration center instance
   * 
   * @remarks
   * Please ensure that you fully understand the billing method and pricing of the MSE (Microservice Engine) product before using this interface.
   * 
   * @param request - CreateClusterRequest
   * @returns CreateClusterResponse
   */
  async createCluster(request: $_model.CreateClusterRequest): Promise<$_model.CreateClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  /**
   * Creates a namespace in a Nacos instance.
   * 
   * @param request - CreateEngineNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEngineNamespaceResponse
   */
  async createEngineNamespaceWithOptions(request: $_model.CreateEngineNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEngineNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.desc)) {
      query["Desc"] = request.desc;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.serviceCount)) {
      query["ServiceCount"] = request.serviceCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEngineNamespace",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEngineNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateEngineNamespaceResponse({}));
  }

  /**
   * Creates a namespace in a Nacos instance.
   * 
   * @param request - CreateEngineNamespaceRequest
   * @returns CreateEngineNamespaceResponse
   */
  async createEngineNamespace(request: $_model.CreateEngineNamespaceRequest): Promise<$_model.CreateEngineNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEngineNamespaceWithOptions(request, runtime);
  }

  /**
   * Creates a throttling rule.
   * 
   * @param request - CreateFlowRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFlowRuleResponse
   */
  async createFlowRuleWithOptions(request: $_model.CreateFlowRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFlowRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.controlBehavior)) {
      query["ControlBehavior"] = request.controlBehavior;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.limitApp)) {
      query["LimitApp"] = request.limitApp;
    }

    if (!$dara.isNull(request.maxQueueingTimeMs)) {
      query["MaxQueueingTimeMs"] = request.maxQueueingTimeMs;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFlowRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFlowRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateFlowRuleResponse({}));
  }

  /**
   * Creates a throttling rule.
   * 
   * @param request - CreateFlowRuleRequest
   * @returns CreateFlowRuleResponse
   */
  async createFlowRule(request: $_model.CreateFlowRuleRequest): Promise<$_model.CreateFlowRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFlowRuleWithOptions(request, runtime);
  }

  /**
   * 创建网关路由熔断规则
   * 
   * @param request - CreateGatewayCircuitBreakerRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGatewayCircuitBreakerRuleResponse
   */
  async createGatewayCircuitBreakerRuleWithOptions(request: $_model.CreateGatewayCircuitBreakerRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGatewayCircuitBreakerRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.behaviorType)) {
      query["BehaviorType"] = request.behaviorType;
    }

    if (!$dara.isNull(request.bodyEncoding)) {
      query["BodyEncoding"] = request.bodyEncoding;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.maxAllowedMs)) {
      query["MaxAllowedMs"] = request.maxAllowedMs;
    }

    if (!$dara.isNull(request.minRequestAmount)) {
      query["MinRequestAmount"] = request.minRequestAmount;
    }

    if (!$dara.isNull(request.recoveryTimeoutSec)) {
      query["RecoveryTimeoutSec"] = request.recoveryTimeoutSec;
    }

    if (!$dara.isNull(request.responseContentBody)) {
      query["ResponseContentBody"] = request.responseContentBody;
    }

    if (!$dara.isNull(request.responseRedirectUrl)) {
      query["ResponseRedirectUrl"] = request.responseRedirectUrl;
    }

    if (!$dara.isNull(request.responseStatusCode)) {
      query["ResponseStatusCode"] = request.responseStatusCode;
    }

    if (!$dara.isNull(request.routeId)) {
      query["RouteId"] = request.routeId;
    }

    if (!$dara.isNull(request.routeName)) {
      query["RouteName"] = request.routeName;
    }

    if (!$dara.isNull(request.statDurationSec)) {
      query["StatDurationSec"] = request.statDurationSec;
    }

    if (!$dara.isNull(request.strategy)) {
      query["Strategy"] = request.strategy;
    }

    if (!$dara.isNull(request.triggerRatio)) {
      query["TriggerRatio"] = request.triggerRatio;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGatewayCircuitBreakerRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGatewayCircuitBreakerRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateGatewayCircuitBreakerRuleResponse({}));
  }

  /**
   * 创建网关路由熔断规则
   * 
   * @param request - CreateGatewayCircuitBreakerRuleRequest
   * @returns CreateGatewayCircuitBreakerRuleResponse
   */
  async createGatewayCircuitBreakerRule(request: $_model.CreateGatewayCircuitBreakerRuleRequest): Promise<$_model.CreateGatewayCircuitBreakerRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGatewayCircuitBreakerRuleWithOptions(request, runtime);
  }

  /**
   * Creates a throttling rule for a gateway.
   * 
   * @param request - CreateGatewayFlowRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGatewayFlowRuleResponse
   */
  async createGatewayFlowRuleWithOptions(request: $_model.CreateGatewayFlowRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGatewayFlowRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.behaviorType)) {
      query["BehaviorType"] = request.behaviorType;
    }

    if (!$dara.isNull(request.bodyEncoding)) {
      query["BodyEncoding"] = request.bodyEncoding;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.responseContentBody)) {
      query["ResponseContentBody"] = request.responseContentBody;
    }

    if (!$dara.isNull(request.responseRedirectUrl)) {
      query["ResponseRedirectUrl"] = request.responseRedirectUrl;
    }

    if (!$dara.isNull(request.responseStatusCode)) {
      query["ResponseStatusCode"] = request.responseStatusCode;
    }

    if (!$dara.isNull(request.routeId)) {
      query["RouteId"] = request.routeId;
    }

    if (!$dara.isNull(request.routeName)) {
      query["RouteName"] = request.routeName;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGatewayFlowRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGatewayFlowRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateGatewayFlowRuleResponse({}));
  }

  /**
   * Creates a throttling rule for a gateway.
   * 
   * @param request - CreateGatewayFlowRuleRequest
   * @returns CreateGatewayFlowRuleResponse
   */
  async createGatewayFlowRule(request: $_model.CreateGatewayFlowRuleRequest): Promise<$_model.CreateGatewayFlowRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGatewayFlowRuleWithOptions(request, runtime);
  }

  /**
   * 创建网关路由隔离规则
   * 
   * @param request - CreateGatewayIsolationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGatewayIsolationRuleResponse
   */
  async createGatewayIsolationRuleWithOptions(request: $_model.CreateGatewayIsolationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGatewayIsolationRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.behaviorType)) {
      query["BehaviorType"] = request.behaviorType;
    }

    if (!$dara.isNull(request.bodyEncoding)) {
      query["BodyEncoding"] = request.bodyEncoding;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.maxConcurrency)) {
      query["MaxConcurrency"] = request.maxConcurrency;
    }

    if (!$dara.isNull(request.responseContentBody)) {
      query["ResponseContentBody"] = request.responseContentBody;
    }

    if (!$dara.isNull(request.responseRedirectUrl)) {
      query["ResponseRedirectUrl"] = request.responseRedirectUrl;
    }

    if (!$dara.isNull(request.responseStatusCode)) {
      query["ResponseStatusCode"] = request.responseStatusCode;
    }

    if (!$dara.isNull(request.routeId)) {
      query["RouteId"] = request.routeId;
    }

    if (!$dara.isNull(request.routeName)) {
      query["RouteName"] = request.routeName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGatewayIsolationRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGatewayIsolationRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateGatewayIsolationRuleResponse({}));
  }

  /**
   * 创建网关路由隔离规则
   * 
   * @param request - CreateGatewayIsolationRuleRequest
   * @returns CreateGatewayIsolationRuleResponse
   */
  async createGatewayIsolationRule(request: $_model.CreateGatewayIsolationRuleRequest): Promise<$_model.CreateGatewayIsolationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGatewayIsolationRuleWithOptions(request, runtime);
  }

  /**
   * 创建隔离规则
   * 
   * @param request - CreateIsolationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIsolationRuleResponse
   */
  async createIsolationRuleWithOptions(request: $_model.CreateIsolationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIsolationRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.limitApp)) {
      query["LimitApp"] = request.limitApp;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIsolationRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIsolationRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateIsolationRuleResponse({}));
  }

  /**
   * 创建隔离规则
   * 
   * @param request - CreateIsolationRuleRequest
   * @returns CreateIsolationRuleResponse
   */
  async createIsolationRule(request: $_model.CreateIsolationRuleRequest): Promise<$_model.CreateIsolationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIsolationRuleWithOptions(request, runtime);
  }

  /**
   * Creates an application.
   * 
   * @deprecated OpenAPI CreateMseServiceApplication is deprecated, please use mse::2019-05-31::CreateApplication instead.
   * 
   * @param request - CreateMseServiceApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMseServiceApplicationResponse
   */
  // Deprecated
  async createMseServiceApplicationWithOptions(request: $_model.CreateMseServiceApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMseServiceApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.extraInfo)) {
      query["ExtraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.mseVersion)) {
      query["MseVersion"] = request.mseVersion;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.sentinelEnable)) {
      query["SentinelEnable"] = request.sentinelEnable;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.switchEnable)) {
      query["SwitchEnable"] = request.switchEnable;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMseServiceApplication",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMseServiceApplicationResponse>(await this.callApi(params, req, runtime), new $_model.CreateMseServiceApplicationResponse({}));
  }

  /**
   * Creates an application.
   * 
   * @deprecated OpenAPI CreateMseServiceApplication is deprecated, please use mse::2019-05-31::CreateApplication instead.
   * 
   * @param request - CreateMseServiceApplicationRequest
   * @returns CreateMseServiceApplicationResponse
   */
  // Deprecated
  async createMseServiceApplication(request: $_model.CreateMseServiceApplicationRequest): Promise<$_model.CreateMseServiceApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMseServiceApplicationWithOptions(request, runtime);
  }

  /**
   * Creates a Nacos configuration.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - CreateNacosConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNacosConfigResponse
   */
  async createNacosConfigWithOptions(request: $_model.CreateNacosConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNacosConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.betaIps)) {
      query["BetaIps"] = request.betaIps;
    }

    if (!$dara.isNull(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!$dara.isNull(request.desc)) {
      query["Desc"] = request.desc;
    }

    if (!$dara.isNull(request.group)) {
      query["Group"] = request.group;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNacosConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNacosConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateNacosConfigResponse({}));
  }

  /**
   * Creates a Nacos configuration.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - CreateNacosConfigRequest
   * @returns CreateNacosConfigResponse
   */
  async createNacosConfig(request: $_model.CreateNacosConfigRequest): Promise<$_model.CreateNacosConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNacosConfigWithOptions(request, runtime);
  }

  /**
   * Creates a Nacos instance.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - CreateNacosInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNacosInstanceResponse
   */
  async createNacosInstanceWithOptions(request: $_model.CreateNacosInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNacosInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.ephemeral)) {
      query["Ephemeral"] = request.ephemeral;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.weight)) {
      query["Weight"] = request.weight;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.metadata)) {
      body["Metadata"] = request.metadata;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNacosInstance",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNacosInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateNacosInstanceResponse({}));
  }

  /**
   * Creates a Nacos instance.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - CreateNacosInstanceRequest
   * @returns CreateNacosInstanceResponse
   */
  async createNacosInstance(request: $_model.CreateNacosInstanceRequest): Promise<$_model.CreateNacosInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNacosInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a Nacos service.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - CreateNacosServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNacosServiceResponse
   */
  async createNacosServiceWithOptions(request: $_model.CreateNacosServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNacosServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.ephemeral)) {
      query["Ephemeral"] = request.ephemeral;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.protectThreshold)) {
      query["ProtectThreshold"] = request.protectThreshold;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNacosService",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNacosServiceResponse>(await this.callApi(params, req, runtime), new $_model.CreateNacosServiceResponse({}));
  }

  /**
   * Creates a Nacos service.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - CreateNacosServiceRequest
   * @returns CreateNacosServiceResponse
   */
  async createNacosService(request: $_model.CreateNacosServiceRequest): Promise<$_model.CreateNacosServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNacosServiceWithOptions(request, runtime);
  }

  /**
   * CreateNamespace
   * 
   * @param tmpReq - CreateNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNamespaceResponse
   */
  async createNamespaceWithOptions(tmpReq: $_model.CreateNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNamespaceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateNamespaceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.describe)) {
      query["Describe"] = request.describe;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNamespace",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateNamespaceResponse({}));
  }

  /**
   * CreateNamespace
   * 
   * @param request - CreateNamespaceRequest
   * @returns CreateNamespaceResponse
   */
  async createNamespace(request: $_model.CreateNamespaceRequest): Promise<$_model.CreateNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNamespaceWithOptions(request, runtime);
  }

  /**
   * Creates or updates a lane for end-to-end canary release.
   * 
   * @param tmpReq - CreateOrUpdateSwimmingLaneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrUpdateSwimmingLaneResponse
   */
  async createOrUpdateSwimmingLaneWithOptions(tmpReq: $_model.CreateOrUpdateSwimmingLaneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrUpdateSwimmingLaneResponse> {
    tmpReq.validate();
    let request = new $_model.CreateOrUpdateSwimmingLaneShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.gatewaySwimmingLaneRouteJson)) {
      request.gatewaySwimmingLaneRouteJsonShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.gatewaySwimmingLaneRouteJson, "GatewaySwimmingLaneRouteJson", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.enableRules)) {
      query["EnableRules"] = request.enableRules;
    }

    if (!$dara.isNull(request.entryRule)) {
      query["EntryRule"] = request.entryRule;
    }

    if (!$dara.isNull(request.gatewaySwimmingLaneRouteJsonShrink)) {
      query["GatewaySwimmingLaneRouteJson"] = request.gatewaySwimmingLaneRouteJsonShrink;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.pathIndependentPercentageEnable)) {
      query["PathIndependentPercentageEnable"] = request.pathIndependentPercentageEnable;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.entryRules)) {
      body["EntryRules"] = request.entryRules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrUpdateSwimmingLane",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrUpdateSwimmingLaneResponse>(await this.callApi(params, req, runtime), new $_model.CreateOrUpdateSwimmingLaneResponse({}));
  }

  /**
   * Creates or updates a lane for end-to-end canary release.
   * 
   * @param request - CreateOrUpdateSwimmingLaneRequest
   * @returns CreateOrUpdateSwimmingLaneResponse
   */
  async createOrUpdateSwimmingLane(request: $_model.CreateOrUpdateSwimmingLaneRequest): Promise<$_model.CreateOrUpdateSwimmingLaneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOrUpdateSwimmingLaneWithOptions(request, runtime);
  }

  /**
   * Creates or updates a lane group for end-to-end canary release.
   * 
   * @param tmpReq - CreateOrUpdateSwimmingLaneGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrUpdateSwimmingLaneGroupResponse
   */
  async createOrUpdateSwimmingLaneGroupWithOptions(tmpReq: $_model.CreateOrUpdateSwimmingLaneGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrUpdateSwimmingLaneGroupResponse> {
    tmpReq.validate();
    let request = new $_model.CreateOrUpdateSwimmingLaneGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.paths)) {
      request.pathsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.paths, "Paths", "json");
    }

    if (!$dara.isNull(tmpReq.routeIds)) {
      request.routeIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.routeIds, "RouteIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!$dara.isNull(request.canaryModel)) {
      query["CanaryModel"] = request.canaryModel;
    }

    if (!$dara.isNull(request.dbGrayEnable)) {
      query["DbGrayEnable"] = request.dbGrayEnable;
    }

    if (!$dara.isNull(request.entryApp)) {
      query["EntryApp"] = request.entryApp;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.messageQueueFilterSide)) {
      query["MessageQueueFilterSide"] = request.messageQueueFilterSide;
    }

    if (!$dara.isNull(request.messageQueueGrayEnable)) {
      query["MessageQueueGrayEnable"] = request.messageQueueGrayEnable;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.pathsShrink)) {
      query["Paths"] = request.pathsShrink;
    }

    if (!$dara.isNull(request.recordCanaryDetail)) {
      query["RecordCanaryDetail"] = request.recordCanaryDetail;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.routeIdsShrink)) {
      query["RouteIds"] = request.routeIdsShrink;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.swimVersion)) {
      query["SwimVersion"] = request.swimVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrUpdateSwimmingLaneGroup",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrUpdateSwimmingLaneGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateOrUpdateSwimmingLaneGroupResponse({}));
  }

  /**
   * Creates or updates a lane group for end-to-end canary release.
   * 
   * @param request - CreateOrUpdateSwimmingLaneGroupRequest
   * @returns CreateOrUpdateSwimmingLaneGroupResponse
   */
  async createOrUpdateSwimmingLaneGroup(request: $_model.CreateOrUpdateSwimmingLaneGroupRequest): Promise<$_model.CreateOrUpdateSwimmingLaneGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOrUpdateSwimmingLaneGroupWithOptions(request, runtime);
  }

  /**
   * Creates a plug-in configuration.
   * 
   * @param tmpReq - CreatePluginConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePluginConfigResponse
   */
  async createPluginConfigWithOptions(tmpReq: $_model.CreatePluginConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePluginConfigResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePluginConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceIdList)) {
      request.resourceIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceIdList, "ResourceIdList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.configLevel)) {
      query["ConfigLevel"] = request.configLevel;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    if (!$dara.isNull(request.resourceIdListShrink)) {
      query["ResourceIdList"] = request.resourceIdListShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePluginConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePluginConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreatePluginConfigResponse({}));
  }

  /**
   * Creates a plug-in configuration.
   * 
   * @param request - CreatePluginConfigRequest
   * @returns CreatePluginConfigResponse
   */
  async createPluginConfig(request: $_model.CreatePluginConfigRequest): Promise<$_model.CreatePluginConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPluginConfigWithOptions(request, runtime);
  }

  /**
   * 创建热点参数防护规则（HTTP 请求）
   * 
   * @param request - CreateWebFlowRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWebFlowRuleResponse
   */
  async createWebFlowRuleWithOptions(request: $_model.CreateWebFlowRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWebFlowRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.burst)) {
      query["Burst"] = request.burst;
    }

    if (!$dara.isNull(request.controlBehavior)) {
      query["ControlBehavior"] = request.controlBehavior;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.maxQueueingTimeMs)) {
      query["MaxQueueingTimeMs"] = request.maxQueueingTimeMs;
    }

    if (!$dara.isNull(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.paramItem)) {
      query["ParamItem"] = request.paramItem;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceMode)) {
      query["ResourceMode"] = request.resourceMode;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.statIntervalMs)) {
      query["StatIntervalMs"] = request.statIntervalMs;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWebFlowRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWebFlowRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateWebFlowRuleResponse({}));
  }

  /**
   * 创建热点参数防护规则（HTTP 请求）
   * 
   * @param request - CreateWebFlowRuleRequest
   * @returns CreateWebFlowRuleResponse
   */
  async createWebFlowRule(request: $_model.CreateWebFlowRuleRequest): Promise<$_model.CreateWebFlowRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWebFlowRuleWithOptions(request, runtime);
  }

  /**
   * Creates a znode.
   * 
   * @param request - CreateZnodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateZnodeResponse
   */
  async createZnodeWithOptions(request: $_model.CreateZnodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateZnodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.data)) {
      query["Data"] = request.data;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateZnode",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateZnodeResponse>(await this.callApi(params, req, runtime), new $_model.CreateZnodeResponse({}));
  }

  /**
   * Creates a znode.
   * 
   * @param request - CreateZnodeRequest
   * @returns CreateZnodeResponse
   */
  async createZnode(request: $_model.CreateZnodeRequest): Promise<$_model.CreateZnodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createZnodeWithOptions(request, runtime);
  }

  /**
   * Deletes an authorized resource.
   * 
   * @param request - DeleteAuthResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAuthResourceResponse
   */
  async deleteAuthResourceWithOptions(request: $_model.DeleteAuthResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAuthResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAuthResource",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAuthResourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAuthResourceResponse({}));
  }

  /**
   * Deletes an authorized resource.
   * 
   * @param request - DeleteAuthResourceRequest
   * @returns DeleteAuthResourceResponse
   */
  async deleteAuthResource(request: $_model.DeleteAuthResourceRequest): Promise<$_model.DeleteAuthResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAuthResourceWithOptions(request, runtime);
  }

  /**
   * Deletes circuit breaking rules.
   * 
   * @param tmpReq - DeleteCircuitBreakerRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCircuitBreakerRulesResponse
   */
  async deleteCircuitBreakerRulesWithOptions(tmpReq: $_model.DeleteCircuitBreakerRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCircuitBreakerRulesResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteCircuitBreakerRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.idsShrink)) {
      query["Ids"] = request.idsShrink;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCircuitBreakerRules",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCircuitBreakerRulesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCircuitBreakerRulesResponse({}));
  }

  /**
   * Deletes circuit breaking rules.
   * 
   * @param request - DeleteCircuitBreakerRulesRequest
   * @returns DeleteCircuitBreakerRulesResponse
   */
  async deleteCircuitBreakerRules(request: $_model.DeleteCircuitBreakerRulesRequest): Promise<$_model.DeleteCircuitBreakerRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCircuitBreakerRulesWithOptions(request, runtime);
  }

  /**
   * Deletes a Microservices Engine (MSE) instance.
   * 
   * @param request - DeleteClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterResponse
   */
  async deleteClusterWithOptions(request: $_model.DeleteClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCluster",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteClusterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteClusterResponse({}));
  }

  /**
   * Deletes a Microservices Engine (MSE) instance.
   * 
   * @param request - DeleteClusterRequest
   * @returns DeleteClusterResponse
   */
  async deleteCluster(request: $_model.DeleteClusterRequest): Promise<$_model.DeleteClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  /**
   * Deletes a namespace from a Nacos instance.
   * 
   * @param request - DeleteEngineNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEngineNamespaceResponse
   */
  async deleteEngineNamespaceWithOptions(request: $_model.DeleteEngineNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEngineNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEngineNamespace",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEngineNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEngineNamespaceResponse({}));
  }

  /**
   * Deletes a namespace from a Nacos instance.
   * 
   * @param request - DeleteEngineNamespaceRequest
   * @returns DeleteEngineNamespaceResponse
   */
  async deleteEngineNamespace(request: $_model.DeleteEngineNamespaceRequest): Promise<$_model.DeleteEngineNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEngineNamespaceWithOptions(request, runtime);
  }

  /**
   * Deletes throttling rules.
   * 
   * @param tmpReq - DeleteFlowRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFlowRulesResponse
   */
  async deleteFlowRulesWithOptions(tmpReq: $_model.DeleteFlowRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFlowRulesResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteFlowRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.idsShrink)) {
      query["Ids"] = request.idsShrink;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFlowRules",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFlowRulesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFlowRulesResponse({}));
  }

  /**
   * Deletes throttling rules.
   * 
   * @param request - DeleteFlowRulesRequest
   * @returns DeleteFlowRulesResponse
   */
  async deleteFlowRules(request: $_model.DeleteFlowRulesRequest): Promise<$_model.DeleteFlowRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFlowRulesWithOptions(request, runtime);
  }

  /**
   * Deletes a gateway.
   * 
   * @param request - DeleteGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayResponse
   */
  async deleteGatewayWithOptions(request: $_model.DeleteGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.deleteSlb)) {
      query["DeleteSlb"] = request.deleteSlb;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGateway",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGatewayResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGatewayResponse({}));
  }

  /**
   * Deletes a gateway.
   * 
   * @param request - DeleteGatewayRequest
   * @returns DeleteGatewayResponse
   */
  async deleteGateway(request: $_model.DeleteGatewayRequest): Promise<$_model.DeleteGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGatewayWithOptions(request, runtime);
  }

  /**
   * Deletes a consumer on which a gateway performs authentication operations.
   * 
   * @param request - DeleteGatewayAuthConsumerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayAuthConsumerResponse
   */
  async deleteGatewayAuthConsumerWithOptions(request: $_model.DeleteGatewayAuthConsumerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGatewayAuthConsumerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGatewayAuthConsumer",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGatewayAuthConsumerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGatewayAuthConsumerResponse({}));
  }

  /**
   * Deletes a consumer on which a gateway performs authentication operations.
   * 
   * @param request - DeleteGatewayAuthConsumerRequest
   * @returns DeleteGatewayAuthConsumerResponse
   */
  async deleteGatewayAuthConsumer(request: $_model.DeleteGatewayAuthConsumerRequest): Promise<$_model.DeleteGatewayAuthConsumerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGatewayAuthConsumerWithOptions(request, runtime);
  }

  /**
   * Deletes resource permissions from the consumer on which a gateway performs authentication operations.
   * 
   * @param request - DeleteGatewayAuthConsumerResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayAuthConsumerResourceResponse
   */
  async deleteGatewayAuthConsumerResourceWithOptions(request: $_model.DeleteGatewayAuthConsumerResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGatewayAuthConsumerResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.consumerId)) {
      query["ConsumerId"] = request.consumerId;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.idList)) {
      query["IdList"] = request.idList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGatewayAuthConsumerResource",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGatewayAuthConsumerResourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGatewayAuthConsumerResourceResponse({}));
  }

  /**
   * Deletes resource permissions from the consumer on which a gateway performs authentication operations.
   * 
   * @param request - DeleteGatewayAuthConsumerResourceRequest
   * @returns DeleteGatewayAuthConsumerResourceResponse
   */
  async deleteGatewayAuthConsumerResource(request: $_model.DeleteGatewayAuthConsumerResourceRequest): Promise<$_model.DeleteGatewayAuthConsumerResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGatewayAuthConsumerResourceWithOptions(request, runtime);
  }

  /**
   * 删除网关路由熔断规则
   * 
   * @param request - DeleteGatewayCircuitBreakerRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayCircuitBreakerRuleResponse
   */
  async deleteGatewayCircuitBreakerRuleWithOptions(request: $_model.DeleteGatewayCircuitBreakerRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGatewayCircuitBreakerRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.routeId)) {
      query["RouteId"] = request.routeId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGatewayCircuitBreakerRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGatewayCircuitBreakerRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGatewayCircuitBreakerRuleResponse({}));
  }

  /**
   * 删除网关路由熔断规则
   * 
   * @param request - DeleteGatewayCircuitBreakerRuleRequest
   * @returns DeleteGatewayCircuitBreakerRuleResponse
   */
  async deleteGatewayCircuitBreakerRule(request: $_model.DeleteGatewayCircuitBreakerRuleRequest): Promise<$_model.DeleteGatewayCircuitBreakerRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGatewayCircuitBreakerRuleWithOptions(request, runtime);
  }

  /**
   * Disassociates a domain name from a gateway.
   * 
   * @param request - DeleteGatewayDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayDomainResponse
   */
  async deleteGatewayDomainWithOptions(request: $_model.DeleteGatewayDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGatewayDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGatewayDomain",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGatewayDomainResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGatewayDomainResponse({}));
  }

  /**
   * Disassociates a domain name from a gateway.
   * 
   * @param request - DeleteGatewayDomainRequest
   * @returns DeleteGatewayDomainResponse
   */
  async deleteGatewayDomain(request: $_model.DeleteGatewayDomainRequest): Promise<$_model.DeleteGatewayDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGatewayDomainWithOptions(request, runtime);
  }

  /**
   * 删除网关路由流控规则
   * 
   * @param request - DeleteGatewayFlowRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayFlowRuleResponse
   */
  async deleteGatewayFlowRuleWithOptions(request: $_model.DeleteGatewayFlowRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGatewayFlowRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.routeId)) {
      query["RouteId"] = request.routeId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGatewayFlowRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGatewayFlowRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGatewayFlowRuleResponse({}));
  }

  /**
   * 删除网关路由流控规则
   * 
   * @param request - DeleteGatewayFlowRuleRequest
   * @returns DeleteGatewayFlowRuleResponse
   */
  async deleteGatewayFlowRule(request: $_model.DeleteGatewayFlowRuleRequest): Promise<$_model.DeleteGatewayFlowRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGatewayFlowRuleWithOptions(request, runtime);
  }

  /**
   * 删除网关路由隔离规则
   * 
   * @param request - DeleteGatewayIsolationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayIsolationRuleResponse
   */
  async deleteGatewayIsolationRuleWithOptions(request: $_model.DeleteGatewayIsolationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGatewayIsolationRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.routeId)) {
      query["RouteId"] = request.routeId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGatewayIsolationRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGatewayIsolationRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGatewayIsolationRuleResponse({}));
  }

  /**
   * 删除网关路由隔离规则
   * 
   * @param request - DeleteGatewayIsolationRuleRequest
   * @returns DeleteGatewayIsolationRuleResponse
   */
  async deleteGatewayIsolationRule(request: $_model.DeleteGatewayIsolationRuleRequest): Promise<$_model.DeleteGatewayIsolationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGatewayIsolationRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a route from a gateway.
   * 
   * @param request - DeleteGatewayRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayRouteResponse
   */
  async deleteGatewayRouteWithOptions(request: $_model.DeleteGatewayRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGatewayRouteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.routeId)) {
      query["RouteId"] = request.routeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGatewayRoute",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGatewayRouteResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGatewayRouteResponse({}));
  }

  /**
   * Deletes a route from a gateway.
   * 
   * @param request - DeleteGatewayRouteRequest
   * @returns DeleteGatewayRouteResponse
   */
  async deleteGatewayRoute(request: $_model.DeleteGatewayRouteRequest): Promise<$_model.DeleteGatewayRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGatewayRouteWithOptions(request, runtime);
  }

  /**
   * Deletes a service from a gateway.
   * 
   * @param request - DeleteGatewayServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayServiceResponse
   */
  async deleteGatewayServiceWithOptions(request: $_model.DeleteGatewayServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGatewayServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGatewayService",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGatewayServiceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGatewayServiceResponse({}));
  }

  /**
   * Deletes a service from a gateway.
   * 
   * @param request - DeleteGatewayServiceRequest
   * @returns DeleteGatewayServiceResponse
   */
  async deleteGatewayService(request: $_model.DeleteGatewayServiceRequest): Promise<$_model.DeleteGatewayServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGatewayServiceWithOptions(request, runtime);
  }

  /**
   * Deletes a service version from a gateway.
   * 
   * @param request - DeleteGatewayServiceVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayServiceVersionResponse
   */
  async deleteGatewayServiceVersionWithOptions(request: $_model.DeleteGatewayServiceVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGatewayServiceVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGatewayServiceVersion",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGatewayServiceVersionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGatewayServiceVersionResponse({}));
  }

  /**
   * Deletes a service version from a gateway.
   * 
   * @param request - DeleteGatewayServiceVersionRequest
   * @returns DeleteGatewayServiceVersionResponse
   */
  async deleteGatewayServiceVersion(request: $_model.DeleteGatewayServiceVersionRequest): Promise<$_model.DeleteGatewayServiceVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGatewayServiceVersionWithOptions(request, runtime);
  }

  /**
   * Deletes the Server Load Balancer (SLB) instance that is associated with a gateway.
   * 
   * @param request - DeleteGatewaySlbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewaySlbResponse
   */
  async deleteGatewaySlbWithOptions(request: $_model.DeleteGatewaySlbRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGatewaySlbResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.deleteSlb)) {
      query["DeleteSlb"] = request.deleteSlb;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.slbId)) {
      query["SlbId"] = request.slbId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGatewaySlb",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGatewaySlbResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGatewaySlbResponse({}));
  }

  /**
   * Deletes the Server Load Balancer (SLB) instance that is associated with a gateway.
   * 
   * @param request - DeleteGatewaySlbRequest
   * @returns DeleteGatewaySlbResponse
   */
  async deleteGatewaySlb(request: $_model.DeleteGatewaySlbRequest): Promise<$_model.DeleteGatewaySlbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGatewaySlbWithOptions(request, runtime);
  }

  /**
   * 删除隔离规则
   * 
   * @param tmpReq - DeleteIsolationRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIsolationRulesResponse
   */
  async deleteIsolationRulesWithOptions(tmpReq: $_model.DeleteIsolationRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIsolationRulesResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteIsolationRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.idsShrink)) {
      query["Ids"] = request.idsShrink;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIsolationRules",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIsolationRulesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIsolationRulesResponse({}));
  }

  /**
   * 删除隔离规则
   * 
   * @param request - DeleteIsolationRulesRequest
   * @returns DeleteIsolationRulesResponse
   */
  async deleteIsolationRules(request: $_model.DeleteIsolationRulesRequest): Promise<$_model.DeleteIsolationRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIsolationRulesWithOptions(request, runtime);
  }

  /**
   * Deletes a migration task.
   * 
   * @param request - DeleteMigrationTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMigrationTaskResponse
   */
  async deleteMigrationTaskWithOptions(request: $_model.DeleteMigrationTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMigrationTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMigrationTask",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMigrationTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMigrationTaskResponse({}));
  }

  /**
   * Deletes a migration task.
   * 
   * @param request - DeleteMigrationTaskRequest
   * @returns DeleteMigrationTaskResponse
   */
  async deleteMigrationTask(request: $_model.DeleteMigrationTaskRequest): Promise<$_model.DeleteMigrationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMigrationTaskWithOptions(request, runtime);
  }

  /**
   * Delete specified Nacos configuration
   * 
   * @remarks
   * > The current OpenAPI is not the Nacos-SDK API. For information related to the Nacos-SDK API, please refer to the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - DeleteNacosConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNacosConfigResponse
   */
  async deleteNacosConfigWithOptions(request: $_model.DeleteNacosConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNacosConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.beta)) {
      query["Beta"] = request.beta;
    }

    if (!$dara.isNull(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!$dara.isNull(request.group)) {
      query["Group"] = request.group;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNacosConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNacosConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNacosConfigResponse({}));
  }

  /**
   * Delete specified Nacos configuration
   * 
   * @remarks
   * > The current OpenAPI is not the Nacos-SDK API. For information related to the Nacos-SDK API, please refer to the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - DeleteNacosConfigRequest
   * @returns DeleteNacosConfigResponse
   */
  async deleteNacosConfig(request: $_model.DeleteNacosConfigRequest): Promise<$_model.DeleteNacosConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNacosConfigWithOptions(request, runtime);
  }

  /**
   * Deletes multiple Nacos configurations at a time.
   * 
   * @remarks
   * >  The current API operation is not provided in Nacos SDK. For more information about the Nacos-SDK API, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - DeleteNacosConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNacosConfigsResponse
   */
  async deleteNacosConfigsWithOptions(request: $_model.DeleteNacosConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNacosConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNacosConfigs",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNacosConfigsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNacosConfigsResponse({}));
  }

  /**
   * Deletes multiple Nacos configurations at a time.
   * 
   * @remarks
   * >  The current API operation is not provided in Nacos SDK. For more information about the Nacos-SDK API, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - DeleteNacosConfigsRequest
   * @returns DeleteNacosConfigsResponse
   */
  async deleteNacosConfigs(request: $_model.DeleteNacosConfigsRequest): Promise<$_model.DeleteNacosConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNacosConfigsWithOptions(request, runtime);
  }

  /**
   * Deletes a persistent application instance from a Microservices Engine (MSE) Nacos instance.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - DeleteNacosInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNacosInstanceResponse
   */
  async deleteNacosInstanceWithOptions(request: $_model.DeleteNacosInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNacosInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.ephemeral)) {
      query["Ephemeral"] = request.ephemeral;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNacosInstance",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNacosInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNacosInstanceResponse({}));
  }

  /**
   * Deletes a persistent application instance from a Microservices Engine (MSE) Nacos instance.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - DeleteNacosInstanceRequest
   * @returns DeleteNacosInstanceResponse
   */
  async deleteNacosInstance(request: $_model.DeleteNacosInstanceRequest): Promise<$_model.DeleteNacosInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNacosInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes a Nacos service.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - DeleteNacosServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNacosServiceResponse
   */
  async deleteNacosServiceWithOptions(request: $_model.DeleteNacosServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNacosServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNacosService",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNacosServiceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNacosServiceResponse({}));
  }

  /**
   * Deletes a Nacos service.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - DeleteNacosServiceRequest
   * @returns DeleteNacosServiceResponse
   */
  async deleteNacosService(request: $_model.DeleteNacosServiceRequest): Promise<$_model.DeleteNacosServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNacosServiceWithOptions(request, runtime);
  }

  /**
   * 删除MSE命名空间
   * 
   * @param request - DeleteNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNamespaceResponse
   */
  async deleteNamespaceWithOptions(request: $_model.DeleteNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNamespace",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNamespaceResponse({}));
  }

  /**
   * 删除MSE命名空间
   * 
   * @param request - DeleteNamespaceRequest
   * @returns DeleteNamespaceResponse
   */
  async deleteNamespace(request: $_model.DeleteNamespaceRequest): Promise<$_model.DeleteNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNamespaceWithOptions(request, runtime);
  }

  /**
   * Deletes a plug-in configuration.
   * 
   * @param request - DeletePluginConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePluginConfigResponse
   */
  async deletePluginConfigWithOptions(request: $_model.DeletePluginConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePluginConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.pluginConfigId)) {
      query["PluginConfigId"] = request.pluginConfigId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePluginConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePluginConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeletePluginConfigResponse({}));
  }

  /**
   * Deletes a plug-in configuration.
   * 
   * @param request - DeletePluginConfigRequest
   * @returns DeletePluginConfigResponse
   */
  async deletePluginConfig(request: $_model.DeletePluginConfigRequest): Promise<$_model.DeletePluginConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePluginConfigWithOptions(request, runtime);
  }

  /**
   * Deletes a security group rule from a gateway.
   * 
   * @param request - DeleteSecurityGroupRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSecurityGroupRuleResponse
   */
  async deleteSecurityGroupRuleWithOptions(request: $_model.DeleteSecurityGroupRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSecurityGroupRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.cascadingDelete)) {
      query["CascadingDelete"] = request.cascadingDelete;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSecurityGroupRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSecurityGroupRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSecurityGroupRuleResponse({}));
  }

  /**
   * Deletes a security group rule from a gateway.
   * 
   * @param request - DeleteSecurityGroupRuleRequest
   * @returns DeleteSecurityGroupRuleResponse
   */
  async deleteSecurityGroupRule(request: $_model.DeleteSecurityGroupRuleRequest): Promise<$_model.DeleteSecurityGroupRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSecurityGroupRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a gateway service source.
   * 
   * @param request - DeleteServiceSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceSourceResponse
   */
  async deleteServiceSourceWithOptions(request: $_model.DeleteServiceSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteServiceSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteServiceSource",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteServiceSourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteServiceSourceResponse({}));
  }

  /**
   * Deletes a gateway service source.
   * 
   * @param request - DeleteServiceSourceRequest
   * @returns DeleteServiceSourceResponse
   */
  async deleteServiceSource(request: $_model.DeleteServiceSourceRequest): Promise<$_model.DeleteServiceSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteServiceSourceWithOptions(request, runtime);
  }

  /**
   * Deletes a lane.
   * 
   * @param request - DeleteSwimmingLaneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSwimmingLaneResponse
   */
  async deleteSwimmingLaneWithOptions(request: $_model.DeleteSwimmingLaneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSwimmingLaneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.laneId)) {
      query["LaneId"] = request.laneId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSwimmingLane",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSwimmingLaneResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSwimmingLaneResponse({}));
  }

  /**
   * Deletes a lane.
   * 
   * @param request - DeleteSwimmingLaneRequest
   * @returns DeleteSwimmingLaneResponse
   */
  async deleteSwimmingLane(request: $_model.DeleteSwimmingLaneRequest): Promise<$_model.DeleteSwimmingLaneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSwimmingLaneWithOptions(request, runtime);
  }

  /**
   * Deletes a lane group.
   * 
   * @param request - DeleteSwimmingLaneGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSwimmingLaneGroupResponse
   */
  async deleteSwimmingLaneGroupWithOptions(request: $_model.DeleteSwimmingLaneGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSwimmingLaneGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSwimmingLaneGroup",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSwimmingLaneGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSwimmingLaneGroupResponse({}));
  }

  /**
   * Deletes a lane group.
   * 
   * @param request - DeleteSwimmingLaneGroupRequest
   * @returns DeleteSwimmingLaneGroupResponse
   */
  async deleteSwimmingLaneGroup(request: $_model.DeleteSwimmingLaneGroupRequest): Promise<$_model.DeleteSwimmingLaneGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSwimmingLaneGroupWithOptions(request, runtime);
  }

  /**
   * 删除热点参数防护规则（HTTP 请求）
   * 
   * @param request - DeleteWebFlowRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWebFlowRulesResponse
   */
  async deleteWebFlowRulesWithOptions(request: $_model.DeleteWebFlowRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWebFlowRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWebFlowRules",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWebFlowRulesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWebFlowRulesResponse({}));
  }

  /**
   * 删除热点参数防护规则（HTTP 请求）
   * 
   * @param request - DeleteWebFlowRulesRequest
   * @returns DeleteWebFlowRulesResponse
   */
  async deleteWebFlowRules(request: $_model.DeleteWebFlowRulesRequest): Promise<$_model.DeleteWebFlowRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWebFlowRulesWithOptions(request, runtime);
  }

  /**
   * Deletes a ZooKeeper node.
   * 
   * @param request - DeleteZnodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteZnodeResponse
   */
  async deleteZnodeWithOptions(request: $_model.DeleteZnodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteZnodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteZnode",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteZnodeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteZnodeResponse({}));
  }

  /**
   * Deletes a ZooKeeper node.
   * 
   * @param request - DeleteZnodeRequest
   * @returns DeleteZnodeResponse
   */
  async deleteZnode(request: $_model.DeleteZnodeRequest): Promise<$_model.DeleteZnodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteZnodeWithOptions(request, runtime);
  }

  /**
   * Enables HTTP/2 for negotiation between the server and client. The modification takes effect in one to two minutes.
   * 
   * @param request - EnableHttp2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableHttp2Response
   */
  async enableHttp2WithOptions(request: $_model.EnableHttp2Request, runtime: $dara.RuntimeOptions): Promise<$_model.EnableHttp2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.enableHttp2)) {
      query["EnableHttp2"] = request.enableHttp2;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableHttp2",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableHttp2Response>(await this.callApi(params, req, runtime), new $_model.EnableHttp2Response({}));
  }

  /**
   * Enables HTTP/2 for negotiation between the server and client. The modification takes effect in one to two minutes.
   * 
   * @param request - EnableHttp2Request
   * @returns EnableHttp2Response
   */
  async enableHttp2(request: $_model.EnableHttp2Request): Promise<$_model.EnableHttp2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableHttp2WithOptions(request, runtime);
  }

  /**
   * Enables the proxy protocol. When an NLB instance is used as an ingress, you cannot obtain the real IP address of the client if you do not enable the proxy protocol. After you enable the proxy protocol, non-proxy requests are not adversely affected.
   * 
   * @param request - EnableProxyProtocolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableProxyProtocolResponse
   */
  async enableProxyProtocolWithOptions(request: $_model.EnableProxyProtocolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableProxyProtocolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.enableProxyProtocol)) {
      query["EnableProxyProtocol"] = request.enableProxyProtocol;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableProxyProtocol",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableProxyProtocolResponse>(await this.callApi(params, req, runtime), new $_model.EnableProxyProtocolResponse({}));
  }

  /**
   * Enables the proxy protocol. When an NLB instance is used as an ingress, you cannot obtain the real IP address of the client if you do not enable the proxy protocol. After you enable the proxy protocol, non-proxy requests are not adversely affected.
   * 
   * @param request - EnableProxyProtocolRequest
   * @returns EnableProxyProtocolResponse
   */
  async enableProxyProtocol(request: $_model.EnableProxyProtocolRequest): Promise<$_model.EnableProxyProtocolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableProxyProtocolWithOptions(request, runtime);
  }

  /**
   * Exports specified Nacos configurations.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - ExportNacosConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportNacosConfigResponse
   */
  async exportNacosConfigWithOptions(request: $_model.ExportNacosConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportNacosConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!$dara.isNull(request.dataIds)) {
      query["DataIds"] = request.dataIds;
    }

    if (!$dara.isNull(request.group)) {
      query["Group"] = request.group;
    }

    if (!$dara.isNull(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportNacosConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportNacosConfigResponse>(await this.callApi(params, req, runtime), new $_model.ExportNacosConfigResponse({}));
  }

  /**
   * Exports specified Nacos configurations.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - ExportNacosConfigRequest
   * @returns ExportNacosConfigResponse
   */
  async exportNacosConfig(request: $_model.ExportNacosConfigRequest): Promise<$_model.ExportNacosConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportNacosConfigWithOptions(request, runtime);
  }

  /**
   * Initiates a task to export ZooKeeper data.
   * 
   * @remarks
   * Only one task can run at a time.
   * 
   * @param request - ExportZookeeperDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportZookeeperDataResponse
   */
  async exportZookeeperDataWithOptions(request: $_model.ExportZookeeperDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportZookeeperDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.exportType)) {
      query["ExportType"] = request.exportType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportZookeeperData",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportZookeeperDataResponse>(await this.callApi(params, req, runtime), new $_model.ExportZookeeperDataResponse({}));
  }

  /**
   * Initiates a task to export ZooKeeper data.
   * 
   * @remarks
   * Only one task can run at a time.
   * 
   * @param request - ExportZookeeperDataRequest
   * @returns ExportZookeeperDataResponse
   */
  async exportZookeeperData(request: $_model.ExportZookeeperDataRequest): Promise<$_model.ExportZookeeperDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportZookeeperDataWithOptions(request, runtime);
  }

  /**
   * Obtains the rules for graceful start and shutdown.
   * 
   * @remarks
   * You can call this operation to query the rules for graceful start and shutdown.
   * 
   * @param request - FetchLosslessRuleListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FetchLosslessRuleListResponse
   */
  async fetchLosslessRuleListWithOptions(request: $_model.FetchLosslessRuleListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FetchLosslessRuleListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FetchLosslessRuleList",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FetchLosslessRuleListResponse>(await this.callApi(params, req, runtime), new $_model.FetchLosslessRuleListResponse({}));
  }

  /**
   * Obtains the rules for graceful start and shutdown.
   * 
   * @remarks
   * You can call this operation to query the rules for graceful start and shutdown.
   * 
   * @param request - FetchLosslessRuleListRequest
   * @returns FetchLosslessRuleListResponse
   */
  async fetchLosslessRuleList(request: $_model.FetchLosslessRuleListRequest): Promise<$_model.FetchLosslessRuleListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.fetchLosslessRuleListWithOptions(request, runtime);
  }

  /**
   * Queries a list of blacklists and whitelists of a gateway.
   * 
   * @param tmpReq - GatewayBlackWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GatewayBlackWhiteListResponse
   */
  async gatewayBlackWhiteListWithOptions(tmpReq: $_model.GatewayBlackWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GatewayBlackWhiteListResponse> {
    tmpReq.validate();
    let request = new $_model.GatewayBlackWhiteListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filterParams)) {
      request.filterParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterParams, "FilterParams", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.descSort)) {
      query["DescSort"] = request.descSort;
    }

    if (!$dara.isNull(request.filterParamsShrink)) {
      query["FilterParams"] = request.filterParamsShrink;
    }

    if (!$dara.isNull(request.orderItem)) {
      query["OrderItem"] = request.orderItem;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GatewayBlackWhiteList",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GatewayBlackWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.GatewayBlackWhiteListResponse({}));
  }

  /**
   * Queries a list of blacklists and whitelists of a gateway.
   * 
   * @param request - GatewayBlackWhiteListRequest
   * @returns GatewayBlackWhiteListResponse
   */
  async gatewayBlackWhiteList(request: $_model.GatewayBlackWhiteListRequest): Promise<$_model.GatewayBlackWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.gatewayBlackWhiteListWithOptions(request, runtime);
  }

  /**
   * Queries information about canary release for messaging of an application.
   * 
   * @param request - GetAppMessageQueueRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppMessageQueueRouteResponse
   */
  async getAppMessageQueueRouteWithOptions(request: $_model.GetAppMessageQueueRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppMessageQueueRouteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppMessageQueueRoute",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppMessageQueueRouteResponse>(await this.callApi(params, req, runtime), new $_model.GetAppMessageQueueRouteResponse({}));
  }

  /**
   * Queries information about canary release for messaging of an application.
   * 
   * @param request - GetAppMessageQueueRouteRequest
   * @returns GetAppMessageQueueRouteResponse
   */
  async getAppMessageQueueRoute(request: $_model.GetAppMessageQueueRouteRequest): Promise<$_model.GetAppMessageQueueRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppMessageQueueRouteWithOptions(request, runtime);
  }

  /**
   * Queries the list of microservice application instances.
   * 
   * @param request - GetApplicationInstanceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationInstanceListResponse
   */
  async getApplicationInstanceListWithOptions(request: $_model.GetApplicationInstanceListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationInstanceListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplicationInstanceList",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationInstanceListResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationInstanceListResponse({}));
  }

  /**
   * Queries the list of microservice application instances.
   * 
   * @param request - GetApplicationInstanceListRequest
   * @returns GetApplicationInstanceListResponse
   */
  async getApplicationInstanceList(request: $_model.GetApplicationInstanceListRequest): Promise<$_model.GetApplicationInstanceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationInstanceListWithOptions(request, runtime);
  }

  /**
   * Obtains the list of applications.
   * 
   * @param tmpReq - GetApplicationListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationListResponse
   */
  async getApplicationListWithOptions(tmpReq: $_model.GetApplicationListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationListResponse> {
    tmpReq.validate();
    let request = new $_model.GetApplicationListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.sentinelEnable)) {
      query["SentinelEnable"] = request.sentinelEnable;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.switchEnable)) {
      query["SwitchEnable"] = request.switchEnable;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplicationList",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationListResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationListResponse({}));
  }

  /**
   * Obtains the list of applications.
   * 
   * @param request - GetApplicationListRequest
   * @returns GetApplicationListResponse
   */
  async getApplicationList(request: $_model.GetApplicationListRequest): Promise<$_model.GetApplicationListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationListWithOptions(request, runtime);
  }

  /**
   * Queries the blacklist or whitelist of a gateway.
   * 
   * @deprecated OpenAPI GetBlackWhiteList is deprecated, please use mse::2019-05-31::GatewayBlackWhiteList instead.
   * 
   * @param request - GetBlackWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBlackWhiteListResponse
   */
  // Deprecated
  async getBlackWhiteListWithOptions(request: $_model.GetBlackWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBlackWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.isWhite)) {
      query["IsWhite"] = request.isWhite;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBlackWhiteList",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBlackWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.GetBlackWhiteListResponse({}));
  }

  /**
   * Queries the blacklist or whitelist of a gateway.
   * 
   * @deprecated OpenAPI GetBlackWhiteList is deprecated, please use mse::2019-05-31::GatewayBlackWhiteList instead.
   * 
   * @param request - GetBlackWhiteListRequest
   * @returns GetBlackWhiteListResponse
   */
  // Deprecated
  async getBlackWhiteList(request: $_model.GetBlackWhiteListRequest): Promise<$_model.GetBlackWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBlackWhiteListWithOptions(request, runtime);
  }

  /**
   * Queries the namespaces of a Nacos instance.
   * 
   * @param request - GetEngineNamepaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEngineNamepaceResponse
   */
  async getEngineNamepaceWithOptions(request: $_model.GetEngineNamepaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEngineNamepaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEngineNamepace",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEngineNamepaceResponse>(await this.callApi(params, req, runtime), new $_model.GetEngineNamepaceResponse({}));
  }

  /**
   * Queries the namespaces of a Nacos instance.
   * 
   * @param request - GetEngineNamepaceRequest
   * @returns GetEngineNamepaceResponse
   */
  async getEngineNamepace(request: $_model.GetEngineNamepaceRequest): Promise<$_model.GetEngineNamepaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEngineNamepaceWithOptions(request, runtime);
  }

  /**
   * Obtains the basic information about a gateway, such as the virtual private cloud (VPC) and vSwitch to which the gateway belongs.
   * 
   * @param request - GetGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGatewayResponse
   */
  async getGatewayWithOptions(request: $_model.GetGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGateway",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGatewayResponse>(await this.callApi(params, req, runtime), new $_model.GetGatewayResponse({}));
  }

  /**
   * Obtains the basic information about a gateway, such as the virtual private cloud (VPC) and vSwitch to which the gateway belongs.
   * 
   * @param request - GetGatewayRequest
   * @returns GetGatewayResponse
   */
  async getGateway(request: $_model.GetGatewayRequest): Promise<$_model.GetGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGatewayWithOptions(request, runtime);
  }

  /**
   * Queries the details of the consumer on which a gateway performs authentication operations.
   * 
   * @param request - GetGatewayAuthConsumerDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGatewayAuthConsumerDetailResponse
   */
  async getGatewayAuthConsumerDetailWithOptions(request: $_model.GetGatewayAuthConsumerDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGatewayAuthConsumerDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGatewayAuthConsumerDetail",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGatewayAuthConsumerDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetGatewayAuthConsumerDetailResponse({}));
  }

  /**
   * Queries the details of the consumer on which a gateway performs authentication operations.
   * 
   * @param request - GetGatewayAuthConsumerDetailRequest
   * @returns GetGatewayAuthConsumerDetailResponse
   */
  async getGatewayAuthConsumerDetail(request: $_model.GetGatewayAuthConsumerDetailRequest): Promise<$_model.GetGatewayAuthConsumerDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGatewayAuthConsumerDetailWithOptions(request, runtime);
  }

  /**
   * 查询网关认证详情
   * 
   * @param request - GetGatewayAuthDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGatewayAuthDetailResponse
   */
  async getGatewayAuthDetailWithOptions(request: $_model.GetGatewayAuthDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGatewayAuthDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGatewayAuthDetail",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGatewayAuthDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetGatewayAuthDetailResponse({}));
  }

  /**
   * 查询网关认证详情
   * 
   * @param request - GetGatewayAuthDetailRequest
   * @returns GetGatewayAuthDetailResponse
   */
  async getGatewayAuthDetail(request: $_model.GetGatewayAuthDetailRequest): Promise<$_model.GetGatewayAuthDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGatewayAuthDetailWithOptions(request, runtime);
  }

  /**
   * 获取网关全局配置
   * 
   * @param request - GetGatewayConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGatewayConfigResponse
   */
  async getGatewayConfigWithOptions(request: $_model.GetGatewayConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGatewayConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGatewayConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGatewayConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetGatewayConfigResponse({}));
  }

  /**
   * 获取网关全局配置
   * 
   * @param request - GetGatewayConfigRequest
   * @returns GetGatewayConfigResponse
   */
  async getGatewayConfig(request: $_model.GetGatewayConfigRequest): Promise<$_model.GetGatewayConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGatewayConfigWithOptions(request, runtime);
  }

  /**
   * Queries the details of a domain name associated with a gateway.
   * 
   * @param request - GetGatewayDomainDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGatewayDomainDetailResponse
   */
  async getGatewayDomainDetailWithOptions(request: $_model.GetGatewayDomainDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGatewayDomainDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGatewayDomainDetail",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGatewayDomainDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetGatewayDomainDetailResponse({}));
  }

  /**
   * Queries the details of a domain name associated with a gateway.
   * 
   * @param request - GetGatewayDomainDetailRequest
   * @returns GetGatewayDomainDetailResponse
   */
  async getGatewayDomainDetail(request: $_model.GetGatewayDomainDetailRequest): Promise<$_model.GetGatewayDomainDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGatewayDomainDetailWithOptions(request, runtime);
  }

  /**
   * Obtains the global parameters of a gateway.
   * 
   * @param request - GetGatewayOptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGatewayOptionResponse
   */
  async getGatewayOptionWithOptions(request: $_model.GetGatewayOptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGatewayOptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGatewayOption",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGatewayOptionResponse>(await this.callApi(params, req, runtime), new $_model.GetGatewayOptionResponse({}));
  }

  /**
   * Obtains the global parameters of a gateway.
   * 
   * @param request - GetGatewayOptionRequest
   * @returns GetGatewayOptionResponse
   */
  async getGatewayOption(request: $_model.GetGatewayOptionRequest): Promise<$_model.GetGatewayOptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGatewayOptionWithOptions(request, runtime);
  }

  /**
   * Queries the details of a route for a gateway.
   * 
   * @param request - GetGatewayRouteDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGatewayRouteDetailResponse
   */
  async getGatewayRouteDetailWithOptions(request: $_model.GetGatewayRouteDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGatewayRouteDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.routeId)) {
      query["RouteId"] = request.routeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGatewayRouteDetail",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGatewayRouteDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetGatewayRouteDetailResponse({}));
  }

  /**
   * Queries the details of a route for a gateway.
   * 
   * @param request - GetGatewayRouteDetailRequest
   * @returns GetGatewayRouteDetailResponse
   */
  async getGatewayRouteDetail(request: $_model.GetGatewayRouteDetailRequest): Promise<$_model.GetGatewayRouteDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGatewayRouteDetailWithOptions(request, runtime);
  }

  /**
   * Queries the details of a service.
   * 
   * @param request - GetGatewayServiceDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGatewayServiceDetailResponse
   */
  async getGatewayServiceDetailWithOptions(request: $_model.GetGatewayServiceDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGatewayServiceDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGatewayServiceDetail",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGatewayServiceDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetGatewayServiceDetailResponse({}));
  }

  /**
   * Queries the details of a service.
   * 
   * @param request - GetGatewayServiceDetailRequest
   * @returns GetGatewayServiceDetailResponse
   */
  async getGatewayServiceDetail(request: $_model.GetGatewayServiceDetailRequest): Promise<$_model.GetGatewayServiceDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGatewayServiceDetailWithOptions(request, runtime);
  }

  /**
   * Queries the information about a Container Service for Kubernetes (ACK) cluster for which Microservices Governance is enabled.
   * 
   * @param request - GetGovernanceKubernetesClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGovernanceKubernetesClusterResponse
   */
  async getGovernanceKubernetesClusterWithOptions(request: $_model.GetGovernanceKubernetesClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGovernanceKubernetesClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGovernanceKubernetesCluster",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGovernanceKubernetesClusterResponse>(await this.callApi(params, req, runtime), new $_model.GetGovernanceKubernetesClusterResponse({}));
  }

  /**
   * Queries the information about a Container Service for Kubernetes (ACK) cluster for which Microservices Governance is enabled.
   * 
   * @param request - GetGovernanceKubernetesClusterRequest
   * @returns GetGovernanceKubernetesClusterResponse
   */
  async getGovernanceKubernetesCluster(request: $_model.GetGovernanceKubernetesClusterRequest): Promise<$_model.GetGovernanceKubernetesClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGovernanceKubernetesClusterWithOptions(request, runtime);
  }

  /**
   * Queries the maximum version number to which the current version can be upgraded.
   * 
   * @param request - GetImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageResponse
   */
  async getImageWithOptions(request: $_model.GetImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.versionCode)) {
      query["VersionCode"] = request.versionCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImage",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetImageResponse>(await this.callApi(params, req, runtime), new $_model.GetImageResponse({}));
  }

  /**
   * Queries the maximum version number to which the current version can be upgraded.
   * 
   * @param request - GetImageRequest
   * @returns GetImageResponse
   */
  async getImage(request: $_model.GetImageRequest): Promise<$_model.GetImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getImageWithOptions(request, runtime);
  }

  /**
   * Obtains the URL that is used to upload a configuration file when you import the configuration file into a Microservices Engine (MSE) Nacos instance.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).\\n
   * 
   * @param request - GetImportFileUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImportFileUrlResponse
   */
  async getImportFileUrlWithOptions(request: $_model.GetImportFileUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetImportFileUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.contentType)) {
      query["ContentType"] = request.contentType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImportFileUrl",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetImportFileUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetImportFileUrlResponse({}));
  }

  /**
   * Obtains the URL that is used to upload a configuration file when you import the configuration file into a Microservices Engine (MSE) Nacos instance.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).\\n
   * 
   * @param request - GetImportFileUrlRequest
   * @returns GetImportFileUrlResponse
   */
  async getImportFileUrl(request: $_model.GetImportFileUrlRequest): Promise<$_model.GetImportFileUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getImportFileUrlWithOptions(request, runtime);
  }

  /**
   * Obtains sources of all Container Service for Kubernetes (ACK) services in a gateway.
   * 
   * @param request - GetKubernetesSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKubernetesSourceResponse
   */
  async getKubernetesSourceWithOptions(request: $_model.GetKubernetesSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetKubernetesSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.isAll)) {
      query["IsAll"] = request.isAll;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetKubernetesSource",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetKubernetesSourceResponse>(await this.callApi(params, req, runtime), new $_model.GetKubernetesSourceResponse({}));
  }

  /**
   * Obtains sources of all Container Service for Kubernetes (ACK) services in a gateway.
   * 
   * @param request - GetKubernetesSourceRequest
   * @returns GetKubernetesSourceResponse
   */
  async getKubernetesSource(request: $_model.GetKubernetesSourceRequest): Promise<$_model.GetKubernetesSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getKubernetesSourceWithOptions(request, runtime);
  }

  /**
   * 获取同AZ路由规则
   * 
   * @param request - GetLocalityRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLocalityRuleResponse
   */
  async getLocalityRuleWithOptions(request: $_model.GetLocalityRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLocalityRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLocalityRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLocalityRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetLocalityRuleResponse({}));
  }

  /**
   * 获取同AZ路由规则
   * 
   * @param request - GetLocalityRuleRequest
   * @returns GetLocalityRuleResponse
   */
  async getLocalityRule(request: $_model.GetLocalityRuleRequest): Promise<$_model.GetLocalityRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLocalityRuleWithOptions(request, runtime);
  }

  /**
   * Queries the rules for graceful start and shutdown of an application.
   * 
   * @remarks
   * You can call this operation to query the rules for graceful start and shutdown of an application.
   * You can query the rules for graceful start and shutdown of an application preferentially by using the AppId parameter.
   * If the AppId parameter is left empty, you can use the RegionId, Namespace, and AppName parameters to query the rules for graceful start and shutdown of an application.
   * 
   * @param request - GetLosslessRuleByAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLosslessRuleByAppResponse
   */
  async getLosslessRuleByAppWithOptions(request: $_model.GetLosslessRuleByAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLosslessRuleByAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLosslessRuleByApp",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLosslessRuleByAppResponse>(await this.callApi(params, req, runtime), new $_model.GetLosslessRuleByAppResponse({}));
  }

  /**
   * Queries the rules for graceful start and shutdown of an application.
   * 
   * @remarks
   * You can call this operation to query the rules for graceful start and shutdown of an application.
   * You can query the rules for graceful start and shutdown of an application preferentially by using the AppId parameter.
   * If the AppId parameter is left empty, you can use the RegionId, Namespace, and AppName parameters to query the rules for graceful start and shutdown of an application.
   * 
   * @param request - GetLosslessRuleByAppRequest
   * @returns GetLosslessRuleByAppResponse
   */
  async getLosslessRuleByApp(request: $_model.GetLosslessRuleByAppRequest): Promise<$_model.GetLosslessRuleByAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLosslessRuleByAppWithOptions(request, runtime);
  }

  /**
   * Queries the information about the MSE feature switch.
   * 
   * @param request - GetMseFeatureSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMseFeatureSwitchResponse
   */
  async getMseFeatureSwitchWithOptions(request: $_model.GetMseFeatureSwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMseFeatureSwitchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMseFeatureSwitch",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMseFeatureSwitchResponse>(await this.callApi(params, req, runtime), new $_model.GetMseFeatureSwitchResponse({}));
  }

  /**
   * Queries the information about the MSE feature switch.
   * 
   * @param request - GetMseFeatureSwitchRequest
   * @returns GetMseFeatureSwitchResponse
   */
  async getMseFeatureSwitch(request: $_model.GetMseFeatureSwitchRequest): Promise<$_model.GetMseFeatureSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMseFeatureSwitchWithOptions(request, runtime);
  }

  /**
   * Queries the existing Microservices Engine (MSE) Nacos instances that are service sources of a gateway.
   * 
   * @param request - GetMseSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMseSourceResponse
   */
  async getMseSourceWithOptions(request: $_model.GetMseSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMseSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMseSource",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMseSourceResponse>(await this.callApi(params, req, runtime), new $_model.GetMseSourceResponse({}));
  }

  /**
   * Queries the existing Microservices Engine (MSE) Nacos instances that are service sources of a gateway.
   * 
   * @param request - GetMseSourceRequest
   * @returns GetMseSourceResponse
   */
  async getMseSource(request: $_model.GetMseSourceRequest): Promise<$_model.GetMseSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMseSourceWithOptions(request, runtime);
  }

  /**
   * Get Nacos Configuration
   * 
   * @remarks
   * > This OpenAPI is not the Nacos-SDK API. For information related to the Nacos-SDK API, please refer to the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - GetNacosConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNacosConfigResponse
   */
  async getNacosConfigWithOptions(request: $_model.GetNacosConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNacosConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.beta)) {
      query["Beta"] = request.beta;
    }

    if (!$dara.isNull(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!$dara.isNull(request.group)) {
      query["Group"] = request.group;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNacosConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNacosConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetNacosConfigResponse({}));
  }

  /**
   * Get Nacos Configuration
   * 
   * @remarks
   * > This OpenAPI is not the Nacos-SDK API. For information related to the Nacos-SDK API, please refer to the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - GetNacosConfigRequest
   * @returns GetNacosConfigResponse
   */
  async getNacosConfig(request: $_model.GetNacosConfigRequest): Promise<$_model.GetNacosConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNacosConfigWithOptions(request, runtime);
  }

  /**
   * Queries the historical details of Nacos configuration changes.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - GetNacosHistoryConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNacosHistoryConfigResponse
   */
  async getNacosHistoryConfigWithOptions(request: $_model.GetNacosHistoryConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNacosHistoryConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!$dara.isNull(request.group)) {
      query["Group"] = request.group;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.nid)) {
      query["Nid"] = request.nid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNacosHistoryConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNacosHistoryConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetNacosHistoryConfigResponse({}));
  }

  /**
   * Queries the historical details of Nacos configuration changes.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - GetNacosHistoryConfigRequest
   * @returns GetNacosHistoryConfigResponse
   */
  async getNacosHistoryConfig(request: $_model.GetNacosHistoryConfigRequest): Promise<$_model.GetNacosHistoryConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNacosHistoryConfigWithOptions(request, runtime);
  }

  /**
   * Queries information about service governance.
   * 
   * @remarks
   * You can call this operation to query overview information about service governance.
   * 
   * @param request - GetOverviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOverviewResponse
   */
  async getOverviewWithOptions(request: $_model.GetOverviewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOverviewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOverview",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOverviewResponse>(await this.callApi(params, req, runtime), new $_model.GetOverviewResponse({}));
  }

  /**
   * Queries information about service governance.
   * 
   * @remarks
   * You can call this operation to query overview information about service governance.
   * 
   * @param request - GetOverviewRequest
   * @returns GetOverviewResponse
   */
  async getOverview(request: $_model.GetOverviewRequest): Promise<$_model.GetOverviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOverviewWithOptions(request, runtime);
  }

  /**
   * Obtains plug-in configurations.
   * 
   * @param request - GetPluginConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPluginConfigResponse
   */
  async getPluginConfigWithOptions(request: $_model.GetPluginConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPluginConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPluginConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPluginConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetPluginConfigResponse({}));
  }

  /**
   * Obtains plug-in configurations.
   * 
   * @param request - GetPluginConfigRequest
   * @returns GetPluginConfigResponse
   */
  async getPluginConfig(request: $_model.GetPluginConfigRequest): Promise<$_model.GetPluginConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPluginConfigWithOptions(request, runtime);
  }

  /**
   * Obtains plug-ins.
   * 
   * @param request - GetPluginsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPluginsResponse
   */
  async getPluginsWithOptions(request: $_model.GetPluginsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPluginsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.enableOnly)) {
      query["EnableOnly"] = request.enableOnly;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPlugins",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPluginsResponse>(await this.callApi(params, req, runtime), new $_model.GetPluginsResponse({}));
  }

  /**
   * Obtains plug-ins.
   * 
   * @param request - GetPluginsRequest
   * @returns GetPluginsResponse
   */
  async getPlugins(request: $_model.GetPluginsRequest): Promise<$_model.GetPluginsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPluginsWithOptions(request, runtime);
  }

  /**
   * Queries the services of an application.
   * 
   * @param request - GetServiceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceListResponse
   */
  async getServiceListWithOptions(request: $_model.GetServiceListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceList",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceListResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceListResponse({}));
  }

  /**
   * Queries the services of an application.
   * 
   * @param request - GetServiceListRequest
   * @returns GetServiceListResponse
   */
  async getServiceList(request: $_model.GetServiceListRequest): Promise<$_model.GetServiceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceListWithOptions(request, runtime);
  }

  /**
   * Queries the version of a microservices application.
   * 
   * @param request - GetServiceListPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceListPageResponse
   */
  async getServiceListPageWithOptions(request: $_model.GetServiceListPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceListPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceListPage",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceListPageResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceListPageResponse({}));
  }

  /**
   * Queries the version of a microservices application.
   * 
   * @param request - GetServiceListPageRequest
   * @returns GetServiceListPageResponse
   */
  async getServiceListPage(request: $_model.GetServiceListPageRequest): Promise<$_model.GetServiceListPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceListPageWithOptions(request, runtime);
  }

  /**
   * Queries the list of listeners for the destination service.
   * 
   * @param request - GetServiceListenersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceListenersResponse
   */
  async getServiceListenersWithOptions(request: $_model.GetServiceListenersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceListenersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.hasIpCount)) {
      query["HasIpCount"] = request.hasIpCount;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceListeners",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceListenersResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceListenersResponse({}));
  }

  /**
   * Queries the list of listeners for the destination service.
   * 
   * @param request - GetServiceListenersRequest
   * @returns GetServiceListenersResponse
   */
  async getServiceListeners(request: $_model.GetServiceListenersRequest): Promise<$_model.GetServiceListenersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceListenersWithOptions(request, runtime);
  }

  /**
   * 获取服务接口列表
   * 
   * @param request - GetServiceMethodPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceMethodPageResponse
   */
  async getServiceMethodPageWithOptions(request: $_model.GetServiceMethodPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceMethodPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.methodController)) {
      query["MethodController"] = request.methodController;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.serviceGroup)) {
      query["ServiceGroup"] = request.serviceGroup;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceMethodPage",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceMethodPageResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceMethodPageResponse({}));
  }

  /**
   * 获取服务接口列表
   * 
   * @param request - GetServiceMethodPageRequest
   * @returns GetServiceMethodPageResponse
   */
  async getServiceMethodPage(request: $_model.GetServiceMethodPageRequest): Promise<$_model.GetServiceMethodPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceMethodPageWithOptions(request, runtime);
  }

  /**
   * Obtains all tags in the current lane group.
   * 
   * @param request - GetTagsBySwimmingLaneGroupIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTagsBySwimmingLaneGroupIdResponse
   */
  async getTagsBySwimmingLaneGroupIdWithOptions(request: $_model.GetTagsBySwimmingLaneGroupIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTagsBySwimmingLaneGroupIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTagsBySwimmingLaneGroupId",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTagsBySwimmingLaneGroupIdResponse>(await this.callApi(params, req, runtime), new $_model.GetTagsBySwimmingLaneGroupIdResponse({}));
  }

  /**
   * Obtains all tags in the current lane group.
   * 
   * @param request - GetTagsBySwimmingLaneGroupIdRequest
   * @returns GetTagsBySwimmingLaneGroupIdResponse
   */
  async getTagsBySwimmingLaneGroupId(request: $_model.GetTagsBySwimmingLaneGroupIdRequest): Promise<$_model.GetTagsBySwimmingLaneGroupIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTagsBySwimmingLaneGroupIdWithOptions(request, runtime);
  }

  /**
   * mse-200-105
   * 
   * @param request - GetZookeeperDataImportUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetZookeeperDataImportUrlResponse
   */
  async getZookeeperDataImportUrlWithOptions(request: $_model.GetZookeeperDataImportUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetZookeeperDataImportUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.contentType)) {
      query["ContentType"] = request.contentType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetZookeeperDataImportUrl",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetZookeeperDataImportUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetZookeeperDataImportUrlResponse({}));
  }

  /**
   * mse-200-105
   * 
   * @param request - GetZookeeperDataImportUrlRequest
   * @returns GetZookeeperDataImportUrlResponse
   */
  async getZookeeperDataImportUrl(request: $_model.GetZookeeperDataImportUrlRequest): Promise<$_model.GetZookeeperDataImportUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getZookeeperDataImportUrlWithOptions(request, runtime);
  }

  /**
   * Imports Nacos configurations as a file.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - ImportNacosConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportNacosConfigResponse
   */
  async importNacosConfigWithOptions(request: $_model.ImportNacosConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportNacosConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.policy)) {
      query["Policy"] = request.policy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportNacosConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportNacosConfigResponse>(await this.callApi(params, req, runtime), new $_model.ImportNacosConfigResponse({}));
  }

  /**
   * Imports Nacos configurations as a file.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - ImportNacosConfigRequest
   * @returns ImportNacosConfigResponse
   */
  async importNacosConfig(request: $_model.ImportNacosConfigRequest): Promise<$_model.ImportNacosConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importNacosConfigWithOptions(request, runtime);
  }

  /**
   * Imports services to a gateway.
   * 
   * @param tmpReq - ImportServicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportServicesResponse
   */
  async importServicesWithOptions(tmpReq: $_model.ImportServicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportServicesResponse> {
    tmpReq.validate();
    let request = new $_model.ImportServicesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.serviceList)) {
      request.serviceListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serviceList, "ServiceList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.fcAlias)) {
      query["FcAlias"] = request.fcAlias;
    }

    if (!$dara.isNull(request.fcServiceName)) {
      query["FcServiceName"] = request.fcServiceName;
    }

    if (!$dara.isNull(request.fcVersion)) {
      query["FcVersion"] = request.fcVersion;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.serviceListShrink)) {
      query["ServiceList"] = request.serviceListShrink;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.tlsSetting)) {
      query["TlsSetting"] = request.tlsSetting;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportServices",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportServicesResponse>(await this.callApi(params, req, runtime), new $_model.ImportServicesResponse({}));
  }

  /**
   * Imports services to a gateway.
   * 
   * @param request - ImportServicesRequest
   * @returns ImportServicesResponse
   */
  async importServices(request: $_model.ImportServicesRequest): Promise<$_model.ImportServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importServicesWithOptions(request, runtime);
  }

  /**
   * Initiates a task to import data from a destination URL to a Microservices Engine (MSE) ZooKeeper instance.
   * 
   * @remarks
   * *Danger** This operation clears existing data. Exercise caution when you call this API operation.
   * 
   * @param request - ImportZookeeperDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportZookeeperDataResponse
   */
  async importZookeeperDataWithOptions(request: $_model.ImportZookeeperDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportZookeeperDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportZookeeperData",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportZookeeperDataResponse>(await this.callApi(params, req, runtime), new $_model.ImportZookeeperDataResponse({}));
  }

  /**
   * Initiates a task to import data from a destination URL to a Microservices Engine (MSE) ZooKeeper instance.
   * 
   * @remarks
   * *Danger** This operation clears existing data. Exercise caution when you call this API operation.
   * 
   * @param request - ImportZookeeperDataRequest
   * @returns ImportZookeeperDataResponse
   */
  async importZookeeperData(request: $_model.ImportZookeeperDataRequest): Promise<$_model.ImportZookeeperDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importZookeeperDataWithOptions(request, runtime);
  }

  /**
   * 用户授权mseSLR
   * 
   * @param request - InitializeServiceLinkRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitializeServiceLinkRoleResponse
   */
  async initializeServiceLinkRoleWithOptions(request: $_model.InitializeServiceLinkRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InitializeServiceLinkRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InitializeServiceLinkRole",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InitializeServiceLinkRoleResponse>(await this.callApi(params, req, runtime), new $_model.InitializeServiceLinkRoleResponse({}));
  }

  /**
   * 用户授权mseSLR
   * 
   * @param request - InitializeServiceLinkRoleRequest
   * @returns InitializeServiceLinkRoleResponse
   */
  async initializeServiceLinkRole(request: $_model.InitializeServiceLinkRoleRequest): Promise<$_model.InitializeServiceLinkRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initializeServiceLinkRoleWithOptions(request, runtime);
  }

  /**
   * Queries application instances that are registered with a Microservices Engine (MSE) Nacos instance.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - ListAnsInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAnsInstancesResponse
   */
  async listAnsInstancesWithOptions(request: $_model.ListAnsInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAnsInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAnsInstances",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAnsInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListAnsInstancesResponse({}));
  }

  /**
   * Queries application instances that are registered with a Microservices Engine (MSE) Nacos instance.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - ListAnsInstancesRequest
   * @returns ListAnsInstancesResponse
   */
  async listAnsInstances(request: $_model.ListAnsInstancesRequest): Promise<$_model.ListAnsInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAnsInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the clusters of a Nacos service.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - ListAnsServiceClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAnsServiceClustersResponse
   */
  async listAnsServiceClustersWithOptions(request: $_model.ListAnsServiceClustersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAnsServiceClustersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAnsServiceClusters",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAnsServiceClustersResponse>(await this.callApi(params, req, runtime), new $_model.ListAnsServiceClustersResponse({}));
  }

  /**
   * Queries the clusters of a Nacos service.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - ListAnsServiceClustersRequest
   * @returns ListAnsServiceClustersResponse
   */
  async listAnsServiceClusters(request: $_model.ListAnsServiceClustersRequest): Promise<$_model.ListAnsServiceClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAnsServiceClustersWithOptions(request, runtime);
  }

  /**
   * Queries Nacos services.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - ListAnsServicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAnsServicesResponse
   */
  async listAnsServicesWithOptions(request: $_model.ListAnsServicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAnsServicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.hasIpCount)) {
      query["HasIpCount"] = request.hasIpCount;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAnsServices",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAnsServicesResponse>(await this.callApi(params, req, runtime), new $_model.ListAnsServicesResponse({}));
  }

  /**
   * Queries Nacos services.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - ListAnsServicesRequest
   * @returns ListAnsServicesResponse
   */
  async listAnsServices(request: $_model.ListAnsServicesRequest): Promise<$_model.ListAnsServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAnsServicesWithOptions(request, runtime);
  }

  /**
   * Queries the applications in a lane group by tag.
   * 
   * @deprecated OpenAPI ListAppBySwimmingLaneGroupTag is deprecated, please use mse::2019-05-31::ListAppBySwimmingLaneGroupTags instead.
   * 
   * @param request - ListAppBySwimmingLaneGroupTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppBySwimmingLaneGroupTagResponse
   */
  // Deprecated
  async listAppBySwimmingLaneGroupTagWithOptions(request: $_model.ListAppBySwimmingLaneGroupTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppBySwimmingLaneGroupTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppBySwimmingLaneGroupTag",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppBySwimmingLaneGroupTagResponse>(await this.callApi(params, req, runtime), new $_model.ListAppBySwimmingLaneGroupTagResponse({}));
  }

  /**
   * Queries the applications in a lane group by tag.
   * 
   * @deprecated OpenAPI ListAppBySwimmingLaneGroupTag is deprecated, please use mse::2019-05-31::ListAppBySwimmingLaneGroupTags instead.
   * 
   * @param request - ListAppBySwimmingLaneGroupTagRequest
   * @returns ListAppBySwimmingLaneGroupTagResponse
   */
  // Deprecated
  async listAppBySwimmingLaneGroupTag(request: $_model.ListAppBySwimmingLaneGroupTagRequest): Promise<$_model.ListAppBySwimmingLaneGroupTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppBySwimmingLaneGroupTagWithOptions(request, runtime);
  }

  /**
   * Lists applications by tag in a specified lane group.
   * 
   * @param tmpReq - ListAppBySwimmingLaneGroupTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppBySwimmingLaneGroupTagsResponse
   */
  async listAppBySwimmingLaneGroupTagsWithOptions(tmpReq: $_model.ListAppBySwimmingLaneGroupTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppBySwimmingLaneGroupTagsResponse> {
    tmpReq.validate();
    let request = new $_model.ListAppBySwimmingLaneGroupTagsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppBySwimmingLaneGroupTags",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppBySwimmingLaneGroupTagsResponse>(await this.callApi(params, req, runtime), new $_model.ListAppBySwimmingLaneGroupTagsResponse({}));
  }

  /**
   * Lists applications by tag in a specified lane group.
   * 
   * @param request - ListAppBySwimmingLaneGroupTagsRequest
   * @returns ListAppBySwimmingLaneGroupTagsResponse
   */
  async listAppBySwimmingLaneGroupTags(request: $_model.ListAppBySwimmingLaneGroupTagsRequest): Promise<$_model.ListAppBySwimmingLaneGroupTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppBySwimmingLaneGroupTagsWithOptions(request, runtime);
  }

  /**
   * Queries the routing rules of an application.
   * 
   * @param request - ListApplicationsWithTagRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsWithTagRulesResponse
   */
  async listApplicationsWithTagRulesWithOptions(request: $_model.ListApplicationsWithTagRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationsWithTagRulesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationsWithTagRules",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationsWithTagRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationsWithTagRulesResponse({}));
  }

  /**
   * Queries the routing rules of an application.
   * 
   * @param request - ListApplicationsWithTagRulesRequest
   * @returns ListApplicationsWithTagRulesResponse
   */
  async listApplicationsWithTagRules(request: $_model.ListApplicationsWithTagRulesRequest): Promise<$_model.ListApplicationsWithTagRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationsWithTagRulesWithOptions(request, runtime);
  }

  /**
   * Queries a list of service authentication rules.
   * 
   * @param request - ListAuthPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAuthPolicyResponse
   */
  async listAuthPolicyWithOptions(request: $_model.ListAuthPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAuthPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAuthPolicy",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAuthPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ListAuthPolicyResponse({}));
  }

  /**
   * Queries a list of service authentication rules.
   * 
   * @param request - ListAuthPolicyRequest
   * @returns ListAuthPolicyResponse
   */
  async listAuthPolicy(request: $_model.ListAuthPolicyRequest): Promise<$_model.ListAuthPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAuthPolicyWithOptions(request, runtime);
  }

  /**
   * Queries a list of circuit breaking rules.
   * 
   * @param request - ListCircuitBreakerRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCircuitBreakerRulesResponse
   */
  async listCircuitBreakerRulesWithOptions(request: $_model.ListCircuitBreakerRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCircuitBreakerRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceSearchKey)) {
      query["ResourceSearchKey"] = request.resourceSearchKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCircuitBreakerRules",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCircuitBreakerRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListCircuitBreakerRulesResponse({}));
  }

  /**
   * Queries a list of circuit breaking rules.
   * 
   * @param request - ListCircuitBreakerRulesRequest
   * @returns ListCircuitBreakerRulesResponse
   */
  async listCircuitBreakerRules(request: $_model.ListCircuitBreakerRulesRequest): Promise<$_model.ListCircuitBreakerRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCircuitBreakerRulesWithOptions(request, runtime);
  }

  /**
   * Queries available cluster connection types.
   * 
   * @param request - ListClusterConnectionTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterConnectionTypesResponse
   */
  async listClusterConnectionTypesWithOptions(request: $_model.ListClusterConnectionTypesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClusterConnectionTypesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusterConnectionTypes",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClusterConnectionTypesResponse>(await this.callApi(params, req, runtime), new $_model.ListClusterConnectionTypesResponse({}));
  }

  /**
   * Queries available cluster connection types.
   * 
   * @param request - ListClusterConnectionTypesRequest
   * @returns ListClusterConnectionTypesResponse
   */
  async listClusterConnectionTypes(request: $_model.ListClusterConnectionTypesRequest): Promise<$_model.ListClusterConnectionTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClusterConnectionTypesWithOptions(request, runtime);
  }

  /**
   * Obtains information about historical health check tasks.
   * 
   * @param request - ListClusterHealthCheckTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterHealthCheckTaskResponse
   */
  async listClusterHealthCheckTaskWithOptions(request: $_model.ListClusterHealthCheckTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClusterHealthCheckTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusterHealthCheckTask",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClusterHealthCheckTaskResponse>(await this.callApi(params, req, runtime), new $_model.ListClusterHealthCheckTaskResponse({}));
  }

  /**
   * Obtains information about historical health check tasks.
   * 
   * @param request - ListClusterHealthCheckTaskRequest
   * @returns ListClusterHealthCheckTaskResponse
   */
  async listClusterHealthCheckTask(request: $_model.ListClusterHealthCheckTaskRequest): Promise<$_model.ListClusterHealthCheckTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClusterHealthCheckTaskWithOptions(request, runtime);
  }

  /**
   * Queries the engine types that can be activated.
   * 
   * @param request - ListClusterTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterTypesResponse
   */
  async listClusterTypesWithOptions(request: $_model.ListClusterTypesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClusterTypesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.connectType)) {
      query["ConnectType"] = request.connectType;
    }

    if (!$dara.isNull(request.mseVersion)) {
      query["MseVersion"] = request.mseVersion;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusterTypes",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClusterTypesResponse>(await this.callApi(params, req, runtime), new $_model.ListClusterTypesResponse({}));
  }

  /**
   * Queries the engine types that can be activated.
   * 
   * @param request - ListClusterTypesRequest
   * @returns ListClusterTypesResponse
   */
  async listClusterTypes(request: $_model.ListClusterTypesRequest): Promise<$_model.ListClusterTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClusterTypesWithOptions(request, runtime);
  }

  /**
   * Queries the information about supported instance versions.
   * 
   * @param request - ListClusterVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterVersionsResponse
   */
  async listClusterVersionsWithOptions(request: $_model.ListClusterVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClusterVersionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.mseVersion)) {
      query["MseVersion"] = request.mseVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusterVersions",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClusterVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListClusterVersionsResponse({}));
  }

  /**
   * Queries the information about supported instance versions.
   * 
   * @param request - ListClusterVersionsRequest
   * @returns ListClusterVersionsResponse
   */
  async listClusterVersions(request: $_model.ListClusterVersionsRequest): Promise<$_model.ListClusterVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClusterVersionsWithOptions(request, runtime);
  }

  /**
   * Queries Microservices Engine (MSE) instances.
   * 
   * @param request - ListClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClustersResponse
   */
  async listClustersWithOptions(request: $_model.ListClustersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClustersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterAliasName)) {
      query["ClusterAliasName"] = request.clusterAliasName;
    }

    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusters",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClustersResponse>(await this.callApi(params, req, runtime), new $_model.ListClustersResponse({}));
  }

  /**
   * Queries Microservices Engine (MSE) instances.
   * 
   * @param request - ListClustersRequest
   * @returns ListClustersResponse
   */
  async listClusters(request: $_model.ListClustersRequest): Promise<$_model.ListClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClustersWithOptions(request, runtime);
  }

  /**
   * Obtains the track data of a Nacos configuration center.
   * 
   * @param request - ListConfigTrackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConfigTrackResponse
   */
  async listConfigTrackWithOptions(request: $_model.ListConfigTrackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListConfigTrackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!$dara.isNull(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!$dara.isNull(request.group)) {
      query["Group"] = request.group;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    if (!$dara.isNull(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    if (!$dara.isNull(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConfigTrack",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConfigTrackResponse>(await this.callApi(params, req, runtime), new $_model.ListConfigTrackResponse({}));
  }

  /**
   * Obtains the track data of a Nacos configuration center.
   * 
   * @param request - ListConfigTrackRequest
   * @returns ListConfigTrackResponse
   */
  async listConfigTrack(request: $_model.ListConfigTrackRequest): Promise<$_model.ListConfigTrackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConfigTrackWithOptions(request, runtime);
  }

  /**
   * Queries the namespaces of a Nacos instance.
   * 
   * @param request - ListEngineNamespacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEngineNamespacesResponse
   */
  async listEngineNamespacesWithOptions(request: $_model.ListEngineNamespacesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEngineNamespacesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEngineNamespaces",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEngineNamespacesResponse>(await this.callApi(params, req, runtime), new $_model.ListEngineNamespacesResponse({}));
  }

  /**
   * Queries the namespaces of a Nacos instance.
   * 
   * @param request - ListEngineNamespacesRequest
   * @returns ListEngineNamespacesResponse
   */
  async listEngineNamespaces(request: $_model.ListEngineNamespacesRequest): Promise<$_model.ListEngineNamespacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEngineNamespacesWithOptions(request, runtime);
  }

  /**
   * Queries Eureka instances.
   * 
   * @param request - ListEurekaInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEurekaInstancesResponse
   */
  async listEurekaInstancesWithOptions(request: $_model.ListEurekaInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEurekaInstancesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEurekaInstances",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEurekaInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListEurekaInstancesResponse({}));
  }

  /**
   * Queries Eureka instances.
   * 
   * @param request - ListEurekaInstancesRequest
   * @returns ListEurekaInstancesResponse
   */
  async listEurekaInstances(request: $_model.ListEurekaInstancesRequest): Promise<$_model.ListEurekaInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEurekaInstancesWithOptions(request, runtime);
  }

  /**
   * Queries Eureka services.
   * 
   * @param request - ListEurekaServicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEurekaServicesResponse
   */
  async listEurekaServicesWithOptions(request: $_model.ListEurekaServicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEurekaServicesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEurekaServices",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEurekaServicesResponse>(await this.callApi(params, req, runtime), new $_model.ListEurekaServicesResponse({}));
  }

  /**
   * Queries Eureka services.
   * 
   * @param request - ListEurekaServicesRequest
   * @returns ListEurekaServicesResponse
   */
  async listEurekaServices(request: $_model.ListEurekaServicesRequest): Promise<$_model.ListEurekaServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEurekaServicesWithOptions(request, runtime);
  }

  /**
   * Lists historical data export tasks of a Microservices Engine (MSE) Zookeeper instance.
   * 
   * @param request - ListExportZookeeperDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExportZookeeperDataResponse
   */
  async listExportZookeeperDataWithOptions(request: $_model.ListExportZookeeperDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListExportZookeeperDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExportZookeeperData",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExportZookeeperDataResponse>(await this.callApi(params, req, runtime), new $_model.ListExportZookeeperDataResponse({}));
  }

  /**
   * Lists historical data export tasks of a Microservices Engine (MSE) Zookeeper instance.
   * 
   * @param request - ListExportZookeeperDataRequest
   * @returns ListExportZookeeperDataResponse
   */
  async listExportZookeeperData(request: $_model.ListExportZookeeperDataRequest): Promise<$_model.ListExportZookeeperDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExportZookeeperDataWithOptions(request, runtime);
  }

  /**
   * Obtains a list of throttling rules.
   * 
   * @param request - ListFlowRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlowRulesResponse
   */
  async listFlowRulesWithOptions(request: $_model.ListFlowRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFlowRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceSearchKey)) {
      query["ResourceSearchKey"] = request.resourceSearchKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFlowRules",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFlowRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListFlowRulesResponse({}));
  }

  /**
   * Obtains a list of throttling rules.
   * 
   * @param request - ListFlowRulesRequest
   * @returns ListFlowRulesResponse
   */
  async listFlowRules(request: $_model.ListFlowRulesRequest): Promise<$_model.ListFlowRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFlowRulesWithOptions(request, runtime);
  }

  /**
   * Queries a list of gateways.
   * 
   * @param tmpReq - ListGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayResponse
   */
  async listGatewayWithOptions(tmpReq: $_model.ListGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGatewayResponse> {
    tmpReq.validate();
    let request = new $_model.ListGatewayShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filterParams)) {
      request.filterParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterParams, "FilterParams", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.descSort)) {
      query["DescSort"] = request.descSort;
    }

    if (!$dara.isNull(request.filterParamsShrink)) {
      query["FilterParams"] = request.filterParamsShrink;
    }

    if (!$dara.isNull(request.orderItem)) {
      query["OrderItem"] = request.orderItem;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGateway",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGatewayResponse>(await this.callApi(params, req, runtime), new $_model.ListGatewayResponse({}));
  }

  /**
   * Queries a list of gateways.
   * 
   * @param request - ListGatewayRequest
   * @returns ListGatewayResponse
   */
  async listGateway(request: $_model.ListGatewayRequest): Promise<$_model.ListGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGatewayWithOptions(request, runtime);
  }

  /**
   * Queries the list of consumers on which a gateway performs authentication operations.
   * 
   * @param request - ListGatewayAuthConsumerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayAuthConsumerResponse
   */
  async listGatewayAuthConsumerWithOptions(request: $_model.ListGatewayAuthConsumerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGatewayAuthConsumerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.consumerStatus)) {
      query["ConsumerStatus"] = request.consumerStatus;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGatewayAuthConsumer",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGatewayAuthConsumerResponse>(await this.callApi(params, req, runtime), new $_model.ListGatewayAuthConsumerResponse({}));
  }

  /**
   * Queries the list of consumers on which a gateway performs authentication operations.
   * 
   * @param request - ListGatewayAuthConsumerRequest
   * @returns ListGatewayAuthConsumerResponse
   */
  async listGatewayAuthConsumer(request: $_model.ListGatewayAuthConsumerRequest): Promise<$_model.ListGatewayAuthConsumerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGatewayAuthConsumerWithOptions(request, runtime);
  }

  /**
   * Queries the list of authorized resources for the consumer on which a gateway performs authentication operations.
   * 
   * @param request - ListGatewayAuthConsumerResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayAuthConsumerResourceResponse
   */
  async listGatewayAuthConsumerResourceWithOptions(request: $_model.ListGatewayAuthConsumerResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGatewayAuthConsumerResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.consumerId)) {
      query["ConsumerId"] = request.consumerId;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceStatus)) {
      query["ResourceStatus"] = request.resourceStatus;
    }

    if (!$dara.isNull(request.routeName)) {
      query["RouteName"] = request.routeName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGatewayAuthConsumerResource",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGatewayAuthConsumerResourceResponse>(await this.callApi(params, req, runtime), new $_model.ListGatewayAuthConsumerResourceResponse({}));
  }

  /**
   * Queries the list of authorized resources for the consumer on which a gateway performs authentication operations.
   * 
   * @param request - ListGatewayAuthConsumerResourceRequest
   * @returns ListGatewayAuthConsumerResourceResponse
   */
  async listGatewayAuthConsumerResource(request: $_model.ListGatewayAuthConsumerResourceRequest): Promise<$_model.ListGatewayAuthConsumerResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGatewayAuthConsumerResourceWithOptions(request, runtime);
  }

  /**
   * 查看网关路由熔断规则
   * 
   * @param request - ListGatewayCircuitBreakerRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayCircuitBreakerRuleResponse
   */
  async listGatewayCircuitBreakerRuleWithOptions(request: $_model.ListGatewayCircuitBreakerRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGatewayCircuitBreakerRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.filterParams)) {
      query["FilterParams"] = request.filterParams;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGatewayCircuitBreakerRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGatewayCircuitBreakerRuleResponse>(await this.callApi(params, req, runtime), new $_model.ListGatewayCircuitBreakerRuleResponse({}));
  }

  /**
   * 查看网关路由熔断规则
   * 
   * @param request - ListGatewayCircuitBreakerRuleRequest
   * @returns ListGatewayCircuitBreakerRuleResponse
   */
  async listGatewayCircuitBreakerRule(request: $_model.ListGatewayCircuitBreakerRuleRequest): Promise<$_model.ListGatewayCircuitBreakerRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGatewayCircuitBreakerRuleWithOptions(request, runtime);
  }

  /**
   * Queries the domain names that are associated with a gateway.
   * 
   * @param request - ListGatewayDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayDomainResponse
   */
  async listGatewayDomainWithOptions(request: $_model.ListGatewayDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGatewayDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGatewayDomain",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGatewayDomainResponse>(await this.callApi(params, req, runtime), new $_model.ListGatewayDomainResponse({}));
  }

  /**
   * Queries the domain names that are associated with a gateway.
   * 
   * @param request - ListGatewayDomainRequest
   * @returns ListGatewayDomainResponse
   */
  async listGatewayDomain(request: $_model.ListGatewayDomainRequest): Promise<$_model.ListGatewayDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGatewayDomainWithOptions(request, runtime);
  }

  /**
   * 查看网关路由流控规则
   * 
   * @param request - ListGatewayFlowRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayFlowRuleResponse
   */
  async listGatewayFlowRuleWithOptions(request: $_model.ListGatewayFlowRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGatewayFlowRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.filterParams)) {
      query["FilterParams"] = request.filterParams;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGatewayFlowRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGatewayFlowRuleResponse>(await this.callApi(params, req, runtime), new $_model.ListGatewayFlowRuleResponse({}));
  }

  /**
   * 查看网关路由流控规则
   * 
   * @param request - ListGatewayFlowRuleRequest
   * @returns ListGatewayFlowRuleResponse
   */
  async listGatewayFlowRule(request: $_model.ListGatewayFlowRuleRequest): Promise<$_model.ListGatewayFlowRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGatewayFlowRuleWithOptions(request, runtime);
  }

  /**
   * 查看网关路由隔离规则
   * 
   * @param request - ListGatewayIsolationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayIsolationRuleResponse
   */
  async listGatewayIsolationRuleWithOptions(request: $_model.ListGatewayIsolationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGatewayIsolationRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.filterParams)) {
      query["FilterParams"] = request.filterParams;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGatewayIsolationRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGatewayIsolationRuleResponse>(await this.callApi(params, req, runtime), new $_model.ListGatewayIsolationRuleResponse({}));
  }

  /**
   * 查看网关路由隔离规则
   * 
   * @param request - ListGatewayIsolationRuleRequest
   * @returns ListGatewayIsolationRuleResponse
   */
  async listGatewayIsolationRule(request: $_model.ListGatewayIsolationRuleRequest): Promise<$_model.ListGatewayIsolationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGatewayIsolationRuleWithOptions(request, runtime);
  }

  /**
   * Queries the routes of a gateway.
   * 
   * @param tmpReq - ListGatewayRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayRouteResponse
   */
  async listGatewayRouteWithOptions(tmpReq: $_model.ListGatewayRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGatewayRouteResponse> {
    tmpReq.validate();
    let request = new $_model.ListGatewayRouteShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filterParams)) {
      request.filterParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterParams, "FilterParams", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.descSort)) {
      query["DescSort"] = request.descSort;
    }

    if (!$dara.isNull(request.filterParamsShrink)) {
      query["FilterParams"] = request.filterParamsShrink;
    }

    if (!$dara.isNull(request.orderItem)) {
      query["OrderItem"] = request.orderItem;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGatewayRoute",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGatewayRouteResponse>(await this.callApi(params, req, runtime), new $_model.ListGatewayRouteResponse({}));
  }

  /**
   * Queries the routes of a gateway.
   * 
   * @param request - ListGatewayRouteRequest
   * @returns ListGatewayRouteResponse
   */
  async listGatewayRoute(request: $_model.ListGatewayRouteRequest): Promise<$_model.ListGatewayRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGatewayRouteWithOptions(request, runtime);
  }

  /**
   * Queries a list of routes for which authentication is enabled.
   * 
   * @param request - ListGatewayRouteOnAuthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayRouteOnAuthResponse
   */
  async listGatewayRouteOnAuthWithOptions(request: $_model.ListGatewayRouteOnAuthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGatewayRouteOnAuthResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGatewayRouteOnAuth",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGatewayRouteOnAuthResponse>(await this.callApi(params, req, runtime), new $_model.ListGatewayRouteOnAuthResponse({}));
  }

  /**
   * Queries a list of routes for which authentication is enabled.
   * 
   * @param request - ListGatewayRouteOnAuthRequest
   * @returns ListGatewayRouteOnAuthResponse
   */
  async listGatewayRouteOnAuth(request: $_model.ListGatewayRouteOnAuthRequest): Promise<$_model.ListGatewayRouteOnAuthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGatewayRouteOnAuthWithOptions(request, runtime);
  }

  /**
   * Queries a list of services that are subscribed with a gateway.
   * 
   * @param tmpReq - ListGatewayServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayServiceResponse
   */
  async listGatewayServiceWithOptions(tmpReq: $_model.ListGatewayServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGatewayServiceResponse> {
    tmpReq.validate();
    let request = new $_model.ListGatewayServiceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filterParams)) {
      request.filterParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterParams, "FilterParams", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.descSort)) {
      query["DescSort"] = request.descSort;
    }

    if (!$dara.isNull(request.filterParamsShrink)) {
      query["FilterParams"] = request.filterParamsShrink;
    }

    if (!$dara.isNull(request.orderItem)) {
      query["OrderItem"] = request.orderItem;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGatewayService",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGatewayServiceResponse>(await this.callApi(params, req, runtime), new $_model.ListGatewayServiceResponse({}));
  }

  /**
   * Queries a list of services that are subscribed with a gateway.
   * 
   * @param request - ListGatewayServiceRequest
   * @returns ListGatewayServiceResponse
   */
  async listGatewayService(request: $_model.ListGatewayServiceRequest): Promise<$_model.ListGatewayServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGatewayServiceWithOptions(request, runtime);
  }

  /**
   * Queries the Server Load Balancer (SLB) instances that are associated with a gateway.
   * 
   * @param request - ListGatewaySlbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewaySlbResponse
   */
  async listGatewaySlbWithOptions(request: $_model.ListGatewaySlbRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGatewaySlbResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGatewaySlb",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGatewaySlbResponse>(await this.callApi(params, req, runtime), new $_model.ListGatewaySlbResponse({}));
  }

  /**
   * Queries the Server Load Balancer (SLB) instances that are associated with a gateway.
   * 
   * @param request - ListGatewaySlbRequest
   * @returns ListGatewaySlbResponse
   */
  async listGatewaySlb(request: $_model.ListGatewaySlbRequest): Promise<$_model.ListGatewaySlbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGatewaySlbWithOptions(request, runtime);
  }

  /**
   * Obtains a list of zones where a gateway is available.
   * 
   * @param request - ListGatewayZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayZoneResponse
   */
  async listGatewayZoneWithOptions(request: $_model.ListGatewayZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGatewayZoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGatewayZone",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGatewayZoneResponse>(await this.callApi(params, req, runtime), new $_model.ListGatewayZoneResponse({}));
  }

  /**
   * Obtains a list of zones where a gateway is available.
   * 
   * @param request - ListGatewayZoneRequest
   * @returns ListGatewayZoneResponse
   */
  async listGatewayZone(request: $_model.ListGatewayZoneRequest): Promise<$_model.ListGatewayZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGatewayZoneWithOptions(request, runtime);
  }

  /**
   * Displays the number of nodes that can be deployed for an instance.
   * 
   * @param request - ListInstanceCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceCountResponse
   */
  async listInstanceCountWithOptions(request: $_model.ListInstanceCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.mseVersion)) {
      query["MseVersion"] = request.mseVersion;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceCount",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceCountResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceCountResponse({}));
  }

  /**
   * Displays the number of nodes that can be deployed for an instance.
   * 
   * @param request - ListInstanceCountRequest
   * @returns ListInstanceCountResponse
   */
  async listInstanceCount(request: $_model.ListInstanceCountRequest): Promise<$_model.ListInstanceCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceCountWithOptions(request, runtime);
  }

  /**
   * 查询隔离规则
   * 
   * @param request - ListIsolationRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIsolationRulesResponse
   */
  async listIsolationRulesWithOptions(request: $_model.ListIsolationRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIsolationRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceSearchKey)) {
      query["ResourceSearchKey"] = request.resourceSearchKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIsolationRules",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIsolationRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListIsolationRulesResponse({}));
  }

  /**
   * 查询隔离规则
   * 
   * @param request - ListIsolationRulesRequest
   * @returns ListIsolationRulesResponse
   */
  async listIsolationRules(request: $_model.ListIsolationRulesRequest): Promise<$_model.ListIsolationRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIsolationRulesWithOptions(request, runtime);
  }

  /**
   * Queries listeners based on configuration information.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param tmpReq - ListListenersByConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListListenersByConfigResponse
   */
  async listListenersByConfigWithOptions(tmpReq: $_model.ListListenersByConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListListenersByConfigResponse> {
    tmpReq.validate();
    let request = new $_model.ListListenersByConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.extGrayRules)) {
      request.extGrayRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extGrayRules, "ExtGrayRules", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!$dara.isNull(request.extGrayRulesShrink)) {
      query["ExtGrayRules"] = request.extGrayRulesShrink;
    }

    if (!$dara.isNull(request.group)) {
      query["Group"] = request.group;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListListenersByConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListListenersByConfigResponse>(await this.callApi(params, req, runtime), new $_model.ListListenersByConfigResponse({}));
  }

  /**
   * Queries listeners based on configuration information.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - ListListenersByConfigRequest
   * @returns ListListenersByConfigResponse
   */
  async listListenersByConfig(request: $_model.ListListenersByConfigRequest): Promise<$_model.ListListenersByConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listListenersByConfigWithOptions(request, runtime);
  }

  /**
   * Queries the information about listeners based on IP addresses.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - ListListenersByIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListListenersByIpResponse
   */
  async listListenersByIpWithOptions(request: $_model.ListListenersByIpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListListenersByIpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListListenersByIp",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListListenersByIpResponse>(await this.callApi(params, req, runtime), new $_model.ListListenersByIpResponse({}));
  }

  /**
   * Queries the information about listeners based on IP addresses.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - ListListenersByIpRequest
   * @returns ListListenersByIpResponse
   */
  async listListenersByIp(request: $_model.ListListenersByIpRequest): Promise<$_model.ListListenersByIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listListenersByIpWithOptions(request, runtime);
  }

  /**
   * Queries information about a migration task.
   * 
   * @param request - ListMigrationTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMigrationTaskResponse
   */
  async listMigrationTaskWithOptions(request: $_model.ListMigrationTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMigrationTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.originInstanceName)) {
      query["OriginInstanceName"] = request.originInstanceName;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMigrationTask",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMigrationTaskResponse>(await this.callApi(params, req, runtime), new $_model.ListMigrationTaskResponse({}));
  }

  /**
   * Queries information about a migration task.
   * 
   * @param request - ListMigrationTaskRequest
   * @returns ListMigrationTaskResponse
   */
  async listMigrationTask(request: $_model.ListMigrationTaskRequest): Promise<$_model.ListMigrationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMigrationTaskWithOptions(request, runtime);
  }

  /**
   * Queries Nacos configurations.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - ListNacosConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNacosConfigsResponse
   */
  async listNacosConfigsWithOptions(request: $_model.ListNacosConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNacosConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!$dara.isNull(request.group)) {
      query["Group"] = request.group;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNacosConfigs",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNacosConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListNacosConfigsResponse({}));
  }

  /**
   * Queries Nacos configurations.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - ListNacosConfigsRequest
   * @returns ListNacosConfigsResponse
   */
  async listNacosConfigs(request: $_model.ListNacosConfigsRequest): Promise<$_model.ListNacosConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNacosConfigsWithOptions(request, runtime);
  }

  /**
   * Queries the configuration history of a Microservices Engine (MSE) Nacos instance.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - ListNacosHistoryConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNacosHistoryConfigsResponse
   */
  async listNacosHistoryConfigsWithOptions(request: $_model.ListNacosHistoryConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNacosHistoryConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!$dara.isNull(request.group)) {
      query["Group"] = request.group;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNacosHistoryConfigs",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNacosHistoryConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListNacosHistoryConfigsResponse({}));
  }

  /**
   * Queries the configuration history of a Microservices Engine (MSE) Nacos instance.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - ListNacosHistoryConfigsRequest
   * @returns ListNacosHistoryConfigsResponse
   */
  async listNacosHistoryConfigs(request: $_model.ListNacosHistoryConfigsRequest): Promise<$_model.ListNacosHistoryConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNacosHistoryConfigsWithOptions(request, runtime);
  }

  /**
   * 展示命名空间列表
   * 
   * @param tmpReq - ListNamespacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNamespacesResponse
   */
  async listNamespacesWithOptions(tmpReq: $_model.ListNamespacesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNamespacesResponse> {
    tmpReq.validate();
    let request = new $_model.ListNamespacesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNamespaces",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNamespacesResponse>(await this.callApi(params, req, runtime), new $_model.ListNamespacesResponse({}));
  }

  /**
   * 展示命名空间列表
   * 
   * @param request - ListNamespacesRequest
   * @returns ListNamespacesResponse
   */
  async listNamespaces(request: $_model.ListNamespacesRequest): Promise<$_model.ListNamespacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNamespacesWithOptions(request, runtime);
  }

  /**
   * Obtains the trajectory data of a Nacos registry.
   * 
   * @param request - ListNamingTrackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNamingTrackResponse
   */
  async listNamingTrackWithOptions(request: $_model.ListNamingTrackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNamingTrackResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNamingTrack",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNamingTrackResponse>(await this.callApi(params, req, runtime), new $_model.ListNamingTrackResponse({}));
  }

  /**
   * Obtains the trajectory data of a Nacos registry.
   * 
   * @param request - ListNamingTrackRequest
   * @returns ListNamingTrackResponse
   */
  async listNamingTrack(request: $_model.ListNamingTrackRequest): Promise<$_model.ListNamingTrackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNamingTrackWithOptions(request, runtime);
  }

  /**
   * Obtains a list of gateway certificates.
   * 
   * @param request - ListSSLCertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSSLCertResponse
   */
  async listSSLCertWithOptions(request: $_model.ListSSLCertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSSLCertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSSLCert",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSSLCertResponse>(await this.callApi(params, req, runtime), new $_model.ListSSLCertResponse({}));
  }

  /**
   * Obtains a list of gateway certificates.
   * 
   * @param request - ListSSLCertRequest
   * @returns ListSSLCertResponse
   */
  async listSSLCert(request: $_model.ListSSLCertRequest): Promise<$_model.ListSSLCertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSSLCertWithOptions(request, runtime);
  }

  /**
   * Obtains the information about security groups.
   * 
   * @param request - ListSecurityGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSecurityGroupResponse
   */
  async listSecurityGroupWithOptions(request: $_model.ListSecurityGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSecurityGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSecurityGroup",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSecurityGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListSecurityGroupResponse({}));
  }

  /**
   * Obtains the information about security groups.
   * 
   * @param request - ListSecurityGroupRequest
   * @returns ListSecurityGroupResponse
   */
  async listSecurityGroup(request: $_model.ListSecurityGroupRequest): Promise<$_model.ListSecurityGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSecurityGroupWithOptions(request, runtime);
  }

  /**
   * Queries the security group rules of a gateway.
   * 
   * @param request - ListSecurityGroupRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSecurityGroupRuleResponse
   */
  async listSecurityGroupRuleWithOptions(request: $_model.ListSecurityGroupRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSecurityGroupRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSecurityGroupRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSecurityGroupRuleResponse>(await this.callApi(params, req, runtime), new $_model.ListSecurityGroupRuleResponse({}));
  }

  /**
   * Queries the security group rules of a gateway.
   * 
   * @param request - ListSecurityGroupRuleRequest
   * @returns ListSecurityGroupRuleResponse
   */
  async listSecurityGroupRule(request: $_model.ListSecurityGroupRuleRequest): Promise<$_model.ListSecurityGroupRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSecurityGroupRuleWithOptions(request, runtime);
  }

  /**
   * Obtains the custom behavior of traffic protection.
   * 
   * @param tmpReq - ListSentinelBlockFallbackDefinitionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSentinelBlockFallbackDefinitionsResponse
   */
  async listSentinelBlockFallbackDefinitionsWithOptions(tmpReq: $_model.ListSentinelBlockFallbackDefinitionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSentinelBlockFallbackDefinitionsResponse> {
    tmpReq.validate();
    let request = new $_model.ListSentinelBlockFallbackDefinitionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.classificationSet)) {
      request.classificationSetShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.classificationSet, "ClassificationSet", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.classificationSetShrink)) {
      query["ClassificationSet"] = request.classificationSetShrink;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSentinelBlockFallbackDefinitions",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSentinelBlockFallbackDefinitionsResponse>(await this.callApi(params, req, runtime), new $_model.ListSentinelBlockFallbackDefinitionsResponse({}));
  }

  /**
   * Obtains the custom behavior of traffic protection.
   * 
   * @param request - ListSentinelBlockFallbackDefinitionsRequest
   * @returns ListSentinelBlockFallbackDefinitionsResponse
   */
  async listSentinelBlockFallbackDefinitions(request: $_model.ListSentinelBlockFallbackDefinitionsRequest): Promise<$_model.ListSentinelBlockFallbackDefinitionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSentinelBlockFallbackDefinitionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of associated sources.
   * 
   * @param request - ListServiceSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceSourceResponse
   */
  async listServiceSourceWithOptions(request: $_model.ListServiceSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceSource",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceSourceResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceSourceResponse({}));
  }

  /**
   * Queries a list of associated sources.
   * 
   * @param request - ListServiceSourceRequest
   * @returns ListServiceSourceResponse
   */
  async listServiceSource(request: $_model.ListServiceSourceRequest): Promise<$_model.ListServiceSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceSourceWithOptions(request, runtime);
  }

  /**
   * Queries tagged resources.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * Queries tagged resources.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * 查询热点参数防护规则（HTTP 请求）
   * 
   * @param request - ListWebFlowRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWebFlowRulesResponse
   */
  async listWebFlowRulesWithOptions(request: $_model.ListWebFlowRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWebFlowRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceSearchKey)) {
      query["ResourceSearchKey"] = request.resourceSearchKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWebFlowRules",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWebFlowRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListWebFlowRulesResponse({}));
  }

  /**
   * 查询热点参数防护规则（HTTP 请求）
   * 
   * @param request - ListWebFlowRulesRequest
   * @returns ListWebFlowRulesResponse
   */
  async listWebFlowRules(request: $_model.ListWebFlowRulesRequest): Promise<$_model.ListWebFlowRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWebFlowRulesWithOptions(request, runtime);
  }

  /**
   * Obtains the track data of a ZooKeeper instance.
   * 
   * @param request - ListZkTrackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListZkTrackResponse
   */
  async listZkTrackWithOptions(request: $_model.ListZkTrackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListZkTrackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    if (!$dara.isNull(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListZkTrack",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListZkTrackResponse>(await this.callApi(params, req, runtime), new $_model.ListZkTrackResponse({}));
  }

  /**
   * Obtains the track data of a ZooKeeper instance.
   * 
   * @param request - ListZkTrackRequest
   * @returns ListZkTrackResponse
   */
  async listZkTrack(request: $_model.ListZkTrackRequest): Promise<$_model.ListZkTrackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listZkTrackWithOptions(request, runtime);
  }

  /**
   * Queries the child nodes of a ZooKeeper node.
   * 
   * @param request - ListZnodeChildrenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListZnodeChildrenResponse
   */
  async listZnodeChildrenWithOptions(request: $_model.ListZnodeChildrenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListZnodeChildrenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListZnodeChildren",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListZnodeChildrenResponse>(await this.callApi(params, req, runtime), new $_model.ListZnodeChildrenResponse({}));
  }

  /**
   * Queries the child nodes of a ZooKeeper node.
   * 
   * @param request - ListZnodeChildrenRequest
   * @returns ListZnodeChildrenResponse
   */
  async listZnodeChildren(request: $_model.ListZnodeChildrenRequest): Promise<$_model.ListZnodeChildrenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listZnodeChildrenWithOptions(request, runtime);
  }

  /**
   * Modifies the information about a cluster for which Microservice Governance is enabled.
   * 
   * @param tmpReq - ModifyGovernanceKubernetesClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyGovernanceKubernetesClusterResponse
   */
  async modifyGovernanceKubernetesClusterWithOptions(tmpReq: $_model.ModifyGovernanceKubernetesClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyGovernanceKubernetesClusterResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyGovernanceKubernetesClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.namespaceInfos)) {
      request.namespaceInfosShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.namespaceInfos, "NamespaceInfos", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.namespaceInfosShrink)) {
      body["NamespaceInfos"] = request.namespaceInfosShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyGovernanceKubernetesCluster",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyGovernanceKubernetesClusterResponse>(await this.callApi(params, req, runtime), new $_model.ModifyGovernanceKubernetesClusterResponse({}));
  }

  /**
   * Modifies the information about a cluster for which Microservice Governance is enabled.
   * 
   * @param request - ModifyGovernanceKubernetesClusterRequest
   * @returns ModifyGovernanceKubernetesClusterResponse
   */
  async modifyGovernanceKubernetesCluster(request: $_model.ModifyGovernanceKubernetesClusterRequest): Promise<$_model.ModifyGovernanceKubernetesClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyGovernanceKubernetesClusterWithOptions(request, runtime);
  }

  /**
   * Modifies configurations of the lossless online and offline feature.
   * 
   * @param request - ModifyLosslessRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLosslessRuleResponse
   */
  async modifyLosslessRuleWithOptions(request: $_model.ModifyLosslessRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyLosslessRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.aligned)) {
      query["Aligned"] = request.aligned;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.delayTime)) {
      query["DelayTime"] = request.delayTime;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.funcType)) {
      query["FuncType"] = request.funcType;
    }

    if (!$dara.isNull(request.lossLessDetail)) {
      query["LossLessDetail"] = request.lossLessDetail;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.notice)) {
      query["Notice"] = request.notice;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.related)) {
      query["Related"] = request.related;
    }

    if (!$dara.isNull(request.warmupTime)) {
      query["WarmupTime"] = request.warmupTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyLosslessRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyLosslessRuleResponse>(await this.callApi(params, req, runtime), new $_model.ModifyLosslessRuleResponse({}));
  }

  /**
   * Modifies configurations of the lossless online and offline feature.
   * 
   * @param request - ModifyLosslessRuleRequest
   * @returns ModifyLosslessRuleResponse
   */
  async modifyLosslessRule(request: $_model.ModifyLosslessRuleRequest): Promise<$_model.ModifyLosslessRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyLosslessRuleWithOptions(request, runtime);
  }

  /**
   * Unpublishes a route for a gateway.
   * 
   * @param request - OfflineGatewayRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OfflineGatewayRouteResponse
   */
  async offlineGatewayRouteWithOptions(request: $_model.OfflineGatewayRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OfflineGatewayRouteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.routeId)) {
      query["RouteId"] = request.routeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OfflineGatewayRoute",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OfflineGatewayRouteResponse>(await this.callApi(params, req, runtime), new $_model.OfflineGatewayRouteResponse({}));
  }

  /**
   * Unpublishes a route for a gateway.
   * 
   * @param request - OfflineGatewayRouteRequest
   * @returns OfflineGatewayRouteResponse
   */
  async offlineGatewayRoute(request: $_model.OfflineGatewayRouteRequest): Promise<$_model.OfflineGatewayRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.offlineGatewayRouteWithOptions(request, runtime);
  }

  /**
   * Subscribes to the notification feature if a risk is detected during a health check.
   * 
   * @param request - OrderClusterHealthCheckRiskNoticeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OrderClusterHealthCheckRiskNoticeResponse
   */
  async orderClusterHealthCheckRiskNoticeWithOptions(request: $_model.OrderClusterHealthCheckRiskNoticeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OrderClusterHealthCheckRiskNoticeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mute)) {
      query["Mute"] = request.mute;
    }

    if (!$dara.isNull(request.noticeType)) {
      query["NoticeType"] = request.noticeType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    if (!$dara.isNull(request.riskCode)) {
      query["RiskCode"] = request.riskCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OrderClusterHealthCheckRiskNotice",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OrderClusterHealthCheckRiskNoticeResponse>(await this.callApi(params, req, runtime), new $_model.OrderClusterHealthCheckRiskNoticeResponse({}));
  }

  /**
   * Subscribes to the notification feature if a risk is detected during a health check.
   * 
   * @param request - OrderClusterHealthCheckRiskNoticeRequest
   * @returns OrderClusterHealthCheckRiskNoticeResponse
   */
  async orderClusterHealthCheckRiskNotice(request: $_model.OrderClusterHealthCheckRiskNoticeRequest): Promise<$_model.OrderClusterHealthCheckRiskNoticeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.orderClusterHealthCheckRiskNoticeWithOptions(request, runtime);
  }

  /**
   * Specifies whether to convert all letters of a header into lowercase letters. For requests and responses, HTTP/1.1 headers are not case-sensitive. By default, all letters of headers are converted into lowercase letters.
   * 
   * @param request - PreserveHeaderFormatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreserveHeaderFormatResponse
   */
  async preserveHeaderFormatWithOptions(request: $_model.PreserveHeaderFormatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PreserveHeaderFormatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.preserveHeaderFormat)) {
      query["PreserveHeaderFormat"] = request.preserveHeaderFormat;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PreserveHeaderFormat",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PreserveHeaderFormatResponse>(await this.callApi(params, req, runtime), new $_model.PreserveHeaderFormatResponse({}));
  }

  /**
   * Specifies whether to convert all letters of a header into lowercase letters. For requests and responses, HTTP/1.1 headers are not case-sensitive. By default, all letters of headers are converted into lowercase letters.
   * 
   * @param request - PreserveHeaderFormatRequest
   * @returns PreserveHeaderFormatResponse
   */
  async preserveHeaderFormat(request: $_model.PreserveHeaderFormatRequest): Promise<$_model.PreserveHeaderFormatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.preserveHeaderFormatWithOptions(request, runtime);
  }

  /**
   * Queries all the microservices of a service source.
   * 
   * @param request - PullServicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PullServicesResponse
   */
  async pullServicesWithOptions(request: $_model.PullServicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PullServicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PullServices",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PullServicesResponse>(await this.callApi(params, req, runtime), new $_model.PullServicesResponse({}));
  }

  /**
   * Queries all the microservices of a service source.
   * 
   * @param request - PullServicesRequest
   * @returns PullServicesResponse
   */
  async pullServices(request: $_model.PullServicesRequest): Promise<$_model.PullServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pullServicesWithOptions(request, runtime);
  }

  /**
   * Initiates a task to check risk evaluation for an instance.
   * 
   * @param request - PutClusterHealthCheckTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutClusterHealthCheckTaskResponse
   */
  async putClusterHealthCheckTaskWithOptions(request: $_model.PutClusterHealthCheckTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutClusterHealthCheckTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutClusterHealthCheckTask",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutClusterHealthCheckTaskResponse>(await this.callApi(params, req, runtime), new $_model.PutClusterHealthCheckTaskResponse({}));
  }

  /**
   * Initiates a task to check risk evaluation for an instance.
   * 
   * @param request - PutClusterHealthCheckTaskRequest
   * @returns PutClusterHealthCheckTaskResponse
   */
  async putClusterHealthCheckTask(request: $_model.PutClusterHealthCheckTaskRequest): Promise<$_model.PutClusterHealthCheckTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putClusterHealthCheckTaskWithOptions(request, runtime);
  }

  /**
   * Queries all the lanes in a lane group.
   * 
   * @param request - QueryAllSwimmingLaneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAllSwimmingLaneResponse
   */
  async queryAllSwimmingLaneWithOptions(request: $_model.QueryAllSwimmingLaneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAllSwimmingLaneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAllSwimmingLane",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAllSwimmingLaneResponse>(await this.callApi(params, req, runtime), new $_model.QueryAllSwimmingLaneResponse({}));
  }

  /**
   * Queries all the lanes in a lane group.
   * 
   * @param request - QueryAllSwimmingLaneRequest
   * @returns QueryAllSwimmingLaneResponse
   */
  async queryAllSwimmingLane(request: $_model.QueryAllSwimmingLaneRequest): Promise<$_model.QueryAllSwimmingLaneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAllSwimmingLaneWithOptions(request, runtime);
  }

  /**
   * Queries all lane groups.
   * 
   * @param request - QueryAllSwimmingLaneGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAllSwimmingLaneGroupResponse
   */
  async queryAllSwimmingLaneGroupWithOptions(request: $_model.QueryAllSwimmingLaneGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAllSwimmingLaneGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAllSwimmingLaneGroup",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAllSwimmingLaneGroupResponse>(await this.callApi(params, req, runtime), new $_model.QueryAllSwimmingLaneGroupResponse({}));
  }

  /**
   * Queries all lane groups.
   * 
   * @param request - QueryAllSwimmingLaneGroupRequest
   * @returns QueryAllSwimmingLaneGroupResponse
   */
  async queryAllSwimmingLaneGroup(request: $_model.QueryAllSwimmingLaneGroupRequest): Promise<$_model.QueryAllSwimmingLaneGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAllSwimmingLaneGroupWithOptions(request, runtime);
  }

  /**
   * Queries information about regions.
   * 
   * @param request - QueryBusinessLocationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryBusinessLocationsResponse
   */
  async queryBusinessLocationsWithOptions(request: $_model.QueryBusinessLocationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryBusinessLocationsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryBusinessLocations",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryBusinessLocationsResponse>(await this.callApi(params, req, runtime), new $_model.QueryBusinessLocationsResponse({}));
  }

  /**
   * Queries information about regions.
   * 
   * @param request - QueryBusinessLocationsRequest
   * @returns QueryBusinessLocationsResponse
   */
  async queryBusinessLocations(request: $_model.QueryBusinessLocationsRequest): Promise<$_model.QueryBusinessLocationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryBusinessLocationsWithOptions(request, runtime);
  }

  /**
   * Queries the details of an instance.
   * 
   * @param request - QueryClusterDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryClusterDetailResponse
   */
  async queryClusterDetailWithOptions(request: $_model.QueryClusterDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryClusterDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.aclSwitch)) {
      query["AclSwitch"] = request.aclSwitch;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryClusterDetail",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryClusterDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryClusterDetailResponse({}));
  }

  /**
   * Queries the details of an instance.
   * 
   * @param request - QueryClusterDetailRequest
   * @returns QueryClusterDetailResponse
   */
  async queryClusterDetail(request: $_model.QueryClusterDetailRequest): Promise<$_model.QueryClusterDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryClusterDetailWithOptions(request, runtime);
  }

  /**
   * Queries disk specifications that are supported by an instance.
   * 
   * @param request - QueryClusterDiskSpecificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryClusterDiskSpecificationResponse
   */
  async queryClusterDiskSpecificationWithOptions(request: $_model.QueryClusterDiskSpecificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryClusterDiskSpecificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryClusterDiskSpecification",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryClusterDiskSpecificationResponse>(await this.callApi(params, req, runtime), new $_model.QueryClusterDiskSpecificationResponse({}));
  }

  /**
   * Queries disk specifications that are supported by an instance.
   * 
   * @param request - QueryClusterDiskSpecificationRequest
   * @returns QueryClusterDiskSpecificationResponse
   */
  async queryClusterDiskSpecification(request: $_model.QueryClusterDiskSpecificationRequest): Promise<$_model.QueryClusterDiskSpecificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryClusterDiskSpecificationWithOptions(request, runtime);
  }

  /**
   * Queries the static information of an instance.
   * 
   * @param request - QueryClusterInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryClusterInfoResponse
   */
  async queryClusterInfoWithOptions(request: $_model.QueryClusterInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryClusterInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.aclSwitch)) {
      query["AclSwitch"] = request.aclSwitch;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryClusterInfo",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryClusterInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryClusterInfoResponse({}));
  }

  /**
   * Queries the static information of an instance.
   * 
   * @param request - QueryClusterInfoRequest
   * @returns QueryClusterInfoResponse
   */
  async queryClusterInfo(request: $_model.QueryClusterInfoRequest): Promise<$_model.QueryClusterInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryClusterInfoWithOptions(request, runtime);
  }

  /**
   * Queries the information of supported instance specifications.
   * 
   * @param request - QueryClusterSpecificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryClusterSpecificationResponse
   */
  async queryClusterSpecificationWithOptions(request: $_model.QueryClusterSpecificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryClusterSpecificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.connectType)) {
      query["ConnectType"] = request.connectType;
    }

    if (!$dara.isNull(request.mseVersion)) {
      query["MseVersion"] = request.mseVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryClusterSpecification",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryClusterSpecificationResponse>(await this.callApi(params, req, runtime), new $_model.QueryClusterSpecificationResponse({}));
  }

  /**
   * Queries the information of supported instance specifications.
   * 
   * @param request - QueryClusterSpecificationRequest
   * @returns QueryClusterSpecificationResponse
   */
  async queryClusterSpecification(request: $_model.QueryClusterSpecificationRequest): Promise<$_model.QueryClusterSpecificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryClusterSpecificationWithOptions(request, runtime);
  }

  /**
   * Queries configuration information of an instance.
   * 
   * @param request - QueryConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryConfigResponse
   */
  async queryConfigWithOptions(request: $_model.QueryConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.configType)) {
      query["ConfigType"] = request.configType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.needRunningConf)) {
      query["NeedRunningConf"] = request.needRunningConf;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryConfigResponse>(await this.callApi(params, req, runtime), new $_model.QueryConfigResponse({}));
  }

  /**
   * Queries configuration information of an instance.
   * 
   * @param request - QueryConfigRequest
   * @returns QueryConfigResponse
   */
  async queryConfig(request: $_model.QueryConfigRequest): Promise<$_model.QueryConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryConfigWithOptions(request, runtime);
  }

  /**
   * Queries the regions supported by a gateway.
   * 
   * @param request - QueryGatewayRegionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryGatewayRegionResponse
   */
  async queryGatewayRegionWithOptions(request: $_model.QueryGatewayRegionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryGatewayRegionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryGatewayRegion",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryGatewayRegionResponse>(await this.callApi(params, req, runtime), new $_model.QueryGatewayRegionResponse({}));
  }

  /**
   * Queries the regions supported by a gateway.
   * 
   * @param request - QueryGatewayRegionRequest
   * @returns QueryGatewayRegionResponse
   */
  async queryGatewayRegion(request: $_model.QueryGatewayRegionRequest): Promise<$_model.QueryGatewayRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryGatewayRegionWithOptions(request, runtime);
  }

  /**
   * Queries available gateway types.
   * 
   * @param request - QueryGatewayTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryGatewayTypeResponse
   */
  async queryGatewayTypeWithOptions(request: $_model.QueryGatewayTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryGatewayTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryGatewayType",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryGatewayTypeResponse>(await this.callApi(params, req, runtime), new $_model.QueryGatewayTypeResponse({}));
  }

  /**
   * Queries available gateway types.
   * 
   * @param request - QueryGatewayTypeRequest
   * @returns QueryGatewayTypeResponse
   */
  async queryGatewayType(request: $_model.QueryGatewayTypeRequest): Promise<$_model.QueryGatewayTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryGatewayTypeWithOptions(request, runtime);
  }

  /**
   * Queries the Kubernetes clusters for which Microservices Governance is activated.
   * 
   * @param request - QueryGovernanceKubernetesClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryGovernanceKubernetesClusterResponse
   */
  async queryGovernanceKubernetesClusterWithOptions(request: $_model.QueryGovernanceKubernetesClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryGovernanceKubernetesClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryGovernanceKubernetesCluster",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryGovernanceKubernetesClusterResponse>(await this.callApi(params, req, runtime), new $_model.QueryGovernanceKubernetesClusterResponse({}));
  }

  /**
   * Queries the Kubernetes clusters for which Microservices Governance is activated.
   * 
   * @param request - QueryGovernanceKubernetesClusterRequest
   * @returns QueryGovernanceKubernetesClusterResponse
   */
  async queryGovernanceKubernetesCluster(request: $_model.QueryGovernanceKubernetesClusterRequest): Promise<$_model.QueryGovernanceKubernetesClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryGovernanceKubernetesClusterWithOptions(request, runtime);
  }

  /**
   * Queries the runtime data of a specified cluster.
   * 
   * @param request - QueryInstancesInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInstancesInfoResponse
   */
  async queryInstancesInfoWithOptions(request: $_model.QueryInstancesInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryInstancesInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryInstancesInfo",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryInstancesInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryInstancesInfoResponse({}));
  }

  /**
   * Queries the runtime data of a specified cluster.
   * 
   * @param request - QueryInstancesInfoRequest
   * @returns QueryInstancesInfoResponse
   */
  async queryInstancesInfo(request: $_model.QueryInstancesInfoRequest): Promise<$_model.QueryInstancesInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryInstancesInfoWithOptions(request, runtime);
  }

  /**
   * Queries monitoring information.
   * 
   * @param request - QueryMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMonitorResponse
   */
  async queryMonitorWithOptions(request: $_model.QueryMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.monitorType)) {
      query["MonitorType"] = request.monitorType;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.step)) {
      query["Step"] = request.step;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMonitor",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMonitorResponse>(await this.callApi(params, req, runtime), new $_model.QueryMonitorResponse({}));
  }

  /**
   * Queries monitoring information.
   * 
   * @param request - QueryMonitorRequest
   * @returns QueryMonitorResponse
   */
  async queryMonitor(request: $_model.QueryMonitorRequest): Promise<$_model.QueryMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMonitorWithOptions(request, runtime);
  }

  /**
   * 查询MSE命名空间
   * 
   * @param request - QueryNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryNamespaceResponse
   */
  async queryNamespaceWithOptions(request: $_model.QueryNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryNamespace",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.QueryNamespaceResponse({}));
  }

  /**
   * 查询MSE命名空间
   * 
   * @param request - QueryNamespaceRequest
   * @returns QueryNamespaceResponse
   */
  async queryNamespace(request: $_model.QueryNamespaceRequest): Promise<$_model.QueryNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryNamespaceWithOptions(request, runtime);
  }

  /**
   * Queries the type of a Server Load Balancer (SLB) instance.
   * 
   * @param request - QuerySlbSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySlbSpecResponse
   */
  async querySlbSpecWithOptions(request: $_model.QuerySlbSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySlbSpecResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySlbSpec",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySlbSpecResponse>(await this.callApi(params, req, runtime), new $_model.QuerySlbSpecResponse({}));
  }

  /**
   * Queries the type of a Server Load Balancer (SLB) instance.
   * 
   * @param request - QuerySlbSpecRequest
   * @returns QuerySlbSpecResponse
   */
  async querySlbSpec(request: $_model.QuerySlbSpecRequest): Promise<$_model.QuerySlbSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySlbSpecWithOptions(request, runtime);
  }

  /**
   * Queries the information about a lane based on the lane ID.
   * 
   * @param request - QuerySwimmingLaneByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySwimmingLaneByIdResponse
   */
  async querySwimmingLaneByIdWithOptions(request: $_model.QuerySwimmingLaneByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySwimmingLaneByIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.laneId)) {
      query["LaneId"] = request.laneId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySwimmingLaneById",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySwimmingLaneByIdResponse>(await this.callApi(params, req, runtime), new $_model.QuerySwimmingLaneByIdResponse({}));
  }

  /**
   * Queries the information about a lane based on the lane ID.
   * 
   * @param request - QuerySwimmingLaneByIdRequest
   * @returns QuerySwimmingLaneByIdResponse
   */
  async querySwimmingLaneById(request: $_model.QuerySwimmingLaneByIdRequest): Promise<$_model.QuerySwimmingLaneByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySwimmingLaneByIdWithOptions(request, runtime);
  }

  /**
   * Queries the information about a ZooKeeper node.
   * 
   * @param request - QueryZnodeDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryZnodeDetailResponse
   */
  async queryZnodeDetailWithOptions(request: $_model.QueryZnodeDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryZnodeDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryZnodeDetail",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryZnodeDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryZnodeDetailResponse({}));
  }

  /**
   * Queries the information about a ZooKeeper node.
   * 
   * @param request - QueryZnodeDetailRequest
   * @returns QueryZnodeDetailResponse
   */
  async queryZnodeDetail(request: $_model.QueryZnodeDetailRequest): Promise<$_model.QueryZnodeDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryZnodeDetailWithOptions(request, runtime);
  }

  /**
   * 删除单个应用
   * 
   * @param request - RemoveApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveApplicationResponse
   */
  async removeApplicationWithOptions(request: $_model.RemoveApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveApplication",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveApplicationResponse>(await this.callApi(params, req, runtime), new $_model.RemoveApplicationResponse({}));
  }

  /**
   * 删除单个应用
   * 
   * @param request - RemoveApplicationRequest
   * @returns RemoveApplicationResponse
   */
  async removeApplication(request: $_model.RemoveApplicationRequest): Promise<$_model.RemoveApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeApplicationWithOptions(request, runtime);
  }

  /**
   * @param request - RemoveAuthPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveAuthPolicyResponse
   */
  async removeAuthPolicyWithOptions(request: $_model.RemoveAuthPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveAuthPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveAuthPolicy",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveAuthPolicyResponse>(await this.callApi(params, req, runtime), new $_model.RemoveAuthPolicyResponse({}));
  }

  /**
   * @param request - RemoveAuthPolicyRequest
   * @returns RemoveAuthPolicyResponse
   */
  async removeAuthPolicy(request: $_model.RemoveAuthPolicyRequest): Promise<$_model.RemoveAuthPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeAuthPolicyWithOptions(request, runtime);
  }

  /**
   * Restarts a registry.
   * 
   * @param request - RestartClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartClusterResponse
   */
  async restartClusterWithOptions(request: $_model.RestartClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.podNameList)) {
      query["PodNameList"] = request.podNameList;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartCluster",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartClusterResponse>(await this.callApi(params, req, runtime), new $_model.RestartClusterResponse({}));
  }

  /**
   * Restarts a registry.
   * 
   * @param request - RestartClusterRequest
   * @returns RestartClusterResponse
   */
  async restartCluster(request: $_model.RestartClusterRequest): Promise<$_model.RestartClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartClusterWithOptions(request, runtime);
  }

  /**
   * Retries a cluster.
   * 
   * @param request - RetryClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryClusterResponse
   */
  async retryClusterWithOptions(request: $_model.RetryClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RetryClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryCluster",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetryClusterResponse>(await this.callApi(params, req, runtime), new $_model.RetryClusterResponse({}));
  }

  /**
   * Retries a cluster.
   * 
   * @param request - RetryClusterRequest
   * @returns RetryClusterResponse
   */
  async retryCluster(request: $_model.RetryClusterRequest): Promise<$_model.RetryClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.retryClusterWithOptions(request, runtime);
  }

  /**
   * Queries an idle Server Load Balancer (SLB) instance that is associated with a gateway.
   * 
   * @param request - SelectGatewaySlbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SelectGatewaySlbResponse
   */
  async selectGatewaySlbWithOptions(request: $_model.SelectGatewaySlbRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SelectGatewaySlbResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SelectGatewaySlb",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SelectGatewaySlbResponse>(await this.callApi(params, req, runtime), new $_model.SelectGatewaySlbResponse({}));
  }

  /**
   * Queries an idle Server Load Balancer (SLB) instance that is associated with a gateway.
   * 
   * @param request - SelectGatewaySlbRequest
   * @returns SelectGatewaySlbResponse
   */
  async selectGatewaySlb(request: $_model.SelectGatewaySlbRequest): Promise<$_model.SelectGatewaySlbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.selectGatewaySlbWithOptions(request, runtime);
  }

  /**
   * Tags a specified resource.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * Tags a specified resource.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Untags resources.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
  }

  /**
   * Untags resources.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies an IP address whitelist.
   * 
   * @param request - UpdateAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAclResponse
   */
  async updateAclWithOptions(request: $_model.UpdateAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.aclEntryList)) {
      query["AclEntryList"] = request.aclEntryList;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAcl",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAclResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAclResponse({}));
  }

  /**
   * Modifies an IP address whitelist.
   * 
   * @param request - UpdateAclRequest
   * @returns UpdateAclResponse
   */
  async updateAcl(request: $_model.UpdateAclRequest): Promise<$_model.UpdateAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAclWithOptions(request, runtime);
  }

  /**
   * Updates a service authentication rule.
   * 
   * @param request - UpdateAuthPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAuthPolicyResponse
   */
  async updateAuthPolicyWithOptions(request: $_model.UpdateAuthPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAuthPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.authRule)) {
      query["AuthRule"] = request.authRule;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.k8sNamespace)) {
      query["K8sNamespace"] = request.k8sNamespace;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAuthPolicy",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAuthPolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAuthPolicyResponse({}));
  }

  /**
   * Updates a service authentication rule.
   * 
   * @param request - UpdateAuthPolicyRequest
   * @returns UpdateAuthPolicyResponse
   */
  async updateAuthPolicy(request: $_model.UpdateAuthPolicyRequest): Promise<$_model.UpdateAuthPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAuthPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the blacklist or whitelist of a gateway.
   * 
   * @param request - UpdateBlackWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBlackWhiteListResponse
   */
  async updateBlackWhiteListWithOptions(request: $_model.UpdateBlackWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBlackWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.isWhite)) {
      query["IsWhite"] = request.isWhite;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.note)) {
      query["Note"] = request.note;
    }

    if (!$dara.isNull(request.resourceIdJsonList)) {
      query["ResourceIdJsonList"] = request.resourceIdJsonList;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBlackWhiteList",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBlackWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBlackWhiteListResponse({}));
  }

  /**
   * Modifies the blacklist or whitelist of a gateway.
   * 
   * @param request - UpdateBlackWhiteListRequest
   * @returns UpdateBlackWhiteListResponse
   */
  async updateBlackWhiteList(request: $_model.UpdateBlackWhiteListRequest): Promise<$_model.UpdateBlackWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateBlackWhiteListWithOptions(request, runtime);
  }

  /**
   * Updates a circuit breaking rule.
   * 
   * @param request - UpdateCircuitBreakerRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCircuitBreakerRuleResponse
   */
  async updateCircuitBreakerRuleWithOptions(request: $_model.UpdateCircuitBreakerRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCircuitBreakerRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.halfOpenBaseAmountPerStep)) {
      query["HalfOpenBaseAmountPerStep"] = request.halfOpenBaseAmountPerStep;
    }

    if (!$dara.isNull(request.halfOpenRecoveryStepNum)) {
      query["HalfOpenRecoveryStepNum"] = request.halfOpenRecoveryStepNum;
    }

    if (!$dara.isNull(request.maxAllowedRtMs)) {
      query["MaxAllowedRtMs"] = request.maxAllowedRtMs;
    }

    if (!$dara.isNull(request.minRequestAmount)) {
      query["MinRequestAmount"] = request.minRequestAmount;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.retryTimeoutMs)) {
      query["RetryTimeoutMs"] = request.retryTimeoutMs;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.statIntervalMs)) {
      query["StatIntervalMs"] = request.statIntervalMs;
    }

    if (!$dara.isNull(request.strategy)) {
      query["Strategy"] = request.strategy;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCircuitBreakerRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCircuitBreakerRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCircuitBreakerRuleResponse({}));
  }

  /**
   * Updates a circuit breaking rule.
   * 
   * @param request - UpdateCircuitBreakerRuleRequest
   * @returns UpdateCircuitBreakerRuleResponse
   */
  async updateCircuitBreakerRule(request: $_model.UpdateCircuitBreakerRuleRequest): Promise<$_model.UpdateCircuitBreakerRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCircuitBreakerRuleWithOptions(request, runtime);
  }

  /**
   * Modifies the information about an instance.
   * 
   * @param request - UpdateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateClusterResponse
   */
  async updateClusterWithOptions(request: $_model.UpdateClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterAliasName)) {
      query["ClusterAliasName"] = request.clusterAliasName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maintenanceEndTime)) {
      query["MaintenanceEndTime"] = request.maintenanceEndTime;
    }

    if (!$dara.isNull(request.maintenanceStartTime)) {
      query["MaintenanceStartTime"] = request.maintenanceStartTime;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCluster",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateClusterResponse>(await this.callApi(params, req, runtime), new $_model.UpdateClusterResponse({}));
  }

  /**
   * Modifies the information about an instance.
   * 
   * @param request - UpdateClusterRequest
   * @returns UpdateClusterResponse
   */
  async updateCluster(request: $_model.UpdateClusterRequest): Promise<$_model.UpdateClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateClusterWithOptions(request, runtime);
  }

  /**
   * Updates the number or specifications of nodes in a pay-as-you-go Microservices Engine (MSE) instance.
   * 
   * @remarks
   * You can call this operation to update the number or specifications of nodes in a pay-as-you-go MSE instance. You are charged when you add nodes or upgrade node specifications. For more information, see [Pricing] (`~~1806469~~`).
   * 
   * @param request - UpdateClusterSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateClusterSpecResponse
   */
  async updateClusterSpecWithOptions(request: $_model.UpdateClusterSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateClusterSpecResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterSpecification)) {
      query["ClusterSpecification"] = request.clusterSpecification;
    }

    if (!$dara.isNull(request.instanceCount)) {
      query["InstanceCount"] = request.instanceCount;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mseVersion)) {
      query["MseVersion"] = request.mseVersion;
    }

    if (!$dara.isNull(request.pubNetworkFlow)) {
      query["PubNetworkFlow"] = request.pubNetworkFlow;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateClusterSpec",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateClusterSpecResponse>(await this.callApi(params, req, runtime), new $_model.UpdateClusterSpecResponse({}));
  }

  /**
   * Updates the number or specifications of nodes in a pay-as-you-go Microservices Engine (MSE) instance.
   * 
   * @remarks
   * You can call this operation to update the number or specifications of nodes in a pay-as-you-go MSE instance. You are charged when you add nodes or upgrade node specifications. For more information, see [Pricing] (`~~1806469~~`).
   * 
   * @param request - UpdateClusterSpecRequest
   * @returns UpdateClusterSpecResponse
   */
  async updateClusterSpec(request: $_model.UpdateClusterSpecRequest): Promise<$_model.UpdateClusterSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateClusterSpecWithOptions(request, runtime);
  }

  /**
   * Updates the configurations of an instance.
   * 
   * @param request - UpdateConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConfigResponse
   */
  async updateConfigWithOptions(request: $_model.UpdateConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.authEnabled)) {
      query["AuthEnabled"] = request.authEnabled;
    }

    if (!$dara.isNull(request.autopurgePurgeInterval)) {
      query["AutopurgePurgeInterval"] = request.autopurgePurgeInterval;
    }

    if (!$dara.isNull(request.autopurgeSnapRetainCount)) {
      query["AutopurgeSnapRetainCount"] = request.autopurgeSnapRetainCount;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.configAuthEnabled)) {
      query["ConfigAuthEnabled"] = request.configAuthEnabled;
    }

    if (!$dara.isNull(request.configSecretEnabled)) {
      query["ConfigSecretEnabled"] = request.configSecretEnabled;
    }

    if (!$dara.isNull(request.configType)) {
      query["ConfigType"] = request.configType;
    }

    if (!$dara.isNull(request.consoleUIEnabled)) {
      query["ConsoleUIEnabled"] = request.consoleUIEnabled;
    }

    if (!$dara.isNull(request.enable4lw)) {
      query["Enable4lw"] = request.enable4lw;
    }

    if (!$dara.isNull(request.eurekaSupported)) {
      query["EurekaSupported"] = request.eurekaSupported;
    }

    if (!$dara.isNull(request.extendedTypesEnable)) {
      query["ExtendedTypesEnable"] = request.extendedTypesEnable;
    }

    if (!$dara.isNull(request.initLimit)) {
      query["InitLimit"] = request.initLimit;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.juteMaxbuffer)) {
      query["JuteMaxbuffer"] = request.juteMaxbuffer;
    }

    if (!$dara.isNull(request.MCPEnabled)) {
      query["MCPEnabled"] = request.MCPEnabled;
    }

    if (!$dara.isNull(request.maxClientCnxns)) {
      query["MaxClientCnxns"] = request.maxClientCnxns;
    }

    if (!$dara.isNull(request.maxSessionTimeout)) {
      query["MaxSessionTimeout"] = request.maxSessionTimeout;
    }

    if (!$dara.isNull(request.minSessionTimeout)) {
      query["MinSessionTimeout"] = request.minSessionTimeout;
    }

    if (!$dara.isNull(request.namingAuthEnabled)) {
      query["NamingAuthEnabled"] = request.namingAuthEnabled;
    }

    if (!$dara.isNull(request.passWord)) {
      query["PassWord"] = request.passWord;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    if (!$dara.isNull(request.snapshotCount)) {
      query["SnapshotCount"] = request.snapshotCount;
    }

    if (!$dara.isNull(request.syncLimit)) {
      query["SyncLimit"] = request.syncLimit;
    }

    if (!$dara.isNull(request.TLSEnabled)) {
      query["TLSEnabled"] = request.TLSEnabled;
    }

    if (!$dara.isNull(request.tickTime)) {
      query["TickTime"] = request.tickTime;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.openSuperAcl)) {
      body["OpenSuperAcl"] = request.openSuperAcl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConfigResponse({}));
  }

  /**
   * Updates the configurations of an instance.
   * 
   * @param request - UpdateConfigRequest
   * @returns UpdateConfigResponse
   */
  async updateConfig(request: $_model.UpdateConfigRequest): Promise<$_model.UpdateConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateConfigWithOptions(request, runtime);
  }

  /**
   * Updates a namespace for the Nacos engine.
   * 
   * @param request - UpdateEngineNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEngineNamespaceResponse
   */
  async updateEngineNamespaceWithOptions(request: $_model.UpdateEngineNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEngineNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.desc)) {
      query["Desc"] = request.desc;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.serviceCount)) {
      query["ServiceCount"] = request.serviceCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEngineNamespace",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEngineNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEngineNamespaceResponse({}));
  }

  /**
   * Updates a namespace for the Nacos engine.
   * 
   * @param request - UpdateEngineNamespaceRequest
   * @returns UpdateEngineNamespaceResponse
   */
  async updateEngineNamespace(request: $_model.UpdateEngineNamespaceRequest): Promise<$_model.UpdateEngineNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEngineNamespaceWithOptions(request, runtime);
  }

  /**
   * Updates a throttling rule.
   * 
   * @param request - UpdateFlowRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFlowRuleResponse
   */
  async updateFlowRuleWithOptions(request: $_model.UpdateFlowRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFlowRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.controlBehavior)) {
      query["ControlBehavior"] = request.controlBehavior;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.limitApp)) {
      query["LimitApp"] = request.limitApp;
    }

    if (!$dara.isNull(request.maxQueueingTimeMs)) {
      query["MaxQueueingTimeMs"] = request.maxQueueingTimeMs;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFlowRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFlowRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFlowRuleResponse({}));
  }

  /**
   * Updates a throttling rule.
   * 
   * @param request - UpdateFlowRuleRequest
   * @returns UpdateFlowRuleResponse
   */
  async updateFlowRule(request: $_model.UpdateFlowRuleRequest): Promise<$_model.UpdateFlowRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFlowRuleWithOptions(request, runtime);
  }

  /**
   * Updates the consumer on which a gateway performs authentication operations.
   * 
   * @param request - UpdateGatewayAuthConsumerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayAuthConsumerResponse
   */
  async updateGatewayAuthConsumerWithOptions(request: $_model.UpdateGatewayAuthConsumerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayAuthConsumerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.encodeType)) {
      query["EncodeType"] = request.encodeType;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.jwks)) {
      query["Jwks"] = request.jwks;
    }

    if (!$dara.isNull(request.keyName)) {
      query["KeyName"] = request.keyName;
    }

    if (!$dara.isNull(request.keyValue)) {
      query["KeyValue"] = request.keyValue;
    }

    if (!$dara.isNull(request.tokenName)) {
      query["TokenName"] = request.tokenName;
    }

    if (!$dara.isNull(request.tokenPass)) {
      query["TokenPass"] = request.tokenPass;
    }

    if (!$dara.isNull(request.tokenPosition)) {
      query["TokenPosition"] = request.tokenPosition;
    }

    if (!$dara.isNull(request.tokenPrefix)) {
      query["TokenPrefix"] = request.tokenPrefix;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayAuthConsumer",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayAuthConsumerResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayAuthConsumerResponse({}));
  }

  /**
   * Updates the consumer on which a gateway performs authentication operations.
   * 
   * @param request - UpdateGatewayAuthConsumerRequest
   * @returns UpdateGatewayAuthConsumerResponse
   */
  async updateGatewayAuthConsumer(request: $_model.UpdateGatewayAuthConsumerRequest): Promise<$_model.UpdateGatewayAuthConsumerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGatewayAuthConsumerWithOptions(request, runtime);
  }

  /**
   * Updates a list of resources on which permissions are granted to a gateway authentication consumer.
   * 
   * @param tmpReq - UpdateGatewayAuthConsumerResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayAuthConsumerResourceResponse
   */
  async updateGatewayAuthConsumerResourceWithOptions(tmpReq: $_model.UpdateGatewayAuthConsumerResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayAuthConsumerResourceResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateGatewayAuthConsumerResourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceList)) {
      request.resourceListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceList, "ResourceList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.consumerId)) {
      query["ConsumerId"] = request.consumerId;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.resourceListShrink)) {
      query["ResourceList"] = request.resourceListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayAuthConsumerResource",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayAuthConsumerResourceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayAuthConsumerResourceResponse({}));
  }

  /**
   * Updates a list of resources on which permissions are granted to a gateway authentication consumer.
   * 
   * @param request - UpdateGatewayAuthConsumerResourceRequest
   * @returns UpdateGatewayAuthConsumerResourceResponse
   */
  async updateGatewayAuthConsumerResource(request: $_model.UpdateGatewayAuthConsumerResourceRequest): Promise<$_model.UpdateGatewayAuthConsumerResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGatewayAuthConsumerResourceWithOptions(request, runtime);
  }

  /**
   * Updates the resource authorization status for the consumer on which a gateway performs authentication operations.
   * 
   * @param request - UpdateGatewayAuthConsumerResourceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayAuthConsumerResourceStatusResponse
   */
  async updateGatewayAuthConsumerResourceStatusWithOptions(request: $_model.UpdateGatewayAuthConsumerResourceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayAuthConsumerResourceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.consumerId)) {
      query["ConsumerId"] = request.consumerId;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.idList)) {
      query["IdList"] = request.idList;
    }

    if (!$dara.isNull(request.resourceStatus)) {
      query["ResourceStatus"] = request.resourceStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayAuthConsumerResourceStatus",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayAuthConsumerResourceStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayAuthConsumerResourceStatusResponse({}));
  }

  /**
   * Updates the resource authorization status for the consumer on which a gateway performs authentication operations.
   * 
   * @param request - UpdateGatewayAuthConsumerResourceStatusRequest
   * @returns UpdateGatewayAuthConsumerResourceStatusResponse
   */
  async updateGatewayAuthConsumerResourceStatus(request: $_model.UpdateGatewayAuthConsumerResourceStatusRequest): Promise<$_model.UpdateGatewayAuthConsumerResourceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGatewayAuthConsumerResourceStatusWithOptions(request, runtime);
  }

  /**
   * Updates the status of the consumer on which a gateway performs authentication operations.
   * 
   * @param request - UpdateGatewayAuthConsumerStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayAuthConsumerStatusResponse
   */
  async updateGatewayAuthConsumerStatusWithOptions(request: $_model.UpdateGatewayAuthConsumerStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayAuthConsumerStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.consumerStatus)) {
      query["ConsumerStatus"] = request.consumerStatus;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayAuthConsumerStatus",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayAuthConsumerStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayAuthConsumerStatusResponse({}));
  }

  /**
   * Updates the status of the consumer on which a gateway performs authentication operations.
   * 
   * @param request - UpdateGatewayAuthConsumerStatusRequest
   * @returns UpdateGatewayAuthConsumerStatusResponse
   */
  async updateGatewayAuthConsumerStatus(request: $_model.UpdateGatewayAuthConsumerStatusRequest): Promise<$_model.UpdateGatewayAuthConsumerStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGatewayAuthConsumerStatusWithOptions(request, runtime);
  }

  /**
   * 更新网关路由熔断规则
   * 
   * @param request - UpdateGatewayCircuitBreakerRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayCircuitBreakerRuleResponse
   */
  async updateGatewayCircuitBreakerRuleWithOptions(request: $_model.UpdateGatewayCircuitBreakerRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayCircuitBreakerRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.behaviorType)) {
      query["BehaviorType"] = request.behaviorType;
    }

    if (!$dara.isNull(request.bodyEncoding)) {
      query["BodyEncoding"] = request.bodyEncoding;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.maxAllowedMs)) {
      query["MaxAllowedMs"] = request.maxAllowedMs;
    }

    if (!$dara.isNull(request.minRequestAmount)) {
      query["MinRequestAmount"] = request.minRequestAmount;
    }

    if (!$dara.isNull(request.recoveryTimeoutSec)) {
      query["RecoveryTimeoutSec"] = request.recoveryTimeoutSec;
    }

    if (!$dara.isNull(request.responseContentBody)) {
      query["ResponseContentBody"] = request.responseContentBody;
    }

    if (!$dara.isNull(request.responseRedirectUrl)) {
      query["ResponseRedirectUrl"] = request.responseRedirectUrl;
    }

    if (!$dara.isNull(request.responseStatusCode)) {
      query["ResponseStatusCode"] = request.responseStatusCode;
    }

    if (!$dara.isNull(request.routeId)) {
      query["RouteId"] = request.routeId;
    }

    if (!$dara.isNull(request.routeName)) {
      query["RouteName"] = request.routeName;
    }

    if (!$dara.isNull(request.statDurationSec)) {
      query["StatDurationSec"] = request.statDurationSec;
    }

    if (!$dara.isNull(request.strategy)) {
      query["Strategy"] = request.strategy;
    }

    if (!$dara.isNull(request.triggerRatio)) {
      query["TriggerRatio"] = request.triggerRatio;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayCircuitBreakerRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayCircuitBreakerRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayCircuitBreakerRuleResponse({}));
  }

  /**
   * 更新网关路由熔断规则
   * 
   * @param request - UpdateGatewayCircuitBreakerRuleRequest
   * @returns UpdateGatewayCircuitBreakerRuleResponse
   */
  async updateGatewayCircuitBreakerRule(request: $_model.UpdateGatewayCircuitBreakerRuleRequest): Promise<$_model.UpdateGatewayCircuitBreakerRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGatewayCircuitBreakerRuleWithOptions(request, runtime);
  }

  /**
   * 更新网关配置
   * 
   * @param request - UpdateGatewayConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayConfigResponse
   */
  async updateGatewayConfigWithOptions(request: $_model.UpdateGatewayConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.configName)) {
      query["ConfigName"] = request.configName;
    }

    if (!$dara.isNull(request.configValue)) {
      query["ConfigValue"] = request.configValue;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayConfigResponse({}));
  }

  /**
   * 更新网关配置
   * 
   * @param request - UpdateGatewayConfigRequest
   * @returns UpdateGatewayConfigResponse
   */
  async updateGatewayConfig(request: $_model.UpdateGatewayConfigRequest): Promise<$_model.UpdateGatewayConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGatewayConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the information about the domain name associated with a gateway.
   * 
   * @param request - UpdateGatewayDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayDomainResponse
   */
  async updateGatewayDomainWithOptions(request: $_model.UpdateGatewayDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.http2)) {
      query["Http2"] = request.http2;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.mustHttps)) {
      query["MustHttps"] = request.mustHttps;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.tlsMax)) {
      query["TlsMax"] = request.tlsMax;
    }

    if (!$dara.isNull(request.tlsMin)) {
      query["TlsMin"] = request.tlsMin;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayDomain",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayDomainResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayDomainResponse({}));
  }

  /**
   * Modifies the information about the domain name associated with a gateway.
   * 
   * @param request - UpdateGatewayDomainRequest
   * @returns UpdateGatewayDomainResponse
   */
  async updateGatewayDomain(request: $_model.UpdateGatewayDomainRequest): Promise<$_model.UpdateGatewayDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGatewayDomainWithOptions(request, runtime);
  }

  /**
   * 更新网关路由流控规则
   * 
   * @param request - UpdateGatewayFlowRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayFlowRuleResponse
   */
  async updateGatewayFlowRuleWithOptions(request: $_model.UpdateGatewayFlowRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayFlowRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.behaviorType)) {
      query["BehaviorType"] = request.behaviorType;
    }

    if (!$dara.isNull(request.bodyEncoding)) {
      query["BodyEncoding"] = request.bodyEncoding;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.responseContentBody)) {
      query["ResponseContentBody"] = request.responseContentBody;
    }

    if (!$dara.isNull(request.responseRedirectUrl)) {
      query["ResponseRedirectUrl"] = request.responseRedirectUrl;
    }

    if (!$dara.isNull(request.responseStatusCode)) {
      query["ResponseStatusCode"] = request.responseStatusCode;
    }

    if (!$dara.isNull(request.routeId)) {
      query["RouteId"] = request.routeId;
    }

    if (!$dara.isNull(request.routeName)) {
      query["RouteName"] = request.routeName;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayFlowRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayFlowRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayFlowRuleResponse({}));
  }

  /**
   * 更新网关路由流控规则
   * 
   * @param request - UpdateGatewayFlowRuleRequest
   * @returns UpdateGatewayFlowRuleResponse
   */
  async updateGatewayFlowRule(request: $_model.UpdateGatewayFlowRuleRequest): Promise<$_model.UpdateGatewayFlowRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGatewayFlowRuleWithOptions(request, runtime);
  }

  /**
   * 更新网关路由隔离规则
   * 
   * @param request - UpdateGatewayIsolationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayIsolationRuleResponse
   */
  async updateGatewayIsolationRuleWithOptions(request: $_model.UpdateGatewayIsolationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayIsolationRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.behaviorType)) {
      query["BehaviorType"] = request.behaviorType;
    }

    if (!$dara.isNull(request.bodyEncoding)) {
      query["BodyEncoding"] = request.bodyEncoding;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.maxConcurrency)) {
      query["MaxConcurrency"] = request.maxConcurrency;
    }

    if (!$dara.isNull(request.responseContentBody)) {
      query["ResponseContentBody"] = request.responseContentBody;
    }

    if (!$dara.isNull(request.responseRedirectUrl)) {
      query["ResponseRedirectUrl"] = request.responseRedirectUrl;
    }

    if (!$dara.isNull(request.responseStatusCode)) {
      query["ResponseStatusCode"] = request.responseStatusCode;
    }

    if (!$dara.isNull(request.routeId)) {
      query["RouteId"] = request.routeId;
    }

    if (!$dara.isNull(request.routeName)) {
      query["RouteName"] = request.routeName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayIsolationRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayIsolationRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayIsolationRuleResponse({}));
  }

  /**
   * 更新网关路由隔离规则
   * 
   * @param request - UpdateGatewayIsolationRuleRequest
   * @returns UpdateGatewayIsolationRuleResponse
   */
  async updateGatewayIsolationRule(request: $_model.UpdateGatewayIsolationRuleRequest): Promise<$_model.UpdateGatewayIsolationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGatewayIsolationRuleWithOptions(request, runtime);
  }

  /**
   * Renames a gateway.
   * 
   * @param request - UpdateGatewayNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayNameResponse
   */
  async updateGatewayNameWithOptions(request: $_model.UpdateGatewayNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayName",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayNameResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayNameResponse({}));
  }

  /**
   * Renames a gateway.
   * 
   * @param request - UpdateGatewayNameRequest
   * @returns UpdateGatewayNameResponse
   */
  async updateGatewayName(request: $_model.UpdateGatewayNameRequest): Promise<$_model.UpdateGatewayNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGatewayNameWithOptions(request, runtime);
  }

  /**
   * Updates the configurations of a gateway.
   * 
   * @param tmpReq - UpdateGatewayOptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayOptionResponse
   */
  async updateGatewayOptionWithOptions(tmpReq: $_model.UpdateGatewayOptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayOptionResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateGatewayOptionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.gatewayOption)) {
      request.gatewayOptionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.gatewayOption, "GatewayOption", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayOptionShrink)) {
      query["GatewayOption"] = request.gatewayOptionShrink;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayOption",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayOptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayOptionResponse({}));
  }

  /**
   * Updates the configurations of a gateway.
   * 
   * @param request - UpdateGatewayOptionRequest
   * @returns UpdateGatewayOptionResponse
   */
  async updateGatewayOption(request: $_model.UpdateGatewayOptionRequest): Promise<$_model.UpdateGatewayOptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGatewayOptionWithOptions(request, runtime);
  }

  /**
   * Updates a route for a gateway.
   * 
   * @param tmpReq - UpdateGatewayRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayRouteResponse
   */
  async updateGatewayRouteWithOptions(tmpReq: $_model.UpdateGatewayRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayRouteResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateGatewayRouteShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.directResponseJSON)) {
      request.directResponseJSONShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.directResponseJSON, "DirectResponseJSON", "json");
    }

    if (!$dara.isNull(tmpReq.fallbackServices)) {
      request.fallbackServicesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fallbackServices, "FallbackServices", "json");
    }

    if (!$dara.isNull(tmpReq.predicates)) {
      request.predicatesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.predicates, "Predicates", "json");
    }

    if (!$dara.isNull(tmpReq.redirectJSON)) {
      request.redirectJSONShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.redirectJSON, "RedirectJSON", "json");
    }

    if (!$dara.isNull(tmpReq.services)) {
      request.servicesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.services, "Services", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!$dara.isNull(request.directResponseJSONShrink)) {
      query["DirectResponseJSON"] = request.directResponseJSONShrink;
    }

    if (!$dara.isNull(request.domainIdListJSON)) {
      query["DomainIdListJSON"] = request.domainIdListJSON;
    }

    if (!$dara.isNull(request.enableWaf)) {
      query["EnableWaf"] = request.enableWaf;
    }

    if (!$dara.isNull(request.fallback)) {
      query["Fallback"] = request.fallback;
    }

    if (!$dara.isNull(request.fallbackServicesShrink)) {
      query["FallbackServices"] = request.fallbackServicesShrink;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.predicatesShrink)) {
      query["Predicates"] = request.predicatesShrink;
    }

    if (!$dara.isNull(request.redirectJSONShrink)) {
      query["RedirectJSON"] = request.redirectJSONShrink;
    }

    if (!$dara.isNull(request.routeOrder)) {
      query["RouteOrder"] = request.routeOrder;
    }

    if (!$dara.isNull(request.servicesShrink)) {
      query["Services"] = request.servicesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayRoute",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayRouteResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayRouteResponse({}));
  }

  /**
   * Updates a route for a gateway.
   * 
   * @param request - UpdateGatewayRouteRequest
   * @returns UpdateGatewayRouteResponse
   */
  async updateGatewayRoute(request: $_model.UpdateGatewayRouteRequest): Promise<$_model.UpdateGatewayRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGatewayRouteWithOptions(request, runtime);
  }

  /**
   * Updates the authentication configurations of a route.
   * 
   * @param tmpReq - UpdateGatewayRouteAuthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayRouteAuthResponse
   */
  async updateGatewayRouteAuthWithOptions(tmpReq: $_model.UpdateGatewayRouteAuthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayRouteAuthResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateGatewayRouteAuthShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.authJSON)) {
      request.authJSONShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.authJSON, "AuthJSON", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.authJSONShrink)) {
      query["AuthJSON"] = request.authJSONShrink;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayRouteAuth",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayRouteAuthResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayRouteAuthResponse({}));
  }

  /**
   * Updates the authentication configurations of a route.
   * 
   * @param request - UpdateGatewayRouteAuthRequest
   * @returns UpdateGatewayRouteAuthResponse
   */
  async updateGatewayRouteAuth(request: $_model.UpdateGatewayRouteAuthRequest): Promise<$_model.UpdateGatewayRouteAuthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGatewayRouteAuthWithOptions(request, runtime);
  }

  /**
   * Modifies the cross-origin resource sharing (CORS) policy of a route.
   * 
   * @param tmpReq - UpdateGatewayRouteCORSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayRouteCORSResponse
   */
  async updateGatewayRouteCORSWithOptions(tmpReq: $_model.UpdateGatewayRouteCORSRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayRouteCORSResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateGatewayRouteCORSShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.corsJSON)) {
      request.corsJSONShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.corsJSON, "CorsJSON", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.corsJSONShrink)) {
      query["CorsJSON"] = request.corsJSONShrink;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayRouteCORS",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayRouteCORSResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayRouteCORSResponse({}));
  }

  /**
   * Modifies the cross-origin resource sharing (CORS) policy of a route.
   * 
   * @param request - UpdateGatewayRouteCORSRequest
   * @returns UpdateGatewayRouteCORSResponse
   */
  async updateGatewayRouteCORS(request: $_model.UpdateGatewayRouteCORSRequest): Promise<$_model.UpdateGatewayRouteCORSResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGatewayRouteCORSWithOptions(request, runtime);
  }

  /**
   * Updates the rewrite policy of a route for a gateway.
   * 
   * @param request - UpdateGatewayRouteHTTPRewriteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayRouteHTTPRewriteResponse
   */
  async updateGatewayRouteHTTPRewriteWithOptions(request: $_model.UpdateGatewayRouteHTTPRewriteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayRouteHTTPRewriteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.httpRewriteJSON)) {
      query["HttpRewriteJSON"] = request.httpRewriteJSON;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayRouteHTTPRewrite",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayRouteHTTPRewriteResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayRouteHTTPRewriteResponse({}));
  }

  /**
   * Updates the rewrite policy of a route for a gateway.
   * 
   * @param request - UpdateGatewayRouteHTTPRewriteRequest
   * @returns UpdateGatewayRouteHTTPRewriteResponse
   */
  async updateGatewayRouteHTTPRewrite(request: $_model.UpdateGatewayRouteHTTPRewriteRequest): Promise<$_model.UpdateGatewayRouteHTTPRewriteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGatewayRouteHTTPRewriteWithOptions(request, runtime);
  }

  /**
   * Modifies the header configuration policy of a route.
   * 
   * @param request - UpdateGatewayRouteHeaderOpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayRouteHeaderOpResponse
   */
  async updateGatewayRouteHeaderOpWithOptions(request: $_model.UpdateGatewayRouteHeaderOpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayRouteHeaderOpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.headerOpJSON)) {
      query["HeaderOpJSON"] = request.headerOpJSON;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayRouteHeaderOp",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayRouteHeaderOpResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayRouteHeaderOpResponse({}));
  }

  /**
   * Modifies the header configuration policy of a route.
   * 
   * @param request - UpdateGatewayRouteHeaderOpRequest
   * @returns UpdateGatewayRouteHeaderOpResponse
   */
  async updateGatewayRouteHeaderOp(request: $_model.UpdateGatewayRouteHeaderOpRequest): Promise<$_model.UpdateGatewayRouteHeaderOpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGatewayRouteHeaderOpWithOptions(request, runtime);
  }

  /**
   * Modifies the retry policy of a route.
   * 
   * @param tmpReq - UpdateGatewayRouteRetryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayRouteRetryResponse
   */
  async updateGatewayRouteRetryWithOptions(tmpReq: $_model.UpdateGatewayRouteRetryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayRouteRetryResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateGatewayRouteRetryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.retryJSON)) {
      request.retryJSONShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.retryJSON, "RetryJSON", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.retryJSONShrink)) {
      query["RetryJSON"] = request.retryJSONShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayRouteRetry",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayRouteRetryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayRouteRetryResponse({}));
  }

  /**
   * Modifies the retry policy of a route.
   * 
   * @param request - UpdateGatewayRouteRetryRequest
   * @returns UpdateGatewayRouteRetryResponse
   */
  async updateGatewayRouteRetry(request: $_model.UpdateGatewayRouteRetryRequest): Promise<$_model.UpdateGatewayRouteRetryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGatewayRouteRetryWithOptions(request, runtime);
  }

  /**
   * Modifies the timeout policy of a route.
   * 
   * @param tmpReq - UpdateGatewayRouteTimeoutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayRouteTimeoutResponse
   */
  async updateGatewayRouteTimeoutWithOptions(tmpReq: $_model.UpdateGatewayRouteTimeoutRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayRouteTimeoutResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateGatewayRouteTimeoutShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.timeoutJSON)) {
      request.timeoutJSONShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.timeoutJSON, "TimeoutJSON", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.timeoutJSONShrink)) {
      query["TimeoutJSON"] = request.timeoutJSONShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayRouteTimeout",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayRouteTimeoutResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayRouteTimeoutResponse({}));
  }

  /**
   * Modifies the timeout policy of a route.
   * 
   * @param request - UpdateGatewayRouteTimeoutRequest
   * @returns UpdateGatewayRouteTimeoutResponse
   */
  async updateGatewayRouteTimeout(request: $_model.UpdateGatewayRouteTimeoutRequest): Promise<$_model.UpdateGatewayRouteTimeoutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGatewayRouteTimeoutWithOptions(request, runtime);
  }

  /**
   * Updates the WAF status of a route.
   * 
   * @param request - UpdateGatewayRouteWafStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayRouteWafStatusResponse
   */
  async updateGatewayRouteWafStatusWithOptions(request: $_model.UpdateGatewayRouteWafStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayRouteWafStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.enableWaf)) {
      query["EnableWaf"] = request.enableWaf;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.routeId)) {
      query["RouteId"] = request.routeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayRouteWafStatus",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayRouteWafStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayRouteWafStatusResponse({}));
  }

  /**
   * Updates the WAF status of a route.
   * 
   * @param request - UpdateGatewayRouteWafStatusRequest
   * @returns UpdateGatewayRouteWafStatusResponse
   */
  async updateGatewayRouteWafStatus(request: $_model.UpdateGatewayRouteWafStatusRequest): Promise<$_model.UpdateGatewayRouteWafStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGatewayRouteWafStatusWithOptions(request, runtime);
  }

  /**
   * 更新服务
   * 
   * @param tmpReq - UpdateGatewayServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayServiceResponse
   */
  async updateGatewayServiceWithOptions(tmpReq: $_model.UpdateGatewayServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayServiceResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateGatewayServiceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dnsServerList)) {
      request.dnsServerListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dnsServerList, "DnsServerList", "json");
    }

    if (!$dara.isNull(tmpReq.ipList)) {
      request.ipListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ipList, "IpList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.dnsServerListShrink)) {
      query["DnsServerList"] = request.dnsServerListShrink;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ipListShrink)) {
      query["IpList"] = request.ipListShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.servicePort)) {
      query["ServicePort"] = request.servicePort;
    }

    if (!$dara.isNull(request.serviceProtocol)) {
      query["ServiceProtocol"] = request.serviceProtocol;
    }

    if (!$dara.isNull(request.tlsSetting)) {
      query["TlsSetting"] = request.tlsSetting;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayService",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayServiceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayServiceResponse({}));
  }

  /**
   * 更新服务
   * 
   * @param request - UpdateGatewayServiceRequest
   * @returns UpdateGatewayServiceResponse
   */
  async updateGatewayService(request: $_model.UpdateGatewayServiceRequest): Promise<$_model.UpdateGatewayServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGatewayServiceWithOptions(request, runtime);
  }

  /**
   * Updates the health check policy of a specified service in a cloud-native gateway.
   * 
   * @param tmpReq - UpdateGatewayServiceCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayServiceCheckResponse
   */
  async updateGatewayServiceCheckWithOptions(tmpReq: $_model.UpdateGatewayServiceCheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayServiceCheckResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateGatewayServiceCheckShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.expectedStatuses)) {
      request.expectedStatusesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.expectedStatuses, "ExpectedStatuses", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.check)) {
      query["Check"] = request.check;
    }

    if (!$dara.isNull(request.expectedStatusesShrink)) {
      query["ExpectedStatuses"] = request.expectedStatusesShrink;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!$dara.isNull(request.httpHost)) {
      query["HttpHost"] = request.httpHost;
    }

    if (!$dara.isNull(request.httpPath)) {
      query["HttpPath"] = request.httpPath;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayServiceCheck",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayServiceCheckResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayServiceCheckResponse({}));
  }

  /**
   * Updates the health check policy of a specified service in a cloud-native gateway.
   * 
   * @param request - UpdateGatewayServiceCheckRequest
   * @returns UpdateGatewayServiceCheckResponse
   */
  async updateGatewayServiceCheck(request: $_model.UpdateGatewayServiceCheckRequest): Promise<$_model.UpdateGatewayServiceCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGatewayServiceCheckWithOptions(request, runtime);
  }

  /**
   * Updates the traffic policy of a service.
   * 
   * @param tmpReq - UpdateGatewayServiceTrafficPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayServiceTrafficPolicyResponse
   */
  async updateGatewayServiceTrafficPolicyWithOptions(tmpReq: $_model.UpdateGatewayServiceTrafficPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayServiceTrafficPolicyResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateGatewayServiceTrafficPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.gatewayTrafficPolicy)) {
      request.gatewayTrafficPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.gatewayTrafficPolicy, "GatewayTrafficPolicy", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayTrafficPolicyShrink)) {
      query["GatewayTrafficPolicy"] = request.gatewayTrafficPolicyShrink;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayServiceTrafficPolicy",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayServiceTrafficPolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayServiceTrafficPolicyResponse({}));
  }

  /**
   * Updates the traffic policy of a service.
   * 
   * @param request - UpdateGatewayServiceTrafficPolicyRequest
   * @returns UpdateGatewayServiceTrafficPolicyResponse
   */
  async updateGatewayServiceTrafficPolicy(request: $_model.UpdateGatewayServiceTrafficPolicyRequest): Promise<$_model.UpdateGatewayServiceTrafficPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGatewayServiceTrafficPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the version of a service.
   * 
   * @param request - UpdateGatewayServiceVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayServiceVersionResponse
   */
  async updateGatewayServiceVersionWithOptions(request: $_model.UpdateGatewayServiceVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayServiceVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayServiceVersion",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayServiceVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayServiceVersionResponse({}));
  }

  /**
   * Modifies the version of a service.
   * 
   * @param request - UpdateGatewayServiceVersionRequest
   * @returns UpdateGatewayServiceVersionResponse
   */
  async updateGatewayServiceVersion(request: $_model.UpdateGatewayServiceVersionRequest): Promise<$_model.UpdateGatewayServiceVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGatewayServiceVersionWithOptions(request, runtime);
  }

  /**
   * Updates the number of nodes or the specifications of nodes in a pay-as-you-go or subscription cloud-native gateway.
   * 
   * @remarks
   * You can call this operation to update the number of nodes or the specifications of nodes in a pay-as-you-go or subscription cloud-native gateway. If you add nodes or increase the specifications, you will incur fees. For more information, see [Pricing](https://help.aliyun.com/document_detail/250950.html).
   * 
   * @param request - UpdateGatewaySpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewaySpecResponse
   */
  async updateGatewaySpecWithOptions(request: $_model.UpdateGatewaySpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewaySpecResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.replica)) {
      query["Replica"] = request.replica;
    }

    if (!$dara.isNull(request.spec)) {
      query["Spec"] = request.spec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewaySpec",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewaySpecResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewaySpecResponse({}));
  }

  /**
   * Updates the number of nodes or the specifications of nodes in a pay-as-you-go or subscription cloud-native gateway.
   * 
   * @remarks
   * You can call this operation to update the number of nodes or the specifications of nodes in a pay-as-you-go or subscription cloud-native gateway. If you add nodes or increase the specifications, you will incur fees. For more information, see [Pricing](https://help.aliyun.com/document_detail/250950.html).
   * 
   * @param request - UpdateGatewaySpecRequest
   * @returns UpdateGatewaySpecResponse
   */
  async updateGatewaySpec(request: $_model.UpdateGatewaySpecRequest): Promise<$_model.UpdateGatewaySpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGatewaySpecWithOptions(request, runtime);
  }

  /**
   * Updates the version number of the destination cluster.
   * 
   * @param request - UpdateImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateImageResponse
   */
  async updateImageWithOptions(request: $_model.UpdateImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.versionCode)) {
      query["VersionCode"] = request.versionCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateImage",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateImageResponse>(await this.callApi(params, req, runtime), new $_model.UpdateImageResponse({}));
  }

  /**
   * Updates the version number of the destination cluster.
   * 
   * @param request - UpdateImageRequest
   * @returns UpdateImageResponse
   */
  async updateImage(request: $_model.UpdateImageRequest): Promise<$_model.UpdateImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateImageWithOptions(request, runtime);
  }

  /**
   * 更新隔离规则
   * 
   * @param request - UpdateIsolationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIsolationRuleResponse
   */
  async updateIsolationRuleWithOptions(request: $_model.UpdateIsolationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIsolationRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.limitApp)) {
      query["LimitApp"] = request.limitApp;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIsolationRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIsolationRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIsolationRuleResponse({}));
  }

  /**
   * 更新隔离规则
   * 
   * @param request - UpdateIsolationRuleRequest
   * @returns UpdateIsolationRuleResponse
   */
  async updateIsolationRule(request: $_model.UpdateIsolationRuleRequest): Promise<$_model.UpdateIsolationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIsolationRuleWithOptions(request, runtime);
  }

  /**
   * 更新同AZ路由规则
   * 
   * @param request - UpdateLocalityRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLocalityRuleResponse
   */
  async updateLocalityRuleWithOptions(request: $_model.UpdateLocalityRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLocalityRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.rules)) {
      query["Rules"] = request.rules;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLocalityRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLocalityRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLocalityRuleResponse({}));
  }

  /**
   * 更新同AZ路由规则
   * 
   * @param request - UpdateLocalityRuleRequest
   * @returns UpdateLocalityRuleResponse
   */
  async updateLocalityRule(request: $_model.UpdateLocalityRuleRequest): Promise<$_model.UpdateLocalityRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLocalityRuleWithOptions(request, runtime);
  }

  /**
   * Updates the configuration of a canary release for messaging of an application.
   * 
   * @param tmpReq - UpdateMessageQueueRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMessageQueueRouteResponse
   */
  async updateMessageQueueRouteWithOptions(tmpReq: $_model.UpdateMessageQueueRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMessageQueueRouteResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateMessageQueueRouteShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.filterSide)) {
      query["FilterSide"] = request.filterSide;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMessageQueueRoute",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMessageQueueRouteResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMessageQueueRouteResponse({}));
  }

  /**
   * Updates the configuration of a canary release for messaging of an application.
   * 
   * @param request - UpdateMessageQueueRouteRequest
   * @returns UpdateMessageQueueRouteResponse
   */
  async updateMessageQueueRoute(request: $_model.UpdateMessageQueueRouteRequest): Promise<$_model.UpdateMessageQueueRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMessageQueueRouteWithOptions(request, runtime);
  }

  /**
   * Updates a migration task.
   * 
   * @param request - UpdateMigrationTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMigrationTaskResponse
   */
  async updateMigrationTaskWithOptions(request: $_model.UpdateMigrationTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMigrationTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.originInstanceAddress)) {
      query["OriginInstanceAddress"] = request.originInstanceAddress;
    }

    if (!$dara.isNull(request.originInstanceName)) {
      query["OriginInstanceName"] = request.originInstanceName;
    }

    if (!$dara.isNull(request.originInstanceNamespace)) {
      query["OriginInstanceNamespace"] = request.originInstanceNamespace;
    }

    if (!$dara.isNull(request.projectDesc)) {
      query["ProjectDesc"] = request.projectDesc;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    if (!$dara.isNull(request.syncType)) {
      query["SyncType"] = request.syncType;
    }

    if (!$dara.isNull(request.targetClusterName)) {
      query["TargetClusterName"] = request.targetClusterName;
    }

    if (!$dara.isNull(request.targetClusterUrl)) {
      query["TargetClusterUrl"] = request.targetClusterUrl;
    }

    if (!$dara.isNull(request.targetInstanceId)) {
      query["TargetInstanceId"] = request.targetInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMigrationTask",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMigrationTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMigrationTaskResponse({}));
  }

  /**
   * Updates a migration task.
   * 
   * @param request - UpdateMigrationTaskRequest
   * @returns UpdateMigrationTaskResponse
   */
  async updateMigrationTask(request: $_model.UpdateMigrationTaskRequest): Promise<$_model.UpdateMigrationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMigrationTaskWithOptions(request, runtime);
  }

  /**
   * Updates the information about a Nacos cluster.
   * 
   * @param request - UpdateNacosClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNacosClusterResponse
   */
  async updateNacosClusterWithOptions(request: $_model.UpdateNacosClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNacosClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.checkPort)) {
      query["CheckPort"] = request.checkPort;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.healthChecker)) {
      query["HealthChecker"] = request.healthChecker;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.useInstancePortForCheck)) {
      query["UseInstancePortForCheck"] = request.useInstancePortForCheck;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNacosCluster",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNacosClusterResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNacosClusterResponse({}));
  }

  /**
   * Updates the information about a Nacos cluster.
   * 
   * @param request - UpdateNacosClusterRequest
   * @returns UpdateNacosClusterResponse
   */
  async updateNacosCluster(request: $_model.UpdateNacosClusterRequest): Promise<$_model.UpdateNacosClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNacosClusterWithOptions(request, runtime);
  }

  /**
   * Updates a Nacos configuration.
   * 
   * @remarks
   * >  The current API operation is not provided in Nacos SDK. For more information about Nacos SDK, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - UpdateNacosConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNacosConfigResponse
   */
  async updateNacosConfigWithOptions(request: $_model.UpdateNacosConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNacosConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.betaIps)) {
      query["BetaIps"] = request.betaIps;
    }

    if (!$dara.isNull(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!$dara.isNull(request.desc)) {
      query["Desc"] = request.desc;
    }

    if (!$dara.isNull(request.encryptedDataKey)) {
      query["EncryptedDataKey"] = request.encryptedDataKey;
    }

    if (!$dara.isNull(request.group)) {
      query["Group"] = request.group;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.md5)) {
      query["Md5"] = request.md5;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNacosConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNacosConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNacosConfigResponse({}));
  }

  /**
   * Updates a Nacos configuration.
   * 
   * @remarks
   * >  The current API operation is not provided in Nacos SDK. For more information about Nacos SDK, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - UpdateNacosConfigRequest
   * @returns UpdateNacosConfigResponse
   */
  async updateNacosConfig(request: $_model.UpdateNacosConfigRequest): Promise<$_model.UpdateNacosConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNacosConfigWithOptions(request, runtime);
  }

  /**
   * 更新nacos灰度配置
   * 
   * @param request - UpdateNacosGrayConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNacosGrayConfigResponse
   */
  async updateNacosGrayConfigWithOptions(request: $_model.UpdateNacosGrayConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNacosGrayConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!$dara.isNull(request.grayRule)) {
      query["GrayRule"] = request.grayRule;
    }

    if (!$dara.isNull(request.grayRuleName)) {
      query["GrayRuleName"] = request.grayRuleName;
    }

    if (!$dara.isNull(request.grayRulePriority)) {
      query["GrayRulePriority"] = request.grayRulePriority;
    }

    if (!$dara.isNull(request.grayType)) {
      query["GrayType"] = request.grayType;
    }

    if (!$dara.isNull(request.group)) {
      query["Group"] = request.group;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.opType)) {
      query["OpType"] = request.opType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    if (!$dara.isNull(request.stopGray)) {
      query["StopGray"] = request.stopGray;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNacosGrayConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNacosGrayConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNacosGrayConfigResponse({}));
  }

  /**
   * 更新nacos灰度配置
   * 
   * @param request - UpdateNacosGrayConfigRequest
   * @returns UpdateNacosGrayConfigResponse
   */
  async updateNacosGrayConfig(request: $_model.UpdateNacosGrayConfigRequest): Promise<$_model.UpdateNacosGrayConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNacosGrayConfigWithOptions(request, runtime);
  }

  /**
   * Updates the information about application instances that are registered with a Nacos instance.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - UpdateNacosInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNacosInstanceResponse
   */
  async updateNacosInstanceWithOptions(request: $_model.UpdateNacosInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNacosInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.ephemeral)) {
      query["Ephemeral"] = request.ephemeral;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.weight)) {
      query["Weight"] = request.weight;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.metadata)) {
      body["Metadata"] = request.metadata;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNacosInstance",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNacosInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNacosInstanceResponse({}));
  }

  /**
   * Updates the information about application instances that are registered with a Nacos instance.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - UpdateNacosInstanceRequest
   * @returns UpdateNacosInstanceResponse
   */
  async updateNacosInstance(request: $_model.UpdateNacosInstanceRequest): Promise<$_model.UpdateNacosInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNacosInstanceWithOptions(request, runtime);
  }

  /**
   * Updates the information about a Nacos service.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - UpdateNacosServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNacosServiceResponse
   */
  async updateNacosServiceWithOptions(request: $_model.UpdateNacosServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNacosServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.protectThreshold)) {
      query["ProtectThreshold"] = request.protectThreshold;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNacosService",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNacosServiceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNacosServiceResponse({}));
  }

  /**
   * Updates the information about a Nacos service.
   * 
   * @remarks
   * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
   * 
   * @param request - UpdateNacosServiceRequest
   * @returns UpdateNacosServiceResponse
   */
  async updateNacosService(request: $_model.UpdateNacosServiceRequest): Promise<$_model.UpdateNacosServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNacosServiceWithOptions(request, runtime);
  }

  /**
   * Updates the configuration of a plug-in.
   * 
   * @param tmpReq - UpdatePluginConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePluginConfigResponse
   */
  async updatePluginConfigWithOptions(tmpReq: $_model.UpdatePluginConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePluginConfigResponse> {
    tmpReq.validate();
    let request = new $_model.UpdatePluginConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceIdList)) {
      request.resourceIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceIdList, "ResourceIdList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.configLevel)) {
      query["ConfigLevel"] = request.configLevel;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.gmtCreate)) {
      query["GmtCreate"] = request.gmtCreate;
    }

    if (!$dara.isNull(request.gmtModified)) {
      query["GmtModified"] = request.gmtModified;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    if (!$dara.isNull(request.resourceIdListShrink)) {
      query["ResourceIdList"] = request.resourceIdListShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePluginConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePluginConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePluginConfigResponse({}));
  }

  /**
   * Updates the configuration of a plug-in.
   * 
   * @param request - UpdatePluginConfigRequest
   * @returns UpdatePluginConfigResponse
   */
  async updatePluginConfig(request: $_model.UpdatePluginConfigRequest): Promise<$_model.UpdatePluginConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePluginConfigWithOptions(request, runtime);
  }

  /**
   * Updates a certificate.
   * 
   * @param request - UpdateSSLCertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSSLCertResponse
   */
  async updateSSLCertWithOptions(request: $_model.UpdateSSLCertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSSLCertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSSLCert",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSSLCertResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSSLCertResponse({}));
  }

  /**
   * Updates a certificate.
   * 
   * @param request - UpdateSSLCertRequest
   * @returns UpdateSSLCertResponse
   */
  async updateSSLCert(request: $_model.UpdateSSLCertRequest): Promise<$_model.UpdateSSLCertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSSLCertWithOptions(request, runtime);
  }

  /**
   * Modifies service sources of a cloud-native gateway. You can modify only Container Service for Kubernetes (ACK) service sources that contain configurations related to Ingress resource monitoring.
   * 
   * @param tmpReq - UpdateServiceSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceSourceResponse
   */
  async updateServiceSourceWithOptions(tmpReq: $_model.UpdateServiceSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServiceSourceResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateServiceSourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ingressOptionsRequest)) {
      request.ingressOptionsRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ingressOptionsRequest, "IngressOptionsRequest", "json");
    }

    if (!$dara.isNull(tmpReq.pathList)) {
      request.pathListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pathList, "PathList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ingressOptionsRequestShrink)) {
      query["IngressOptionsRequest"] = request.ingressOptionsRequestShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pathListShrink)) {
      query["PathList"] = request.pathListShrink;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceSource",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateServiceSourceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateServiceSourceResponse({}));
  }

  /**
   * Modifies service sources of a cloud-native gateway. You can modify only Container Service for Kubernetes (ACK) service sources that contain configurations related to Ingress resource monitoring.
   * 
   * @param request - UpdateServiceSourceRequest
   * @returns UpdateServiceSourceResponse
   */
  async updateServiceSource(request: $_model.UpdateServiceSourceRequest): Promise<$_model.UpdateServiceSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateServiceSourceWithOptions(request, runtime);
  }

  /**
   * 更新热点参数防护规则（HTTP 请求）
   * 
   * @param request - UpdateWebFlowRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWebFlowRuleResponse
   */
  async updateWebFlowRuleWithOptions(request: $_model.UpdateWebFlowRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWebFlowRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.burst)) {
      query["Burst"] = request.burst;
    }

    if (!$dara.isNull(request.controlBehavior)) {
      query["ControlBehavior"] = request.controlBehavior;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.maxQueueingTimeMs)) {
      query["MaxQueueingTimeMs"] = request.maxQueueingTimeMs;
    }

    if (!$dara.isNull(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.paramItem)) {
      query["ParamItem"] = request.paramItem;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceMode)) {
      query["ResourceMode"] = request.resourceMode;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.statIntervalMs)) {
      query["StatIntervalMs"] = request.statIntervalMs;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWebFlowRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWebFlowRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWebFlowRuleResponse({}));
  }

  /**
   * 更新热点参数防护规则（HTTP 请求）
   * 
   * @param request - UpdateWebFlowRuleRequest
   * @returns UpdateWebFlowRuleResponse
   */
  async updateWebFlowRule(request: $_model.UpdateWebFlowRuleRequest): Promise<$_model.UpdateWebFlowRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWebFlowRuleWithOptions(request, runtime);
  }

  /**
   * Updates the information about a ZooKeeper node.
   * 
   * @param request - UpdateZnodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateZnodeResponse
   */
  async updateZnodeWithOptions(request: $_model.UpdateZnodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateZnodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.data)) {
      query["Data"] = request.data;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateZnode",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateZnodeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateZnodeResponse({}));
  }

  /**
   * Updates the information about a ZooKeeper node.
   * 
   * @param request - UpdateZnodeRequest
   * @returns UpdateZnodeResponse
   */
  async updateZnode(request: $_model.UpdateZnodeRequest): Promise<$_model.UpdateZnodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateZnodeWithOptions(request, runtime);
  }

  /**
   * Upgrades the version of a cluster.
   * 
   * @param request - UpgradeClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeClusterResponse
   */
  async upgradeClusterWithOptions(request: $_model.UpgradeClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    if (!$dara.isNull(request.upgradeVersion)) {
      query["UpgradeVersion"] = request.upgradeVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeCluster",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeClusterResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeClusterResponse({}));
  }

  /**
   * Upgrades the version of a cluster.
   * 
   * @param request - UpgradeClusterRequest
   * @returns UpgradeClusterResponse
   */
  async upgradeCluster(request: $_model.UpgradeClusterRequest): Promise<$_model.UpgradeClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeClusterWithOptions(request, runtime);
  }

}
