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
    this._endpointMap = {
      'ap-southeast-1': "ddoscoo.ap-southeast-1.aliyuncs.com",
      'cn-hangzhou': "ddoscoo.cn-hangzhou.aliyuncs.com",
    };
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
   * @param request - AddAutoCcWhitelistRequest
   * @returns AddAutoCcWhitelistResponse
   */
  async addAutoCcWhitelist(request: $_model.AddAutoCcWhitelistRequest): Promise<$_model.AddAutoCcWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addAutoCcWhitelistWithOptions(request, runtime);
  }

  /**
   * 绑定证书
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
   * 绑定证书
   * 
   * @param request - AssociateWebCertRequest
   * @returns AssociateWebCertResponse
   */
  async associateWebCert(request: $_model.AssociateWebCertRequest): Promise<$_model.AssociateWebCertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateWebCertWithOptions(request, runtime);
  }

  /**
   * 绑定场景策略生效对象
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
   * 绑定场景策略生效对象
   * 
   * @param request - AttachSceneDefenseObjectRequest
   * @returns AttachSceneDefenseObjectResponse
   */
  async attachSceneDefenseObject(request: $_model.AttachSceneDefenseObjectRequest): Promise<$_model.AttachSceneDefenseObjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachSceneDefenseObjectWithOptions(request, runtime);
  }

  /**
   * 配置安全概要属性
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
   * 配置安全概要属性
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
   * 设置域名接入回源策略
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
   * 设置域名接入回源策略
   * 
   * @param request - ConfigL7RsPolicyRequest
   * @returns ConfigL7RsPolicyResponse
   */
  async configL7RsPolicy(request: $_model.ConfigL7RsPolicyRequest): Promise<$_model.ConfigL7RsPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configL7RsPolicyWithOptions(request, runtime);
  }

  /**
   * 配置长连接
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
   * 配置长连接
   * 
   * @param request - ConfigL7UsKeepaliveRequest
   * @returns ConfigL7UsKeepaliveResponse
   */
  async configL7UsKeepalive(request: $_model.ConfigL7UsKeepaliveRequest): Promise<$_model.ConfigL7UsKeepaliveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configL7UsKeepaliveWithOptions(request, runtime);
  }

  /**
   * 4层带宽限速 客户专用
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
   * 4层带宽限速 客户专用
   * 
   * @param request - ConfigLayer4RealLimitRequest
   * @returns ConfigLayer4RealLimitResponse
   */
  async configLayer4RealLimit(request: $_model.ConfigLayer4RealLimitRequest): Promise<$_model.ConfigLayer4RealLimitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configLayer4RealLimitWithOptions(request, runtime);
  }

  /**
   * 设置端口接入备注
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
   * 设置端口接入备注
   * 
   * @param request - ConfigLayer4RemarkRequest
   * @returns ConfigLayer4RemarkResponse
   */
  async configLayer4Remark(request: $_model.ConfigLayer4RemarkRequest): Promise<$_model.ConfigLayer4RemarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configLayer4RemarkWithOptions(request, runtime);
  }

  /**
   * 设置端口接入回源主备模式
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
   * 设置端口接入回源主备模式
   * 
   * @param request - ConfigLayer4RuleBakModeRequest
   * @returns ConfigLayer4RuleBakModeResponse
   */
  async configLayer4RuleBakMode(request: $_model.ConfigLayer4RuleBakModeRequest): Promise<$_model.ConfigLayer4RuleBakModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configLayer4RuleBakModeWithOptions(request, runtime);
  }

  /**
   * 设置端口接入策略
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
   * 设置端口接入策略
   * 
   * @param request - ConfigLayer4RulePolicyRequest
   * @returns ConfigLayer4RulePolicyResponse
   */
  async configLayer4RulePolicy(request: $_model.ConfigLayer4RulePolicyRequest): Promise<$_model.ConfigLayer4RulePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configLayer4RulePolicyWithOptions(request, runtime);
  }

  /**
   * 设置区域封禁
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
   * 设置区域封禁
   * 
   * @param request - ConfigNetworkRegionBlockRequest
   * @returns ConfigNetworkRegionBlockResponse
   */
  async configNetworkRegionBlock(request: $_model.ConfigNetworkRegionBlockRequest): Promise<$_model.ConfigNetworkRegionBlockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configNetworkRegionBlockWithOptions(request, runtime);
  }

  /**
   * 配置端口接入规则
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
   * 配置端口接入规则
   * 
   * @param request - ConfigNetworkRulesRequest
   * @returns ConfigNetworkRulesResponse
   */
  async configNetworkRules(request: $_model.ConfigNetworkRulesRequest): Promise<$_model.ConfigNetworkRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configNetworkRulesWithOptions(request, runtime);
  }

  /**
   * 配置UDP反射
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
   * 配置UDP反射
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
   * 设置WEB CC防护模板
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
   * 设置WEB CC防护模板
   * 
   * @param request - ConfigWebCCTemplateRequest
   * @returns ConfigWebCCTemplateResponse
   */
  async configWebCCTemplate(request: $_model.ConfigWebCCTemplateRequest): Promise<$_model.ConfigWebCCTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configWebCCTemplateWithOptions(request, runtime);
  }

  /**
   * 设置防护黑白名单
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
   * 设置防护黑白名单
   * 
   * @param request - ConfigWebIpSetRequest
   * @returns ConfigWebIpSetResponse
   */
  async configWebIpSet(request: $_model.ConfigWebIpSetRequest): Promise<$_model.ConfigWebIpSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configWebIpSetWithOptions(request, runtime);
  }

  /**
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
   * @param request - CreateAsyncTaskRequest
   * @returns CreateAsyncTaskResponse
   */
  async createAsyncTask(request: $_model.CreateAsyncTaskRequest): Promise<$_model.CreateAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAsyncTaskWithOptions(request, runtime);
  }

  /**
   * 域名资源
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
   * 域名资源
   * 
   * @param request - CreateDomainResourceRequest
   * @returns CreateDomainResourceResponse
   */
  async createDomainResource(request: $_model.CreateDomainResourceRequest): Promise<$_model.CreateDomainResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDomainResourceWithOptions(request, runtime);
  }

  /**
   * 创建全局端口防护规则
   * 
   * @param request - CreateNetworkRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNetworkRulesResponse
   */
  async createNetworkRulesWithOptions(request: $_model.CreateNetworkRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNetworkRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipMode)) {
      query["IpMode"] = request.ipMode;
    }

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
   * 创建全局端口防护规则
   * 
   * @param request - CreateNetworkRulesRequest
   * @returns CreateNetworkRulesResponse
   */
  async createNetworkRules(request: $_model.CreateNetworkRulesRequest): Promise<$_model.CreateNetworkRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNetworkRulesWithOptions(request, runtime);
  }

  /**
   * Terraform创建端口
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

    if (!$dara.isNull(request.ipMode)) {
      query["IpMode"] = request.ipMode;
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
   * Terraform创建端口
   * 
   * @param request - CreatePortRequest
   * @returns CreatePortResponse
   */
  async createPort(request: $_model.CreatePortRequest): Promise<$_model.CreatePortResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPortWithOptions(request, runtime);
  }

  /**
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
   * @param request - CreateSceneDefensePolicyRequest
   * @returns CreateSceneDefensePolicyResponse
   */
  async createSceneDefensePolicy(request: $_model.CreateSceneDefensePolicyRequest): Promise<$_model.CreateSceneDefensePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSceneDefensePolicyWithOptions(request, runtime);
  }

  /**
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
   * @param request - CreateSchedulerRuleRequest
   * @returns CreateSchedulerRuleResponse
   */
  async createSchedulerRule(request: $_model.CreateSchedulerRuleRequest): Promise<$_model.CreateSchedulerRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSchedulerRuleWithOptions(request, runtime);
  }

  /**
   * 创建资源标签
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
   * 创建资源标签
   * 
   * @param request - CreateTagResourcesRequest
   * @returns CreateTagResourcesResponse
   */
  async createTagResources(request: $_model.CreateTagResourcesRequest): Promise<$_model.CreateTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTagResourcesWithOptions(request, runtime);
  }

  /**
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
   * @param request - CreateWebRuleRequest
   * @returns CreateWebRuleResponse
   */
  async createWebRule(request: $_model.CreateWebRuleRequest): Promise<$_model.CreateWebRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWebRuleWithOptions(request, runtime);
  }

  /**
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
   * @param request - DeleteAsyncTaskRequest
   * @returns DeleteAsyncTaskResponse
   */
  async deleteAsyncTask(request: $_model.DeleteAsyncTaskRequest): Promise<$_model.DeleteAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAsyncTaskWithOptions(request, runtime);
  }

  /**
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
   * @param request - DeleteAutoCcBlacklistRequest
   * @returns DeleteAutoCcBlacklistResponse
   */
  async deleteAutoCcBlacklist(request: $_model.DeleteAutoCcBlacklistRequest): Promise<$_model.DeleteAutoCcBlacklistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAutoCcBlacklistWithOptions(request, runtime);
  }

  /**
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
   * @param request - DeleteAutoCcWhitelistRequest
   * @returns DeleteAutoCcWhitelistResponse
   */
  async deleteAutoCcWhitelist(request: $_model.DeleteAutoCcWhitelistRequest): Promise<$_model.DeleteAutoCcWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAutoCcWhitelistWithOptions(request, runtime);
  }

  /**
   * 删除域名资源
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
   * 删除域名资源
   * 
   * @param request - DeleteDomainResourceRequest
   * @returns DeleteDomainResourceResponse
   */
  async deleteDomainResource(request: $_model.DeleteDomainResourceRequest): Promise<$_model.DeleteDomainResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDomainResourceWithOptions(request, runtime);
  }

  /**
   * 删除端口转发规则
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
   * 删除端口转发规则
   * 
   * @param request - DeleteNetworkRuleRequest
   * @returns DeleteNetworkRuleResponse
   */
  async deleteNetworkRule(request: $_model.DeleteNetworkRuleRequest): Promise<$_model.DeleteNetworkRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNetworkRuleWithOptions(request, runtime);
  }

  /**
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
   * @param request - DeletePortRequest
   * @returns DeletePortResponse
   */
  async deletePort(request: $_model.DeletePortRequest): Promise<$_model.DeletePortResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePortWithOptions(request, runtime);
  }

  /**
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
   * @param request - DeleteSceneDefensePolicyRequest
   * @returns DeleteSceneDefensePolicyResponse
   */
  async deleteSceneDefensePolicy(request: $_model.DeleteSceneDefensePolicyRequest): Promise<$_model.DeleteSceneDefensePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSceneDefensePolicyWithOptions(request, runtime);
  }

  /**
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
   * @param request - DeleteSchedulerRuleRequest
   * @returns DeleteSchedulerRuleResponse
   */
  async deleteSchedulerRule(request: $_model.DeleteSchedulerRuleRequest): Promise<$_model.DeleteSchedulerRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSchedulerRuleWithOptions(request, runtime);
  }

  /**
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
   * @param request - DeleteTagResourcesRequest
   * @returns DeleteTagResourcesResponse
   */
  async deleteTagResources(request: $_model.DeleteTagResourcesRequest): Promise<$_model.DeleteTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTagResourcesWithOptions(request, runtime);
  }

  /**
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
   * 删除新版cc规则
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
   * 删除新版cc规则
   * 
   * @param request - DeleteWebCCRuleV2Request
   * @returns DeleteWebCCRuleV2Response
   */
  async deleteWebCCRuleV2(request: $_model.DeleteWebCCRuleV2Request): Promise<$_model.DeleteWebCCRuleV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWebCCRuleV2WithOptions(request, runtime);
  }

  /**
   * 删除缓存规则
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
   * 删除缓存规则
   * 
   * @param request - DeleteWebCacheCustomRuleRequest
   * @returns DeleteWebCacheCustomRuleResponse
   */
  async deleteWebCacheCustomRule(request: $_model.DeleteWebCacheCustomRuleRequest): Promise<$_model.DeleteWebCacheCustomRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWebCacheCustomRuleWithOptions(request, runtime);
  }

  /**
   * 删除精准域名规则
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
   * 删除精准域名规则
   * 
   * @param request - DeleteWebPreciseAccessRuleRequest
   * @returns DeleteWebPreciseAccessRuleResponse
   */
  async deleteWebPreciseAccessRule(request: $_model.DeleteWebPreciseAccessRuleRequest): Promise<$_model.DeleteWebPreciseAccessRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWebPreciseAccessRuleWithOptions(request, runtime);
  }

  /**
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
   * @param request - DeleteWebRuleRequest
   * @returns DeleteWebRuleResponse
   */
  async deleteWebRule(request: $_model.DeleteWebRuleRequest): Promise<$_model.DeleteWebRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWebRuleWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeAsyncTasksRequest
   * @returns DescribeAsyncTasksResponse
   */
  async describeAsyncTasks(request: $_model.DescribeAsyncTasksRequest): Promise<$_model.DescribeAsyncTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAsyncTasksWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeAttackAnalysisMaxQpsRequest
   * @returns DescribeAttackAnalysisMaxQpsResponse
   */
  async describeAttackAnalysisMaxQps(request: $_model.DescribeAttackAnalysisMaxQpsRequest): Promise<$_model.DescribeAttackAnalysisMaxQpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAttackAnalysisMaxQpsWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeAutoCcBlacklistRequest
   * @returns DescribeAutoCcBlacklistResponse
   */
  async describeAutoCcBlacklist(request: $_model.DescribeAutoCcBlacklistRequest): Promise<$_model.DescribeAutoCcBlacklistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAutoCcBlacklistWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeAutoCcListCountRequest
   * @returns DescribeAutoCcListCountResponse
   */
  async describeAutoCcListCount(request: $_model.DescribeAutoCcListCountRequest): Promise<$_model.DescribeAutoCcListCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAutoCcListCountWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeAutoCcWhitelistRequest
   * @returns DescribeAutoCcWhitelistResponse
   */
  async describeAutoCcWhitelist(request: $_model.DescribeAutoCcWhitelistRequest): Promise<$_model.DescribeAutoCcWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAutoCcWhitelistWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeBackSourceCidrRequest
   * @returns DescribeBackSourceCidrResponse
   */
  async describeBackSourceCidr(request: $_model.DescribeBackSourceCidrRequest): Promise<$_model.DescribeBackSourceCidrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackSourceCidrWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeBlackholeStatusRequest
   * @returns DescribeBlackholeStatusResponse
   */
  async describeBlackholeStatus(request: $_model.DescribeBlackholeStatusRequest): Promise<$_model.DescribeBlackholeStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBlackholeStatusWithOptions(request, runtime);
  }

  /**
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
   * 查询DDoS事件
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
   * 查询DDoS事件
   * 
   * @param request - DescribeDDoSEventsRequest
   * @returns DescribeDDoSEventsResponse
   */
  async describeDDoSEvents(request: $_model.DescribeDDoSEventsRequest): Promise<$_model.DescribeDDoSEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDDoSEventsWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeDDosAllEventListRequest
   * @returns DescribeDDosAllEventListResponse
   */
  async describeDDosAllEventList(request: $_model.DescribeDDosAllEventListRequest): Promise<$_model.DescribeDDosAllEventListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDDosAllEventListWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeDDosEventAreaRequest
   * @returns DescribeDDosEventAreaResponse
   */
  async describeDDosEventArea(request: $_model.DescribeDDosEventAreaRequest): Promise<$_model.DescribeDDosEventAreaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDDosEventAreaWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeDDosEventAttackTypeRequest
   * @returns DescribeDDosEventAttackTypeResponse
   */
  async describeDDosEventAttackType(request: $_model.DescribeDDosEventAttackTypeRequest): Promise<$_model.DescribeDDosEventAttackTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDDosEventAttackTypeWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeDDosEventIspRequest
   * @returns DescribeDDosEventIspResponse
   */
  async describeDDosEventIsp(request: $_model.DescribeDDosEventIspRequest): Promise<$_model.DescribeDDosEventIspResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDDosEventIspWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeDDosEventMaxRequest
   * @returns DescribeDDosEventMaxResponse
   */
  async describeDDosEventMax(request: $_model.DescribeDDosEventMaxRequest): Promise<$_model.DescribeDDosEventMaxResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDDosEventMaxWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeDDosEventSrcIpRequest
   * @returns DescribeDDosEventSrcIpResponse
   */
  async describeDDosEventSrcIp(request: $_model.DescribeDDosEventSrcIpRequest): Promise<$_model.DescribeDDosEventSrcIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDDosEventSrcIpWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeDefenseCountStatisticsRequest
   * @returns DescribeDefenseCountStatisticsResponse
   */
  async describeDefenseCountStatistics(request: $_model.DescribeDefenseCountStatisticsRequest): Promise<$_model.DescribeDefenseCountStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDefenseCountStatisticsWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeDefenseRecordsRequest
   * @returns DescribeDefenseRecordsResponse
   */
  async describeDefenseRecords(request: $_model.DescribeDefenseRecordsRequest): Promise<$_model.DescribeDefenseRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDefenseRecordsWithOptions(request, runtime);
  }

  /**
   * 查询目的端口事件
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
   * 查询目的端口事件
   * 
   * @param request - DescribeDestinationPortEventRequest
   * @returns DescribeDestinationPortEventResponse
   */
  async describeDestinationPortEvent(request: $_model.DescribeDestinationPortEventRequest): Promise<$_model.DescribeDestinationPortEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDestinationPortEventWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeDomainAttackEventsRequest
   * @returns DescribeDomainAttackEventsResponse
   */
  async describeDomainAttackEvents(request: $_model.DescribeDomainAttackEventsRequest): Promise<$_model.DescribeDomainAttackEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainAttackEventsWithOptions(request, runtime);
  }

  /**
   * 查询域名业务带宽流量
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
   * 查询域名业务带宽流量
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
   * 查询HTTP2指纹
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

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
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
   * 查询HTTP2指纹
   * 
   * @param request - DescribeDomainH2FingerprintRequest
   * @returns DescribeDomainH2FingerprintResponse
   */
  async describeDomainH2Fingerprint(request: $_model.DescribeDomainH2FingerprintRequest): Promise<$_model.DescribeDomainH2FingerprintResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainH2FingerprintWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeDomainOverviewRequest
   * @returns DescribeDomainOverviewResponse
   */
  async describeDomainOverview(request: $_model.DescribeDomainOverviewRequest): Promise<$_model.DescribeDomainOverviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainOverviewWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeDomainQPSListRequest
   * @returns DescribeDomainQPSListResponse
   */
  async describeDomainQPSList(request: $_model.DescribeDomainQPSListRequest): Promise<$_model.DescribeDomainQPSListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainQPSListWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeDomainResourceRequest
   * @returns DescribeDomainResourceResponse
   */
  async describeDomainResource(request: $_model.DescribeDomainResourceRequest): Promise<$_model.DescribeDomainResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainResourceWithOptions(request, runtime);
  }

  /**
   * 查询安全概要属性开关
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
   * 查询安全概要属性开关
   * 
   * @param request - DescribeDomainSecurityProfileRequest
   * @returns DescribeDomainSecurityProfileResponse
   */
  async describeDomainSecurityProfile(request: $_model.DescribeDomainSecurityProfileRequest): Promise<$_model.DescribeDomainSecurityProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainSecurityProfileWithOptions(request, runtime);
  }

  /**
   * 查询各类响应状态码统计信息
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
   * 查询各类响应状态码统计信息
   * 
   * @param request - DescribeDomainStatusCodeCountRequest
   * @returns DescribeDomainStatusCodeCountResponse
   */
  async describeDomainStatusCodeCount(request: $_model.DescribeDomainStatusCodeCountRequest): Promise<$_model.DescribeDomainStatusCodeCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainStatusCodeCountWithOptions(request, runtime);
  }

  /**
   * 查询网站业务的响应状态码统计信息
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
   * 查询网站业务的响应状态码统计信息
   * 
   * @param request - DescribeDomainStatusCodeListRequest
   * @returns DescribeDomainStatusCodeListResponse
   */
  async describeDomainStatusCodeList(request: $_model.DescribeDomainStatusCodeListRequest): Promise<$_model.DescribeDomainStatusCodeListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainStatusCodeListWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeDomainTopAttackListRequest
   * @returns DescribeDomainTopAttackListResponse
   */
  async describeDomainTopAttackList(request: $_model.DescribeDomainTopAttackListRequest): Promise<$_model.DescribeDomainTopAttackListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainTopAttackListWithOptions(request, runtime);
  }

  /**
   * 查询域名 top fingerprint
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

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
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
   * 查询域名 top fingerprint
   * 
   * @param request - DescribeDomainTopFingerprintRequest
   * @returns DescribeDomainTopFingerprintResponse
   */
  async describeDomainTopFingerprint(request: $_model.DescribeDomainTopFingerprintRequest): Promise<$_model.DescribeDomainTopFingerprintResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainTopFingerprintWithOptions(request, runtime);
  }

  /**
   * 查询域名 top HttpMethod
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

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
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
   * 查询域名 top HttpMethod
   * 
   * @param request - DescribeDomainTopHttpMethodRequest
   * @returns DescribeDomainTopHttpMethodResponse
   */
  async describeDomainTopHttpMethod(request: $_model.DescribeDomainTopHttpMethodRequest): Promise<$_model.DescribeDomainTopHttpMethodResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainTopHttpMethodWithOptions(request, runtime);
  }

  /**
   * 查询域名top referer
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

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
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
   * 查询域名top referer
   * 
   * @param request - DescribeDomainTopRefererRequest
   * @returns DescribeDomainTopRefererResponse
   */
  async describeDomainTopReferer(request: $_model.DescribeDomainTopRefererRequest): Promise<$_model.DescribeDomainTopRefererResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainTopRefererWithOptions(request, runtime);
  }

  /**
   * 查询top user agent
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

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
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
   * 查询top user agent
   * 
   * @param request - DescribeDomainTopUserAgentRequest
   * @returns DescribeDomainTopUserAgentResponse
   */
  async describeDomainTopUserAgent(request: $_model.DescribeDomainTopUserAgentRequest): Promise<$_model.DescribeDomainTopUserAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainTopUserAgentWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeDomainViewSourceCountriesRequest
   * @returns DescribeDomainViewSourceCountriesResponse
   */
  async describeDomainViewSourceCountries(request: $_model.DescribeDomainViewSourceCountriesRequest): Promise<$_model.DescribeDomainViewSourceCountriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainViewSourceCountriesWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeDomainViewSourceProvincesRequest
   * @returns DescribeDomainViewSourceProvincesResponse
   */
  async describeDomainViewSourceProvinces(request: $_model.DescribeDomainViewSourceProvincesRequest): Promise<$_model.DescribeDomainViewSourceProvincesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainViewSourceProvincesWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeDomainViewTopCostTimeRequest
   * @returns DescribeDomainViewTopCostTimeResponse
   */
  async describeDomainViewTopCostTime(request: $_model.DescribeDomainViewTopCostTimeRequest): Promise<$_model.DescribeDomainViewTopCostTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainViewTopCostTimeWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeDomainViewTopUrlRequest
   * @returns DescribeDomainViewTopUrlResponse
   */
  async describeDomainViewTopUrl(request: $_model.DescribeDomainViewTopUrlRequest): Promise<$_model.DescribeDomainViewTopUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainViewTopUrlWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeDomainsRequest
   * @returns DescribeDomainsResponse
   */
  async describeDomains(request: $_model.DescribeDomainsRequest): Promise<$_model.DescribeDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainsWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeElasticBandwidthSpecRequest
   * @returns DescribeElasticBandwidthSpecResponse
   */
  async describeElasticBandwidthSpec(request: $_model.DescribeElasticBandwidthSpecRequest): Promise<$_model.DescribeElasticBandwidthSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeElasticBandwidthSpecWithOptions(request, runtime);
  }

  /**
   * 高防弹性qps曲线图
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
   * 高防弹性qps曲线图
   * 
   * @param request - DescribeElasticQpsRequest
   * @returns DescribeElasticQpsResponse
   */
  async describeElasticQps(request: $_model.DescribeElasticQpsRequest): Promise<$_model.DescribeElasticQpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeElasticQpsWithOptions(request, runtime);
  }

  /**
   * 查询qps日95流量图
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
   * 查询qps日95流量图
   * 
   * @param request - DescribeElasticQpsRecordRequest
   * @returns DescribeElasticQpsRecordResponse
   */
  async describeElasticQpsRecord(request: $_model.DescribeElasticQpsRecordRequest): Promise<$_model.DescribeElasticQpsRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeElasticQpsRecordWithOptions(request, runtime);
  }

  /**
   * 获取header
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
   * 获取header
   * 
   * @param request - DescribeHeadersRequest
   * @returns DescribeHeadersResponse
   */
  async describeHeaders(request: $_model.DescribeHeadersRequest): Promise<$_model.DescribeHeadersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHeadersWithOptions(request, runtime);
  }

  /**
   * 查询健康检查列表
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
   * 查询健康检查列表
   * 
   * @param request - DescribeHealthCheckListRequest
   * @returns DescribeHealthCheckListResponse
   */
  async describeHealthCheckList(request: $_model.DescribeHealthCheckListRequest): Promise<$_model.DescribeHealthCheckListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHealthCheckListWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeHealthCheckStatusRequest
   * @returns DescribeHealthCheckStatusResponse
   */
  async describeHealthCheckStatus(request: $_model.DescribeHealthCheckStatusRequest): Promise<$_model.DescribeHealthCheckStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHealthCheckStatusWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeInstanceDetailsRequest
   * @returns DescribeInstanceDetailsResponse
   */
  async describeInstanceDetails(request: $_model.DescribeInstanceDetailsRequest): Promise<$_model.DescribeInstanceDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceDetailsWithOptions(request, runtime);
  }

  /**
   * 查询实例扩展信息用户terraform
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
   * 查询实例扩展信息用户terraform
   * 
   * @param request - DescribeInstanceExtRequest
   * @returns DescribeInstanceExtResponse
   */
  async describeInstanceExt(request: $_model.DescribeInstanceExtRequest): Promise<$_model.DescribeInstanceExtResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceExtWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeInstanceIdsRequest
   * @returns DescribeInstanceIdsResponse
   */
  async describeInstanceIds(request: $_model.DescribeInstanceIdsRequest): Promise<$_model.DescribeInstanceIdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceIdsWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeInstanceSpecsRequest
   * @returns DescribeInstanceSpecsResponse
   */
  async describeInstanceSpecs(request: $_model.DescribeInstanceSpecsRequest): Promise<$_model.DescribeInstanceSpecsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceSpecsWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeInstanceStatisticsRequest
   * @returns DescribeInstanceStatisticsResponse
   */
  async describeInstanceStatistics(request: $_model.DescribeInstanceStatisticsRequest): Promise<$_model.DescribeInstanceStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceStatisticsWithOptions(request, runtime);
  }

  /**
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
   * 查询域名接入回源策略
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
   * 查询域名接入回源策略
   * 
   * @param request - DescribeL7RsPolicyRequest
   * @returns DescribeL7RsPolicyResponse
   */
  async describeL7RsPolicy(request: $_model.DescribeL7RsPolicyRequest): Promise<$_model.DescribeL7RsPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeL7RsPolicyWithOptions(request, runtime);
  }

  /**
   * 查询长连接
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
   * 查询长连接
   * 
   * @param request - DescribeL7UsKeepaliveRequest
   * @returns DescribeL7UsKeepaliveResponse
   */
  async describeL7UsKeepalive(request: $_model.DescribeL7UsKeepaliveRequest): Promise<$_model.DescribeL7UsKeepaliveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeL7UsKeepaliveWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeLayer4RulePolicyRequest
   * @returns DescribeLayer4RulePolicyResponse
   */
  async describeLayer4RulePolicy(request: $_model.DescribeLayer4RulePolicyRequest): Promise<$_model.DescribeLayer4RulePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLayer4RulePolicyWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeLogStoreExistStatusRequest
   * @returns DescribeLogStoreExistStatusResponse
   */
  async describeLogStoreExistStatus(request: $_model.DescribeLogStoreExistStatusRequest): Promise<$_model.DescribeLogStoreExistStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLogStoreExistStatusWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeNetworkRegionBlockRequest
   * @returns DescribeNetworkRegionBlockResponse
   */
  async describeNetworkRegionBlock(request: $_model.DescribeNetworkRegionBlockRequest): Promise<$_model.DescribeNetworkRegionBlockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNetworkRegionBlockWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeNetworkRuleAttributesRequest
   * @returns DescribeNetworkRuleAttributesResponse
   */
  async describeNetworkRuleAttributes(request: $_model.DescribeNetworkRuleAttributesRequest): Promise<$_model.DescribeNetworkRuleAttributesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNetworkRuleAttributesWithOptions(request, runtime);
  }

  /**
   * 查询端口转发规则
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
   * 查询端口转发规则
   * 
   * @param request - DescribeNetworkRulesRequest
   * @returns DescribeNetworkRulesResponse
   */
  async describeNetworkRules(request: $_model.DescribeNetworkRulesRequest): Promise<$_model.DescribeNetworkRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNetworkRulesWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeOpEntitiesRequest
   * @returns DescribeOpEntitiesResponse
   */
  async describeOpEntities(request: $_model.DescribeOpEntitiesRequest): Promise<$_model.DescribeOpEntitiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOpEntitiesWithOptions(request, runtime);
  }

  /**
   * Terraform 查询端口
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
   * Terraform 查询端口
   * 
   * @param request - DescribePortRequest
   * @returns DescribePortResponse
   */
  async describePort(request: $_model.DescribePortRequest): Promise<$_model.DescribePortResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePortWithOptions(request, runtime);
  }

  /**
   * 查询端口攻击最大峰值
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
   * 查询端口攻击最大峰值
   * 
   * @param request - DescribePortAttackMaxFlowRequest
   * @returns DescribePortAttackMaxFlowResponse
   */
  async describePortAttackMaxFlow(request: $_model.DescribePortAttackMaxFlowRequest): Promise<$_model.DescribePortAttackMaxFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePortAttackMaxFlowWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribePortAutoCcStatusRequest
   * @returns DescribePortAutoCcStatusResponse
   */
  async describePortAutoCcStatus(request: $_model.DescribePortAutoCcStatusRequest): Promise<$_model.DescribePortAutoCcStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePortAutoCcStatusWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribePortCcAttackTopIPRequest
   * @returns DescribePortCcAttackTopIPResponse
   */
  async describePortCcAttackTopIP(request: $_model.DescribePortCcAttackTopIPRequest): Promise<$_model.DescribePortCcAttackTopIPResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePortCcAttackTopIPWithOptions(request, runtime);
  }

  /**
   * 查询端口连接数统计
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
   * 查询端口连接数统计
   * 
   * @param request - DescribePortConnsCountRequest
   * @returns DescribePortConnsCountResponse
   */
  async describePortConnsCount(request: $_model.DescribePortConnsCountRequest): Promise<$_model.DescribePortConnsCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePortConnsCountWithOptions(request, runtime);
  }

  /**
   * 查询端口连接列表
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
   * 查询端口连接列表
   * 
   * @param request - DescribePortConnsListRequest
   * @returns DescribePortConnsListResponse
   */
  async describePortConnsList(request: $_model.DescribePortConnsListRequest): Promise<$_model.DescribePortConnsListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePortConnsListWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribePortFlowListRequest
   * @returns DescribePortFlowListResponse
   */
  async describePortFlowList(request: $_model.DescribePortFlowListRequest): Promise<$_model.DescribePortFlowListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePortFlowListWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribePortMaxConnsRequest
   * @returns DescribePortMaxConnsResponse
   */
  async describePortMaxConns(request: $_model.DescribePortMaxConnsRequest): Promise<$_model.DescribePortMaxConnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePortMaxConnsWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribePortViewSourceCountriesRequest
   * @returns DescribePortViewSourceCountriesResponse
   */
  async describePortViewSourceCountries(request: $_model.DescribePortViewSourceCountriesRequest): Promise<$_model.DescribePortViewSourceCountriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePortViewSourceCountriesWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribePortViewSourceIspsRequest
   * @returns DescribePortViewSourceIspsResponse
   */
  async describePortViewSourceIsps(request: $_model.DescribePortViewSourceIspsRequest): Promise<$_model.DescribePortViewSourceIspsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePortViewSourceIspsWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribePortViewSourceProvincesRequest
   * @returns DescribePortViewSourceProvincesResponse
   */
  async describePortViewSourceProvinces(request: $_model.DescribePortViewSourceProvincesRequest): Promise<$_model.DescribePortViewSourceProvincesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePortViewSourceProvincesWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeSceneDefenseObjectsRequest
   * @returns DescribeSceneDefenseObjectsResponse
   */
  async describeSceneDefenseObjects(request: $_model.DescribeSceneDefenseObjectsRequest): Promise<$_model.DescribeSceneDefenseObjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSceneDefenseObjectsWithOptions(request, runtime);
  }

  /**
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
   * 查询目的限速事件列表
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
   * 查询目的限速事件列表
   * 
   * @param request - DescribeSlaEventListRequest
   * @returns DescribeSlaEventListResponse
   */
  async describeSlaEventList(request: $_model.DescribeSlaEventListRequest): Promise<$_model.DescribeSlaEventListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlaEventListWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeSlsAuthStatusRequest
   * @returns DescribeSlsAuthStatusResponse
   */
  async describeSlsAuthStatus(request: $_model.DescribeSlsAuthStatusRequest): Promise<$_model.DescribeSlsAuthStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlsAuthStatusWithOptions(request, runtime);
  }

  /**
   * 查询全量日志信息
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
   * 查询全量日志信息
   * 
   * @param request - DescribeSlsLogstoreInfoRequest
   * @returns DescribeSlsLogstoreInfoResponse
   */
  async describeSlsLogstoreInfo(request: $_model.DescribeSlsLogstoreInfoRequest): Promise<$_model.DescribeSlsLogstoreInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlsLogstoreInfoWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeSlsOpenStatusRequest
   * @returns DescribeSlsOpenStatusResponse
   */
  async describeSlsOpenStatus(request: $_model.DescribeSlsOpenStatusRequest): Promise<$_model.DescribeSlsOpenStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlsOpenStatusWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeStsGrantStatusRequest
   * @returns DescribeStsGrantStatusResponse
   */
  async describeStsGrantStatus(request: $_model.DescribeStsGrantStatusRequest): Promise<$_model.DescribeStsGrantStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStsGrantStatusWithOptions(request, runtime);
  }

  /**
   * 查询系统日志
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
   * 查询系统日志
   * 
   * @param request - DescribeSystemLogRequest
   * @returns DescribeSystemLogResponse
   */
  async describeSystemLog(request: $_model.DescribeSystemLogRequest): Promise<$_model.DescribeSystemLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSystemLogWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeTagKeysRequest
   * @returns DescribeTagKeysResponse
   */
  async describeTagKeys(request: $_model.DescribeTagKeysRequest): Promise<$_model.DescribeTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagKeysWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeTagResourcesRequest
   * @returns DescribeTagResourcesResponse
   */
  async describeTagResources(request: $_model.DescribeTagResourcesRequest): Promise<$_model.DescribeTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagResourcesWithOptions(request, runtime);
  }

  /**
   * 新峰值接口
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
   * 新峰值接口
   * 
   * @param request - DescribeTotalAttackMaxFlowRequest
   * @returns DescribeTotalAttackMaxFlowResponse
   */
  async describeTotalAttackMaxFlow(request: $_model.DescribeTotalAttackMaxFlowRequest): Promise<$_model.DescribeTotalAttackMaxFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTotalAttackMaxFlowWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeUdpReflectRequest
   * @returns DescribeUdpReflectResponse
   */
  async describeUdpReflect(request: $_model.DescribeUdpReflectRequest): Promise<$_model.DescribeUdpReflectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUdpReflectWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeUnBlackholeCountRequest
   * @returns DescribeUnBlackholeCountResponse
   */
  async describeUnBlackholeCount(request: $_model.DescribeUnBlackholeCountRequest): Promise<$_model.DescribeUnBlackholeCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUnBlackholeCountWithOptions(request, runtime);
  }

  /**
   * 查询解封次数
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
   * 查询解封次数
   * 
   * @param request - DescribeUnBlockCountRequest
   * @returns DescribeUnBlockCountResponse
   */
  async describeUnBlockCount(request: $_model.DescribeUnBlockCountRequest): Promise<$_model.DescribeUnBlockCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUnBlockCountWithOptions(request, runtime);
  }

  /**
   * 查询域名的全量日志分发状态
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
   * 查询域名的全量日志分发状态
   * 
   * @param request - DescribeWebAccessLogDispatchStatusRequest
   * @returns DescribeWebAccessLogDispatchStatusResponse
   */
  async describeWebAccessLogDispatchStatus(request: $_model.DescribeWebAccessLogDispatchStatusRequest): Promise<$_model.DescribeWebAccessLogDispatchStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebAccessLogDispatchStatusWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeWebAccessLogEmptyCountRequest
   * @returns DescribeWebAccessLogEmptyCountResponse
   */
  async describeWebAccessLogEmptyCount(request: $_model.DescribeWebAccessLogEmptyCountRequest): Promise<$_model.DescribeWebAccessLogEmptyCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebAccessLogEmptyCountWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeWebAccessLogStatusRequest
   * @returns DescribeWebAccessLogStatusResponse
   */
  async describeWebAccessLogStatus(request: $_model.DescribeWebAccessLogStatusRequest): Promise<$_model.DescribeWebAccessLogStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebAccessLogStatusWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeWebAccessModeRequest
   * @returns DescribeWebAccessModeResponse
   */
  async describeWebAccessMode(request: $_model.DescribeWebAccessModeRequest): Promise<$_model.DescribeWebAccessModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebAccessModeWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeWebAreaBlockConfigsRequest
   * @returns DescribeWebAreaBlockConfigsResponse
   */
  async describeWebAreaBlockConfigs(request: $_model.DescribeWebAreaBlockConfigsRequest): Promise<$_model.DescribeWebAreaBlockConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebAreaBlockConfigsWithOptions(request, runtime);
  }

  /**
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
   * 查询新版cc规则
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
   * 查询新版cc规则
   * 
   * @param request - DescribeWebCCRulesV2Request
   * @returns DescribeWebCCRulesV2Response
   */
  async describeWebCCRulesV2(request: $_model.DescribeWebCCRulesV2Request): Promise<$_model.DescribeWebCCRulesV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebCCRulesV2WithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeWebCacheConfigsRequest
   * @returns DescribeWebCacheConfigsResponse
   */
  async describeWebCacheConfigs(request: $_model.DescribeWebCacheConfigsRequest): Promise<$_model.DescribeWebCacheConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebCacheConfigsWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeWebCcProtectSwitchRequest
   * @returns DescribeWebCcProtectSwitchResponse
   */
  async describeWebCcProtectSwitch(request: $_model.DescribeWebCcProtectSwitchRequest): Promise<$_model.DescribeWebCcProtectSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebCcProtectSwitchWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeWebCustomPortsRequest
   * @returns DescribeWebCustomPortsResponse
   */
  async describeWebCustomPorts(request: $_model.DescribeWebCustomPortsRequest): Promise<$_model.DescribeWebCustomPortsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebCustomPortsWithOptions(request, runtime);
  }

  /**
   * 查询网站业务关联的DDoS高防实例信息
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
   * 查询网站业务关联的DDoS高防实例信息
   * 
   * @param request - DescribeWebInstanceRelationsRequest
   * @returns DescribeWebInstanceRelationsResponse
   */
  async describeWebInstanceRelations(request: $_model.DescribeWebInstanceRelationsRequest): Promise<$_model.DescribeWebInstanceRelationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebInstanceRelationsWithOptions(request, runtime);
  }

  /**
   * 查询网站业务精确访问控制规则
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
   * 查询网站业务精确访问控制规则
   * 
   * @param request - DescribeWebPreciseAccessRuleRequest
   * @returns DescribeWebPreciseAccessRuleResponse
   */
  async describeWebPreciseAccessRule(request: $_model.DescribeWebPreciseAccessRuleRequest): Promise<$_model.DescribeWebPreciseAccessRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebPreciseAccessRuleWithOptions(request, runtime);
  }

  /**
   * 查询报表top IP
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
   * 查询报表top IP
   * 
   * @param request - DescribeWebReportTopIpRequest
   * @returns DescribeWebReportTopIpResponse
   */
  async describeWebReportTopIp(request: $_model.DescribeWebReportTopIpRequest): Promise<$_model.DescribeWebReportTopIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebReportTopIpWithOptions(request, runtime);
  }

  /**
   * 查询域名接入规则
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
   * 查询域名接入规则
   * 
   * @param request - DescribeWebRulesRequest
   * @returns DescribeWebRulesResponse
   */
  async describeWebRules(request: $_model.DescribeWebRulesRequest): Promise<$_model.DescribeWebRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebRulesWithOptions(request, runtime);
  }

  /**
   * 查询场景策略防护对象
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
   * 查询场景策略防护对象
   * 
   * @param request - DetachSceneDefenseObjectRequest
   * @returns DetachSceneDefenseObjectResponse
   */
  async detachSceneDefenseObject(request: $_model.DetachSceneDefenseObjectRequest): Promise<$_model.DetachSceneDefenseObjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachSceneDefenseObjectWithOptions(request, runtime);
  }

  /**
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
   * @param request - DisableSceneDefensePolicyRequest
   * @returns DisableSceneDefensePolicyResponse
   */
  async disableSceneDefensePolicy(request: $_model.DisableSceneDefensePolicyRequest): Promise<$_model.DisableSceneDefensePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableSceneDefensePolicyWithOptions(request, runtime);
  }

  /**
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
   * @param request - DisableWebAccessLogConfigRequest
   * @returns DisableWebAccessLogConfigResponse
   */
  async disableWebAccessLogConfig(request: $_model.DisableWebAccessLogConfigRequest): Promise<$_model.DisableWebAccessLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableWebAccessLogConfigWithOptions(request, runtime);
  }

  /**
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
   * @param request - DisableWebCCRequest
   * @returns DisableWebCCResponse
   */
  async disableWebCC(request: $_model.DisableWebCCRequest): Promise<$_model.DisableWebCCResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableWebCCWithOptions(request, runtime);
  }

  /**
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
   * @param request - DisableWebCCRuleRequest
   * @returns DisableWebCCRuleResponse
   */
  async disableWebCCRule(request: $_model.DisableWebCCRuleRequest): Promise<$_model.DisableWebCCRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableWebCCRuleWithOptions(request, runtime);
  }

  /**
   * 查询CC黑名单
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
   * 查询CC黑名单
   * 
   * @param request - EmptyAutoCcBlacklistRequest
   * @returns EmptyAutoCcBlacklistResponse
   */
  async emptyAutoCcBlacklist(request: $_model.EmptyAutoCcBlacklistRequest): Promise<$_model.EmptyAutoCcBlacklistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.emptyAutoCcBlacklistWithOptions(request, runtime);
  }

  /**
   * 清空CC白名单
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
   * 清空CC白名单
   * 
   * @param request - EmptyAutoCcWhitelistRequest
   * @returns EmptyAutoCcWhitelistResponse
   */
  async emptyAutoCcWhitelist(request: $_model.EmptyAutoCcWhitelistRequest): Promise<$_model.EmptyAutoCcWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.emptyAutoCcWhitelistWithOptions(request, runtime);
  }

  /**
   * 清空全量日志库
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
   * 清空全量日志库
   * 
   * @param request - EmptySlsLogstoreRequest
   * @returns EmptySlsLogstoreResponse
   */
  async emptySlsLogstore(request: $_model.EmptySlsLogstoreRequest): Promise<$_model.EmptySlsLogstoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.emptySlsLogstoreWithOptions(request, runtime);
  }

  /**
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
   * @param request - EnableSceneDefensePolicyRequest
   * @returns EnableSceneDefensePolicyResponse
   */
  async enableSceneDefensePolicy(request: $_model.EnableSceneDefensePolicyRequest): Promise<$_model.EnableSceneDefensePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableSceneDefensePolicyWithOptions(request, runtime);
  }

  /**
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
   * @param request - EnableWebAccessLogConfigRequest
   * @returns EnableWebAccessLogConfigResponse
   */
  async enableWebAccessLogConfig(request: $_model.EnableWebAccessLogConfigRequest): Promise<$_model.EnableWebAccessLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableWebAccessLogConfigWithOptions(request, runtime);
  }

  /**
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
   * @param request - EnableWebCCRequest
   * @returns EnableWebCCResponse
   */
  async enableWebCC(request: $_model.EnableWebCCRequest): Promise<$_model.EnableWebCCResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableWebCCWithOptions(request, runtime);
  }

  /**
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
   * @param request - EnableWebCCRuleRequest
   * @returns EnableWebCCRuleResponse
   */
  async enableWebCCRule(request: $_model.EnableWebCCRuleRequest): Promise<$_model.EnableWebCCRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableWebCCRuleWithOptions(request, runtime);
  }

  /**
   * 95计费切换模式
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
   * 95计费切换模式
   * 
   * @param request - ModifyBizBandWidthModeRequest
   * @returns ModifyBizBandWidthModeResponse
   */
  async modifyBizBandWidthMode(request: $_model.ModifyBizBandWidthModeRequest): Promise<$_model.ModifyBizBandWidthModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBizBandWidthModeWithOptions(request, runtime);
  }

  /**
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
   * @param request - ModifyBlackholeStatusRequest
   * @returns ModifyBlackholeStatusResponse
   */
  async modifyBlackholeStatus(request: $_model.ModifyBlackholeStatusRequest): Promise<$_model.ModifyBlackholeStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBlackholeStatusWithOptions(request, runtime);
  }

  /**
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
   * @param request - ModifyBlockStatusRequest
   * @returns ModifyBlockStatusResponse
   */
  async modifyBlockStatus(request: $_model.ModifyBlockStatusRequest): Promise<$_model.ModifyBlockStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBlockStatusWithOptions(request, runtime);
  }

  /**
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
   * @param request - ModifyCnameReuseRequest
   * @returns ModifyCnameReuseResponse
   */
  async modifyCnameReuse(request: $_model.ModifyCnameReuseRequest): Promise<$_model.ModifyCnameReuseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCnameReuseWithOptions(request, runtime);
  }

  /**
   * 修改域名接入资源
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
   * 修改域名接入资源
   * 
   * @param request - ModifyDomainResourceRequest
   * @returns ModifyDomainResourceResponse
   */
  async modifyDomainResource(request: $_model.ModifyDomainResourceRequest): Promise<$_model.ModifyDomainResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDomainResourceWithOptions(request, runtime);
  }

  /**
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
   * @param request - ModifyElasticBandWidthRequest
   * @returns ModifyElasticBandWidthResponse
   */
  async modifyElasticBandWidth(request: $_model.ModifyElasticBandWidthRequest): Promise<$_model.ModifyElasticBandWidthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyElasticBandWidthWithOptions(request, runtime);
  }

  /**
   * 修改弹性业务带宽
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
   * 修改弹性业务带宽
   * 
   * @param request - ModifyElasticBizBandWidthRequest
   * @returns ModifyElasticBizBandWidthResponse
   */
  async modifyElasticBizBandWidth(request: $_model.ModifyElasticBizBandWidthRequest): Promise<$_model.ModifyElasticBizBandWidthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyElasticBizBandWidthWithOptions(request, runtime);
  }

  /**
   * 开启/关闭弹性QPS 首次模式直接生效
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
   * 开启/关闭弹性QPS 首次模式直接生效
   * 
   * @param request - ModifyElasticBizQpsRequest
   * @returns ModifyElasticBizQpsResponse
   */
  async modifyElasticBizQps(request: $_model.ModifyElasticBizQpsRequest): Promise<$_model.ModifyElasticBizQpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyElasticBizQpsWithOptions(request, runtime);
  }

  /**
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
   * @param request - ModifyFullLogTtlRequest
   * @returns ModifyFullLogTtlResponse
   */
  async modifyFullLogTtl(request: $_model.ModifyFullLogTtlRequest): Promise<$_model.ModifyFullLogTtlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFullLogTtlWithOptions(request, runtime);
  }

  /**
   * 流量标记
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

    if (!$dara.isNull(request.embeddedHeaders)) {
      query["EmbeddedHeaders"] = request.embeddedHeaders;
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
   * 流量标记
   * 
   * @param request - ModifyHeadersRequest
   * @returns ModifyHeadersResponse
   */
  async modifyHeaders(request: $_model.ModifyHeadersRequest): Promise<$_model.ModifyHeadersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHeadersWithOptions(request, runtime);
  }

  /**
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
   * @param request - ModifyHealthCheckConfigRequest
   * @returns ModifyHealthCheckConfigResponse
   */
  async modifyHealthCheckConfig(request: $_model.ModifyHealthCheckConfigRequest): Promise<$_model.ModifyHealthCheckConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHealthCheckConfigWithOptions(request, runtime);
  }

  /**
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
   * @param request - ModifyHttp2EnableRequest
   * @returns ModifyHttp2EnableResponse
   */
  async modifyHttp2Enable(request: $_model.ModifyHttp2EnableRequest): Promise<$_model.ModifyHttp2EnableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHttp2EnableWithOptions(request, runtime);
  }

  /**
   * 实例变配  类似bss的变配
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
   * 实例变配  类似bss的变配
   * 
   * @param request - ModifyInstanceRequest
   * @returns ModifyInstanceResponse
   */
  async modifyInstance(request: $_model.ModifyInstanceRequest): Promise<$_model.ModifyInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceWithOptions(request, runtime);
  }

  /**
   * 修改实例备注
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
   * 修改实例备注
   * 
   * @param request - ModifyInstanceRemarkRequest
   * @returns ModifyInstanceRemarkResponse
   */
  async modifyInstanceRemark(request: $_model.ModifyInstanceRemarkRequest): Promise<$_model.ModifyInstanceRemarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceRemarkWithOptions(request, runtime);
  }

  /**
   * 编辑端口转发规则的会话保持和DDoS防护策略设置
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
   * 编辑端口转发规则的会话保持和DDoS防护策略设置
   * 
   * @param request - ModifyNetworkRuleAttributeRequest
   * @returns ModifyNetworkRuleAttributeResponse
   */
  async modifyNetworkRuleAttribute(request: $_model.ModifyNetworkRuleAttributeRequest): Promise<$_model.ModifyNetworkRuleAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyNetworkRuleAttributeWithOptions(request, runtime);
  }

  /**
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
   * @param request - ModifyOcspStatusRequest
   * @returns ModifyOcspStatusResponse
   */
  async modifyOcspStatus(request: $_model.ModifyOcspStatusRequest): Promise<$_model.ModifyOcspStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyOcspStatusWithOptions(request, runtime);
  }

  /**
   * 修改端口接入配置
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
   * 修改端口接入配置
   * 
   * @param request - ModifyPortRequest
   * @returns ModifyPortResponse
   */
  async modifyPort(request: $_model.ModifyPortRequest): Promise<$_model.ModifyPortResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPortWithOptions(request, runtime);
  }

  /**
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
   * @param request - ModifyPortAutoCcStatusRequest
   * @returns ModifyPortAutoCcStatusResponse
   */
  async modifyPortAutoCcStatus(request: $_model.ModifyPortAutoCcStatusRequest): Promise<$_model.ModifyPortAutoCcStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPortAutoCcStatusWithOptions(request, runtime);
  }

  /**
   * 修改弹性qps模式
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
   * 修改弹性qps模式
   * 
   * @param request - ModifyQpsModeRequest
   * @returns ModifyQpsModeResponse
   */
  async modifyQpsMode(request: $_model.ModifyQpsModeRequest): Promise<$_model.ModifyQpsModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyQpsModeWithOptions(request, runtime);
  }

  /**
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
   * @param request - ModifySceneDefensePolicyRequest
   * @returns ModifySceneDefensePolicyResponse
   */
  async modifySceneDefensePolicy(request: $_model.ModifySceneDefensePolicyRequest): Promise<$_model.ModifySceneDefensePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySceneDefensePolicyWithOptions(request, runtime);
  }

  /**
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
   * @param request - ModifySchedulerRuleRequest
   * @returns ModifySchedulerRuleResponse
   */
  async modifySchedulerRule(request: $_model.ModifySchedulerRuleRequest): Promise<$_model.ModifySchedulerRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySchedulerRuleWithOptions(request, runtime);
  }

  /**
   * 修改证书配置
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
   * 修改证书配置
   * 
   * @param request - ModifyTlsConfigRequest
   * @returns ModifyTlsConfigResponse
   */
  async modifyTlsConfig(request: $_model.ModifyTlsConfigRequest): Promise<$_model.ModifyTlsConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTlsConfigWithOptions(request, runtime);
  }

  /**
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
   * @param request - ModifyWebAIProtectModeRequest
   * @returns ModifyWebAIProtectModeResponse
   */
  async modifyWebAIProtectMode(request: $_model.ModifyWebAIProtectModeRequest): Promise<$_model.ModifyWebAIProtectModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWebAIProtectModeWithOptions(request, runtime);
  }

  /**
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
   * @param request - ModifyWebAIProtectSwitchRequest
   * @returns ModifyWebAIProtectSwitchResponse
   */
  async modifyWebAIProtectSwitch(request: $_model.ModifyWebAIProtectSwitchRequest): Promise<$_model.ModifyWebAIProtectSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWebAIProtectSwitchWithOptions(request, runtime);
  }

  /**
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
   * @param request - ModifyWebAccessModeRequest
   * @returns ModifyWebAccessModeResponse
   */
  async modifyWebAccessMode(request: $_model.ModifyWebAccessModeRequest): Promise<$_model.ModifyWebAccessModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWebAccessModeWithOptions(request, runtime);
  }

  /**
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
   * @param request - ModifyWebAreaBlockRequest
   * @returns ModifyWebAreaBlockResponse
   */
  async modifyWebAreaBlock(request: $_model.ModifyWebAreaBlockRequest): Promise<$_model.ModifyWebAreaBlockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWebAreaBlockWithOptions(request, runtime);
  }

  /**
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
   * @param request - ModifyWebAreaBlockSwitchRequest
   * @returns ModifyWebAreaBlockSwitchResponse
   */
  async modifyWebAreaBlockSwitch(request: $_model.ModifyWebAreaBlockSwitchRequest): Promise<$_model.ModifyWebAreaBlockSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWebAreaBlockSwitchWithOptions(request, runtime);
  }

  /**
   * 统一全局CC开关
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
   * 统一全局CC开关
   * 
   * @param request - ModifyWebCCGlobalSwitchRequest
   * @returns ModifyWebCCGlobalSwitchResponse
   */
  async modifyWebCCGlobalSwitch(request: $_model.ModifyWebCCGlobalSwitchRequest): Promise<$_model.ModifyWebCCGlobalSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWebCCGlobalSwitchWithOptions(request, runtime);
  }

  /**
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
   * @param request - ModifyWebCacheCustomRuleRequest
   * @returns ModifyWebCacheCustomRuleResponse
   */
  async modifyWebCacheCustomRule(request: $_model.ModifyWebCacheCustomRuleRequest): Promise<$_model.ModifyWebCacheCustomRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWebCacheCustomRuleWithOptions(request, runtime);
  }

  /**
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
   * @param request - ModifyWebCacheModeRequest
   * @returns ModifyWebCacheModeResponse
   */
  async modifyWebCacheMode(request: $_model.ModifyWebCacheModeRequest): Promise<$_model.ModifyWebCacheModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWebCacheModeWithOptions(request, runtime);
  }

  /**
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
   * @param request - ModifyWebCacheSwitchRequest
   * @returns ModifyWebCacheSwitchResponse
   */
  async modifyWebCacheSwitch(request: $_model.ModifyWebCacheSwitchRequest): Promise<$_model.ModifyWebCacheSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWebCacheSwitchWithOptions(request, runtime);
  }

  /**
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
   * @param request - ModifyWebIpSetSwitchRequest
   * @returns ModifyWebIpSetSwitchResponse
   */
  async modifyWebIpSetSwitch(request: $_model.ModifyWebIpSetSwitchRequest): Promise<$_model.ModifyWebIpSetSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWebIpSetSwitchWithOptions(request, runtime);
  }

  /**
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
   * @param request - ModifyWebPreciseAccessRuleRequest
   * @returns ModifyWebPreciseAccessRuleResponse
   */
  async modifyWebPreciseAccessRule(request: $_model.ModifyWebPreciseAccessRuleRequest): Promise<$_model.ModifyWebPreciseAccessRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWebPreciseAccessRuleWithOptions(request, runtime);
  }

  /**
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
   * @param request - ModifyWebPreciseAccessSwitchRequest
   * @returns ModifyWebPreciseAccessSwitchResponse
   */
  async modifyWebPreciseAccessSwitch(request: $_model.ModifyWebPreciseAccessSwitchRequest): Promise<$_model.ModifyWebPreciseAccessSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWebPreciseAccessSwitchWithOptions(request, runtime);
  }

  /**
   * 修改已经创建的网站业务转发规则
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
   * 修改已经创建的网站业务转发规则
   * 
   * @param request - ModifyWebRuleRequest
   * @returns ModifyWebRuleResponse
   */
  async modifyWebRule(request: $_model.ModifyWebRuleRequest): Promise<$_model.ModifyWebRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWebRuleWithOptions(request, runtime);
  }

  /**
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
   * @param request - ReleaseInstanceRequest
   * @returns ReleaseInstanceResponse
   */
  async releaseInstance(request: $_model.ReleaseInstanceRequest): Promise<$_model.ReleaseInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseInstanceWithOptions(request, runtime);
  }

  /**
   * 切换流量调度器
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
   * 切换流量调度器
   * 
   * @param request - SwitchSchedulerRuleRequest
   * @returns SwitchSchedulerRuleResponse
   */
  async switchSchedulerRule(request: $_model.SwitchSchedulerRuleRequest): Promise<$_model.SwitchSchedulerRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchSchedulerRuleWithOptions(request, runtime);
  }

}
