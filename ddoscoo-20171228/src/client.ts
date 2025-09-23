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
   * @param request - AddLayer7CCRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddLayer7CCRuleResponse
   */
  async addLayer7CCRuleWithOptions(request: $_model.AddLayer7CCRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddLayer7CCRuleResponse> {
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
      action: "AddLayer7CCRule",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddLayer7CCRuleResponse>(await this.callApi(params, req, runtime), new $_model.AddLayer7CCRuleResponse({}));
  }

  /**
   * @param request - AddLayer7CCRuleRequest
   * @returns AddLayer7CCRuleResponse
   */
  async addLayer7CCRule(request: $_model.AddLayer7CCRuleRequest): Promise<$_model.AddLayer7CCRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addLayer7CCRuleWithOptions(request, runtime);
  }

  /**
   * @param request - CloseDomainSlsConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseDomainSlsConfigResponse
   */
  async closeDomainSlsConfigWithOptions(request: $_model.CloseDomainSlsConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloseDomainSlsConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloseDomainSlsConfig",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloseDomainSlsConfigResponse>(await this.callApi(params, req, runtime), new $_model.CloseDomainSlsConfigResponse({}));
  }

  /**
   * @param request - CloseDomainSlsConfigRequest
   * @returns CloseDomainSlsConfigResponse
   */
  async closeDomainSlsConfig(request: $_model.CloseDomainSlsConfigRequest): Promise<$_model.CloseDomainSlsConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.closeDomainSlsConfigWithOptions(request, runtime);
  }

  /**
   * @param request - ConfigHealthCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigHealthCheckResponse
   */
  async configHealthCheckWithOptions(request: $_model.ConfigHealthCheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigHealthCheckResponse> {
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
      action: "ConfigHealthCheck",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigHealthCheckResponse>(await this.callApi(params, req, runtime), new $_model.ConfigHealthCheckResponse({}));
  }

  /**
   * @param request - ConfigHealthCheckRequest
   * @returns ConfigHealthCheckResponse
   */
  async configHealthCheck(request: $_model.ConfigHealthCheckRequest): Promise<$_model.ConfigHealthCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configHealthCheckWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - ConfigLayer4RuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigLayer4RuleResponse
   */
  async configLayer4RuleWithOptions(tmpReq: $_model.ConfigLayer4RuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigLayer4RuleResponse> {
    tmpReq.validate();
    let request = new $_model.ConfigLayer4RuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.usTimeout)) {
      request.usTimeoutShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.usTimeout, "UsTimeout", "json");
    }

    let query = { };
    if (!$dara.isNull(request.listeners)) {
      query["Listeners"] = request.listeners;
    }

    if (!$dara.isNull(request.proxyEnable)) {
      query["ProxyEnable"] = request.proxyEnable;
    }

    if (!$dara.isNull(request.usTimeoutShrink)) {
      query["UsTimeout"] = request.usTimeoutShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigLayer4Rule",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigLayer4RuleResponse>(await this.callApi(params, req, runtime), new $_model.ConfigLayer4RuleResponse({}));
  }

  /**
   * @param request - ConfigLayer4RuleRequest
   * @returns ConfigLayer4RuleResponse
   */
  async configLayer4Rule(request: $_model.ConfigLayer4RuleRequest): Promise<$_model.ConfigLayer4RuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configLayer4RuleWithOptions(request, runtime);
  }

  /**
   * @param request - ConfigLayer4RuleAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigLayer4RuleAttributeResponse
   */
  async configLayer4RuleAttributeWithOptions(request: $_model.ConfigLayer4RuleAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigLayer4RuleAttributeResponse> {
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
      action: "ConfigLayer4RuleAttribute",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigLayer4RuleAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ConfigLayer4RuleAttributeResponse({}));
  }

  /**
   * @param request - ConfigLayer4RuleAttributeRequest
   * @returns ConfigLayer4RuleAttributeResponse
   */
  async configLayer4RuleAttribute(request: $_model.ConfigLayer4RuleAttributeRequest): Promise<$_model.ConfigLayer4RuleAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configLayer4RuleAttributeWithOptions(request, runtime);
  }

  /**
   * @param request - ConfigLayer7BlackWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigLayer7BlackWhiteListResponse
   */
  async configLayer7BlackWhiteListWithOptions(request: $_model.ConfigLayer7BlackWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigLayer7BlackWhiteListResponse> {
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
      action: "ConfigLayer7BlackWhiteList",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigLayer7BlackWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.ConfigLayer7BlackWhiteListResponse({}));
  }

  /**
   * @param request - ConfigLayer7BlackWhiteListRequest
   * @returns ConfigLayer7BlackWhiteListResponse
   */
  async configLayer7BlackWhiteList(request: $_model.ConfigLayer7BlackWhiteListRequest): Promise<$_model.ConfigLayer7BlackWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configLayer7BlackWhiteListWithOptions(request, runtime);
  }

  /**
   * @param request - ConfigLayer7CCRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigLayer7CCRuleResponse
   */
  async configLayer7CCRuleWithOptions(request: $_model.ConfigLayer7CCRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigLayer7CCRuleResponse> {
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
      action: "ConfigLayer7CCRule",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigLayer7CCRuleResponse>(await this.callApi(params, req, runtime), new $_model.ConfigLayer7CCRuleResponse({}));
  }

  /**
   * @param request - ConfigLayer7CCRuleRequest
   * @returns ConfigLayer7CCRuleResponse
   */
  async configLayer7CCRule(request: $_model.ConfigLayer7CCRuleRequest): Promise<$_model.ConfigLayer7CCRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configLayer7CCRuleWithOptions(request, runtime);
  }

  /**
   * @param request - ConfigLayer7CCTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigLayer7CCTemplateResponse
   */
  async configLayer7CCTemplateWithOptions(request: $_model.ConfigLayer7CCTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigLayer7CCTemplateResponse> {
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
      action: "ConfigLayer7CCTemplate",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigLayer7CCTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ConfigLayer7CCTemplateResponse({}));
  }

  /**
   * @param request - ConfigLayer7CCTemplateRequest
   * @returns ConfigLayer7CCTemplateResponse
   */
  async configLayer7CCTemplate(request: $_model.ConfigLayer7CCTemplateRequest): Promise<$_model.ConfigLayer7CCTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configLayer7CCTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - ConfigLayer7CertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigLayer7CertResponse
   */
  async configLayer7CertWithOptions(request: $_model.ConfigLayer7CertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigLayer7CertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cert)) {
      query["Cert"] = request.cert;
    }

    if (!$dara.isNull(request.certId)) {
      query["CertId"] = request.certId;
    }

    if (!$dara.isNull(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!$dara.isNull(request.certRegion)) {
      query["CertRegion"] = request.certRegion;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigLayer7Cert",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigLayer7CertResponse>(await this.callApi(params, req, runtime), new $_model.ConfigLayer7CertResponse({}));
  }

  /**
   * @param request - ConfigLayer7CertRequest
   * @returns ConfigLayer7CertResponse
   */
  async configLayer7Cert(request: $_model.ConfigLayer7CertRequest): Promise<$_model.ConfigLayer7CertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configLayer7CertWithOptions(request, runtime);
  }

  /**
   * @param request - ConfigLayer7RuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigLayer7RuleResponse
   */
  async configLayer7RuleWithOptions(request: $_model.ConfigLayer7RuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigLayer7RuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.proxyTypeList)) {
      query["ProxyTypeList"] = request.proxyTypeList;
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
      action: "ConfigLayer7Rule",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigLayer7RuleResponse>(await this.callApi(params, req, runtime), new $_model.ConfigLayer7RuleResponse({}));
  }

  /**
   * @param request - ConfigLayer7RuleRequest
   * @returns ConfigLayer7RuleResponse
   */
  async configLayer7Rule(request: $_model.ConfigLayer7RuleRequest): Promise<$_model.ConfigLayer7RuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configLayer7RuleWithOptions(request, runtime);
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
      version: "2017-12-28",
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
   * @param tmpReq - CreateLayer4RuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLayer4RuleResponse
   */
  async createLayer4RuleWithOptions(tmpReq: $_model.CreateLayer4RuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLayer4RuleResponse> {
    tmpReq.validate();
    let request = new $_model.CreateLayer4RuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.usTimeout)) {
      request.usTimeoutShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.usTimeout, "UsTimeout", "json");
    }

    let query = { };
    if (!$dara.isNull(request.listeners)) {
      query["Listeners"] = request.listeners;
    }

    if (!$dara.isNull(request.proxyEnable)) {
      query["ProxyEnable"] = request.proxyEnable;
    }

    if (!$dara.isNull(request.usTimeoutShrink)) {
      query["UsTimeout"] = request.usTimeoutShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLayer4Rule",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLayer4RuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateLayer4RuleResponse({}));
  }

  /**
   * @param request - CreateLayer4RuleRequest
   * @returns CreateLayer4RuleResponse
   */
  async createLayer4Rule(request: $_model.CreateLayer4RuleRequest): Promise<$_model.CreateLayer4RuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLayer4RuleWithOptions(request, runtime);
  }

  /**
   * @param request - CreateLayer7RuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLayer7RuleResponse
   */
  async createLayer7RuleWithOptions(request: $_model.CreateLayer7RuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLayer7RuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
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
      action: "CreateLayer7Rule",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLayer7RuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateLayer7RuleResponse({}));
  }

  /**
   * @param request - CreateLayer7RuleRequest
   * @returns CreateLayer7RuleResponse
   */
  async createLayer7Rule(request: $_model.CreateLayer7RuleRequest): Promise<$_model.CreateLayer7RuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLayer7RuleWithOptions(request, runtime);
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
      version: "2017-12-28",
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
   * @param request - DeleteLayer4RuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLayer4RuleResponse
   */
  async deleteLayer4RuleWithOptions(request: $_model.DeleteLayer4RuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLayer4RuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listeners)) {
      query["Listeners"] = request.listeners;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLayer4Rule",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLayer4RuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLayer4RuleResponse({}));
  }

  /**
   * @param request - DeleteLayer4RuleRequest
   * @returns DeleteLayer4RuleResponse
   */
  async deleteLayer4Rule(request: $_model.DeleteLayer4RuleRequest): Promise<$_model.DeleteLayer4RuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLayer4RuleWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteLayer7CCRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLayer7CCRuleResponse
   */
  async deleteLayer7CCRuleWithOptions(request: $_model.DeleteLayer7CCRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLayer7CCRuleResponse> {
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
      action: "DeleteLayer7CCRule",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLayer7CCRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLayer7CCRuleResponse({}));
  }

  /**
   * @param request - DeleteLayer7CCRuleRequest
   * @returns DeleteLayer7CCRuleResponse
   */
  async deleteLayer7CCRule(request: $_model.DeleteLayer7CCRuleRequest): Promise<$_model.DeleteLayer7CCRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLayer7CCRuleWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteLayer7RuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLayer7RuleResponse
   */
  async deleteLayer7RuleWithOptions(request: $_model.DeleteLayer7RuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLayer7RuleResponse> {
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
      action: "DeleteLayer7Rule",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLayer7RuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLayer7RuleResponse({}));
  }

  /**
   * @param request - DeleteLayer7RuleRequest
   * @returns DeleteLayer7RuleResponse
   */
  async deleteLayer7Rule(request: $_model.DeleteLayer7RuleRequest): Promise<$_model.DeleteLayer7RuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLayer7RuleWithOptions(request, runtime);
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

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackSourceCidr",
      version: "2017-12-28",
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
   * rosetta迁移
   * 
   * @param request - DescribeBatchSlsDispatchStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBatchSlsDispatchStatusResponse
   */
  async describeBatchSlsDispatchStatusWithOptions(request: $_model.DescribeBatchSlsDispatchStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBatchSlsDispatchStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBatchSlsDispatchStatus",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBatchSlsDispatchStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBatchSlsDispatchStatusResponse({}));
  }

  /**
   * rosetta迁移
   * 
   * @param request - DescribeBatchSlsDispatchStatusRequest
   * @returns DescribeBatchSlsDispatchStatusResponse
   */
  async describeBatchSlsDispatchStatus(request: $_model.DescribeBatchSlsDispatchStatusRequest): Promise<$_model.DescribeBatchSlsDispatchStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBatchSlsDispatchStatusWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDDoSEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDDoSEventsResponse
   */
  async describeDDoSEventsWithOptions(request: $_model.DescribeDDoSEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDDoSEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eip)) {
      query["Eip"] = request.eip;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDDoSEvents",
      version: "2017-12-28",
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
   * @param request - DescribeDDoSEventsRequest
   * @returns DescribeDDoSEventsResponse
   */
  async describeDDoSEvents(request: $_model.DescribeDDoSEventsRequest): Promise<$_model.DescribeDDoSEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDDoSEventsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDDoSTrafficRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDDoSTrafficResponse
   */
  async describeDDoSTrafficWithOptions(request: $_model.DescribeDDoSTrafficRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDDoSTrafficResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eip)) {
      query["Eip"] = request.eip;
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

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDDoSTraffic",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDDoSTrafficResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDDoSTrafficResponse({}));
  }

  /**
   * @param request - DescribeDDoSTrafficRequest
   * @returns DescribeDDoSTrafficResponse
   */
  async describeDDoSTraffic(request: $_model.DescribeDDoSTrafficRequest): Promise<$_model.DescribeDDoSTrafficResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDDoSTrafficWithOptions(request, runtime);
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

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDefenseCountStatistics",
      version: "2017-12-28",
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
   * @param request - DescribeDomainAccessModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainAccessModeResponse
   */
  async describeDomainAccessModeWithOptions(request: $_model.DescribeDomainAccessModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainAccessModeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainList)) {
      query["DomainList"] = request.domainList;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainAccessMode",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainAccessModeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainAccessModeResponse({}));
  }

  /**
   * @param request - DescribeDomainAccessModeRequest
   * @returns DescribeDomainAccessModeResponse
   */
  async describeDomainAccessMode(request: $_model.DescribeDomainAccessModeRequest): Promise<$_model.DescribeDomainAccessModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainAccessModeWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDomainAttackEventListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainAttackEventListResponse
   */
  async describeDomainAttackEventListWithOptions(request: $_model.DescribeDomainAttackEventListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainAttackEventListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
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
      action: "DescribeDomainAttackEventList",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainAttackEventListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainAttackEventListResponse({}));
  }

  /**
   * @param request - DescribeDomainAttackEventListRequest
   * @returns DescribeDomainAttackEventListResponse
   */
  async describeDomainAttackEventList(request: $_model.DescribeDomainAttackEventListRequest): Promise<$_model.DescribeDomainAttackEventListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainAttackEventListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDomainAttackMaxQpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainAttackMaxQpsResponse
   */
  async describeDomainAttackMaxQpsWithOptions(request: $_model.DescribeDomainAttackMaxQpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainAttackMaxQpsResponse> {
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
      action: "DescribeDomainAttackMaxQps",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainAttackMaxQpsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainAttackMaxQpsResponse({}));
  }

  /**
   * @param request - DescribeDomainAttackMaxQpsRequest
   * @returns DescribeDomainAttackMaxQpsResponse
   */
  async describeDomainAttackMaxQps(request: $_model.DescribeDomainAttackMaxQpsRequest): Promise<$_model.DescribeDomainAttackMaxQpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainAttackMaxQpsWithOptions(request, runtime);
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
      version: "2017-12-28",
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
   * @param request - DescribeDomainQpsListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainQpsListResponse
   */
  async describeDomainQpsListWithOptions(request: $_model.DescribeDomainQpsListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainQpsListResponse> {
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
      action: "DescribeDomainQpsList",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainQpsListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainQpsListResponse({}));
  }

  /**
   * @param request - DescribeDomainQpsListRequest
   * @returns DescribeDomainQpsListResponse
   */
  async describeDomainQpsList(request: $_model.DescribeDomainQpsListRequest): Promise<$_model.DescribeDomainQpsListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainQpsListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDomainQpsWithCacheRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainQpsWithCacheResponse
   */
  async describeDomainQpsWithCacheWithOptions(request: $_model.DescribeDomainQpsWithCacheRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainQpsWithCacheResponse> {
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

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainQpsWithCache",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainQpsWithCacheResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainQpsWithCacheResponse({}));
  }

  /**
   * @param request - DescribeDomainQpsWithCacheRequest
   * @returns DescribeDomainQpsWithCacheResponse
   */
  async describeDomainQpsWithCache(request: $_model.DescribeDomainQpsWithCacheRequest): Promise<$_model.DescribeDomainQpsWithCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainQpsWithCacheWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDomainSlsStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainSlsStatusResponse
   */
  async describeDomainSlsStatusWithOptions(request: $_model.DescribeDomainSlsStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainSlsStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainSlsStatus",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainSlsStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainSlsStatusResponse({}));
  }

  /**
   * @param request - DescribeDomainSlsStatusRequest
   * @returns DescribeDomainSlsStatusResponse
   */
  async describeDomainSlsStatus(request: $_model.DescribeDomainSlsStatusRequest): Promise<$_model.DescribeDomainSlsStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainSlsStatusWithOptions(request, runtime);
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
      version: "2017-12-28",
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
   * @param request - DescribeDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainsResponse
   */
  async describeDomainsWithOptions(request: $_model.DescribeDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
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

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomains",
      version: "2017-12-28",
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

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeElasticBandwidthSpec",
      version: "2017-12-28",
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
   * @param request - DescribeHealthCheckListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHealthCheckListResponse
   */
  async describeHealthCheckListWithOptions(request: $_model.DescribeHealthCheckListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHealthCheckListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listeners)) {
      query["Listeners"] = request.listeners;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHealthCheckList",
      version: "2017-12-28",
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
   * @param request - DescribeHealthCheckListRequest
   * @returns DescribeHealthCheckListResponse
   */
  async describeHealthCheckList(request: $_model.DescribeHealthCheckListRequest): Promise<$_model.DescribeHealthCheckListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHealthCheckListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeHealthCheckStatusListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHealthCheckStatusListResponse
   */
  async describeHealthCheckStatusListWithOptions(request: $_model.DescribeHealthCheckStatusListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHealthCheckStatusListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listeners)) {
      query["Listeners"] = request.listeners;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHealthCheckStatusList",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHealthCheckStatusListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHealthCheckStatusListResponse({}));
  }

  /**
   * @param request - DescribeHealthCheckStatusListRequest
   * @returns DescribeHealthCheckStatusListResponse
   */
  async describeHealthCheckStatusList(request: $_model.DescribeHealthCheckStatusListRequest): Promise<$_model.DescribeHealthCheckStatusListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHealthCheckStatusListWithOptions(request, runtime);
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

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceDetails",
      version: "2017-12-28",
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

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceSpecs",
      version: "2017-12-28",
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

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceStatistics",
      version: "2017-12-28",
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

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
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

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
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
      version: "2017-12-28",
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
   * @param request - DescribeInstancesRequest
   * @returns DescribeInstancesResponse
   */
  async describeInstances(request: $_model.DescribeInstancesRequest): Promise<$_model.DescribeInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeIpTrafficRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIpTrafficResponse
   */
  async describeIpTrafficWithOptions(request: $_model.DescribeIpTrafficRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIpTrafficResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eip)) {
      query["Eip"] = request.eip;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.queryProtocol)) {
      query["QueryProtocol"] = request.queryProtocol;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIpTraffic",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIpTrafficResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIpTrafficResponse({}));
  }

  /**
   * @param request - DescribeIpTrafficRequest
   * @returns DescribeIpTrafficResponse
   */
  async describeIpTraffic(request: $_model.DescribeIpTrafficRequest): Promise<$_model.DescribeIpTrafficResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIpTrafficWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeLayer4RuleAttributesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLayer4RuleAttributesResponse
   */
  async describeLayer4RuleAttributesWithOptions(request: $_model.DescribeLayer4RuleAttributesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLayer4RuleAttributesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listeners)) {
      query["Listeners"] = request.listeners;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLayer4RuleAttributes",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLayer4RuleAttributesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLayer4RuleAttributesResponse({}));
  }

  /**
   * @param request - DescribeLayer4RuleAttributesRequest
   * @returns DescribeLayer4RuleAttributesResponse
   */
  async describeLayer4RuleAttributes(request: $_model.DescribeLayer4RuleAttributesRequest): Promise<$_model.DescribeLayer4RuleAttributesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLayer4RuleAttributesWithOptions(request, runtime);
  }

  /**
   * Call DescribeLayer4Rules to query the detailed configuration of port forwarding rules for DDoS protection instances.
   * 
   * @param request - DescribeLayer4RulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLayer4RulesResponse
   */
  async describeLayer4RulesWithOptions(request: $_model.DescribeLayer4RulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLayer4RulesResponse> {
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

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLayer4Rules",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLayer4RulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLayer4RulesResponse({}));
  }

  /**
   * Call DescribeLayer4Rules to query the detailed configuration of port forwarding rules for DDoS protection instances.
   * 
   * @param request - DescribeLayer4RulesRequest
   * @returns DescribeLayer4RulesResponse
   */
  async describeLayer4Rules(request: $_model.DescribeLayer4RulesRequest): Promise<$_model.DescribeLayer4RulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLayer4RulesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeLayer7CCRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLayer7CCRulesResponse
   */
  async describeLayer7CCRulesWithOptions(request: $_model.DescribeLayer7CCRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLayer7CCRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLayer7CCRules",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLayer7CCRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLayer7CCRulesResponse({}));
  }

  /**
   * @param request - DescribeLayer7CCRulesRequest
   * @returns DescribeLayer7CCRulesResponse
   */
  async describeLayer7CCRules(request: $_model.DescribeLayer7CCRulesRequest): Promise<$_model.DescribeLayer7CCRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLayer7CCRulesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeLogStoreExistStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLogStoreExistStatusResponse
   */
  async describeLogStoreExistStatusWithOptions(request: $_model.DescribeLogStoreExistStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLogStoreExistStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLogStoreExistStatus",
      version: "2017-12-28",
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

    if (!$dara.isNull(request.opAction)) {
      query["OpAction"] = request.opAction;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOpEntities",
      version: "2017-12-28",
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
   * @param request - DescribeSimpleDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSimpleDomainsResponse
   */
  async describeSimpleDomainsWithOptions(request: $_model.DescribeSimpleDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSimpleDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSimpleDomains",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSimpleDomainsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSimpleDomainsResponse({}));
  }

  /**
   * @param request - DescribeSimpleDomainsRequest
   * @returns DescribeSimpleDomainsResponse
   */
  async describeSimpleDomains(request: $_model.DescribeSimpleDomainsRequest): Promise<$_model.DescribeSimpleDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSimpleDomainsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeSlsAuthStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlsAuthStatusResponse
   */
  async describeSlsAuthStatusWithOptions(request: $_model.DescribeSlsAuthStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlsAuthStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlsAuthStatus",
      version: "2017-12-28",
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
   * @param request - DescribeSlsEmptyCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlsEmptyCountResponse
   */
  async describeSlsEmptyCountWithOptions(request: $_model.DescribeSlsEmptyCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlsEmptyCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlsEmptyCount",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSlsEmptyCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSlsEmptyCountResponse({}));
  }

  /**
   * @param request - DescribeSlsEmptyCountRequest
   * @returns DescribeSlsEmptyCountResponse
   */
  async describeSlsEmptyCount(request: $_model.DescribeSlsEmptyCountRequest): Promise<$_model.DescribeSlsEmptyCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlsEmptyCountWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeSlsLogstoreInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlsLogstoreInfoResponse
   */
  async describeSlsLogstoreInfoWithOptions(request: $_model.DescribeSlsLogstoreInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlsLogstoreInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlsLogstoreInfo",
      version: "2017-12-28",
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
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlsOpenStatus",
      version: "2017-12-28",
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
   * @param request - DescribleCertListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribleCertListResponse
   */
  async describleCertListWithOptions(request: $_model.DescribleCertListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribleCertListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribleCertList",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribleCertListResponse>(await this.callApi(params, req, runtime), new $_model.DescribleCertListResponse({}));
  }

  /**
   * @param request - DescribleCertListRequest
   * @returns DescribleCertListResponse
   */
  async describleCertList(request: $_model.DescribleCertListRequest): Promise<$_model.DescribleCertListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describleCertListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribleLayer7InstanceRelationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribleLayer7InstanceRelationsResponse
   */
  async describleLayer7InstanceRelationsWithOptions(request: $_model.DescribleLayer7InstanceRelationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribleLayer7InstanceRelationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainList)) {
      query["DomainList"] = request.domainList;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribleLayer7InstanceRelations",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribleLayer7InstanceRelationsResponse>(await this.callApi(params, req, runtime), new $_model.DescribleLayer7InstanceRelationsResponse({}));
  }

  /**
   * @param request - DescribleLayer7InstanceRelationsRequest
   * @returns DescribleLayer7InstanceRelationsResponse
   */
  async describleLayer7InstanceRelations(request: $_model.DescribleLayer7InstanceRelationsRequest): Promise<$_model.DescribleLayer7InstanceRelationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describleLayer7InstanceRelationsWithOptions(request, runtime);
  }

  /**
   * @param request - DisableLayer7CCRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableLayer7CCResponse
   */
  async disableLayer7CCWithOptions(request: $_model.DisableLayer7CCRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableLayer7CCResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableLayer7CC",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableLayer7CCResponse>(await this.callApi(params, req, runtime), new $_model.DisableLayer7CCResponse({}));
  }

  /**
   * @param request - DisableLayer7CCRequest
   * @returns DisableLayer7CCResponse
   */
  async disableLayer7CC(request: $_model.DisableLayer7CCRequest): Promise<$_model.DisableLayer7CCResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableLayer7CCWithOptions(request, runtime);
  }

  /**
   * @param request - DisableLayer7CCRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableLayer7CCRuleResponse
   */
  async disableLayer7CCRuleWithOptions(request: $_model.DisableLayer7CCRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableLayer7CCRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableLayer7CCRule",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableLayer7CCRuleResponse>(await this.callApi(params, req, runtime), new $_model.DisableLayer7CCRuleResponse({}));
  }

  /**
   * @param request - DisableLayer7CCRuleRequest
   * @returns DisableLayer7CCRuleResponse
   */
  async disableLayer7CCRule(request: $_model.DisableLayer7CCRuleRequest): Promise<$_model.DisableLayer7CCRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableLayer7CCRuleWithOptions(request, runtime);
  }

  /**
   * @param request - EmptySlsLogstoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EmptySlsLogstoreResponse
   */
  async emptySlsLogstoreWithOptions(request: $_model.EmptySlsLogstoreRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EmptySlsLogstoreResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EmptySlsLogstore",
      version: "2017-12-28",
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
   * @param request - EmptySlsLogstoreRequest
   * @returns EmptySlsLogstoreResponse
   */
  async emptySlsLogstore(request: $_model.EmptySlsLogstoreRequest): Promise<$_model.EmptySlsLogstoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.emptySlsLogstoreWithOptions(request, runtime);
  }

  /**
   * @param request - EnableLayer7CCRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableLayer7CCResponse
   */
  async enableLayer7CCWithOptions(request: $_model.EnableLayer7CCRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableLayer7CCResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableLayer7CC",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableLayer7CCResponse>(await this.callApi(params, req, runtime), new $_model.EnableLayer7CCResponse({}));
  }

  /**
   * @param request - EnableLayer7CCRequest
   * @returns EnableLayer7CCResponse
   */
  async enableLayer7CC(request: $_model.EnableLayer7CCRequest): Promise<$_model.EnableLayer7CCResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableLayer7CCWithOptions(request, runtime);
  }

  /**
   * @param request - EnableLayer7CCRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableLayer7CCRuleResponse
   */
  async enableLayer7CCRuleWithOptions(request: $_model.EnableLayer7CCRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableLayer7CCRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableLayer7CCRule",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableLayer7CCRuleResponse>(await this.callApi(params, req, runtime), new $_model.EnableLayer7CCRuleResponse({}));
  }

  /**
   * @param request - EnableLayer7CCRuleRequest
   * @returns EnableLayer7CCRuleResponse
   */
  async enableLayer7CCRule(request: $_model.EnableLayer7CCRuleRequest): Promise<$_model.EnableLayer7CCRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableLayer7CCRuleWithOptions(request, runtime);
  }

  /**
   * @param request - ListAsyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAsyncTaskResponse
   */
  async listAsyncTaskWithOptions(request: $_model.ListAsyncTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAsyncTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAsyncTask",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAsyncTaskResponse>(await this.callApi(params, req, runtime), new $_model.ListAsyncTaskResponse({}));
  }

  /**
   * @param request - ListAsyncTaskRequest
   * @returns ListAsyncTaskResponse
   */
  async listAsyncTask(request: $_model.ListAsyncTaskRequest): Promise<$_model.ListAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAsyncTaskWithOptions(request, runtime);
  }

  /**
   * @param request - ListLayer7CustomPortsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLayer7CustomPortsResponse
   */
  async listLayer7CustomPortsWithOptions(request: $_model.ListLayer7CustomPortsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLayer7CustomPortsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLayer7CustomPorts",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLayer7CustomPortsResponse>(await this.callApi(params, req, runtime), new $_model.ListLayer7CustomPortsResponse({}));
  }

  /**
   * @param request - ListLayer7CustomPortsRequest
   * @returns ListLayer7CustomPortsResponse
   */
  async listLayer7CustomPorts(request: $_model.ListLayer7CustomPortsRequest): Promise<$_model.ListLayer7CustomPortsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLayer7CustomPortsWithOptions(request, runtime);
  }

  /**
   * @param request - ListTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagKeysResponse
   */
  async listTagKeysWithOptions(request: $_model.ListTagKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
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
      action: "ListTagKeys",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListTagKeysResponse({}));
  }

  /**
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: $_model.ListTagKeysRequest): Promise<$_model.ListTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
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
      version: "2017-12-28",
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
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * @param request - ListValueAddedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListValueAddedResponse
   */
  async listValueAddedWithOptions(request: $_model.ListValueAddedRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListValueAddedResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListValueAdded",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListValueAddedResponse>(await this.callApi(params, req, runtime), new $_model.ListValueAddedResponse({}));
  }

  /**
   * @param request - ListValueAddedRequest
   * @returns ListValueAddedResponse
   */
  async listValueAdded(request: $_model.ListValueAddedRequest): Promise<$_model.ListValueAddedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listValueAddedWithOptions(request, runtime);
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

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyElasticBandWidth",
      version: "2017-12-28",
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
   * @param request - ModifyFullLogTtlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFullLogTtlResponse
   */
  async modifyFullLogTtlWithOptions(request: $_model.ModifyFullLogTtlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyFullLogTtlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyFullLogTtl",
      version: "2017-12-28",
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

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceRemark",
      version: "2017-12-28",
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
   * @param request - ModifyInstanceRemarkRequest
   * @returns ModifyInstanceRemarkResponse
   */
  async modifyInstanceRemark(request: $_model.ModifyInstanceRemarkRequest): Promise<$_model.ModifyInstanceRemarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceRemarkWithOptions(request, runtime);
  }

  /**
   * @param request - OpenDomainSlsConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenDomainSlsConfigResponse
   */
  async openDomainSlsConfigWithOptions(request: $_model.OpenDomainSlsConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenDomainSlsConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenDomainSlsConfig",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenDomainSlsConfigResponse>(await this.callApi(params, req, runtime), new $_model.OpenDomainSlsConfigResponse({}));
  }

  /**
   * @param request - OpenDomainSlsConfigRequest
   * @returns OpenDomainSlsConfigResponse
   */
  async openDomainSlsConfig(request: $_model.OpenDomainSlsConfigRequest): Promise<$_model.OpenDomainSlsConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openDomainSlsConfigWithOptions(request, runtime);
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

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseInstance",
      version: "2017-12-28",
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
   * @param request - ReleaseValueAddedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseValueAddedResponse
   */
  async releaseValueAddedWithOptions(request: $_model.ReleaseValueAddedRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseValueAddedResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseValueAdded",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseValueAddedResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseValueAddedResponse({}));
  }

  /**
   * @param request - ReleaseValueAddedRequest
   * @returns ReleaseValueAddedResponse
   */
  async releaseValueAdded(request: $_model.ReleaseValueAddedRequest): Promise<$_model.ReleaseValueAddedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseValueAddedWithOptions(request, runtime);
  }

  /**
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
      version: "2017-12-28",
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
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
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
      version: "2017-12-28",
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
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
