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
    this._endpoint = this.getEndpoint("intelligentcreation", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 添加文案反馈
   * 
   * @param request - AddTextFeedbackRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTextFeedbackResponse
   */
  async addTextFeedbackWithOptions(request: $_model.AddTextFeedbackRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddTextFeedbackResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.quality)) {
      body["quality"] = request.quality;
    }

    if (!$dara.isNull(request.textId)) {
      body["textId"] = request.textId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddTextFeedback",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/addTextFeedback`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddTextFeedbackResponse>(await this.callApi(params, req, runtime), new $_model.AddTextFeedbackResponse({}));
  }

  /**
   * 添加文案反馈
   * 
   * @param request - AddTextFeedbackRequest
   * @returns AddTextFeedbackResponse
   */
  async addTextFeedback(request: $_model.AddTextFeedbackRequest): Promise<$_model.AddTextFeedbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addTextFeedbackWithOptions(request, headers, runtime);
  }

  /**
   * 批量添加知识文档
   * 
   * @param request - BatchAddDocumentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchAddDocumentResponse
   */
  async batchAddDocumentWithOptions(knowledgeBaseId: string, request: $_model.BatchAddDocumentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchAddDocumentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addDocumentInfos)) {
      body["addDocumentInfos"] = request.addDocumentInfos;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchAddDocument",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/knowledge-base/${$dara.URL.percentEncode(knowledgeBaseId)}/documents`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchAddDocumentResponse>(await this.callApi(params, req, runtime), new $_model.BatchAddDocumentResponse({}));
  }

  /**
   * 批量添加知识文档
   * 
   * @param request - BatchAddDocumentRequest
   * @returns BatchAddDocumentResponse
   */
  async batchAddDocument(knowledgeBaseId: string, request: $_model.BatchAddDocumentRequest): Promise<$_model.BatchAddDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchAddDocumentWithOptions(knowledgeBaseId, request, headers, runtime);
  }

  /**
   * 批量发布剧本任务
   * 
   * @param request - BatchCreateAICoachTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchCreateAICoachTaskResponse
   */
  async batchCreateAICoachTaskWithOptions(request: $_model.BatchCreateAICoachTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchCreateAICoachTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!$dara.isNull(request.scriptRecordId)) {
      body["scriptRecordId"] = request.scriptRecordId;
    }

    if (!$dara.isNull(request.studentIds)) {
      body["studentIds"] = request.studentIds;
    }

    if (!$dara.isNull(request.studentList)) {
      body["studentList"] = request.studentList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchCreateAICoachTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aicoach/batchCreateTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchCreateAICoachTaskResponse>(await this.callApi(params, req, runtime), new $_model.BatchCreateAICoachTaskResponse({}));
  }

  /**
   * 批量发布剧本任务
   * 
   * @param request - BatchCreateAICoachTaskRequest
   * @returns BatchCreateAICoachTaskResponse
   */
  async batchCreateAICoachTask(request: $_model.BatchCreateAICoachTaskRequest): Promise<$_model.BatchCreateAICoachTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchCreateAICoachTaskWithOptions(request, headers, runtime);
  }

  /**
   * 批量查询项目信息
   * 
   * @param tmpReq - BatchGetProjectTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGetProjectTaskResponse
   */
  async batchGetProjectTaskWithOptions(tmpReq: $_model.BatchGetProjectTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchGetProjectTaskResponse> {
    tmpReq.validate();
    let request = new $_model.BatchGetProjectTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.taskIdList)) {
      request.taskIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskIdList, "taskIdList", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskIdListShrink)) {
      query["taskIdList"] = request.taskIdListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchGetProjectTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/digitalHuman/project/batchGetProjectTask`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchGetProjectTaskResponse>(await this.callApi(params, req, runtime), new $_model.BatchGetProjectTaskResponse({}));
  }

  /**
   * 批量查询项目信息
   * 
   * @param request - BatchGetProjectTaskRequest
   * @returns BatchGetProjectTaskResponse
   */
  async batchGetProjectTask(request: $_model.BatchGetProjectTaskRequest): Promise<$_model.BatchGetProjectTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchGetProjectTaskWithOptions(request, headers, runtime);
  }

  /**
   * 批量查询声音复刻任务
   * 
   * @param tmpReq - BatchGetTrainTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGetTrainTaskResponse
   */
  async batchGetTrainTaskWithOptions(tmpReq: $_model.BatchGetTrainTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchGetTrainTaskResponse> {
    tmpReq.validate();
    let request = new $_model.BatchGetTrainTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.taskIdList)) {
      request.taskIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskIdList, "taskIdList", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunMainId)) {
      query["aliyunMainId"] = request.aliyunMainId;
    }

    if (!$dara.isNull(request.taskIdListShrink)) {
      query["taskIdList"] = request.taskIdListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchGetTrainTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/train/task/batchGetTrainTaskInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchGetTrainTaskResponse>(await this.callApi(params, req, runtime), new $_model.BatchGetTrainTaskResponse({}));
  }

  /**
   * 批量查询声音复刻任务
   * 
   * @param request - BatchGetTrainTaskRequest
   * @returns BatchGetTrainTaskResponse
   */
  async batchGetTrainTask(request: $_model.BatchGetTrainTaskRequest): Promise<$_model.BatchGetTrainTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchGetTrainTaskWithOptions(request, headers, runtime);
  }

  /**
   * 批量查询视频切片任务信息
   * 
   * @param tmpReq - BatchGetVideoClipTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGetVideoClipTaskResponse
   */
  async batchGetVideoClipTaskWithOptions(tmpReq: $_model.BatchGetVideoClipTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchGetVideoClipTaskResponse> {
    tmpReq.validate();
    let request = new $_model.BatchGetVideoClipTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.taskIdList)) {
      request.taskIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskIdList, "taskIdList", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskIdListShrink)) {
      query["taskIdList"] = request.taskIdListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchGetVideoClipTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/video/clip/batchGetVideoClipTask`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchGetVideoClipTaskResponse>(await this.callApi(params, req, runtime), new $_model.BatchGetVideoClipTaskResponse({}));
  }

  /**
   * 批量查询视频切片任务信息
   * 
   * @param request - BatchGetVideoClipTaskRequest
   * @returns BatchGetVideoClipTaskResponse
   */
  async batchGetVideoClipTask(request: $_model.BatchGetVideoClipTaskRequest): Promise<$_model.BatchGetVideoClipTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchGetVideoClipTaskWithOptions(request, headers, runtime);
  }

  /**
   * 批量查询文案
   * 
   * @param tmpReq - BatchQueryIndividuationTextRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchQueryIndividuationTextResponse
   */
  async batchQueryIndividuationTextWithOptions(tmpReq: $_model.BatchQueryIndividuationTextRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchQueryIndividuationTextResponse> {
    tmpReq.validate();
    let request = new $_model.BatchQueryIndividuationTextShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.textIdList)) {
      request.textIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.textIdList, "textIdList", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.textIdListShrink)) {
      query["textIdList"] = request.textIdListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchQueryIndividuationText",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/individuationText/batchQueryText`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchQueryIndividuationTextResponse>(await this.callApi(params, req, runtime), new $_model.BatchQueryIndividuationTextResponse({}));
  }

  /**
   * 批量查询文案
   * 
   * @param request - BatchQueryIndividuationTextRequest
   * @returns BatchQueryIndividuationTextResponse
   */
  async batchQueryIndividuationText(request: $_model.BatchQueryIndividuationTextRequest): Promise<$_model.BatchQueryIndividuationTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchQueryIndividuationTextWithOptions(request, headers, runtime);
  }

  /**
   * 快速发布剧本
   * 
   * @param request - BuildAICoachScriptRecordRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BuildAICoachScriptRecordResponse
   */
  async buildAICoachScriptRecordWithOptions(request: $_model.BuildAICoachScriptRecordRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BuildAICoachScriptRecordResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.scriptJsonUrl)) {
      body["scriptJsonUrl"] = request.scriptJsonUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BuildAICoachScriptRecord",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aicoach/buildScriptRecord`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BuildAICoachScriptRecordResponse>(await this.callApi(params, req, runtime), new $_model.BuildAICoachScriptRecordResponse({}));
  }

  /**
   * 快速发布剧本
   * 
   * @param request - BuildAICoachScriptRecordRequest
   * @returns BuildAICoachScriptRecordResponse
   */
  async buildAICoachScriptRecord(request: $_model.BuildAICoachScriptRecordRequest): Promise<$_model.BuildAICoachScriptRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.buildAICoachScriptRecordWithOptions(request, headers, runtime);
  }

  /**
   * 检查会话状态
   * 
   * @param request - CheckSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckSessionResponse
   */
  async checkSessionWithOptions(request: $_model.CheckSessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CheckSessionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckSession",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/avatar/project/checkSession`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckSessionResponse>(await this.callApi(params, req, runtime), new $_model.CheckSessionResponse({}));
  }

  /**
   * 检查会话状态
   * 
   * @param request - CheckSessionRequest
   * @returns CheckSessionResponse
   */
  async checkSession(request: $_model.CheckSessionRequest): Promise<$_model.CheckSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkSessionWithOptions(request, headers, runtime);
  }

  /**
   * 学员关闭会话
   * 
   * @param request - CloseAICoachTaskSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseAICoachTaskSessionResponse
   */
  async closeAICoachTaskSessionWithOptions(request: $_model.CloseAICoachTaskSessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CloseAICoachTaskSessionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.uid)) {
      body["uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloseAICoachTaskSession",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aicoach/closeSession`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloseAICoachTaskSessionResponse>(await this.callApi(params, req, runtime), new $_model.CloseAICoachTaskSessionResponse({}));
  }

  /**
   * 学员关闭会话
   * 
   * @param request - CloseAICoachTaskSessionRequest
   * @returns CloseAICoachTaskSessionResponse
   */
  async closeAICoachTaskSession(request: $_model.CloseAICoachTaskSessionRequest): Promise<$_model.CloseAICoachTaskSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.closeAICoachTaskSessionWithOptions(request, headers, runtime);
  }

  /**
   * 文本数量统计
   * 
   * @param request - CountTextRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CountTextResponse
   */
  async countTextWithOptions(request: $_model.CountTextRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CountTextResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.generationSource)) {
      query["generationSource"] = request.generationSource;
    }

    if (!$dara.isNull(request.industry)) {
      query["industry"] = request.industry;
    }

    if (!$dara.isNull(request.publishStatus)) {
      query["publishStatus"] = request.publishStatus;
    }

    if (!$dara.isNull(request.style)) {
      query["style"] = request.style;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CountText",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/countText`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CountTextResponse>(await this.callApi(params, req, runtime), new $_model.CountTextResponse({}));
  }

  /**
   * 文本数量统计
   * 
   * @param request - CountTextRequest
   * @returns CountTextResponse
   */
  async countText(request: $_model.CountTextRequest): Promise<$_model.CountTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.countTextWithOptions(request, headers, runtime);
  }

  /**
   * 查询剧本列表
   * 
   * @param request - CreateAICoachTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAICoachTaskResponse
   */
  async createAICoachTaskWithOptions(request: $_model.CreateAICoachTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAICoachTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!$dara.isNull(request.scriptRecordId)) {
      body["scriptRecordId"] = request.scriptRecordId;
    }

    if (!$dara.isNull(request.studentAudioUrl)) {
      body["studentAudioUrl"] = request.studentAudioUrl;
    }

    if (!$dara.isNull(request.studentId)) {
      body["studentId"] = request.studentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAICoachTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aicoach/createTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAICoachTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateAICoachTaskResponse({}));
  }

  /**
   * 查询剧本列表
   * 
   * @param request - CreateAICoachTaskRequest
   * @returns CreateAICoachTaskResponse
   */
  async createAICoachTask(request: $_model.CreateAICoachTaskRequest): Promise<$_model.CreateAICoachTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAICoachTaskWithOptions(request, headers, runtime);
  }

  /**
   * 学员开启对练会话
   * 
   * @param request - CreateAICoachTaskSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAICoachTaskSessionResponse
   */
  async createAICoachTaskSessionWithOptions(request: $_model.CreateAICoachTaskSessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAICoachTaskSessionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    if (!$dara.isNull(request.uid)) {
      body["uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAICoachTaskSession",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aicoach/startSession`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAICoachTaskSessionResponse>(await this.callApi(params, req, runtime), new $_model.CreateAICoachTaskSessionResponse({}));
  }

  /**
   * 学员开启对练会话
   * 
   * @param request - CreateAICoachTaskSessionRequest
   * @returns CreateAICoachTaskSessionResponse
   */
  async createAICoachTaskSession(request: $_model.CreateAICoachTaskSessionRequest): Promise<$_model.CreateAICoachTaskSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAICoachTaskSessionWithOptions(request, headers, runtime);
  }

  /**
   * CreateAgent
   * 
   * @param request - CreateAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAgentResponse
   */
  async createAgentWithOptions(request: $_model.CreateAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentIconUrl)) {
      body["agentIconUrl"] = request.agentIconUrl;
    }

    if (!$dara.isNull(request.agentName)) {
      body["agentName"] = request.agentName;
    }

    if (!$dara.isNull(request.agentScene)) {
      body["agentScene"] = request.agentScene;
    }

    if (!$dara.isNull(request.characterAgeStage)) {
      body["characterAgeStage"] = request.characterAgeStage;
    }

    if (!$dara.isNull(request.characterGender)) {
      body["characterGender"] = request.characterGender;
    }

    if (!$dara.isNull(request.characterName)) {
      body["characterName"] = request.characterName;
    }

    if (!$dara.isNull(request.extraDescription)) {
      body["extraDescription"] = request.extraDescription;
    }

    if (!$dara.isNull(request.industry)) {
      body["industry"] = request.industry;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAgent",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/agent/createAgent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAgentResponse>(await this.callApi(params, req, runtime), new $_model.CreateAgentResponse({}));
  }

  /**
   * CreateAgent
   * 
   * @param request - CreateAgentRequest
   * @returns CreateAgentResponse
   */
  async createAgent(request: $_model.CreateAgentRequest): Promise<$_model.CreateAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAgentWithOptions(request, headers, runtime);
  }

  /**
   * 创建照片数字人
   * 
   * @param request - CreateAnchorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAnchorResponse
   */
  async createAnchorWithOptions(request: $_model.CreateAnchorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAnchorResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.anchorCategory)) {
      body["anchorCategory"] = request.anchorCategory;
    }

    if (!$dara.isNull(request.anchorMaterialName)) {
      body["anchorMaterialName"] = request.anchorMaterialName;
    }

    if (!$dara.isNull(request.coverUrl)) {
      body["coverUrl"] = request.coverUrl;
    }

    if (!$dara.isNull(request.digitalHumanType)) {
      body["digitalHumanType"] = request.digitalHumanType;
    }

    if (!$dara.isNull(request.gender)) {
      body["gender"] = request.gender;
    }

    if (!$dara.isNull(request.useScene)) {
      body["useScene"] = request.useScene;
    }

    if (!$dara.isNull(request.videoOssKey)) {
      body["videoOssKey"] = request.videoOssKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAnchor",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/digitalHuman/anchorOpen/createAnchor`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAnchorResponse>(await this.callApi(params, req, runtime), new $_model.CreateAnchorResponse({}));
  }

  /**
   * 创建照片数字人
   * 
   * @param request - CreateAnchorRequest
   * @returns CreateAnchorResponse
   */
  async createAnchor(request: $_model.CreateAnchorRequest): Promise<$_model.CreateAnchorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAnchorWithOptions(request, headers, runtime);
  }

  /**
   * 创建配图生成任务
   * 
   * @param request - CreateIllustrationTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIllustrationTaskResponse
   */
  async createIllustrationTaskWithOptions(textId: string, request: $_model.CreateIllustrationTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIllustrationTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIllustrationTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/texts/${$dara.URL.percentEncode(textId)}/illustrationTasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIllustrationTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateIllustrationTaskResponse({}));
  }

  /**
   * 创建配图生成任务
   * 
   * @param request - CreateIllustrationTaskRequest
   * @returns CreateIllustrationTaskResponse
   */
  async createIllustrationTask(textId: string, request: $_model.CreateIllustrationTaskRequest): Promise<$_model.CreateIllustrationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIllustrationTaskWithOptions(textId, request, headers, runtime);
  }

  /**
   * 创建个性化文案项目
   * 
   * @param request - CreateIndividuationProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIndividuationProjectResponse
   */
  async createIndividuationProjectWithOptions(request: $_model.CreateIndividuationProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIndividuationProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectInfo)) {
      body["projectInfo"] = request.projectInfo;
    }

    if (!$dara.isNull(request.projectName)) {
      body["projectName"] = request.projectName;
    }

    if (!$dara.isNull(request.purpose)) {
      body["purpose"] = request.purpose;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["sceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIndividuationProject",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/individuationText/createProject`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIndividuationProjectResponse>(await this.callApi(params, req, runtime), new $_model.CreateIndividuationProjectResponse({}));
  }

  /**
   * 创建个性化文案项目
   * 
   * @param request - CreateIndividuationProjectRequest
   * @returns CreateIndividuationProjectResponse
   */
  async createIndividuationProject(request: $_model.CreateIndividuationProjectRequest): Promise<$_model.CreateIndividuationProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIndividuationProjectWithOptions(request, headers, runtime);
  }

  /**
   * 创建个性化文案任务
   * 
   * @param request - CreateIndividuationTextTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIndividuationTextTaskResponse
   */
  async createIndividuationTextTaskWithOptions(request: $_model.CreateIndividuationTextTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIndividuationTextTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.crowdPack)) {
      body["crowdPack"] = request.crowdPack;
    }

    if (!$dara.isNull(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.taskName)) {
      body["taskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIndividuationTextTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/individuationText/createTextTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIndividuationTextTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateIndividuationTextTaskResponse({}));
  }

  /**
   * 创建个性化文案任务
   * 
   * @param request - CreateIndividuationTextTaskRequest
   * @returns CreateIndividuationTextTaskResponse
   */
  async createIndividuationTextTask(request: $_model.CreateIndividuationTextTaskRequest): Promise<$_model.CreateIndividuationTextTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIndividuationTextTaskWithOptions(request, headers, runtime);
  }

  /**
   * 创建产品图
   * 
   * @param request - CreateProductImageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProductImageResponse
   */
  async createProductImageWithOptions(request: $_model.CreateProductImageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProductImageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.backgroundDescription)) {
      body["backgroundDescription"] = request.backgroundDescription;
    }

    if (!$dara.isNull(request.backgroundPriority)) {
      body["backgroundPriority"] = request.backgroundPriority;
    }

    if (!$dara.isNull(request.backgroundUrl)) {
      body["backgroundUrl"] = request.backgroundUrl;
    }

    if (!$dara.isNull(request.highlightText)) {
      body["highlightText"] = request.highlightText;
    }

    if (!$dara.isNull(request.imageCount)) {
      body["imageCount"] = request.imageCount;
    }

    if (!$dara.isNull(request.imageUrl)) {
      body["imageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.subTitle)) {
      body["subTitle"] = request.subTitle;
    }

    if (!$dara.isNull(request.title)) {
      body["title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProductImage",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/images/products`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProductImageResponse>(await this.callApi(params, req, runtime), new $_model.CreateProductImageResponse({}));
  }

  /**
   * 创建产品图
   * 
   * @param request - CreateProductImageRequest
   * @returns CreateProductImageResponse
   */
  async createProductImage(request: $_model.CreateProductImageRequest): Promise<$_model.CreateProductImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProductImageWithOptions(request, headers, runtime);
  }

  /**
   * 写实人像创作
   * 
   * @param request - CreateRealisticPortraitRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRealisticPortraitResponse
   */
  async createRealisticPortraitWithOptions(request: $_model.CreateRealisticPortraitRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRealisticPortraitResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ages)) {
      body["ages"] = request.ages;
    }

    if (!$dara.isNull(request.cloth)) {
      body["cloth"] = request.cloth;
    }

    if (!$dara.isNull(request.color)) {
      body["color"] = request.color;
    }

    if (!$dara.isNull(request.custom)) {
      body["custom"] = request.custom;
    }

    if (!$dara.isNull(request.face)) {
      body["face"] = request.face;
    }

    if (!$dara.isNull(request.figure)) {
      body["figure"] = request.figure;
    }

    if (!$dara.isNull(request.gender)) {
      body["gender"] = request.gender;
    }

    if (!$dara.isNull(request.hairColor)) {
      body["hairColor"] = request.hairColor;
    }

    if (!$dara.isNull(request.hairstyle)) {
      body["hairstyle"] = request.hairstyle;
    }

    if (!$dara.isNull(request.height)) {
      body["height"] = request.height;
    }

    if (!$dara.isNull(request.imageUrl)) {
      body["imageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.numbers)) {
      body["numbers"] = request.numbers;
    }

    if (!$dara.isNull(request.ratio)) {
      body["ratio"] = request.ratio;
    }

    if (!$dara.isNull(request.width)) {
      body["width"] = request.width;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRealisticPortrait",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/images/portrait/realistic`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRealisticPortraitResponse>(await this.callApi(params, req, runtime), new $_model.CreateRealisticPortraitResponse({}));
  }

  /**
   * 写实人像创作
   * 
   * @param request - CreateRealisticPortraitRequest
   * @returns CreateRealisticPortraitResponse
   */
  async createRealisticPortrait(request: $_model.CreateRealisticPortraitRequest): Promise<$_model.CreateRealisticPortraitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRealisticPortraitWithOptions(request, headers, runtime);
  }

  /**
   * 创建文案生成任务
   * 
   * @param request - CreateTextTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTextTaskResponse
   */
  async createTextTaskWithOptions(request: $_model.CreateTextTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTextTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTextTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/textTasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTextTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateTextTaskResponse({}));
  }

  /**
   * 创建文案生成任务
   * 
   * @param request - CreateTextTaskRequest
   * @returns CreateTextTaskResponse
   */
  async createTextTask(request: $_model.CreateTextTaskRequest): Promise<$_model.CreateTextTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTextTaskWithOptions(request, headers, runtime);
  }

  /**
   * 提交声音复刻任务
   * 
   * @param request - CreateTrainTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTrainTaskResponse
   */
  async createTrainTaskWithOptions(request: $_model.CreateTrainTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTrainTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunMainId)) {
      body["aliyunMainId"] = request.aliyunMainId;
    }

    if (!$dara.isNull(request.resSpecType)) {
      body["resSpecType"] = request.resSpecType;
    }

    if (!$dara.isNull(request.taskType)) {
      body["taskType"] = request.taskType;
    }

    if (!$dara.isNull(request.useScene)) {
      body["useScene"] = request.useScene;
    }

    if (!$dara.isNull(request.voiceGender)) {
      body["voiceGender"] = request.voiceGender;
    }

    if (!$dara.isNull(request.voiceLanguage)) {
      body["voiceLanguage"] = request.voiceLanguage;
    }

    if (!$dara.isNull(request.voiceName)) {
      body["voiceName"] = request.voiceName;
    }

    if (!$dara.isNull(request.voicePath)) {
      body["voicePath"] = request.voicePath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTrainTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/train/task/createTrainTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTrainTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateTrainTaskResponse({}));
  }

  /**
   * 提交声音复刻任务
   * 
   * @param request - CreateTrainTaskRequest
   * @returns CreateTrainTaskResponse
   */
  async createTrainTask(request: $_model.CreateTrainTaskRequest): Promise<$_model.CreateTrainTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTrainTaskWithOptions(request, headers, runtime);
  }

  /**
   * 提交视频切片任务
   * 
   * @param request - CreateVideoClipTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVideoClipTaskResponse
   */
  async createVideoClipTaskWithOptions(request: $_model.CreateVideoClipTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVideoClipTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunMainId)) {
      body["aliyunMainId"] = request.aliyunMainId;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.ossKeys)) {
      body["ossKeys"] = request.ossKeys;
    }

    if (!$dara.isNull(request.requirement)) {
      body["requirement"] = request.requirement;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVideoClipTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/video/clip/createVideoClipTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVideoClipTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateVideoClipTaskResponse({}));
  }

  /**
   * 提交视频切片任务
   * 
   * @param request - CreateVideoClipTaskRequest
   * @returns CreateVideoClipTaskResponse
   */
  async createVideoClipTask(request: $_model.CreateVideoClipTaskRequest): Promise<$_model.CreateVideoClipTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createVideoClipTaskWithOptions(request, headers, runtime);
  }

  /**
   * DeleteAICoachScript
   * 
   * @param request - DeleteAICoachScriptRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAICoachScriptResponse
   */
  async deleteAICoachScriptWithOptions(request: $_model.DeleteAICoachScriptRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAICoachScriptResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.scriptId)) {
      body["scriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAICoachScript",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aicoach/deleteAICoachScript`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAICoachScriptResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAICoachScriptResponse({}));
  }

  /**
   * DeleteAICoachScript
   * 
   * @param request - DeleteAICoachScriptRequest
   * @returns DeleteAICoachScriptResponse
   */
  async deleteAICoachScript(request: $_model.DeleteAICoachScriptRequest): Promise<$_model.DeleteAICoachScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAICoachScriptWithOptions(request, headers, runtime);
  }

  /**
   * DeleteAgent
   * 
   * @param request - DeleteAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAgentResponse
   */
  async deleteAgentWithOptions(request: $_model.DeleteAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      body["agentId"] = request.agentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAgent",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/agent/deleteAgent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAgentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAgentResponse({}));
  }

  /**
   * DeleteAgent
   * 
   * @param request - DeleteAgentRequest
   * @returns DeleteAgentResponse
   */
  async deleteAgent(request: $_model.DeleteAgentRequest): Promise<$_model.DeleteAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAgentWithOptions(request, headers, runtime);
  }

  /**
   * 删除个性化文案项目
   * 
   * @param request - DeleteIndividuationProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIndividuationProjectResponse
   */
  async deleteIndividuationProjectWithOptions(request: $_model.DeleteIndividuationProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIndividuationProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIndividuationProject",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/individuationText/deleteProject`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIndividuationProjectResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIndividuationProjectResponse({}));
  }

  /**
   * 删除个性化文案项目
   * 
   * @param request - DeleteIndividuationProjectRequest
   * @returns DeleteIndividuationProjectResponse
   */
  async deleteIndividuationProject(request: $_model.DeleteIndividuationProjectRequest): Promise<$_model.DeleteIndividuationProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIndividuationProjectWithOptions(request, headers, runtime);
  }

  /**
   * 删除个性化文案
   * 
   * @param request - DeleteIndividuationTextRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIndividuationTextResponse
   */
  async deleteIndividuationTextWithOptions(request: $_model.DeleteIndividuationTextRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIndividuationTextResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.textIdList)) {
      body["textIdList"] = request.textIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIndividuationText",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/individuationText/deleteText`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIndividuationTextResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIndividuationTextResponse({}));
  }

  /**
   * 删除个性化文案
   * 
   * @param request - DeleteIndividuationTextRequest
   * @returns DeleteIndividuationTextResponse
   */
  async deleteIndividuationText(request: $_model.DeleteIndividuationTextRequest): Promise<$_model.DeleteIndividuationTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIndividuationTextWithOptions(request, headers, runtime);
  }

  /**
   * 查询文档信息与状态
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDocumentResponse
   */
  async describeDocumentWithOptions(knowledgeBaseId: string, documentId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDocumentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDocument",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/knowledge-base/${$dara.URL.percentEncode(knowledgeBaseId)}/documents/${$dara.URL.percentEncode(documentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDocumentResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDocumentResponse({}));
  }

  /**
   * 查询文档信息与状态
   * @returns DescribeDocumentResponse
   */
  async describeDocument(knowledgeBaseId: string, documentId: string): Promise<$_model.DescribeDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeDocumentWithOptions(knowledgeBaseId, documentId, headers, runtime);
  }

  /**
   * 学员完成会话
   * 
   * @param request - FinishAICoachTaskSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FinishAICoachTaskSessionResponse
   */
  async finishAICoachTaskSessionWithOptions(request: $_model.FinishAICoachTaskSessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.FinishAICoachTaskSessionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.uid)) {
      body["uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FinishAICoachTaskSession",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aicoach/finishSession`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FinishAICoachTaskSessionResponse>(await this.callApi(params, req, runtime), new $_model.FinishAICoachTaskSessionResponse({}));
  }

  /**
   * 学员完成会话
   * 
   * @param request - FinishAICoachTaskSessionRequest
   * @returns FinishAICoachTaskSessionResponse
   */
  async finishAICoachTaskSession(request: $_model.FinishAICoachTaskSessionRequest): Promise<$_model.FinishAICoachTaskSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.finishAICoachTaskSessionWithOptions(request, headers, runtime);
  }

  /**
   * 获取考核点详情
   * 
   * @param request - GetAICoachAssessmentPointRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAICoachAssessmentPointResponse
   */
  async getAICoachAssessmentPointWithOptions(request: $_model.GetAICoachAssessmentPointRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAICoachAssessmentPointResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pointId)) {
      query["pointId"] = request.pointId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAICoachAssessmentPoint",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aicoach/getAssessmentPoint`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAICoachAssessmentPointResponse>(await this.callApi(params, req, runtime), new $_model.GetAICoachAssessmentPointResponse({}));
  }

  /**
   * 获取考核点详情
   * 
   * @param request - GetAICoachAssessmentPointRequest
   * @returns GetAICoachAssessmentPointResponse
   */
  async getAICoachAssessmentPoint(request: $_model.GetAICoachAssessmentPointRequest): Promise<$_model.GetAICoachAssessmentPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAICoachAssessmentPointWithOptions(request, headers, runtime);
  }

  /**
   * 查询作弊检测详情
   * 
   * @param request - GetAICoachCheatDetectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAICoachCheatDetectionResponse
   */
  async getAICoachCheatDetectionWithOptions(request: $_model.GetAICoachCheatDetectionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAICoachCheatDetectionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sessionId)) {
      query["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAICoachCheatDetection",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aicoach/getCheatDetection`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAICoachCheatDetectionResponse>(await this.callApi(params, req, runtime), new $_model.GetAICoachCheatDetectionResponse({}));
  }

  /**
   * 查询作弊检测详情
   * 
   * @param request - GetAICoachCheatDetectionRequest
   * @returns GetAICoachCheatDetectionResponse
   */
  async getAICoachCheatDetection(request: $_model.GetAICoachCheatDetectionRequest): Promise<$_model.GetAICoachCheatDetectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAICoachCheatDetectionWithOptions(request, headers, runtime);
  }

  /**
   * 查询剧本详情
   * 
   * @param request - GetAICoachScriptRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAICoachScriptResponse
   */
  async getAICoachScriptWithOptions(request: $_model.GetAICoachScriptRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAICoachScriptResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.scriptRecordId)) {
      query["scriptRecordId"] = request.scriptRecordId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAICoachScript",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aicoach/getScript`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAICoachScriptResponse>(await this.callApi(params, req, runtime), new $_model.GetAICoachScriptResponse({}));
  }

  /**
   * 查询剧本详情
   * 
   * @param request - GetAICoachScriptRequest
   * @returns GetAICoachScriptResponse
   */
  async getAICoachScript(request: $_model.GetAICoachScriptRequest): Promise<$_model.GetAICoachScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAICoachScriptWithOptions(request, headers, runtime);
  }

  /**
   * 学员查询会话历史
   * 
   * @param request - GetAICoachTaskSessionHistoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAICoachTaskSessionHistoryResponse
   */
  async getAICoachTaskSessionHistoryWithOptions(request: $_model.GetAICoachTaskSessionHistoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAICoachTaskSessionHistoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.uid)) {
      query["uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAICoachTaskSessionHistory",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aicoach/querySessionHistory`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAICoachTaskSessionHistoryResponse>(await this.callApi(params, req, runtime), new $_model.GetAICoachTaskSessionHistoryResponse({}));
  }

  /**
   * 学员查询会话历史
   * 
   * @param request - GetAICoachTaskSessionHistoryRequest
   * @returns GetAICoachTaskSessionHistoryResponse
   */
  async getAICoachTaskSessionHistory(request: $_model.GetAICoachTaskSessionHistoryRequest): Promise<$_model.GetAICoachTaskSessionHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAICoachTaskSessionHistoryWithOptions(request, headers, runtime);
  }

  /**
   * 学员查询会话评测报告
   * 
   * @param request - GetAICoachTaskSessionReportRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAICoachTaskSessionReportResponse
   */
  async getAICoachTaskSessionReportWithOptions(request: $_model.GetAICoachTaskSessionReportRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAICoachTaskSessionReportResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sessionId)) {
      query["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.uid)) {
      query["uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAICoachTaskSessionReport",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aicoach/queryTaskSessionReport`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAICoachTaskSessionReportResponse>(await this.callApi(params, req, runtime), new $_model.GetAICoachTaskSessionReportResponse({}));
  }

  /**
   * 学员查询会话评测报告
   * 
   * @param request - GetAICoachTaskSessionReportRequest
   * @returns GetAICoachTaskSessionReportResponse
   */
  async getAICoachTaskSessionReport(request: $_model.GetAICoachTaskSessionReportRequest): Promise<$_model.GetAICoachTaskSessionReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAICoachTaskSessionReportWithOptions(request, headers, runtime);
  }

  /**
   * 获取对练会话资源使用情况
   * 
   * @param request - GetAICoachTaskSessionResourceUsageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAICoachTaskSessionResourceUsageResponse
   */
  async getAICoachTaskSessionResourceUsageWithOptions(request: $_model.GetAICoachTaskSessionResourceUsageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAICoachTaskSessionResourceUsageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sessionId)) {
      query["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAICoachTaskSessionResourceUsage",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aicoach/getSessionResourceUsage`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAICoachTaskSessionResourceUsageResponse>(await this.callApi(params, req, runtime), new $_model.GetAICoachTaskSessionResourceUsageResponse({}));
  }

  /**
   * 获取对练会话资源使用情况
   * 
   * @param request - GetAICoachTaskSessionResourceUsageRequest
   * @returns GetAICoachTaskSessionResourceUsageResponse
   */
  async getAICoachTaskSessionResourceUsage(request: $_model.GetAICoachTaskSessionResourceUsageRequest): Promise<$_model.GetAICoachTaskSessionResourceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAICoachTaskSessionResourceUsageWithOptions(request, headers, runtime);
  }

  /**
   * 查询配图
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIllustrationResponse
   */
  async getIllustrationWithOptions(textId: string, illustrationId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetIllustrationResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIllustration",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/texts/${$dara.URL.percentEncode(textId)}/illustrations/${$dara.URL.percentEncode(illustrationId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIllustrationResponse>(await this.callApi(params, req, runtime), new $_model.GetIllustrationResponse({}));
  }

  /**
   * 查询配图
   * @returns GetIllustrationResponse
   */
  async getIllustration(textId: string, illustrationId: string): Promise<$_model.GetIllustrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIllustrationWithOptions(textId, illustrationId, headers, runtime);
  }

  /**
   * 查询配图任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIllustrationTaskResponse
   */
  async getIllustrationTaskWithOptions(textId: string, illustrationTaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetIllustrationTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIllustrationTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/texts/${$dara.URL.percentEncode(textId)}/illustrationTasks/${$dara.URL.percentEncode(illustrationTaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIllustrationTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetIllustrationTaskResponse({}));
  }

  /**
   * 查询配图任务
   * @returns GetIllustrationTaskResponse
   */
  async getIllustrationTask(textId: string, illustrationTaskId: string): Promise<$_model.GetIllustrationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIllustrationTaskWithOptions(textId, illustrationTaskId, headers, runtime);
  }

  /**
   * 获取图片上传oss token
   * 
   * @param request - GetOssUploadTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOssUploadTokenResponse
   */
  async getOssUploadTokenWithOptions(request: $_model.GetOssUploadTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetOssUploadTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileType)) {
      query["fileType"] = request.fileType;
    }

    if (!$dara.isNull(request.uploadType)) {
      query["uploadType"] = request.uploadType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOssUploadToken",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/uploadToken`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOssUploadTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetOssUploadTokenResponse({}));
  }

  /**
   * 获取图片上传oss token
   * 
   * @param request - GetOssUploadTokenRequest
   * @returns GetOssUploadTokenResponse
   */
  async getOssUploadToken(request: $_model.GetOssUploadTokenRequest): Promise<$_model.GetOssUploadTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOssUploadTokenWithOptions(request, headers, runtime);
  }

  /**
   * 获取数据人合成信息
   * 
   * @param request - GetProjectTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectTaskResponse
   */
  async getProjectTaskWithOptions(request: $_model.GetProjectTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetProjectTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.idempotentId)) {
      query["IdempotentId"] = request.idempotentId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProjectTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/digitalHuman/project/getProjectTask`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProjectTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetProjectTaskResponse({}));
  }

  /**
   * 获取数据人合成信息
   * 
   * @param request - GetProjectTaskRequest
   * @returns GetProjectTaskResponse
   */
  async getProjectTask(request: $_model.GetProjectTaskRequest): Promise<$_model.GetProjectTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectTaskWithOptions(request, headers, runtime);
  }

  /**
   * 查询文案
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTextResponse
   */
  async getTextWithOptions(textId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTextResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetText",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/texts/${$dara.URL.percentEncode(textId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTextResponse>(await this.callApi(params, req, runtime), new $_model.GetTextResponse({}));
  }

  /**
   * 查询文案
   * @returns GetTextResponse
   */
  async getText(textId: string): Promise<$_model.GetTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTextWithOptions(textId, headers, runtime);
  }

  /**
   * 查询文案任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTextTaskResponse
   */
  async getTextTaskWithOptions(textTaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTextTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTextTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/textTasks/${$dara.URL.percentEncode(textTaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTextTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetTextTaskResponse({}));
  }

  /**
   * 查询文案任务
   * @returns GetTextTaskResponse
   */
  async getTextTask(textTaskId: string): Promise<$_model.GetTextTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTextTaskWithOptions(textTaskId, headers, runtime);
  }

  /**
   * 查询表单配置
   * 
   * @param request - GetTextTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTextTemplateResponse
   */
  async getTextTemplateWithOptions(request: $_model.GetTextTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTextTemplateResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.industry)) {
      query["industry"] = request.industry;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTextTemplate",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/texts/commands/getTextTemplate`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTextTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetTextTemplateResponse({}));
  }

  /**
   * 查询表单配置
   * 
   * @param request - GetTextTemplateRequest
   * @returns GetTextTemplateResponse
   */
  async getTextTemplate(request: $_model.GetTextTemplateRequest): Promise<$_model.GetTextTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTextTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 营销文案互动问答
   * 
   * @param request - InteractTextRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InteractTextResponse
   */
  async *interactTextWithSSE(request: $_model.InteractTextRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.InteractTextResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      body["agentId"] = request.agentId;
    }

    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InteractText",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/stream/interactText`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.InteractTextResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.InteractTextResponse({}));
    }
  }

  /**
   * 营销文案互动问答
   * 
   * @param request - InteractTextRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InteractTextResponse
   */
  async interactTextWithOptions(request: $_model.InteractTextRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InteractTextResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      body["agentId"] = request.agentId;
    }

    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InteractText",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/stream/interactText`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InteractTextResponse>(await this.callApi(params, req, runtime), new $_model.InteractTextResponse({}));
  }

  /**
   * 营销文案互动问答
   * 
   * @param request - InteractTextRequest
   * @returns InteractTextResponse
   */
  async interactText(request: $_model.InteractTextRequest): Promise<$_model.InteractTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.interactTextWithOptions(request, headers, runtime);
  }

  /**
   * 查询剧本列表
   * 
   * @param request - ListAICoachScriptPageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAICoachScriptPageResponse
   */
  async listAICoachScriptPageWithOptions(request: $_model.ListAICoachScriptPageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAICoachScriptPageResponse> {
    request.validate();
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

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAICoachScriptPage",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aicoach/pageScript`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAICoachScriptPageResponse>(await this.callApi(params, req, runtime), new $_model.ListAICoachScriptPageResponse({}));
  }

  /**
   * 查询剧本列表
   * 
   * @param request - ListAICoachScriptPageRequest
   * @returns ListAICoachScriptPageResponse
   */
  async listAICoachScriptPage(request: $_model.ListAICoachScriptPageRequest): Promise<$_model.ListAICoachScriptPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAICoachScriptPageWithOptions(request, headers, runtime);
  }

  /**
   * 查询任务列表
   * 
   * @param request - ListAICoachTaskPageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAICoachTaskPageResponse
   */
  async listAICoachTaskPageWithOptions(request: $_model.ListAICoachTaskPageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAICoachTaskPageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.studentId)) {
      query["studentId"] = request.studentId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAICoachTaskPage",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aicoach/listTaskPage`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAICoachTaskPageResponse>(await this.callApi(params, req, runtime), new $_model.ListAICoachTaskPageResponse({}));
  }

  /**
   * 查询任务列表
   * 
   * @param request - ListAICoachTaskPageRequest
   * @returns ListAICoachTaskPageResponse
   */
  async listAICoachTaskPage(request: $_model.ListAICoachTaskPageRequest): Promise<$_model.ListAICoachTaskPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAICoachTaskPageWithOptions(request, headers, runtime);
  }

  /**
   * 分页查询智能体
   * 
   * @param request - ListAgentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentsResponse
   */
  async listAgentsWithOptions(request: $_model.ListAgentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      query["agentId"] = request.agentId;
    }

    if (!$dara.isNull(request.agentScene)) {
      query["agentScene"] = request.agentScene;
    }

    if (!$dara.isNull(request.owner)) {
      query["owner"] = request.owner;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAgents",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/agent/listAgents`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAgentsResponse>(await this.callApi(params, req, runtime), new $_model.ListAgentsResponse({}));
  }

  /**
   * 分页查询智能体
   * 
   * @param request - ListAgentsRequest
   * @returns ListAgentsResponse
   */
  async listAgents(request: $_model.ListAgentsRequest): Promise<$_model.ListAgentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAgentsWithOptions(request, headers, runtime);
  }

  /**
   * 获取数字人模特列表
   * 
   * @param request - ListAnchorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAnchorResponse
   */
  async listAnchorWithOptions(request: $_model.ListAnchorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAnchorResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.anchorCategory)) {
      query["anchorCategory"] = request.anchorCategory;
    }

    if (!$dara.isNull(request.anchorId)) {
      query["anchorId"] = request.anchorId;
    }

    if (!$dara.isNull(request.anchorType)) {
      query["anchorType"] = request.anchorType;
    }

    if (!$dara.isNull(request.coverRate)) {
      query["coverRate"] = request.coverRate;
    }

    if (!$dara.isNull(request.digitalHumanType)) {
      query["digitalHumanType"] = request.digitalHumanType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resSpecType)) {
      query["resSpecType"] = request.resSpecType;
    }

    if (!$dara.isNull(request.useScene)) {
      query["useScene"] = request.useScene;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAnchor",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/digitalHuman/anchorOpen/listAnchor`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAnchorResponse>(await this.callApi(params, req, runtime), new $_model.ListAnchorResponse({}));
  }

  /**
   * 获取数字人模特列表
   * 
   * @param request - ListAnchorRequest
   * @returns ListAnchorResponse
   */
  async listAnchor(request: $_model.ListAnchorRequest): Promise<$_model.ListAnchorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAnchorWithOptions(request, headers, runtime);
  }

  /**
   * 批量查询数字人项目启动结果
   * 
   * @param tmpReq - ListAvatarProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAvatarProjectResponse
   */
  async listAvatarProjectWithOptions(tmpReq: $_model.ListAvatarProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAvatarProjectResponse> {
    tmpReq.validate();
    let request = new $_model.ListAvatarProjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.projectIdList)) {
      request.projectIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.projectIdList, "projectIdList", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectIdListShrink)) {
      query["projectIdList"] = request.projectIdListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAvatarProject",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/avatar/project/listAvatarProject`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAvatarProjectResponse>(await this.callApi(params, req, runtime), new $_model.ListAvatarProjectResponse({}));
  }

  /**
   * 批量查询数字人项目启动结果
   * 
   * @param request - ListAvatarProjectRequest
   * @returns ListAvatarProjectResponse
   */
  async listAvatarProject(request: $_model.ListAvatarProjectRequest): Promise<$_model.ListAvatarProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAvatarProjectWithOptions(request, headers, runtime);
  }

  /**
   * 查询知识库
   * 
   * @param request - ListKnowledgeBaseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKnowledgeBaseResponse
   */
  async listKnowledgeBaseWithOptions(request: $_model.ListKnowledgeBaseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListKnowledgeBaseResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.knowledgeBaseId)) {
      query["knowledgeBaseId"] = request.knowledgeBaseId;
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
      action: "ListKnowledgeBase",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/knowledge-base`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListKnowledgeBaseResponse>(await this.callApi(params, req, runtime), new $_model.ListKnowledgeBaseResponse({}));
  }

  /**
   * 查询知识库
   * 
   * @param request - ListKnowledgeBaseRequest
   * @returns ListKnowledgeBaseResponse
   */
  async listKnowledgeBase(request: $_model.ListKnowledgeBaseRequest): Promise<$_model.ListKnowledgeBaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listKnowledgeBaseWithOptions(request, headers, runtime);
  }

  /**
   * 查询文案主题列表
   * 
   * @param request - ListTextThemesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTextThemesResponse
   */
  async listTextThemesWithOptions(request: $_model.ListTextThemesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTextThemesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.industry)) {
      query["industry"] = request.industry;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTextThemes",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/textThemes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTextThemesResponse>(await this.callApi(params, req, runtime), new $_model.ListTextThemesResponse({}));
  }

  /**
   * 查询文案主题列表
   * 
   * @param request - ListTextThemesRequest
   * @returns ListTextThemesResponse
   */
  async listTextThemes(request: $_model.ListTextThemesRequest): Promise<$_model.ListTextThemesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTextThemesWithOptions(request, headers, runtime);
  }

  /**
   * 列举文案
   * 
   * @param request - ListTextsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTextsResponse
   */
  async listTextsWithOptions(request: $_model.ListTextsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTextsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.generationSource)) {
      query["generationSource"] = request.generationSource;
    }

    if (!$dara.isNull(request.industry)) {
      query["industry"] = request.industry;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.publishStatus)) {
      query["publishStatus"] = request.publishStatus;
    }

    if (!$dara.isNull(request.textStyleType)) {
      query["textStyleType"] = request.textStyleType;
    }

    if (!$dara.isNull(request.textTheme)) {
      query["textTheme"] = request.textTheme;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTexts",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/texts`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTextsResponse>(await this.callApi(params, req, runtime), new $_model.ListTextsResponse({}));
  }

  /**
   * 列举文案
   * 
   * @param request - ListTextsRequest
   * @returns ListTextsResponse
   */
  async listTexts(request: $_model.ListTextsRequest): Promise<$_model.ListTextsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTextsWithOptions(request, headers, runtime);
  }

  /**
   * 获取声音模版列表
   * 
   * @param request - ListVoiceModelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVoiceModelsResponse
   */
  async listVoiceModelsWithOptions(request: $_model.ListVoiceModelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListVoiceModelsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resSpecType)) {
      query["resSpecType"] = request.resSpecType;
    }

    if (!$dara.isNull(request.useScene)) {
      query["useScene"] = request.useScene;
    }

    if (!$dara.isNull(request.voiceLanguage)) {
      query["voiceLanguage"] = request.voiceLanguage;
    }

    if (!$dara.isNull(request.voiceType)) {
      query["voiceType"] = request.voiceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVoiceModels",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/digitalHuman/voiceOpen/listVoiceModels`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVoiceModelsResponse>(await this.callApi(params, req, runtime), new $_model.ListVoiceModelsResponse({}));
  }

  /**
   * 获取声音模版列表
   * 
   * @param request - ListVoiceModelsRequest
   * @returns ListVoiceModelsResponse
   */
  async listVoiceModels(request: $_model.ListVoiceModelsRequest): Promise<$_model.ListVoiceModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVoiceModelsWithOptions(request, headers, runtime);
  }

  /**
   * 下线剧本
   * 
   * @param request - OfflineAICoachScriptRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OfflineAICoachScriptResponse
   */
  async offlineAICoachScriptWithOptions(request: $_model.OfflineAICoachScriptRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.OfflineAICoachScriptResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.scriptId)) {
      body["scriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OfflineAICoachScript",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aicoach/offlineAICoachScript`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.OfflineAICoachScriptResponse>(await this.callApi(params, req, runtime), new $_model.OfflineAICoachScriptResponse({}));
  }

  /**
   * 下线剧本
   * 
   * @param request - OfflineAICoachScriptRequest
   * @returns OfflineAICoachScriptResponse
   */
  async offlineAICoachScript(request: $_model.OfflineAICoachScriptRequest): Promise<$_model.OfflineAICoachScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.offlineAICoachScriptWithOptions(request, headers, runtime);
  }

  /**
   * 操作实时数字人项目
   * 
   * @param request - OperateAvatarProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateAvatarProjectResponse
   */
  async operateAvatarProjectWithOptions(request: $_model.OperateAvatarProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.OperateAvatarProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.operateType)) {
      body["operateType"] = request.operateType;
    }

    if (!$dara.isNull(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.resChannelNumber)) {
      body["resChannelNumber"] = request.resChannelNumber;
    }

    if (!$dara.isNull(request.resType)) {
      body["resType"] = request.resType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateAvatarProject",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/avatar/project/operateProjectAvatar`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateAvatarProjectResponse>(await this.callApi(params, req, runtime), new $_model.OperateAvatarProjectResponse({}));
  }

  /**
   * 操作实时数字人项目
   * 
   * @param request - OperateAvatarProjectRequest
   * @returns OperateAvatarProjectResponse
   */
  async operateAvatarProject(request: $_model.OperateAvatarProjectRequest): Promise<$_model.OperateAvatarProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.operateAvatarProjectWithOptions(request, headers, runtime);
  }

  /**
   * 查询数字人项目信息
   * 
   * @param request - QueryAvatarProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAvatarProjectResponse
   */
  async queryAvatarProjectWithOptions(request: $_model.QueryAvatarProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAvatarProjectResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      query["projectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAvatarProject",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/avatar/project/queryAvatarProject`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAvatarProjectResponse>(await this.callApi(params, req, runtime), new $_model.QueryAvatarProjectResponse({}));
  }

  /**
   * 查询数字人项目信息
   * 
   * @param request - QueryAvatarProjectRequest
   * @returns QueryAvatarProjectResponse
   */
  async queryAvatarProject(request: $_model.QueryAvatarProjectRequest): Promise<$_model.QueryAvatarProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryAvatarProjectWithOptions(request, headers, runtime);
  }

  /**
   * 查找资源
   * 
   * @param request - QueryAvatarResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAvatarResourceResponse
   */
  async queryAvatarResourceWithOptions(request: $_model.QueryAvatarResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAvatarResourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.idempotentId)) {
      query["idempotentId"] = request.idempotentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAvatarResource",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/avatar/project/queryResource`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAvatarResourceResponse>(await this.callApi(params, req, runtime), new $_model.QueryAvatarResourceResponse({}));
  }

  /**
   * 查找资源
   * 
   * @param request - QueryAvatarResourceRequest
   * @returns QueryAvatarResourceResponse
   */
  async queryAvatarResource(request: $_model.QueryAvatarResourceRequest): Promise<$_model.QueryAvatarResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryAvatarResourceWithOptions(request, headers, runtime);
  }

  /**
   * 查询图片转视频任务
   * 
   * @param request - QueryImageToVideoTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryImageToVideoTaskResponse
   */
  async queryImageToVideoTaskWithOptions(request: $_model.QueryImageToVideoTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryImageToVideoTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryImageToVideoTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/video/imageToVideo/task`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryImageToVideoTaskResponse>(await this.callApi(params, req, runtime), new $_model.QueryImageToVideoTaskResponse({}));
  }

  /**
   * 查询图片转视频任务
   * 
   * @param request - QueryImageToVideoTaskRequest
   * @returns QueryImageToVideoTaskResponse
   */
  async queryImageToVideoTask(request: $_model.QueryImageToVideoTaskRequest): Promise<$_model.QueryImageToVideoTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryImageToVideoTaskWithOptions(request, headers, runtime);
  }

  /**
   * 查询个性化文案任务
   * 
   * @param request - QueryIndividuationTextTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryIndividuationTextTaskResponse
   */
  async queryIndividuationTextTaskWithOptions(request: $_model.QueryIndividuationTextTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryIndividuationTextTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryIndividuationTextTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/individuationText/queryTextTask`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryIndividuationTextTaskResponse>(await this.callApi(params, req, runtime), new $_model.QueryIndividuationTextTaskResponse({}));
  }

  /**
   * 查询个性化文案任务
   * 
   * @param request - QueryIndividuationTextTaskRequest
   * @returns QueryIndividuationTextTaskResponse
   */
  async queryIndividuationTextTask(request: $_model.QueryIndividuationTextTaskRequest): Promise<$_model.QueryIndividuationTextTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryIndividuationTextTaskWithOptions(request, headers, runtime);
  }

  /**
   * 查询会话信息
   * 
   * @param tmpReq - QuerySessionInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySessionInfoResponse
   */
  async querySessionInfoWithOptions(tmpReq: $_model.QuerySessionInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySessionInfoResponse> {
    tmpReq.validate();
    let request = new $_model.QuerySessionInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.statusList)) {
      request.statusListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.statusList, "statusList", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNo)) {
      query["pageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.statusListShrink)) {
      query["statusList"] = request.statusListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySessionInfo",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/avatar/project/querySessionInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySessionInfoResponse>(await this.callApi(params, req, runtime), new $_model.QuerySessionInfoResponse({}));
  }

  /**
   * 查询会话信息
   * 
   * @param request - QuerySessionInfoRequest
   * @returns QuerySessionInfoResponse
   */
  async querySessionInfo(request: $_model.QuerySessionInfoRequest): Promise<$_model.QuerySessionInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.querySessionInfoWithOptions(request, headers, runtime);
  }

  /**
   * 流式输出文案
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTextStreamResponse
   */
  async *queryTextStreamWithSSE(textId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.QueryTextStreamResponse, any, unknown> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTextStream",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/stream/queryTextStream/${$dara.URL.percentEncode(textId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.QueryTextStreamResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.QueryTextStreamResponse({}));
    }
  }

  /**
   * 流式输出文案
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTextStreamResponse
   */
  async queryTextStreamWithOptions(textId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTextStreamResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTextStream",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/stream/queryTextStream/${$dara.URL.percentEncode(textId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTextStreamResponse>(await this.callApi(params, req, runtime), new $_model.QueryTextStreamResponse({}));
  }

  /**
   * 流式输出文案
   * @returns QueryTextStreamResponse
   */
  async queryTextStream(textId: string): Promise<$_model.QueryTextStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryTextStreamWithOptions(textId, headers, runtime);
  }

  /**
   * ReleaseAgent
   * 
   * @param request - ReleaseAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseAgentResponse
   */
  async releaseAgentWithOptions(request: $_model.ReleaseAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      body["agentId"] = request.agentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseAgent",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/agent/releaseAgent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseAgentResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseAgentResponse({}));
  }

  /**
   * ReleaseAgent
   * 
   * @param request - ReleaseAgentRequest
   * @returns ReleaseAgentResponse
   */
  async releaseAgent(request: $_model.ReleaseAgentRequest): Promise<$_model.ReleaseAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.releaseAgentWithOptions(request, headers, runtime);
  }

  /**
   * 保存实时数字人项目
   * 
   * @param request - SaveAvatarProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveAvatarProjectResponse
   */
  async saveAvatarProjectWithOptions(request: $_model.SaveAvatarProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SaveAvatarProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      body["agentId"] = request.agentId;
    }

    if (!$dara.isNull(request.bitRate)) {
      body["bitRate"] = request.bitRate;
    }

    if (!$dara.isNull(request.frameRate)) {
      body["frameRate"] = request.frameRate;
    }

    if (!$dara.isNull(request.frames)) {
      body["frames"] = request.frames;
    }

    if (!$dara.isNull(request.operateType)) {
      body["operateType"] = request.operateType;
    }

    if (!$dara.isNull(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectName)) {
      body["projectName"] = request.projectName;
    }

    if (!$dara.isNull(request.resSpecType)) {
      body["resSpecType"] = request.resSpecType;
    }

    if (!$dara.isNull(request.resolution)) {
      body["resolution"] = request.resolution;
    }

    if (!$dara.isNull(request.scaleType)) {
      body["scaleType"] = request.scaleType;
    }

    if (!$dara.isNull(request.scriptModelTag)) {
      body["scriptModelTag"] = request.scriptModelTag;
    }

    if (!$dara.isNull(request.synchronizedDisplay)) {
      body["synchronizedDisplay"] = request.synchronizedDisplay;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveAvatarProject",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/avatar/project/saveAvatarProject`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveAvatarProjectResponse>(await this.callApi(params, req, runtime), new $_model.SaveAvatarProjectResponse({}));
  }

  /**
   * 保存实时数字人项目
   * 
   * @param request - SaveAvatarProjectRequest
   * @returns SaveAvatarProjectResponse
   */
  async saveAvatarProject(request: $_model.SaveAvatarProjectRequest): Promise<$_model.SaveAvatarProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.saveAvatarProjectWithOptions(request, headers, runtime);
  }

  /**
   * 查询图片任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SelectImageTaskResponse
   */
  async selectImageTaskWithOptions(taskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SelectImageTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "SelectImageTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/images/portrait/select/${$dara.URL.percentEncode(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SelectImageTaskResponse>(await this.callApi(params, req, runtime), new $_model.SelectImageTaskResponse({}));
  }

  /**
   * 查询图片任务
   * @returns SelectImageTaskResponse
   */
  async selectImageTask(taskId: string): Promise<$_model.SelectImageTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.selectImageTaskWithOptions(taskId, headers, runtime);
  }

  /**
   * 查询离线数字人剩余资源
   * 
   * @param request - SelectResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SelectResourceResponse
   */
  async selectResourceWithOptions(request: $_model.SelectResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SelectResourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.idempotentId)) {
      query["idempotentId"] = request.idempotentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SelectResource",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/digitalHuman/project/commands/overview`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SelectResourceResponse>(await this.callApi(params, req, runtime), new $_model.SelectResourceResponse({}));
  }

  /**
   * 查询离线数字人剩余资源
   * 
   * @param request - SelectResourceRequest
   * @returns SelectResourceResponse
   */
  async selectResource(request: $_model.SelectResourceRequest): Promise<$_model.SelectResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.selectResourceWithOptions(request, headers, runtime);
  }

  /**
   * 发送sdk消息
   * 
   * @param request - SendSdkMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendSdkMessageResponse
   */
  async sendSdkMessageWithOptions(request: $_model.SendSdkMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SendSdkMessageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.data)) {
      body["data"] = request.data;
    }

    if (!$dara.isNull(request.header)) {
      body["header"] = request.header;
    }

    if (!$dara.isNull(request.moduleName)) {
      body["moduleName"] = request.moduleName;
    }

    if (!$dara.isNull(request.operationName)) {
      body["operationName"] = request.operationName;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendSdkMessage",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/sdk/sendMessage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendSdkMessageResponse>(await this.callApi(params, req, runtime), new $_model.SendSdkMessageResponse({}));
  }

  /**
   * 发送sdk消息
   * 
   * @param request - SendSdkMessageRequest
   * @returns SendSdkMessageResponse
   */
  async sendSdkMessage(request: $_model.SendSdkMessageRequest): Promise<$_model.SendSdkMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendSdkMessageWithOptions(request, headers, runtime);
  }

  /**
   * 发送sdk流式消息
   * 
   * @param request - SendSdkStreamMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendSdkStreamMessageResponse
   */
  async *sendSdkStreamMessageWithSSE(request: $_model.SendSdkStreamMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.SendSdkStreamMessageResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.data)) {
      body["data"] = request.data;
    }

    if (!$dara.isNull(request.header)) {
      body["header"] = request.header;
    }

    if (!$dara.isNull(request.moduleName)) {
      body["moduleName"] = request.moduleName;
    }

    if (!$dara.isNull(request.operationName)) {
      body["operationName"] = request.operationName;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendSdkStreamMessage",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/sdk/stream/sendMessage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.SendSdkStreamMessageResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.SendSdkStreamMessageResponse({}));
    }
  }

  /**
   * 发送sdk流式消息
   * 
   * @param request - SendSdkStreamMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendSdkStreamMessageResponse
   */
  async sendSdkStreamMessageWithOptions(request: $_model.SendSdkStreamMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SendSdkStreamMessageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.data)) {
      body["data"] = request.data;
    }

    if (!$dara.isNull(request.header)) {
      body["header"] = request.header;
    }

    if (!$dara.isNull(request.moduleName)) {
      body["moduleName"] = request.moduleName;
    }

    if (!$dara.isNull(request.operationName)) {
      body["operationName"] = request.operationName;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendSdkStreamMessage",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/sdk/stream/sendMessage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendSdkStreamMessageResponse>(await this.callApi(params, req, runtime), new $_model.SendSdkStreamMessageResponse({}));
  }

  /**
   * 发送sdk流式消息
   * 
   * @param request - SendSdkStreamMessageRequest
   * @returns SendSdkStreamMessageResponse
   */
  async sendSdkStreamMessage(request: $_model.SendSdkStreamMessageRequest): Promise<$_model.SendSdkStreamMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendSdkStreamMessageWithOptions(request, headers, runtime);
  }

  /**
   * 发送文本消息
   * 
   * @param request - SendTextMsgRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendTextMsgResponse
   */
  async sendTextMsgWithOptions(request: $_model.SendTextMsgRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SendTextMsgResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.text)) {
      body["text"] = request.text;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendTextMsg",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/avatar/project/sendTextMsg`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendTextMsgResponse>(await this.callApi(params, req, runtime), new $_model.SendTextMsgResponse({}));
  }

  /**
   * 发送文本消息
   * 
   * @param request - SendTextMsgRequest
   * @returns SendTextMsgResponse
   */
  async sendTextMsg(request: $_model.SendTextMsgRequest): Promise<$_model.SendTextMsgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendTextMsgWithOptions(request, headers, runtime);
  }

  /**
   * 启动会话
   * 
   * @param request - StartAvatarSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartAvatarSessionResponse
   */
  async startAvatarSessionWithOptions(request: $_model.StartAvatarSessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartAvatarSessionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channelToken)) {
      body["channelToken"] = request.channelToken;
    }

    if (!$dara.isNull(request.customPushUrl)) {
      body["customPushUrl"] = request.customPushUrl;
    }

    if (!$dara.isNull(request.customUserId)) {
      body["customUserId"] = request.customUserId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartAvatarSession",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/avatar/project/startAvatarSession`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartAvatarSessionResponse>(await this.callApi(params, req, runtime), new $_model.StartAvatarSessionResponse({}));
  }

  /**
   * 启动会话
   * 
   * @param request - StartAvatarSessionRequest
   * @returns StartAvatarSessionResponse
   */
  async startAvatarSession(request: $_model.StartAvatarSessionRequest): Promise<$_model.StartAvatarSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startAvatarSessionWithOptions(request, headers, runtime);
  }

  /**
   * 停止会话
   * 
   * @param request - StopAvatarSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopAvatarSessionResponse
   */
  async stopAvatarSessionWithOptions(request: $_model.StopAvatarSessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopAvatarSessionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopAvatarSession",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/avatar/project/stopAvatarSession`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopAvatarSessionResponse>(await this.callApi(params, req, runtime), new $_model.StopAvatarSessionResponse({}));
  }

  /**
   * 停止会话
   * 
   * @param request - StopAvatarSessionRequest
   * @returns StopAvatarSessionResponse
   */
  async stopAvatarSession(request: $_model.StopAvatarSessionRequest): Promise<$_model.StopAvatarSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopAvatarSessionWithOptions(request, headers, runtime);
  }

  /**
   * 视频合成任务停止
   * 
   * @param request - StopProjectTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopProjectTaskResponse
   */
  async stopProjectTaskWithOptions(request: $_model.StopProjectTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopProjectTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopProjectTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/digitalHuman/project/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopProjectTaskResponse>(await this.callApi(params, req, runtime), new $_model.StopProjectTaskResponse({}));
  }

  /**
   * 视频合成任务停止
   * 
   * @param request - StopProjectTaskRequest
   * @returns StopProjectTaskResponse
   */
  async stopProjectTask(request: $_model.StopProjectTaskRequest): Promise<$_model.StopProjectTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopProjectTaskWithOptions(request, headers, runtime);
  }

  /**
   * 提交图片转视频任务
   * 
   * @param request - SubmitImageToVideoTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitImageToVideoTaskResponse
   */
  async submitImageToVideoTaskWithOptions(request: $_model.SubmitImageToVideoTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitImageToVideoTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageUrl)) {
      body["imageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.posPrompt)) {
      body["posPrompt"] = request.posPrompt;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitImageToVideoTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/video/imageToVideo/task`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitImageToVideoTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitImageToVideoTaskResponse({}));
  }

  /**
   * 提交图片转视频任务
   * 
   * @param request - SubmitImageToVideoTaskRequest
   * @returns SubmitImageToVideoTaskResponse
   */
  async submitImageToVideoTask(request: $_model.SubmitImageToVideoTaskRequest): Promise<$_model.SubmitImageToVideoTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitImageToVideoTaskWithOptions(request, headers, runtime);
  }

  /**
   * 提交离线数字人合成任务
   * 
   * @param request - SubmitProjectTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitProjectTaskResponse
   */
  async submitProjectTaskWithOptions(request: $_model.SubmitProjectTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitProjectTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.frames)) {
      body["frames"] = request.frames;
    }

    if (!$dara.isNull(request.scaleType)) {
      body["scaleType"] = request.scaleType;
    }

    if (!$dara.isNull(request.subtitleTag)) {
      body["subtitleTag"] = request.subtitleTag;
    }

    if (!$dara.isNull(request.transparentBackground)) {
      body["transparentBackground"] = request.transparentBackground;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitProjectTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/digitalHuman/project/submitProjectTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitProjectTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitProjectTaskResponse({}));
  }

  /**
   * 提交离线数字人合成任务
   * 
   * @param request - SubmitProjectTaskRequest
   * @returns SubmitProjectTaskResponse
   */
  async submitProjectTask(request: $_model.SubmitProjectTaskRequest): Promise<$_model.SubmitProjectTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitProjectTaskWithOptions(request, headers, runtime);
  }

  /**
   * 人像风格变化
   * 
   * @param request - TransferPortraitStyleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferPortraitStyleResponse
   */
  async transferPortraitStyleWithOptions(request: $_model.TransferPortraitStyleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TransferPortraitStyleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.height)) {
      body["height"] = request.height;
    }

    if (!$dara.isNull(request.imageUrl)) {
      body["imageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.numbers)) {
      body["numbers"] = request.numbers;
    }

    if (!$dara.isNull(request.redrawAmplitude)) {
      body["redrawAmplitude"] = request.redrawAmplitude;
    }

    if (!$dara.isNull(request.style)) {
      body["style"] = request.style;
    }

    if (!$dara.isNull(request.width)) {
      body["width"] = request.width;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransferPortraitStyle",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/images/portrait/transferPortraitStyle`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransferPortraitStyleResponse>(await this.callApi(params, req, runtime), new $_model.TransferPortraitStyleResponse({}));
  }

  /**
   * 人像风格变化
   * 
   * @param request - TransferPortraitStyleRequest
   * @returns TransferPortraitStyleResponse
   */
  async transferPortraitStyle(request: $_model.TransferPortraitStyleRequest): Promise<$_model.TransferPortraitStyleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.transferPortraitStyleWithOptions(request, headers, runtime);
  }

  /**
   * UpdateAgent
   * 
   * @param request - UpdateAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAgentResponse
   */
  async updateAgentWithOptions(request: $_model.UpdateAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentIconUrl)) {
      body["agentIconUrl"] = request.agentIconUrl;
    }

    if (!$dara.isNull(request.agentId)) {
      body["agentId"] = request.agentId;
    }

    if (!$dara.isNull(request.agentName)) {
      body["agentName"] = request.agentName;
    }

    if (!$dara.isNull(request.characterAgeStage)) {
      body["characterAgeStage"] = request.characterAgeStage;
    }

    if (!$dara.isNull(request.characterGender)) {
      body["characterGender"] = request.characterGender;
    }

    if (!$dara.isNull(request.characterName)) {
      body["characterName"] = request.characterName;
    }

    if (!$dara.isNull(request.extraDescription)) {
      body["extraDescription"] = request.extraDescription;
    }

    if (!$dara.isNull(request.industry)) {
      body["industry"] = request.industry;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAgent",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/agent/updateAgent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAgentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAgentResponse({}));
  }

  /**
   * UpdateAgent
   * 
   * @param request - UpdateAgentRequest
   * @returns UpdateAgentResponse
   */
  async updateAgent(request: $_model.UpdateAgentRequest): Promise<$_model.UpdateAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAgentWithOptions(request, headers, runtime);
  }

}
