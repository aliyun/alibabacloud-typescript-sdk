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
    this._endpoint = this.getEndpoint("apig", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Authorize the security group for gateway to access services
   * 
   * @param request - AddGatewaySecurityGroupRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddGatewaySecurityGroupRuleResponse
   */
  async addGatewaySecurityGroupRuleWithOptions(gatewayId: string, request: $_model.AddGatewaySecurityGroupRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddGatewaySecurityGroupRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.portRanges)) {
      body["portRanges"] = request.portRanges;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      body["securityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddGatewaySecurityGroupRule",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/security-group-rules`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddGatewaySecurityGroupRuleResponse>(await this.callApi(params, req, runtime), new $_model.AddGatewaySecurityGroupRuleResponse({}));
  }

  /**
   * Authorize the security group for gateway to access services
   * 
   * @param request - AddGatewaySecurityGroupRuleRequest
   * @returns AddGatewaySecurityGroupRuleResponse
   */
  async addGatewaySecurityGroupRule(gatewayId: string, request: $_model.AddGatewaySecurityGroupRuleRequest): Promise<$_model.AddGatewaySecurityGroupRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addGatewaySecurityGroupRuleWithOptions(gatewayId, request, headers, runtime);
  }

  /**
   * Removes consumer authentication rules.
   * 
   * @param request - BatchDeleteConsumerAuthorizationRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteConsumerAuthorizationRuleResponse
   */
  async batchDeleteConsumerAuthorizationRuleWithOptions(request: $_model.BatchDeleteConsumerAuthorizationRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteConsumerAuthorizationRuleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.consumerAuthorizationRuleIds)) {
      query["consumerAuthorizationRuleIds"] = request.consumerAuthorizationRuleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDeleteConsumerAuthorizationRule",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/authorization-rules`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchDeleteConsumerAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.BatchDeleteConsumerAuthorizationRuleResponse({}));
  }

  /**
   * Removes consumer authentication rules.
   * 
   * @param request - BatchDeleteConsumerAuthorizationRuleRequest
   * @returns BatchDeleteConsumerAuthorizationRuleResponse
   */
  async batchDeleteConsumerAuthorizationRule(request: $_model.BatchDeleteConsumerAuthorizationRuleRequest): Promise<$_model.BatchDeleteConsumerAuthorizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchDeleteConsumerAuthorizationRuleWithOptions(request, headers, runtime);
  }

  /**
   * Resource Group Transfer
   * 
   * @param request - ChangeResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.service)) {
      query["Service"] = request.service;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/move-resource-group`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResourceGroupResponse({}));
  }

  /**
   * Resource Group Transfer
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.changeResourceGroupWithOptions(request, headers, runtime);
  }

  /**
   * CreateAndAttachPolicy
   * 
   * @param request - CreateAndAttachPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAndAttachPolicyResponse
   */
  async createAndAttachPolicyWithOptions(request: $_model.CreateAndAttachPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAndAttachPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attachResourceIds)) {
      body["attachResourceIds"] = request.attachResourceIds;
    }

    if (!$dara.isNull(request.attachResourceType)) {
      body["attachResourceType"] = request.attachResourceType;
    }

    if (!$dara.isNull(request.className)) {
      body["className"] = request.className;
    }

    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.environmentId)) {
      body["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.gatewayId)) {
      body["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAndAttachPolicy",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/policies`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAndAttachPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateAndAttachPolicyResponse({}));
  }

  /**
   * CreateAndAttachPolicy
   * 
   * @param request - CreateAndAttachPolicyRequest
   * @returns CreateAndAttachPolicyResponse
   */
  async createAndAttachPolicy(request: $_model.CreateAndAttachPolicyRequest): Promise<$_model.CreateAndAttachPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAndAttachPolicyWithOptions(request, headers, runtime);
  }

  /**
   * 创建消费者
   * 
   * @param request - CreateConsumerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConsumerResponse
   */
  async createConsumerWithOptions(request: $_model.CreateConsumerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConsumerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.akSkIdentityConfigs)) {
      body["akSkIdentityConfigs"] = request.akSkIdentityConfigs;
    }

    if (!$dara.isNull(request.apikeyIdentityConfig)) {
      body["apikeyIdentityConfig"] = request.apikeyIdentityConfig;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.enable)) {
      body["enable"] = request.enable;
    }

    if (!$dara.isNull(request.gatewayType)) {
      body["gatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.jwtIdentityConfig)) {
      body["jwtIdentityConfig"] = request.jwtIdentityConfig;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConsumer",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConsumerResponse>(await this.callApi(params, req, runtime), new $_model.CreateConsumerResponse({}));
  }

  /**
   * 创建消费者
   * 
   * @param request - CreateConsumerRequest
   * @returns CreateConsumerResponse
   */
  async createConsumer(request: $_model.CreateConsumerRequest): Promise<$_model.CreateConsumerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConsumerWithOptions(request, headers, runtime);
  }

  /**
   * 创建消费者授权规则
   * 
   * @param request - CreateConsumerAuthorizationRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConsumerAuthorizationRuleResponse
   */
  async createConsumerAuthorizationRuleWithOptions(consumerId: string, request: $_model.CreateConsumerAuthorizationRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConsumerAuthorizationRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authorizationResourceInfos)) {
      body["authorizationResourceInfos"] = request.authorizationResourceInfos;
    }

    if (!$dara.isNull(request.expireMode)) {
      body["expireMode"] = request.expireMode;
    }

    if (!$dara.isNull(request.expireTimestamp)) {
      body["expireTimestamp"] = request.expireTimestamp;
    }

    if (!$dara.isNull(request.parentResourceType)) {
      body["parentResourceType"] = request.parentResourceType;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConsumerAuthorizationRule",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumers/${$dara.URL.percentEncode(consumerId)}/authorization-rules`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConsumerAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateConsumerAuthorizationRuleResponse({}));
  }

  /**
   * 创建消费者授权规则
   * 
   * @param request - CreateConsumerAuthorizationRuleRequest
   * @returns CreateConsumerAuthorizationRuleResponse
   */
  async createConsumerAuthorizationRule(consumerId: string, request: $_model.CreateConsumerAuthorizationRuleRequest): Promise<$_model.CreateConsumerAuthorizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConsumerAuthorizationRuleWithOptions(consumerId, request, headers, runtime);
  }

  /**
   * Creates a consumer authentication rule.
   * 
   * @param request - CreateConsumerAuthorizationRulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConsumerAuthorizationRulesResponse
   */
  async createConsumerAuthorizationRulesWithOptions(request: $_model.CreateConsumerAuthorizationRulesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConsumerAuthorizationRulesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authorizationRules)) {
      body["authorizationRules"] = request.authorizationRules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConsumerAuthorizationRules",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/authorization-rules`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConsumerAuthorizationRulesResponse>(await this.callApi(params, req, runtime), new $_model.CreateConsumerAuthorizationRulesResponse({}));
  }

  /**
   * Creates a consumer authentication rule.
   * 
   * @param request - CreateConsumerAuthorizationRulesRequest
   * @returns CreateConsumerAuthorizationRulesResponse
   */
  async createConsumerAuthorizationRules(request: $_model.CreateConsumerAuthorizationRulesRequest): Promise<$_model.CreateConsumerAuthorizationRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConsumerAuthorizationRulesWithOptions(request, headers, runtime);
  }

  /**
   * Creates a domain name.
   * 
   * @remarks
   * Create Domain.
   * 
   * @param request - CreateDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDomainResponse
   */
  async createDomainWithOptions(request: $_model.CreateDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDomainResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.caCertIdentifier)) {
      body["caCertIdentifier"] = request.caCertIdentifier;
    }

    if (!$dara.isNull(request.certIdentifier)) {
      body["certIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.clientCACert)) {
      body["clientCACert"] = request.clientCACert;
    }

    if (!$dara.isNull(request.forceHttps)) {
      body["forceHttps"] = request.forceHttps;
    }

    if (!$dara.isNull(request.gatewayType)) {
      body["gatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.http2Option)) {
      body["http2Option"] = request.http2Option;
    }

    if (!$dara.isNull(request.mTLSEnabled)) {
      body["mTLSEnabled"] = request.mTLSEnabled;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.protocol)) {
      body["protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tlsCipherSuitesConfig)) {
      body["tlsCipherSuitesConfig"] = request.tlsCipherSuitesConfig;
    }

    if (!$dara.isNull(request.tlsMax)) {
      body["tlsMax"] = request.tlsMax;
    }

    if (!$dara.isNull(request.tlsMin)) {
      body["tlsMin"] = request.tlsMin;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDomain",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/domains`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDomainResponse>(await this.callApi(params, req, runtime), new $_model.CreateDomainResponse({}));
  }

  /**
   * Creates a domain name.
   * 
   * @remarks
   * Create Domain.
   * 
   * @param request - CreateDomainRequest
   * @returns CreateDomainResponse
   */
  async createDomain(request: $_model.CreateDomainRequest): Promise<$_model.CreateDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDomainWithOptions(request, headers, runtime);
  }

  /**
   * CreateEnvironment
   * 
   * @remarks
   * Create environment.
   * 
   * @deprecated OpenAPI CreateEnvironment is deprecated
   * 
   * @param request - CreateEnvironmentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEnvironmentResponse
   */
  async createEnvironmentWithOptions(request: $_model.CreateEnvironmentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEnvironmentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alias)) {
      body["alias"] = request.alias;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.gatewayId)) {
      body["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEnvironment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/environments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEnvironmentResponse>(await this.callApi(params, req, runtime), new $_model.CreateEnvironmentResponse({}));
  }

  /**
   * CreateEnvironment
   * 
   * @remarks
   * Create environment.
   * 
   * @deprecated OpenAPI CreateEnvironment is deprecated
   * 
   * @param request - CreateEnvironmentRequest
   * @returns CreateEnvironmentResponse
   */
  // Deprecated
  async createEnvironment(request: $_model.CreateEnvironmentRequest): Promise<$_model.CreateEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEnvironmentWithOptions(request, headers, runtime);
  }

  /**
   * 创建云原生网关
   * 
   * @param request - CreateGatewayRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGatewayResponse
   */
  async createGatewayWithOptions(request: $_model.CreateGatewayRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGatewayResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chargeType)) {
      body["chargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.gatewayType)) {
      body["gatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.logConfig)) {
      body["logConfig"] = request.logConfig;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.networkAccessConfig)) {
      body["networkAccessConfig"] = request.networkAccessConfig;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.spec)) {
      body["spec"] = request.spec;
    }

    if (!$dara.isNull(request.tag)) {
      body["tag"] = request.tag;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["vpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneConfig)) {
      body["zoneConfig"] = request.zoneConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGateway",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGatewayResponse>(await this.callApi(params, req, runtime), new $_model.CreateGatewayResponse({}));
  }

  /**
   * 创建云原生网关
   * 
   * @param request - CreateGatewayRequest
   * @returns CreateGatewayResponse
   */
  async createGateway(request: $_model.CreateGatewayRequest): Promise<$_model.CreateGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGatewayWithOptions(request, headers, runtime);
  }

  /**
   * Creates an HTTP API.
   * 
   * @param request - CreateHttpApiRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHttpApiResponse
   */
  async createHttpApiWithOptions(request: $_model.CreateHttpApiRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHttpApiResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentProtocols)) {
      body["agentProtocols"] = request.agentProtocols;
    }

    if (!$dara.isNull(request.aiProtocols)) {
      body["aiProtocols"] = request.aiProtocols;
    }

    if (!$dara.isNull(request.authConfig)) {
      body["authConfig"] = request.authConfig;
    }

    if (!$dara.isNull(request.basePath)) {
      body["basePath"] = request.basePath;
    }

    if (!$dara.isNull(request.deployConfigs)) {
      body["deployConfigs"] = request.deployConfigs;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.enableAuth)) {
      body["enableAuth"] = request.enableAuth;
    }

    if (!$dara.isNull(request.ingressConfig)) {
      body["ingressConfig"] = request.ingressConfig;
    }

    if (!$dara.isNull(request.modelCategory)) {
      body["modelCategory"] = request.modelCategory;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.protocols)) {
      body["protocols"] = request.protocols;
    }

    if (!$dara.isNull(request.removeBasePathOnForward)) {
      body["removeBasePathOnForward"] = request.removeBasePathOnForward;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    if (!$dara.isNull(request.versionConfig)) {
      body["versionConfig"] = request.versionConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHttpApiResponse>(await this.callApi(params, req, runtime), new $_model.CreateHttpApiResponse({}));
  }

  /**
   * Creates an HTTP API.
   * 
   * @param request - CreateHttpApiRequest
   * @returns CreateHttpApiResponse
   */
  async createHttpApi(request: $_model.CreateHttpApiRequest): Promise<$_model.CreateHttpApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createHttpApiWithOptions(request, headers, runtime);
  }

  /**
   * Create an Operation for HTTP API
   * 
   * @param request - CreateHttpApiOperationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHttpApiOperationResponse
   */
  async createHttpApiOperationWithOptions(httpApiId: string, request: $_model.CreateHttpApiOperationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHttpApiOperationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.operations)) {
      body["operations"] = request.operations;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHttpApiOperation",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/operations`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHttpApiOperationResponse>(await this.callApi(params, req, runtime), new $_model.CreateHttpApiOperationResponse({}));
  }

  /**
   * Create an Operation for HTTP API
   * 
   * @param request - CreateHttpApiOperationRequest
   * @returns CreateHttpApiOperationResponse
   */
  async createHttpApiOperation(httpApiId: string, request: $_model.CreateHttpApiOperationRequest): Promise<$_model.CreateHttpApiOperationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createHttpApiOperationWithOptions(httpApiId, request, headers, runtime);
  }

  /**
   * Creates a route for an HTTP API.
   * 
   * @param request - CreateHttpApiRouteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHttpApiRouteResponse
   */
  async createHttpApiRouteWithOptions(httpApiId: string, request: $_model.CreateHttpApiRouteRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHttpApiRouteResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.backendConfig)) {
      body["backendConfig"] = request.backendConfig;
    }

    if (!$dara.isNull(request.deployConfigs)) {
      body["deployConfigs"] = request.deployConfigs;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.domainIds)) {
      body["domainIds"] = request.domainIds;
    }

    if (!$dara.isNull(request.environmentId)) {
      body["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.match)) {
      body["match"] = request.match;
    }

    if (!$dara.isNull(request.mcpRouteConfig)) {
      body["mcpRouteConfig"] = request.mcpRouteConfig;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHttpApiRoute",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/routes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHttpApiRouteResponse>(await this.callApi(params, req, runtime), new $_model.CreateHttpApiRouteResponse({}));
  }

  /**
   * Creates a route for an HTTP API.
   * 
   * @param request - CreateHttpApiRouteRequest
   * @returns CreateHttpApiRouteResponse
   */
  async createHttpApiRoute(httpApiId: string, request: $_model.CreateHttpApiRouteRequest): Promise<$_model.CreateHttpApiRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createHttpApiRouteWithOptions(httpApiId, request, headers, runtime);
  }

  /**
   * 创建API
   * 
   * @param request - CreatePluginAttachmentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePluginAttachmentResponse
   */
  async createPluginAttachmentWithOptions(request: $_model.CreatePluginAttachmentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePluginAttachmentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attachResourceIds)) {
      body["attachResourceIds"] = request.attachResourceIds;
    }

    if (!$dara.isNull(request.attachResourceType)) {
      body["attachResourceType"] = request.attachResourceType;
    }

    if (!$dara.isNull(request.enable)) {
      body["enable"] = request.enable;
    }

    if (!$dara.isNull(request.environmentId)) {
      body["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.gatewayId)) {
      body["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.pluginConfig)) {
      body["pluginConfig"] = request.pluginConfig;
    }

    if (!$dara.isNull(request.pluginId)) {
      body["pluginId"] = request.pluginId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePluginAttachment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/plugin-attachments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePluginAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.CreatePluginAttachmentResponse({}));
  }

  /**
   * 创建API
   * 
   * @param request - CreatePluginAttachmentRequest
   * @returns CreatePluginAttachmentResponse
   */
  async createPluginAttachment(request: $_model.CreatePluginAttachmentRequest): Promise<$_model.CreatePluginAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPluginAttachmentWithOptions(request, headers, runtime);
  }

  /**
   * Create Policy
   * 
   * @param request - CreatePolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyResponse
   */
  async createPolicyWithOptions(request: $_model.CreatePolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.className)) {
      body["className"] = request.className;
    }

    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePolicy",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v2/policies`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreatePolicyResponse({}));
  }

  /**
   * Create Policy
   * 
   * @param request - CreatePolicyRequest
   * @returns CreatePolicyResponse
   */
  async createPolicy(request: $_model.CreatePolicyRequest): Promise<$_model.CreatePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPolicyWithOptions(request, headers, runtime);
  }

  /**
   * Create policy resource mount
   * 
   * @param request - CreatePolicyAttachmentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyAttachmentResponse
   */
  async createPolicyAttachmentWithOptions(request: $_model.CreatePolicyAttachmentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePolicyAttachmentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attachResourceId)) {
      body["attachResourceId"] = request.attachResourceId;
    }

    if (!$dara.isNull(request.attachResourceType)) {
      body["attachResourceType"] = request.attachResourceType;
    }

    if (!$dara.isNull(request.environmentId)) {
      body["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.gatewayId)) {
      body["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.policyId)) {
      body["policyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePolicyAttachment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/policy-attachments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePolicyAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.CreatePolicyAttachmentResponse({}));
  }

  /**
   * Create policy resource mount
   * 
   * @param request - CreatePolicyAttachmentRequest
   * @returns CreatePolicyAttachmentResponse
   */
  async createPolicyAttachment(request: $_model.CreatePolicyAttachmentRequest): Promise<$_model.CreatePolicyAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPolicyAttachmentWithOptions(request, headers, runtime);
  }

  /**
   * Creates a service.
   * 
   * @remarks
   * You can call this operation to create multiple services at a time.
   * 
   * @param request - CreateServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceResponse
   */
  async createServiceWithOptions(request: $_model.CreateServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayId)) {
      body["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serviceConfigs)) {
      body["serviceConfigs"] = request.serviceConfigs;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["sourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateService",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/services`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceResponse({}));
  }

  /**
   * Creates a service.
   * 
   * @remarks
   * You can call this operation to create multiple services at a time.
   * 
   * @param request - CreateServiceRequest
   * @returns CreateServiceResponse
   */
  async createService(request: $_model.CreateServiceRequest): Promise<$_model.CreateServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceWithOptions(request, headers, runtime);
  }

  /**
   * 删除消费者
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConsumerResponse
   */
  async deleteConsumerWithOptions(consumerId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConsumerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConsumer",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumers/${$dara.URL.percentEncode(consumerId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConsumerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConsumerResponse({}));
  }

  /**
   * 删除消费者
   * @returns DeleteConsumerResponse
   */
  async deleteConsumer(consumerId: string): Promise<$_model.DeleteConsumerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConsumerWithOptions(consumerId, headers, runtime);
  }

  /**
   * 删除消费者授权规则
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConsumerAuthorizationRuleResponse
   */
  async deleteConsumerAuthorizationRuleWithOptions(consumerAuthorizationRuleId: string, consumerId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConsumerAuthorizationRuleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConsumerAuthorizationRule",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumers/${$dara.URL.percentEncode(consumerId)}/authorization-rules/${$dara.URL.percentEncode(consumerAuthorizationRuleId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConsumerAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConsumerAuthorizationRuleResponse({}));
  }

  /**
   * 删除消费者授权规则
   * @returns DeleteConsumerAuthorizationRuleResponse
   */
  async deleteConsumerAuthorizationRule(consumerAuthorizationRuleId: string, consumerId: string): Promise<$_model.DeleteConsumerAuthorizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConsumerAuthorizationRuleWithOptions(consumerAuthorizationRuleId, consumerId, headers, runtime);
  }

  /**
   * DeleteDomain
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainResponse
   */
  async deleteDomainWithOptions(domainId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDomainResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDomain",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/domains/${$dara.URL.percentEncode(domainId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDomainResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDomainResponse({}));
  }

  /**
   * DeleteDomain
   * @returns DeleteDomainResponse
   */
  async deleteDomain(domainId: string): Promise<$_model.DeleteDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDomainWithOptions(domainId, headers, runtime);
  }

  /**
   * DeleteEnvironment
   * 
   * @deprecated OpenAPI DeleteEnvironment is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEnvironmentResponse
   */
  async deleteEnvironmentWithOptions(environmentId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEnvironmentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEnvironment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/environments/${$dara.URL.percentEncode(environmentId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEnvironmentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEnvironmentResponse({}));
  }

  /**
   * DeleteEnvironment
   * 
   * @deprecated OpenAPI DeleteEnvironment is deprecated
   * @returns DeleteEnvironmentResponse
   */
  // Deprecated
  async deleteEnvironment(environmentId: string): Promise<$_model.DeleteEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEnvironmentWithOptions(environmentId, headers, runtime);
  }

  /**
   * Delete Gateway
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayResponse
   */
  async deleteGatewayWithOptions(gatewayId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGatewayResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGateway",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGatewayResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGatewayResponse({}));
  }

  /**
   * Delete Gateway
   * @returns DeleteGatewayResponse
   */
  async deleteGateway(gatewayId: string): Promise<$_model.DeleteGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGatewayWithOptions(gatewayId, headers, runtime);
  }

  /**
   * Delete the security group rule of a gateway
   * 
   * @param request - DeleteGatewaySecurityGroupRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewaySecurityGroupRuleResponse
   */
  async deleteGatewaySecurityGroupRuleWithOptions(gatewayId: string, securityGroupRuleId: string, request: $_model.DeleteGatewaySecurityGroupRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGatewaySecurityGroupRuleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cascadingDelete)) {
      query["cascadingDelete"] = request.cascadingDelete;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGatewaySecurityGroupRule",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/security-group-rules/${$dara.URL.percentEncode(securityGroupRuleId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGatewaySecurityGroupRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGatewaySecurityGroupRuleResponse({}));
  }

  /**
   * Delete the security group rule of a gateway
   * 
   * @param request - DeleteGatewaySecurityGroupRuleRequest
   * @returns DeleteGatewaySecurityGroupRuleResponse
   */
  async deleteGatewaySecurityGroupRule(gatewayId: string, securityGroupRuleId: string, request: $_model.DeleteGatewaySecurityGroupRuleRequest): Promise<$_model.DeleteGatewaySecurityGroupRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGatewaySecurityGroupRuleWithOptions(gatewayId, securityGroupRuleId, request, headers, runtime);
  }

  /**
   * Deletes an HTTP API.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHttpApiResponse
   */
  async deleteHttpApiWithOptions(httpApiId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHttpApiResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHttpApiResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHttpApiResponse({}));
  }

  /**
   * Deletes an HTTP API.
   * @returns DeleteHttpApiResponse
   */
  async deleteHttpApi(httpApiId: string): Promise<$_model.DeleteHttpApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteHttpApiWithOptions(httpApiId, headers, runtime);
  }

  /**
   * Delete Operation
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHttpApiOperationResponse
   */
  async deleteHttpApiOperationWithOptions(httpApiId: string, operationId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHttpApiOperationResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHttpApiOperation",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/operations/${$dara.URL.percentEncode(operationId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHttpApiOperationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHttpApiOperationResponse({}));
  }

  /**
   * Delete Operation
   * @returns DeleteHttpApiOperationResponse
   */
  async deleteHttpApiOperation(httpApiId: string, operationId: string): Promise<$_model.DeleteHttpApiOperationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteHttpApiOperationWithOptions(httpApiId, operationId, headers, runtime);
  }

  /**
   * Delete the route of an HttpApi
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHttpApiRouteResponse
   */
  async deleteHttpApiRouteWithOptions(httpApiId: string, routeId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHttpApiRouteResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHttpApiRoute",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/routes/${$dara.URL.percentEncode(routeId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHttpApiRouteResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHttpApiRouteResponse({}));
  }

  /**
   * Delete the route of an HttpApi
   * @returns DeleteHttpApiRouteResponse
   */
  async deleteHttpApiRoute(httpApiId: string, routeId: string): Promise<$_model.DeleteHttpApiRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteHttpApiRouteWithOptions(httpApiId, routeId, headers, runtime);
  }

  /**
   * 删除挂载规则API
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePluginAttachmentResponse
   */
  async deletePluginAttachmentWithOptions(pluginAttachmentId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePluginAttachmentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePluginAttachment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/plugin-attachments/${$dara.URL.percentEncode(pluginAttachmentId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePluginAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.DeletePluginAttachmentResponse({}));
  }

  /**
   * 删除挂载规则API
   * @returns DeletePluginAttachmentResponse
   */
  async deletePluginAttachment(pluginAttachmentId: string): Promise<$_model.DeletePluginAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePluginAttachmentWithOptions(pluginAttachmentId, headers, runtime);
  }

  /**
   * Delete Policy
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyResponse
   */
  async deletePolicyWithOptions(policyId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolicyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicy",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v2/policies/${$dara.URL.percentEncode(policyId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeletePolicyResponse({}));
  }

  /**
   * Delete Policy
   * @returns DeletePolicyResponse
   */
  async deletePolicy(policyId: string): Promise<$_model.DeletePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePolicyWithOptions(policyId, headers, runtime);
  }

  /**
   * Delete policy resource attachment
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyAttachmentResponse
   */
  async deletePolicyAttachmentWithOptions(policyAttachmentId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolicyAttachmentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicyAttachment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/policy-attachments/${$dara.URL.percentEncode(policyAttachmentId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePolicyAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.DeletePolicyAttachmentResponse({}));
  }

  /**
   * Delete policy resource attachment
   * @returns DeletePolicyAttachmentResponse
   */
  async deletePolicyAttachment(policyAttachmentId: string): Promise<$_model.DeletePolicyAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePolicyAttachmentWithOptions(policyAttachmentId, headers, runtime);
  }

  /**
   * 删除服务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceResponse
   */
  async deleteServiceWithOptions(serviceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteService",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/services/${$dara.URL.percentEncode(serviceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteServiceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteServiceResponse({}));
  }

  /**
   * 删除服务
   * @returns DeleteServiceResponse
   */
  async deleteService(serviceId: string): Promise<$_model.DeleteServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceWithOptions(serviceId, headers, runtime);
  }

  /**
   * Deploy HttpApi
   * 
   * @param request - DeployHttpApiRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployHttpApiResponse
   */
  async deployHttpApiWithOptions(httpApiId: string, request: $_model.DeployHttpApiRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeployHttpApiResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.httpApiConfig)) {
      body["httpApiConfig"] = request.httpApiConfig;
    }

    if (!$dara.isNull(request.restApiConfig)) {
      body["restApiConfig"] = request.restApiConfig;
    }

    if (!$dara.isNull(request.routeId)) {
      body["routeId"] = request.routeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeployHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/deploy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeployHttpApiResponse>(await this.callApi(params, req, runtime), new $_model.DeployHttpApiResponse({}));
  }

  /**
   * Deploy HttpApi
   * 
   * @param request - DeployHttpApiRequest
   * @returns DeployHttpApiResponse
   */
  async deployHttpApi(httpApiId: string, request: $_model.DeployHttpApiRequest): Promise<$_model.DeployHttpApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deployHttpApiWithOptions(httpApiId, request, headers, runtime);
  }

  /**
   * Export HTTP API
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportHttpApiResponse
   */
  async exportHttpApiWithOptions(httpApiId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExportHttpApiResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/export`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportHttpApiResponse>(await this.callApi(params, req, runtime), new $_model.ExportHttpApiResponse({}));
  }

  /**
   * Export HTTP API
   * @returns ExportHttpApiResponse
   */
  async exportHttpApi(httpApiId: string): Promise<$_model.ExportHttpApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.exportHttpApiWithOptions(httpApiId, headers, runtime);
  }

  /**
   * 查询消费者
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConsumerResponse
   */
  async getConsumerWithOptions(consumerId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetConsumerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConsumer",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumers/${$dara.URL.percentEncode(consumerId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConsumerResponse>(await this.callApi(params, req, runtime), new $_model.GetConsumerResponse({}));
  }

  /**
   * 查询消费者
   * @returns GetConsumerResponse
   */
  async getConsumer(consumerId: string): Promise<$_model.GetConsumerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConsumerWithOptions(consumerId, headers, runtime);
  }

  /**
   * 查询消费者授权规则
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConsumerAuthorizationRuleResponse
   */
  async getConsumerAuthorizationRuleWithOptions(consumerAuthorizationRuleId: string, consumerId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetConsumerAuthorizationRuleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConsumerAuthorizationRule",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumers/${$dara.URL.percentEncode(consumerId)}/authorization-rules/${$dara.URL.percentEncode(consumerAuthorizationRuleId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConsumerAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetConsumerAuthorizationRuleResponse({}));
  }

  /**
   * 查询消费者授权规则
   * @returns GetConsumerAuthorizationRuleResponse
   */
  async getConsumerAuthorizationRule(consumerAuthorizationRuleId: string, consumerId: string): Promise<$_model.GetConsumerAuthorizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConsumerAuthorizationRuleWithOptions(consumerAuthorizationRuleId, consumerId, headers, runtime);
  }

  /**
   * Obtains data from dashboards.
   * 
   * @param tmpReq - GetDashboardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDashboardResponse
   */
  async getDashboardWithOptions(gatewayId: string, tmpReq: $_model.GetDashboardRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDashboardResponse> {
    tmpReq.validate();
    let request = new $_model.GetDashboardShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "filter", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["acceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.apiId)) {
      query["apiId"] = request.apiId;
    }

    if (!$dara.isNull(request.filterShrink)) {
      query["filter"] = request.filterShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pluginClassId)) {
      query["pluginClassId"] = request.pluginClassId;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["pluginId"] = request.pluginId;
    }

    if (!$dara.isNull(request.routeId)) {
      query["routeId"] = request.routeId;
    }

    if (!$dara.isNull(request.source)) {
      query["source"] = request.source;
    }

    if (!$dara.isNull(request.upstreamCluster)) {
      query["upstreamCluster"] = request.upstreamCluster;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDashboard",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/dashboards`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDashboardResponse>(await this.callApi(params, req, runtime), new $_model.GetDashboardResponse({}));
  }

  /**
   * Obtains data from dashboards.
   * 
   * @param request - GetDashboardRequest
   * @returns GetDashboardResponse
   */
  async getDashboard(gatewayId: string, request: $_model.GetDashboardRequest): Promise<$_model.GetDashboardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDashboardWithOptions(gatewayId, request, headers, runtime);
  }

  /**
   * Queries the information about a domain name.
   * 
   * @param request - GetDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDomainResponse
   */
  async getDomainWithOptions(domainId: string, request: $_model.GetDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDomainResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.withStatistics)) {
      query["withStatistics"] = request.withStatistics;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDomain",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/domains/${$dara.URL.percentEncode(domainId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDomainResponse>(await this.callApi(params, req, runtime), new $_model.GetDomainResponse({}));
  }

  /**
   * Queries the information about a domain name.
   * 
   * @param request - GetDomainRequest
   * @returns GetDomainResponse
   */
  async getDomain(domainId: string, request: $_model.GetDomainRequest): Promise<$_model.GetDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDomainWithOptions(domainId, request, headers, runtime);
  }

  /**
   * GetEnvironment
   * 
   * @deprecated OpenAPI GetEnvironment is deprecated
   * 
   * @param request - GetEnvironmentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEnvironmentResponse
   */
  async getEnvironmentWithOptions(environmentId: string, request: $_model.GetEnvironmentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEnvironmentResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.withStatistics)) {
      query["withStatistics"] = request.withStatistics;
    }

    if (!$dara.isNull(request.withVpcInfo)) {
      query["withVpcInfo"] = request.withVpcInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEnvironment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/environments/${$dara.URL.percentEncode(environmentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEnvironmentResponse>(await this.callApi(params, req, runtime), new $_model.GetEnvironmentResponse({}));
  }

  /**
   * GetEnvironment
   * 
   * @deprecated OpenAPI GetEnvironment is deprecated
   * 
   * @param request - GetEnvironmentRequest
   * @returns GetEnvironmentResponse
   */
  // Deprecated
  async getEnvironment(environmentId: string, request: $_model.GetEnvironmentRequest): Promise<$_model.GetEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEnvironmentWithOptions(environmentId, request, headers, runtime);
  }

  /**
   * Queries the basic information about an instance, such as the virtual private cloud (VPC) and vSwitch to which the instance belongs and its ingress.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGatewayResponse
   */
  async getGatewayWithOptions(gatewayId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetGatewayResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGateway",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGatewayResponse>(await this.callApi(params, req, runtime), new $_model.GetGatewayResponse({}));
  }

  /**
   * Queries the basic information about an instance, such as the virtual private cloud (VPC) and vSwitch to which the instance belongs and its ingress.
   * @returns GetGatewayResponse
   */
  async getGateway(gatewayId: string): Promise<$_model.GetGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGatewayWithOptions(gatewayId, headers, runtime);
  }

  /**
   * Read HttpApi
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHttpApiResponse
   */
  async getHttpApiWithOptions(httpApiId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetHttpApiResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHttpApiResponse>(await this.callApi(params, req, runtime), new $_model.GetHttpApiResponse({}));
  }

  /**
   * Read HttpApi
   * @returns GetHttpApiResponse
   */
  async getHttpApi(httpApiId: string): Promise<$_model.GetHttpApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHttpApiWithOptions(httpApiId, headers, runtime);
  }

  /**
   * Get Operation
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHttpApiOperationResponse
   */
  async getHttpApiOperationWithOptions(httpApiId: string, operationId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetHttpApiOperationResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHttpApiOperation",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/operations/${$dara.URL.percentEncode(operationId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHttpApiOperationResponse>(await this.callApi(params, req, runtime), new $_model.GetHttpApiOperationResponse({}));
  }

  /**
   * Get Operation
   * @returns GetHttpApiOperationResponse
   */
  async getHttpApiOperation(httpApiId: string, operationId: string): Promise<$_model.GetHttpApiOperationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHttpApiOperationWithOptions(httpApiId, operationId, headers, runtime);
  }

  /**
   * Queries the details of a route of an HTTP API.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHttpApiRouteResponse
   */
  async getHttpApiRouteWithOptions(httpApiId: string, routeId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetHttpApiRouteResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHttpApiRoute",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/routes/${$dara.URL.percentEncode(routeId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHttpApiRouteResponse>(await this.callApi(params, req, runtime), new $_model.GetHttpApiRouteResponse({}));
  }

  /**
   * Queries the details of a route of an HTTP API.
   * @returns GetHttpApiRouteResponse
   */
  async getHttpApiRoute(httpApiId: string, routeId: string): Promise<$_model.GetHttpApiRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHttpApiRouteWithOptions(httpApiId, routeId, headers, runtime);
  }

  /**
   * GetPluginAttachment。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPluginAttachmentResponse
   */
  async getPluginAttachmentWithOptions(pluginAttachmentId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPluginAttachmentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPluginAttachment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/plugin-attachments/${$dara.URL.percentEncode(pluginAttachmentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPluginAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.GetPluginAttachmentResponse({}));
  }

  /**
   * GetPluginAttachment。
   * @returns GetPluginAttachmentResponse
   */
  async getPluginAttachment(pluginAttachmentId: string): Promise<$_model.GetPluginAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPluginAttachmentWithOptions(pluginAttachmentId, headers, runtime);
  }

  /**
   * Queries a policy.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPolicyResponse
   */
  async getPolicyWithOptions(policyId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPolicyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPolicy",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v2/policies/${$dara.URL.percentEncode(policyId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPolicyResponse>(await this.callApi(params, req, runtime), new $_model.GetPolicyResponse({}));
  }

  /**
   * Queries a policy.
   * @returns GetPolicyResponse
   */
  async getPolicy(policyId: string): Promise<$_model.GetPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPolicyWithOptions(policyId, headers, runtime);
  }

  /**
   * Query Policy Resource Attachment
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPolicyAttachmentResponse
   */
  async getPolicyAttachmentWithOptions(policyAttachmentId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPolicyAttachmentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPolicyAttachment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/policy-attachments/${$dara.URL.percentEncode(policyAttachmentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPolicyAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.GetPolicyAttachmentResponse({}));
  }

  /**
   * Query Policy Resource Attachment
   * @returns GetPolicyAttachmentResponse
   */
  async getPolicyAttachment(policyAttachmentId: string): Promise<$_model.GetPolicyAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPolicyAttachmentWithOptions(policyAttachmentId, headers, runtime);
  }

  /**
   * Get resource overview information
   * 
   * @param request - GetResourceOverviewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceOverviewResponse
   */
  async getResourceOverviewWithOptions(request: $_model.GetResourceOverviewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceOverviewResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayType)) {
      query["gatewayType"] = request.gatewayType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceOverview",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/overview/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceOverviewResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceOverviewResponse({}));
  }

  /**
   * Get resource overview information
   * 
   * @param request - GetResourceOverviewRequest
   * @returns GetResourceOverviewResponse
   */
  async getResourceOverview(request: $_model.GetResourceOverviewRequest): Promise<$_model.GetResourceOverviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceOverviewWithOptions(request, headers, runtime);
  }

  /**
   * Queries the details of a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceResponse
   */
  async getServiceWithOptions(serviceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetService",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/services/${$dara.URL.percentEncode(serviceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceResponse({}));
  }

  /**
   * Queries the details of a service.
   * @returns GetServiceResponse
   */
  async getService(serviceId: string): Promise<$_model.GetServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceWithOptions(serviceId, headers, runtime);
  }

  /**
   * Retrieve Tracing Configuration
   * 
   * @param request - GetTraceConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTraceConfigResponse
   */
  async getTraceConfigWithOptions(gatewayId: string, request: $_model.GetTraceConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTraceConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["acceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTraceConfig",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/trace`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTraceConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetTraceConfigResponse({}));
  }

  /**
   * Retrieve Tracing Configuration
   * 
   * @param request - GetTraceConfigRequest
   * @returns GetTraceConfigResponse
   */
  async getTraceConfig(gatewayId: string, request: $_model.GetTraceConfigRequest): Promise<$_model.GetTraceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTraceConfigWithOptions(gatewayId, request, headers, runtime);
  }

  /**
   * Imports HTTP APIs. You can call this operation to import OpenAPI 2.0 and OpenAPI 3.0.x definition files to create REST APIs.
   * 
   * @param request - ImportHttpApiRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportHttpApiResponse
   */
  async importHttpApiWithOptions(request: $_model.ImportHttpApiRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ImportHttpApiResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deployConfigs)) {
      body["deployConfigs"] = request.deployConfigs;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["dryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.mcpRouteId)) {
      body["mcpRouteId"] = request.mcpRouteId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.specContentBase64)) {
      body["specContentBase64"] = request.specContentBase64;
    }

    if (!$dara.isNull(request.specFileUrl)) {
      body["specFileUrl"] = request.specFileUrl;
    }

    if (!$dara.isNull(request.specOssConfig)) {
      body["specOssConfig"] = request.specOssConfig;
    }

    if (!$dara.isNull(request.strategy)) {
      body["strategy"] = request.strategy;
    }

    if (!$dara.isNull(request.targetHttpApiId)) {
      body["targetHttpApiId"] = request.targetHttpApiId;
    }

    if (!$dara.isNull(request.versionConfig)) {
      body["versionConfig"] = request.versionConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/import`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportHttpApiResponse>(await this.callApi(params, req, runtime), new $_model.ImportHttpApiResponse({}));
  }

  /**
   * Imports HTTP APIs. You can call this operation to import OpenAPI 2.0 and OpenAPI 3.0.x definition files to create REST APIs.
   * 
   * @param request - ImportHttpApiRequest
   * @returns ImportHttpApiResponse
   */
  async importHttpApi(request: $_model.ImportHttpApiRequest): Promise<$_model.ImportHttpApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.importHttpApiWithOptions(request, headers, runtime);
  }

  /**
   * 查询消费者列表
   * 
   * @param request - ListConsumersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConsumersResponse
   */
  async listConsumersWithOptions(request: $_model.ListConsumersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListConsumersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayType)) {
      query["gatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.nameLike)) {
      query["nameLike"] = request.nameLike;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConsumers",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConsumersResponse>(await this.callApi(params, req, runtime), new $_model.ListConsumersResponse({}));
  }

  /**
   * 查询消费者列表
   * 
   * @param request - ListConsumersRequest
   * @returns ListConsumersResponse
   */
  async listConsumers(request: $_model.ListConsumersRequest): Promise<$_model.ListConsumersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConsumersWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of domain names.
   * 
   * @param request - ListDomainsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDomainsResponse
   */
  async listDomainsWithOptions(request: $_model.ListDomainsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDomainsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayType)) {
      query["gatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.nameLike)) {
      query["nameLike"] = request.nameLike;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDomains",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/domains`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDomainsResponse>(await this.callApi(params, req, runtime), new $_model.ListDomainsResponse({}));
  }

  /**
   * Queries a list of domain names.
   * 
   * @param request - ListDomainsRequest
   * @returns ListDomainsResponse
   */
  async listDomains(request: $_model.ListDomainsRequest): Promise<$_model.ListDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDomainsWithOptions(request, headers, runtime);
  }

  /**
   * ListEnvironments
   * 
   * @deprecated OpenAPI ListEnvironments is deprecated
   * 
   * @param request - ListEnvironmentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnvironmentsResponse
   */
  async listEnvironmentsWithOptions(request: $_model.ListEnvironmentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListEnvironmentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliasLike)) {
      query["aliasLike"] = request.aliasLike;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayNameLike)) {
      query["gatewayNameLike"] = request.gatewayNameLike;
    }

    if (!$dara.isNull(request.gatewayType)) {
      query["gatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.nameLike)) {
      query["nameLike"] = request.nameLike;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEnvironments",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/environments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEnvironmentsResponse>(await this.callApi(params, req, runtime), new $_model.ListEnvironmentsResponse({}));
  }

  /**
   * ListEnvironments
   * 
   * @deprecated OpenAPI ListEnvironments is deprecated
   * 
   * @param request - ListEnvironmentsRequest
   * @returns ListEnvironmentsResponse
   */
  // Deprecated
  async listEnvironments(request: $_model.ListEnvironmentsRequest): Promise<$_model.ListEnvironmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEnvironmentsWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of instances.
   * 
   * @param tmpReq - ListGatewaysRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewaysResponse
   */
  async listGatewaysWithOptions(tmpReq: $_model.ListGatewaysRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListGatewaysResponse> {
    tmpReq.validate();
    let request = new $_model.ListGatewaysShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayType)) {
      query["gatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGateways",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGatewaysResponse>(await this.callApi(params, req, runtime), new $_model.ListGatewaysResponse({}));
  }

  /**
   * Queries a list of instances.
   * 
   * @param request - ListGatewaysRequest
   * @returns ListGatewaysResponse
   */
  async listGateways(request: $_model.ListGatewaysRequest): Promise<$_model.ListGatewaysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGatewaysWithOptions(request, headers, runtime);
  }

  /**
   * List Operations
   * 
   * @param request - ListHttpApiOperationsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHttpApiOperationsResponse
   */
  async listHttpApiOperationsWithOptions(httpApiId: string, request: $_model.ListHttpApiOperationsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListHttpApiOperationsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.consumerAuthorizationRuleId)) {
      query["consumerAuthorizationRuleId"] = request.consumerAuthorizationRuleId;
    }

    if (!$dara.isNull(request.forDeploy)) {
      query["forDeploy"] = request.forDeploy;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.method)) {
      query["method"] = request.method;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.nameLike)) {
      query["nameLike"] = request.nameLike;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pathLike)) {
      query["pathLike"] = request.pathLike;
    }

    if (!$dara.isNull(request.withConsumerInEnvironmentId)) {
      query["withConsumerInEnvironmentId"] = request.withConsumerInEnvironmentId;
    }

    if (!$dara.isNull(request.withConsumerInfoById)) {
      query["withConsumerInfoById"] = request.withConsumerInfoById;
    }

    if (!$dara.isNull(request.withPluginAttachmentByPluginId)) {
      query["withPluginAttachmentByPluginId"] = request.withPluginAttachmentByPluginId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHttpApiOperations",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/operations`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHttpApiOperationsResponse>(await this.callApi(params, req, runtime), new $_model.ListHttpApiOperationsResponse({}));
  }

  /**
   * List Operations
   * 
   * @param request - ListHttpApiOperationsRequest
   * @returns ListHttpApiOperationsResponse
   */
  async listHttpApiOperations(httpApiId: string, request: $_model.ListHttpApiOperationsRequest): Promise<$_model.ListHttpApiOperationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listHttpApiOperationsWithOptions(httpApiId, request, headers, runtime);
  }

  /**
   * Queries the routes of an HTTP API.
   * 
   * @param request - ListHttpApiRoutesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHttpApiRoutesResponse
   */
  async listHttpApiRoutesWithOptions(httpApiId: string, request: $_model.ListHttpApiRoutesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListHttpApiRoutesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.consumerAuthorizationRuleId)) {
      query["consumerAuthorizationRuleId"] = request.consumerAuthorizationRuleId;
    }

    if (!$dara.isNull(request.deployStatuses)) {
      query["deployStatuses"] = request.deployStatuses;
    }

    if (!$dara.isNull(request.domainId)) {
      query["domainId"] = request.domainId;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.forDeploy)) {
      query["forDeploy"] = request.forDeploy;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.nameLike)) {
      query["nameLike"] = request.nameLike;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pathLike)) {
      query["pathLike"] = request.pathLike;
    }

    if (!$dara.isNull(request.withAuthPolicyInfo)) {
      query["withAuthPolicyInfo"] = request.withAuthPolicyInfo;
    }

    if (!$dara.isNull(request.withConsumerInfoById)) {
      query["withConsumerInfoById"] = request.withConsumerInfoById;
    }

    if (!$dara.isNull(request.withPluginAttachmentByPluginId)) {
      query["withPluginAttachmentByPluginId"] = request.withPluginAttachmentByPluginId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHttpApiRoutes",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/routes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHttpApiRoutesResponse>(await this.callApi(params, req, runtime), new $_model.ListHttpApiRoutesResponse({}));
  }

  /**
   * Queries the routes of an HTTP API.
   * 
   * @param request - ListHttpApiRoutesRequest
   * @returns ListHttpApiRoutesResponse
   */
  async listHttpApiRoutes(httpApiId: string, request: $_model.ListHttpApiRoutesRequest): Promise<$_model.ListHttpApiRoutesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listHttpApiRoutesWithOptions(httpApiId, request, headers, runtime);
  }

  /**
   * Queries a list of HTTP APIs.
   * 
   * @param request - ListHttpApisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHttpApisResponse
   */
  async listHttpApisWithOptions(request: $_model.ListHttpApisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListHttpApisResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayType)) {
      query["gatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.types)) {
      query["types"] = request.types;
    }

    if (!$dara.isNull(request.withAPIsPublishedToEnvironment)) {
      query["withAPIsPublishedToEnvironment"] = request.withAPIsPublishedToEnvironment;
    }

    if (!$dara.isNull(request.withAuthPolicyInEnvironmentId)) {
      query["withAuthPolicyInEnvironmentId"] = request.withAuthPolicyInEnvironmentId;
    }

    if (!$dara.isNull(request.withAuthPolicyList)) {
      query["withAuthPolicyList"] = request.withAuthPolicyList;
    }

    if (!$dara.isNull(request.withConsumerInfoById)) {
      query["withConsumerInfoById"] = request.withConsumerInfoById;
    }

    if (!$dara.isNull(request.withEnvironmentInfo)) {
      query["withEnvironmentInfo"] = request.withEnvironmentInfo;
    }

    if (!$dara.isNull(request.withEnvironmentInfoById)) {
      query["withEnvironmentInfoById"] = request.withEnvironmentInfoById;
    }

    if (!$dara.isNull(request.withIngressInfo)) {
      query["withIngressInfo"] = request.withIngressInfo;
    }

    if (!$dara.isNull(request.withPluginAttachmentByPluginId)) {
      query["withPluginAttachmentByPluginId"] = request.withPluginAttachmentByPluginId;
    }

    if (!$dara.isNull(request.withPolicyConfigs)) {
      query["withPolicyConfigs"] = request.withPolicyConfigs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHttpApis",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHttpApisResponse>(await this.callApi(params, req, runtime), new $_model.ListHttpApisResponse({}));
  }

  /**
   * Queries a list of HTTP APIs.
   * 
   * @param request - ListHttpApisRequest
   * @returns ListHttpApisResponse
   */
  async listHttpApis(request: $_model.ListHttpApisRequest): Promise<$_model.ListHttpApisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listHttpApisWithOptions(request, headers, runtime);
  }

  /**
   * 获取挂载列表
   * 
   * @param request - ListPluginAttachmentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPluginAttachmentsResponse
   */
  async listPluginAttachmentsWithOptions(request: $_model.ListPluginAttachmentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPluginAttachmentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attachResourceId)) {
      query["attachResourceId"] = request.attachResourceId;
    }

    if (!$dara.isNull(request.attachResourceType)) {
      query["attachResourceType"] = request.attachResourceType;
    }

    if (!$dara.isNull(request.attachResourceTypes)) {
      query["attachResourceTypes"] = request.attachResourceTypes;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["pluginId"] = request.pluginId;
    }

    if (!$dara.isNull(request.withParentResource)) {
      query["withParentResource"] = request.withParentResource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPluginAttachments",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/plugin-attachments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPluginAttachmentsResponse>(await this.callApi(params, req, runtime), new $_model.ListPluginAttachmentsResponse({}));
  }

  /**
   * 获取挂载列表
   * 
   * @param request - ListPluginAttachmentsRequest
   * @returns ListPluginAttachmentsResponse
   */
  async listPluginAttachments(request: $_model.ListPluginAttachmentsRequest): Promise<$_model.ListPluginAttachmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPluginAttachmentsWithOptions(request, headers, runtime);
  }

  /**
   * ListPlugins
   * 
   * @param request - ListPluginsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPluginsResponse
   */
  async listPluginsWithOptions(request: $_model.ListPluginsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPluginsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attachResourceId)) {
      query["attachResourceId"] = request.attachResourceId;
    }

    if (!$dara.isNull(request.attachResourceType)) {
      query["attachResourceType"] = request.attachResourceType;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayType)) {
      query["gatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.includeBuiltinAiGateway)) {
      query["includeBuiltinAiGateway"] = request.includeBuiltinAiGateway;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pluginClassId)) {
      query["pluginClassId"] = request.pluginClassId;
    }

    if (!$dara.isNull(request.pluginClassName)) {
      query["pluginClassName"] = request.pluginClassName;
    }

    if (!$dara.isNull(request.withAttachmentInfo)) {
      query["withAttachmentInfo"] = request.withAttachmentInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPlugins",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/plugins`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPluginsResponse>(await this.callApi(params, req, runtime), new $_model.ListPluginsResponse({}));
  }

  /**
   * ListPlugins
   * 
   * @param request - ListPluginsRequest
   * @returns ListPluginsResponse
   */
  async listPlugins(request: $_model.ListPluginsRequest): Promise<$_model.ListPluginsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPluginsWithOptions(request, headers, runtime);
  }

  /**
   * ListPolicies
   * 
   * @param request - ListPoliciesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPoliciesResponse
   */
  async listPoliciesWithOptions(request: $_model.ListPoliciesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPoliciesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attachResourceId)) {
      query["attachResourceId"] = request.attachResourceId;
    }

    if (!$dara.isNull(request.attachResourceType)) {
      query["attachResourceType"] = request.attachResourceType;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.withAttachments)) {
      query["withAttachments"] = request.withAttachments;
    }

    if (!$dara.isNull(request.withSystemPolicy)) {
      query["withSystemPolicy"] = request.withSystemPolicy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicies",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/policies`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListPoliciesResponse({}));
  }

  /**
   * ListPolicies
   * 
   * @param request - ListPoliciesRequest
   * @returns ListPoliciesResponse
   */
  async listPolicies(request: $_model.ListPoliciesRequest): Promise<$_model.ListPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPoliciesWithOptions(request, headers, runtime);
  }

  /**
   * ListPolicyClasses
   * 
   * @param request - ListPolicyClassesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicyClassesResponse
   */
  async listPolicyClassesWithOptions(request: $_model.ListPolicyClassesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPolicyClassesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attachResourceId)) {
      query["attachResourceId"] = request.attachResourceId;
    }

    if (!$dara.isNull(request.attachResourceType)) {
      query["attachResourceType"] = request.attachResourceType;
    }

    if (!$dara.isNull(request.direction)) {
      query["direction"] = request.direction;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicyClasses",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/policy-classes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPolicyClassesResponse>(await this.callApi(params, req, runtime), new $_model.ListPolicyClassesResponse({}));
  }

  /**
   * ListPolicyClasses
   * 
   * @param request - ListPolicyClassesRequest
   * @returns ListPolicyClassesResponse
   */
  async listPolicyClasses(request: $_model.ListPolicyClassesRequest): Promise<$_model.ListPolicyClassesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPolicyClassesWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of services.
   * 
   * @param request - ListServicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServicesResponse
   */
  async listServicesWithOptions(request: $_model.ListServicesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListServicesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["sourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.sourceTypes)) {
      query["sourceTypes"] = request.sourceTypes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServices",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/services`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServicesResponse>(await this.callApi(params, req, runtime), new $_model.ListServicesResponse({}));
  }

  /**
   * Queries a list of services.
   * 
   * @param request - ListServicesRequest
   * @returns ListServicesResponse
   */
  async listServices(request: $_model.ListServicesRequest): Promise<$_model.ListServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServicesWithOptions(request, headers, runtime);
  }

  /**
   * ListSslCerts
   * 
   * @param request - ListSslCertsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSslCertsResponse
   */
  async listSslCertsWithOptions(request: $_model.ListSslCertsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSslCertsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.certNameLike)) {
      query["certNameLike"] = request.certNameLike;
    }

    if (!$dara.isNull(request.domainName)) {
      query["domainName"] = request.domainName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSslCerts",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/ssl/certs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSslCertsResponse>(await this.callApi(params, req, runtime), new $_model.ListSslCertsResponse({}));
  }

  /**
   * ListSslCerts
   * 
   * @param request - ListSslCertsRequest
   * @returns ListSslCertsResponse
   */
  async listSslCerts(request: $_model.ListSslCertsRequest): Promise<$_model.ListSslCertsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSslCertsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieve the availability zones under a cloud-native API gateway region
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListZonesResponse
   */
  async listZonesWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListZonesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListZones",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/zones`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListZonesResponse>(await this.callApi(params, req, runtime), new $_model.ListZonesResponse({}));
  }

  /**
   * Retrieve the availability zones under a cloud-native API gateway region
   * @returns ListZonesResponse
   */
  async listZones(): Promise<$_model.ListZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listZonesWithOptions(headers, runtime);
  }

  /**
   * Queries a list of consumer authentication rules.
   * 
   * @param request - QueryConsumerAuthorizationRulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryConsumerAuthorizationRulesResponse
   */
  async queryConsumerAuthorizationRulesWithOptions(request: $_model.QueryConsumerAuthorizationRulesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryConsumerAuthorizationRulesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiNameLike)) {
      query["apiNameLike"] = request.apiNameLike;
    }

    if (!$dara.isNull(request.consumerId)) {
      query["consumerId"] = request.consumerId;
    }

    if (!$dara.isNull(request.consumerNameLike)) {
      query["consumerNameLike"] = request.consumerNameLike;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.groupByApi)) {
      query["groupByApi"] = request.groupByApi;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentResourceId)) {
      query["parentResourceId"] = request.parentResourceId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.resourceTypes)) {
      query["resourceTypes"] = request.resourceTypes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryConsumerAuthorizationRules",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/authorization-rules`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryConsumerAuthorizationRulesResponse>(await this.callApi(params, req, runtime), new $_model.QueryConsumerAuthorizationRulesResponse({}));
  }

  /**
   * Queries a list of consumer authentication rules.
   * 
   * @param request - QueryConsumerAuthorizationRulesRequest
   * @returns QueryConsumerAuthorizationRulesResponse
   */
  async queryConsumerAuthorizationRules(request: $_model.QueryConsumerAuthorizationRulesRequest): Promise<$_model.QueryConsumerAuthorizationRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryConsumerAuthorizationRulesWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a consumer authorization rule.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveConsumerAuthorizationRuleResponse
   */
  async removeConsumerAuthorizationRuleWithOptions(consumerAuthorizationRuleId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveConsumerAuthorizationRuleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveConsumerAuthorizationRule",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/authorization-rules/${$dara.URL.percentEncode(consumerAuthorizationRuleId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveConsumerAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.RemoveConsumerAuthorizationRuleResponse({}));
  }

  /**
   * Deletes a consumer authorization rule.
   * @returns RemoveConsumerAuthorizationRuleResponse
   */
  async removeConsumerAuthorizationRule(consumerAuthorizationRuleId: string): Promise<$_model.RemoveConsumerAuthorizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeConsumerAuthorizationRuleWithOptions(consumerAuthorizationRuleId, headers, runtime);
  }

  /**
   * Gateway Restart
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartGatewayResponse
   */
  async restartGatewayWithOptions(gatewayId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RestartGatewayResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartGateway",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/restart`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartGatewayResponse>(await this.callApi(params, req, runtime), new $_model.RestartGatewayResponse({}));
  }

  /**
   * Gateway Restart
   * @returns RestartGatewayResponse
   */
  async restartGateway(gatewayId: string): Promise<$_model.RestartGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartGatewayWithOptions(gatewayId, headers, runtime);
  }

  /**
   * 取消部署HttpApi
   * 
   * @param request - UndeployHttpApiRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UndeployHttpApiResponse
   */
  async undeployHttpApiWithOptions(httpApiId: string, request: $_model.UndeployHttpApiRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UndeployHttpApiResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environmentId)) {
      body["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.gatewayId)) {
      body["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.operationId)) {
      body["operationId"] = request.operationId;
    }

    if (!$dara.isNull(request.routeId)) {
      body["routeId"] = request.routeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UndeployHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/undeploy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UndeployHttpApiResponse>(await this.callApi(params, req, runtime), new $_model.UndeployHttpApiResponse({}));
  }

  /**
   * 取消部署HttpApi
   * 
   * @param request - UndeployHttpApiRequest
   * @returns UndeployHttpApiResponse
   */
  async undeployHttpApi(httpApiId: string, request: $_model.UndeployHttpApiRequest): Promise<$_model.UndeployHttpApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.undeployHttpApiWithOptions(httpApiId, request, headers, runtime);
  }

  /**
   * UpdateAndAttachPolicy
   * 
   * @param request - UpdateAndAttachPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAndAttachPolicyResponse
   */
  async updateAndAttachPolicyWithOptions(policyId: string, request: $_model.UpdateAndAttachPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAndAttachPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attachResourceIds)) {
      body["attachResourceIds"] = request.attachResourceIds;
    }

    if (!$dara.isNull(request.attachResourceType)) {
      body["attachResourceType"] = request.attachResourceType;
    }

    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.environmentId)) {
      body["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.gatewayId)) {
      body["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAndAttachPolicy",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/policies/${$dara.URL.percentEncode(policyId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAndAttachPolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAndAttachPolicyResponse({}));
  }

  /**
   * UpdateAndAttachPolicy
   * 
   * @param request - UpdateAndAttachPolicyRequest
   * @returns UpdateAndAttachPolicyResponse
   */
  async updateAndAttachPolicy(policyId: string, request: $_model.UpdateAndAttachPolicyRequest): Promise<$_model.UpdateAndAttachPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAndAttachPolicyWithOptions(policyId, request, headers, runtime);
  }

  /**
   * 更新消费者
   * 
   * @param request - UpdateConsumerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConsumerResponse
   */
  async updateConsumerWithOptions(consumerId: string, request: $_model.UpdateConsumerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConsumerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.akSkIdentityConfigs)) {
      body["akSkIdentityConfigs"] = request.akSkIdentityConfigs;
    }

    if (!$dara.isNull(request.apikeyIdentityConfig)) {
      body["apikeyIdentityConfig"] = request.apikeyIdentityConfig;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.enable)) {
      body["enable"] = request.enable;
    }

    if (!$dara.isNull(request.jwtIdentityConfig)) {
      body["jwtIdentityConfig"] = request.jwtIdentityConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConsumer",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumers/${$dara.URL.percentEncode(consumerId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConsumerResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConsumerResponse({}));
  }

  /**
   * 更新消费者
   * 
   * @param request - UpdateConsumerRequest
   * @returns UpdateConsumerResponse
   */
  async updateConsumer(consumerId: string, request: $_model.UpdateConsumerRequest): Promise<$_model.UpdateConsumerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConsumerWithOptions(consumerId, request, headers, runtime);
  }

  /**
   * 更新消费者授权规则
   * 
   * @param request - UpdateConsumerAuthorizationRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConsumerAuthorizationRuleResponse
   */
  async updateConsumerAuthorizationRuleWithOptions(consumerId: string, consumerAuthorizationRuleId: string, request: $_model.UpdateConsumerAuthorizationRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConsumerAuthorizationRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authorizationResourceInfos)) {
      body["authorizationResourceInfos"] = request.authorizationResourceInfos;
    }

    if (!$dara.isNull(request.expireMode)) {
      body["expireMode"] = request.expireMode;
    }

    if (!$dara.isNull(request.expireTimestamp)) {
      body["expireTimestamp"] = request.expireTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConsumerAuthorizationRule",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumers/${$dara.URL.percentEncode(consumerId)}/authorization-rules/${$dara.URL.percentEncode(consumerAuthorizationRuleId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConsumerAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConsumerAuthorizationRuleResponse({}));
  }

  /**
   * 更新消费者授权规则
   * 
   * @param request - UpdateConsumerAuthorizationRuleRequest
   * @returns UpdateConsumerAuthorizationRuleResponse
   */
  async updateConsumerAuthorizationRule(consumerId: string, consumerAuthorizationRuleId: string, request: $_model.UpdateConsumerAuthorizationRuleRequest): Promise<$_model.UpdateConsumerAuthorizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConsumerAuthorizationRuleWithOptions(consumerId, consumerAuthorizationRuleId, request, headers, runtime);
  }

  /**
   * Updates a domain name.
   * 
   * @param request - UpdateDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDomainResponse
   */
  async updateDomainWithOptions(domainId: string, request: $_model.UpdateDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDomainResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.caCertIdentifier)) {
      body["caCertIdentifier"] = request.caCertIdentifier;
    }

    if (!$dara.isNull(request.certIdentifier)) {
      body["certIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.clientCACert)) {
      body["clientCACert"] = request.clientCACert;
    }

    if (!$dara.isNull(request.forceHttps)) {
      body["forceHttps"] = request.forceHttps;
    }

    if (!$dara.isNull(request.http2Option)) {
      body["http2Option"] = request.http2Option;
    }

    if (!$dara.isNull(request.mTLSEnabled)) {
      body["mTLSEnabled"] = request.mTLSEnabled;
    }

    if (!$dara.isNull(request.protocol)) {
      body["protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.tlsCipherSuitesConfig)) {
      body["tlsCipherSuitesConfig"] = request.tlsCipherSuitesConfig;
    }

    if (!$dara.isNull(request.tlsMax)) {
      body["tlsMax"] = request.tlsMax;
    }

    if (!$dara.isNull(request.tlsMin)) {
      body["tlsMin"] = request.tlsMin;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDomain",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/domains/${$dara.URL.percentEncode(domainId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDomainResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDomainResponse({}));
  }

  /**
   * Updates a domain name.
   * 
   * @param request - UpdateDomainRequest
   * @returns UpdateDomainResponse
   */
  async updateDomain(domainId: string, request: $_model.UpdateDomainRequest): Promise<$_model.UpdateDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDomainWithOptions(domainId, request, headers, runtime);
  }

  /**
   * UpdateEnvironment
   * 
   * @deprecated OpenAPI UpdateEnvironment is deprecated
   * 
   * @param request - UpdateEnvironmentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEnvironmentResponse
   */
  async updateEnvironmentWithOptions(environmentId: string, request: $_model.UpdateEnvironmentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEnvironmentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alias)) {
      body["alias"] = request.alias;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEnvironment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/environments/${$dara.URL.percentEncode(environmentId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEnvironmentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEnvironmentResponse({}));
  }

  /**
   * UpdateEnvironment
   * 
   * @deprecated OpenAPI UpdateEnvironment is deprecated
   * 
   * @param request - UpdateEnvironmentRequest
   * @returns UpdateEnvironmentResponse
   */
  // Deprecated
  async updateEnvironment(environmentId: string, request: $_model.UpdateEnvironmentRequest): Promise<$_model.UpdateEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateEnvironmentWithOptions(environmentId, request, headers, runtime);
  }

  /**
   * Get the feature configuration of the gateway
   * 
   * @param request - UpdateGatewayFeatureRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayFeatureResponse
   */
  async updateGatewayFeatureWithOptions(gatewayId: string, name: string, request: $_model.UpdateGatewayFeatureRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayFeatureResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.value)) {
      body["value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayFeature",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/gateway-features/${$dara.URL.percentEncode(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayFeatureResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayFeatureResponse({}));
  }

  /**
   * Get the feature configuration of the gateway
   * 
   * @param request - UpdateGatewayFeatureRequest
   * @returns UpdateGatewayFeatureResponse
   */
  async updateGatewayFeature(gatewayId: string, name: string, request: $_model.UpdateGatewayFeatureRequest): Promise<$_model.UpdateGatewayFeatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGatewayFeatureWithOptions(gatewayId, name, request, headers, runtime);
  }

  /**
   * Change the name of a gateway instance
   * 
   * @param request - UpdateGatewayNameRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayNameResponse
   */
  async updateGatewayNameWithOptions(gatewayId: string, request: $_model.UpdateGatewayNameRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayNameResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayName",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/name`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayNameResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayNameResponse({}));
  }

  /**
   * Change the name of a gateway instance
   * 
   * @param request - UpdateGatewayNameRequest
   * @returns UpdateGatewayNameResponse
   */
  async updateGatewayName(gatewayId: string, request: $_model.UpdateGatewayNameRequest): Promise<$_model.UpdateGatewayNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGatewayNameWithOptions(gatewayId, request, headers, runtime);
  }

  /**
   * Updates an HTTP API.
   * 
   * @param request - UpdateHttpApiRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHttpApiResponse
   */
  async updateHttpApiWithOptions(httpApiId: string, request: $_model.UpdateHttpApiRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateHttpApiResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentProtocols)) {
      body["agentProtocols"] = request.agentProtocols;
    }

    if (!$dara.isNull(request.aiProtocols)) {
      body["aiProtocols"] = request.aiProtocols;
    }

    if (!$dara.isNull(request.authConfig)) {
      body["authConfig"] = request.authConfig;
    }

    if (!$dara.isNull(request.basePath)) {
      body["basePath"] = request.basePath;
    }

    if (!$dara.isNull(request.deployConfigs)) {
      body["deployConfigs"] = request.deployConfigs;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.enableAuth)) {
      body["enableAuth"] = request.enableAuth;
    }

    if (!$dara.isNull(request.ingressConfig)) {
      body["ingressConfig"] = request.ingressConfig;
    }

    if (!$dara.isNull(request.onlyChangeConfig)) {
      body["onlyChangeConfig"] = request.onlyChangeConfig;
    }

    if (!$dara.isNull(request.protocols)) {
      body["protocols"] = request.protocols;
    }

    if (!$dara.isNull(request.removeBasePathOnForward)) {
      body["removeBasePathOnForward"] = request.removeBasePathOnForward;
    }

    if (!$dara.isNull(request.versionConfig)) {
      body["versionConfig"] = request.versionConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateHttpApiResponse>(await this.callApi(params, req, runtime), new $_model.UpdateHttpApiResponse({}));
  }

  /**
   * Updates an HTTP API.
   * 
   * @param request - UpdateHttpApiRequest
   * @returns UpdateHttpApiResponse
   */
  async updateHttpApi(httpApiId: string, request: $_model.UpdateHttpApiRequest): Promise<$_model.UpdateHttpApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateHttpApiWithOptions(httpApiId, request, headers, runtime);
  }

  /**
   * Update Operation
   * 
   * @param request - UpdateHttpApiOperationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHttpApiOperationResponse
   */
  async updateHttpApiOperationWithOptions(httpApiId: string, operationId: string, request: $_model.UpdateHttpApiOperationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateHttpApiOperationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.operation)) {
      body["operation"] = request.operation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHttpApiOperation",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/operations/${$dara.URL.percentEncode(operationId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateHttpApiOperationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateHttpApiOperationResponse({}));
  }

  /**
   * Update Operation
   * 
   * @param request - UpdateHttpApiOperationRequest
   * @returns UpdateHttpApiOperationResponse
   */
  async updateHttpApiOperation(httpApiId: string, operationId: string, request: $_model.UpdateHttpApiOperationRequest): Promise<$_model.UpdateHttpApiOperationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateHttpApiOperationWithOptions(httpApiId, operationId, request, headers, runtime);
  }

  /**
   * Updates the route of an HTTP API.
   * 
   * @param request - UpdateHttpApiRouteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHttpApiRouteResponse
   */
  async updateHttpApiRouteWithOptions(httpApiId: string, routeId: string, request: $_model.UpdateHttpApiRouteRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateHttpApiRouteResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.backendConfig)) {
      body["backendConfig"] = request.backendConfig;
    }

    if (!$dara.isNull(request.deployConfigs)) {
      body["deployConfigs"] = request.deployConfigs;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.domainIds)) {
      body["domainIds"] = request.domainIds;
    }

    if (!$dara.isNull(request.environmentId)) {
      body["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.match)) {
      body["match"] = request.match;
    }

    if (!$dara.isNull(request.mcpRouteConfig)) {
      body["mcpRouteConfig"] = request.mcpRouteConfig;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHttpApiRoute",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/routes/${$dara.URL.percentEncode(routeId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateHttpApiRouteResponse>(await this.callApi(params, req, runtime), new $_model.UpdateHttpApiRouteResponse({}));
  }

  /**
   * Updates the route of an HTTP API.
   * 
   * @param request - UpdateHttpApiRouteRequest
   * @returns UpdateHttpApiRouteResponse
   */
  async updateHttpApiRoute(httpApiId: string, routeId: string, request: $_model.UpdateHttpApiRouteRequest): Promise<$_model.UpdateHttpApiRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateHttpApiRouteWithOptions(httpApiId, routeId, request, headers, runtime);
  }

  /**
   * 更新挂载规则API
   * 
   * @param request - UpdatePluginAttachmentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePluginAttachmentResponse
   */
  async updatePluginAttachmentWithOptions(pluginAttachmentId: string, request: $_model.UpdatePluginAttachmentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePluginAttachmentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attachResourceIds)) {
      body["attachResourceIds"] = request.attachResourceIds;
    }

    if (!$dara.isNull(request.enable)) {
      body["enable"] = request.enable;
    }

    if (!$dara.isNull(request.pluginConfig)) {
      body["pluginConfig"] = request.pluginConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePluginAttachment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/plugin-attachments/${$dara.URL.percentEncode(pluginAttachmentId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePluginAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePluginAttachmentResponse({}));
  }

  /**
   * 更新挂载规则API
   * 
   * @param request - UpdatePluginAttachmentRequest
   * @returns UpdatePluginAttachmentResponse
   */
  async updatePluginAttachment(pluginAttachmentId: string, request: $_model.UpdatePluginAttachmentRequest): Promise<$_model.UpdatePluginAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePluginAttachmentWithOptions(pluginAttachmentId, request, headers, runtime);
  }

  /**
   * Update Policy
   * 
   * @param request - UpdatePolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePolicyResponse
   */
  async updatePolicyWithOptions(policyId: string, request: $_model.UpdatePolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePolicy",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v2/policies/${$dara.URL.percentEncode(policyId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePolicyResponse({}));
  }

  /**
   * Update Policy
   * 
   * @param request - UpdatePolicyRequest
   * @returns UpdatePolicyResponse
   */
  async updatePolicy(policyId: string, request: $_model.UpdatePolicyRequest): Promise<$_model.UpdatePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePolicyWithOptions(policyId, request, headers, runtime);
  }

  /**
   * Upgrade the gateway version
   * 
   * @param request - UpgradeGatewayRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeGatewayResponse
   */
  async upgradeGatewayWithOptions(gatewayId: string, request: $_model.UpgradeGatewayRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeGatewayResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeGateway",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/upgrade`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeGatewayResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeGatewayResponse({}));
  }

  /**
   * Upgrade the gateway version
   * 
   * @param request - UpgradeGatewayRequest
   * @returns UpgradeGatewayResponse
   */
  async upgradeGateway(gatewayId: string, request: $_model.UpgradeGatewayRequest): Promise<$_model.UpgradeGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeGatewayWithOptions(gatewayId, request, headers, runtime);
  }

}
