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
      'ap-northeast-2-pop': "arms.aliyuncs.com",
      'cn-beijing-finance-1': "arms.aliyuncs.com",
      'cn-beijing-finance-pop': "arms.aliyuncs.com",
      'cn-beijing-gov-1': "arms.aliyuncs.com",
      'cn-beijing-nu16-b01': "arms.aliyuncs.com",
      'cn-edge-1': "arms.aliyuncs.com",
      'cn-fujian': "arms.aliyuncs.com",
      'cn-haidian-cm12-c01': "arms.aliyuncs.com",
      'cn-hangzhou-bj-b01': "arms.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "arms.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "arms.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "arms.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "arms.aliyuncs.com",
      'cn-hangzhou-test-306': "arms.aliyuncs.com",
      'cn-hongkong-finance-pop': "arms.aliyuncs.com",
      'cn-huhehaote-nebula-1': "arms.aliyuncs.com",
      'cn-qingdao-nebula': "arms.aliyuncs.com",
      'cn-shanghai-et15-b01': "arms.aliyuncs.com",
      'cn-shanghai-et2-b01': "arms.aliyuncs.com",
      'cn-shanghai-inner': "arms.aliyuncs.com",
      'cn-shanghai-internal-test-1': "arms.aliyuncs.com",
      'cn-shenzhen-inner': "arms.aliyuncs.com",
      'cn-shenzhen-st4-d01': "arms.aliyuncs.com",
      'cn-shenzhen-su18-b01': "arms.aliyuncs.com",
      'cn-wuhan': "arms.aliyuncs.com",
      'cn-yushanfang': "arms.aliyuncs.com",
      'cn-zhangbei': "arms.aliyuncs.com",
      'cn-zhangbei-na61-b01': "arms.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "arms.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "arms.aliyuncs.com",
      'eu-west-1-oxs': "arms.aliyuncs.com",
      'me-east-1': "arms.aliyuncs.com",
      'rus-west-1-pop': "arms.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("arms", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - AddGrafanaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddGrafanaResponse
   */
  async addGrafanaWithOptions(request: $_model.AddGrafanaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddGrafanaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.integration)) {
      query["Integration"] = request.integration;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddGrafana",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddGrafanaResponse>(await this.callApi(params, req, runtime), new $_model.AddGrafanaResponse({}));
  }

  /**
   * @param request - AddGrafanaRequest
   * @returns AddGrafanaResponse
   */
  async addGrafana(request: $_model.AddGrafanaRequest): Promise<$_model.AddGrafanaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addGrafanaWithOptions(request, runtime);
  }

  /**
   * @param request - AddIntegrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddIntegrationResponse
   */
  async addIntegrationWithOptions(request: $_model.AddIntegrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddIntegrationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.integration)) {
      query["Integration"] = request.integration;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddIntegration",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddIntegrationResponse>(await this.callApi(params, req, runtime), new $_model.AddIntegrationResponse({}));
  }

  /**
   * @param request - AddIntegrationRequest
   * @returns AddIntegrationResponse
   */
  async addIntegration(request: $_model.AddIntegrationRequest): Promise<$_model.AddIntegrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addIntegrationWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - ApplyScenarioRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyScenarioResponse
   */
  async applyScenarioWithOptions(tmpReq: $_model.ApplyScenarioRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyScenarioResponse> {
    tmpReq.validate();
    let request = new $_model.ApplyScenarioShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.config)) {
      request.configShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.config, "Config", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.configShrink)) {
      query["Config"] = request.configShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scenario)) {
      query["Scenario"] = request.scenario;
    }

    if (!$dara.isNull(request.sign)) {
      query["Sign"] = request.sign;
    }

    if (!$dara.isNull(request.snDump)) {
      query["SnDump"] = request.snDump;
    }

    if (!$dara.isNull(request.snForce)) {
      query["SnForce"] = request.snForce;
    }

    if (!$dara.isNull(request.snStat)) {
      query["SnStat"] = request.snStat;
    }

    if (!$dara.isNull(request.snTransfer)) {
      query["SnTransfer"] = request.snTransfer;
    }

    if (!$dara.isNull(request.updateOption)) {
      query["UpdateOption"] = request.updateOption;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyScenario",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyScenarioResponse>(await this.callApi(params, req, runtime), new $_model.ApplyScenarioResponse({}));
  }

  /**
   * @param request - ApplyScenarioRequest
   * @returns ApplyScenarioResponse
   */
  async applyScenario(request: $_model.ApplyScenarioRequest): Promise<$_model.ApplyScenarioResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyScenarioWithOptions(request, runtime);
  }

  /**
   * @param request - CheckDataConsistencyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDataConsistencyResponse
   */
  async checkDataConsistencyWithOptions(request: $_model.CheckDataConsistencyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckDataConsistencyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.currentTimestamp)) {
      query["CurrentTimestamp"] = request.currentTimestamp;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.proxyUserId)) {
      query["ProxyUserId"] = request.proxyUserId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckDataConsistency",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckDataConsistencyResponse>(await this.callApi(params, req, runtime), new $_model.CheckDataConsistencyResponse({}));
  }

  /**
   * @param request - CheckDataConsistencyRequest
   * @returns CheckDataConsistencyResponse
   */
  async checkDataConsistency(request: $_model.CheckDataConsistencyRequest): Promise<$_model.CheckDataConsistencyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkDataConsistencyWithOptions(request, runtime);
  }

  /**
   * @param request - CheckServiceLinkedRoleForDeletingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckServiceLinkedRoleForDeletingResponse
   */
  async checkServiceLinkedRoleForDeletingWithOptions(request: $_model.CheckServiceLinkedRoleForDeletingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckServiceLinkedRoleForDeletingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deletionTaskId)) {
      query["DeletionTaskId"] = request.deletionTaskId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleArn)) {
      query["RoleArn"] = request.roleArn;
    }

    if (!$dara.isNull(request.SPIRegionId)) {
      query["SPIRegionId"] = request.SPIRegionId;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckServiceLinkedRoleForDeleting",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckServiceLinkedRoleForDeletingResponse>(await this.callApi(params, req, runtime), new $_model.CheckServiceLinkedRoleForDeletingResponse({}));
  }

  /**
   * @param request - CheckServiceLinkedRoleForDeletingRequest
   * @returns CheckServiceLinkedRoleForDeletingResponse
   */
  async checkServiceLinkedRoleForDeleting(request: $_model.CheckServiceLinkedRoleForDeletingRequest): Promise<$_model.CheckServiceLinkedRoleForDeletingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkServiceLinkedRoleForDeletingWithOptions(request, runtime);
  }

  /**
   * @param request - CheckServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckServiceStatusResponse
   */
  async checkServiceStatusWithOptions(request: $_model.CheckServiceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckServiceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.svcCode)) {
      query["SvcCode"] = request.svcCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckServiceStatus",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckServiceStatusResponse>(await this.callApi(params, req, runtime), new $_model.CheckServiceStatusResponse({}));
  }

  /**
   * @param request - CheckServiceStatusRequest
   * @returns CheckServiceStatusResponse
   */
  async checkServiceStatus(request: $_model.CheckServiceStatusRequest): Promise<$_model.CheckServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkServiceStatusWithOptions(request, runtime);
  }

  /**
   * @param request - ConfigAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigAppResponse
   */
  async configAppWithOptions(request: $_model.ConfigAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigApp",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigAppResponse>(await this.callApi(params, req, runtime), new $_model.ConfigAppResponse({}));
  }

  /**
   * @param request - ConfigAppRequest
   * @returns ConfigAppResponse
   */
  async configApp(request: $_model.ConfigAppRequest): Promise<$_model.ConfigAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configAppWithOptions(request, runtime);
  }

  /**
   * @param request - CreateAlertContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAlertContactResponse
   */
  async createAlertContactWithOptions(request: $_model.CreateAlertContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAlertContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.dingRobotWebhookUrl)) {
      query["DingRobotWebhookUrl"] = request.dingRobotWebhookUrl;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.phoneNum)) {
      query["PhoneNum"] = request.phoneNum;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.systemNoc)) {
      query["SystemNoc"] = request.systemNoc;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAlertContact",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAlertContactResponse>(await this.callApi(params, req, runtime), new $_model.CreateAlertContactResponse({}));
  }

  /**
   * @param request - CreateAlertContactRequest
   * @returns CreateAlertContactResponse
   */
  async createAlertContact(request: $_model.CreateAlertContactRequest): Promise<$_model.CreateAlertContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAlertContactWithOptions(request, runtime);
  }

  /**
   * @param request - CreateAlertContactGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAlertContactGroupResponse
   */
  async createAlertContactGroupWithOptions(request: $_model.CreateAlertContactGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAlertContactGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactGroupName)) {
      query["ContactGroupName"] = request.contactGroupName;
    }

    if (!$dara.isNull(request.contactIds)) {
      query["ContactIds"] = request.contactIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAlertContactGroup",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAlertContactGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateAlertContactGroupResponse({}));
  }

  /**
   * @param request - CreateAlertContactGroupRequest
   * @returns CreateAlertContactGroupResponse
   */
  async createAlertContactGroup(request: $_model.CreateAlertContactGroupRequest): Promise<$_model.CreateAlertContactGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAlertContactGroupWithOptions(request, runtime);
  }

  /**
   * @param request - CreateAlertTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAlertTemplateResponse
   */
  async createAlertTemplateWithOptions(request: $_model.CreateAlertTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAlertTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.annotations)) {
      query["Annotations"] = request.annotations;
    }

    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.matchExpressions)) {
      query["MatchExpressions"] = request.matchExpressions;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.templateProvider)) {
      query["TemplateProvider"] = request.templateProvider;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAlertTemplate",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAlertTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateAlertTemplateResponse({}));
  }

  /**
   * @param request - CreateAlertTemplateRequest
   * @returns CreateAlertTemplateResponse
   */
  async createAlertTemplate(request: $_model.CreateAlertTemplateRequest): Promise<$_model.CreateAlertTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAlertTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - CreateDispatchRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDispatchRuleResponse
   */
  async createDispatchRuleWithOptions(request: $_model.CreateDispatchRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDispatchRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dispatchRule)) {
      query["DispatchRule"] = request.dispatchRule;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDispatchRule",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDispatchRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateDispatchRuleResponse({}));
  }

  /**
   * @param request - CreateDispatchRuleRequest
   * @returns CreateDispatchRuleResponse
   */
  async createDispatchRule(request: $_model.CreateDispatchRuleRequest): Promise<$_model.CreateDispatchRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDispatchRuleWithOptions(request, runtime);
  }

  /**
   * @param request - CreatePrometheusAlertRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrometheusAlertRuleResponse
   */
  async createPrometheusAlertRuleWithOptions(request: $_model.CreatePrometheusAlertRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePrometheusAlertRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertName)) {
      query["AlertName"] = request.alertName;
    }

    if (!$dara.isNull(request.annotations)) {
      query["Annotations"] = request.annotations;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dispatchRuleId)) {
      query["DispatchRuleId"] = request.dispatchRuleId;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.expression)) {
      query["Expression"] = request.expression;
    }

    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    if (!$dara.isNull(request.notifyType)) {
      query["NotifyType"] = request.notifyType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePrometheusAlertRule",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePrometheusAlertRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreatePrometheusAlertRuleResponse({}));
  }

  /**
   * @param request - CreatePrometheusAlertRuleRequest
   * @returns CreatePrometheusAlertRuleResponse
   */
  async createPrometheusAlertRule(request: $_model.CreatePrometheusAlertRuleRequest): Promise<$_model.CreatePrometheusAlertRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPrometheusAlertRuleWithOptions(request, runtime);
  }

  /**
   * @param request - CreateRetcodeAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRetcodeAppResponse
   */
  async createRetcodeAppWithOptions(request: $_model.CreateRetcodeAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRetcodeAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.retcodeAppName)) {
      query["RetcodeAppName"] = request.retcodeAppName;
    }

    if (!$dara.isNull(request.retcodeAppType)) {
      query["RetcodeAppType"] = request.retcodeAppType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRetcodeApp",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRetcodeAppResponse>(await this.callApi(params, req, runtime), new $_model.CreateRetcodeAppResponse({}));
  }

  /**
   * @param request - CreateRetcodeAppRequest
   * @returns CreateRetcodeAppResponse
   */
  async createRetcodeApp(request: $_model.CreateRetcodeAppRequest): Promise<$_model.CreateRetcodeAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRetcodeAppWithOptions(request, runtime);
  }

  /**
   * @param request - CreateWehookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWehookResponse
   */
  async createWehookWithOptions(request: $_model.CreateWehookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWehookResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.body)) {
      query["Body"] = request.body;
    }

    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.httpHeaders)) {
      query["HttpHeaders"] = request.httpHeaders;
    }

    if (!$dara.isNull(request.httpParams)) {
      query["HttpParams"] = request.httpParams;
    }

    if (!$dara.isNull(request.method)) {
      query["Method"] = request.method;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWehook",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWehookResponse>(await this.callApi(params, req, runtime), new $_model.CreateWehookResponse({}));
  }

  /**
   * @param request - CreateWehookRequest
   * @returns CreateWehookResponse
   */
  async createWehook(request: $_model.CreateWehookRequest): Promise<$_model.CreateWehookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWehookWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteAlertContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAlertContactResponse
   */
  async deleteAlertContactWithOptions(request: $_model.DeleteAlertContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAlertContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAlertContact",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAlertContactResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAlertContactResponse({}));
  }

  /**
   * @param request - DeleteAlertContactRequest
   * @returns DeleteAlertContactResponse
   */
  async deleteAlertContact(request: $_model.DeleteAlertContactRequest): Promise<$_model.DeleteAlertContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAlertContactWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteAlertContactGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAlertContactGroupResponse
   */
  async deleteAlertContactGroupWithOptions(request: $_model.DeleteAlertContactGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAlertContactGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactGroupId)) {
      query["ContactGroupId"] = request.contactGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAlertContactGroup",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAlertContactGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAlertContactGroupResponse({}));
  }

  /**
   * @param request - DeleteAlertContactGroupRequest
   * @returns DeleteAlertContactGroupResponse
   */
  async deleteAlertContactGroup(request: $_model.DeleteAlertContactGroupRequest): Promise<$_model.DeleteAlertContactGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAlertContactGroupWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteAlertRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAlertRulesResponse
   */
  async deleteAlertRulesWithOptions(request: $_model.DeleteAlertRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAlertRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertIds)) {
      query["AlertIds"] = request.alertIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAlertRules",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAlertRulesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAlertRulesResponse({}));
  }

  /**
   * @param request - DeleteAlertRulesRequest
   * @returns DeleteAlertRulesResponse
   */
  async deleteAlertRules(request: $_model.DeleteAlertRulesRequest): Promise<$_model.DeleteAlertRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAlertRulesWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteAlertTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAlertTemplateResponse
   */
  async deleteAlertTemplateWithOptions(request: $_model.DeleteAlertTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAlertTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAlertTemplate",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAlertTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAlertTemplateResponse({}));
  }

  /**
   * @param request - DeleteAlertTemplateRequest
   * @returns DeleteAlertTemplateResponse
   */
  async deleteAlertTemplate(request: $_model.DeleteAlertTemplateRequest): Promise<$_model.DeleteAlertTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAlertTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteDispatchRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDispatchRuleResponse
   */
  async deleteDispatchRuleWithOptions(request: $_model.DeleteDispatchRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDispatchRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDispatchRule",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDispatchRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDispatchRuleResponse({}));
  }

  /**
   * @param request - DeleteDispatchRuleRequest
   * @returns DeleteDispatchRuleResponse
   */
  async deleteDispatchRule(request: $_model.DeleteDispatchRuleRequest): Promise<$_model.DeleteDispatchRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDispatchRuleWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteGrafanaResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGrafanaResourceResponse
   */
  async deleteGrafanaResourceWithOptions(request: $_model.DeleteGrafanaResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGrafanaResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterName)) {
      body["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGrafanaResource",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGrafanaResourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGrafanaResourceResponse({}));
  }

  /**
   * @param request - DeleteGrafanaResourceRequest
   * @returns DeleteGrafanaResourceResponse
   */
  async deleteGrafanaResource(request: $_model.DeleteGrafanaResourceRequest): Promise<$_model.DeleteGrafanaResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGrafanaResourceWithOptions(request, runtime);
  }

  /**
   * @param request - DeletePrometheusAlertRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePrometheusAlertRuleResponse
   */
  async deletePrometheusAlertRuleWithOptions(request: $_model.DeletePrometheusAlertRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePrometheusAlertRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePrometheusAlertRule",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePrometheusAlertRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeletePrometheusAlertRuleResponse({}));
  }

  /**
   * @param request - DeletePrometheusAlertRuleRequest
   * @returns DeletePrometheusAlertRuleResponse
   */
  async deletePrometheusAlertRule(request: $_model.DeletePrometheusAlertRuleRequest): Promise<$_model.DeletePrometheusAlertRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePrometheusAlertRuleWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteRetcodeAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRetcodeAppResponse
   */
  async deleteRetcodeAppWithOptions(request: $_model.DeleteRetcodeAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRetcodeAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRetcodeApp",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRetcodeAppResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRetcodeAppResponse({}));
  }

  /**
   * @param request - DeleteRetcodeAppRequest
   * @returns DeleteRetcodeAppResponse
   */
  async deleteRetcodeApp(request: $_model.DeleteRetcodeAppRequest): Promise<$_model.DeleteRetcodeAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRetcodeAppWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteScenarioRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScenarioResponse
   */
  async deleteScenarioWithOptions(request: $_model.DeleteScenarioRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteScenarioResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScenario",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteScenarioResponse>(await this.callApi(params, req, runtime), new $_model.DeleteScenarioResponse({}));
  }

  /**
   * @param request - DeleteScenarioRequest
   * @returns DeleteScenarioResponse
   */
  async deleteScenario(request: $_model.DeleteScenarioRequest): Promise<$_model.DeleteScenarioResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteScenarioWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteTraceAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTraceAppResponse
   */
  async deleteTraceAppWithOptions(request: $_model.DeleteTraceAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTraceAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTraceApp",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTraceAppResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTraceAppResponse({}));
  }

  /**
   * @param request - DeleteTraceAppRequest
   * @returns DeleteTraceAppResponse
   */
  async deleteTraceApp(request: $_model.DeleteTraceAppRequest): Promise<$_model.DeleteTraceAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTraceAppWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDispatchRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDispatchRuleResponse
   */
  async describeDispatchRuleWithOptions(request: $_model.DescribeDispatchRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDispatchRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDispatchRule",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDispatchRuleResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDispatchRuleResponse({}));
  }

  /**
   * @param request - DescribeDispatchRuleRequest
   * @returns DescribeDispatchRuleResponse
   */
  async describeDispatchRule(request: $_model.DescribeDispatchRuleRequest): Promise<$_model.DescribeDispatchRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDispatchRuleWithOptions(request, runtime);
  }

  /**
   * @param request - DescribePrometheusAlertRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePrometheusAlertRuleResponse
   */
  async describePrometheusAlertRuleWithOptions(request: $_model.DescribePrometheusAlertRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePrometheusAlertRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePrometheusAlertRule",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePrometheusAlertRuleResponse>(await this.callApi(params, req, runtime), new $_model.DescribePrometheusAlertRuleResponse({}));
  }

  /**
   * @param request - DescribePrometheusAlertRuleRequest
   * @returns DescribePrometheusAlertRuleResponse
   */
  async describePrometheusAlertRule(request: $_model.DescribePrometheusAlertRuleRequest): Promise<$_model.DescribePrometheusAlertRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePrometheusAlertRuleWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeTraceLicenseKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTraceLicenseKeyResponse
   */
  async describeTraceLicenseKeyWithOptions(request: $_model.DescribeTraceLicenseKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTraceLicenseKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTraceLicenseKey",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTraceLicenseKeyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTraceLicenseKeyResponse({}));
  }

  /**
   * @param request - DescribeTraceLicenseKeyRequest
   * @returns DescribeTraceLicenseKeyResponse
   */
  async describeTraceLicenseKey(request: $_model.DescribeTraceLicenseKeyRequest): Promise<$_model.DescribeTraceLicenseKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTraceLicenseKeyWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeTraceLocationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTraceLocationResponse
   */
  async describeTraceLocationWithOptions(request: $_model.DescribeTraceLocationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTraceLocationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTraceLocation",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTraceLocationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTraceLocationResponse({}));
  }

  /**
   * @param request - DescribeTraceLocationRequest
   * @returns DescribeTraceLocationResponse
   */
  async describeTraceLocation(request: $_model.DescribeTraceLocationRequest): Promise<$_model.DescribeTraceLocationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTraceLocationWithOptions(request, runtime);
  }

  /**
   * @param request - DisableAlertTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableAlertTemplateResponse
   */
  async disableAlertTemplateWithOptions(request: $_model.DisableAlertTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableAlertTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableAlertTemplate",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableAlertTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DisableAlertTemplateResponse({}));
  }

  /**
   * @param request - DisableAlertTemplateRequest
   * @returns DisableAlertTemplateResponse
   */
  async disableAlertTemplate(request: $_model.DisableAlertTemplateRequest): Promise<$_model.DisableAlertTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableAlertTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - EnableAlertTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableAlertTemplateResponse
   */
  async enableAlertTemplateWithOptions(request: $_model.EnableAlertTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableAlertTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableAlertTemplate",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableAlertTemplateResponse>(await this.callApi(params, req, runtime), new $_model.EnableAlertTemplateResponse({}));
  }

  /**
   * @param request - EnableAlertTemplateRequest
   * @returns EnableAlertTemplateResponse
   */
  async enableAlertTemplate(request: $_model.EnableAlertTemplateRequest): Promise<$_model.EnableAlertTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableAlertTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - ExportPrometheusRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportPrometheusRulesResponse
   */
  async exportPrometheusRulesWithOptions(request: $_model.ExportPrometheusRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportPrometheusRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nameSpace)) {
      query["NameSpace"] = request.nameSpace;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportPrometheusRules",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportPrometheusRulesResponse>(await this.callApi(params, req, runtime), new $_model.ExportPrometheusRulesResponse({}));
  }

  /**
   * @param request - ExportPrometheusRulesRequest
   * @returns ExportPrometheusRulesResponse
   */
  async exportPrometheusRules(request: $_model.ExportPrometheusRulesRequest): Promise<$_model.ExportPrometheusRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportPrometheusRulesWithOptions(request, runtime);
  }

  /**
   * @param request - GetAgentDownloadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentDownloadUrlResponse
   */
  async getAgentDownloadUrlWithOptions(request: $_model.GetAgentDownloadUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentDownloadUrlResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentDownloadUrl",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentDownloadUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentDownloadUrlResponse({}));
  }

  /**
   * @param request - GetAgentDownloadUrlRequest
   * @returns GetAgentDownloadUrlResponse
   */
  async getAgentDownloadUrl(request: $_model.GetAgentDownloadUrlRequest): Promise<$_model.GetAgentDownloadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentDownloadUrlWithOptions(request, runtime);
  }

  /**
   * @param request - GetAppApiByPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppApiByPageResponse
   */
  async getAppApiByPageWithOptions(request: $_model.GetAppApiByPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppApiByPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.intervalMills)) {
      query["IntervalMills"] = request.intervalMills;
    }

    if (!$dara.isNull(request.PId)) {
      query["PId"] = request.PId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
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
      action: "GetAppApiByPage",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppApiByPageResponse>(await this.callApi(params, req, runtime), new $_model.GetAppApiByPageResponse({}));
  }

  /**
   * @param request - GetAppApiByPageRequest
   * @returns GetAppApiByPageResponse
   */
  async getAppApiByPage(request: $_model.GetAppApiByPageRequest): Promise<$_model.GetAppApiByPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppApiByPageWithOptions(request, runtime);
  }

  /**
   * @param request - GetConsistencySnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConsistencySnapshotResponse
   */
  async getConsistencySnapshotWithOptions(request: $_model.GetConsistencySnapshotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetConsistencySnapshotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.currentTimestamp)) {
      query["CurrentTimestamp"] = request.currentTimestamp;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.proxyUserId)) {
      query["ProxyUserId"] = request.proxyUserId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConsistencySnapshot",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConsistencySnapshotResponse>(await this.callApi(params, req, runtime), new $_model.GetConsistencySnapshotResponse({}));
  }

  /**
   * @param request - GetConsistencySnapshotRequest
   * @returns GetConsistencySnapshotResponse
   */
  async getConsistencySnapshot(request: $_model.GetConsistencySnapshotRequest): Promise<$_model.GetConsistencySnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConsistencySnapshotWithOptions(request, runtime);
  }

  /**
   * @param request - GetIntegrationTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIntegrationTokenResponse
   */
  async getIntegrationTokenWithOptions(request: $_model.GetIntegrationTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIntegrationTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIntegrationToken",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIntegrationTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetIntegrationTokenResponse({}));
  }

  /**
   * @param request - GetIntegrationTokenRequest
   * @returns GetIntegrationTokenResponse
   */
  async getIntegrationToken(request: $_model.GetIntegrationTokenRequest): Promise<$_model.GetIntegrationTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIntegrationTokenWithOptions(request, runtime);
  }

  /**
   * @param request - GetMultipleTraceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMultipleTraceResponse
   */
  async getMultipleTraceWithOptions(request: $_model.GetMultipleTraceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMultipleTraceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.traceIDs)) {
      query["TraceIDs"] = request.traceIDs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMultipleTrace",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMultipleTraceResponse>(await this.callApi(params, req, runtime), new $_model.GetMultipleTraceResponse({}));
  }

  /**
   * @param request - GetMultipleTraceRequest
   * @returns GetMultipleTraceResponse
   */
  async getMultipleTrace(request: $_model.GetMultipleTraceRequest): Promise<$_model.GetMultipleTraceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMultipleTraceWithOptions(request, runtime);
  }

  /**
   * @param request - GetPrometheusApiTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPrometheusApiTokenResponse
   */
  async getPrometheusApiTokenWithOptions(request: $_model.GetPrometheusApiTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPrometheusApiTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPrometheusApiToken",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPrometheusApiTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetPrometheusApiTokenResponse({}));
  }

  /**
   * @param request - GetPrometheusApiTokenRequest
   * @returns GetPrometheusApiTokenResponse
   */
  async getPrometheusApiToken(request: $_model.GetPrometheusApiTokenRequest): Promise<$_model.GetPrometheusApiTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPrometheusApiTokenWithOptions(request, runtime);
  }

  /**
   * @param request - GetRetcodeShareUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRetcodeShareUrlResponse
   */
  async getRetcodeShareUrlWithOptions(request: $_model.GetRetcodeShareUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRetcodeShareUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRetcodeShareUrl",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRetcodeShareUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetRetcodeShareUrlResponse({}));
  }

  /**
   * @param request - GetRetcodeShareUrlRequest
   * @returns GetRetcodeShareUrlResponse
   */
  async getRetcodeShareUrl(request: $_model.GetRetcodeShareUrlRequest): Promise<$_model.GetRetcodeShareUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRetcodeShareUrlWithOptions(request, runtime);
  }

  /**
   * @param request - GetStackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStackResponse
   */
  async getStackWithOptions(request: $_model.GetStackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.rpcID)) {
      query["RpcID"] = request.rpcID;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.traceID)) {
      query["TraceID"] = request.traceID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStack",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStackResponse>(await this.callApi(params, req, runtime), new $_model.GetStackResponse({}));
  }

  /**
   * @param request - GetStackRequest
   * @returns GetStackResponse
   */
  async getStack(request: $_model.GetStackRequest): Promise<$_model.GetStackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStackWithOptions(request, runtime);
  }

  /**
   * @param request - GetTraceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTraceResponse
   */
  async getTraceWithOptions(request: $_model.GetTraceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTraceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.traceID)) {
      query["TraceID"] = request.traceID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTrace",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTraceResponse>(await this.callApi(params, req, runtime), new $_model.GetTraceResponse({}));
  }

  /**
   * @param request - GetTraceRequest
   * @returns GetTraceResponse
   */
  async getTrace(request: $_model.GetTraceRequest): Promise<$_model.GetTraceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTraceWithOptions(request, runtime);
  }

  /**
   * @param request - GetTraceAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTraceAppResponse
   */
  async getTraceAppWithOptions(request: $_model.GetTraceAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTraceAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTraceApp",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTraceAppResponse>(await this.callApi(params, req, runtime), new $_model.GetTraceAppResponse({}));
  }

  /**
   * @param request - GetTraceAppRequest
   * @returns GetTraceAppResponse
   */
  async getTraceApp(request: $_model.GetTraceAppRequest): Promise<$_model.GetTraceAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTraceAppWithOptions(request, runtime);
  }

  /**
   * @param request - ImportAppAlertRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportAppAlertRulesResponse
   */
  async importAppAlertRulesWithOptions(request: $_model.ImportAppAlertRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportAppAlertRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactGroupIds)) {
      query["ContactGroupIds"] = request.contactGroupIds;
    }

    if (!$dara.isNull(request.isAutoStart)) {
      query["IsAutoStart"] = request.isAutoStart;
    }

    if (!$dara.isNull(request.pids)) {
      query["Pids"] = request.pids;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templageAlertConfig)) {
      query["TemplageAlertConfig"] = request.templageAlertConfig;
    }

    if (!$dara.isNull(request.templateAlertId)) {
      query["TemplateAlertId"] = request.templateAlertId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportAppAlertRules",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportAppAlertRulesResponse>(await this.callApi(params, req, runtime), new $_model.ImportAppAlertRulesResponse({}));
  }

  /**
   * @param request - ImportAppAlertRulesRequest
   * @returns ImportAppAlertRulesResponse
   */
  async importAppAlertRules(request: $_model.ImportAppAlertRulesRequest): Promise<$_model.ImportAppAlertRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importAppAlertRulesWithOptions(request, runtime);
  }

  /**
   * @param request - ImportCustomAlertRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportCustomAlertRulesResponse
   */
  async importCustomAlertRulesWithOptions(request: $_model.ImportCustomAlertRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportCustomAlertRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactGroupIds)) {
      query["ContactGroupIds"] = request.contactGroupIds;
    }

    if (!$dara.isNull(request.isAutoStart)) {
      query["IsAutoStart"] = request.isAutoStart;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templageAlertConfig)) {
      query["TemplageAlertConfig"] = request.templageAlertConfig;
    }

    if (!$dara.isNull(request.templateAlertConfig)) {
      query["TemplateAlertConfig"] = request.templateAlertConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportCustomAlertRules",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportCustomAlertRulesResponse>(await this.callApi(params, req, runtime), new $_model.ImportCustomAlertRulesResponse({}));
  }

  /**
   * @param request - ImportCustomAlertRulesRequest
   * @returns ImportCustomAlertRulesResponse
   */
  async importCustomAlertRules(request: $_model.ImportCustomAlertRulesRequest): Promise<$_model.ImportCustomAlertRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importCustomAlertRulesWithOptions(request, runtime);
  }

  /**
   * @param request - ImportPrometheusRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportPrometheusRulesResponse
   */
  async importPrometheusRulesWithOptions(request: $_model.ImportPrometheusRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportPrometheusRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nameSpace)) {
      query["NameSpace"] = request.nameSpace;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportPrometheusRules",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportPrometheusRulesResponse>(await this.callApi(params, req, runtime), new $_model.ImportPrometheusRulesResponse({}));
  }

  /**
   * @param request - ImportPrometheusRulesRequest
   * @returns ImportPrometheusRulesResponse
   */
  async importPrometheusRules(request: $_model.ImportPrometheusRulesRequest): Promise<$_model.ImportPrometheusRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importPrometheusRulesWithOptions(request, runtime);
  }

  /**
   * @param request - ListActivatedAlertsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListActivatedAlertsResponse
   */
  async listActivatedAlertsWithOptions(request: $_model.ListActivatedAlertsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListActivatedAlertsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
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
      action: "ListActivatedAlerts",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListActivatedAlertsResponse>(await this.callApi(params, req, runtime), new $_model.ListActivatedAlertsResponse({}));
  }

  /**
   * @param request - ListActivatedAlertsRequest
   * @returns ListActivatedAlertsResponse
   */
  async listActivatedAlerts(request: $_model.ListActivatedAlertsRequest): Promise<$_model.ListActivatedAlertsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listActivatedAlertsWithOptions(request, runtime);
  }

  /**
   * @param request - ListAlertTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlertTemplatesResponse
   */
  async listAlertTemplatesWithOptions(request: $_model.ListAlertTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAlertTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertProvider)) {
      query["AlertProvider"] = request.alertProvider;
    }

    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.templateProvider)) {
      query["TemplateProvider"] = request.templateProvider;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAlertTemplates",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAlertTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListAlertTemplatesResponse({}));
  }

  /**
   * @param request - ListAlertTemplatesRequest
   * @returns ListAlertTemplatesResponse
   */
  async listAlertTemplates(request: $_model.ListAlertTemplatesRequest): Promise<$_model.ListAlertTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAlertTemplatesWithOptions(request, runtime);
  }

  /**
   * @param request - ListClusterFromGrafanaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterFromGrafanaResponse
   */
  async listClusterFromGrafanaWithOptions(request: $_model.ListClusterFromGrafanaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClusterFromGrafanaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusterFromGrafana",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClusterFromGrafanaResponse>(await this.callApi(params, req, runtime), new $_model.ListClusterFromGrafanaResponse({}));
  }

  /**
   * @param request - ListClusterFromGrafanaRequest
   * @returns ListClusterFromGrafanaResponse
   */
  async listClusterFromGrafana(request: $_model.ListClusterFromGrafanaRequest): Promise<$_model.ListClusterFromGrafanaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClusterFromGrafanaWithOptions(request, runtime);
  }

  /**
   * @param request - ListDashboardsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDashboardsResponse
   */
  async listDashboardsWithOptions(request: $_model.ListDashboardsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDashboardsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.recreateSwitch)) {
      query["RecreateSwitch"] = request.recreateSwitch;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDashboards",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDashboardsResponse>(await this.callApi(params, req, runtime), new $_model.ListDashboardsResponse({}));
  }

  /**
   * @param request - ListDashboardsRequest
   * @returns ListDashboardsResponse
   */
  async listDashboards(request: $_model.ListDashboardsRequest): Promise<$_model.ListDashboardsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDashboardsWithOptions(request, runtime);
  }

  /**
   * @param request - ListDispatchRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDispatchRuleResponse
   */
  async listDispatchRuleWithOptions(request: $_model.ListDispatchRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDispatchRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.system)) {
      query["System"] = request.system;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDispatchRule",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDispatchRuleResponse>(await this.callApi(params, req, runtime), new $_model.ListDispatchRuleResponse({}));
  }

  /**
   * @param request - ListDispatchRuleRequest
   * @returns ListDispatchRuleResponse
   */
  async listDispatchRule(request: $_model.ListDispatchRuleRequest): Promise<$_model.ListDispatchRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDispatchRuleWithOptions(request, runtime);
  }

  /**
   * @param request - ListPromClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPromClustersResponse
   */
  async listPromClustersWithOptions(request: $_model.ListPromClustersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPromClustersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPromClusters",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPromClustersResponse>(await this.callApi(params, req, runtime), new $_model.ListPromClustersResponse({}));
  }

  /**
   * @param request - ListPromClustersRequest
   * @returns ListPromClustersResponse
   */
  async listPromClusters(request: $_model.ListPromClustersRequest): Promise<$_model.ListPromClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPromClustersWithOptions(request, runtime);
  }

  /**
   * @param request - ListPrometheusAlertRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrometheusAlertRulesResponse
   */
  async listPrometheusAlertRulesWithOptions(request: $_model.ListPrometheusAlertRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrometheusAlertRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.matchExpressions)) {
      query["MatchExpressions"] = request.matchExpressions;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "ListPrometheusAlertRules",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrometheusAlertRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListPrometheusAlertRulesResponse({}));
  }

  /**
   * @param request - ListPrometheusAlertRulesRequest
   * @returns ListPrometheusAlertRulesResponse
   */
  async listPrometheusAlertRules(request: $_model.ListPrometheusAlertRulesRequest): Promise<$_model.ListPrometheusAlertRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPrometheusAlertRulesWithOptions(request, runtime);
  }

  /**
   * @param request - ListPrometheusAlertTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrometheusAlertTemplatesResponse
   */
  async listPrometheusAlertTemplatesWithOptions(request: $_model.ListPrometheusAlertTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrometheusAlertTemplatesResponse> {
    request.validate();
    let query = { };
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
      action: "ListPrometheusAlertTemplates",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrometheusAlertTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListPrometheusAlertTemplatesResponse({}));
  }

  /**
   * @param request - ListPrometheusAlertTemplatesRequest
   * @returns ListPrometheusAlertTemplatesResponse
   */
  async listPrometheusAlertTemplates(request: $_model.ListPrometheusAlertTemplatesRequest): Promise<$_model.ListPrometheusAlertTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPrometheusAlertTemplatesWithOptions(request, runtime);
  }

  /**
   * @param request - ListRetcodeAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRetcodeAppsResponse
   */
  async listRetcodeAppsWithOptions(request: $_model.ListRetcodeAppsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRetcodeAppsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRetcodeApps",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRetcodeAppsResponse>(await this.callApi(params, req, runtime), new $_model.ListRetcodeAppsResponse({}));
  }

  /**
   * @param request - ListRetcodeAppsRequest
   * @returns ListRetcodeAppsResponse
   */
  async listRetcodeApps(request: $_model.ListRetcodeAppsRequest): Promise<$_model.ListRetcodeAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRetcodeAppsWithOptions(request, runtime);
  }

  /**
   * @param request - ListScenarioRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScenarioResponse
   */
  async listScenarioWithOptions(request: $_model.ListScenarioRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListScenarioResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scenario)) {
      query["Scenario"] = request.scenario;
    }

    if (!$dara.isNull(request.sign)) {
      query["Sign"] = request.sign;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScenario",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScenarioResponse>(await this.callApi(params, req, runtime), new $_model.ListScenarioResponse({}));
  }

  /**
   * @param request - ListScenarioRequest
   * @returns ListScenarioResponse
   */
  async listScenario(request: $_model.ListScenarioRequest): Promise<$_model.ListScenarioResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listScenarioWithOptions(request, runtime);
  }

  /**
   * @param request - ListServerlessTopNAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServerlessTopNAppsResponse
   */
  async listServerlessTopNAppsWithOptions(request: $_model.ListServerlessTopNAppsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListServerlessTopNAppsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
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
      action: "ListServerlessTopNApps",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServerlessTopNAppsResponse>(await this.callApi(params, req, runtime), new $_model.ListServerlessTopNAppsResponse({}));
  }

  /**
   * @param request - ListServerlessTopNAppsRequest
   * @returns ListServerlessTopNAppsResponse
   */
  async listServerlessTopNApps(request: $_model.ListServerlessTopNAppsRequest): Promise<$_model.ListServerlessTopNAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServerlessTopNAppsWithOptions(request, runtime);
  }

  /**
   * @param request - ListTraceAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTraceAppsResponse
   */
  async listTraceAppsWithOptions(request: $_model.ListTraceAppsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTraceAppsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTraceApps",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTraceAppsResponse>(await this.callApi(params, req, runtime), new $_model.ListTraceAppsResponse({}));
  }

  /**
   * @param request - ListTraceAppsRequest
   * @returns ListTraceAppsResponse
   */
  async listTraceApps(request: $_model.ListTraceAppsRequest): Promise<$_model.ListTraceAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTraceAppsWithOptions(request, runtime);
  }

  /**
   * @param request - OpenArmsDefaultSLRRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenArmsDefaultSLRResponse
   */
  async openArmsDefaultSLRWithOptions(request: $_model.OpenArmsDefaultSLRRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenArmsDefaultSLRResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenArmsDefaultSLR",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenArmsDefaultSLRResponse>(await this.callApi(params, req, runtime), new $_model.OpenArmsDefaultSLRResponse({}));
  }

  /**
   * @param request - OpenArmsDefaultSLRRequest
   * @returns OpenArmsDefaultSLRResponse
   */
  async openArmsDefaultSLR(request: $_model.OpenArmsDefaultSLRRequest): Promise<$_model.OpenArmsDefaultSLRResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openArmsDefaultSLRWithOptions(request, runtime);
  }

  /**
   * @param request - OpenArmsServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenArmsServiceResponse
   */
  async openArmsServiceWithOptions(request: $_model.OpenArmsServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenArmsServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenArmsService",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenArmsServiceResponse>(await this.callApi(params, req, runtime), new $_model.OpenArmsServiceResponse({}));
  }

  /**
   * @param request - OpenArmsServiceRequest
   * @returns OpenArmsServiceResponse
   */
  async openArmsService(request: $_model.OpenArmsServiceRequest): Promise<$_model.OpenArmsServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openArmsServiceWithOptions(request, runtime);
  }

  /**
   * @param request - OpenVClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenVClusterResponse
   */
  async openVClusterWithOptions(request: $_model.OpenVClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenVClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.length)) {
      query["Length"] = request.length;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.recreateSwitch)) {
      query["RecreateSwitch"] = request.recreateSwitch;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenVCluster",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenVClusterResponse>(await this.callApi(params, req, runtime), new $_model.OpenVClusterResponse({}));
  }

  /**
   * @param request - OpenVClusterRequest
   * @returns OpenVClusterResponse
   */
  async openVCluster(request: $_model.OpenVClusterRequest): Promise<$_model.OpenVClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openVClusterWithOptions(request, runtime);
  }

  /**
   * @param request - OpenXtraceDefaultSLRRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenXtraceDefaultSLRResponse
   */
  async openXtraceDefaultSLRWithOptions(request: $_model.OpenXtraceDefaultSLRRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenXtraceDefaultSLRResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenXtraceDefaultSLR",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenXtraceDefaultSLRResponse>(await this.callApi(params, req, runtime), new $_model.OpenXtraceDefaultSLRResponse({}));
  }

  /**
   * @param request - OpenXtraceDefaultSLRRequest
   * @returns OpenXtraceDefaultSLRResponse
   */
  async openXtraceDefaultSLR(request: $_model.OpenXtraceDefaultSLRRequest): Promise<$_model.OpenXtraceDefaultSLRResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openXtraceDefaultSLRWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDatasetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDatasetResponse
   */
  async queryDatasetWithOptions(request: $_model.QueryDatasetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDatasetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.dateStr)) {
      query["DateStr"] = request.dateStr;
    }

    if (!$dara.isNull(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.hungryMode)) {
      query["HungryMode"] = request.hungryMode;
    }

    if (!$dara.isNull(request.intervalInSec)) {
      query["IntervalInSec"] = request.intervalInSec;
    }

    if (!$dara.isNull(request.isDrillDown)) {
      query["IsDrillDown"] = request.isDrillDown;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.maxTime)) {
      query["MaxTime"] = request.maxTime;
    }

    if (!$dara.isNull(request.measures)) {
      query["Measures"] = request.measures;
    }

    if (!$dara.isNull(request.minTime)) {
      query["MinTime"] = request.minTime;
    }

    if (!$dara.isNull(request.optionalDims)) {
      query["OptionalDims"] = request.optionalDims;
    }

    if (!$dara.isNull(request.orderByKey)) {
      query["OrderByKey"] = request.orderByKey;
    }

    if (!$dara.isNull(request.proxyUserId)) {
      query["ProxyUserId"] = request.proxyUserId;
    }

    if (!$dara.isNull(request.reduceTail)) {
      query["ReduceTail"] = request.reduceTail;
    }

    if (!$dara.isNull(request.requiredDims)) {
      query["RequiredDims"] = request.requiredDims;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDataset",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDatasetResponse>(await this.callApi(params, req, runtime), new $_model.QueryDatasetResponse({}));
  }

  /**
   * @param request - QueryDatasetRequest
   * @returns QueryDatasetResponse
   */
  async queryDataset(request: $_model.QueryDatasetRequest): Promise<$_model.QueryDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDatasetWithOptions(request, runtime);
  }

  /**
   * @param request - QueryMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMetricResponse
   */
  async queryMetricWithOptions(request: $_model.QueryMetricRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMetricResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consistencyDataKey)) {
      query["ConsistencyDataKey"] = request.consistencyDataKey;
    }

    if (!$dara.isNull(request.consistencyQueryStrategy)) {
      query["ConsistencyQueryStrategy"] = request.consistencyQueryStrategy;
    }

    if (!$dara.isNull(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.intervalInSec)) {
      query["IntervalInSec"] = request.intervalInSec;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.measures)) {
      query["Measures"] = request.measures;
    }

    if (!$dara.isNull(request.metric)) {
      query["Metric"] = request.metric;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.proxyUserId)) {
      query["ProxyUserId"] = request.proxyUserId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMetric",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMetricResponse>(await this.callApi(params, req, runtime), new $_model.QueryMetricResponse({}));
  }

  /**
   * @param request - QueryMetricRequest
   * @returns QueryMetricResponse
   */
  async queryMetric(request: $_model.QueryMetricRequest): Promise<$_model.QueryMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMetricWithOptions(request, runtime);
  }

  /**
   * @param request - QueryMetricByPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMetricByPageResponse
   */
  async queryMetricByPageWithOptions(request: $_model.QueryMetricByPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMetricByPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.customFilters)) {
      query["CustomFilters"] = request.customFilters;
    }

    if (!$dara.isNull(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.intervalInSec)) {
      query["IntervalInSec"] = request.intervalInSec;
    }

    if (!$dara.isNull(request.measures)) {
      query["Measures"] = request.measures;
    }

    if (!$dara.isNull(request.metric)) {
      query["Metric"] = request.metric;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
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
      action: "QueryMetricByPage",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMetricByPageResponse>(await this.callApi(params, req, runtime), new $_model.QueryMetricByPageResponse({}));
  }

  /**
   * @param request - QueryMetricByPageRequest
   * @returns QueryMetricByPageResponse
   */
  async queryMetricByPage(request: $_model.QueryMetricByPageRequest): Promise<$_model.QueryMetricByPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMetricByPageWithOptions(request, runtime);
  }

  /**
   * @param request - SaveTraceAppConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveTraceAppConfigResponse
   */
  async saveTraceAppConfigWithOptions(request: $_model.SaveTraceAppConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveTraceAppConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.settings)) {
      query["Settings"] = request.settings;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveTraceAppConfig",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveTraceAppConfigResponse>(await this.callApi(params, req, runtime), new $_model.SaveTraceAppConfigResponse({}));
  }

  /**
   * @param request - SaveTraceAppConfigRequest
   * @returns SaveTraceAppConfigResponse
   */
  async saveTraceAppConfig(request: $_model.SaveTraceAppConfigRequest): Promise<$_model.SaveTraceAppConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveTraceAppConfigWithOptions(request, runtime);
  }

  /**
   * @param request - SearchAlertContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchAlertContactResponse
   */
  async searchAlertContactWithOptions(request: $_model.SearchAlertContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchAlertContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactIds)) {
      query["ContactIds"] = request.contactIds;
    }

    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchAlertContact",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchAlertContactResponse>(await this.callApi(params, req, runtime), new $_model.SearchAlertContactResponse({}));
  }

  /**
   * @param request - SearchAlertContactRequest
   * @returns SearchAlertContactResponse
   */
  async searchAlertContact(request: $_model.SearchAlertContactRequest): Promise<$_model.SearchAlertContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchAlertContactWithOptions(request, runtime);
  }

  /**
   * @param request - SearchAlertContactGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchAlertContactGroupResponse
   */
  async searchAlertContactGroupWithOptions(request: $_model.SearchAlertContactGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchAlertContactGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactGroupIds)) {
      query["ContactGroupIds"] = request.contactGroupIds;
    }

    if (!$dara.isNull(request.contactGroupName)) {
      query["ContactGroupName"] = request.contactGroupName;
    }

    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.isDetail)) {
      query["IsDetail"] = request.isDetail;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchAlertContactGroup",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchAlertContactGroupResponse>(await this.callApi(params, req, runtime), new $_model.SearchAlertContactGroupResponse({}));
  }

  /**
   * @param request - SearchAlertContactGroupRequest
   * @returns SearchAlertContactGroupResponse
   */
  async searchAlertContactGroup(request: $_model.SearchAlertContactGroupRequest): Promise<$_model.SearchAlertContactGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchAlertContactGroupWithOptions(request, runtime);
  }

  /**
   * @param request - SearchAlertHistoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchAlertHistoriesResponse
   */
  async searchAlertHistoriesWithOptions(request: $_model.SearchAlertHistoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchAlertHistoriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    if (!$dara.isNull(request.alertType)) {
      query["AlertType"] = request.alertType;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
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
      action: "SearchAlertHistories",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchAlertHistoriesResponse>(await this.callApi(params, req, runtime), new $_model.SearchAlertHistoriesResponse({}));
  }

  /**
   * @param request - SearchAlertHistoriesRequest
   * @returns SearchAlertHistoriesResponse
   */
  async searchAlertHistories(request: $_model.SearchAlertHistoriesRequest): Promise<$_model.SearchAlertHistoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchAlertHistoriesWithOptions(request, runtime);
  }

  /**
   * @param request - SearchAlertRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchAlertRulesResponse
   */
  async searchAlertRulesWithOptions(request: $_model.SearchAlertRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchAlertRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchAlertRules",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchAlertRulesResponse>(await this.callApi(params, req, runtime), new $_model.SearchAlertRulesResponse({}));
  }

  /**
   * @param request - SearchAlertRulesRequest
   * @returns SearchAlertRulesResponse
   */
  async searchAlertRules(request: $_model.SearchAlertRulesRequest): Promise<$_model.SearchAlertRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchAlertRulesWithOptions(request, runtime);
  }

  /**
   * @param request - SearchEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchEventsResponse
   */
  async searchEventsWithOptions(request: $_model.SearchEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    if (!$dara.isNull(request.alertType)) {
      query["AlertType"] = request.alertType;
    }

    if (!$dara.isNull(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.isTrigger)) {
      query["IsTrigger"] = request.isTrigger;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
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
      action: "SearchEvents",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchEventsResponse>(await this.callApi(params, req, runtime), new $_model.SearchEventsResponse({}));
  }

  /**
   * @param request - SearchEventsRequest
   * @returns SearchEventsResponse
   */
  async searchEvents(request: $_model.SearchEventsRequest): Promise<$_model.SearchEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchEventsWithOptions(request, runtime);
  }

  /**
   * @param request - SearchRetcodeAppByPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchRetcodeAppByPageResponse
   */
  async searchRetcodeAppByPageWithOptions(request: $_model.SearchRetcodeAppByPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchRetcodeAppByPageResponse> {
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

    if (!$dara.isNull(request.retcodeAppName)) {
      query["RetcodeAppName"] = request.retcodeAppName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchRetcodeAppByPage",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchRetcodeAppByPageResponse>(await this.callApi(params, req, runtime), new $_model.SearchRetcodeAppByPageResponse({}));
  }

  /**
   * @param request - SearchRetcodeAppByPageRequest
   * @returns SearchRetcodeAppByPageResponse
   */
  async searchRetcodeAppByPage(request: $_model.SearchRetcodeAppByPageRequest): Promise<$_model.SearchRetcodeAppByPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchRetcodeAppByPageWithOptions(request, runtime);
  }

  /**
   * @param request - SearchTraceAppByNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchTraceAppByNameResponse
   */
  async searchTraceAppByNameWithOptions(request: $_model.SearchTraceAppByNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchTraceAppByNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.traceAppName)) {
      query["TraceAppName"] = request.traceAppName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchTraceAppByName",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchTraceAppByNameResponse>(await this.callApi(params, req, runtime), new $_model.SearchTraceAppByNameResponse({}));
  }

  /**
   * @param request - SearchTraceAppByNameRequest
   * @returns SearchTraceAppByNameResponse
   */
  async searchTraceAppByName(request: $_model.SearchTraceAppByNameRequest): Promise<$_model.SearchTraceAppByNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchTraceAppByNameWithOptions(request, runtime);
  }

  /**
   * @param request - SearchTraceAppByPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchTraceAppByPageResponse
   */
  async searchTraceAppByPageWithOptions(request: $_model.SearchTraceAppByPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchTraceAppByPageResponse> {
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

    if (!$dara.isNull(request.traceAppName)) {
      query["TraceAppName"] = request.traceAppName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchTraceAppByPage",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchTraceAppByPageResponse>(await this.callApi(params, req, runtime), new $_model.SearchTraceAppByPageResponse({}));
  }

  /**
   * @param request - SearchTraceAppByPageRequest
   * @returns SearchTraceAppByPageResponse
   */
  async searchTraceAppByPage(request: $_model.SearchTraceAppByPageRequest): Promise<$_model.SearchTraceAppByPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchTraceAppByPageWithOptions(request, runtime);
  }

  /**
   * @param request - SearchTracesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchTracesResponse
   */
  async searchTracesWithOptions(request: $_model.SearchTracesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchTracesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.exclusionFilters)) {
      query["ExclusionFilters"] = request.exclusionFilters;
    }

    if (!$dara.isNull(request.minDuration)) {
      query["MinDuration"] = request.minDuration;
    }

    if (!$dara.isNull(request.operationName)) {
      query["OperationName"] = request.operationName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    if (!$dara.isNull(request.serviceIp)) {
      query["ServiceIp"] = request.serviceIp;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchTraces",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchTracesResponse>(await this.callApi(params, req, runtime), new $_model.SearchTracesResponse({}));
  }

  /**
   * @param request - SearchTracesRequest
   * @returns SearchTracesResponse
   */
  async searchTraces(request: $_model.SearchTracesRequest): Promise<$_model.SearchTracesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchTracesWithOptions(request, runtime);
  }

  /**
   * @param request - SearchTracesByPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchTracesByPageResponse
   */
  async searchTracesByPageWithOptions(request: $_model.SearchTracesByPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchTracesByPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.exclusionFilters)) {
      query["ExclusionFilters"] = request.exclusionFilters;
    }

    if (!$dara.isNull(request.minDuration)) {
      query["MinDuration"] = request.minDuration;
    }

    if (!$dara.isNull(request.operationName)) {
      query["OperationName"] = request.operationName;
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

    if (!$dara.isNull(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    if (!$dara.isNull(request.serviceIp)) {
      query["ServiceIp"] = request.serviceIp;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchTracesByPage",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchTracesByPageResponse>(await this.callApi(params, req, runtime), new $_model.SearchTracesByPageResponse({}));
  }

  /**
   * @param request - SearchTracesByPageRequest
   * @returns SearchTracesByPageResponse
   */
  async searchTracesByPage(request: $_model.SearchTracesByPageRequest): Promise<$_model.SearchTracesByPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchTracesByPageWithOptions(request, runtime);
  }

  /**
   * @param request - SendCustomIncidentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendCustomIncidentsResponse
   */
  async sendCustomIncidentsWithOptions(request: $_model.SendCustomIncidentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendCustomIncidentsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.incidents)) {
      query["Incidents"] = request.incidents;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendCustomIncidents",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendCustomIncidentsResponse>(await this.callApi(params, req, runtime), new $_model.SendCustomIncidentsResponse({}));
  }

  /**
   * @param request - SendCustomIncidentsRequest
   * @returns SendCustomIncidentsResponse
   */
  async sendCustomIncidents(request: $_model.SendCustomIncidentsRequest): Promise<$_model.SendCustomIncidentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendCustomIncidentsWithOptions(request, runtime);
  }

  /**
   * @param request - SendMseIncidentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendMseIncidentResponse
   */
  async sendMseIncidentWithOptions(request: $_model.SendMseIncidentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendMseIncidentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.incidents)) {
      query["Incidents"] = request.incidents;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendMseIncident",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendMseIncidentResponse>(await this.callApi(params, req, runtime), new $_model.SendMseIncidentResponse({}));
  }

  /**
   * @param request - SendMseIncidentRequest
   * @returns SendMseIncidentResponse
   */
  async sendMseIncident(request: $_model.SendMseIncidentRequest): Promise<$_model.SendMseIncidentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendMseIncidentWithOptions(request, runtime);
  }

  /**
   * @param request - SetRetcodeShareStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetRetcodeShareStatusResponse
   */
  async setRetcodeShareStatusWithOptions(request: $_model.SetRetcodeShareStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetRetcodeShareStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetRetcodeShareStatus",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetRetcodeShareStatusResponse>(await this.callApi(params, req, runtime), new $_model.SetRetcodeShareStatusResponse({}));
  }

  /**
   * @param request - SetRetcodeShareStatusRequest
   * @returns SetRetcodeShareStatusResponse
   */
  async setRetcodeShareStatus(request: $_model.SetRetcodeShareStatusRequest): Promise<$_model.SetRetcodeShareStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setRetcodeShareStatusWithOptions(request, runtime);
  }

  /**
   * @param request - StartAlertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartAlertResponse
   */
  async startAlertWithOptions(request: $_model.StartAlertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartAlertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartAlert",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartAlertResponse>(await this.callApi(params, req, runtime), new $_model.StartAlertResponse({}));
  }

  /**
   * @param request - StartAlertRequest
   * @returns StartAlertResponse
   */
  async startAlert(request: $_model.StartAlertRequest): Promise<$_model.StartAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startAlertWithOptions(request, runtime);
  }

  /**
   * @param request - StopAlertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopAlertResponse
   */
  async stopAlertWithOptions(request: $_model.StopAlertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopAlertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopAlert",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopAlertResponse>(await this.callApi(params, req, runtime), new $_model.StopAlertResponse({}));
  }

  /**
   * @param request - StopAlertRequest
   * @returns StopAlertResponse
   */
  async stopAlert(request: $_model.StopAlertRequest): Promise<$_model.StopAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopAlertWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateAlertContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAlertContactResponse
   */
  async updateAlertContactWithOptions(request: $_model.UpdateAlertContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAlertContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.dingRobotWebhookUrl)) {
      query["DingRobotWebhookUrl"] = request.dingRobotWebhookUrl;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.phoneNum)) {
      query["PhoneNum"] = request.phoneNum;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.systemNoc)) {
      query["SystemNoc"] = request.systemNoc;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAlertContact",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAlertContactResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAlertContactResponse({}));
  }

  /**
   * @param request - UpdateAlertContactRequest
   * @returns UpdateAlertContactResponse
   */
  async updateAlertContact(request: $_model.UpdateAlertContactRequest): Promise<$_model.UpdateAlertContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAlertContactWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateAlertContactGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAlertContactGroupResponse
   */
  async updateAlertContactGroupWithOptions(request: $_model.UpdateAlertContactGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAlertContactGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactGroupId)) {
      query["ContactGroupId"] = request.contactGroupId;
    }

    if (!$dara.isNull(request.contactGroupName)) {
      query["ContactGroupName"] = request.contactGroupName;
    }

    if (!$dara.isNull(request.contactIds)) {
      query["ContactIds"] = request.contactIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAlertContactGroup",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAlertContactGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAlertContactGroupResponse({}));
  }

  /**
   * @param request - UpdateAlertContactGroupRequest
   * @returns UpdateAlertContactGroupResponse
   */
  async updateAlertContactGroup(request: $_model.UpdateAlertContactGroupRequest): Promise<$_model.UpdateAlertContactGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAlertContactGroupWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateAlertRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAlertRuleResponse
   */
  async updateAlertRuleWithOptions(request: $_model.UpdateAlertRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAlertRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    if (!$dara.isNull(request.contactGroupIds)) {
      query["ContactGroupIds"] = request.contactGroupIds;
    }

    if (!$dara.isNull(request.isAutoStart)) {
      query["IsAutoStart"] = request.isAutoStart;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templageAlertConfig)) {
      query["TemplageAlertConfig"] = request.templageAlertConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAlertRule",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAlertRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAlertRuleResponse({}));
  }

  /**
   * @param request - UpdateAlertRuleRequest
   * @returns UpdateAlertRuleResponse
   */
  async updateAlertRule(request: $_model.UpdateAlertRuleRequest): Promise<$_model.UpdateAlertRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAlertRuleWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateAlertTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAlertTemplateResponse
   */
  async updateAlertTemplateWithOptions(request: $_model.UpdateAlertTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAlertTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.annotations)) {
      query["Annotations"] = request.annotations;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.matchExpressions)) {
      query["MatchExpressions"] = request.matchExpressions;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
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
      action: "UpdateAlertTemplate",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAlertTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAlertTemplateResponse({}));
  }

  /**
   * @param request - UpdateAlertTemplateRequest
   * @returns UpdateAlertTemplateResponse
   */
  async updateAlertTemplate(request: $_model.UpdateAlertTemplateRequest): Promise<$_model.UpdateAlertTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAlertTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateDispatchRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDispatchRuleResponse
   */
  async updateDispatchRuleWithOptions(request: $_model.UpdateDispatchRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDispatchRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dispatchRule)) {
      query["DispatchRule"] = request.dispatchRule;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDispatchRule",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDispatchRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDispatchRuleResponse({}));
  }

  /**
   * @param request - UpdateDispatchRuleRequest
   * @returns UpdateDispatchRuleResponse
   */
  async updateDispatchRule(request: $_model.UpdateDispatchRuleRequest): Promise<$_model.UpdateDispatchRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDispatchRuleWithOptions(request, runtime);
  }

  /**
   * @param request - UpdatePrometheusAlertRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePrometheusAlertRuleResponse
   */
  async updatePrometheusAlertRuleWithOptions(request: $_model.UpdatePrometheusAlertRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePrometheusAlertRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    if (!$dara.isNull(request.alertName)) {
      query["AlertName"] = request.alertName;
    }

    if (!$dara.isNull(request.annotations)) {
      query["Annotations"] = request.annotations;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dispatchRuleId)) {
      query["DispatchRuleId"] = request.dispatchRuleId;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.expression)) {
      query["Expression"] = request.expression;
    }

    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    if (!$dara.isNull(request.notifyType)) {
      query["NotifyType"] = request.notifyType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePrometheusAlertRule",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePrometheusAlertRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePrometheusAlertRuleResponse({}));
  }

  /**
   * @param request - UpdatePrometheusAlertRuleRequest
   * @returns UpdatePrometheusAlertRuleResponse
   */
  async updatePrometheusAlertRule(request: $_model.UpdatePrometheusAlertRuleRequest): Promise<$_model.UpdatePrometheusAlertRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePrometheusAlertRuleWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateWebhookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWebhookResponse
   */
  async updateWebhookWithOptions(request: $_model.UpdateWebhookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWebhookResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.body)) {
      query["Body"] = request.body;
    }

    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.httpHeaders)) {
      query["HttpHeaders"] = request.httpHeaders;
    }

    if (!$dara.isNull(request.httpParams)) {
      query["HttpParams"] = request.httpParams;
    }

    if (!$dara.isNull(request.method)) {
      query["Method"] = request.method;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWebhook",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWebhookResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWebhookResponse({}));
  }

  /**
   * @param request - UpdateWebhookRequest
   * @returns UpdateWebhookResponse
   */
  async updateWebhook(request: $_model.UpdateWebhookRequest): Promise<$_model.UpdateWebhookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWebhookWithOptions(request, runtime);
  }

}
