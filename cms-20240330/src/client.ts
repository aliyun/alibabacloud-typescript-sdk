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
    this._endpoint = this.getEndpoint("cms", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 修改资源所属资源组
   * 
   * @param request - ChangeResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/resourcegroup`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResourceGroupResponse({}));
  }

  /**
   * 修改资源所属资源组
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
   * Install the access component, representing a single access attempt
   * 
   * @remarks
   * Used to create a site monitoring task
   * 
   * @param request - CreateAddonReleaseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAddonReleaseResponse
   */
  async createAddonReleaseWithOptions(policyId: string, request: $_model.CreateAddonReleaseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAddonReleaseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addonName)) {
      body["addonName"] = request.addonName;
    }

    if (!$dara.isNull(request.aliyunLang)) {
      body["aliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["dryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.entityRules)) {
      body["entityRules"] = request.entityRules;
    }

    if (!$dara.isNull(request.envType)) {
      body["envType"] = request.envType;
    }

    if (!$dara.isNull(request.parentAddonReleaseId)) {
      body["parentAddonReleaseId"] = request.parentAddonReleaseId;
    }

    if (!$dara.isNull(request.releaseName)) {
      body["releaseName"] = request.releaseName;
    }

    if (!$dara.isNull(request.values)) {
      body["values"] = request.values;
    }

    if (!$dara.isNull(request.version)) {
      body["version"] = request.version;
    }

    if (!$dara.isNull(request.workspace)) {
      body["workspace"] = request.workspace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAddonRelease",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies/${$dara.URL.percentEncode(policyId)}/addon-releases`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAddonReleaseResponse>(await this.callApi(params, req, runtime), new $_model.CreateAddonReleaseResponse({}));
  }

  /**
   * Install the access component, representing a single access attempt
   * 
   * @remarks
   * Used to create a site monitoring task
   * 
   * @param request - CreateAddonReleaseRequest
   * @returns CreateAddonReleaseResponse
   */
  async createAddonRelease(policyId: string, request: $_model.CreateAddonReleaseRequest): Promise<$_model.CreateAddonReleaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAddonReleaseWithOptions(policyId, request, headers, runtime);
  }

  /**
   * Create Aggregation Task Group
   * 
   * @param request - CreateAggTaskGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAggTaskGroupResponse
   */
  async createAggTaskGroupWithOptions(instanceId: string, request: $_model.CreateAggTaskGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAggTaskGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.overrideIfExists)) {
      query["overrideIfExists"] = request.overrideIfExists;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggTaskGroupConfig)) {
      body["aggTaskGroupConfig"] = request.aggTaskGroupConfig;
    }

    if (!$dara.isNull(request.aggTaskGroupConfigType)) {
      body["aggTaskGroupConfigType"] = request.aggTaskGroupConfigType;
    }

    if (!$dara.isNull(request.aggTaskGroupName)) {
      body["aggTaskGroupName"] = request.aggTaskGroupName;
    }

    if (!$dara.isNull(request.cronExpr)) {
      body["cronExpr"] = request.cronExpr;
    }

    if (!$dara.isNull(request.delay)) {
      body["delay"] = request.delay;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.fromTime)) {
      body["fromTime"] = request.fromTime;
    }

    if (!$dara.isNull(request.maxRetries)) {
      body["maxRetries"] = request.maxRetries;
    }

    if (!$dara.isNull(request.maxRunTimeInSeconds)) {
      body["maxRunTimeInSeconds"] = request.maxRunTimeInSeconds;
    }

    if (!$dara.isNull(request.precheckString)) {
      body["precheckString"] = request.precheckString;
    }

    if (!$dara.isNull(request.scheduleMode)) {
      body["scheduleMode"] = request.scheduleMode;
    }

    if (!$dara.isNull(request.scheduleTimeExpr)) {
      body["scheduleTimeExpr"] = request.scheduleTimeExpr;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.targetPrometheusId)) {
      body["targetPrometheusId"] = request.targetPrometheusId;
    }

    if (!$dara.isNull(request.toTime)) {
      body["toTime"] = request.toTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAggTaskGroup",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-instances/${$dara.URL.percentEncode(instanceId)}/agg-task-groups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAggTaskGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateAggTaskGroupResponse({}));
  }

  /**
   * Create Aggregation Task Group
   * 
   * @param request - CreateAggTaskGroupRequest
   * @returns CreateAggTaskGroupResponse
   */
  async createAggTaskGroup(instanceId: string, request: $_model.CreateAggTaskGroupRequest): Promise<$_model.CreateAggTaskGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAggTaskGroupWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 创建Webhook
   * 
   * @param request - CreateAlertWebhookRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAlertWebhookResponse
   */
  async createAlertWebhookWithOptions(request: $_model.CreateAlertWebhookRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAlertWebhookResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contentType)) {
      body["contentType"] = request.contentType;
    }

    if (!$dara.isNull(request.headers)) {
      body["headers"] = request.headers;
    }

    if (!$dara.isNull(request.lang)) {
      body["lang"] = request.lang;
    }

    if (!$dara.isNull(request.method)) {
      body["method"] = request.method;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.url)) {
      body["url"] = request.url;
    }

    if (!$dara.isNull(request.webhookId)) {
      body["webhookId"] = request.webhookId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAlertWebhook",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/webhook`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAlertWebhookResponse>(await this.callApi(params, req, runtime), new $_model.CreateAlertWebhookResponse({}));
  }

  /**
   * 创建Webhook
   * 
   * @param request - CreateAlertWebhookRequest
   * @returns CreateAlertWebhookResponse
   */
  async createAlertWebhook(request: $_model.CreateAlertWebhookRequest): Promise<$_model.CreateAlertWebhookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAlertWebhookWithOptions(request, headers, runtime);
  }

  /**
   * 创建业务链路
   * 
   * @param request - CreateBizTraceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBizTraceResponse
   */
  async createBizTraceWithOptions(request: $_model.CreateBizTraceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBizTraceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.advancedConfig)) {
      body["advancedConfig"] = request.advancedConfig;
    }

    if (!$dara.isNull(request.bizTraceCode)) {
      body["bizTraceCode"] = request.bizTraceCode;
    }

    if (!$dara.isNull(request.bizTraceName)) {
      body["bizTraceName"] = request.bizTraceName;
    }

    if (!$dara.isNull(request.ruleConfig)) {
      body["ruleConfig"] = request.ruleConfig;
    }

    if (!$dara.isNull(request.workspace)) {
      body["workspace"] = request.workspace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBizTrace",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/bizTrace`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBizTraceResponse>(await this.callApi(params, req, runtime), new $_model.CreateBizTraceResponse({}));
  }

  /**
   * 创建业务链路
   * 
   * @param request - CreateBizTraceRequest
   * @returns CreateBizTraceResponse
   */
  async createBizTrace(request: $_model.CreateBizTraceRequest): Promise<$_model.CreateBizTraceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createBizTraceWithOptions(request, headers, runtime);
  }

  /**
   * 创建对话
   * 
   * @param request - CreateChatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChatResponse
   */
  async *createChatWithSSE(request: $_model.CreateChatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.CreateChatResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.action)) {
      body["action"] = request.action;
    }

    if (!$dara.isNull(request.digitalEmployeeName)) {
      body["digitalEmployeeName"] = request.digitalEmployeeName;
    }

    if (!$dara.isNull(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!$dara.isNull(request.threadId)) {
      body["threadId"] = request.threadId;
    }

    if (!$dara.isNull(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateChat",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/chat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.CreateChatResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.CreateChatResponse({}));
    }
  }

  /**
   * 创建对话
   * 
   * @param request - CreateChatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChatResponse
   */
  async createChatWithOptions(request: $_model.CreateChatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateChatResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.action)) {
      body["action"] = request.action;
    }

    if (!$dara.isNull(request.digitalEmployeeName)) {
      body["digitalEmployeeName"] = request.digitalEmployeeName;
    }

    if (!$dara.isNull(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!$dara.isNull(request.threadId)) {
      body["threadId"] = request.threadId;
    }

    if (!$dara.isNull(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateChat",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/chat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateChatResponse>(await this.callApi(params, req, runtime), new $_model.CreateChatResponse({}));
  }

  /**
   * 创建对话
   * 
   * @param request - CreateChatRequest
   * @returns CreateChatResponse
   */
  async createChat(request: $_model.CreateChatRequest): Promise<$_model.CreateChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createChatWithOptions(request, headers, runtime);
  }

  /**
   * 创建云资源中心
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCloudResourceResponse
   */
  async createCloudResourceWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCloudResourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCloudResource",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/cloudresource`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCloudResourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateCloudResourceResponse({}));
  }

  /**
   * 创建云资源中心
   * @returns CreateCloudResourceResponse
   */
  async createCloudResource(): Promise<$_model.CreateCloudResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCloudResourceWithOptions(headers, runtime);
  }

  /**
   * 创建DigitalEmployee
   * 
   * @param request - CreateDigitalEmployeeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDigitalEmployeeResponse
   */
  async createDigitalEmployeeWithOptions(request: $_model.CreateDigitalEmployeeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDigitalEmployeeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.defaultRule)) {
      body["defaultRule"] = request.defaultRule;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.knowledges)) {
      body["knowledges"] = request.knowledges;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.roleArn)) {
      body["roleArn"] = request.roleArn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDigitalEmployee",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/digital-employee`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDigitalEmployeeResponse>(await this.callApi(params, req, runtime), new $_model.CreateDigitalEmployeeResponse({}));
  }

  /**
   * 创建DigitalEmployee
   * 
   * @param request - CreateDigitalEmployeeRequest
   * @returns CreateDigitalEmployeeResponse
   */
  async createDigitalEmployee(request: $_model.CreateDigitalEmployeeRequest): Promise<$_model.CreateDigitalEmployeeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDigitalEmployeeWithOptions(request, headers, runtime);
  }

  /**
   * Create storage related to EntityStore
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEntityStoreResponse
   */
  async createEntityStoreWithOptions(workspaceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEntityStoreResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEntityStore",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspaceName)}/entitystore`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEntityStoreResponse>(await this.callApi(params, req, runtime), new $_model.CreateEntityStoreResponse({}));
  }

  /**
   * Create storage related to EntityStore
   * @returns CreateEntityStoreResponse
   */
  async createEntityStore(workspaceName: string): Promise<$_model.CreateEntityStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEntityStoreWithOptions(workspaceName, headers, runtime);
  }

  /**
   * Create Access Center Policy
   * 
   * @remarks
   * This interface is used to support users in creating event integration.
   * 
   * @param request - CreateIntegrationPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIntegrationPolicyResponse
   */
  async createIntegrationPolicyWithOptions(request: $_model.CreateIntegrationPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIntegrationPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.entityGroup)) {
      body["entityGroup"] = request.entityGroup;
    }

    if (!$dara.isNull(request.policyName)) {
      body["policyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      body["policyType"] = request.policyType;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.workspace)) {
      body["workspace"] = request.workspace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIntegrationPolicy",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIntegrationPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateIntegrationPolicyResponse({}));
  }

  /**
   * Create Access Center Policy
   * 
   * @remarks
   * This interface is used to support users in creating event integration.
   * 
   * @param request - CreateIntegrationPolicyRequest
   * @returns CreateIntegrationPolicyResponse
   */
  async createIntegrationPolicy(request: $_model.CreateIntegrationPolicyRequest): Promise<$_model.CreateIntegrationPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIntegrationPolicyWithOptions(request, headers, runtime);
  }

  /**
   * Create a Prometheus monitoring instance
   * 
   * @param request - CreatePrometheusInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrometheusInstanceResponse
   */
  async createPrometheusInstanceWithOptions(request: $_model.CreatePrometheusInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePrometheusInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.archiveDuration)) {
      body["archiveDuration"] = request.archiveDuration;
    }

    if (!$dara.isNull(request.authFreeReadPolicy)) {
      body["authFreeReadPolicy"] = request.authFreeReadPolicy;
    }

    if (!$dara.isNull(request.authFreeWritePolicy)) {
      body["authFreeWritePolicy"] = request.authFreeWritePolicy;
    }

    if (!$dara.isNull(request.enableAuthFreeRead)) {
      body["enableAuthFreeRead"] = request.enableAuthFreeRead;
    }

    if (!$dara.isNull(request.enableAuthFreeWrite)) {
      body["enableAuthFreeWrite"] = request.enableAuthFreeWrite;
    }

    if (!$dara.isNull(request.enableAuthToken)) {
      body["enableAuthToken"] = request.enableAuthToken;
    }

    if (!$dara.isNull(request.paymentType)) {
      body["paymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.prometheusInstanceName)) {
      body["prometheusInstanceName"] = request.prometheusInstanceName;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.storageDuration)) {
      body["storageDuration"] = request.storageDuration;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.workspace)) {
      body["workspace"] = request.workspace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePrometheusInstance",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePrometheusInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreatePrometheusInstanceResponse({}));
  }

  /**
   * Create a Prometheus monitoring instance
   * 
   * @param request - CreatePrometheusInstanceRequest
   * @returns CreatePrometheusInstanceResponse
   */
  async createPrometheusInstance(request: $_model.CreatePrometheusInstanceRequest): Promise<$_model.CreatePrometheusInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPrometheusInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Create Prometheus View
   * 
   * @remarks
   * Used to create a site monitoring task
   * 
   * @param request - CreatePrometheusViewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrometheusViewResponse
   */
  async createPrometheusViewWithOptions(request: $_model.CreatePrometheusViewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePrometheusViewResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authFreeReadPolicy)) {
      body["authFreeReadPolicy"] = request.authFreeReadPolicy;
    }

    if (!$dara.isNull(request.enableAuthFreeRead)) {
      body["enableAuthFreeRead"] = request.enableAuthFreeRead;
    }

    if (!$dara.isNull(request.enableAuthToken)) {
      body["enableAuthToken"] = request.enableAuthToken;
    }

    if (!$dara.isNull(request.prometheusInstances)) {
      body["prometheusInstances"] = request.prometheusInstances;
    }

    if (!$dara.isNull(request.prometheusViewName)) {
      body["prometheusViewName"] = request.prometheusViewName;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.version)) {
      body["version"] = request.version;
    }

    if (!$dara.isNull(request.workspace)) {
      body["workspace"] = request.workspace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePrometheusView",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-views`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePrometheusViewResponse>(await this.callApi(params, req, runtime), new $_model.CreatePrometheusViewResponse({}));
  }

  /**
   * Create Prometheus View
   * 
   * @remarks
   * Used to create a site monitoring task
   * 
   * @param request - CreatePrometheusViewRequest
   * @returns CreatePrometheusViewResponse
   */
  async createPrometheusView(request: $_model.CreatePrometheusViewRequest): Promise<$_model.CreatePrometheusViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPrometheusViewWithOptions(request, headers, runtime);
  }

  /**
   * Create Prometheus Monitoring Instance
   * 
   * @remarks
   * Create a Prometheus monitoring virtual instance.
   * 
   * @param request - CreatePrometheusVirtualInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrometheusVirtualInstanceResponse
   */
  async createPrometheusVirtualInstanceWithOptions(request: $_model.CreatePrometheusVirtualInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePrometheusVirtualInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.namespace)) {
      body["namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePrometheusVirtualInstance",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/virtual-instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePrometheusVirtualInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreatePrometheusVirtualInstanceResponse({}));
  }

  /**
   * Create Prometheus Monitoring Instance
   * 
   * @remarks
   * Create a Prometheus monitoring virtual instance.
   * 
   * @param request - CreatePrometheusVirtualInstanceRequest
   * @returns CreatePrometheusVirtualInstanceResponse
   */
  async createPrometheusVirtualInstance(request: $_model.CreatePrometheusVirtualInstanceRequest): Promise<$_model.CreatePrometheusVirtualInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPrometheusVirtualInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Create Service
   * 
   * @param request - CreateServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceResponse
   */
  async createServiceWithOptions(workspace: string, request: $_model.CreateServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attributes)) {
      body["attributes"] = request.attributes;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.pid)) {
      body["pid"] = request.pid;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serviceName)) {
      body["serviceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.serviceStatus)) {
      body["serviceStatus"] = request.serviceStatus;
    }

    if (!$dara.isNull(request.serviceType)) {
      body["serviceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateService",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/service`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceResponse({}));
  }

  /**
   * Create Service
   * 
   * @param request - CreateServiceRequest
   * @returns CreateServiceResponse
   */
  async createService(workspace: string, request: $_model.CreateServiceRequest): Promise<$_model.CreateServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceWithOptions(workspace, request, headers, runtime);
  }

  /**
   * 创建应用可观测实例
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceObservabilityResponse
   */
  async createServiceObservabilityWithOptions(workspace: string, type: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceObservabilityResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceObservability",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/service-observability/${$dara.URL.percentEncode(type)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceObservabilityResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceObservabilityResponse({}));
  }

  /**
   * 创建应用可观测实例
   * @returns CreateServiceObservabilityResponse
   */
  async createServiceObservability(workspace: string, type: string): Promise<$_model.CreateServiceObservabilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceObservabilityWithOptions(workspace, type, headers, runtime);
  }

  /**
   * 创建会话
   * 
   * @param request - CreateThreadRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateThreadResponse
   */
  async createThreadWithOptions(name: string, request: $_model.CreateThreadRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateThreadResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.title)) {
      body["title"] = request.title;
    }

    if (!$dara.isNull(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateThread",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/digitalEmployee/${$dara.URL.percentEncode(name)}/thread`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateThreadResponse>(await this.callApi(params, req, runtime), new $_model.CreateThreadResponse({}));
  }

  /**
   * 创建会话
   * 
   * @param request - CreateThreadRequest
   * @returns CreateThreadResponse
   */
  async createThread(name: string, request: $_model.CreateThreadRequest): Promise<$_model.CreateThreadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createThreadWithOptions(name, request, headers, runtime);
  }

  /**
   * Create Ticket
   * 
   * @param request - CreateTicketRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTicketResponse
   */
  async createTicketWithOptions(request: $_model.CreateTicketRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTicketResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessTokenExpirationTime)) {
      query["accessTokenExpirationTime"] = request.accessTokenExpirationTime;
    }

    if (!$dara.isNull(request.expirationTime)) {
      query["expirationTime"] = request.expirationTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTicket",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/tickets`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTicketResponse>(await this.callApi(params, req, runtime), new $_model.CreateTicketResponse({}));
  }

  /**
   * Create Ticket
   * 
   * @param request - CreateTicketRequest
   * @returns CreateTicketResponse
   */
  async createTicket(request: $_model.CreateTicketRequest): Promise<$_model.CreateTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTicketWithOptions(request, headers, runtime);
  }

  /**
   * Create Umodel configuration
   * 
   * @remarks
   * Create Umodel configuration in the specified workspace
   * 
   * @param request - CreateUmodelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUmodelResponse
   */
  async createUmodelWithOptions(workspace: string, request: $_model.CreateUmodelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUmodelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUmodel",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/umodel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUmodelResponse>(await this.callApi(params, req, runtime), new $_model.CreateUmodelResponse({}));
  }

  /**
   * Create Umodel configuration
   * 
   * @remarks
   * Create Umodel configuration in the specified workspace
   * 
   * @param request - CreateUmodelRequest
   * @returns CreateUmodelResponse
   */
  async createUmodel(workspace: string, request: $_model.CreateUmodelRequest): Promise<$_model.CreateUmodelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createUmodelWithOptions(workspace, request, headers, runtime);
  }

  /**
   * Delete addon release information
   * 
   * @param request - DeleteAddonReleaseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAddonReleaseResponse
   */
  async deleteAddonReleaseWithOptions(policyId: string, request: $_model.DeleteAddonReleaseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAddonReleaseResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addonName)) {
      query["addonName"] = request.addonName;
    }

    if (!$dara.isNull(request.force)) {
      query["force"] = request.force;
    }

    if (!$dara.isNull(request.releaseName)) {
      query["releaseName"] = request.releaseName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAddonRelease",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies/${$dara.URL.percentEncode(policyId)}/addon-releases`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAddonReleaseResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAddonReleaseResponse({}));
  }

  /**
   * Delete addon release information
   * 
   * @param request - DeleteAddonReleaseRequest
   * @returns DeleteAddonReleaseResponse
   */
  async deleteAddonRelease(policyId: string, request: $_model.DeleteAddonReleaseRequest): Promise<$_model.DeleteAddonReleaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAddonReleaseWithOptions(policyId, request, headers, runtime);
  }

  /**
   * Delete Aggregation Task Group
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAggTaskGroupResponse
   */
  async deleteAggTaskGroupWithOptions(instanceId: string, groupId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAggTaskGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAggTaskGroup",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-instances/${$dara.URL.percentEncode(instanceId)}/agg-task-groups/${$dara.URL.percentEncode(groupId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAggTaskGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAggTaskGroupResponse({}));
  }

  /**
   * Delete Aggregation Task Group
   * @returns DeleteAggTaskGroupResponse
   */
  async deleteAggTaskGroup(instanceId: string, groupId: string): Promise<$_model.DeleteAggTaskGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAggTaskGroupWithOptions(instanceId, groupId, headers, runtime);
  }

  /**
   * 删除Webhook
   * 
   * @param tmpReq - DeleteAlertWebhooksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAlertWebhooksResponse
   */
  async deleteAlertWebhooksWithOptions(tmpReq: $_model.DeleteAlertWebhooksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAlertWebhooksResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteAlertWebhooksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.webhookIds)) {
      request.webhookIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.webhookIds, "webhookIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.webhookIdsShrink)) {
      query["webhookIds"] = request.webhookIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAlertWebhooks",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/webhooks`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAlertWebhooksResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAlertWebhooksResponse({}));
  }

  /**
   * 删除Webhook
   * 
   * @param request - DeleteAlertWebhooksRequest
   * @returns DeleteAlertWebhooksResponse
   */
  async deleteAlertWebhooks(request: $_model.DeleteAlertWebhooksRequest): Promise<$_model.DeleteAlertWebhooksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAlertWebhooksWithOptions(request, headers, runtime);
  }

  /**
   * 删除业务链路
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBizTraceResponse
   */
  async deleteBizTraceWithOptions(bizTraceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBizTraceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBizTrace",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/bizTrace/${$dara.URL.percentEncode(bizTraceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBizTraceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBizTraceResponse({}));
  }

  /**
   * 删除业务链路
   * @returns DeleteBizTraceResponse
   */
  async deleteBizTrace(bizTraceId: string): Promise<$_model.DeleteBizTraceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteBizTraceWithOptions(bizTraceId, headers, runtime);
  }

  /**
   * 删除云资源中心
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCloudResourceResponse
   */
  async deleteCloudResourceWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCloudResourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCloudResource",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/cloudresource`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCloudResourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCloudResourceResponse({}));
  }

  /**
   * 删除云资源中心
   * @returns DeleteCloudResourceResponse
   */
  async deleteCloudResource(): Promise<$_model.DeleteCloudResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCloudResourceWithOptions(headers, runtime);
  }

  /**
   * 删除DigitalEmployee
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDigitalEmployeeResponse
   */
  async deleteDigitalEmployeeWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDigitalEmployeeResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDigitalEmployee",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/digital-employee/${$dara.URL.percentEncode(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDigitalEmployeeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDigitalEmployeeResponse({}));
  }

  /**
   * 删除DigitalEmployee
   * @returns DeleteDigitalEmployeeResponse
   */
  async deleteDigitalEmployee(name: string): Promise<$_model.DeleteDigitalEmployeeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDigitalEmployeeWithOptions(name, headers, runtime);
  }

  /**
   * Delete EntityStore related storage
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEntityStoreResponse
   */
  async deleteEntityStoreWithOptions(workspaceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEntityStoreResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEntityStore",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspaceName)}/entitystore`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEntityStoreResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEntityStoreResponse({}));
  }

  /**
   * Delete EntityStore related storage
   * @returns DeleteEntityStoreResponse
   */
  async deleteEntityStore(workspaceName: string): Promise<$_model.DeleteEntityStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEntityStoreWithOptions(workspaceName, headers, runtime);
  }

  /**
   * Delete Access Center Policy
   * 
   * @param request - DeleteIntegrationPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIntegrationPolicyResponse
   */
  async deleteIntegrationPolicyWithOptions(policyId: string, request: $_model.DeleteIntegrationPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIntegrationPolicyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIntegrationPolicy",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies/${$dara.URL.percentEncode(policyId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIntegrationPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIntegrationPolicyResponse({}));
  }

  /**
   * Delete Access Center Policy
   * 
   * @param request - DeleteIntegrationPolicyRequest
   * @returns DeleteIntegrationPolicyResponse
   */
  async deleteIntegrationPolicy(policyId: string, request: $_model.DeleteIntegrationPolicyRequest): Promise<$_model.DeleteIntegrationPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIntegrationPolicyWithOptions(policyId, request, headers, runtime);
  }

  /**
   * Delete prom instance
   * 
   * @remarks
   * Delete a Prometheus instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePrometheusInstanceResponse
   */
  async deletePrometheusInstanceWithOptions(prometheusInstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePrometheusInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePrometheusInstance",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-instances/${$dara.URL.percentEncode(prometheusInstanceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePrometheusInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeletePrometheusInstanceResponse({}));
  }

  /**
   * Delete prom instance
   * 
   * @remarks
   * Delete a Prometheus instance.
   * @returns DeletePrometheusInstanceResponse
   */
  async deletePrometheusInstance(prometheusInstanceId: string): Promise<$_model.DeletePrometheusInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePrometheusInstanceWithOptions(prometheusInstanceId, headers, runtime);
  }

  /**
   * Delete prometheus view instance
   * 
   * @remarks
   * Delete prometheus view instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePrometheusViewResponse
   */
  async deletePrometheusViewWithOptions(prometheusViewId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePrometheusViewResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePrometheusView",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-views/${$dara.URL.percentEncode(prometheusViewId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePrometheusViewResponse>(await this.callApi(params, req, runtime), new $_model.DeletePrometheusViewResponse({}));
  }

  /**
   * Delete prometheus view instance
   * 
   * @remarks
   * Delete prometheus view instance.
   * @returns DeletePrometheusViewResponse
   */
  async deletePrometheusView(prometheusViewId: string): Promise<$_model.DeletePrometheusViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePrometheusViewWithOptions(prometheusViewId, headers, runtime);
  }

  /**
   * Delete Service
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceResponse
   */
  async deleteServiceWithOptions(workspace: string, serviceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteService",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/service/${$dara.URL.percentEncode(serviceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteServiceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteServiceResponse({}));
  }

  /**
   * Delete Service
   * @returns DeleteServiceResponse
   */
  async deleteService(workspace: string, serviceId: string): Promise<$_model.DeleteServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceWithOptions(workspace, serviceId, headers, runtime);
  }

  /**
   * 删除会话
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteThreadResponse
   */
  async deleteThreadWithOptions(name: string, threadId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteThreadResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteThread",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/digitalEmployee/${$dara.URL.percentEncode(name)}/thread/${$dara.URL.percentEncode(threadId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteThreadResponse>(await this.callApi(params, req, runtime), new $_model.DeleteThreadResponse({}));
  }

  /**
   * 删除会话
   * @returns DeleteThreadResponse
   */
  async deleteThread(name: string, threadId: string): Promise<$_model.DeleteThreadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteThreadWithOptions(name, threadId, headers, runtime);
  }

  /**
   * Delete Umodel configuration information
   * 
   * @remarks
   * Delete the Umodel under the specified workspace
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUmodelResponse
   */
  async deleteUmodelWithOptions(workspace: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUmodelResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUmodel",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/umodel`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUmodelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUmodelResponse({}));
  }

  /**
   * Delete Umodel configuration information
   * 
   * @remarks
   * Delete the Umodel under the specified workspace
   * @returns DeleteUmodelResponse
   */
  async deleteUmodel(workspace: string): Promise<$_model.DeleteUmodelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteUmodelWithOptions(workspace, headers, runtime);
  }

  /**
   * 删除Umodel配置信息
   * 
   * @param request - DeleteUmodelCommonSchemaRefRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUmodelCommonSchemaRefResponse
   */
  async deleteUmodelCommonSchemaRefWithOptions(workspace: string, request: $_model.DeleteUmodelCommonSchemaRefRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUmodelCommonSchemaRefResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.group)) {
      query["group"] = request.group;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUmodelCommonSchemaRef",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/umodel/common-schema-ref`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUmodelCommonSchemaRefResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUmodelCommonSchemaRefResponse({}));
  }

  /**
   * 删除Umodel配置信息
   * 
   * @param request - DeleteUmodelCommonSchemaRefRequest
   * @returns DeleteUmodelCommonSchemaRefResponse
   */
  async deleteUmodelCommonSchemaRef(workspace: string, request: $_model.DeleteUmodelCommonSchemaRefRequest): Promise<$_model.DeleteUmodelCommonSchemaRefResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteUmodelCommonSchemaRefWithOptions(workspace, request, headers, runtime);
  }

  /**
   * Delete Umodel Elements
   * 
   * @remarks
   * Delete the Umodel Data under a specified workspace
   * 
   * @param request - DeleteUmodelDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUmodelDataResponse
   */
  async deleteUmodelDataWithOptions(workspace: string, request: $_model.DeleteUmodelDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUmodelDataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.domain)) {
      query["domain"] = request.domain;
    }

    if (!$dara.isNull(request.kind)) {
      query["kind"] = request.kind;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUmodelData",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/umodel/data`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUmodelDataResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUmodelDataResponse({}));
  }

  /**
   * Delete Umodel Elements
   * 
   * @remarks
   * Delete the Umodel Data under a specified workspace
   * 
   * @param request - DeleteUmodelDataRequest
   * @returns DeleteUmodelDataResponse
   */
  async deleteUmodelData(workspace: string, request: $_model.DeleteUmodelDataRequest): Promise<$_model.DeleteUmodelDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteUmodelDataWithOptions(workspace, request, headers, runtime);
  }

  /**
   * Delete Workspace
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkspaceResponse
   */
  async deleteWorkspaceWithOptions(workspaceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkspaceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkspace",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspaceName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWorkspaceResponse({}));
  }

  /**
   * Delete Workspace
   * @returns DeleteWorkspaceResponse
   */
  async deleteWorkspace(workspaceName: string): Promise<$_model.DeleteWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWorkspaceWithOptions(workspaceName, headers, runtime);
  }

  /**
   * 查询地域信息列表
   * 
   * @param request - DescribeRegionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.language)) {
      query["language"] = request.language;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/regions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * 查询地域信息列表
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionsWithOptions(request, headers, runtime);
  }

  /**
   * 插件详情(Addon)
   * 
   * @param request - GetAddonRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAddonResponse
   */
  async getAddonWithOptions(addonName: string, request: $_model.GetAddonRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAddonResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["aliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAddon",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/addons/${$dara.URL.percentEncode(addonName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAddonResponse>(await this.callApi(params, req, runtime), new $_model.GetAddonResponse({}));
  }

  /**
   * 插件详情(Addon)
   * 
   * @param request - GetAddonRequest
   * @returns GetAddonResponse
   */
  async getAddon(addonName: string, request: $_model.GetAddonRequest): Promise<$_model.GetAddonResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAddonWithOptions(addonName, request, headers, runtime);
  }

  /**
   * 插件schema详情(Addon)
   * 
   * @param request - GetAddonCodeTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAddonCodeTemplateResponse
   */
  async getAddonCodeTemplateWithOptions(addonName: string, request: $_model.GetAddonCodeTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAddonCodeTemplateResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["aliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.environmentType)) {
      query["environmentType"] = request.environmentType;
    }

    if (!$dara.isNull(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAddonCodeTemplate",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/addons/${$dara.URL.percentEncode(addonName)}/alert-code-template`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAddonCodeTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetAddonCodeTemplateResponse({}));
  }

  /**
   * 插件schema详情(Addon)
   * 
   * @param request - GetAddonCodeTemplateRequest
   * @returns GetAddonCodeTemplateResponse
   */
  async getAddonCodeTemplate(addonName: string, request: $_model.GetAddonCodeTemplateRequest): Promise<$_model.GetAddonCodeTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAddonCodeTemplateWithOptions(addonName, request, headers, runtime);
  }

  /**
   * Check addon release (view connection status)
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAddonReleaseResponse
   */
  async getAddonReleaseWithOptions(releaseName: string, policyId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAddonReleaseResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAddonRelease",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies/${$dara.URL.percentEncode(policyId)}/addon-releases/${$dara.URL.percentEncode(releaseName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAddonReleaseResponse>(await this.callApi(params, req, runtime), new $_model.GetAddonReleaseResponse({}));
  }

  /**
   * Check addon release (view connection status)
   * @returns GetAddonReleaseResponse
   */
  async getAddonRelease(releaseName: string, policyId: string): Promise<$_model.GetAddonReleaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAddonReleaseWithOptions(releaseName, policyId, headers, runtime);
  }

  /**
   * 插件schema详情(Addon)
   * 
   * @param request - GetAddonSchemaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAddonSchemaResponse
   */
  async getAddonSchemaWithOptions(addonName: string, request: $_model.GetAddonSchemaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAddonSchemaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["aliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.environmentType)) {
      query["environmentType"] = request.environmentType;
    }

    if (!$dara.isNull(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAddonSchema",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/addons/${$dara.URL.percentEncode(addonName)}/schema`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAddonSchemaResponse>(await this.callApi(params, req, runtime), new $_model.GetAddonSchemaResponse({}));
  }

  /**
   * 插件schema详情(Addon)
   * 
   * @param request - GetAddonSchemaRequest
   * @returns GetAddonSchemaResponse
   */
  async getAddonSchema(addonName: string, request: $_model.GetAddonSchemaRequest): Promise<$_model.GetAddonSchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAddonSchemaWithOptions(addonName, request, headers, runtime);
  }

  /**
   * Describes the aggregation task group
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAggTaskGroupResponse
   */
  async getAggTaskGroupWithOptions(instanceId: string, groupId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAggTaskGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAggTaskGroup",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-instances/${$dara.URL.percentEncode(instanceId)}/agg-task-groups/${$dara.URL.percentEncode(groupId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAggTaskGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetAggTaskGroupResponse({}));
  }

  /**
   * Describes the aggregation task group
   * @returns GetAggTaskGroupResponse
   */
  async getAggTaskGroup(instanceId: string, groupId: string): Promise<$_model.GetAggTaskGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAggTaskGroupWithOptions(instanceId, groupId, headers, runtime);
  }

  /**
   * 查询业务链路
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBizTraceResponse
   */
  async getBizTraceWithOptions(bizTraceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetBizTraceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBizTrace",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/bizTrace/${$dara.URL.percentEncode(bizTraceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBizTraceResponse>(await this.callApi(params, req, runtime), new $_model.GetBizTraceResponse({}));
  }

  /**
   * 查询业务链路
   * @returns GetBizTraceResponse
   */
  async getBizTrace(bizTraceId: string): Promise<$_model.GetBizTraceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBizTraceWithOptions(bizTraceId, headers, runtime);
  }

  /**
   * 查询云资源中心
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCloudResourceResponse
   */
  async getCloudResourceWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCloudResourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCloudResource",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/cloudresource`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCloudResourceResponse>(await this.callApi(params, req, runtime), new $_model.GetCloudResourceResponse({}));
  }

  /**
   * 查询云资源中心
   * @returns GetCloudResourceResponse
   */
  async getCloudResource(): Promise<$_model.GetCloudResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCloudResourceWithOptions(headers, runtime);
  }

  /**
   * 查询云资源中心数据
   * 
   * @param request - GetCloudResourceDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCloudResourceDataResponse
   */
  async getCloudResourceDataWithOptions(request: $_model.GetCloudResourceDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCloudResourceDataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.from)) {
      query["from"] = request.from;
    }

    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    if (!$dara.isNull(request.to)) {
      query["to"] = request.to;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCloudResourceData",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/cloudresource/data`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCloudResourceDataResponse>(await this.callApi(params, req, runtime), new $_model.GetCloudResourceDataResponse({}));
  }

  /**
   * 查询云资源中心数据
   * 
   * @param request - GetCloudResourceDataRequest
   * @returns GetCloudResourceDataResponse
   */
  async getCloudResourceData(request: $_model.GetCloudResourceDataRequest): Promise<$_model.GetCloudResourceDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCloudResourceDataWithOptions(request, headers, runtime);
  }

  /**
   * 获取云监控开通状态
   * 
   * @param request - GetCmsServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCmsServiceResponse
   */
  async getCmsServiceWithOptions(request: $_model.GetCmsServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCmsServiceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.product)) {
      query["product"] = request.product;
    }

    if (!$dara.isNull(request.service)) {
      query["service"] = request.service;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCmsService",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/cmsservice`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCmsServiceResponse>(await this.callApi(params, req, runtime), new $_model.GetCmsServiceResponse({}));
  }

  /**
   * 获取云监控开通状态
   * 
   * @param request - GetCmsServiceRequest
   * @returns GetCmsServiceResponse
   */
  async getCmsService(request: $_model.GetCmsServiceRequest): Promise<$_model.GetCmsServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCmsServiceWithOptions(request, headers, runtime);
  }

  /**
   * 查询 DigitalEmployee
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDigitalEmployeeResponse
   */
  async getDigitalEmployeeWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDigitalEmployeeResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDigitalEmployee",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/digital-employee/${$dara.URL.percentEncode(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDigitalEmployeeResponse>(await this.callApi(params, req, runtime), new $_model.GetDigitalEmployeeResponse({}));
  }

  /**
   * 查询 DigitalEmployee
   * @returns GetDigitalEmployeeResponse
   */
  async getDigitalEmployee(name: string): Promise<$_model.GetDigitalEmployeeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDigitalEmployeeWithOptions(name, headers, runtime);
  }

  /**
   * Get EntityStore related storage information
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEntityStoreResponse
   */
  async getEntityStoreWithOptions(workspaceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEntityStoreResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEntityStore",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspaceName)}/entitystore`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEntityStoreResponse>(await this.callApi(params, req, runtime), new $_model.GetEntityStoreResponse({}));
  }

  /**
   * Get EntityStore related storage information
   * @returns GetEntityStoreResponse
   */
  async getEntityStore(workspaceName: string): Promise<$_model.GetEntityStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEntityStoreWithOptions(workspaceName, headers, runtime);
  }

  /**
   * Query the entity and relationship data under a specified Workspace, returning the entity data within a certain time range (the returned result is transmitted after compression).
   * 
   * @param request - GetEntityStoreDataRequest
   * @param headers - GetEntityStoreDataHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEntityStoreDataResponse
   */
  async getEntityStoreDataWithOptions(workspace: string, request: $_model.GetEntityStoreDataRequest, headers: $_model.GetEntityStoreDataHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetEntityStoreDataResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.from)) {
      body["from"] = request.from;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    if (!$dara.isNull(request.to)) {
      body["to"] = request.to;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.acceptEncoding)) {
      realHeaders["acceptEncoding"] = String(headers.acceptEncoding);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEntityStoreData",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/entitiesAndRelations`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEntityStoreDataResponse>(await this.callApi(params, req, runtime), new $_model.GetEntityStoreDataResponse({}));
  }

  /**
   * Query the entity and relationship data under a specified Workspace, returning the entity data within a certain time range (the returned result is transmitted after compression).
   * 
   * @param request - GetEntityStoreDataRequest
   * @returns GetEntityStoreDataResponse
   */
  async getEntityStoreData(workspace: string, request: $_model.GetEntityStoreDataRequest): Promise<$_model.GetEntityStoreDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetEntityStoreDataHeaders({ });
    return await this.getEntityStoreDataWithOptions(workspace, request, headers, runtime);
  }

  /**
   * Query the list of access center policies
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIntegrationPolicyResponse
   */
  async getIntegrationPolicyWithOptions(policyId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetIntegrationPolicyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIntegrationPolicy",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies/${$dara.URL.percentEncode(policyId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIntegrationPolicyResponse>(await this.callApi(params, req, runtime), new $_model.GetIntegrationPolicyResponse({}));
  }

  /**
   * Query the list of access center policies
   * @returns GetIntegrationPolicyResponse
   */
  async getIntegrationPolicy(policyId: string): Promise<$_model.GetIntegrationPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIntegrationPolicyWithOptions(policyId, headers, runtime);
  }

  /**
   * 查询接入中心在CS的版本
   * 
   * @param request - GetIntegrationVersionForCSRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIntegrationVersionForCSResponse
   */
  async getIntegrationVersionForCSWithOptions(request: $_model.GetIntegrationVersionForCSRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetIntegrationVersionForCSResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["clusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterType)) {
      query["clusterType"] = request.clusterType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIntegrationVersionForCS",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-version/cs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIntegrationVersionForCSResponse>(await this.callApi(params, req, runtime), new $_model.GetIntegrationVersionForCSResponse({}));
  }

  /**
   * 查询接入中心在CS的版本
   * 
   * @param request - GetIntegrationVersionForCSRequest
   * @returns GetIntegrationVersionForCSResponse
   */
  async getIntegrationVersionForCS(request: $_model.GetIntegrationVersionForCSRequest): Promise<$_model.GetIntegrationVersionForCSResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIntegrationVersionForCSWithOptions(request, headers, runtime);
  }

  /**
   * Query the instance in a specified environment
   * 
   * @remarks
   * Retrieve details of a Prometheus instance.
   * 
   * @param request - GetPrometheusInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPrometheusInstanceResponse
   */
  async getPrometheusInstanceWithOptions(prometheusInstanceId: string, request: $_model.GetPrometheusInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPrometheusInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["aliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPrometheusInstance",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-instances/${$dara.URL.percentEncode(prometheusInstanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPrometheusInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetPrometheusInstanceResponse({}));
  }

  /**
   * Query the instance in a specified environment
   * 
   * @remarks
   * Retrieve details of a Prometheus instance.
   * 
   * @param request - GetPrometheusInstanceRequest
   * @returns GetPrometheusInstanceResponse
   */
  async getPrometheusInstance(prometheusInstanceId: string, request: $_model.GetPrometheusInstanceRequest): Promise<$_model.GetPrometheusInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPrometheusInstanceWithOptions(prometheusInstanceId, request, headers, runtime);
  }

  /**
   * 查询指定环境实例
   * 
   * @param request - GetPrometheusUserSettingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPrometheusUserSettingResponse
   */
  async getPrometheusUserSettingWithOptions(request: $_model.GetPrometheusUserSettingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPrometheusUserSettingResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["aliyunLang"] = request.aliyunLang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPrometheusUserSetting",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-user-setting`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPrometheusUserSettingResponse>(await this.callApi(params, req, runtime), new $_model.GetPrometheusUserSettingResponse({}));
  }

  /**
   * 查询指定环境实例
   * 
   * @param request - GetPrometheusUserSettingRequest
   * @returns GetPrometheusUserSettingResponse
   */
  async getPrometheusUserSetting(request: $_model.GetPrometheusUserSettingRequest): Promise<$_model.GetPrometheusUserSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPrometheusUserSettingWithOptions(request, headers, runtime);
  }

  /**
   * Query a specified Prometheus view instance
   * 
   * @remarks
   * Query a specified Prometheus view instance.
   * 
   * @param request - GetPrometheusViewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPrometheusViewResponse
   */
  async getPrometheusViewWithOptions(prometheusViewId: string, request: $_model.GetPrometheusViewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPrometheusViewResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["aliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPrometheusView",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-views/${$dara.URL.percentEncode(prometheusViewId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPrometheusViewResponse>(await this.callApi(params, req, runtime), new $_model.GetPrometheusViewResponse({}));
  }

  /**
   * Query a specified Prometheus view instance
   * 
   * @remarks
   * Query a specified Prometheus view instance.
   * 
   * @param request - GetPrometheusViewRequest
   * @returns GetPrometheusViewResponse
   */
  async getPrometheusView(prometheusViewId: string, request: $_model.GetPrometheusViewRequest): Promise<$_model.GetPrometheusViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPrometheusViewWithOptions(prometheusViewId, request, headers, runtime);
  }

  /**
   * Query Service
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceResponse
   */
  async getServiceWithOptions(workspace: string, serviceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetService",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/service/${$dara.URL.percentEncode(serviceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceResponse({}));
  }

  /**
   * Query Service
   * @returns GetServiceResponse
   */
  async getService(workspace: string, serviceId: string): Promise<$_model.GetServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceWithOptions(workspace, serviceId, headers, runtime);
  }

  /**
   * Get Application Observability Instance
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceObservabilityResponse
   */
  async getServiceObservabilityWithOptions(workspace: string, type: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceObservabilityResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceObservability",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/service-observability/${$dara.URL.percentEncode(type)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceObservabilityResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceObservabilityResponse({}));
  }

  /**
   * Get Application Observability Instance
   * @returns GetServiceObservabilityResponse
   */
  async getServiceObservability(workspace: string, type: string): Promise<$_model.GetServiceObservabilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceObservabilityWithOptions(workspace, type, headers, runtime);
  }

  /**
   * 获取会话
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetThreadResponse
   */
  async getThreadWithOptions(name: string, threadId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetThreadResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetThread",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/digitalEmployee/${$dara.URL.percentEncode(name)}/thread/${$dara.URL.percentEncode(threadId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetThreadResponse>(await this.callApi(params, req, runtime), new $_model.GetThreadResponse({}));
  }

  /**
   * 获取会话
   * @returns GetThreadResponse
   */
  async getThread(name: string, threadId: string): Promise<$_model.GetThreadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getThreadWithOptions(name, threadId, headers, runtime);
  }

  /**
   * 获取会话数据
   * 
   * @param request - GetThreadDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetThreadDataResponse
   */
  async getThreadDataWithOptions(name: string, threadId: string, request: $_model.GetThreadDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetThreadDataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetThreadData",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/digitalEmployee/${$dara.URL.percentEncode(name)}/thread/${$dara.URL.percentEncode(threadId)}/data`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetThreadDataResponse>(await this.callApi(params, req, runtime), new $_model.GetThreadDataResponse({}));
  }

  /**
   * 获取会话数据
   * 
   * @param request - GetThreadDataRequest
   * @returns GetThreadDataResponse
   */
  async getThreadData(name: string, threadId: string, request: $_model.GetThreadDataRequest): Promise<$_model.GetThreadDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getThreadDataWithOptions(name, threadId, request, headers, runtime);
  }

  /**
   * Get Umodel configuration information
   * 
   * @remarks
   * Get Umodel configuration information
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUmodelResponse
   */
  async getUmodelWithOptions(workspace: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetUmodelResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUmodel",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/umodel`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUmodelResponse>(await this.callApi(params, req, runtime), new $_model.GetUmodelResponse({}));
  }

  /**
   * Get Umodel configuration information
   * 
   * @remarks
   * Get Umodel configuration information
   * @returns GetUmodelResponse
   */
  async getUmodel(workspace: string): Promise<$_model.GetUmodelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUmodelWithOptions(workspace, headers, runtime);
  }

  /**
   * 获取Umodel配置信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUmodelCommonSchemaRefResponse
   */
  async getUmodelCommonSchemaRefWithOptions(workspace: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetUmodelCommonSchemaRefResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUmodelCommonSchemaRef",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/umodel/common-schema-ref`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUmodelCommonSchemaRefResponse>(await this.callApi(params, req, runtime), new $_model.GetUmodelCommonSchemaRefResponse({}));
  }

  /**
   * 获取Umodel配置信息
   * @returns GetUmodelCommonSchemaRefResponse
   */
  async getUmodelCommonSchemaRef(workspace: string): Promise<$_model.GetUmodelCommonSchemaRefResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUmodelCommonSchemaRefWithOptions(workspace, headers, runtime);
  }

  /**
   * Retrieve associated Umodel graph data
   * 
   * @remarks
   * Find Umodel
   * 
   * @param request - GetUmodelDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUmodelDataResponse
   */
  async getUmodelDataWithOptions(workspace: string, request: $_model.GetUmodelDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetUmodelDataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.method)) {
      query["method"] = request.method;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUmodelData",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/umodel/graph`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUmodelDataResponse>(await this.callApi(params, req, runtime), new $_model.GetUmodelDataResponse({}));
  }

  /**
   * Retrieve associated Umodel graph data
   * 
   * @remarks
   * Find Umodel
   * 
   * @param request - GetUmodelDataRequest
   * @returns GetUmodelDataResponse
   */
  async getUmodelData(workspace: string, request: $_model.GetUmodelDataRequest): Promise<$_model.GetUmodelDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUmodelDataWithOptions(workspace, request, headers, runtime);
  }

  /**
   * Get Workspace
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkspaceResponse
   */
  async getWorkspaceWithOptions(workspaceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkspaceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkspace",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspaceName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkspaceResponse({}));
  }

  /**
   * Get Workspace
   * @returns GetWorkspaceResponse
   */
  async getWorkspace(workspaceName: string): Promise<$_model.GetWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWorkspaceWithOptions(workspaceName, headers, runtime);
  }

  /**
   * List of addon releases
   * 
   * @remarks
   * Query the list of access configurations
   * 
   * @param request - ListAddonReleasesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAddonReleasesResponse
   */
  async listAddonReleasesWithOptions(policyId: string, request: $_model.ListAddonReleasesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAddonReleasesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addonName)) {
      query["addonName"] = request.addonName;
    }

    if (!$dara.isNull(request.parentAddonReleaseId)) {
      query["parentAddonReleaseId"] = request.parentAddonReleaseId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAddonReleases",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies/${$dara.URL.percentEncode(policyId)}/addon-releases`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAddonReleasesResponse>(await this.callApi(params, req, runtime), new $_model.ListAddonReleasesResponse({}));
  }

  /**
   * List of addon releases
   * 
   * @remarks
   * Query the list of access configurations
   * 
   * @param request - ListAddonReleasesRequest
   * @returns ListAddonReleasesResponse
   */
  async listAddonReleases(policyId: string, request: $_model.ListAddonReleasesRequest): Promise<$_model.ListAddonReleasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAddonReleasesWithOptions(policyId, request, headers, runtime);
  }

  /**
   * 新版接入中心产品列表(分组)
   * 
   * @param request - ListAddonsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAddonsResponse
   */
  async listAddonsWithOptions(request: $_model.ListAddonsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAddonsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["aliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.category)) {
      query["category"] = request.category;
    }

    if (!$dara.isNull(request.regexp)) {
      query["regexp"] = request.regexp;
    }

    if (!$dara.isNull(request.search)) {
      query["search"] = request.search;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAddons",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/addons`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAddonsResponse>(await this.callApi(params, req, runtime), new $_model.ListAddonsResponse({}));
  }

  /**
   * 新版接入中心产品列表(分组)
   * 
   * @param request - ListAddonsRequest
   * @returns ListAddonsResponse
   */
  async listAddons(request: $_model.ListAddonsRequest): Promise<$_model.ListAddonsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAddonsWithOptions(request, headers, runtime);
  }

  /**
   * List Aggregation Task Groups
   * 
   * @param tmpReq - ListAggTaskGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAggTaskGroupsResponse
   */
  async listAggTaskGroupsWithOptions(instanceId: string, tmpReq: $_model.ListAggTaskGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAggTaskGroupsResponse> {
    tmpReq.validate();
    let request = new $_model.ListAggTaskGroupsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filterAggTaskGroupIds)) {
      query["filterAggTaskGroupIds"] = request.filterAggTaskGroupIds;
    }

    if (!$dara.isNull(request.filterAggTaskGroupNames)) {
      query["filterAggTaskGroupNames"] = request.filterAggTaskGroupNames;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.targetPrometheusId)) {
      query["targetPrometheusId"] = request.targetPrometheusId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAggTaskGroups",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-instances/${$dara.URL.percentEncode(instanceId)}/agg-task-groups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAggTaskGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListAggTaskGroupsResponse({}));
  }

  /**
   * List Aggregation Task Groups
   * 
   * @param request - ListAggTaskGroupsRequest
   * @returns ListAggTaskGroupsResponse
   */
  async listAggTaskGroups(instanceId: string, request: $_model.ListAggTaskGroupsRequest): Promise<$_model.ListAggTaskGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAggTaskGroupsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Query Alert Actions
   * 
   * @param tmpReq - ListAlertActionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlertActionsResponse
   */
  async listAlertActionsWithOptions(tmpReq: $_model.ListAlertActionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAlertActionsResponse> {
    tmpReq.validate();
    let request = new $_model.ListAlertActionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.alertActionIds)) {
      request.alertActionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.alertActionIds, "alertActionIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertActionIdsShrink)) {
      query["alertActionIds"] = request.alertActionIdsShrink;
    }

    if (!$dara.isNull(request.alertActionName)) {
      query["alertActionName"] = request.alertActionName;
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
      action: "ListAlertActions",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/alertActions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAlertActionsResponse>(await this.callApi(params, req, runtime), new $_model.ListAlertActionsResponse({}));
  }

  /**
   * Query Alert Actions
   * 
   * @param request - ListAlertActionsRequest
   * @returns ListAlertActionsResponse
   */
  async listAlertActions(request: $_model.ListAlertActionsRequest): Promise<$_model.ListAlertActionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAlertActionsWithOptions(request, headers, runtime);
  }

  /**
   * 查询Webhook
   * 
   * @param tmpReq - ListAlertWebhooksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlertWebhooksResponse
   */
  async listAlertWebhooksWithOptions(tmpReq: $_model.ListAlertWebhooksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAlertWebhooksResponse> {
    tmpReq.validate();
    let request = new $_model.ListAlertWebhooksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.webhookIds)) {
      request.webhookIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.webhookIds, "webhookIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.webhookIdsShrink)) {
      query["webhookIds"] = request.webhookIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAlertWebhooks",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/webhooks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAlertWebhooksResponse>(await this.callApi(params, req, runtime), new $_model.ListAlertWebhooksResponse({}));
  }

  /**
   * 查询Webhook
   * 
   * @param request - ListAlertWebhooksRequest
   * @returns ListAlertWebhooksResponse
   */
  async listAlertWebhooks(request: $_model.ListAlertWebhooksRequest): Promise<$_model.ListAlertWebhooksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAlertWebhooksWithOptions(request, headers, runtime);
  }

  /**
   * 业务链路列表
   * 
   * @param request - ListBizTracesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBizTracesResponse
   */
  async listBizTracesWithOptions(request: $_model.ListBizTracesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListBizTracesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.workspace)) {
      query["workspace"] = request.workspace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBizTraces",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/bizTraces`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBizTracesResponse>(await this.callApi(params, req, runtime), new $_model.ListBizTracesResponse({}));
  }

  /**
   * 业务链路列表
   * 
   * @param request - ListBizTracesRequest
   * @returns ListBizTracesResponse
   */
  async listBizTraces(request: $_model.ListBizTracesRequest): Promise<$_model.ListBizTracesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listBizTracesWithOptions(request, headers, runtime);
  }

  /**
   * 列出资源DigitalEmployee
   * 
   * @param request - ListDigitalEmployeesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDigitalEmployeesResponse
   */
  async listDigitalEmployeesWithOptions(request: $_model.ListDigitalEmployeesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDigitalEmployeesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.displayName)) {
      query["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.employeeType)) {
      query["employeeType"] = request.employeeType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDigitalEmployees",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/digital-employee`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDigitalEmployeesResponse>(await this.callApi(params, req, runtime), new $_model.ListDigitalEmployeesResponse({}));
  }

  /**
   * 列出资源DigitalEmployee
   * 
   * @param request - ListDigitalEmployeesRequest
   * @returns ListDigitalEmployeesResponse
   */
  async listDigitalEmployees(request: $_model.ListDigitalEmployeesRequest): Promise<$_model.ListDigitalEmployeesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDigitalEmployeesWithOptions(request, headers, runtime);
  }

  /**
   * Query Access Center Policy List Information
   * 
   * @remarks
   * Query integration list
   * 
   * @param tmpReq - ListIntegrationPoliciesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntegrationPoliciesResponse
   */
  async listIntegrationPoliciesWithOptions(tmpReq: $_model.ListIntegrationPoliciesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIntegrationPoliciesResponse> {
    tmpReq.validate();
    let request = new $_model.ListIntegrationPoliciesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addonName)) {
      query["addonName"] = request.addonName;
    }

    if (!$dara.isNull(request.bindResourceId)) {
      query["bindResourceId"] = request.bindResourceId;
    }

    if (!$dara.isNull(request.entityGroupIds)) {
      query["entityGroupIds"] = request.entityGroupIds;
    }

    if (!$dara.isNull(request.filterRegionIds)) {
      query["filterRegionIds"] = request.filterRegionIds;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.policyId)) {
      query["policyId"] = request.policyId;
    }

    if (!$dara.isNull(request.policyName)) {
      query["policyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      query["policyType"] = request.policyType;
    }

    if (!$dara.isNull(request.prometheusInstanceId)) {
      query["prometheusInstanceId"] = request.prometheusInstanceId;
    }

    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    if (!$dara.isNull(request.workspace)) {
      query["workspace"] = request.workspace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIntegrationPolicies",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIntegrationPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListIntegrationPoliciesResponse({}));
  }

  /**
   * Query Access Center Policy List Information
   * 
   * @remarks
   * Query integration list
   * 
   * @param request - ListIntegrationPoliciesRequest
   * @returns ListIntegrationPoliciesResponse
   */
  async listIntegrationPolicies(request: $_model.ListIntegrationPoliciesRequest): Promise<$_model.ListIntegrationPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIntegrationPoliciesWithOptions(request, headers, runtime);
  }

  /**
   * 策略addon列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntegrationPolicyAddonsResponse
   */
  async listIntegrationPolicyAddonsWithOptions(policyId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIntegrationPolicyAddonsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIntegrationPolicyAddons",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies/${$dara.URL.percentEncode(policyId)}/addons`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIntegrationPolicyAddonsResponse>(await this.callApi(params, req, runtime), new $_model.ListIntegrationPolicyAddonsResponse({}));
  }

  /**
   * 策略addon列表
   * @returns ListIntegrationPolicyAddonsResponse
   */
  async listIntegrationPolicyAddons(policyId: string): Promise<$_model.ListIntegrationPolicyAddonsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIntegrationPolicyAddonsWithOptions(policyId, headers, runtime);
  }

  /**
   * 获取接入中心策略的存储要求信息
   * 
   * @param request - ListIntegrationPolicyCollectorsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntegrationPolicyCollectorsResponse
   */
  async listIntegrationPolicyCollectorsWithOptions(policyId: string, request: $_model.ListIntegrationPolicyCollectorsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIntegrationPolicyCollectorsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addonReleaseName)) {
      query["addonReleaseName"] = request.addonReleaseName;
    }

    if (!$dara.isNull(request.collectorType)) {
      query["collectorType"] = request.collectorType;
    }

    if (!$dara.isNull(request.language)) {
      query["language"] = request.language;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIntegrationPolicyCollectors",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies/${$dara.URL.percentEncode(policyId)}/collectors`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIntegrationPolicyCollectorsResponse>(await this.callApi(params, req, runtime), new $_model.ListIntegrationPolicyCollectorsResponse({}));
  }

  /**
   * 获取接入中心策略的存储要求信息
   * 
   * @param request - ListIntegrationPolicyCollectorsRequest
   * @returns ListIntegrationPolicyCollectorsResponse
   */
  async listIntegrationPolicyCollectors(policyId: string, request: $_model.ListIntegrationPolicyCollectorsRequest): Promise<$_model.ListIntegrationPolicyCollectorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIntegrationPolicyCollectorsWithOptions(policyId, request, headers, runtime);
  }

  /**
   * Get storage requirement information for the access center policy
   * 
   * @param request - ListIntegrationPolicyCustomScrapeJobRulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntegrationPolicyCustomScrapeJobRulesResponse
   */
  async listIntegrationPolicyCustomScrapeJobRulesWithOptions(policyId: string, request: $_model.ListIntegrationPolicyCustomScrapeJobRulesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIntegrationPolicyCustomScrapeJobRulesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addonReleaseName)) {
      query["addonReleaseName"] = request.addonReleaseName;
    }

    if (!$dara.isNull(request.encryptYaml)) {
      query["encryptYaml"] = request.encryptYaml;
    }

    if (!$dara.isNull(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIntegrationPolicyCustomScrapeJobRules",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies/${$dara.URL.percentEncode(policyId)}/custom-scrape-job-rules`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIntegrationPolicyCustomScrapeJobRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListIntegrationPolicyCustomScrapeJobRulesResponse({}));
  }

  /**
   * Get storage requirement information for the access center policy
   * 
   * @param request - ListIntegrationPolicyCustomScrapeJobRulesRequest
   * @returns ListIntegrationPolicyCustomScrapeJobRulesResponse
   */
  async listIntegrationPolicyCustomScrapeJobRules(policyId: string, request: $_model.ListIntegrationPolicyCustomScrapeJobRulesRequest): Promise<$_model.ListIntegrationPolicyCustomScrapeJobRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIntegrationPolicyCustomScrapeJobRulesWithOptions(policyId, request, headers, runtime);
  }

  /**
   * Policy Dashboard List
   * 
   * @remarks
   * This article provides an example of querying the alarm template list. The result shows that there are 2 alarm templates in the list, which are `ECS_Template1` and `ECS_Template2`.
   * 
   * @param request - ListIntegrationPolicyDashboardsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntegrationPolicyDashboardsResponse
   */
  async listIntegrationPolicyDashboardsWithOptions(policyId: string, request: $_model.ListIntegrationPolicyDashboardsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIntegrationPolicyDashboardsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addonName)) {
      query["addonName"] = request.addonName;
    }

    if (!$dara.isNull(request.language)) {
      query["language"] = request.language;
    }

    if (!$dara.isNull(request.scene)) {
      query["scene"] = request.scene;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIntegrationPolicyDashboards",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies/${$dara.URL.percentEncode(policyId)}/dashboards`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIntegrationPolicyDashboardsResponse>(await this.callApi(params, req, runtime), new $_model.ListIntegrationPolicyDashboardsResponse({}));
  }

  /**
   * Policy Dashboard List
   * 
   * @remarks
   * This article provides an example of querying the alarm template list. The result shows that there are 2 alarm templates in the list, which are `ECS_Template1` and `ECS_Template2`.
   * 
   * @param request - ListIntegrationPolicyDashboardsRequest
   * @returns ListIntegrationPolicyDashboardsResponse
   */
  async listIntegrationPolicyDashboards(policyId: string, request: $_model.ListIntegrationPolicyDashboardsRequest): Promise<$_model.ListIntegrationPolicyDashboardsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIntegrationPolicyDashboardsWithOptions(policyId, request, headers, runtime);
  }

  /**
   * Get PodMonitor Resources of Access Center Policy
   * 
   * @remarks
   * This article provides an example to query the alarm template list. The result shows that there are 2 alarm templates in the alarm template list, which are `ECS_Template1` and `ECS_Template2`.
   * 
   * @param request - ListIntegrationPolicyPodMonitorsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntegrationPolicyPodMonitorsResponse
   */
  async listIntegrationPolicyPodMonitorsWithOptions(policyId: string, request: $_model.ListIntegrationPolicyPodMonitorsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIntegrationPolicyPodMonitorsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addonReleaseName)) {
      query["addonReleaseName"] = request.addonReleaseName;
    }

    if (!$dara.isNull(request.encryptYaml)) {
      query["encryptYaml"] = request.encryptYaml;
    }

    if (!$dara.isNull(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIntegrationPolicyPodMonitors",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies/${$dara.URL.percentEncode(policyId)}/pod-monitors`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIntegrationPolicyPodMonitorsResponse>(await this.callApi(params, req, runtime), new $_model.ListIntegrationPolicyPodMonitorsResponse({}));
  }

  /**
   * Get PodMonitor Resources of Access Center Policy
   * 
   * @remarks
   * This article provides an example to query the alarm template list. The result shows that there are 2 alarm templates in the alarm template list, which are `ECS_Template1` and `ECS_Template2`.
   * 
   * @param request - ListIntegrationPolicyPodMonitorsRequest
   * @returns ListIntegrationPolicyPodMonitorsResponse
   */
  async listIntegrationPolicyPodMonitors(policyId: string, request: $_model.ListIntegrationPolicyPodMonitorsRequest): Promise<$_model.ListIntegrationPolicyPodMonitorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIntegrationPolicyPodMonitorsWithOptions(policyId, request, headers, runtime);
  }

  /**
   * 获取接入中心策略的存储要求信息
   * 
   * @param request - ListIntegrationPolicyServiceMonitorsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntegrationPolicyServiceMonitorsResponse
   */
  async listIntegrationPolicyServiceMonitorsWithOptions(policyId: string, request: $_model.ListIntegrationPolicyServiceMonitorsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIntegrationPolicyServiceMonitorsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addonReleaseName)) {
      query["addonReleaseName"] = request.addonReleaseName;
    }

    if (!$dara.isNull(request.encryptYaml)) {
      query["encryptYaml"] = request.encryptYaml;
    }

    if (!$dara.isNull(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIntegrationPolicyServiceMonitors",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies/${$dara.URL.percentEncode(policyId)}/service-monitors`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIntegrationPolicyServiceMonitorsResponse>(await this.callApi(params, req, runtime), new $_model.ListIntegrationPolicyServiceMonitorsResponse({}));
  }

  /**
   * 获取接入中心策略的存储要求信息
   * 
   * @param request - ListIntegrationPolicyServiceMonitorsRequest
   * @returns ListIntegrationPolicyServiceMonitorsResponse
   */
  async listIntegrationPolicyServiceMonitors(policyId: string, request: $_model.ListIntegrationPolicyServiceMonitorsRequest): Promise<$_model.ListIntegrationPolicyServiceMonitorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIntegrationPolicyServiceMonitorsWithOptions(policyId, request, headers, runtime);
  }

  /**
   * Get Storage Requirements Information for Access Center Policy
   * 
   * @remarks
   * During the effective period of the policy, all alarms within the application group will no longer send notifications.
   *  
   * This article provides an example of creating a pause alarm notification policy `PauseNotify` for the application group `7301****`. This application group will pause alarms from `1622949300000` to `1623208500000` (Beijing Time `2021-06-06 11:15:00` to `2021-06-09 11:15:00`).
   * 
   * @param request - ListIntegrationPolicyStorageRequirementsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntegrationPolicyStorageRequirementsResponse
   */
  async listIntegrationPolicyStorageRequirementsWithOptions(policyId: string, request: $_model.ListIntegrationPolicyStorageRequirementsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIntegrationPolicyStorageRequirementsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addonName)) {
      query["addonName"] = request.addonName;
    }

    if (!$dara.isNull(request.addonReleaseName)) {
      query["addonReleaseName"] = request.addonReleaseName;
    }

    if (!$dara.isNull(request.storageType)) {
      query["storageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIntegrationPolicyStorageRequirements",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies/${$dara.URL.percentEncode(policyId)}/storage-requirements`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIntegrationPolicyStorageRequirementsResponse>(await this.callApi(params, req, runtime), new $_model.ListIntegrationPolicyStorageRequirementsResponse({}));
  }

  /**
   * Get Storage Requirements Information for Access Center Policy
   * 
   * @remarks
   * During the effective period of the policy, all alarms within the application group will no longer send notifications.
   *  
   * This article provides an example of creating a pause alarm notification policy `PauseNotify` for the application group `7301****`. This application group will pause alarms from `1622949300000` to `1623208500000` (Beijing Time `2021-06-06 11:15:00` to `2021-06-09 11:15:00`).
   * 
   * @param request - ListIntegrationPolicyStorageRequirementsRequest
   * @returns ListIntegrationPolicyStorageRequirementsResponse
   */
  async listIntegrationPolicyStorageRequirements(policyId: string, request: $_model.ListIntegrationPolicyStorageRequirementsRequest): Promise<$_model.ListIntegrationPolicyStorageRequirementsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIntegrationPolicyStorageRequirementsWithOptions(policyId, request, headers, runtime);
  }

  /**
   * Get Prometheus Instance Dashboard List
   * 
   * @remarks
   * Get the list of Prometheus instance dashboards.
   * 
   * @param request - ListPrometheusDashboardsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrometheusDashboardsResponse
   */
  async listPrometheusDashboardsWithOptions(prometheusInstanceId: string, request: $_model.ListPrometheusDashboardsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrometheusDashboardsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["aliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrometheusDashboards",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-instances/${$dara.URL.percentEncode(prometheusInstanceId)}/dashboards`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrometheusDashboardsResponse>(await this.callApi(params, req, runtime), new $_model.ListPrometheusDashboardsResponse({}));
  }

  /**
   * Get Prometheus Instance Dashboard List
   * 
   * @remarks
   * Get the list of Prometheus instance dashboards.
   * 
   * @param request - ListPrometheusDashboardsRequest
   * @returns ListPrometheusDashboardsResponse
   */
  async listPrometheusDashboards(prometheusInstanceId: string, request: $_model.ListPrometheusDashboardsRequest): Promise<$_model.ListPrometheusDashboardsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPrometheusDashboardsWithOptions(prometheusInstanceId, request, headers, runtime);
  }

  /**
   * Get the list of Prometheus instance information
   * 
   * @remarks
   * Get the list of Prometheus instances.
   * 
   * @param tmpReq - ListPrometheusInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrometheusInstancesResponse
   */
  async listPrometheusInstancesWithOptions(tmpReq: $_model.ListPrometheusInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrometheusInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.ListPrometheusInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filterRegionIds)) {
      query["filterRegionIds"] = request.filterRegionIds;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.prometheusInstanceIds)) {
      query["prometheusInstanceIds"] = request.prometheusInstanceIds;
    }

    if (!$dara.isNull(request.prometheusInstanceName)) {
      query["prometheusInstanceName"] = request.prometheusInstanceName;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    if (!$dara.isNull(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrometheusInstances",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrometheusInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListPrometheusInstancesResponse({}));
  }

  /**
   * Get the list of Prometheus instance information
   * 
   * @remarks
   * Get the list of Prometheus instances.
   * 
   * @param request - ListPrometheusInstancesRequest
   * @returns ListPrometheusInstancesResponse
   */
  async listPrometheusInstances(request: $_model.ListPrometheusInstancesRequest): Promise<$_model.ListPrometheusInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPrometheusInstancesWithOptions(request, headers, runtime);
  }

  /**
   * Retrieve a list of Prometheus view instance information
   * 
   * @remarks
   * Retrieve a list of Prometheus view instance information.
   * 
   * @param tmpReq - ListPrometheusViewsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrometheusViewsResponse
   */
  async listPrometheusViewsWithOptions(tmpReq: $_model.ListPrometheusViewsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrometheusViewsResponse> {
    tmpReq.validate();
    let request = new $_model.ListPrometheusViewsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filterRegionIds)) {
      query["filterRegionIds"] = request.filterRegionIds;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.prometheusViewIds)) {
      query["prometheusViewIds"] = request.prometheusViewIds;
    }

    if (!$dara.isNull(request.prometheusViewName)) {
      query["prometheusViewName"] = request.prometheusViewName;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    if (!$dara.isNull(request.version)) {
      query["version"] = request.version;
    }

    if (!$dara.isNull(request.workspace)) {
      query["workspace"] = request.workspace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrometheusViews",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-views`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrometheusViewsResponse>(await this.callApi(params, req, runtime), new $_model.ListPrometheusViewsResponse({}));
  }

  /**
   * Retrieve a list of Prometheus view instance information
   * 
   * @remarks
   * Retrieve a list of Prometheus view instance information.
   * 
   * @param request - ListPrometheusViewsRequest
   * @returns ListPrometheusViewsResponse
   */
  async listPrometheusViews(request: $_model.ListPrometheusViewsRequest): Promise<$_model.ListPrometheusViewsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPrometheusViewsWithOptions(request, headers, runtime);
  }

  /**
   * Get Prometheus Virtual Instance
   * 
   * @remarks
   * Used for creating a site monitoring task
   * 
   * @param request - ListPrometheusVirtualInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrometheusVirtualInstancesResponse
   */
  async listPrometheusVirtualInstancesWithOptions(request: $_model.ListPrometheusVirtualInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrometheusVirtualInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrometheusVirtualInstances",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/virtual-instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrometheusVirtualInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListPrometheusVirtualInstancesResponse({}));
  }

  /**
   * Get Prometheus Virtual Instance
   * 
   * @remarks
   * Used for creating a site monitoring task
   * 
   * @param request - ListPrometheusVirtualInstancesRequest
   * @returns ListPrometheusVirtualInstancesResponse
   */
  async listPrometheusVirtualInstances(request: $_model.ListPrometheusVirtualInstancesRequest): Promise<$_model.ListPrometheusVirtualInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPrometheusVirtualInstancesWithOptions(request, headers, runtime);
  }

  /**
   * List Resource Services
   * 
   * @param tmpReq - ListServicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServicesResponse
   */
  async listServicesWithOptions(workspace: string, tmpReq: $_model.ListServicesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListServicesResponse> {
    tmpReq.validate();
    let request = new $_model.ListServicesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["serviceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["serviceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServices",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/services`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServicesResponse>(await this.callApi(params, req, runtime), new $_model.ListServicesResponse({}));
  }

  /**
   * List Resource Services
   * 
   * @param request - ListServicesRequest
   * @returns ListServicesResponse
   */
  async listServices(workspace: string, request: $_model.ListServicesRequest): Promise<$_model.ListServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServicesWithOptions(workspace, request, headers, runtime);
  }

  /**
   * 查标签接口
   * 
   * @param tmpReq - ListTagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(tmpReq: $_model.ListTagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    tmpReq.validate();
    let request = new $_model.ListTagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceId)) {
      request.resourceIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceId, "resourceId", "json");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceIdShrink)) {
      query["resourceId"] = request.resourceIdShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/tags`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * 查标签接口
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * 列出会话
   * 
   * @param tmpReq - ListThreadsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListThreadsResponse
   */
  async listThreadsWithOptions(name: string, tmpReq: $_model.ListThreadsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListThreadsResponse> {
    tmpReq.validate();
    let request = new $_model.ListThreadsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "filter", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filterShrink)) {
      query["filter"] = request.filterShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.threadId)) {
      query["threadId"] = request.threadId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListThreads",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/digitalEmployee/${$dara.URL.percentEncode(name)}/threads`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListThreadsResponse>(await this.callApi(params, req, runtime), new $_model.ListThreadsResponse({}));
  }

  /**
   * 列出会话
   * 
   * @param request - ListThreadsRequest
   * @returns ListThreadsResponse
   */
  async listThreads(name: string, request: $_model.ListThreadsRequest): Promise<$_model.ListThreadsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listThreadsWithOptions(name, request, headers, runtime);
  }

  /**
   * Get Workspace List
   * 
   * @param tmpReq - ListWorkspacesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspacesResponse
   */
  async listWorkspacesWithOptions(tmpReq: $_model.ListWorkspacesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkspacesResponse> {
    tmpReq.validate();
    let request = new $_model.ListWorkspacesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.workspaceNameList)) {
      request.workspaceNameListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.workspaceNameList, "workspaceNameList", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.workspaceName)) {
      query["workspaceName"] = request.workspaceName;
    }

    if (!$dara.isNull(request.workspaceNameListShrink)) {
      query["workspaceNameList"] = request.workspaceNameListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkspaces",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkspacesResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkspacesResponse({}));
  }

  /**
   * Get Workspace List
   * 
   * @param request - ListWorkspacesRequest
   * @returns ListWorkspacesResponse
   */
  async listWorkspaces(request: $_model.ListWorkspacesRequest): Promise<$_model.ListWorkspacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkspacesWithOptions(request, headers, runtime);
  }

  /**
   * Create Workspace
   * 
   * @param request - PutWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutWorkspaceResponse
   */
  async putWorkspaceWithOptions(workspaceName: string, request: $_model.PutWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PutWorkspaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.slsProject)) {
      body["slsProject"] = request.slsProject;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutWorkspace",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspaceName)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.PutWorkspaceResponse({}));
  }

  /**
   * Create Workspace
   * 
   * @param request - PutWorkspaceRequest
   * @returns PutWorkspaceResponse
   */
  async putWorkspace(workspaceName: string, request: $_model.PutWorkspaceRequest): Promise<$_model.PutWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putWorkspaceWithOptions(workspaceName, request, headers, runtime);
  }

  /**
   * 打标签接口
   * 
   * @param request - TagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceId)) {
      body["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      body["tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/tags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * 打标签接口
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * 删标签接口
   * 
   * @param tmpReq - UntagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(tmpReq: $_model.UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    tmpReq.validate();
    let request = new $_model.UntagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceId)) {
      request.resourceIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceId, "resourceId", "json");
    }

    if (!$dara.isNull(tmpReq.tagKey)) {
      request.tagKeyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagKey, "tagKey", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.all)) {
      query["all"] = request.all;
    }

    if (!$dara.isNull(request.resourceIdShrink)) {
      query["resourceId"] = request.resourceIdShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKeyShrink)) {
      query["tagKey"] = request.tagKeyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/tags`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
  }

  /**
   * 删标签接口
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.untagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Upgrade Access Component
   * 
   * @param request - UpdateAddonReleaseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAddonReleaseResponse
   */
  async updateAddonReleaseWithOptions(releaseName: string, policyId: string, request: $_model.UpdateAddonReleaseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAddonReleaseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addonVersion)) {
      body["addonVersion"] = request.addonVersion;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["dryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.entityRules)) {
      body["entityRules"] = request.entityRules;
    }

    if (!$dara.isNull(request.values)) {
      body["values"] = request.values;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAddonRelease",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies/${$dara.URL.percentEncode(policyId)}/addon-releases/${$dara.URL.percentEncode(releaseName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAddonReleaseResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAddonReleaseResponse({}));
  }

  /**
   * Upgrade Access Component
   * 
   * @param request - UpdateAddonReleaseRequest
   * @returns UpdateAddonReleaseResponse
   */
  async updateAddonRelease(releaseName: string, policyId: string, request: $_model.UpdateAddonReleaseRequest): Promise<$_model.UpdateAddonReleaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAddonReleaseWithOptions(releaseName, policyId, request, headers, runtime);
  }

  /**
   * Apply Aggregation Task Group
   * 
   * @param request - UpdateAggTaskGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAggTaskGroupResponse
   */
  async updateAggTaskGroupWithOptions(instanceId: string, groupId: string, request: $_model.UpdateAggTaskGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAggTaskGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggTaskGroupConfig)) {
      body["aggTaskGroupConfig"] = request.aggTaskGroupConfig;
    }

    if (!$dara.isNull(request.aggTaskGroupConfigType)) {
      body["aggTaskGroupConfigType"] = request.aggTaskGroupConfigType;
    }

    if (!$dara.isNull(request.aggTaskGroupName)) {
      body["aggTaskGroupName"] = request.aggTaskGroupName;
    }

    if (!$dara.isNull(request.cronExpr)) {
      body["cronExpr"] = request.cronExpr;
    }

    if (!$dara.isNull(request.delay)) {
      body["delay"] = request.delay;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.fromTime)) {
      body["fromTime"] = request.fromTime;
    }

    if (!$dara.isNull(request.maxRetries)) {
      body["maxRetries"] = request.maxRetries;
    }

    if (!$dara.isNull(request.maxRunTimeInSeconds)) {
      body["maxRunTimeInSeconds"] = request.maxRunTimeInSeconds;
    }

    if (!$dara.isNull(request.precheckString)) {
      body["precheckString"] = request.precheckString;
    }

    if (!$dara.isNull(request.scheduleMode)) {
      body["scheduleMode"] = request.scheduleMode;
    }

    if (!$dara.isNull(request.scheduleTimeExpr)) {
      body["scheduleTimeExpr"] = request.scheduleTimeExpr;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.targetPrometheusId)) {
      body["targetPrometheusId"] = request.targetPrometheusId;
    }

    if (!$dara.isNull(request.toTime)) {
      body["toTime"] = request.toTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAggTaskGroup",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-instances/${$dara.URL.percentEncode(instanceId)}/agg-task-groups/${$dara.URL.percentEncode(groupId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAggTaskGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAggTaskGroupResponse({}));
  }

  /**
   * Apply Aggregation Task Group
   * 
   * @param request - UpdateAggTaskGroupRequest
   * @returns UpdateAggTaskGroupResponse
   */
  async updateAggTaskGroup(instanceId: string, groupId: string, request: $_model.UpdateAggTaskGroupRequest): Promise<$_model.UpdateAggTaskGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAggTaskGroupWithOptions(instanceId, groupId, request, headers, runtime);
  }

  /**
   * Update Aggregation Task Group Status
   * 
   * @param request - UpdateAggTaskGroupStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAggTaskGroupStatusResponse
   */
  async updateAggTaskGroupStatusWithOptions(instanceId: string, groupId: string, request: $_model.UpdateAggTaskGroupStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAggTaskGroupStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAggTaskGroupStatus",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-instances/${$dara.URL.percentEncode(instanceId)}/agg-task-groups/${$dara.URL.percentEncode(groupId)}/status`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAggTaskGroupStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAggTaskGroupStatusResponse({}));
  }

  /**
   * Update Aggregation Task Group Status
   * 
   * @param request - UpdateAggTaskGroupStatusRequest
   * @returns UpdateAggTaskGroupStatusResponse
   */
  async updateAggTaskGroupStatus(instanceId: string, groupId: string, request: $_model.UpdateAggTaskGroupStatusRequest): Promise<$_model.UpdateAggTaskGroupStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAggTaskGroupStatusWithOptions(instanceId, groupId, request, headers, runtime);
  }

  /**
   * 更新Webhook
   * 
   * @param request - UpdateAlertWebhookRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAlertWebhookResponse
   */
  async updateAlertWebhookWithOptions(webhookId: string, request: $_model.UpdateAlertWebhookRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAlertWebhookResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contentType)) {
      body["contentType"] = request.contentType;
    }

    if (!$dara.isNull(request.headers)) {
      body["headers"] = request.headers;
    }

    if (!$dara.isNull(request.lang)) {
      body["lang"] = request.lang;
    }

    if (!$dara.isNull(request.method)) {
      body["method"] = request.method;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.url)) {
      body["url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAlertWebhook",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/webhook/${$dara.URL.percentEncode(webhookId)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAlertWebhookResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAlertWebhookResponse({}));
  }

  /**
   * 更新Webhook
   * 
   * @param request - UpdateAlertWebhookRequest
   * @returns UpdateAlertWebhookResponse
   */
  async updateAlertWebhook(webhookId: string, request: $_model.UpdateAlertWebhookRequest): Promise<$_model.UpdateAlertWebhookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAlertWebhookWithOptions(webhookId, request, headers, runtime);
  }

  /**
   * 修改业务链路
   * 
   * @param request - UpdateBizTraceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBizTraceResponse
   */
  async updateBizTraceWithOptions(bizTraceId: string, request: $_model.UpdateBizTraceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBizTraceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.advancedConfig)) {
      body["advancedConfig"] = request.advancedConfig;
    }

    if (!$dara.isNull(request.bizTraceName)) {
      body["bizTraceName"] = request.bizTraceName;
    }

    if (!$dara.isNull(request.ruleConfig)) {
      body["ruleConfig"] = request.ruleConfig;
    }

    if (!$dara.isNull(request.workspace)) {
      body["workspace"] = request.workspace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBizTrace",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/bizTrace/${$dara.URL.percentEncode(bizTraceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBizTraceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBizTraceResponse({}));
  }

  /**
   * 修改业务链路
   * 
   * @param request - UpdateBizTraceRequest
   * @returns UpdateBizTraceResponse
   */
  async updateBizTrace(bizTraceId: string, request: $_model.UpdateBizTraceRequest): Promise<$_model.UpdateBizTraceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateBizTraceWithOptions(bizTraceId, request, headers, runtime);
  }

  /**
   * 更新UpdateDigitalEmployee
   * 
   * @param request - UpdateDigitalEmployeeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDigitalEmployeeResponse
   */
  async updateDigitalEmployeeWithOptions(name: string, request: $_model.UpdateDigitalEmployeeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDigitalEmployeeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.defaultRule)) {
      body["defaultRule"] = request.defaultRule;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.knowledges)) {
      body["knowledges"] = request.knowledges;
    }

    if (!$dara.isNull(request.roleArn)) {
      body["roleArn"] = request.roleArn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDigitalEmployee",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/digital-employee/${$dara.URL.percentEncode(name)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDigitalEmployeeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDigitalEmployeeResponse({}));
  }

  /**
   * 更新UpdateDigitalEmployee
   * 
   * @param request - UpdateDigitalEmployeeRequest
   * @returns UpdateDigitalEmployeeResponse
   */
  async updateDigitalEmployee(name: string, request: $_model.UpdateDigitalEmployeeRequest): Promise<$_model.UpdateDigitalEmployeeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDigitalEmployeeWithOptions(name, request, headers, runtime);
  }

  /**
   * Update the specified policy
   * 
   * @param request - UpdateIntegrationPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIntegrationPolicyResponse
   */
  async updateIntegrationPolicyWithOptions(integrationPolicyId: string, request: $_model.UpdateIntegrationPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIntegrationPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.feePackage)) {
      body["feePackage"] = request.feePackage;
    }

    if (!$dara.isNull(request.policyName)) {
      body["policyName"] = request.policyName;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIntegrationPolicy",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/integration-policies/${$dara.URL.percentEncode(integrationPolicyId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIntegrationPolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIntegrationPolicyResponse({}));
  }

  /**
   * Update the specified policy
   * 
   * @param request - UpdateIntegrationPolicyRequest
   * @returns UpdateIntegrationPolicyResponse
   */
  async updateIntegrationPolicy(integrationPolicyId: string, request: $_model.UpdateIntegrationPolicyRequest): Promise<$_model.UpdateIntegrationPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateIntegrationPolicyWithOptions(integrationPolicyId, request, headers, runtime);
  }

  /**
   * 更新通知策略
   * 
   * @param request - UpdateNotifyStrategyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNotifyStrategyResponse
   */
  async updateNotifyStrategyWithOptions(notifyStrategyId: string, request: $_model.UpdateNotifyStrategyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNotifyStrategyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspace)) {
      query["workspace"] = request.workspace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNotifyStrategy",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/notifyStrategies/${$dara.URL.percentEncode(notifyStrategyId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNotifyStrategyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNotifyStrategyResponse({}));
  }

  /**
   * 更新通知策略
   * 
   * @param request - UpdateNotifyStrategyRequest
   * @returns UpdateNotifyStrategyResponse
   */
  async updateNotifyStrategy(notifyStrategyId: string, request: $_model.UpdateNotifyStrategyRequest): Promise<$_model.UpdateNotifyStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateNotifyStrategyWithOptions(notifyStrategyId, request, headers, runtime);
  }

  /**
   * Update Prometheus instance information
   * 
   * @remarks
   * Update Prometheus instance information.
   * 
   * @param request - UpdatePrometheusInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePrometheusInstanceResponse
   */
  async updatePrometheusInstanceWithOptions(prometheusInstanceId: string, request: $_model.UpdatePrometheusInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePrometheusInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.archiveDuration)) {
      body["archiveDuration"] = request.archiveDuration;
    }

    if (!$dara.isNull(request.authFreeReadPolicy)) {
      body["authFreeReadPolicy"] = request.authFreeReadPolicy;
    }

    if (!$dara.isNull(request.authFreeWritePolicy)) {
      body["authFreeWritePolicy"] = request.authFreeWritePolicy;
    }

    if (!$dara.isNull(request.enableAuthFreeRead)) {
      body["enableAuthFreeRead"] = request.enableAuthFreeRead;
    }

    if (!$dara.isNull(request.enableAuthFreeWrite)) {
      body["enableAuthFreeWrite"] = request.enableAuthFreeWrite;
    }

    if (!$dara.isNull(request.enableAuthToken)) {
      body["enableAuthToken"] = request.enableAuthToken;
    }

    if (!$dara.isNull(request.paymentType)) {
      body["paymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.prometheusInstanceName)) {
      body["prometheusInstanceName"] = request.prometheusInstanceName;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.storageDuration)) {
      body["storageDuration"] = request.storageDuration;
    }

    if (!$dara.isNull(request.workspace)) {
      body["workspace"] = request.workspace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePrometheusInstance",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-instances/${$dara.URL.percentEncode(prometheusInstanceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePrometheusInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePrometheusInstanceResponse({}));
  }

  /**
   * Update Prometheus instance information
   * 
   * @remarks
   * Update Prometheus instance information.
   * 
   * @param request - UpdatePrometheusInstanceRequest
   * @returns UpdatePrometheusInstanceResponse
   */
  async updatePrometheusInstance(prometheusInstanceId: string, request: $_model.UpdatePrometheusInstanceRequest): Promise<$_model.UpdatePrometheusInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePrometheusInstanceWithOptions(prometheusInstanceId, request, headers, runtime);
  }

  /**
   * 更新Prom实例信息
   * 
   * @param request - UpdatePrometheusUserSettingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePrometheusUserSettingResponse
   */
  async updatePrometheusUserSettingWithOptions(settingKey: string, request: $_model.UpdatePrometheusUserSettingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePrometheusUserSettingResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.settingValue)) {
      query["settingValue"] = request.settingValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePrometheusUserSetting",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-user-setting/${$dara.URL.percentEncode(settingKey)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePrometheusUserSettingResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePrometheusUserSettingResponse({}));
  }

  /**
   * 更新Prom实例信息
   * 
   * @param request - UpdatePrometheusUserSettingRequest
   * @returns UpdatePrometheusUserSettingResponse
   */
  async updatePrometheusUserSetting(settingKey: string, request: $_model.UpdatePrometheusUserSettingRequest): Promise<$_model.UpdatePrometheusUserSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePrometheusUserSettingWithOptions(settingKey, request, headers, runtime);
  }

  /**
   * Update Prometheus view instance information
   * 
   * @remarks
   * Update Prometheus view instance information.
   * 
   * @param request - UpdatePrometheusViewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePrometheusViewResponse
   */
  async updatePrometheusViewWithOptions(prometheusViewId: string, request: $_model.UpdatePrometheusViewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePrometheusViewResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authFreeReadPolicy)) {
      body["authFreeReadPolicy"] = request.authFreeReadPolicy;
    }

    if (!$dara.isNull(request.enableAuthFreeRead)) {
      body["enableAuthFreeRead"] = request.enableAuthFreeRead;
    }

    if (!$dara.isNull(request.enableAuthToken)) {
      body["enableAuthToken"] = request.enableAuthToken;
    }

    if (!$dara.isNull(request.prometheusInstances)) {
      body["prometheusInstances"] = request.prometheusInstances;
    }

    if (!$dara.isNull(request.prometheusViewName)) {
      body["prometheusViewName"] = request.prometheusViewName;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.workspace)) {
      body["workspace"] = request.workspace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePrometheusView",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-views/${$dara.URL.percentEncode(prometheusViewId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePrometheusViewResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePrometheusViewResponse({}));
  }

  /**
   * Update Prometheus view instance information
   * 
   * @remarks
   * Update Prometheus view instance information.
   * 
   * @param request - UpdatePrometheusViewRequest
   * @returns UpdatePrometheusViewResponse
   */
  async updatePrometheusView(prometheusViewId: string, request: $_model.UpdatePrometheusViewRequest): Promise<$_model.UpdatePrometheusViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePrometheusViewWithOptions(prometheusViewId, request, headers, runtime);
  }

  /**
   * Update Service
   * 
   * @param request - UpdateServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceResponse
   */
  async updateServiceWithOptions(workspace: string, serviceId: string, request: $_model.UpdateServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attributes)) {
      body["attributes"] = request.attributes;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.serviceStatus)) {
      body["serviceStatus"] = request.serviceStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateService",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/service/${$dara.URL.percentEncode(serviceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateServiceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateServiceResponse({}));
  }

  /**
   * Update Service
   * 
   * @param request - UpdateServiceRequest
   * @returns UpdateServiceResponse
   */
  async updateService(workspace: string, serviceId: string, request: $_model.UpdateServiceRequest): Promise<$_model.UpdateServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceWithOptions(workspace, serviceId, request, headers, runtime);
  }

  /**
   * 更新订阅
   * 
   * @param request - UpdateSubscriptionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSubscriptionResponse
   */
  async updateSubscriptionWithOptions(subscriptionId: string, request: $_model.UpdateSubscriptionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSubscriptionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspace)) {
      query["workspace"] = request.workspace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSubscription",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/subscriptions/${$dara.URL.percentEncode(subscriptionId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSubscriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSubscriptionResponse({}));
  }

  /**
   * 更新订阅
   * 
   * @param request - UpdateSubscriptionRequest
   * @returns UpdateSubscriptionResponse
   */
  async updateSubscription(subscriptionId: string, request: $_model.UpdateSubscriptionRequest): Promise<$_model.UpdateSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSubscriptionWithOptions(subscriptionId, request, headers, runtime);
  }

  /**
   * 更新会话
   * 
   * @param request - UpdateThreadRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateThreadResponse
   */
  async updateThreadWithOptions(name: string, threadId: string, request: $_model.UpdateThreadRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateThreadResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.title)) {
      body["title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateThread",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/digitalEmployee/${$dara.URL.percentEncode(name)}/thread/${$dara.URL.percentEncode(threadId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateThreadResponse>(await this.callApi(params, req, runtime), new $_model.UpdateThreadResponse({}));
  }

  /**
   * 更新会话
   * 
   * @param request - UpdateThreadRequest
   * @returns UpdateThreadResponse
   */
  async updateThread(name: string, threadId: string, request: $_model.UpdateThreadRequest): Promise<$_model.UpdateThreadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateThreadWithOptions(name, threadId, request, headers, runtime);
  }

  /**
   * Update Umodel configuration information
   * 
   * @remarks
   * Update Umodel configuration information
   * 
   * @param request - UpdateUmodelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUmodelResponse
   */
  async updateUmodelWithOptions(workspace: string, request: $_model.UpdateUmodelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUmodelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUmodel",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/umodel`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUmodelResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUmodelResponse({}));
  }

  /**
   * Update Umodel configuration information
   * 
   * @remarks
   * Update Umodel configuration information
   * 
   * @param request - UpdateUmodelRequest
   * @returns UpdateUmodelResponse
   */
  async updateUmodel(workspace: string, request: $_model.UpdateUmodelRequest): Promise<$_model.UpdateUmodelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateUmodelWithOptions(workspace, request, headers, runtime);
  }

  /**
   * 更新Umodel配置信息
   * 
   * @param request - UpsertUmodelCommonSchemaRefRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpsertUmodelCommonSchemaRefResponse
   */
  async upsertUmodelCommonSchemaRefWithOptions(workspace: string, request: $_model.UpsertUmodelCommonSchemaRefRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpsertUmodelCommonSchemaRefResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.group)) {
      query["group"] = request.group;
    }

    if (!$dara.isNull(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpsertUmodelCommonSchemaRef",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/umodel/common-schema-ref`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpsertUmodelCommonSchemaRefResponse>(await this.callApi(params, req, runtime), new $_model.UpsertUmodelCommonSchemaRefResponse({}));
  }

  /**
   * 更新Umodel配置信息
   * 
   * @param request - UpsertUmodelCommonSchemaRefRequest
   * @returns UpsertUmodelCommonSchemaRefResponse
   */
  async upsertUmodelCommonSchemaRef(workspace: string, request: $_model.UpsertUmodelCommonSchemaRefRequest): Promise<$_model.UpsertUmodelCommonSchemaRefResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upsertUmodelCommonSchemaRefWithOptions(workspace, request, headers, runtime);
  }

  /**
   * Write Umodel Elements
   * 
   * @param request - UpsertUmodelDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpsertUmodelDataResponse
   */
  async upsertUmodelDataWithOptions(workspace: string, request: $_model.UpsertUmodelDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpsertUmodelDataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.method)) {
      query["method"] = request.method;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.elements)) {
      body["elements"] = request.elements;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpsertUmodelData",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/umodel/data`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpsertUmodelDataResponse>(await this.callApi(params, req, runtime), new $_model.UpsertUmodelDataResponse({}));
  }

  /**
   * Write Umodel Elements
   * 
   * @param request - UpsertUmodelDataRequest
   * @returns UpsertUmodelDataResponse
   */
  async upsertUmodelData(workspace: string, request: $_model.UpsertUmodelDataRequest): Promise<$_model.UpsertUmodelDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upsertUmodelDataWithOptions(workspace, request, headers, runtime);
  }

}
