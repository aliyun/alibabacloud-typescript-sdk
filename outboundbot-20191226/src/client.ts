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
    this._endpoint = this.getEndpoint("outboundbot", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建外呼任务
   * 
   * @param request - AssignJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssignJobsResponse
   */
  async assignJobsWithOptions(request: $_model.AssignJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssignJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isAsynchrony)) {
      query["IsAsynchrony"] = request.isAsynchrony;
    }

    if (!$dara.isNull(request.jobDataParsingTaskId)) {
      query["JobDataParsingTaskId"] = request.jobDataParsingTaskId;
    }

    if (!$dara.isNull(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    if (!$dara.isNull(request.jobsJson)) {
      query["JobsJson"] = request.jobsJson;
    }

    if (!$dara.isNull(request.rosterType)) {
      query["RosterType"] = request.rosterType;
    }

    if (!$dara.isNull(request.strategyJson)) {
      query["StrategyJson"] = request.strategyJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssignJobs",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssignJobsResponse>(await this.callApi(params, req, runtime), new $_model.AssignJobsResponse({}));
  }

  /**
   * 创建外呼任务
   * 
   * @param request - AssignJobsRequest
   * @returns AssignJobsResponse
   */
  async assignJobs(request: $_model.AssignJobsRequest): Promise<$_model.AssignJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assignJobsWithOptions(request, runtime);
  }

  /**
   * 异步创建外呼任务
   * 
   * @param tmpReq - AssignJobsAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssignJobsAsyncResponse
   */
  async assignJobsAsyncWithOptions(tmpReq: $_model.AssignJobsAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssignJobsAsyncResponse> {
    tmpReq.validate();
    let request = new $_model.AssignJobsAsyncShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.callingNumber)) {
      request.callingNumberShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.callingNumber, "CallingNumber", "json");
    }

    if (!$dara.isNull(tmpReq.jobsJson)) {
      request.jobsJsonShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobsJson, "JobsJson", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.callingNumberShrink)) {
      body["CallingNumber"] = request.callingNumberShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobGroupId)) {
      body["JobGroupId"] = request.jobGroupId;
    }

    if (!$dara.isNull(request.jobsJsonShrink)) {
      body["JobsJson"] = request.jobsJsonShrink;
    }

    if (!$dara.isNull(request.strategyJson)) {
      body["StrategyJson"] = request.strategyJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssignJobsAsync",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssignJobsAsyncResponse>(await this.callApi(params, req, runtime), new $_model.AssignJobsAsyncResponse({}));
  }

  /**
   * 异步创建外呼任务
   * 
   * @param request - AssignJobsAsyncRequest
   * @returns AssignJobsAsyncResponse
   */
  async assignJobsAsync(request: $_model.AssignJobsAsyncRequest): Promise<$_model.AssignJobsAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assignJobsAsyncWithOptions(request, runtime);
  }

  /**
   * @param request - CancelJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelJobsResponse
   */
  async cancelJobsWithOptions(request: $_model.CancelJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.jobReferenceId)) {
      query["JobReferenceId"] = request.jobReferenceId;
    }

    if (!$dara.isNull(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelJobs",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelJobsResponse>(await this.callApi(params, req, runtime), new $_model.CancelJobsResponse({}));
  }

  /**
   * @param request - CancelJobsRequest
   * @returns CancelJobsResponse
   */
  async cancelJobs(request: $_model.CancelJobsRequest): Promise<$_model.CancelJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelJobsWithOptions(request, runtime);
  }

  /**
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2019-12-26",
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
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * @param request - CreateAgentProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAgentProfileResponse
   */
  async createAgentProfileWithOptions(request: $_model.CreateAgentProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgentProfileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentProfileTemplateId)) {
      body["AgentProfileTemplateId"] = request.agentProfileTemplateId;
    }

    if (!$dara.isNull(request.appIp)) {
      body["AppIp"] = request.appIp;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.faqCategoryIds)) {
      body["FaqCategoryIds"] = request.faqCategoryIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instructionJson)) {
      body["InstructionJson"] = request.instructionJson;
    }

    if (!$dara.isNull(request.labelsJson)) {
      body["LabelsJson"] = request.labelsJson;
    }

    if (!$dara.isNull(request.model)) {
      body["Model"] = request.model;
    }

    if (!$dara.isNull(request.modelConfig)) {
      body["ModelConfig"] = request.modelConfig;
    }

    if (!$dara.isNull(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.promptJson)) {
      body["PromptJson"] = request.promptJson;
    }

    if (!$dara.isNull(request.scenario)) {
      body["Scenario"] = request.scenario;
    }

    if (!$dara.isNull(request.scriptId)) {
      body["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.variablesJson)) {
      body["VariablesJson"] = request.variablesJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAgentProfile",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAgentProfileResponse>(await this.callApi(params, req, runtime), new $_model.CreateAgentProfileResponse({}));
  }

  /**
   * @param request - CreateAgentProfileRequest
   * @returns CreateAgentProfileResponse
   */
  async createAgentProfile(request: $_model.CreateAgentProfileRequest): Promise<$_model.CreateAgentProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAgentProfileWithOptions(request, runtime);
  }

  /**
   * 创建标注任务
   * 
   * @param tmpReq - CreateAnnotationMissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAnnotationMissionResponse
   */
  async createAnnotationMissionWithOptions(tmpReq: $_model.CreateAnnotationMissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAnnotationMissionResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAnnotationMissionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.annotationMissionDebugDataSourceList)) {
      request.annotationMissionDebugDataSourceListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.annotationMissionDebugDataSourceList, "AnnotationMissionDebugDataSourceList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.annotationMissionDataSourceType)) {
      query["AnnotationMissionDataSourceType"] = request.annotationMissionDataSourceType;
    }

    if (!$dara.isNull(request.annotationMissionDebugDataSourceListShrink)) {
      query["AnnotationMissionDebugDataSourceList"] = request.annotationMissionDebugDataSourceListShrink;
    }

    if (!$dara.isNull(request.annotationMissionDebugDataSourceListJsonString)) {
      query["AnnotationMissionDebugDataSourceListJsonString"] = request.annotationMissionDebugDataSourceListJsonString;
    }

    if (!$dara.isNull(request.annotationMissionName)) {
      query["AnnotationMissionName"] = request.annotationMissionName;
    }

    if (!$dara.isNull(request.chatbotId)) {
      query["ChatbotId"] = request.chatbotId;
    }

    if (!$dara.isNull(request.conversationTimeEndFilter)) {
      query["ConversationTimeEndFilter"] = request.conversationTimeEndFilter;
    }

    if (!$dara.isNull(request.conversationTimeStartFilter)) {
      query["ConversationTimeStartFilter"] = request.conversationTimeStartFilter;
    }

    if (!$dara.isNull(request.excludeOtherSession)) {
      query["ExcludeOtherSession"] = request.excludeOtherSession;
    }

    if (!$dara.isNull(request.finished)) {
      query["Finished"] = request.finished;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.samplingCount)) {
      query["SamplingCount"] = request.samplingCount;
    }

    if (!$dara.isNull(request.samplingRate)) {
      query["SamplingRate"] = request.samplingRate;
    }

    if (!$dara.isNull(request.samplingType)) {
      query["SamplingType"] = request.samplingType;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.sessionEndReasonFilterList)) {
      query["SessionEndReasonFilterList"] = request.sessionEndReasonFilterList;
    }

    if (!$dara.isNull(request.sessionEndReasonFilterListJsonString)) {
      query["SessionEndReasonFilterListJsonString"] = request.sessionEndReasonFilterListJsonString;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAnnotationMission",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAnnotationMissionResponse>(await this.callApi(params, req, runtime), new $_model.CreateAnnotationMissionResponse({}));
  }

  /**
   * 创建标注任务
   * 
   * @param request - CreateAnnotationMissionRequest
   * @returns CreateAnnotationMissionResponse
   */
  async createAnnotationMission(request: $_model.CreateAnnotationMissionRequest): Promise<$_model.CreateAnnotationMissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAnnotationMissionWithOptions(request, runtime);
  }

  /**
   * 创建任务
   * 
   * @param request - CreateBatchJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBatchJobsResponse
   */
  async createBatchJobsWithOptions(request: $_model.CreateBatchJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBatchJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.batchJobDescription)) {
      query["BatchJobDescription"] = request.batchJobDescription;
    }

    if (!$dara.isNull(request.batchJobName)) {
      query["BatchJobName"] = request.batchJobName;
    }

    if (!$dara.isNull(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobFilePath)) {
      query["JobFilePath"] = request.jobFilePath;
    }

    if (!$dara.isNull(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.strategyJson)) {
      query["StrategyJson"] = request.strategyJson;
    }

    if (!$dara.isNull(request.submitted)) {
      query["Submitted"] = request.submitted;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBatchJobs",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBatchJobsResponse>(await this.callApi(params, req, runtime), new $_model.CreateBatchJobsResponse({}));
  }

  /**
   * 创建任务
   * 
   * @param request - CreateBatchJobsRequest
   * @returns CreateBatchJobsResponse
   */
  async createBatchJobs(request: $_model.CreateBatchJobsRequest): Promise<$_model.CreateBatchJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBatchJobsWithOptions(request, runtime);
  }

  /**
   * CreateBatchRepeatJob
   * 
   * @param request - CreateBatchRepeatJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBatchRepeatJobResponse
   */
  async createBatchRepeatJobWithOptions(request: $_model.CreateBatchRepeatJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBatchRepeatJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.filterStatus)) {
      query["FilterStatus"] = request.filterStatus;
    }

    if (!$dara.isNull(request.flashSmsExtras)) {
      query["FlashSmsExtras"] = request.flashSmsExtras;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.minConcurrency)) {
      query["MinConcurrency"] = request.minConcurrency;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.recallCallingNumber)) {
      query["RecallCallingNumber"] = request.recallCallingNumber;
    }

    if (!$dara.isNull(request.recallStrategyJson)) {
      query["RecallStrategyJson"] = request.recallStrategyJson;
    }

    if (!$dara.isNull(request.ringingDuration)) {
      query["RingingDuration"] = request.ringingDuration;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.sourceGroupId)) {
      query["SourceGroupId"] = request.sourceGroupId;
    }

    if (!$dara.isNull(request.strategyJson)) {
      query["StrategyJson"] = request.strategyJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBatchRepeatJob",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBatchRepeatJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateBatchRepeatJobResponse({}));
  }

  /**
   * CreateBatchRepeatJob
   * 
   * @param request - CreateBatchRepeatJobRequest
   * @returns CreateBatchRepeatJobResponse
   */
  async createBatchRepeatJob(request: $_model.CreateBatchRepeatJobRequest): Promise<$_model.CreateBatchRepeatJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBatchRepeatJobWithOptions(request, runtime);
  }

  /**
   * CreateBeebotIntent
   * 
   * @param tmpReq - CreateBeebotIntentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBeebotIntentResponse
   */
  async createBeebotIntentWithOptions(tmpReq: $_model.CreateBeebotIntentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBeebotIntentResponse> {
    tmpReq.validate();
    let request = new $_model.CreateBeebotIntentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.intentDefinition)) {
      request.intentDefinitionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.intentDefinition, "IntentDefinition", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.intentDefinitionShrink)) {
      query["IntentDefinition"] = request.intentDefinitionShrink;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBeebotIntent",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBeebotIntentResponse>(await this.callApi(params, req, runtime), new $_model.CreateBeebotIntentResponse({}));
  }

  /**
   * CreateBeebotIntent
   * 
   * @param request - CreateBeebotIntentRequest
   * @returns CreateBeebotIntentResponse
   */
  async createBeebotIntent(request: $_model.CreateBeebotIntentRequest): Promise<$_model.CreateBeebotIntentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBeebotIntentWithOptions(request, runtime);
  }

  /**
   * CreateBeebotIntentLgf
   * 
   * @param tmpReq - CreateBeebotIntentLgfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBeebotIntentLgfResponse
   */
  async createBeebotIntentLgfWithOptions(tmpReq: $_model.CreateBeebotIntentLgfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBeebotIntentLgfResponse> {
    tmpReq.validate();
    let request = new $_model.CreateBeebotIntentLgfShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.lgfDefinition)) {
      request.lgfDefinitionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lgfDefinition, "LgfDefinition", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lgfDefinitionShrink)) {
      query["LgfDefinition"] = request.lgfDefinitionShrink;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBeebotIntentLgf",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBeebotIntentLgfResponse>(await this.callApi(params, req, runtime), new $_model.CreateBeebotIntentLgfResponse({}));
  }

  /**
   * CreateBeebotIntentLgf
   * 
   * @param request - CreateBeebotIntentLgfRequest
   * @returns CreateBeebotIntentLgfResponse
   */
  async createBeebotIntentLgf(request: $_model.CreateBeebotIntentLgfRequest): Promise<$_model.CreateBeebotIntentLgfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBeebotIntentLgfWithOptions(request, runtime);
  }

  /**
   * CreateBeebotIntentUserSay
   * 
   * @param tmpReq - CreateBeebotIntentUserSayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBeebotIntentUserSayResponse
   */
  async createBeebotIntentUserSayWithOptions(tmpReq: $_model.CreateBeebotIntentUserSayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBeebotIntentUserSayResponse> {
    tmpReq.validate();
    let request = new $_model.CreateBeebotIntentUserSayShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userSayDefinition)) {
      request.userSayDefinitionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userSayDefinition, "UserSayDefinition", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.userSayDefinitionShrink)) {
      query["UserSayDefinition"] = request.userSayDefinitionShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBeebotIntentUserSay",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBeebotIntentUserSayResponse>(await this.callApi(params, req, runtime), new $_model.CreateBeebotIntentUserSayResponse({}));
  }

  /**
   * CreateBeebotIntentUserSay
   * 
   * @param request - CreateBeebotIntentUserSayRequest
   * @returns CreateBeebotIntentUserSayResponse
   */
  async createBeebotIntentUserSay(request: $_model.CreateBeebotIntentUserSayRequest): Promise<$_model.CreateBeebotIntentUserSayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBeebotIntentUserSayWithOptions(request, runtime);
  }

  /**
   * @param request - CreateDialogueFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDialogueFlowResponse
   */
  async createDialogueFlowWithOptions(request: $_model.CreateDialogueFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDialogueFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dialogueFlowType)) {
      query["DialogueFlowType"] = request.dialogueFlowType;
    }

    if (!$dara.isNull(request.dialogueName)) {
      query["DialogueName"] = request.dialogueName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDialogueFlow",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDialogueFlowResponse>(await this.callApi(params, req, runtime), new $_model.CreateDialogueFlowResponse({}));
  }

  /**
   * @param request - CreateDialogueFlowRequest
   * @returns CreateDialogueFlowResponse
   */
  async createDialogueFlow(request: $_model.CreateDialogueFlowRequest): Promise<$_model.CreateDialogueFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDialogueFlowWithOptions(request, runtime);
  }

  /**
   * @param request - CreateDownloadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDownloadUrlResponse
   */
  async createDownloadUrlWithOptions(request: $_model.CreateDownloadUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDownloadUrlResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDownloadUrl",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDownloadUrlResponse>(await this.callApi(params, req, runtime), new $_model.CreateDownloadUrlResponse({}));
  }

  /**
   * @param request - CreateDownloadUrlRequest
   * @returns CreateDownloadUrlResponse
   */
  async createDownloadUrl(request: $_model.CreateDownloadUrlRequest): Promise<$_model.CreateDownloadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDownloadUrlWithOptions(request, runtime);
  }

  /**
   * @param request - CreateGlobalQuestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGlobalQuestionResponse
   */
  async createGlobalQuestionWithOptions(request: $_model.CreateGlobalQuestionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGlobalQuestionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.answers)) {
      query["Answers"] = request.answers;
    }

    if (!$dara.isNull(request.globalQuestionName)) {
      query["GlobalQuestionName"] = request.globalQuestionName;
    }

    if (!$dara.isNull(request.globalQuestionType)) {
      query["GlobalQuestionType"] = request.globalQuestionType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.questions)) {
      query["Questions"] = request.questions;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGlobalQuestion",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGlobalQuestionResponse>(await this.callApi(params, req, runtime), new $_model.CreateGlobalQuestionResponse({}));
  }

  /**
   * @param request - CreateGlobalQuestionRequest
   * @returns CreateGlobalQuestionResponse
   */
  async createGlobalQuestion(request: $_model.CreateGlobalQuestionRequest): Promise<$_model.CreateGlobalQuestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGlobalQuestionWithOptions(request, runtime);
  }

  /**
   * @param request - CreateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: $_model.CreateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!$dara.isNull(request.instanceDescription)) {
      query["InstanceDescription"] = request.instanceDescription;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.maxConcurrentConversation)) {
      query["MaxConcurrentConversation"] = request.maxConcurrentConversation;
    }

    if (!$dara.isNull(request.nluServiceType)) {
      query["NluServiceType"] = request.nluServiceType;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceResponse({}));
  }

  /**
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: $_model.CreateInstanceRequest): Promise<$_model.CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * 创建实例绑定号码
   * 
   * @param request - CreateInstanceBindNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceBindNumberResponse
   */
  async createInstanceBindNumberWithOptions(request: $_model.CreateInstanceBindNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceBindNumberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceList)) {
      query["InstanceList"] = request.instanceList;
    }

    if (!$dara.isNull(request.number)) {
      query["Number"] = request.number;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceBindNumber",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceBindNumberResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceBindNumberResponse({}));
  }

  /**
   * 创建实例绑定号码
   * 
   * @param request - CreateInstanceBindNumberRequest
   * @returns CreateInstanceBindNumberResponse
   */
  async createInstanceBindNumber(request: $_model.CreateInstanceBindNumberRequest): Promise<$_model.CreateInstanceBindNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceBindNumberWithOptions(request, runtime);
  }

  /**
   * @param request - CreateIntentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIntentResponse
   */
  async createIntentWithOptions(request: $_model.CreateIntentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIntentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.intentDescription)) {
      query["IntentDescription"] = request.intentDescription;
    }

    if (!$dara.isNull(request.intentName)) {
      query["IntentName"] = request.intentName;
    }

    if (!$dara.isNull(request.keywords)) {
      query["Keywords"] = request.keywords;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.utterances)) {
      query["Utterances"] = request.utterances;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIntent",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIntentResponse>(await this.callApi(params, req, runtime), new $_model.CreateIntentResponse({}));
  }

  /**
   * @param request - CreateIntentRequest
   * @returns CreateIntentResponse
   */
  async createIntent(request: $_model.CreateIntentRequest): Promise<$_model.CreateIntentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIntentWithOptions(request, runtime);
  }

  /**
   * @param request - CreateJobDataParsingTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateJobDataParsingTaskResponse
   */
  async createJobDataParsingTaskWithOptions(request: $_model.CreateJobDataParsingTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateJobDataParsingTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobFilePath)) {
      query["JobFilePath"] = request.jobFilePath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateJobDataParsingTask",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateJobDataParsingTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateJobDataParsingTaskResponse({}));
  }

  /**
   * @param request - CreateJobDataParsingTaskRequest
   * @returns CreateJobDataParsingTaskResponse
   */
  async createJobDataParsingTask(request: $_model.CreateJobDataParsingTaskRequest): Promise<$_model.CreateJobDataParsingTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createJobDataParsingTaskWithOptions(request, runtime);
  }

  /**
   * 创建任务组
   * 
   * @param request - CreateJobGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateJobGroupResponse
   */
  async createJobGroupWithOptions(request: $_model.CreateJobGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateJobGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!$dara.isNull(request.flashSmsExtras)) {
      query["FlashSmsExtras"] = request.flashSmsExtras;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobGroupDescription)) {
      query["JobGroupDescription"] = request.jobGroupDescription;
    }

    if (!$dara.isNull(request.jobGroupName)) {
      query["JobGroupName"] = request.jobGroupName;
    }

    if (!$dara.isNull(request.minConcurrency)) {
      query["MinConcurrency"] = request.minConcurrency;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.recallCallingNumber)) {
      query["RecallCallingNumber"] = request.recallCallingNumber;
    }

    if (!$dara.isNull(request.recallStrategyJson)) {
      query["RecallStrategyJson"] = request.recallStrategyJson;
    }

    if (!$dara.isNull(request.ringingDuration)) {
      query["RingingDuration"] = request.ringingDuration;
    }

    if (!$dara.isNull(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.strategyJson)) {
      query["StrategyJson"] = request.strategyJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateJobGroup",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateJobGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateJobGroupResponse({}));
  }

  /**
   * 创建任务组
   * 
   * @param request - CreateJobGroupRequest
   * @returns CreateJobGroupResponse
   */
  async createJobGroup(request: $_model.CreateJobGroupRequest): Promise<$_model.CreateJobGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createJobGroupWithOptions(request, runtime);
  }

  /**
   * 创建任务组到处任务
   * 
   * @param request - CreateJobGroupExportTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateJobGroupExportTaskResponse
   */
  async createJobGroupExportTaskWithOptions(request: $_model.CreateJobGroupExportTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateJobGroupExportTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    if (!$dara.isNull(request.option)) {
      query["Option"] = request.option;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateJobGroupExportTask",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateJobGroupExportTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateJobGroupExportTaskResponse({}));
  }

  /**
   * 创建任务组到处任务
   * 
   * @param request - CreateJobGroupExportTaskRequest
   * @returns CreateJobGroupExportTaskResponse
   */
  async createJobGroupExportTask(request: $_model.CreateJobGroupExportTaskRequest): Promise<$_model.CreateJobGroupExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createJobGroupExportTaskWithOptions(request, runtime);
  }

  /**
   * 新建场景
   * 
   * @param request - CreateScriptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScriptResponse
   */
  async createScriptWithOptions(request: $_model.CreateScriptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScriptResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.agentLlm)) {
      query["AgentLlm"] = request.agentLlm;
    }

    if (!$dara.isNull(request.asrConfig)) {
      query["AsrConfig"] = request.asrConfig;
    }

    if (!$dara.isNull(request.chatbotId)) {
      query["ChatbotId"] = request.chatbotId;
    }

    if (!$dara.isNull(request.emotionEnable)) {
      query["EmotionEnable"] = request.emotionEnable;
    }

    if (!$dara.isNull(request.industry)) {
      query["Industry"] = request.industry;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.longWaitEnable)) {
      query["LongWaitEnable"] = request.longWaitEnable;
    }

    if (!$dara.isNull(request.miniPlaybackEnable)) {
      query["MiniPlaybackEnable"] = request.miniPlaybackEnable;
    }

    if (!$dara.isNull(request.newBargeInEnable)) {
      query["NewBargeInEnable"] = request.newBargeInEnable;
    }

    if (!$dara.isNull(request.nluAccessType)) {
      query["NluAccessType"] = request.nluAccessType;
    }

    if (!$dara.isNull(request.nluEngine)) {
      query["NluEngine"] = request.nluEngine;
    }

    if (!$dara.isNull(request.scene)) {
      query["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.scriptContent)) {
      query["ScriptContent"] = request.scriptContent;
    }

    if (!$dara.isNull(request.scriptDescription)) {
      query["ScriptDescription"] = request.scriptDescription;
    }

    if (!$dara.isNull(request.scriptName)) {
      query["ScriptName"] = request.scriptName;
    }

    if (!$dara.isNull(request.scriptNluProfileJsonString)) {
      query["ScriptNluProfileJsonString"] = request.scriptNluProfileJsonString;
    }

    if (!$dara.isNull(request.scriptWaveform)) {
      query["ScriptWaveform"] = request.scriptWaveform;
    }

    if (!$dara.isNull(request.ttsConfig)) {
      query["TtsConfig"] = request.ttsConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScript",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateScriptResponse>(await this.callApi(params, req, runtime), new $_model.CreateScriptResponse({}));
  }

  /**
   * 新建场景
   * 
   * @param request - CreateScriptRequest
   * @returns CreateScriptResponse
   */
  async createScript(request: $_model.CreateScriptRequest): Promise<$_model.CreateScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScriptWithOptions(request, runtime);
  }

  /**
   * @param request - CreateScriptWaveformRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScriptWaveformResponse
   */
  async createScriptWaveformWithOptions(request: $_model.CreateScriptWaveformRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScriptWaveformResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptContent)) {
      query["ScriptContent"] = request.scriptContent;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScriptWaveform",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateScriptWaveformResponse>(await this.callApi(params, req, runtime), new $_model.CreateScriptWaveformResponse({}));
  }

  /**
   * @param request - CreateScriptWaveformRequest
   * @returns CreateScriptWaveformResponse
   */
  async createScriptWaveform(request: $_model.CreateScriptWaveformRequest): Promise<$_model.CreateScriptWaveformResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScriptWaveformWithOptions(request, runtime);
  }

  /**
   * @param request - CreateTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTagResponse
   */
  async createTagWithOptions(request: $_model.CreateTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.tagGroup)) {
      query["TagGroup"] = request.tagGroup;
    }

    if (!$dara.isNull(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTag",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTagResponse>(await this.callApi(params, req, runtime), new $_model.CreateTagResponse({}));
  }

  /**
   * @param request - CreateTagRequest
   * @returns CreateTagResponse
   */
  async createTag(request: $_model.CreateTagRequest): Promise<$_model.CreateTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTagWithOptions(request, runtime);
  }

  /**
   * 外呼历史导出
   * 
   * @param request - CreateTaskExportTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTaskExportTaskResponse
   */
  async createTaskExportTaskWithOptions(request: $_model.CreateTaskExportTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTaskExportTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTaskExportTask",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTaskExportTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateTaskExportTaskResponse({}));
  }

  /**
   * 外呼历史导出
   * 
   * @param request - CreateTaskExportTaskRequest
   * @returns CreateTaskExportTaskResponse
   */
  async createTaskExportTask(request: $_model.CreateTaskExportTaskRequest): Promise<$_model.CreateTaskExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTaskExportTaskWithOptions(request, runtime);
  }

  /**
   * 创建密钥
   * 
   * @param request - CreateTenantKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTenantKeyResponse
   */
  async createTenantKeyWithOptions(request: $_model.CreateTenantKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTenantKeyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "CreateTenantKey",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTenantKeyResponse>(await this.callApi(params, req, runtime), new $_model.CreateTenantKeyResponse({}));
  }

  /**
   * 创建密钥
   * 
   * @param request - CreateTenantKeyRequest
   * @returns CreateTenantKeyResponse
   */
  async createTenantKey(request: $_model.CreateTenantKeyRequest): Promise<$_model.CreateTenantKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTenantKeyWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - DeleteAgentProfilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAgentProfilesResponse
   */
  async deleteAgentProfilesWithOptions(tmpReq: $_model.DeleteAgentProfilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgentProfilesResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteAgentProfilesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentProfileIds)) {
      request.agentProfileIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentProfileIds, "AgentProfileIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentProfileIdsShrink)) {
      body["AgentProfileIds"] = request.agentProfileIdsShrink;
    }

    if (!$dara.isNull(request.appIp)) {
      body["AppIp"] = request.appIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAgentProfiles",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAgentProfilesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAgentProfilesResponse({}));
  }

  /**
   * @param request - DeleteAgentProfilesRequest
   * @returns DeleteAgentProfilesResponse
   */
  async deleteAgentProfiles(request: $_model.DeleteAgentProfilesRequest): Promise<$_model.DeleteAgentProfilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAgentProfilesWithOptions(request, runtime);
  }

  /**
   * 清空归属地号码库
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAllNumberDistrictInfoResponse
   */
  async deleteAllNumberDistrictInfoWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAllNumberDistrictInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAllNumberDistrictInfo",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAllNumberDistrictInfoResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAllNumberDistrictInfoResponse({}));
  }

  /**
   * 清空归属地号码库
   * @returns DeleteAllNumberDistrictInfoResponse
   */
  async deleteAllNumberDistrictInfo(): Promise<$_model.DeleteAllNumberDistrictInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAllNumberDistrictInfoWithOptions(runtime);
  }

  /**
   * DeleteBeebotIntent
   * 
   * @param request - DeleteBeebotIntentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBeebotIntentResponse
   */
  async deleteBeebotIntentWithOptions(request: $_model.DeleteBeebotIntentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBeebotIntentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.intentId)) {
      query["IntentId"] = request.intentId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBeebotIntent",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBeebotIntentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBeebotIntentResponse({}));
  }

  /**
   * DeleteBeebotIntent
   * 
   * @param request - DeleteBeebotIntentRequest
   * @returns DeleteBeebotIntentResponse
   */
  async deleteBeebotIntent(request: $_model.DeleteBeebotIntentRequest): Promise<$_model.DeleteBeebotIntentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBeebotIntentWithOptions(request, runtime);
  }

  /**
   * DeleteBeebotIntentLgf
   * 
   * @param request - DeleteBeebotIntentLgfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBeebotIntentLgfResponse
   */
  async deleteBeebotIntentLgfWithOptions(request: $_model.DeleteBeebotIntentLgfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBeebotIntentLgfResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.intentId)) {
      query["IntentId"] = request.intentId;
    }

    if (!$dara.isNull(request.lgfId)) {
      query["LgfId"] = request.lgfId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBeebotIntentLgf",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBeebotIntentLgfResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBeebotIntentLgfResponse({}));
  }

  /**
   * DeleteBeebotIntentLgf
   * 
   * @param request - DeleteBeebotIntentLgfRequest
   * @returns DeleteBeebotIntentLgfResponse
   */
  async deleteBeebotIntentLgf(request: $_model.DeleteBeebotIntentLgfRequest): Promise<$_model.DeleteBeebotIntentLgfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBeebotIntentLgfWithOptions(request, runtime);
  }

  /**
   * DeleteBeebotIntentUserSay
   * 
   * @param request - DeleteBeebotIntentUserSayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBeebotIntentUserSayResponse
   */
  async deleteBeebotIntentUserSayWithOptions(request: $_model.DeleteBeebotIntentUserSayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBeebotIntentUserSayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.intentId)) {
      query["IntentId"] = request.intentId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.userSayId)) {
      query["UserSayId"] = request.userSayId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBeebotIntentUserSay",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBeebotIntentUserSayResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBeebotIntentUserSayResponse({}));
  }

  /**
   * DeleteBeebotIntentUserSay
   * 
   * @param request - DeleteBeebotIntentUserSayRequest
   * @returns DeleteBeebotIntentUserSayResponse
   */
  async deleteBeebotIntentUserSay(request: $_model.DeleteBeebotIntentUserSayRequest): Promise<$_model.DeleteBeebotIntentUserSayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBeebotIntentUserSayWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteContactBlockListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteContactBlockListResponse
   */
  async deleteContactBlockListWithOptions(request: $_model.DeleteContactBlockListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContactBlockListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactBlockListId)) {
      query["ContactBlockListId"] = request.contactBlockListId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.operator)) {
      query["Operator"] = request.operator;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteContactBlockList",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteContactBlockListResponse>(await this.callApi(params, req, runtime), new $_model.DeleteContactBlockListResponse({}));
  }

  /**
   * @param request - DeleteContactBlockListRequest
   * @returns DeleteContactBlockListResponse
   */
  async deleteContactBlockList(request: $_model.DeleteContactBlockListRequest): Promise<$_model.DeleteContactBlockListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteContactBlockListWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteContactWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteContactWhiteListResponse
   */
  async deleteContactWhiteListWithOptions(request: $_model.DeleteContactWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContactWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactWhiteListId)) {
      query["ContactWhiteListId"] = request.contactWhiteListId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.operator)) {
      query["Operator"] = request.operator;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteContactWhiteList",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteContactWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.DeleteContactWhiteListResponse({}));
  }

  /**
   * @param request - DeleteContactWhiteListRequest
   * @returns DeleteContactWhiteListResponse
   */
  async deleteContactWhiteList(request: $_model.DeleteContactWhiteListRequest): Promise<$_model.DeleteContactWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteContactWhiteListWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteDialogueFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDialogueFlowResponse
   */
  async deleteDialogueFlowWithOptions(request: $_model.DeleteDialogueFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDialogueFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dialogueFlowId)) {
      query["DialogueFlowId"] = request.dialogueFlowId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDialogueFlow",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDialogueFlowResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDialogueFlowResponse({}));
  }

  /**
   * @param request - DeleteDialogueFlowRequest
   * @returns DeleteDialogueFlowResponse
   */
  async deleteDialogueFlow(request: $_model.DeleteDialogueFlowRequest): Promise<$_model.DeleteDialogueFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDialogueFlowWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteGlobalQuestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGlobalQuestionResponse
   */
  async deleteGlobalQuestionWithOptions(request: $_model.DeleteGlobalQuestionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGlobalQuestionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.globalQuestionId)) {
      query["GlobalQuestionId"] = request.globalQuestionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGlobalQuestion",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGlobalQuestionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGlobalQuestionResponse({}));
  }

  /**
   * @param request - DeleteGlobalQuestionRequest
   * @returns DeleteGlobalQuestionResponse
   */
  async deleteGlobalQuestion(request: $_model.DeleteGlobalQuestionRequest): Promise<$_model.DeleteGlobalQuestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGlobalQuestionWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(request: $_model.DeleteInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceResponse({}));
  }

  /**
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: $_model.DeleteInstanceRequest): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteIntentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIntentResponse
   */
  async deleteIntentWithOptions(request: $_model.DeleteIntentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIntentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.intentId)) {
      query["IntentId"] = request.intentId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIntent",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIntentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIntentResponse({}));
  }

  /**
   * @param request - DeleteIntentRequest
   * @returns DeleteIntentResponse
   */
  async deleteIntent(request: $_model.DeleteIntentRequest): Promise<$_model.DeleteIntentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIntentWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteJobGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteJobGroupResponse
   */
  async deleteJobGroupWithOptions(request: $_model.DeleteJobGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteJobGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteJobGroup",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteJobGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteJobGroupResponse({}));
  }

  /**
   * @param request - DeleteJobGroupRequest
   * @returns DeleteJobGroupResponse
   */
  async deleteJobGroup(request: $_model.DeleteJobGroupRequest): Promise<$_model.DeleteJobGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteJobGroupWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteOutboundCallNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOutboundCallNumberResponse
   */
  async deleteOutboundCallNumberWithOptions(request: $_model.DeleteOutboundCallNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOutboundCallNumberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.outboundCallNumberId)) {
      query["OutboundCallNumberId"] = request.outboundCallNumberId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOutboundCallNumber",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteOutboundCallNumberResponse>(await this.callApi(params, req, runtime), new $_model.DeleteOutboundCallNumberResponse({}));
  }

  /**
   * @param request - DeleteOutboundCallNumberRequest
   * @returns DeleteOutboundCallNumberResponse
   */
  async deleteOutboundCallNumber(request: $_model.DeleteOutboundCallNumberRequest): Promise<$_model.DeleteOutboundCallNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteOutboundCallNumberWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteScriptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScriptResponse
   */
  async deleteScriptWithOptions(request: $_model.DeleteScriptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteScriptResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScript",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteScriptResponse>(await this.callApi(params, req, runtime), new $_model.DeleteScriptResponse({}));
  }

  /**
   * @param request - DeleteScriptRequest
   * @returns DeleteScriptResponse
   */
  async deleteScript(request: $_model.DeleteScriptRequest): Promise<$_model.DeleteScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteScriptWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteScriptRecordingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScriptRecordingResponse
   */
  async deleteScriptRecordingWithOptions(request: $_model.DeleteScriptRecordingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteScriptRecordingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.uuidsJson)) {
      query["UuidsJson"] = request.uuidsJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScriptRecording",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteScriptRecordingResponse>(await this.callApi(params, req, runtime), new $_model.DeleteScriptRecordingResponse({}));
  }

  /**
   * @param request - DeleteScriptRecordingRequest
   * @returns DeleteScriptRecordingResponse
   */
  async deleteScriptRecording(request: $_model.DeleteScriptRecordingRequest): Promise<$_model.DeleteScriptRecordingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteScriptRecordingWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteScriptWaveformRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScriptWaveformResponse
   */
  async deleteScriptWaveformWithOptions(request: $_model.DeleteScriptWaveformRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteScriptWaveformResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.scriptWaveformId)) {
      query["ScriptWaveformId"] = request.scriptWaveformId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScriptWaveform",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteScriptWaveformResponse>(await this.callApi(params, req, runtime), new $_model.DeleteScriptWaveformResponse({}));
  }

  /**
   * @param request - DeleteScriptWaveformRequest
   * @returns DeleteScriptWaveformResponse
   */
  async deleteScriptWaveform(request: $_model.DeleteScriptWaveformRequest): Promise<$_model.DeleteScriptWaveformResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteScriptWaveformWithOptions(request, runtime);
  }

  /**
   * DescribeBeebotIntent
   * 
   * @remarks
   * ***
   * 
   * @param request - DescribeBeebotIntentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBeebotIntentResponse
   */
  async describeBeebotIntentWithOptions(request: $_model.DescribeBeebotIntentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBeebotIntentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.intentId)) {
      query["IntentId"] = request.intentId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBeebotIntent",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBeebotIntentResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBeebotIntentResponse({}));
  }

  /**
   * DescribeBeebotIntent
   * 
   * @remarks
   * ***
   * 
   * @param request - DescribeBeebotIntentRequest
   * @returns DescribeBeebotIntentResponse
   */
  async describeBeebotIntent(request: $_model.DescribeBeebotIntentRequest): Promise<$_model.DescribeBeebotIntentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBeebotIntentWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDialogueNodeStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDialogueNodeStatisticsResponse
   */
  async describeDialogueNodeStatisticsWithOptions(request: $_model.DescribeDialogueNodeStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDialogueNodeStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDialogueNodeStatistics",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDialogueNodeStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDialogueNodeStatisticsResponse({}));
  }

  /**
   * @param request - DescribeDialogueNodeStatisticsRequest
   * @returns DescribeDialogueNodeStatisticsResponse
   */
  async describeDialogueNodeStatistics(request: $_model.DescribeDialogueNodeStatisticsRequest): Promise<$_model.DescribeDialogueNodeStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDialogueNodeStatisticsWithOptions(request, runtime);
  }

  /**
   * DescribeDsReports
   * 
   * @param request - DescribeDsReportsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDsReportsResponse
   */
  async describeDsReportsWithOptions(request: $_model.DescribeDsReportsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDsReportsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDsReports",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDsReportsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDsReportsResponse({}));
  }

  /**
   * DescribeDsReports
   * 
   * @param request - DescribeDsReportsRequest
   * @returns DescribeDsReportsResponse
   */
  async describeDsReports(request: $_model.DescribeDsReportsRequest): Promise<$_model.DescribeDsReportsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDsReportsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeGlobalQuestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGlobalQuestionResponse
   */
  async describeGlobalQuestionWithOptions(request: $_model.DescribeGlobalQuestionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGlobalQuestionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.globalQuestionId)) {
      query["GlobalQuestionId"] = request.globalQuestionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGlobalQuestion",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGlobalQuestionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGlobalQuestionResponse({}));
  }

  /**
   * @param request - DescribeGlobalQuestionRequest
   * @returns DescribeGlobalQuestionResponse
   */
  async describeGlobalQuestion(request: $_model.DescribeGlobalQuestionRequest): Promise<$_model.DescribeGlobalQuestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGlobalQuestionWithOptions(request, runtime);
  }

  /**
   * 任务组数据统计
   * 
   * @param request - DescribeGroupExecutingInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGroupExecutingInfoResponse
   */
  async describeGroupExecutingInfoWithOptions(request: $_model.DescribeGroupExecutingInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGroupExecutingInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGroupExecutingInfo",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGroupExecutingInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGroupExecutingInfoResponse({}));
  }

  /**
   * 任务组数据统计
   * 
   * @param request - DescribeGroupExecutingInfoRequest
   * @returns DescribeGroupExecutingInfoResponse
   */
  async describeGroupExecutingInfo(request: $_model.DescribeGroupExecutingInfoRequest): Promise<$_model.DescribeGroupExecutingInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGroupExecutingInfoWithOptions(request, runtime);
  }

  /**
   * DescribeInstance
   * 
   * @param request - DescribeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceResponse
   */
  async describeInstanceWithOptions(request: $_model.DescribeInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstance",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceResponse({}));
  }

  /**
   * DescribeInstance
   * 
   * @param request - DescribeInstanceRequest
   * @returns DescribeInstanceResponse
   */
  async describeInstance(request: $_model.DescribeInstanceRequest): Promise<$_model.DescribeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeIntentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIntentResponse
   */
  async describeIntentWithOptions(request: $_model.DescribeIntentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIntentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.intentId)) {
      query["IntentId"] = request.intentId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIntent",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIntentResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIntentResponse({}));
  }

  /**
   * @param request - DescribeIntentRequest
   * @returns DescribeIntentResponse
   */
  async describeIntent(request: $_model.DescribeIntentRequest): Promise<$_model.DescribeIntentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIntentWithOptions(request, runtime);
  }

  /**
   * DescribeIntentStatistics
   * 
   * @param request - DescribeIntentStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIntentStatisticsResponse
   */
  async describeIntentStatisticsWithOptions(request: $_model.DescribeIntentStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIntentStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIntentStatistics",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIntentStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIntentStatisticsResponse({}));
  }

  /**
   * DescribeIntentStatistics
   * 
   * @param request - DescribeIntentStatisticsRequest
   * @returns DescribeIntentStatisticsResponse
   */
  async describeIntentStatistics(request: $_model.DescribeIntentStatisticsRequest): Promise<$_model.DescribeIntentStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIntentStatisticsWithOptions(request, runtime);
  }

  /**
   * 获取job信息
   * 
   * @param request - DescribeJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeJobResponse
   */
  async describeJobWithOptions(request: $_model.DescribeJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.withScript)) {
      query["WithScript"] = request.withScript;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeJob",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeJobResponse>(await this.callApi(params, req, runtime), new $_model.DescribeJobResponse({}));
  }

  /**
   * 获取job信息
   * 
   * @param request - DescribeJobRequest
   * @returns DescribeJobResponse
   */
  async describeJob(request: $_model.DescribeJobRequest): Promise<$_model.DescribeJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeJobWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeJobDataParsingTaskProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeJobDataParsingTaskProgressResponse
   */
  async describeJobDataParsingTaskProgressWithOptions(request: $_model.DescribeJobDataParsingTaskProgressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeJobDataParsingTaskProgressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobDataParsingTaskId)) {
      query["JobDataParsingTaskId"] = request.jobDataParsingTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeJobDataParsingTaskProgress",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeJobDataParsingTaskProgressResponse>(await this.callApi(params, req, runtime), new $_model.DescribeJobDataParsingTaskProgressResponse({}));
  }

  /**
   * @param request - DescribeJobDataParsingTaskProgressRequest
   * @returns DescribeJobDataParsingTaskProgressResponse
   */
  async describeJobDataParsingTaskProgress(request: $_model.DescribeJobDataParsingTaskProgressRequest): Promise<$_model.DescribeJobDataParsingTaskProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeJobDataParsingTaskProgressWithOptions(request, runtime);
  }

  /**
   * DescribeJobGroup
   * 
   * @param request - DescribeJobGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeJobGroupResponse
   */
  async describeJobGroupWithOptions(request: $_model.DescribeJobGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeJobGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.briefTypes)) {
      query["BriefTypes"] = request.briefTypes;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeJobGroup",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeJobGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeJobGroupResponse({}));
  }

  /**
   * DescribeJobGroup
   * 
   * @param request - DescribeJobGroupRequest
   * @returns DescribeJobGroupResponse
   */
  async describeJobGroup(request: $_model.DescribeJobGroupRequest): Promise<$_model.DescribeJobGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeJobGroupWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeJobGroupExportTaskProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeJobGroupExportTaskProgressResponse
   */
  async describeJobGroupExportTaskProgressWithOptions(request: $_model.DescribeJobGroupExportTaskProgressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeJobGroupExportTaskProgressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeJobGroupExportTaskProgress",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeJobGroupExportTaskProgressResponse>(await this.callApi(params, req, runtime), new $_model.DescribeJobGroupExportTaskProgressResponse({}));
  }

  /**
   * @param request - DescribeJobGroupExportTaskProgressRequest
   * @returns DescribeJobGroupExportTaskProgressResponse
   */
  async describeJobGroupExportTaskProgress(request: $_model.DescribeJobGroupExportTaskProgressRequest): Promise<$_model.DescribeJobGroupExportTaskProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeJobGroupExportTaskProgressWithOptions(request, runtime);
  }

  /**
   * 获取场景信息
   * 
   * @param request - DescribeScriptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScriptResponse
   */
  async describeScriptWithOptions(request: $_model.DescribeScriptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeScriptResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScript",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeScriptResponse>(await this.callApi(params, req, runtime), new $_model.DescribeScriptResponse({}));
  }

  /**
   * 获取场景信息
   * 
   * @param request - DescribeScriptRequest
   * @returns DescribeScriptResponse
   */
  async describeScript(request: $_model.DescribeScriptRequest): Promise<$_model.DescribeScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScriptWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeScriptVoiceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScriptVoiceConfigResponse
   */
  async describeScriptVoiceConfigWithOptions(request: $_model.DescribeScriptVoiceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeScriptVoiceConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.scriptVoiceConfigId)) {
      query["ScriptVoiceConfigId"] = request.scriptVoiceConfigId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScriptVoiceConfig",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeScriptVoiceConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeScriptVoiceConfigResponse({}));
  }

  /**
   * @param request - DescribeScriptVoiceConfigRequest
   * @returns DescribeScriptVoiceConfigResponse
   */
  async describeScriptVoiceConfig(request: $_model.DescribeScriptVoiceConfigRequest): Promise<$_model.DescribeScriptVoiceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScriptVoiceConfigWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeTTSConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTTSConfigResponse
   */
  async describeTTSConfigWithOptions(request: $_model.DescribeTTSConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTTSConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTTSConfig",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTTSConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTTSConfigResponse({}));
  }

  /**
   * @param request - DescribeTTSConfigRequest
   * @returns DescribeTTSConfigResponse
   */
  async describeTTSConfig(request: $_model.DescribeTTSConfigRequest): Promise<$_model.DescribeTTSConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTTSConfigWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeTTSDemoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTTSDemoResponse
   */
  async describeTTSDemoWithOptions(request: $_model.DescribeTTSDemoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTTSDemoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessKey)) {
      query["AccessKey"] = request.accessKey;
    }

    if (!$dara.isNull(request.aliCustomizedVoice)) {
      query["AliCustomizedVoice"] = request.aliCustomizedVoice;
    }

    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nlsServiceType)) {
      query["NlsServiceType"] = request.nlsServiceType;
    }

    if (!$dara.isNull(request.pitchRate)) {
      query["PitchRate"] = request.pitchRate;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.secretKey)) {
      query["SecretKey"] = request.secretKey;
    }

    if (!$dara.isNull(request.speechRate)) {
      query["SpeechRate"] = request.speechRate;
    }

    if (!$dara.isNull(request.text)) {
      query["Text"] = request.text;
    }

    if (!$dara.isNull(request.voice)) {
      query["Voice"] = request.voice;
    }

    if (!$dara.isNull(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTTSDemo",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTTSDemoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTTSDemoResponse({}));
  }

  /**
   * @param request - DescribeTTSDemoRequest
   * @returns DescribeTTSDemoResponse
   */
  async describeTTSDemo(request: $_model.DescribeTTSDemoRequest): Promise<$_model.DescribeTTSDemoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTTSDemoWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeTagHitsSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagHitsSummaryResponse
   */
  async describeTagHitsSummaryWithOptions(request: $_model.DescribeTagHitsSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagHitsSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTagHitsSummary",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTagHitsSummaryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTagHitsSummaryResponse({}));
  }

  /**
   * @param request - DescribeTagHitsSummaryRequest
   * @returns DescribeTagHitsSummaryResponse
   */
  async describeTagHitsSummary(request: $_model.DescribeTagHitsSummaryRequest): Promise<$_model.DescribeTagHitsSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagHitsSummaryWithOptions(request, runtime);
  }

  /**
   * 号码绑定实例列表
   * 
   * @param request - DescribeTenantBindNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTenantBindNumberResponse
   */
  async describeTenantBindNumberWithOptions(request: $_model.DescribeTenantBindNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTenantBindNumberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.number)) {
      query["Number"] = request.number;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTenantBindNumber",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTenantBindNumberResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTenantBindNumberResponse({}));
  }

  /**
   * 号码绑定实例列表
   * 
   * @param request - DescribeTenantBindNumberRequest
   * @returns DescribeTenantBindNumberResponse
   */
  async describeTenantBindNumber(request: $_model.DescribeTenantBindNumberRequest): Promise<$_model.DescribeTenantBindNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTenantBindNumberWithOptions(request, runtime);
  }

  /**
   * @param request - DialogueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DialogueResponse
   */
  async dialogueWithOptions(request: $_model.DialogueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DialogueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionKey)) {
      query["ActionKey"] = request.actionKey;
    }

    if (!$dara.isNull(request.actionParams)) {
      query["ActionParams"] = request.actionParams;
    }

    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.callType)) {
      query["CallType"] = request.callType;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.utterance)) {
      query["Utterance"] = request.utterance;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Dialogue",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DialogueResponse>(await this.callApi(params, req, runtime), new $_model.DialogueResponse({}));
  }

  /**
   * @param request - DialogueRequest
   * @returns DialogueResponse
   */
  async dialogue(request: $_model.DialogueRequest): Promise<$_model.DialogueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dialogueWithOptions(request, runtime);
  }

  /**
   * DownloadRecording
   * 
   * @param request - DownloadRecordingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DownloadRecordingResponse
   */
  async downloadRecordingWithOptions(request: $_model.DownloadRecordingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DownloadRecordingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.needVoiceSliceRecording)) {
      query["NeedVoiceSliceRecording"] = request.needVoiceSliceRecording;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DownloadRecording",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DownloadRecordingResponse>(await this.callApi(params, req, runtime), new $_model.DownloadRecordingResponse({}));
  }

  /**
   * DownloadRecording
   * 
   * @param request - DownloadRecordingRequest
   * @returns DownloadRecordingResponse
   */
  async downloadRecording(request: $_model.DownloadRecordingRequest): Promise<$_model.DownloadRecordingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.downloadRecordingWithOptions(request, runtime);
  }

  /**
   * @param request - DownloadScriptRecordingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DownloadScriptRecordingResponse
   */
  async downloadScriptRecordingWithOptions(request: $_model.DownloadScriptRecordingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DownloadScriptRecordingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DownloadScriptRecording",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DownloadScriptRecordingResponse>(await this.callApi(params, req, runtime), new $_model.DownloadScriptRecordingResponse({}));
  }

  /**
   * @param request - DownloadScriptRecordingRequest
   * @returns DownloadScriptRecordingResponse
   */
  async downloadScriptRecording(request: $_model.DownloadScriptRecordingRequest): Promise<$_model.DownloadScriptRecordingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.downloadScriptRecordingWithOptions(request, runtime);
  }

  /**
   * @param request - DuplicateScriptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DuplicateScriptResponse
   */
  async duplicateScriptWithOptions(request: $_model.DuplicateScriptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DuplicateScriptResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.sourceScriptId)) {
      query["SourceScriptId"] = request.sourceScriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DuplicateScript",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DuplicateScriptResponse>(await this.callApi(params, req, runtime), new $_model.DuplicateScriptResponse({}));
  }

  /**
   * @param request - DuplicateScriptRequest
   * @returns DuplicateScriptResponse
   */
  async duplicateScript(request: $_model.DuplicateScriptRequest): Promise<$_model.DuplicateScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.duplicateScriptWithOptions(request, runtime);
  }

  /**
   * @param request - ExportScriptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportScriptResponse
   */
  async exportScriptWithOptions(request: $_model.ExportScriptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportScriptResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportScript",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportScriptResponse>(await this.callApi(params, req, runtime), new $_model.ExportScriptResponse({}));
  }

  /**
   * @param request - ExportScriptRequest
   * @returns ExportScriptResponse
   */
  async exportScript(request: $_model.ExportScriptRequest): Promise<$_model.ExportScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportScriptWithOptions(request, runtime);
  }

  /**
   * @param request - GenerateUploadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateUploadUrlResponse
   */
  async generateUploadUrlWithOptions(request: $_model.GenerateUploadUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateUploadUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateUploadUrl",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateUploadUrlResponse>(await this.callApi(params, req, runtime), new $_model.GenerateUploadUrlResponse({}));
  }

  /**
   * @param request - GenerateUploadUrlRequest
   * @returns GenerateUploadUrlResponse
   */
  async generateUploadUrl(request: $_model.GenerateUploadUrlRequest): Promise<$_model.GenerateUploadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateUploadUrlWithOptions(request, runtime);
  }

  /**
   * @param request - GetAfterAnswerDelayPlaybackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAfterAnswerDelayPlaybackResponse
   */
  async getAfterAnswerDelayPlaybackWithOptions(request: $_model.GetAfterAnswerDelayPlaybackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAfterAnswerDelayPlaybackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.entryId)) {
      query["EntryId"] = request.entryId;
    }

    if (!$dara.isNull(request.strategyLevel)) {
      query["StrategyLevel"] = request.strategyLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAfterAnswerDelayPlayback",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAfterAnswerDelayPlaybackResponse>(await this.callApi(params, req, runtime), new $_model.GetAfterAnswerDelayPlaybackResponse({}));
  }

  /**
   * @param request - GetAfterAnswerDelayPlaybackRequest
   * @returns GetAfterAnswerDelayPlaybackResponse
   */
  async getAfterAnswerDelayPlayback(request: $_model.GetAfterAnswerDelayPlaybackRequest): Promise<$_model.GetAfterAnswerDelayPlaybackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAfterAnswerDelayPlaybackWithOptions(request, runtime);
  }

  /**
   * @param request - GetAgentProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentProfileResponse
   */
  async getAgentProfileWithOptions(request: $_model.GetAgentProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentProfileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentProfileId)) {
      body["AgentProfileId"] = request.agentProfileId;
    }

    if (!$dara.isNull(request.appIp)) {
      body["AppIp"] = request.appIp;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentProfile",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentProfileResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentProfileResponse({}));
  }

  /**
   * @param request - GetAgentProfileRequest
   * @returns GetAgentProfileResponse
   */
  async getAgentProfile(request: $_model.GetAgentProfileRequest): Promise<$_model.GetAgentProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentProfileWithOptions(request, runtime);
  }

  /**
   * @param request - GetAgentProfileTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentProfileTemplateResponse
   */
  async getAgentProfileTemplateWithOptions(request: $_model.GetAgentProfileTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentProfileTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentProfileTemplateId)) {
      body["AgentProfileTemplateId"] = request.agentProfileTemplateId;
    }

    if (!$dara.isNull(request.appIp)) {
      body["AppIp"] = request.appIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentProfileTemplate",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentProfileTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentProfileTemplateResponse({}));
  }

  /**
   * @param request - GetAgentProfileTemplateRequest
   * @returns GetAgentProfileTemplateResponse
   */
  async getAgentProfileTemplate(request: $_model.GetAgentProfileTemplateRequest): Promise<$_model.GetAgentProfileTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentProfileTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - GetAnnotationMissionSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAnnotationMissionSummaryResponse
   */
  async getAnnotationMissionSummaryWithOptions(request: $_model.GetAnnotationMissionSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAnnotationMissionSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.annotationMissionId)) {
      query["AnnotationMissionId"] = request.annotationMissionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAnnotationMissionSummary",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAnnotationMissionSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetAnnotationMissionSummaryResponse({}));
  }

  /**
   * @param request - GetAnnotationMissionSummaryRequest
   * @returns GetAnnotationMissionSummaryResponse
   */
  async getAnnotationMissionSummary(request: $_model.GetAnnotationMissionSummaryRequest): Promise<$_model.GetAnnotationMissionSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAnnotationMissionSummaryWithOptions(request, runtime);
  }

  /**
   * @param request - GetAnnotationMissionTagInfoListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAnnotationMissionTagInfoListResponse
   */
  async getAnnotationMissionTagInfoListWithOptions(request: $_model.GetAnnotationMissionTagInfoListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAnnotationMissionTagInfoListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAnnotationMissionTagInfoList",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAnnotationMissionTagInfoListResponse>(await this.callApi(params, req, runtime), new $_model.GetAnnotationMissionTagInfoListResponse({}));
  }

  /**
   * @param request - GetAnnotationMissionTagInfoListRequest
   * @returns GetAnnotationMissionTagInfoListResponse
   */
  async getAnnotationMissionTagInfoList(request: $_model.GetAnnotationMissionTagInfoListRequest): Promise<$_model.GetAnnotationMissionTagInfoListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAnnotationMissionTagInfoListWithOptions(request, runtime);
  }

  /**
   * @param request - GetAsrServerInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAsrServerInfoResponse
   */
  async getAsrServerInfoWithOptions(request: $_model.GetAsrServerInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAsrServerInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.entryId)) {
      query["EntryId"] = request.entryId;
    }

    if (!$dara.isNull(request.strategyLevel)) {
      query["StrategyLevel"] = request.strategyLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAsrServerInfo",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAsrServerInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetAsrServerInfoResponse({}));
  }

  /**
   * @param request - GetAsrServerInfoRequest
   * @returns GetAsrServerInfoResponse
   */
  async getAsrServerInfo(request: $_model.GetAsrServerInfoRequest): Promise<$_model.GetAsrServerInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAsrServerInfoWithOptions(request, runtime);
  }

  /**
   * 获取异步外呼任务上传结果
   * 
   * @param request - GetAssignJobsAsyncResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAssignJobsAsyncResultResponse
   */
  async getAssignJobsAsyncResultWithOptions(request: $_model.GetAssignJobsAsyncResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAssignJobsAsyncResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.asyncTaskId)) {
      query["AsyncTaskId"] = request.asyncTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAssignJobsAsyncResult",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAssignJobsAsyncResultResponse>(await this.callApi(params, req, runtime), new $_model.GetAssignJobsAsyncResultResponse({}));
  }

  /**
   * 获取异步外呼任务上传结果
   * 
   * @param request - GetAssignJobsAsyncResultRequest
   * @returns GetAssignJobsAsyncResultResponse
   */
  async getAssignJobsAsyncResult(request: $_model.GetAssignJobsAsyncResultRequest): Promise<$_model.GetAssignJobsAsyncResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAssignJobsAsyncResultWithOptions(request, runtime);
  }

  /**
   * 获取系统策略配置
   * 
   * @param request - GetBaseStrategyPeriodRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBaseStrategyPeriodResponse
   */
  async getBaseStrategyPeriodWithOptions(request: $_model.GetBaseStrategyPeriodRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBaseStrategyPeriodResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.entryId)) {
      query["EntryId"] = request.entryId;
    }

    if (!$dara.isNull(request.strategyLevel)) {
      query["StrategyLevel"] = request.strategyLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBaseStrategyPeriod",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBaseStrategyPeriodResponse>(await this.callApi(params, req, runtime), new $_model.GetBaseStrategyPeriodResponse({}));
  }

  /**
   * 获取系统策略配置
   * 
   * @param request - GetBaseStrategyPeriodRequest
   * @returns GetBaseStrategyPeriodResponse
   */
  async getBaseStrategyPeriod(request: $_model.GetBaseStrategyPeriodRequest): Promise<$_model.GetBaseStrategyPeriodResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBaseStrategyPeriodWithOptions(request, runtime);
  }

  /**
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConcurrentConversationQuotaResponse
   */
  async getConcurrentConversationQuotaWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetConcurrentConversationQuotaResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetConcurrentConversationQuota",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConcurrentConversationQuotaResponse>(await this.callApi(params, req, runtime), new $_model.GetConcurrentConversationQuotaResponse({}));
  }

  /**
   * @returns GetConcurrentConversationQuotaResponse
   */
  async getConcurrentConversationQuota(): Promise<$_model.GetConcurrentConversationQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConcurrentConversationQuotaWithOptions(runtime);
  }

  /**
   * GetContactBlockList
   * 
   * @param request - GetContactBlockListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContactBlockListResponse
   */
  async getContactBlockListWithOptions(request: $_model.GetContactBlockListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetContactBlockListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.countTotalRow)) {
      query["CountTotalRow"] = request.countTotalRow;
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
      action: "GetContactBlockList",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetContactBlockListResponse>(await this.callApi(params, req, runtime), new $_model.GetContactBlockListResponse({}));
  }

  /**
   * GetContactBlockList
   * 
   * @param request - GetContactBlockListRequest
   * @returns GetContactBlockListResponse
   */
  async getContactBlockList(request: $_model.GetContactBlockListRequest): Promise<$_model.GetContactBlockListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getContactBlockListWithOptions(request, runtime);
  }

  /**
   * GetContactWhiteList
   * 
   * @param request - GetContactWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContactWhiteListResponse
   */
  async getContactWhiteListWithOptions(request: $_model.GetContactWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetContactWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.countTotalRow)) {
      query["CountTotalRow"] = request.countTotalRow;
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
      action: "GetContactWhiteList",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetContactWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.GetContactWhiteListResponse({}));
  }

  /**
   * GetContactWhiteList
   * 
   * @param request - GetContactWhiteListRequest
   * @returns GetContactWhiteListResponse
   */
  async getContactWhiteList(request: $_model.GetContactWhiteListRequest): Promise<$_model.GetContactWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getContactWhiteListWithOptions(request, runtime);
  }

  /**
   * @param request - GetCurrentConcurrencyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCurrentConcurrencyResponse
   */
  async getCurrentConcurrencyWithOptions(request: $_model.GetCurrentConcurrencyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCurrentConcurrencyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCurrentConcurrency",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCurrentConcurrencyResponse>(await this.callApi(params, req, runtime), new $_model.GetCurrentConcurrencyResponse({}));
  }

  /**
   * @param request - GetCurrentConcurrencyRequest
   * @returns GetCurrentConcurrencyResponse
   */
  async getCurrentConcurrency(request: $_model.GetCurrentConcurrencyRequest): Promise<$_model.GetCurrentConcurrencyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCurrentConcurrencyWithOptions(request, runtime);
  }

  /**
   * GetEmptyNumberNoMoreCallsInfo
   * 
   * @param request - GetEmptyNumberNoMoreCallsInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEmptyNumberNoMoreCallsInfoResponse
   */
  async getEmptyNumberNoMoreCallsInfoWithOptions(request: $_model.GetEmptyNumberNoMoreCallsInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEmptyNumberNoMoreCallsInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.entryId)) {
      query["EntryId"] = request.entryId;
    }

    if (!$dara.isNull(request.strategyLevel)) {
      query["StrategyLevel"] = request.strategyLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEmptyNumberNoMoreCallsInfo",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEmptyNumberNoMoreCallsInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetEmptyNumberNoMoreCallsInfoResponse({}));
  }

  /**
   * GetEmptyNumberNoMoreCallsInfo
   * 
   * @param request - GetEmptyNumberNoMoreCallsInfoRequest
   * @returns GetEmptyNumberNoMoreCallsInfoResponse
   */
  async getEmptyNumberNoMoreCallsInfo(request: $_model.GetEmptyNumberNoMoreCallsInfoRequest): Promise<$_model.GetEmptyNumberNoMoreCallsInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEmptyNumberNoMoreCallsInfoWithOptions(request, runtime);
  }

  /**
   * 获取上传信息
   * 
   * @param request - GetJobDataUploadParamsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobDataUploadParamsResponse
   */
  async getJobDataUploadParamsWithOptions(request: $_model.GetJobDataUploadParamsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobDataUploadParamsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.busiType)) {
      query["BusiType"] = request.busiType;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.uniqueId)) {
      query["UniqueId"] = request.uniqueId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobDataUploadParams",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobDataUploadParamsResponse>(await this.callApi(params, req, runtime), new $_model.GetJobDataUploadParamsResponse({}));
  }

  /**
   * 获取上传信息
   * 
   * @param request - GetJobDataUploadParamsRequest
   * @returns GetJobDataUploadParamsResponse
   */
  async getJobDataUploadParams(request: $_model.GetJobDataUploadParamsRequest): Promise<$_model.GetJobDataUploadParamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getJobDataUploadParamsWithOptions(request, runtime);
  }

  /**
   * GetMaxAttemptsPerDay
   * 
   * @param request - GetMaxAttemptsPerDayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMaxAttemptsPerDayResponse
   */
  async getMaxAttemptsPerDayWithOptions(request: $_model.GetMaxAttemptsPerDayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMaxAttemptsPerDayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.entryId)) {
      query["EntryId"] = request.entryId;
    }

    if (!$dara.isNull(request.strategyLevel)) {
      query["StrategyLevel"] = request.strategyLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMaxAttemptsPerDay",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMaxAttemptsPerDayResponse>(await this.callApi(params, req, runtime), new $_model.GetMaxAttemptsPerDayResponse({}));
  }

  /**
   * GetMaxAttemptsPerDay
   * 
   * @param request - GetMaxAttemptsPerDayRequest
   * @returns GetMaxAttemptsPerDayResponse
   */
  async getMaxAttemptsPerDay(request: $_model.GetMaxAttemptsPerDayRequest): Promise<$_model.GetMaxAttemptsPerDayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMaxAttemptsPerDayWithOptions(request, runtime);
  }

  /**
   * 获取号码库模板下载链接
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNumberDistrictInfoTemplateDownloadUrlResponse
   */
  async getNumberDistrictInfoTemplateDownloadUrlWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetNumberDistrictInfoTemplateDownloadUrlResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetNumberDistrictInfoTemplateDownloadUrl",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNumberDistrictInfoTemplateDownloadUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetNumberDistrictInfoTemplateDownloadUrlResponse({}));
  }

  /**
   * 获取号码库模板下载链接
   * @returns GetNumberDistrictInfoTemplateDownloadUrlResponse
   */
  async getNumberDistrictInfoTemplateDownloadUrl(): Promise<$_model.GetNumberDistrictInfoTemplateDownloadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNumberDistrictInfoTemplateDownloadUrlWithOptions(runtime);
  }

  /**
   * 获取非对称加密算法公钥
   * 
   * @param request - GetPublicKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPublicKeyResponse
   */
  async getPublicKeyWithOptions(request: $_model.GetPublicKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPublicKeyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetPublicKey",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPublicKeyResponse>(await this.callApi(params, req, runtime), new $_model.GetPublicKeyResponse({}));
  }

  /**
   * 获取非对称加密算法公钥
   * 
   * @param request - GetPublicKeyRequest
   * @returns GetPublicKeyResponse
   */
  async getPublicKey(request: $_model.GetPublicKeyRequest): Promise<$_model.GetPublicKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPublicKeyWithOptions(request, runtime);
  }

  /**
   * GetRealtimeConcurrencyReport
   * 
   * @param request - GetRealtimeConcurrencyReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRealtimeConcurrencyReportResponse
   */
  async getRealtimeConcurrencyReportWithOptions(request: $_model.GetRealtimeConcurrencyReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRealtimeConcurrencyReportResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRealtimeConcurrencyReport",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRealtimeConcurrencyReportResponse>(await this.callApi(params, req, runtime), new $_model.GetRealtimeConcurrencyReportResponse({}));
  }

  /**
   * GetRealtimeConcurrencyReport
   * 
   * @param request - GetRealtimeConcurrencyReportRequest
   * @returns GetRealtimeConcurrencyReportResponse
   */
  async getRealtimeConcurrencyReport(request: $_model.GetRealtimeConcurrencyReportRequest): Promise<$_model.GetRealtimeConcurrencyReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRealtimeConcurrencyReportWithOptions(request, runtime);
  }

  /**
   * GetSummaryInfo
   * 
   * @param request - GetSummaryInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSummaryInfoResponse
   */
  async getSummaryInfoWithOptions(request: $_model.GetSummaryInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSummaryInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSummaryInfo",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSummaryInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetSummaryInfoResponse({}));
  }

  /**
   * GetSummaryInfo
   * 
   * @param request - GetSummaryInfoRequest
   * @returns GetSummaryInfoResponse
   */
  async getSummaryInfo(request: $_model.GetSummaryInfoRequest): Promise<$_model.GetSummaryInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSummaryInfoWithOptions(request, runtime);
  }

  /**
   * 根据TaskId获取Task信息
   * 
   * @param request - GetTaskByUuidRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskByUuidResponse
   */
  async getTaskByUuidWithOptions(request: $_model.GetTaskByUuidRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskByUuidResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskByUuid",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskByUuidResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskByUuidResponse({}));
  }

  /**
   * 根据TaskId获取Task信息
   * 
   * @param request - GetTaskByUuidRequest
   * @returns GetTaskByUuidResponse
   */
  async getTaskByUuid(request: $_model.GetTaskByUuidRequest): Promise<$_model.GetTaskByUuidResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTaskByUuidWithOptions(request, runtime);
  }

  /**
   * GetVersion
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVersionResponse
   */
  async getVersionWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetVersion",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetVersionResponse({}));
  }

  /**
   * GetVersion
   * @returns GetVersionResponse
   */
  async getVersion(): Promise<$_model.GetVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVersionWithOptions(runtime);
  }

  /**
   * @param request - ImportScriptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportScriptResponse
   */
  async importScriptWithOptions(request: $_model.ImportScriptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportScriptResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nluEngine)) {
      query["NluEngine"] = request.nluEngine;
    }

    if (!$dara.isNull(request.signatureUrl)) {
      query["SignatureUrl"] = request.signatureUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportScript",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportScriptResponse>(await this.callApi(params, req, runtime), new $_model.ImportScriptResponse({}));
  }

  /**
   * @param request - ImportScriptRequest
   * @returns ImportScriptResponse
   */
  async importScript(request: $_model.ImportScriptRequest): Promise<$_model.ImportScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importScriptWithOptions(request, runtime);
  }

  /**
   * InflightTaskTimeout
   * 
   * @param request - InflightTaskTimeoutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InflightTaskTimeoutResponse
   */
  async inflightTaskTimeoutWithOptions(request: $_model.InflightTaskTimeoutRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InflightTaskTimeoutResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceOwnerId)) {
      query["InstanceOwnerId"] = request.instanceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InflightTaskTimeout",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InflightTaskTimeoutResponse>(await this.callApi(params, req, runtime), new $_model.InflightTaskTimeoutResponse({}));
  }

  /**
   * InflightTaskTimeout
   * 
   * @param request - InflightTaskTimeoutRequest
   * @returns InflightTaskTimeoutResponse
   */
  async inflightTaskTimeout(request: $_model.InflightTaskTimeoutRequest): Promise<$_model.InflightTaskTimeoutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.inflightTaskTimeoutWithOptions(request, runtime);
  }

  /**
   * @param request - ListAgentProfilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentProfilesResponse
   */
  async listAgentProfilesWithOptions(request: $_model.ListAgentProfilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentProfilesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appIp)) {
      body["AppIp"] = request.appIp;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      body["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAgentProfiles",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAgentProfilesResponse>(await this.callApi(params, req, runtime), new $_model.ListAgentProfilesResponse({}));
  }

  /**
   * @param request - ListAgentProfilesRequest
   * @returns ListAgentProfilesResponse
   */
  async listAgentProfiles(request: $_model.ListAgentProfilesRequest): Promise<$_model.ListAgentProfilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAgentProfilesWithOptions(request, runtime);
  }

  /**
   * 租户绑定号码列表
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAllTenantBindNumberBindingResponse
   */
  async listAllTenantBindNumberBindingWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListAllTenantBindNumberBindingResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListAllTenantBindNumberBinding",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAllTenantBindNumberBindingResponse>(await this.callApi(params, req, runtime), new $_model.ListAllTenantBindNumberBindingResponse({}));
  }

  /**
   * 租户绑定号码列表
   * @returns ListAllTenantBindNumberBindingResponse
   */
  async listAllTenantBindNumberBinding(): Promise<$_model.ListAllTenantBindNumberBindingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAllTenantBindNumberBindingWithOptions(runtime);
  }

  /**
   * 标注中心
   * 
   * @param request - ListAnnotationMissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAnnotationMissionResponse
   */
  async listAnnotationMissionWithOptions(request: $_model.ListAnnotationMissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAnnotationMissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.annotationMissionId)) {
      query["AnnotationMissionId"] = request.annotationMissionId;
    }

    if (!$dara.isNull(request.annotationMissionName)) {
      query["AnnotationMissionName"] = request.annotationMissionName;
    }

    if (!$dara.isNull(request.annotationStatusListFilter)) {
      query["AnnotationStatusListFilter"] = request.annotationStatusListFilter;
    }

    if (!$dara.isNull(request.annotationStatusListStringFilter)) {
      query["AnnotationStatusListStringFilter"] = request.annotationStatusListStringFilter;
    }

    if (!$dara.isNull(request.createTimeEndFilter)) {
      query["CreateTimeEndFilter"] = request.createTimeEndFilter;
    }

    if (!$dara.isNull(request.createTimeStartFilter)) {
      query["CreateTimeStartFilter"] = request.createTimeStartFilter;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAnnotationMission",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAnnotationMissionResponse>(await this.callApi(params, req, runtime), new $_model.ListAnnotationMissionResponse({}));
  }

  /**
   * 标注中心
   * 
   * @param request - ListAnnotationMissionRequest
   * @returns ListAnnotationMissionResponse
   */
  async listAnnotationMission(request: $_model.ListAnnotationMissionRequest): Promise<$_model.ListAnnotationMissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAnnotationMissionWithOptions(request, runtime);
  }

  /**
   * ListAnnotationMissionSession
   * 
   * @param request - ListAnnotationMissionSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAnnotationMissionSessionResponse
   */
  async listAnnotationMissionSessionWithOptions(request: $_model.ListAnnotationMissionSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAnnotationMissionSessionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.annotationMissionId)) {
      query["AnnotationMissionId"] = request.annotationMissionId;
    }

    if (!$dara.isNull(request.annotationMissionSessionId)) {
      query["AnnotationMissionSessionId"] = request.annotationMissionSessionId;
    }

    if (!$dara.isNull(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.includeStatusListJsonString)) {
      query["IncludeStatusListJsonString"] = request.includeStatusListJsonString;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAnnotationMissionSession",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAnnotationMissionSessionResponse>(await this.callApi(params, req, runtime), new $_model.ListAnnotationMissionSessionResponse({}));
  }

  /**
   * ListAnnotationMissionSession
   * 
   * @param request - ListAnnotationMissionSessionRequest
   * @returns ListAnnotationMissionSessionResponse
   */
  async listAnnotationMissionSession(request: $_model.ListAnnotationMissionSessionRequest): Promise<$_model.ListAnnotationMissionSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAnnotationMissionSessionWithOptions(request, runtime);
  }

  /**
   * @param request - ListApiPluginsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApiPluginsResponse
   */
  async listApiPluginsWithOptions(request: $_model.ListApiPluginsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApiPluginsResponse> {
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

    if (!$dara.isNull(request.uuidsJson)) {
      query["UuidsJson"] = request.uuidsJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApiPlugins",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApiPluginsResponse>(await this.callApi(params, req, runtime), new $_model.ListApiPluginsResponse({}));
  }

  /**
   * @param request - ListApiPluginsRequest
   * @returns ListApiPluginsResponse
   */
  async listApiPlugins(request: $_model.ListApiPluginsRequest): Promise<$_model.ListApiPluginsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApiPluginsWithOptions(request, runtime);
  }

  /**
   * ListBeebotIntent
   * 
   * @param request - ListBeebotIntentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBeebotIntentResponse
   */
  async listBeebotIntentWithOptions(request: $_model.ListBeebotIntentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBeebotIntentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.intentName)) {
      query["IntentName"] = request.intentName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBeebotIntent",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBeebotIntentResponse>(await this.callApi(params, req, runtime), new $_model.ListBeebotIntentResponse({}));
  }

  /**
   * ListBeebotIntent
   * 
   * @param request - ListBeebotIntentRequest
   * @returns ListBeebotIntentResponse
   */
  async listBeebotIntent(request: $_model.ListBeebotIntentRequest): Promise<$_model.ListBeebotIntentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBeebotIntentWithOptions(request, runtime);
  }

  /**
   * ListBeebotIntentLgf
   * 
   * @param request - ListBeebotIntentLgfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBeebotIntentLgfResponse
   */
  async listBeebotIntentLgfWithOptions(request: $_model.ListBeebotIntentLgfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBeebotIntentLgfResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.intentId)) {
      query["IntentId"] = request.intentId;
    }

    if (!$dara.isNull(request.lgfText)) {
      query["LgfText"] = request.lgfText;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBeebotIntentLgf",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBeebotIntentLgfResponse>(await this.callApi(params, req, runtime), new $_model.ListBeebotIntentLgfResponse({}));
  }

  /**
   * ListBeebotIntentLgf
   * 
   * @param request - ListBeebotIntentLgfRequest
   * @returns ListBeebotIntentLgfResponse
   */
  async listBeebotIntentLgf(request: $_model.ListBeebotIntentLgfRequest): Promise<$_model.ListBeebotIntentLgfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBeebotIntentLgfWithOptions(request, runtime);
  }

  /**
   * ListBeebotIntentUserSay
   * 
   * @param request - ListBeebotIntentUserSayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBeebotIntentUserSayResponse
   */
  async listBeebotIntentUserSayWithOptions(request: $_model.ListBeebotIntentUserSayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBeebotIntentUserSayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.intentId)) {
      query["IntentId"] = request.intentId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBeebotIntentUserSay",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBeebotIntentUserSayResponse>(await this.callApi(params, req, runtime), new $_model.ListBeebotIntentUserSayResponse({}));
  }

  /**
   * ListBeebotIntentUserSay
   * 
   * @param request - ListBeebotIntentUserSayRequest
   * @returns ListBeebotIntentUserSayResponse
   */
  async listBeebotIntentUserSay(request: $_model.ListBeebotIntentUserSayRequest): Promise<$_model.ListBeebotIntentUserSayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBeebotIntentUserSayWithOptions(request, runtime);
  }

  /**
   * @param request - ListChatbotInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChatbotInstancesResponse
   */
  async listChatbotInstancesWithOptions(request: $_model.ListChatbotInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListChatbotInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
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
      action: "ListChatbotInstances",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListChatbotInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListChatbotInstancesResponse({}));
  }

  /**
   * @param request - ListChatbotInstancesRequest
   * @returns ListChatbotInstancesResponse
   */
  async listChatbotInstances(request: $_model.ListChatbotInstancesRequest): Promise<$_model.ListChatbotInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listChatbotInstancesWithOptions(request, runtime);
  }

  /**
   * @param request - ListDialogueFlowsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDialogueFlowsResponse
   */
  async listDialogueFlowsWithOptions(request: $_model.ListDialogueFlowsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDialogueFlowsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDialogueFlows",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDialogueFlowsResponse>(await this.callApi(params, req, runtime), new $_model.ListDialogueFlowsResponse({}));
  }

  /**
   * @param request - ListDialogueFlowsRequest
   * @returns ListDialogueFlowsResponse
   */
  async listDialogueFlows(request: $_model.ListDialogueFlowsRequest): Promise<$_model.ListDialogueFlowsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDialogueFlowsWithOptions(request, runtime);
  }

  /**
   * @param request - ListDownloadTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDownloadTasksResponse
   */
  async listDownloadTasksWithOptions(request: $_model.ListDownloadTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDownloadTasksResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDownloadTasks",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDownloadTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListDownloadTasksResponse({}));
  }

  /**
   * @param request - ListDownloadTasksRequest
   * @returns ListDownloadTasksResponse
   */
  async listDownloadTasks(request: $_model.ListDownloadTasksRequest): Promise<$_model.ListDownloadTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDownloadTasksWithOptions(request, runtime);
  }

  /**
   * @param request - ListFlashSmsTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlashSmsTemplatesResponse
   */
  async listFlashSmsTemplatesWithOptions(request: $_model.ListFlashSmsTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFlashSmsTemplatesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFlashSmsTemplates",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFlashSmsTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListFlashSmsTemplatesResponse({}));
  }

  /**
   * @param request - ListFlashSmsTemplatesRequest
   * @returns ListFlashSmsTemplatesResponse
   */
  async listFlashSmsTemplates(request: $_model.ListFlashSmsTemplatesRequest): Promise<$_model.ListFlashSmsTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFlashSmsTemplatesWithOptions(request, runtime);
  }

  /**
   * @param request - ListGlobalQuestionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGlobalQuestionsResponse
   */
  async listGlobalQuestionsWithOptions(request: $_model.ListGlobalQuestionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGlobalQuestionsResponse> {
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

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGlobalQuestions",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGlobalQuestionsResponse>(await this.callApi(params, req, runtime), new $_model.ListGlobalQuestionsResponse({}));
  }

  /**
   * @param request - ListGlobalQuestionsRequest
   * @returns ListGlobalQuestionsResponse
   */
  async listGlobalQuestions(request: $_model.ListGlobalQuestionsRequest): Promise<$_model.ListGlobalQuestionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGlobalQuestionsWithOptions(request, runtime);
  }

  /**
   * @param request - ListInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(request: $_model.ListInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesResponse({}));
  }

  /**
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: $_model.ListInstancesRequest): Promise<$_model.ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  /**
   * 意图列表
   * 
   * @param request - ListIntentionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntentionsResponse
   */
  async listIntentionsWithOptions(request: $_model.ListIntentionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIntentionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.annotationMissionDataSourceType)) {
      query["AnnotationMissionDataSourceType"] = request.annotationMissionDataSourceType;
    }

    if (!$dara.isNull(request.botId)) {
      query["BotId"] = request.botId;
    }

    if (!$dara.isNull(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.intentId)) {
      query["IntentId"] = request.intentId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.userNick)) {
      query["UserNick"] = request.userNick;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIntentions",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIntentionsResponse>(await this.callApi(params, req, runtime), new $_model.ListIntentionsResponse({}));
  }

  /**
   * 意图列表
   * 
   * @param request - ListIntentionsRequest
   * @returns ListIntentionsResponse
   */
  async listIntentions(request: $_model.ListIntentionsRequest): Promise<$_model.ListIntentionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIntentionsWithOptions(request, runtime);
  }

  /**
   * @param request - ListIntentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntentsResponse
   */
  async listIntentsWithOptions(request: $_model.ListIntentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIntentsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIntents",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIntentsResponse>(await this.callApi(params, req, runtime), new $_model.ListIntentsResponse({}));
  }

  /**
   * @param request - ListIntentsRequest
   * @returns ListIntentsResponse
   */
  async listIntents(request: $_model.ListIntentsRequest): Promise<$_model.ListIntentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIntentsWithOptions(request, runtime);
  }

  /**
   * @param request - ListJobGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobGroupsResponse
   */
  async listJobGroupsWithOptions(request: $_model.ListJobGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.asyncQuery)) {
      query["AsyncQuery"] = request.asyncQuery;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobGroupStatusFilter)) {
      query["JobGroupStatusFilter"] = request.jobGroupStatusFilter;
    }

    if (!$dara.isNull(request.onlyMinConcurrencyEnabled)) {
      query["OnlyMinConcurrencyEnabled"] = request.onlyMinConcurrencyEnabled;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchText)) {
      query["SearchText"] = request.searchText;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobGroups",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListJobGroupsResponse({}));
  }

  /**
   * @param request - ListJobGroupsRequest
   * @returns ListJobGroupsResponse
   */
  async listJobGroups(request: $_model.ListJobGroupsRequest): Promise<$_model.ListJobGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobGroupsWithOptions(request, runtime);
  }

  /**
   * @param request - ListJobGroupsAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobGroupsAsyncResponse
   */
  async listJobGroupsAsyncWithOptions(request: $_model.ListJobGroupsAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobGroupsAsyncResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobGroupsAsync",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobGroupsAsyncResponse>(await this.callApi(params, req, runtime), new $_model.ListJobGroupsAsyncResponse({}));
  }

  /**
   * @param request - ListJobGroupsAsyncRequest
   * @returns ListJobGroupsAsyncResponse
   */
  async listJobGroupsAsync(request: $_model.ListJobGroupsAsyncRequest): Promise<$_model.ListJobGroupsAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobGroupsAsyncWithOptions(request, runtime);
  }

  /**
   * ListJobs
   * 
   * @param request - ListJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobsResponse
   */
  async listJobsWithOptions(request: $_model.ListJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobs",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListJobsResponse({}));
  }

  /**
   * ListJobs
   * 
   * @param request - ListJobsRequest
   * @returns ListJobsResponse
   */
  async listJobs(request: $_model.ListJobsRequest): Promise<$_model.ListJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobsWithOptions(request, runtime);
  }

  /**
   * @param request - ListJobsByGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobsByGroupResponse
   */
  async listJobsByGroupWithOptions(request: $_model.ListJobsByGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobsByGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobFailureReason)) {
      query["JobFailureReason"] = request.jobFailureReason;
    }

    if (!$dara.isNull(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    if (!$dara.isNull(request.jobStatus)) {
      query["JobStatus"] = request.jobStatus;
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
      action: "ListJobsByGroup",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobsByGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListJobsByGroupResponse({}));
  }

  /**
   * @param request - ListJobsByGroupRequest
   * @returns ListJobsByGroupResponse
   */
  async listJobsByGroup(request: $_model.ListJobsByGroupRequest): Promise<$_model.ListJobsByGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobsByGroupWithOptions(request, runtime);
  }

  /**
   * @param request - ListOutboundCallNumbersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOutboundCallNumbersResponse
   */
  async listOutboundCallNumbersWithOptions(request: $_model.ListOutboundCallNumbersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOutboundCallNumbersResponse> {
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
      action: "ListOutboundCallNumbers",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOutboundCallNumbersResponse>(await this.callApi(params, req, runtime), new $_model.ListOutboundCallNumbersResponse({}));
  }

  /**
   * @param request - ListOutboundCallNumbersRequest
   * @returns ListOutboundCallNumbersResponse
   */
  async listOutboundCallNumbers(request: $_model.ListOutboundCallNumbersRequest): Promise<$_model.ListOutboundCallNumbersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOutboundCallNumbersWithOptions(request, runtime);
  }

  /**
   * @param request - ListResourceTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceTagsResponse
   */
  async listResourceTagsWithOptions(request: $_model.ListResourceTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceTags",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceTagsResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceTagsResponse({}));
  }

  /**
   * @param request - ListResourceTagsRequest
   * @returns ListResourceTagsResponse
   */
  async listResourceTags(request: $_model.ListResourceTagsRequest): Promise<$_model.ListResourceTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourceTagsWithOptions(request, runtime);
  }

  /**
   * @param request - ListScriptPublishHistoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScriptPublishHistoriesResponse
   */
  async listScriptPublishHistoriesWithOptions(request: $_model.ListScriptPublishHistoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListScriptPublishHistoriesResponse> {
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

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScriptPublishHistories",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScriptPublishHistoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListScriptPublishHistoriesResponse({}));
  }

  /**
   * @param request - ListScriptPublishHistoriesRequest
   * @returns ListScriptPublishHistoriesResponse
   */
  async listScriptPublishHistories(request: $_model.ListScriptPublishHistoriesRequest): Promise<$_model.ListScriptPublishHistoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listScriptPublishHistoriesWithOptions(request, runtime);
  }

  /**
   * @param request - ListScriptRecordingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScriptRecordingResponse
   */
  async listScriptRecordingWithOptions(request: $_model.ListScriptRecordingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListScriptRecordingResponse> {
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

    if (!$dara.isNull(request.refIdsJson)) {
      query["RefIdsJson"] = request.refIdsJson;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.search)) {
      query["Search"] = request.search;
    }

    if (!$dara.isNull(request.statesJson)) {
      query["StatesJson"] = request.statesJson;
    }

    if (!$dara.isNull(request.uuidsJson)) {
      query["UuidsJson"] = request.uuidsJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScriptRecording",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScriptRecordingResponse>(await this.callApi(params, req, runtime), new $_model.ListScriptRecordingResponse({}));
  }

  /**
   * @param request - ListScriptRecordingRequest
   * @returns ListScriptRecordingResponse
   */
  async listScriptRecording(request: $_model.ListScriptRecordingRequest): Promise<$_model.ListScriptRecordingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listScriptRecordingWithOptions(request, runtime);
  }

  /**
   * 获取场景中当前使用的变量
   * 
   * @param request - ListScriptVariablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScriptVariablesResponse
   */
  async listScriptVariablesWithOptions(request: $_model.ListScriptVariablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListScriptVariablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sandbox)) {
      query["Sandbox"] = request.sandbox;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScriptVariables",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScriptVariablesResponse>(await this.callApi(params, req, runtime), new $_model.ListScriptVariablesResponse({}));
  }

  /**
   * 获取场景中当前使用的变量
   * 
   * @param request - ListScriptVariablesRequest
   * @returns ListScriptVariablesResponse
   */
  async listScriptVariables(request: $_model.ListScriptVariablesRequest): Promise<$_model.ListScriptVariablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listScriptVariablesWithOptions(request, runtime);
  }

  /**
   * @param request - ListScriptVoiceConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScriptVoiceConfigsResponse
   */
  async listScriptVoiceConfigsWithOptions(request: $_model.ListScriptVoiceConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListScriptVoiceConfigsResponse> {
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

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScriptVoiceConfigs",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScriptVoiceConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListScriptVoiceConfigsResponse({}));
  }

  /**
   * @param request - ListScriptVoiceConfigsRequest
   * @returns ListScriptVoiceConfigsResponse
   */
  async listScriptVoiceConfigs(request: $_model.ListScriptVoiceConfigsRequest): Promise<$_model.ListScriptVoiceConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listScriptVoiceConfigsWithOptions(request, runtime);
  }

  /**
   * -
   * 
   * @param request - ListScriptsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScriptsResponse
   */
  async listScriptsWithOptions(request: $_model.ListScriptsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListScriptsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nluEngine)) {
      query["NluEngine"] = request.nluEngine;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.scriptName)) {
      query["ScriptName"] = request.scriptName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScripts",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScriptsResponse>(await this.callApi(params, req, runtime), new $_model.ListScriptsResponse({}));
  }

  /**
   * -
   * 
   * @param request - ListScriptsRequest
   * @returns ListScriptsResponse
   */
  async listScripts(request: $_model.ListScriptsRequest): Promise<$_model.ListScriptsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listScriptsWithOptions(request, runtime);
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
      version: "2019-12-26",
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
   * @param request - ListTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagsResponse
   */
  async listTagsWithOptions(request: $_model.ListTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTags",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagsResponse>(await this.callApi(params, req, runtime), new $_model.ListTagsResponse({}));
  }

  /**
   * @param request - ListTagsRequest
   * @returns ListTagsResponse
   */
  async listTags(request: $_model.ListTagsRequest): Promise<$_model.ListTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagsWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - ModifyAgentProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAgentProfileResponse
   */
  async modifyAgentProfileWithOptions(tmpReq: $_model.ModifyAgentProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAgentProfileResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyAgentProfileShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.faqCategoryIds)) {
      request.faqCategoryIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.faqCategoryIds, "FaqCategoryIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentProfileId)) {
      body["AgentProfileId"] = request.agentProfileId;
    }

    if (!$dara.isNull(request.apiPluginJson)) {
      body["ApiPluginJson"] = request.apiPluginJson;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.faqCategoryIdsShrink)) {
      body["FaqCategoryIds"] = request.faqCategoryIdsShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instructionJson)) {
      body["InstructionJson"] = request.instructionJson;
    }

    if (!$dara.isNull(request.labelsJson)) {
      body["LabelsJson"] = request.labelsJson;
    }

    if (!$dara.isNull(request.model)) {
      body["Model"] = request.model;
    }

    if (!$dara.isNull(request.modelConfig)) {
      body["ModelConfig"] = request.modelConfig;
    }

    if (!$dara.isNull(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.promptJson)) {
      body["PromptJson"] = request.promptJson;
    }

    if (!$dara.isNull(request.scenario)) {
      body["Scenario"] = request.scenario;
    }

    if (!$dara.isNull(request.variablesJson)) {
      body["VariablesJson"] = request.variablesJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAgentProfile",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAgentProfileResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAgentProfileResponse({}));
  }

  /**
   * @param request - ModifyAgentProfileRequest
   * @returns ModifyAgentProfileResponse
   */
  async modifyAgentProfile(request: $_model.ModifyAgentProfileRequest): Promise<$_model.ModifyAgentProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAgentProfileWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyAnnotationMissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAnnotationMissionResponse
   */
  async modifyAnnotationMissionWithOptions(request: $_model.ModifyAnnotationMissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAnnotationMissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.annotationMissionId)) {
      query["AnnotationMissionId"] = request.annotationMissionId;
    }

    if (!$dara.isNull(request.annotationMissionName)) {
      query["AnnotationMissionName"] = request.annotationMissionName;
    }

    if (!$dara.isNull(request.annotationStatus)) {
      query["AnnotationStatus"] = request.annotationStatus;
    }

    if (!$dara.isNull(request.delete)) {
      query["Delete"] = request.delete;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAnnotationMission",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAnnotationMissionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAnnotationMissionResponse({}));
  }

  /**
   * @param request - ModifyAnnotationMissionRequest
   * @returns ModifyAnnotationMissionResponse
   */
  async modifyAnnotationMission(request: $_model.ModifyAnnotationMissionRequest): Promise<$_model.ModifyAnnotationMissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAnnotationMissionWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyBatchJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBatchJobsResponse
   */
  async modifyBatchJobsWithOptions(request: $_model.ModifyBatchJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBatchJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.batchJobName)) {
      query["BatchJobName"] = request.batchJobName;
    }

    if (!$dara.isNull(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobFilePath)) {
      query["JobFilePath"] = request.jobFilePath;
    }

    if (!$dara.isNull(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    if (!$dara.isNull(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.strategyJson)) {
      query["StrategyJson"] = request.strategyJson;
    }

    if (!$dara.isNull(request.submitted)) {
      query["Submitted"] = request.submitted;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBatchJobs",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyBatchJobsResponse>(await this.callApi(params, req, runtime), new $_model.ModifyBatchJobsResponse({}));
  }

  /**
   * @param request - ModifyBatchJobsRequest
   * @returns ModifyBatchJobsResponse
   */
  async modifyBatchJobs(request: $_model.ModifyBatchJobsRequest): Promise<$_model.ModifyBatchJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBatchJobsWithOptions(request, runtime);
  }

  /**
   * ModifyBeebotIntent
   * 
   * @param tmpReq - ModifyBeebotIntentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBeebotIntentResponse
   */
  async modifyBeebotIntentWithOptions(tmpReq: $_model.ModifyBeebotIntentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBeebotIntentResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyBeebotIntentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.intentDefinition)) {
      request.intentDefinitionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.intentDefinition, "IntentDefinition", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.intentDefinitionShrink)) {
      query["IntentDefinition"] = request.intentDefinitionShrink;
    }

    if (!$dara.isNull(request.intentId)) {
      query["IntentId"] = request.intentId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBeebotIntent",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyBeebotIntentResponse>(await this.callApi(params, req, runtime), new $_model.ModifyBeebotIntentResponse({}));
  }

  /**
   * ModifyBeebotIntent
   * 
   * @param request - ModifyBeebotIntentRequest
   * @returns ModifyBeebotIntentResponse
   */
  async modifyBeebotIntent(request: $_model.ModifyBeebotIntentRequest): Promise<$_model.ModifyBeebotIntentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBeebotIntentWithOptions(request, runtime);
  }

  /**
   * ModifyBeebotIntentLgf
   * 
   * @param tmpReq - ModifyBeebotIntentLgfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBeebotIntentLgfResponse
   */
  async modifyBeebotIntentLgfWithOptions(tmpReq: $_model.ModifyBeebotIntentLgfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBeebotIntentLgfResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyBeebotIntentLgfShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.lgfDefinition)) {
      request.lgfDefinitionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lgfDefinition, "LgfDefinition", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lgfDefinitionShrink)) {
      query["LgfDefinition"] = request.lgfDefinitionShrink;
    }

    if (!$dara.isNull(request.lgfId)) {
      query["LgfId"] = request.lgfId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBeebotIntentLgf",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyBeebotIntentLgfResponse>(await this.callApi(params, req, runtime), new $_model.ModifyBeebotIntentLgfResponse({}));
  }

  /**
   * ModifyBeebotIntentLgf
   * 
   * @param request - ModifyBeebotIntentLgfRequest
   * @returns ModifyBeebotIntentLgfResponse
   */
  async modifyBeebotIntentLgf(request: $_model.ModifyBeebotIntentLgfRequest): Promise<$_model.ModifyBeebotIntentLgfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBeebotIntentLgfWithOptions(request, runtime);
  }

  /**
   * ModifyBeebotIntentUserSay
   * 
   * @param tmpReq - ModifyBeebotIntentUserSayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBeebotIntentUserSayResponse
   */
  async modifyBeebotIntentUserSayWithOptions(tmpReq: $_model.ModifyBeebotIntentUserSayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBeebotIntentUserSayResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyBeebotIntentUserSayShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userSayDefinition)) {
      request.userSayDefinitionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userSayDefinition, "UserSayDefinition", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.userSayDefinitionShrink)) {
      query["UserSayDefinition"] = request.userSayDefinitionShrink;
    }

    if (!$dara.isNull(request.userSayId)) {
      query["UserSayId"] = request.userSayId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBeebotIntentUserSay",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyBeebotIntentUserSayResponse>(await this.callApi(params, req, runtime), new $_model.ModifyBeebotIntentUserSayResponse({}));
  }

  /**
   * ModifyBeebotIntentUserSay
   * 
   * @param request - ModifyBeebotIntentUserSayRequest
   * @returns ModifyBeebotIntentUserSayResponse
   */
  async modifyBeebotIntentUserSay(request: $_model.ModifyBeebotIntentUserSayRequest): Promise<$_model.ModifyBeebotIntentUserSayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBeebotIntentUserSayWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyDialogueFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDialogueFlowResponse
   */
  async modifyDialogueFlowWithOptions(request: $_model.ModifyDialogueFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDialogueFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dialogueFlowDefinition)) {
      query["DialogueFlowDefinition"] = request.dialogueFlowDefinition;
    }

    if (!$dara.isNull(request.dialogueFlowId)) {
      query["DialogueFlowId"] = request.dialogueFlowId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isDrafted)) {
      query["IsDrafted"] = request.isDrafted;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDialogueFlow",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDialogueFlowResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDialogueFlowResponse({}));
  }

  /**
   * @param request - ModifyDialogueFlowRequest
   * @returns ModifyDialogueFlowResponse
   */
  async modifyDialogueFlow(request: $_model.ModifyDialogueFlowRequest): Promise<$_model.ModifyDialogueFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDialogueFlowWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyEmptyNumberNoMoreCallsInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyEmptyNumberNoMoreCallsInfoResponse
   */
  async modifyEmptyNumberNoMoreCallsInfoWithOptions(request: $_model.ModifyEmptyNumberNoMoreCallsInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyEmptyNumberNoMoreCallsInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.emptyNumberNoMoreCalls)) {
      query["EmptyNumberNoMoreCalls"] = request.emptyNumberNoMoreCalls;
    }

    if (!$dara.isNull(request.entryId)) {
      query["EntryId"] = request.entryId;
    }

    if (!$dara.isNull(request.strategyLevel)) {
      query["StrategyLevel"] = request.strategyLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyEmptyNumberNoMoreCallsInfo",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyEmptyNumberNoMoreCallsInfoResponse>(await this.callApi(params, req, runtime), new $_model.ModifyEmptyNumberNoMoreCallsInfoResponse({}));
  }

  /**
   * @param request - ModifyEmptyNumberNoMoreCallsInfoRequest
   * @returns ModifyEmptyNumberNoMoreCallsInfoResponse
   */
  async modifyEmptyNumberNoMoreCallsInfo(request: $_model.ModifyEmptyNumberNoMoreCallsInfoRequest): Promise<$_model.ModifyEmptyNumberNoMoreCallsInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyEmptyNumberNoMoreCallsInfoWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyGlobalQuestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyGlobalQuestionResponse
   */
  async modifyGlobalQuestionWithOptions(request: $_model.ModifyGlobalQuestionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyGlobalQuestionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.answers)) {
      query["Answers"] = request.answers;
    }

    if (!$dara.isNull(request.globalQuestionId)) {
      query["GlobalQuestionId"] = request.globalQuestionId;
    }

    if (!$dara.isNull(request.globalQuestionName)) {
      query["GlobalQuestionName"] = request.globalQuestionName;
    }

    if (!$dara.isNull(request.globalQuestionType)) {
      query["GlobalQuestionType"] = request.globalQuestionType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.questions)) {
      query["Questions"] = request.questions;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyGlobalQuestion",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyGlobalQuestionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyGlobalQuestionResponse({}));
  }

  /**
   * @param request - ModifyGlobalQuestionRequest
   * @returns ModifyGlobalQuestionResponse
   */
  async modifyGlobalQuestion(request: $_model.ModifyGlobalQuestionRequest): Promise<$_model.ModifyGlobalQuestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyGlobalQuestionWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceResponse
   */
  async modifyInstanceWithOptions(request: $_model.ModifyInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!$dara.isNull(request.instanceDescription)) {
      query["InstanceDescription"] = request.instanceDescription;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.maxConcurrentConversation)) {
      query["MaxConcurrentConversation"] = request.maxConcurrentConversation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstance",
      version: "2019-12-26",
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
   * @param request - ModifyInstanceRequest
   * @returns ModifyInstanceResponse
   */
  async modifyInstance(request: $_model.ModifyInstanceRequest): Promise<$_model.ModifyInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyIntentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyIntentResponse
   */
  async modifyIntentWithOptions(request: $_model.ModifyIntentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyIntentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.intentDescription)) {
      query["IntentDescription"] = request.intentDescription;
    }

    if (!$dara.isNull(request.intentId)) {
      query["IntentId"] = request.intentId;
    }

    if (!$dara.isNull(request.intentName)) {
      query["IntentName"] = request.intentName;
    }

    if (!$dara.isNull(request.keywords)) {
      query["Keywords"] = request.keywords;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.utterances)) {
      query["Utterances"] = request.utterances;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyIntent",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyIntentResponse>(await this.callApi(params, req, runtime), new $_model.ModifyIntentResponse({}));
  }

  /**
   * @param request - ModifyIntentRequest
   * @returns ModifyIntentResponse
   */
  async modifyIntent(request: $_model.ModifyIntentRequest): Promise<$_model.ModifyIntentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyIntentWithOptions(request, runtime);
  }

  /**
   * 修改任务组
   * 
   * @param request - ModifyJobGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyJobGroupResponse
   */
  async modifyJobGroupWithOptions(request: $_model.ModifyJobGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyJobGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.flashSmsExtras)) {
      query["FlashSmsExtras"] = request.flashSmsExtras;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    if (!$dara.isNull(request.jobGroupStatus)) {
      query["JobGroupStatus"] = request.jobGroupStatus;
    }

    if (!$dara.isNull(request.minConcurrency)) {
      query["MinConcurrency"] = request.minConcurrency;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.recallCallingNumber)) {
      query["RecallCallingNumber"] = request.recallCallingNumber;
    }

    if (!$dara.isNull(request.recallStrategyJson)) {
      query["RecallStrategyJson"] = request.recallStrategyJson;
    }

    if (!$dara.isNull(request.ringingDuration)) {
      query["RingingDuration"] = request.ringingDuration;
    }

    if (!$dara.isNull(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.strategyJson)) {
      query["StrategyJson"] = request.strategyJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyJobGroup",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyJobGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyJobGroupResponse({}));
  }

  /**
   * 修改任务组
   * 
   * @param request - ModifyJobGroupRequest
   * @returns ModifyJobGroupResponse
   */
  async modifyJobGroup(request: $_model.ModifyJobGroupRequest): Promise<$_model.ModifyJobGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyJobGroupWithOptions(request, runtime);
  }

  /**
   * ModifyOutboundCallNumber
   * 
   * @param request - ModifyOutboundCallNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyOutboundCallNumberResponse
   */
  async modifyOutboundCallNumberWithOptions(request: $_model.ModifyOutboundCallNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyOutboundCallNumberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.number)) {
      query["Number"] = request.number;
    }

    if (!$dara.isNull(request.outboundCallNumberId)) {
      query["OutboundCallNumberId"] = request.outboundCallNumberId;
    }

    if (!$dara.isNull(request.rateLimitCount)) {
      query["RateLimitCount"] = request.rateLimitCount;
    }

    if (!$dara.isNull(request.rateLimitPeriod)) {
      query["RateLimitPeriod"] = request.rateLimitPeriod;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyOutboundCallNumber",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyOutboundCallNumberResponse>(await this.callApi(params, req, runtime), new $_model.ModifyOutboundCallNumberResponse({}));
  }

  /**
   * ModifyOutboundCallNumber
   * 
   * @param request - ModifyOutboundCallNumberRequest
   * @returns ModifyOutboundCallNumberResponse
   */
  async modifyOutboundCallNumber(request: $_model.ModifyOutboundCallNumberRequest): Promise<$_model.ModifyOutboundCallNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyOutboundCallNumberWithOptions(request, runtime);
  }

  /**
   * 修改场景
   * 
   * @param request - ModifyScriptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyScriptResponse
   */
  async modifyScriptWithOptions(request: $_model.ModifyScriptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyScriptResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.agentLlm)) {
      query["AgentLlm"] = request.agentLlm;
    }

    if (!$dara.isNull(request.asrConfig)) {
      query["AsrConfig"] = request.asrConfig;
    }

    if (!$dara.isNull(request.chatConfig)) {
      query["ChatConfig"] = request.chatConfig;
    }

    if (!$dara.isNull(request.chatbotId)) {
      query["ChatbotId"] = request.chatbotId;
    }

    if (!$dara.isNull(request.emotionEnable)) {
      query["EmotionEnable"] = request.emotionEnable;
    }

    if (!$dara.isNull(request.industry)) {
      query["Industry"] = request.industry;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.labelConfig)) {
      query["LabelConfig"] = request.labelConfig;
    }

    if (!$dara.isNull(request.longWaitEnable)) {
      query["LongWaitEnable"] = request.longWaitEnable;
    }

    if (!$dara.isNull(request.miniPlaybackConfigListJsonString)) {
      query["MiniPlaybackConfigListJsonString"] = request.miniPlaybackConfigListJsonString;
    }

    if (!$dara.isNull(request.miniPlaybackEnable)) {
      query["MiniPlaybackEnable"] = request.miniPlaybackEnable;
    }

    if (!$dara.isNull(request.newBargeInEnable)) {
      query["NewBargeInEnable"] = request.newBargeInEnable;
    }

    if (!$dara.isNull(request.nlsConfig)) {
      query["NlsConfig"] = request.nlsConfig;
    }

    if (!$dara.isNull(request.nluAccessType)) {
      query["NluAccessType"] = request.nluAccessType;
    }

    if (!$dara.isNull(request.nluEngine)) {
      query["NluEngine"] = request.nluEngine;
    }

    if (!$dara.isNull(request.scene)) {
      query["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.scriptContent)) {
      query["ScriptContent"] = request.scriptContent;
    }

    if (!$dara.isNull(request.scriptDescription)) {
      query["ScriptDescription"] = request.scriptDescription;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.scriptName)) {
      query["ScriptName"] = request.scriptName;
    }

    if (!$dara.isNull(request.scriptWaveform)) {
      query["ScriptWaveform"] = request.scriptWaveform;
    }

    if (!$dara.isNull(request.ttsConfig)) {
      query["TtsConfig"] = request.ttsConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyScript",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyScriptResponse>(await this.callApi(params, req, runtime), new $_model.ModifyScriptResponse({}));
  }

  /**
   * 修改场景
   * 
   * @param request - ModifyScriptRequest
   * @returns ModifyScriptResponse
   */
  async modifyScript(request: $_model.ModifyScriptRequest): Promise<$_model.ModifyScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyScriptWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyScriptVoiceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyScriptVoiceConfigResponse
   */
  async modifyScriptVoiceConfigWithOptions(request: $_model.ModifyScriptVoiceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyScriptVoiceConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.scriptVoiceConfigId)) {
      query["ScriptVoiceConfigId"] = request.scriptVoiceConfigId;
    }

    if (!$dara.isNull(request.scriptWaveformRelation)) {
      query["ScriptWaveformRelation"] = request.scriptWaveformRelation;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyScriptVoiceConfig",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyScriptVoiceConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyScriptVoiceConfigResponse({}));
  }

  /**
   * @param request - ModifyScriptVoiceConfigRequest
   * @returns ModifyScriptVoiceConfigResponse
   */
  async modifyScriptVoiceConfig(request: $_model.ModifyScriptVoiceConfigRequest): Promise<$_model.ModifyScriptVoiceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyScriptVoiceConfigWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyTTSConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTTSConfigResponse
   */
  async modifyTTSConfigWithOptions(request: $_model.ModifyTTSConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTTSConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nlsServiceType)) {
      query["NlsServiceType"] = request.nlsServiceType;
    }

    if (!$dara.isNull(request.pitchRate)) {
      query["PitchRate"] = request.pitchRate;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.speechRate)) {
      query["SpeechRate"] = request.speechRate;
    }

    if (!$dara.isNull(request.voice)) {
      query["Voice"] = request.voice;
    }

    if (!$dara.isNull(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTTSConfig",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTTSConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTTSConfigResponse({}));
  }

  /**
   * @param request - ModifyTTSConfigRequest
   * @returns ModifyTTSConfigResponse
   */
  async modifyTTSConfig(request: $_model.ModifyTTSConfigRequest): Promise<$_model.ModifyTTSConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTTSConfigWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyTagGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTagGroupsResponse
   */
  async modifyTagGroupsWithOptions(request: $_model.ModifyTagGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTagGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.tagGroups)) {
      query["TagGroups"] = request.tagGroups;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTagGroups",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTagGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTagGroupsResponse({}));
  }

  /**
   * @param request - ModifyTagGroupsRequest
   * @returns ModifyTagGroupsResponse
   */
  async modifyTagGroups(request: $_model.ModifyTagGroupsRequest): Promise<$_model.ModifyTagGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTagGroupsWithOptions(request, runtime);
  }

  /**
   * @param request - PublishScriptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishScriptResponse
   */
  async publishScriptWithOptions(request: $_model.PublishScriptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishScriptResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishScript",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishScriptResponse>(await this.callApi(params, req, runtime), new $_model.PublishScriptResponse({}));
  }

  /**
   * @param request - PublishScriptRequest
   * @returns PublishScriptResponse
   */
  async publishScript(request: $_model.PublishScriptRequest): Promise<$_model.PublishScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishScriptWithOptions(request, runtime);
  }

  /**
   * @param request - PublishScriptForDebugRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishScriptForDebugResponse
   */
  async publishScriptForDebugWithOptions(request: $_model.PublishScriptForDebugRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishScriptForDebugResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishScriptForDebug",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishScriptForDebugResponse>(await this.callApi(params, req, runtime), new $_model.PublishScriptForDebugResponse({}));
  }

  /**
   * @param request - PublishScriptForDebugRequest
   * @returns PublishScriptForDebugResponse
   */
  async publishScriptForDebug(request: $_model.PublishScriptForDebugRequest): Promise<$_model.PublishScriptForDebugResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishScriptForDebugWithOptions(request, runtime);
  }

  /**
   * QueryJobs
   * 
   * @param request - QueryJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryJobsResponse
   */
  async queryJobsWithOptions(request: $_model.QueryJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.timeAlignment)) {
      query["TimeAlignment"] = request.timeAlignment;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryJobs",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryJobsResponse>(await this.callApi(params, req, runtime), new $_model.QueryJobsResponse({}));
  }

  /**
   * QueryJobs
   * 
   * @param request - QueryJobsRequest
   * @returns QueryJobsResponse
   */
  async queryJobs(request: $_model.QueryJobsRequest): Promise<$_model.QueryJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryJobsWithOptions(request, runtime);
  }

  /**
   * 获取外呼任务结果信息
   * 
   * @param request - QueryJobsWithResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryJobsWithResultResponse
   */
  async queryJobsWithResultWithOptions(request: $_model.QueryJobsWithResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryJobsWithResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endActualTimeFilter)) {
      query["EndActualTimeFilter"] = request.endActualTimeFilter;
    }

    if (!$dara.isNull(request.hasAnsweredFilter)) {
      query["HasAnsweredFilter"] = request.hasAnsweredFilter;
    }

    if (!$dara.isNull(request.hasHangUpByRejectionFilter)) {
      query["HasHangUpByRejectionFilter"] = request.hasHangUpByRejectionFilter;
    }

    if (!$dara.isNull(request.hasReachedEndOfFlowFilter)) {
      query["HasReachedEndOfFlowFilter"] = request.hasReachedEndOfFlowFilter;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobFailureReasonsFilter)) {
      query["JobFailureReasonsFilter"] = request.jobFailureReasonsFilter;
    }

    if (!$dara.isNull(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    if (!$dara.isNull(request.jobStatusFilter)) {
      query["JobStatusFilter"] = request.jobStatusFilter;
    }

    if (!$dara.isNull(request.labelsJson)) {
      query["LabelsJson"] = request.labelsJson;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryText)) {
      query["QueryText"] = request.queryText;
    }

    if (!$dara.isNull(request.startActualTimeFilter)) {
      query["StartActualTimeFilter"] = request.startActualTimeFilter;
    }

    if (!$dara.isNull(request.taskStatusFilter)) {
      query["TaskStatusFilter"] = request.taskStatusFilter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryJobsWithResult",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryJobsWithResultResponse>(await this.callApi(params, req, runtime), new $_model.QueryJobsWithResultResponse({}));
  }

  /**
   * 获取外呼任务结果信息
   * 
   * @param request - QueryJobsWithResultRequest
   * @returns QueryJobsWithResultResponse
   */
  async queryJobsWithResult(request: $_model.QueryJobsWithResultRequest): Promise<$_model.QueryJobsWithResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryJobsWithResultWithOptions(request, runtime);
  }

  /**
   * @param request - QueryScriptWaveformsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryScriptWaveformsResponse
   */
  async queryScriptWaveformsWithOptions(request: $_model.QueryScriptWaveformsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryScriptWaveformsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptContent)) {
      query["ScriptContent"] = request.scriptContent;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryScriptWaveforms",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryScriptWaveformsResponse>(await this.callApi(params, req, runtime), new $_model.QueryScriptWaveformsResponse({}));
  }

  /**
   * @param request - QueryScriptWaveformsRequest
   * @returns QueryScriptWaveformsResponse
   */
  async queryScriptWaveforms(request: $_model.QueryScriptWaveformsRequest): Promise<$_model.QueryScriptWaveformsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryScriptWaveformsWithOptions(request, runtime);
  }

  /**
   * @param request - QueryScriptsByStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryScriptsByStatusResponse
   */
  async queryScriptsByStatusWithOptions(request: $_model.QueryScriptsByStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryScriptsByStatusResponse> {
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

    if (!$dara.isNull(request.statusList)) {
      query["StatusList"] = request.statusList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryScriptsByStatus",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryScriptsByStatusResponse>(await this.callApi(params, req, runtime), new $_model.QueryScriptsByStatusResponse({}));
  }

  /**
   * @param request - QueryScriptsByStatusRequest
   * @returns QueryScriptsByStatusResponse
   */
  async queryScriptsByStatus(request: $_model.QueryScriptsByStatusRequest): Promise<$_model.QueryScriptsByStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryScriptsByStatusWithOptions(request, runtime);
  }

  /**
   * @param request - RecordFailureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecordFailureResponse
   */
  async recordFailureWithOptions(request: $_model.RecordFailureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecordFailureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actualTime)) {
      query["ActualTime"] = request.actualTime;
    }

    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!$dara.isNull(request.dispositionCode)) {
      query["DispositionCode"] = request.dispositionCode;
    }

    if (!$dara.isNull(request.exceptionCodes)) {
      query["ExceptionCodes"] = request.exceptionCodes;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecordFailure",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecordFailureResponse>(await this.callApi(params, req, runtime), new $_model.RecordFailureResponse({}));
  }

  /**
   * @param request - RecordFailureRequest
   * @returns RecordFailureResponse
   */
  async recordFailure(request: $_model.RecordFailureRequest): Promise<$_model.RecordFailureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recordFailureWithOptions(request, runtime);
  }

  /**
   * @param request - ResumeJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeJobsResponse
   */
  async resumeJobsWithOptions(request: $_model.ResumeJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.jobReferenceId)) {
      query["JobReferenceId"] = request.jobReferenceId;
    }

    if (!$dara.isNull(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeJobs",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeJobsResponse>(await this.callApi(params, req, runtime), new $_model.ResumeJobsResponse({}));
  }

  /**
   * @param request - ResumeJobsRequest
   * @returns ResumeJobsResponse
   */
  async resumeJobs(request: $_model.ResumeJobsRequest): Promise<$_model.ResumeJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumeJobsWithOptions(request, runtime);
  }

  /**
   * @param request - RollbackScriptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RollbackScriptResponse
   */
  async rollbackScriptWithOptions(request: $_model.RollbackScriptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RollbackScriptResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.rollbackVersion)) {
      query["RollbackVersion"] = request.rollbackVersion;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RollbackScript",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RollbackScriptResponse>(await this.callApi(params, req, runtime), new $_model.RollbackScriptResponse({}));
  }

  /**
   * @param request - RollbackScriptRequest
   * @returns RollbackScriptResponse
   */
  async rollbackScript(request: $_model.RollbackScriptRequest): Promise<$_model.RollbackScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rollbackScriptWithOptions(request, runtime);
  }

  /**
   * 保存接听后延迟播报时间
   * 
   * @param request - SaveAfterAnswerDelayPlaybackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveAfterAnswerDelayPlaybackResponse
   */
  async saveAfterAnswerDelayPlaybackWithOptions(request: $_model.SaveAfterAnswerDelayPlaybackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveAfterAnswerDelayPlaybackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.afterAnswerDelayPlayback)) {
      query["AfterAnswerDelayPlayback"] = request.afterAnswerDelayPlayback;
    }

    if (!$dara.isNull(request.entryId)) {
      query["EntryId"] = request.entryId;
    }

    if (!$dara.isNull(request.strategyLevel)) {
      query["StrategyLevel"] = request.strategyLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveAfterAnswerDelayPlayback",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveAfterAnswerDelayPlaybackResponse>(await this.callApi(params, req, runtime), new $_model.SaveAfterAnswerDelayPlaybackResponse({}));
  }

  /**
   * 保存接听后延迟播报时间
   * 
   * @param request - SaveAfterAnswerDelayPlaybackRequest
   * @returns SaveAfterAnswerDelayPlaybackResponse
   */
  async saveAfterAnswerDelayPlayback(request: $_model.SaveAfterAnswerDelayPlaybackRequest): Promise<$_model.SaveAfterAnswerDelayPlaybackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveAfterAnswerDelayPlaybackWithOptions(request, runtime);
  }

  /**
   * @param request - SaveAnnotationMissionSessionListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveAnnotationMissionSessionListResponse
   */
  async saveAnnotationMissionSessionListWithOptions(request: $_model.SaveAnnotationMissionSessionListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveAnnotationMissionSessionListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.annotationMissionDataSourceType)) {
      query["AnnotationMissionDataSourceType"] = request.annotationMissionDataSourceType;
    }

    if (!$dara.isNull(request.annotationMissionSessionList)) {
      query["AnnotationMissionSessionList"] = request.annotationMissionSessionList;
    }

    if (!$dara.isNull(request.annotationMissionSessionListJsonString)) {
      query["AnnotationMissionSessionListJsonString"] = request.annotationMissionSessionListJsonString;
    }

    if (!$dara.isNull(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.userNick)) {
      query["UserNick"] = request.userNick;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveAnnotationMissionSessionList",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveAnnotationMissionSessionListResponse>(await this.callApi(params, req, runtime), new $_model.SaveAnnotationMissionSessionListResponse({}));
  }

  /**
   * @param request - SaveAnnotationMissionSessionListRequest
   * @returns SaveAnnotationMissionSessionListResponse
   */
  async saveAnnotationMissionSessionList(request: $_model.SaveAnnotationMissionSessionListRequest): Promise<$_model.SaveAnnotationMissionSessionListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveAnnotationMissionSessionListWithOptions(request, runtime);
  }

  /**
   * @param request - SaveAnnotationMissionTagInfoListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveAnnotationMissionTagInfoListResponse
   */
  async saveAnnotationMissionTagInfoListWithOptions(request: $_model.SaveAnnotationMissionTagInfoListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveAnnotationMissionTagInfoListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.annotationMissionTagInfoList)) {
      query["AnnotationMissionTagInfoList"] = request.annotationMissionTagInfoList;
    }

    if (!$dara.isNull(request.annotationMissionTagInfoListJsonString)) {
      query["AnnotationMissionTagInfoListJsonString"] = request.annotationMissionTagInfoListJsonString;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.reset)) {
      query["Reset"] = request.reset;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveAnnotationMissionTagInfoList",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveAnnotationMissionTagInfoListResponse>(await this.callApi(params, req, runtime), new $_model.SaveAnnotationMissionTagInfoListResponse({}));
  }

  /**
   * @param request - SaveAnnotationMissionTagInfoListRequest
   * @returns SaveAnnotationMissionTagInfoListResponse
   */
  async saveAnnotationMissionTagInfoList(request: $_model.SaveAnnotationMissionTagInfoListRequest): Promise<$_model.SaveAnnotationMissionTagInfoListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveAnnotationMissionTagInfoListWithOptions(request, runtime);
  }

  /**
   * 编辑基础策略有效时间窗口
   * 
   * @param request - SaveBaseStrategyPeriodRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveBaseStrategyPeriodResponse
   */
  async saveBaseStrategyPeriodWithOptions(request: $_model.SaveBaseStrategyPeriodRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveBaseStrategyPeriodResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.entryId)) {
      query["EntryId"] = request.entryId;
    }

    if (!$dara.isNull(request.onlyWeekdays)) {
      query["OnlyWeekdays"] = request.onlyWeekdays;
    }

    if (!$dara.isNull(request.onlyWorkdays)) {
      query["OnlyWorkdays"] = request.onlyWorkdays;
    }

    if (!$dara.isNull(request.strategyLevel)) {
      query["StrategyLevel"] = request.strategyLevel;
    }

    if (!$dara.isNull(request.workingTime)) {
      query["WorkingTime"] = request.workingTime;
    }

    if (!$dara.isNull(request.workingTimeFramesJson)) {
      query["WorkingTimeFramesJson"] = request.workingTimeFramesJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveBaseStrategyPeriod",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveBaseStrategyPeriodResponse>(await this.callApi(params, req, runtime), new $_model.SaveBaseStrategyPeriodResponse({}));
  }

  /**
   * 编辑基础策略有效时间窗口
   * 
   * @param request - SaveBaseStrategyPeriodRequest
   * @returns SaveBaseStrategyPeriodResponse
   */
  async saveBaseStrategyPeriod(request: $_model.SaveBaseStrategyPeriodRequest): Promise<$_model.SaveBaseStrategyPeriodResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveBaseStrategyPeriodWithOptions(request, runtime);
  }

  /**
   * 保存外呼黑名单列表
   * 
   * @param request - SaveContactBlockListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveContactBlockListResponse
   */
  async saveContactBlockListWithOptions(request: $_model.SaveContactBlockListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveContactBlockListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactBlockListList)) {
      query["ContactBlockListList"] = request.contactBlockListList;
    }

    if (!$dara.isNull(request.contactBlockListsJson)) {
      query["ContactBlockListsJson"] = request.contactBlockListsJson;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveContactBlockList",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveContactBlockListResponse>(await this.callApi(params, req, runtime), new $_model.SaveContactBlockListResponse({}));
  }

  /**
   * 保存外呼黑名单列表
   * 
   * @param request - SaveContactBlockListRequest
   * @returns SaveContactBlockListResponse
   */
  async saveContactBlockList(request: $_model.SaveContactBlockListRequest): Promise<$_model.SaveContactBlockListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveContactBlockListWithOptions(request, runtime);
  }

  /**
   * 保存外呼白名单
   * 
   * @param request - SaveContactWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveContactWhiteListResponse
   */
  async saveContactWhiteListWithOptions(request: $_model.SaveContactWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveContactWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactWhiteListList)) {
      query["ContactWhiteListList"] = request.contactWhiteListList;
    }

    if (!$dara.isNull(request.contactWhiteListsJson)) {
      query["ContactWhiteListsJson"] = request.contactWhiteListsJson;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveContactWhiteList",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveContactWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.SaveContactWhiteListResponse({}));
  }

  /**
   * 保存外呼白名单
   * 
   * @param request - SaveContactWhiteListRequest
   * @returns SaveContactWhiteListResponse
   */
  async saveContactWhiteList(request: $_model.SaveContactWhiteListRequest): Promise<$_model.SaveContactWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveContactWhiteListWithOptions(request, runtime);
  }

  /**
   * @param request - SaveEffectiveDaysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveEffectiveDaysResponse
   */
  async saveEffectiveDaysWithOptions(request: $_model.SaveEffectiveDaysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveEffectiveDaysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.effectiveDays)) {
      query["EffectiveDays"] = request.effectiveDays;
    }

    if (!$dara.isNull(request.entryId)) {
      query["EntryId"] = request.entryId;
    }

    if (!$dara.isNull(request.strategyLevel)) {
      query["StrategyLevel"] = request.strategyLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveEffectiveDays",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveEffectiveDaysResponse>(await this.callApi(params, req, runtime), new $_model.SaveEffectiveDaysResponse({}));
  }

  /**
   * @param request - SaveEffectiveDaysRequest
   * @returns SaveEffectiveDaysResponse
   */
  async saveEffectiveDays(request: $_model.SaveEffectiveDaysRequest): Promise<$_model.SaveEffectiveDaysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveEffectiveDaysWithOptions(request, runtime);
  }

  /**
   * 保存每日最大外呼量
   * 
   * @param request - SaveMaxAttemptsPerDayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveMaxAttemptsPerDayResponse
   */
  async saveMaxAttemptsPerDayWithOptions(request: $_model.SaveMaxAttemptsPerDayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveMaxAttemptsPerDayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.entryId)) {
      query["EntryId"] = request.entryId;
    }

    if (!$dara.isNull(request.maxAttemptsPerDay)) {
      query["MaxAttemptsPerDay"] = request.maxAttemptsPerDay;
    }

    if (!$dara.isNull(request.strategyLevel)) {
      query["StrategyLevel"] = request.strategyLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveMaxAttemptsPerDay",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveMaxAttemptsPerDayResponse>(await this.callApi(params, req, runtime), new $_model.SaveMaxAttemptsPerDayResponse({}));
  }

  /**
   * 保存每日最大外呼量
   * 
   * @param request - SaveMaxAttemptsPerDayRequest
   * @returns SaveMaxAttemptsPerDayResponse
   */
  async saveMaxAttemptsPerDay(request: $_model.SaveMaxAttemptsPerDayRequest): Promise<$_model.SaveMaxAttemptsPerDayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveMaxAttemptsPerDayWithOptions(request, runtime);
  }

  /**
   * 外呼历史查询
   * 
   * @param request - SearchTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchTaskResponse
   */
  async searchTaskWithOptions(request: $_model.SearchTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchTask",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchTaskResponse>(await this.callApi(params, req, runtime), new $_model.SearchTaskResponse({}));
  }

  /**
   * 外呼历史查询
   * 
   * @param request - SearchTaskRequest
   * @returns SearchTaskResponse
   */
  async searchTask(request: $_model.SearchTaskRequest): Promise<$_model.SearchTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchTaskWithOptions(request, runtime);
  }

  /**
   * 开启一个任务
   * 
   * @param request - StartJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartJobResponse
   */
  async startJobWithOptions(request: $_model.StartJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    if (!$dara.isNull(request.jobJson)) {
      query["JobJson"] = request.jobJson;
    }

    if (!$dara.isNull(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartJob",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartJobResponse>(await this.callApi(params, req, runtime), new $_model.StartJobResponse({}));
  }

  /**
   * 开启一个任务
   * 
   * @param request - StartJobRequest
   * @returns StartJobResponse
   */
  async startJob(request: $_model.StartJobRequest): Promise<$_model.StartJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startJobWithOptions(request, runtime);
  }

  /**
   * @param request - SubmitBatchJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitBatchJobsResponse
   */
  async submitBatchJobsWithOptions(request: $_model.SubmitBatchJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitBatchJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitBatchJobs",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitBatchJobsResponse>(await this.callApi(params, req, runtime), new $_model.SubmitBatchJobsResponse({}));
  }

  /**
   * @param request - SubmitBatchJobsRequest
   * @returns SubmitBatchJobsResponse
   */
  async submitBatchJobs(request: $_model.SubmitBatchJobsRequest): Promise<$_model.SubmitBatchJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitBatchJobsWithOptions(request, runtime);
  }

  /**
   * @param request - SubmitRecordingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitRecordingResponse
   */
  async submitRecordingWithOptions(request: $_model.SubmitRecordingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitRecordingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mergedRecording)) {
      query["MergedRecording"] = request.mergedRecording;
    }

    if (!$dara.isNull(request.resourceRecording)) {
      query["ResourceRecording"] = request.resourceRecording;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitRecording",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitRecordingResponse>(await this.callApi(params, req, runtime), new $_model.SubmitRecordingResponse({}));
  }

  /**
   * @param request - SubmitRecordingRequest
   * @returns SubmitRecordingResponse
   */
  async submitRecording(request: $_model.SubmitRecordingRequest): Promise<$_model.SubmitRecordingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitRecordingWithOptions(request, runtime);
  }

  /**
   * @param request - SubmitScriptReviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitScriptReviewResponse
   */
  async submitScriptReviewWithOptions(request: $_model.SubmitScriptReviewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitScriptReviewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.from)) {
      query["From"] = request.from;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitScriptReview",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitScriptReviewResponse>(await this.callApi(params, req, runtime), new $_model.SubmitScriptReviewResponse({}));
  }

  /**
   * @param request - SubmitScriptReviewRequest
   * @returns SubmitScriptReviewResponse
   */
  async submitScriptReview(request: $_model.SubmitScriptReviewRequest): Promise<$_model.SubmitScriptReviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitScriptReviewWithOptions(request, runtime);
  }

  /**
   * 止呼
   * 
   * @param request - SuspendCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendCallResponse
   */
  async suspendCallWithOptions(request: $_model.SuspendCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SuspendCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.calledNumbers)) {
      query["CalledNumbers"] = request.calledNumbers;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendCall",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuspendCallResponse>(await this.callApi(params, req, runtime), new $_model.SuspendCallResponse({}));
  }

  /**
   * 止呼
   * 
   * @param request - SuspendCallRequest
   * @returns SuspendCallResponse
   */
  async suspendCall(request: $_model.SuspendCallRequest): Promise<$_model.SuspendCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.suspendCallWithOptions(request, runtime);
  }

  /**
   * SuspendCallWithFile
   * 
   * @param request - SuspendCallWithFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendCallWithFileResponse
   */
  async suspendCallWithFileWithOptions(request: $_model.SuspendCallWithFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SuspendCallWithFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendCallWithFile",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuspendCallWithFileResponse>(await this.callApi(params, req, runtime), new $_model.SuspendCallWithFileResponse({}));
  }

  /**
   * SuspendCallWithFile
   * 
   * @param request - SuspendCallWithFileRequest
   * @returns SuspendCallWithFileResponse
   */
  async suspendCallWithFile(request: $_model.SuspendCallWithFileRequest): Promise<$_model.SuspendCallWithFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.suspendCallWithFileWithOptions(request, runtime);
  }

  /**
   * @param request - SuspendJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendJobsResponse
   */
  async suspendJobsWithOptions(request: $_model.SuspendJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SuspendJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.jobReferenceId)) {
      query["JobReferenceId"] = request.jobReferenceId;
    }

    if (!$dara.isNull(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendJobs",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuspendJobsResponse>(await this.callApi(params, req, runtime), new $_model.SuspendJobsResponse({}));
  }

  /**
   * @param request - SuspendJobsRequest
   * @returns SuspendJobsResponse
   */
  async suspendJobs(request: $_model.SuspendJobsRequest): Promise<$_model.SuspendJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.suspendJobsWithOptions(request, runtime);
  }

  /**
   * @remarks
   * *
   * 
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
      version: "2019-12-26",
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
   * @remarks
   * *
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * TaskPreparing
   * 
   * @param request - TaskPreparingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TaskPreparingResponse
   */
  async taskPreparingWithOptions(request: $_model.TaskPreparingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TaskPreparingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceOwnerId)) {
      query["InstanceOwnerId"] = request.instanceOwnerId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TaskPreparing",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TaskPreparingResponse>(await this.callApi(params, req, runtime), new $_model.TaskPreparingResponse({}));
  }

  /**
   * TaskPreparing
   * 
   * @param request - TaskPreparingRequest
   * @returns TaskPreparingResponse
   */
  async taskPreparing(request: $_model.TaskPreparingRequest): Promise<$_model.TaskPreparingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.taskPreparingWithOptions(request, runtime);
  }

  /**
   * @param request - TerminateCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TerminateCallResponse
   */
  async terminateCallWithOptions(request: $_model.TerminateCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TerminateCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TerminateCall",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TerminateCallResponse>(await this.callApi(params, req, runtime), new $_model.TerminateCallResponse({}));
  }

  /**
   * @param request - TerminateCallRequest
   * @returns TerminateCallResponse
   */
  async terminateCall(request: $_model.TerminateCallRequest): Promise<$_model.TerminateCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.terminateCallWithOptions(request, runtime);
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
      version: "2019-12-26",
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

  /**
   * @param request - UploadScriptRecordingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadScriptRecordingResponse
   */
  async uploadScriptRecordingWithOptions(request: $_model.UploadScriptRecordingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadScriptRecordingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadScriptRecording",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadScriptRecordingResponse>(await this.callApi(params, req, runtime), new $_model.UploadScriptRecordingResponse({}));
  }

  /**
   * @param request - UploadScriptRecordingRequest
   * @returns UploadScriptRecordingResponse
   */
  async uploadScriptRecording(request: $_model.UploadScriptRecordingRequest): Promise<$_model.UploadScriptRecordingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadScriptRecordingWithOptions(request, runtime);
  }

  /**
   * WithdrawScriptReview
   * 
   * @remarks
   * ***
   * 
   * @param request - WithdrawScriptReviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WithdrawScriptReviewResponse
   */
  async withdrawScriptReviewWithOptions(request: $_model.WithdrawScriptReviewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.WithdrawScriptReviewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "WithdrawScriptReview",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.WithdrawScriptReviewResponse>(await this.callApi(params, req, runtime), new $_model.WithdrawScriptReviewResponse({}));
  }

  /**
   * WithdrawScriptReview
   * 
   * @remarks
   * ***
   * 
   * @param request - WithdrawScriptReviewRequest
   * @returns WithdrawScriptReviewResponse
   */
  async withdrawScriptReview(request: $_model.WithdrawScriptReviewRequest): Promise<$_model.WithdrawScriptReviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.withdrawScriptReviewWithOptions(request, runtime);
  }

}
