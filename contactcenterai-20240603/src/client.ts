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
    this._endpoint = this.getEndpoint("contactcenterai", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 语音文件分析任务极速版
   * 
   * @param request - AnalyzeAudioSyncRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AnalyzeAudioSyncResponse
   */
  async *analyzeAudioSyncWithSSE(workspaceId: string, appId: string, request: $_model.AnalyzeAudioSyncRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.AnalyzeAudioSyncResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryTags)) {
      body["categoryTags"] = request.categoryTags;
    }

    if (!$dara.isNull(request.customPrompt)) {
      body["customPrompt"] = request.customPrompt;
    }

    if (!$dara.isNull(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!$dara.isNull(request.modelCode)) {
      body["modelCode"] = request.modelCode;
    }

    if (!$dara.isNull(request.responseFormatType)) {
      body["responseFormatType"] = request.responseFormatType;
    }

    if (!$dara.isNull(request.resultTypes)) {
      body["resultTypes"] = request.resultTypes;
    }

    if (!$dara.isNull(request.serviceInspection)) {
      body["serviceInspection"] = request.serviceInspection;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.templateIds)) {
      body["templateIds"] = request.templateIds;
    }

    if (!$dara.isNull(request.transcription)) {
      body["transcription"] = request.transcription;
    }

    if (!$dara.isNull(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AnalyzeAudioSync",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/ccai/app/${$dara.URL.percentEncode(appId)}/analyzeAudioSync`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.AnalyzeAudioSyncResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.AnalyzeAudioSyncResponse({}));
    }
  }

  /**
   * 语音文件分析任务极速版
   * 
   * @param request - AnalyzeAudioSyncRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AnalyzeAudioSyncResponse
   */
  async analyzeAudioSyncWithOptions(workspaceId: string, appId: string, request: $_model.AnalyzeAudioSyncRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AnalyzeAudioSyncResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryTags)) {
      body["categoryTags"] = request.categoryTags;
    }

    if (!$dara.isNull(request.customPrompt)) {
      body["customPrompt"] = request.customPrompt;
    }

    if (!$dara.isNull(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!$dara.isNull(request.modelCode)) {
      body["modelCode"] = request.modelCode;
    }

    if (!$dara.isNull(request.responseFormatType)) {
      body["responseFormatType"] = request.responseFormatType;
    }

    if (!$dara.isNull(request.resultTypes)) {
      body["resultTypes"] = request.resultTypes;
    }

    if (!$dara.isNull(request.serviceInspection)) {
      body["serviceInspection"] = request.serviceInspection;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.templateIds)) {
      body["templateIds"] = request.templateIds;
    }

    if (!$dara.isNull(request.transcription)) {
      body["transcription"] = request.transcription;
    }

    if (!$dara.isNull(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AnalyzeAudioSync",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/ccai/app/${$dara.URL.percentEncode(appId)}/analyzeAudioSync`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AnalyzeAudioSyncResponse>(await this.callApi(params, req, runtime), new $_model.AnalyzeAudioSyncResponse({}));
  }

  /**
   * 语音文件分析任务极速版
   * 
   * @param request - AnalyzeAudioSyncRequest
   * @returns AnalyzeAudioSyncResponse
   */
  async analyzeAudioSync(workspaceId: string, appId: string, request: $_model.AnalyzeAudioSyncRequest): Promise<$_model.AnalyzeAudioSyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.analyzeAudioSyncWithOptions(workspaceId, appId, request, headers, runtime);
  }

  /**
   * 根据类型调用大模型
   * 
   * @param request - AnalyzeConversationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AnalyzeConversationResponse
   */
  async *analyzeConversationWithSSE(workspaceId: string, appId: string, request: $_model.AnalyzeConversationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.AnalyzeConversationResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryTags)) {
      body["categoryTags"] = request.categoryTags;
    }

    if (!$dara.isNull(request.customPrompt)) {
      body["customPrompt"] = request.customPrompt;
    }

    if (!$dara.isNull(request.dialogue)) {
      body["dialogue"] = request.dialogue;
    }

    if (!$dara.isNull(request.examples)) {
      body["examples"] = request.examples;
    }

    if (!$dara.isNull(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!$dara.isNull(request.modelCode)) {
      body["modelCode"] = request.modelCode;
    }

    if (!$dara.isNull(request.responseFormatType)) {
      body["responseFormatType"] = request.responseFormatType;
    }

    if (!$dara.isNull(request.resultTypes)) {
      body["resultTypes"] = request.resultTypes;
    }

    if (!$dara.isNull(request.sceneName)) {
      body["sceneName"] = request.sceneName;
    }

    if (!$dara.isNull(request.serviceInspection)) {
      body["serviceInspection"] = request.serviceInspection;
    }

    if (!$dara.isNull(request.sourceCallerUid)) {
      body["sourceCallerUid"] = request.sourceCallerUid;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.timeConstraintList)) {
      body["timeConstraintList"] = request.timeConstraintList;
    }

    if (!$dara.isNull(request.userProfiles)) {
      body["userProfiles"] = request.userProfiles;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AnalyzeConversation",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/ccai/app/${$dara.URL.percentEncode(appId)}/analyze_conversation`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.AnalyzeConversationResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.AnalyzeConversationResponse({}));
    }
  }

  /**
   * 根据类型调用大模型
   * 
   * @param request - AnalyzeConversationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AnalyzeConversationResponse
   */
  async analyzeConversationWithOptions(workspaceId: string, appId: string, request: $_model.AnalyzeConversationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AnalyzeConversationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryTags)) {
      body["categoryTags"] = request.categoryTags;
    }

    if (!$dara.isNull(request.customPrompt)) {
      body["customPrompt"] = request.customPrompt;
    }

    if (!$dara.isNull(request.dialogue)) {
      body["dialogue"] = request.dialogue;
    }

    if (!$dara.isNull(request.examples)) {
      body["examples"] = request.examples;
    }

    if (!$dara.isNull(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!$dara.isNull(request.modelCode)) {
      body["modelCode"] = request.modelCode;
    }

    if (!$dara.isNull(request.responseFormatType)) {
      body["responseFormatType"] = request.responseFormatType;
    }

    if (!$dara.isNull(request.resultTypes)) {
      body["resultTypes"] = request.resultTypes;
    }

    if (!$dara.isNull(request.sceneName)) {
      body["sceneName"] = request.sceneName;
    }

    if (!$dara.isNull(request.serviceInspection)) {
      body["serviceInspection"] = request.serviceInspection;
    }

    if (!$dara.isNull(request.sourceCallerUid)) {
      body["sourceCallerUid"] = request.sourceCallerUid;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.timeConstraintList)) {
      body["timeConstraintList"] = request.timeConstraintList;
    }

    if (!$dara.isNull(request.userProfiles)) {
      body["userProfiles"] = request.userProfiles;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AnalyzeConversation",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/ccai/app/${$dara.URL.percentEncode(appId)}/analyze_conversation`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AnalyzeConversationResponse>(await this.callApi(params, req, runtime), new $_model.AnalyzeConversationResponse({}));
  }

  /**
   * 根据类型调用大模型
   * 
   * @param request - AnalyzeConversationRequest
   * @returns AnalyzeConversationResponse
   */
  async analyzeConversation(workspaceId: string, appId: string, request: $_model.AnalyzeConversationRequest): Promise<$_model.AnalyzeConversationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.analyzeConversationWithOptions(workspaceId, appId, request, headers, runtime);
  }

  /**
   * 图片分析
   * 
   * @param request - AnalyzeImageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AnalyzeImageResponse
   */
  async *analyzeImageWithSSE(workspaceId: string, appId: string, request: $_model.AnalyzeImageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.AnalyzeImageResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageUrls)) {
      body["imageUrls"] = request.imageUrls;
    }

    if (!$dara.isNull(request.responseFormatType)) {
      body["responseFormatType"] = request.responseFormatType;
    }

    if (!$dara.isNull(request.resultTypes)) {
      body["resultTypes"] = request.resultTypes;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AnalyzeImage",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/ccai/app/${$dara.URL.percentEncode(appId)}/analyzeImage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.AnalyzeImageResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.AnalyzeImageResponse({}));
    }
  }

  /**
   * 图片分析
   * 
   * @param request - AnalyzeImageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AnalyzeImageResponse
   */
  async analyzeImageWithOptions(workspaceId: string, appId: string, request: $_model.AnalyzeImageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AnalyzeImageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageUrls)) {
      body["imageUrls"] = request.imageUrls;
    }

    if (!$dara.isNull(request.responseFormatType)) {
      body["responseFormatType"] = request.responseFormatType;
    }

    if (!$dara.isNull(request.resultTypes)) {
      body["resultTypes"] = request.resultTypes;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AnalyzeImage",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/ccai/app/${$dara.URL.percentEncode(appId)}/analyzeImage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AnalyzeImageResponse>(await this.callApi(params, req, runtime), new $_model.AnalyzeImageResponse({}));
  }

  /**
   * 图片分析
   * 
   * @param request - AnalyzeImageRequest
   * @returns AnalyzeImageResponse
   */
  async analyzeImage(workspaceId: string, appId: string, request: $_model.AnalyzeImageRequest): Promise<$_model.AnalyzeImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.analyzeImageWithOptions(workspaceId, appId, request, headers, runtime);
  }

  /**
   * 创建语音文件调用llm任务
   * 
   * @param request - CreateTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTaskResponse
   */
  async createTaskWithOptions(workspaceId: string, appId: string, request: $_model.CreateTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.callBackUrl)) {
      body["callBackUrl"] = request.callBackUrl;
    }

    if (!$dara.isNull(request.categoryTags)) {
      body["categoryTags"] = request.categoryTags;
    }

    if (!$dara.isNull(request.customPrompt)) {
      body["customPrompt"] = request.customPrompt;
    }

    if (!$dara.isNull(request.dialogue)) {
      body["dialogue"] = request.dialogue;
    }

    if (!$dara.isNull(request.examples)) {
      body["examples"] = request.examples;
    }

    if (!$dara.isNull(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!$dara.isNull(request.modelCode)) {
      body["modelCode"] = request.modelCode;
    }

    if (!$dara.isNull(request.responseFormatType)) {
      body["responseFormatType"] = request.responseFormatType;
    }

    if (!$dara.isNull(request.resultTypes)) {
      body["resultTypes"] = request.resultTypes;
    }

    if (!$dara.isNull(request.serviceInspection)) {
      body["serviceInspection"] = request.serviceInspection;
    }

    if (!$dara.isNull(request.taskType)) {
      body["taskType"] = request.taskType;
    }

    if (!$dara.isNull(request.templateIds)) {
      body["templateIds"] = request.templateIds;
    }

    if (!$dara.isNull(request.transcription)) {
      body["transcription"] = request.transcription;
    }

    if (!$dara.isNull(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTask",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/ccai/app/${$dara.URL.percentEncode(appId)}/createTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateTaskResponse({}));
  }

  /**
   * 创建语音文件调用llm任务
   * 
   * @param request - CreateTaskRequest
   * @returns CreateTaskResponse
   */
  async createTask(workspaceId: string, appId: string, request: $_model.CreateTaskRequest): Promise<$_model.CreateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTaskWithOptions(workspaceId, appId, request, headers, runtime);
  }

  /**
   * 创建热词
   * 
   * @param request - CreateVocabRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVocabResponse
   */
  async createVocabWithOptions(request: $_model.CreateVocabRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVocabResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.audioModelCode)) {
      body["audioModelCode"] = request.audioModelCode;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.wordWeightList)) {
      body["wordWeightList"] = request.wordWeightList;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVocab",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/vocab/createVocab`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVocabResponse>(await this.callApi(params, req, runtime), new $_model.CreateVocabResponse({}));
  }

  /**
   * 创建热词
   * 
   * @param request - CreateVocabRequest
   * @returns CreateVocabResponse
   */
  async createVocab(request: $_model.CreateVocabRequest): Promise<$_model.CreateVocabResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createVocabWithOptions(request, headers, runtime);
  }

  /**
   * 删删除热词
   * 
   * @param request - DeleteVocabRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVocabResponse
   */
  async deleteVocabWithOptions(request: $_model.DeleteVocabRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVocabResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.vocabularyId)) {
      body["vocabularyId"] = request.vocabularyId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVocab",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/vocab/deleteVocab`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVocabResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVocabResponse({}));
  }

  /**
   * 删删除热词
   * 
   * @param request - DeleteVocabRequest
   * @returns DeleteVocabResponse
   */
  async deleteVocab(request: $_model.DeleteVocabRequest): Promise<$_model.DeleteVocabResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteVocabWithOptions(request, headers, runtime);
  }

  /**
   * 语音文件调用大模型获取结果
   * 
   * @param tmpReq - GetTaskResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskResultResponse
   */
  async getTaskResultWithOptions(tmpReq: $_model.GetTaskResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskResultResponse> {
    tmpReq.validate();
    let request = new $_model.GetTaskResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.requiredFieldList)) {
      request.requiredFieldListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requiredFieldList, "requiredFieldList", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.requiredFieldListShrink)) {
      query["requiredFieldList"] = request.requiredFieldListShrink;
    }

    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskResult",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/ccai/app/getTaskResult`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskResultResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskResultResponse({}));
  }

  /**
   * 语音文件调用大模型获取结果
   * 
   * @param request - GetTaskResultRequest
   * @returns GetTaskResultResponse
   */
  async getTaskResult(request: $_model.GetTaskResultRequest): Promise<$_model.GetTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskResultWithOptions(request, headers, runtime);
  }

  /**
   * 获取热词
   * 
   * @param request - GetVocabRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVocabResponse
   */
  async getVocabWithOptions(request: $_model.GetVocabRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetVocabResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.vocabularyId)) {
      body["vocabularyId"] = request.vocabularyId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVocab",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/vocab/getVocab`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVocabResponse>(await this.callApi(params, req, runtime), new $_model.GetVocabResponse({}));
  }

  /**
   * 获取热词
   * 
   * @param request - GetVocabRequest
   * @returns GetVocabResponse
   */
  async getVocab(request: $_model.GetVocabRequest): Promise<$_model.GetVocabResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getVocabWithOptions(request, headers, runtime);
  }

  /**
   * 热词列表
   * 
   * @param request - ListVocabRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVocabResponse
   */
  async listVocabWithOptions(request: $_model.ListVocabRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListVocabResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVocab",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/vocab/listVocab`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVocabResponse>(await this.callApi(params, req, runtime), new $_model.ListVocabResponse({}));
  }

  /**
   * 热词列表
   * 
   * @param request - ListVocabRequest
   * @returns ListVocabResponse
   */
  async listVocab(request: $_model.ListVocabRequest): Promise<$_model.ListVocabResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVocabWithOptions(request, headers, runtime);
  }

  /**
   * CCAI服务面API
   * 
   * @param request - RunCompletionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCompletionResponse
   */
  async *runCompletionWithSSE(workspaceId: string, appId: string, request: $_model.RunCompletionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.RunCompletionResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dialogue)) {
      body["Dialogue"] = request.dialogue;
    }

    if (!$dara.isNull(request.fields)) {
      body["Fields"] = request.fields;
    }

    if (!$dara.isNull(request.modelCode)) {
      body["ModelCode"] = request.modelCode;
    }

    if (!$dara.isNull(request.serviceInspection)) {
      body["ServiceInspection"] = request.serviceInspection;
    }

    if (!$dara.isNull(request.stream)) {
      body["Stream"] = request.stream;
    }

    if (!$dara.isNull(request.templateIds)) {
      body["TemplateIds"] = request.templateIds;
    }

    if (!$dara.isNull(request.responseFormatType)) {
      body["responseFormatType"] = request.responseFormatType;
    }

    if (!$dara.isNull(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunCompletion",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/ccai/app/${$dara.URL.percentEncode(appId)}/completion`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.RunCompletionResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.RunCompletionResponse({}));
    }
  }

  /**
   * CCAI服务面API
   * 
   * @param request - RunCompletionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCompletionResponse
   */
  async runCompletionWithOptions(workspaceId: string, appId: string, request: $_model.RunCompletionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunCompletionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dialogue)) {
      body["Dialogue"] = request.dialogue;
    }

    if (!$dara.isNull(request.fields)) {
      body["Fields"] = request.fields;
    }

    if (!$dara.isNull(request.modelCode)) {
      body["ModelCode"] = request.modelCode;
    }

    if (!$dara.isNull(request.serviceInspection)) {
      body["ServiceInspection"] = request.serviceInspection;
    }

    if (!$dara.isNull(request.stream)) {
      body["Stream"] = request.stream;
    }

    if (!$dara.isNull(request.templateIds)) {
      body["TemplateIds"] = request.templateIds;
    }

    if (!$dara.isNull(request.responseFormatType)) {
      body["responseFormatType"] = request.responseFormatType;
    }

    if (!$dara.isNull(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunCompletion",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/ccai/app/${$dara.URL.percentEncode(appId)}/completion`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunCompletionResponse>(await this.callApi(params, req, runtime), new $_model.RunCompletionResponse({}));
  }

  /**
   * CCAI服务面API
   * 
   * @param request - RunCompletionRequest
   * @returns RunCompletionResponse
   */
  async runCompletion(workspaceId: string, appId: string, request: $_model.RunCompletionRequest): Promise<$_model.RunCompletionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runCompletionWithOptions(workspaceId, appId, request, headers, runtime);
  }

  /**
   * CCAI服务面API
   * 
   * @param request - RunCompletionMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCompletionMessageResponse
   */
  async *runCompletionMessageWithSSE(workspaceId: string, appId: string, request: $_model.RunCompletionMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.RunCompletionMessageResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.messages)) {
      body["Messages"] = request.messages;
    }

    if (!$dara.isNull(request.modelCode)) {
      body["ModelCode"] = request.modelCode;
    }

    if (!$dara.isNull(request.stream)) {
      body["Stream"] = request.stream;
    }

    if (!$dara.isNull(request.responseFormatType)) {
      body["responseFormatType"] = request.responseFormatType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunCompletionMessage",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/ccai/app/${$dara.URL.percentEncode(appId)}/completion_message`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.RunCompletionMessageResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.RunCompletionMessageResponse({}));
    }
  }

  /**
   * CCAI服务面API
   * 
   * @param request - RunCompletionMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCompletionMessageResponse
   */
  async runCompletionMessageWithOptions(workspaceId: string, appId: string, request: $_model.RunCompletionMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunCompletionMessageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.messages)) {
      body["Messages"] = request.messages;
    }

    if (!$dara.isNull(request.modelCode)) {
      body["ModelCode"] = request.modelCode;
    }

    if (!$dara.isNull(request.stream)) {
      body["Stream"] = request.stream;
    }

    if (!$dara.isNull(request.responseFormatType)) {
      body["responseFormatType"] = request.responseFormatType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunCompletionMessage",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/ccai/app/${$dara.URL.percentEncode(appId)}/completion_message`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunCompletionMessageResponse>(await this.callApi(params, req, runtime), new $_model.RunCompletionMessageResponse({}));
  }

  /**
   * CCAI服务面API
   * 
   * @param request - RunCompletionMessageRequest
   * @returns RunCompletionMessageResponse
   */
  async runCompletionMessage(workspaceId: string, appId: string, request: $_model.RunCompletionMessageRequest): Promise<$_model.RunCompletionMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runCompletionMessageWithOptions(workspaceId, appId, request, headers, runtime);
  }

  /**
   * 修改热词
   * 
   * @param request - UpdateVocabRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVocabResponse
   */
  async updateVocabWithOptions(request: $_model.UpdateVocabRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateVocabResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.vocabularyId)) {
      body["vocabularyId"] = request.vocabularyId;
    }

    if (!$dara.isNull(request.wordWeightList)) {
      body["wordWeightList"] = request.wordWeightList;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVocab",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/vocab/updateVocab`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateVocabResponse>(await this.callApi(params, req, runtime), new $_model.UpdateVocabResponse({}));
  }

  /**
   * 修改热词
   * 
   * @param request - UpdateVocabRequest
   * @returns UpdateVocabResponse
   */
  async updateVocab(request: $_model.UpdateVocabRequest): Promise<$_model.UpdateVocabResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateVocabWithOptions(request, headers, runtime);
  }

}
