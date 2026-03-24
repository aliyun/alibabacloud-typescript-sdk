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
   * Add new facts, messages, or metadata to a user’s memory store. The AddMemories endpoint accepts raw text or conversation turns and commits them asynchronously, preparing the memories for subsequent search, retrieval, and graph queries.
   * 
   * @param request - AddMemoriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMemoriesResponse
   */
  async addMemoriesWithOptions(workspace: string, memoryStoreName: string, request: $_model.AddMemoriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddMemoriesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      body["agentId"] = request.agentId;
    }

    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.asyncMode)) {
      body["asyncMode"] = request.asyncMode;
    }

    if (!$dara.isNull(request.customInstructions)) {
      body["customInstructions"] = request.customInstructions;
    }

    if (!$dara.isNull(request.infer)) {
      body["infer"] = request.infer;
    }

    if (!$dara.isNull(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!$dara.isNull(request.metadata)) {
      body["metadata"] = request.metadata;
    }

    if (!$dara.isNull(request.runId)) {
      body["runId"] = request.runId;
    }

    if (!$dara.isNull(request.timestamp)) {
      body["timestamp"] = request.timestamp;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddMemories",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/memorystore/${$dara.URL.percentEncode(memoryStoreName)}/memory`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddMemoriesResponse>(await this.callApi(params, req, runtime), new $_model.AddMemoriesResponse({}));
  }

  /**
   * Add new facts, messages, or metadata to a user’s memory store. The AddMemories endpoint accepts raw text or conversation turns and commits them asynchronously, preparing the memories for subsequent search, retrieval, and graph queries.
   * 
   * @param request - AddMemoriesRequest
   * @returns AddMemoriesResponse
   */
  async addMemories(workspace: string, memoryStoreName: string, request: $_model.AddMemoriesRequest): Promise<$_model.AddMemoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addMemoriesWithOptions(workspace, memoryStoreName, request, headers, runtime);
  }

  /**
   * Changes the resource group of a resource.
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
   * Changes the resource group of a resource.
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
   * Installs an add-on.
   * 
   * @remarks
   * Creates a release for an add-on.
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
   * Installs an add-on.
   * 
   * @remarks
   * Creates a release for an add-on.
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
   * Creates an aggregation task group.
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
   * Creates an aggregation task group.
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
   * Create a webhook
   * 
   * @remarks
   * Creates an alert webhook to use as a notification recipient.
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

    if (!$dara.isNull(request.workspace)) {
      body["workspace"] = request.workspace;
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
   * Create a webhook
   * 
   * @remarks
   * Creates an alert webhook to use as a notification recipient.
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
   * Creates a business trace.
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
   * Creates a business trace.
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
   * Create a chat session.
   * 
   * @remarks
   * Start a session.
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
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.CreateChatResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.CreateChatResponse({}));
      }

    }
  }

  /**
   * Create a chat session.
   * 
   * @remarks
   * Start a session.
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
   * Create a chat session.
   * 
   * @remarks
   * Start a session.
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
   * Creates a cloud resource.
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
   * Creates a cloud resource.
   * @returns CreateCloudResourceResponse
   */
  async createCloudResource(): Promise<$_model.CreateCloudResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCloudResourceWithOptions(headers, runtime);
  }

  /**
   * Creates a digital employee.
   * 
   * @remarks
   * Creates a digital employee.
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

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.roleArn)) {
      body["roleArn"] = request.roleArn;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
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
   * Creates a digital employee.
   * 
   * @remarks
   * Creates a digital employee.
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
   * Creates a skill.
   * 
   * @remarks
   * Creates a skill.
   * 
   * @param request - CreateDigitalEmployeeSkillRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDigitalEmployeeSkillResponse
   */
  async createDigitalEmployeeSkillWithOptions(name: string, request: $_model.CreateDigitalEmployeeSkillRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDigitalEmployeeSkillResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.enable)) {
      body["enable"] = request.enable;
    }

    if (!$dara.isNull(request.files)) {
      body["files"] = request.files;
    }

    if (!$dara.isNull(request.remark)) {
      body["remark"] = request.remark;
    }

    if (!$dara.isNull(request.skillName)) {
      body["skillName"] = request.skillName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDigitalEmployeeSkill",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/digitalEmployee/${$dara.URL.percentEncode(name)}/skill`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDigitalEmployeeSkillResponse>(await this.callApi(params, req, runtime), new $_model.CreateDigitalEmployeeSkillResponse({}));
  }

  /**
   * Creates a skill.
   * 
   * @remarks
   * Creates a skill.
   * 
   * @param request - CreateDigitalEmployeeSkillRequest
   * @returns CreateDigitalEmployeeSkillResponse
   */
  async createDigitalEmployeeSkill(name: string, request: $_model.CreateDigitalEmployeeSkillRequest): Promise<$_model.CreateDigitalEmployeeSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDigitalEmployeeSkillWithOptions(name, request, headers, runtime);
  }

  /**
   * Creates storage for an EntityStore.
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
   * Creates storage for an EntityStore.
   * @returns CreateEntityStoreResponse
   */
  async createEntityStore(workspaceName: string): Promise<$_model.CreateEntityStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEntityStoreWithOptions(workspaceName, headers, runtime);
  }

  /**
   * Creates an Integration Center policy.
   * 
   * @remarks
   * This operation creates an event integration.
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
   * Creates an Integration Center policy.
   * 
   * @remarks
   * This operation creates an event integration.
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
   * Creates a Memory Store.
   * 
   * @param request - CreateMemoryStoreRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMemoryStoreResponse
   */
  async createMemoryStoreWithOptions(workspace: string, request: $_model.CreateMemoryStoreRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMemoryStoreResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customExtractionStrategies)) {
      body["customExtractionStrategies"] = request.customExtractionStrategies;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.extractionStrategies)) {
      body["extractionStrategies"] = request.extractionStrategies;
    }

    if (!$dara.isNull(request.memoryStoreName)) {
      body["memoryStoreName"] = request.memoryStoreName;
    }

    if (!$dara.isNull(request.shortTermTtl)) {
      body["shortTermTtl"] = request.shortTermTtl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMemoryStore",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/memorystore`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMemoryStoreResponse>(await this.callApi(params, req, runtime), new $_model.CreateMemoryStoreResponse({}));
  }

  /**
   * Creates a Memory Store.
   * 
   * @param request - CreateMemoryStoreRequest
   * @returns CreateMemoryStoreResponse
   */
  async createMemoryStore(workspace: string, request: $_model.CreateMemoryStoreRequest): Promise<$_model.CreateMemoryStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMemoryStoreWithOptions(workspace, request, headers, runtime);
  }

  /**
   * Creates a Prometheus instance for monitoring.
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
   * Creates a Prometheus instance for monitoring.
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
   * Creates a Prometheus view.
   * 
   * @remarks
   * 用于创建一个站点监控任务
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
   * Creates a Prometheus view.
   * 
   * @remarks
   * 用于创建一个站点监控任务
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
   * Creates a virtual instance for Prometheus monitoring.
   * 
   * @remarks
   * Creates a virtual instance for Prometheus monitoring.
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
   * Creates a virtual instance for Prometheus monitoring.
   * 
   * @remarks
   * Creates a virtual instance for Prometheus monitoring.
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
   * Creates a service for application observability.
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
   * Creates a service for application observability.
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
   * Sets up application observability and prepares the required resources for integration.
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
   * Sets up application observability and prepares the required resources for integration.
   * @returns CreateServiceObservabilityResponse
   */
  async createServiceObservability(workspace: string, type: string): Promise<$_model.CreateServiceObservabilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceObservabilityWithOptions(workspace, type, headers, runtime);
  }

  /**
   * Creates a session.
   * 
   * @remarks
   * Creates a session.
   * 
   * @param request - CreateThreadRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateThreadResponse
   */
  async createThreadWithOptions(name: string, request: $_model.CreateThreadRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateThreadResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attributes)) {
      body["attributes"] = request.attributes;
    }

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
   * Creates a session.
   * 
   * @remarks
   * Creates a session.
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
   * To share a console page or embed it into a third-party system without requiring a password, you can call the CreateTicket operation to generate a ticket. You can then use the ticket to create a password-free link.
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
   * To share a console page or embed it into a third-party system without requiring a password, you can call the CreateTicket operation to generate a ticket. You can then use the ticket to create a password-free link.
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
   * Creates a Umodel configuration.
   * 
   * @remarks
   * Creates a Umodel configuration in a specified workspace.
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
   * Creates a Umodel configuration.
   * 
   * @remarks
   * Creates a Umodel configuration in a specified workspace.
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
   * Deletes add-on release information.
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
   * Deletes add-on release information.
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
   * Deletes an aggregation task group.
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
   * Deletes an aggregation task group.
   * @returns DeleteAggTaskGroupResponse
   */
  async deleteAggTaskGroup(instanceId: string, groupId: string): Promise<$_model.DeleteAggTaskGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAggTaskGroupWithOptions(instanceId, groupId, headers, runtime);
  }

  /**
   * Deletes one or more alert webhooks.
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
   * Deletes one or more alert webhooks.
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
   * Deletes a business trace.
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
   * Deletes a business trace.
   * @returns DeleteBizTraceResponse
   */
  async deleteBizTrace(bizTraceId: string): Promise<$_model.DeleteBizTraceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteBizTraceWithOptions(bizTraceId, headers, runtime);
  }

  /**
   * Deletes a cloud resource.
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
   * Deletes a cloud resource.
   * @returns DeleteCloudResourceResponse
   */
  async deleteCloudResource(): Promise<$_model.DeleteCloudResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCloudResourceWithOptions(headers, runtime);
  }

  /**
   * Deletes a digital employee.
   * 
   * @remarks
   * Deletes a digital employee.
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
   * Deletes a digital employee.
   * 
   * @remarks
   * Deletes a digital employee.
   * @returns DeleteDigitalEmployeeResponse
   */
  async deleteDigitalEmployee(name: string): Promise<$_model.DeleteDigitalEmployeeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDigitalEmployeeWithOptions(name, headers, runtime);
  }

  /**
   * Delete a skill.
   * 
   * @remarks
   * Delete a skill.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDigitalEmployeeSkillResponse
   */
  async deleteDigitalEmployeeSkillWithOptions(name: string, skillName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDigitalEmployeeSkillResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDigitalEmployeeSkill",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/digitalEmployee/${$dara.URL.percentEncode(name)}/skill/${$dara.URL.percentEncode(skillName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDigitalEmployeeSkillResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDigitalEmployeeSkillResponse({}));
  }

  /**
   * Delete a skill.
   * 
   * @remarks
   * Delete a skill.
   * @returns DeleteDigitalEmployeeSkillResponse
   */
  async deleteDigitalEmployeeSkill(name: string, skillName: string): Promise<$_model.DeleteDigitalEmployeeSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDigitalEmployeeSkillWithOptions(name, skillName, headers, runtime);
  }

  /**
   * Deletes an EntityStore.
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
   * Deletes an EntityStore.
   * @returns DeleteEntityStoreResponse
   */
  async deleteEntityStore(workspaceName: string): Promise<$_model.DeleteEntityStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEntityStoreWithOptions(workspaceName, headers, runtime);
  }

  /**
   * Deletes an Integration Center policy.
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
   * Deletes an Integration Center policy.
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
   * Deletes memories based on filter properties. You must set at least one filter property. If no filter properties are set, a validation error is returned.
   * 
   * @param request - DeleteMemoriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMemoriesResponse
   */
  async deleteMemoriesWithOptions(workspace: string, memoryStoreName: string, request: $_model.DeleteMemoriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMemoriesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      query["agentId"] = request.agentId;
    }

    if (!$dara.isNull(request.appId)) {
      query["appId"] = request.appId;
    }

    if (!$dara.isNull(request.runId)) {
      query["runId"] = request.runId;
    }

    if (!$dara.isNull(request.userId)) {
      query["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMemories",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/memorystore/${$dara.URL.percentEncode(memoryStoreName)}/memory`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMemoriesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMemoriesResponse({}));
  }

  /**
   * Deletes memories based on filter properties. You must set at least one filter property. If no filter properties are set, a validation error is returned.
   * 
   * @param request - DeleteMemoriesRequest
   * @returns DeleteMemoriesResponse
   */
  async deleteMemories(workspace: string, memoryStoreName: string, request: $_model.DeleteMemoriesRequest): Promise<$_model.DeleteMemoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMemoriesWithOptions(workspace, memoryStoreName, request, headers, runtime);
  }

  /**
   * Deletes a memory.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMemoryResponse
   */
  async deleteMemoryWithOptions(workspace: string, memoryStoreName: string, memoryId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMemoryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMemory",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/memorystore/${$dara.URL.percentEncode(memoryStoreName)}/memory/${$dara.URL.percentEncode(memoryId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMemoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMemoryResponse({}));
  }

  /**
   * Deletes a memory.
   * @returns DeleteMemoryResponse
   */
  async deleteMemory(workspace: string, memoryStoreName: string, memoryId: string): Promise<$_model.DeleteMemoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMemoryWithOptions(workspace, memoryStoreName, memoryId, headers, runtime);
  }

  /**
   * Deletes a Memory Store.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMemoryStoreResponse
   */
  async deleteMemoryStoreWithOptions(workspace: string, memoryStoreName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMemoryStoreResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMemoryStore",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/memorystore/${$dara.URL.percentEncode(memoryStoreName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMemoryStoreResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMemoryStoreResponse({}));
  }

  /**
   * Deletes a Memory Store.
   * @returns DeleteMemoryStoreResponse
   */
  async deleteMemoryStore(workspace: string, memoryStoreName: string): Promise<$_model.DeleteMemoryStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMemoryStoreWithOptions(workspace, memoryStoreName, headers, runtime);
  }

  /**
   * Deletes a Prometheus instance.
   * 
   * @remarks
   * Deletes a Prometheus instance.
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
   * Deletes a Prometheus instance.
   * 
   * @remarks
   * Deletes a Prometheus instance.
   * @returns DeletePrometheusInstanceResponse
   */
  async deletePrometheusInstance(prometheusInstanceId: string): Promise<$_model.DeletePrometheusInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePrometheusInstanceWithOptions(prometheusInstanceId, headers, runtime);
  }

  /**
   * Deletes a Prometheus view instance.
   * 
   * @remarks
   * Deletes a Prometheus view instance.
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
   * Deletes a Prometheus view instance.
   * 
   * @remarks
   * Deletes a Prometheus view instance.
   * @returns DeletePrometheusViewResponse
   */
  async deletePrometheusView(prometheusViewId: string): Promise<$_model.DeletePrometheusViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePrometheusViewWithOptions(prometheusViewId, headers, runtime);
  }

  /**
   * Deletes an Application Monitoring service.
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
   * Deletes an Application Monitoring service.
   * @returns DeleteServiceResponse
   */
  async deleteService(workspace: string, serviceId: string): Promise<$_model.DeleteServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceWithOptions(workspace, serviceId, headers, runtime);
  }

  /**
   * Deletes a session.
   * 
   * @remarks
   * Deletes a session.
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
   * Deletes a session.
   * 
   * @remarks
   * Deletes a session.
   * @returns DeleteThreadResponse
   */
  async deleteThread(name: string, threadId: string): Promise<$_model.DeleteThreadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteThreadWithOptions(name, threadId, headers, runtime);
  }

  /**
   * Deletes a Umodel configuration.
   * 
   * @remarks
   * Deletes a Umodel from a specified workspace.
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
   * Deletes a Umodel configuration.
   * 
   * @remarks
   * Deletes a Umodel from a specified workspace.
   * @returns DeleteUmodelResponse
   */
  async deleteUmodel(workspace: string): Promise<$_model.DeleteUmodelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteUmodelWithOptions(workspace, headers, runtime);
  }

  /**
   * Deletes a public Umodel schema reference.
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
   * Deletes a public Umodel schema reference.
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
   * Deletes Umodel elements.
   * 
   * @remarks
   * Deletes Umodel data from a specified workspace.
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
   * Deletes Umodel elements.
   * 
   * @remarks
   * Deletes Umodel data from a specified workspace.
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
   * Deletes a workspace.
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
   * Deletes a workspace.
   * @returns DeleteWorkspaceResponse
   */
  async deleteWorkspace(workspaceName: string): Promise<$_model.DeleteWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWorkspaceWithOptions(workspaceName, headers, runtime);
  }

  /**
   * Retrieves a list of regions.
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
   * Retrieves a list of regions.
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
   * Retrieves the details of an add-on.
   * 
   * @remarks
   * Retrieves the details of an add-on.
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
   * Retrieves the details of an add-on.
   * 
   * @remarks
   * Retrieves the details of an add-on.
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
   * Details of an add-on schema.
   * 
   * @remarks
   * This topic provides an example of how to modify version `1` of alert template `123456`. In this example, the alert level is set to `Critical`, the statistical method is set to `Average`, the comparison operator for the alert threshold is set to `GreaterThanOrEqualToThreshold`, the alert threshold is set to `90`, and the number of retries is set to `3`. The response indicates that the alert template was successfully modified.
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
   * Details of an add-on schema.
   * 
   * @remarks
   * This topic provides an example of how to modify version `1` of alert template `123456`. In this example, the alert level is set to `Critical`, the statistical method is set to `Average`, the comparison operator for the alert threshold is set to `GreaterThanOrEqualToThreshold`, the alert threshold is set to `90`, and the number of retries is set to `3`. The response indicates that the alert template was successfully modified.
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
   * Queries the details and accessed state of an add-on release.
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
   * Queries the details and accessed state of an add-on release.
   * @returns GetAddonReleaseResponse
   */
  async getAddonRelease(releaseName: string, policyId: string): Promise<$_model.GetAddonReleaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAddonReleaseWithOptions(releaseName, policyId, headers, runtime);
  }

  /**
   * The details of an add-on schema.
   * 
   * @remarks
   * Retrieves the schema of an add-on.
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
   * The details of an add-on schema.
   * 
   * @remarks
   * Retrieves the schema of an add-on.
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
   * Queries the details of an aggregation task group.
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
   * Queries the details of an aggregation task group.
   * @returns GetAggTaskGroupResponse
   */
  async getAggTaskGroup(instanceId: string, groupId: string): Promise<$_model.GetAggTaskGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAggTaskGroupWithOptions(instanceId, groupId, headers, runtime);
  }

  /**
   * Queries a business trace.
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
   * Queries a business trace.
   * @returns GetBizTraceResponse
   */
  async getBizTrace(bizTraceId: string): Promise<$_model.GetBizTraceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBizTraceWithOptions(bizTraceId, headers, runtime);
  }

  /**
   * Retrieves information about cloud resources.
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
   * Retrieves information about cloud resources.
   * @returns GetCloudResourceResponse
   */
  async getCloudResource(): Promise<$_model.GetCloudResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCloudResourceWithOptions(headers, runtime);
  }

  /**
   * Queries data from the Cloud Resource Center.
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
   * Queries data from the Cloud Resource Center.
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
   * Checks whether a Prometheus service or product is activated.
   * 
   * @remarks
   * The product and service request parameters cannot be specified in the same request.
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
   * Checks whether a Prometheus service or product is activated.
   * 
   * @remarks
   * The product and service request parameters cannot be specified in the same request.
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
   * Retrieves information about a digital employee.
   * 
   * @remarks
   * Retrieves information about a digital employee.
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
   * Retrieves information about a digital employee.
   * 
   * @remarks
   * Retrieves information about a digital employee.
   * @returns GetDigitalEmployeeResponse
   */
  async getDigitalEmployee(name: string): Promise<$_model.GetDigitalEmployeeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDigitalEmployeeWithOptions(name, headers, runtime);
  }

  /**
   * Retrieves skill details
   * 
   * @remarks
   * Retrieves a skill
   * 
   * @param request - GetDigitalEmployeeSkillRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDigitalEmployeeSkillResponse
   */
  async getDigitalEmployeeSkillWithOptions(name: string, skillName: string, request: $_model.GetDigitalEmployeeSkillRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDigitalEmployeeSkillResponse> {
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
      action: "GetDigitalEmployeeSkill",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/digitalEmployee/${$dara.URL.percentEncode(name)}/skill/${$dara.URL.percentEncode(skillName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDigitalEmployeeSkillResponse>(await this.callApi(params, req, runtime), new $_model.GetDigitalEmployeeSkillResponse({}));
  }

  /**
   * Retrieves skill details
   * 
   * @remarks
   * Retrieves a skill
   * 
   * @param request - GetDigitalEmployeeSkillRequest
   * @returns GetDigitalEmployeeSkillResponse
   */
  async getDigitalEmployeeSkill(name: string, skillName: string, request: $_model.GetDigitalEmployeeSkillRequest): Promise<$_model.GetDigitalEmployeeSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDigitalEmployeeSkillWithOptions(name, skillName, request, headers, runtime);
  }

  /**
   * Retrieves the storage information of an EntityStore.
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
   * Retrieves the storage information of an EntityStore.
   * @returns GetEntityStoreResponse
   */
  async getEntityStore(workspaceName: string): Promise<$_model.GetEntityStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEntityStoreWithOptions(workspaceName, headers, runtime);
  }

  /**
   * Queries the entity and relational data in a specified workspace to retrieve entity data for a specific time range.
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
   * Queries the entity and relational data in a specified workspace to retrieve entity data for a specific time range.
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
   * Retrieves the details of an Integration Center policy.
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
   * Retrieves the details of an Integration Center policy.
   * @returns GetIntegrationPolicyResponse
   */
  async getIntegrationPolicy(policyId: string): Promise<$_model.GetIntegrationPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIntegrationPolicyWithOptions(policyId, headers, runtime);
  }

  /**
   * Queries the Integration Center version for a container cluster.
   * 
   * @remarks
   * This operation is not available in the API Explorer.
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
   * Queries the Integration Center version for a container cluster.
   * 
   * @remarks
   * This operation is not available in the API Explorer.
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
   * Retrieves all memories.
   * 
   * @param request - GetMemoriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMemoriesResponse
   */
  async getMemoriesWithOptions(workspace: string, memoryStoreName: string, request: $_model.GetMemoriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMemoriesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      body["agentId"] = request.agentId;
    }

    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.page)) {
      body["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.runId)) {
      body["runId"] = request.runId;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMemories",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/memorystore/${$dara.URL.percentEncode(memoryStoreName)}/memory/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMemoriesResponse>(await this.callApi(params, req, runtime), new $_model.GetMemoriesResponse({}));
  }

  /**
   * Retrieves all memories.
   * 
   * @param request - GetMemoriesRequest
   * @returns GetMemoriesResponse
   */
  async getMemories(workspace: string, memoryStoreName: string, request: $_model.GetMemoriesRequest): Promise<$_model.GetMemoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMemoriesWithOptions(workspace, memoryStoreName, request, headers, runtime);
  }

  /**
   * Retrieves a single memory.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMemoryResponse
   */
  async getMemoryWithOptions(workspace: string, memoryStoreName: string, memoryId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMemoryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMemory",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/memorystore/${$dara.URL.percentEncode(memoryStoreName)}/memory/${$dara.URL.percentEncode(memoryId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMemoryResponse>(await this.callApi(params, req, runtime), new $_model.GetMemoryResponse({}));
  }

  /**
   * Retrieves a single memory.
   * @returns GetMemoryResponse
   */
  async getMemory(workspace: string, memoryStoreName: string, memoryId: string): Promise<$_model.GetMemoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMemoryWithOptions(workspace, memoryStoreName, memoryId, headers, runtime);
  }

  /**
   * Retrieve memory history.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMemoryHistoryResponse
   */
  async getMemoryHistoryWithOptions(workspace: string, memoryStoreName: string, memoryId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMemoryHistoryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMemoryHistory",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/memorystore/${$dara.URL.percentEncode(memoryStoreName)}/memory/${$dara.URL.percentEncode(memoryId)}/history`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMemoryHistoryResponse>(await this.callApi(params, req, runtime), new $_model.GetMemoryHistoryResponse({}));
  }

  /**
   * Retrieve memory history.
   * @returns GetMemoryHistoryResponse
   */
  async getMemoryHistory(workspace: string, memoryStoreName: string, memoryId: string): Promise<$_model.GetMemoryHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMemoryHistoryWithOptions(workspace, memoryStoreName, memoryId, headers, runtime);
  }

  /**
   * Query a memory store.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMemoryStoreResponse
   */
  async getMemoryStoreWithOptions(workspace: string, memoryStoreName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMemoryStoreResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMemoryStore",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/memorystore/${$dara.URL.percentEncode(memoryStoreName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMemoryStoreResponse>(await this.callApi(params, req, runtime), new $_model.GetMemoryStoreResponse({}));
  }

  /**
   * Query a memory store.
   * @returns GetMemoryStoreResponse
   */
  async getMemoryStore(workspace: string, memoryStoreName: string): Promise<$_model.GetMemoryStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMemoryStoreWithOptions(workspace, memoryStoreName, headers, runtime);
  }

  /**
   * Queries the details of a specified Prometheus instance.
   * 
   * @remarks
   * Retrieves the details of a Prometheus instance.
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
   * Queries the details of a specified Prometheus instance.
   * 
   * @remarks
   * Retrieves the details of a Prometheus instance.
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
   * Retrieves the user settings for Prometheus.
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
   * Retrieves the user settings for Prometheus.
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
   * Retrieves the details of a specified Prometheus view instance.
   * 
   * @remarks
   * Retrieves the details of a specified Prometheus view instance.
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
   * Retrieves the details of a specified Prometheus view instance.
   * 
   * @remarks
   * Retrieves the details of a specified Prometheus view instance.
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
   * Retrieves the details of an Application Monitoring service.
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
   * Retrieves the details of an Application Monitoring service.
   * @returns GetServiceResponse
   */
  async getService(workspace: string, serviceId: string): Promise<$_model.GetServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceWithOptions(workspace, serviceId, headers, runtime);
  }

  /**
   * Retrieves an application observability instance.
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
   * Retrieves an application observability instance.
   * @returns GetServiceObservabilityResponse
   */
  async getServiceObservability(workspace: string, type: string): Promise<$_model.GetServiceObservabilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceObservabilityWithOptions(workspace, type, headers, runtime);
  }

  /**
   * Retrieves a session.
   * 
   * @remarks
   * Retrieves a session.
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
   * Retrieves a session.
   * 
   * @remarks
   * Retrieves a session.
   * @returns GetThreadResponse
   */
  async getThread(name: string, threadId: string): Promise<$_model.GetThreadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getThreadWithOptions(name, threadId, headers, runtime);
  }

  /**
   * Retrieves session data.
   * 
   * @remarks
   * Retrieves session data.
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
   * Retrieves session data.
   * 
   * @remarks
   * Retrieves session data.
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
   * Retrieves the configuration of a Umodel.
   * 
   * @remarks
   * Retrieves the configuration of a Umodel.
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
   * Retrieves the configuration of a Umodel.
   * 
   * @remarks
   * Retrieves the configuration of a Umodel.
   * @returns GetUmodelResponse
   */
  async getUmodel(workspace: string): Promise<$_model.GetUmodelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUmodelWithOptions(workspace, headers, runtime);
  }

  /**
   * Retrieves the referenced common Umodel schema.
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
   * Retrieves the referenced common Umodel schema.
   * @returns GetUmodelCommonSchemaRefResponse
   */
  async getUmodelCommonSchemaRef(workspace: string): Promise<$_model.GetUmodelCommonSchemaRefResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUmodelCommonSchemaRefWithOptions(workspace, headers, runtime);
  }

  /**
   * Retrieves graph data associated with a Umodel.
   * 
   * @remarks
   * This operation retrieves the graph data associated with a Umodel.
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
   * Retrieves graph data associated with a Umodel.
   * 
   * @remarks
   * This operation retrieves the graph data associated with a Umodel.
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
   * Retrieves a workspace.
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
   * Retrieves a workspace.
   * @returns GetWorkspaceResponse
   */
  async getWorkspace(workspaceName: string): Promise<$_model.GetWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWorkspaceWithOptions(workspaceName, headers, runtime);
  }

  /**
   * Retrieves the releases for an add-on.
   * 
   * @remarks
   * This operation retrieves a list of releases for an add-on.
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
   * Retrieves the releases for an add-on.
   * 
   * @remarks
   * This operation retrieves a list of releases for an add-on.
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
   * Lists the products in the new Integration Center by group.
   * 
   * @remarks
   * Creates a site monitoring job.
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
   * Lists the products in the new Integration Center by group.
   * 
   * @remarks
   * Creates a site monitoring job.
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
   * Queries a list of aggregation task groups.
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
   * Queries a list of aggregation task groups.
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
   * Queries alert action integrations.
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
   * Queries alert action integrations.
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
   * Query webhooks
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

    if (!$dara.isNull(request.workspace)) {
      query["workspace"] = request.workspace;
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
   * Query webhooks
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
   * Lists business traces.
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
   * Lists business traces.
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
   * Lists skill versions.
   * 
   * @remarks
   * Lists historical versions of a skill.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDigitalEmployeeSkillVersionsResponse
   */
  async listDigitalEmployeeSkillVersionsWithOptions(name: string, skillName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDigitalEmployeeSkillVersionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDigitalEmployeeSkillVersions",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/digitalEmployee/${$dara.URL.percentEncode(name)}/skill/${$dara.URL.percentEncode(skillName)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDigitalEmployeeSkillVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListDigitalEmployeeSkillVersionsResponse({}));
  }

  /**
   * Lists skill versions.
   * 
   * @remarks
   * Lists historical versions of a skill.
   * @returns ListDigitalEmployeeSkillVersionsResponse
   */
  async listDigitalEmployeeSkillVersions(name: string, skillName: string): Promise<$_model.ListDigitalEmployeeSkillVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDigitalEmployeeSkillVersionsWithOptions(name, skillName, headers, runtime);
  }

  /**
   * List the skills.
   * 
   * @remarks
   * Lists digital employee skills.
   * 
   * @param request - ListDigitalEmployeeSkillsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDigitalEmployeeSkillsResponse
   */
  async listDigitalEmployeeSkillsWithOptions(name: string, request: $_model.ListDigitalEmployeeSkillsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDigitalEmployeeSkillsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.skillName)) {
      query["skillName"] = request.skillName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDigitalEmployeeSkills",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/digitalEmployee/${$dara.URL.percentEncode(name)}/skills`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDigitalEmployeeSkillsResponse>(await this.callApi(params, req, runtime), new $_model.ListDigitalEmployeeSkillsResponse({}));
  }

  /**
   * List the skills.
   * 
   * @remarks
   * Lists digital employee skills.
   * 
   * @param request - ListDigitalEmployeeSkillsRequest
   * @returns ListDigitalEmployeeSkillsResponse
   */
  async listDigitalEmployeeSkills(name: string, request: $_model.ListDigitalEmployeeSkillsRequest): Promise<$_model.ListDigitalEmployeeSkillsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDigitalEmployeeSkillsWithOptions(name, request, headers, runtime);
  }

  /**
   * Lists digital employees.
   * 
   * @remarks
   * Lists digital employees.
   * 
   * @param tmpReq - ListDigitalEmployeesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDigitalEmployeesResponse
   */
  async listDigitalEmployeesWithOptions(tmpReq: $_model.ListDigitalEmployeesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDigitalEmployeesResponse> {
    tmpReq.validate();
    let request = new $_model.ListDigitalEmployeesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["tags"] = request.tagsShrink;
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
   * Lists digital employees.
   * 
   * @remarks
   * Lists digital employees.
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
   * Queries a list of policies in the Integration Center.
   * 
   * @remarks
   * Queries a list of integrations.
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
   * Queries a list of policies in the Integration Center.
   * 
   * @remarks
   * Queries a list of integrations.
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
   * Lists the add-ons that are installed for a specified policy.
   * 
   * @remarks
   * Lists the add-ons that are installed for a specified policy.
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
   * Lists the add-ons that are installed for a specified policy.
   * 
   * @remarks
   * Lists the add-ons that are installed for a specified policy.
   * @returns ListIntegrationPolicyAddonsResponse
   */
  async listIntegrationPolicyAddons(policyId: string): Promise<$_model.ListIntegrationPolicyAddonsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIntegrationPolicyAddonsWithOptions(policyId, headers, runtime);
  }

  /**
   * Queries information about collectors for an Integration Center policy.
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
   * Queries information about collectors for an Integration Center policy.
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
   * Lists the custom service discovery rules for an Integration Center policy.
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
   * Lists the custom service discovery rules for an Integration Center policy.
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
   * Queries a list of integration policy dashboards.
   * 
   * @remarks
   * This topic provides an example of how to query a list of integration policy dashboards.
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
   * Queries a list of integration policy dashboards.
   * 
   * @remarks
   * This topic provides an example of how to query a list of integration policy dashboards.
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
   * Lists the PodMonitor resources for an Integration Center policy.
   * 
   * @remarks
   * This topic provides an example of how to list the PodMonitor resources for an Integration Center policy.
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
   * Lists the PodMonitor resources for an Integration Center policy.
   * 
   * @remarks
   * This topic provides an example of how to list the PodMonitor resources for an Integration Center policy.
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
   * Retrieves the ServiceMonitor information for an Integration Center policy.
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
   * Retrieves the ServiceMonitor information for an Integration Center policy.
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
   * Lists the storage requirements for an Integration Center policy.
   * 
   * @remarks
   * When a policy is active, alert notifications are not sent for alerts that occur in the application group.
   * This topic provides an example of creating a policy named `PauseNotify`. This policy pauses alert notifications for application group `7301****` from `1622949300000` to `1623208500000` (from `2021-06-06 11:15:00` to `2021-06-09 11:15:00` UTC+8).
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
   * Lists the storage requirements for an Integration Center policy.
   * 
   * @remarks
   * When a policy is active, alert notifications are not sent for alerts that occur in the application group.
   * This topic provides an example of creating a policy named `PauseNotify`. This policy pauses alert notifications for application group `7301****` from `1622949300000` to `1623208500000` (from `2021-06-06 11:15:00` to `2021-06-09 11:15:00` UTC+8).
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
   * Retrieves a list of memory stores.
   * 
   * @param request - ListMemoryStoresRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMemoryStoresResponse
   */
  async listMemoryStoresWithOptions(workspace: string, request: $_model.ListMemoryStoresRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMemoryStoresResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.memoryStoreName)) {
      query["memoryStoreName"] = request.memoryStoreName;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMemoryStores",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/memorystore`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMemoryStoresResponse>(await this.callApi(params, req, runtime), new $_model.ListMemoryStoresResponse({}));
  }

  /**
   * Retrieves a list of memory stores.
   * 
   * @param request - ListMemoryStoresRequest
   * @returns ListMemoryStoresResponse
   */
  async listMemoryStores(workspace: string, request: $_model.ListMemoryStoresRequest): Promise<$_model.ListMemoryStoresResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMemoryStoresWithOptions(workspace, request, headers, runtime);
  }

  /**
   * Retrieves a list of dashboards for a Prometheus instance.
   * 
   * @remarks
   * Retrieves a list of dashboards for a Prometheus instance.
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
   * Retrieves a list of dashboards for a Prometheus instance.
   * 
   * @remarks
   * Retrieves a list of dashboards for a Prometheus instance.
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
   * Lists Prometheus instances.
   * 
   * @remarks
   * Lists Prometheus instances.
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

    if (!$dara.isNull(request.workspace)) {
      query["workspace"] = request.workspace;
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
   * Lists Prometheus instances.
   * 
   * @remarks
   * Lists Prometheus instances.
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
   * Lists the Prometheus view instances.
   * 
   * @remarks
   * Lists the Prometheus view instances.
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
   * Lists the Prometheus view instances.
   * 
   * @remarks
   * Lists the Prometheus view instances.
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
   * Queries a list of application observability services.
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
   * Queries a list of application observability services.
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
   * Queries the tags attached to resources.
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
   * Queries the tags attached to resources.
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
   * Lists sessions.
   * 
   * @remarks
   * This operation lists sessions.
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
   * Lists sessions.
   * 
   * @remarks
   * This operation lists sessions.
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
   * Retrieves a list of workspaces.
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
   * Retrieves a list of workspaces.
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
   * Creates a workspace.
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
   * Creates a workspace.
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
   * Search memories using query conditions and filters.
   * 
   * @param request - SearchMemoriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchMemoriesResponse
   */
  async searchMemoriesWithOptions(workspace: string, memoryStoreName: string, request: $_model.SearchMemoriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SearchMemoriesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      body["agentId"] = request.agentId;
    }

    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.metadata)) {
      body["metadata"] = request.metadata;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    if (!$dara.isNull(request.rerank)) {
      body["rerank"] = request.rerank;
    }

    if (!$dara.isNull(request.runId)) {
      body["runId"] = request.runId;
    }

    if (!$dara.isNull(request.topK)) {
      body["topK"] = request.topK;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchMemories",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/memorystore/${$dara.URL.percentEncode(memoryStoreName)}/memory/search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchMemoriesResponse>(await this.callApi(params, req, runtime), new $_model.SearchMemoriesResponse({}));
  }

  /**
   * Search memories using query conditions and filters.
   * 
   * @param request - SearchMemoriesRequest
   * @returns SearchMemoriesResponse
   */
  async searchMemories(workspace: string, memoryStoreName: string, request: $_model.SearchMemoriesRequest): Promise<$_model.SearchMemoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchMemoriesWithOptions(workspace, memoryStoreName, request, headers, runtime);
  }

  /**
   * Adds tags to one or more resources.
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
   * Adds tags to one or more resources.
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
   * Deletes a tag
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
   * Deletes a tag
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
   * Upgrades an add-on component.
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
   * Upgrades an add-on component.
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
   * Updates an aggregation task group.
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
   * Updates an aggregation task group.
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
   * Updates the status of an aggregation task group.
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
   * Updates the status of an aggregation task group.
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
   * Updates a webhook.
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
   * Updates a webhook.
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
   * Modifies a business trace.
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
   * Modifies a business trace.
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
   * Updates a digital employee.
   * 
   * @remarks
   * Updates a digital employee.
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
   * Updates a digital employee.
   * 
   * @remarks
   * Updates a digital employee.
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
   * Updates a skill.
   * 
   * @remarks
   * Updates a skill.
   * 
   * @param request - UpdateDigitalEmployeeSkillRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDigitalEmployeeSkillResponse
   */
  async updateDigitalEmployeeSkillWithOptions(name: string, skillName: string, request: $_model.UpdateDigitalEmployeeSkillRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDigitalEmployeeSkillResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.enable)) {
      body["enable"] = request.enable;
    }

    if (!$dara.isNull(request.files)) {
      body["files"] = request.files;
    }

    if (!$dara.isNull(request.remark)) {
      body["remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDigitalEmployeeSkill",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/digitalEmployee/${$dara.URL.percentEncode(name)}/skill/${$dara.URL.percentEncode(skillName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDigitalEmployeeSkillResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDigitalEmployeeSkillResponse({}));
  }

  /**
   * Updates a skill.
   * 
   * @remarks
   * Updates a skill.
   * 
   * @param request - UpdateDigitalEmployeeSkillRequest
   * @returns UpdateDigitalEmployeeSkillResponse
   */
  async updateDigitalEmployeeSkill(name: string, skillName: string, request: $_model.UpdateDigitalEmployeeSkillRequest): Promise<$_model.UpdateDigitalEmployeeSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDigitalEmployeeSkillWithOptions(name, skillName, request, headers, runtime);
  }

  /**
   * Updates the specified policy.
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
   * Updates the specified policy.
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
   * Updates a specific Memory.
   * 
   * @param request - UpdateMemoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMemoryResponse
   */
  async updateMemoryWithOptions(workspace: string, memoryStoreName: string, memoryId: string, request: $_model.UpdateMemoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMemoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.metadata)) {
      body["metadata"] = request.metadata;
    }

    if (!$dara.isNull(request.text)) {
      body["text"] = request.text;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMemory",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/memorystore/${$dara.URL.percentEncode(memoryStoreName)}/memory/${$dara.URL.percentEncode(memoryId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMemoryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMemoryResponse({}));
  }

  /**
   * Updates a specific Memory.
   * 
   * @param request - UpdateMemoryRequest
   * @returns UpdateMemoryResponse
   */
  async updateMemory(workspace: string, memoryStoreName: string, memoryId: string, request: $_model.UpdateMemoryRequest): Promise<$_model.UpdateMemoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMemoryWithOptions(workspace, memoryStoreName, memoryId, request, headers, runtime);
  }

  /**
   * Modify a memory store.
   * 
   * @param request - UpdateMemoryStoreRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMemoryStoreResponse
   */
  async updateMemoryStoreWithOptions(workspace: string, memoryStoreName: string, request: $_model.UpdateMemoryStoreRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMemoryStoreResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customExtractionStrategies)) {
      body["customExtractionStrategies"] = request.customExtractionStrategies;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.extractionStrategies)) {
      body["extractionStrategies"] = request.extractionStrategies;
    }

    if (!$dara.isNull(request.shortTermTtl)) {
      body["shortTermTtl"] = request.shortTermTtl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMemoryStore",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/memorystore/${$dara.URL.percentEncode(memoryStoreName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMemoryStoreResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMemoryStoreResponse({}));
  }

  /**
   * Modify a memory store.
   * 
   * @param request - UpdateMemoryStoreRequest
   * @returns UpdateMemoryStoreResponse
   */
  async updateMemoryStore(workspace: string, memoryStoreName: string, request: $_model.UpdateMemoryStoreRequest): Promise<$_model.UpdateMemoryStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMemoryStoreWithOptions(workspace, memoryStoreName, request, headers, runtime);
  }

  /**
   * Updates a notification policy.
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
   * Updates a notification policy.
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
   * Updates the information of a Prometheus instance.
   * 
   * @remarks
   * This topic describes how to update a Prometheus instance.
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
   * Updates the information of a Prometheus instance.
   * 
   * @remarks
   * This topic describes how to update a Prometheus instance.
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
   * Updates the user settings for Prometheus. Note: If you set `settingKey` to `financeUsageRegion`, Prometheus usage data is sent to Simple Log Service (SLS) in the specified region. Historical usage data will no longer be available in the Prometheus console.
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
   * Updates the user settings for Prometheus. Note: If you set `settingKey` to `financeUsageRegion`, Prometheus usage data is sent to Simple Log Service (SLS) in the specified region. Historical usage data will no longer be available in the Prometheus console.
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
   * Updates the information about a Prometheus view instance.
   * 
   * @remarks
   * Updates the information about a Prometheus view instance.
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
   * Updates the information about a Prometheus view instance.
   * 
   * @remarks
   * Updates the information about a Prometheus view instance.
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
   * Updates an application observability service.
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
   * Updates an application observability service.
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
   * Updates a subscription.
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
   * Updates a subscription.
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
   * Updates a session.
   * 
   * @remarks
   * Updates a session.
   * 
   * @param request - UpdateThreadRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateThreadResponse
   */
  async updateThreadWithOptions(name: string, threadId: string, request: $_model.UpdateThreadRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateThreadResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attributes)) {
      body["attributes"] = request.attributes;
    }

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
   * Updates a session.
   * 
   * @remarks
   * Updates a session.
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
   * Updates the configuration of a Umodel.
   * 
   * @remarks
   * Updates the configuration of a Umodel.
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
   * Updates the configuration of a Umodel.
   * 
   * @remarks
   * Updates the configuration of a Umodel.
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
   * Upserts a common Umodel schema reference.
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
   * Upserts a common Umodel schema reference.
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
   * Inserts or updates Umodel elements.
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
   * Inserts or updates Umodel elements.
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
