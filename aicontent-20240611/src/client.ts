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
    this._endpoint = this.getEndpoint("aicontent", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 拓展练问答对生成
   * 
   * @param request - AITeacherExpansionPracticeTaskGenerateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AITeacherExpansionPracticeTaskGenerateResponse
   */
  async aITeacherExpansionPracticeTaskGenerateWithOptions(request: $_model.AITeacherExpansionPracticeTaskGenerateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AITeacherExpansionPracticeTaskGenerateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.grade)) {
      body["grade"] = request.grade;
    }

    if (!$dara.isNull(request.keySentences)) {
      body["keySentences"] = request.keySentences;
    }

    if (!$dara.isNull(request.keyWords)) {
      body["keyWords"] = request.keyWords;
    }

    if (!$dara.isNull(request.learningObject)) {
      body["learningObject"] = request.learningObject;
    }

    if (!$dara.isNull(request.textContent)) {
      body["textContent"] = request.textContent;
    }

    if (!$dara.isNull(request.textbook)) {
      body["textbook"] = request.textbook;
    }

    if (!$dara.isNull(request.topic)) {
      body["topic"] = request.topic;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AITeacherExpansionPracticeTaskGenerate",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aiteacher/expansionPractice/generateTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AITeacherExpansionPracticeTaskGenerateResponse>(await this.callApi(params, req, runtime), new $_model.AITeacherExpansionPracticeTaskGenerateResponse({}));
  }

  /**
   * 拓展练问答对生成
   * 
   * @param request - AITeacherExpansionPracticeTaskGenerateRequest
   * @returns AITeacherExpansionPracticeTaskGenerateResponse
   */
  async aITeacherExpansionPracticeTaskGenerate(request: $_model.AITeacherExpansionPracticeTaskGenerateRequest): Promise<$_model.AITeacherExpansionPracticeTaskGenerateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.aITeacherExpansionPracticeTaskGenerateWithOptions(request, headers, runtime);
  }

  /**
   * 同步基础练问答对生成
   * 
   * @param request - AITeacherSyncPracticeTaskGenerateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AITeacherSyncPracticeTaskGenerateResponse
   */
  async aITeacherSyncPracticeTaskGenerateWithOptions(request: $_model.AITeacherSyncPracticeTaskGenerateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AITeacherSyncPracticeTaskGenerateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.grade)) {
      body["grade"] = request.grade;
    }

    if (!$dara.isNull(request.keySentences)) {
      body["keySentences"] = request.keySentences;
    }

    if (!$dara.isNull(request.keyWords)) {
      body["keyWords"] = request.keyWords;
    }

    if (!$dara.isNull(request.learningObject)) {
      body["learningObject"] = request.learningObject;
    }

    if (!$dara.isNull(request.textContent)) {
      body["textContent"] = request.textContent;
    }

    if (!$dara.isNull(request.textbook)) {
      body["textbook"] = request.textbook;
    }

    if (!$dara.isNull(request.topic)) {
      body["topic"] = request.topic;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AITeacherSyncPracticeTaskGenerate",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aiteacher/syncPractice/generateTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AITeacherSyncPracticeTaskGenerateResponse>(await this.callApi(params, req, runtime), new $_model.AITeacherSyncPracticeTaskGenerateResponse({}));
  }

  /**
   * 同步基础练问答对生成
   * 
   * @param request - AITeacherSyncPracticeTaskGenerateRequest
   * @returns AITeacherSyncPracticeTaskGenerateResponse
   */
  async aITeacherSyncPracticeTaskGenerate(request: $_model.AITeacherSyncPracticeTaskGenerateRequest): Promise<$_model.AITeacherSyncPracticeTaskGenerateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.aITeacherSyncPracticeTaskGenerateWithOptions(request, headers, runtime);
  }

  /**
   * 阿里云控制台/列出阿里云控制台上可使用的服务列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponse
   */
  async aliyunConsoleOpenApiQueryAliyunConsoleServcieListWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "AliyunConsoleOpenApiQueryAliyunConsoleServcieList",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aliyunconsole/queryAliyunConsoleServcieList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponse>(await this.callApi(params, req, runtime), new $_model.AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponse({}));
  }

  /**
   * 阿里云控制台/列出阿里云控制台上可使用的服务列表
   * @returns AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponse
   */
  async aliyunConsoleOpenApiQueryAliyunConsoleServcieList(): Promise<$_model.AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.aliyunConsoleOpenApiQueryAliyunConsoleServcieListWithOptions(headers, runtime);
  }

  /**
   * 阿里云控制台/列出阿里云控制台上可使用的服务列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponse
   */
  async aliyunConsoleOpenApiQueryAliyunConsoleServiceListWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "AliyunConsoleOpenApiQueryAliyunConsoleServiceList",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aliyunConsole/queryAliyunConsoleServiceList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponse>(await this.callApi(params, req, runtime), new $_model.AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponse({}));
  }

  /**
   * 阿里云控制台/列出阿里云控制台上可使用的服务列表
   * @returns AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponse
   */
  async aliyunConsoleOpenApiQueryAliyunConsoleServiceList(): Promise<$_model.AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.aliyunConsoleOpenApiQueryAliyunConsoleServiceListWithOptions(headers, runtime);
  }

  /**
   * 智能批改/口语评测/统计/调用量
   * 
   * @param request - CountOralEvaluationStatisticsCallsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CountOralEvaluationStatisticsCallsResponse
   */
  async countOralEvaluationStatisticsCallsWithOptions(request: $_model.CountOralEvaluationStatisticsCallsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CountOralEvaluationStatisticsCallsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CountOralEvaluationStatisticsCalls",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aliyunConsole/countOralEvaluationStatisticsCalls`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CountOralEvaluationStatisticsCallsResponse>(await this.callApi(params, req, runtime), new $_model.CountOralEvaluationStatisticsCallsResponse({}));
  }

  /**
   * 智能批改/口语评测/统计/调用量
   * 
   * @param request - CountOralEvaluationStatisticsCallsRequest
   * @returns CountOralEvaluationStatisticsCallsResponse
   */
  async countOralEvaluationStatisticsCalls(request: $_model.CountOralEvaluationStatisticsCallsRequest): Promise<$_model.CountOralEvaluationStatisticsCallsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.countOralEvaluationStatisticsCallsWithOptions(request, headers, runtime);
  }

  /**
   * 智能批改/口语评测/统计/并发数
   * 
   * @param request - CountOralEvaluationStatisticsConcurrentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CountOralEvaluationStatisticsConcurrentResponse
   */
  async countOralEvaluationStatisticsConcurrentWithOptions(request: $_model.CountOralEvaluationStatisticsConcurrentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CountOralEvaluationStatisticsConcurrentResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CountOralEvaluationStatisticsConcurrent",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aliyunConsole/countOralEvaluationStatisticsConcurrent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CountOralEvaluationStatisticsConcurrentResponse>(await this.callApi(params, req, runtime), new $_model.CountOralEvaluationStatisticsConcurrentResponse({}));
  }

  /**
   * 智能批改/口语评测/统计/并发数
   * 
   * @param request - CountOralEvaluationStatisticsConcurrentRequest
   * @returns CountOralEvaluationStatisticsConcurrentResponse
   */
  async countOralEvaluationStatisticsConcurrent(request: $_model.CountOralEvaluationStatisticsConcurrentRequest): Promise<$_model.CountOralEvaluationStatisticsConcurrentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.countOralEvaluationStatisticsConcurrentWithOptions(request, headers, runtime);
  }

  /**
   * 智能批改/口语评测/统计/调用错误
   * 
   * @param request - CountOralEvaluationStatisticsErrorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CountOralEvaluationStatisticsErrorResponse
   */
  async countOralEvaluationStatisticsErrorWithOptions(request: $_model.CountOralEvaluationStatisticsErrorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CountOralEvaluationStatisticsErrorResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CountOralEvaluationStatisticsError",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aliyunConsole/countOralEvaluationStatisticsError`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CountOralEvaluationStatisticsErrorResponse>(await this.callApi(params, req, runtime), new $_model.CountOralEvaluationStatisticsErrorResponse({}));
  }

  /**
   * 智能批改/口语评测/统计/调用错误
   * 
   * @param request - CountOralEvaluationStatisticsErrorRequest
   * @returns CountOralEvaluationStatisticsErrorResponse
   */
  async countOralEvaluationStatisticsError(request: $_model.CountOralEvaluationStatisticsErrorRequest): Promise<$_model.CountOralEvaluationStatisticsErrorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.countOralEvaluationStatisticsErrorWithOptions(request, headers, runtime);
  }

  /**
   * 阿里云控制台/授权凭证创建
   * 
   * @param request - CreateAccessWarrantRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccessWarrantResponse
   */
  async createAccessWarrantWithOptions(request: $_model.CreateAccessWarrantRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccessWarrantResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.requestSign)) {
      body["requestSign"] = request.requestSign;
    }

    if (!$dara.isNull(request.timestamp)) {
      body["timestamp"] = request.timestamp;
    }

    if (!$dara.isNull(request.userClientIp)) {
      body["userClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    if (!$dara.isNull(request.warrantAvailable)) {
      body["warrantAvailable"] = request.warrantAvailable;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccessWarrant",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aliyunConsole/createAccessWarrant`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAccessWarrantResponse>(await this.callApi(params, req, runtime), new $_model.CreateAccessWarrantResponse({}));
  }

  /**
   * 阿里云控制台/授权凭证创建
   * 
   * @param request - CreateAccessWarrantRequest
   * @returns CreateAccessWarrantResponse
   */
  async createAccessWarrant(request: $_model.CreateAccessWarrantRequest): Promise<$_model.CreateAccessWarrantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAccessWarrantWithOptions(request, headers, runtime);
  }

  /**
   * 阿里云控制台/创建项目
   * 
   * @param request - CreateProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectResponse
   */
  async createProjectWithOptions(request: $_model.CreateProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectName)) {
      body["projectName"] = request.projectName;
    }

    if (!$dara.isNull(request.projectType)) {
      body["projectType"] = request.projectType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProject",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aliyunConsole/createProject`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProjectResponse>(await this.callApi(params, req, runtime), new $_model.CreateProjectResponse({}));
  }

  /**
   * 阿里云控制台/创建项目
   * 
   * @param request - CreateProjectRequest
   * @returns CreateProjectResponse
   */
  async createProject(request: $_model.CreateProjectRequest): Promise<$_model.CreateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProjectWithOptions(request, headers, runtime);
  }

  /**
   * 中文作文辅导
   * 
   * @param request - ExecuteAITeacherChineseCompositionTutoringWorkflowRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAITeacherChineseCompositionTutoringWorkflowRunResponse
   */
  async executeAITeacherChineseCompositionTutoringWorkflowRunWithOptions(request: $_model.ExecuteAITeacherChineseCompositionTutoringWorkflowRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteAITeacherChineseCompositionTutoringWorkflowRunResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.essayOutline)) {
      body["essayOutline"] = request.essayOutline;
    }

    if (!$dara.isNull(request.essayRequirements)) {
      body["essayRequirements"] = request.essayRequirements;
    }

    if (!$dara.isNull(request.essayTopic)) {
      body["essayTopic"] = request.essayTopic;
    }

    if (!$dara.isNull(request.essayType)) {
      body["essayType"] = request.essayType;
    }

    if (!$dara.isNull(request.essayWordCount)) {
      body["essayWordCount"] = request.essayWordCount;
    }

    if (!$dara.isNull(request.grade)) {
      body["grade"] = request.grade;
    }

    if (!$dara.isNull(request.responseMode)) {
      body["responseMode"] = request.responseMode;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteAITeacherChineseCompositionTutoringWorkflowRun",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/pop/api/v1/intelligentAgent/chineseCompositionTutoring/workflowRun`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteAITeacherChineseCompositionTutoringWorkflowRunResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteAITeacherChineseCompositionTutoringWorkflowRunResponse({}));
  }

  /**
   * 中文作文辅导
   * 
   * @param request - ExecuteAITeacherChineseCompositionTutoringWorkflowRunRequest
   * @returns ExecuteAITeacherChineseCompositionTutoringWorkflowRunResponse
   */
  async executeAITeacherChineseCompositionTutoringWorkflowRun(request: $_model.ExecuteAITeacherChineseCompositionTutoringWorkflowRunRequest): Promise<$_model.ExecuteAITeacherChineseCompositionTutoringWorkflowRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeAITeacherChineseCompositionTutoringWorkflowRunWithOptions(request, headers, runtime);
  }

  /**
   * 英语作文辅导
   * 
   * @param request - ExecuteAITeacherEnglishCompositionTutoringWorkflowRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAITeacherEnglishCompositionTutoringWorkflowRunResponse
   */
  async executeAITeacherEnglishCompositionTutoringWorkflowRunWithOptions(request: $_model.ExecuteAITeacherEnglishCompositionTutoringWorkflowRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteAITeacherEnglishCompositionTutoringWorkflowRunResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.essayOutline)) {
      body["essayOutline"] = request.essayOutline;
    }

    if (!$dara.isNull(request.essayRequirements)) {
      body["essayRequirements"] = request.essayRequirements;
    }

    if (!$dara.isNull(request.essayTopic)) {
      body["essayTopic"] = request.essayTopic;
    }

    if (!$dara.isNull(request.essayType)) {
      body["essayType"] = request.essayType;
    }

    if (!$dara.isNull(request.essayWordCount)) {
      body["essayWordCount"] = request.essayWordCount;
    }

    if (!$dara.isNull(request.grade)) {
      body["grade"] = request.grade;
    }

    if (!$dara.isNull(request.responseMode)) {
      body["responseMode"] = request.responseMode;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteAITeacherEnglishCompositionTutoringWorkflowRun",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/pop/api/v1/intelligentAgent/englishCompositionTutoring/workflowRun`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteAITeacherEnglishCompositionTutoringWorkflowRunResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteAITeacherEnglishCompositionTutoringWorkflowRunResponse({}));
  }

  /**
   * 英语作文辅导
   * 
   * @param request - ExecuteAITeacherEnglishCompositionTutoringWorkflowRunRequest
   * @returns ExecuteAITeacherEnglishCompositionTutoringWorkflowRunResponse
   */
  async executeAITeacherEnglishCompositionTutoringWorkflowRun(request: $_model.ExecuteAITeacherEnglishCompositionTutoringWorkflowRunRequest): Promise<$_model.ExecuteAITeacherEnglishCompositionTutoringWorkflowRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeAITeacherEnglishCompositionTutoringWorkflowRunWithOptions(request, headers, runtime);
  }

  /**
   * 英文释义
   * 
   * @param request - ExecuteAITeacherEnglishParaphraseChatMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAITeacherEnglishParaphraseChatMessageResponse
   */
  async executeAITeacherEnglishParaphraseChatMessageWithOptions(request: $_model.ExecuteAITeacherEnglishParaphraseChatMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteAITeacherEnglishParaphraseChatMessageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chatId)) {
      body["chatId"] = request.chatId;
    }

    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.grade)) {
      body["grade"] = request.grade;
    }

    if (!$dara.isNull(request.questionId)) {
      body["questionId"] = request.questionId;
    }

    if (!$dara.isNull(request.questionInfo)) {
      body["questionInfo"] = request.questionInfo;
    }

    if (!$dara.isNull(request.responseMode)) {
      body["responseMode"] = request.responseMode;
    }

    if (!$dara.isNull(request.userAnswer)) {
      body["userAnswer"] = request.userAnswer;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteAITeacherEnglishParaphraseChatMessage",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/pop/api/v1/intelligentAgent/englishParaphrase/chatMessage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteAITeacherEnglishParaphraseChatMessageResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteAITeacherEnglishParaphraseChatMessageResponse({}));
  }

  /**
   * 英文释义
   * 
   * @param request - ExecuteAITeacherEnglishParaphraseChatMessageRequest
   * @returns ExecuteAITeacherEnglishParaphraseChatMessageResponse
   */
  async executeAITeacherEnglishParaphraseChatMessage(request: $_model.ExecuteAITeacherEnglishParaphraseChatMessageRequest): Promise<$_model.ExecuteAITeacherEnglishParaphraseChatMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeAITeacherEnglishParaphraseChatMessageWithOptions(request, headers, runtime);
  }

  /**
   * 进行拓展练对话
   * 
   * @param request - ExecuteAITeacherExpansionDialogueRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAITeacherExpansionDialogueResponse
   */
  async executeAITeacherExpansionDialogueWithOptions(request: $_model.ExecuteAITeacherExpansionDialogueRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteAITeacherExpansionDialogueResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.background)) {
      body["background"] = request.background;
    }

    if (!$dara.isNull(request.dialogueTasks)) {
      body["dialogueTasks"] = request.dialogueTasks;
    }

    if (!$dara.isNull(request.languageCode)) {
      body["languageCode"] = request.languageCode;
    }

    if (!$dara.isNull(request.records)) {
      body["records"] = request.records;
    }

    if (!$dara.isNull(request.roleInfo)) {
      body["roleInfo"] = request.roleInfo;
    }

    if (!$dara.isNull(request.startSentence)) {
      body["startSentence"] = request.startSentence;
    }

    if (!$dara.isNull(request.topic)) {
      body["topic"] = request.topic;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteAITeacherExpansionDialogue",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aiteacher/expansionPractice/executeExpansionTraining`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteAITeacherExpansionDialogueResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteAITeacherExpansionDialogueResponse({}));
  }

  /**
   * 进行拓展练对话
   * 
   * @param request - ExecuteAITeacherExpansionDialogueRequest
   * @returns ExecuteAITeacherExpansionDialogueResponse
   */
  async executeAITeacherExpansionDialogue(request: $_model.ExecuteAITeacherExpansionDialogueRequest): Promise<$_model.ExecuteAITeacherExpansionDialogueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeAITeacherExpansionDialogueWithOptions(request, headers, runtime);
  }

  /**
   * 拓展练根据上下文进行润色
   * 
   * @param request - ExecuteAITeacherExpansionDialogueRefineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAITeacherExpansionDialogueRefineResponse
   */
  async executeAITeacherExpansionDialogueRefineWithOptions(request: $_model.ExecuteAITeacherExpansionDialogueRefineRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteAITeacherExpansionDialogueRefineResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.background)) {
      body["background"] = request.background;
    }

    if (!$dara.isNull(request.dialogueTasks)) {
      body["dialogueTasks"] = request.dialogueTasks;
    }

    if (!$dara.isNull(request.languageCode)) {
      body["languageCode"] = request.languageCode;
    }

    if (!$dara.isNull(request.records)) {
      body["records"] = request.records;
    }

    if (!$dara.isNull(request.roleInfo)) {
      body["roleInfo"] = request.roleInfo;
    }

    if (!$dara.isNull(request.startSentence)) {
      body["startSentence"] = request.startSentence;
    }

    if (!$dara.isNull(request.topic)) {
      body["topic"] = request.topic;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteAITeacherExpansionDialogueRefine",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aiteacher/expansionPractice/refineByContext`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteAITeacherExpansionDialogueRefineResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteAITeacherExpansionDialogueRefineResponse({}));
  }

  /**
   * 拓展练根据上下文进行润色
   * 
   * @param request - ExecuteAITeacherExpansionDialogueRefineRequest
   * @returns ExecuteAITeacherExpansionDialogueRefineResponse
   */
  async executeAITeacherExpansionDialogueRefine(request: $_model.ExecuteAITeacherExpansionDialogueRefineRequest): Promise<$_model.ExecuteAITeacherExpansionDialogueRefineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeAITeacherExpansionDialogueRefineWithOptions(request, headers, runtime);
  }

  /**
   * 拓展练语境翻译
   * 
   * @param request - ExecuteAITeacherExpansionDialogueTranslateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAITeacherExpansionDialogueTranslateResponse
   */
  async executeAITeacherExpansionDialogueTranslateWithOptions(request: $_model.ExecuteAITeacherExpansionDialogueTranslateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteAITeacherExpansionDialogueTranslateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.background)) {
      body["background"] = request.background;
    }

    if (!$dara.isNull(request.dialogueTasks)) {
      body["dialogueTasks"] = request.dialogueTasks;
    }

    if (!$dara.isNull(request.records)) {
      body["records"] = request.records;
    }

    if (!$dara.isNull(request.roleInfo)) {
      body["roleInfo"] = request.roleInfo;
    }

    if (!$dara.isNull(request.startSentence)) {
      body["startSentence"] = request.startSentence;
    }

    if (!$dara.isNull(request.topic)) {
      body["topic"] = request.topic;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteAITeacherExpansionDialogueTranslate",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aiteacher/expansionPractice/translate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteAITeacherExpansionDialogueTranslateResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteAITeacherExpansionDialogueTranslateResponse({}));
  }

  /**
   * 拓展练语境翻译
   * 
   * @param request - ExecuteAITeacherExpansionDialogueTranslateRequest
   * @returns ExecuteAITeacherExpansionDialogueTranslateResponse
   */
  async executeAITeacherExpansionDialogueTranslate(request: $_model.ExecuteAITeacherExpansionDialogueTranslateRequest): Promise<$_model.ExecuteAITeacherExpansionDialogueTranslateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeAITeacherExpansionDialogueTranslateWithOptions(request, headers, runtime);
  }

  /**
   * 语法检测
   * 
   * @param request - ExecuteAITeacherGrammarCheckRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAITeacherGrammarCheckResponse
   */
  async executeAITeacherGrammarCheckWithOptions(request: $_model.ExecuteAITeacherGrammarCheckRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteAITeacherGrammarCheckResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteAITeacherGrammarCheck",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aiteacher/common/grammarChecking`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteAITeacherGrammarCheckResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteAITeacherGrammarCheckResponse({}));
  }

  /**
   * 语法检测
   * 
   * @param request - ExecuteAITeacherGrammarCheckRequest
   * @returns ExecuteAITeacherGrammarCheckResponse
   */
  async executeAITeacherGrammarCheck(request: $_model.ExecuteAITeacherGrammarCheckRequest): Promise<$_model.ExecuteAITeacherGrammarCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeAITeacherGrammarCheckWithOptions(request, headers, runtime);
  }

  /**
   * 进行同步练对话
   * 
   * @param request - ExecuteAITeacherSyncDialogueRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAITeacherSyncDialogueResponse
   */
  async executeAITeacherSyncDialogueWithOptions(request: $_model.ExecuteAITeacherSyncDialogueRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteAITeacherSyncDialogueResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dialogueTasks)) {
      body["dialogueTasks"] = request.dialogueTasks;
    }

    if (!$dara.isNull(request.languageCode)) {
      body["languageCode"] = request.languageCode;
    }

    if (!$dara.isNull(request.records)) {
      body["records"] = request.records;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteAITeacherSyncDialogue",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aiteacher/syncPractice/executeSyncTraining`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteAITeacherSyncDialogueResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteAITeacherSyncDialogueResponse({}));
  }

  /**
   * 进行同步练对话
   * 
   * @param request - ExecuteAITeacherSyncDialogueRequest
   * @returns ExecuteAITeacherSyncDialogueResponse
   */
  async executeAITeacherSyncDialogue(request: $_model.ExecuteAITeacherSyncDialogueRequest): Promise<$_model.ExecuteAITeacherSyncDialogueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeAITeacherSyncDialogueWithOptions(request, headers, runtime);
  }

  /**
   * 同步练语境翻译
   * 
   * @param request - ExecuteAITeacherSyncDialogueTranslateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAITeacherSyncDialogueTranslateResponse
   */
  async executeAITeacherSyncDialogueTranslateWithOptions(request: $_model.ExecuteAITeacherSyncDialogueTranslateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteAITeacherSyncDialogueTranslateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dialogueTasks)) {
      body["dialogueTasks"] = request.dialogueTasks;
    }

    if (!$dara.isNull(request.records)) {
      body["records"] = request.records;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteAITeacherSyncDialogueTranslate",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aiteacher/syncPractice/translate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteAITeacherSyncDialogueTranslateResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteAITeacherSyncDialogueTranslateResponse({}));
  }

  /**
   * 同步练语境翻译
   * 
   * @param request - ExecuteAITeacherSyncDialogueTranslateRequest
   * @returns ExecuteAITeacherSyncDialogueTranslateResponse
   */
  async executeAITeacherSyncDialogueTranslate(request: $_model.ExecuteAITeacherSyncDialogueTranslateRequest): Promise<$_model.ExecuteAITeacherSyncDialogueTranslateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeAITeacherSyncDialogueTranslateWithOptions(request, headers, runtime);
  }

  /**
   * 十万个为什么对话接入
   * 
   * @param request - ExecuteHundredThousandWhysDialogueRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteHundredThousandWhysDialogueResponse
   */
  async executeHundredThousandWhysDialogueWithOptions(request: $_model.ExecuteHundredThousandWhysDialogueRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteHundredThousandWhysDialogueResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ageGroup)) {
      body["ageGroup"] = request.ageGroup;
    }

    if (!$dara.isNull(request.chatId)) {
      body["chatId"] = request.chatId;
    }

    if (!$dara.isNull(request.deviceId)) {
      body["deviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.macAddress)) {
      body["macAddress"] = request.macAddress;
    }

    if (!$dara.isNull(request.messages)) {
      body["messages"] = request.messages;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteHundredThousandWhysDialogue",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/pop/api/v1/intelligentAgent/tenWWhys/executeDialogue`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteHundredThousandWhysDialogueResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteHundredThousandWhysDialogueResponse({}));
  }

  /**
   * 十万个为什么对话接入
   * 
   * @param request - ExecuteHundredThousandWhysDialogueRequest
   * @returns ExecuteHundredThousandWhysDialogueResponse
   */
  async executeHundredThousandWhysDialogue(request: $_model.ExecuteHundredThousandWhysDialogueRequest): Promise<$_model.ExecuteHundredThousandWhysDialogueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeHundredThousandWhysDialogueWithOptions(request, headers, runtime);
  }

  /**
   * 进行AI对话
   * 
   * @param request - ExecuteTextbookAssistantDialogueRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteTextbookAssistantDialogueResponse
   */
  async executeTextbookAssistantDialogueWithOptions(request: $_model.ExecuteTextbookAssistantDialogueRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteTextbookAssistantDialogueResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authToken)) {
      body["authToken"] = request.authToken;
    }

    if (!$dara.isNull(request.chatId)) {
      body["chatId"] = request.chatId;
    }

    if (!$dara.isNull(request.scenario)) {
      body["scenario"] = request.scenario;
    }

    if (!$dara.isNull(request.userMessage)) {
      body["userMessage"] = request.userMessage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteTextbookAssistantDialogue",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/dialogue/ExecuteDialogue`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteTextbookAssistantDialogueResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteTextbookAssistantDialogueResponse({}));
  }

  /**
   * 进行AI对话
   * 
   * @param request - ExecuteTextbookAssistantDialogueRequest
   * @returns ExecuteTextbookAssistantDialogueResponse
   */
  async executeTextbookAssistantDialogue(request: $_model.ExecuteTextbookAssistantDialogueRequest): Promise<$_model.ExecuteTextbookAssistantDialogueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeTextbookAssistantDialogueWithOptions(request, headers, runtime);
  }

  /**
   * 调整难度
   * 
   * @param request - ExecuteTextbookAssistantDifficultyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteTextbookAssistantDifficultyResponse
   */
  async executeTextbookAssistantDifficultyWithOptions(request: $_model.ExecuteTextbookAssistantDifficultyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteTextbookAssistantDifficultyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.action)) {
      body["action"] = request.action;
    }

    if (!$dara.isNull(request.assistant)) {
      body["assistant"] = request.assistant;
    }

    if (!$dara.isNull(request.authToken)) {
      body["authToken"] = request.authToken;
    }

    if (!$dara.isNull(request.chatId)) {
      body["chatId"] = request.chatId;
    }

    if (!$dara.isNull(request.scenario)) {
      body["scenario"] = request.scenario;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteTextbookAssistantDifficulty",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/dialogue/ExecuteDifficulty`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteTextbookAssistantDifficultyResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteTextbookAssistantDifficultyResponse({}));
  }

  /**
   * 调整难度
   * 
   * @param request - ExecuteTextbookAssistantDifficultyRequest
   * @returns ExecuteTextbookAssistantDifficultyResponse
   */
  async executeTextbookAssistantDifficulty(request: $_model.ExecuteTextbookAssistantDifficultyRequest): Promise<$_model.ExecuteTextbookAssistantDifficultyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeTextbookAssistantDifficultyWithOptions(request, headers, runtime);
  }

  /**
   * 语法检测
   * 
   * @param request - ExecuteTextbookAssistantGrammarCheckRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteTextbookAssistantGrammarCheckResponse
   */
  async executeTextbookAssistantGrammarCheckWithOptions(request: $_model.ExecuteTextbookAssistantGrammarCheckRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteTextbookAssistantGrammarCheckResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authToken)) {
      body["authToken"] = request.authToken;
    }

    if (!$dara.isNull(request.chatId)) {
      body["chatId"] = request.chatId;
    }

    if (!$dara.isNull(request.scenario)) {
      body["scenario"] = request.scenario;
    }

    if (!$dara.isNull(request.user)) {
      body["user"] = request.user;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteTextbookAssistantGrammarCheck",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/dialogue/ExecuteGrammarCheck`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteTextbookAssistantGrammarCheckResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteTextbookAssistantGrammarCheckResponse({}));
  }

  /**
   * 语法检测
   * 
   * @param request - ExecuteTextbookAssistantGrammarCheckRequest
   * @returns ExecuteTextbookAssistantGrammarCheckResponse
   */
  async executeTextbookAssistantGrammarCheck(request: $_model.ExecuteTextbookAssistantGrammarCheckRequest): Promise<$_model.ExecuteTextbookAssistantGrammarCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeTextbookAssistantGrammarCheckWithOptions(request, headers, runtime);
  }

  /**
   * 句子润色
   * 
   * @param request - ExecuteTextbookAssistantRefineByContextRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteTextbookAssistantRefineByContextResponse
   */
  async executeTextbookAssistantRefineByContextWithOptions(request: $_model.ExecuteTextbookAssistantRefineByContextRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteTextbookAssistantRefineByContextResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authToken)) {
      body["authToken"] = request.authToken;
    }

    if (!$dara.isNull(request.chatId)) {
      body["chatId"] = request.chatId;
    }

    if (!$dara.isNull(request.scenario)) {
      body["scenario"] = request.scenario;
    }

    if (!$dara.isNull(request.user)) {
      body["user"] = request.user;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteTextbookAssistantRefineByContext",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/dialogue/RefineByContext`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteTextbookAssistantRefineByContextResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteTextbookAssistantRefineByContextResponse({}));
  }

  /**
   * 句子润色
   * 
   * @param request - ExecuteTextbookAssistantRefineByContextRequest
   * @returns ExecuteTextbookAssistantRefineByContextResponse
   */
  async executeTextbookAssistantRefineByContext(request: $_model.ExecuteTextbookAssistantRefineByContextRequest): Promise<$_model.ExecuteTextbookAssistantRefineByContextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeTextbookAssistantRefineByContextWithOptions(request, headers, runtime);
  }

  /**
   * 对话重试
   * 
   * @param request - ExecuteTextbookAssistantRetryConversationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteTextbookAssistantRetryConversationResponse
   */
  async executeTextbookAssistantRetryConversationWithOptions(request: $_model.ExecuteTextbookAssistantRetryConversationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteTextbookAssistantRetryConversationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assistant)) {
      body["assistant"] = request.assistant;
    }

    if (!$dara.isNull(request.authToken)) {
      body["authToken"] = request.authToken;
    }

    if (!$dara.isNull(request.chatId)) {
      body["chatId"] = request.chatId;
    }

    if (!$dara.isNull(request.scenario)) {
      body["scenario"] = request.scenario;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteTextbookAssistantRetryConversation",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/dialogue/RetryConversation`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteTextbookAssistantRetryConversationResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteTextbookAssistantRetryConversationResponse({}));
  }

  /**
   * 对话重试
   * 
   * @param request - ExecuteTextbookAssistantRetryConversationRequest
   * @returns ExecuteTextbookAssistantRetryConversationResponse
   */
  async executeTextbookAssistantRetryConversation(request: $_model.ExecuteTextbookAssistantRetryConversationRequest): Promise<$_model.ExecuteTextbookAssistantRetryConversationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeTextbookAssistantRetryConversationWithOptions(request, headers, runtime);
  }

  /**
   * 进行对话-流式输出
   * 
   * @param request - ExecuteTextbookAssistantSseDialogueRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteTextbookAssistantSseDialogueResponse
   */
  async executeTextbookAssistantSseDialogueWithOptions(request: $_model.ExecuteTextbookAssistantSseDialogueRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteTextbookAssistantSseDialogueResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authToken)) {
      body["authToken"] = request.authToken;
    }

    if (!$dara.isNull(request.chatId)) {
      body["chatId"] = request.chatId;
    }

    if (!$dara.isNull(request.scenario)) {
      body["scenario"] = request.scenario;
    }

    if (!$dara.isNull(request.userMessage)) {
      body["userMessage"] = request.userMessage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteTextbookAssistantSseDialogue",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/dialogue/ExecuteSseDialogue`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteTextbookAssistantSseDialogueResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteTextbookAssistantSseDialogueResponse({}));
  }

  /**
   * 进行对话-流式输出
   * 
   * @param request - ExecuteTextbookAssistantSseDialogueRequest
   * @returns ExecuteTextbookAssistantSseDialogueResponse
   */
  async executeTextbookAssistantSseDialogue(request: $_model.ExecuteTextbookAssistantSseDialogueRequest): Promise<$_model.ExecuteTextbookAssistantSseDialogueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeTextbookAssistantSseDialogueWithOptions(request, headers, runtime);
  }

  /**
   * 开启自由对话
   * 
   * @param request - ExecuteTextbookAssistantStartConversationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteTextbookAssistantStartConversationResponse
   */
  async executeTextbookAssistantStartConversationWithOptions(request: $_model.ExecuteTextbookAssistantStartConversationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteTextbookAssistantStartConversationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.articleId)) {
      body["articleId"] = request.articleId;
    }

    if (!$dara.isNull(request.authToken)) {
      body["authToken"] = request.authToken;
    }

    if (!$dara.isNull(request.scenario)) {
      body["scenario"] = request.scenario;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteTextbookAssistantStartConversation",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/dialogue/StartConversation`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteTextbookAssistantStartConversationResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteTextbookAssistantStartConversationResponse({}));
  }

  /**
   * 开启自由对话
   * 
   * @param request - ExecuteTextbookAssistantStartConversationRequest
   * @returns ExecuteTextbookAssistantStartConversationResponse
   */
  async executeTextbookAssistantStartConversation(request: $_model.ExecuteTextbookAssistantStartConversationRequest): Promise<$_model.ExecuteTextbookAssistantStartConversationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeTextbookAssistantStartConversationWithOptions(request, headers, runtime);
  }

  /**
   * 获取鉴权参数
   * 
   * @param request - ExecuteTextbookAssistantSuggestionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteTextbookAssistantSuggestionResponse
   */
  async executeTextbookAssistantSuggestionWithOptions(request: $_model.ExecuteTextbookAssistantSuggestionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteTextbookAssistantSuggestionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assistant)) {
      body["assistant"] = request.assistant;
    }

    if (!$dara.isNull(request.authToken)) {
      body["authToken"] = request.authToken;
    }

    if (!$dara.isNull(request.chatId)) {
      body["chatId"] = request.chatId;
    }

    if (!$dara.isNull(request.scenario)) {
      body["scenario"] = request.scenario;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteTextbookAssistantSuggestion",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/dialogue/Suggestion`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteTextbookAssistantSuggestionResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteTextbookAssistantSuggestionResponse({}));
  }

  /**
   * 获取鉴权参数
   * 
   * @param request - ExecuteTextbookAssistantSuggestionRequest
   * @returns ExecuteTextbookAssistantSuggestionResponse
   */
  async executeTextbookAssistantSuggestion(request: $_model.ExecuteTextbookAssistantSuggestionRequest): Promise<$_model.ExecuteTextbookAssistantSuggestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeTextbookAssistantSuggestionWithOptions(request, headers, runtime);
  }

  /**
   * 翻译消息内容
   * 
   * @param request - ExecuteTextbookAssistantTranslateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteTextbookAssistantTranslateResponse
   */
  async executeTextbookAssistantTranslateWithOptions(request: $_model.ExecuteTextbookAssistantTranslateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteTextbookAssistantTranslateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assistant)) {
      body["assistant"] = request.assistant;
    }

    if (!$dara.isNull(request.authToken)) {
      body["authToken"] = request.authToken;
    }

    if (!$dara.isNull(request.chatId)) {
      body["chatId"] = request.chatId;
    }

    if (!$dara.isNull(request.scenario)) {
      body["scenario"] = request.scenario;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteTextbookAssistantTranslate",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/dialogue/ExecuteTranslate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteTextbookAssistantTranslateResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteTextbookAssistantTranslateResponse({}));
  }

  /**
   * 翻译消息内容
   * 
   * @param request - ExecuteTextbookAssistantTranslateRequest
   * @returns ExecuteTextbookAssistantTranslateResponse
   */
  async executeTextbookAssistantTranslate(request: $_model.ExecuteTextbookAssistantTranslateRequest): Promise<$_model.ExecuteTextbookAssistantTranslateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeTextbookAssistantTranslateWithOptions(request, headers, runtime);
  }

  /**
   * 拓展练小助手
   * 
   * @param request - GetAITeacherExpansionDialogueSuggestionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAITeacherExpansionDialogueSuggestionResponse
   */
  async getAITeacherExpansionDialogueSuggestionWithOptions(request: $_model.GetAITeacherExpansionDialogueSuggestionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAITeacherExpansionDialogueSuggestionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.background)) {
      body["background"] = request.background;
    }

    if (!$dara.isNull(request.dialogueTasks)) {
      body["dialogueTasks"] = request.dialogueTasks;
    }

    if (!$dara.isNull(request.languageCode)) {
      body["languageCode"] = request.languageCode;
    }

    if (!$dara.isNull(request.records)) {
      body["records"] = request.records;
    }

    if (!$dara.isNull(request.roleInfo)) {
      body["roleInfo"] = request.roleInfo;
    }

    if (!$dara.isNull(request.startSentence)) {
      body["startSentence"] = request.startSentence;
    }

    if (!$dara.isNull(request.topic)) {
      body["topic"] = request.topic;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAITeacherExpansionDialogueSuggestion",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aiteacher/expansionPractice/suggestion`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAITeacherExpansionDialogueSuggestionResponse>(await this.callApi(params, req, runtime), new $_model.GetAITeacherExpansionDialogueSuggestionResponse({}));
  }

  /**
   * 拓展练小助手
   * 
   * @param request - GetAITeacherExpansionDialogueSuggestionRequest
   * @returns GetAITeacherExpansionDialogueSuggestionResponse
   */
  async getAITeacherExpansionDialogueSuggestion(request: $_model.GetAITeacherExpansionDialogueSuggestionRequest): Promise<$_model.GetAITeacherExpansionDialogueSuggestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAITeacherExpansionDialogueSuggestionWithOptions(request, headers, runtime);
  }

  /**
   * 同步练小助手
   * 
   * @param request - GetAITeacherSyncDialogueSuggestionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAITeacherSyncDialogueSuggestionResponse
   */
  async getAITeacherSyncDialogueSuggestionWithOptions(request: $_model.GetAITeacherSyncDialogueSuggestionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAITeacherSyncDialogueSuggestionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dialogueTasks)) {
      body["dialogueTasks"] = request.dialogueTasks;
    }

    if (!$dara.isNull(request.languageCode)) {
      body["languageCode"] = request.languageCode;
    }

    if (!$dara.isNull(request.records)) {
      body["records"] = request.records;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAITeacherSyncDialogueSuggestion",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aiteacher/syncPractice/suggestion`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAITeacherSyncDialogueSuggestionResponse>(await this.callApi(params, req, runtime), new $_model.GetAITeacherSyncDialogueSuggestionResponse({}));
  }

  /**
   * 同步练小助手
   * 
   * @param request - GetAITeacherSyncDialogueSuggestionRequest
   * @returns GetAITeacherSyncDialogueSuggestionResponse
   */
  async getAITeacherSyncDialogueSuggestion(request: $_model.GetAITeacherSyncDialogueSuggestionRequest): Promise<$_model.GetAITeacherSyncDialogueSuggestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAITeacherSyncDialogueSuggestionWithOptions(request, headers, runtime);
  }

  /**
   * 获取请求鉴权参数
   * 
   * @param request - GetTextbookAssistantTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTextbookAssistantTokenResponse
   */
  async getTextbookAssistantTokenWithOptions(request: $_model.GetTextbookAssistantTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTextbookAssistantTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceId)) {
      body["deviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.model)) {
      body["model"] = request.model;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTextbookAssistantToken",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/teachingResource/GetToken`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTextbookAssistantTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetTextbookAssistantTokenResponse({}));
  }

  /**
   * 获取请求鉴权参数
   * 
   * @param request - GetTextbookAssistantTokenRequest
   * @returns GetTextbookAssistantTokenResponse
   */
  async getTextbookAssistantToken(request: $_model.GetTextbookAssistantTokenRequest): Promise<$_model.GetTextbookAssistantTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTextbookAssistantTokenWithOptions(request, headers, runtime);
  }

  /**
   * 批量获取文章详情
   * 
   * @param request - ListTextbookAssistantArticleDetailsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTextbookAssistantArticleDetailsResponse
   */
  async listTextbookAssistantArticleDetailsWithOptions(request: $_model.ListTextbookAssistantArticleDetailsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTextbookAssistantArticleDetailsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.articleIdList)) {
      body["articleIdList"] = request.articleIdList;
    }

    if (!$dara.isNull(request.authToken)) {
      body["authToken"] = request.authToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTextbookAssistantArticleDetails",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/teachingResource/ListArticleDetails`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTextbookAssistantArticleDetailsResponse>(await this.callApi(params, req, runtime), new $_model.ListTextbookAssistantArticleDetailsResponse({}));
  }

  /**
   * 批量获取文章详情
   * 
   * @param request - ListTextbookAssistantArticleDetailsRequest
   * @returns ListTextbookAssistantArticleDetailsResponse
   */
  async listTextbookAssistantArticleDetails(request: $_model.ListTextbookAssistantArticleDetailsRequest): Promise<$_model.ListTextbookAssistantArticleDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTextbookAssistantArticleDetailsWithOptions(request, headers, runtime);
  }

  /**
   * 获取文章列表
   * 
   * @param request - ListTextbookAssistantArticlesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTextbookAssistantArticlesResponse
   */
  async listTextbookAssistantArticlesWithOptions(request: $_model.ListTextbookAssistantArticlesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTextbookAssistantArticlesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authToken)) {
      body["authToken"] = request.authToken;
    }

    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTextbookAssistantArticles",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/teachingResource/ListArticles`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTextbookAssistantArticlesResponse>(await this.callApi(params, req, runtime), new $_model.ListTextbookAssistantArticlesResponse({}));
  }

  /**
   * 获取文章列表
   * 
   * @param request - ListTextbookAssistantArticlesRequest
   * @returns ListTextbookAssistantArticlesResponse
   */
  async listTextbookAssistantArticles(request: $_model.ListTextbookAssistantArticlesRequest): Promise<$_model.ListTextbookAssistantArticlesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTextbookAssistantArticlesWithOptions(request, headers, runtime);
  }

  /**
   * 获取书本下的目录信息
   * 
   * @param request - ListTextbookAssistantBookDirectoriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTextbookAssistantBookDirectoriesResponse
   */
  async listTextbookAssistantBookDirectoriesWithOptions(request: $_model.ListTextbookAssistantBookDirectoriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTextbookAssistantBookDirectoriesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authToken)) {
      body["authToken"] = request.authToken;
    }

    if (!$dara.isNull(request.bookId)) {
      body["bookId"] = request.bookId;
    }

    if (!$dara.isNull(request.scenario)) {
      body["scenario"] = request.scenario;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTextbookAssistantBookDirectories",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/teachingResource/ListBookDirectories`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTextbookAssistantBookDirectoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListTextbookAssistantBookDirectoriesResponse({}));
  }

  /**
   * 获取书本下的目录信息
   * 
   * @param request - ListTextbookAssistantBookDirectoriesRequest
   * @returns ListTextbookAssistantBookDirectoriesResponse
   */
  async listTextbookAssistantBookDirectories(request: $_model.ListTextbookAssistantBookDirectoriesRequest): Promise<$_model.ListTextbookAssistantBookDirectoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTextbookAssistantBookDirectoriesWithOptions(request, headers, runtime);
  }

  /**
   * 获取包含年级下的书本列表
   * 
   * @param request - ListTextbookAssistantBooksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTextbookAssistantBooksResponse
   */
  async listTextbookAssistantBooksWithOptions(request: $_model.ListTextbookAssistantBooksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTextbookAssistantBooksResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authToken)) {
      body["authToken"] = request.authToken;
    }

    if (!$dara.isNull(request.bookId)) {
      body["bookId"] = request.bookId;
    }

    if (!$dara.isNull(request.grade)) {
      body["grade"] = request.grade;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.page)) {
      body["page"] = request.page;
    }

    if (!$dara.isNull(request.version)) {
      body["version"] = request.version;
    }

    if (!$dara.isNull(request.volume)) {
      body["volume"] = request.volume;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTextbookAssistantBooks",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/teachingResource/ListBooks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTextbookAssistantBooksResponse>(await this.callApi(params, req, runtime), new $_model.ListTextbookAssistantBooksResponse({}));
  }

  /**
   * 获取包含年级下的书本列表
   * 
   * @param request - ListTextbookAssistantBooksRequest
   * @returns ListTextbookAssistantBooksResponse
   */
  async listTextbookAssistantBooks(request: $_model.ListTextbookAssistantBooksRequest): Promise<$_model.ListTextbookAssistantBooksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTextbookAssistantBooksWithOptions(request, headers, runtime);
  }

  /**
   * 获取有资源的年级信息
   * 
   * @param request - ListTextbookAssistantGradeVolumesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTextbookAssistantGradeVolumesResponse
   */
  async listTextbookAssistantGradeVolumesWithOptions(request: $_model.ListTextbookAssistantGradeVolumesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTextbookAssistantGradeVolumesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authToken)) {
      body["authToken"] = request.authToken;
    }

    if (!$dara.isNull(request.scenario)) {
      body["scenario"] = request.scenario;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTextbookAssistantGradeVolumes",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/teachingResource/ListGradeVolumes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTextbookAssistantGradeVolumesResponse>(await this.callApi(params, req, runtime), new $_model.ListTextbookAssistantGradeVolumesResponse({}));
  }

  /**
   * 获取有资源的年级信息
   * 
   * @param request - ListTextbookAssistantGradeVolumesRequest
   * @returns ListTextbookAssistantGradeVolumesResponse
   */
  async listTextbookAssistantGradeVolumes(request: $_model.ListTextbookAssistantGradeVolumesRequest): Promise<$_model.ListTextbookAssistantGradeVolumesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTextbookAssistantGradeVolumesWithOptions(request, headers, runtime);
  }

  /**
   * 获取文章内容详情
   * 
   * @param request - ListTextbookAssistantSceneDetailsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTextbookAssistantSceneDetailsResponse
   */
  async listTextbookAssistantSceneDetailsWithOptions(request: $_model.ListTextbookAssistantSceneDetailsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTextbookAssistantSceneDetailsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authToken)) {
      body["authToken"] = request.authToken;
    }

    if (!$dara.isNull(request.sceneIdList)) {
      body["sceneIdList"] = request.sceneIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTextbookAssistantSceneDetails",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/teachingResource/ListSceneDetails`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTextbookAssistantSceneDetailsResponse>(await this.callApi(params, req, runtime), new $_model.ListTextbookAssistantSceneDetailsResponse({}));
  }

  /**
   * 获取文章内容详情
   * 
   * @param request - ListTextbookAssistantSceneDetailsRequest
   * @returns ListTextbookAssistantSceneDetailsResponse
   */
  async listTextbookAssistantSceneDetails(request: $_model.ListTextbookAssistantSceneDetailsRequest): Promise<$_model.ListTextbookAssistantSceneDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTextbookAssistantSceneDetailsWithOptions(request, headers, runtime);
  }

  /**
   * 个性化文生图/基于一个预训练模型创建图片推理任务
   * 
   * @param request - PersonalizedTextToImageAddInferenceJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PersonalizedTextToImageAddInferenceJobResponse
   */
  async personalizedTextToImageAddInferenceJobWithOptions(request: $_model.PersonalizedTextToImageAddInferenceJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PersonalizedTextToImageAddInferenceJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageNumber)) {
      body["imageNumber"] = request.imageNumber;
    }

    if (!$dara.isNull(request.imageUrl)) {
      body["imageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.prompt)) {
      body["prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.seed)) {
      body["seed"] = request.seed;
    }

    if (!$dara.isNull(request.strength)) {
      body["strength"] = request.strength;
    }

    if (!$dara.isNull(request.trainSteps)) {
      body["trainSteps"] = request.trainSteps;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PersonalizedTextToImageAddInferenceJob",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/personalizedtxt2img/addPreModelInferenceJob`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PersonalizedTextToImageAddInferenceJobResponse>(await this.callApi(params, req, runtime), new $_model.PersonalizedTextToImageAddInferenceJobResponse({}));
  }

  /**
   * 个性化文生图/基于一个预训练模型创建图片推理任务
   * 
   * @param request - PersonalizedTextToImageAddInferenceJobRequest
   * @returns PersonalizedTextToImageAddInferenceJobResponse
   */
  async personalizedTextToImageAddInferenceJob(request: $_model.PersonalizedTextToImageAddInferenceJobRequest): Promise<$_model.PersonalizedTextToImageAddInferenceJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.personalizedTextToImageAddInferenceJobWithOptions(request, headers, runtime);
  }

  /**
   * 个性化文生图/通过唯一的图片编号获取图片内容
   * 
   * @param request - PersonalizedTextToImageQueryImageAssetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PersonalizedTextToImageQueryImageAssetResponse
   */
  async personalizedTextToImageQueryImageAssetWithOptions(request: $_model.PersonalizedTextToImageQueryImageAssetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PersonalizedTextToImageQueryImageAssetResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.encodeFormat)) {
      query["encodeFormat"] = request.encodeFormat;
    }

    if (!$dara.isNull(request.imageId)) {
      query["imageId"] = request.imageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PersonalizedTextToImageQueryImageAsset",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/personalizedtxt2img/queryImageAssetFromImageId`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "any",
    });
    return $dara.cast<$_model.PersonalizedTextToImageQueryImageAssetResponse>(await this.callApi(params, req, runtime), new $_model.PersonalizedTextToImageQueryImageAssetResponse({}));
  }

  /**
   * 个性化文生图/通过唯一的图片编号获取图片内容
   * 
   * @param request - PersonalizedTextToImageQueryImageAssetRequest
   * @returns PersonalizedTextToImageQueryImageAssetResponse
   */
  async personalizedTextToImageQueryImageAsset(request: $_model.PersonalizedTextToImageQueryImageAssetRequest): Promise<$_model.PersonalizedTextToImageQueryImageAssetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.personalizedTextToImageQueryImageAssetWithOptions(request, headers, runtime);
  }

  /**
   * 个性化文生图/查询预制模型推理任务的状态
   * 
   * @param request - PersonalizedTextToImageQueryPreModelInferenceJobInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PersonalizedTextToImageQueryPreModelInferenceJobInfoResponse
   */
  async personalizedTextToImageQueryPreModelInferenceJobInfoWithOptions(request: $_model.PersonalizedTextToImageQueryPreModelInferenceJobInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PersonalizedTextToImageQueryPreModelInferenceJobInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.inferenceJobId)) {
      query["inferenceJobId"] = request.inferenceJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PersonalizedTextToImageQueryPreModelInferenceJobInfo",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/personalizedtxt2img/queryPreModelInferenceJobInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PersonalizedTextToImageQueryPreModelInferenceJobInfoResponse>(await this.callApi(params, req, runtime), new $_model.PersonalizedTextToImageQueryPreModelInferenceJobInfoResponse({}));
  }

  /**
   * 个性化文生图/查询预制模型推理任务的状态
   * 
   * @param request - PersonalizedTextToImageQueryPreModelInferenceJobInfoRequest
   * @returns PersonalizedTextToImageQueryPreModelInferenceJobInfoResponse
   */
  async personalizedTextToImageQueryPreModelInferenceJobInfo(request: $_model.PersonalizedTextToImageQueryPreModelInferenceJobInfoRequest): Promise<$_model.PersonalizedTextToImageQueryPreModelInferenceJobInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.personalizedTextToImageQueryPreModelInferenceJobInfoWithOptions(request, headers, runtime);
  }

  /**
   * 个性化文生图/基于一个模型创建图片推理任务
   * 
   * @param request - Personalizedtxt2imgAddInferenceJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Personalizedtxt2imgAddInferenceJobResponse
   */
  async personalizedtxt2imgAddInferenceJobWithOptions(request: $_model.Personalizedtxt2imgAddInferenceJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.Personalizedtxt2imgAddInferenceJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageNumber)) {
      body["imageNumber"] = request.imageNumber;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.prompt)) {
      body["prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.seed)) {
      body["seed"] = request.seed;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Personalizedtxt2imgAddInferenceJob",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/personalizedtxt2img/addInferenceJob`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.Personalizedtxt2imgAddInferenceJobResponse>(await this.callApi(params, req, runtime), new $_model.Personalizedtxt2imgAddInferenceJobResponse({}));
  }

  /**
   * 个性化文生图/基于一个模型创建图片推理任务
   * 
   * @param request - Personalizedtxt2imgAddInferenceJobRequest
   * @returns Personalizedtxt2imgAddInferenceJobResponse
   */
  async personalizedtxt2imgAddInferenceJob(request: $_model.Personalizedtxt2imgAddInferenceJobRequest): Promise<$_model.Personalizedtxt2imgAddInferenceJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.personalizedtxt2imgAddInferenceJobWithOptions(request, headers, runtime);
  }

  /**
   * 个性化文生图/创建一个模型训练任务
   * 
   * @param request - Personalizedtxt2imgAddModelTrainJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Personalizedtxt2imgAddModelTrainJobResponse
   */
  async personalizedtxt2imgAddModelTrainJobWithOptions(request: $_model.Personalizedtxt2imgAddModelTrainJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.Personalizedtxt2imgAddModelTrainJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageUrl)) {
      body["imageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.objectType)) {
      body["objectType"] = request.objectType;
    }

    if (!$dara.isNull(request.trainSteps)) {
      body["trainSteps"] = request.trainSteps;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Personalizedtxt2imgAddModelTrainJob",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/personalizedtxt2img/addModelTrainJob`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.Personalizedtxt2imgAddModelTrainJobResponse>(await this.callApi(params, req, runtime), new $_model.Personalizedtxt2imgAddModelTrainJobResponse({}));
  }

  /**
   * 个性化文生图/创建一个模型训练任务
   * 
   * @param request - Personalizedtxt2imgAddModelTrainJobRequest
   * @returns Personalizedtxt2imgAddModelTrainJobResponse
   */
  async personalizedtxt2imgAddModelTrainJob(request: $_model.Personalizedtxt2imgAddModelTrainJobRequest): Promise<$_model.Personalizedtxt2imgAddModelTrainJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.personalizedtxt2imgAddModelTrainJobWithOptions(request, headers, runtime);
  }

  /**
   * 个性化文生图/图片二进制内容获取
   * 
   * @param request - Personalizedtxt2imgQueryImageAssetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Personalizedtxt2imgQueryImageAssetResponse
   */
  async personalizedtxt2imgQueryImageAssetWithOptions(request: $_model.Personalizedtxt2imgQueryImageAssetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.Personalizedtxt2imgQueryImageAssetResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.encodeFormat)) {
      query["encodeFormat"] = request.encodeFormat;
    }

    if (!$dara.isNull(request.imageId)) {
      query["imageId"] = request.imageId;
    }

    if (!$dara.isNull(request.modelId)) {
      query["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.promptId)) {
      query["promptId"] = request.promptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Personalizedtxt2imgQueryImageAsset",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/personalizedtxt2img/queryImageAsset`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "any",
    });
    return $dara.cast<$_model.Personalizedtxt2imgQueryImageAssetResponse>(await this.callApi(params, req, runtime), new $_model.Personalizedtxt2imgQueryImageAssetResponse({}));
  }

  /**
   * 个性化文生图/图片二进制内容获取
   * 
   * @param request - Personalizedtxt2imgQueryImageAssetRequest
   * @returns Personalizedtxt2imgQueryImageAssetResponse
   */
  async personalizedtxt2imgQueryImageAsset(request: $_model.Personalizedtxt2imgQueryImageAssetRequest): Promise<$_model.Personalizedtxt2imgQueryImageAssetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.personalizedtxt2imgQueryImageAssetWithOptions(request, headers, runtime);
  }

  /**
   * 个性化文生图/查询模型推理任务的状态和结果信息
   * 
   * @param request - Personalizedtxt2imgQueryInferenceJobInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Personalizedtxt2imgQueryInferenceJobInfoResponse
   */
  async personalizedtxt2imgQueryInferenceJobInfoWithOptions(request: $_model.Personalizedtxt2imgQueryInferenceJobInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.Personalizedtxt2imgQueryInferenceJobInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.inferenceJobId)) {
      query["inferenceJobId"] = request.inferenceJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Personalizedtxt2imgQueryInferenceJobInfo",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/personalizedtxt2img/queryInferenceJobInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.Personalizedtxt2imgQueryInferenceJobInfoResponse>(await this.callApi(params, req, runtime), new $_model.Personalizedtxt2imgQueryInferenceJobInfoResponse({}));
  }

  /**
   * 个性化文生图/查询模型推理任务的状态和结果信息
   * 
   * @param request - Personalizedtxt2imgQueryInferenceJobInfoRequest
   * @returns Personalizedtxt2imgQueryInferenceJobInfoResponse
   */
  async personalizedtxt2imgQueryInferenceJobInfo(request: $_model.Personalizedtxt2imgQueryInferenceJobInfoRequest): Promise<$_model.Personalizedtxt2imgQueryInferenceJobInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.personalizedtxt2imgQueryInferenceJobInfoWithOptions(request, headers, runtime);
  }

  /**
   * 个性化文生图/查询模型训练任务列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Personalizedtxt2imgQueryModelTrainJobListResponse
   */
  async personalizedtxt2imgQueryModelTrainJobListWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.Personalizedtxt2imgQueryModelTrainJobListResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "Personalizedtxt2imgQueryModelTrainJobList",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/personalizedtxt2img/queryModelTrainJobList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.Personalizedtxt2imgQueryModelTrainJobListResponse>(await this.callApi(params, req, runtime), new $_model.Personalizedtxt2imgQueryModelTrainJobListResponse({}));
  }

  /**
   * 个性化文生图/查询模型训练任务列表
   * @returns Personalizedtxt2imgQueryModelTrainJobListResponse
   */
  async personalizedtxt2imgQueryModelTrainJobList(): Promise<$_model.Personalizedtxt2imgQueryModelTrainJobListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.personalizedtxt2imgQueryModelTrainJobListWithOptions(headers, runtime);
  }

  /**
   * 个性化文生图/模型训练状态查询
   * 
   * @param request - Personalizedtxt2imgQueryModelTrainStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Personalizedtxt2imgQueryModelTrainStatusResponse
   */
  async personalizedtxt2imgQueryModelTrainStatusWithOptions(request: $_model.Personalizedtxt2imgQueryModelTrainStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.Personalizedtxt2imgQueryModelTrainStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.modelId)) {
      query["modelId"] = request.modelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Personalizedtxt2imgQueryModelTrainStatus",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/personalizedtxt2img/queryModelTrainStatus`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.Personalizedtxt2imgQueryModelTrainStatusResponse>(await this.callApi(params, req, runtime), new $_model.Personalizedtxt2imgQueryModelTrainStatusResponse({}));
  }

  /**
   * 个性化文生图/模型训练状态查询
   * 
   * @param request - Personalizedtxt2imgQueryModelTrainStatusRequest
   * @returns Personalizedtxt2imgQueryModelTrainStatusResponse
   */
  async personalizedtxt2imgQueryModelTrainStatus(request: $_model.Personalizedtxt2imgQueryModelTrainStatusRequest): Promise<$_model.Personalizedtxt2imgQueryModelTrainStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.personalizedtxt2imgQueryModelTrainStatusWithOptions(request, headers, runtime);
  }

  /**
   * 阿里云控制台/获取应用访问识别码(appkey)信息
   * 
   * @param request - QueryApplicationAccessIdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryApplicationAccessIdResponse
   */
  async queryApplicationAccessIdWithOptions(request: $_model.QueryApplicationAccessIdRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryApplicationAccessIdResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationAccessId)) {
      query["applicationAccessId"] = request.applicationAccessId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryApplicationAccessId",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aliyunConsole/queryApplicationAccessId`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryApplicationAccessIdResponse>(await this.callApi(params, req, runtime), new $_model.QueryApplicationAccessIdResponse({}));
  }

  /**
   * 阿里云控制台/获取应用访问识别码(appkey)信息
   * 
   * @param request - QueryApplicationAccessIdRequest
   * @returns QueryApplicationAccessIdResponse
   */
  async queryApplicationAccessId(request: $_model.QueryApplicationAccessIdRequest): Promise<$_model.QueryApplicationAccessIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryApplicationAccessIdWithOptions(request, headers, runtime);
  }

  /**
   * 阿里云控制台/获取项目列表
   * 
   * @param request - QueryProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryProjectResponse
   */
  async queryProjectWithOptions(request: $_model.QueryProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryProjectResponse> {
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
      action: "QueryProject",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aliyunConsole/queryProject`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryProjectResponse>(await this.callApi(params, req, runtime), new $_model.QueryProjectResponse({}));
  }

  /**
   * 阿里云控制台/获取项目列表
   * 
   * @param request - QueryProjectRequest
   * @returns QueryProjectResponse
   */
  async queryProject(request: $_model.QueryProjectRequest): Promise<$_model.QueryProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryProjectWithOptions(request, headers, runtime);
  }

  /**
   * 阿里云控制台/获取项目列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryProjectListResponse
   */
  async queryProjectListWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryProjectListResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryProjectList",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aliyunConsole/queryProjectList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryProjectListResponse>(await this.callApi(params, req, runtime), new $_model.QueryProjectListResponse({}));
  }

  /**
   * 阿里云控制台/获取项目列表
   * @returns QueryProjectListResponse
   */
  async queryProjectList(): Promise<$_model.QueryProjectListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryProjectListWithOptions(headers, runtime);
  }

  /**
   * 阿里云控制台/已经购买过的服务项目
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPurchasedServiceResponse
   */
  async queryPurchasedServiceWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPurchasedServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPurchasedService",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aliyunConsole/queryPurchasedService`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPurchasedServiceResponse>(await this.callApi(params, req, runtime), new $_model.QueryPurchasedServiceResponse({}));
  }

  /**
   * 阿里云控制台/已经购买过的服务项目
   * @returns QueryPurchasedServiceResponse
   */
  async queryPurchasedService(): Promise<$_model.QueryPurchasedServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryPurchasedServiceWithOptions(headers, runtime);
  }

  /**
   * 阿里云控制台/更新项目信息
   * 
   * @param request - UpdateProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectResponse
   */
  async updateProjectWithOptions(request: $_model.UpdateProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectName)) {
      body["projectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProject",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aliyunConsole/updateProject`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProjectResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProjectResponse({}));
  }

  /**
   * 阿里云控制台/更新项目信息
   * 
   * @param request - UpdateProjectRequest
   * @returns UpdateProjectResponse
   */
  async updateProject(request: $_model.UpdateProjectRequest): Promise<$_model.UpdateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectWithOptions(request, headers, runtime);
  }

}
