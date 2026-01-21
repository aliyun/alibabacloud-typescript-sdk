// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ddoscoo", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - AddAutoCcBlacklistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddAutoCcBlacklistResponse
   */
  async addAutoCcBlacklistWithOptions(request: $_model.AddAutoCcBlacklistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddAutoCcBlacklistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.blacklist)) {
      query["Blacklist"] = request.blacklist;
    }

    if (!$dara.isNull(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddAutoCcBlacklist",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddAutoCcBlacklistResponse>(await this.callApi(params, req, runtime), new $_model.AddAutoCcBlacklistResponse({}));
  }

  /**
   * @param request - AddAutoCcBlacklistRequest
   * @returns AddAutoCcBlacklistResponse
   */
  async addAutoCcBlacklist(request: $_model.AddAutoCcBlacklistRequest): Promise<$_model.AddAutoCcBlacklistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addAutoCcBlacklistWithOptions(request, runtime);
  }

  /**
   * Adds IP addresses to the IP address whitelist of an Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @remarks
   * You can call the AddAutoCcWhitelist operation to add IP addresses to the whitelist of an Anti-DDoS Pro or Anti-DDoS Premium instance. This way, the Anti-DDoS Pro or Anti-DDoS Premium instance allows traffic from the IP addresses.
   * By default, the traffic from the IP addresses that you add to the whitelist is always allowed. If you no longer use the whitelist, you can call the [EmptyAutoCcWhitelist](https://help.aliyun.com/document_detail/157505.html) operation to remove the IP addresses from the whitelist.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AddAutoCcWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddAutoCcWhitelistResponse
   */
  async addAutoCcWhitelistWithOptions(request: $_model.AddAutoCcWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddAutoCcWhitelistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.whitelist)) {
      query["Whitelist"] = request.whitelist;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddAutoCcWhitelist",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddAutoCcWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.AddAutoCcWhitelistResponse({}));
  }

  /**
   * Adds IP addresses to the IP address whitelist of an Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @remarks
   * You can call the AddAutoCcWhitelist operation to add IP addresses to the whitelist of an Anti-DDoS Pro or Anti-DDoS Premium instance. This way, the Anti-DDoS Pro or Anti-DDoS Premium instance allows traffic from the IP addresses.
   * By default, the traffic from the IP addresses that you add to the whitelist is always allowed. If you no longer use the whitelist, you can call the [EmptyAutoCcWhitelist](https://help.aliyun.com/document_detail/157505.html) operation to remove the IP addresses from the whitelist.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AddAutoCcWhitelistRequest
   * @returns AddAutoCcWhitelistResponse
   */
  async addAutoCcWhitelist(request: $_model.AddAutoCcWhitelistRequest): Promise<$_model.AddAutoCcWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addAutoCcWhitelistWithOptions(request, runtime);
  }

  /**
   * Associates an SSL certificate with the forwarding rule of a website.
   * 
   * @param request - AssociateWebCertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateWebCertResponse
   */
  async associateWebCertWithOptions(request: $_model.AssociateWebCertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateWebCertResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cert)) {
      body["Cert"] = request.cert;
    }

    if (!$dara.isNull(request.certId)) {
      body["CertId"] = request.certId;
    }

    if (!$dara.isNull(request.certIdentifier)) {
      body["CertIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.certName)) {
      body["CertName"] = request.certName;
    }

    if (!$dara.isNull(request.certRegion)) {
      body["CertRegion"] = request.certRegion;
    }

    if (!$dara.isNull(request.domain)) {
      body["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.key)) {
      body["Key"] = request.key;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateWebCert",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateWebCertResponse>(await this.callApi(params, req, runtime), new $_model.AssociateWebCertResponse({}));
  }

  /**
   * Associates an SSL certificate with the forwarding rule of a website.
   * 
   * @param request - AssociateWebCertRequest
   * @returns AssociateWebCertResponse
   */
  async associateWebCert(request: $_model.AssociateWebCertRequest): Promise<$_model.AssociateWebCertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateWebCertWithOptions(request, runtime);
  }

  /**
   * Adds an object to a scenario-specific custom policy for protection.
   * 
   * @param request - AttachSceneDefenseObjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachSceneDefenseObjectResponse
   */
  async attachSceneDefenseObjectWithOptions(request: $_model.AttachSceneDefenseObjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachSceneDefenseObjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!$dara.isNull(request.objects)) {
      query["Objects"] = request.objects;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachSceneDefenseObject",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachSceneDefenseObjectResponse>(await this.callApi(params, req, runtime), new $_model.AttachSceneDefenseObjectResponse({}));
  }

  /**
   * Adds an object to a scenario-specific custom policy for protection.
   * 
   * @param request - AttachSceneDefenseObjectRequest
   * @returns AttachSceneDefenseObjectResponse
   */
  async attachSceneDefenseObject(request: $_model.AttachSceneDefenseObjectRequest): Promise<$_model.AttachSceneDefenseObjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachSceneDefenseObjectWithOptions(request, runtime);
  }

  /**
   * Configures the global mitigation policy feature, including the feature status and settings.
   * 
   * @param request - ConfigDomainSecurityProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigDomainSecurityProfileResponse
   */
  async configDomainSecurityProfileWithOptions(request: $_model.ConfigDomainSecurityProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigDomainSecurityProfileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cluster)) {
      query["Cluster"] = request.cluster;
    }

    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigDomainSecurityProfile",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigDomainSecurityProfileResponse>(await this.callApi(params, req, runtime), new $_model.ConfigDomainSecurityProfileResponse({}));
  }

  /**
   * Configures the global mitigation policy feature, including the feature status and settings.
   * 
   * @param request - ConfigDomainSecurityProfileRequest
   * @returns ConfigDomainSecurityProfileResponse
   */
  async configDomainSecurityProfile(request: $_model.ConfigDomainSecurityProfileRequest): Promise<$_model.ConfigDomainSecurityProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configDomainSecurityProfileWithOptions(request, runtime);
  }

  /**
   * 配置全局模板规则
   * 
   * @param request - ConfigL7GlobalRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigL7GlobalRuleResponse
   */
  async configL7GlobalRuleWithOptions(request: $_model.ConfigL7GlobalRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigL7GlobalRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.ruleAttr)) {
      query["RuleAttr"] = request.ruleAttr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigL7GlobalRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigL7GlobalRuleResponse>(await this.callApi(params, req, runtime), new $_model.ConfigL7GlobalRuleResponse({}));
  }

  /**
   * 配置全局模板规则
   * 
   * @param request - ConfigL7GlobalRuleRequest
   * @returns ConfigL7GlobalRuleResponse
   */
  async configL7GlobalRule(request: $_model.ConfigL7GlobalRuleRequest): Promise<$_model.ConfigL7GlobalRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configL7GlobalRuleWithOptions(request, runtime);
  }

  /**
   * Configures a back-to-origin policy for the forwarding rule of a website.
   * 
   * @remarks
   * If multiple origin servers are configured for a website that is added to Anti-DDoS Pro or Anti-DDoS Premium, you can modify the load balancing algorithms for back-to-origin traffic based on back-to-origin policies. The IP hash algorithm is used by default. You can change the algorithm to the round-robin or least response time algorithm. For more information, see the description of the **Policy** parameter in the "Request parameters" section of this topic.
   * 
   * @param request - ConfigL7RsPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigL7RsPolicyResponse
   */
  async configL7RsPolicyWithOptions(request: $_model.ConfigL7RsPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigL7RsPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.upstreamRetry)) {
      query["UpstreamRetry"] = request.upstreamRetry;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigL7RsPolicy",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigL7RsPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ConfigL7RsPolicyResponse({}));
  }

  /**
   * Configures a back-to-origin policy for the forwarding rule of a website.
   * 
   * @remarks
   * If multiple origin servers are configured for a website that is added to Anti-DDoS Pro or Anti-DDoS Premium, you can modify the load balancing algorithms for back-to-origin traffic based on back-to-origin policies. The IP hash algorithm is used by default. You can change the algorithm to the round-robin or least response time algorithm. For more information, see the description of the **Policy** parameter in the "Request parameters" section of this topic.
   * 
   * @param request - ConfigL7RsPolicyRequest
   * @returns ConfigL7RsPolicyResponse
   */
  async configL7RsPolicy(request: $_model.ConfigL7RsPolicyRequest): Promise<$_model.ConfigL7RsPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configL7RsPolicyWithOptions(request, runtime);
  }

  /**
   * Configures the settings for back-to-origin persistent connections for a domain name.
   * 
   * @param request - ConfigL7UsKeepaliveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigL7UsKeepaliveResponse
   */
  async configL7UsKeepaliveWithOptions(request: $_model.ConfigL7UsKeepaliveRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigL7UsKeepaliveResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.downstreamKeepalive)) {
      query["DownstreamKeepalive"] = request.downstreamKeepalive;
    }

    if (!$dara.isNull(request.upstreamKeepalive)) {
      query["UpstreamKeepalive"] = request.upstreamKeepalive;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigL7UsKeepalive",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigL7UsKeepaliveResponse>(await this.callApi(params, req, runtime), new $_model.ConfigL7UsKeepaliveResponse({}));
  }

  /**
   * Configures the settings for back-to-origin persistent connections for a domain name.
   * 
   * @param request - ConfigL7UsKeepaliveRequest
   * @returns ConfigL7UsKeepaliveResponse
   */
  async configL7UsKeepalive(request: $_model.ConfigL7UsKeepaliveRequest): Promise<$_model.ConfigL7UsKeepaliveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configL7UsKeepaliveWithOptions(request, runtime);
  }

  /**
   * Specifies a threshold for the clean bandwidth of an Anti-DDoS Pro or Anti-DDoS premium instance. If the threshold is reached, rate limiting is triggered.
   * 
   * @param request - ConfigLayer4RealLimitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigLayer4RealLimitResponse
   */
  async configLayer4RealLimitWithOptions(request: $_model.ConfigLayer4RealLimitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigLayer4RealLimitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.limitValue)) {
      query["LimitValue"] = request.limitValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigLayer4RealLimit",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigLayer4RealLimitResponse>(await this.callApi(params, req, runtime), new $_model.ConfigLayer4RealLimitResponse({}));
  }

  /**
   * Specifies a threshold for the clean bandwidth of an Anti-DDoS Pro or Anti-DDoS premium instance. If the threshold is reached, rate limiting is triggered.
   * 
   * @param request - ConfigLayer4RealLimitRequest
   * @returns ConfigLayer4RealLimitResponse
   */
  async configLayer4RealLimit(request: $_model.ConfigLayer4RealLimitRequest): Promise<$_model.ConfigLayer4RealLimitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configLayer4RealLimitWithOptions(request, runtime);
  }

  /**
   * Adds a description to a port forwarding rule.
   * 
   * @param request - ConfigLayer4RemarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigLayer4RemarkResponse
   */
  async configLayer4RemarkWithOptions(request: $_model.ConfigLayer4RemarkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigLayer4RemarkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listeners)) {
      query["Listeners"] = request.listeners;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigLayer4Remark",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigLayer4RemarkResponse>(await this.callApi(params, req, runtime), new $_model.ConfigLayer4RemarkResponse({}));
  }

  /**
   * Adds a description to a port forwarding rule.
   * 
   * @param request - ConfigLayer4RemarkRequest
   * @returns ConfigLayer4RemarkResponse
   */
  async configLayer4Remark(request: $_model.ConfigLayer4RemarkRequest): Promise<$_model.ConfigLayer4RemarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configLayer4RemarkWithOptions(request, runtime);
  }

  /**
   * Enables or disables the origin redundancy mode for a port forwarding rule.
   * 
   * @param request - ConfigLayer4RuleBakModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigLayer4RuleBakModeResponse
   */
  async configLayer4RuleBakModeWithOptions(request: $_model.ConfigLayer4RuleBakModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigLayer4RuleBakModeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bakMode)) {
      query["BakMode"] = request.bakMode;
    }

    if (!$dara.isNull(request.listeners)) {
      query["Listeners"] = request.listeners;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigLayer4RuleBakMode",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigLayer4RuleBakModeResponse>(await this.callApi(params, req, runtime), new $_model.ConfigLayer4RuleBakModeResponse({}));
  }

  /**
   * Enables or disables the origin redundancy mode for a port forwarding rule.
   * 
   * @param request - ConfigLayer4RuleBakModeRequest
   * @returns ConfigLayer4RuleBakModeResponse
   */
  async configLayer4RuleBakMode(request: $_model.ConfigLayer4RuleBakModeRequest): Promise<$_model.ConfigLayer4RuleBakModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configLayer4RuleBakModeWithOptions(request, runtime);
  }

  /**
   * Configures the IP addresses of the primary and secondary origin servers for a port forwarding rule.
   * 
   * @param request - ConfigLayer4RulePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigLayer4RulePolicyResponse
   */
  async configLayer4RulePolicyWithOptions(request: $_model.ConfigLayer4RulePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigLayer4RulePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listeners)) {
      query["Listeners"] = request.listeners;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigLayer4RulePolicy",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigLayer4RulePolicyResponse>(await this.callApi(params, req, runtime), new $_model.ConfigLayer4RulePolicyResponse({}));
  }

  /**
   * Configures the IP addresses of the primary and secondary origin servers for a port forwarding rule.
   * 
   * @param request - ConfigLayer4RulePolicyRequest
   * @returns ConfigLayer4RulePolicyResponse
   */
  async configLayer4RulePolicy(request: $_model.ConfigLayer4RulePolicyRequest): Promise<$_model.ConfigLayer4RulePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configLayer4RulePolicyWithOptions(request, runtime);
  }

  /**
   * Configures blocked locations for an Anti-DDoS Proxy instance.
   * 
   * @param request - ConfigNetworkRegionBlockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigNetworkRegionBlockResponse
   */
  async configNetworkRegionBlockWithOptions(request: $_model.ConfigNetworkRegionBlockRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigNetworkRegionBlockResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigNetworkRegionBlock",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigNetworkRegionBlockResponse>(await this.callApi(params, req, runtime), new $_model.ConfigNetworkRegionBlockResponse({}));
  }

  /**
   * Configures blocked locations for an Anti-DDoS Proxy instance.
   * 
   * @param request - ConfigNetworkRegionBlockRequest
   * @returns ConfigNetworkRegionBlockResponse
   */
  async configNetworkRegionBlock(request: $_model.ConfigNetworkRegionBlockRequest): Promise<$_model.ConfigNetworkRegionBlockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configNetworkRegionBlockWithOptions(request, runtime);
  }

  /**
   * Modifies the IP addresses of the origin server that is configured in a port forwarding rule.
   * 
   * @param request - ConfigNetworkRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigNetworkRulesResponse
   */
  async configNetworkRulesWithOptions(request: $_model.ConfigNetworkRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigNetworkRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.networkRules)) {
      query["NetworkRules"] = request.networkRules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigNetworkRules",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigNetworkRulesResponse>(await this.callApi(params, req, runtime), new $_model.ConfigNetworkRulesResponse({}));
  }

  /**
   * Modifies the IP addresses of the origin server that is configured in a port forwarding rule.
   * 
   * @param request - ConfigNetworkRulesRequest
   * @returns ConfigNetworkRulesResponse
   */
  async configNetworkRules(request: $_model.ConfigNetworkRulesRequest): Promise<$_model.ConfigNetworkRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configNetworkRulesWithOptions(request, runtime);
  }

  /**
   * Adds the filtering policies for UDP reflection attacks on an Anti-DDoS Pro or Anti-DDoS Premium instance to filter out the source ports of UDP traffic.
   * 
   * @remarks
   * You can call this operation to configure filtering policies to filter out UDP traffic from specific ports. This helps defend against UDP reflection attacks.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ConfigUdpReflectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigUdpReflectResponse
   */
  async configUdpReflectWithOptions(request: $_model.ConfigUdpReflectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigUdpReflectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigUdpReflect",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigUdpReflectResponse>(await this.callApi(params, req, runtime), new $_model.ConfigUdpReflectResponse({}));
  }

  /**
   * Adds the filtering policies for UDP reflection attacks on an Anti-DDoS Pro or Anti-DDoS Premium instance to filter out the source ports of UDP traffic.
   * 
   * @remarks
   * You can call this operation to configure filtering policies to filter out UDP traffic from specific ports. This helps defend against UDP reflection attacks.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ConfigUdpReflectRequest
   * @returns ConfigUdpReflectResponse
   */
  async configUdpReflect(request: $_model.ConfigUdpReflectRequest): Promise<$_model.ConfigUdpReflectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configUdpReflectWithOptions(request, runtime);
  }

  /**
   * 配置新版基于匹配条件的cc规则
   * 
   * @param request - ConfigWebCCRuleV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigWebCCRuleV2Response
   */
  async configWebCCRuleV2WithOptions(request: $_model.ConfigWebCCRuleV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigWebCCRuleV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.expires)) {
      query["Expires"] = request.expires;
    }

    if (!$dara.isNull(request.ruleList)) {
      query["RuleList"] = request.ruleList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigWebCCRuleV2",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigWebCCRuleV2Response>(await this.callApi(params, req, runtime), new $_model.ConfigWebCCRuleV2Response({}));
  }

  /**
   * 配置新版基于匹配条件的cc规则
   * 
   * @param request - ConfigWebCCRuleV2Request
   * @returns ConfigWebCCRuleV2Response
   */
  async configWebCCRuleV2(request: $_model.ConfigWebCCRuleV2Request): Promise<$_model.ConfigWebCCRuleV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configWebCCRuleV2WithOptions(request, runtime);
  }

  /**
   * Configures the mode of the Frequency Control policy for a website.
   * 
   * @param request - ConfigWebCCTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigWebCCTemplateResponse
   */
  async configWebCCTemplateWithOptions(request: $_model.ConfigWebCCTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigWebCCTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.template)) {
      query["Template"] = request.template;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigWebCCTemplate",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigWebCCTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ConfigWebCCTemplateResponse({}));
  }

  /**
   * Configures the mode of the Frequency Control policy for a website.
   * 
   * @param request - ConfigWebCCTemplateRequest
   * @returns ConfigWebCCTemplateResponse
   */
  async configWebCCTemplate(request: $_model.ConfigWebCCTemplateRequest): Promise<$_model.ConfigWebCCTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configWebCCTemplateWithOptions(request, runtime);
  }

  /**
   * Configures the IP address whitelist and blacklist for a website.
   * 
   * @param request - ConfigWebIpSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigWebIpSetResponse
   */
  async configWebIpSetWithOptions(request: $_model.ConfigWebIpSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigWebIpSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.blackList)) {
      query["BlackList"] = request.blackList;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.whiteList)) {
      query["WhiteList"] = request.whiteList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigWebIpSet",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigWebIpSetResponse>(await this.callApi(params, req, runtime), new $_model.ConfigWebIpSetResponse({}));
  }

  /**
   * Configures the IP address whitelist and blacklist for a website.
   * 
   * @param request - ConfigWebIpSetRequest
   * @returns ConfigWebIpSetResponse
   */
  async configWebIpSet(request: $_model.ConfigWebIpSetRequest): Promise<$_model.ConfigWebIpSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configWebIpSetWithOptions(request, runtime);
  }

  /**
   * Creates an asynchronous export task to export forwarding rules for websites, port forwarding rules, session persistence and health check settings, DDoS mitigation policies, the IP address blacklist, or the IP address whitelist.
   * 
   * @param request - CreateAsyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAsyncTaskResponse
   */
  async createAsyncTaskWithOptions(request: $_model.CreateAsyncTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAsyncTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.taskParams)) {
      query["TaskParams"] = request.taskParams;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAsyncTask",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAsyncTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateAsyncTaskResponse({}));
  }

  /**
   * Creates an asynchronous export task to export forwarding rules for websites, port forwarding rules, session persistence and health check settings, DDoS mitigation policies, the IP address blacklist, or the IP address whitelist.
   * 
   * @param request - CreateAsyncTaskRequest
   * @returns CreateAsyncTaskResponse
   */
  async createAsyncTask(request: $_model.CreateAsyncTaskRequest): Promise<$_model.CreateAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAsyncTaskWithOptions(request, runtime);
  }

  /**
   * Creates a forwarding rule for a website.
   * 
   * @param request - CreateDomainResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDomainResourceResponse
   */
  async createDomainResourceWithOptions(request: $_model.CreateDomainResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDomainResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.httpsExt)) {
      query["HttpsExt"] = request.httpsExt;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.proxyTypes)) {
      query["ProxyTypes"] = request.proxyTypes;
    }

    if (!$dara.isNull(request.realServers)) {
      query["RealServers"] = request.realServers;
    }

    if (!$dara.isNull(request.rsType)) {
      query["RsType"] = request.rsType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDomainResource",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDomainResourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateDomainResourceResponse({}));
  }

  /**
   * Creates a forwarding rule for a website.
   * 
   * @param request - CreateDomainResourceRequest
   * @returns CreateDomainResourceResponse
   */
  async createDomainResource(request: $_model.CreateDomainResourceRequest): Promise<$_model.CreateDomainResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDomainResourceWithOptions(request, runtime);
  }

  /**
   * Creates a port forwarding rule.
   * 
   * @param request - CreateNetworkRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNetworkRulesResponse
   */
  async createNetworkRulesWithOptions(request: $_model.CreateNetworkRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNetworkRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.networkRules)) {
      query["NetworkRules"] = request.networkRules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNetworkRules",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNetworkRulesResponse>(await this.callApi(params, req, runtime), new $_model.CreateNetworkRulesResponse({}));
  }

  /**
   * Creates a port forwarding rule.
   * 
   * @param request - CreateNetworkRulesRequest
   * @returns CreateNetworkRulesResponse
   */
  async createNetworkRules(request: $_model.CreateNetworkRulesRequest): Promise<$_model.CreateNetworkRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNetworkRulesWithOptions(request, runtime);
  }

  /**
   * Creates a port forwarding rule.
   * 
   * @remarks
   * You can call this operation by using Terraform. For more information about Terraform, see [What is Terraform?](https://help.aliyun.com/document_detail/95820.html).
   * 
   * @param request - CreatePortRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePortResponse
   */
  async createPortWithOptions(request: $_model.CreatePortRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePortResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendPort)) {
      query["BackendPort"] = request.backendPort;
    }

    if (!$dara.isNull(request.frontendPort)) {
      query["FrontendPort"] = request.frontendPort;
    }

    if (!$dara.isNull(request.frontendProtocol)) {
      query["FrontendProtocol"] = request.frontendProtocol;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.proxyEnable)) {
      query["ProxyEnable"] = request.proxyEnable;
    }

    if (!$dara.isNull(request.realServers)) {
      query["RealServers"] = request.realServers;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePort",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePortResponse>(await this.callApi(params, req, runtime), new $_model.CreatePortResponse({}));
  }

  /**
   * Creates a port forwarding rule.
   * 
   * @remarks
   * You can call this operation by using Terraform. For more information about Terraform, see [What is Terraform?](https://help.aliyun.com/document_detail/95820.html).
   * 
   * @param request - CreatePortRequest
   * @returns CreatePortResponse
   */
  async createPort(request: $_model.CreatePortRequest): Promise<$_model.CreatePortResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPortWithOptions(request, runtime);
  }

  /**
   * Creates a scenario-specific custom policy.
   * 
   * @param request - CreateSceneDefensePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSceneDefensePolicyResponse
   */
  async createSceneDefensePolicyWithOptions(request: $_model.CreateSceneDefensePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSceneDefensePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.template)) {
      query["Template"] = request.template;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSceneDefensePolicy",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSceneDefensePolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateSceneDefensePolicyResponse({}));
  }

  /**
   * Creates a scenario-specific custom policy.
   * 
   * @param request - CreateSceneDefensePolicyRequest
   * @returns CreateSceneDefensePolicyResponse
   */
  async createSceneDefensePolicy(request: $_model.CreateSceneDefensePolicyRequest): Promise<$_model.CreateSceneDefensePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSceneDefensePolicyWithOptions(request, runtime);
  }

  /**
   * Creates a scheduling rule for Sec-Traffic Manager.
   * 
   * @param request - CreateSchedulerRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSchedulerRuleResponse
   */
  async createSchedulerRuleWithOptions(request: $_model.CreateSchedulerRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSchedulerRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.param)) {
      query["Param"] = request.param;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!$dara.isNull(request.rules)) {
      query["Rules"] = request.rules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSchedulerRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSchedulerRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateSchedulerRuleResponse({}));
  }

  /**
   * Creates a scheduling rule for Sec-Traffic Manager.
   * 
   * @param request - CreateSchedulerRuleRequest
   * @returns CreateSchedulerRuleResponse
   */
  async createSchedulerRule(request: $_model.CreateSchedulerRuleRequest): Promise<$_model.CreateSchedulerRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSchedulerRuleWithOptions(request, runtime);
  }

  /**
   * Adds tags to multiple Anti-DDoS Proxy instances at a time.
   * 
   * @remarks
   * You can call the CreateTagResources operation to add tags to multiple Anti-DDoS Proxy instances at a time.
   * ### [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTagResourcesResponse
   */
  async createTagResourcesWithOptions(request: $_model.CreateTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTagResources",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.CreateTagResourcesResponse({}));
  }

  /**
   * Adds tags to multiple Anti-DDoS Proxy instances at a time.
   * 
   * @remarks
   * You can call the CreateTagResources operation to add tags to multiple Anti-DDoS Proxy instances at a time.
   * ### [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateTagResourcesRequest
   * @returns CreateTagResourcesResponse
   */
  async createTagResources(request: $_model.CreateTagResourcesRequest): Promise<$_model.CreateTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTagResourcesWithOptions(request, runtime);
  }

  /**
   * Creates a custom frequency control rule for a website.
   * 
   * @deprecated OpenAPI CreateWebCCRule is deprecated, please use ddoscoo::2020-01-01::ConfigWebCCRuleV2 instead.
   * 
   * @param request - CreateWebCCRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWebCCRuleResponse
   */
  async createWebCCRuleWithOptions(request: $_model.CreateWebCCRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWebCCRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.act)) {
      query["Act"] = request.act;
    }

    if (!$dara.isNull(request.count)) {
      query["Count"] = request.count;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    if (!$dara.isNull(request.uri)) {
      query["Uri"] = request.uri;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWebCCRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWebCCRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateWebCCRuleResponse({}));
  }

  /**
   * Creates a custom frequency control rule for a website.
   * 
   * @deprecated OpenAPI CreateWebCCRule is deprecated, please use ddoscoo::2020-01-01::ConfigWebCCRuleV2 instead.
   * 
   * @param request - CreateWebCCRuleRequest
   * @returns CreateWebCCRuleResponse
   */
  // Deprecated
  async createWebCCRule(request: $_model.CreateWebCCRuleRequest): Promise<$_model.CreateWebCCRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWebCCRuleWithOptions(request, runtime);
  }

  /**
   * Creates a forwarding rule for a website.
   * 
   * @param request - CreateWebRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWebRuleResponse
   */
  async createWebRuleWithOptions(request: $_model.CreateWebRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWebRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.defenseId)) {
      query["DefenseId"] = request.defenseId;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.httpsExt)) {
      query["HttpsExt"] = request.httpsExt;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.rsType)) {
      query["RsType"] = request.rsType;
    }

    if (!$dara.isNull(request.rules)) {
      query["Rules"] = request.rules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWebRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWebRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateWebRuleResponse({}));
  }

  /**
   * Creates a forwarding rule for a website.
   * 
   * @param request - CreateWebRuleRequest
   * @returns CreateWebRuleResponse
   */
  async createWebRule(request: $_model.CreateWebRuleRequest): Promise<$_model.CreateWebRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWebRuleWithOptions(request, runtime);
  }

  /**
   * Deletes an asynchronous export task.
   * 
   * @param request - DeleteAsyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAsyncTaskResponse
   */
  async deleteAsyncTaskWithOptions(request: $_model.DeleteAsyncTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAsyncTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAsyncTask",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAsyncTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAsyncTaskResponse({}));
  }

  /**
   * Deletes an asynchronous export task.
   * 
   * @param request - DeleteAsyncTaskRequest
   * @returns DeleteAsyncTaskResponse
   */
  async deleteAsyncTask(request: $_model.DeleteAsyncTaskRequest): Promise<$_model.DeleteAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAsyncTaskWithOptions(request, runtime);
  }

  /**
   * Removes IP addresses from the IP address blacklist of an Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @param request - DeleteAutoCcBlacklistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAutoCcBlacklistResponse
   */
  async deleteAutoCcBlacklistWithOptions(request: $_model.DeleteAutoCcBlacklistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAutoCcBlacklistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.blacklist)) {
      query["Blacklist"] = request.blacklist;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAutoCcBlacklist",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAutoCcBlacklistResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAutoCcBlacklistResponse({}));
  }

  /**
   * Removes IP addresses from the IP address blacklist of an Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @param request - DeleteAutoCcBlacklistRequest
   * @returns DeleteAutoCcBlacklistResponse
   */
  async deleteAutoCcBlacklist(request: $_model.DeleteAutoCcBlacklistRequest): Promise<$_model.DeleteAutoCcBlacklistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAutoCcBlacklistWithOptions(request, runtime);
  }

  /**
   * Removes IP addresses from the IP address whitelist of an Anti-DDoS Proxy instance.
   * 
   * @param request - DeleteAutoCcWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAutoCcWhitelistResponse
   */
  async deleteAutoCcWhitelistWithOptions(request: $_model.DeleteAutoCcWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAutoCcWhitelistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.whitelist)) {
      query["Whitelist"] = request.whitelist;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAutoCcWhitelist",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAutoCcWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAutoCcWhitelistResponse({}));
  }

  /**
   * Removes IP addresses from the IP address whitelist of an Anti-DDoS Proxy instance.
   * 
   * @param request - DeleteAutoCcWhitelistRequest
   * @returns DeleteAutoCcWhitelistResponse
   */
  async deleteAutoCcWhitelist(request: $_model.DeleteAutoCcWhitelistRequest): Promise<$_model.DeleteAutoCcWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAutoCcWhitelistWithOptions(request, runtime);
  }

  /**
   * Deletes a specified forwarding rule of a website.
   * 
   * @param request - DeleteDomainResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainResourceResponse
   */
  async deleteDomainResourceWithOptions(request: $_model.DeleteDomainResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDomainResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDomainResource",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDomainResourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDomainResourceResponse({}));
  }

  /**
   * Deletes a specified forwarding rule of a website.
   * 
   * @param request - DeleteDomainResourceRequest
   * @returns DeleteDomainResourceResponse
   */
  async deleteDomainResource(request: $_model.DeleteDomainResourceRequest): Promise<$_model.DeleteDomainResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDomainResourceWithOptions(request, runtime);
  }

  /**
   * Deletes a port forwarding rule. You can delete only one port forwarding rule at a time.
   * 
   * @param request - DeleteNetworkRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNetworkRuleResponse
   */
  async deleteNetworkRuleWithOptions(request: $_model.DeleteNetworkRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNetworkRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.networkRule)) {
      query["NetworkRule"] = request.networkRule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNetworkRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNetworkRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNetworkRuleResponse({}));
  }

  /**
   * Deletes a port forwarding rule. You can delete only one port forwarding rule at a time.
   * 
   * @param request - DeleteNetworkRuleRequest
   * @returns DeleteNetworkRuleResponse
   */
  async deleteNetworkRule(request: $_model.DeleteNetworkRuleRequest): Promise<$_model.DeleteNetworkRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNetworkRuleWithOptions(request, runtime);
  }

  /**
   * Deletes the specified port forwarding rule.
   * 
   * @remarks
   * After you delete a port forwarding rule, the Anti-DDoS Pro or Anti-DDoS Premium instance no longer forwards service traffic on the Layer 4 port. Before you delete a specific port forwarding rule, make sure that the service traffic destined for the Layer 4 port is redirected to the origin server. This can prevent negative impacts on your services.
   * > You can call this operation by using Terraform. For more information about Terraform, see [What is Terraform?](https://help.aliyun.com/document_detail/95820.html).
   * 
   * @param request - DeletePortRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePortResponse
   */
  async deletePortWithOptions(request: $_model.DeletePortRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePortResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendPort)) {
      query["BackendPort"] = request.backendPort;
    }

    if (!$dara.isNull(request.frontendPort)) {
      query["FrontendPort"] = request.frontendPort;
    }

    if (!$dara.isNull(request.frontendProtocol)) {
      query["FrontendProtocol"] = request.frontendProtocol;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.realServers)) {
      query["RealServers"] = request.realServers;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePort",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePortResponse>(await this.callApi(params, req, runtime), new $_model.DeletePortResponse({}));
  }

  /**
   * Deletes the specified port forwarding rule.
   * 
   * @remarks
   * After you delete a port forwarding rule, the Anti-DDoS Pro or Anti-DDoS Premium instance no longer forwards service traffic on the Layer 4 port. Before you delete a specific port forwarding rule, make sure that the service traffic destined for the Layer 4 port is redirected to the origin server. This can prevent negative impacts on your services.
   * > You can call this operation by using Terraform. For more information about Terraform, see [What is Terraform?](https://help.aliyun.com/document_detail/95820.html).
   * 
   * @param request - DeletePortRequest
   * @returns DeletePortResponse
   */
  async deletePort(request: $_model.DeletePortRequest): Promise<$_model.DeletePortResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePortWithOptions(request, runtime);
  }

  /**
   * Deletes a scenario-specific custom policy.
   * 
   * @param request - DeleteSceneDefensePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSceneDefensePolicyResponse
   */
  async deleteSceneDefensePolicyWithOptions(request: $_model.DeleteSceneDefensePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSceneDefensePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSceneDefensePolicy",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSceneDefensePolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSceneDefensePolicyResponse({}));
  }

  /**
   * Deletes a scenario-specific custom policy.
   * 
   * @param request - DeleteSceneDefensePolicyRequest
   * @returns DeleteSceneDefensePolicyResponse
   */
  async deleteSceneDefensePolicy(request: $_model.DeleteSceneDefensePolicyRequest): Promise<$_model.DeleteSceneDefensePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSceneDefensePolicyWithOptions(request, runtime);
  }

  /**
   * Deletes a scheduling rule of Sec-Traffic Manager.
   * 
   * @param request - DeleteSchedulerRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSchedulerRuleResponse
   */
  async deleteSchedulerRuleWithOptions(request: $_model.DeleteSchedulerRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSchedulerRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSchedulerRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSchedulerRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSchedulerRuleResponse({}));
  }

  /**
   * Deletes a scheduling rule of Sec-Traffic Manager.
   * 
   * @param request - DeleteSchedulerRuleRequest
   * @returns DeleteSchedulerRuleResponse
   */
  async deleteSchedulerRule(request: $_model.DeleteSchedulerRuleRequest): Promise<$_model.DeleteSchedulerRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSchedulerRuleWithOptions(request, runtime);
  }

  /**
   * Removes tags from Anti-DDoS Proxy (Chinese Mainland) instances.
   * 
   * @remarks
   * You can call the DeleteTagResources operation to remove tags from Anti-DDoS Proxy (Chinese Mainland) instances.
   * >  Only Anti-DDoS Proxy (Chinese Mainland) supports tags.
   * ### [](#qps-)QPS limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTagResourcesResponse
   */
  async deleteTagResourcesWithOptions(request: $_model.DeleteTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
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
      action: "DeleteTagResources",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTagResourcesResponse({}));
  }

  /**
   * Removes tags from Anti-DDoS Proxy (Chinese Mainland) instances.
   * 
   * @remarks
   * You can call the DeleteTagResources operation to remove tags from Anti-DDoS Proxy (Chinese Mainland) instances.
   * >  Only Anti-DDoS Proxy (Chinese Mainland) supports tags.
   * ### [](#qps-)QPS limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteTagResourcesRequest
   * @returns DeleteTagResourcesResponse
   */
  async deleteTagResources(request: $_model.DeleteTagResourcesRequest): Promise<$_model.DeleteTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTagResourcesWithOptions(request, runtime);
  }

  /**
   * Deletes a custom frequency control rule of a website.
   * 
   * @deprecated OpenAPI DeleteWebCCRule is deprecated, please use ddoscoo::2020-01-01::DeleteWebCCRuleV2 instead.
   * 
   * @param request - DeleteWebCCRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWebCCRuleResponse
   */
  async deleteWebCCRuleWithOptions(request: $_model.DeleteWebCCRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWebCCRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWebCCRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWebCCRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWebCCRuleResponse({}));
  }

  /**
   * Deletes a custom frequency control rule of a website.
   * 
   * @deprecated OpenAPI DeleteWebCCRule is deprecated, please use ddoscoo::2020-01-01::DeleteWebCCRuleV2 instead.
   * 
   * @param request - DeleteWebCCRuleRequest
   * @returns DeleteWebCCRuleResponse
   */
  // Deprecated
  async deleteWebCCRule(request: $_model.DeleteWebCCRuleRequest): Promise<$_model.DeleteWebCCRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWebCCRuleWithOptions(request, runtime);
  }

  /**
   * Deletes custom frequency control rules of a website.
   * 
   * @param request - DeleteWebCCRuleV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWebCCRuleV2Response
   */
  async deleteWebCCRuleV2WithOptions(request: $_model.DeleteWebCCRuleV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWebCCRuleV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.ruleNames)) {
      query["RuleNames"] = request.ruleNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWebCCRuleV2",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWebCCRuleV2Response>(await this.callApi(params, req, runtime), new $_model.DeleteWebCCRuleV2Response({}));
  }

  /**
   * Deletes custom frequency control rules of a website.
   * 
   * @param request - DeleteWebCCRuleV2Request
   * @returns DeleteWebCCRuleV2Response
   */
  async deleteWebCCRuleV2(request: $_model.DeleteWebCCRuleV2Request): Promise<$_model.DeleteWebCCRuleV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWebCCRuleV2WithOptions(request, runtime);
  }

  /**
   * Deletes the custom rules of the Static Page Caching policy for a website.
   * 
   * @remarks
   * You can call the DeleteWebCacheCustomRule operation to delete the custom rules of the Static Page Caching policy for a website.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteWebCacheCustomRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWebCacheCustomRuleResponse
   */
  async deleteWebCacheCustomRuleWithOptions(request: $_model.DeleteWebCacheCustomRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWebCacheCustomRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.ruleNames)) {
      query["RuleNames"] = request.ruleNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWebCacheCustomRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWebCacheCustomRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWebCacheCustomRuleResponse({}));
  }

  /**
   * Deletes the custom rules of the Static Page Caching policy for a website.
   * 
   * @remarks
   * You can call the DeleteWebCacheCustomRule operation to delete the custom rules of the Static Page Caching policy for a website.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteWebCacheCustomRuleRequest
   * @returns DeleteWebCacheCustomRuleResponse
   */
  async deleteWebCacheCustomRule(request: $_model.DeleteWebCacheCustomRuleRequest): Promise<$_model.DeleteWebCacheCustomRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWebCacheCustomRuleWithOptions(request, runtime);
  }

  /**
   * Deletes the accurate access control rules that are created for a website.
   * 
   * @param request - DeleteWebPreciseAccessRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWebPreciseAccessRuleResponse
   */
  async deleteWebPreciseAccessRuleWithOptions(request: $_model.DeleteWebPreciseAccessRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWebPreciseAccessRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.ruleNames)) {
      query["RuleNames"] = request.ruleNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWebPreciseAccessRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWebPreciseAccessRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWebPreciseAccessRuleResponse({}));
  }

  /**
   * Deletes the accurate access control rules that are created for a website.
   * 
   * @param request - DeleteWebPreciseAccessRuleRequest
   * @returns DeleteWebPreciseAccessRuleResponse
   */
  async deleteWebPreciseAccessRule(request: $_model.DeleteWebPreciseAccessRuleRequest): Promise<$_model.DeleteWebPreciseAccessRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWebPreciseAccessRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a forwarding rule of a website.
   * 
   * @param request - DeleteWebRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWebRuleResponse
   */
  async deleteWebRuleWithOptions(request: $_model.DeleteWebRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWebRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWebRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWebRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWebRuleResponse({}));
  }

  /**
   * Deletes a forwarding rule of a website.
   * 
   * @param request - DeleteWebRuleRequest
   * @returns DeleteWebRuleResponse
   */
  async deleteWebRule(request: $_model.DeleteWebRuleRequest): Promise<$_model.DeleteWebRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWebRuleWithOptions(request, runtime);
  }

  /**
   * Queries the details of asynchronous export tasks, such as the IDs, start time, end time, status, parameters, and results.
   * 
   * @remarks
   * You can call the DescribeAsyncTasks operation to query the details of asynchronous export tasks, such as the IDs, start time, end time, status, parameters, and results.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeAsyncTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAsyncTasksResponse
   */
  async describeAsyncTasksWithOptions(request: $_model.DescribeAsyncTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAsyncTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAsyncTasks",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAsyncTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAsyncTasksResponse({}));
  }

  /**
   * Queries the details of asynchronous export tasks, such as the IDs, start time, end time, status, parameters, and results.
   * 
   * @remarks
   * You can call the DescribeAsyncTasks operation to query the details of asynchronous export tasks, such as the IDs, start time, end time, status, parameters, and results.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeAsyncTasksRequest
   * @returns DescribeAsyncTasksResponse
   */
  async describeAsyncTasks(request: $_model.DescribeAsyncTasksRequest): Promise<$_model.DescribeAsyncTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAsyncTasksWithOptions(request, runtime);
  }

  /**
   * Queries the peak QPS of DDoS attacks within the specific period of time.
   * 
   * @param request - DescribeAttackAnalysisMaxQpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAttackAnalysisMaxQpsResponse
   */
  async describeAttackAnalysisMaxQpsWithOptions(request: $_model.DescribeAttackAnalysisMaxQpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAttackAnalysisMaxQpsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAttackAnalysisMaxQps",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAttackAnalysisMaxQpsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAttackAnalysisMaxQpsResponse({}));
  }

  /**
   * Queries the peak QPS of DDoS attacks within the specific period of time.
   * 
   * @param request - DescribeAttackAnalysisMaxQpsRequest
   * @returns DescribeAttackAnalysisMaxQpsResponse
   */
  async describeAttackAnalysisMaxQps(request: $_model.DescribeAttackAnalysisMaxQpsRequest): Promise<$_model.DescribeAttackAnalysisMaxQpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAttackAnalysisMaxQpsWithOptions(request, runtime);
  }

  /**
   * Queries IP addresses in the IP address blacklist of an Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @param request - DescribeAutoCcBlacklistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAutoCcBlacklistResponse
   */
  async describeAutoCcBlacklistWithOptions(request: $_model.DescribeAutoCcBlacklistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAutoCcBlacklistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAutoCcBlacklist",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAutoCcBlacklistResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAutoCcBlacklistResponse({}));
  }

  /**
   * Queries IP addresses in the IP address blacklist of an Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @param request - DescribeAutoCcBlacklistRequest
   * @returns DescribeAutoCcBlacklistResponse
   */
  async describeAutoCcBlacklist(request: $_model.DescribeAutoCcBlacklistRequest): Promise<$_model.DescribeAutoCcBlacklistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAutoCcBlacklistWithOptions(request, runtime);
  }

  /**
   * Queries the numbers of IP addresses in the IP address whitelist and IP address blacklist of an Anti-DDoS Proxy instance.
   * 
   * @param request - DescribeAutoCcListCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAutoCcListCountResponse
   */
  async describeAutoCcListCountWithOptions(request: $_model.DescribeAutoCcListCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAutoCcListCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAutoCcListCount",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAutoCcListCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAutoCcListCountResponse({}));
  }

  /**
   * Queries the numbers of IP addresses in the IP address whitelist and IP address blacklist of an Anti-DDoS Proxy instance.
   * 
   * @param request - DescribeAutoCcListCountRequest
   * @returns DescribeAutoCcListCountResponse
   */
  async describeAutoCcListCount(request: $_model.DescribeAutoCcListCountRequest): Promise<$_model.DescribeAutoCcListCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAutoCcListCountWithOptions(request, runtime);
  }

  /**
   * Queries IP addresses in the IP address whitelist of an Anti-DDoS Proxy instance.
   * 
   * @param request - DescribeAutoCcWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAutoCcWhitelistResponse
   */
  async describeAutoCcWhitelistWithOptions(request: $_model.DescribeAutoCcWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAutoCcWhitelistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
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
      action: "DescribeAutoCcWhitelist",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAutoCcWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAutoCcWhitelistResponse({}));
  }

  /**
   * Queries IP addresses in the IP address whitelist of an Anti-DDoS Proxy instance.
   * 
   * @param request - DescribeAutoCcWhitelistRequest
   * @returns DescribeAutoCcWhitelistResponse
   */
  async describeAutoCcWhitelist(request: $_model.DescribeAutoCcWhitelistRequest): Promise<$_model.DescribeAutoCcWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAutoCcWhitelistWithOptions(request, runtime);
  }

  /**
   * Queries the back-to-origin CIDR blocks of Anti-DDoS Proxy.
   * 
   * @param request - DescribeBackSourceCidrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackSourceCidrResponse
   */
  async describeBackSourceCidrWithOptions(request: $_model.DescribeBackSourceCidrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackSourceCidrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!$dara.isNull(request.line)) {
      query["Line"] = request.line;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackSourceCidr",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackSourceCidrResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackSourceCidrResponse({}));
  }

  /**
   * Queries the back-to-origin CIDR blocks of Anti-DDoS Proxy.
   * 
   * @param request - DescribeBackSourceCidrRequest
   * @returns DescribeBackSourceCidrResponse
   */
  async describeBackSourceCidr(request: $_model.DescribeBackSourceCidrRequest): Promise<$_model.DescribeBackSourceCidrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackSourceCidrWithOptions(request, runtime);
  }

  /**
   * Queries the blackhole filtering status of one or more Anti-DDoS Pro or Anti-DDoS Premium instances.
   * 
   * @param request - DescribeBlackholeStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBlackholeStatusResponse
   */
  async describeBlackholeStatusWithOptions(request: $_model.DescribeBlackholeStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBlackholeStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBlackholeStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBlackholeStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBlackholeStatusResponse({}));
  }

  /**
   * Queries the blackhole filtering status of one or more Anti-DDoS Pro or Anti-DDoS Premium instances.
   * 
   * @param request - DescribeBlackholeStatusRequest
   * @returns DescribeBlackholeStatusResponse
   */
  async describeBlackholeStatus(request: $_model.DescribeBlackholeStatusRequest): Promise<$_model.DescribeBlackholeStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBlackholeStatusWithOptions(request, runtime);
  }

  /**
   * Queries the Diversion from Origin Server configurations of one or more Anti-DDoS Proxy (Chinese Mainland) instances.
   * 
   * @remarks
   * You can call this operation to query the Diversion from Origin Server configurations of one or more Anti-DDoS Proxy (Chinese Mainland) instances.
   * >  This operation is suitable only for Anti-DDoS Proxy (Chinese Mainland).
   * ### [](#qps-)QPS limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeBlockStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBlockStatusResponse
   */
  async describeBlockStatusWithOptions(request: $_model.DescribeBlockStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBlockStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBlockStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBlockStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBlockStatusResponse({}));
  }

  /**
   * Queries the Diversion from Origin Server configurations of one or more Anti-DDoS Proxy (Chinese Mainland) instances.
   * 
   * @remarks
   * You can call this operation to query the Diversion from Origin Server configurations of one or more Anti-DDoS Proxy (Chinese Mainland) instances.
   * >  This operation is suitable only for Anti-DDoS Proxy (Chinese Mainland).
   * ### [](#qps-)QPS limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeBlockStatusRequest
   * @returns DescribeBlockStatusResponse
   */
  async describeBlockStatus(request: $_model.DescribeBlockStatusRequest): Promise<$_model.DescribeBlockStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBlockStatusWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeCdnLinkageRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnLinkageRulesResponse
   */
  async describeCdnLinkageRulesWithOptions(request: $_model.DescribeCdnLinkageRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnLinkageRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnLinkageRules",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnLinkageRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnLinkageRulesResponse({}));
  }

  /**
   * @param request - DescribeCdnLinkageRulesRequest
   * @returns DescribeCdnLinkageRulesResponse
   */
  async describeCdnLinkageRules(request: $_model.DescribeCdnLinkageRulesRequest): Promise<$_model.DescribeCdnLinkageRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnLinkageRulesWithOptions(request, runtime);
  }

  /**
   * Queries information about all certificates that can be associated with the current domain name instead of the certificate currently in use.
   * 
   * @remarks
   * This operation is used to query all applicable certificates of a domain name that you want to add to Anti-DDoS Proxy. Multiple certificates may be queried for a domain name. You can use an exact domain name to query exact-domain certificates or wildcard-domain certificates.
   * >  If you want to query the certificate that is in use for the current domain name, you can call the [DescribeWebRules](https://help.aliyun.com/document_detail/473610.html) operation to obtain the values of the CertName and CertRegion parameters. Then, you can call the [ListUserCertificateOrder](https://help.aliyun.com/document_detail/411733.html) operation of Certificate Management Service to query the ID and other details of the certificate by using the value of the CertName parameter.
   * 
   * @param request - DescribeCertsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCertsResponse
   */
  async describeCertsWithOptions(request: $_model.DescribeCertsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCertsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCerts",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCertsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCertsResponse({}));
  }

  /**
   * Queries information about all certificates that can be associated with the current domain name instead of the certificate currently in use.
   * 
   * @remarks
   * This operation is used to query all applicable certificates of a domain name that you want to add to Anti-DDoS Proxy. Multiple certificates may be queried for a domain name. You can use an exact domain name to query exact-domain certificates or wildcard-domain certificates.
   * >  If you want to query the certificate that is in use for the current domain name, you can call the [DescribeWebRules](https://help.aliyun.com/document_detail/473610.html) operation to obtain the values of the CertName and CertRegion parameters. Then, you can call the [ListUserCertificateOrder](https://help.aliyun.com/document_detail/411733.html) operation of Certificate Management Service to query the ID and other details of the certificate by using the value of the CertName parameter.
   * 
   * @param request - DescribeCertsRequest
   * @returns DescribeCertsResponse
   */
  async describeCerts(request: $_model.DescribeCertsRequest): Promise<$_model.DescribeCertsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCertsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeCnameReusesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCnameReusesResponse
   */
  async describeCnameReusesWithOptions(request: $_model.DescribeCnameReusesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCnameReusesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domains)) {
      query["Domains"] = request.domains;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCnameReuses",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCnameReusesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCnameReusesResponse({}));
  }

  /**
   * @param request - DescribeCnameReusesRequest
   * @returns DescribeCnameReusesResponse
   */
  async describeCnameReuses(request: $_model.DescribeCnameReusesRequest): Promise<$_model.DescribeCnameReusesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCnameReusesWithOptions(request, runtime);
  }

  /**
   * Queries the attack events launched against one or more Anti-DDoS Proxy instances.
   * 
   * @param request - DescribeDDoSEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDDoSEventsResponse
   */
  async describeDDoSEventsWithOptions(request: $_model.DescribeDDoSEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDDoSEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDDoSEvents",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDDoSEventsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDDoSEventsResponse({}));
  }

  /**
   * Queries the attack events launched against one or more Anti-DDoS Proxy instances.
   * 
   * @param request - DescribeDDoSEventsRequest
   * @returns DescribeDDoSEventsResponse
   */
  async describeDDoSEvents(request: $_model.DescribeDDoSEventsRequest): Promise<$_model.DescribeDDoSEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDDoSEventsWithOptions(request, runtime);
  }

  /**
   * Queries DDoS attack events.
   * 
   * @remarks
   * You can call the DescribeDDosAllEventList operation to query DDoS attack events within a specific time range by page. The information about a DDoS attack event includes the start time and end time of the attack, attack event type, attacked object, peak bandwidth of attack traffic, and peak packet forwarding rate.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDDosAllEventListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDDosAllEventListResponse
   */
  async describeDDosAllEventListWithOptions(request: $_model.DescribeDDosAllEventListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDDosAllEventListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDDosAllEventList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDDosAllEventListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDDosAllEventListResponse({}));
  }

  /**
   * Queries DDoS attack events.
   * 
   * @remarks
   * You can call the DescribeDDosAllEventList operation to query DDoS attack events within a specific time range by page. The information about a DDoS attack event includes the start time and end time of the attack, attack event type, attacked object, peak bandwidth of attack traffic, and peak packet forwarding rate.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDDosAllEventListRequest
   * @returns DescribeDDosAllEventListResponse
   */
  async describeDDosAllEventList(request: $_model.DescribeDDosAllEventListRequest): Promise<$_model.DescribeDDosAllEventListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDDosAllEventListWithOptions(request, runtime);
  }

  /**
   * Queries the source region from which a volumetric attack is initiated.
   * 
   * @remarks
   * > This operation is suitable only for volumetric attacks.
   * 
   * @param request - DescribeDDosEventAreaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDDosEventAreaResponse
   */
  async describeDDosEventAreaWithOptions(request: $_model.DescribeDDosEventAreaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDDosEventAreaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.range)) {
      query["Range"] = request.range;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDDosEventArea",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDDosEventAreaResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDDosEventAreaResponse({}));
  }

  /**
   * Queries the source region from which a volumetric attack is initiated.
   * 
   * @remarks
   * > This operation is suitable only for volumetric attacks.
   * 
   * @param request - DescribeDDosEventAreaRequest
   * @returns DescribeDDosEventAreaResponse
   */
  async describeDDosEventArea(request: $_model.DescribeDDosEventAreaRequest): Promise<$_model.DescribeDDosEventAreaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDDosEventAreaWithOptions(request, runtime);
  }

  /**
   * Queries the attack type details of a volumetric attack.
   * 
   * @remarks
   * > This operation is suitable only for volumetric attacks.
   * 
   * @param request - DescribeDDosEventAttackTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDDosEventAttackTypeResponse
   */
  async describeDDosEventAttackTypeWithOptions(request: $_model.DescribeDDosEventAttackTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDDosEventAttackTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDDosEventAttackType",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDDosEventAttackTypeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDDosEventAttackTypeResponse({}));
  }

  /**
   * Queries the attack type details of a volumetric attack.
   * 
   * @remarks
   * > This operation is suitable only for volumetric attacks.
   * 
   * @param request - DescribeDDosEventAttackTypeRequest
   * @returns DescribeDDosEventAttackTypeResponse
   */
  async describeDDosEventAttackType(request: $_model.DescribeDDosEventAttackTypeRequest): Promise<$_model.DescribeDDosEventAttackTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDDosEventAttackTypeWithOptions(request, runtime);
  }

  /**
   * Queries the Internet service provider (ISP) information about a volumetric attack.
   * 
   * @remarks
   * > This operation is suitable only for volumetric attacks.
   * 
   * @param request - DescribeDDosEventIspRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDDosEventIspResponse
   */
  async describeDDosEventIspWithOptions(request: $_model.DescribeDDosEventIspRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDDosEventIspResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.range)) {
      query["Range"] = request.range;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDDosEventIsp",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDDosEventIspResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDDosEventIspResponse({}));
  }

  /**
   * Queries the Internet service provider (ISP) information about a volumetric attack.
   * 
   * @remarks
   * > This operation is suitable only for volumetric attacks.
   * 
   * @param request - DescribeDDosEventIspRequest
   * @returns DescribeDDosEventIspResponse
   */
  async describeDDosEventIsp(request: $_model.DescribeDDosEventIspRequest): Promise<$_model.DescribeDDosEventIspResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDDosEventIspWithOptions(request, runtime);
  }

  /**
   * Queries the peaks of volumetric attacks (bit/s), connection flood attacks (CPS), and resource exhaustion attacks on websites (QPS).
   * 
   * @param request - DescribeDDosEventMaxRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDDosEventMaxResponse
   */
  async describeDDosEventMaxWithOptions(request: $_model.DescribeDDosEventMaxRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDDosEventMaxResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDDosEventMax",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDDosEventMaxResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDDosEventMaxResponse({}));
  }

  /**
   * Queries the peaks of volumetric attacks (bit/s), connection flood attacks (CPS), and resource exhaustion attacks on websites (QPS).
   * 
   * @param request - DescribeDDosEventMaxRequest
   * @returns DescribeDDosEventMaxResponse
   */
  async describeDDosEventMax(request: $_model.DescribeDDosEventMaxRequest): Promise<$_model.DescribeDDosEventMaxResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDDosEventMaxWithOptions(request, runtime);
  }

  /**
   * Queries the source IP address from which a volumetric attack is initiated.
   * 
   * @remarks
   * > This operation is suitable only for volumetric attacks.
   * 
   * @param request - DescribeDDosEventSrcIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDDosEventSrcIpResponse
   */
  async describeDDosEventSrcIpWithOptions(request: $_model.DescribeDDosEventSrcIpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDDosEventSrcIpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.range)) {
      query["Range"] = request.range;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDDosEventSrcIp",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDDosEventSrcIpResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDDosEventSrcIpResponse({}));
  }

  /**
   * Queries the source IP address from which a volumetric attack is initiated.
   * 
   * @remarks
   * > This operation is suitable only for volumetric attacks.
   * 
   * @param request - DescribeDDosEventSrcIpRequest
   * @returns DescribeDDosEventSrcIpResponse
   */
  async describeDDosEventSrcIp(request: $_model.DescribeDDosEventSrcIpRequest): Promise<$_model.DescribeDDosEventSrcIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDDosEventSrcIpWithOptions(request, runtime);
  }

  /**
   * Queries the statistics on advanced mitigation sessions of an Anti-DDoS Proxy (Outside Chinese Mainland) instance.
   * 
   * @remarks
   * You can call the DescribeDefenseCountStatistics operation to query the information about advanced mitigation sessions of an Anti-DDoS Proxy (Outside Chinese Mainland) instance. For example, you can query the number of advanced mitigation sessions that are used within the current calendar month and the number of remaining advanced mitigation sessions.
   * >  This operation is suitable only for Anti-DDoS Proxy (Outside Chinese Mainland).
   * ### [](#qps-)QPS limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDefenseCountStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseCountStatisticsResponse
   */
  async describeDefenseCountStatisticsWithOptions(request: $_model.DescribeDefenseCountStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDefenseCountStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDefenseCountStatistics",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDefenseCountStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDefenseCountStatisticsResponse({}));
  }

  /**
   * Queries the statistics on advanced mitigation sessions of an Anti-DDoS Proxy (Outside Chinese Mainland) instance.
   * 
   * @remarks
   * You can call the DescribeDefenseCountStatistics operation to query the information about advanced mitigation sessions of an Anti-DDoS Proxy (Outside Chinese Mainland) instance. For example, you can query the number of advanced mitigation sessions that are used within the current calendar month and the number of remaining advanced mitigation sessions.
   * >  This operation is suitable only for Anti-DDoS Proxy (Outside Chinese Mainland).
   * ### [](#qps-)QPS limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDefenseCountStatisticsRequest
   * @returns DescribeDefenseCountStatisticsResponse
   */
  async describeDefenseCountStatistics(request: $_model.DescribeDefenseCountStatisticsRequest): Promise<$_model.DescribeDefenseCountStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDefenseCountStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries the advanced mitigation logs of an Anti-DDoS Proxy (Outside Chinese Mainland) instance.
   * 
   * @remarks
   * > This operation is suitable only for Anti-DDoS Premium.
   * 
   * @param request - DescribeDefenseRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseRecordsResponse
   */
  async describeDefenseRecordsWithOptions(request: $_model.DescribeDefenseRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDefenseRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDefenseRecords",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDefenseRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDefenseRecordsResponse({}));
  }

  /**
   * Queries the advanced mitigation logs of an Anti-DDoS Proxy (Outside Chinese Mainland) instance.
   * 
   * @remarks
   * > This operation is suitable only for Anti-DDoS Premium.
   * 
   * @param request - DescribeDefenseRecordsRequest
   * @returns DescribeDefenseRecordsResponse
   */
  async describeDefenseRecords(request: $_model.DescribeDefenseRecordsRequest): Promise<$_model.DescribeDefenseRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDefenseRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the number of request packets received by the destination ports of the attacked IP address that is protected by Anti-DDoS Proxy.
   * 
   * @param request - DescribeDestinationPortEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDestinationPortEventResponse
   */
  async describeDestinationPortEventWithOptions(request: $_model.DescribeDestinationPortEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDestinationPortEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.range)) {
      query["Range"] = request.range;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDestinationPortEvent",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDestinationPortEventResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDestinationPortEventResponse({}));
  }

  /**
   * Queries the number of request packets received by the destination ports of the attacked IP address that is protected by Anti-DDoS Proxy.
   * 
   * @param request - DescribeDestinationPortEventRequest
   * @returns DescribeDestinationPortEventResponse
   */
  async describeDestinationPortEvent(request: $_model.DescribeDestinationPortEventRequest): Promise<$_model.DescribeDestinationPortEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDestinationPortEventWithOptions(request, runtime);
  }

  /**
   * Queries the attack events launched against a website.
   * 
   * @param request - DescribeDomainAttackEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainAttackEventsResponse
   */
  async describeDomainAttackEventsWithOptions(request: $_model.DescribeDomainAttackEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainAttackEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainAttackEvents",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainAttackEventsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainAttackEventsResponse({}));
  }

  /**
   * Queries the attack events launched against a website.
   * 
   * @param request - DescribeDomainAttackEventsRequest
   * @returns DescribeDomainAttackEventsResponse
   */
  async describeDomainAttackEvents(request: $_model.DescribeDomainAttackEventsRequest): Promise<$_model.DescribeDomainAttackEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainAttackEventsWithOptions(request, runtime);
  }

  /**
   * Queries the bandwidths of a website.
   * 
   * @param request - DescribeDomainBpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainBpsResponse
   */
  async describeDomainBpsWithOptions(request: $_model.DescribeDomainBpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainBpsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainBps",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainBpsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainBpsResponse({}));
  }

  /**
   * Queries the bandwidths of a website.
   * 
   * @param request - DescribeDomainBpsRequest
   * @returns DescribeDomainBpsResponse
   */
  async describeDomainBps(request: $_model.DescribeDomainBpsRequest): Promise<$_model.DescribeDomainBpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainBpsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDomainCcProtectSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainCcProtectSwitchResponse
   */
  async describeDomainCcProtectSwitchWithOptions(request: $_model.DescribeDomainCcProtectSwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainCcProtectSwitchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domains)) {
      query["Domains"] = request.domains;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainCcProtectSwitch",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainCcProtectSwitchResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainCcProtectSwitchResponse({}));
  }

  /**
   * @param request - DescribeDomainCcProtectSwitchRequest
   * @returns DescribeDomainCcProtectSwitchResponse
   */
  async describeDomainCcProtectSwitch(request: $_model.DescribeDomainCcProtectSwitchRequest): Promise<$_model.DescribeDomainCcProtectSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainCcProtectSwitchWithOptions(request, runtime);
  }

  /**
   * Queries the information about HTTP/2 fingerprints of a website.
   * 
   * @param request - DescribeDomainH2FingerprintRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainH2FingerprintResponse
   */
  async describeDomainH2FingerprintWithOptions(request: $_model.DescribeDomainH2FingerprintRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainH2FingerprintResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainH2Fingerprint",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainH2FingerprintResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainH2FingerprintResponse({}));
  }

  /**
   * Queries the information about HTTP/2 fingerprints of a website.
   * 
   * @param request - DescribeDomainH2FingerprintRequest
   * @returns DescribeDomainH2FingerprintResponse
   */
  async describeDomainH2Fingerprint(request: $_model.DescribeDomainH2FingerprintRequest): Promise<$_model.DescribeDomainH2FingerprintResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainH2FingerprintWithOptions(request, runtime);
  }

  /**
   * Queries the attack overview of a website, such as the peak HTTP and HTTPS traffic.
   * 
   * @param request - DescribeDomainOverviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainOverviewResponse
   */
  async describeDomainOverviewWithOptions(request: $_model.DescribeDomainOverviewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainOverviewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainOverview",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainOverviewResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainOverviewResponse({}));
  }

  /**
   * Queries the attack overview of a website, such as the peak HTTP and HTTPS traffic.
   * 
   * @param request - DescribeDomainOverviewRequest
   * @returns DescribeDomainOverviewResponse
   */
  async describeDomainOverview(request: $_model.DescribeDomainOverviewRequest): Promise<$_model.DescribeDomainOverviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainOverviewWithOptions(request, runtime);
  }

  /**
   * Queries the statistics on the queries per second (QPS) of a website.
   * 
   * @param request - DescribeDomainQPSListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainQPSListResponse
   */
  async describeDomainQPSListWithOptions(request: $_model.DescribeDomainQPSListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainQPSListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainQPSList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainQPSListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainQPSListResponse({}));
  }

  /**
   * Queries the statistics on the queries per second (QPS) of a website.
   * 
   * @param request - DescribeDomainQPSListRequest
   * @returns DescribeDomainQPSListResponse
   */
  async describeDomainQPSList(request: $_model.DescribeDomainQPSListRequest): Promise<$_model.DescribeDomainQPSListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainQPSListWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of a forwarding rule.
   * 
   * @remarks
   * You can call the DescribeDomainResource operation to query the configurations of the forwarding rules that you create for a website by page. The configurations include the domain name-related configurations, protocol-related configurations, HTTPS-related configurations, and configurations that are used to mitigate HTTP flood attacks.
   * You can call this operation by using Terraform. For more information about Terraform, see [What is Terraform?](https://help.aliyun.com/document_detail/95820.html).
   * ### Limits
   * You can call this operation up to 50 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDomainResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainResourceResponse
   */
  async describeDomainResourceWithOptions(request: $_model.DescribeDomainResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryDomainPattern)) {
      query["QueryDomainPattern"] = request.queryDomainPattern;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainResource",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainResourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainResourceResponse({}));
  }

  /**
   * Queries the configurations of a forwarding rule.
   * 
   * @remarks
   * You can call the DescribeDomainResource operation to query the configurations of the forwarding rules that you create for a website by page. The configurations include the domain name-related configurations, protocol-related configurations, HTTPS-related configurations, and configurations that are used to mitigate HTTP flood attacks.
   * You can call this operation by using Terraform. For more information about Terraform, see [What is Terraform?](https://help.aliyun.com/document_detail/95820.html).
   * ### Limits
   * You can call this operation up to 50 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDomainResourceRequest
   * @returns DescribeDomainResourceResponse
   */
  async describeDomainResource(request: $_model.DescribeDomainResourceRequest): Promise<$_model.DescribeDomainResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainResourceWithOptions(request, runtime);
  }

  /**
   * Queries the global mitigation policy for a domain name.
   * 
   * @param request - DescribeDomainSecurityProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainSecurityProfileResponse
   */
  async describeDomainSecurityProfileWithOptions(request: $_model.DescribeDomainSecurityProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainSecurityProfileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainSecurityProfile",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainSecurityProfileResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainSecurityProfileResponse({}));
  }

  /**
   * Queries the global mitigation policy for a domain name.
   * 
   * @param request - DescribeDomainSecurityProfileRequest
   * @returns DescribeDomainSecurityProfileResponse
   */
  async describeDomainSecurityProfile(request: $_model.DescribeDomainSecurityProfileRequest): Promise<$_model.DescribeDomainSecurityProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainSecurityProfileWithOptions(request, runtime);
  }

  /**
   * Queries the statistics on HTTP status codes of a website within a specified period of time.
   * 
   * @param request - DescribeDomainStatusCodeCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainStatusCodeCountResponse
   */
  async describeDomainStatusCodeCountWithOptions(request: $_model.DescribeDomainStatusCodeCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainStatusCodeCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainStatusCodeCount",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainStatusCodeCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainStatusCodeCountResponse({}));
  }

  /**
   * Queries the statistics on HTTP status codes of a website within a specified period of time.
   * 
   * @param request - DescribeDomainStatusCodeCountRequest
   * @returns DescribeDomainStatusCodeCountResponse
   */
  async describeDomainStatusCodeCount(request: $_model.DescribeDomainStatusCodeCountRequest): Promise<$_model.DescribeDomainStatusCodeCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainStatusCodeCountWithOptions(request, runtime);
  }

  /**
   * Queries the statistics on HTTP status codes of a website.
   * 
   * @param request - DescribeDomainStatusCodeListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainStatusCodeListResponse
   */
  async describeDomainStatusCodeListWithOptions(request: $_model.DescribeDomainStatusCodeListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainStatusCodeListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainStatusCodeList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainStatusCodeListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainStatusCodeListResponse({}));
  }

  /**
   * Queries the statistics on HTTP status codes of a website.
   * 
   * @param request - DescribeDomainStatusCodeListRequest
   * @returns DescribeDomainStatusCodeListResponse
   */
  async describeDomainStatusCodeList(request: $_model.DescribeDomainStatusCodeListRequest): Promise<$_model.DescribeDomainStatusCodeListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainStatusCodeListWithOptions(request, runtime);
  }

  /**
   * Queries the peak queries per second (QPS) information about a website, such as the attack QPS and total QPS, within a specific period of time.
   * 
   * @param request - DescribeDomainTopAttackListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainTopAttackListResponse
   */
  async describeDomainTopAttackListWithOptions(request: $_model.DescribeDomainTopAttackListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainTopAttackListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainTopAttackList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainTopAttackListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainTopAttackListResponse({}));
  }

  /**
   * Queries the peak queries per second (QPS) information about a website, such as the attack QPS and total QPS, within a specific period of time.
   * 
   * @param request - DescribeDomainTopAttackListRequest
   * @returns DescribeDomainTopAttackListResponse
   */
  async describeDomainTopAttackList(request: $_model.DescribeDomainTopAttackListRequest): Promise<$_model.DescribeDomainTopAttackListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainTopAttackListWithOptions(request, runtime);
  }

  /**
   * Queries the information about the fingerprints of top N clients that access a website.
   * 
   * @param request - DescribeDomainTopFingerprintRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainTopFingerprintResponse
   */
  async describeDomainTopFingerprintWithOptions(request: $_model.DescribeDomainTopFingerprintRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainTopFingerprintResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainTopFingerprint",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainTopFingerprintResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainTopFingerprintResponse({}));
  }

  /**
   * Queries the information about the fingerprints of top N clients that access a website.
   * 
   * @param request - DescribeDomainTopFingerprintRequest
   * @returns DescribeDomainTopFingerprintResponse
   */
  async describeDomainTopFingerprint(request: $_model.DescribeDomainTopFingerprintRequest): Promise<$_model.DescribeDomainTopFingerprintResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainTopFingerprintWithOptions(request, runtime);
  }

  /**
   * Queries the information about top N HTTP methods of a website.
   * 
   * @param request - DescribeDomainTopHttpMethodRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainTopHttpMethodResponse
   */
  async describeDomainTopHttpMethodWithOptions(request: $_model.DescribeDomainTopHttpMethodRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainTopHttpMethodResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainTopHttpMethod",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainTopHttpMethodResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainTopHttpMethodResponse({}));
  }

  /**
   * Queries the information about top N HTTP methods of a website.
   * 
   * @param request - DescribeDomainTopHttpMethodRequest
   * @returns DescribeDomainTopHttpMethodResponse
   */
  async describeDomainTopHttpMethod(request: $_model.DescribeDomainTopHttpMethodRequest): Promise<$_model.DescribeDomainTopHttpMethodResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainTopHttpMethodWithOptions(request, runtime);
  }

  /**
   * Queries the information about top N referers of a website.
   * 
   * @param request - DescribeDomainTopRefererRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainTopRefererResponse
   */
  async describeDomainTopRefererWithOptions(request: $_model.DescribeDomainTopRefererRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainTopRefererResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainTopReferer",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainTopRefererResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainTopRefererResponse({}));
  }

  /**
   * Queries the information about top N referers of a website.
   * 
   * @param request - DescribeDomainTopRefererRequest
   * @returns DescribeDomainTopRefererResponse
   */
  async describeDomainTopReferer(request: $_model.DescribeDomainTopRefererRequest): Promise<$_model.DescribeDomainTopRefererResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainTopRefererWithOptions(request, runtime);
  }

  /**
   * Queries the information about top user agents of a website.
   * 
   * @param request - DescribeDomainTopUserAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainTopUserAgentResponse
   */
  async describeDomainTopUserAgentWithOptions(request: $_model.DescribeDomainTopUserAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainTopUserAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainTopUserAgent",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainTopUserAgentResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainTopUserAgentResponse({}));
  }

  /**
   * Queries the information about top user agents of a website.
   * 
   * @param request - DescribeDomainTopUserAgentRequest
   * @returns DescribeDomainTopUserAgentResponse
   */
  async describeDomainTopUserAgent(request: $_model.DescribeDomainTopUserAgentRequest): Promise<$_model.DescribeDomainTopUserAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainTopUserAgentWithOptions(request, runtime);
  }

  /**
   * Queries the areas and countries from which requests are sent to a website within a specified period of time.
   * 
   * @param request - DescribeDomainViewSourceCountriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainViewSourceCountriesResponse
   */
  async describeDomainViewSourceCountriesWithOptions(request: $_model.DescribeDomainViewSourceCountriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainViewSourceCountriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainViewSourceCountries",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainViewSourceCountriesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainViewSourceCountriesResponse({}));
  }

  /**
   * Queries the areas and countries from which requests are sent to a website within a specified period of time.
   * 
   * @param request - DescribeDomainViewSourceCountriesRequest
   * @returns DescribeDomainViewSourceCountriesResponse
   */
  async describeDomainViewSourceCountries(request: $_model.DescribeDomainViewSourceCountriesRequest): Promise<$_model.DescribeDomainViewSourceCountriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainViewSourceCountriesWithOptions(request, runtime);
  }

  /**
   * Queries the administrative regions in China from which requests are sent to a website within a specified period of time.
   * 
   * @param request - DescribeDomainViewSourceProvincesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainViewSourceProvincesResponse
   */
  async describeDomainViewSourceProvincesWithOptions(request: $_model.DescribeDomainViewSourceProvincesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainViewSourceProvincesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainViewSourceProvinces",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainViewSourceProvincesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainViewSourceProvincesResponse({}));
  }

  /**
   * Queries the administrative regions in China from which requests are sent to a website within a specified period of time.
   * 
   * @param request - DescribeDomainViewSourceProvincesRequest
   * @returns DescribeDomainViewSourceProvincesResponse
   */
  async describeDomainViewSourceProvinces(request: $_model.DescribeDomainViewSourceProvincesRequest): Promise<$_model.DescribeDomainViewSourceProvincesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainViewSourceProvincesWithOptions(request, runtime);
  }

  /**
   * Queries the top N URLs that require the longest time to respond to requests within a specified period of time.
   * 
   * @param request - DescribeDomainViewTopCostTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainViewTopCostTimeResponse
   */
  async describeDomainViewTopCostTimeWithOptions(request: $_model.DescribeDomainViewTopCostTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainViewTopCostTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.top)) {
      query["Top"] = request.top;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainViewTopCostTime",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainViewTopCostTimeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainViewTopCostTimeResponse({}));
  }

  /**
   * Queries the top N URLs that require the longest time to respond to requests within a specified period of time.
   * 
   * @param request - DescribeDomainViewTopCostTimeRequest
   * @returns DescribeDomainViewTopCostTimeResponse
   */
  async describeDomainViewTopCostTime(request: $_model.DescribeDomainViewTopCostTimeRequest): Promise<$_model.DescribeDomainViewTopCostTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainViewTopCostTimeWithOptions(request, runtime);
  }

  /**
   * Queries the top N URLs that receive the most requests within a specified period of time.
   * 
   * @param request - DescribeDomainViewTopUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainViewTopUrlResponse
   */
  async describeDomainViewTopUrlWithOptions(request: $_model.DescribeDomainViewTopUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainViewTopUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.inerval)) {
      query["Inerval"] = request.inerval;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.top)) {
      query["Top"] = request.top;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainViewTopUrl",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainViewTopUrlResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainViewTopUrlResponse({}));
  }

  /**
   * Queries the top N URLs that receive the most requests within a specified period of time.
   * 
   * @param request - DescribeDomainViewTopUrlRequest
   * @returns DescribeDomainViewTopUrlResponse
   */
  async describeDomainViewTopUrl(request: $_model.DescribeDomainViewTopUrlRequest): Promise<$_model.DescribeDomainViewTopUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainViewTopUrlWithOptions(request, runtime);
  }

  /**
   * Queries domain names for which forwarding rules are created.
   * 
   * @param request - DescribeDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainsResponse
   */
  async describeDomainsWithOptions(request: $_model.DescribeDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomains",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainsResponse({}));
  }

  /**
   * Queries domain names for which forwarding rules are created.
   * 
   * @param request - DescribeDomainsRequest
   * @returns DescribeDomainsResponse
   */
  async describeDomains(request: $_model.DescribeDomainsRequest): Promise<$_model.DescribeDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainsWithOptions(request, runtime);
  }

  /**
   * Queries the available burstable protection bandwidths of an Anti-DDoS Proxy (Chinese Mainland) instance.
   * 
   * @remarks
   * >  This operation is suitable only for Anti-DDoS Proxy (Chinese Mainland).
   * 
   * @param request - DescribeElasticBandwidthSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeElasticBandwidthSpecResponse
   */
  async describeElasticBandwidthSpecWithOptions(request: $_model.DescribeElasticBandwidthSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeElasticBandwidthSpecResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeElasticBandwidthSpec",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeElasticBandwidthSpecResponse>(await this.callApi(params, req, runtime), new $_model.DescribeElasticBandwidthSpecResponse({}));
  }

  /**
   * Queries the available burstable protection bandwidths of an Anti-DDoS Proxy (Chinese Mainland) instance.
   * 
   * @remarks
   * >  This operation is suitable only for Anti-DDoS Proxy (Chinese Mainland).
   * 
   * @param request - DescribeElasticBandwidthSpecRequest
   * @returns DescribeElasticBandwidthSpecResponse
   */
  async describeElasticBandwidthSpec(request: $_model.DescribeElasticBandwidthSpecRequest): Promise<$_model.DescribeElasticBandwidthSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeElasticBandwidthSpecWithOptions(request, runtime);
  }

  /**
   * Queries the line chart of the bills for the burstable QPS of an Anti-DDoS Proxy instance.
   * 
   * @param request - DescribeElasticQpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeElasticQpsResponse
   */
  async describeElasticQpsWithOptions(request: $_model.DescribeElasticQpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeElasticQpsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeElasticQps",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeElasticQpsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeElasticQpsResponse({}));
  }

  /**
   * Queries the line chart of the bills for the burstable QPS of an Anti-DDoS Proxy instance.
   * 
   * @param request - DescribeElasticQpsRequest
   * @returns DescribeElasticQpsResponse
   */
  async describeElasticQps(request: $_model.DescribeElasticQpsRequest): Promise<$_model.DescribeElasticQpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeElasticQpsWithOptions(request, runtime);
  }

  /**
   * Queries the burstable QPS details of an Anti-DDoS Proxy instance.
   * 
   * @param request - DescribeElasticQpsRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeElasticQpsRecordResponse
   */
  async describeElasticQpsRecordWithOptions(request: $_model.DescribeElasticQpsRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeElasticQpsRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeElasticQpsRecord",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeElasticQpsRecordResponse>(await this.callApi(params, req, runtime), new $_model.DescribeElasticQpsRecordResponse({}));
  }

  /**
   * Queries the burstable QPS details of an Anti-DDoS Proxy instance.
   * 
   * @param request - DescribeElasticQpsRecordRequest
   * @returns DescribeElasticQpsRecordResponse
   */
  async describeElasticQpsRecord(request: $_model.DescribeElasticQpsRecordRequest): Promise<$_model.DescribeElasticQpsRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeElasticQpsRecordWithOptions(request, runtime);
  }

  /**
   * Queries the custom header that is specified for a domain name.
   * 
   * @param request - DescribeHeadersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHeadersResponse
   */
  async describeHeadersWithOptions(request: $_model.DescribeHeadersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHeadersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHeaders",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHeadersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHeadersResponse({}));
  }

  /**
   * Queries the custom header that is specified for a domain name.
   * 
   * @param request - DescribeHeadersRequest
   * @returns DescribeHeadersResponse
   */
  async describeHeaders(request: $_model.DescribeHeadersRequest): Promise<$_model.DescribeHeadersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHeadersWithOptions(request, runtime);
  }

  /**
   * Queries the Layer 4 or Layer 7 health check configurations of a port forwarding rule.
   * 
   * @param request - DescribeHealthCheckListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHealthCheckListResponse
   */
  async describeHealthCheckListWithOptions(request: $_model.DescribeHealthCheckListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHealthCheckListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.networkRules)) {
      query["NetworkRules"] = request.networkRules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHealthCheckList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHealthCheckListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHealthCheckListResponse({}));
  }

  /**
   * Queries the Layer 4 or Layer 7 health check configurations of a port forwarding rule.
   * 
   * @param request - DescribeHealthCheckListRequest
   * @returns DescribeHealthCheckListResponse
   */
  async describeHealthCheckList(request: $_model.DescribeHealthCheckListRequest): Promise<$_model.DescribeHealthCheckListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHealthCheckListWithOptions(request, runtime);
  }

  /**
   * Queries the health status of an origin server.
   * 
   * @param request - DescribeHealthCheckStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHealthCheckStatusResponse
   */
  async describeHealthCheckStatusWithOptions(request: $_model.DescribeHealthCheckStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHealthCheckStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.networkRules)) {
      query["NetworkRules"] = request.networkRules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHealthCheckStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHealthCheckStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHealthCheckStatusResponse({}));
  }

  /**
   * Queries the health status of an origin server.
   * 
   * @param request - DescribeHealthCheckStatusRequest
   * @returns DescribeHealthCheckStatusResponse
   */
  async describeHealthCheckStatus(request: $_model.DescribeHealthCheckStatusRequest): Promise<$_model.DescribeHealthCheckStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHealthCheckStatusWithOptions(request, runtime);
  }

  /**
   * Queries the IP addresses and Internet service provider (ISP) lines of Anti-DDoS Pro or Anti-DDoS Premium instances.
   * 
   * @remarks
   * You can call the DescribeInstanceDetails operation to query the information about the IP addresses and ISP lines of the instances. The information includes the IP address, status, and protection line.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeInstanceDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceDetailsResponse
   */
  async describeInstanceDetailsWithOptions(request: $_model.DescribeInstanceDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceDetails",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceDetailsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceDetailsResponse({}));
  }

  /**
   * Queries the IP addresses and Internet service provider (ISP) lines of Anti-DDoS Pro or Anti-DDoS Premium instances.
   * 
   * @remarks
   * You can call the DescribeInstanceDetails operation to query the information about the IP addresses and ISP lines of the instances. The information includes the IP address, status, and protection line.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeInstanceDetailsRequest
   * @returns DescribeInstanceDetailsResponse
   */
  async describeInstanceDetails(request: $_model.DescribeInstanceDetailsRequest): Promise<$_model.DescribeInstanceDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceDetailsWithOptions(request, runtime);
  }

  /**
   * Queries the information about Anti-DDoS Pro and Anti-DDoS Premium instances.
   * 
   * @param request - DescribeInstanceExtRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceExtResponse
   */
  async describeInstanceExtWithOptions(request: $_model.DescribeInstanceExtRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceExtResponse> {
    request.validate();
    let query = { };
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
      action: "DescribeInstanceExt",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceExtResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceExtResponse({}));
  }

  /**
   * Queries the information about Anti-DDoS Pro and Anti-DDoS Premium instances.
   * 
   * @param request - DescribeInstanceExtRequest
   * @returns DescribeInstanceExtResponse
   */
  async describeInstanceExt(request: $_model.DescribeInstanceExtRequest): Promise<$_model.DescribeInstanceExtResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceExtWithOptions(request, runtime);
  }

  /**
   * The description of the instance.
   * 
   * @param request - DescribeInstanceIdsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceIdsResponse
   */
  async describeInstanceIdsWithOptions(request: $_model.DescribeInstanceIdsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceIdsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.edition)) {
      query["Edition"] = request.edition;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceIds",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceIdsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceIdsResponse({}));
  }

  /**
   * The description of the instance.
   * 
   * @param request - DescribeInstanceIdsRequest
   * @returns DescribeInstanceIdsResponse
   */
  async describeInstanceIds(request: $_model.DescribeInstanceIdsRequest): Promise<$_model.DescribeInstanceIdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceIdsWithOptions(request, runtime);
  }

  /**
   * Queries the specifications of Anti-DDoS Pro or Anti-DDoS Premium instances.
   * 
   * @remarks
   * You can call the DescribeInstanceSpecs operation to query the specifications of multiple Anti-DDoS Pro or Anti-DDoS Premium instances at a time. The specifications include the clean bandwidth, protection bandwidth, function plan, and the numbers of domain names and ports that can be protected.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeInstanceSpecsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceSpecsResponse
   */
  async describeInstanceSpecsWithOptions(request: $_model.DescribeInstanceSpecsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceSpecsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceSpecs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceSpecsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceSpecsResponse({}));
  }

  /**
   * Queries the specifications of Anti-DDoS Pro or Anti-DDoS Premium instances.
   * 
   * @remarks
   * You can call the DescribeInstanceSpecs operation to query the specifications of multiple Anti-DDoS Pro or Anti-DDoS Premium instances at a time. The specifications include the clean bandwidth, protection bandwidth, function plan, and the numbers of domain names and ports that can be protected.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeInstanceSpecsRequest
   * @returns DescribeInstanceSpecsResponse
   */
  async describeInstanceSpecs(request: $_model.DescribeInstanceSpecsRequest): Promise<$_model.DescribeInstanceSpecsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceSpecsWithOptions(request, runtime);
  }

  /**
   * Queries the statistics on one or more Anti-DDoS Proxy instances, such as the numbers of protected domain names and ports.
   * 
   * @param request - DescribeInstanceStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceStatisticsResponse
   */
  async describeInstanceStatisticsWithOptions(request: $_model.DescribeInstanceStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceStatistics",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceStatisticsResponse({}));
  }

  /**
   * Queries the statistics on one or more Anti-DDoS Proxy instances, such as the numbers of protected domain names and ports.
   * 
   * @param request - DescribeInstanceStatisticsRequest
   * @returns DescribeInstanceStatisticsResponse
   */
  async describeInstanceStatistics(request: $_model.DescribeInstanceStatisticsRequest): Promise<$_model.DescribeInstanceStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries the status of a specified Anti-DDoS Proxy instance.
   * 
   * @param request - DescribeInstanceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceStatusResponse
   */
  async describeInstanceStatusWithOptions(request: $_model.DescribeInstanceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceStatusResponse({}));
  }

  /**
   * Queries the status of a specified Anti-DDoS Proxy instance.
   * 
   * @param request - DescribeInstanceStatusRequest
   * @returns DescribeInstanceStatusResponse
   */
  async describeInstanceStatus(request: $_model.DescribeInstanceStatusRequest): Promise<$_model.DescribeInstanceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceStatusWithOptions(request, runtime);
  }

  /**
   * 查询实例列表
   * 
   * @remarks
   * You can call the DescribeInstances operation to query the details of Anti-DDoS Pro or Anti-DDoS Premium instances within the Alibaba Cloud account by page. The details include the ID, mitigation plan, expiration time, and forwarding status.
   * 
   * @param request - DescribeInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstancesResponse
   */
  async describeInstancesWithOptions(request: $_model.DescribeInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.edition)) {
      query["Edition"] = request.edition;
    }

    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.expireEndTime)) {
      query["ExpireEndTime"] = request.expireEndTime;
    }

    if (!$dara.isNull(request.expireStartTime)) {
      query["ExpireStartTime"] = request.expireStartTime;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstances",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstancesResponse({}));
  }

  /**
   * 查询实例列表
   * 
   * @remarks
   * You can call the DescribeInstances operation to query the details of Anti-DDoS Pro or Anti-DDoS Premium instances within the Alibaba Cloud account by page. The details include the ID, mitigation plan, expiration time, and forwarding status.
   * 
   * @param request - DescribeInstancesRequest
   * @returns DescribeInstancesResponse
   */
  async describeInstances(request: $_model.DescribeInstancesRequest): Promise<$_model.DescribeInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  /**
   * 展示全局模板规则
   * 
   * @param request - DescribeL7GlobalRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeL7GlobalRuleResponse
   */
  async describeL7GlobalRuleWithOptions(request: $_model.DescribeL7GlobalRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeL7GlobalRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeL7GlobalRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeL7GlobalRuleResponse>(await this.callApi(params, req, runtime), new $_model.DescribeL7GlobalRuleResponse({}));
  }

  /**
   * 展示全局模板规则
   * 
   * @param request - DescribeL7GlobalRuleRequest
   * @returns DescribeL7GlobalRuleResponse
   */
  async describeL7GlobalRule(request: $_model.DescribeL7GlobalRuleRequest): Promise<$_model.DescribeL7GlobalRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeL7GlobalRuleWithOptions(request, runtime);
  }

  /**
   * Queries the back-to-origin policies for the forwarding rule of a website.
   * 
   * @param request - DescribeL7RsPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeL7RsPolicyResponse
   */
  async describeL7RsPolicyWithOptions(request: $_model.DescribeL7RsPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeL7RsPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.realServers)) {
      query["RealServers"] = request.realServers;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeL7RsPolicy",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeL7RsPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeL7RsPolicyResponse({}));
  }

  /**
   * Queries the back-to-origin policies for the forwarding rule of a website.
   * 
   * @param request - DescribeL7RsPolicyRequest
   * @returns DescribeL7RsPolicyResponse
   */
  async describeL7RsPolicy(request: $_model.DescribeL7RsPolicyRequest): Promise<$_model.DescribeL7RsPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeL7RsPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the configuration of back-to-origin persistent connections of a domain name.
   * 
   * @param request - DescribeL7UsKeepaliveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeL7UsKeepaliveResponse
   */
  async describeL7UsKeepaliveWithOptions(request: $_model.DescribeL7UsKeepaliveRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeL7UsKeepaliveResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeL7UsKeepalive",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeL7UsKeepaliveResponse>(await this.callApi(params, req, runtime), new $_model.DescribeL7UsKeepaliveResponse({}));
  }

  /**
   * Queries the configuration of back-to-origin persistent connections of a domain name.
   * 
   * @param request - DescribeL7UsKeepaliveRequest
   * @returns DescribeL7UsKeepaliveResponse
   */
  async describeL7UsKeepalive(request: $_model.DescribeL7UsKeepaliveRequest): Promise<$_model.DescribeL7UsKeepaliveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeL7UsKeepaliveWithOptions(request, runtime);
  }

  /**
   * Queries the back-to-origin settings of a port forwarding rule.
   * 
   * @param request - DescribeLayer4RulePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLayer4RulePolicyResponse
   */
  async describeLayer4RulePolicyWithOptions(request: $_model.DescribeLayer4RulePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLayer4RulePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listeners)) {
      query["Listeners"] = request.listeners;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLayer4RulePolicy",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLayer4RulePolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLayer4RulePolicyResponse({}));
  }

  /**
   * Queries the back-to-origin settings of a port forwarding rule.
   * 
   * @param request - DescribeLayer4RulePolicyRequest
   * @returns DescribeLayer4RulePolicyResponse
   */
  async describeLayer4RulePolicy(request: $_model.DescribeLayer4RulePolicyRequest): Promise<$_model.DescribeLayer4RulePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLayer4RulePolicyWithOptions(request, runtime);
  }

  /**
   * Checks whether a Logstore is created for Anti-DDoS Proxy.
   * 
   * @param request - DescribeLogStoreExistStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLogStoreExistStatusResponse
   */
  async describeLogStoreExistStatusWithOptions(request: $_model.DescribeLogStoreExistStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLogStoreExistStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLogStoreExistStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLogStoreExistStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLogStoreExistStatusResponse({}));
  }

  /**
   * Checks whether a Logstore is created for Anti-DDoS Proxy.
   * 
   * @param request - DescribeLogStoreExistStatusRequest
   * @returns DescribeLogStoreExistStatusResponse
   */
  async describeLogStoreExistStatus(request: $_model.DescribeLogStoreExistStatusRequest): Promise<$_model.DescribeLogStoreExistStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLogStoreExistStatusWithOptions(request, runtime);
  }

  /**
   * Queries the blocked locations that are configured for an Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @param request - DescribeNetworkRegionBlockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNetworkRegionBlockResponse
   */
  async describeNetworkRegionBlockWithOptions(request: $_model.DescribeNetworkRegionBlockRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNetworkRegionBlockResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNetworkRegionBlock",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNetworkRegionBlockResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNetworkRegionBlockResponse({}));
  }

  /**
   * Queries the blocked locations that are configured for an Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @param request - DescribeNetworkRegionBlockRequest
   * @returns DescribeNetworkRegionBlockResponse
   */
  async describeNetworkRegionBlock(request: $_model.DescribeNetworkRegionBlockRequest): Promise<$_model.DescribeNetworkRegionBlockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNetworkRegionBlockWithOptions(request, runtime);
  }

  /**
   * Queries the mitigation settings of the port forwarding rule for a non-website service. The mitigation settings include session persistence and DDoS mitigation policies.
   * 
   * @param request - DescribeNetworkRuleAttributesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNetworkRuleAttributesResponse
   */
  async describeNetworkRuleAttributesWithOptions(request: $_model.DescribeNetworkRuleAttributesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNetworkRuleAttributesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.networkRules)) {
      query["NetworkRules"] = request.networkRules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNetworkRuleAttributes",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNetworkRuleAttributesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNetworkRuleAttributesResponse({}));
  }

  /**
   * Queries the mitigation settings of the port forwarding rule for a non-website service. The mitigation settings include session persistence and DDoS mitigation policies.
   * 
   * @param request - DescribeNetworkRuleAttributesRequest
   * @returns DescribeNetworkRuleAttributesResponse
   */
  async describeNetworkRuleAttributes(request: $_model.DescribeNetworkRuleAttributesRequest): Promise<$_model.DescribeNetworkRuleAttributesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNetworkRuleAttributesWithOptions(request, runtime);
  }

  /**
   * Queries port forwarding rules.
   * 
   * @param request - DescribeNetworkRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNetworkRulesResponse
   */
  async describeNetworkRulesWithOptions(request: $_model.DescribeNetworkRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNetworkRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.forwardProtocol)) {
      query["ForwardProtocol"] = request.forwardProtocol;
    }

    if (!$dara.isNull(request.frontendPort)) {
      query["FrontendPort"] = request.frontendPort;
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
      action: "DescribeNetworkRules",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNetworkRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNetworkRulesResponse({}));
  }

  /**
   * Queries port forwarding rules.
   * 
   * @param request - DescribeNetworkRulesRequest
   * @returns DescribeNetworkRulesResponse
   */
  async describeNetworkRules(request: $_model.DescribeNetworkRulesRequest): Promise<$_model.DescribeNetworkRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNetworkRulesWithOptions(request, runtime);
  }

  /**
   * Queries the operation logs of Anti-DDoS Proxy (Chinese Mainland).
   * 
   * @remarks
   * >  This operation is suitable only for Anti-DDoS Proxy (Chinese Mainland).
   * You can query operations performed on Anti-DDoS Proxy (Chinese Mainland), such as configuring the burstable protection bandwidth, deactivating blackhole filtering, configuring the near-origin traffic diversion feature, using Anti-DDoS plans, changing the IP addresses of Elastic Compute Service (ECS) instances, and clearing all logs.
   * 
   * @param request - DescribeOpEntitiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOpEntitiesResponse
   */
  async describeOpEntitiesWithOptions(request: $_model.DescribeOpEntitiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOpEntitiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.entityObject)) {
      query["EntityObject"] = request.entityObject;
    }

    if (!$dara.isNull(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOpEntities",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOpEntitiesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOpEntitiesResponse({}));
  }

  /**
   * Queries the operation logs of Anti-DDoS Proxy (Chinese Mainland).
   * 
   * @remarks
   * >  This operation is suitable only for Anti-DDoS Proxy (Chinese Mainland).
   * You can query operations performed on Anti-DDoS Proxy (Chinese Mainland), such as configuring the burstable protection bandwidth, deactivating blackhole filtering, configuring the near-origin traffic diversion feature, using Anti-DDoS plans, changing the IP addresses of Elastic Compute Service (ECS) instances, and clearing all logs.
   * 
   * @param request - DescribeOpEntitiesRequest
   * @returns DescribeOpEntitiesResponse
   */
  async describeOpEntities(request: $_model.DescribeOpEntitiesRequest): Promise<$_model.DescribeOpEntitiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOpEntitiesWithOptions(request, runtime);
  }

  /**
   * Queries the port forwarding rules that are created for an Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @remarks
   * You can call this operation by using Terraform. For more information about Terraform, see [What is Terraform?](https://help.aliyun.com/document_detail/95820.html).
   * 
   * @param request - DescribePortRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePortResponse
   */
  async describePortWithOptions(request: $_model.DescribePortRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePortResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.frontendPort)) {
      query["FrontendPort"] = request.frontendPort;
    }

    if (!$dara.isNull(request.frontendProtocol)) {
      query["FrontendProtocol"] = request.frontendProtocol;
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
      action: "DescribePort",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePortResponse>(await this.callApi(params, req, runtime), new $_model.DescribePortResponse({}));
  }

  /**
   * Queries the port forwarding rules that are created for an Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @remarks
   * You can call this operation by using Terraform. For more information about Terraform, see [What is Terraform?](https://help.aliyun.com/document_detail/95820.html).
   * 
   * @param request - DescribePortRequest
   * @returns DescribePortResponse
   */
  async describePort(request: $_model.DescribePortRequest): Promise<$_model.DescribePortResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePortWithOptions(request, runtime);
  }

  /**
   * Queries the peak attack traffic bandwidth and peak attack traffic packet rates of one or more Anti-DDoS Pro or Anti-DDoS Premium instances within a specified period of time.
   * 
   * @remarks
   * You can call this operation to query the peak bandwidth and peak packet rate of attack traffic on one or more Anti-DDoS Pro or Anti-DDoS Premium instances within a specific period of time.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribePortAttackMaxFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePortAttackMaxFlowResponse
   */
  async describePortAttackMaxFlowWithOptions(request: $_model.DescribePortAttackMaxFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePortAttackMaxFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePortAttackMaxFlow",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePortAttackMaxFlowResponse>(await this.callApi(params, req, runtime), new $_model.DescribePortAttackMaxFlowResponse({}));
  }

  /**
   * Queries the peak attack traffic bandwidth and peak attack traffic packet rates of one or more Anti-DDoS Pro or Anti-DDoS Premium instances within a specified period of time.
   * 
   * @remarks
   * You can call this operation to query the peak bandwidth and peak packet rate of attack traffic on one or more Anti-DDoS Pro or Anti-DDoS Premium instances within a specific period of time.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribePortAttackMaxFlowRequest
   * @returns DescribePortAttackMaxFlowResponse
   */
  async describePortAttackMaxFlow(request: $_model.DescribePortAttackMaxFlowRequest): Promise<$_model.DescribePortAttackMaxFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePortAttackMaxFlowWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of the Intelligent Protection policy for non-website services.
   * 
   * @param request - DescribePortAutoCcStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePortAutoCcStatusResponse
   */
  async describePortAutoCcStatusWithOptions(request: $_model.DescribePortAutoCcStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePortAutoCcStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePortAutoCcStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePortAutoCcStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribePortAutoCcStatusResponse({}));
  }

  /**
   * Queries the configurations of the Intelligent Protection policy for non-website services.
   * 
   * @param request - DescribePortAutoCcStatusRequest
   * @returns DescribePortAutoCcStatusResponse
   */
  async describePortAutoCcStatus(request: $_model.DescribePortAutoCcStatusRequest): Promise<$_model.DescribePortAutoCcStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePortAutoCcStatusWithOptions(request, runtime);
  }

  /**
   * Queries the top source IP addresses of the volumetric attack events for the Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @param request - DescribePortCcAttackTopIPRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePortCcAttackTopIPResponse
   */
  async describePortCcAttackTopIPWithOptions(request: $_model.DescribePortCcAttackTopIPRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePortCcAttackTopIPResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePortCcAttackTopIP",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePortCcAttackTopIPResponse>(await this.callApi(params, req, runtime), new $_model.DescribePortCcAttackTopIPResponse({}));
  }

  /**
   * Queries the top source IP addresses of the volumetric attack events for the Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @param request - DescribePortCcAttackTopIPRequest
   * @returns DescribePortCcAttackTopIPResponse
   */
  async describePortCcAttackTopIP(request: $_model.DescribePortCcAttackTopIPRequest): Promise<$_model.DescribePortCcAttackTopIPResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePortCcAttackTopIPWithOptions(request, runtime);
  }

  /**
   * The statistics on the connections established over the ports of one or more Anti-DDoS Pro or Anti-DDoS Premium instances are queried.
   * 
   * @param request - DescribePortConnsCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePortConnsCountResponse
   */
  async describePortConnsCountWithOptions(request: $_model.DescribePortConnsCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePortConnsCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePortConnsCount",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePortConnsCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribePortConnsCountResponse({}));
  }

  /**
   * The statistics on the connections established over the ports of one or more Anti-DDoS Pro or Anti-DDoS Premium instances are queried.
   * 
   * @param request - DescribePortConnsCountRequest
   * @returns DescribePortConnsCountResponse
   */
  async describePortConnsCount(request: $_model.DescribePortConnsCountRequest): Promise<$_model.DescribePortConnsCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePortConnsCountWithOptions(request, runtime);
  }

  /**
   * Queries the connections established over the ports of one or more Anti-DDoS Proxy instances.
   * 
   * @param request - DescribePortConnsListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePortConnsListResponse
   */
  async describePortConnsListWithOptions(request: $_model.DescribePortConnsListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePortConnsListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePortConnsList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePortConnsListResponse>(await this.callApi(params, req, runtime), new $_model.DescribePortConnsListResponse({}));
  }

  /**
   * Queries the connections established over the ports of one or more Anti-DDoS Proxy instances.
   * 
   * @param request - DescribePortConnsListRequest
   * @returns DescribePortConnsListResponse
   */
  async describePortConnsList(request: $_model.DescribePortConnsListRequest): Promise<$_model.DescribePortConnsListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePortConnsListWithOptions(request, runtime);
  }

  /**
   * Queries the traffic data of one or more Anti-DDoS Pro or Anti-DDoS Premium instances.
   * 
   * @param request - DescribePortFlowListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePortFlowListResponse
   */
  async describePortFlowListWithOptions(request: $_model.DescribePortFlowListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePortFlowListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePortFlowList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePortFlowListResponse>(await this.callApi(params, req, runtime), new $_model.DescribePortFlowListResponse({}));
  }

  /**
   * Queries the traffic data of one or more Anti-DDoS Pro or Anti-DDoS Premium instances.
   * 
   * @param request - DescribePortFlowListRequest
   * @returns DescribePortFlowListResponse
   */
  async describePortFlowList(request: $_model.DescribePortFlowListRequest): Promise<$_model.DescribePortFlowListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePortFlowListWithOptions(request, runtime);
  }

  /**
   * Queries the maximum number of connections that can be established over the ports of one or more Anti-DDoS Proxy instances.
   * 
   * @param request - DescribePortMaxConnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePortMaxConnsResponse
   */
  async describePortMaxConnsWithOptions(request: $_model.DescribePortMaxConnsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePortMaxConnsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePortMaxConns",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePortMaxConnsResponse>(await this.callApi(params, req, runtime), new $_model.DescribePortMaxConnsResponse({}));
  }

  /**
   * Queries the maximum number of connections that can be established over the ports of one or more Anti-DDoS Proxy instances.
   * 
   * @param request - DescribePortMaxConnsRequest
   * @returns DescribePortMaxConnsResponse
   */
  async describePortMaxConns(request: $_model.DescribePortMaxConnsRequest): Promise<$_model.DescribePortMaxConnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePortMaxConnsWithOptions(request, runtime);
  }

  /**
   * Queries the areas and countries from which requests are sent to one or more Anti-DDoS Pro or Anti-DDoS Premium instances within the specified period of time.
   * 
   * @param request - DescribePortViewSourceCountriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePortViewSourceCountriesResponse
   */
  async describePortViewSourceCountriesWithOptions(request: $_model.DescribePortViewSourceCountriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePortViewSourceCountriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePortViewSourceCountries",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePortViewSourceCountriesResponse>(await this.callApi(params, req, runtime), new $_model.DescribePortViewSourceCountriesResponse({}));
  }

  /**
   * Queries the areas and countries from which requests are sent to one or more Anti-DDoS Pro or Anti-DDoS Premium instances within the specified period of time.
   * 
   * @param request - DescribePortViewSourceCountriesRequest
   * @returns DescribePortViewSourceCountriesResponse
   */
  async describePortViewSourceCountries(request: $_model.DescribePortViewSourceCountriesRequest): Promise<$_model.DescribePortViewSourceCountriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePortViewSourceCountriesWithOptions(request, runtime);
  }

  /**
   * Queries the Internet service providers (ISPs) from which requests are sent to one or more Anti-DDoS Pro or Anti-DDoS Premium instances within the specified period of time.
   * 
   * @remarks
   * You can call the DescribePortViewSourceIsps operation to query the ISPs from which requests are sent to one or more Anti-DDoS Pro or Anti-DDoS Premium instances within a specific period of time.
   * > The data returned for this operation cannot reflect the actual traffic volume because Layer 4 identity authentication algorithms are updated for Anti-DDoS Pro and Anti-DDoS Premium. You can call this operation to calculate only the proportion of requests sent from different ISPs. If you want to query the request traffic volume, we recommend that you call the [DescribePortFlowList](https://help.aliyun.com/document_detail/157460.html) operation.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribePortViewSourceIspsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePortViewSourceIspsResponse
   */
  async describePortViewSourceIspsWithOptions(request: $_model.DescribePortViewSourceIspsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePortViewSourceIspsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePortViewSourceIsps",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePortViewSourceIspsResponse>(await this.callApi(params, req, runtime), new $_model.DescribePortViewSourceIspsResponse({}));
  }

  /**
   * Queries the Internet service providers (ISPs) from which requests are sent to one or more Anti-DDoS Pro or Anti-DDoS Premium instances within the specified period of time.
   * 
   * @remarks
   * You can call the DescribePortViewSourceIsps operation to query the ISPs from which requests are sent to one or more Anti-DDoS Pro or Anti-DDoS Premium instances within a specific period of time.
   * > The data returned for this operation cannot reflect the actual traffic volume because Layer 4 identity authentication algorithms are updated for Anti-DDoS Pro and Anti-DDoS Premium. You can call this operation to calculate only the proportion of requests sent from different ISPs. If you want to query the request traffic volume, we recommend that you call the [DescribePortFlowList](https://help.aliyun.com/document_detail/157460.html) operation.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribePortViewSourceIspsRequest
   * @returns DescribePortViewSourceIspsResponse
   */
  async describePortViewSourceIsps(request: $_model.DescribePortViewSourceIspsRequest): Promise<$_model.DescribePortViewSourceIspsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePortViewSourceIspsWithOptions(request, runtime);
  }

  /**
   * Queries the administrative regions in China from which requests are sent to one or more Anti-DDoS Pro or Anti-DDoS Premium instances within a specified period of time.
   * 
   * @param request - DescribePortViewSourceProvincesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePortViewSourceProvincesResponse
   */
  async describePortViewSourceProvincesWithOptions(request: $_model.DescribePortViewSourceProvincesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePortViewSourceProvincesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePortViewSourceProvinces",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePortViewSourceProvincesResponse>(await this.callApi(params, req, runtime), new $_model.DescribePortViewSourceProvincesResponse({}));
  }

  /**
   * Queries the administrative regions in China from which requests are sent to one or more Anti-DDoS Pro or Anti-DDoS Premium instances within a specified period of time.
   * 
   * @param request - DescribePortViewSourceProvincesRequest
   * @returns DescribePortViewSourceProvincesResponse
   */
  async describePortViewSourceProvinces(request: $_model.DescribePortViewSourceProvincesRequest): Promise<$_model.DescribePortViewSourceProvincesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePortViewSourceProvincesWithOptions(request, runtime);
  }

  /**
   * Queries the protected objects of a scenario-specific custom policy.
   * 
   * @remarks
   * You can call the DescribeSceneDefenseObjects operation to query the protected objects of a scenario-specific custom policy.
   * Before you call this operation, make sure that you have created a scenario-specific custom policy by calling the [CreateSceneDefensePolicy](https://help.aliyun.com/document_detail/159779.html) operation.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeSceneDefenseObjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSceneDefenseObjectsResponse
   */
  async describeSceneDefenseObjectsWithOptions(request: $_model.DescribeSceneDefenseObjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSceneDefenseObjectsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSceneDefenseObjects",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSceneDefenseObjectsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSceneDefenseObjectsResponse({}));
  }

  /**
   * Queries the protected objects of a scenario-specific custom policy.
   * 
   * @remarks
   * You can call the DescribeSceneDefenseObjects operation to query the protected objects of a scenario-specific custom policy.
   * Before you call this operation, make sure that you have created a scenario-specific custom policy by calling the [CreateSceneDefensePolicy](https://help.aliyun.com/document_detail/159779.html) operation.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeSceneDefenseObjectsRequest
   * @returns DescribeSceneDefenseObjectsResponse
   */
  async describeSceneDefenseObjects(request: $_model.DescribeSceneDefenseObjectsRequest): Promise<$_model.DescribeSceneDefenseObjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSceneDefenseObjectsWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of a scenario-specific custom policy.
   * 
   * @remarks
   * You can call the DescribeSceneDefensePolicies operation to query the configurations of a scenario-specific custom policy that is created. For example, you can query the status, protected objects, and protection rules of the policy.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeSceneDefensePoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSceneDefensePoliciesResponse
   */
  async describeSceneDefensePoliciesWithOptions(request: $_model.DescribeSceneDefensePoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSceneDefensePoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.template)) {
      query["Template"] = request.template;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSceneDefensePolicies",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSceneDefensePoliciesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSceneDefensePoliciesResponse({}));
  }

  /**
   * Queries the configurations of a scenario-specific custom policy.
   * 
   * @remarks
   * You can call the DescribeSceneDefensePolicies operation to query the configurations of a scenario-specific custom policy that is created. For example, you can query the status, protected objects, and protection rules of the policy.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeSceneDefensePoliciesRequest
   * @returns DescribeSceneDefensePoliciesResponse
   */
  async describeSceneDefensePolicies(request: $_model.DescribeSceneDefensePoliciesRequest): Promise<$_model.DescribeSceneDefensePoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSceneDefensePoliciesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeSchedulerRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSchedulerRulesResponse
   */
  async describeSchedulerRulesWithOptions(request: $_model.DescribeSchedulerRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSchedulerRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSchedulerRules",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSchedulerRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSchedulerRulesResponse({}));
  }

  /**
   * @param request - DescribeSchedulerRulesRequest
   * @returns DescribeSchedulerRulesResponse
   */
  async describeSchedulerRules(request: $_model.DescribeSchedulerRulesRequest): Promise<$_model.DescribeSchedulerRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSchedulerRulesWithOptions(request, runtime);
  }

  /**
   * Queries the destination rate limit events.
   * 
   * @param request - DescribeSlaEventListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlaEventListResponse
   */
  async describeSlaEventListWithOptions(request: $_model.DescribeSlaEventListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlaEventListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlaEventList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSlaEventListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSlaEventListResponse({}));
  }

  /**
   * Queries the destination rate limit events.
   * 
   * @param request - DescribeSlaEventListRequest
   * @returns DescribeSlaEventListResponse
   */
  async describeSlaEventList(request: $_model.DescribeSlaEventListRequest): Promise<$_model.DescribeSlaEventListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlaEventListWithOptions(request, runtime);
  }

  /**
   * Queries whether Anti-DDoS Proxy is authorized to access Simple Log Service.
   * 
   * @param request - DescribeSlsAuthStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlsAuthStatusResponse
   */
  async describeSlsAuthStatusWithOptions(request: $_model.DescribeSlsAuthStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlsAuthStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlsAuthStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSlsAuthStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSlsAuthStatusResponse({}));
  }

  /**
   * Queries whether Anti-DDoS Proxy is authorized to access Simple Log Service.
   * 
   * @param request - DescribeSlsAuthStatusRequest
   * @returns DescribeSlsAuthStatusResponse
   */
  async describeSlsAuthStatus(request: $_model.DescribeSlsAuthStatusRequest): Promise<$_model.DescribeSlsAuthStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlsAuthStatusWithOptions(request, runtime);
  }

  /**
   * Queries information about the Logstore of the Anti-DDoS Proxy instance, such as the log storage capacity and log storage duration.
   * 
   * @param request - DescribeSlsLogstoreInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlsLogstoreInfoResponse
   */
  async describeSlsLogstoreInfoWithOptions(request: $_model.DescribeSlsLogstoreInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlsLogstoreInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlsLogstoreInfo",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSlsLogstoreInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSlsLogstoreInfoResponse({}));
  }

  /**
   * Queries information about the Logstore of the Anti-DDoS Proxy instance, such as the log storage capacity and log storage duration.
   * 
   * @param request - DescribeSlsLogstoreInfoRequest
   * @returns DescribeSlsLogstoreInfoResponse
   */
  async describeSlsLogstoreInfo(request: $_model.DescribeSlsLogstoreInfoRequest): Promise<$_model.DescribeSlsLogstoreInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlsLogstoreInfoWithOptions(request, runtime);
  }

  /**
   * Checks whether Simple Log Service is activated.
   * 
   * @param request - DescribeSlsOpenStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlsOpenStatusResponse
   */
  async describeSlsOpenStatusWithOptions(request: $_model.DescribeSlsOpenStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlsOpenStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlsOpenStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSlsOpenStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSlsOpenStatusResponse({}));
  }

  /**
   * Checks whether Simple Log Service is activated.
   * 
   * @param request - DescribeSlsOpenStatusRequest
   * @returns DescribeSlsOpenStatusResponse
   */
  async describeSlsOpenStatus(request: $_model.DescribeSlsOpenStatusRequest): Promise<$_model.DescribeSlsOpenStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlsOpenStatusWithOptions(request, runtime);
  }

  /**
   * Queries whether Anti-DDoS Pro or Anti-DDoS Premium is authorized to access other cloud services.
   * 
   * @remarks
   * You can call the DescribeStsGrantStatus operation to query whether Anti-DDoS Pro or Anti-DDoS Premium of the current Alibaba Cloud account is authorized to access other cloud services.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeStsGrantStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStsGrantStatusResponse
   */
  async describeStsGrantStatusWithOptions(request: $_model.DescribeStsGrantStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeStsGrantStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeStsGrantStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeStsGrantStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeStsGrantStatusResponse({}));
  }

  /**
   * Queries whether Anti-DDoS Pro or Anti-DDoS Premium is authorized to access other cloud services.
   * 
   * @remarks
   * You can call the DescribeStsGrantStatus operation to query whether Anti-DDoS Pro or Anti-DDoS Premium of the current Alibaba Cloud account is authorized to access other cloud services.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeStsGrantStatusRequest
   * @returns DescribeStsGrantStatusResponse
   */
  async describeStsGrantStatus(request: $_model.DescribeStsGrantStatusRequest): Promise<$_model.DescribeStsGrantStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStsGrantStatusWithOptions(request, runtime);
  }

  /**
   * Queries the details of the bills for the burstable clean bandwidth.
   * 
   * @remarks
   * You can call the DescribeSystemLog operation to query the system logs of Anti-DDoS Pro or Anti-DDoS Premium. The system logs contain only billing logs for the burstable clean bandwidth.
   * If you have enabled the burstable clean bandwidth feature, you can call this operation to query the details of the bills of the burstable clean bandwidth.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeSystemLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSystemLogResponse
   */
  async describeSystemLogWithOptions(request: $_model.DescribeSystemLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSystemLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.entityObject)) {
      query["EntityObject"] = request.entityObject;
    }

    if (!$dara.isNull(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSystemLog",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSystemLogResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSystemLogResponse({}));
  }

  /**
   * Queries the details of the bills for the burstable clean bandwidth.
   * 
   * @remarks
   * You can call the DescribeSystemLog operation to query the system logs of Anti-DDoS Pro or Anti-DDoS Premium. The system logs contain only billing logs for the burstable clean bandwidth.
   * If you have enabled the burstable clean bandwidth feature, you can call this operation to query the details of the bills of the burstable clean bandwidth.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeSystemLogRequest
   * @returns DescribeSystemLogResponse
   */
  async describeSystemLog(request: $_model.DescribeSystemLogRequest): Promise<$_model.DescribeSystemLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSystemLogWithOptions(request, runtime);
  }

  /**
   * Queries all tag keys and the number of Anti-DDoS Proxy (Chinese Mainland) instances to which each tag key is added.
   * 
   * @remarks
   * You can call this operation to query all tag keys and the number of Anti-DDoS Proxy (Chinese Mainland) instances to which each tag key is added by page.
   * >  Only Anti-DDoS Proxy (Chinese Mainland) supports tags.
   * ### [](#qps-)QPS limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagKeysResponse
   */
  async describeTagKeysWithOptions(request: $_model.DescribeTagKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTagKeys",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTagKeysResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTagKeysResponse({}));
  }

  /**
   * Queries all tag keys and the number of Anti-DDoS Proxy (Chinese Mainland) instances to which each tag key is added.
   * 
   * @remarks
   * You can call this operation to query all tag keys and the number of Anti-DDoS Proxy (Chinese Mainland) instances to which each tag key is added by page.
   * >  Only Anti-DDoS Proxy (Chinese Mainland) supports tags.
   * ### [](#qps-)QPS limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeTagKeysRequest
   * @returns DescribeTagKeysResponse
   */
  async describeTagKeys(request: $_model.DescribeTagKeysRequest): Promise<$_model.DescribeTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagKeysWithOptions(request, runtime);
  }

  /**
   * Queries the information about the tags that are added to an Anti-DDoS Proxy (Chinese Mainland) instance.
   * 
   * @remarks
   * You can call the DescribeTagResources operation to query the information about the tags that are added to an Anti-DDoS Proxy (Chinese Mainland) instance.
   * >  Only Anti-DDoS Proxy (Chinese Mainland) supports tags.
   * ### [](#qps-)QPS limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagResourcesResponse
   */
  async describeTagResourcesWithOptions(request: $_model.DescribeTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTagResources",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTagResourcesResponse({}));
  }

  /**
   * Queries the information about the tags that are added to an Anti-DDoS Proxy (Chinese Mainland) instance.
   * 
   * @remarks
   * You can call the DescribeTagResources operation to query the information about the tags that are added to an Anti-DDoS Proxy (Chinese Mainland) instance.
   * >  Only Anti-DDoS Proxy (Chinese Mainland) supports tags.
   * ### [](#qps-)QPS limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeTagResourcesRequest
   * @returns DescribeTagResourcesResponse
   */
  async describeTagResources(request: $_model.DescribeTagResourcesRequest): Promise<$_model.DescribeTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the peak bandwidth and peak packet rates of attack traffic on one or more Anti-DDoS Pro or Anti-DDoS Premium instances within a specific period of time.
   * 
   * @param request - DescribeTotalAttackMaxFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTotalAttackMaxFlowResponse
   */
  async describeTotalAttackMaxFlowWithOptions(request: $_model.DescribeTotalAttackMaxFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTotalAttackMaxFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTotalAttackMaxFlow",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTotalAttackMaxFlowResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTotalAttackMaxFlowResponse({}));
  }

  /**
   * Queries the peak bandwidth and peak packet rates of attack traffic on one or more Anti-DDoS Pro or Anti-DDoS Premium instances within a specific period of time.
   * 
   * @param request - DescribeTotalAttackMaxFlowRequest
   * @returns DescribeTotalAttackMaxFlowResponse
   */
  async describeTotalAttackMaxFlow(request: $_model.DescribeTotalAttackMaxFlowRequest): Promise<$_model.DescribeTotalAttackMaxFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTotalAttackMaxFlowWithOptions(request, runtime);
  }

  /**
   * Queries the source ports of UDP traffic that are filtered out by the filtering policies for UDP reflection attacks on an Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @param request - DescribeUdpReflectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUdpReflectResponse
   */
  async describeUdpReflectWithOptions(request: $_model.DescribeUdpReflectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUdpReflectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUdpReflect",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUdpReflectResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUdpReflectResponse({}));
  }

  /**
   * Queries the source ports of UDP traffic that are filtered out by the filtering policies for UDP reflection attacks on an Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @param request - DescribeUdpReflectRequest
   * @returns DescribeUdpReflectResponse
   */
  async describeUdpReflect(request: $_model.DescribeUdpReflectRequest): Promise<$_model.DescribeUdpReflectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUdpReflectWithOptions(request, runtime);
  }

  /**
   * Queries the total quota and remaining quota for blackhole filtering deactivation.
   * 
   * @param request - DescribeUnBlackholeCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUnBlackholeCountResponse
   */
  async describeUnBlackholeCountWithOptions(request: $_model.DescribeUnBlackholeCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUnBlackholeCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUnBlackholeCount",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUnBlackholeCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUnBlackholeCountResponse({}));
  }

  /**
   * Queries the total quota and remaining quota for blackhole filtering deactivation.
   * 
   * @param request - DescribeUnBlackholeCountRequest
   * @returns DescribeUnBlackholeCountResponse
   */
  async describeUnBlackholeCount(request: $_model.DescribeUnBlackholeCountRequest): Promise<$_model.DescribeUnBlackholeCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUnBlackholeCountWithOptions(request, runtime);
  }

  /**
   * Queries the total number and the remaining number of times that you can enable the near-origin traffic diversion feature.
   * 
   * @remarks
   * >  This operation is suitable only for Anti-DDoS Proxy (Chinese Mainland).
   * 
   * @param request - DescribeUnBlockCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUnBlockCountResponse
   */
  async describeUnBlockCountWithOptions(request: $_model.DescribeUnBlockCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUnBlockCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUnBlockCount",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUnBlockCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUnBlockCountResponse({}));
  }

  /**
   * Queries the total number and the remaining number of times that you can enable the near-origin traffic diversion feature.
   * 
   * @remarks
   * >  This operation is suitable only for Anti-DDoS Proxy (Chinese Mainland).
   * 
   * @param request - DescribeUnBlockCountRequest
   * @returns DescribeUnBlockCountResponse
   */
  async describeUnBlockCount(request: $_model.DescribeUnBlockCountRequest): Promise<$_model.DescribeUnBlockCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUnBlockCountWithOptions(request, runtime);
  }

  /**
   * Checks whether the log analysis feature is enabled for all domain names.
   * 
   * @remarks
   * You can call the DescribeWebAccessLogDispatchStatus operation to check whether the log analysis feature is enabled for all domain names that are added to your Anti-DDoS Pro or Anti-DDoS Premium instance.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeWebAccessLogDispatchStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWebAccessLogDispatchStatusResponse
   */
  async describeWebAccessLogDispatchStatusWithOptions(request: $_model.DescribeWebAccessLogDispatchStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWebAccessLogDispatchStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWebAccessLogDispatchStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWebAccessLogDispatchStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWebAccessLogDispatchStatusResponse({}));
  }

  /**
   * Checks whether the log analysis feature is enabled for all domain names.
   * 
   * @remarks
   * You can call the DescribeWebAccessLogDispatchStatus operation to check whether the log analysis feature is enabled for all domain names that are added to your Anti-DDoS Pro or Anti-DDoS Premium instance.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeWebAccessLogDispatchStatusRequest
   * @returns DescribeWebAccessLogDispatchStatusResponse
   */
  async describeWebAccessLogDispatchStatus(request: $_model.DescribeWebAccessLogDispatchStatusRequest): Promise<$_model.DescribeWebAccessLogDispatchStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebAccessLogDispatchStatusWithOptions(request, runtime);
  }

  /**
   * Queries the remaining quota that allows you to clear the Logstore.
   * 
   * @param request - DescribeWebAccessLogEmptyCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWebAccessLogEmptyCountResponse
   */
  async describeWebAccessLogEmptyCountWithOptions(request: $_model.DescribeWebAccessLogEmptyCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWebAccessLogEmptyCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWebAccessLogEmptyCount",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWebAccessLogEmptyCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWebAccessLogEmptyCountResponse({}));
  }

  /**
   * Queries the remaining quota that allows you to clear the Logstore.
   * 
   * @param request - DescribeWebAccessLogEmptyCountRequest
   * @returns DescribeWebAccessLogEmptyCountResponse
   */
  async describeWebAccessLogEmptyCount(request: $_model.DescribeWebAccessLogEmptyCountRequest): Promise<$_model.DescribeWebAccessLogEmptyCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebAccessLogEmptyCountWithOptions(request, runtime);
  }

  /**
   * Queries the information about the log analysis feature for a website, such as the feature status and the Simple Log Service project and Logstore that are used.
   * 
   * @param request - DescribeWebAccessLogStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWebAccessLogStatusResponse
   */
  async describeWebAccessLogStatusWithOptions(request: $_model.DescribeWebAccessLogStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWebAccessLogStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWebAccessLogStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWebAccessLogStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWebAccessLogStatusResponse({}));
  }

  /**
   * Queries the information about the log analysis feature for a website, such as the feature status and the Simple Log Service project and Logstore that are used.
   * 
   * @param request - DescribeWebAccessLogStatusRequest
   * @returns DescribeWebAccessLogStatusResponse
   */
  async describeWebAccessLogStatus(request: $_model.DescribeWebAccessLogStatusRequest): Promise<$_model.DescribeWebAccessLogStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebAccessLogStatusWithOptions(request, runtime);
  }

  /**
   * Queries the mode in which a website service is added to Anti-DDoS Pro or Anti-DDoS Premium.
   * 
   * @param request - DescribeWebAccessModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWebAccessModeResponse
   */
  async describeWebAccessModeWithOptions(request: $_model.DescribeWebAccessModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWebAccessModeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domains)) {
      query["Domains"] = request.domains;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWebAccessMode",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWebAccessModeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWebAccessModeResponse({}));
  }

  /**
   * Queries the mode in which a website service is added to Anti-DDoS Pro or Anti-DDoS Premium.
   * 
   * @param request - DescribeWebAccessModeRequest
   * @returns DescribeWebAccessModeResponse
   */
  async describeWebAccessMode(request: $_model.DescribeWebAccessModeRequest): Promise<$_model.DescribeWebAccessModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebAccessModeWithOptions(request, runtime);
  }

  /**
   * Queries the Location Blacklist (Domain Names) configurations for websites.
   * 
   * @param request - DescribeWebAreaBlockConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWebAreaBlockConfigsResponse
   */
  async describeWebAreaBlockConfigsWithOptions(request: $_model.DescribeWebAreaBlockConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWebAreaBlockConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domains)) {
      query["Domains"] = request.domains;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWebAreaBlockConfigs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWebAreaBlockConfigsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWebAreaBlockConfigsResponse({}));
  }

  /**
   * Queries the Location Blacklist (Domain Names) configurations for websites.
   * 
   * @param request - DescribeWebAreaBlockConfigsRequest
   * @returns DescribeWebAreaBlockConfigsResponse
   */
  async describeWebAreaBlockConfigs(request: $_model.DescribeWebAreaBlockConfigsRequest): Promise<$_model.DescribeWebAreaBlockConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebAreaBlockConfigsWithOptions(request, runtime);
  }

  /**
   * Queries the custom frequency control rules that are created for a website.
   * 
   * @deprecated OpenAPI DescribeWebCCRules is deprecated, please use ddoscoo::2020-01-01::ConfigWebCCRuleV2 instead.
   * 
   * @param request - DescribeWebCCRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWebCCRulesResponse
   */
  async describeWebCCRulesWithOptions(request: $_model.DescribeWebCCRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWebCCRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWebCCRules",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWebCCRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWebCCRulesResponse({}));
  }

  /**
   * Queries the custom frequency control rules that are created for a website.
   * 
   * @deprecated OpenAPI DescribeWebCCRules is deprecated, please use ddoscoo::2020-01-01::ConfigWebCCRuleV2 instead.
   * 
   * @param request - DescribeWebCCRulesRequest
   * @returns DescribeWebCCRulesResponse
   */
  // Deprecated
  async describeWebCCRules(request: $_model.DescribeWebCCRulesRequest): Promise<$_model.DescribeWebCCRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebCCRulesWithOptions(request, runtime);
  }

  /**
   * Queries the custom frequency control rules that are created for a website.
   * 
   * @param request - DescribeWebCCRulesV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWebCCRulesV2Response
   */
  async describeWebCCRulesV2WithOptions(request: $_model.DescribeWebCCRulesV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWebCCRulesV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWebCCRulesV2",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWebCCRulesV2Response>(await this.callApi(params, req, runtime), new $_model.DescribeWebCCRulesV2Response({}));
  }

  /**
   * Queries the custom frequency control rules that are created for a website.
   * 
   * @param request - DescribeWebCCRulesV2Request
   * @returns DescribeWebCCRulesV2Response
   */
  async describeWebCCRulesV2(request: $_model.DescribeWebCCRulesV2Request): Promise<$_model.DescribeWebCCRulesV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebCCRulesV2WithOptions(request, runtime);
  }

  /**
   * Queries the Static Page Caching configuration of websites.
   * 
   * @remarks
   * You can call the DescribeWebCacheConfigs operation to query the Static Page Caching configurations of websites. The configurations include cache modes and custom caching rules.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeWebCacheConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWebCacheConfigsResponse
   */
  async describeWebCacheConfigsWithOptions(request: $_model.DescribeWebCacheConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWebCacheConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domains)) {
      query["Domains"] = request.domains;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWebCacheConfigs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWebCacheConfigsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWebCacheConfigsResponse({}));
  }

  /**
   * Queries the Static Page Caching configuration of websites.
   * 
   * @remarks
   * You can call the DescribeWebCacheConfigs operation to query the Static Page Caching configurations of websites. The configurations include cache modes and custom caching rules.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeWebCacheConfigsRequest
   * @returns DescribeWebCacheConfigsResponse
   */
  async describeWebCacheConfigs(request: $_model.DescribeWebCacheConfigsRequest): Promise<$_model.DescribeWebCacheConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebCacheConfigsWithOptions(request, runtime);
  }

  /**
   * Queries the status of each mitigation policy for a website.
   * 
   * @param request - DescribeWebCcProtectSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWebCcProtectSwitchResponse
   */
  async describeWebCcProtectSwitchWithOptions(request: $_model.DescribeWebCcProtectSwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWebCcProtectSwitchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domains)) {
      query["Domains"] = request.domains;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWebCcProtectSwitch",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWebCcProtectSwitchResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWebCcProtectSwitchResponse({}));
  }

  /**
   * Queries the status of each mitigation policy for a website.
   * 
   * @param request - DescribeWebCcProtectSwitchRequest
   * @returns DescribeWebCcProtectSwitchResponse
   */
  async describeWebCcProtectSwitch(request: $_model.DescribeWebCcProtectSwitchRequest): Promise<$_model.DescribeWebCcProtectSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebCcProtectSwitchWithOptions(request, runtime);
  }

  /**
   * Queries the supported custom ports of a website.
   * 
   * @param request - DescribeWebCustomPortsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWebCustomPortsResponse
   */
  async describeWebCustomPortsWithOptions(request: $_model.DescribeWebCustomPortsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWebCustomPortsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWebCustomPorts",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWebCustomPortsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWebCustomPortsResponse({}));
  }

  /**
   * Queries the supported custom ports of a website.
   * 
   * @param request - DescribeWebCustomPortsRequest
   * @returns DescribeWebCustomPortsResponse
   */
  async describeWebCustomPorts(request: $_model.DescribeWebCustomPortsRequest): Promise<$_model.DescribeWebCustomPortsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebCustomPortsWithOptions(request, runtime);
  }

  /**
   * Queries the information about Anti-DDoS Pro or Anti-DDoS Premium instances to which a website service is added.
   * 
   * @param request - DescribeWebInstanceRelationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWebInstanceRelationsResponse
   */
  async describeWebInstanceRelationsWithOptions(request: $_model.DescribeWebInstanceRelationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWebInstanceRelationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domains)) {
      query["Domains"] = request.domains;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWebInstanceRelations",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWebInstanceRelationsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWebInstanceRelationsResponse({}));
  }

  /**
   * Queries the information about Anti-DDoS Pro or Anti-DDoS Premium instances to which a website service is added.
   * 
   * @param request - DescribeWebInstanceRelationsRequest
   * @returns DescribeWebInstanceRelationsResponse
   */
  async describeWebInstanceRelations(request: $_model.DescribeWebInstanceRelationsRequest): Promise<$_model.DescribeWebInstanceRelationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebInstanceRelationsWithOptions(request, runtime);
  }

  /**
   * Queries the accurate access control rules that are created for websites.
   * 
   * @param request - DescribeWebPreciseAccessRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWebPreciseAccessRuleResponse
   */
  async describeWebPreciseAccessRuleWithOptions(request: $_model.DescribeWebPreciseAccessRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWebPreciseAccessRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domains)) {
      query["Domains"] = request.domains;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWebPreciseAccessRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWebPreciseAccessRuleResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWebPreciseAccessRuleResponse({}));
  }

  /**
   * Queries the accurate access control rules that are created for websites.
   * 
   * @param request - DescribeWebPreciseAccessRuleRequest
   * @returns DescribeWebPreciseAccessRuleResponse
   */
  async describeWebPreciseAccessRule(request: $_model.DescribeWebPreciseAccessRuleRequest): Promise<$_model.DescribeWebPreciseAccessRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebPreciseAccessRuleWithOptions(request, runtime);
  }

  /**
   * Queries the top source IP addresses of the web resource exhaustion attacks for the Anti-DDoS Proxy instance.
   * 
   * @param request - DescribeWebReportTopIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWebReportTopIpResponse
   */
  async describeWebReportTopIpWithOptions(request: $_model.DescribeWebReportTopIpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWebReportTopIpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.top)) {
      query["Top"] = request.top;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWebReportTopIp",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWebReportTopIpResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWebReportTopIpResponse({}));
  }

  /**
   * Queries the top source IP addresses of the web resource exhaustion attacks for the Anti-DDoS Proxy instance.
   * 
   * @param request - DescribeWebReportTopIpRequest
   * @returns DescribeWebReportTopIpResponse
   */
  async describeWebReportTopIp(request: $_model.DescribeWebReportTopIpRequest): Promise<$_model.DescribeWebReportTopIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebReportTopIpWithOptions(request, runtime);
  }

  /**
   * Query Configuration of Website Business Forwarding Rules.
   * 
   * @remarks
   * This interface is used for paginated querying of the configurations of website business forwarding rules you have created, such as forwarding protocol types, source server addresses, HTTPS configurations, IP blacklist configurations, and more.
   * Before calling this interface, you must have already called [CreateWebRule](~~CreateWebRule~~) to create website business forwarding rules.
   * ### QPS Limit
   * The per-user QPS limit for this interface is 50 times/second. Exceeding this limit will result in API calls being throttled, which may impact your business; please use it reasonably.
   * 
   * @param request - DescribeWebRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWebRulesResponse
   */
  async describeWebRulesWithOptions(request: $_model.DescribeWebRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWebRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cname)) {
      query["Cname"] = request.cname;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryDomainPattern)) {
      query["QueryDomainPattern"] = request.queryDomainPattern;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWebRules",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWebRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWebRulesResponse({}));
  }

  /**
   * Query Configuration of Website Business Forwarding Rules.
   * 
   * @remarks
   * This interface is used for paginated querying of the configurations of website business forwarding rules you have created, such as forwarding protocol types, source server addresses, HTTPS configurations, IP blacklist configurations, and more.
   * Before calling this interface, you must have already called [CreateWebRule](~~CreateWebRule~~) to create website business forwarding rules.
   * ### QPS Limit
   * The per-user QPS limit for this interface is 50 times/second. Exceeding this limit will result in API calls being throttled, which may impact your business; please use it reasonably.
   * 
   * @param request - DescribeWebRulesRequest
   * @returns DescribeWebRulesResponse
   */
  async describeWebRules(request: $_model.DescribeWebRulesRequest): Promise<$_model.DescribeWebRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebRulesWithOptions(request, runtime);
  }

  /**
   * Removes a protected object from a scenario-specific custom policy.
   * 
   * @param request - DetachSceneDefenseObjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachSceneDefenseObjectResponse
   */
  async detachSceneDefenseObjectWithOptions(request: $_model.DetachSceneDefenseObjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachSceneDefenseObjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!$dara.isNull(request.objects)) {
      query["Objects"] = request.objects;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachSceneDefenseObject",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachSceneDefenseObjectResponse>(await this.callApi(params, req, runtime), new $_model.DetachSceneDefenseObjectResponse({}));
  }

  /**
   * Removes a protected object from a scenario-specific custom policy.
   * 
   * @param request - DetachSceneDefenseObjectRequest
   * @returns DetachSceneDefenseObjectResponse
   */
  async detachSceneDefenseObject(request: $_model.DetachSceneDefenseObjectRequest): Promise<$_model.DetachSceneDefenseObjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachSceneDefenseObjectWithOptions(request, runtime);
  }

  /**
   * Disables a scenario-specific custom policy.
   * 
   * @param request - DisableSceneDefensePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableSceneDefensePolicyResponse
   */
  async disableSceneDefensePolicyWithOptions(request: $_model.DisableSceneDefensePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableSceneDefensePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableSceneDefensePolicy",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableSceneDefensePolicyResponse>(await this.callApi(params, req, runtime), new $_model.DisableSceneDefensePolicyResponse({}));
  }

  /**
   * Disables a scenario-specific custom policy.
   * 
   * @param request - DisableSceneDefensePolicyRequest
   * @returns DisableSceneDefensePolicyResponse
   */
  async disableSceneDefensePolicy(request: $_model.DisableSceneDefensePolicyRequest): Promise<$_model.DisableSceneDefensePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableSceneDefensePolicyWithOptions(request, runtime);
  }

  /**
   * Disables the log analysis feature for a website.
   * 
   * @param request - DisableWebAccessLogConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableWebAccessLogConfigResponse
   */
  async disableWebAccessLogConfigWithOptions(request: $_model.DisableWebAccessLogConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableWebAccessLogConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableWebAccessLogConfig",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableWebAccessLogConfigResponse>(await this.callApi(params, req, runtime), new $_model.DisableWebAccessLogConfigResponse({}));
  }

  /**
   * Disables the log analysis feature for a website.
   * 
   * @param request - DisableWebAccessLogConfigRequest
   * @returns DisableWebAccessLogConfigResponse
   */
  async disableWebAccessLogConfig(request: $_model.DisableWebAccessLogConfigRequest): Promise<$_model.DisableWebAccessLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableWebAccessLogConfigWithOptions(request, runtime);
  }

  /**
   * Disables frequency control for a website.
   * 
   * @param request - DisableWebCCRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableWebCCResponse
   */
  async disableWebCCWithOptions(request: $_model.DisableWebCCRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableWebCCResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableWebCC",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableWebCCResponse>(await this.callApi(params, req, runtime), new $_model.DisableWebCCResponse({}));
  }

  /**
   * Disables frequency control for a website.
   * 
   * @param request - DisableWebCCRequest
   * @returns DisableWebCCResponse
   */
  async disableWebCC(request: $_model.DisableWebCCRequest): Promise<$_model.DisableWebCCResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableWebCCWithOptions(request, runtime);
  }

  /**
   * Disables custom frequency control rules for a website.
   * 
   * @param request - DisableWebCCRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableWebCCRuleResponse
   */
  async disableWebCCRuleWithOptions(request: $_model.DisableWebCCRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableWebCCRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableWebCCRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableWebCCRuleResponse>(await this.callApi(params, req, runtime), new $_model.DisableWebCCRuleResponse({}));
  }

  /**
   * Disables custom frequency control rules for a website.
   * 
   * @param request - DisableWebCCRuleRequest
   * @returns DisableWebCCRuleResponse
   */
  async disableWebCCRule(request: $_model.DisableWebCCRuleRequest): Promise<$_model.DisableWebCCRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableWebCCRuleWithOptions(request, runtime);
  }

  /**
   * Clears the IP address blacklist of an Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @param request - EmptyAutoCcBlacklistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EmptyAutoCcBlacklistResponse
   */
  async emptyAutoCcBlacklistWithOptions(request: $_model.EmptyAutoCcBlacklistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EmptyAutoCcBlacklistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EmptyAutoCcBlacklist",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EmptyAutoCcBlacklistResponse>(await this.callApi(params, req, runtime), new $_model.EmptyAutoCcBlacklistResponse({}));
  }

  /**
   * Clears the IP address blacklist of an Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @param request - EmptyAutoCcBlacklistRequest
   * @returns EmptyAutoCcBlacklistResponse
   */
  async emptyAutoCcBlacklist(request: $_model.EmptyAutoCcBlacklistRequest): Promise<$_model.EmptyAutoCcBlacklistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.emptyAutoCcBlacklistWithOptions(request, runtime);
  }

  /**
   * Clears the IP address whitelist of an Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @param request - EmptyAutoCcWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EmptyAutoCcWhitelistResponse
   */
  async emptyAutoCcWhitelistWithOptions(request: $_model.EmptyAutoCcWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EmptyAutoCcWhitelistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EmptyAutoCcWhitelist",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EmptyAutoCcWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.EmptyAutoCcWhitelistResponse({}));
  }

  /**
   * Clears the IP address whitelist of an Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @param request - EmptyAutoCcWhitelistRequest
   * @returns EmptyAutoCcWhitelistResponse
   */
  async emptyAutoCcWhitelist(request: $_model.EmptyAutoCcWhitelistRequest): Promise<$_model.EmptyAutoCcWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.emptyAutoCcWhitelistWithOptions(request, runtime);
  }

  /**
   * Clears the Logstore of Anti-DDoS Pro or Anti-DDoS Premium.
   * 
   * @param request - EmptySlsLogstoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EmptySlsLogstoreResponse
   */
  async emptySlsLogstoreWithOptions(request: $_model.EmptySlsLogstoreRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EmptySlsLogstoreResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EmptySlsLogstore",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EmptySlsLogstoreResponse>(await this.callApi(params, req, runtime), new $_model.EmptySlsLogstoreResponse({}));
  }

  /**
   * Clears the Logstore of Anti-DDoS Pro or Anti-DDoS Premium.
   * 
   * @param request - EmptySlsLogstoreRequest
   * @returns EmptySlsLogstoreResponse
   */
  async emptySlsLogstore(request: $_model.EmptySlsLogstoreRequest): Promise<$_model.EmptySlsLogstoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.emptySlsLogstoreWithOptions(request, runtime);
  }

  /**
   * Enables a scenario-specific custom policy.
   * 
   * @param request - EnableSceneDefensePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableSceneDefensePolicyResponse
   */
  async enableSceneDefensePolicyWithOptions(request: $_model.EnableSceneDefensePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableSceneDefensePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableSceneDefensePolicy",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableSceneDefensePolicyResponse>(await this.callApi(params, req, runtime), new $_model.EnableSceneDefensePolicyResponse({}));
  }

  /**
   * Enables a scenario-specific custom policy.
   * 
   * @param request - EnableSceneDefensePolicyRequest
   * @returns EnableSceneDefensePolicyResponse
   */
  async enableSceneDefensePolicy(request: $_model.EnableSceneDefensePolicyRequest): Promise<$_model.EnableSceneDefensePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableSceneDefensePolicyWithOptions(request, runtime);
  }

  /**
   * Enables the log analysis feature for a website.
   * 
   * @param request - EnableWebAccessLogConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableWebAccessLogConfigResponse
   */
  async enableWebAccessLogConfigWithOptions(request: $_model.EnableWebAccessLogConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableWebAccessLogConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableWebAccessLogConfig",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableWebAccessLogConfigResponse>(await this.callApi(params, req, runtime), new $_model.EnableWebAccessLogConfigResponse({}));
  }

  /**
   * Enables the log analysis feature for a website.
   * 
   * @param request - EnableWebAccessLogConfigRequest
   * @returns EnableWebAccessLogConfigResponse
   */
  async enableWebAccessLogConfig(request: $_model.EnableWebAccessLogConfigRequest): Promise<$_model.EnableWebAccessLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableWebAccessLogConfigWithOptions(request, runtime);
  }

  /**
   * Enables the Frequency Control policy for a website.
   * 
   * @param request - EnableWebCCRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableWebCCResponse
   */
  async enableWebCCWithOptions(request: $_model.EnableWebCCRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableWebCCResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableWebCC",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableWebCCResponse>(await this.callApi(params, req, runtime), new $_model.EnableWebCCResponse({}));
  }

  /**
   * Enables the Frequency Control policy for a website.
   * 
   * @param request - EnableWebCCRequest
   * @returns EnableWebCCResponse
   */
  async enableWebCC(request: $_model.EnableWebCCRequest): Promise<$_model.EnableWebCCResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableWebCCWithOptions(request, runtime);
  }

  /**
   * Enables custom frequency control rules for a website.
   * 
   * @param request - EnableWebCCRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableWebCCRuleResponse
   */
  async enableWebCCRuleWithOptions(request: $_model.EnableWebCCRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableWebCCRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableWebCCRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableWebCCRuleResponse>(await this.callApi(params, req, runtime), new $_model.EnableWebCCRuleResponse({}));
  }

  /**
   * Enables custom frequency control rules for a website.
   * 
   * @param request - EnableWebCCRuleRequest
   * @returns EnableWebCCRuleResponse
   */
  async enableWebCCRule(request: $_model.EnableWebCCRuleRequest): Promise<$_model.EnableWebCCRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableWebCCRuleWithOptions(request, runtime);
  }

  /**
   * Switches between the metering methods of the burstable clean bandwidth feature.
   * 
   * @remarks
   * You can switch between the metering methods of the burstable clean bandwidth feature. The new metering method takes effect from 00:00 on the first day of the next month. You can change the metering method up to three times each calendar month. The most recent metering method that you select takes effect in the next month. You cannot change the metering method on the last day of each calendar month.
   * 
   * @param request - ModifyBizBandWidthModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBizBandWidthModeResponse
   */
  async modifyBizBandWidthModeWithOptions(request: $_model.ModifyBizBandWidthModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBizBandWidthModeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBizBandWidthMode",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyBizBandWidthModeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyBizBandWidthModeResponse({}));
  }

  /**
   * Switches between the metering methods of the burstable clean bandwidth feature.
   * 
   * @remarks
   * You can switch between the metering methods of the burstable clean bandwidth feature. The new metering method takes effect from 00:00 on the first day of the next month. You can change the metering method up to three times each calendar month. The most recent metering method that you select takes effect in the next month. You cannot change the metering method on the last day of each calendar month.
   * 
   * @param request - ModifyBizBandWidthModeRequest
   * @returns ModifyBizBandWidthModeResponse
   */
  async modifyBizBandWidthMode(request: $_model.ModifyBizBandWidthModeRequest): Promise<$_model.ModifyBizBandWidthModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBizBandWidthModeWithOptions(request, runtime);
  }

  /**
   * Deactivates blackhole filtering that is triggered on an instance.
   * 
   * @param request - ModifyBlackholeStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBlackholeStatusResponse
   */
  async modifyBlackholeStatusWithOptions(request: $_model.ModifyBlackholeStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBlackholeStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.blackholeStatus)) {
      query["BlackholeStatus"] = request.blackholeStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBlackholeStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyBlackholeStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyBlackholeStatusResponse({}));
  }

  /**
   * Deactivates blackhole filtering that is triggered on an instance.
   * 
   * @param request - ModifyBlackholeStatusRequest
   * @returns ModifyBlackholeStatusResponse
   */
  async modifyBlackholeStatus(request: $_model.ModifyBlackholeStatusRequest): Promise<$_model.ModifyBlackholeStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBlackholeStatusWithOptions(request, runtime);
  }

  /**
   * Modifies the Diversion from Origin Server configuration of an Anti-DDoS Proxy (Chinese Mainland) instance.
   * 
   * @remarks
   * >  This operation is suitable only for Anti-DDoS Proxy (Chinese Mainland).
   * 
   * @param request - ModifyBlockStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBlockStatusResponse
   */
  async modifyBlockStatusWithOptions(request: $_model.ModifyBlockStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBlockStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lines)) {
      query["Lines"] = request.lines;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBlockStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyBlockStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyBlockStatusResponse({}));
  }

  /**
   * Modifies the Diversion from Origin Server configuration of an Anti-DDoS Proxy (Chinese Mainland) instance.
   * 
   * @remarks
   * >  This operation is suitable only for Anti-DDoS Proxy (Chinese Mainland).
   * 
   * @param request - ModifyBlockStatusRequest
   * @returns ModifyBlockStatusResponse
   */
  async modifyBlockStatus(request: $_model.ModifyBlockStatusRequest): Promise<$_model.ModifyBlockStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBlockStatusWithOptions(request, runtime);
  }

  /**
   * Enables or disables CNAME reuse for a website.
   * 
   * @remarks
   * > This operation is suitable only for Anti-DDoS Premium.
   * 
   * @param request - ModifyCnameReuseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCnameReuseResponse
   */
  async modifyCnameReuseWithOptions(request: $_model.ModifyCnameReuseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCnameReuseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cname)) {
      query["Cname"] = request.cname;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCnameReuse",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCnameReuseResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCnameReuseResponse({}));
  }

  /**
   * Enables or disables CNAME reuse for a website.
   * 
   * @remarks
   * > This operation is suitable only for Anti-DDoS Premium.
   * 
   * @param request - ModifyCnameReuseRequest
   * @returns ModifyCnameReuseResponse
   */
  async modifyCnameReuse(request: $_model.ModifyCnameReuseRequest): Promise<$_model.ModifyCnameReuseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCnameReuseWithOptions(request, runtime);
  }

  /**
   * Modifies the forwarding rule of a website.
   * 
   * @param request - ModifyDomainResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDomainResourceResponse
   */
  async modifyDomainResourceWithOptions(request: $_model.ModifyDomainResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDomainResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.httpsExt)) {
      query["HttpsExt"] = request.httpsExt;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.proxyTypes)) {
      query["ProxyTypes"] = request.proxyTypes;
    }

    if (!$dara.isNull(request.realServers)) {
      query["RealServers"] = request.realServers;
    }

    if (!$dara.isNull(request.rsType)) {
      query["RsType"] = request.rsType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDomainResource",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDomainResourceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDomainResourceResponse({}));
  }

  /**
   * Modifies the forwarding rule of a website.
   * 
   * @param request - ModifyDomainResourceRequest
   * @returns ModifyDomainResourceResponse
   */
  async modifyDomainResource(request: $_model.ModifyDomainResourceRequest): Promise<$_model.ModifyDomainResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDomainResourceWithOptions(request, runtime);
  }

  /**
   * Modifies the burstable protection bandwidth of a specified Anti-DDoS Proxy (Chinese Mainland) instance.
   * 
   * @remarks
   * >  This operation is suitable only for Anti-DDoS Proxy (Chinese Mainland).
   * 
   * @param request - ModifyElasticBandWidthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyElasticBandWidthResponse
   */
  async modifyElasticBandWidthWithOptions(request: $_model.ModifyElasticBandWidthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyElasticBandWidthResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.elasticBandwidth)) {
      query["ElasticBandwidth"] = request.elasticBandwidth;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyElasticBandWidth",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyElasticBandWidthResponse>(await this.callApi(params, req, runtime), new $_model.ModifyElasticBandWidthResponse({}));
  }

  /**
   * Modifies the burstable protection bandwidth of a specified Anti-DDoS Proxy (Chinese Mainland) instance.
   * 
   * @remarks
   * >  This operation is suitable only for Anti-DDoS Proxy (Chinese Mainland).
   * 
   * @param request - ModifyElasticBandWidthRequest
   * @returns ModifyElasticBandWidthResponse
   */
  async modifyElasticBandWidth(request: $_model.ModifyElasticBandWidthRequest): Promise<$_model.ModifyElasticBandWidthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyElasticBandWidthWithOptions(request, runtime);
  }

  /**
   * Modifies the burstable clean bandwidth for an Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you have fully understood the billing method and [pricing](https://help.aliyun.com/document_detail/283754.html) of the burstable clean bandwidth feature. After you call this operation for the first time, the modification immediately takes effect.
   * 
   * @param request - ModifyElasticBizBandWidthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyElasticBizBandWidthResponse
   */
  async modifyElasticBizBandWidthWithOptions(request: $_model.ModifyElasticBizBandWidthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyElasticBizBandWidthResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.elasticBizBandwidth)) {
      query["ElasticBizBandwidth"] = request.elasticBizBandwidth;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyElasticBizBandWidth",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyElasticBizBandWidthResponse>(await this.callApi(params, req, runtime), new $_model.ModifyElasticBizBandWidthResponse({}));
  }

  /**
   * Modifies the burstable clean bandwidth for an Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you have fully understood the billing method and [pricing](https://help.aliyun.com/document_detail/283754.html) of the burstable clean bandwidth feature. After you call this operation for the first time, the modification immediately takes effect.
   * 
   * @param request - ModifyElasticBizBandWidthRequest
   * @returns ModifyElasticBizBandWidthResponse
   */
  async modifyElasticBizBandWidth(request: $_model.ModifyElasticBizBandWidthRequest): Promise<$_model.ModifyElasticBizBandWidthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyElasticBizBandWidthWithOptions(request, runtime);
  }

  /**
   * Configures the burstable QPS and mode of an Anti-DDoS Proxy instance.
   * 
   * @remarks
   * You can enable burstable QPS only for IPv4 instances.
   * 
   * @param request - ModifyElasticBizQpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyElasticBizQpsResponse
   */
  async modifyElasticBizQpsWithOptions(request: $_model.ModifyElasticBizQpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyElasticBizQpsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.opsElasticQps)) {
      query["OpsElasticQps"] = request.opsElasticQps;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyElasticBizQps",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyElasticBizQpsResponse>(await this.callApi(params, req, runtime), new $_model.ModifyElasticBizQpsResponse({}));
  }

  /**
   * Configures the burstable QPS and mode of an Anti-DDoS Proxy instance.
   * 
   * @remarks
   * You can enable burstable QPS only for IPv4 instances.
   * 
   * @param request - ModifyElasticBizQpsRequest
   * @returns ModifyElasticBizQpsResponse
   */
  async modifyElasticBizQps(request: $_model.ModifyElasticBizQpsRequest): Promise<$_model.ModifyElasticBizQpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyElasticBizQpsWithOptions(request, runtime);
  }

  /**
   * Modifies the log storage duration for Anti-DDoS Proxy.
   * 
   * @param request - ModifyFullLogTtlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFullLogTtlResponse
   */
  async modifyFullLogTtlWithOptions(request: $_model.ModifyFullLogTtlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyFullLogTtlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyFullLogTtl",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyFullLogTtlResponse>(await this.callApi(params, req, runtime), new $_model.ModifyFullLogTtlResponse({}));
  }

  /**
   * Modifies the log storage duration for Anti-DDoS Proxy.
   * 
   * @param request - ModifyFullLogTtlRequest
   * @returns ModifyFullLogTtlResponse
   */
  async modifyFullLogTtl(request: $_model.ModifyFullLogTtlRequest): Promise<$_model.ModifyFullLogTtlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFullLogTtlWithOptions(request, runtime);
  }

  /**
   * Modifies the custom header of a domain name that is added to an Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @param request - ModifyHeadersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHeadersResponse
   */
  async modifyHeadersWithOptions(request: $_model.ModifyHeadersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHeadersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customHeaders)) {
      query["CustomHeaders"] = request.customHeaders;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHeaders",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHeadersResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHeadersResponse({}));
  }

  /**
   * Modifies the custom header of a domain name that is added to an Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @param request - ModifyHeadersRequest
   * @returns ModifyHeadersResponse
   */
  async modifyHeaders(request: $_model.ModifyHeadersRequest): Promise<$_model.ModifyHeadersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHeadersWithOptions(request, runtime);
  }

  /**
   * Modifies the Layer 4 or Layer 7 health check configuration of a port forwarding rule.
   * 
   * @param request - ModifyHealthCheckConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHealthCheckConfigResponse
   */
  async modifyHealthCheckConfigWithOptions(request: $_model.ModifyHealthCheckConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHealthCheckConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.forwardProtocol)) {
      query["ForwardProtocol"] = request.forwardProtocol;
    }

    if (!$dara.isNull(request.frontendPort)) {
      query["FrontendPort"] = request.frontendPort;
    }

    if (!$dara.isNull(request.healthCheck)) {
      query["HealthCheck"] = request.healthCheck;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHealthCheckConfig",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHealthCheckConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHealthCheckConfigResponse({}));
  }

  /**
   * Modifies the Layer 4 or Layer 7 health check configuration of a port forwarding rule.
   * 
   * @param request - ModifyHealthCheckConfigRequest
   * @returns ModifyHealthCheckConfigResponse
   */
  async modifyHealthCheckConfig(request: $_model.ModifyHealthCheckConfigRequest): Promise<$_model.ModifyHealthCheckConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHealthCheckConfigWithOptions(request, runtime);
  }

  /**
   * Enables or disables HTTP/2 for the forwarding rule of a website.
   * 
   * @remarks
   * >  This operation is suitable only for Anti-DDoS Proxy (Chinese Mainland).
   * 
   * @param request - ModifyHttp2EnableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHttp2EnableResponse
   */
  async modifyHttp2EnableWithOptions(request: $_model.ModifyHttp2EnableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHttp2EnableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHttp2Enable",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHttp2EnableResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHttp2EnableResponse({}));
  }

  /**
   * Enables or disables HTTP/2 for the forwarding rule of a website.
   * 
   * @remarks
   * >  This operation is suitable only for Anti-DDoS Proxy (Chinese Mainland).
   * 
   * @param request - ModifyHttp2EnableRequest
   * @returns ModifyHttp2EnableResponse
   */
  async modifyHttp2Enable(request: $_model.ModifyHttp2EnableRequest): Promise<$_model.ModifyHttp2EnableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHttp2EnableWithOptions(request, runtime);
  }

  /**
   * Instance adjustment, similar to BSS adjustment
   * 
   * @param request - ModifyInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceResponse
   */
  async modifyInstanceWithOptions(request: $_model.ModifyInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.baseBandwidth)) {
      query["BaseBandwidth"] = request.baseBandwidth;
    }

    if (!$dara.isNull(request.domainCount)) {
      query["DomainCount"] = request.domainCount;
    }

    if (!$dara.isNull(request.editionSale)) {
      query["EditionSale"] = request.editionSale;
    }

    if (!$dara.isNull(request.functionVersion)) {
      query["FunctionVersion"] = request.functionVersion;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.modifyType)) {
      query["ModifyType"] = request.modifyType;
    }

    if (!$dara.isNull(request.normalBandwidth)) {
      query["NormalBandwidth"] = request.normalBandwidth;
    }

    if (!$dara.isNull(request.normalQps)) {
      query["NormalQps"] = request.normalQps;
    }

    if (!$dara.isNull(request.portCount)) {
      query["PortCount"] = request.portCount;
    }

    if (!$dara.isNull(request.productPlan)) {
      query["ProductPlan"] = request.productPlan;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.serviceBandwidth)) {
      query["ServiceBandwidth"] = request.serviceBandwidth;
    }

    if (!$dara.isNull(request.servicePartner)) {
      query["ServicePartner"] = request.servicePartner;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstance",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceResponse({}));
  }

  /**
   * Instance adjustment, similar to BSS adjustment
   * 
   * @param request - ModifyInstanceRequest
   * @returns ModifyInstanceResponse
   */
  async modifyInstance(request: $_model.ModifyInstanceRequest): Promise<$_model.ModifyInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceWithOptions(request, runtime);
  }

  /**
   * Modifies the description of an Anti-DDoS Proxy instance.
   * 
   * @param request - ModifyInstanceRemarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceRemarkResponse
   */
  async modifyInstanceRemarkWithOptions(request: $_model.ModifyInstanceRemarkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceRemarkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceRemark",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceRemarkResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceRemarkResponse({}));
  }

  /**
   * Modifies the description of an Anti-DDoS Proxy instance.
   * 
   * @param request - ModifyInstanceRemarkRequest
   * @returns ModifyInstanceRemarkResponse
   */
  async modifyInstanceRemark(request: $_model.ModifyInstanceRemarkRequest): Promise<$_model.ModifyInstanceRemarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceRemarkWithOptions(request, runtime);
  }

  /**
   * Modifies the session persistence and DDoS mitigation policy settings of a port forwarding rule.
   * 
   * @param request - ModifyNetworkRuleAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNetworkRuleAttributeResponse
   */
  async modifyNetworkRuleAttributeWithOptions(request: $_model.ModifyNetworkRuleAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyNetworkRuleAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.forwardProtocol)) {
      query["ForwardProtocol"] = request.forwardProtocol;
    }

    if (!$dara.isNull(request.frontendPort)) {
      query["FrontendPort"] = request.frontendPort;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.module)) {
      query["Module"] = request.module;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyNetworkRuleAttribute",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyNetworkRuleAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyNetworkRuleAttributeResponse({}));
  }

  /**
   * Modifies the session persistence and DDoS mitigation policy settings of a port forwarding rule.
   * 
   * @param request - ModifyNetworkRuleAttributeRequest
   * @returns ModifyNetworkRuleAttributeResponse
   */
  async modifyNetworkRuleAttribute(request: $_model.ModifyNetworkRuleAttributeRequest): Promise<$_model.ModifyNetworkRuleAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyNetworkRuleAttributeWithOptions(request, runtime);
  }

  /**
   * Specifies whether to enable the Online Certificate Status Protocol (OCSP) feature.
   * 
   * @remarks
   * This feature is available only for a website that supports HTTPS. If HTTPS is selected for Protocol, we recommend that you enable this feature.
   * 
   * @param request - ModifyOcspStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyOcspStatusResponse
   */
  async modifyOcspStatusWithOptions(request: $_model.ModifyOcspStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyOcspStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyOcspStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyOcspStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyOcspStatusResponse({}));
  }

  /**
   * Specifies whether to enable the Online Certificate Status Protocol (OCSP) feature.
   * 
   * @remarks
   * This feature is available only for a website that supports HTTPS. If HTTPS is selected for Protocol, we recommend that you enable this feature.
   * 
   * @param request - ModifyOcspStatusRequest
   * @returns ModifyOcspStatusResponse
   */
  async modifyOcspStatus(request: $_model.ModifyOcspStatusRequest): Promise<$_model.ModifyOcspStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyOcspStatusWithOptions(request, runtime);
  }

  /**
   * Modifies a port forwarding rule.
   * 
   * @remarks
   * You can call the ModifyPort operation by using Terraform. For more information about Terraform, see [What is Terraform?](https://help.aliyun.com/document_detail/95820.html).
   * 
   * @param request - ModifyPortRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPortResponse
   */
  async modifyPortWithOptions(request: $_model.ModifyPortRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPortResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendPort)) {
      query["BackendPort"] = request.backendPort;
    }

    if (!$dara.isNull(request.frontendPort)) {
      query["FrontendPort"] = request.frontendPort;
    }

    if (!$dara.isNull(request.frontendProtocol)) {
      query["FrontendProtocol"] = request.frontendProtocol;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.proxyEnable)) {
      query["ProxyEnable"] = request.proxyEnable;
    }

    if (!$dara.isNull(request.realServers)) {
      query["RealServers"] = request.realServers;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPort",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPortResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPortResponse({}));
  }

  /**
   * Modifies a port forwarding rule.
   * 
   * @remarks
   * You can call the ModifyPort operation by using Terraform. For more information about Terraform, see [What is Terraform?](https://help.aliyun.com/document_detail/95820.html).
   * 
   * @param request - ModifyPortRequest
   * @returns ModifyPortResponse
   */
  async modifyPort(request: $_model.ModifyPortRequest): Promise<$_model.ModifyPortResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPortWithOptions(request, runtime);
  }

  /**
   * Modifies the Intelligent Protection configuration of a non-website service.
   * 
   * @param request - ModifyPortAutoCcStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPortAutoCcStatusResponse
   */
  async modifyPortAutoCcStatusWithOptions(request: $_model.ModifyPortAutoCcStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPortAutoCcStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.switch)) {
      query["Switch"] = request.switch;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPortAutoCcStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPortAutoCcStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPortAutoCcStatusResponse({}));
  }

  /**
   * Modifies the Intelligent Protection configuration of a non-website service.
   * 
   * @param request - ModifyPortAutoCcStatusRequest
   * @returns ModifyPortAutoCcStatusResponse
   */
  async modifyPortAutoCcStatus(request: $_model.ModifyPortAutoCcStatusRequest): Promise<$_model.ModifyPortAutoCcStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPortAutoCcStatusWithOptions(request, runtime);
  }

  /**
   * Switches between the metering methods of the burstable clean bandwidth feature.
   * 
   * @param request - ModifyQpsModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyQpsModeResponse
   */
  async modifyQpsModeWithOptions(request: $_model.ModifyQpsModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyQpsModeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyQpsMode",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyQpsModeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyQpsModeResponse({}));
  }

  /**
   * Switches between the metering methods of the burstable clean bandwidth feature.
   * 
   * @param request - ModifyQpsModeRequest
   * @returns ModifyQpsModeResponse
   */
  async modifyQpsMode(request: $_model.ModifyQpsModeRequest): Promise<$_model.ModifyQpsModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyQpsModeWithOptions(request, runtime);
  }

  /**
   * Modifies a scenario-specific custom policy.
   * 
   * @param request - ModifySceneDefensePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySceneDefensePolicyResponse
   */
  async modifySceneDefensePolicyWithOptions(request: $_model.ModifySceneDefensePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySceneDefensePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.template)) {
      query["Template"] = request.template;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySceneDefensePolicy",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySceneDefensePolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifySceneDefensePolicyResponse({}));
  }

  /**
   * Modifies a scenario-specific custom policy.
   * 
   * @param request - ModifySceneDefensePolicyRequest
   * @returns ModifySceneDefensePolicyResponse
   */
  async modifySceneDefensePolicy(request: $_model.ModifySceneDefensePolicyRequest): Promise<$_model.ModifySceneDefensePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySceneDefensePolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the scheduling rule of Sec-Traffic Manager.
   * 
   * @param request - ModifySchedulerRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySchedulerRuleResponse
   */
  async modifySchedulerRuleWithOptions(request: $_model.ModifySchedulerRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySchedulerRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.param)) {
      query["Param"] = request.param;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!$dara.isNull(request.rules)) {
      query["Rules"] = request.rules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySchedulerRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySchedulerRuleResponse>(await this.callApi(params, req, runtime), new $_model.ModifySchedulerRuleResponse({}));
  }

  /**
   * Modifies the scheduling rule of Sec-Traffic Manager.
   * 
   * @param request - ModifySchedulerRuleRequest
   * @returns ModifySchedulerRuleResponse
   */
  async modifySchedulerRule(request: $_model.ModifySchedulerRuleRequest): Promise<$_model.ModifySchedulerRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySchedulerRuleWithOptions(request, runtime);
  }

  /**
   * Modifies the Transport Layer Security (TLS) policy configuration for the forwarding rule of a website.
   * 
   * @param request - ModifyTlsConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTlsConfigResponse
   */
  async modifyTlsConfigWithOptions(request: $_model.ModifyTlsConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTlsConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTlsConfig",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTlsConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTlsConfigResponse({}));
  }

  /**
   * Modifies the Transport Layer Security (TLS) policy configuration for the forwarding rule of a website.
   * 
   * @param request - ModifyTlsConfigRequest
   * @returns ModifyTlsConfigResponse
   */
  async modifyTlsConfig(request: $_model.ModifyTlsConfigRequest): Promise<$_model.ModifyTlsConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTlsConfigWithOptions(request, runtime);
  }

  /**
   * Changes the mode of the intelligent protection feature for a website.
   * 
   * @param request - ModifyWebAIProtectModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyWebAIProtectModeResponse
   */
  async modifyWebAIProtectModeWithOptions(request: $_model.ModifyWebAIProtectModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyWebAIProtectModeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyWebAIProtectMode",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyWebAIProtectModeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyWebAIProtectModeResponse({}));
  }

  /**
   * Changes the mode of the intelligent protection feature for a website.
   * 
   * @param request - ModifyWebAIProtectModeRequest
   * @returns ModifyWebAIProtectModeResponse
   */
  async modifyWebAIProtectMode(request: $_model.ModifyWebAIProtectModeRequest): Promise<$_model.ModifyWebAIProtectModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWebAIProtectModeWithOptions(request, runtime);
  }

  /**
   * Enables or disables the Intelligent Protection policy for a website.
   * 
   * @param request - ModifyWebAIProtectSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyWebAIProtectSwitchResponse
   */
  async modifyWebAIProtectSwitchWithOptions(request: $_model.ModifyWebAIProtectSwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyWebAIProtectSwitchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyWebAIProtectSwitch",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyWebAIProtectSwitchResponse>(await this.callApi(params, req, runtime), new $_model.ModifyWebAIProtectSwitchResponse({}));
  }

  /**
   * Enables or disables the Intelligent Protection policy for a website.
   * 
   * @param request - ModifyWebAIProtectSwitchRequest
   * @returns ModifyWebAIProtectSwitchResponse
   */
  async modifyWebAIProtectSwitch(request: $_model.ModifyWebAIProtectSwitchRequest): Promise<$_model.ModifyWebAIProtectSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWebAIProtectSwitchWithOptions(request, runtime);
  }

  /**
   * Changes the mode in which a website service is added to Anti-DDoS Pro or Anti-DDoS Premium.
   * 
   * @param request - ModifyWebAccessModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyWebAccessModeResponse
   */
  async modifyWebAccessModeWithOptions(request: $_model.ModifyWebAccessModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyWebAccessModeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessMode)) {
      query["AccessMode"] = request.accessMode;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyWebAccessMode",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyWebAccessModeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyWebAccessModeResponse({}));
  }

  /**
   * Changes the mode in which a website service is added to Anti-DDoS Pro or Anti-DDoS Premium.
   * 
   * @param request - ModifyWebAccessModeRequest
   * @returns ModifyWebAccessModeResponse
   */
  async modifyWebAccessMode(request: $_model.ModifyWebAccessModeRequest): Promise<$_model.ModifyWebAccessModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWebAccessModeWithOptions(request, runtime);
  }

  /**
   * Modifies the blocked locations that are configured in the Location Blacklist (Domain Names) policy for a website.
   * 
   * @param request - ModifyWebAreaBlockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyWebAreaBlockResponse
   */
  async modifyWebAreaBlockWithOptions(request: $_model.ModifyWebAreaBlockRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyWebAreaBlockResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.regions)) {
      query["Regions"] = request.regions;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyWebAreaBlock",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyWebAreaBlockResponse>(await this.callApi(params, req, runtime), new $_model.ModifyWebAreaBlockResponse({}));
  }

  /**
   * Modifies the blocked locations that are configured in the Location Blacklist (Domain Names) policy for a website.
   * 
   * @param request - ModifyWebAreaBlockRequest
   * @returns ModifyWebAreaBlockResponse
   */
  async modifyWebAreaBlock(request: $_model.ModifyWebAreaBlockRequest): Promise<$_model.ModifyWebAreaBlockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWebAreaBlockWithOptions(request, runtime);
  }

  /**
   * Enables or disables the Location Blacklist (Domain Names) policy for a domain name.
   * 
   * @remarks
   * You can call the ModifyWebAreaBlockSwitch operation to enable or disable the Location Blacklist (Domain Names) policy for a domain name.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyWebAreaBlockSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyWebAreaBlockSwitchResponse
   */
  async modifyWebAreaBlockSwitchWithOptions(request: $_model.ModifyWebAreaBlockSwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyWebAreaBlockSwitchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyWebAreaBlockSwitch",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyWebAreaBlockSwitchResponse>(await this.callApi(params, req, runtime), new $_model.ModifyWebAreaBlockSwitchResponse({}));
  }

  /**
   * Enables or disables the Location Blacklist (Domain Names) policy for a domain name.
   * 
   * @remarks
   * You can call the ModifyWebAreaBlockSwitch operation to enable or disable the Location Blacklist (Domain Names) policy for a domain name.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyWebAreaBlockSwitchRequest
   * @returns ModifyWebAreaBlockSwitchResponse
   */
  async modifyWebAreaBlockSwitch(request: $_model.ModifyWebAreaBlockSwitchRequest): Promise<$_model.ModifyWebAreaBlockSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWebAreaBlockSwitchWithOptions(request, runtime);
  }

  /**
   * Enables or disables the HTTP flood mitigation feature for a website.
   * 
   * @param request - ModifyWebCCGlobalSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyWebCCGlobalSwitchResponse
   */
  async modifyWebCCGlobalSwitchWithOptions(request: $_model.ModifyWebCCGlobalSwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyWebCCGlobalSwitchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ccGlobalSwitch)) {
      query["CcGlobalSwitch"] = request.ccGlobalSwitch;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyWebCCGlobalSwitch",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyWebCCGlobalSwitchResponse>(await this.callApi(params, req, runtime), new $_model.ModifyWebCCGlobalSwitchResponse({}));
  }

  /**
   * Enables or disables the HTTP flood mitigation feature for a website.
   * 
   * @param request - ModifyWebCCGlobalSwitchRequest
   * @returns ModifyWebCCGlobalSwitchResponse
   */
  async modifyWebCCGlobalSwitch(request: $_model.ModifyWebCCGlobalSwitchRequest): Promise<$_model.ModifyWebCCGlobalSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWebCCGlobalSwitchWithOptions(request, runtime);
  }

  /**
   * Modifies the custom frequency control rule of a website.
   * 
   * @deprecated OpenAPI ModifyWebCCRule is deprecated, please use ddoscoo::2020-01-01::ConfigWebCCRuleV2 instead.
   * 
   * @param request - ModifyWebCCRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyWebCCRuleResponse
   */
  async modifyWebCCRuleWithOptions(request: $_model.ModifyWebCCRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyWebCCRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.act)) {
      query["Act"] = request.act;
    }

    if (!$dara.isNull(request.count)) {
      query["Count"] = request.count;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    if (!$dara.isNull(request.uri)) {
      query["Uri"] = request.uri;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyWebCCRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyWebCCRuleResponse>(await this.callApi(params, req, runtime), new $_model.ModifyWebCCRuleResponse({}));
  }

  /**
   * Modifies the custom frequency control rule of a website.
   * 
   * @deprecated OpenAPI ModifyWebCCRule is deprecated, please use ddoscoo::2020-01-01::ConfigWebCCRuleV2 instead.
   * 
   * @param request - ModifyWebCCRuleRequest
   * @returns ModifyWebCCRuleResponse
   */
  // Deprecated
  async modifyWebCCRule(request: $_model.ModifyWebCCRuleRequest): Promise<$_model.ModifyWebCCRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWebCCRuleWithOptions(request, runtime);
  }

  /**
   * Modifies the custom rule of the Static Page Caching policy for a website.
   * 
   * @param request - ModifyWebCacheCustomRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyWebCacheCustomRuleResponse
   */
  async modifyWebCacheCustomRuleWithOptions(request: $_model.ModifyWebCacheCustomRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyWebCacheCustomRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.rules)) {
      query["Rules"] = request.rules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyWebCacheCustomRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyWebCacheCustomRuleResponse>(await this.callApi(params, req, runtime), new $_model.ModifyWebCacheCustomRuleResponse({}));
  }

  /**
   * Modifies the custom rule of the Static Page Caching policy for a website.
   * 
   * @param request - ModifyWebCacheCustomRuleRequest
   * @returns ModifyWebCacheCustomRuleResponse
   */
  async modifyWebCacheCustomRule(request: $_model.ModifyWebCacheCustomRuleRequest): Promise<$_model.ModifyWebCacheCustomRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWebCacheCustomRuleWithOptions(request, runtime);
  }

  /**
   * Changes the cache mode of the Static Page Caching policy for a website.
   * 
   * @param request - ModifyWebCacheModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyWebCacheModeResponse
   */
  async modifyWebCacheModeWithOptions(request: $_model.ModifyWebCacheModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyWebCacheModeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyWebCacheMode",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyWebCacheModeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyWebCacheModeResponse({}));
  }

  /**
   * Changes the cache mode of the Static Page Caching policy for a website.
   * 
   * @param request - ModifyWebCacheModeRequest
   * @returns ModifyWebCacheModeResponse
   */
  async modifyWebCacheMode(request: $_model.ModifyWebCacheModeRequest): Promise<$_model.ModifyWebCacheModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWebCacheModeWithOptions(request, runtime);
  }

  /**
   * Enables or disables the Static Page Caching policy for a website.
   * 
   * @remarks
   * You can call the ModifyWebCacheSwitch operation to enable or disable the Static Page Caching policy for a website.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyWebCacheSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyWebCacheSwitchResponse
   */
  async modifyWebCacheSwitchWithOptions(request: $_model.ModifyWebCacheSwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyWebCacheSwitchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyWebCacheSwitch",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyWebCacheSwitchResponse>(await this.callApi(params, req, runtime), new $_model.ModifyWebCacheSwitchResponse({}));
  }

  /**
   * Enables or disables the Static Page Caching policy for a website.
   * 
   * @remarks
   * You can call the ModifyWebCacheSwitch operation to enable or disable the Static Page Caching policy for a website.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyWebCacheSwitchRequest
   * @returns ModifyWebCacheSwitchResponse
   */
  async modifyWebCacheSwitch(request: $_model.ModifyWebCacheSwitchRequest): Promise<$_model.ModifyWebCacheSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWebCacheSwitchWithOptions(request, runtime);
  }

  /**
   * Enables or disables the Black Lists and White Lists (Domain Names) policy for a domain name.
   * 
   * @param request - ModifyWebIpSetSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyWebIpSetSwitchResponse
   */
  async modifyWebIpSetSwitchWithOptions(request: $_model.ModifyWebIpSetSwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyWebIpSetSwitchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyWebIpSetSwitch",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyWebIpSetSwitchResponse>(await this.callApi(params, req, runtime), new $_model.ModifyWebIpSetSwitchResponse({}));
  }

  /**
   * Enables or disables the Black Lists and White Lists (Domain Names) policy for a domain name.
   * 
   * @param request - ModifyWebIpSetSwitchRequest
   * @returns ModifyWebIpSetSwitchResponse
   */
  async modifyWebIpSetSwitch(request: $_model.ModifyWebIpSetSwitchRequest): Promise<$_model.ModifyWebIpSetSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWebIpSetSwitchWithOptions(request, runtime);
  }

  /**
   * Creates or modifies an accurate access control rule of a website.
   * 
   * @param request - ModifyWebPreciseAccessRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyWebPreciseAccessRuleResponse
   */
  async modifyWebPreciseAccessRuleWithOptions(request: $_model.ModifyWebPreciseAccessRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyWebPreciseAccessRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.expires)) {
      query["Expires"] = request.expires;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.rules)) {
      query["Rules"] = request.rules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyWebPreciseAccessRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyWebPreciseAccessRuleResponse>(await this.callApi(params, req, runtime), new $_model.ModifyWebPreciseAccessRuleResponse({}));
  }

  /**
   * Creates or modifies an accurate access control rule of a website.
   * 
   * @param request - ModifyWebPreciseAccessRuleRequest
   * @returns ModifyWebPreciseAccessRuleResponse
   */
  async modifyWebPreciseAccessRule(request: $_model.ModifyWebPreciseAccessRuleRequest): Promise<$_model.ModifyWebPreciseAccessRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWebPreciseAccessRuleWithOptions(request, runtime);
  }

  /**
   * Enables or disables accurate access control for a website.
   * 
   * @param request - ModifyWebPreciseAccessSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyWebPreciseAccessSwitchResponse
   */
  async modifyWebPreciseAccessSwitchWithOptions(request: $_model.ModifyWebPreciseAccessSwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyWebPreciseAccessSwitchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyWebPreciseAccessSwitch",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyWebPreciseAccessSwitchResponse>(await this.callApi(params, req, runtime), new $_model.ModifyWebPreciseAccessSwitchResponse({}));
  }

  /**
   * Enables or disables accurate access control for a website.
   * 
   * @param request - ModifyWebPreciseAccessSwitchRequest
   * @returns ModifyWebPreciseAccessSwitchResponse
   */
  async modifyWebPreciseAccessSwitch(request: $_model.ModifyWebPreciseAccessSwitchRequest): Promise<$_model.ModifyWebPreciseAccessSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWebPreciseAccessSwitchWithOptions(request, runtime);
  }

  /**
   * Modifies the forwarding rule of a website.
   * 
   * @remarks
   * ## Debugging
   * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=ddoscoo\\&api=ModifyWebRule\\&type=RPC\\&version=2020-01-01)
   * 
   * @param request - ModifyWebRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyWebRuleResponse
   */
  async modifyWebRuleWithOptions(request: $_model.ModifyWebRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyWebRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.httpsExt)) {
      query["HttpsExt"] = request.httpsExt;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.proxyTypes)) {
      query["ProxyTypes"] = request.proxyTypes;
    }

    if (!$dara.isNull(request.realServers)) {
      query["RealServers"] = request.realServers;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.rsType)) {
      query["RsType"] = request.rsType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyWebRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyWebRuleResponse>(await this.callApi(params, req, runtime), new $_model.ModifyWebRuleResponse({}));
  }

  /**
   * Modifies the forwarding rule of a website.
   * 
   * @remarks
   * ## Debugging
   * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=ddoscoo\\&api=ModifyWebRule\\&type=RPC\\&version=2020-01-01)
   * 
   * @param request - ModifyWebRuleRequest
   * @returns ModifyWebRuleResponse
   */
  async modifyWebRule(request: $_model.ModifyWebRuleRequest): Promise<$_model.ModifyWebRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWebRuleWithOptions(request, runtime);
  }

  /**
   * The ID of the instance that you want to release.
   * > You can release only expired instances. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/91478.html) operation to query the IDs and expiration status of all instances.
   * 
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @param request - ReleaseInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseInstanceResponse
   */
  async releaseInstanceWithOptions(request: $_model.ReleaseInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseInstance",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseInstanceResponse({}));
  }

  /**
   * The ID of the instance that you want to release.
   * > You can release only expired instances. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/91478.html) operation to query the IDs and expiration status of all instances.
   * 
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @param request - ReleaseInstanceRequest
   * @returns ReleaseInstanceResponse
   */
  async releaseInstance(request: $_model.ReleaseInstanceRequest): Promise<$_model.ReleaseInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseInstanceWithOptions(request, runtime);
  }

  /**
   * Switches service traffic to an Anti-DDoS Pro or Anti-DDoS Premium instance for scrubbing or switches service traffic back to the associated cloud resources.
   * 
   * @remarks
   * You can call the SwitchSchedulerRule operation to modify the resources to which service traffic is switched for a scheduling rule. For example, you can switch service traffic to an Anti-DDoS Pro or Anti-DDoS Premium instance for scrubbing or switch the service traffic back to the associated cloud resources.
   * Before you call this operation, you must have created a scheduling rule by calling the [CreateSchedulerRule](https://help.aliyun.com/document_detail/157479.html) operation.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - SwitchSchedulerRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchSchedulerRuleResponse
   */
  async switchSchedulerRuleWithOptions(request: $_model.SwitchSchedulerRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchSchedulerRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!$dara.isNull(request.switchData)) {
      query["SwitchData"] = request.switchData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchSchedulerRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchSchedulerRuleResponse>(await this.callApi(params, req, runtime), new $_model.SwitchSchedulerRuleResponse({}));
  }

  /**
   * Switches service traffic to an Anti-DDoS Pro or Anti-DDoS Premium instance for scrubbing or switches service traffic back to the associated cloud resources.
   * 
   * @remarks
   * You can call the SwitchSchedulerRule operation to modify the resources to which service traffic is switched for a scheduling rule. For example, you can switch service traffic to an Anti-DDoS Pro or Anti-DDoS Premium instance for scrubbing or switch the service traffic back to the associated cloud resources.
   * Before you call this operation, you must have created a scheduling rule by calling the [CreateSchedulerRule](https://help.aliyun.com/document_detail/157479.html) operation.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - SwitchSchedulerRuleRequest
   * @returns SwitchSchedulerRuleResponse
   */
  async switchSchedulerRule(request: $_model.SwitchSchedulerRuleRequest): Promise<$_model.SwitchSchedulerRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchSchedulerRuleWithOptions(request, runtime);
  }

}
