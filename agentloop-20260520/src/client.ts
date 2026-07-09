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
      'cn-zhangjiakou': "agentloop.cn-zhangjiakou.aliyuncs.com",
      'cn-shenzhen': "agentloop.cn-shenzhen.aliyuncs.com",
      'cn-shanghai': "agentloop.cn-shanghai.aliyuncs.com",
      'cn-hongkong': "agentloop.cn-hongkong.aliyuncs.com",
      'cn-hangzhou': "agentloop.cn-hangzhou.aliyuncs.com",
      'cn-guangzhou': "agentloop.cn-guangzhou.aliyuncs.com",
      'cn-chengdu': "agentloop.cn-chengdu.aliyuncs.com",
      'cn-beijing': "agentloop.cn-beijing.aliyuncs.com",
      'ap-southeast-1': "agentloop.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("agentloop", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Appends structured data rows to a specified dataset without requiring the client to construct SQL statements.
   * 
   * @param request - AddDatasetDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDatasetDataResponse
   */
  async addDatasetDataWithOptions(agentSpace: string, datasetName: string, request: $_model.AddDatasetDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddDatasetDataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataArray)) {
      body["dataArray"] = request.dataArray;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDatasetData",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/dataset/${$dara.URL.percentEncode(datasetName)}/rows`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDatasetDataResponse>(await this.callApi(params, req, runtime), new $_model.AddDatasetDataResponse({}));
  }

  /**
   * Appends structured data rows to a specified dataset without requiring the client to construct SQL statements.
   * 
   * @param request - AddDatasetDataRequest
   * @returns AddDatasetDataResponse
   */
  async addDatasetData(agentSpace: string, datasetName: string, request: $_model.AddDatasetDataRequest): Promise<$_model.AddDatasetDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addDatasetDataWithOptions(agentSpace, datasetName, request, headers, runtime);
  }

  /**
   * Cancels a pipeline run.
   * 
   * @param request - CancelPipelineRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelPipelineRunResponse
   */
  async cancelPipelineRunWithOptions(agentSpace: string, pipelineName: string, runId: string, request: $_model.CancelPipelineRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelPipelineRunResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelPipelineRun",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/pipeline/${$dara.URL.percentEncode(pipelineName)}/runs/${$dara.URL.percentEncode(runId)}/cancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelPipelineRunResponse>(await this.callApi(params, req, runtime), new $_model.CancelPipelineRunResponse({}));
  }

  /**
   * Cancels a pipeline run.
   * 
   * @param request - CancelPipelineRunRequest
   * @returns CancelPipelineRunResponse
   */
  async cancelPipelineRun(agentSpace: string, pipelineName: string, runId: string, request: $_model.CancelPipelineRunRequest): Promise<$_model.CancelPipelineRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelPipelineRunWithOptions(agentSpace, pipelineName, runId, request, headers, runtime);
  }

  /**
   * Creates an AgentSpace.
   * 
   * @param request - CreateAgentSpaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAgentSpaceResponse
   */
  async createAgentSpaceWithOptions(request: $_model.CreateAgentSpaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgentSpaceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentSpace)) {
      body["agentSpace"] = request.agentSpace;
    }

    if (!$dara.isNull(request.cmsWorkspace)) {
      body["cmsWorkspace"] = request.cmsWorkspace;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.trajectoryStoreEnabled)) {
      body["trajectoryStoreEnabled"] = request.trajectoryStoreEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAgentSpace",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAgentSpaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateAgentSpaceResponse({}));
  }

  /**
   * Creates an AgentSpace.
   * 
   * @param request - CreateAgentSpaceRequest
   * @returns CreateAgentSpaceResponse
   */
  async createAgentSpace(request: $_model.CreateAgentSpaceRequest): Promise<$_model.CreateAgentSpaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAgentSpaceWithOptions(request, headers, runtime);
  }

  /**
   * Creates a context store.
   * 
   * @param request - CreateContextStoreRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateContextStoreResponse
   */
  async createContextStoreWithOptions(agentSpace: string, request: $_model.CreateContextStoreRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateContextStoreResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.contextStoreName)) {
      body["contextStoreName"] = request.contextStoreName;
    }

    if (!$dara.isNull(request.contextType)) {
      body["contextType"] = request.contextType;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateContextStore",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/contextstore`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateContextStoreResponse>(await this.callApi(params, req, runtime), new $_model.CreateContextStoreResponse({}));
  }

  /**
   * Creates a context store.
   * 
   * @param request - CreateContextStoreRequest
   * @returns CreateContextStoreResponse
   */
  async createContextStore(agentSpace: string, request: $_model.CreateContextStoreRequest): Promise<$_model.CreateContextStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createContextStoreWithOptions(agentSpace, request, headers, runtime);
  }

  /**
   * Creates an API key.
   * 
   * @param request - CreateContextStoreAPIKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateContextStoreAPIKeyResponse
   */
  async createContextStoreAPIKeyWithOptions(agentSpace: string, contextStoreName: string, request: $_model.CreateContextStoreAPIKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateContextStoreAPIKeyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateContextStoreAPIKey",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/contextstore/${$dara.URL.percentEncode(contextStoreName)}/apikey`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateContextStoreAPIKeyResponse>(await this.callApi(params, req, runtime), new $_model.CreateContextStoreAPIKeyResponse({}));
  }

  /**
   * Creates an API key.
   * 
   * @param request - CreateContextStoreAPIKeyRequest
   * @returns CreateContextStoreAPIKeyResponse
   */
  async createContextStoreAPIKey(agentSpace: string, contextStoreName: string, request: $_model.CreateContextStoreAPIKeyRequest): Promise<$_model.CreateContextStoreAPIKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createContextStoreAPIKeyWithOptions(agentSpace, contextStoreName, request, headers, runtime);
  }

  /**
   * Creates a dataset.
   * 
   * @param request - CreateDatasetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatasetResponse
   */
  async createDatasetWithOptions(agentSpace: string, request: $_model.CreateDatasetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDatasetResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetName)) {
      body["datasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.schema)) {
      body["schema"] = request.schema;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataset",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/dataset`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDatasetResponse>(await this.callApi(params, req, runtime), new $_model.CreateDatasetResponse({}));
  }

  /**
   * Creates a dataset.
   * 
   * @param request - CreateDatasetRequest
   * @returns CreateDatasetResponse
   */
  async createDataset(agentSpace: string, request: $_model.CreateDatasetRequest): Promise<$_model.CreateDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDatasetWithOptions(agentSpace, request, headers, runtime);
  }

  /**
   * Creates an evaluation task.
   * 
   * @remarks
   * Calls the CreateEvaluationTask operation to create an evaluation task in a specified AgentSpace. The server verifies AgentSpace permissions, initializes evaluation result storage, checks the uniqueness of the task name, and asynchronously creates and executes an EvaluationRun based on `taskMode` and `runStrategies`.
   * This operation is applicable to running built-in or custom evaluators on Trace, Dataset, or SLS Log data. It supports two execution strategies: historical backfill and continuous evaluation.
   * 
   * @param request - CreateEvaluationTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEvaluationTaskResponse
   */
  async createEvaluationTaskWithOptions(agentSpace: string, request: $_model.CreateEvaluationTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEvaluationTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channel)) {
      body["channel"] = request.channel;
    }

    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.dataFilter)) {
      body["dataFilter"] = request.dataFilter;
    }

    if (!$dara.isNull(request.dataType)) {
      body["dataType"] = request.dataType;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.evaluators)) {
      body["evaluators"] = request.evaluators;
    }

    if (!$dara.isNull(request.runStrategies)) {
      body["runStrategies"] = request.runStrategies;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.taskMode)) {
      body["taskMode"] = request.taskMode;
    }

    if (!$dara.isNull(request.taskName)) {
      body["taskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEvaluationTask",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/api/v1/evaluation-task/${$dara.URL.percentEncode(agentSpace)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEvaluationTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateEvaluationTaskResponse({}));
  }

  /**
   * Creates an evaluation task.
   * 
   * @remarks
   * Calls the CreateEvaluationTask operation to create an evaluation task in a specified AgentSpace. The server verifies AgentSpace permissions, initializes evaluation result storage, checks the uniqueness of the task name, and asynchronously creates and executes an EvaluationRun based on `taskMode` and `runStrategies`.
   * This operation is applicable to running built-in or custom evaluators on Trace, Dataset, or SLS Log data. It supports two execution strategies: historical backfill and continuous evaluation.
   * 
   * @param request - CreateEvaluationTaskRequest
   * @returns CreateEvaluationTaskResponse
   */
  async createEvaluationTask(agentSpace: string, request: $_model.CreateEvaluationTaskRequest): Promise<$_model.CreateEvaluationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEvaluationTaskWithOptions(agentSpace, request, headers, runtime);
  }

  /**
   * Creates an evaluator.
   * 
   * @param request - CreateEvaluatorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEvaluatorResponse
   */
  async createEvaluatorWithOptions(agentSpace: string, request: $_model.CreateEvaluatorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEvaluatorResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.annotations)) {
      body["annotations"] = request.annotations;
    }

    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.metricName)) {
      body["metricName"] = request.metricName;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.properties)) {
      body["properties"] = request.properties;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    if (!$dara.isNull(request.version)) {
      body["version"] = request.version;
    }

    if (!$dara.isNull(request.versionDescription)) {
      body["versionDescription"] = request.versionDescription;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEvaluator",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/api/v1/evaluators/${$dara.URL.percentEncode(agentSpace)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEvaluatorResponse>(await this.callApi(params, req, runtime), new $_model.CreateEvaluatorResponse({}));
  }

  /**
   * Creates an evaluator.
   * 
   * @param request - CreateEvaluatorRequest
   * @returns CreateEvaluatorResponse
   */
  async createEvaluator(agentSpace: string, request: $_model.CreateEvaluatorRequest): Promise<$_model.CreateEvaluatorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEvaluatorWithOptions(agentSpace, request, headers, runtime);
  }

  /**
   * Creates an evaluator skill.
   * 
   * @param request - CreateEvaluatorSkillRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEvaluatorSkillResponse
   */
  async createEvaluatorSkillWithOptions(name: string, request: $_model.CreateEvaluatorSkillRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEvaluatorSkillResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentSpace)) {
      query["agentSpace"] = request.agentSpace;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

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

    if (!$dara.isNull(request.skillName)) {
      body["skillName"] = request.skillName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEvaluatorSkill",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/api/v1/evaluator/${$dara.URL.percentEncode(name)}/skill`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEvaluatorSkillResponse>(await this.callApi(params, req, runtime), new $_model.CreateEvaluatorSkillResponse({}));
  }

  /**
   * Creates an evaluator skill.
   * 
   * @param request - CreateEvaluatorSkillRequest
   * @returns CreateEvaluatorSkillResponse
   */
  async createEvaluatorSkill(name: string, request: $_model.CreateEvaluatorSkillRequest): Promise<$_model.CreateEvaluatorSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEvaluatorSkillWithOptions(name, request, headers, runtime);
  }

  /**
   * Deletes an AgentSpace.
   * 
   * @param request - DeleteAgentSpaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAgentSpaceResponse
   */
  async deleteAgentSpaceWithOptions(agentSpace: string, request: $_model.DeleteAgentSpaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgentSpaceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deleteCmsWorkspace)) {
      query["deleteCmsWorkspace"] = request.deleteCmsWorkspace;
    }

    if (!$dara.isNull(request.deleteMseNamespace)) {
      query["deleteMseNamespace"] = request.deleteMseNamespace;
    }

    if (!$dara.isNull(request.deleteSlsProject)) {
      query["deleteSlsProject"] = request.deleteSlsProject;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAgentSpace",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAgentSpaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAgentSpaceResponse({}));
  }

  /**
   * Deletes an AgentSpace.
   * 
   * @param request - DeleteAgentSpaceRequest
   * @returns DeleteAgentSpaceResponse
   */
  async deleteAgentSpace(agentSpace: string, request: $_model.DeleteAgentSpaceRequest): Promise<$_model.DeleteAgentSpaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAgentSpaceWithOptions(agentSpace, request, headers, runtime);
  }

  /**
   * Deletes a context store.
   * 
   * @param request - DeleteContextStoreRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteContextStoreResponse
   */
  async deleteContextStoreWithOptions(agentSpace: string, contextStoreName: string, request: $_model.DeleteContextStoreRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContextStoreResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteContextStore",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/contextstore/${$dara.URL.percentEncode(contextStoreName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteContextStoreResponse>(await this.callApi(params, req, runtime), new $_model.DeleteContextStoreResponse({}));
  }

  /**
   * Deletes a context store.
   * 
   * @param request - DeleteContextStoreRequest
   * @returns DeleteContextStoreResponse
   */
  async deleteContextStore(agentSpace: string, contextStoreName: string, request: $_model.DeleteContextStoreRequest): Promise<$_model.DeleteContextStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteContextStoreWithOptions(agentSpace, contextStoreName, request, headers, runtime);
  }

  /**
   * Deletes an API key.
   * 
   * @param request - DeleteContextStoreAPIKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteContextStoreAPIKeyResponse
   */
  async deleteContextStoreAPIKeyWithOptions(agentSpace: string, contextStoreName: string, name: string, request: $_model.DeleteContextStoreAPIKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContextStoreAPIKeyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteContextStoreAPIKey",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/contextstore/${$dara.URL.percentEncode(contextStoreName)}/apikey/${$dara.URL.percentEncode(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteContextStoreAPIKeyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteContextStoreAPIKeyResponse({}));
  }

  /**
   * Deletes an API key.
   * 
   * @param request - DeleteContextStoreAPIKeyRequest
   * @returns DeleteContextStoreAPIKeyResponse
   */
  async deleteContextStoreAPIKey(agentSpace: string, contextStoreName: string, name: string, request: $_model.DeleteContextStoreAPIKeyRequest): Promise<$_model.DeleteContextStoreAPIKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteContextStoreAPIKeyWithOptions(agentSpace, contextStoreName, name, request, headers, runtime);
  }

  /**
   * Deletes a dataset.
   * 
   * @param request - DeleteDatasetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasetResponse
   */
  async deleteDatasetWithOptions(agentSpace: string, datasetName: string, request: $_model.DeleteDatasetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDatasetResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataset",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/dataset/${$dara.URL.percentEncode(datasetName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDatasetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDatasetResponse({}));
  }

  /**
   * Deletes a dataset.
   * 
   * @param request - DeleteDatasetRequest
   * @returns DeleteDatasetResponse
   */
  async deleteDataset(agentSpace: string, datasetName: string, request: $_model.DeleteDatasetRequest): Promise<$_model.DeleteDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDatasetWithOptions(agentSpace, datasetName, request, headers, runtime);
  }

  /**
   * Deletes an evaluation run.
   * 
   * @param request - DeleteEvaluationRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEvaluationRunResponse
   */
  async deleteEvaluationRunWithOptions(agentSpace: string, taskId: string, runId: string, request: $_model.DeleteEvaluationRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEvaluationRunResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEvaluationRun",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/api/v1/evaluation-task/${$dara.URL.percentEncode(agentSpace)}/${$dara.URL.percentEncode(taskId)}/run/${$dara.URL.percentEncode(runId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEvaluationRunResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEvaluationRunResponse({}));
  }

  /**
   * Deletes an evaluation run.
   * 
   * @param request - DeleteEvaluationRunRequest
   * @returns DeleteEvaluationRunResponse
   */
  async deleteEvaluationRun(agentSpace: string, taskId: string, runId: string, request: $_model.DeleteEvaluationRunRequest): Promise<$_model.DeleteEvaluationRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEvaluationRunWithOptions(agentSpace, taskId, runId, request, headers, runtime);
  }

  /**
   * Deletes an evaluation task.
   * 
   * @param request - DeleteEvaluationTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEvaluationTaskResponse
   */
  async deleteEvaluationTaskWithOptions(agentSpace: string, taskId: string, request: $_model.DeleteEvaluationTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEvaluationTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEvaluationTask",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/api/v1/evaluation-task/${$dara.URL.percentEncode(agentSpace)}/${$dara.URL.percentEncode(taskId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEvaluationTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEvaluationTaskResponse({}));
  }

  /**
   * Deletes an evaluation task.
   * 
   * @param request - DeleteEvaluationTaskRequest
   * @returns DeleteEvaluationTaskResponse
   */
  async deleteEvaluationTask(agentSpace: string, taskId: string, request: $_model.DeleteEvaluationTaskRequest): Promise<$_model.DeleteEvaluationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEvaluationTaskWithOptions(agentSpace, taskId, request, headers, runtime);
  }

  /**
   * Deletes an evaluator.
   * 
   * @param request - DeleteEvaluatorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEvaluatorResponse
   */
  async deleteEvaluatorWithOptions(agentSpace: string, name: string, request: $_model.DeleteEvaluatorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEvaluatorResponse> {
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
      action: "DeleteEvaluator",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/api/v1/evaluators/${$dara.URL.percentEncode(agentSpace)}/${$dara.URL.percentEncode(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEvaluatorResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEvaluatorResponse({}));
  }

  /**
   * Deletes an evaluator.
   * 
   * @param request - DeleteEvaluatorRequest
   * @returns DeleteEvaluatorResponse
   */
  async deleteEvaluator(agentSpace: string, name: string, request: $_model.DeleteEvaluatorRequest): Promise<$_model.DeleteEvaluatorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEvaluatorWithOptions(agentSpace, name, request, headers, runtime);
  }

  /**
   * Deletes an evaluator skill.
   * 
   * @param request - DeleteEvaluatorSkillRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEvaluatorSkillResponse
   */
  async deleteEvaluatorSkillWithOptions(name: string, skillName: string, request: $_model.DeleteEvaluatorSkillRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEvaluatorSkillResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentSpace)) {
      query["agentSpace"] = request.agentSpace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEvaluatorSkill",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/api/v1/evaluator/${$dara.URL.percentEncode(name)}/skill/${$dara.URL.percentEncode(skillName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEvaluatorSkillResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEvaluatorSkillResponse({}));
  }

  /**
   * Deletes an evaluator skill.
   * 
   * @param request - DeleteEvaluatorSkillRequest
   * @returns DeleteEvaluatorSkillResponse
   */
  async deleteEvaluatorSkill(name: string, skillName: string, request: $_model.DeleteEvaluatorSkillRequest): Promise<$_model.DeleteEvaluatorSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEvaluatorSkillWithOptions(name, skillName, request, headers, runtime);
  }

  /**
   * Deletes a pipeline.
   * 
   * @param request - DeletePipelineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePipelineResponse
   */
  async deletePipelineWithOptions(agentSpace: string, pipelineName: string, request: $_model.DeletePipelineRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePipelineResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePipeline",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/pipeline/${$dara.URL.percentEncode(pipelineName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePipelineResponse>(await this.callApi(params, req, runtime), new $_model.DeletePipelineResponse({}));
  }

  /**
   * Deletes a pipeline.
   * 
   * @param request - DeletePipelineRequest
   * @returns DeletePipelineResponse
   */
  async deletePipeline(agentSpace: string, pipelineName: string, request: $_model.DeletePipelineRequest): Promise<$_model.DeletePipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePipelineWithOptions(agentSpace, pipelineName, request, headers, runtime);
  }

  /**
   * Queries regions.
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
      action: "DescribeRegions",
      version: "2026-05-20",
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
   * Queries regions.
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
   * Executes a query statement.
   * 
   * @param request - ExecuteQueryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteQueryResponse
   */
  async executeQueryWithOptions(agentSpace: string, datasetName: string, request: $_model.ExecuteQueryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteQueryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.from)) {
      body["from"] = request.from;
    }

    if (!$dara.isNull(request.length)) {
      body["length"] = request.length;
    }

    if (!$dara.isNull(request.maxOutputLength)) {
      body["maxOutputLength"] = request.maxOutputLength;
    }

    if (!$dara.isNull(request.offset)) {
      body["offset"] = request.offset;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    if (!$dara.isNull(request.to)) {
      body["to"] = request.to;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteQuery",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/dataset/${$dara.URL.percentEncode(datasetName)}/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteQueryResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteQueryResponse({}));
  }

  /**
   * Executes a query statement.
   * 
   * @param request - ExecuteQueryRequest
   * @returns ExecuteQueryResponse
   */
  async executeQuery(agentSpace: string, datasetName: string, request: $_model.ExecuteQueryRequest): Promise<$_model.ExecuteQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeQueryWithOptions(agentSpace, datasetName, request, headers, runtime);
  }

  /**
   * Queries an AgentSpace.
   * 
   * @param request - GetAgentSpaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentSpaceResponse
   */
  async getAgentSpaceWithOptions(agentSpace: string, request: $_model.GetAgentSpaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentSpaceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentSpace",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentSpaceResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentSpaceResponse({}));
  }

  /**
   * Queries an AgentSpace.
   * 
   * @param request - GetAgentSpaceRequest
   * @returns GetAgentSpaceResponse
   */
  async getAgentSpace(agentSpace: string, request: $_model.GetAgentSpaceRequest): Promise<$_model.GetAgentSpaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAgentSpaceWithOptions(agentSpace, request, headers, runtime);
  }

  /**
   * Queries a context store.
   * 
   * @param request - GetContextStoreRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContextStoreResponse
   */
  async getContextStoreWithOptions(agentSpace: string, contextStoreName: string, request: $_model.GetContextStoreRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetContextStoreResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetContextStore",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/contextstore/${$dara.URL.percentEncode(contextStoreName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetContextStoreResponse>(await this.callApi(params, req, runtime), new $_model.GetContextStoreResponse({}));
  }

  /**
   * Queries a context store.
   * 
   * @param request - GetContextStoreRequest
   * @returns GetContextStoreResponse
   */
  async getContextStore(agentSpace: string, contextStoreName: string, request: $_model.GetContextStoreRequest): Promise<$_model.GetContextStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getContextStoreWithOptions(agentSpace, contextStoreName, request, headers, runtime);
  }

  /**
   * Retrieves an API key.
   * 
   * @param request - GetContextStoreAPIKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContextStoreAPIKeyResponse
   */
  async getContextStoreAPIKeyWithOptions(agentSpace: string, contextStoreName: string, name: string, request: $_model.GetContextStoreAPIKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetContextStoreAPIKeyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetContextStoreAPIKey",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/contextstore/${$dara.URL.percentEncode(contextStoreName)}/apikey/${$dara.URL.percentEncode(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetContextStoreAPIKeyResponse>(await this.callApi(params, req, runtime), new $_model.GetContextStoreAPIKeyResponse({}));
  }

  /**
   * Retrieves an API key.
   * 
   * @param request - GetContextStoreAPIKeyRequest
   * @returns GetContextStoreAPIKeyResponse
   */
  async getContextStoreAPIKey(agentSpace: string, contextStoreName: string, name: string, request: $_model.GetContextStoreAPIKeyRequest): Promise<$_model.GetContextStoreAPIKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getContextStoreAPIKeyWithOptions(agentSpace, contextStoreName, name, request, headers, runtime);
  }

  /**
   * Queries a dataset.
   * 
   * @param request - GetDatasetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatasetResponse
   */
  async getDatasetWithOptions(agentSpace: string, datasetName: string, request: $_model.GetDatasetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDatasetResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataset",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/dataset/${$dara.URL.percentEncode(datasetName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDatasetResponse>(await this.callApi(params, req, runtime), new $_model.GetDatasetResponse({}));
  }

  /**
   * Queries a dataset.
   * 
   * @param request - GetDatasetRequest
   * @returns GetDatasetResponse
   */
  async getDataset(agentSpace: string, datasetName: string, request: $_model.GetDatasetRequest): Promise<$_model.GetDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatasetWithOptions(agentSpace, datasetName, request, headers, runtime);
  }

  /**
   * Retrieves the details of an evaluation run.
   * 
   * @param request - GetEvaluationRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEvaluationRunResponse
   */
  async getEvaluationRunWithOptions(agentSpace: string, taskId: string, runId: string, request: $_model.GetEvaluationRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEvaluationRunResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEvaluationRun",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/api/v1/evaluation-task/${$dara.URL.percentEncode(agentSpace)}/${$dara.URL.percentEncode(taskId)}/run/${$dara.URL.percentEncode(runId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEvaluationRunResponse>(await this.callApi(params, req, runtime), new $_model.GetEvaluationRunResponse({}));
  }

  /**
   * Retrieves the details of an evaluation run.
   * 
   * @param request - GetEvaluationRunRequest
   * @returns GetEvaluationRunResponse
   */
  async getEvaluationRun(agentSpace: string, taskId: string, runId: string, request: $_model.GetEvaluationRunRequest): Promise<$_model.GetEvaluationRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEvaluationRunWithOptions(agentSpace, taskId, runId, request, headers, runtime);
  }

  /**
   * Retrieves the details of an evaluation task.
   * 
   * @param request - GetEvaluationTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEvaluationTaskResponse
   */
  async getEvaluationTaskWithOptions(agentSpace: string, taskId: string, request: $_model.GetEvaluationTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEvaluationTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEvaluationTask",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/api/v1/evaluation-task/${$dara.URL.percentEncode(agentSpace)}/${$dara.URL.percentEncode(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEvaluationTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetEvaluationTaskResponse({}));
  }

  /**
   * Retrieves the details of an evaluation task.
   * 
   * @param request - GetEvaluationTaskRequest
   * @returns GetEvaluationTaskResponse
   */
  async getEvaluationTask(agentSpace: string, taskId: string, request: $_model.GetEvaluationTaskRequest): Promise<$_model.GetEvaluationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEvaluationTaskWithOptions(agentSpace, taskId, request, headers, runtime);
  }

  /**
   * Retrieves the details of an evaluator.
   * 
   * @param request - GetEvaluatorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEvaluatorResponse
   */
  async getEvaluatorWithOptions(agentSpace: string, name: string, request: $_model.GetEvaluatorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEvaluatorResponse> {
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
      action: "GetEvaluator",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/api/v1/evaluators/${$dara.URL.percentEncode(agentSpace)}/${$dara.URL.percentEncode(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEvaluatorResponse>(await this.callApi(params, req, runtime), new $_model.GetEvaluatorResponse({}));
  }

  /**
   * Retrieves the details of an evaluator.
   * 
   * @param request - GetEvaluatorRequest
   * @returns GetEvaluatorResponse
   */
  async getEvaluator(agentSpace: string, name: string, request: $_model.GetEvaluatorRequest): Promise<$_model.GetEvaluatorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEvaluatorWithOptions(agentSpace, name, request, headers, runtime);
  }

  /**
   * Retrieves the details of an evaluator skill.
   * 
   * @param request - GetEvaluatorSkillRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEvaluatorSkillResponse
   */
  async getEvaluatorSkillWithOptions(name: string, skillName: string, request: $_model.GetEvaluatorSkillRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEvaluatorSkillResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentSpace)) {
      query["agentSpace"] = request.agentSpace;
    }

    if (!$dara.isNull(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEvaluatorSkill",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/api/v1/evaluator/${$dara.URL.percentEncode(name)}/skill/${$dara.URL.percentEncode(skillName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEvaluatorSkillResponse>(await this.callApi(params, req, runtime), new $_model.GetEvaluatorSkillResponse({}));
  }

  /**
   * Retrieves the details of an evaluator skill.
   * 
   * @param request - GetEvaluatorSkillRequest
   * @returns GetEvaluatorSkillResponse
   */
  async getEvaluatorSkill(name: string, skillName: string, request: $_model.GetEvaluatorSkillRequest): Promise<$_model.GetEvaluatorSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEvaluatorSkillWithOptions(name, skillName, request, headers, runtime);
  }

  /**
   * Queries a CI/CD pipeline.
   * 
   * @param request - GetPipelineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPipelineResponse
   */
  async getPipelineWithOptions(agentSpace: string, pipelineName: string, request: $_model.GetPipelineRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPipelineResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPipeline",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/pipeline/${$dara.URL.percentEncode(pipelineName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPipelineResponse>(await this.callApi(params, req, runtime), new $_model.GetPipelineResponse({}));
  }

  /**
   * Queries a CI/CD pipeline.
   * 
   * @param request - GetPipelineRequest
   * @returns GetPipelineResponse
   */
  async getPipeline(agentSpace: string, pipelineName: string, request: $_model.GetPipelineRequest): Promise<$_model.GetPipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPipelineWithOptions(agentSpace, pipelineName, request, headers, runtime);
  }

  /**
   * Queries the details of a single pipeline run.
   * 
   * @param request - GetPipelineRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPipelineRunResponse
   */
  async getPipelineRunWithOptions(agentSpace: string, pipelineName: string, runId: string, request: $_model.GetPipelineRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPipelineRunResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPipelineRun",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/pipeline/${$dara.URL.percentEncode(pipelineName)}/runs/${$dara.URL.percentEncode(runId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPipelineRunResponse>(await this.callApi(params, req, runtime), new $_model.GetPipelineRunResponse({}));
  }

  /**
   * Queries the details of a single pipeline run.
   * 
   * @param request - GetPipelineRunRequest
   * @returns GetPipelineRunResponse
   */
  async getPipelineRun(agentSpace: string, pipelineName: string, runId: string, request: $_model.GetPipelineRunRequest): Promise<$_model.GetPipelineRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPipelineRunWithOptions(agentSpace, pipelineName, runId, request, headers, runtime);
  }

  /**
   * Queries pipeline run statistics.
   * 
   * @param request - GetPipelineStatsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPipelineStatsResponse
   */
  async getPipelineStatsWithOptions(agentSpace: string, pipelineName: string, request: $_model.GetPipelineStatsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPipelineStatsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.granularity)) {
      query["granularity"] = request.granularity;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPipelineStats",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/pipeline/${$dara.URL.percentEncode(pipelineName)}/stats`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPipelineStatsResponse>(await this.callApi(params, req, runtime), new $_model.GetPipelineStatsResponse({}));
  }

  /**
   * Queries pipeline run statistics.
   * 
   * @param request - GetPipelineStatsRequest
   * @returns GetPipelineStatsResponse
   */
  async getPipelineStats(agentSpace: string, pipelineName: string, request: $_model.GetPipelineStatsRequest): Promise<$_model.GetPipelineStatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPipelineStatsWithOptions(agentSpace, pipelineName, request, headers, runtime);
  }

  /**
   * Queries a list of AgentSpaces.
   * 
   * @param request - ListAgentSpacesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentSpacesResponse
   */
  async listAgentSpacesWithOptions(request: $_model.ListAgentSpacesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentSpacesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentSpace)) {
      query["agentSpace"] = request.agentSpace;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAgentSpaces",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAgentSpacesResponse>(await this.callApi(params, req, runtime), new $_model.ListAgentSpacesResponse({}));
  }

  /**
   * Queries a list of AgentSpaces.
   * 
   * @param request - ListAgentSpacesRequest
   * @returns ListAgentSpacesResponse
   */
  async listAgentSpaces(request: $_model.ListAgentSpacesRequest): Promise<$_model.ListAgentSpacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAgentSpacesWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of API keys.
   * 
   * @param request - ListContextStoreAPIKeysRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListContextStoreAPIKeysResponse
   */
  async listContextStoreAPIKeysWithOptions(agentSpace: string, contextStoreName: string, request: $_model.ListContextStoreAPIKeysRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextStoreAPIKeysResponse> {
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
      action: "ListContextStoreAPIKeys",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/contextstore/${$dara.URL.percentEncode(contextStoreName)}/apikey`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListContextStoreAPIKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListContextStoreAPIKeysResponse({}));
  }

  /**
   * Retrieves a list of API keys.
   * 
   * @param request - ListContextStoreAPIKeysRequest
   * @returns ListContextStoreAPIKeysResponse
   */
  async listContextStoreAPIKeys(agentSpace: string, contextStoreName: string, request: $_model.ListContextStoreAPIKeysRequest): Promise<$_model.ListContextStoreAPIKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listContextStoreAPIKeysWithOptions(agentSpace, contextStoreName, request, headers, runtime);
  }

  /**
   * Queries a list of context stores.
   * 
   * @param request - ListContextStoresRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListContextStoresResponse
   */
  async listContextStoresWithOptions(agentSpace: string, request: $_model.ListContextStoresRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextStoresResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contextStoreName)) {
      query["contextStoreName"] = request.contextStoreName;
    }

    if (!$dara.isNull(request.contextType)) {
      query["contextType"] = request.contextType;
    }

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
      action: "ListContextStores",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/contextstore`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListContextStoresResponse>(await this.callApi(params, req, runtime), new $_model.ListContextStoresResponse({}));
  }

  /**
   * Queries a list of context stores.
   * 
   * @param request - ListContextStoresRequest
   * @returns ListContextStoresResponse
   */
  async listContextStores(agentSpace: string, request: $_model.ListContextStoresRequest): Promise<$_model.ListContextStoresResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listContextStoresWithOptions(agentSpace, request, headers, runtime);
  }

  /**
   * Queries a list of datasets.
   * 
   * @param request - ListDatasetsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatasetsResponse
   */
  async listDatasetsWithOptions(agentSpace: string, request: $_model.ListDatasetsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDatasetsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetName)) {
      query["datasetName"] = request.datasetName;
    }

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
      action: "ListDatasets",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/dataset`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDatasetsResponse>(await this.callApi(params, req, runtime), new $_model.ListDatasetsResponse({}));
  }

  /**
   * Queries a list of datasets.
   * 
   * @param request - ListDatasetsRequest
   * @returns ListDatasetsResponse
   */
  async listDatasets(agentSpace: string, request: $_model.ListDatasetsRequest): Promise<$_model.ListDatasetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDatasetsWithOptions(agentSpace, request, headers, runtime);
  }

  /**
   * Queries the list of evaluation runs.
   * 
   * @param request - ListEvaluationRunsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEvaluationRunsResponse
   */
  async listEvaluationRunsWithOptions(agentSpace: string, taskId: string, request: $_model.ListEvaluationRunsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListEvaluationRunsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.runType)) {
      query["runType"] = request.runType;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEvaluationRuns",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/api/v1/evaluation-task/${$dara.URL.percentEncode(agentSpace)}/${$dara.URL.percentEncode(taskId)}/runs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEvaluationRunsResponse>(await this.callApi(params, req, runtime), new $_model.ListEvaluationRunsResponse({}));
  }

  /**
   * Queries the list of evaluation runs.
   * 
   * @param request - ListEvaluationRunsRequest
   * @returns ListEvaluationRunsResponse
   */
  async listEvaluationRuns(agentSpace: string, taskId: string, request: $_model.ListEvaluationRunsRequest): Promise<$_model.ListEvaluationRunsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEvaluationRunsWithOptions(agentSpace, taskId, request, headers, runtime);
  }

  /**
   * Queries a list of evaluation tasks.
   * 
   * @param request - ListEvaluationTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEvaluationTasksResponse
   */
  async listEvaluationTasksWithOptions(request: $_model.ListEvaluationTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListEvaluationTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentSpace)) {
      query["agentSpace"] = request.agentSpace;
    }

    if (!$dara.isNull(request.channel)) {
      query["channel"] = request.channel;
    }

    if (!$dara.isNull(request.dataType)) {
      query["dataType"] = request.dataType;
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

    if (!$dara.isNull(request.taskMode)) {
      query["taskMode"] = request.taskMode;
    }

    if (!$dara.isNull(request.taskName)) {
      query["taskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEvaluationTasks",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/api/v1/evaluation-tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEvaluationTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListEvaluationTasksResponse({}));
  }

  /**
   * Queries a list of evaluation tasks.
   * 
   * @param request - ListEvaluationTasksRequest
   * @returns ListEvaluationTasksResponse
   */
  async listEvaluationTasks(request: $_model.ListEvaluationTasksRequest): Promise<$_model.ListEvaluationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEvaluationTasksWithOptions(request, headers, runtime);
  }

  /**
   * Queries the skill list of an evaluator.
   * 
   * @param request - ListEvaluatorSkillsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEvaluatorSkillsResponse
   */
  async listEvaluatorSkillsWithOptions(name: string, request: $_model.ListEvaluatorSkillsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListEvaluatorSkillsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentSpace)) {
      query["agentSpace"] = request.agentSpace;
    }

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
      action: "ListEvaluatorSkills",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/api/v1/evaluator/${$dara.URL.percentEncode(name)}/skills`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEvaluatorSkillsResponse>(await this.callApi(params, req, runtime), new $_model.ListEvaluatorSkillsResponse({}));
  }

  /**
   * Queries the skill list of an evaluator.
   * 
   * @param request - ListEvaluatorSkillsRequest
   * @returns ListEvaluatorSkillsResponse
   */
  async listEvaluatorSkills(name: string, request: $_model.ListEvaluatorSkillsRequest): Promise<$_model.ListEvaluatorSkillsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEvaluatorSkillsWithOptions(name, request, headers, runtime);
  }

  /**
   * Queries a list of evaluators.
   * 
   * @param request - ListEvaluatorsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEvaluatorsResponse
   */
  async listEvaluatorsWithOptions(request: $_model.ListEvaluatorsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListEvaluatorsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentSpace)) {
      query["agentSpace"] = request.agentSpace;
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

    if (!$dara.isNull(request.source)) {
      query["source"] = request.source;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEvaluators",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/api/v1/evaluators`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEvaluatorsResponse>(await this.callApi(params, req, runtime), new $_model.ListEvaluatorsResponse({}));
  }

  /**
   * Queries a list of evaluators.
   * 
   * @param request - ListEvaluatorsRequest
   * @returns ListEvaluatorsResponse
   */
  async listEvaluators(request: $_model.ListEvaluatorsRequest): Promise<$_model.ListEvaluatorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEvaluatorsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the execution history list of a pipeline.
   * 
   * @param request - ListPipelineRunsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPipelineRunsResponse
   */
  async listPipelineRunsWithOptions(agentSpace: string, pipelineName: string, request: $_model.ListPipelineRunsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPipelineRunsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.triggerType)) {
      query["triggerType"] = request.triggerType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPipelineRuns",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/pipeline/${$dara.URL.percentEncode(pipelineName)}/runs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPipelineRunsResponse>(await this.callApi(params, req, runtime), new $_model.ListPipelineRunsResponse({}));
  }

  /**
   * Queries the execution history list of a pipeline.
   * 
   * @param request - ListPipelineRunsRequest
   * @returns ListPipelineRunsResponse
   */
  async listPipelineRuns(agentSpace: string, pipelineName: string, request: $_model.ListPipelineRunsRequest): Promise<$_model.ListPipelineRunsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelineRunsWithOptions(agentSpace, pipelineName, request, headers, runtime);
  }

  /**
   * Lists CI/CD pipelines.
   * 
   * @param request - ListPipelinesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPipelinesResponse
   */
  async listPipelinesWithOptions(agentSpace: string, request: $_model.ListPipelinesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPipelinesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pipelineName)) {
      query["pipelineName"] = request.pipelineName;
    }

    if (!$dara.isNull(request.scheduleStatus)) {
      query["scheduleStatus"] = request.scheduleStatus;
    }

    if (!$dara.isNull(request.scheduleType)) {
      query["scheduleType"] = request.scheduleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPipelines",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/pipeline`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPipelinesResponse>(await this.callApi(params, req, runtime), new $_model.ListPipelinesResponse({}));
  }

  /**
   * Lists CI/CD pipelines.
   * 
   * @param request - ListPipelinesRequest
   * @returns ListPipelinesResponse
   */
  async listPipelines(agentSpace: string, request: $_model.ListPipelinesRequest): Promise<$_model.ListPipelinesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelinesWithOptions(agentSpace, request, headers, runtime);
  }

  /**
   * Pauses a pipeline.
   * 
   * @param request - PausePipelineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PausePipelineResponse
   */
  async pausePipelineWithOptions(agentSpace: string, pipelineName: string, request: $_model.PausePipelineRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PausePipelineResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.reason)) {
      body["reason"] = request.reason;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PausePipeline",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/pipeline/${$dara.URL.percentEncode(pipelineName)}/pause`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PausePipelineResponse>(await this.callApi(params, req, runtime), new $_model.PausePipelineResponse({}));
  }

  /**
   * Pauses a pipeline.
   * 
   * @param request - PausePipelineRequest
   * @returns PausePipelineResponse
   */
  async pausePipeline(agentSpace: string, pipelineName: string, request: $_model.PausePipelineRequest): Promise<$_model.PausePipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pausePipelineWithOptions(agentSpace, pipelineName, request, headers, runtime);
  }

  /**
   * Resumes a pipeline.
   * 
   * @param request - ResumePipelineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumePipelineResponse
   */
  async resumePipelineWithOptions(agentSpace: string, pipelineName: string, request: $_model.ResumePipelineRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ResumePipelineResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumePipeline",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/pipeline/${$dara.URL.percentEncode(pipelineName)}/resume`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumePipelineResponse>(await this.callApi(params, req, runtime), new $_model.ResumePipelineResponse({}));
  }

  /**
   * Resumes a pipeline.
   * 
   * @param request - ResumePipelineRequest
   * @returns ResumePipelineResponse
   */
  async resumePipeline(agentSpace: string, pipelineName: string, request: $_model.ResumePipelineRequest): Promise<$_model.ResumePipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumePipelineWithOptions(agentSpace, pipelineName, request, headers, runtime);
  }

  /**
   * Manually triggers a pipeline execution.
   * 
   * @param request - RunPipelineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunPipelineResponse
   */
  async runPipelineWithOptions(agentSpace: string, pipelineName: string, request: $_model.RunPipelineRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunPipelineResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fromTime)) {
      body["fromTime"] = request.fromTime;
    }

    if (!$dara.isNull(request.output)) {
      body["output"] = request.output;
    }

    if (!$dara.isNull(request.toTime)) {
      body["toTime"] = request.toTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunPipeline",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/pipeline/${$dara.URL.percentEncode(pipelineName)}/run`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunPipelineResponse>(await this.callApi(params, req, runtime), new $_model.RunPipelineResponse({}));
  }

  /**
   * Manually triggers a pipeline execution.
   * 
   * @param request - RunPipelineRequest
   * @returns RunPipelineResponse
   */
  async runPipeline(agentSpace: string, pipelineName: string, request: $_model.RunPipelineRequest): Promise<$_model.RunPipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runPipelineWithOptions(agentSpace, pipelineName, request, headers, runtime);
  }

  /**
   * Searches contexts.
   * 
   * @param request - SearchContextRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchContextResponse
   */
  async searchContextWithOptions(agentSpace: string, contextStoreName: string, request: $_model.SearchContextRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SearchContextResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      body["filter"] = request.filter;
    }

    if (!$dara.isNull(request.formatted)) {
      body["formatted"] = request.formatted;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    if (!$dara.isNull(request.retrievalOption)) {
      body["retrievalOption"] = request.retrievalOption;
    }

    if (!$dara.isNull(request.threshold)) {
      body["threshold"] = request.threshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchContext",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/contextstore/${$dara.URL.percentEncode(contextStoreName)}/context/search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchContextResponse>(await this.callApi(params, req, runtime), new $_model.SearchContextResponse({}));
  }

  /**
   * Searches contexts.
   * 
   * @param request - SearchContextRequest
   * @returns SearchContextResponse
   */
  async searchContext(agentSpace: string, contextStoreName: string, request: $_model.SearchContextRequest): Promise<$_model.SearchContextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchContextWithOptions(agentSpace, contextStoreName, request, headers, runtime);
  }

  /**
   * Stops a pipeline.
   * 
   * @param request - TerminatePipelineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TerminatePipelineResponse
   */
  async terminatePipelineWithOptions(agentSpace: string, pipelineName: string, request: $_model.TerminatePipelineRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TerminatePipelineResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.reason)) {
      body["reason"] = request.reason;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TerminatePipeline",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/pipeline/${$dara.URL.percentEncode(pipelineName)}/terminate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TerminatePipelineResponse>(await this.callApi(params, req, runtime), new $_model.TerminatePipelineResponse({}));
  }

  /**
   * Stops a pipeline.
   * 
   * @param request - TerminatePipelineRequest
   * @returns TerminatePipelineResponse
   */
  async terminatePipeline(agentSpace: string, pipelineName: string, request: $_model.TerminatePipelineRequest): Promise<$_model.TerminatePipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.terminatePipelineWithOptions(agentSpace, pipelineName, request, headers, runtime);
  }

  /**
   * Updates an AgentSpace.
   * 
   * @param request - UpdateAgentSpaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAgentSpaceResponse
   */
  async updateAgentSpaceWithOptions(agentSpace: string, request: $_model.UpdateAgentSpaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAgentSpaceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cmsWorkspace)) {
      body["cmsWorkspace"] = request.cmsWorkspace;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAgentSpace",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAgentSpaceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAgentSpaceResponse({}));
  }

  /**
   * Updates an AgentSpace.
   * 
   * @param request - UpdateAgentSpaceRequest
   * @returns UpdateAgentSpaceResponse
   */
  async updateAgentSpace(agentSpace: string, request: $_model.UpdateAgentSpaceRequest): Promise<$_model.UpdateAgentSpaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAgentSpaceWithOptions(agentSpace, request, headers, runtime);
  }

  /**
   * Modifies the configuration of a context store.
   * 
   * @param request - UpdateContextStoreRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateContextStoreResponse
   */
  async updateContextStoreWithOptions(agentSpace: string, contextStoreName: string, request: $_model.UpdateContextStoreRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateContextStoreResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.contextType)) {
      body["contextType"] = request.contextType;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateContextStore",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/contextstore/${$dara.URL.percentEncode(contextStoreName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateContextStoreResponse>(await this.callApi(params, req, runtime), new $_model.UpdateContextStoreResponse({}));
  }

  /**
   * Modifies the configuration of a context store.
   * 
   * @param request - UpdateContextStoreRequest
   * @returns UpdateContextStoreResponse
   */
  async updateContextStore(agentSpace: string, contextStoreName: string, request: $_model.UpdateContextStoreRequest): Promise<$_model.UpdateContextStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateContextStoreWithOptions(agentSpace, contextStoreName, request, headers, runtime);
  }

  /**
   * Updates a dataset.
   * 
   * @param request - UpdateDatasetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDatasetResponse
   */
  async updateDatasetWithOptions(agentSpace: string, datasetName: string, request: $_model.UpdateDatasetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDatasetResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.schema)) {
      body["schema"] = request.schema;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataset",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/dataset/${$dara.URL.percentEncode(datasetName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDatasetResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDatasetResponse({}));
  }

  /**
   * Updates a dataset.
   * 
   * @param request - UpdateDatasetRequest
   * @returns UpdateDatasetResponse
   */
  async updateDataset(agentSpace: string, datasetName: string, request: $_model.UpdateDatasetRequest): Promise<$_model.UpdateDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDatasetWithOptions(agentSpace, datasetName, request, headers, runtime);
  }

  /**
   * Updates an evaluation run.
   * 
   * @param request - UpdateEvaluationRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEvaluationRunResponse
   */
  async updateEvaluationRunWithOptions(agentSpace: string, taskId: string, runId: string, request: $_model.UpdateEvaluationRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEvaluationRunResponse> {
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
      action: "UpdateEvaluationRun",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/api/v1/evaluation-task/${$dara.URL.percentEncode(agentSpace)}/${$dara.URL.percentEncode(taskId)}/run/${$dara.URL.percentEncode(runId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEvaluationRunResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEvaluationRunResponse({}));
  }

  /**
   * Updates an evaluation run.
   * 
   * @param request - UpdateEvaluationRunRequest
   * @returns UpdateEvaluationRunResponse
   */
  async updateEvaluationRun(agentSpace: string, taskId: string, runId: string, request: $_model.UpdateEvaluationRunRequest): Promise<$_model.UpdateEvaluationRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateEvaluationRunWithOptions(agentSpace, taskId, runId, request, headers, runtime);
  }

  /**
   * Updates an evaluation task.
   * 
   * @param request - UpdateEvaluationTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEvaluationTaskResponse
   */
  async updateEvaluationTaskWithOptions(agentSpace: string, taskId: string, request: $_model.UpdateEvaluationTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEvaluationTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.dataFilter)) {
      body["dataFilter"] = request.dataFilter;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.evaluators)) {
      body["evaluators"] = request.evaluators;
    }

    if (!$dara.isNull(request.runStrategies)) {
      body["runStrategies"] = request.runStrategies;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEvaluationTask",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/api/v1/evaluation-task/${$dara.URL.percentEncode(agentSpace)}/${$dara.URL.percentEncode(taskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEvaluationTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEvaluationTaskResponse({}));
  }

  /**
   * Updates an evaluation task.
   * 
   * @param request - UpdateEvaluationTaskRequest
   * @returns UpdateEvaluationTaskResponse
   */
  async updateEvaluationTask(agentSpace: string, taskId: string, request: $_model.UpdateEvaluationTaskRequest): Promise<$_model.UpdateEvaluationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateEvaluationTaskWithOptions(agentSpace, taskId, request, headers, runtime);
  }

  /**
   * Updates an evaluator.
   * 
   * @param request - UpdateEvaluatorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEvaluatorResponse
   */
  async updateEvaluatorWithOptions(agentSpace: string, name: string, request: $_model.UpdateEvaluatorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEvaluatorResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.annotations)) {
      body["annotations"] = request.annotations;
    }

    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.properties)) {
      body["properties"] = request.properties;
    }

    if (!$dara.isNull(request.version)) {
      body["version"] = request.version;
    }

    if (!$dara.isNull(request.versionDescription)) {
      body["versionDescription"] = request.versionDescription;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEvaluator",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/api/v1/evaluators/${$dara.URL.percentEncode(agentSpace)}/${$dara.URL.percentEncode(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEvaluatorResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEvaluatorResponse({}));
  }

  /**
   * Updates an evaluator.
   * 
   * @param request - UpdateEvaluatorRequest
   * @returns UpdateEvaluatorResponse
   */
  async updateEvaluator(agentSpace: string, name: string, request: $_model.UpdateEvaluatorRequest): Promise<$_model.UpdateEvaluatorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateEvaluatorWithOptions(agentSpace, name, request, headers, runtime);
  }

  /**
   * Updates an evaluator skill.
   * 
   * @param request - UpdateEvaluatorSkillRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEvaluatorSkillResponse
   */
  async updateEvaluatorSkillWithOptions(name: string, skillName: string, request: $_model.UpdateEvaluatorSkillRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEvaluatorSkillResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentSpace)) {
      query["agentSpace"] = request.agentSpace;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

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

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEvaluatorSkill",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/api/v1/evaluator/${$dara.URL.percentEncode(name)}/skill/${$dara.URL.percentEncode(skillName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEvaluatorSkillResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEvaluatorSkillResponse({}));
  }

  /**
   * Updates an evaluator skill.
   * 
   * @param request - UpdateEvaluatorSkillRequest
   * @returns UpdateEvaluatorSkillResponse
   */
  async updateEvaluatorSkill(name: string, skillName: string, request: $_model.UpdateEvaluatorSkillRequest): Promise<$_model.UpdateEvaluatorSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateEvaluatorSkillWithOptions(name, skillName, request, headers, runtime);
  }

  /**
   * Updates a pipeline.
   * 
   * @param request - UpdatePipelineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePipelineResponse
   */
  async updatePipelineWithOptions(agentSpace: string, pipelineName: string, request: $_model.UpdatePipelineRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePipelineResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.executePolicy)) {
      body["executePolicy"] = request.executePolicy;
    }

    if (!$dara.isNull(request.pipeline)) {
      body["pipeline"] = request.pipeline;
    }

    if (!$dara.isNull(request.sink)) {
      body["sink"] = request.sink;
    }

    if (!$dara.isNull(request.source)) {
      body["source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePipeline",
      version: "2026-05-20",
      protocol: "HTTPS",
      pathname: `/agentspace/${$dara.URL.percentEncode(agentSpace)}/pipeline/${$dara.URL.percentEncode(pipelineName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePipelineResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePipelineResponse({}));
  }

  /**
   * Updates a pipeline.
   * 
   * @param request - UpdatePipelineRequest
   * @returns UpdatePipelineResponse
   */
  async updatePipeline(agentSpace: string, pipelineName: string, request: $_model.UpdatePipelineRequest): Promise<$_model.UpdatePipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePipelineWithOptions(agentSpace, pipelineName, request, headers, runtime);
  }

}
