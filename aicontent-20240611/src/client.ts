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
      public: "aicontent.aliyuncs.com",
      'cn-shanghai': "aicontent.aliyuncs.com",
      'cn-hangzhou': "aicontent.cn-hangzhou.aliyuncs.com",
      'cn-beijing': "aicontent.cn-beijing.aliyuncs.com",
    };
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
   * Generate Q&A pairs to expand data.
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
   * Generate Q&A pairs to expand data.
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
   * Synchronous basic practice is primarily for dialogue tasks with a ground truth. Although this mode allows some deviation from the ground truth, the AI strictly requires users to follow it.
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
   * Synchronous basic practice is primarily for dialogue tasks with a ground truth. Although this mode allows some deviation from the ground truth, the AI strictly requires users to follow it.
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
   * Lists the services available on the Alibaba Cloud Console.
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
   * Lists the services available on the Alibaba Cloud Console.
   * @returns AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponse
   */
  async aliyunConsoleOpenApiQueryAliyunConsoleServcieList(): Promise<$_model.AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.aliyunConsoleOpenApiQueryAliyunConsoleServcieListWithOptions(headers, runtime);
  }

  /**
   * Lists the services available in the Alibaba Cloud console.
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
   * Lists the services available in the Alibaba Cloud console.
   * @returns AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponse
   */
  async aliyunConsoleOpenApiQueryAliyunConsoleServiceList(): Promise<$_model.AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.aliyunConsoleOpenApiQueryAliyunConsoleServiceListWithOptions(headers, runtime);
  }

  /**
   * Alibaba Cloud Management Console / List purchased resources
   * 
   * @param request - AliyunConsoleOpenApiQueryPaidResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AliyunConsoleOpenApiQueryPaidResourceResponse
   */
  async aliyunConsoleOpenApiQueryPaidResourceWithOptions(request: $_model.AliyunConsoleOpenApiQueryPaidResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AliyunConsoleOpenApiQueryPaidResourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupBy)) {
      query["groupBy"] = request.groupBy;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.needTotalCount)) {
      query["needTotalCount"] = request.needTotalCount;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AliyunConsoleOpenApiQueryPaidResource",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aliyunConsole/queryPaidResource`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AliyunConsoleOpenApiQueryPaidResourceResponse>(await this.callApi(params, req, runtime), new $_model.AliyunConsoleOpenApiQueryPaidResourceResponse({}));
  }

  /**
   * Alibaba Cloud Management Console / List purchased resources
   * 
   * @param request - AliyunConsoleOpenApiQueryPaidResourceRequest
   * @returns AliyunConsoleOpenApiQueryPaidResourceResponse
   */
  async aliyunConsoleOpenApiQueryPaidResource(request: $_model.AliyunConsoleOpenApiQueryPaidResourceRequest): Promise<$_model.AliyunConsoleOpenApiQueryPaidResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.aliyunConsoleOpenApiQueryPaidResourceWithOptions(request, headers, runtime);
  }

  /**
   * Intelligent Correction / Oral Evaluation / Statistics / call volume
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
   * Intelligent Correction / Oral Evaluation / Statistics / call volume
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
   * Intelligent grading / oral evaluation / statistics / concurrency
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
   * Intelligent grading / oral evaluation / statistics / concurrency
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
   * Retrieves statistics about API call errors for the oral evaluation service.
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
   * Retrieves statistics about API call errors for the oral evaluation service.
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
   * Creates an access warrant.
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
   * Creates an access warrant.
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
   * Alibaba Cloud console > Create Project
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
   * Alibaba Cloud console > Create Project
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
   * Executes a workflow for Chinese composition tutoring.
   * 
   * @param request - ExecuteAITeacherChineseCompositionTutoringWorkflowRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAITeacherChineseCompositionTutoringWorkflowRunResponse
   */
  async *executeAITeacherChineseCompositionTutoringWorkflowRunWithSSE(request: $_model.ExecuteAITeacherChineseCompositionTutoringWorkflowRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.ExecuteAITeacherChineseCompositionTutoringWorkflowRunResponse, any, unknown> {
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
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.ExecuteAITeacherChineseCompositionTutoringWorkflowRunResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.ExecuteAITeacherChineseCompositionTutoringWorkflowRunResponse({}));
      }

    }
  }

  /**
   * Executes a workflow for Chinese composition tutoring.
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
   * Executes a workflow for Chinese composition tutoring.
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
   * English Composition Tutoring
   * 
   * @param request - ExecuteAITeacherEnglishCompositionTutoringWorkflowRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAITeacherEnglishCompositionTutoringWorkflowRunResponse
   */
  async *executeAITeacherEnglishCompositionTutoringWorkflowRunWithSSE(request: $_model.ExecuteAITeacherEnglishCompositionTutoringWorkflowRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.ExecuteAITeacherEnglishCompositionTutoringWorkflowRunResponse, any, unknown> {
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
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.ExecuteAITeacherEnglishCompositionTutoringWorkflowRunResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.ExecuteAITeacherEnglishCompositionTutoringWorkflowRunResponse({}));
      }

    }
  }

  /**
   * English Composition Tutoring
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
   * English Composition Tutoring
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
   * Answers English-related questions.
   * 
   * @param request - ExecuteAITeacherEnglishParaphraseChatMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAITeacherEnglishParaphraseChatMessageResponse
   */
  async *executeAITeacherEnglishParaphraseChatMessageWithSSE(request: $_model.ExecuteAITeacherEnglishParaphraseChatMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.ExecuteAITeacherEnglishParaphraseChatMessageResponse, any, unknown> {
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
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.ExecuteAITeacherEnglishParaphraseChatMessageResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.ExecuteAITeacherEnglishParaphraseChatMessageResponse({}));
      }

    }
  }

  /**
   * Answers English-related questions.
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
   * Answers English-related questions.
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
   * Expansion dialogues are for open-ended conversations. In these conversations, the AI poses open-ended questions, but the user must stay on topic. If a user\\"s response is off-topic, the AI steers the conversation back on topic. If the user gives two consecutive off-topic responses, the AI moves on to the next topic.
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
   * Expansion dialogues are for open-ended conversations. In these conversations, the AI poses open-ended questions, but the user must stay on topic. If a user\\"s response is off-topic, the AI steers the conversation back on topic. If the user gives two consecutive off-topic responses, the AI moves on to the next topic.
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
   * Uses context to polish the expanded text.
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
   * Uses context to polish the expanded text.
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
   * Further Contextual Translation Practice.
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
   * Further Contextual Translation Practice.
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
   * Performs a grammar check.
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
   * Performs a grammar check.
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
   * Practice synchronous dialogue.
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
   * Practice synchronous dialogue.
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
   * You can practice contextual translation in real-time.
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
   * You can practice contextual translation in real-time.
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
   * Executes a dialogue turn with the Textbook Assistant.
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
   * Executes a dialogue turn with the Textbook Assistant.
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
   * Adjusts the difficulty of the textbook assistant\\"s dialogue.
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
   * Adjusts the difficulty of the textbook assistant\\"s dialogue.
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
   * Performs a grammar check.
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
   * Performs a grammar check.
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
   * Refines a sentence based on the conversational context.
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
   * Refines a sentence based on the conversational context.
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
   * This operation retries a conversation.
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
   * This operation retries a conversation.
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
   * Starts a conversation and returns a streaming output.
   * 
   * @param request - ExecuteTextbookAssistantSseDialogueRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteTextbookAssistantSseDialogueResponse
   */
  async *executeTextbookAssistantSseDialogueWithSSE(request: $_model.ExecuteTextbookAssistantSseDialogueRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.ExecuteTextbookAssistantSseDialogueResponse, any, unknown> {
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
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.ExecuteTextbookAssistantSseDialogueResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.ExecuteTextbookAssistantSseDialogueResponse({}));
      }

    }
  }

  /**
   * Starts a conversation and returns a streaming output.
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
   * Starts a conversation and returns a streaming output.
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
   * Starts a conversation with the AI teacher. The teacher then sends the initial message.
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
   * Starts a conversation with the AI teacher. The teacher then sends the initial message.
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
   * Generates a suggested response from the textbook-based AI teacher.
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
   * Generates a suggested response from the textbook-based AI teacher.
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
   * Translates the content of a message.
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
   * Translates the content of a message.
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
   * Supplemental Practice Assistant
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
   * Supplemental Practice Assistant
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
   * Sync Practice Assistant
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
   * Sync Practice Assistant
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
   * Obtains an authorization token to make API calls.
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
   * Obtains an authorization token to make API calls.
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
   * Batch get article details
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
   * Batch get article details
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
   * Returns a list of articles.
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
   * Returns a list of articles.
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
   * Gets the table of contents of a book.
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
   * Gets the table of contents of a book.
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
   * Retrieves a list of books for a specified grade.
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
   * Retrieves a list of books for a specified grade.
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
   * Retrieves the available grades and volumes for the Textbook Assistant.
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
   * Retrieves the available grades and volumes for the Textbook Assistant.
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
   * Get Article Details
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
   * Get Article Details
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
   * Binds model groups to departments in batches.
   * 
   * @remarks
   * Binds model groups to departments in batches.
   * 
   * @param request - ModelRouterBatchBindModelGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterBatchBindModelGroupResponse
   */
  async modelRouterBatchBindModelGroupWithOptions(request: $_model.ModelRouterBatchBindModelGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterBatchBindModelGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowedModelGroupConfig)) {
      body["allowedModelGroupConfig"] = request.allowedModelGroupConfig;
    }

    if (!$dara.isNull(request.clientIdList)) {
      body["clientIdList"] = request.clientIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterBatchBindModelGroup",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/batch-bind-model-group`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterBatchBindModelGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterBatchBindModelGroupResponse({}));
  }

  /**
   * Binds model groups to departments in batches.
   * 
   * @remarks
   * Binds model groups to departments in batches.
   * 
   * @param request - ModelRouterBatchBindModelGroupRequest
   * @returns ModelRouterBatchBindModelGroupResponse
   */
  async modelRouterBatchBindModelGroup(request: $_model.ModelRouterBatchBindModelGroupRequest): Promise<$_model.ModelRouterBatchBindModelGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterBatchBindModelGroupWithOptions(request, headers, runtime);
  }

  /**
   * Batch creates API keys for members under a department in organization management.
   * 
   * @param request - ModelRouterBatchCreateMemberApiKeysRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterBatchCreateMemberApiKeysResponse
   */
  async modelRouterBatchCreateMemberApiKeysWithOptions(id: string, request: $_model.ModelRouterBatchCreateMemberApiKeysRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterBatchCreateMemberApiKeysResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.expireAt)) {
      body["expireAt"] = request.expireAt;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.userIds)) {
      body["userIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterBatchCreateMemberApiKeys",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(id)}/member-apikeys`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterBatchCreateMemberApiKeysResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterBatchCreateMemberApiKeysResponse({}));
  }

  /**
   * Batch creates API keys for members under a department in organization management.
   * 
   * @param request - ModelRouterBatchCreateMemberApiKeysRequest
   * @returns ModelRouterBatchCreateMemberApiKeysResponse
   */
  async modelRouterBatchCreateMemberApiKeys(id: string, request: $_model.ModelRouterBatchCreateMemberApiKeysRequest): Promise<$_model.ModelRouterBatchCreateMemberApiKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterBatchCreateMemberApiKeysWithOptions(id, request, headers, runtime);
  }

  /**
   * Manages models by performing batch model creation.
   * 
   * @param request - ModelRouterBatchCreateModelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterBatchCreateModelResponse
   */
  async modelRouterBatchCreateModelWithOptions(request: $_model.ModelRouterBatchCreateModelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterBatchCreateModelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKey)) {
      body["apiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.baseUrl)) {
      body["baseUrl"] = request.baseUrl;
    }

    if (!$dara.isNull(request.models)) {
      body["models"] = request.models;
    }

    if (!$dara.isNull(request.symbol)) {
      body["symbol"] = request.symbol;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterBatchCreateModel",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/models/batch`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterBatchCreateModelResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterBatchCreateModelResponse({}));
  }

  /**
   * Manages models by performing batch model creation.
   * 
   * @param request - ModelRouterBatchCreateModelRequest
   * @returns ModelRouterBatchCreateModelResponse
   */
  async modelRouterBatchCreateModel(request: $_model.ModelRouterBatchCreateModelRequest): Promise<$_model.ModelRouterBatchCreateModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterBatchCreateModelWithOptions(request, headers, runtime);
  }

  /**
   * Disables API keys in batches for members under a department in organization management.
   * 
   * @param request - ModelRouterBatchDisableMemberApiKeysRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterBatchDisableMemberApiKeysResponse
   */
  async modelRouterBatchDisableMemberApiKeysWithOptions(id: string, request: $_model.ModelRouterBatchDisableMemberApiKeysRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterBatchDisableMemberApiKeysResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userIds)) {
      body["userIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterBatchDisableMemberApiKeys",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(id)}/member-apikeys/disable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterBatchDisableMemberApiKeysResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterBatchDisableMemberApiKeysResponse({}));
  }

  /**
   * Disables API keys in batches for members under a department in organization management.
   * 
   * @param request - ModelRouterBatchDisableMemberApiKeysRequest
   * @returns ModelRouterBatchDisableMemberApiKeysResponse
   */
  async modelRouterBatchDisableMemberApiKeys(id: string, request: $_model.ModelRouterBatchDisableMemberApiKeysRequest): Promise<$_model.ModelRouterBatchDisableMemberApiKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterBatchDisableMemberApiKeysWithOptions(id, request, headers, runtime);
  }

  /**
   * Batch resets member authorizations to inherit under a department in organization management.
   * 
   * @param request - ModelRouterBatchResetMemberAuthorizationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterBatchResetMemberAuthorizationResponse
   */
  async modelRouterBatchResetMemberAuthorizationWithOptions(id: string, request: $_model.ModelRouterBatchResetMemberAuthorizationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterBatchResetMemberAuthorizationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userIds)) {
      body["userIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterBatchResetMemberAuthorization",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(id)}/member-authorizations/reset`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterBatchResetMemberAuthorizationResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterBatchResetMemberAuthorizationResponse({}));
  }

  /**
   * Batch resets member authorizations to inherit under a department in organization management.
   * 
   * @param request - ModelRouterBatchResetMemberAuthorizationRequest
   * @returns ModelRouterBatchResetMemberAuthorizationResponse
   */
  async modelRouterBatchResetMemberAuthorization(id: string, request: $_model.ModelRouterBatchResetMemberAuthorizationRequest): Promise<$_model.ModelRouterBatchResetMemberAuthorizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterBatchResetMemberAuthorizationWithOptions(id, request, headers, runtime);
  }

  /**
   * Sets authorization for multiple members under a department in batch.
   * 
   * @param request - ModelRouterBatchSetMemberAuthorizationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterBatchSetMemberAuthorizationResponse
   */
  async modelRouterBatchSetMemberAuthorizationWithOptions(id: string, request: $_model.ModelRouterBatchSetMemberAuthorizationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterBatchSetMemberAuthorizationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowedModelGroupConfig)) {
      body["allowedModelGroupConfig"] = request.allowedModelGroupConfig;
    }

    if (!$dara.isNull(request.userIdList)) {
      body["userIdList"] = request.userIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterBatchSetMemberAuthorization",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(id)}/member-authorizations`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterBatchSetMemberAuthorizationResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterBatchSetMemberAuthorizationResponse({}));
  }

  /**
   * Sets authorization for multiple members under a department in batch.
   * 
   * @param request - ModelRouterBatchSetMemberAuthorizationRequest
   * @returns ModelRouterBatchSetMemberAuthorizationResponse
   */
  async modelRouterBatchSetMemberAuthorization(id: string, request: $_model.ModelRouterBatchSetMemberAuthorizationRequest): Promise<$_model.ModelRouterBatchSetMemberAuthorizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterBatchSetMemberAuthorizationWithOptions(id, request, headers, runtime);
  }

  /**
   * Retrieves the usage monitoring tab configuration.
   * 
   * @param request - ModelRouterBillingCostTabsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterBillingCostTabsResponse
   */
  async modelRouterBillingCostTabsWithOptions(request: $_model.ModelRouterBillingCostTabsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterBillingCostTabsResponse> {
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
      action: "ModelRouterBillingCostTabs",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/billing/cost/tabs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterBillingCostTabsResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterBillingCostTabsResponse({}));
  }

  /**
   * Retrieves the usage monitoring tab configuration.
   * 
   * @param request - ModelRouterBillingCostTabsRequest
   * @returns ModelRouterBillingCostTabsResponse
   */
  async modelRouterBillingCostTabs(request: $_model.ModelRouterBillingCostTabsRequest): Promise<$_model.ModelRouterBillingCostTabsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterBillingCostTabsWithOptions(request, headers, runtime);
  }

  /**
   * Initiates a chat conversation.
   * 
   * @param request - ModelRouterChatCompletionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterChatCompletionsResponse
   */
  async *modelRouterChatCompletionsWithSSE(request: $_model.ModelRouterChatCompletionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.ModelRouterChatCompletionsResponse, any, unknown> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterChatCompletions",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/chat/completions`,
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
        yield $dara.cast<$_model.ModelRouterChatCompletionsResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.ModelRouterChatCompletionsResponse({}));
      }

    }
  }

  /**
   * Initiates a chat conversation.
   * 
   * @param request - ModelRouterChatCompletionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterChatCompletionsResponse
   */
  async modelRouterChatCompletionsWithOptions(request: $_model.ModelRouterChatCompletionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterChatCompletionsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterChatCompletions",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/chat/completions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterChatCompletionsResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterChatCompletionsResponse({}));
  }

  /**
   * Initiates a chat conversation.
   * 
   * @param request - ModelRouterChatCompletionsRequest
   * @returns ModelRouterChatCompletionsResponse
   */
  async modelRouterChatCompletions(request: $_model.ModelRouterChatCompletionsRequest): Promise<$_model.ModelRouterChatCompletionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterChatCompletionsWithOptions(request, headers, runtime);
  }

  /**
   * Enables balance-based throttling for a department.
   * 
   * @param request - ModelRouterConfigureClientBalanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterConfigureClientBalanceResponse
   */
  async modelRouterConfigureClientBalanceWithOptions(id: string, request: $_model.ModelRouterConfigureClientBalanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterConfigureClientBalanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.balanceType)) {
      body["balanceType"] = request.balanceType;
    }

    if (!$dara.isNull(request.enableBalance)) {
      body["enableBalance"] = request.enableBalance;
    }

    if (!$dara.isNull(request.initialBalance)) {
      body["initialBalance"] = request.initialBalance;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterConfigureClientBalance",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(id)}/balance`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterConfigureClientBalanceResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterConfigureClientBalanceResponse({}));
  }

  /**
   * Enables balance-based throttling for a department.
   * 
   * @param request - ModelRouterConfigureClientBalanceRequest
   * @returns ModelRouterConfigureClientBalanceResponse
   */
  async modelRouterConfigureClientBalance(id: string, request: $_model.ModelRouterConfigureClientBalanceRequest): Promise<$_model.ModelRouterConfigureClientBalanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterConfigureClientBalanceWithOptions(id, request, headers, runtime);
  }

  /**
   * 组织管理/配置成员子钱包余额
   * 
   * @param request - ModelRouterConfigureMemberBalanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterConfigureMemberBalanceResponse
   */
  async modelRouterConfigureMemberBalanceWithOptions(clientId: string, id: string, request: $_model.ModelRouterConfigureMemberBalanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterConfigureMemberBalanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.balanceType)) {
      body["balanceType"] = request.balanceType;
    }

    if (!$dara.isNull(request.enableBalance)) {
      body["enableBalance"] = request.enableBalance;
    }

    if (!$dara.isNull(request.initialBalance)) {
      body["initialBalance"] = request.initialBalance;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterConfigureMemberBalance",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(clientId)}/members/${$dara.URL.percentEncode(id)}/balance`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterConfigureMemberBalanceResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterConfigureMemberBalanceResponse({}));
  }

  /**
   * 组织管理/配置成员子钱包余额
   * 
   * @param request - ModelRouterConfigureMemberBalanceRequest
   * @returns ModelRouterConfigureMemberBalanceResponse
   */
  async modelRouterConfigureMemberBalance(clientId: string, id: string, request: $_model.ModelRouterConfigureMemberBalanceRequest): Promise<$_model.ModelRouterConfigureMemberBalanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterConfigureMemberBalanceWithOptions(clientId, id, request, headers, runtime);
  }

  /**
   * Copies an API key.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterCopyApiKeyResponse
   */
  async modelRouterCopyApiKeyWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterCopyApiKeyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterCopyApiKey",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/apikeys/${$dara.URL.percentEncode(id)}/copy`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterCopyApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterCopyApiKeyResponse({}));
  }

  /**
   * Copies an API key.
   * @returns ModelRouterCopyApiKeyResponse
   */
  async modelRouterCopyApiKey(id: string): Promise<$_model.ModelRouterCopyApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterCopyApiKeyWithOptions(id, headers, runtime);
  }

  /**
   * Creates an API key.
   * 
   * @param request - ModelRouterCreateApiKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterCreateApiKeyResponse
   */
  async modelRouterCreateApiKeyWithOptions(request: $_model.ModelRouterCreateApiKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterCreateApiKeyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      body["clientId"] = request.clientId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterCreateApiKey",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/apikeys`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterCreateApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterCreateApiKeyResponse({}));
  }

  /**
   * Creates an API key.
   * 
   * @param request - ModelRouterCreateApiKeyRequest
   * @returns ModelRouterCreateApiKeyResponse
   */
  async modelRouterCreateApiKey(request: $_model.ModelRouterCreateApiKeyRequest): Promise<$_model.ModelRouterCreateApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterCreateApiKeyWithOptions(request, headers, runtime);
  }

  /**
   * Creates a balance transaction for customer management.
   * 
   * @param request - ModelRouterCreateBalanceTransactionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterCreateBalanceTransactionResponse
   */
  async modelRouterCreateBalanceTransactionWithOptions(id: string, request: $_model.ModelRouterCreateBalanceTransactionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterCreateBalanceTransactionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.amount)) {
      body["amount"] = request.amount;
    }

    if (!$dara.isNull(request.balanceType)) {
      body["balanceType"] = request.balanceType;
    }

    if (!$dara.isNull(request.idempotencyKey)) {
      body["idempotencyKey"] = request.idempotencyKey;
    }

    if (!$dara.isNull(request.remark)) {
      body["remark"] = request.remark;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterCreateBalanceTransaction",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(id)}/balance/transactions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterCreateBalanceTransactionResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterCreateBalanceTransactionResponse({}));
  }

  /**
   * Creates a balance transaction for customer management.
   * 
   * @param request - ModelRouterCreateBalanceTransactionRequest
   * @returns ModelRouterCreateBalanceTransactionResponse
   */
  async modelRouterCreateBalanceTransaction(id: string, request: $_model.ModelRouterCreateBalanceTransactionRequest): Promise<$_model.ModelRouterCreateBalanceTransactionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterCreateBalanceTransactionWithOptions(id, request, headers, runtime);
  }

  /**
   * Creates a billing rule.
   * 
   * @param request - ModelRouterCreateBillingRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterCreateBillingRuleResponse
   */
  async modelRouterCreateBillingRuleWithOptions(request: $_model.ModelRouterCreateBillingRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterCreateBillingRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billingType)) {
      body["billingType"] = request.billingType;
    }

    if (!$dara.isNull(request.effectiveTime)) {
      body["effectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.expireTime)) {
      body["expireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.pricingConfig)) {
      body["pricingConfig"] = request.pricingConfig;
    }

    if (!$dara.isNull(request.version)) {
      body["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterCreateBillingRule",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/billing/rules`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterCreateBillingRuleResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterCreateBillingRuleResponse({}));
  }

  /**
   * Creates a billing rule.
   * 
   * @param request - ModelRouterCreateBillingRuleRequest
   * @returns ModelRouterCreateBillingRuleResponse
   */
  async modelRouterCreateBillingRule(request: $_model.ModelRouterCreateBillingRuleRequest): Promise<$_model.ModelRouterCreateBillingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterCreateBillingRuleWithOptions(request, headers, runtime);
  }

  /**
   * Creates a customer.
   * 
   * @param request - ModelRouterCreateClientRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterCreateClientResponse
   */
  async modelRouterCreateClientWithOptions(request: $_model.ModelRouterCreateClientRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterCreateClientResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.address)) {
      body["address"] = request.address;
    }

    if (!$dara.isNull(request.allowedModelGroupConfig)) {
      body["allowedModelGroupConfig"] = request.allowedModelGroupConfig;
    }

    if (!$dara.isNull(request.allowedModels)) {
      body["allowedModels"] = request.allowedModels;
    }

    if (!$dara.isNull(request.contact)) {
      body["contact"] = request.contact;
    }

    if (!$dara.isNull(request.discount)) {
      body["discount"] = request.discount;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.parentId)) {
      body["parentId"] = request.parentId;
    }

    if (!$dara.isNull(request.remark)) {
      body["remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterCreateClient",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterCreateClientResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterCreateClientResponse({}));
  }

  /**
   * Creates a customer.
   * 
   * @param request - ModelRouterCreateClientRequest
   * @returns ModelRouterCreateClientResponse
   */
  async modelRouterCreateClient(request: $_model.ModelRouterCreateClientRequest): Promise<$_model.ModelRouterCreateClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterCreateClientWithOptions(request, headers, runtime);
  }

  /**
   * Creates a conversation.
   * 
   * @param request - ModelRouterCreateConversationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterCreateConversationResponse
   */
  async modelRouterCreateConversationWithOptions(request: $_model.ModelRouterCreateConversationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterCreateConversationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chatData)) {
      body["chatData"] = request.chatData;
    }

    if (!$dara.isNull(request.modelIds)) {
      body["modelIds"] = request.modelIds;
    }

    if (!$dara.isNull(request.title)) {
      body["title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterCreateConversation",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/conversations`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterCreateConversationResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterCreateConversationResponse({}));
  }

  /**
   * Creates a conversation.
   * 
   * @param request - ModelRouterCreateConversationRequest
   * @returns ModelRouterCreateConversationResponse
   */
  async modelRouterCreateConversation(request: $_model.ModelRouterCreateConversationRequest): Promise<$_model.ModelRouterCreateConversationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterCreateConversationWithOptions(request, headers, runtime);
  }

  /**
   * Creates an API key for a member in the organization.
   * 
   * @param request - ModelRouterCreateMemberApiKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterCreateMemberApiKeyResponse
   */
  async modelRouterCreateMemberApiKeyWithOptions(clientId: string, id: string, request: $_model.ModelRouterCreateMemberApiKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterCreateMemberApiKeyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.expireAt)) {
      body["expireAt"] = request.expireAt;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterCreateMemberApiKey",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(clientId)}/members/${$dara.URL.percentEncode(id)}/apikeys`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterCreateMemberApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterCreateMemberApiKeyResponse({}));
  }

  /**
   * Creates an API key for a member in the organization.
   * 
   * @param request - ModelRouterCreateMemberApiKeyRequest
   * @returns ModelRouterCreateMemberApiKeyResponse
   */
  async modelRouterCreateMemberApiKey(clientId: string, id: string, request: $_model.ModelRouterCreateMemberApiKeyRequest): Promise<$_model.ModelRouterCreateMemberApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterCreateMemberApiKeyWithOptions(clientId, id, request, headers, runtime);
  }

  /**
   * Performs a balance transaction on a member sub-wallet in organization management.
   * 
   * @param request - ModelRouterCreateMemberBalanceTransactionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterCreateMemberBalanceTransactionResponse
   */
  async modelRouterCreateMemberBalanceTransactionWithOptions(clientId: string, id: string, request: $_model.ModelRouterCreateMemberBalanceTransactionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterCreateMemberBalanceTransactionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.amount)) {
      body["amount"] = request.amount;
    }

    if (!$dara.isNull(request.balanceType)) {
      body["balanceType"] = request.balanceType;
    }

    if (!$dara.isNull(request.idempotencyKey)) {
      body["idempotencyKey"] = request.idempotencyKey;
    }

    if (!$dara.isNull(request.remark)) {
      body["remark"] = request.remark;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterCreateMemberBalanceTransaction",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(clientId)}/members/${$dara.URL.percentEncode(id)}/balance/transactions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterCreateMemberBalanceTransactionResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterCreateMemberBalanceTransactionResponse({}));
  }

  /**
   * Performs a balance transaction on a member sub-wallet in organization management.
   * 
   * @param request - ModelRouterCreateMemberBalanceTransactionRequest
   * @returns ModelRouterCreateMemberBalanceTransactionResponse
   */
  async modelRouterCreateMemberBalanceTransaction(clientId: string, id: string, request: $_model.ModelRouterCreateMemberBalanceTransactionRequest): Promise<$_model.ModelRouterCreateMemberBalanceTransactionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterCreateMemberBalanceTransactionWithOptions(clientId, id, request, headers, runtime);
  }

  /**
   * Creates a balance subscription for a member in an organization.
   * 
   * @param request - ModelRouterCreateMemberSubscriptionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterCreateMemberSubscriptionResponse
   */
  async modelRouterCreateMemberSubscriptionWithOptions(clientId: string, id: string, request: $_model.ModelRouterCreateMemberSubscriptionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterCreateMemberSubscriptionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.amount)) {
      body["amount"] = request.amount;
    }

    if (!$dara.isNull(request.balanceType)) {
      body["balanceType"] = request.balanceType;
    }

    if (!$dara.isNull(request.effectiveTime)) {
      body["effectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.idempotencyKey)) {
      body["idempotencyKey"] = request.idempotencyKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterCreateMemberSubscription",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(clientId)}/members/${$dara.URL.percentEncode(id)}/balance/subscription`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterCreateMemberSubscriptionResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterCreateMemberSubscriptionResponse({}));
  }

  /**
   * Creates a balance subscription for a member in an organization.
   * 
   * @param request - ModelRouterCreateMemberSubscriptionRequest
   * @returns ModelRouterCreateMemberSubscriptionResponse
   */
  async modelRouterCreateMemberSubscription(clientId: string, id: string, request: $_model.ModelRouterCreateMemberSubscriptionRequest): Promise<$_model.ModelRouterCreateMemberSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterCreateMemberSubscriptionWithOptions(clientId, id, request, headers, runtime);
  }

  /**
   * Performs model creation.
   * 
   * @param request - ModelRouterCreateModelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterCreateModelResponse
   */
  async modelRouterCreateModelWithOptions(request: $_model.ModelRouterCreateModelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterCreateModelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKey)) {
      body["apiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.baseUrl)) {
      body["baseUrl"] = request.baseUrl;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.extensions)) {
      body["extensions"] = request.extensions;
    }

    if (!$dara.isNull(request.inOut)) {
      body["inOut"] = request.inOut;
    }

    if (!$dara.isNull(request.maxInputLength)) {
      body["maxInputLength"] = request.maxInputLength;
    }

    if (!$dara.isNull(request.maxOutputLength)) {
      body["maxOutputLength"] = request.maxOutputLength;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.modelType)) {
      body["modelType"] = request.modelType;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.symbol)) {
      body["symbol"] = request.symbol;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterCreateModel",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/models`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterCreateModelResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterCreateModelResponse({}));
  }

  /**
   * Performs model creation.
   * 
   * @param request - ModelRouterCreateModelRequest
   * @returns ModelRouterCreateModelResponse
   */
  async modelRouterCreateModel(request: $_model.ModelRouterCreateModelRequest): Promise<$_model.ModelRouterCreateModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterCreateModelWithOptions(request, headers, runtime);
  }

  /**
   * Creates a manual model group.
   * 
   * @remarks
   * Creates a manual model group.
   * 
   * @param request - ModelRouterCreateModelGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterCreateModelGroupResponse
   */
  async modelRouterCreateModelGroupWithOptions(request: $_model.ModelRouterCreateModelGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterCreateModelGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.modelList)) {
      body["modelList"] = request.modelList;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterCreateModelGroup",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/model-groups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterCreateModelGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterCreateModelGroupResponse({}));
  }

  /**
   * Creates a manual model group.
   * 
   * @remarks
   * Creates a manual model group.
   * 
   * @param request - ModelRouterCreateModelGroupRequest
   * @returns ModelRouterCreateModelGroupResponse
   */
  async modelRouterCreateModelGroup(request: $_model.ModelRouterCreateModelGroupRequest): Promise<$_model.ModelRouterCreateModelGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterCreateModelGroupWithOptions(request, headers, runtime);
  }

  /**
   * Creates a periodic recharge subscription for customer management.
   * 
   * @param request - ModelRouterCreateSubscriptionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterCreateSubscriptionResponse
   */
  async modelRouterCreateSubscriptionWithOptions(id: string, request: $_model.ModelRouterCreateSubscriptionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterCreateSubscriptionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.balanceType)) {
      body["balanceType"] = request.balanceType;
    }

    if (!$dara.isNull(request.effectiveTime)) {
      body["effectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.idempotencyKey)) {
      body["idempotencyKey"] = request.idempotencyKey;
    }

    if (!$dara.isNull(request.subscriptionAmount)) {
      body["subscriptionAmount"] = request.subscriptionAmount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterCreateSubscription",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(id)}/balance/subscription`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterCreateSubscriptionResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterCreateSubscriptionResponse({}));
  }

  /**
   * Creates a periodic recharge subscription for customer management.
   * 
   * @param request - ModelRouterCreateSubscriptionRequest
   * @returns ModelRouterCreateSubscriptionResponse
   */
  async modelRouterCreateSubscription(id: string, request: $_model.ModelRouterCreateSubscriptionRequest): Promise<$_model.ModelRouterCreateSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterCreateSubscriptionWithOptions(id, request, headers, runtime);
  }

  /**
   * Creates a user.
   * 
   * @remarks
   * Creates a user.
   * 
   * @param request - ModelRouterCreateUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterCreateUserResponse
   */
  async modelRouterCreateUserWithOptions(request: $_model.ModelRouterCreateUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterCreateUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.departmentRoles)) {
      body["departmentRoles"] = request.departmentRoles;
    }

    if (!$dara.isNull(request.loginName)) {
      body["loginName"] = request.loginName;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.phone)) {
      body["phone"] = request.phone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterCreateUser",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/users`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterCreateUserResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterCreateUserResponse({}));
  }

  /**
   * Creates a user.
   * 
   * @remarks
   * Creates a user.
   * 
   * @param request - ModelRouterCreateUserRequest
   * @returns ModelRouterCreateUserResponse
   */
  async modelRouterCreateUser(request: $_model.ModelRouterCreateUserRequest): Promise<$_model.ModelRouterCreateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterCreateUserWithOptions(request, headers, runtime);
  }

  /**
   * Deletes an API key.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterDeleteApiKeyResponse
   */
  async modelRouterDeleteApiKeyWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterDeleteApiKeyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterDeleteApiKey",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/apikeys/${$dara.URL.percentEncode(id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterDeleteApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterDeleteApiKeyResponse({}));
  }

  /**
   * Deletes an API key.
   * @returns ModelRouterDeleteApiKeyResponse
   */
  async modelRouterDeleteApiKey(id: string): Promise<$_model.ModelRouterDeleteApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterDeleteApiKeyWithOptions(id, headers, runtime);
  }

  /**
   * Deletes a customer.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterDeleteClientResponse
   */
  async modelRouterDeleteClientWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterDeleteClientResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterDeleteClient",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterDeleteClientResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterDeleteClientResponse({}));
  }

  /**
   * Deletes a customer.
   * @returns ModelRouterDeleteClientResponse
   */
  async modelRouterDeleteClient(id: string): Promise<$_model.ModelRouterDeleteClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterDeleteClientWithOptions(id, headers, runtime);
  }

  /**
   * Deletes a conversation.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterDeleteConversationResponse
   */
  async modelRouterDeleteConversationWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterDeleteConversationResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterDeleteConversation",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/conversations/${$dara.URL.percentEncode(id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterDeleteConversationResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterDeleteConversationResponse({}));
  }

  /**
   * Deletes a conversation.
   * @returns ModelRouterDeleteConversationResponse
   */
  async modelRouterDeleteConversation(id: string): Promise<$_model.ModelRouterDeleteConversationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterDeleteConversationWithOptions(id, headers, runtime);
  }

  /**
   * Deletes a model.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterDeleteModelResponse
   */
  async modelRouterDeleteModelWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterDeleteModelResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterDeleteModel",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/models/${$dara.URL.percentEncode(id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterDeleteModelResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterDeleteModelResponse({}));
  }

  /**
   * Deletes a model.
   * @returns ModelRouterDeleteModelResponse
   */
  async modelRouterDeleteModel(id: string): Promise<$_model.ModelRouterDeleteModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterDeleteModelWithOptions(id, headers, runtime);
  }

  /**
   * Deletes a manual group.
   * 
   * @remarks
   * Deletes a manual group.
   * 
   * @param request - ModelRouterDeleteModelGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterDeleteModelGroupResponse
   */
  async modelRouterDeleteModelGroupWithOptions(groupId: string, request: $_model.ModelRouterDeleteModelGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterDeleteModelGroupResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterDeleteModelGroup",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/model-groups/${$dara.URL.percentEncode(groupId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterDeleteModelGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterDeleteModelGroupResponse({}));
  }

  /**
   * Deletes a manual group.
   * 
   * @remarks
   * Deletes a manual group.
   * 
   * @param request - ModelRouterDeleteModelGroupRequest
   * @returns ModelRouterDeleteModelGroupResponse
   */
  async modelRouterDeleteModelGroup(groupId: string, request: $_model.ModelRouterDeleteModelGroupRequest): Promise<$_model.ModelRouterDeleteModelGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterDeleteModelGroupWithOptions(groupId, request, headers, runtime);
  }

  /**
   * Deletes a user.
   * 
   * @param request - ModelRouterDeleteUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterDeleteUserResponse
   */
  async modelRouterDeleteUserWithOptions(id: string, request: $_model.ModelRouterDeleteUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterDeleteUserResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterDeleteUser",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/users/${$dara.URL.percentEncode(id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterDeleteUserResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterDeleteUserResponse({}));
  }

  /**
   * Deletes a user.
   * 
   * @param request - ModelRouterDeleteUserRequest
   * @returns ModelRouterDeleteUserResponse
   */
  async modelRouterDeleteUser(id: string, request: $_model.ModelRouterDeleteUserRequest): Promise<$_model.ModelRouterDeleteUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterDeleteUserWithOptions(id, request, headers, runtime);
  }

  /**
   * Exports the balance change records of a member in the organization.
   * 
   * @param request - ModelRouterExportMemberBalanceOrdersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterExportMemberBalanceOrdersResponse
   */
  async modelRouterExportMemberBalanceOrdersWithOptions(clientId: string, id: string, request: $_model.ModelRouterExportMemberBalanceOrdersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterExportMemberBalanceOrdersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.balanceType)) {
      query["balanceType"] = request.balanceType;
    }

    if (!$dara.isNull(request.direction)) {
      query["direction"] = request.direction;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterExportMemberBalanceOrders",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(clientId)}/members/${$dara.URL.percentEncode(id)}/balance/orders/export`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterExportMemberBalanceOrdersResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterExportMemberBalanceOrdersResponse({}));
  }

  /**
   * Exports the balance change records of a member in the organization.
   * 
   * @param request - ModelRouterExportMemberBalanceOrdersRequest
   * @returns ModelRouterExportMemberBalanceOrdersResponse
   */
  async modelRouterExportMemberBalanceOrders(clientId: string, id: string, request: $_model.ModelRouterExportMemberBalanceOrdersRequest): Promise<$_model.ModelRouterExportMemberBalanceOrdersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterExportMemberBalanceOrdersWithOptions(clientId, id, request, headers, runtime);
  }

  /**
   * Client Management/Get department balance
   * 
   * @param request - ModelRouterGetClientBalanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterGetClientBalanceResponse
   */
  async modelRouterGetClientBalanceWithOptions(id: string, request: $_model.ModelRouterGetClientBalanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterGetClientBalanceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterGetClientBalance",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(id)}/balance`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterGetClientBalanceResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterGetClientBalanceResponse({}));
  }

  /**
   * Client Management/Get department balance
   * 
   * @param request - ModelRouterGetClientBalanceRequest
   * @returns ModelRouterGetClientBalanceResponse
   */
  async modelRouterGetClientBalance(id: string, request: $_model.ModelRouterGetClientBalanceRequest): Promise<$_model.ModelRouterGetClientBalanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterGetClientBalanceWithOptions(id, request, headers, runtime);
  }

  /**
   * Retrieves the balance change logs of a department.
   * 
   * @param request - ModelRouterGetClientBalanceLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterGetClientBalanceLogsResponse
   */
  async modelRouterGetClientBalanceLogsWithOptions(id: string, request: $_model.ModelRouterGetClientBalanceLogsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterGetClientBalanceLogsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.changeType)) {
      query["changeType"] = request.changeType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterGetClientBalanceLogs",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(id)}/balance/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterGetClientBalanceLogsResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterGetClientBalanceLogsResponse({}));
  }

  /**
   * Retrieves the balance change logs of a department.
   * 
   * @param request - ModelRouterGetClientBalanceLogsRequest
   * @returns ModelRouterGetClientBalanceLogsResponse
   */
  async modelRouterGetClientBalanceLogs(id: string, request: $_model.ModelRouterGetClientBalanceLogsRequest): Promise<$_model.ModelRouterGetClientBalanceLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterGetClientBalanceLogsWithOptions(id, request, headers, runtime);
  }

  /**
   * 组织管理/获取部门余额概览
   * 
   * @param request - ModelRouterGetDeptBalanceSummaryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterGetDeptBalanceSummaryResponse
   */
  async modelRouterGetDeptBalanceSummaryWithOptions(id: string, request: $_model.ModelRouterGetDeptBalanceSummaryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterGetDeptBalanceSummaryResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterGetDeptBalanceSummary",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(id)}/balance-summary`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterGetDeptBalanceSummaryResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterGetDeptBalanceSummaryResponse({}));
  }

  /**
   * 组织管理/获取部门余额概览
   * 
   * @param request - ModelRouterGetDeptBalanceSummaryRequest
   * @returns ModelRouterGetDeptBalanceSummaryResponse
   */
  async modelRouterGetDeptBalanceSummary(id: string, request: $_model.ModelRouterGetDeptBalanceSummaryRequest): Promise<$_model.ModelRouterGetDeptBalanceSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterGetDeptBalanceSummaryWithOptions(id, request, headers, runtime);
  }

  /**
   * Retrieves the list of API keys for a member in the organization.
   * 
   * @param request - ModelRouterGetMemberApiKeysRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterGetMemberApiKeysResponse
   */
  async modelRouterGetMemberApiKeysWithOptions(clientId: string, id: string, request: $_model.ModelRouterGetMemberApiKeysRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterGetMemberApiKeysResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterGetMemberApiKeys",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(clientId)}/members/${$dara.URL.percentEncode(id)}/apikeys`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterGetMemberApiKeysResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterGetMemberApiKeysResponse({}));
  }

  /**
   * Retrieves the list of API keys for a member in the organization.
   * 
   * @param request - ModelRouterGetMemberApiKeysRequest
   * @returns ModelRouterGetMemberApiKeysResponse
   */
  async modelRouterGetMemberApiKeys(clientId: string, id: string, request: $_model.ModelRouterGetMemberApiKeysRequest): Promise<$_model.ModelRouterGetMemberApiKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterGetMemberApiKeysWithOptions(clientId, id, request, headers, runtime);
  }

  /**
   * 组织管理/获取成员子钱包余额
   * 
   * @param request - ModelRouterGetMemberBalanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterGetMemberBalanceResponse
   */
  async modelRouterGetMemberBalanceWithOptions(clientId: string, id: string, request: $_model.ModelRouterGetMemberBalanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterGetMemberBalanceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterGetMemberBalance",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(clientId)}/members/${$dara.URL.percentEncode(id)}/balance`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterGetMemberBalanceResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterGetMemberBalanceResponse({}));
  }

  /**
   * 组织管理/获取成员子钱包余额
   * 
   * @param request - ModelRouterGetMemberBalanceRequest
   * @returns ModelRouterGetMemberBalanceResponse
   */
  async modelRouterGetMemberBalance(clientId: string, id: string, request: $_model.ModelRouterGetMemberBalanceRequest): Promise<$_model.ModelRouterGetMemberBalanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterGetMemberBalanceWithOptions(clientId, id, request, headers, runtime);
  }

  /**
   * 组织管理/获取成员余额变更日志
   * 
   * @param request - ModelRouterGetMemberBalanceLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterGetMemberBalanceLogsResponse
   */
  async modelRouterGetMemberBalanceLogsWithOptions(clientId: string, id: string, request: $_model.ModelRouterGetMemberBalanceLogsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterGetMemberBalanceLogsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.changeType)) {
      query["changeType"] = request.changeType;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    if (!$dara.isNull(request.skipTotal)) {
      query["skipTotal"] = request.skipTotal;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterGetMemberBalanceLogs",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(clientId)}/members/${$dara.URL.percentEncode(id)}/balance/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterGetMemberBalanceLogsResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterGetMemberBalanceLogsResponse({}));
  }

  /**
   * 组织管理/获取成员余额变更日志
   * 
   * @param request - ModelRouterGetMemberBalanceLogsRequest
   * @returns ModelRouterGetMemberBalanceLogsResponse
   */
  async modelRouterGetMemberBalanceLogs(clientId: string, id: string, request: $_model.ModelRouterGetMemberBalanceLogsRequest): Promise<$_model.ModelRouterGetMemberBalanceLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterGetMemberBalanceLogsWithOptions(clientId, id, request, headers, runtime);
  }

  /**
   * Queries the cross-department role assignments of a user.
   * 
   * @remarks
   * Queries the role assignments of a user.
   * 
   * @param request - ModelRouterGetUserRolesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterGetUserRolesResponse
   */
  async modelRouterGetUserRolesWithOptions(id: string, request: $_model.ModelRouterGetUserRolesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterGetUserRolesResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterGetUserRoles",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/users/${$dara.URL.percentEncode(id)}/roles`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterGetUserRolesResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterGetUserRolesResponse({}));
  }

  /**
   * Queries the cross-department role assignments of a user.
   * 
   * @remarks
   * Queries the role assignments of a user.
   * 
   * @param request - ModelRouterGetUserRolesRequest
   * @returns ModelRouterGetUserRolesResponse
   */
  async modelRouterGetUserRoles(id: string, request: $_model.ModelRouterGetUserRolesRequest): Promise<$_model.ModelRouterGetUserRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterGetUserRolesWithOptions(id, request, headers, runtime);
  }

  /**
   * Queries balance change records.
   * 
   * @remarks
   * This API operation is deprecated. Do not use it.
   * 
   * @param request - ModelRouterListBalanceOrdersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterListBalanceOrdersResponse
   */
  async modelRouterListBalanceOrdersWithOptions(id: string, request: $_model.ModelRouterListBalanceOrdersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterListBalanceOrdersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.balanceType)) {
      query["balanceType"] = request.balanceType;
    }

    if (!$dara.isNull(request.direction)) {
      query["direction"] = request.direction;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderType)) {
      query["orderType"] = request.orderType;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterListBalanceOrders",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(id)}/balance/orders`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterListBalanceOrdersResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterListBalanceOrdersResponse({}));
  }

  /**
   * Queries balance change records.
   * 
   * @remarks
   * This API operation is deprecated. Do not use it.
   * 
   * @param request - ModelRouterListBalanceOrdersRequest
   * @returns ModelRouterListBalanceOrdersResponse
   */
  async modelRouterListBalanceOrders(id: string, request: $_model.ModelRouterListBalanceOrdersRequest): Promise<$_model.ModelRouterListBalanceOrdersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterListBalanceOrdersWithOptions(id, request, headers, runtime);
  }

  /**
   * 组织管理/获取部门成员列表
   * 
   * @param request - ModelRouterListDeptMembersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterListDeptMembersResponse
   */
  async modelRouterListDeptMembersWithOptions(id: string, request: $_model.ModelRouterListDeptMembersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterListDeptMembersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authConfig)) {
      query["authConfig"] = request.authConfig;
    }

    if (!$dara.isNull(request.includeAuthorization)) {
      query["includeAuthorization"] = request.includeAuthorization;
    }

    if (!$dara.isNull(request.includeBalance)) {
      query["includeBalance"] = request.includeBalance;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.model)) {
      query["model"] = request.model;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterListDeptMembers",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(id)}/members`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterListDeptMembersResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterListDeptMembersResponse({}));
  }

  /**
   * 组织管理/获取部门成员列表
   * 
   * @param request - ModelRouterListDeptMembersRequest
   * @returns ModelRouterListDeptMembersResponse
   */
  async modelRouterListDeptMembers(id: string, request: $_model.ModelRouterListDeptMembersRequest): Promise<$_model.ModelRouterListDeptMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterListDeptMembersWithOptions(id, request, headers, runtime);
  }

  /**
   * 组织管理/获取成员余额变更记录
   * 
   * @param request - ModelRouterListMemberBalanceOrdersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterListMemberBalanceOrdersResponse
   */
  async modelRouterListMemberBalanceOrdersWithOptions(clientId: string, id: string, request: $_model.ModelRouterListMemberBalanceOrdersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterListMemberBalanceOrdersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.balanceType)) {
      query["balanceType"] = request.balanceType;
    }

    if (!$dara.isNull(request.direction)) {
      query["direction"] = request.direction;
    }

    if (!$dara.isNull(request.orderType)) {
      query["orderType"] = request.orderType;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterListMemberBalanceOrders",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(clientId)}/members/${$dara.URL.percentEncode(id)}/balance/orders`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterListMemberBalanceOrdersResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterListMemberBalanceOrdersResponse({}));
  }

  /**
   * 组织管理/获取成员余额变更记录
   * 
   * @param request - ModelRouterListMemberBalanceOrdersRequest
   * @returns ModelRouterListMemberBalanceOrdersResponse
   */
  async modelRouterListMemberBalanceOrders(clientId: string, id: string, request: $_model.ModelRouterListMemberBalanceOrdersRequest): Promise<$_model.ModelRouterListMemberBalanceOrdersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterListMemberBalanceOrdersWithOptions(clientId, id, request, headers, runtime);
  }

  /**
   * 组织管理/获取成员订阅列表
   * 
   * @param request - ModelRouterListMemberSubscriptionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterListMemberSubscriptionsResponse
   */
  async modelRouterListMemberSubscriptionsWithOptions(clientId: string, id: string, request: $_model.ModelRouterListMemberSubscriptionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterListMemberSubscriptionsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterListMemberSubscriptions",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(clientId)}/members/${$dara.URL.percentEncode(id)}/balance/subscription`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterListMemberSubscriptionsResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterListMemberSubscriptionsResponse({}));
  }

  /**
   * 组织管理/获取成员订阅列表
   * 
   * @param request - ModelRouterListMemberSubscriptionsRequest
   * @returns ModelRouterListMemberSubscriptionsResponse
   */
  async modelRouterListMemberSubscriptions(clientId: string, id: string, request: $_model.ModelRouterListMemberSubscriptionsRequest): Promise<$_model.ModelRouterListMemberSubscriptionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterListMemberSubscriptionsWithOptions(clientId, id, request, headers, runtime);
  }

  /**
   * Queries the list of periodic recharge subscriptions.
   * 
   * @remarks
   * This operation is deprecated. Do not use it.
   * 
   * @param request - ModelRouterListSubscriptionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterListSubscriptionsResponse
   */
  async modelRouterListSubscriptionsWithOptions(id: string, request: $_model.ModelRouterListSubscriptionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterListSubscriptionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.balanceType)) {
      query["balanceType"] = request.balanceType;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterListSubscriptions",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(id)}/balance/subscription`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterListSubscriptionsResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterListSubscriptionsResponse({}));
  }

  /**
   * Queries the list of periodic recharge subscriptions.
   * 
   * @remarks
   * This operation is deprecated. Do not use it.
   * 
   * @param request - ModelRouterListSubscriptionsRequest
   * @returns ModelRouterListSubscriptionsResponse
   */
  async modelRouterListSubscriptions(id: string, request: $_model.ModelRouterListSubscriptionsRequest): Promise<$_model.ModelRouterListSubscriptionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterListSubscriptionsWithOptions(id, request, headers, runtime);
  }

  /**
   * Retrieves the details of an API key.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryApiKeyResponse
   */
  async modelRouterQueryApiKeyWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryApiKeyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterQueryApiKey",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/apikeys/${$dara.URL.percentEncode(id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryApiKeyResponse({}));
  }

  /**
   * Retrieves the details of an API key.
   * @returns ModelRouterQueryApiKeyResponse
   */
  async modelRouterQueryApiKey(id: string): Promise<$_model.ModelRouterQueryApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryApiKeyWithOptions(id, headers, runtime);
  }

  /**
   * Retrieves a list of API keys.
   * 
   * @param request - ModelRouterQueryApiKeyListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryApiKeyListResponse
   */
  async modelRouterQueryApiKeyListWithOptions(request: $_model.ModelRouterQueryApiKeyListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryApiKeyListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      query["clientId"] = request.clientId;
    }

    if (!$dara.isNull(request.groupBy)) {
      query["groupBy"] = request.groupBy;
    }

    if (!$dara.isNull(request.includeMemberKeys)) {
      query["includeMemberKeys"] = request.includeMemberKeys;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.memberUserIds)) {
      query["memberUserIds"] = request.memberUserIds;
    }

    if (!$dara.isNull(request.needTotalCount)) {
      query["needTotalCount"] = request.needTotalCount;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
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
      action: "ModelRouterQueryApiKeyList",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/apikeys`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryApiKeyListResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryApiKeyListResponse({}));
  }

  /**
   * Retrieves a list of API keys.
   * 
   * @param request - ModelRouterQueryApiKeyListRequest
   * @returns ModelRouterQueryApiKeyListResponse
   */
  async modelRouterQueryApiKeyList(request: $_model.ModelRouterQueryApiKeyListRequest): Promise<$_model.ModelRouterQueryApiKeyListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryApiKeyListWithOptions(request, headers, runtime);
  }

  /**
   * Queries billing details in batches.
   * 
   * @param request - ModelRouterQueryBillingCostBreakdownRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryBillingCostBreakdownResponse
   */
  async modelRouterQueryBillingCostBreakdownWithOptions(request: $_model.ModelRouterQueryBillingCostBreakdownRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryBillingCostBreakdownResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKeyId)) {
      query["apiKeyId"] = request.apiKeyId;
    }

    if (!$dara.isNull(request.clientId)) {
      query["clientId"] = request.clientId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.granularity)) {
      query["granularity"] = request.granularity;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.memberUserIds)) {
      query["memberUserIds"] = request.memberUserIds;
    }

    if (!$dara.isNull(request.modelId)) {
      query["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.modelTypes)) {
      query["modelTypes"] = request.modelTypes;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterQueryBillingCostBreakdown",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/billing/cost/breakdown`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryBillingCostBreakdownResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryBillingCostBreakdownResponse({}));
  }

  /**
   * Queries billing details in batches.
   * 
   * @param request - ModelRouterQueryBillingCostBreakdownRequest
   * @returns ModelRouterQueryBillingCostBreakdownResponse
   */
  async modelRouterQueryBillingCostBreakdown(request: $_model.ModelRouterQueryBillingCostBreakdownRequest): Promise<$_model.ModelRouterQueryBillingCostBreakdownResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryBillingCostBreakdownWithOptions(request, headers, runtime);
  }

  /**
   * Billing management / Query billing rule list
   * 
   * @param request - ModelRouterQueryBillingRuleListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryBillingRuleListResponse
   */
  async modelRouterQueryBillingRuleListWithOptions(request: $_model.ModelRouterQueryBillingRuleListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryBillingRuleListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.activeOnly)) {
      query["activeOnly"] = request.activeOnly;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.modelCode)) {
      query["modelCode"] = request.modelCode;
    }

    if (!$dara.isNull(request.modelId)) {
      query["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.modelType)) {
      query["modelType"] = request.modelType;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterQueryBillingRuleList",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/billing/rules`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryBillingRuleListResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryBillingRuleListResponse({}));
  }

  /**
   * Billing management / Query billing rule list
   * 
   * @param request - ModelRouterQueryBillingRuleListRequest
   * @returns ModelRouterQueryBillingRuleListResponse
   */
  async modelRouterQueryBillingRuleList(request: $_model.ModelRouterQueryBillingRuleListRequest): Promise<$_model.ModelRouterQueryBillingRuleListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryBillingRuleListWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the discount modification history for a client.
   * 
   * @param request - ModelRouterQueryClientDiscountLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryClientDiscountLogsResponse
   */
  async modelRouterQueryClientDiscountLogsWithOptions(id: string, request: $_model.ModelRouterQueryClientDiscountLogsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryClientDiscountLogsResponse> {
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
      action: "ModelRouterQueryClientDiscountLogs",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(id)}/discount-logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryClientDiscountLogsResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryClientDiscountLogsResponse({}));
  }

  /**
   * Retrieves the discount modification history for a client.
   * 
   * @param request - ModelRouterQueryClientDiscountLogsRequest
   * @returns ModelRouterQueryClientDiscountLogsResponse
   */
  async modelRouterQueryClientDiscountLogs(id: string, request: $_model.ModelRouterQueryClientDiscountLogsRequest): Promise<$_model.ModelRouterQueryClientDiscountLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryClientDiscountLogsWithOptions(id, request, headers, runtime);
  }

  /**
   * Retrieves a list of clients.
   * 
   * @param request - ModelRouterQueryClientListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryClientListResponse
   */
  async modelRouterQueryClientListWithOptions(request: $_model.ModelRouterQueryClientListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryClientListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupBy)) {
      query["groupBy"] = request.groupBy;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.needTotalCount)) {
      query["needTotalCount"] = request.needTotalCount;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentId)) {
      query["parentId"] = request.parentId;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterQueryClientList",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryClientListResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryClientListResponse({}));
  }

  /**
   * Retrieves a list of clients.
   * 
   * @param request - ModelRouterQueryClientListRequest
   * @returns ModelRouterQueryClientListResponse
   */
  async modelRouterQueryClientList(request: $_model.ModelRouterQueryClientListRequest): Promise<$_model.ModelRouterQueryClientListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryClientListWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the customer tree structure.
   * 
   * @param request - ModelRouterQueryClientTreeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryClientTreeResponse
   */
  async modelRouterQueryClientTreeWithOptions(request: $_model.ModelRouterQueryClientTreeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryClientTreeResponse> {
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
      action: "ModelRouterQueryClientTree",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/tree`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryClientTreeResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryClientTreeResponse({}));
  }

  /**
   * Retrieves the customer tree structure.
   * 
   * @param request - ModelRouterQueryClientTreeRequest
   * @returns ModelRouterQueryClientTreeResponse
   */
  async modelRouterQueryClientTree(request: $_model.ModelRouterQueryClientTreeRequest): Promise<$_model.ModelRouterQueryClientTreeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryClientTreeWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the details of a conversation.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryConversationResponse
   */
  async modelRouterQueryConversationWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryConversationResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterQueryConversation",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/conversations/${$dara.URL.percentEncode(id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryConversationResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryConversationResponse({}));
  }

  /**
   * Retrieves the details of a conversation.
   * @returns ModelRouterQueryConversationResponse
   */
  async modelRouterQueryConversation(id: string): Promise<$_model.ModelRouterQueryConversationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryConversationWithOptions(id, headers, runtime);
  }

  /**
   * Conversation management/Conversation list
   * 
   * @param request - ModelRouterQueryConversationListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryConversationListResponse
   */
  async modelRouterQueryConversationListWithOptions(request: $_model.ModelRouterQueryConversationListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryConversationListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupBy)) {
      query["groupBy"] = request.groupBy;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.needTotalCount)) {
      query["needTotalCount"] = request.needTotalCount;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
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
      action: "ModelRouterQueryConversationList",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/conversations`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryConversationListResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryConversationListResponse({}));
  }

  /**
   * Conversation management/Conversation list
   * 
   * @param request - ModelRouterQueryConversationListRequest
   * @returns ModelRouterQueryConversationListResponse
   */
  async modelRouterQueryConversationList(request: $_model.ModelRouterQueryConversationListRequest): Promise<$_model.ModelRouterQueryConversationListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryConversationListWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the usage details of a model for billing management.
   * 
   * @param request - ModelRouterQueryCostModelDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryCostModelDetailResponse
   */
  async modelRouterQueryCostModelDetailWithOptions(request: $_model.ModelRouterQueryCostModelDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryCostModelDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKeyId)) {
      query["apiKeyId"] = request.apiKeyId;
    }

    if (!$dara.isNull(request.clientId)) {
      query["clientId"] = request.clientId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.memberUserIds)) {
      query["memberUserIds"] = request.memberUserIds;
    }

    if (!$dara.isNull(request.modelId)) {
      query["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterQueryCostModelDetail",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/billing/cost/model-detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryCostModelDetailResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryCostModelDetailResponse({}));
  }

  /**
   * Retrieves the usage details of a model for billing management.
   * 
   * @param request - ModelRouterQueryCostModelDetailRequest
   * @returns ModelRouterQueryCostModelDetailResponse
   */
  async modelRouterQueryCostModelDetail(request: $_model.ModelRouterQueryCostModelDetailRequest): Promise<$_model.ModelRouterQueryCostModelDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryCostModelDetailWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the list of models called for billing management.
   * 
   * @param request - ModelRouterQueryCostModelListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryCostModelListResponse
   */
  async modelRouterQueryCostModelListWithOptions(request: $_model.ModelRouterQueryCostModelListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryCostModelListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKeyId)) {
      query["apiKeyId"] = request.apiKeyId;
    }

    if (!$dara.isNull(request.clientId)) {
      query["clientId"] = request.clientId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.granularity)) {
      query["granularity"] = request.granularity;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.memberUserIds)) {
      query["memberUserIds"] = request.memberUserIds;
    }

    if (!$dara.isNull(request.modelTypes)) {
      query["modelTypes"] = request.modelTypes;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.search)) {
      query["search"] = request.search;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterQueryCostModelList",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/billing/cost/models`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryCostModelListResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryCostModelListResponse({}));
  }

  /**
   * Retrieves the list of models called for billing management.
   * 
   * @param request - ModelRouterQueryCostModelListRequest
   * @returns ModelRouterQueryCostModelListResponse
   */
  async modelRouterQueryCostModelList(request: $_model.ModelRouterQueryCostModelListRequest): Promise<$_model.ModelRouterQueryCostModelListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryCostModelListWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves cost overview metrics for billing management.
   * 
   * @param request - ModelRouterQueryCostOverviewMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryCostOverviewMetricsResponse
   */
  async modelRouterQueryCostOverviewMetricsWithOptions(request: $_model.ModelRouterQueryCostOverviewMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryCostOverviewMetricsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKeyId)) {
      query["apiKeyId"] = request.apiKeyId;
    }

    if (!$dara.isNull(request.clientId)) {
      query["clientId"] = request.clientId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.granularity)) {
      query["granularity"] = request.granularity;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.memberUserIds)) {
      query["memberUserIds"] = request.memberUserIds;
    }

    if (!$dara.isNull(request.modelTypes)) {
      query["modelTypes"] = request.modelTypes;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterQueryCostOverviewMetrics",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/billing/cost/overview`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryCostOverviewMetricsResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryCostOverviewMetricsResponse({}));
  }

  /**
   * Retrieves cost overview metrics for billing management.
   * 
   * @param request - ModelRouterQueryCostOverviewMetricsRequest
   * @returns ModelRouterQueryCostOverviewMetricsResponse
   */
  async modelRouterQueryCostOverviewMetrics(request: $_model.ModelRouterQueryCostOverviewMetricsRequest): Promise<$_model.ModelRouterQueryCostOverviewMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryCostOverviewMetricsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves usage cost trends.
   * 
   * @param request - ModelRouterQueryCostTrendMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryCostTrendMetricsResponse
   */
  async modelRouterQueryCostTrendMetricsWithOptions(request: $_model.ModelRouterQueryCostTrendMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryCostTrendMetricsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKeyId)) {
      query["apiKeyId"] = request.apiKeyId;
    }

    if (!$dara.isNull(request.clientId)) {
      query["clientId"] = request.clientId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.granularity)) {
      query["granularity"] = request.granularity;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.memberUserIds)) {
      query["memberUserIds"] = request.memberUserIds;
    }

    if (!$dara.isNull(request.modelTypes)) {
      query["modelTypes"] = request.modelTypes;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterQueryCostTrendMetrics",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/billing/cost/trend`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryCostTrendMetricsResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryCostTrendMetricsResponse({}));
  }

  /**
   * Retrieves usage cost trends.
   * 
   * @param request - ModelRouterQueryCostTrendMetricsRequest
   * @returns ModelRouterQueryCostTrendMetricsResponse
   */
  async modelRouterQueryCostTrendMetrics(request: $_model.ModelRouterQueryCostTrendMetricsRequest): Promise<$_model.ModelRouterQueryCostTrendMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryCostTrendMetricsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves details for a specific model.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryModelResponse
   */
  async modelRouterQueryModelWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryModelResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterQueryModel",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/models/${$dara.URL.percentEncode(id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryModelResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryModelResponse({}));
  }

  /**
   * Retrieves details for a specific model.
   * @returns ModelRouterQueryModelResponse
   */
  async modelRouterQueryModel(id: string): Promise<$_model.ModelRouterQueryModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryModelWithOptions(id, headers, runtime);
  }

  /**
   * Queries the details of a model group.
   * 
   * @remarks
   * Queries the details of a model group.
   * 
   * @param request - ModelRouterQueryModelGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryModelGroupResponse
   */
  async modelRouterQueryModelGroupWithOptions(groupId: string, request: $_model.ModelRouterQueryModelGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryModelGroupResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterQueryModelGroup",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/model-groups/${$dara.URL.percentEncode(groupId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryModelGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryModelGroupResponse({}));
  }

  /**
   * Queries the details of a model group.
   * 
   * @remarks
   * Queries the details of a model group.
   * 
   * @param request - ModelRouterQueryModelGroupRequest
   * @returns ModelRouterQueryModelGroupResponse
   */
  async modelRouterQueryModelGroup(groupId: string, request: $_model.ModelRouterQueryModelGroupRequest): Promise<$_model.ModelRouterQueryModelGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryModelGroupWithOptions(groupId, request, headers, runtime);
  }

  /**
   * Queries the departments bound to a model group by paging.
   * 
   * @remarks
   * Queries the departments bound to a model group by paging.
   * 
   * @param request - ModelRouterQueryModelGroupClientsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryModelGroupClientsResponse
   */
  async modelRouterQueryModelGroupClientsWithOptions(groupId: string, request: $_model.ModelRouterQueryModelGroupClientsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryModelGroupClientsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterQueryModelGroupClients",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/model-groups/${$dara.URL.percentEncode(groupId)}/clients`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryModelGroupClientsResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryModelGroupClientsResponse({}));
  }

  /**
   * Queries the departments bound to a model group by paging.
   * 
   * @remarks
   * Queries the departments bound to a model group by paging.
   * 
   * @param request - ModelRouterQueryModelGroupClientsRequest
   * @returns ModelRouterQueryModelGroupClientsResponse
   */
  async modelRouterQueryModelGroupClients(groupId: string, request: $_model.ModelRouterQueryModelGroupClientsRequest): Promise<$_model.ModelRouterQueryModelGroupClientsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryModelGroupClientsWithOptions(groupId, request, headers, runtime);
  }

  /**
   * Queries the list of model groups by paging.
   * 
   * @remarks
   * Queries the list of model groups by paging.
   * 
   * @param request - ModelRouterQueryModelGroupListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryModelGroupListResponse
   */
  async modelRouterQueryModelGroupListWithOptions(request: $_model.ModelRouterQueryModelGroupListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryModelGroupListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
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
      action: "ModelRouterQueryModelGroupList",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/model-groups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryModelGroupListResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryModelGroupListResponse({}));
  }

  /**
   * Queries the list of model groups by paging.
   * 
   * @remarks
   * Queries the list of model groups by paging.
   * 
   * @param request - ModelRouterQueryModelGroupListRequest
   * @returns ModelRouterQueryModelGroupListResponse
   */
  async modelRouterQueryModelGroupList(request: $_model.ModelRouterQueryModelGroupListRequest): Promise<$_model.ModelRouterQueryModelGroupListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryModelGroupListWithOptions(request, headers, runtime);
  }

  /**
   * Performs a paging query for models within a model group.
   * 
   * @remarks
   * Queries models within a group with pagination.
   * 
   * @param request - ModelRouterQueryModelGroupModelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryModelGroupModelsResponse
   */
  async modelRouterQueryModelGroupModelsWithOptions(groupId: string, request: $_model.ModelRouterQueryModelGroupModelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryModelGroupModelsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterQueryModelGroupModels",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/model-groups/${$dara.URL.percentEncode(groupId)}/models`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryModelGroupModelsResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryModelGroupModelsResponse({}));
  }

  /**
   * Performs a paging query for models within a model group.
   * 
   * @remarks
   * Queries models within a group with pagination.
   * 
   * @param request - ModelRouterQueryModelGroupModelsRequest
   * @returns ModelRouterQueryModelGroupModelsResponse
   */
  async modelRouterQueryModelGroupModels(groupId: string, request: $_model.ModelRouterQueryModelGroupModelsRequest): Promise<$_model.ModelRouterQueryModelGroupModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryModelGroupModelsWithOptions(groupId, request, headers, runtime);
  }

  /**
   * Queries the users attached to a model group by paging.
   * 
   * @remarks
   * Queries the users attached to a model group by paging.
   * 
   * @param request - ModelRouterQueryModelGroupUsersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryModelGroupUsersResponse
   */
  async modelRouterQueryModelGroupUsersWithOptions(groupId: string, request: $_model.ModelRouterQueryModelGroupUsersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryModelGroupUsersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterQueryModelGroupUsers",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/model-groups/${$dara.URL.percentEncode(groupId)}/users`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryModelGroupUsersResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryModelGroupUsersResponse({}));
  }

  /**
   * Queries the users attached to a model group by paging.
   * 
   * @remarks
   * Queries the users attached to a model group by paging.
   * 
   * @param request - ModelRouterQueryModelGroupUsersRequest
   * @returns ModelRouterQueryModelGroupUsersResponse
   */
  async modelRouterQueryModelGroupUsers(groupId: string, request: $_model.ModelRouterQueryModelGroupUsersRequest): Promise<$_model.ModelRouterQueryModelGroupUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryModelGroupUsersWithOptions(groupId, request, headers, runtime);
  }

  /**
   * Queries the bound groups and models by API key.
   * 
   * @remarks
   * Queries the bound groups and models by API key.
   * 
   * @param request - ModelRouterQueryModelGroupsByApiKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryModelGroupsByApiKeyResponse
   */
  async modelRouterQueryModelGroupsByApiKeyWithOptions(id: string, request: $_model.ModelRouterQueryModelGroupsByApiKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryModelGroupsByApiKeyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterQueryModelGroupsByApiKey",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/apikeys/${$dara.URL.percentEncode(id)}/model-groups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryModelGroupsByApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryModelGroupsByApiKeyResponse({}));
  }

  /**
   * Queries the bound groups and models by API key.
   * 
   * @remarks
   * Queries the bound groups and models by API key.
   * 
   * @param request - ModelRouterQueryModelGroupsByApiKeyRequest
   * @returns ModelRouterQueryModelGroupsByApiKeyResponse
   */
  async modelRouterQueryModelGroupsByApiKey(id: string, request: $_model.ModelRouterQueryModelGroupsByApiKeyRequest): Promise<$_model.ModelRouterQueryModelGroupsByApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryModelGroupsByApiKeyWithOptions(id, request, headers, runtime);
  }

  /**
   * Model management/Get model list
   * 
   * @param request - ModelRouterQueryModelListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryModelListResponse
   */
  async modelRouterQueryModelListWithOptions(request: $_model.ModelRouterQueryModelListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryModelListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupBy)) {
      query["groupBy"] = request.groupBy;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.modelType)) {
      query["modelType"] = request.modelType;
    }

    if (!$dara.isNull(request.needTotalCount)) {
      query["needTotalCount"] = request.needTotalCount;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
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
      action: "ModelRouterQueryModelList",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/models`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryModelListResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryModelListResponse({}));
  }

  /**
   * Model management/Get model list
   * 
   * @param request - ModelRouterQueryModelListRequest
   * @returns ModelRouterQueryModelListResponse
   */
  async modelRouterQueryModelList(request: $_model.ModelRouterQueryModelListRequest): Promise<$_model.ModelRouterQueryModelListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryModelListWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of Nacos service providers through Nacos configuration.
   * 
   * @param request - ModelRouterQueryNacosProvidersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryNacosProvidersResponse
   */
  async modelRouterQueryNacosProvidersWithOptions(request: $_model.ModelRouterQueryNacosProvidersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryNacosProvidersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupBy)) {
      query["groupBy"] = request.groupBy;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.needTotalCount)) {
      query["needTotalCount"] = request.needTotalCount;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterQueryNacosProviders",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/nacos/providers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryNacosProvidersResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryNacosProvidersResponse({}));
  }

  /**
   * Queries the list of Nacos service providers through Nacos configuration.
   * 
   * @param request - ModelRouterQueryNacosProvidersRequest
   * @returns ModelRouterQueryNacosProvidersResponse
   */
  async modelRouterQueryNacosProviders(request: $_model.ModelRouterQueryNacosProvidersRequest): Promise<$_model.ModelRouterQueryNacosProvidersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryNacosProvidersWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of tags from Nacos.
   * 
   * @param request - ModelRouterQueryNacosTagsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryNacosTagsResponse
   */
  async modelRouterQueryNacosTagsWithOptions(request: $_model.ModelRouterQueryNacosTagsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryNacosTagsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configType)) {
      query["configType"] = request.configType;
    }

    if (!$dara.isNull(request.groupBy)) {
      query["groupBy"] = request.groupBy;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.needTotalCount)) {
      query["needTotalCount"] = request.needTotalCount;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterQueryNacosTags",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/nacos/tags`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryNacosTagsResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryNacosTagsResponse({}));
  }

  /**
   * Retrieves a list of tags from Nacos.
   * 
   * @param request - ModelRouterQueryNacosTagsRequest
   * @returns ModelRouterQueryNacosTagsResponse
   */
  async modelRouterQueryNacosTags(request: $_model.ModelRouterQueryNacosTagsRequest): Promise<$_model.ModelRouterQueryNacosTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryNacosTagsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves observation chart data for model monitoring.
   * 
   * @param request - ModelRouterQueryObservationChartsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryObservationChartsResponse
   */
  async modelRouterQueryObservationChartsWithOptions(request: $_model.ModelRouterQueryObservationChartsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryObservationChartsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKeyId)) {
      query["apiKeyId"] = request.apiKeyId;
    }

    if (!$dara.isNull(request.clientId)) {
      query["clientId"] = request.clientId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.memberUserIds)) {
      query["memberUserIds"] = request.memberUserIds;
    }

    if (!$dara.isNull(request.modelId)) {
      query["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.timeRange)) {
      query["timeRange"] = request.timeRange;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterQueryObservationCharts",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/observation/charts`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryObservationChartsResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryObservationChartsResponse({}));
  }

  /**
   * Retrieves observation chart data for model monitoring.
   * 
   * @param request - ModelRouterQueryObservationChartsRequest
   * @returns ModelRouterQueryObservationChartsResponse
   */
  async modelRouterQueryObservationCharts(request: $_model.ModelRouterQueryObservationChartsRequest): Promise<$_model.ModelRouterQueryObservationChartsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryObservationChartsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of model observation logs.
   * 
   * @param request - ModelRouterQueryObservationLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryObservationLogsResponse
   */
  async modelRouterQueryObservationLogsWithOptions(request: $_model.ModelRouterQueryObservationLogsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryObservationLogsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKeyId)) {
      query["apiKeyId"] = request.apiKeyId;
    }

    if (!$dara.isNull(request.clientId)) {
      query["clientId"] = request.clientId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.groupBy)) {
      query["groupBy"] = request.groupBy;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.memberUserIds)) {
      query["memberUserIds"] = request.memberUserIds;
    }

    if (!$dara.isNull(request.modelId)) {
      query["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.needTotalCount)) {
      query["needTotalCount"] = request.needTotalCount;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.timeRange)) {
      query["timeRange"] = request.timeRange;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterQueryObservationLogs",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/observation/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryObservationLogsResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryObservationLogsResponse({}));
  }

  /**
   * Retrieves a list of model observation logs.
   * 
   * @param request - ModelRouterQueryObservationLogsRequest
   * @returns ModelRouterQueryObservationLogsResponse
   */
  async modelRouterQueryObservationLogs(request: $_model.ModelRouterQueryObservationLogsRequest): Promise<$_model.ModelRouterQueryObservationLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryObservationLogsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves observability metric data for models.
   * 
   * @param request - ModelRouterQueryObservationMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryObservationMetricsResponse
   */
  async modelRouterQueryObservationMetricsWithOptions(request: $_model.ModelRouterQueryObservationMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryObservationMetricsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKeyId)) {
      query["apiKeyId"] = request.apiKeyId;
    }

    if (!$dara.isNull(request.clientId)) {
      query["clientId"] = request.clientId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.groupBy)) {
      query["groupBy"] = request.groupBy;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.memberUserIds)) {
      query["memberUserIds"] = request.memberUserIds;
    }

    if (!$dara.isNull(request.modelId)) {
      query["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.needTotalCount)) {
      query["needTotalCount"] = request.needTotalCount;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.timeRange)) {
      query["timeRange"] = request.timeRange;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterQueryObservationMetrics",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/observation/metrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryObservationMetricsResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryObservationMetricsResponse({}));
  }

  /**
   * Retrieves observability metric data for models.
   * 
   * @param request - ModelRouterQueryObservationMetricsRequest
   * @returns ModelRouterQueryObservationMetricsResponse
   */
  async modelRouterQueryObservationMetrics(request: $_model.ModelRouterQueryObservationMetricsRequest): Promise<$_model.ModelRouterQueryObservationMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryObservationMetricsWithOptions(request, headers, runtime);
  }

  /**
   * Queries usage details in batches for usage management.
   * 
   * @param request - ModelRouterQueryUsageBreakdownRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryUsageBreakdownResponse
   */
  async modelRouterQueryUsageBreakdownWithOptions(request: $_model.ModelRouterQueryUsageBreakdownRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryUsageBreakdownResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKeyId)) {
      query["apiKeyId"] = request.apiKeyId;
    }

    if (!$dara.isNull(request.clientId)) {
      query["clientId"] = request.clientId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.granularity)) {
      query["granularity"] = request.granularity;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.memberUserIds)) {
      query["memberUserIds"] = request.memberUserIds;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterQueryUsageBreakdown",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/usage/breakdown`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryUsageBreakdownResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryUsageBreakdownResponse({}));
  }

  /**
   * Queries usage details in batches for usage management.
   * 
   * @param request - ModelRouterQueryUsageBreakdownRequest
   * @returns ModelRouterQueryUsageBreakdownResponse
   */
  async modelRouterQueryUsageBreakdown(request: $_model.ModelRouterQueryUsageBreakdownRequest): Promise<$_model.ModelRouterQueryUsageBreakdownResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryUsageBreakdownWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of users.
   * 
   * @remarks
   * Queries the list of users.
   * 
   * @param request - ModelRouterQueryUserListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterQueryUserListResponse
   */
  async modelRouterQueryUserListWithOptions(request: $_model.ModelRouterQueryUserListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterQueryUserListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterQueryUserList",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/users`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterQueryUserListResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterQueryUserListResponse({}));
  }

  /**
   * Queries the list of users.
   * 
   * @remarks
   * Queries the list of users.
   * 
   * @param request - ModelRouterQueryUserListRequest
   * @returns ModelRouterQueryUserListResponse
   */
  async modelRouterQueryUserList(request: $_model.ModelRouterQueryUserListRequest): Promise<$_model.ModelRouterQueryUserListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterQueryUserListWithOptions(request, headers, runtime);
  }

  /**
   * Resets the authorization of a member to inherit from the organization.
   * 
   * @param request - ModelRouterResetMemberAuthorizationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterResetMemberAuthorizationResponse
   */
  async modelRouterResetMemberAuthorizationWithOptions(clientId: string, id: string, request: $_model.ModelRouterResetMemberAuthorizationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterResetMemberAuthorizationResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterResetMemberAuthorization",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(clientId)}/members/${$dara.URL.percentEncode(id)}/authorization`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterResetMemberAuthorizationResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterResetMemberAuthorizationResponse({}));
  }

  /**
   * Resets the authorization of a member to inherit from the organization.
   * 
   * @param request - ModelRouterResetMemberAuthorizationRequest
   * @returns ModelRouterResetMemberAuthorizationResponse
   */
  async modelRouterResetMemberAuthorization(clientId: string, id: string, request: $_model.ModelRouterResetMemberAuthorizationRequest): Promise<$_model.ModelRouterResetMemberAuthorizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterResetMemberAuthorizationWithOptions(clientId, id, request, headers, runtime);
  }

  /**
   * Flow control management / Save flow control configuration
   * 
   * @param request - ModelRouterSaveFlowConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterSaveFlowConfigResponse
   */
  async modelRouterSaveFlowConfigWithOptions(request: $_model.ModelRouterSaveFlowConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterSaveFlowConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.rpm)) {
      body["rpm"] = request.rpm;
    }

    if (!$dara.isNull(request.smoothFlowEnabled)) {
      body["smoothFlowEnabled"] = request.smoothFlowEnabled;
    }

    if (!$dara.isNull(request.tpm)) {
      body["tpm"] = request.tpm;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterSaveFlowConfig",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/flow-config`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterSaveFlowConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterSaveFlowConfigResponse({}));
  }

  /**
   * Flow control management / Save flow control configuration
   * 
   * @param request - ModelRouterSaveFlowConfigRequest
   * @returns ModelRouterSaveFlowConfigResponse
   */
  async modelRouterSaveFlowConfig(request: $_model.ModelRouterSaveFlowConfigRequest): Promise<$_model.ModelRouterSaveFlowConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterSaveFlowConfigWithOptions(request, headers, runtime);
  }

  /**
   * 组织管理/部门树搜索定位
   * 
   * @param request - ModelRouterSearchClientTreeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterSearchClientTreeResponse
   */
  async modelRouterSearchClientTreeWithOptions(request: $_model.ModelRouterSearchClientTreeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterSearchClientTreeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterSearchClientTree",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/tree/search`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterSearchClientTreeResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterSearchClientTreeResponse({}));
  }

  /**
   * 组织管理/部门树搜索定位
   * 
   * @param request - ModelRouterSearchClientTreeRequest
   * @returns ModelRouterSearchClientTreeResponse
   */
  async modelRouterSearchClientTree(request: $_model.ModelRouterSearchClientTreeRequest): Promise<$_model.ModelRouterSearchClientTreeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterSearchClientTreeWithOptions(request, headers, runtime);
  }

  /**
   * Sets the member authorization model for an organization.
   * 
   * @param request - ModelRouterSetMemberAuthorizationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterSetMemberAuthorizationResponse
   */
  async modelRouterSetMemberAuthorizationWithOptions(clientId: string, id: string, request: $_model.ModelRouterSetMemberAuthorizationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterSetMemberAuthorizationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowedModelGroupConfig)) {
      body["allowedModelGroupConfig"] = request.allowedModelGroupConfig;
    }

    if (!$dara.isNull(request.allowedModels)) {
      body["allowedModels"] = request.allowedModels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterSetMemberAuthorization",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(clientId)}/members/${$dara.URL.percentEncode(id)}/authorization`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterSetMemberAuthorizationResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterSetMemberAuthorizationResponse({}));
  }

  /**
   * Sets the member authorization model for an organization.
   * 
   * @param request - ModelRouterSetMemberAuthorizationRequest
   * @returns ModelRouterSetMemberAuthorizationResponse
   */
  async modelRouterSetMemberAuthorization(clientId: string, id: string, request: $_model.ModelRouterSetMemberAuthorizationRequest): Promise<$_model.ModelRouterSetMemberAuthorizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterSetMemberAuthorizationWithOptions(clientId, id, request, headers, runtime);
  }

  /**
   * Sets user roles or changes the department to which a user belongs.
   * 
   * @remarks
   * Sets user roles or changes the department to which a user belongs.
   * 
   * @param request - ModelRouterSetUserRolesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterSetUserRolesResponse
   */
  async modelRouterSetUserRolesWithOptions(id: string, request: $_model.ModelRouterSetUserRolesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterSetUserRolesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.departmentRoles)) {
      body["departmentRoles"] = request.departmentRoles;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterSetUserRoles",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/users/${$dara.URL.percentEncode(id)}/roles`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterSetUserRolesResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterSetUserRolesResponse({}));
  }

  /**
   * Sets user roles or changes the department to which a user belongs.
   * 
   * @remarks
   * Sets user roles or changes the department to which a user belongs.
   * 
   * @param request - ModelRouterSetUserRolesRequest
   * @returns ModelRouterSetUserRolesResponse
   */
  async modelRouterSetUserRoles(id: string, request: $_model.ModelRouterSetUserRolesRequest): Promise<$_model.ModelRouterSetUserRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterSetUserRolesWithOptions(id, request, headers, runtime);
  }

  /**
   * 组织管理/停止成员订阅
   * 
   * @param request - ModelRouterStopMemberSubscriptionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterStopMemberSubscriptionResponse
   */
  async modelRouterStopMemberSubscriptionWithOptions(clientId: string, id: string, request: $_model.ModelRouterStopMemberSubscriptionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterStopMemberSubscriptionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.balanceType)) {
      body["balanceType"] = request.balanceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterStopMemberSubscription",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(clientId)}/members/${$dara.URL.percentEncode(id)}/balance/subscription/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterStopMemberSubscriptionResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterStopMemberSubscriptionResponse({}));
  }

  /**
   * 组织管理/停止成员订阅
   * 
   * @param request - ModelRouterStopMemberSubscriptionRequest
   * @returns ModelRouterStopMemberSubscriptionResponse
   */
  async modelRouterStopMemberSubscription(clientId: string, id: string, request: $_model.ModelRouterStopMemberSubscriptionRequest): Promise<$_model.ModelRouterStopMemberSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterStopMemberSubscriptionWithOptions(clientId, id, request, headers, runtime);
  }

  /**
   * Stops a periodic recharge subscription for customer management.
   * 
   * @param request - ModelRouterStopSubscriptionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterStopSubscriptionResponse
   */
  async modelRouterStopSubscriptionWithOptions(id: string, request: $_model.ModelRouterStopSubscriptionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterStopSubscriptionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.balanceType)) {
      body["balanceType"] = request.balanceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterStopSubscription",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(id)}/balance/subscription/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterStopSubscriptionResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterStopSubscriptionResponse({}));
  }

  /**
   * Stops a periodic recharge subscription for customer management.
   * 
   * @param request - ModelRouterStopSubscriptionRequest
   * @returns ModelRouterStopSubscriptionResponse
   */
  async modelRouterStopSubscription(id: string, request: $_model.ModelRouterStopSubscriptionRequest): Promise<$_model.ModelRouterStopSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterStopSubscriptionWithOptions(id, request, headers, runtime);
  }

  /**
   * 组织管理/部门向成员转账
   * 
   * @param request - ModelRouterTransferToMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterTransferToMemberResponse
   */
  async modelRouterTransferToMemberWithOptions(clientId: string, id: string, request: $_model.ModelRouterTransferToMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterTransferToMemberResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.amount)) {
      body["amount"] = request.amount;
    }

    if (!$dara.isNull(request.balanceType)) {
      body["balanceType"] = request.balanceType;
    }

    if (!$dara.isNull(request.idempotencyKey)) {
      body["idempotencyKey"] = request.idempotencyKey;
    }

    if (!$dara.isNull(request.monthlyQuota)) {
      body["monthlyQuota"] = request.monthlyQuota;
    }

    if (!$dara.isNull(request.remark)) {
      body["remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterTransferToMember",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(clientId)}/members/${$dara.URL.percentEncode(id)}/transfer`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterTransferToMemberResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterTransferToMemberResponse({}));
  }

  /**
   * 组织管理/部门向成员转账
   * 
   * @param request - ModelRouterTransferToMemberRequest
   * @returns ModelRouterTransferToMemberResponse
   */
  async modelRouterTransferToMember(clientId: string, id: string, request: $_model.ModelRouterTransferToMemberRequest): Promise<$_model.ModelRouterTransferToMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterTransferToMemberWithOptions(clientId, id, request, headers, runtime);
  }

  /**
   * Billing management/Update billing rules
   * 
   * @param request - ModelRouterUpdateBillingRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterUpdateBillingRuleResponse
   */
  async modelRouterUpdateBillingRuleWithOptions(id: string, request: $_model.ModelRouterUpdateBillingRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterUpdateBillingRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billingType)) {
      body["billingType"] = request.billingType;
    }

    if (!$dara.isNull(request.effectiveTime)) {
      body["effectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.expireTime)) {
      body["expireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.pricingConfig)) {
      body["pricingConfig"] = request.pricingConfig;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.version)) {
      body["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterUpdateBillingRule",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/billing/rules/${$dara.URL.percentEncode(id)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterUpdateBillingRuleResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterUpdateBillingRuleResponse({}));
  }

  /**
   * Billing management/Update billing rules
   * 
   * @param request - ModelRouterUpdateBillingRuleRequest
   * @returns ModelRouterUpdateBillingRuleResponse
   */
  async modelRouterUpdateBillingRule(id: string, request: $_model.ModelRouterUpdateBillingRuleRequest): Promise<$_model.ModelRouterUpdateBillingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterUpdateBillingRuleWithOptions(id, request, headers, runtime);
  }

  /**
   * Updates customer information.
   * 
   * @param request - ModelRouterUpdateClientRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterUpdateClientResponse
   */
  async modelRouterUpdateClientWithOptions(id: string, request: $_model.ModelRouterUpdateClientRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterUpdateClientResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.address)) {
      body["address"] = request.address;
    }

    if (!$dara.isNull(request.allowedModelGroupConfig)) {
      body["allowedModelGroupConfig"] = request.allowedModelGroupConfig;
    }

    if (!$dara.isNull(request.allowedModels)) {
      body["allowedModels"] = request.allowedModels;
    }

    if (!$dara.isNull(request.contact)) {
      body["contact"] = request.contact;
    }

    if (!$dara.isNull(request.discount)) {
      body["discount"] = request.discount;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.remark)) {
      body["remark"] = request.remark;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterUpdateClient",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/clients/${$dara.URL.percentEncode(id)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterUpdateClientResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterUpdateClientResponse({}));
  }

  /**
   * Updates customer information.
   * 
   * @param request - ModelRouterUpdateClientRequest
   * @returns ModelRouterUpdateClientResponse
   */
  async modelRouterUpdateClient(id: string, request: $_model.ModelRouterUpdateClientRequest): Promise<$_model.ModelRouterUpdateClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterUpdateClientWithOptions(id, request, headers, runtime);
  }

  /**
   * Conversation management / Update conversation
   * 
   * @param request - ModelRouterUpdateConversationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterUpdateConversationResponse
   */
  async modelRouterUpdateConversationWithOptions(id: string, request: $_model.ModelRouterUpdateConversationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterUpdateConversationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chatData)) {
      body["chatData"] = request.chatData;
    }

    if (!$dara.isNull(request.messageCount)) {
      body["messageCount"] = request.messageCount;
    }

    if (!$dara.isNull(request.modelIds)) {
      body["modelIds"] = request.modelIds;
    }

    if (!$dara.isNull(request.title)) {
      body["title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterUpdateConversation",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/conversations/${$dara.URL.percentEncode(id)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterUpdateConversationResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterUpdateConversationResponse({}));
  }

  /**
   * Conversation management / Update conversation
   * 
   * @param request - ModelRouterUpdateConversationRequest
   * @returns ModelRouterUpdateConversationResponse
   */
  async modelRouterUpdateConversation(id: string, request: $_model.ModelRouterUpdateConversationRequest): Promise<$_model.ModelRouterUpdateConversationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterUpdateConversationWithOptions(id, request, headers, runtime);
  }

  /**
   * Model Management / Update Model
   * 
   * @param request - ModelRouterUpdateModelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterUpdateModelResponse
   */
  async modelRouterUpdateModelWithOptions(id: string, request: $_model.ModelRouterUpdateModelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterUpdateModelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKey)) {
      body["apiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.baseUrl)) {
      body["baseUrl"] = request.baseUrl;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.maxInputLength)) {
      body["maxInputLength"] = request.maxInputLength;
    }

    if (!$dara.isNull(request.maxOutputLength)) {
      body["maxOutputLength"] = request.maxOutputLength;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.modelType)) {
      body["modelType"] = request.modelType;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.symbol)) {
      body["symbol"] = request.symbol;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterUpdateModel",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/models/${$dara.URL.percentEncode(id)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterUpdateModelResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterUpdateModelResponse({}));
  }

  /**
   * Model Management / Update Model
   * 
   * @param request - ModelRouterUpdateModelRequest
   * @returns ModelRouterUpdateModelResponse
   */
  async modelRouterUpdateModel(id: string, request: $_model.ModelRouterUpdateModelRequest): Promise<$_model.ModelRouterUpdateModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterUpdateModelWithOptions(id, request, headers, runtime);
  }

  /**
   * Edits a manual model group.
   * 
   * @remarks
   * Edits a manual group.
   * 
   * @param request - ModelRouterUpdateModelGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterUpdateModelGroupResponse
   */
  async modelRouterUpdateModelGroupWithOptions(groupId: string, request: $_model.ModelRouterUpdateModelGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterUpdateModelGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.modelList)) {
      body["modelList"] = request.modelList;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterUpdateModelGroup",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/model-groups/${$dara.URL.percentEncode(groupId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterUpdateModelGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterUpdateModelGroupResponse({}));
  }

  /**
   * Edits a manual model group.
   * 
   * @remarks
   * Edits a manual group.
   * 
   * @param request - ModelRouterUpdateModelGroupRequest
   * @returns ModelRouterUpdateModelGroupResponse
   */
  async modelRouterUpdateModelGroup(groupId: string, request: $_model.ModelRouterUpdateModelGroupRequest): Promise<$_model.ModelRouterUpdateModelGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterUpdateModelGroupWithOptions(groupId, request, headers, runtime);
  }

  /**
   * Updates user information.
   * 
   * @remarks
   * Updates user information.
   * 
   * @param request - ModelRouterUpdateUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelRouterUpdateUserResponse
   */
  async modelRouterUpdateUserWithOptions(id: string, request: $_model.ModelRouterUpdateUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModelRouterUpdateUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.phone)) {
      body["phone"] = request.phone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelRouterUpdateUser",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/modelRouter/open/users/${$dara.URL.percentEncode(id)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelRouterUpdateUserResponse>(await this.callApi(params, req, runtime), new $_model.ModelRouterUpdateUserResponse({}));
  }

  /**
   * Updates user information.
   * 
   * @remarks
   * Updates user information.
   * 
   * @param request - ModelRouterUpdateUserRequest
   * @returns ModelRouterUpdateUserResponse
   */
  async modelRouterUpdateUser(id: string, request: $_model.ModelRouterUpdateUserRequest): Promise<$_model.ModelRouterUpdateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modelRouterUpdateUserWithOptions(id, request, headers, runtime);
  }

  /**
   * Personalized text-to-image: Create image inference tasks using a pre-trained model.
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
   * Personalized text-to-image: Create image inference tasks using a pre-trained model.
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
   * Retrieves the content of an image from the personalized text-to-image service using its unique image ID.
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
   * Retrieves the content of an image from the personalized text-to-image service using its unique image ID.
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
   * Queries the status of a personalized text-to-image inference job.
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
   * Queries the status of a personalized text-to-image inference job.
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
   * Creates an inference job to generate images based on a personalized text-to-image model.
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
   * Creates an inference job to generate images based on a personalized text-to-image model.
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
   * Personalized text-to-image: Create a model training task.
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
   * Personalized text-to-image: Create a model training task.
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
   * Retrieves the binary data of an image generated by the personalized text-to-image service.
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
   * Retrieves the binary data of an image generated by the personalized text-to-image service.
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
   * Retrieves the status and results of a Personalizedtxt2img inference job.
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
   * Retrieves the status and results of a Personalizedtxt2img inference job.
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
   * Your personalized model training tasks: image generation and query models.
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
   * Your personalized model training tasks: image generation and query models.
   * @returns Personalizedtxt2imgQueryModelTrainJobListResponse
   */
  async personalizedtxt2imgQueryModelTrainJobList(): Promise<$_model.Personalizedtxt2imgQueryModelTrainJobListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.personalizedtxt2imgQueryModelTrainJobListWithOptions(headers, runtime);
  }

  /**
   * Queries the training status of a personalized text-to-image model.
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
   * Queries the training status of a personalized text-to-image model.
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
   * Queries information about an application access ID (appkey).
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
   * Queries information about an application access ID (appkey).
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
   * Alibaba Cloud console / Project list
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
   * Alibaba Cloud console / Project list
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
   * Alibaba Cloud console / Project List
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
   * Alibaba Cloud console / Project List
   * @returns QueryProjectListResponse
   */
  async queryProjectList(): Promise<$_model.QueryProjectListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryProjectListWithOptions(headers, runtime);
  }

  /**
   * Alibaba Cloud Console / Purchased Services
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
   * Alibaba Cloud Console / Purchased Services
   * @returns QueryPurchasedServiceResponse
   */
  async queryPurchasedService(): Promise<$_model.QueryPurchasedServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryPurchasedServiceWithOptions(headers, runtime);
  }

  /**
   * Alibaba Cloud Console / Update project information
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
   * Alibaba Cloud Console / Update project information
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
