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
    this._endpoint = this.getEndpoint("paillmtrace", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Creates a trace evaluation task. The system will sample some data from the user\\"s trace data based on the task\\"s configuration. Then, an LLM is used to evaluate the performance of these traces, and the evaluation results are recorded.
   * 
   * @param tmpReq - CreateOnlineEvalTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOnlineEvalTaskResponse
   */
  async createOnlineEvalTaskWithOptions(tmpReq: $_model.CreateOnlineEvalTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOnlineEvalTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateOnlineEvalTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      query["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOnlineEvalTask",
      version: "2024-03-11",
      protocol: "HTTPS",
      pathname: `/api/v1/PAILLMTrace/onlineevaltasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOnlineEvalTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateOnlineEvalTaskResponse({}));
  }

  /**
   * Creates a trace evaluation task. The system will sample some data from the user\\"s trace data based on the task\\"s configuration. Then, an LLM is used to evaluate the performance of these traces, and the evaluation results are recorded.
   * 
   * @param request - CreateOnlineEvalTaskRequest
   * @returns CreateOnlineEvalTaskResponse
   */
  async createOnlineEvalTask(request: $_model.CreateOnlineEvalTaskRequest): Promise<$_model.CreateOnlineEvalTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createOnlineEvalTaskWithOptions(request, headers, runtime);
  }

  /**
   * Creates a service-linked role required for the PaiLLMTrace service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceIdentityRoleResponse
   */
  async createServiceIdentityRoleWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceIdentityRoleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceIdentityRole",
      version: "2024-03-11",
      protocol: "HTTPS",
      pathname: `/api/v1/PAILLMTrace/ServiceIdentityRole`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceIdentityRoleResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceIdentityRoleResponse({}));
  }

  /**
   * Creates a service-linked role required for the PaiLLMTrace service.
   * @returns CreateServiceIdentityRoleResponse
   */
  async createServiceIdentityRole(): Promise<$_model.CreateServiceIdentityRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceIdentityRoleWithOptions(headers, runtime);
  }

  /**
   * Delete an online evaluation task
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOnlineEvalTaskResponse
   */
  async deleteOnlineEvalTaskWithOptions(TaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOnlineEvalTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOnlineEvalTask",
      version: "2024-03-11",
      protocol: "HTTPS",
      pathname: `/api/v1/PAILLMTrace/onlineevaltasks/${$dara.URL.percentEncode(TaskId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteOnlineEvalTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteOnlineEvalTaskResponse({}));
  }

  /**
   * Delete an online evaluation task
   * @returns DeleteOnlineEvalTaskResponse
   */
  async deleteOnlineEvalTask(TaskId: string): Promise<$_model.DeleteOnlineEvalTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteOnlineEvalTaskWithOptions(TaskId, headers, runtime);
  }

  /**
   * Evaluates a specified piece of trace data.
   * 
   * @param request - EvaluateTraceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EvaluateTraceResponse
   */
  async evaluateTraceWithOptions(TraceId: string, request: $_model.EvaluateTraceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EvaluateTraceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.evaluationConfig)) {
      body["EvaluationConfig"] = request.evaluationConfig;
    }

    if (!$dara.isNull(request.evaluationId)) {
      body["EvaluationId"] = request.evaluationId;
    }

    if (!$dara.isNull(request.maxTime)) {
      body["MaxTime"] = request.maxTime;
    }

    if (!$dara.isNull(request.minTime)) {
      body["MinTime"] = request.minTime;
    }

    if (!$dara.isNull(request.modelConfig)) {
      body["ModelConfig"] = request.modelConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EvaluateTrace",
      version: "2024-03-11",
      protocol: "HTTPS",
      pathname: `/api/v1/PAILLMTrace/eval/trace/${$dara.URL.percentEncode(TraceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EvaluateTraceResponse>(await this.callApi(params, req, runtime), new $_model.EvaluateTraceResponse({}));
  }

  /**
   * Evaluates a specified piece of trace data.
   * 
   * @param request - EvaluateTraceRequest
   * @returns EvaluateTraceResponse
   */
  async evaluateTrace(TraceId: string, request: $_model.EvaluateTraceRequest): Promise<$_model.EvaluateTraceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.evaluateTraceWithOptions(TraceId, request, headers, runtime);
  }

  /**
   * Get the content of prompt templates used for evaluation
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEvaluationTemplatesResponse
   */
  async getEvaluationTemplatesWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEvaluationTemplatesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEvaluationTemplates",
      version: "2024-03-11",
      protocol: "HTTPS",
      pathname: `/api/v1/PAILLMTrace/eval/templates`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEvaluationTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.GetEvaluationTemplatesResponse({}));
  }

  /**
   * Get the content of prompt templates used for evaluation
   * @returns GetEvaluationTemplatesResponse
   */
  async getEvaluationTemplates(): Promise<$_model.GetEvaluationTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEvaluationTemplatesWithOptions(headers, runtime);
  }

  /**
   * Get the details of an online evaluation task
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOnlineEvalTaskResponse
   */
  async getOnlineEvalTaskWithOptions(TaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetOnlineEvalTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOnlineEvalTask",
      version: "2024-03-11",
      protocol: "HTTPS",
      pathname: `/api/v1/PAILLMTrace/onlineevaltasks/${$dara.URL.percentEncode(TaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOnlineEvalTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetOnlineEvalTaskResponse({}));
  }

  /**
   * Get the details of an online evaluation task
   * @returns GetOnlineEvalTaskResponse
   */
  async getOnlineEvalTask(TaskId: string): Promise<$_model.GetOnlineEvalTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOnlineEvalTaskWithOptions(TaskId, headers, runtime);
  }

  /**
   * Obtains the information related to the service-linked role.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceIdentityRoleResponse
   */
  async getServiceIdentityRoleWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceIdentityRoleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceIdentityRole",
      version: "2024-03-11",
      protocol: "HTTPS",
      pathname: `/api/v1/PAILLMTrace/ServiceIdentityRole`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceIdentityRoleResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceIdentityRoleResponse({}));
  }

  /**
   * Obtains the information related to the service-linked role.
   * @returns GetServiceIdentityRoleResponse
   */
  async getServiceIdentityRole(): Promise<$_model.GetServiceIdentityRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceIdentityRoleWithOptions(headers, runtime);
  }

  /**
   * Obtains the token used in the Xtrace service and the endpoint required for uploading trace data.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetXtraceTokenResponse
   */
  async getXtraceTokenWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetXtraceTokenResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetXtraceToken",
      version: "2024-03-11",
      protocol: "HTTPS",
      pathname: `/api/v1/PAILLMTrace/XtraceToken`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetXtraceTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetXtraceTokenResponse({}));
  }

  /**
   * Obtains the token used in the Xtrace service and the endpoint required for uploading trace data.
   * @returns GetXtraceTokenResponse
   */
  async getXtraceToken(): Promise<$_model.GetXtraceTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getXtraceTokenWithOptions(headers, runtime);
  }

  /**
   * Obtains the list of results for trace evaluation. This API is used together with EvaluateTrace. EvaluateTrace starts the evaluation. ListEvalResults obtains the results.
   * 
   * @param tmpReq - ListEvalResultsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEvalResultsResponse
   */
  async listEvalResultsWithOptions(tmpReq: $_model.ListEvalResultsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListEvalResultsResponse> {
    tmpReq.validate();
    let request = new $_model.ListEvalResultsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.recordIds)) {
      request.recordIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recordIds, "RecordIds", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.evaluationId)) {
      query["EvaluationId"] = request.evaluationId;
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

    if (!$dara.isNull(request.recordIdsShrink)) {
      query["RecordIds"] = request.recordIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEvalResults",
      version: "2024-03-11",
      protocol: "HTTPS",
      pathname: `/api/v1/PAILLMTrace/eval/results`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEvalResultsResponse>(await this.callApi(params, req, runtime), new $_model.ListEvalResultsResponse({}));
  }

  /**
   * Obtains the list of results for trace evaluation. This API is used together with EvaluateTrace. EvaluateTrace starts the evaluation. ListEvalResults obtains the results.
   * 
   * @param request - ListEvalResultsRequest
   * @returns ListEvalResultsResponse
   */
  async listEvalResults(request: $_model.ListEvalResultsRequest): Promise<$_model.ListEvalResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEvalResultsWithOptions(request, headers, runtime);
  }

  /**
   * List the results of online evaluation tasks that meet the criteria
   * 
   * @param tmpReq - ListOnlineEvalTaskResultsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOnlineEvalTaskResultsResponse
   */
  async listOnlineEvalTaskResultsWithOptions(tmpReq: $_model.ListOnlineEvalTaskResultsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListOnlineEvalTaskResultsResponse> {
    tmpReq.validate();
    let request = new $_model.ListOnlineEvalTaskResultsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.traceIds)) {
      request.traceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.traceIds, "TraceIds", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.evaluationId)) {
      query["EvaluationId"] = request.evaluationId;
    }

    if (!$dara.isNull(request.mostRecentResultsOnly)) {
      query["MostRecentResultsOnly"] = request.mostRecentResultsOnly;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.traceIdsShrink)) {
      query["TraceIds"] = request.traceIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOnlineEvalTaskResults",
      version: "2024-03-11",
      protocol: "HTTPS",
      pathname: `/api/v1/PAILLMTrace/onlineevaltaskresults`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOnlineEvalTaskResultsResponse>(await this.callApi(params, req, runtime), new $_model.ListOnlineEvalTaskResultsResponse({}));
  }

  /**
   * List the results of online evaluation tasks that meet the criteria
   * 
   * @param request - ListOnlineEvalTaskResultsRequest
   * @returns ListOnlineEvalTaskResultsResponse
   */
  async listOnlineEvalTaskResults(request: $_model.ListOnlineEvalTaskResultsRequest): Promise<$_model.ListOnlineEvalTaskResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOnlineEvalTaskResultsWithOptions(request, headers, runtime);
  }

  /**
   * View online evaluation tasks that meet the criteria
   * 
   * @param request - ListOnlineEvalTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOnlineEvalTasksResponse
   */
  async listOnlineEvalTasksWithOptions(request: $_model.ListOnlineEvalTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListOnlineEvalTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxTime)) {
      query["MaxTime"] = request.maxTime;
    }

    if (!$dara.isNull(request.minTime)) {
      query["MinTime"] = request.minTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.samplingMethod)) {
      query["SamplingMethod"] = request.samplingMethod;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOnlineEvalTasks",
      version: "2024-03-11",
      protocol: "HTTPS",
      pathname: `/api/v1/PAILLMTrace/onlineevaltasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOnlineEvalTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListOnlineEvalTasksResponse({}));
  }

  /**
   * View online evaluation tasks that meet the criteria
   * 
   * @param request - ListOnlineEvalTasksRequest
   * @returns ListOnlineEvalTasksResponse
   */
  async listOnlineEvalTasks(request: $_model.ListOnlineEvalTasksRequest): Promise<$_model.ListOnlineEvalTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOnlineEvalTasksWithOptions(request, headers, runtime);
  }

  /**
   * Obtains a list of trace data based on specified criteria.
   * 
   * @param tmpReq - ListTracesDatasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTracesDatasResponse
   */
  async listTracesDatasWithOptions(tmpReq: $_model.ListTracesDatasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTracesDatasResponse> {
    tmpReq.validate();
    let request = new $_model.ListTracesDatasShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filters)) {
      request.filtersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filters, "Filters", "json");
    }

    if (!$dara.isNull(tmpReq.spanIds)) {
      request.spanIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.spanIds, "SpanIds", "simple");
    }

    if (!$dara.isNull(tmpReq.traceIds)) {
      request.traceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.traceIds, "TraceIds", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.filtersShrink)) {
      query["Filters"] = request.filtersShrink;
    }

    if (!$dara.isNull(request.hasEvents)) {
      query["HasEvents"] = request.hasEvents;
    }

    if (!$dara.isNull(request.hasStatusMessage)) {
      query["HasStatusMessage"] = request.hasStatusMessage;
    }

    if (!$dara.isNull(request.llmAppName)) {
      query["LlmAppName"] = request.llmAppName;
    }

    if (!$dara.isNull(request.maxDuration)) {
      query["MaxDuration"] = request.maxDuration;
    }

    if (!$dara.isNull(request.maxTime)) {
      query["MaxTime"] = request.maxTime;
    }

    if (!$dara.isNull(request.minDuration)) {
      query["MinDuration"] = request.minDuration;
    }

    if (!$dara.isNull(request.minTime)) {
      query["MinTime"] = request.minTime;
    }

    if (!$dara.isNull(request.opentelemetryCompatible)) {
      query["OpentelemetryCompatible"] = request.opentelemetryCompatible;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.ownerSubId)) {
      query["OwnerSubId"] = request.ownerSubId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.spanIdsShrink)) {
      query["SpanIds"] = request.spanIdsShrink;
    }

    if (!$dara.isNull(request.spanName)) {
      query["SpanName"] = request.spanName;
    }

    if (!$dara.isNull(request.traceIdsShrink)) {
      query["TraceIds"] = request.traceIdsShrink;
    }

    if (!$dara.isNull(request.traceReduceMethod)) {
      query["TraceReduceMethod"] = request.traceReduceMethod;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTracesDatas",
      version: "2024-03-11",
      protocol: "HTTPS",
      pathname: `/api/v1/PAILLMTrace/TracesDatas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTracesDatasResponse>(await this.callApi(params, req, runtime), new $_model.ListTracesDatasResponse({}));
  }

  /**
   * Obtains a list of trace data based on specified criteria.
   * 
   * @param request - ListTracesDatasRequest
   * @returns ListTracesDatasResponse
   */
  async listTracesDatas(request: $_model.ListTracesDatasRequest): Promise<$_model.ListTracesDatasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTracesDatasWithOptions(request, headers, runtime);
  }

  /**
   * Stop the execution of an online evaluation task
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopOnlineEvalTaskResponse
   */
  async stopOnlineEvalTaskWithOptions(TaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopOnlineEvalTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopOnlineEvalTask",
      version: "2024-03-11",
      protocol: "HTTPS",
      pathname: `/api/v1/PAILLMTrace/onlineevaltasks/${$dara.URL.percentEncode(TaskId)}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopOnlineEvalTaskResponse>(await this.callApi(params, req, runtime), new $_model.StopOnlineEvalTaskResponse({}));
  }

  /**
   * Stop the execution of an online evaluation task
   * @returns StopOnlineEvalTaskResponse
   */
  async stopOnlineEvalTask(TaskId: string): Promise<$_model.StopOnlineEvalTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopOnlineEvalTaskWithOptions(TaskId, headers, runtime);
  }

  /**
   * Changes the configuration of a trace evaluation task.
   * 
   * @param request - UpdateOnlineEvalTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOnlineEvalTaskResponse
   */
  async updateOnlineEvalTaskWithOptions(TaskId: string, request: $_model.UpdateOnlineEvalTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOnlineEvalTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.evaluationConfig)) {
      body["EvaluationConfig"] = request.evaluationConfig;
    }

    if (!$dara.isNull(request.filters)) {
      body["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.modelConfig)) {
      body["ModelConfig"] = request.modelConfig;
    }

    if (!$dara.isNull(request.samplingFrequencyMinutes)) {
      body["SamplingFrequencyMinutes"] = request.samplingFrequencyMinutes;
    }

    if (!$dara.isNull(request.samplingRatio)) {
      body["SamplingRatio"] = request.samplingRatio;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOnlineEvalTask",
      version: "2024-03-11",
      protocol: "HTTPS",
      pathname: `/api/v1/PAILLMTrace/onlineevaltasks/${$dara.URL.percentEncode(TaskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateOnlineEvalTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateOnlineEvalTaskResponse({}));
  }

  /**
   * Changes the configuration of a trace evaluation task.
   * 
   * @param request - UpdateOnlineEvalTaskRequest
   * @returns UpdateOnlineEvalTaskResponse
   */
  async updateOnlineEvalTask(TaskId: string, request: $_model.UpdateOnlineEvalTaskRequest): Promise<$_model.UpdateOnlineEvalTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateOnlineEvalTaskWithOptions(TaskId, request, headers, runtime);
  }

}
